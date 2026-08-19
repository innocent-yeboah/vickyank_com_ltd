import type { Metadata } from "next";
import Image from "next/image";
import InquiryForm from "@/components/forms/InquiryForm";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gold Trading",
  description:
    "Buy and sell raw and refined gold with VickYank Limited in Ghana — witnessed weighing, market-aligned valuation, and full documentation.",
};

const forWhom = [
  {
    title: "You are selling",
    body: "You want a fair weight, a clear number, and settlement that does not linger. You want to watch the process — not guess at it.",
  },
  {
    title: "You are buying",
    body: "You want metal you can stand behind, with notes on what it is and where it came from. No theatre. No fog.",
  },
  {
    title: "You need the room kept quiet",
    body: "High value does not need an audience. We handle intake, custody, and papers with the discretion the metal deserves.",
  },
] as const;

const method = [
  {
    title: "You tell us the intent",
    body: "Buy or sell, raw or refined, roughly how much, and when. A specialist answers within one business day.",
  },
  {
    title: "We weigh in the open",
    body: "The metal is weighed and assessed with you able to witness. Nothing important happens off-stage.",
  },
  {
    title: "You see the number",
    body: "Valuation against the market, stated plainly, before anyone is asked to commit.",
  },
  {
    title: "We settle and file",
    body: "Secure settlement, and documents you can keep — for your records, and for sleep.",
  },
] as const;

const vaultShots = [
  {
    src: "/images/gold-bars.jpg",
    alt: "Refined gold bars prepared for trade",
  },
  {
    src: "/images/gold-ingots.jpg",
    alt: "Gold bullion ingots",
  },
] as const;

export default function GoldTradingPage() {
  return (
    <>
      <section className="page-hero bg-navy-cover lg:min-h-[72svh]">
        <Image
          src="/images/gold-bars.jpg"
          alt="Refined gold bars on the VickYank trading desk"
          fill
          priority
          className="object-cover brightness-[0.62]"
          sizes="100vw"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy-cover via-navy-cover/55 to-navy-cover/20"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gold">Gold</p>
          <h1 className="mt-3 max-w-3xl font-heading text-[2rem] font-medium leading-[1.12] text-white sm:text-5xl lg:text-6xl">
            In gold, the paper is as important as the metal.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Buy and sell raw and refined gold in Ghana. Weighing you can witness.
            A price you can understand. Settlement you can file.
          </p>
          <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href="#enquire" className="btn-gold">
              Speak to the desk
            </a>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="bg-navy">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {vaultShots.map((shot) => (
            <div
              key={shot.src}
              className="relative aspect-[16/9] overflow-hidden sm:aspect-[4/3]"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                className="object-cover"
                sizes="(min-width: 640px) 50vw, 100vw"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="page-title">Who sits at this desk</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
            Gold trading is not a shop window. It is a room for people who already
            know what they hold — or what they need to hold.
          </p>
          <div className="mt-12 grid gap-12 sm:grid-cols-3 sm:gap-10">
            {forWhom.map((item, index) => (
              <ScrollReveal key={item.title} as="article" delayMs={index * 120}>
                <span
                  aria-hidden="true"
                  className="scroll-reveal-rule mb-5 block h-px w-8 bg-gold"
                />
                <h3 className="font-heading text-2xl text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
                  {item.body}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-navy-darker page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="page-title">How a trade is done</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
            Four movements. None of them hidden. None of them rushed to look like
            a favour.
          </p>
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
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

      <section className="bg-navy page-section">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="page-title">What you can hold us to</h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-white/70 sm:text-lg">
            <p>
              The weight is the weight. You may witness it. If something is unclear,
              we stop until it is clear — the metal can wait a minute; a reputation
              cannot.
            </p>
            <p>
              The number is referenced to the market, not invented in the room. You
              see where you stand before you say yes.
            </p>
            <p>
              The papers travel with the trade. Custody is quiet. Settlement is
              prompt. That is the whole of our luxury: nothing theatrical, nothing
              missing.
            </p>
          </div>
          <p className="mt-10 text-sm text-white/45">{site.tagline}</p>
        </div>
      </section>

      <section
        id="enquire"
        className="border-t border-white/10 bg-navy-ink page-section"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <h2 className="page-title">Speak to the trading desk</h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/65 sm:text-lg">
              Intent, approximate volume, and whether you are buying or selling.
              We reply within one business day. For a faster line, use WhatsApp
              or call.
            </p>
            <div className="mt-8 space-y-3 text-sm text-white/60">
              <p>
                <a
                  href={`tel:${site.phoneInternational}`}
                  className="text-gold hover:text-gold-soft"
                >
                  {site.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-soft"
                >
                  WhatsApp the desk
                </a>
              </p>
            </div>
          </div>
          <div className="brochure-card">
            <InquiryForm
              variant="gold"
              defaultService="Gold Trading"
              context="gold-trading"
              submitLabel="Send trade enquiry"
              successTitle="The desk has your enquiry"
              successMessage="A specialist will contact you to arrange the next step — weighing, papers, and settlement."
            />
          </div>
        </div>
      </section>
    </>
  );
}
