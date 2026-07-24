import Link from "next/link";
import { site } from "@/lib/site";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/Icons";

type CtaBannerProps = {
  title?: string;
  description?: string;
};

/**
 * Full-width call-to-action band used at the bottom of most pages.
 */
export default function CtaBanner({
  title = "Ready to Work With Us?",
  description = "From mining contracts to equipment rental and gold trading, our team is ready to discuss your project requirements.",
}: CtaBannerProps) {
  return (
    <section className="bg-section-gradient">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-20 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-300">{description}</p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gold px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider text-charcoal transition-colors hover:bg-gold-dark"
          >
            Request a Quote
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/40 px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider text-white transition-colors hover:border-gold hover:text-gold"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
