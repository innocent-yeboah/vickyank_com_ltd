import Image from "next/image";
import Link from "next/link";
import { brochureServices } from "@/content/brochure";

/**
 * Image-first business tiles — five houses only (no shop).
 */
export default function BusinessServiceGrid() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 lg:grid-cols-3 lg:gap-5">
      {brochureServices.map((tile) => (
        <Link
          key={tile.href}
          href={tile.href}
          className="group relative aspect-[3/4] overflow-hidden bg-navy sm:aspect-[4/5]"
        >
          <Image
            src={tile.image}
            alt={tile.imageAlt}
            fill
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            sizes="(min-width: 1024px) 30vw, 50vw"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-navy-cover via-navy-cover/25 to-transparent"
          />
          <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5">
            <h3 className="font-heading text-base leading-snug text-white sm:text-xl">
              {tile.title}
            </h3>
            <p className="mt-1.5 hidden text-sm leading-relaxed text-white/70 sm:line-clamp-2 sm:block">
              {tile.body}
            </p>
            <span className="mt-3 inline-block text-[10px] font-medium tracking-[0.16em] text-gold sm:text-xs">
              View
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
