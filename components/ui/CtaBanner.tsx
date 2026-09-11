import Link from "next/link";
import { site } from "@/lib/site";

type CtaBannerProps = {
  title?: string;
  description?: string;
  className?: string;
};

/**
 * Closing enquiry band on light pages — navy type, gold fill CTA (Rule V2).
 */
export default function CtaBanner({
  title = "Begin a conversation",
  description = "Tell us what you need.",
  className = "",
}: CtaBannerProps) {
  return (
    <section
      className={`border-t border-navy/10 bg-soft ${className}`.trim()}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-stretch gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="max-w-2xl">
          <h2 className="page-title">{title}</h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-charcoal">
            {description}
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link href="/contact" className="btn-gold">
            Enquire
          </Link>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-dark"
          >
            WhatsApp · {site.whatsappDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
