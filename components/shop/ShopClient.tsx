"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { products, type ProductCategory } from "@/lib/catalog";

type Filter = "all" | ProductCategory;

const filters = [
  ["all", "All"],
  ["spare-parts", "Parts"],
  ["equipment", "Equipment"],
] as const;

export default function ShopClient() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(
    () =>
      filter === "all"
        ? products
        : products.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-3 lg:gap-16 lg:px-8 lg:py-28">
      <div className="lg:col-span-2">
        <div className="flex flex-wrap gap-2">
          {filters.map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setFilter(value)}
              className={`min-h-11 px-5 py-2.5 text-xs tracking-[0.16em] transition-colors ${
                filter === value
                  ? "bg-gold text-navy"
                  : "border border-white/20 text-white hover:border-gold hover:text-gold"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {filtered.map((product) => (
            <article key={product.id} className="group flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden bg-navy">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <p className="absolute bottom-3 left-3 text-xs tracking-[0.18em] text-gold">
                  {product.category === "spare-parts" ? "Part" : "Equipment"}
                  {" · Pre-order"}
                </p>
              </div>
              <div className="flex flex-1 flex-col pt-6">
                <h3 className="font-heading text-2xl font-medium text-white">
                  {product.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
                  {product.description}
                </p>
                <p className="mt-5 text-base text-white/85">
                  Available upon request
                </p>
                <Link
                  href={
                    product.category === "equipment"
                      ? "/services/equipment#enquire"
                      : "/services/spare-parts#enquire"
                  }
                  className="btn-gold mt-5 w-full"
                >
                  Pre-order
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <aside className="brochure-card h-fit lg:sticky lg:top-28">
        <h2 className="font-heading text-2xl font-medium text-white">
          Pre-order
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-white/60">
          Every line is a pre-order. Prices are available upon request. Name the
          part or the machine — the desk replies within one business day.
        </p>
        <Link href="/contact" className="btn-gold mt-8 w-full">
          Ask the desk
        </Link>
        <p className="mt-4 text-xs leading-relaxed text-white/40">
          No checkout here. A specialist confirms availability and a number you
          can stand behind.
        </p>
      </aside>
    </div>
  );
}
