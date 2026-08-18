import type { Metadata } from "next";
import Image from "next/image";
import InquiryForm from "@/components/forms/InquiryForm";
import { site } from "@/lib/site";
import {
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${site.name} — call ${site.phoneAltDisplay} or ${site.phoneDisplay}, WhatsApp, or send an enquiry.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy page-section">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <h1 className="page-title">Enquire</h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
              A specialist replies within one business day. Call or WhatsApp if
              you need us sooner.
            </p>

            <div className="relative mx-auto mt-10 aspect-[3/4] max-w-sm overflow-hidden bg-white lg:mx-0">
              <Image
                src="/images/contact-specialist.png"
                alt="VickYank specialist ready to take your enquiry"
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 28vw, 80vw"
                priority
              />
            </div>

            <ul className="mt-10 space-y-4 text-sm text-white/75">
              <li>
                <a
                  href={`tel:${site.phoneInternational}`}
                  className="inline-flex items-center gap-3 transition-colors hover:text-white"
                >
                  <PhoneIcon className="h-4 w-4 shrink-0 text-gold" />
                  {site.phoneDisplay} / {site.phoneAltDisplay}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 transition-colors hover:text-white"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0 text-gold" />
                  WhatsApp {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-3 break-all transition-colors hover:text-white"
                >
                  <MailIcon className="h-4 w-4 shrink-0 text-gold" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPinIcon className="h-4 w-4 shrink-0 text-gold" />
                {site.location}
              </li>
            </ul>
          </div>

          <div className="brochure-card">
            <InquiryForm context="contact" submitLabel="Send Message" />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-navy-darker page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="page-title">Find us</h2>
          <p className="mt-4 max-w-xl text-white/65">
            Headquarters, Agona-Nkwanta, Ghana.
          </p>
          <div className="mt-10 aspect-[4/3] w-full overflow-hidden border border-white/10 sm:aspect-[16/9] lg:aspect-[16/7]">
            <iframe
              title="VickYank Limited Company location map"
              src="https://maps.google.com/maps?q=Agona-Nkwanta,Ghana&z=13&output=embed"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
