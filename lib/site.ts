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
    },
    {
      raw: "0557004112",
      display: "055 700 4112",
      international: "+233557004112",
    },
  ],
  /** Primary line used for WhatsApp and default tel: links */
  phone: "0244112193",
  phoneDisplay: "024 411 2193",
  phoneInternational: "+233244112193",
  phoneAltDisplay: "055 700 4112",
  phoneAltInternational: "+233557004112",
  whatsappUrl: "https://wa.me/233244112193",
  email: "info@vickyankltdcompany.com",
  website: "www.vickyanltdcompany.com",
  location: "Headquarters, Agona-Nkwanta, Ghana",
  currency: "GHS",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.vickyanltdcompany.com",
} as const;

/** Primary top navigation — five items for premium clarity */
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Our Business" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/contact", label: "Contact" },
] as const;

/** Nested service hubs — used by Footer, Services hub, and mega-menu */
export const serviceLinks = [
  {
    href: "/services/mining",
    label: "Mining Operations",
    description: "Professional mining operations with modern heavy machinery.",
  },
  {
    href: "/services/gold-trading",
    label: "Gold Trading",
    description: "Buy and sell raw and refined gold with documented transactions.",
  },
  {
    href: "/services/equipment",
    label: "Excavator Machines",
    description: "Rent or purchase excavators for mining and construction.",
  },
  {
    href: "/services/spare-parts",
    label: "Excavator Spare Parts",
    description: "Genuine parts to keep your fleet earning with minimal downtime.",
  },
  {
    href: "/services/luxury-cars",
    label: "Luxury Car Rental",
    description: "Executive and VIP transport — chauffeured or self-drive.",
  },
  {
    href: "/services/shop",
    label: "Parts & Equipment Shop",
    description: "Browse genuine spare parts and equipment. Pre-order — prices upon request.",
  },
] as const;
