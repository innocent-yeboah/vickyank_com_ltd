"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

/**
 * Five houses in menu order — mining → gold → machines → parts → cars.
 * Still montage stands in for a multi-house film until a cut reel exists.
 */
const HOUSES = [
  {
    src: "/images/cat-loading-haul.png",
    alt: "Excavator loading a haul truck on a mining site",
    label: "Mining",
  },
  {
    src: "/images/gold-bars.jpg",
    alt: "Refined gold bars prepared for trade",
    label: "Gold",
  },
  {
    src: "/images/volvo-ec550e.png",
    alt: "Volvo excavator on site",
    label: "Machines",
  },
  {
    src: "/images/spare-parts-inventory.png",
    alt: "Excavator spare parts inventory",
    label: "Parts",
  },
  {
    src: "/images/land-cruiser.png",
    alt: "Executive Land Cruiser from the hire fleet",
    label: "Cars",
  },
] as const;

/** ~18s full pass — matches the short multi-house reel brief. */
const INTERVAL_MS = 3600;

/**
 * Home arrival reel: ordered stills across all five service lines.
 * Pause and reduced-motion keep the mining frame as the trust-first still.
 */
export default function HeroReel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const advance = useCallback(() => {
    setActive((current) => (current + 1) % HOUSES.length);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = window.setInterval(advance, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [advance, paused, reduceMotion]);

  return (
    <div className="absolute inset-0 bg-navy-cover">
      <div className="absolute inset-0" aria-hidden="true">
        {HOUSES.map((house, index) => {
          const isActive = index === active;
          return (
            <div
              key={house.src}
              className={`absolute inset-0 transition-opacity duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                isActive ? "z-[1] opacity-100" : "z-0 opacity-0"
              }`}
            >
              <Image
                src={house.src}
                alt=""
                fill
                priority={index === 0}
                quality={90}
                sizes="100vw"
                className={`object-cover brightness-[1.08] contrast-[1.02] ${
                  isActive && !reduceMotion && !paused
                    ? "motion-safe:animate-cinematic-still"
                    : ""
                }`}
              />
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-4 left-4 z-20 flex items-center gap-3 sm:bottom-6 sm:left-6">
        <p className="text-[10px] tracking-[0.18em] text-white/55">
          {HOUSES[active].label}
        </p>
        <div className="flex gap-1.5" aria-hidden="true">
          {HOUSES.map((house, index) => (
            <span
              key={house.src}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === active ? "w-5 bg-gold" : "w-1.5 bg-white/35"
              }`}
            />
          ))}
        </div>
      </div>

      {!reduceMotion ? (
        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          className="absolute bottom-4 right-4 z-20 text-[10px] tracking-[0.18em] text-white/50 transition-colors hover:text-gold sm:bottom-6 sm:right-6"
          aria-pressed={paused}
          aria-label={paused ? "Play showreel" : "Pause showreel"}
        >
          {paused ? "Play" : "Pause"}
        </button>
      ) : null}
    </div>
  );
}
