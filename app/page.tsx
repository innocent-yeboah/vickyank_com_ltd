import type { Metadata } from "next";
import Link from "next/link";
import CoverHero from "@/components/home/CoverHero";
import HomeNewsletter from "@/components/home/HomeNewsletter";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description: `${site.name} — ${site.tagline} Mining, gold trading, digging machines, spare parts, and luxury car rental in Ghana.`,
};

/**
 * Arrive on hero, then light band names the five lines (Rules A + V3).
 */
export default function HomePage() {
  return (
    <>
      <CoverHero />

      <section className="bg-white page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="page-title">What we do</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-charcoal sm:text-lg">
            Mining. Gold trading. Digging machines. Spare parts. Fancy cars.
            One house — open Our Business to learn each line, then enquire when
            you are ready.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/services" className="btn-gold">
              Our Business
            </Link>
            <Link href="/contact" className="btn-outline-dark">
              Enquire
            </Link>
          </div>
        </div>
      </section>

      <HomeNewsletter />
    </>
  );
}
