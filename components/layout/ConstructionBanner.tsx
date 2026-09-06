/**
 * Sitewide white construction banner with looping cartoon figures.
 * Soft, friendly motion — respects prefers-reduced-motion.
 */
export default function ConstructionBanner() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-x-0 top-0 z-[70] h-[3.25rem] overflow-hidden border-b border-navy/10 bg-white text-navy sm:h-14"
    >
      <div className="relative mx-auto flex h-full max-w-7xl items-center justify-center px-4 sm:px-6">
        <p className="relative z-10 rounded-sm bg-white/85 px-3 py-1 text-center font-body text-[11px] font-semibold tracking-[0.12em] text-navy sm:text-xs sm:tracking-[0.16em]">
          <span className="sm:hidden">SITE UNDER CONSTRUCTION</span>
          <span className="hidden sm:inline">
            THIS PROJECT IS UNDER CONSTRUCTION — WE&apos;RE FINISHING THE HOUSE
          </span>
        </p>

        <div
          className="pointer-events-none absolute inset-y-0 left-0 flex w-max items-end gap-10 pb-1 opacity-90 animate-construction-parade motion-reduce:animate-none"
          aria-hidden="true"
        >
          <CartoonStrip />
          <CartoonStrip />
        </div>
      </div>
    </div>
  );
}

function CartoonStrip() {
  return (
    <div className="flex shrink-0 items-end gap-10 pr-10">
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
      className={`h-10 w-auto motion-reduce:animate-none sm:h-11 ${
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
      className="h-9 w-auto animate-construction-roll motion-reduce:animate-none sm:h-10"
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
      className={`h-8 w-auto motion-reduce:animate-none sm:h-9 ${
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
      className="h-7 w-auto animate-construction-float motion-reduce:animate-none sm:h-8"
      fill="none"
    >
      <ellipse cx="18" cy="26" rx="10" ry="1.5" fill="#1A1A2E" opacity="0.1" />
      <path d="M6 16c0-8 5-14 12-14s12 6 12 14H6Z" fill="#D4AF37" />
      <rect x="4" y="15" width="28" height="5" rx="2" fill="#B8942D" />
      <rect x="15" y="4" width="6" height="4" rx="1" fill="#E8C95A" />
    </svg>
  );
}
