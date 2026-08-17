import Image from "next/image";

type Shot = {
  src: string;
  alt: string;
  label?: string;
};

type PhotoGridProps = {
  images: readonly Shot[];
  className?: string;
};

/**
 * Three-column photo gallery used across brochure-style pages.
 */
export default function PhotoGrid({ images, className = "" }: PhotoGridProps) {
  return (
    <div className={`grid gap-3 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {images.map((shot) => (
        <div
          key={`${shot.src}-${shot.alt}`}
          className="relative aspect-[16/10] overflow-hidden bg-navy-ink"
        >
          <Image
            src={shot.src}
            alt={shot.alt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
          {shot.label ? (
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-cover/90 to-transparent px-4 pb-3 pt-10 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
              {shot.label}
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
