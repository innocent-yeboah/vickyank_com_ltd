import NewsletterForm from "@/components/forms/NewsletterForm";

/**
 * Homepage closer — subscribe instead of a second Enquire band.
 */
export default function HomeNewsletter() {
  return (
    <section className="border-t border-white/10 bg-navy">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="max-w-xl">
          <h2 className="page-title">Stay informed</h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70">
            Occasional notes on mining, gold, machines, and cars. No clutter, no
            pressure — useful when it matters.
          </p>
        </div>
        <div className="w-full max-w-xl lg:max-w-md">
          <NewsletterForm compact />
        </div>
      </div>
    </section>
  );
}
