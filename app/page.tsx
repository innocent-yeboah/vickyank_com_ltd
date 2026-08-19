import type { Metadata } from "next";
import CoverHero from "@/components/home/CoverHero";
import HomeHouses from "@/components/home/HomeHouses";
import HomeNewsletter from "@/components/home/HomeNewsletter";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description: `${site.name} — ${site.tagline} Mining, gold trading, heavy equipment, and luxury car rental in Ghana.`,
};

/**
 * Three beats only: arrive, choose, stay informed.
 * Proof lives on About. Catalogues live inside each house.
 */
export default function HomePage() {
  return (
    <>
      <CoverHero />

      <section id="work" className="bg-navy page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="page-title">What do you need?</h2>
          <p className="mt-4 max-w-lg text-base text-white/60">
            Mining, gold, machines, parts, or a car. Tap the one that matches —
            we take it from there.
          </p>
          <HomeHouses />
        </div>
      </section>

      <HomeNewsletter />
    </>
  );
}
