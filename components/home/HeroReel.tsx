"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Muted looping hero film, with a still fallback if the clip cannot play.
 */
export default function HeroReel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const node = videoRef.current;
    if (!node || failed) return;
    if (paused || reduceMotion) {
      node.pause();
      return;
    }
    const play = node.play();
    if (play) {
      play.catch(() => {
        setPaused(true);
      });
    }
  }, [paused, reduceMotion, failed]);

  const showFilm = !failed && !reduceMotion;

  return (
    <div className="absolute inset-0 bg-navy-cover">
      <div className="absolute inset-0" aria-hidden="true">
        {showFilm ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover brightness-[0.9] contrast-[1.06]"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/jaguar-xe.png"
            onError={() => setFailed(true)}
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        ) : (
          <Image
            src="/images/jaguar-xe.png"
            alt=""
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-[center_58%] brightness-[0.9] contrast-[1.06]"
          />
        )}
      </div>

      {showFilm ? (
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
