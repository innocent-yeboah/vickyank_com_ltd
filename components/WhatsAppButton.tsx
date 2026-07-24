import { site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/Icons";

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
      aria-label="Chat with Vickyank Limited on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform hover:scale-105 motion-reduce:transition-none"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
