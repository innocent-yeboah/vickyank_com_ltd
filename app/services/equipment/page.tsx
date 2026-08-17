import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBanner from "@/components/ui/CtaBanner";
import InquiryForm from "@/components/forms/InquiryForm";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/Icons";
import PhotoGrid from "@/components/ui/PhotoGrid";
import { equipmentGallery } from "@/content/brochure";
import { excavatorFleet } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Equipment",
  description:
    "Explore VickYank Limited's excavator fleet and spare parts — rent, buy, or enquire for site delivery across Ghana.",
};

const partsCategories = [
  "Undercarriage — track chains, rollers, idlers, sprockets",
  "Hydraulic components — pumps, cylinders, hoses, seals",
  "Engine parts — filters, injectors, turbochargers",
  "Ground engaging tools — bucket teeth, cutting edges",
  "Pins, bushings & linkages",
  "Electrical components & sensors",
  "Cabin parts & operator controls",
  "Attachments — buckets, breakers, rippers",
];

export default function EquipmentPage() {
  return (
    <>
      <section className="bg-navy py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="kicker">Fleet</p>
          <h1 className="page-title mt-3">Heavy Equipment &amp; Machinery</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Our excavator fleet serves mining operations, construction firms, and
            contractors nationwide. Every machine is inspected and serviced before
            deployment. Site delivery and operators are arranged on request.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#enquire" className="btn-gold">
              Request Availability
            </a>
            <Link href="/services/shop" className="btn-outline-light">
              Shop Spare Parts
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy-dark py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="On Site"
            title="Machines in Class"
            description="Heavy excavators and loaders serving mining, quarry, and construction work across Ghana."
          />
          <PhotoGrid images={equipmentGallery} className="mt-14" />
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {excavatorFleet.map((machine) => (
              <div
                key={machine.id}
                className="group tech-frame flex flex-col border border-white/10 bg-base-panel"
              >
                <span className="tech-anchor-bl" aria-hidden="true" />
                <span className="tech-anchor-br" aria-hidden="true" />
                <div className="relative aspect-[4/3] overflow-hidden bg-navy">
                  <Image
                    src={machine.image}
                    alt={machine.name}
                    fill
                    className="tech-mesh-image object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                  <span className="absolute left-0 top-4 z-20 bg-gold px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-navy">
                    {machine.status}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-white">
                    {machine.name}
                  </h3>
                  <ul className="mt-4 flex-1 space-y-2.5">
                    {machine.specs.map((spec) => (
                      <li
                        key={spec}
                        className="flex items-start gap-3 text-sm text-gray-400"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                          <CheckIcon className="h-3 w-3" />
                        </span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#enquire"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gold transition-colors hover:text-gold-soft"
                  >
                    Check Availability
                    <ArrowRightIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="industrial-rule bg-navy py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-navy-dark">
              <Image
                src="/images/spare-parts-inventory.png"
                alt="Hydraulic pumps and excavator spare parts inventory"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold">
                Spare Parts Catalog
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
                Genuine Parts. Minimal Downtime.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-300">
                Order online from our shop or request a custom parts quote. We
                know which components fail — because we run our own fleet.
              </p>
              <Link href="/services/shop" className="btn-gold mt-8">
                Open Parts Shop
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2">
              {partsCategories.map((category) => (
                <li
                  key={category}
                  className="group tech-frame flex items-start gap-3 border border-white/10 bg-base-panel p-4 text-sm text-gray-300"
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

      <section id="enquire" className="industrial-rule bg-navy-dark py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold">
              Equipment Enquiry
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
              Tell Us What You Need On Site
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              Machine class, hire duration, location, and whether you need an
              operator — we respond with availability and a clear proposal.
            </p>
          </div>
          <div className="tech-frame border border-white/10 bg-base-panel p-8 sm:p-10">
            <span className="tech-anchor-bl" aria-hidden="true" />
            <span className="tech-anchor-br" aria-hidden="true" />
            <InquiryForm
              variant="equipment"
              defaultService="Excavator Rental / Purchase"
              context="equipment"
              submitLabel="Request Equipment Quote"
            />
          </div>
        </div>
      </section>

      <CtaBanner
        title="Need a Machine Tomorrow?"
        description="Contact us for current availability, rates, and delivery arrangements anywhere in Ghana."
      />
    </>
  );
}
