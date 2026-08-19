import Link from "next/link";
import { site } from "@/lib/site";
import HeroReel from "@/components/home/HeroReel";

const [taglineLead, taglineClose] = site.tagline.split(/(?<=\.)\s+/);

/**
 * Arrival screen — make the house obvious, and Enquire the easy next step.
 */
export default function CoverHero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-navy-cover">
      <HeroReel />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-navy-cover via-navy-cover/45 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-navy-cover/55 to-transparent sm:h-36"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:px-8 lg:pb-24">
        <h1 className="max-w-xl font-heading text-[2.125rem] font-medium leading-[1.12] text-white sm:max-w-2xl sm:text-5xl lg:max-w-3xl lg:text-6xl lg:leading-[1.08]">
          <span className="block">{taglineLead}</span>
          <span className="block">{taglineClose ?? ""}</span>
        </h1>
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/75 sm:mt-6 sm:text-base">
          Need gold, a machine, a site, or a car? Enquire once — a specialist
          replies within one business day.
        </p>
        <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row">
          <Link href="/contact" className="btn-gold">
            Enquire
          </Link>
          <Link href="#work" className="btn-outline-light">
            Start with your outcome
          </Link>
        </div>
      </div>
    </section>
  );
}
