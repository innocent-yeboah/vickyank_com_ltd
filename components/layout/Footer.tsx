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
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/vickyank-logo.png"
                alt={site.name}
                width={180}
                height={54}
                className="h-12 w-auto drop-shadow-[0_0_12px_rgba(212,175,55,0.35)]"
              />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              {site.tagline} Mining, gold trading, heavy equipment, spare parts,
              and luxury car rental in Ghana.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-gold">
              Company
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
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
            <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-gold">
              Our Business
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
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

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-gold">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
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

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-gray-500 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="uppercase tracking-widest">{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
