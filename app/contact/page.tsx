import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Vickyank Limited Company — call 055 700 4112, message us on WhatsApp, or send an enquiry about mining, gold, equipment, or luxury car rental.",
};

const contactChannels = [
  {
    icon: PhoneIcon,
    label: "Phone",
    value: site.phoneDisplay,
    href: `tel:${site.phoneInternational}`,
    note: "Mon–Sat, 8:00 AM – 6:00 PM",
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "Chat with our team",
    href: site.whatsappUrl,
    note: "Fastest response",
  },
  {
    icon: MailIcon,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "Response within one business day",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ============================ PAGE HERO =========================== */}
      <section className="bg-section-gradient py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold">
            Contact Us
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
            Let&apos;s Talk Business
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Mining contracts, gold trading, equipment hire, spare parts, or
            luxury transport — reach us on any channel below.
          </p>
        </div>
      </section>

      {/* ===================== CONTACT CHANNELS + FORM ==================== */}
      <section className="bg-[#111111] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-5">
            {/* Contact details */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-white">
                Reach Us Directly
              </h2>
              <div className="mt-8 space-y-5">
                {contactChannels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={channel.label === "WhatsApp" ? "_blank" : undefined}
                    rel={
                      channel.label === "WhatsApp"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group tech-frame flex items-start gap-5 border border-gray-800/60 bg-[#151515] p-6 transition-colors hover:border-[#FFC107]/40"
                  >
                    <span className="tech-anchor-bl" aria-hidden="true" />
                    <span className="tech-anchor-br" aria-hidden="true" />
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#FFC107]/15 text-[#FFC107]">
                      <channel.icon className="h-6 w-6" />
                    </span>
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-widest text-[#FFC107]">
                        {channel.label}
                      </span>
                      <span className="mt-1 block break-all font-medium text-white group-hover:text-gold-soft">
                        {channel.value}
                      </span>
                      <span className="mt-1 block text-sm text-gray-400">
                        {channel.note}
                      </span>
                    </span>
                  </a>
                ))}

                <div className="tech-frame flex items-start gap-5 border border-gray-800/60 bg-[#151515] p-6">
                  <span className="tech-anchor-bl" aria-hidden="true" />
                  <span className="tech-anchor-br" aria-hidden="true" />
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#FFC107]/15 text-[#FFC107]">
                    <MapPinIcon className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-widest text-[#FFC107]">
                      Location
                    </span>
                    <span className="mt-1 block font-medium text-white">
                      {site.location}
                    </span>
                    <span className="mt-1 block text-sm text-gray-400">
                      Exact office address to be confirmed
                    </span>
                  </span>
                </div>

                <div className="tech-frame flex items-start gap-5 border border-gray-800/60 bg-[#151515] p-6">
                  <span className="tech-anchor-bl" aria-hidden="true" />
                  <span className="tech-anchor-br" aria-hidden="true" />
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#FFC107]/15 text-[#FFC107]">
                    <ClockIcon className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-widest text-[#FFC107]">
                      Business Hours
                    </span>
                    <span className="mt-1 block font-medium text-white">
                      Monday – Saturday
                    </span>
                    <span className="mt-1 block text-sm text-gray-400">
                      8:00 AM – 6:00 PM (GMT)
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Enquiry form */}
            <div className="tech-frame border border-gray-800/60 bg-[#151515] p-8 sm:p-10 lg:col-span-3">
              <span className="tech-anchor-bl" aria-hidden="true" />
              <span className="tech-anchor-br" aria-hidden="true" />
              <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-white">
                Send an Enquiry
              </h2>
              <p className="mt-3 text-gray-400">
                Complete the form and our team will respond within one
                business day.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== MAP =============================== */}
      <section className="industrial-rule bg-[#1A1A1A]">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-bold uppercase tracking-tight text-white">
            Find Us in Ghana
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-gray-400">
            Map placeholder centred on Accra — update with the company&apos;s
            exact office location before launch.
          </p>
          <div className="tech-frame mt-10 aspect-[16/7] w-full overflow-hidden border border-gray-800/60 bg-[#151515]">
            <span className="tech-anchor-bl" aria-hidden="true" />
            <span className="tech-anchor-br" aria-hidden="true" />
            {/* REPLACE: update the q= parameter with the exact office address. */}
            <iframe
              title="Vickyank Limited Company location map"
              src="https://maps.google.com/maps?q=Accra,Ghana&z=11&output=embed"
              className="h-full w-full grayscale contrast-125 opacity-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
