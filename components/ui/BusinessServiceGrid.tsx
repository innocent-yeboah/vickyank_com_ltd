import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { brochureServices } from "@/content/brochure";

type SixthCard = {
  href: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
};

/**
 * Our Business service grid with square photos on each card.
 */
export default function BusinessServiceGrid({ sixth }: { sixth: SixthCard }) {
  return (
    <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5 lg:grid-cols-3">
      {brochureServices.map((service) => (
        <Link
          key={service.href}
          href={service.href}
          className="brochure-card flex min-h-0 flex-col p-3 transition-colors hover:border-gold sm:p-6"
        >
          <h3 className="font-heading text-base leading-snug text-white sm:text-2xl">
            {service.title}
          </h3>
          <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-white/75 sm:mt-3 sm:line-clamp-none sm:text-sm">
            {service.body}
          </p>
          <div className="relative mt-3 aspect-square overflow-hidden bg-navy sm:mt-4">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 30vw, 50vw"
            />
          </div>
          <span className="mt-auto inline-flex items-center gap-1 pt-3 text-[10px] font-semibold uppercase tracking-wider text-gold sm:gap-2 sm:pt-4 sm:text-xs">
            Explore More
            <ArrowRightIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          </span>
        </Link>
      ))}
      <Link
        href={sixth.href}
        className="flex min-h-0 flex-col border border-gold bg-gold p-3 sm:p-6"
      >
        <h3 className="font-heading text-base leading-snug text-navy sm:text-2xl">
          {sixth.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-charcoal sm:mt-3 sm:line-clamp-none sm:text-sm">
          {sixth.body}
        </p>
        <div className="relative mt-3 aspect-square overflow-hidden bg-white sm:mt-4">
          <Image
            src={sixth.image}
            alt={sixth.imageAlt}
            fill
            className="object-cover object-top"
            sizes="(min-width: 1024px) 30vw, 50vw"
          />
        </div>
        <span className="mt-auto inline-flex items-center gap-1 pt-3 text-[10px] font-semibold uppercase tracking-wider text-navy sm:gap-2 sm:pt-4 sm:text-xs">
          Explore More
          <ArrowRightIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
        </span>
      </Link>
    </div>
  );
}
