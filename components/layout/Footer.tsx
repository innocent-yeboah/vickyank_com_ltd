import Link from "next/link";
import Image from "next/image";
import { navLinks, serviceLinks, site } from "@/lib/site";
import {
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/ui/Icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-darker text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-10 pb-24 sm:px-6 md:py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/vickyank-mark.png"
                alt={site.name}
                width={865}
                height={475}
                className="h-14 w-auto brightness-125 contrast-110 md:h-16"
              />
            </Link>
            <p className="mt-3 text-sm leading-snug text-white/70 md:mt-5 md:leading-relaxed">
              <span className="md:hidden">{site.tagline}</span>
              <span className="hidden md:inline">
                {site.tagline} Mining, gold trading, heavy equipment, spare
                parts, and luxury car rental in Ghana.
              </span>
            </p>
          </div>

          <div>
            <h3 className="text-xs font-medium tracking-[0.16em] text-white/45 md:text-sm">
              Company
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm md:mt-5 md:space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium tracking-[0.16em] text-white/45 md:text-sm">
              Our Business
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm md:mt-5 md:space-y-3">
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="transition-colors hover:text-gold"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-xs font-medium tracking-[0.16em] text-white/45 md:text-sm">
              Contact
            </h3>
            <ul className="mt-3 space-y-2 text-sm md:mt-5 md:space-y-4">
              {site.phones.map((phone) => (
                <li key={phone.raw}>
                  <a
                    href={`tel:${phone.international}`}
                    className="flex items-center gap-3 transition-colors hover:text-gold"
                  >
                    <PhoneIcon className="h-4 w-4 shrink-0 text-gold" />
                    {phone.display}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-gold"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0 text-gold" />
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 break-all transition-colors hover:text-gold"
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
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-5 text-xs text-gray-500 md:mt-14 md:flex-row md:gap-4 md:pt-8">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="hidden md:block">{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
