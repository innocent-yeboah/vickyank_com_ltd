import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Full-bleed aerial plant hero — graded for contrast, sharpness, and copy legibility.
 */
export default function CoverHero() {
  return (
    <section className="relative flex min-h-[70svh] items-center overflow-hidden bg-navy-cover sm:min-h-[620px] lg:min-h-[calc(100svh-5rem)]">
      <Image
        src="/images/hero-haul.png"
        alt="Haul truck and loader on a VickYank mining site"
        fill
        priority
        quality={95}
        className="object-cover object-[center_58%] contrast-[1.22] saturate-[1.18] brightness-[0.9] scale-105 motion-reduce:scale-100"
        sizes="100vw"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-navy-cover via-navy-cover/70 to-black/30 sm:via-navy-cover/55"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 shadow-[inset_0_0_140px_rgba(0,12,36,0.55)]"
      />
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 py-12 sm:px-10 sm:py-16 lg:px-[80px] xl:px-[130px]">
        <p className="kicker">On Site in Ghana</p>
        <h1 className="mt-4 max-w-[700px] font-heading text-[1.85rem] font-semibold leading-[1.12] text-white sm:mt-5 sm:text-5xl lg:text-[70px] lg:leading-[1.05]">
          {site.tagline}
        </h1>
        <p className="mt-5 max-w-[560px] text-sm leading-relaxed text-white/90 sm:mt-8 sm:text-lg">
          Located in Ghana, West Africa, {site.name} delivers mining operations,
          gold trading, heavy equipment, spare parts, and luxury car rental.
        </p>
        <Link href="/about" className="btn-gold mt-8 sm:mt-10">
          Learn More
        </Link>
      </div>
    </section>
  );
}
