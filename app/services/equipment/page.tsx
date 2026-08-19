import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import InquiryForm from "@/components/forms/InquiryForm";
import EquipmentFilm from "@/components/services/EquipmentFilm";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { excavatorFleet } from "@/lib/catalog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Heavy Equipment",
  description:
    "Hire or buy inspected excavators from VickYank Limited in Ghana — site delivery, operators on request, and machines we run on our own work.",
};

const forWhom = [
  {
    title: "You need iron for a stretch of work",
    body: "Hire a class that is inspected before it leaves us. Delivery to your site. An operator if you want one sitting in the cab.",
  },
  {
    title: "You want the machine on your books",
    body: "Buy from a house that already runs this iron. What you take home is the same standard we put on our own ground.",
  },
  {
    title: "You need a driver with the machine",
    body: "A parked excavator without a competent operator is still idle. We arrange the person with the iron when you ask.",
  },
] as const;

const method = [
  {
    title: "You name the class and the site",
    body: "What the ground needs, where it is, how long, and whether you are hiring or buying.",
  },
  {
    title: "We say what is actually free",
    body: "Availability and condition, stated plainly — not a catalogue that pretends every machine is waiting.",
  },
  {
    title: "We inspect before it leaves",
    body: "Serviced, checked, and ready to start. A machine that fails on day one is our failure.",
  },
  {
    title: "We deliver",
    body: "To your site. An operator if you asked. Someone to call if the iron stops.",
  },
] as const;

const fleetLines: Record<string, string> = {
  "ex-20t": "The class we put on our own mining ground — hire or buy.",
  "ex-30t": "Outright purchase. Showroom condition. Delivery arranged.",
  "ex-13t": "Heavy mining and quarry work. For hire, with an operator if you need one.",
};

export default function EquipmentPage() {
  return (
    <>
      <section className="page-hero bg-navy-cover lg:min-h-[80svh]">
        <Image
          src="/images/cat-loading-haul.png"
          alt="CAT excavator loading a haul truck on a VickYank site"
          fill
          priority
          className="object-cover brightness-[0.7] motion-safe:animate-cinematic-still"
          sizes="100vw"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy-cover via-navy-cover/50 to-navy-cover/15"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gold">Heavy equipment</p>
          <h1 className="mt-3 max-w-3xl font-heading text-[2rem] font-medium leading-[1.12] text-white sm:text-5xl lg:text-6xl">
            The machine should be ready before the ground is.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Hire or buy inspected excavators in Ghana. Delivery to site. An
            operator if you need one. Iron we already trust on our own work.
          </p>
          <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href="#enquire" className="btn-gold">
              Ask for a machine
            </a>
            <a href="#fleet" className="btn-outline-light">
              See the fleet
            </a>
          </div>
        </div>
      </section>

      <EquipmentFilm />

      <section className="bg-navy page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="page-title">Who this iron is for</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
            A machine is not a brochure. It is a decision: hire, buy, or put a
            person in the seat.
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
          <h2 className="page-title">How a machine reaches your site</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
            Four movements. The iron does not leave the yard until the first
            three are true.
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

      <section id="fleet" className="bg-navy">
        {excavatorFleet.map((machine) => (
          <article
            key={machine.id}
            className="group relative min-h-[72svh] overflow-hidden"
          >
            <Image
              src={machine.image}
              alt={machine.name}
              fill
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              sizes="100vw"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-navy-cover via-navy-cover/40 to-transparent"
            />
            <div className="relative flex min-h-[72svh] items-end">
              <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                <p className="text-xs tracking-[0.18em] text-gold">
                  {machine.status}
                </p>
                <h3 className="mt-3 max-w-2xl font-heading text-3xl text-white sm:text-5xl">
                  {machine.name}
                </h3>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70">
                  {fleetLines[machine.id] ?? machine.specs[0]}
                </p>
                <a
                  href="#enquire"
                  className="mt-8 inline-block text-sm text-gold hover:text-gold-soft"
                >
                  Ask for this class
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-navy-darker page-section">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10]">
            <Image
              src="/images/spare-parts-inventory.png"
              alt="Hydraulic pumps and excavator spare parts inventory"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div>
            <p className="text-sm text-gold">Keep it working</p>
            <h2 className="mt-3 page-title">Idle iron is the expensive kind.</h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/65 sm:text-lg">
              We stock what these classes eat — because we run them. Genuine
              parts, so the fleet does not sit waiting on a pump.
            </p>
            <Link href="/services/spare-parts" className="btn-outline-light mt-8">
              Spare parts
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy page-section">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="page-title">What you can hold us to</h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-white/70 sm:text-lg">
            <p>
              We run this iron on our own mining work. A machine that will not
              start is our problem first — so we inspect it before it reaches
              your ground.
            </p>
            <p>
              Hire or buy, the standard does not change. Condition is said in
              the open. Delivery is arranged. An operator is not an afterthought
              if you asked for one.
            </p>
            <p>
              If it stops, you have a name. Parts sit in the same house. That is
              the whole of the luxury: the machine works, and someone answers.
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
            <h2 className="page-title">Ask for a machine</h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/65 sm:text-lg">
              Class, site, hire or buy, and whether you need an operator. We
              reply within one business day with what is actually available.
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
              variant="equipment"
              defaultService="Excavator Rental / Purchase"
              context="equipment"
              submitLabel="Send equipment enquiry"
              successTitle="We have the enquiry"
              successMessage="The equipment desk will reply within one business day with availability and a clear next step."
            />
          </div>
        </div>
      </section>
    </>
  );
}
