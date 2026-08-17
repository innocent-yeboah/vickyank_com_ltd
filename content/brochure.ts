/**
 * Brochure-aligned copy and galleries for the VickYank website.
 */
export const aboutCopy = {
  title: "About VickYank Limited Company",
  paragraphs: [
    "VickYank Limited Company is a diversified industrial enterprise serving high-net-worth principals, contractors, and investors across Ghana and the diaspora. We operate five disciplined service lines — mining operations, gold trading, excavator rental and sales, genuine spare parts, and luxury car rental.",
    "Our mission is to deliver industrial capability with the accountability of a Fortune-class partner: documented transactions, maintained fleets, and relationships that outlast any single contract.",
    "Our vision is to be West Africa’s most trusted multi-service industrial enterprise — the first name called for projects of consequence.",
  ],
  differentiators: [
    {
      title: "Global Standards, Local Expertise",
      body: "International operating discipline grounded in Ghana’s industrial landscape.",
    },
    {
      title: "Trusted by High-Net-Worth Clients",
      body: "Discreet service for principals, executives, and serious counterparties.",
    },
    {
      title: "Full-Service Industrial Solutions",
      body: "Mining, gold, machines, parts, and mobility under one accountable name.",
    },
    {
      title: "Commitment to Excellence",
      body: "Inspected equipment, transparent trading, and delivery you can measure.",
    },
  ],
} as const;

export const brochureServices = [
  {
    num: "01",
    href: "/services/mining",
    title: "Mining Operations",
    body: "Professional extraction with experienced crews and modern heavy machinery. Safety-first site management from ground to gold.",
  },
  {
    num: "02",
    href: "/services/gold-trading",
    title: "Gold Trading",
    body: "Buy and sell raw and refined gold with transparent weighing, market-aligned valuation, and full documentation.",
  },
  {
    num: "03",
    href: "/services/equipment",
    title: "Excavator Machines",
    body: "Flexible rental and outright sale of excavators for mining and construction — inspected before every deployment.",
  },
  {
    num: "04",
    href: "/services/spare-parts",
    title: "Spare Parts",
    body: "Genuine undercarriage, hydraulics, filters, and ground-engaging tools sourced to minimise fleet downtime.",
  },
  {
    num: "05",
    href: "/services/luxury-cars",
    title: "Luxury Car Rental",
    body: "Executive sedans, SUVs, and statement vehicles — chauffeured or self-drive for business, events, and VIP travel.",
  },
] as const;

export const goldGallery = [
  {
    src: "/images/gold-bars.jpg",
    alt: "Refined 999.9 fine gold bars",
    label: "Refined Gold",
  },
  {
    src: "/images/gold-ingots.jpg",
    alt: "Gold bullion ingots",
    label: "Bullion",
  },
  {
    src: "https://images.unsplash.com/photo-1643656350988-a39ad266a178?auto=format&fit=crop&w=1400&q=80",
    alt: "Gold bars prepared for trade",
    label: "Raw & Refined",
  },
] as const;

export const equipmentGallery = [
  { src: "/images/cat-390fl.png", alt: "CAT 390F L excavator on site" },
  { src: "/images/cat-loading-haul.png", alt: "CAT excavator loading a haul truck" },
  { src: "/images/volvo-l250h.png", alt: "Volvo L250H wheel loader loading a dump truck" },
  { src: "/images/volvo-ec550e.png", alt: "Volvo EC550E excavator for rent" },
  { src: "/images/cat-330-sale.png", alt: "CAT 330 excavator for sale" },
  { src: "/images/spare-parts-inventory.png", alt: "Hydraulic spare parts inventory" },
] as const;

export const whyPillars = [
  {
    title: "Experience",
    body: "Deep industry knowledge across Ghana’s most demanding mining and industrial environments — operational memory that keeps projects moving.",
  },
  {
    title: "Global Standards",
    body: "World-class service delivery: documented processes, maintained fleets, and the accountability expected by international counterparties.",
  },
  {
    title: "Trust & Transparency",
    body: "Honest business practice. Clear pricing, witnessed gold procedures, and delivery you can measure.",
  },
  {
    title: "Local Expertise",
    body: "Deep understanding of the Ghanaian market, with corridors that serve regional partners and diaspora principals.",
  },
] as const;
