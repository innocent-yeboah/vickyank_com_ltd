import Image from "next/image";
import Link from "next/link";
import { brochureServices } from "@/content/brochure";
import ScrollReveal from "@/components/ui/ScrollReveal";

const outcomes: Record<
  string,
  { title: string; line: string; action: string }
> = {
  "/services/mining": {
    title: "Get a site moving",
    line: "Crews and machines, with someone accountable on the ground.",
    action: "Continue",
  },
  "/services/gold-trading": {
    title: "Buy or sell gold",
    line: "Clear weighing, papers in order, a quiet desk.",
    action: "Continue",
  },
  "/services/equipment": {
    title: "Put a machine on site",
    line: "Inspected excavators — hire or buy, ready to work.",
    action: "Continue",
  },
  "/services/spare-parts": {
    title: "Keep a machine working",
    line: "Genuine parts, so the fleet does not sit idle.",
    action: "Continue",
  },
  "/services/luxury-cars": {
    title: "Arrive the way you intend",
    line: "A car for the meeting, the event, or the road.",
    action: "Continue",
  },
};

/**
 * Outcome tiles — one desire per card, stacked in order on phones.
 */
export default function HomeHouses() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5 lg:gap-4">
      {brochureServices.map((service, index) => {
        const outcome = outcomes[service.href];
        return (
          <ScrollReveal key={service.href} delayMs={index * 90}>
            <Link
              href={service.href}
              className="group relative block aspect-[16/10] overflow-hidden bg-navy sm:aspect-[4/5] lg:aspect-[2/3]"
            >
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-navy-cover via-navy-cover/35 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-5">
              <h3 className="font-heading text-2xl leading-snug text-white sm:text-xl lg:text-lg">
                {outcome.title}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-white/70 lg:text-xs">
                {outcome.line}
              </p>
              <span className="mt-3 inline-block text-xs tracking-[0.16em] text-gold">
                {outcome.action}
              </span>
            </div>
          </Link>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
