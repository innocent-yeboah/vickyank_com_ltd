import type { Metadata } from "next";
import Link from "next/link";
import CtaBanner from "@/components/ui/CtaBanner";
import { ArrowRightIcon } from "@/components/ui/Icons";
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
      <section className="bg-navy page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="page-title text-center">Our Business</h1>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base text-white/80 sm:text-lg">
            Five industrial and executive service lines, plus an online parts and
            equipment shop. One standard of excellence.
            {` ${site.tagline}`}
          </p>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {brochureServices.map((service) => (
              <Link
                key={service.num}
                href={service.href}
                className="brochure-card flex min-h-0 flex-col transition-colors hover:border-gold sm:min-h-[220px]"
              >
                <span className="font-heading text-2xl text-gold">{service.num}</span>
                <h2 className="mt-4 font-heading text-2xl text-white">{service.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/75">
                  {service.body}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-5 text-xs font-semibold uppercase tracking-wider text-gold">
                  Explore More
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
            <Link
              href="/services/shop"
              className="flex min-h-0 flex-col border border-gold bg-gold p-5 sm:min-h-[220px] sm:p-8"
            >
              <span className="font-heading text-2xl text-navy">06</span>
              <h2 className="mt-4 font-heading text-2xl text-navy">
                Parts &amp; Equipment Shop
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-charcoal">
                Order genuine spare parts and select equipment online. Secure
                checkout in Ghana Cedis.
              </p>
              <span className="mt-auto inline-flex items-center gap-2 pt-5 text-xs font-semibold uppercase tracking-wider text-navy">
                Explore More
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </span>
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
