import type { Metadata } from "next";
import CtaBanner from "@/components/ui/CtaBanner";
import BusinessServiceGrid from "@/components/ui/BusinessServiceGrid";

export const metadata: Metadata = {
  title: "Our Business",
  description:
    "Mining, gold trading, digging machines, spare parts, and fancy car rental from VickYank Limited Company.",
};

export default function ServicesHubPage() {
  return (
    <>
      <section className="bg-navy page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="page-title">Our Business</h1>
          <p className="mt-5 max-w-2xl text-base text-white/70 sm:text-lg">
            Mining. Gold trading. Digging machines. Spare parts. Fancy cars.
            Choose a line to learn what we do — then enquire when you are ready.
          </p>
          <BusinessServiceGrid />
        </div>
      </section>
      <CtaBanner
        title="Begin a conversation"
        description="Tell us what you need. We reply with a clear next step."
      />
    </>
  );
}
