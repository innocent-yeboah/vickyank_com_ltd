/**
 * Product and fleet catalog for VickYank Limited Company.
 * Pre-order catalogue — prices available upon request. Replace imagery with live inventory before launch.
 */

export type ProductCategory = "spare-parts" | "equipment";

export type CatalogProduct = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  image: string;
  inStock: boolean;
  specs?: string[];
};

export type FleetItem = {
  id: string;
  name: string;
  status: string;
  specs: string[];
  image: string;
  type: "excavator" | "luxury-car";
};

export const products: CatalogProduct[] = [
  {
    id: "sp-track-roller",
    slug: "track-roller-assembly",
    name: "Track Roller Assembly",
    category: "spare-parts",
    description:
      "Heavy-duty undercarriage track roller for mid-to-large crawler excavators. Hardened race and sealed bearings.",
    image: "/images/track-roller-assembly.png",
    inStock: false,
    specs: ["Fits 20–30 tonne class", "Sealed bearing", "OEM-compatible"],
  },
  {
    id: "sp-bucket-teeth",
    slug: "bucket-teeth-set",
    name: "Bucket Teeth Set (5 pcs)",
    category: "spare-parts",
    description:
      "Ground-engaging bucket teeth kit with pins. Built for abrasive mining and earthworks conditions.",
    image: "/images/bucket-teeth-set.png",
    inStock: false,
    specs: ["5-piece set", "Includes pins", "Wear-resistant alloy"],
  },
  {
    id: "sp-hydraulic-hose",
    slug: "hydraulic-hose-kit",
    name: "Hydraulic Hose Kit",
    category: "spare-parts",
    description:
      "High-pressure hydraulic hose assembly kit for boom and stick circuits. Pressure-tested before dispatch.",
    image: "/images/hydraulic-hose-kit.png",
    inStock: false,
    specs: ["High-pressure rated", "Fittings included", "Pressure tested"],
  },
  {
    id: "sp-filter-pack",
    slug: "excavator-filter-pack",
    name: "Excavator Filter Service Pack",
    category: "spare-parts",
    description:
      "Oil, fuel, and hydraulic filter set for scheduled excavator maintenance — reduces unplanned downtime.",
    image: "/images/excavator-filter-pack.png",
    inStock: false,
    specs: ["Oil + fuel + hydraulic", "Service interval kit"],
  },
  {
    id: "sp-pins-bushings",
    slug: "pins-and-bushings-kit",
    name: "Pins & Bushings Kit",
    category: "spare-parts",
    description:
      "Linkage pins and bushings for boom, stick, and bucket joints. Precision-machined for tight fit.",
    image: "/images/spare-parts-inventory.png",
    inStock: false,
  },
  {
    id: "eq-breaker",
    slug: "hydraulic-breaker-attachment",
    name: "Hydraulic Breaker Attachment",
    category: "equipment",
    description:
      "Rock breaker attachment for mid-size excavators. Ideal for quarry and demolition support work.",
    image: "/images/hydraulic-breaker-attachment.png",
    inStock: false,
    specs: ["Mid-size excavator fit", "Includes tool bits", "Sale or lease"],
  },
  {
    id: "eq-bucket",
    slug: "heavy-duty-digging-bucket",
    name: "Heavy-Duty Digging Bucket",
    category: "equipment",
    description:
      "Reinforced digging bucket for mining and bulk earthworks. Available in multiple width options.",
    image: "/images/heavy-duty-digging-bucket.png",
    inStock: false,
    specs: ["Reinforced cutting edge", "Multiple widths"],
  },
  {
    id: "eq-compactor",
    slug: "plate-compactor",
    name: "Plate Compactor",
    category: "equipment",
    description:
      "Site compaction unit for roadworks and foundation prep. Available for purchase or short-term hire.",
    image: "/images/plate-compactor.png",
    inStock: false,
    specs: ["Roadworks & foundations", "Hire options available"],
  },
  {
    id: "eq-haul-truck",
    slug: "rigid-haul-truck",
    name: "Rigid Haul Truck",
    category: "equipment",
    description:
      "Off-highway dump truck for quarry and mining haul. Class and availability confirmed with the desk.",
    image: "/images/shop-haul-truck.png",
    inStock: false,
    specs: ["Quarry and mine haul", "Confirm class on enquiry"],
  },
  {
    id: "eq-crawler-line",
    slug: "crawler-excavators",
    name: "Crawler Excavators",
    category: "equipment",
    description:
      "New tracked excavators ready for site. Hire or buy — we confirm what is actually free.",
    image: "/images/shop-crawler-excavators.png",
    inStock: false,
    specs: ["Tracked class", "Hire or purchase"],
  },
  {
    id: "eq-heavy-excavators",
    slug: "heavy-crawler-excavators",
    name: "Heavy Crawler Excavators",
    category: "equipment",
    description:
      "Heavy mining and bulk earthworks class. Inspected before it leaves us.",
    image: "/images/shop-heavy-excavators.png",
    inStock: false,
    specs: ["Heavy earthworks class", "Inspected before delivery"],
  },
  {
    id: "eq-breaker-work",
    slug: "breaker-on-site",
    name: "Breaker on Site",
    category: "equipment",
    description:
      "Hydraulic breaker work for rock, quarry, and coastal ground. Machine and tool together.",
    image: "/images/shop-breaker-work.png",
    inStock: false,
    specs: ["Rock and quarry", "Machine with breaker"],
  },
  {
    id: "eq-loading-site",
    slug: "loading-and-haul",
    name: "Loading and Haul",
    category: "equipment",
    description:
      "Excavator and dump truck working as a pair. Ask for the class you need on the ground.",
    image: "/images/shop-loading-site.png",
    inStock: false,
    specs: ["Load and haul", "Confirm class on enquiry"],
  },
];

