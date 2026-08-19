"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useCart } from "@/components/shop/CartProvider";
import { formatGhs, products, type ProductCategory } from "@/lib/catalog";

type Filter = "all" | ProductCategory;

const filters = [
  ["all", "All"],
  ["spare-parts", "Parts"],
  ["equipment", "Equipment"],
] as const;

export default function ShopClient() {
  const [filter, setFilter] = useState<Filter>("all");
  const { addItem, lines, itemCount, subtotalGhs, setQuantity, removeItem } =
    useCart();
  const [addedId, setAddedId] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      filter === "all"
        ? products
        : products.filter((p) => p.category === filter),
    [filter]
  );

  function handleAdd(productId: string) {
    const product = products.find((p) => p.id === productId);
    if (!product || !product.inStock) return;
    addItem(product);
    setAddedId(productId);
    window.setTimeout(() => setAddedId(null), 1500);
  }

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
                  {!product.inStock ? " · On order" : ""}
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
                  {product.inStock
                    ? formatGhs(product.priceGhs)
                    : "Price on enquiry"}
                </p>
                {product.inStock ? (
                  <button
                    type="button"
                    onClick={() => handleAdd(product.id)}
                    className="btn-gold mt-5 w-full"
                  >
                    {addedId === product.id ? "Added" : "Add to order"}
                  </button>
                ) : (
                  <Link
                    href={
                      product.category === "equipment"
                        ? "/services/equipment#enquire"
                        : "/services/spare-parts#enquire"
                    }
                    className="btn-outline-light mt-5 w-full"
                  >
                    Ask the desk
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <aside className="brochure-card h-fit lg:sticky lg:top-28">
        <h2 className="font-heading text-2xl font-medium text-white">
          Your order
        </h2>
        <p className="mt-1 text-sm text-white/45">
          {itemCount === 0
            ? "Nothing chosen yet."
            : `${itemCount} ${itemCount === 1 ? "item" : "items"}`}
        </p>

        {lines.length === 0 ? (
          <p className="mt-6 text-sm leading-relaxed text-white/60">
            Choose a part or a piece of equipment. If it is not listed,{" "}
            <Link
              href="/services/spare-parts#enquire"
              className="text-gold hover:text-gold-soft"
            >
              ask the desk
            </Link>
            .
          </p>
        ) : (
          <ul className="mt-6 space-y-5">
            {lines.map((line) => (
              <li key={line.product.id} className="border-b border-white/10 pb-5">
                <div className="flex justify-between gap-3">
                  <p className="text-sm text-white">{line.product.name}</p>
                  <button
                    type="button"
                    onClick={() => removeItem(line.product.id)}
                    className="text-xs tracking-[0.12em] text-white/40 hover:text-gold"
                  >
                    Remove
                  </button>
                </div>
                <p className="mt-1 text-sm text-white/55">
                  {formatGhs(line.product.priceGhs)}
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <label
                    htmlFor={`qty-${line.product.id}`}
                    className="text-xs tracking-[0.12em] text-white/45"
                  >
                    Qty
                  </label>
                  <input
                    id={`qty-${line.product.id}`}
                    type="number"
                    min={1}
                    value={line.quantity}
                    onChange={(e) =>
                      setQuantity(line.product.id, Number(e.target.value) || 1)
                    }
                    className="form-apparatus w-16 px-2 py-1.5"
                  />
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
          <span className="text-sm text-white/50">Subtotal</span>
          <span className="font-heading text-xl text-white">
            {formatGhs(subtotalGhs)}
          </span>
        </div>

        <Link
          href="/services/shop/checkout"
          aria-disabled={lines.length === 0}
          className={`btn-gold mt-6 w-full ${
            lines.length === 0 ? "pointer-events-none opacity-40" : ""
          }`}
        >
          Checkout
        </Link>
        <p className="mt-4 text-xs leading-relaxed text-white/40">
          Secure payment in GHS via Paystack.
        </p>
      </aside>
    </div>
  );
}
