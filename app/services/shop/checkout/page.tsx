import type { Metadata } from "next";
import CheckoutClient from "@/components/shop/CheckoutClient";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your VickYank shop order with secure Paystack payment.",
  robots: { index: false, follow: false },
};

export default function CheckoutPage() {
  return (
    <section className="min-h-[70vh] bg-navy">
      <CheckoutClient />
    </section>
  );
}