export const excavatorFleet: FleetItem[] = [
  {
    id: "ex-20t",
    name: "Volvo EC550E Crawler Excavator",
    status: "Available for Rent & Sale",
    specs: [
      "EC550E class — heavy mining & bulk earthworks",
      "Operator available on request",
      "Site delivery arranged",
    ],
    image: "/images/volvo-ec550e.png",
    type: "excavator",
  },
  {
    id: "ex-30t",
    name: "CAT 330 Crawler Excavator",
    status: "Available for Sale",
    specs: [
      "CAT 330 — outright purchase",
      "Showroom condition, delivery arranged",
      "Confirm current stock",
    ],
    image: "/images/cat-330-sale.png",
    type: "excavator",
  },
  {
    id: "ex-13t",
    name: "CAT 390F L Crawler Excavator",
    status: "Available for Rent",
    specs: [
      "390F L class — heavy mining & quarry work",
      "Operator available on request",
      "Site delivery arranged",
    ],
    image: "/images/cat-390fl.png",
    type: "excavator",
  },
];

export const luxuryFleet: FleetItem[] = [
  {
    id: "car-sedan",
    name: "Jaguar XE",
    status: "Chauffeured or Self-Drive",
    specs: [
      "Executive sedan — business & VIP transport",
      "Airport transfers",
      "Daily / weekly hire",
    ],
    image: "/images/jaguar-xe.png",
    type: "luxury-car",
  },
  {
    id: "car-suv",
    name: "Jetour SUV",
    status: "Chauffeured Preferred",
    specs: [
      "Delegations & events",
      "Commanding presence",
      "Full detailing before every hire",
    ],
    image: "/images/jetour-suv.png",
    type: "luxury-car",
  },
  {
    id: "car-coupe",
    name: "Toyota Land Cruiser",
    status: "VIP & Special Occasions",
    specs: [
      "Executive SUV for principals and events",
      "Statement presence",
      "Daily / weekly packages",
    ],
    image: "/images/land-cruiser.png",
    type: "luxury-car",
  },
  {
    id: "car-trx",
    name: "Ram 1500 TRX",
    status: "Chauffeured or Self-Drive",
    specs: [
      "High-performance luxury pickup",
      "Statement presence",
      "Daily / weekly hire",
    ],
    image: "/images/ram-trx.png",
    type: "luxury-car",
  },
  {
    id: "car-escalade",
    name: "Cadillac Escalade",
    status: "Chauffeured Preferred",
    specs: [
      "VIP delegations & executives",
      "Airport transfers",
      "Full detailing before every hire",
    ],
    image: "/images/cadillac-escalade.png",
    type: "luxury-car",
  },
  {
    id: "car-gle",
    name: "Mercedes-AMG GLE Coupe",
    status: "Special Occasions",
    specs: [
      "Weddings, launches & gifts",
      "AMG performance coupe-SUV",
      "Short-term packages",
    ],
    image: "/images/mercedes-gle.png",
    type: "luxury-car",
  },
];

export function getProductBySlug(slug: string): CatalogProduct | undefined {
  return products.find((p) => p.slug === slug);
}
