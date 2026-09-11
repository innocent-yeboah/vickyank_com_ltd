"use client";

import Image from "next/image";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

/**
 * Full-page construction lock on the homepage — no access to the site beneath.
 * Soft cartoon motion; respects prefers-reduced-motion.
 */
export default function ConstructionBanner() {
  const pathname = usePathname();
  const locked = pathname === "/";

  useEffect(() => {
    if (!locked) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [locked]);

  if (!locked) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="construction-title"
      aria-describedby="construction-copy"
      className="fixed inset-0 z-[200] flex min-h-[100svh] flex-col overflow-hidden bg-white text-navy"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-[12%] flex w-max opacity-90 animate-construction-parade motion-reduce:animate-none"
        aria-hidden="true"
      >
        <CartoonStrip large />
        <CartoonStrip large />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-[18%] flex w-max opacity-80 animate-construction-parade motion-reduce:animate-none [animation-direction:reverse] [animation-duration:22s]"
        aria-hidden="true"
      >
        <CartoonStrip />
        <CartoonStrip />
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        <Image
          src="/images/vickyank-mark.png"
          alt=""
          width={865}
          height={475}
          className="h-12 w-auto brightness-110 contrast-110 sm:h-14"
          priority
        />
        <p className="mt-4 font-lockup text-2xl font-bold tracking-[-0.02em] text-navy sm:text-3xl">
          {site.shortName}
        </p>
        <p className="mt-1 font-body text-[11px] font-medium uppercase tracking-[0.2em] text-navy/55">
          Limited Company
        </p>

        <h1
          id="construction-title"
          className="mt-10 max-w-xl font-heading text-3xl font-medium leading-tight text-navy sm:text-5xl"
        >
          This project is under construction
        </h1>
        <p
          id="construction-copy"
          className="mt-4 max-w-md text-base leading-relaxed text-navy/65 sm:text-lg"
        >
          We&apos;re finishing the house. The full site will open here soon —
          thank you for your patience.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 text-sm text-navy/70">
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-navy underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-gold-dark"
          >
            Talk to us on WhatsApp · {site.whatsappDisplay}
          </a>
          <a
            href={`tel:${site.phoneInternational}`}
            className="transition-colors hover:text-navy"
          >
            {site.phoneDisplay}
          </a>
          <a
            href={`tel:${site.phoneAltInternational}`}
            className="transition-colors hover:text-navy"
          >
            {site.phoneAltDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}

function CartoonStrip({ large = false }: { large?: boolean }) {
  const scale = large ? "scale-125 sm:scale-150" : "";
  return (
    <div className={`flex shrink-0 items-end gap-12 pr-12 sm:gap-16 sm:pr-16 ${scale}`}>
      <WorkerCartoon />
      <ConeCartoon />
      <ExcavatorCartoon />
      <ConeCartoon delay />
      <HardHatCartoon />
      <WorkerCartoon wave />
    </div>
  );
}

function WorkerCartoon({ wave = false }: { wave?: boolean }) {
  return (
    <svg
      viewBox="0 0 48 56"
      className={`h-14 w-auto motion-reduce:animate-none sm:h-16 ${
        wave ? "animate-construction-bob-delay" : "animate-construction-bob"
      }`}
      fill="none"
    >
      <ellipse cx="24" cy="54" rx="12" ry="2" fill="#1A1A2E" opacity="0.12" />
      <path d="M18 22h12l2 18H16l2-18Z" fill="#1E3A8A" />
      <rect x="17" y="20" width="14" height="4" rx="1" fill="#D4AF37" />
      <circle cx="24" cy="14" r="6" fill="#F5D0A9" />
      <path d="M16 12c0-5 3.5-8 8-8s8 3 8 8H16Z" fill="#D4AF37" />
      <rect x="15" y="11" width="18" height="3" rx="1" fill="#B8942D" />
      <g className="origin-bottom animate-construction-legs motion-reduce:animate-none">
        <path
          d="M18 40v12M30 40v12"
          stroke="#1A1A2E"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>
      <path
        d={wave ? "M16 26c-4-2-6 2-4 5" : "M16 26c-3 2-4 6-2 8"}
        stroke="#F5D0A9"
        strokeWidth="2.5"
        strokeLinecap="round"
        className={
          wave
            ? "origin-[16px_26px] animate-construction-wave motion-reduce:animate-none"
            : undefined
        }
      />
      <path
        d="M32 26c3 2 4 6 2 8"
        stroke="#F5D0A9"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ExcavatorCartoon() {
  return (
    <svg
      viewBox="0 0 72 40"
      className="h-12 w-auto animate-construction-roll motion-reduce:animate-none sm:h-14"
      fill="none"
    >
      <ellipse cx="36" cy="38" rx="22" ry="2" fill="#1A1A2E" opacity="0.12" />
      <rect x="18" y="18" width="28" height="12" rx="2" fill="#D4AF37" />
      <rect x="22" y="10" width="12" height="10" rx="1.5" fill="#1E3A8A" />
      <circle cx="26" cy="32" r="5" fill="#1A1A2E" />
      <circle cx="26" cy="32" r="2" fill="#E8C95A" />
      <circle cx="42" cy="32" r="5" fill="#1A1A2E" />
      <circle cx="42" cy="32" r="2" fill="#E8C95A" />
      <path
        d="M46 20h8l10-10 4 2-8 12H46V20Z"
        fill="#FF6B6B"
        className="origin-[46px_20px] animate-construction-arm motion-reduce:animate-none"
      />
      <rect x="64" y="8" width="5" height="8" rx="1" fill="#4ECDC4" />
    </svg>
  );
}

function ConeCartoon({ delay = false }: { delay?: boolean }) {
  return (
    <svg
      viewBox="0 0 28 40"
      className={`h-11 w-auto motion-reduce:animate-none sm:h-12 ${
        delay ? "animate-construction-hop-delay" : "animate-construction-hop"
      }`}
      fill="none"
    >
      <ellipse cx="14" cy="38" rx="10" ry="2" fill="#1A1A2E" opacity="0.12" />
      <path d="M6 36h16l-4-28H10L6 36Z" fill="#FF6B6B" />
      <path d="M9 24h10l-.8-6H9.8L9 24Z" fill="#FFFFFF" />
      <path d="M8 32h12l-.6-4H8.6L8 32Z" fill="#FFFFFF" />
      <rect x="5" y="35" width="18" height="3" rx="1" fill="#1A1A2E" />
    </svg>
  );
}

function HardHatCartoon() {
  return (
    <svg
      viewBox="0 0 36 28"
      className="h-10 w-auto animate-construction-float motion-reduce:animate-none sm:h-11"
      fill="none"
    >
      <ellipse cx="18" cy="26" rx="10" ry="1.5" fill="#1A1A2E" opacity="0.1" />
      <path d="M6 16c0-8 5-14 12-14s12 6 12 14H6Z" fill="#D4AF37" />
      <rect x="4" y="15" width="28" height="5" rx="2" fill="#B8942D" />
      <rect x="15" y="4" width="6" height="4" rx="1" fill="#E8C95A" />
    </svg>
  );
}
