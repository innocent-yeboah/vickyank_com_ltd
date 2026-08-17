import type { Metadata } from "next";
import Image from "next/image";
import CtaBanner from "@/components/ui/CtaBanner";
import { aboutCopy } from "@/content/brochure";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `About ${site.name} — ${site.tagline} Mining, gold trading, heavy equipment, and luxury mobility in Ghana.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="page-title">{aboutCopy.title}</h1>
          <div className="mt-10 grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
            <div className="space-y-5 text-base leading-relaxed text-white/80 sm:text-lg">
              {aboutCopy.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-navy-ink">
              <Image
                src="/images/volvo-ec550e.png"
                alt="Volvo EC550E excavator on site"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority
              />
            </div>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {aboutCopy.differentiators.map((item) => (
              <article key={item.title} className="brochure-card">
                <h2 className="font-heading text-xl text-gold">{item.title}</h2>
                <p className="mt-2 leading-relaxed text-white/80">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
