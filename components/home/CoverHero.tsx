import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Full-bleed hero — photography first, restrained type, two clear actions.
 */
export default function CoverHero() {
  return (
    <section className="relative flex min-h-[78svh] items-end overflow-hidden bg-navy-cover sm:min-h-[70svh] lg:min-h-[calc(100svh-5rem)]">
      <Image
        src="/images/hero-haul.png"
        alt="Haul truck and loader on a VickYank mining site"
        fill
        priority
        quality={95}
        className="object-cover object-[center_58%] brightness-[0.85] contrast-[1.08] sm:object-center"
        sizes="100vw"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-navy-cover via-navy-cover/45 to-navy-cover/15"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-24 sm:px-6 sm:pb-16 lg:px-8 lg:pb-24">
        <h1 className="max-w-3xl font-heading text-[2rem] font-medium leading-[1.12] text-white sm:text-5xl lg:text-6xl lg:leading-[1.08]">
          {site.tagline}
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/80 sm:mt-6 sm:text-base">
          Mining, gold, machinery, and executive mobility — delivered from Ghana
          with the care of a private house.
        </p>
        <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row">
          <Link href="/services" className="btn-gold">
            Our Business
          </Link>
          <Link href="/contact" className="btn-outline-light">
            Enquire
          </Link>
        </div>
      </div>
    </section>
  );
}
