import type { Metadata } from "next";
import CtaBanner from "@/components/ui/CtaBanner";
import BusinessServiceGrid from "@/components/ui/BusinessServiceGrid";

export const metadata: Metadata = {
  title: "Our Business",
  description:
    "Industrial solutions for mining, gold trading, excavator machines, spare parts, and luxury car rental from VickYank Limited.",
};

export default function ServicesHubPage() {
  return (
    <>
      <section className="bg-navy page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="page-title">Our Business</h1>
          <p className="mt-5 max-w-2xl text-base text-white/70 sm:text-lg">
            Mining, gold, machinery, parts, executive cars — and a working shop
            for genuine equipment. Choose what you need to begin.
          </p>
          <BusinessServiceGrid
            sixth={{
              href: "/services/shop",
              title: "Parts & Equipment Shop",
              body: "Browse genuine spare parts and equipment. Pre-order only — prices available upon request.",
              image: "/images/spare-parts-inventory.png",
              imageAlt: "Spare parts and equipment available in the shop",
            }}
          />
        </div>
      </section>
      <CtaBanner
        title="Begin a conversation"
        description="Tell us what you need. We reply with a clear next step."
      />
    </>
  );
}
