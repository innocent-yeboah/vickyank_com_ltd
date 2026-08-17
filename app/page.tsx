import type { Metadata } from "next";
import Image from "next/image";
import CoverHero from "@/components/home/CoverHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBanner from "@/components/ui/CtaBanner";
import BusinessServiceGrid from "@/components/ui/BusinessServiceGrid";
import { whyPillars } from "@/content/brochure";
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
            description="Industrial and executive service lines. One standard of excellence."
          />
          <BusinessServiceGrid
            sixth={{
              href: "/contact",
              title: "Contact Us Today",
              body: "Tell us your requirement. A specialist responds within one business day.",
              image: "/images/contact-specialist.png",
              imageAlt: "VickYank specialist ready to take your enquiry",
            }}
          />
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
