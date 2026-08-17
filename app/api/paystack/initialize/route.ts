import { NextResponse } from "next/server";

type CartItemPayload = {
  id: string;
  name: string;
  quantity: number;
  unitPriceGhs: number;
};

type InitPayload = {
  email: string;
  name: string;
  phone?: string;
  items: CartItemPayload[];
  amountGhs: number;
};

/**
 * Initializes a Paystack transaction (Ghana GHS).
 * Requires PAYSTACK_SECRET_KEY in environment.
 * Flutterwave can be added later via FLW_SECRET_KEY using the same cart payload.
 */
export async function POST(request: Request) {
  try {
    const secret = process.env.PAYSTACK_SECRET_KEY;
    if (!secret) {
      return NextResponse.json(
        {
          error:
            "Payment is not configured yet. Set PAYSTACK_SECRET_KEY or contact us on WhatsApp to complete your order.",
        },
        { status: 503 }
      );
    }

    const body = (await request.json()) as InitPayload;
    const email = body.email?.trim();
    const name = body.name?.trim();
    const amountGhs = Number(body.amountGhs);
    const items = Array.isArray(body.items) ? body.items : [];

    if (!email || !name || !amountGhs || amountGhs < 1 || items.length === 0) {
      return NextResponse.json(
        { error: "Invalid checkout details." },
        { status: 400 }
      );
    }

    const origin = request.headers.get("origin") ?? process.env.NEXT_PUBLIC_SITE_URL ?? "";
    const callbackUrl = `${origin}/services/shop/success`;

    // Paystack expects amount in the smallest currency unit (pesewas for GHS).
    const amountPesewas = Math.round(amountGhs * 100);

    const res = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secret}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount: amountPesewas,
        currency: "GHS",
        callback_url: callbackUrl,
        metadata: {
          customer_name: name,
          customer_phone: body.phone ?? "",
          items: items.map((i) => ({
            id: i.id,
            name: i.name,
            quantity: i.quantity,
            unit_price_ghs: i.unitPriceGhs,
          })),
          company: "VickYank Limited Company",
        },
      }),
    });

    const data = (await res.json()) as {
      status: boolean;
      message?: string;
      data?: { authorization_url: string; reference: string; access_code: string };
    };

    if (!res.ok || !data.status || !data.data) {
      return NextResponse.json(
        { error: data.message ?? "Unable to start payment." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      authorizationUrl: data.data.authorization_url,
      reference: data.data.reference,
    });
  } catch (err) {
    console.error("[paystack/initialize]", err);
    return NextResponse.json(
      { error: "Payment could not be started. Please try again." },
      { status: 500 }
    );
  }
}
