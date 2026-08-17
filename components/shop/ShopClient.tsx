"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useCart } from "@/components/shop/CartProvider";
import { formatGhs, products, type ProductCategory } from "@/lib/catalog";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/Icons";

type Filter = "all" | ProductCategory;

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
    <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8 lg:py-24">
      <div className="lg:col-span-2">
        <div className="flex flex-wrap gap-3">
          {(
            [
              ["all", "All Products"],
              ["spare-parts", "Spare Parts"],
              ["equipment", "Equipment"],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setFilter(value)}
              className={`px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-colors ${
                filter === value
                  ? "bg-gold text-navy"
                  : "border border-white/20 text-white hover:border-gold hover:text-gold"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {filtered.map((product) => (
            <article
              key={product.id}
              className="tech-frame flex flex-col border border-white/10 bg-base-panel"
            >
              <span className="tech-anchor-bl" aria-hidden="true" />
              <span className="tech-anchor-br" aria-hidden="true" />
              <div className="relative aspect-[4/3] overflow-hidden bg-navy-dark">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover opacity-80"
                  sizes="(min-width: 640px) 33vw, 100vw"
                />
                <span className="absolute left-0 top-4 bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy">
                  {product.category === "spare-parts" ? "Spare Part" : "Equipment"}
                </span>
                {!product.inStock && (
                  <span className="absolute right-0 top-4 bg-navy px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    On Order
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-white">
                  {product.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-400">
                  {product.description}
                </p>
                <p className="mt-4 font-heading text-xl font-bold text-gold">
                  {formatGhs(product.priceGhs)}
                </p>
                <button
                  type="button"
                  disabled={!product.inStock}
                  onClick={() => handleAdd(product.id)}
                  className="btn-gold mt-5 w-full py-3 disabled:opacity-40"
                >
                  {addedId === product.id ? (
                    <span className="inline-flex items-center gap-2">
                      <CheckIcon className="h-4 w-4" /> Added
                    </span>
                  ) : product.inStock ? (
                    "Add to Cart"
                  ) : (
                    "Unavailable"
                  )}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <aside className="tech-frame h-fit border border-white/10 bg-base-panel p-7 lg:sticky lg:top-28">
        <span className="tech-anchor-bl" aria-hidden="true" />
        <span className="tech-anchor-br" aria-hidden="true" />
        <h2 className="font-heading text-xl font-bold uppercase tracking-wide text-white">
          Cart ({itemCount})
        </h2>

        {lines.length === 0 ? (
          <p className="mt-4 text-sm text-gray-400">
            Your cart is empty. Add spare parts or equipment to continue.
          </p>
        ) : (
          <ul className="mt-6 space-y-5">
            {lines.map((line) => (
              <li key={line.product.id} className="border-b border-white/10 pb-5">
                <div className="flex justify-between gap-3">
                  <p className="font-medium text-white">{line.product.name}</p>
                  <button
                    type="button"
                    onClick={() => removeItem(line.product.id)}
                    className="text-xs uppercase tracking-wider text-gray-500 hover:text-gold"
                  >
                    Remove
                  </button>
                </div>
                <p className="mt-1 text-sm text-gold">
                  {formatGhs(line.product.priceGhs)}
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <label className="text-xs uppercase tracking-wider text-gray-500">
                    Qty
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={line.quantity}
                    onChange={(e) =>
                      setQuantity(line.product.id, Number(e.target.value) || 1)
                    }
                    className="w-16 border border-white/15 bg-navy-dark px-2 py-1 text-white"
                  />
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
          <span className="text-sm uppercase tracking-wider text-gray-400">
            Subtotal
          </span>
          <span className="font-heading text-xl font-bold text-white">
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
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
        <p className="mt-4 text-xs text-gray-500">
          Secure payment via Paystack (GHS). Flutterwave supported when configured.
        </p>
      </aside>
    </div>
  );
}
