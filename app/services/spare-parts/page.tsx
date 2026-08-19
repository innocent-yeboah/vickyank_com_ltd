import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import InquiryForm from "@/components/forms/InquiryForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Excavator Spare Parts",
  description:
    "Genuine excavator spare parts from VickYank Limited in Ghana — undercarriage, hydraulics, filters, and ground tools. Shop what is ready, or enquire for what we will source.",
};

const forWhom = [
  {
    title: "You run a fleet",
    body: "You already know what these machines eat. You want parts that fit, and a desk that answers when something is not on the shelf.",
  },
  {
    title: "One machine is down",
    body: "Idle iron is the expensive kind. You need the right part — not a guess — so the site can move again.",
  },
  {
    title: "You have a number, or you do not",
    body: "Model and part number if you have them. If you only have a photograph and a class, we still start from there.",
  },
] as const;

const method = [
  {
    title: "You name the machine and the fault",
    body: "Class, model if you know it, and what stopped. A photograph of the part helps. We reply within one business day.",
  },
  {
    title: "We confirm stock or source",
    body: "What we hold is said plainly. What we do not hold, we source through channels we already trust.",
  },
  {
    title: "You order, or we quote",
    body: "Ready items go through the shop. Special order comes as a clear quote — no fog on price or time.",
  },
  {
    title: "The iron can work again",
    body: "The part reaches you. The machine is no longer a parked bill.",
  },
] as const;

const families = [
  {
    title: "Undercarriage",
    body: "Track chains, rollers, idlers, sprockets — the parts that live in the dirt.",
  },
  {
    title: "Hydraulics",
    body: "Pumps, cylinders, hoses, seals. Pressure-tested thinking, not a box of near-fits.",
  },
  {
    title: "Engine and filters",
    body: "Filters, injectors, service packs. What scheduled work actually uses.",
  },
  {
    title: "Ground tools",
    body: "Bucket teeth, cutting edges, pins, bushings, attachments. The wear you can see.",
  },
] as const;

const yardShots = [
  {
    src: "/images/spare-parts-inventory.png",
    alt: "Hydraulic pumps and excavator spare parts on the VickYank desk",
  },
  {
    src: "/images/volvo-ec550e.png",
    alt: "Volvo excavator of the class these parts serve",
  },
  {
    src: "/images/cat-390fl.png",
    alt: "CAT excavator on site — the iron the parts keep working",
  },
] as const;

export default function SparePartsServicePage() {
  return (
    <>
      <section className="page-hero bg-navy-cover lg:min-h-[72svh]">
        <Image
          src="/images/spare-parts-inventory.png"
          alt="Hydraulic pumps and excavator spare parts inventory"
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
          <p className="text-sm text-gold">Spare parts</p>
          <h1 className="mt-3 max-w-3xl font-heading text-[2rem] font-medium leading-[1.12] text-white sm:text-5xl lg:text-6xl">
            The machine should not sit waiting on a part.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Genuine excavator parts from a house that runs this iron. Shop what
            is ready. Enquire for what we will source.
          </p>
          <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href="#enquire" className="btn-gold">
              Ask for a part
            </a>
            <Link href="/services/shop" className="btn-outline-light">
              Open the shop
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {yardShots.map((shot) => (
            <div
              key={shot.src}
              className="relative aspect-[16/10] overflow-hidden sm:aspect-[4/5]"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                className="object-cover"
                sizes="(min-width: 640px) 33vw, 100vw"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="page-title">Who this desk is for</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
            Spare parts is not a catalogue window. It is how a working machine
            stays a working machine.
          </p>
          <div className="mt-12 grid gap-12 sm:grid-cols-3 sm:gap-10">
            {forWhom.map((item) => (
              <article key={item.title}>
                <span aria-hidden="true" className="mb-5 block h-px w-8 bg-gold" />
                <h3 className="font-heading text-2xl text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-navy-darker page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="page-title">How a part is found</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
            Four movements. None of them a promise we cannot keep.
          </p>
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
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

      <section className="bg-navy page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="page-title">What we keep on the desk</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
            The families these machines wear through. If your line is not named
            here, still enquire — we source beyond the shelf.
          </p>
          <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {families.map((item) => (
              <article key={item.title}>
                <span aria-hidden="true" className="mb-5 block h-px w-8 bg-gold" />
                <h3 className="font-heading text-2xl text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-navy-darker page-section">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10]">
            <Image
              src="/images/spare-parts-inventory.png"
              alt="Hydraulic components prepared for dispatch"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div>
            <p className="text-sm text-gold">The shop</p>
            <h2 className="mt-3 page-title">Some parts are ready to order.</h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/65 sm:text-lg">
              Pay in Ghana Cedis. What is not listed is not a dead end — send
              the model and we will say what we can do.
            </p>
            <Link href="/services/shop" className="btn-gold mt-8">
              Open the shop
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy page-section">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="page-title">What you can hold us to</h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-white/70 sm:text-lg">
            <p>
              We stock what these classes eat because we run them. A near-fit is
              not a fit. If we are not sure, we say so before you pay.
            </p>
            <p>
              Genuine channels. The part that arrives should be the part that
              belongs on the machine — not a cheaper story.
            </p>
            <p>
              Idle time is the enemy. We answer. We quote in the open. That is
              the luxury: the iron works again, and someone was accountable for
              the part.
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
            <h2 className="page-title">Ask for a part</h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/65 sm:text-lg">
              Machine class or model, part number if you have it, and what
              failed. We reply within one business day.
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
              <p>
                <Link href="/services/equipment" className="text-gold hover:text-gold-soft">
                  Need the machine itself?
                </Link>
              </p>
            </div>
          </div>
          <div className="brochure-card">
            <InquiryForm
              variant="equipment"
              defaultService="Excavator Spare Parts"
              context="spare-parts"
              submitLabel="Send parts enquiry"
              successTitle="The parts desk has your enquiry"
              successMessage="We will confirm stock or a source, and the next step, within one business day."
            />
          </div>
        </div>
      </section>
    </>
  );
}
