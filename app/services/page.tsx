import type { Metadata } from "next";
import Link from "next/link";
import CtaBanner from "@/components/ui/CtaBanner";
import { brochureServices } from "@/content/brochure";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Business",
  description:
    "Industrial solutions for mining, gold trading, excavator machines, spare parts, and luxury car rental from VickYank Limited.",
};

export default function ServicesHubPage() {
  return (
    <>
      <section className="bg-navy py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="kicker text-center">Portfolio</p>
          <h1 className="page-title mt-3 text-center">Our Services</h1>
          <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-white/80">
            Five industrial and executive service lines, plus an online parts and
            equipment shop. One standard of excellence.
            {` ${site.tagline}`}
          </p>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {brochureServices.map((service) => (
              <Link
                key={service.num}
                href={service.href}
                className="brochure-card flex min-h-[240px] flex-col transition-colors hover:border-gold"
              >
                <span className="font-heading text-2xl text-gold">{service.num}</span>
                <h2 className="mt-4 font-heading text-2xl text-white">{service.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/75">
                  {service.body}
                </p>
              </Link>
            ))}
            <Link
              href="/services/shop"
              className="flex min-h-[240px] flex-col justify-center border border-gold bg-gold p-6 sm:p-8"
            >
              <span className="font-heading text-2xl text-navy">06</span>
              <h2 className="mt-4 font-heading text-2xl text-navy">
                Parts &amp; Equipment Shop
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-charcoal">
                Order genuine spare parts and select equipment online. Secure
                checkout in Ghana Cedis.
              </p>
            </Link>
          </div>
        </div>
      </section>
      <CtaBanner
        title="Which Service Do You Need?"
        description="Tell us your requirements and receive a tailored proposal within one business day."
      />
    </>
  );
}
