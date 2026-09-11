import { site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/Icons";

/**
 * Floating Talk to us — WhatsApp 055 only, number visible (Rule C).
 */
export default function WhatsAppButton() {
  return (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Talk to us on WhatsApp ${site.whatsappDisplay}`}
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 flex items-center gap-2.5 rounded-full border border-navy/10 bg-navy py-1.5 pl-1.5 pr-5 shadow-lg shadow-navy/20 transition-transform hover:scale-[1.03] motion-reduce:transition-none motion-reduce:hover:scale-100 sm:bottom-6 sm:right-6"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
        <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-body text-sm font-bold tracking-tight text-white">
          Talk to us
        </span>
        <span className="font-body text-[10px] tracking-wide text-white/65">
          WhatsApp · {site.whatsappDisplay}
        </span>
      </span>
    </a>
  );
}
