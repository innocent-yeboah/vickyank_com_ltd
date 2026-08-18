import type { Metadata } from "next";
import CoverHero from "@/components/home/CoverHero";
import HomeHouses from "@/components/home/HomeHouses";
import CtaBanner from "@/components/ui/CtaBanner";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description: `${site.name} — ${site.tagline} Mining, gold trading, heavy equipment, and luxury car rental in Ghana.`,
};

/**
 * Three beats only: arrive, choose, begin.
 * Proof lives on About. Catalogues live inside each house.
 */
export default function HomePage() {
  return (
    <>
      <CoverHero />

      <section id="houses" className="bg-navy page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="page-title">Choose a house</h2>
          <p className="mt-4 max-w-lg text-base text-white/60">
            Five doors. One standard. Pick the work you came for.
          </p>
          <HomeHouses />
        </div>
      </section>

      <CtaBanner
        title="When you are ready"
        description="A specialist replies within one business day — or now, on WhatsApp."
      />
    </>
  );
}
