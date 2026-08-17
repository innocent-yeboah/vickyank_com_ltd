import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CoverHero from "@/components/home/CoverHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBanner from "@/components/ui/CtaBanner";
import { aboutCopy, brochureServices, whyPillars } from "@/content/brochure";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description: `${site.name} — ${site.tagline} Mining, gold trading, heavy equipment, and luxury car rental in Ghana.`,
};

export default function HomePage() {
  return (
    <>
      <CoverHero />

      <section className="bg-navy page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="kicker">{aboutCopy.kicker}</p>
          <h2 className="page-title mt-3">{aboutCopy.title}</h2>
          <div className="mt-10 grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
            <div className="space-y-5 text-base leading-relaxed text-white/80 sm:text-lg">
              {aboutCopy.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-navy-ink">
              <Image
                src="/images/volvo-ec550e.png"
                alt="Volvo EC550E excavator on site"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {aboutCopy.differentiators.map((item) => (
              <article key={item.title} className="brochure-card">
                <h3 className="font-heading text-xl text-gold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-ink page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Portfolio"
            title="Our Services"
            description="Five industrial and executive service lines. One standard of excellence."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {brochureServices.map((service) => (
              <Link
                key={service.num}
                href={service.href}
                className="brochure-card flex min-h-0 flex-col transition-colors hover:border-gold sm:min-h-[220px]"
              >
                <span className="font-heading text-2xl text-gold">{service.num}</span>
                <h3 className="mt-4 font-heading text-2xl text-white">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/75">
                  {service.body}
                </p>
              </Link>
            ))}
            <Link
              href="/contact"
              className="flex min-h-0 flex-col justify-center border border-gold bg-gold p-5 sm:min-h-[220px] sm:p-8"
            >
              <span className="font-heading text-2xl text-navy">06</span>
              <h3 className="mt-4 font-heading text-2xl text-navy">Contact Us Today</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal">
                Tell us your requirement. A specialist responds within one business day.
              </p>
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
