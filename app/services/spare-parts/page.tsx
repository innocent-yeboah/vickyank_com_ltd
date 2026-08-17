import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/ui/CtaBanner";
import InquiryForm from "@/components/forms/InquiryForm";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/Icons";
import { products, formatGhs } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Excavator Spare Parts",
  description:
    "Genuine excavator spare parts from VickYank Limited — undercarriage, hydraulics, filters, and more. Shop online or request a quote.",
};

const categories = [
  "Undercarriage — track chains, rollers, idlers, sprockets",
  "Hydraulic components — pumps, cylinders, hoses, seals",
  "Engine parts — filters, injectors, turbochargers",
  "Ground engaging tools — bucket teeth, cutting edges",
  "Pins, bushings & linkages",
  "Electrical components & sensors",
  "Cabin parts & operator controls",
  "Attachments — buckets, breakers, rippers",
];

const featuredParts = products.filter((p) => p.category === "spare-parts").slice(0, 4);

export default function SparePartsServicePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-darker py-28">
        <Image
          src="/images/spare-parts-inventory.png"
          alt="Hydraulic pumps and excavator spare parts inventory"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="kicker">Service 04</p>
          <h1 className="page-title mt-3">Excavator Spare Parts</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Genuine parts sourced through trusted channels — because we know
            exactly what a parked machine costs you.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/services/shop" className="btn-gold">
              Open Parts Shop
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <a href="#enquire" className="btn-outline-light">
              Request a Quote
            </a>
          </div>
        </div>
      </section>

      <section className="bg-navy-dark py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            dark
            eyebrow="Catalog"
            title="Parts Categories"
            description="Order online or enquire for items on special order."
          />
          <ul className="mt-12 grid gap-3 sm:grid-cols-2">
            {categories.map((category) => (
              <li
                key={category}
                className="tech-frame flex items-start gap-3 border border-white/10 bg-base-panel p-4 text-sm text-gray-300"
              >
                <span className="tech-anchor-bl" aria-hidden="true" />
                <span className="tech-anchor-br" aria-hidden="true" />
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                  <CheckIcon className="h-3 w-3" />
                </span>
                {category}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="industrial-rule bg-navy py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading
              dark
              eyebrow="Featured"
              title="Shop Ready Parts"
            />
            <Link
              href="/services/shop"
              className="text-sm font-bold uppercase tracking-wider text-gold hover:text-gold-soft"
            >
              View Full Shop →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredParts.map((part) => (
              <Link
                key={part.id}
                href="/services/shop"
                className="tech-frame border border-white/10 bg-base-panel"
              >
                <span className="tech-anchor-bl" aria-hidden="true" />
                <span className="tech-anchor-br" aria-hidden="true" />
                <div className="relative aspect-[4/3] overflow-hidden bg-navy-dark">
                  <Image
                    src={part.image}
                    alt={part.name}
                    fill
                    className="object-cover opacity-80"
                    sizes="25vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-white">
                    {part.name}
                  </h3>
                  <p className="mt-2 font-heading text-lg font-bold text-gold">
                    {formatGhs(part.priceGhs)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="enquire" className="bg-navy-darker py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold">
              Parts Enquiry
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight text-white">
              Need a Specific Part?
            </h2>
            <p className="mt-6 text-lg text-gray-300">
              Tell us the machine model and part number — we will confirm stock
              or source it fast.
            </p>
          </div>
          <div className="tech-frame border border-white/10 bg-base-panel p-8 sm:p-10">
            <span className="tech-anchor-bl" aria-hidden="true" />
            <span className="tech-anchor-br" aria-hidden="true" />
            <InquiryForm
              variant="equipment"
              defaultService="Excavator Spare Parts"
              context="spare-parts"
              submitLabel="Request Parts Quote"
            />
          </div>
        </div>
      </section>

      <CtaBanner
        title="Keep Your Fleet Earning"
        description="Shop online or speak with our parts desk for urgent turnaround."
      />
    </>
  );
}
