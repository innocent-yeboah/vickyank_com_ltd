import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Payment received",
  robots: { index: false, follow: false },
};

export default function ShopSuccessPage({
  searchParams,
}: {
  searchParams: { reference?: string };
}) {
  const reference = searchParams.reference;

  return (
    <section className="flex min-h-[70vh] items-center bg-navy px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm text-gold">The shop</p>
        <h1 className="mt-3 font-heading text-3xl font-medium text-white sm:text-4xl">
          We have the payment
        </h1>
        <p className="mt-5 text-base leading-relaxed text-white/65">
          Thank you. The desk will confirm the order and arrange fulfilment.
          No rush language — just the next step, in writing.
        </p>
        {reference && (
          <p className="mt-6 text-sm text-white/45">
            Reference: <span className="text-gold">{reference}</span>
          </p>
        )}
        <div className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
          <Link href="/services/shop" className="btn-gold">
            Back to the shop
          </Link>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-light"
          >
            WhatsApp the desk
          </a>
        </div>
      </div>
    </section>
  );
}
