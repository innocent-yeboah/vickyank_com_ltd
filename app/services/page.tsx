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
          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5 lg:grid-cols-3">
            {brochureServices.map((service) => (
              <Link
                key={service.num}
                href={service.href}
                className="brochure-card flex min-h-0 flex-col p-3 transition-colors hover:border-gold sm:min-h-[220px] sm:p-8"
              >
                <span className="font-heading text-lg text-gold sm:text-2xl">{service.num}</span>
                <h2 className="mt-2 font-heading text-base leading-snug text-white sm:mt-4 sm:text-2xl">
                  {service.title}
                </h2>
                <p className="mt-2 line-clamp-3 flex-1 text-xs leading-relaxed text-white/75 sm:mt-3 sm:line-clamp-none sm:text-sm">
                  {service.body}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 pt-3 text-[10px] font-semibold uppercase tracking-wider text-gold sm:gap-2 sm:pt-5 sm:text-xs">
                  Explore More
                  <ArrowRightIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                </span>
              </Link>
            ))}
            <Link
              href="/services/shop"
              className="flex min-h-0 flex-col border border-gold bg-gold p-3 sm:min-h-[220px] sm:p-8"
            >
              <span className="font-heading text-lg text-navy sm:text-2xl">06</span>
              <h2 className="mt-2 font-heading text-base leading-snug text-navy sm:mt-4 sm:text-2xl">
                Parts &amp; Equipment Shop
              </h2>
              <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-charcoal sm:mt-3 sm:line-clamp-none sm:text-sm">
                Order genuine spare parts and select equipment online. Secure
                checkout in Ghana Cedis.
              </p>
              <span className="mt-auto inline-flex items-center gap-1 pt-3 text-[10px] font-semibold uppercase tracking-wider text-navy sm:gap-2 sm:pt-5 sm:text-xs">
                Explore More
                <ArrowRightIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
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
