"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const frames = [
  {
    src: "/images/cat-loading-haul.png",
    alt: "Excavator loading a haul truck on site",
  },
  {
    src: "/images/volvo-ec550e.png",
    alt: "Volvo EC550E crawler excavator",
  },
  {
    src: "/images/hero-06-hitachi.png",
    alt: "Hitachi excavator at work",
  },
  {
    src: "/images/volvo-l250h.png",
    alt: "Volvo wheel loader filling a dump truck",
  },
  {
    src: "/images/cat-390fl.png",
    alt: "CAT 390F L excavator",
  },
  {
    src: "/images/hero-07-komatsu.png",
    alt: "Komatsu excavator on open ground",
  },
] as const;

/**
 * Slow cinematic strip of owned fleet photography.
 * Scrolls by hand when the visitor prefers reduced motion.
 */
export default function EquipmentFilm() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const sequence = reduceMotion ? frames : [...frames, ...frames];

  return (
    <section
      aria-label="Machines in the field"
      className="overflow-hidden bg-navy"
    >
      <div
        className={
          reduceMotion
            ? "flex snap-x snap-mandatory overflow-x-auto"
            : "flex w-max animate-filmstrip motion-reduce:animate-none hover:[animation-play-state:paused]"
        }
      >
        {sequence.map((frame, index) => (
          <div
            key={`${frame.src}-${index}`}
            className="relative h-[38vh] w-[min(88vw,26rem)] shrink-0 snap-start overflow-hidden sm:h-[48vh] sm:w-[34rem] lg:h-[56vh] lg:w-[40rem]"
          >
            <Image
              src={frame.src}
              alt={frame.alt}
              fill
              className="object-cover"
              sizes="40rem"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
