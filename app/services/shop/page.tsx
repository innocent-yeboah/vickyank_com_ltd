import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShopClient from "@/components/shop/ShopClient";

export const metadata: Metadata = {
  title: "Parts & Equipment Shop",
  description:
    "Order genuine excavator parts and select equipment from VickYank Limited. Pay securely in Ghana Cedis. Enquire if the item is not listed.",
};

const method = [
  {
    title: "Choose what is listed",
    body: "Parts and select equipment we are ready to sell. What you see is what we will fulfil — or we will say it is on order.",
  },
  {
    title: "Pay in Ghana Cedis",
    body: "Checkout through Paystack. No theatre. A reference you can keep.",
  },
  {
    title: "We send it, or we source it",
    body: "Ready items leave the desk. If your line is not here, ask — the parts desk still answers.",
  },
] as const;

export default function ShopPage() {
  return (
    <>
      <section className="page-hero bg-navy-cover lg:min-h-[72svh]">
        <Image
          src="/images/spare-parts-inventory.png"
          alt="Hydraulic pumps and excavator spare parts prepared for order"
          fill
          priority
          className="object-cover brightness-[0.68] motion-safe:animate-cinematic-still"
          sizes="100vw"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy-cover via-navy-cover/55 to-navy-cover/20"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gold">The shop</p>
          <h1 className="mt-3 max-w-3xl font-heading text-[2rem] font-medium leading-[1.12] text-white sm:text-5xl lg:text-6xl">
            Order what is ready. Ask for the rest.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Genuine excavator parts and select equipment, paid in Ghana Cedis.
            If the item is not on this list, the desk will still take the
            enquiry.
          </p>
          <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href="#catalogue" className="btn-gold">
              Browse the shop
            </a>
            <Link href="/services/spare-parts#enquire" className="btn-outline-light">
              Ask the desk
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="page-title">How this shop works</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
            A short order room — not a catalogue window that pretends every
            machine part on earth is in a box behind us.
          </p>
          <ol className="mt-14 grid gap-10 sm:grid-cols-3">
            {method.map((step, index) => (
              <li key={step.title}>
                <p className="text-xs tracking-[0.18em] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-heading text-xl text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="catalogue"
        className="border-t border-white/10 bg-navy-darker"
      >
        <ShopClient />
      </section>
    </>
  );
}
