import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/ui/CtaBanner";
import InquiryForm from "@/components/forms/InquiryForm";
import { CheckIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Mining Operations",
  description:
    "Professional mining operations from VickYank Limited — experienced crews, modern heavy machinery, and safety-first site management across Ghana.",
};

const capabilities = [
  "Experienced mining crews and site supervisors",
  "Owned fleet of excavators and support machinery",
  "Safety-first site management",
  "Efficient extraction and processing workflows",
  "Landowner and investor partnership models",
  "Nationwide deployment across Ghana",
];

export default function MiningServicePage() {
  return (
    <>
      <section className="page-hero bg-navy-cover">
        <Image
          src="/images/cat-loading-haul.png"
          alt="CAT excavator loading a haul truck"
          fill
          priority
          className="object-cover brightness-[0.7]"
          sizes="100vw"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy-cover via-navy-cover/40 to-transparent"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="page-title">Mining Operations</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Professional extraction with experienced crews and modern heavy machinery.
            Safety-first site management from ground to gold.
          </p>
          <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href="#enquire" className="btn-gold">
              Enquire
            </a>
            <Link href="/services/equipment" className="btn-outline-light">
              View fleet
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy page-section">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="page-title">Industrial mining. Accountable delivery.</h2>
            <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
              Whether you are a landowner seeking an operating partner or an
              investor evaluating opportunities, VickYank brings the equipment,
              expertise, and discipline to move projects forward.
            </p>
            <ul className="mt-8 space-y-3">
              {capabilities.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/80">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/services/equipment"
              className="mt-8 inline-flex items-center gap-2 text-sm text-gold hover:text-gold-soft"
            >
              View Equipment Fleet →
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/cat-loading-haul.png"
              alt="CAT excavator loading a haul truck"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section id="enquire" className="bg-navy-ink page-section">
        <div className="mx-auto grid max-w-7xl gap-8 lg:gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="page-title">Discuss a mining project</h2>
            <p className="mt-5 text-base text-white/80 sm:text-lg">
              Share site context, timeline, and partnership model. Our operations
              team responds within one business day.
            </p>
          </div>
          <div className="brochure-card">
            <InquiryForm
              defaultService="Mining Operations"
              context="mining"
              submitLabel="Submit Mining Enquiry"
            />
          </div>
        </div>
      </section>

      <CtaBanner
        title="Begin a conversation"
        description="Share the site, the timeline, and how you want to partner."
      />
    </>
  );
}
