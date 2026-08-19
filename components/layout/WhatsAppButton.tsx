import { site } from "@/lib/site";

/**
 * Floating “Talk to us” action — opens WhatsApp to the company line.
 */
function TalkMark() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-6 w-6"
      aria-hidden="true"
      fill="none"
    >
      <rect
        x="3.2"
        y="11.2"
        width="14.5"
        height="9.6"
        rx="4.8"
        transform="rotate(-38 10.45 16)"
        stroke="#2F6BFF"
        strokeWidth="3.15"
      />
      <rect
        x="14.3"
        y="11.2"
        width="14.5"
        height="9.6"
        rx="4.8"
        transform="rotate(38 21.55 16)"
        stroke="#FF7A1A"
        strokeWidth="3.15"
      />
    </svg>
  );
}

export default function WhatsAppButton() {
  return (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Talk to us on WhatsApp"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 flex items-center gap-2.5 rounded-full bg-navy py-1.5 pl-1.5 pr-5 shadow-lg shadow-black/35 transition-transform hover:scale-[1.03] motion-reduce:transition-none motion-reduce:hover:scale-100 sm:bottom-6 sm:right-6"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
        <TalkMark />
      </span>
      <span className="font-body text-sm font-bold tracking-tight text-white">
        Talk to us
      </span>
    </a>
  );
}
