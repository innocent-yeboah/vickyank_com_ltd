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
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="kicker">Contact</p>
          <h1 className="page-title mt-3">Get in Touch</h1>
          <p className="mt-4 font-heading text-lg italic text-white/85 sm:text-xl">
            Let’s Discuss Your Needs
          </p>
          <div className="mx-auto mt-12 grid max-w-xl gap-4 text-left">
            <a
              href={`tel:${site.phoneInternational}`}
              className="brochure-card flex min-w-0 items-center gap-3 hover:border-gold sm:gap-4"
            >
              <PhoneIcon className="h-5 w-5 shrink-0 text-gold" />
              <span>
                <strong className="block text-xs uppercase tracking-[0.2em] text-gold">
                  Phone
                </strong>
                <span className="mt-1 block text-base text-white sm:text-lg">
                  {site.phoneDisplay} / {site.phoneAltDisplay}
                </span>
              </span>
            </a>
            <div className="brochure-card flex min-w-0 items-center gap-3 sm:gap-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                www
              </span>
              <span>
                <strong className="block text-xs uppercase tracking-[0.2em] text-gold">
                  Website
                </strong>
                <span className="mt-1 block text-base text-white sm:text-lg">{site.website}</span>
              </span>
            </div>
            <a
              href={`mailto:${site.email}`}
              className="brochure-card flex min-w-0 items-center gap-3 hover:border-gold sm:gap-4"
            >
              <MailIcon className="h-5 w-5 shrink-0 text-gold" />
              <span>
                <strong className="block text-xs uppercase tracking-[0.2em] text-gold">
                  Email
                </strong>
                <span className="mt-1 block break-all text-base text-white sm:text-lg">
                  {site.email}
                </span>
              </span>
            </a>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="brochure-card flex min-w-0 items-center gap-3 hover:border-gold sm:gap-4"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0 text-gold" />
              <span>
                <strong className="block text-xs uppercase tracking-[0.2em] text-gold">
                  WhatsApp
                </strong>
                <span className="mt-1 block text-base text-white sm:text-lg">{site.phoneDisplay}</span>
              </span>
            </a>
            <div className="brochure-card flex min-w-0 items-center gap-3 sm:gap-4">
              <MapPinIcon className="h-5 w-5 shrink-0 text-gold" />
              <span>
                <strong className="block text-xs uppercase tracking-[0.2em] text-gold">
                  Location
                </strong>
                <span className="mt-1 block text-base text-white sm:text-lg">{site.location}</span>
              </span>
            </div>
          </div>
          <Image
            src="/images/vickyank-logo.png"
            alt={site.name}
            width={220}
            height={72}
            className="mx-auto mt-12 h-16 w-auto drop-shadow-[0_0_12px_rgba(212,175,55,0.35)]"
          />
          <p className="mt-4 text-sm uppercase tracking-[0.14em] text-gold">
            {site.tagline}
          </p>
        </div>
      </section>

      <section className="bg-navy-ink page-section">
        <div className="mx-auto grid max-w-7xl gap-8 lg:gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="kicker">Enquiry</p>
            <h2 className="page-title mt-3">Send a Message</h2>
            <p className="mt-5 text-base text-white/80 sm:text-lg">
              Complete the form and our team will respond within one business day.
            </p>
          </div>
          <div className="brochure-card">
            <InquiryForm context="contact" submitLabel="Send Message" />
          </div>
        </div>
      </section>

      <section className="bg-navy page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-2xl text-gold sm:text-3xl">Find Us in Ghana</h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-white/70">
            Headquarters, Agona-Nkwanta, Ghana.
          </p>
          <div className="mt-10 aspect-[4/3] w-full overflow-hidden border border-gold/35 sm:aspect-[16/9] lg:aspect-[16/7]">
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
