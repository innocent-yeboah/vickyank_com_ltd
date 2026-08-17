import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabaseAdmin } from "@/lib/supabase";
import { site } from "@/lib/site";

type NewsletterPayload = {
  name?: string;
  email?: string;
  interests?: string[] | string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as NewsletterPayload;
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim().toLowerCase() ?? "";
    const interests = Array.isArray(body.interests)
      ? body.interests.filter(Boolean).join(", ")
      : body.interests?.trim() ?? "";

    if (!email) {
      return NextResponse.json(
        { error: "Please share an email address so we can send the newsletter." },
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
      name: name || null,
      email,
      interests: interests || null,
      source: "website",
    };

    const supabase = getSupabaseAdmin();
    if (supabase) {
      const { error } = await supabase
        .from("newsletter_subscribers")
        .upsert(record, { onConflict: "email" });
      if (error) {
        console.error("[newsletter] Supabase upsert failed:", error.message);
      }
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const resend = new Resend(resendKey);
      const from =
        process.env.RESEND_FROM_EMAIL ??
        "VickYank Website <onboarding@resend.dev>";

      const notify = await resend.emails.send(
        {
          from,
          to: [site.email],
          replyTo: email,
          subject: `[VickYank Newsletter] New subscriber — ${email}`,
          text: [
            name ? `Name: ${name}` : "Name: (not shared)",
            `Email: ${email}`,
            interests ? `Interests: ${interests}` : "Interests: (not specified)",
          ].join("\n"),
        },
        { idempotencyKey: `newsletter-notify/${email}` }
      );

      if (notify.error) {
        console.error("[newsletter] Notify email failed:", notify.error.message);
      }

      const welcome = await resend.emails.send(
        {
          from,
          to: [email],
          subject: `You are on the ${site.shortName} newsletter`,
          text: [
            name ? `Hello ${name},` : "Hello,",
            "",
            `Thank you for joining the ${site.name} newsletter.`,
            "We will share measured updates on mining, gold trading, equipment, spare parts, and executive mobility — never urgency or pressure.",
            "",
            site.tagline,
            site.website,
          ].join("\n"),
        },
        { idempotencyKey: `newsletter-welcome/${email}` }
      );

      if (welcome.error) {
        console.error("[newsletter] Welcome email failed:", welcome.error.message);
      }
    }

    console.info("[VickYank newsletter]", record);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[newsletter] Unexpected error:", err);
    return NextResponse.json(
      { error: "Let's try that again together?" },
      { status: 500 }
    );
  }
}
