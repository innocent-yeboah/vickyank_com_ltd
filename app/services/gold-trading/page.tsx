import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/ui/CtaBanner";
import InquiryForm from "@/components/forms/InquiryForm";
import SectionHeading from "@/components/ui/SectionHeading";
import { CheckIcon, ShieldIcon, GoldIcon, HandshakeIcon } from "@/components/ui/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gold Trading",
  description:
    "Buy and sell raw and refined gold with VickYank Limited — transparent weighing, market-rate valuation, and fully documented transactions in Ghana.",
};

const reasons = [
  {
    icon: ShieldIcon,
    title: "Documented Every Step",
    description:
      "Weighing, assay notes, and settlement records issued for every trade — built for serious counterparties.",
  },
  {
    icon: GoldIcon,
    title: "Market-Aligned Pricing",
    description:
      "Valuations referenced against prevailing market rates so buyers and sellers know exactly where they stand.",
  },
  {
    icon: HandshakeIcon,
    title: "Discreet & Secure",
    description:
      "Private handling for high-value transactions with clear chain-of-custody from intake to settlement.",
  },
];

const steps = [
  {
    step: "01",
    title: "Enquiry",
    detail: "Tell us whether you are buying or selling, approximate quantity, and preferred timeline.",
  },
  {
    step: "02",
    title: "Verification & Weighing",
    detail: "Gold is professionally weighed and assessed with transparent procedures you can witness.",
  },
  {
    step: "03",
    title: "Valuation",
    detail: "You receive a clear valuation against current market conditions before any commitment.",
  },
  {
    step: "04",
    title: "Settlement",
    detail: "Prompt, secure settlement with full documentation for your records and compliance needs.",
  },
];

export default function GoldTradingPage() {
  return (
    <>
      <section className="page-hero bg-navy-darker">
        <Image
          src="/images/gold-bars.jpg"
          alt="Refined 999.9 fine gold bars"
          fill
          priority
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="kicker">Trading Desk</p>
          <h1 className="page-title mt-3">Gold Trading — Trusted &amp; Transparent</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            In gold, reputation is collateral. Buy and sell raw and refined gold with
            confidence. {site.tagline}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#enquire" className="btn-gold">
              Start a Trade Enquiry
            </a>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light"
            >
              WhatsApp Trading Desk
            </a>
          </div>
        </div>
      </section>

      <section className="bg-navy-dark py-0">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {[
            {
              src: "/images/gold-bars.jpg",
              alt: "Refined 999.9 fine gold bars",
              label: "Refined Gold",
            },
            {
              src: "/images/gold-ingots.jpg",
              alt: "Gold bullion ingots",
              label: "Bullion",
            },
            {
              src: "https://images.unsplash.com/photo-1643656350988-a39ad266a178?auto=format&fit=crop&w=1400&q=80",
              alt: "Gold bars prepared for trade",
              label: "Raw & Refined",
            },
          ].map((shot) => (
            <div key={shot.label} className="relative aspect-[16/10] overflow-hidden bg-navy">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                className="object-cover"
                sizes="(min-width: 640px) 33vw, 100vw"
              />
              <span className="absolute bottom-4 left-4 z-10 bg-gold px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-navy">
                {shot.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why VickYank"
            title="Why Trade With Us"
            description="In gold, reputation is collateral. Here is how we protect yours — and ours."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {reasons.map((item) => (
              <article key={item.title} className="brochure-card">
                <span className="inline-flex h-14 w-14 items-center justify-center border border-gold/40 text-gold">
                  <item.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-heading text-xl text-gold">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-white/80">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="industrial-rule bg-navy page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            dark
            eyebrow="Process"
            title="How a Trade Works"
            description="Four clear steps from first contact to settled transaction."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div
                key={s.step}
                className="tech-frame border border-white/10 bg-base-panel p-5 sm:p-7"
              >
                <span className="tech-anchor-bl" aria-hidden="true" />
                <span className="tech-anchor-br" aria-hidden="true" />
                <p className="font-heading text-3xl text-gold">{s.step}</p>
                <h3 className="mt-4 font-heading text-lg text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-ink py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {[
              "Transparent weighing",
              "Market-rate valuation",
              "Full documentation",
              "Secure settlement",
              "Raw & refined gold",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold uppercase tracking-wider text-gold">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="enquire" className="bg-navy page-section">
        <div className="mx-auto grid max-w-7xl gap-8 lg:gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="kicker">Confidential Enquiry</p>
            <h2 className="page-title mt-3">Speak With Our Trading Desk</h2>
            <p className="mt-6 text-base leading-relaxed text-gray-300 sm:text-lg">
              Share your intent and approximate volume. A specialist will respond
              within one business day — or reach us instantly on WhatsApp.
            </p>
            <ul className="mt-8 space-y-3 text-gray-300">
              <li className="flex gap-3">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                Buyers: verified gold with clear provenance notes
              </li>
              <li className="flex gap-3">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                Sellers: competitive pricing and prompt settlement
              </li>
              <li className="flex gap-3">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                Phone:{" "}
                <a
                  href={`tel:${site.phoneInternational}`}
                  className="text-gold hover:underline"
                >
                  {site.phoneDisplay}
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-block text-sm font-bold uppercase tracking-wider text-gold hover:text-gold-soft"
            >
              Prefer the general contact form →
            </Link>
          </div>
          <div className="brochure-card">
            <InquiryForm
              variant="gold"
              defaultService="Gold Trading"
              context="gold-trading"
              submitLabel="Submit Trade Enquiry"
              successTitle="Trade Enquiry Received"
              successMessage="Our trading desk will contact you shortly to arrange the next step."
            />
          </div>
        </div>
      </section>

      <CtaBanner
        className="hidden md:block"
        title="Ready to Move Gold Professionally?"
        description="High-value trades deserve institutional discipline. Start with a confidential enquiry today."
      />
    </>
  );
}
