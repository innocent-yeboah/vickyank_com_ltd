import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";
import {
  ArrowRightIcon,
  CarIcon,
  CheckIcon,
  ExcavatorIcon,
  GearIcon,
  GoldIcon,
  MiningIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mining operations, gold trading, excavator rental and sales, spare parts supply, and luxury car rental — the five service lines of Vickyank Limited Company.",
};

type Service = {
  id: string;
  icon: (props: { className?: string }) => JSX.Element;
  eyebrow: string;
  title: string;
  description: string[];
  benefits: string[];
  image: string;
  imageAlt: string;
  cta: string;
};

const services: Service[] = [
  {
    id: "mining",
    icon: MiningIcon,
    eyebrow: "Service 01",
    title: "Mining Operations",
    description: [
      "Vickyank Limited runs professional mining operations across Ghana, combining experienced crews with modern heavy machinery. We manage extraction with a focus on safety, efficiency, and responsible site practice.",
      "Whether you are a landowner seeking an operating partner or an investor evaluating opportunities, we bring the equipment, expertise, and operational discipline to move projects from ground to gold.",
    ],
    benefits: [
      "Experienced mining crews and site supervisors",
      "Owned fleet of excavators and support machinery",
      "Safety-first site management",
      "Efficient extraction and processing workflows",
    ],
    // Client operations photo — Volvo excavator loading dump trucks on site.
    image: "/images/service-mining.png",
    imageAlt: "Mining operations — excavator loading haul trucks on site",
    cta: "Discuss a Mining Project",
  },
  {
    id: "gold",
    icon: GoldIcon,
    eyebrow: "Service 02",
    title: "Gold Trading — Buy & Sell Raw and Refundable Gold",
    description: [
      "We buy and sell raw and refundable gold with the transparency serious traders demand. Every transaction is professionally weighed, valued against current market rates, and fully documented.",
      "Sellers receive fair, competitive pricing with prompt settlement. Buyers receive verified gold with clear provenance. In a market where trust is everything, Vickyank's reputation is your assurance.",
    ],
    benefits: [
      "Transparent weighing and market-rate valuation",
      "Prompt, secure settlement",
      "Full transaction documentation",
      "Raw and refundable gold handled",
    ],
    // REPLACE: real photo of gold stock or trading office.
    image:
      "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Gold bars stacked together",
    cta: "Enquire About Gold Trading",
  },
  {
    id: "excavators",
    icon: ExcavatorIcon,
    eyebrow: "Service 03",
    title: "Excavator Machines — Renting & Selling",
    description: [
      "Our excavator fleet serves construction firms, mining operations, and contractors across Ghana. Rent by the day, week, or month — or purchase machines outright from our inventory.",
      "Every machine is inspected and serviced before deployment. We can arrange delivery to site and provide operators on request, so your project keeps moving without equipment headaches.",
    ],
    benefits: [
      "Flexible rental terms: daily, weekly, monthly",
      "Outright purchase options available",
      "Machines inspected and serviced before deployment",
      "Site delivery and operator arrangements",
    ],
    // REPLACE: real photos of the client's excavator fleet.
    image:
      "https://images.unsplash.com/photo-1579412690850-bd41cd0af397?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Excavator machine working on site",
    cta: "Request Equipment Availability",
  },
  {
    id: "spare-parts",
    icon: GearIcon,
    eyebrow: "Service 04",
    title: "Excavator Spare Parts",
    description: [
      "Downtime costs money. Vickyank supplies genuine excavator spare parts — from undercarriage components and hydraulic parts to filters, pins, and bushings — sourced through trusted channels.",
      "Because we operate our own fleet, we understand exactly which parts fail, which brands last, and how urgently a stopped machine needs to move again.",
    ],
    benefits: [
      "Genuine parts through trusted supply channels",
      "Undercarriage, hydraulics, filters, and more",
      "Guidance from a team that runs its own fleet",
      "Fast turnaround to minimise downtime",
    ],
    // REPLACE: real photo of the parts warehouse or inventory.
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Warehouse with equipment parts inventory",
    cta: "Request a Parts Quote",
  },
  {
    id: "luxury-cars",
    icon: CarIcon,
    eyebrow: "Service 05",
    title: "Luxury Car Rental",
    description: [
      "For executives, weddings, state functions, and VIP transport, Vickyank operates a fleet of premium vehicles maintained to showroom standard.",
      "Choose chauffeured service for discreet, punctual executive transport, or self-drive arrangements for longer engagements. Every vehicle is detailed, inspected, and delivered on time.",
    ],
    benefits: [
      "Premium vehicles maintained to showroom standard",
      "Chauffeured or self-drive options",
      "Executive, event, and VIP packages",
      "Punctual delivery and discreet service",
    ],
    // REPLACE: real photos of the client's luxury car fleet.
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Luxury sports car on the road",
    cta: "Book a Luxury Vehicle",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ============================ PAGE HERO =========================== */}
      <section className="bg-section-gradient py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold">
            Our Services
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
            Five Service Lines. One Standard.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Explore the full range of Vickyank Limited&apos;s industrial and
            executive services.
          </p>
          {/* In-page navigation */}
          <div className="mt-10 flex flex-wrap gap-3">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="border border-white/25 px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:border-gold hover:text-gold"
              >
                {s.title.split("—")[0].trim()}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= SERVICE SECTIONS ======================= */}
      {services.map((service, index) => {
        const reversed = index % 2 === 1;
        return (
          <section
            key={service.id}
            id={service.id}
            className={
              index % 2 === 0
                ? "industrial-rule bg-[#1A1A1A] py-24"
                : "industrial-rule bg-[#111111] py-24"
            }
          >
            <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
              <div className={reversed ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center border border-gray-800/80 bg-[#151515] text-[#FFC107]">
                    <service.icon className="h-7 w-7" />
                  </span>
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#FFC107]">
                    {service.eyebrow}
                  </p>
                </div>
                <h2 className="mt-6 font-heading text-3xl font-bold uppercase tracking-tight text-white">
                  {service.title}
                </h2>
                {service.description.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="mt-5 text-lg leading-relaxed text-gray-400"
                  >
                    {paragraph}
                  </p>
                ))}
                <ul className="mt-7 space-y-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFC107]/15 text-[#FFC107]">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-9 inline-flex items-center gap-2 bg-[#FFC107] px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-[#1A1A1A] transition-colors hover:bg-gold-dark"
                >
                  {service.cta}
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
              <div
                className={`group tech-frame relative aspect-[4/3] overflow-hidden border border-gray-800/60 bg-[#111111] ${
                  reversed ? "lg:order-1" : ""
                }`}
              >
                <span className="tech-anchor-bl" aria-hidden="true" />
                <span className="tech-anchor-br" aria-hidden="true" />
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="tech-mesh-image object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
          </section>
        );
      })}

      <CtaBanner
        title="Which Service Do You Need?"
        description="Tell us your requirements and receive a tailored proposal within one business day."
      />
    </>
  );
}
