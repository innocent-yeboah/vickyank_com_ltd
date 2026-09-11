/**
 * Central company information for VickYank Limited Company.
 * Update contact details here and they change across the whole site.
 */
export const site = {
  name: "VickYank Limited Company",
  shortName: "VickYank",
  tagline: "Global Standards. Local Expertise.",
  description:
    "VickYank Limited Company is a multi-service industrial enterprise in Ghana, operating in mining, gold trading, excavator rental and sales, heavy equipment spare parts, and luxury car rental.",
  phones: [
    {
      raw: "0244112193",
      display: "024 411 2193",
      international: "+233244112193",
      whatsappUrl: "https://wa.me/233244112193",
    },
    {
      raw: "0557004112",
      display: "055 700 4112",
      international: "+233557004112",
      whatsappUrl: "https://wa.me/233557004112",
    },
  ],
  /** Primary voice line */
  phone: "0244112193",
  phoneDisplay: "024 411 2193",
  phoneInternational: "+233244112193",
  phoneAltDisplay: "055 700 4112",
  phoneAltInternational: "+233557004112",
  /** Floating Talk to us — 055 line only (Rule C) */
  whatsappUrl: "https://wa.me/233557004112",
  whatsappDisplay: "055 700 4112",
  email: "info@vickyanklimitedcompany.com",
  website: "www.vickyanklimitedcompany.com",
  location: "Agona Nkwanta, Ahanta West, Ghana",
  currency: "GHS",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.vickyanklimitedcompany.com",
} as const;

/** Primary top navigation — Contact before Newsletter */
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Our Business" },
  { href: "/contact", label: "Contact" },
  { href: "/newsletter", label: "Newsletter" },
] as const;

/** Five service houses — Our Business order (no shop) */
export const serviceLinks = [
  {
    href: "/services/mining",
    label: "Mining",
    description: "Professional mining operations with modern heavy machinery.",
  },
  {
    href: "/services/gold-trading",
    label: "Gold trading",
    description: "Buy and sell raw and refined gold with documented transactions.",
  },
  {
    href: "/services/equipment",
    label: "Digging machines",
    description: "Rent or purchase excavators for mining and construction.",
  },
  {
    href: "/services/spare-parts",
    label: "Spare parts",
    description: "Genuine parts to keep your fleet earning with minimal downtime.",
  },
  {
    href: "/services/luxury-cars",
    label: "Fancy cars",
    description: "Executive and VIP transport — chauffeured or self-drive.",
  },
] as const;
