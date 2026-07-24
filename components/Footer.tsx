import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import {
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/Icons";

const services = [
  { label: "Mining Operations", href: "/services#mining" },
  { label: "Gold Trading", href: "/services#gold" },
  { label: "Excavator Rental & Sales", href: "/services#excavators" },
  { label: "Excavator Spare Parts", href: "/services#spare-parts" },
  { label: "Luxury Car Rental", href: "/services#luxury-cars" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center bg-gold font-heading text-xl font-bold text-charcoal">
                V
              </span>
              <span className="leading-tight">
                <span className="block font-heading text-lg font-bold uppercase tracking-wider text-white">
                  Vickyank
                </span>
                <span className="block text-[11px] uppercase tracking-[0.25em] text-gold">
                  Limited Company
                </span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-gray-400">
              A multi-service industrial enterprise in Ghana — mining
              operations, gold trading, excavator machines and spare parts,
              and premium luxury car rental.
            </p>
          </div>

          {/* Quick links */}
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

          {/* Services */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-gold">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((s) => (
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

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-gold">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={`tel:${site.phoneInternational}`}
                  className="flex items-center gap-3 transition-colors hover:text-gold"
                >
                  <PhoneIcon className="h-4 w-4 shrink-0 text-gold" />
                  {site.phoneDisplay}
                </a>
              </li>
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
          <p className="uppercase tracking-widest">
            Mining &bull; Equipment &bull; Gold &bull; Luxury
          </p>
        </div>
      </div>
    </footer>
  );
}
