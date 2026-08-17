import type { Metadata } from "next";
import CtaBanner from "@/components/ui/CtaBanner";
import BusinessServiceGrid from "@/components/ui/BusinessServiceGrid";
import { site } from "@/lib/site";

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
          <h1 className="page-title text-center">Our Business</h1>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base text-white/80 sm:text-lg">
            Industrial and executive service lines, plus an online parts and
            equipment shop. One standard of excellence.
            {` ${site.tagline}`}
          </p>
          <BusinessServiceGrid
            sixth={{
              href: "/services/shop",
              title: "Parts & Equipment Shop",
              body: "Order genuine spare parts and select equipment online. Secure checkout in Ghana Cedis.",
              image: "/images/spare-parts-inventory.png",
              imageAlt: "Spare parts and equipment available in the shop",
            }}
          />
        </div>
      </section>
      <CtaBanner
        title="Which Service Do You Need?"
        description="Tell us your requirements and receive a tailored proposal within one business day."
      />
    </>
  );
}
