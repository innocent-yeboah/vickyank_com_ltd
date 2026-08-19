"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Muted looping hero film, with a still fallback if the clip cannot play.
 * iOS Safari only autoplays muted, inline H.264 — we bind those flags on the
 * element and retry play after the clip is ready, not treat the first reject as pause.
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

    node.muted = true;
    node.defaultMuted = true;
    node.playsInline = true;
    node.setAttribute("playsinline", "");
    node.setAttribute("webkit-playsinline", "");
    node.setAttribute("muted", "");

    if (paused || reduceMotion) {
      node.pause();
      return;
    }

    const tryPlay = () => {
      const attempt = node.play();
      if (attempt) {
        void attempt.catch(() => {
          /* iOS often rejects until canplay / first gesture — keep retrying. */
        });
      }
    };

    tryPlay();
    node.addEventListener("loadeddata", tryPlay);
    node.addEventListener("canplay", tryPlay);
    document.addEventListener("visibilitychange", tryPlay);
    window.addEventListener("pageshow", tryPlay);
    window.addEventListener("touchstart", tryPlay, { once: true, passive: true });

    return () => {
      node.removeEventListener("loadeddata", tryPlay);
      node.removeEventListener("canplay", tryPlay);
      document.removeEventListener("visibilitychange", tryPlay);
      window.removeEventListener("pageshow", tryPlay);
      window.removeEventListener("touchstart", tryPlay);
    };
  }, [paused, reduceMotion, failed]);

  const showFilm = !failed && !reduceMotion;

  return (
    <div className="absolute inset-0 bg-navy-cover">
      <div className="absolute inset-0" aria-hidden="true">
        {showFilm ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover brightness-[0.9] contrast-[1.06]"
            src="/videos/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/jaguar-xe.png"
            onError={() => setFailed(true)}
          />
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
