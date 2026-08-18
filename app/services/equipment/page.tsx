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
      <section className="page-hero bg-navy-cover">
        <Image
          src="/images/volvo-ec550e.png"
          alt="Volvo EC550E excavator on site"
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
          <h1 className="page-title">Heavy Equipment</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
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

      <section className="bg-navy-dark page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Machines in class"
            description="Heavy excavators and loaders serving mining, quarry, and construction work across Ghana."
          />
          <PhotoGrid images={equipmentGallery} className="mt-14" />
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {excavatorFleet.map((machine) => (
              <div
                key={machine.id}
                className="group flex flex-col overflow-hidden border border-white/10 bg-white/[0.03]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-navy">
                  <Image
                    src={machine.image}
                    alt={machine.name}
                    fill
                    className="tech-mesh-image object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                  <span className="absolute bottom-3 left-3 text-xs tracking-[0.14em] text-gold">
                    {machine.status}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-7">
                  <h3 className="font-heading text-lg text-white">
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
                    className="mt-6 inline-flex items-center gap-2 text-sm text-gold transition-colors hover:text-gold-soft"
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

      <section className="industrial-rule bg-navy page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:gap-14 lg:grid-cols-2">
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
              <h2 className="page-title">Genuine parts. Minimal downtime.</h2>
              <p className="mt-6 text-base leading-relaxed text-gray-300 sm:text-lg">
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

      <section id="enquire" className="industrial-rule bg-navy-dark page-section">
        <div className="mx-auto grid max-w-7xl gap-8 lg:gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="page-title">Tell us what you need on site</h2>
            <p className="mt-6 text-base leading-relaxed text-gray-300 sm:text-lg">
              Machine class, hire duration, location, and whether you need an
              operator — we respond with availability and a clear proposal.
            </p>
          </div>
          <div className="tech-frame border border-white/10 bg-base-panel p-5 sm:p-10">
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
        className="hidden md:block"
        title="Need a Machine Tomorrow?"
        description="Contact us for current availability, rates, and delivery arrangements anywhere in Ghana."
      />
    </>
  );
}
