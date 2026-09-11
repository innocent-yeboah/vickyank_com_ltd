import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CoverHero from "@/components/home/CoverHero";
import HomeNewsletter from "@/components/home/HomeNewsletter";
import BusinessServiceGrid from "@/components/ui/BusinessServiceGrid";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { aboutCopy } from "@/content/brochure";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description: `${site.name} — ${site.tagline} Mining, gold trading, digging machines, spare parts, and luxury car rental in Ghana.`,
};

/**
 * Richer home (Kranoc-shaped, brochure-toned): hero → services → about → why us → newsletter.
 * No counters or skill bars.
 */
export default function HomePage() {
  return (
    <>
      <CoverHero />

      <section className="bg-white page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="page-title">Our Business</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-charcoal sm:text-lg">
            Mining. Gold trading. Digging machines. Spare parts. Fancy cars.
            Choose a line to learn what we do — then enquire when you are ready.
          </p>
          <BusinessServiceGrid />
          <div className="mt-10">
            <Link href="/services" className="btn-outline-dark">
              View all lines
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-soft page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="kicker">About us</p>
              <h2 className="mt-3 page-title">One house. One standard.</h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-charcoal sm:text-lg">
                {aboutCopy.paragraphs[0]}
              </p>
              <Link href="/about" className="btn-gold mt-8">
                About VickYank
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-white">
              <Image
                src="/images/volvo-ec550e.png"
                alt="Volvo excavator on a VickYank site"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="page-title">Why work with us</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-charcoal sm:text-lg">
            The same discipline across mining, gold, machines, parts, and
            mobility — so you always know who is accountable.
          </p>
          <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:gap-x-16 lg:gap-y-14">
            {aboutCopy.differentiators.map((item, index) => (
              <ScrollReveal key={item.title} as="article" delayMs={index * 100}>
                <span
                  aria-hidden="true"
                  className="scroll-reveal-rule mb-5 block h-px w-8 bg-gold"
                />
                <h3 className="font-heading text-xl text-navy sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-charcoal">
                  {item.body}
                </p>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-gold">
              Enquire
            </Link>
            <Link href="/about" className="btn-outline-dark">
              Read more about us
            </Link>
          </div>
        </div>
      </section>

      <HomeNewsletter />
    </>
  );
}
