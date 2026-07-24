/**
 * Central company information for VICKYANK LIMITED COMPANY.
 * Update contact details here and they change across the whole site.
 */
export const site = {
  name: "VICKYANK LIMITED COMPANY",
  shortName: "VICKYANK",
  tagline: "Mining • Equipment • Gold • Luxury",
  description:
    "Vickyank Limited Company is a multi-service industrial enterprise in Ghana, operating in mining, gold trading, excavator rental and sales, heavy equipment spare parts, and luxury car rental.",
  phone: "0557004112",
  phoneDisplay: "055 700 4112",
  // Ghana country code (+233) — local numbers drop the leading zero.
  phoneInternational: "+233557004112",
  whatsappUrl: "https://wa.me/233557004112",
  email: "vickyanklimitedcompany@gmail.com",
  location: "Accra, Ghana",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/equipment", label: "Equipment & Fleet" },
  { href: "/contact", label: "Contact" },
] as const;
