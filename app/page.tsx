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
          <h2 className="page-title">Tell us what you need</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
            Gold, a machine, parts, a crew, or a car — pick the line that
            matches. One enquiry reaches a specialist. You hear back within one
            business day with availability and a clear next step.
          </p>
          <HomeHouses />
        </div>
      </section>

      <HomeNewsletter />
    </>
  );
}
