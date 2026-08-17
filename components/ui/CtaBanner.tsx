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
      <div className="mx-auto flex max-w-7xl flex-col items-stretch gap-8 px-4 py-14 text-center sm:px-6 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:text-left lg:px-8">
        <div className="max-w-2xl">
          <p className="kicker">Contact</p>
          <h2 className="page-title mt-3">{title}</h2>
          <p className="mt-4 font-heading text-lg italic text-white/85 sm:text-xl">{description}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
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
