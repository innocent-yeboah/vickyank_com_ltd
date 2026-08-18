import type { Metadata } from "next";
import Image from "next/image";
import CtaBanner from "@/components/ui/CtaBanner";
import InquiryForm from "@/components/forms/InquiryForm";
import SectionHeading from "@/components/ui/SectionHeading";
import { CheckIcon } from "@/components/ui/Icons";
import { luxuryFleet } from "@/lib/catalog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Luxury Car Rental",
  description:
    "Premium luxury car rental in Ghana — chauffeured or self-drive executive sedans, SUVs, and statement vehicles from VickYank Limited.",
};

const terms = [
  "Valid driver’s licence required for self-drive hires",
  "Security deposit held for the duration of the rental",
  "Fuel policy: full-to-full unless otherwise agreed",
  "Chauffeured packages include professional driver and insurance",
  "Cancellations: 48 hours’ notice preferred for refundable deposits",
  "Airport transfers and multi-day corporate retainers available",
];

export default function LuxuryCarsPage() {
  return (
    <>
      <section className="page-hero bg-navy-darker">
        <Image
          src="/images/jaguar-xe.png"
          alt="Jaguar XE executive sedan"
          fill
          priority
          className="object-cover brightness-[0.7]"
          sizes="100vw"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy-cover via-navy-cover/45 to-transparent"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="page-title">Luxury Car Rental</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Jaguar XE, Land Cruiser, Escalade, Mercedes GLE, Jetour, and Ram TRX
            — maintained to showroom standard for business, events, and VIP travel.
          </p>
          <a href="#enquire" className="btn-gold mt-10">
            Reserve a Vehicle
          </a>
        </div>
      </section>

      <section className="industrial-rule bg-navy page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="The fleet"
            description="Representative classes — we confirm availability and exact models on enquiry."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {luxuryFleet.map((car) => (
              <div
                key={car.id}
                className="group relative aspect-[16/10] overflow-hidden bg-navy-dark md:aspect-[4/5]"
              >
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="tech-mesh-image object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 z-20 p-4 sm:p-7">
                  <span className="text-xs tracking-[0.14em] text-gold">
                    {car.status}
                  </span>
                  <h3 className="mt-3 font-heading text-xl text-white">{car.name}</h3>
                  <ul className="mt-3 space-y-1.5">
                    {car.specs.map((spec) => (
                      <li key={spec} className="text-sm text-gray-300">
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-ink page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Clear terms"
            description="Summary of standard hire conditions — final terms confirmed on booking."
          />
          <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {terms.map((term) => (
              <li key={term} className="brochure-card flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-white/80">{term}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="enquire" className="bg-navy page-section">
        <div className="mx-auto grid max-w-7xl gap-8 lg:gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="page-title">Request availability</h2>
            <p className="mt-6 text-base leading-relaxed text-gray-300 sm:text-lg">
              Share your preferred class, dates, and whether you need a chauffeur.
              We confirm availability and rates within one business day.
            </p>
            <p className="mt-6 text-gray-400">
              Urgent? Call{" "}
              <a
                href={`tel:${site.phoneInternational}`}
                className="font-medium text-gold hover:underline"
              >
                {site.phoneDisplay}
              </a>{" "}
              or{" "}
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gold hover:underline"
              >
                WhatsApp
              </a>
              .
            </p>
          </div>
          <div className="tech-frame border border-white/10 bg-base-panel p-5 sm:p-10">
            <span className="tech-anchor-bl" aria-hidden="true" />
            <span className="tech-anchor-br" aria-hidden="true" />
            <InquiryForm
              variant="rental"
              defaultService="Luxury Car Rental"
              context="luxury-cars"
              submitLabel="Request Vehicle"
              successTitle="Reservation Request Received"
              successMessage="Our mobility team will confirm availability and rates shortly."
            />
          </div>
        </div>
      </section>

      <CtaBanner
        className="hidden md:block"
        title="Need Executive Transport?"
        description="Discreet, punctual, and presentation-ready — reserve your vehicle with VickYank."
      />
    </>
  );
}
