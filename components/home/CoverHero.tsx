import Link from "next/link";
import { site } from "@/lib/site";
import HeroReel from "@/components/home/HeroReel";

/**
 * Arrival screen — make the house obvious, and Enquire the easy next step.
 */
export default function CoverHero() {
  return (
    <section className="relative flex min-h-[78svh] items-end overflow-hidden bg-navy-cover sm:min-h-[70svh] lg:min-h-[calc(100svh-6rem)]">
      <HeroReel />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-navy-cover via-navy-cover/50 to-navy-cover/20"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-24 sm:px-6 sm:pb-16 lg:px-8 lg:pb-24">
        <h1 className="max-w-3xl font-heading text-[2rem] font-medium leading-[1.12] text-white sm:text-5xl lg:text-6xl lg:leading-[1.08]">
          {site.tagline}
        </h1>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-white/75 sm:mt-6 sm:text-base">
          Mining, gold, machines, and cars — one house in Ghana.
        </p>
        <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row">
          <Link href="/contact" className="btn-gold">
            Enquire
          </Link>
          <Link href="#houses" className="btn-outline-light">
            Choose a house
          </Link>
        </div>
      </div>
    </section>
  );
}
