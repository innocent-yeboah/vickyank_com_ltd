import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabaseAdmin } from "@/lib/supabase";
import { site } from "@/lib/site";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
  context?: string;
  tradeType?: string;
  quantity?: string;
  vehicle?: string;
  dates?: string;
  machine?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = body.name?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const service = body.service?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !phone || !email || !service || !message) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const record = {
      name,
      phone,
      email,
      service,
      message,
      context: body.context ?? "general",
      trade_type: body.tradeType ?? null,
      quantity: body.quantity ?? null,
      vehicle: body.vehicle ?? null,
      hire_dates: body.dates ?? null,
      machine: body.machine ?? null,
      created_at: new Date().toISOString(),
    };

    const supabase = getSupabaseAdmin();
    if (supabase) {
      const { error } = await supabase.from("inquiries").insert(record);
      if (error) {
        console.error("[contact] Supabase insert failed:", error.message);
      }
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const resend = new Resend(resendKey);
      const from =
        process.env.RESEND_FROM_EMAIL ?? "VickYank Website <onboarding@resend.dev>";
      await resend.emails.send({
        from,
        to: [site.email],
        replyTo: email,
        subject: `[VickYank Enquiry] ${service} — ${name}`,
        text: [
          `Name: ${name}`,
          `Phone: ${phone}`,
          `Email: ${email}`,
          `Service: ${service}`,
          `Context: ${record.context}`,
          body.tradeType ? `Trade type: ${body.tradeType}` : null,
          body.quantity ? `Quantity: ${body.quantity}` : null,
          body.vehicle ? `Vehicle: ${body.vehicle}` : null,
          body.dates ? `Dates: ${body.dates}` : null,
          body.machine ? `Machine/Part: ${body.machine}` : null,
          "",
          "Message:",
          message,
        ]
          .filter(Boolean)
          .join("\n"),
      });
    }

    console.info("[VickYank enquiry]", record);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "Let's try that again together?" },
      { status: 500 }
    );
  }
}
