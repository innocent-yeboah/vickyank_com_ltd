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

      <section className="bg-navy page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Business"
            description="Select a house. We handle the rest — from site to settlement, machine to motorcade."
          />
          <BusinessServiceGrid
            sixth={{
              href: "/contact",
              title: "Speak with us",
              body: "A specialist responds within one business day.",
              image: "/images/contact-specialist.png",
              imageAlt: "VickYank specialist ready to take your enquiry",
            }}
          />
        </div>
      </section>

      <section className="border-t border-white/10 bg-navy-darker page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Why VickYank" />
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {whyPillars.map((pillar) => (
              <article key={pillar.title}>
                <span
                  aria-hidden="true"
                  className="mb-5 block h-px w-8 bg-gold"
                />
                <h3 className="font-heading text-xl text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {pillar.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[40vh] overflow-hidden lg:min-h-[50vh]">
        <Image
          src="/images/volvo-ec550e.png"
          alt="Volvo EC550E excavator in operation"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-navy-cover/40"
        />
      </section>

      <CtaBanner
        title="Begin a conversation"
        description="Tell us what you need. We reply with a clear next step — not a brochure."
      />
    </>
  );
}
