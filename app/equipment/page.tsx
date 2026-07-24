import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import { ArrowRightIcon, CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Equipment & Fleet",
  description:
    "Explore Vickyank Limited's excavator fleet, spare parts categories, and luxury vehicle collection available for rent and sale in Ghana.",
};

// Placeholder machine listings — replace specs and photos with the
// client's actual fleet inventory.
const excavators = [
  {
    name: "Crawler Excavator — 20 Tonne Class",
    status: "Available for Rent & Sale",
    specs: ["20–22 tonne operating weight", "General excavation & mining", "Operator available on request"],
    image:
      "https://images.unsplash.com/photo-1579412690850-bd41cd0af397?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Crawler Excavator — 30 Tonne Class",
    status: "Available for Rent",
    specs: ["30+ tonne operating weight", "Heavy mining & bulk earthworks", "Site delivery arranged"],
    image:
      "https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Mid-Size Excavator — 13 Tonne Class",
    status: "Available for Rent & Sale",
    specs: ["13–15 tonne operating weight", "Roadworks & site preparation", "Flexible rental terms"],
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
  },
];

const partsCategories = [
  "Undercarriage — track chains, rollers, idlers, sprockets",
  "Hydraulic components — pumps, cylinders, hoses, seals",
  "Engine parts — filters, injectors, turbochargers",
  "Ground engaging tools — bucket teeth, cutting edges",
  "Pins, bushings & linkages",
  "Electrical components & sensors",
  "Cabin parts & operator controls",
  "Attachments — buckets, breakers, rippers",
];

// Placeholder luxury fleet — replace with the client's actual vehicles.
const luxuryCars = [
  {
    name: "Executive Sedan",
    detail: "Chauffeured executive transport for business and VIP travel.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Luxury SUV",
    detail: "Commanding presence and comfort for delegations and events.",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Premium Sports Coupe",
    detail: "Statement vehicles for weddings, launches, and special occasions.",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function EquipmentPage() {
  return (
    <>
      {/* ============================ PAGE HERO =========================== */}
      <section className="bg-section-gradient py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold">
            Equipment &amp; Fleet
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
            Machines Ready to Work. Vehicles Ready to Impress.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Browse our excavator fleet, spare parts range, and luxury vehicle
            collection. All listings below are representative — contact us
            for current availability.
          </p>
        </div>
      </section>

      {/* ========================= EXCAVATOR FLEET ======================== */}
      <section className="bg-[#1A1A1A] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            dark
            eyebrow="Heavy Equipment"
            title="Excavator Fleet"
            description="Representative machine classes — replace photos and specifications with the client's actual inventory."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {excavators.map((machine) => (
              <div
                key={machine.name}
                className="group tech-frame flex flex-col border border-gray-800/60 bg-[#151515]"
              >
                <span className="tech-anchor-bl" aria-hidden="true" />
                <span className="tech-anchor-br" aria-hidden="true" />
                <div className="relative aspect-[4/3] overflow-hidden bg-[#111111]">
                  {/* REPLACE: photo of the actual machine. */}
                  <Image
                    src={machine.image}
                    alt={machine.name}
                    fill
                    className="tech-mesh-image object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                  <span className="absolute left-0 top-4 z-20 bg-[#FFC107] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
                    {machine.status}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-white">
                    {machine.name}
                  </h3>
                  <ul className="mt-4 flex-1 space-y-2.5">
                    {machine.specs.map((spec) => (
                      <li key={spec} className="flex items-start gap-3 text-sm text-gray-400">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFC107]/15 text-[#FFC107]">
                          <CheckIcon className="h-3 w-3" />
                        </span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#FFC107] transition-colors hover:text-gold-soft"
                  >
                    Check Availability
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================== SPARE PARTS ========================== */}
      <section className="industrial-rule bg-[#111111] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#FFC107]">
                Spare Parts
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
                Genuine Excavator Parts, In Stock and On Order
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-300">
                We supply the components that keep excavators earning. If a
                part is not in stock, our supply channels source it fast —
                because we know exactly what a parked machine costs you.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 bg-[#FFC107] px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-[#1A1A1A] transition-colors hover:bg-gold-dark"
              >
                Request a Parts Quote
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {partsCategories.map((category) => (
                <li
                  key={category}
                  className="group tech-frame flex items-start gap-3 border border-gray-800/60 bg-[#151515] p-4 text-sm text-gray-300"
                >
                  <span className="tech-anchor-bl" aria-hidden="true" />
                  <span className="tech-anchor-br" aria-hidden="true" />
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFC107]/20 text-[#FFC107]">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ========================== LUXURY FLEET ========================== */}
      <section className="industrial-rule bg-[#1A1A1A] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            dark
            eyebrow="Luxury Mobility"
            title="Luxury Car Collection"
            description="Representative vehicle classes — replace with photos of the client's actual luxury fleet."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {luxuryCars.map((car) => (
              <div
                key={car.name}
                className="group tech-frame relative aspect-[4/5] overflow-hidden border border-gray-800/60 bg-[#111111]"
              >
                <span className="tech-anchor-bl" aria-hidden="true" />
                <span className="tech-anchor-br" aria-hidden="true" />
                {/* REPLACE: photo of the actual vehicle. */}
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="tech-mesh-image object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 z-20 p-7">
                  <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-white">
                    {car.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-300">
                    {car.detail}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#FFC107] transition-colors hover:text-gold-soft"
                  >
                    Book This Class
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Need a Machine or a Vehicle?"
        description="Contact us for current availability, rates, and delivery arrangements anywhere in Ghana."
      />
    </>
  );
}
