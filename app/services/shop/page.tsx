import type { Metadata } from "next";
import Image from "next/image";
import ShopClient from "@/components/shop/ShopClient";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Parts & Equipment Shop",
  description:
    "Buy excavator spare parts and equipment online from VickYank Limited. Secure checkout with Paystack in Ghana Cedis.",
};

export default function ShopPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-darker py-28">
        <Image
          src="/images/spare-parts-inventory.png"
          alt="Hydraulic pumps and excavator spare parts inventory"
          fill
          priority
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="kicker">Our Business</p>
          <h1 className="page-title mt-3">Spare Parts &amp; Equipment Shop</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Order genuine excavator parts and select equipment online.
            Secure payment in GHS via Paystack. {site.tagline}
          </p>
        </div>
      </section>

      <section className="bg-navy">
        <ShopClient />
      </section>
    </>
  );
}
