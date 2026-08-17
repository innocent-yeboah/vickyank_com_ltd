"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useCart } from "@/components/shop/CartProvider";
import { formatGhs } from "@/lib/catalog";
import { site } from "@/lib/site";

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
            "Payment could not be started. Contact us on WhatsApp to complete your order."
        );
      }

      // Clear cart after redirect is initiated (success page confirms payment).
      clear();
      window.location.href = data.authorizationUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Checkout failed.");
      setStatus("error");
    }
  }

  if (lines.length === 0 && status !== "loading") {
    return (
      <div className="mx-auto max-w-xl px-4 py-14 text-center sm:px-6 sm:py-24">
        <h1 className="font-heading text-3xl font-bold uppercase text-white">
          Your Cart Is Empty
        </h1>
        <p className="mt-4 text-gray-400">
          Add spare parts or equipment from the shop to continue.
        </p>
        <Link href="/services/shop" className="btn-gold mt-8">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:gap-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold">
          Secure Checkout
        </p>
        <h1 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
          Complete Your Order
        </h1>
        <p className="mt-4 text-gray-400">
          You will be redirected to Paystack to pay securely in Ghana Cedis
          (GHS). Need help?{" "}
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline"
          >
            WhatsApp us
          </a>
          .
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div>
            <label htmlFor="co-name" className="mb-2 block text-sm text-gray-300">
              Full Name *
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
            <label htmlFor="co-email" className="mb-2 block text-sm text-gray-300">
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
            <label htmlFor="co-phone" className="mb-2 block text-sm text-gray-300">
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
              ? "Redirecting to Paystack…"
              : `Pay ${formatGhs(subtotalGhs)}`}
          </button>
        </form>
      </div>

      <aside className="tech-frame h-fit border border-white/10 bg-base-panel p-8">
        <span className="tech-anchor-bl" aria-hidden="true" />
        <span className="tech-anchor-br" aria-hidden="true" />
        <h2 className="font-heading text-xl font-bold uppercase text-white">
          Order Summary
        </h2>
        <ul className="mt-6 space-y-4">
          {lines.map((line) => (
            <li
              key={line.product.id}
              className="flex justify-between gap-4 border-b border-white/10 pb-4 text-sm"
            >
              <span className="text-gray-300">
                {line.product.name} × {line.quantity}
              </span>
              <span className="text-white">
                {formatGhs(line.product.priceGhs * line.quantity)}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex justify-between font-heading text-lg font-bold text-white">
          <span>Total</span>
          <span className="text-gold">{formatGhs(subtotalGhs)}</span>
        </div>
      </aside>
    </div>
  );
}
