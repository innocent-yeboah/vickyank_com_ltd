import type { Metadata, Viewport } from "next";
import { Inter, Libre_Baskerville, Montserrat } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ConstructionBanner from "@/components/layout/ConstructionBanner";
import JsonLd from "@/components/seo/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700"],
});

const lockup = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-lockup",
  display: "swap",
  weight: ["400", "700"],
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
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${lockup.variable} ${inter.variable} overflow-x-hidden`}
    >
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-white">
        <noscript>
          <style>{`.scroll-reveal{opacity:1;transform:none}.scroll-reveal .scroll-reveal-rule{transform:none}`}</style>
        </noscript>
        <JsonLd />
        <ConstructionBanner />
        <Navbar />
        <main className="relative flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
