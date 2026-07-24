"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const SLIDES = [
  {
    src: "/images/hero-00-mining.png",
    alt: "Mining wash plant and excavator operating on site",
  },
  {
    src: "/images/hero-01-washplant.png",
    alt: "Gold wash plant discharging processed material",
  },
  {
    src: "/images/hero-02-loader.png",
    alt: "CAT wheel loader beside industrial barge equipment",
  },
  {
    src: "/images/hero-03-geologists.png",
    alt: "Field geologists examining soil in a trench",
  },
  {
    src: "/images/hero-04-barge.png",
    alt: "River barge processing unit with crew approaching by boat",
  },
  {
    src: "/images/hero-05-excavator.png",
    alt: "Komatsu excavator and Caterpillar haul truck on a quarry site",
  },
  {
    src: "/images/hero-06-hitachi.png",
    alt: "Hitachi haul truck and excavator at an open-pit mine",
  },
  {
    src: "/images/hero-07-komatsu.png",
    alt: "Komatsu PC5500 excavator loading a haul truck",
  },
] as const;

type Transition =
  | "fade"
  | "zoom"
  | "slide-left"
  | "slide-right"
  | "slide-up";

const TRANSITIONS: Transition[] = [
  "fade",
  "zoom",
  "slide-left",
  "slide-right",
  "slide-up",
];

const INTERVAL_MS = 5500;

function pickRandomIndex(length: number, exclude: number) {
  if (length <= 1) return 0;
  let next = exclude;
  while (next === exclude) {
    next = Math.floor(Math.random() * length);
  }
  return next;
}

function pickRandomTransition(exclude?: Transition): Transition {
  let next = TRANSITIONS[Math.floor(Math.random() * TRANSITIONS.length)];
  if (exclude && TRANSITIONS.length > 1) {
    while (next === exclude) {
      next = TRANSITIONS[Math.floor(Math.random() * TRANSITIONS.length)];
    }
  }
  return next;
}

/** Resting / visible pose for the active slide. */
function activePose(transition: Transition) {
  switch (transition) {
    case "zoom":
      return "opacity-100 scale-100";
    case "slide-left":
    case "slide-right":
      return "opacity-100 translate-x-0";
    case "slide-up":
      return "opacity-100 translate-y-0";
    default:
      return "opacity-100";
  }
}

/** Hidden pose for inactive slides — matches the incoming transition. */
function hiddenPose(transition: Transition) {
  switch (transition) {
    case "zoom":
      return "opacity-0 scale-110";
    case "slide-left":
      return "opacity-0 translate-x-10";
    case "slide-right":
      return "opacity-0 -translate-x-10";
    case "slide-up":
      return "opacity-0 translate-y-10";
    default:
      return "opacity-0";
  }
}

/**
 * Full-bleed hero background slideshow.
 * Auto-advances on a timer; next slide and transition style are chosen at random.
 */
export default function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const [transition, setTransition] = useState<Transition>("fade");
  const [reducedMotion, setReducedMotion] = useState(false);

  const goTo = useCallback((index: number) => {
    setActive((current) => {
      if (index === current) return current;
      setTransition((prev) => pickRandomTransition(prev));
      return index;
    });
  }, []);

  const advance = useCallback(() => {
    setActive((current) => {
      const next = pickRandomIndex(SLIDES.length, current);
      setTransition((prev) => pickRandomTransition(prev));
      return next;
    });
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);
    const onChange = () => setReducedMotion(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const id = window.setInterval(advance, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [advance, reducedMotion]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#111111]">
      <div className="absolute inset-0" aria-hidden="true">
        {SLIDES.map((slide, index) => {
          const isActive = index === active;
          const pose = reducedMotion
            ? isActive
              ? "opacity-100"
              : "opacity-0"
            : isActive
              ? activePose(transition)
              : hiddenPose(transition);

          return (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                isActive ? "z-[1]" : "z-0 pointer-events-none"
              } ${pose}`}
            >
              <Image
                src={slide.src}
                alt=""
                fill
                priority={index < 2}
                quality={90}
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-6 left-1/2 z-[2] flex -translate-x-1/2 gap-2">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show operations photo ${index + 1}`}
            aria-current={index === active ? "true" : undefined}
            onClick={() => goTo(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === active
                ? "w-6 bg-[#FFC107]"
                : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
