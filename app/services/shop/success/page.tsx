import type { Metadata } from "next";
import Link from "next/link";
import { CheckIcon } from "@/components/ui/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Payment Successful",
  robots: { index: false, follow: false },
};

export default function ShopSuccessPage({
  searchParams,
}: {
  searchParams: { reference?: string };
}) {
  const reference = searchParams.reference;

  return (
    <section className="flex min-h-[70vh] items-center bg-navy px-4 py-24">
      <div className="mx-auto max-w-xl border border-gold/30 bg-base-panel p-10 text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold">
          <CheckIcon className="h-8 w-8" />
        </span>
        <h1 className="mt-6 font-heading text-3xl font-bold uppercase text-white">
          Payment Received
        </h1>
        <p className="mt-4 text-gray-300">
          Thank you. Our team will confirm your order and arrange fulfilment
          shortly.
        </p>
        {reference && (
          <p className="mt-4 text-sm text-gray-500">
            Reference: <span className="text-gold">{reference}</span>
          </p>
        )}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link href="/services/shop" className="btn-gold">
            Continue Shopping
          </Link>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-light"
          >
            WhatsApp Support
          </a>
        </div>
      </div>
    </section>
  );
}
