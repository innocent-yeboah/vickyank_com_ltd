import type { Metadata } from "next";
import Image from "next/image";
import CtaBanner from "@/components/ui/CtaBanner";
import { aboutCopy } from "@/content/brochure";
import { site } from "@/lib/site";
import ScrollReveal from "@/components/ui/ScrollReveal";

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
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:gap-12">
            {aboutCopy.differentiators.map((item, index) => (
              <ScrollReveal key={item.title} as="article" delayMs={index * 120}>
                <span
                  aria-hidden="true"
                  className="scroll-reveal-rule mb-5 block h-px w-8 bg-gold"
                />
                <h2 className="font-heading text-xl text-white">{item.title}</h2>
                <p className="mt-3 leading-relaxed text-white/65">{item.body}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
