import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShopClient from "@/components/shop/ShopClient";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Parts & Equipment Shop",
  description:
    "Pre-order genuine excavator parts and select equipment from VickYank Limited. Prices available upon request.",
};

const method = [
  {
    title: "Choose the line",
    body: "Parts and equipment we work with. What you see is what you can pre-order — or we will say if we need to source it.",
  },
  {
    title: "Ask for the number",
    body: "Prices are available upon request. A specialist replies within one business day, plainly.",
  },
  {
    title: "We confirm, then we fulfil",
    body: "No checkout on this page. The desk agrees the item, the time, and the price before anything moves.",
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
            Pre-order what you need. Prices upon request.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Genuine excavator parts and select equipment. Every line is a
            pre-order. A specialist confirms availability and the number.
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
            A short order room. Nothing is sitting in a cart. You ask, we quote,
            then we fulfil.
          </p>
          <ol className="mt-14 grid gap-10 sm:grid-cols-3">
            {method.map((step, index) => (
              <ScrollReveal key={step.title} as="li" delayMs={index * 120}>
                <p className="text-xs tracking-[0.18em] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-heading text-xl text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {step.body}
                </p>
              </ScrollReveal>
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
