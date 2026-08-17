"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "VickYank's excavators arrived on schedule and in excellent condition. Their team handled logistics end to end.",
    name: "Construction Contractor",
    detail: "Equipment Rental Client",
  },
  {
    quote:
      "Transparent weighing, fair pricing, and professional documentation. Exactly how gold trading should be done.",
    name: "Gold Trading Partner",
    detail: "Repeat Client",
  },
  {
    quote:
      "The luxury fleet is immaculate and the service is discreet and punctual. Our executives use VickYank exclusively.",
    name: "Corporate Client",
    detail: "Executive Transport",
  },
] as const;

/**
 * Client testimonial carousel — pauses when prefers-reduced-motion is set.
 */
export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(media.matches);
    const onChange = () => setReduced(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, [reduced]);

  const t = testimonials[index];

  return (
    <div className="mx-auto max-w-3xl text-center">
      <div
        className="font-heading text-6xl leading-none text-gold"
        aria-hidden="true"
      >
        &ldquo;
      </div>
      <blockquote
        key={t.name}
        className="mt-2 text-xl leading-relaxed text-gray-700 transition-opacity duration-500 sm:text-2xl"
      >
        {t.quote}
      </blockquote>
      <figcaption className="mt-8">
        <p className="font-heading font-bold uppercase tracking-wide text-navy">
          {t.name}
        </p>
        <p className="text-sm text-gray-500">{t.detail}</p>
      </figcaption>
      <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label="Testimonials">
        {testimonials.map((item, i) => (
          <button
            key={item.name}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show testimonial from ${item.name}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 transition-colors ${
              i === index ? "bg-gold" : "bg-gray-300 hover:bg-gold/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
