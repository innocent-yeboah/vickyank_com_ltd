"use client";

import { useEffect, useRef, useState } from "react";

type StatItem = {
  value: number;
  suffix?: string;
  label: string;
};

type StatsCounterProps = {
  stats: readonly StatItem[];
};

/**
 * Trust-indicator band that counts from 0 to each target when the
 * section scrolls into view. Re-animates each time it re-enters the viewport.
 */
export default function StatsCounter({ stats }: StatsCounterProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          setTick((t) => t + 1);
        } else {
          setActive(false);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="border-b border-gold/20 bg-charcoal"
      aria-label="Company performance indicators"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCell
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix ?? ""}
            label={stat.label}
            active={active}
            animationKey={tick}
          />
        ))}
      </div>
    </section>
  );
}

type StatCellProps = {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
  animationKey: number;
};

function StatCell({
  value,
  suffix,
  label,
  active,
  animationKey,
}: StatCellProps) {
  const [display, setDisplay] = useState(0);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!active) {
      setDisplay(0);
      return;
    }

    if (reducedMotion) {
      setDisplay(value);
      return;
    }

    const duration = 1600;
    const start = performance.now();
    let frame = 0;

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // Ease-out cubic for a premium industrial settle
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [active, animationKey, value, reducedMotion]);

  return (
    <div className="flex flex-col items-center px-6 py-10 text-center">
      <span className="font-heading text-4xl font-bold text-gold sm:text-5xl tabular-nums">
        {display}
        {suffix}
      </span>
      <span className="mt-2 text-sm uppercase tracking-widest text-gray-400">
        {label}
      </span>
    </div>
  );
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(media.matches);
    const onChange = () => setReduced(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return reduced;
}
