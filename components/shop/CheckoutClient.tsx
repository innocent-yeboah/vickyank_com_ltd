"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useCart } from "@/components/shop/CartProvider";
import { formatGhs } from "@/lib/catalog";
import { site } from "@/lib/site";

const labelClass =
  "mb-1 block text-xs font-medium text-gray-300 sm:mb-2 sm:text-sm";

export default function CheckoutClient() {
  const { lines, subtotalGhs, clear } = useCart();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (lines.length === 0) return;

    setStatus("loading");
    setError("");

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const phone = String(form.get("phone") ?? "");

    try {
      const res = await fetch("/api/paystack/initialize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          amountGhs: subtotalGhs,
          items: lines.map((l) => ({
            id: l.product.id,
            name: l.product.name,
            quantity: l.quantity,
            unitPriceGhs: l.product.priceGhs,
          })),
        }),
      });

      const data = (await res.json()) as {
        authorizationUrl?: string;
        error?: string;
      };

      if (!res.ok || !data.authorizationUrl) {
        throw new Error(
          data.error ??
            "Payment could not be started. WhatsApp the desk and we will finish the order together."
        );
      }

      clear();
      window.location.href = data.authorizationUrl;
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Let's try that again together?"
      );
      setStatus("error");
    }
  }

  if (lines.length === 0 && status !== "loading") {
    return (
      <div className="mx-auto max-w-xl px-4 py-20 text-center sm:px-6 sm:py-28">
        <p className="text-sm text-gold">The shop</p>
        <h1 className="mt-3 font-heading text-3xl font-medium text-white sm:text-4xl">
          Nothing in the order yet
        </h1>
        <p className="mt-4 text-base leading-relaxed text-white/60">
          Choose a part or a piece of equipment, then come back to pay.
        </p>
        <Link href="/services/shop#catalogue" className="btn-gold mt-8">
          Back to the shop
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
      <div>
        <p className="text-sm text-gold">Secure checkout</p>
        <h1 className="mt-3 page-title">Complete the order</h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-white/65">
          You will go to Paystack to pay in Ghana Cedis. Need a person instead?{" "}
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-soft"
          >
            WhatsApp the desk
          </a>
          .
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div>
            <label htmlFor="co-name" className={labelClass}>
              Full name *
            </label>
            <input
              id="co-name"
              name="name"
              required
              className="form-apparatus"
              autoComplete="name"
            />
          </div>
          <div>
            <label htmlFor="co-email" className={labelClass}>
              Email *
            </label>
            <input
              id="co-email"
              name="email"
              type="email"
              required
              className="form-apparatus"
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="co-phone" className={labelClass}>
              Phone *
            </label>
            <input
              id="co-phone"
              name="phone"
              type="tel"
              required
              className="form-apparatus"
              autoComplete="tel"
            />
          </div>

          {error && (
            <p className="text-sm text-red-400" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-gold w-full"
          >
            {status === "loading"
              ? "Going to Paystack…"
              : `Pay ${formatGhs(subtotalGhs)}`}
          </button>
        </form>
      </div>

      <aside className="brochure-card h-fit">
        <h2 className="font-heading text-2xl font-medium text-white">
          Order summary
        </h2>
        <ul className="mt-6 space-y-4">
          {lines.map((line) => (
            <li
              key={line.product.id}
              className="flex justify-between gap-4 border-b border-white/10 pb-4 text-sm"
            >
              <span className="text-white/70">
                {line.product.name} × {line.quantity}
              </span>
              <span className="text-white">
                {formatGhs(line.product.priceGhs * line.quantity)}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex justify-between font-heading text-lg text-white">
          <span>Total</span>
          <span>{formatGhs(subtotalGhs)}</span>
        </div>
      </aside>
    </div>
  );
}
