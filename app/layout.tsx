import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { CartProvider } from "@/components/shop/CartProvider";
import JsonLd from "@/components/seo/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "mining Ghana",
    "gold trading Ghana",
    "excavator rental Ghana",
    "excavator spare parts",
    "luxury car rental Ghana",
    "VickYank Limited",
  ],
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
    locale: "en_GH",
    url: site.url,
    siteName: site.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#1A1A2E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} overflow-x-hidden`}>
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-navy">
        <JsonLd />
        <CartProvider>
          <Navbar />
          <main className="relative flex-1">
            <div
              aria-hidden="true"
              className="pointer-events-none fixed inset-0 z-0 industrial-grid opacity-[0.07]"
            />
            <div className="relative z-10">{children}</div>
          </main>
          <Footer />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
