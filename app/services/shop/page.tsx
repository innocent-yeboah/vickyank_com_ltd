import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShopClient from "@/components/shop/ShopClient";

export const metadata: Metadata = {
  title: "Parts & Equipment Shop",
  description:
    "Buy excavator spare parts and equipment online from VickYank Limited. Secure checkout with Paystack in Ghana Cedis.",
};

export default function ShopPage() {
  return (
    <>
      <section className="page-hero bg-navy-darker">
        <Image
          src="/images/spare-parts-inventory.png"
          alt="Hydraulic pumps and excavator spare parts inventory"
          fill
          priority
          className="object-cover brightness-[0.7]"
          sizes="100vw"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy-cover via-navy-cover/45 to-transparent"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="page-title">Parts &amp; Equipment Shop</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Order genuine excavator parts and select equipment online.
            Secure payment in GHS via Paystack.
          </p>
          <Link href="#catalogue" className="btn-gold mt-10">
            Browse the shop
          </Link>
        </div>
      </section>

      <section id="catalogue" className="bg-navy">
        <ShopClient />
      </section>
    </>
  );
}
