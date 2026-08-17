import Link from "next/link";
import { site } from "@/lib/site";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/ui/Icons";

type CtaBannerProps = {
  title?: string;
  description?: string;
};

/**
 * Brochure-style close: gold Playfair title and contact actions.
 */
export default function CtaBanner({
  title = "Get in Touch",
  description = "Let’s discuss your needs.",
}: CtaBannerProps) {
  return (
    <section className="bg-navy-cover">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-20 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left lg:px-8">
        <div className="max-w-2xl">
          <p className="kicker">Contact</p>
          <h2 className="page-title mt-3">{title}</h2>
          <p className="mt-4 font-heading text-xl italic text-white/85">{description}</p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/contact" className="btn-gold">
            Request a Quote
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-light"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
