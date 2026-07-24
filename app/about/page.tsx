import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import {
  CheckIcon,
  GlobeIcon,
  HandshakeIcon,
  ShieldIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Vickyank Limited Company — a diversified industrial enterprise in Ghana operating in mining, gold trading, heavy equipment, and luxury mobility.",
};

const values = [
  {
    icon: ShieldIcon,
    title: "Integrity",
    description:
      "Every transaction is documented, every commitment honoured. Trust is our most valuable asset.",
  },
  {
    icon: HandshakeIcon,
    title: "Partnership",
    description:
      "We build long-term relationships, not one-off deals. Your project's success is our success.",
  },
  {
    icon: GlobeIcon,
    title: "Excellence",
    description:
      "From machine maintenance to client service, we hold ourselves to professional international standards.",
  },
];

// Placeholder leadership entries — replace names, roles, and photos
// with the client's real leadership team.
const leadership = [
  {
    name: "Managing Director",
    role: "Founder & Chief Executive",
    bio: "Provides strategic direction across all five service lines, with deep experience in Ghana's mining and equipment sectors.",
  },
  {
    name: "Operations Director",
    role: "Head of Mining & Equipment",
    bio: "Oversees mining operations, fleet maintenance, and equipment deployment across client projects nationwide.",
  },
  {
    name: "Commercial Director",
    role: "Head of Trading & Client Relations",
    bio: "Leads gold trading operations, client partnerships, and the luxury mobility division.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ============================ PAGE HERO =========================== */}
      <section className="relative overflow-hidden bg-navy-darker py-28">
        {/* REPLACE: real photo of the client's operations. */}
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80"
          alt="Industrial operations site"
          fill
          priority
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold">
            About Vickyank Limited
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
            An Industrial Enterprise Built on Trust
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Mining. Gold. Machines. Mobility. One company, one standard of
            excellence.
          </p>
        </div>
      </section>

      {/* ========================== COMPANY STORY ========================= */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative aspect-[4/5] overflow-hidden">
            {/* REPLACE: real photo — founder, team, or flagship machine. */}
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
              alt="Heavy industrial structure at sunset"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold-dark">
              Our Story
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight text-charcoal sm:text-4xl">
              From the Ground Up
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-600">
              <p>
                Vickyank Limited Company was founded on a simple conviction:
                Ghana&apos;s industrial economy deserves partners who operate
                with the same professionalism as the world&apos;s leading
                enterprises.
              </p>
              <p>
                What began in mining grew naturally into gold trading, then
                into equipment — because clients kept asking the same
                question: &ldquo;Who else can we trust?&rdquo; Today we
                operate five service lines under one roof, from excavator
                fleets working project sites to a luxury car fleet serving
                executives and events.
              </p>
              <p>
                Every division runs on the same principles: documented
                transactions, maintained equipment, fair pricing, and
                relationships that outlast any single contract.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= MISSION ============================ */}
      <section className="bg-section-gradient py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="border-l-4 border-gold pl-8">
              <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-gold">
                Our Mission
              </h2>
              <p className="mt-4 text-xl leading-relaxed text-white">
                To deliver dependable industrial services — mining, gold
                trading, equipment, and mobility — that empower our clients
                and contribute to Ghana&apos;s economic growth.
              </p>
            </div>
            <div className="border-l-4 border-gold pl-8">
              <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-gold">
                Our Vision
              </h2>
              <p className="mt-4 text-xl leading-relaxed text-white">
                To become West Africa&apos;s most trusted multi-service
                industrial enterprise — the first name clients call for any
                project, at any scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= VALUES ============================= */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Values"
            title="What We Stand For"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="border border-gray-200 bg-white p-10 text-center"
              >
                <span className="inline-flex h-16 w-16 items-center justify-center bg-navy text-gold">
                  <value.icon className="h-8 w-8" />
                </span>
                <h3 className="mt-6 font-heading text-xl font-bold uppercase tracking-wide text-charcoal">
                  {value.title}
                </h3>
                <p className="mt-3 leading-relaxed text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================== LEADERSHIP =========================== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Leadership"
            title="The Team Behind Vickyank"
            description="Placeholder profiles — replace with real names, photos, and biographies of the leadership team."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {leadership.map((person) => (
              <div
                key={person.role}
                className="border border-gray-200 bg-gray-50"
              >
                {/* REPLACE: professional headshot of each leader. */}
                <div className="flex aspect-square items-center justify-center bg-navy">
                  <span className="flex h-24 w-24 items-center justify-center rounded-full bg-gold font-heading text-4xl font-bold text-charcoal">
                    {person.name.charAt(0)}
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-charcoal">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-sm font-bold uppercase tracking-wider text-gold-dark">
                    {person.role}
                  </p>
                  <p className="mt-4 leading-relaxed text-gray-600">
                    {person.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== WHY CHOOSE US =========================== */}
      <section className="bg-navy-darker py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            dark
            eyebrow="Why Vickyank"
            title="The Difference Is Discipline"
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
            {[
              "Five integrated service lines under one accountable company",
              "Modern, well-maintained excavator and vehicle fleets",
              "Transparent gold trading with documented valuations",
              "Genuine spare parts sourced through trusted channels",
              "Responsive support — phone, WhatsApp, and email",
              "Deep local expertise across Ghana's industrial regions",
            ].map((point) => (
              <div key={point} className="flex items-start gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <p className="leading-relaxed text-gray-300">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Let's Discuss Your Project"
        description="Speak directly with our team about mining, equipment, gold, or executive transport."
      />
    </>
  );
}
