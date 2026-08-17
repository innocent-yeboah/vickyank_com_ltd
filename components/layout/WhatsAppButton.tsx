import { site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/Icons";

/**
 * Floating WhatsApp action button, visible on every page.
 * Opens a chat with the company line (+233 55 700 4112).
 */
export default function WhatsAppButton() {
  return (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with VickYank Limited on WhatsApp"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform hover:scale-105 motion-reduce:transition-none sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
