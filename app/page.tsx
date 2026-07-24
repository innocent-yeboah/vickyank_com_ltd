import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import HeroSlideshow from "@/components/HeroSlideshow";
import StatsCounter from "@/components/StatsCounter";
import {
  ArrowRightIcon,
  CarIcon,
  CheckIcon,
  ExcavatorIcon,
  GearIcon,
  GlobeIcon,
  GoldIcon,
  HandshakeIcon,
  MiningIcon,
  ShieldIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Home",
};

// Trust indicators — placeholder figures; confirm real numbers with the client.
const stats = [
  { value: 10, suffix: "+", label: "Years of Operation" },
  { value: 25, suffix: "+", label: "Machines in Fleet" },
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 5, suffix: "", label: "Lines of Service" },
] as const;

const services = [
  {
    icon: MiningIcon,
    title: "Mining Operations",
    description:
      "Professional mining operations backed by experienced crews and modern heavy machinery.",
    href: "/services#mining",
  },
  {
    icon: GoldIcon,
    title: "Gold Trading",
    description:
      "We buy and sell raw and refundable gold with transparent valuation and secure transactions.",
    href: "/services#gold",
  },
  {
    icon: ExcavatorIcon,
    title: "Excavator Machines",
    description:
      "Renting and selling of excavator machines — flexible terms for projects of every scale.",
    href: "/services#excavators",
  },
  {
    icon: GearIcon,
    title: "Excavator Spare Parts",
    description:
      "Genuine spare parts for excavator machines, keeping your fleet running with minimal downtime.",
    href: "/services#spare-parts",
  },
  {
    icon: CarIcon,
    title: "Luxury Car Rental",
    description:
      "Premium vehicles for executives, events, and VIP transport — chauffeured or self-drive.",
    href: "/services#luxury-cars",
  },
];

