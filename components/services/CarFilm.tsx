"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const frames = [
  {
    src: "/images/cadillac-escalade.png",
    alt: "Cadillac Escalade",
  },
  {
    src: "/images/mercedes-gle.png",
    alt: "Mercedes-AMG GLE Coupe",
  },
  {
    src: "/images/jaguar-xe.png",
    alt: "Jaguar XE",
  },
  {
    src: "/images/land-cruiser.png",
    alt: "Toyota Land Cruiser",
  },
  {
    src: "/images/ram-trx.png",
    alt: "Ram 1500 TRX",
  },
  {
    src: "/images/jetour-suv.png",
    alt: "Jetour SUV",
  },
] as const;

/**
 * Slow cinematic strip of the luxury fleet.
 * Scrolls by hand when the visitor prefers reduced motion.
 */
export default function CarFilm() {
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
    <section aria-label="The fleet in motion" className="overflow-hidden bg-navy">
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
            className="relative h-[40vh] w-[min(90vw,28rem)] shrink-0 snap-start overflow-hidden sm:h-[52vh] sm:w-[38rem] lg:h-[60vh] lg:w-[44rem]"
          >
            <Image
              src={frame.src}
              alt={frame.alt}
              fill
              className="object-cover"
              sizes="44rem"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
