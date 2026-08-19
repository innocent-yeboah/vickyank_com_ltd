import type { Metadata } from "next";
import Image from "next/image";
import NewsletterForm from "@/components/forms/NewsletterForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Newsletter",
  description: `Subscribe to the ${site.name} newsletter for measured updates on mining, gold trading, equipment, spare parts, and executive mobility in Ghana.`,
};

const forWhom = [
  {
    title: "You already sit with this house",
    body: "You want the next useful note — a machine class, a desk update, a car that is free — without a daily flood.",
  },
  {
    title: "You are still deciding",
    body: "You want to see how we speak when nobody is selling. Quiet professionalism travels further than a brochure.",
  },
  {
    title: "You want the desk, not the noise",
    body: "No urgency. No guilt. Occasional writing when there is something worth saying.",
  },
] as const;

const method = [
  {
    title: "You share an email",
    body: "A name if you wish. That is enough to begin.",
  },
  {
    title: "You may name what you care about",
    body: "Mining, gold, machines, parts, or cars. Optional. We will not pretend you asked for everything.",
  },
  {
    title: "We write when it matters",
    body: "Measured notes. Not a calendar of pressure. Useful when it is useful.",
  },
  {
    title: "You can leave whenever you wish",
    body: "Say so, and you are off the list. The door stays as easy as it opened.",
  },
] as const;

const topics = [
  {
    title: "Mining and sites",
    body: "Crews, safety, and how a partnership actually runs on the ground.",
  },
  {
    title: "The gold desk",
    body: "Buying and selling raw and refined metal — without hype.",
  },
  {
    title: "Machines and parts",
    body: "Iron that is ready, and the parts that keep it working.",
  },
  {
    title: "The cars",
    body: "When the fleet is ready for a meeting, an event, or the road.",
  },
] as const;

const houseShots = [
  {
    src: "/images/cat-loading-haul.png",
    alt: "Excavator loading a haul truck on a VickYank site",
  },
  {
    src: "/images/gold-bars.jpg",
    alt: "Gold bars on the trading desk",
  },
  {
    src: "/images/cadillac-escalade.png",
    alt: "Cadillac Escalade from the luxury fleet",
  },
] as const;

export default function NewsletterPage() {
  return (
    <>
      <section className="page-hero bg-navy-cover lg:min-h-[72svh]">
        <Image
          src="/images/hero-site.png"
          alt="VickYank supervisors overlooking operations in Ghana"
          fill
          priority
          className="object-cover brightness-[0.68] motion-safe:animate-cinematic-still"
          sizes="100vw"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy-cover via-navy-cover/55 to-navy-cover/20"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gold">Newsletter</p>
          <h1 className="mt-3 max-w-3xl font-heading text-[2rem] font-medium leading-[1.12] text-white sm:text-5xl lg:text-6xl">
            We write when there is something worth saying.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Occasional notes on mining, gold, machines, and cars. No clutter. No
            pressure. {site.tagline}
          </p>
          <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href="#subscribe" className="btn-gold">
              Subscribe
            </a>
            <a href="#topics" className="btn-outline-light">
              What the notes cover
            </a>
          </div>
        </div>
      </section>

      <section className="bg-navy">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {houseShots.map((shot) => (
            <div
              key={shot.src}
              className="relative aspect-[16/10] overflow-hidden sm:aspect-[4/5]"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                className="object-cover"
                sizes="(min-width: 640px) 33vw, 100vw"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="page-title">Who this letter is for</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
            Principals, contractors, and families who prefer a quiet desk to a
            loud inbox.
          </p>
          <div className="mt-12 grid gap-12 sm:grid-cols-3 sm:gap-10">
            {forWhom.map((item) => (
              <article key={item.title}>
                <span aria-hidden="true" className="mb-5 block h-px w-8 bg-gold" />
                <h3 className="font-heading text-2xl text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="topics"
        className="border-t border-white/10 bg-navy-darker page-section"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="page-title">What the notes cover</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
            The same houses you already know. Written in the same voice.
          </p>
          <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((item) => (
              <article key={item.title}>
                <span aria-hidden="true" className="mb-5 block h-px w-8 bg-gold" />
                <h3 className="font-heading text-2xl text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="page-title">How the list works</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
            Four movements. None of them a trick.
          </p>
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {method.map((step, index) => (
              <li key={step.title}>
                <p className="text-xs tracking-[0.18em] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-heading text-xl text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-white/10 bg-navy page-section">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="page-title">What you can hold us to</h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-white/70 sm:text-lg">
            <p>
              Your email is for this letter. Not a list we sell. Not a drip of
              urgency. If we have nothing useful to say, we stay quiet.
            </p>
            <p>
              You can ask to be removed at any time. We will do it without a
              speech.
            </p>
            <p>
              That is the whole of the luxury: a house that writes like it
              works — clearly, and only when it counts.
            </p>
          </div>
          <p className="mt-10 text-sm text-white/45">{site.tagline}</p>
        </div>
      </section>

      <section
        id="subscribe"
        className="border-t border-white/10 bg-navy-ink page-section"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <h2 className="page-title">Join the list</h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/65 sm:text-lg">
              Share your email. Name the houses you care about, if you wish. We
              will not fill your week.
            </p>
          </div>
          <div className="brochure-card">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