const whyChoose = [
  {
    icon: ShieldIcon,
    title: "Trusted & Accountable",
    description:
      "Transparent pricing, documented transactions, and a reputation built on delivering exactly what we promise.",
  },
  {
    icon: ExcavatorIcon,
    title: "Modern Equipment Fleet",
    description:
      "Well-maintained excavators and machinery, inspected and serviced to keep your project on schedule.",
  },
  {
    icon: GlobeIcon,
    title: "Local Knowledge, Industrial Scale",
    description:
      "Deep understanding of Ghana's mining and construction landscape, combined with professional operational standards.",
  },
  {
    icon: HandshakeIcon,
    title: "One Partner, Five Services",
    description:
      "Mining, gold, machines, parts, and mobility — consolidate your industrial needs with a single reliable partner.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ============================== HERO ============================== */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-[#111111]">
        {/* Auto-rotating operations gallery — random slide + transition */}
        <HeroSlideshow />
        {/* Light left-side scrim only — photo stays sharp */}
        <div className="absolute inset-0 z-[1] bg-hero-gradient" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-4xl border-l-4 border-[#FFC107] border-t border-white/[0.02] bg-[#111111]/35 pl-8 pr-6 py-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#FFC107]">
              Ghana&apos;s Multi-Service Industrial Partner
            </p>
            <h1 className="mt-6 font-heading text-5xl font-bold uppercase leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Vickyank Limited Company
            </h1>
            <p className="mt-4 font-heading text-xl font-medium uppercase tracking-[0.2em] text-[#FFC107] sm:text-2xl">
              Mining &bull; Equipment &bull; Gold &bull; Luxury
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-300">
              From mining operations and gold trading to excavator rental,
              genuine spare parts, and luxury car hire — Vickyank Limited
              delivers industrial capability and executive service under one
              trusted name.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#FFC107] px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider text-[#1A1A1A] transition-colors hover:bg-gold-dark"
              >
                Request a Quote
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider text-white transition-colors hover:border-[#FFC107] hover:text-[#FFC107]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= TRUST INDICATORS ======================== */}
      <StatsCounter stats={stats} />

      {/* ========================= COMPANY INTRO ========================= */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold-dark">
              Who We Are
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight text-charcoal sm:text-4xl">
              Industrial Capability. <br className="hidden sm:block" />
              Ghanaian Roots.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Vickyank Limited Company is a diversified industrial enterprise
              operating across Ghana&apos;s most demanding sectors. We run
              mining operations, trade raw and refundable gold, rent and sell
              excavator machines, supply genuine spare parts, and operate a
              premium luxury car rental service.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Our clients — contractors, investors, mining firms, and
              executives — choose us because we combine heavy-industry
              capability with the accountability of a professional
              corporation.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wider text-navy transition-colors hover:text-gold-dark"
            >
              Learn More About Us
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            {/* REPLACE: real photo of the client's team or work site. */}
            <Image
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80"
              alt="Industrial work site with heavy equipment"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute bottom-0 left-0 bg-gold px-6 py-4">
              <p className="font-heading text-lg font-bold uppercase text-charcoal">
                Built on Trust
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== SERVICES PREVIEW ======================= */}
      <section className="industrial-rule bg-[#1A1A1A] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            dark
            eyebrow="What We Do"
            title="Five Lines of Service"
            description="A single industrial partner for mining, gold, machinery, parts, and executive mobility."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative border border-gray-800/60 bg-[#151515] p-8 transition-all duration-300 ease-out hover:bg-[#0E0E0E] motion-reduce:transition-none"
              >
                <span
                  aria-hidden="true"
                  className="absolute right-6 top-6 font-heading text-2xl font-bold tabular-nums text-gray-600 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.55)]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="inline-flex h-14 w-14 items-center justify-center border border-gray-800/80 bg-[#111111] text-[#FFC107] transition-colors duration-300 group-hover:border-[#FFC107]/40 group-hover:bg-[#FFC107] group-hover:text-[#1A1A1A]">
                  <service.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 origin-left font-heading text-xl font-bold uppercase tracking-wide text-white transition-transform duration-300 group-hover:scale-105 motion-reduce:group-hover:scale-100">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                  {service.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#FFC107]">
                  Learn More
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
            {/* Filler card keeps the 3-column grid balanced */}
            <div className="flex flex-col justify-center border border-[#FFC107]/30 bg-[#0E0E0E] p-8">
              <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-white">
                Need Something Specific?
              </h3>
              <p className="mt-3 leading-relaxed text-gray-300">
                Tell us about your project and we will put together a tailored
                proposal within one business day.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-fit items-center gap-2 bg-[#FFC107] px-6 py-3 font-heading text-sm font-bold uppercase tracking-wider text-[#1A1A1A] transition-colors hover:bg-gold-dark"
              >
                Get in Touch
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== WHY CHOOSE US ========================== */}
      <section className="industrial-rule bg-[#111111] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            dark
            eyebrow="Why Choose Vickyank"
            title="A Partner You Can Build On"
            description="Serious projects demand serious partners. Here is what sets Vickyank Limited apart."
          />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item) => (
              <div key={item.title} className="text-center sm:text-left">
                <span className="inline-flex h-14 w-14 items-center justify-center border border-gold/40 text-gold">
                  <item.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold uppercase tracking-wide text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS PLACEHOLDER =================== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Client Confidence"
            title="What Our Partners Say"
            description="Placeholder testimonials — replace with real client quotes as they are collected."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              {
                quote:
                  "Vickyank's excavators arrived on schedule and in excellent condition. Their team handled logistics end to end.",
                name: "Construction Contractor",
                detail: "Equipment Rental Client",
              },
              {
                quote:
                  "Transparent weighing, fair pricing, and professional documentation. Exactly how gold trading should be done.",
                name: "Gold Trading Partner",
                detail: "Repeat Client",
              },
              {
                quote:
                  "The luxury fleet is immaculate and the service is discreet and punctual. Our executives use Vickyank exclusively.",
                name: "Corporate Client",
                detail: "Executive Transport",
              },
            ].map((t) => (
              <figure
                key={t.name}
                className="border border-gray-200 bg-gray-50 p-8"
              >
                <div
                  className="font-heading text-5xl leading-none text-gold"
                  aria-hidden="true"
                >
                  &ldquo;
                </div>
                <blockquote className="mt-2 leading-relaxed text-gray-700">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6">
                  <p className="font-heading font-bold uppercase tracking-wide text-charcoal">
                    {t.name}
                  </p>
                  <p className="text-sm text-gray-500">{t.detail}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== COMMITMENTS STRIP ========================= */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-6 px-4 sm:px-6 lg:px-8">
          {[
            "Transparent Pricing",
            "Documented Transactions",
            "Maintained Equipment",
            "Responsive Support",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                <CheckIcon className="h-4 w-4" />
              </span>
              <span className="font-heading text-sm font-bold uppercase tracking-wider text-charcoal">
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
