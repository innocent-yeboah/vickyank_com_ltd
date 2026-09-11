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
 * Arrive, understand the five lines, then go deeper via Our Business.
 */
export default function HomePage() {
  return (
    <>
      <CoverHero />

      <section className="bg-navy page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="page-title">What we do</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
            Mining. Gold trading. Digging machines. Spare parts. Fancy cars.
            One house — open Our Business to learn each line, then enquire when
            you are ready.
          </p>
          <Link href="/services" className="btn-gold mt-8">
            Our Business
          </Link>
        </div>
      </section>

      <HomeNewsletter />
    </>
  );
}
