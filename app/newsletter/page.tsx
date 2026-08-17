import type { Metadata } from "next";
import NewsletterForm from "@/components/forms/NewsletterForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Newsletter",
  description: `Subscribe to the ${site.name} newsletter for measured updates on mining, gold trading, equipment, spare parts, and executive mobility in Ghana.`,
};

const topics = [
  {
    title: "Mining & Sites",
    body: "Operational notes from the field — crews, safety, and partnership models.",
  },
  {
    title: "Gold Desk",
    body: "Clear context on buying and selling raw and refined gold, without hype.",
  },
  {
    title: "Machines & Parts",
    body: "Fleet availability, inspected equipment, and genuine spare parts.",
  },
  {
    title: "Executive Mobility",
    body: "When the luxury fleet is ready for business, events, and VIP travel.",
  },
] as const;

export default function NewsletterPage() {
  return (
    <>
      <section className="bg-navy page-section">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="page-title">Newsletter</h1>
          <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
            Stay informed with {site.shortName}. We write for principals, contractors,
            and families who value quiet professionalism. {site.tagline}
          </p>
        </div>
      </section>

      <section className="bg-navy-ink page-section">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div>
            <h2 className="page-title">What You Will Receive</h2>
            <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
              Occasional notes — not a daily flood. No urgency language, no guilt.
              Just useful updates when they matter.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {topics.map((topic) => (
                <article key={topic.title} className="brochure-card p-4 sm:p-5">
                  <h3 className="font-heading text-lg text-gold">{topic.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    {topic.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
          <div className="brochure-card h-fit">
            <h2 className="font-heading text-2xl text-white">Subscribe</h2>
            <p className="mt-2 text-sm text-white/70">
              Share your email. Tell us what you care about, if you wish.
            </p>
            <div className="mt-6">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
