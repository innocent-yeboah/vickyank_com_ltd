import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CoverHero from "@/components/home/CoverHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBanner from "@/components/ui/CtaBanner";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { brochureServices, whyPillars } from "@/content/brochure";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description: `${site.name} — ${site.tagline} Mining, gold trading, heavy equipment, and luxury car rental in Ghana.`,
};

export default function HomePage() {
  return (
    <>
      <CoverHero />

      <section className="bg-navy-ink page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            title="Our Business"
            description="Five industrial and executive service lines. One standard of excellence."
          />
          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5 lg:grid-cols-3">
            {brochureServices.map((service) => (
              <Link
                key={service.num}
                href={service.href}
                className="brochure-card flex min-h-0 flex-col p-3 transition-colors hover:border-gold sm:min-h-[220px] sm:p-8"
              >
                <span className="font-heading text-lg text-gold sm:text-2xl">{service.num}</span>
                <h3 className="mt-2 font-heading text-base leading-snug text-white sm:mt-4 sm:text-2xl">
                  {service.title}
                </h3>
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
              href="/contact"
              className="flex min-h-0 flex-col border border-gold bg-gold p-3 sm:min-h-[220px] sm:p-8"
            >
              <span className="font-heading text-lg text-navy sm:text-2xl">06</span>
              <h3 className="mt-2 font-heading text-base leading-snug text-navy sm:mt-4 sm:text-2xl">
                Contact Us Today
              </h3>
              <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-charcoal sm:mt-3 sm:line-clamp-none sm:text-sm">
                Tell us your requirement. A specialist responds within one business day.
              </p>
              <span className="mt-auto inline-flex items-center gap-1 pt-3 text-[10px] font-semibold uppercase tracking-wider text-navy sm:gap-2 sm:pt-5 sm:text-xs">
                Explore More
                <ArrowRightIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Partnership"
            title="Why Choose VickYank?"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {whyPillars.map((pillar) => (
              <article key={pillar.title} className="brochure-card">
                <h3 className="font-heading text-2xl text-gold">{pillar.title}</h3>
                <p className="mt-3 leading-relaxed text-white/80">{pillar.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center font-heading text-lg italic text-gold sm:text-xl">
            Serious projects demand serious partners. {site.tagline}
          </p>
          <div className="relative mt-12 aspect-[16/9] overflow-hidden bg-navy md:aspect-[21/7]">
            <Image
              src="/images/volvo-ec550e.png"
              alt="Volvo EC550E excavator in operation"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-ink via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <CtaBanner
        title="Get in Touch"
        description="Let’s discuss your needs — mining, gold, equipment, spare parts, or luxury transport."
      />
    </>
  );
}
