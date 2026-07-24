import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/lib/site";
import "./globals.css";

// Montserrat: structural industrial headings / data matrices.
// Inter: smooth corporate body readability.
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Mining • Equipment • Gold • Luxury`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "mining Ghana",
    "gold trading Ghana",
    "excavator rental Ghana",
    "excavator spare parts",
    "luxury car rental Ghana",
    "Vickyank Limited",
  ],
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
    locale: "en_GH",
  },
};

export const viewport: Viewport = {
  themeColor: "#111111",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col bg-[#111111]">
        <Navbar />
        <main className="relative flex-1">
          {/* Blueprint grid sits behind content as a faint engineering mesh. */}
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0 industrial-grid opacity-[0.07]"
          />
          <div className="relative z-10">{children}</div>
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
