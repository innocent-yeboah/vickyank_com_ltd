import Image from "next/image";
import Link from "next/link";
import { brochureServices } from "@/content/brochure";

const houseCues: Record<string, string> = {
  "/services/mining": "From ground to gold",
  "/services/gold-trading": "Reputation is collateral",
  "/services/equipment": "Inspected for the site",
  "/services/spare-parts": "Keep the fleet earning",
  "/services/luxury-cars": "Arrive as you intend",
};

/**
 * Five doors on one beat — obvious, attractive, one click each.
 */
export default function HomeHouses() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-5">
      {brochureServices.map((house) => (
        <Link
          key={house.href}
          href={house.href}
          className="group relative aspect-[3/4] overflow-hidden bg-navy lg:aspect-[2/3]"
        >
          <Image
            src={house.image}
            alt={house.imageAlt}
            fill
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            sizes="(min-width: 1024px) 20vw, 50vw"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-navy-cover via-navy-cover/20 to-transparent"
          />
          <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
            <h3 className="font-heading text-sm leading-snug text-white sm:text-lg">
              {house.title}
            </h3>
            <p className="mt-1 hidden text-xs text-white/60 sm:block">
              {houseCues[house.href]}
            </p>
            <span className="mt-2 inline-block text-[10px] tracking-[0.16em] text-gold">
              View
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
