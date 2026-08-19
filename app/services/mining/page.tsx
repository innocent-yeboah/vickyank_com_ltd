import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import InquiryForm from "@/components/forms/InquiryForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mining Operations",
  description:
    "VickYank Limited runs mining operations in Ghana — crews, machines, and accountable site management for landowners, investors, and contractors.",
};

const forWhom = [
  {
    title: "You hold the land",
    body: "You want an operator who treats the ground as a long relationship, not a short raid. We bring the crews and the machines. You keep a clear view of what is happening.",
  },
  {
    title: "You are putting capital in",
    body: "You need a partner who can explain the work, the risk, and the timetable in plain language — then show up with equipment that is actually ready.",
  },
  {
    title: "You need the work done",
    body: "You want machines and people on site, safety taken as a duty, and a name you can call when the ground shifts.",
  },
] as const;

const method = [
  {
    title: "We walk the ground",
    body: "Before a machine moves, we see the site with you. What is possible, what is not, and what it will take.",
  },
  {
    title: "We agree the model",
    body: "Partnership, contract, or a defined scope. Written in language both sides can stand behind.",
  },
  {
    title: "We put the operation on site",
    body: "Crews, supervisors, and our own heavy equipment. Safety first — because a stopped site costs everyone.",
  },
  {
    title: "You see the work",
    body: "Progress you can measure. Questions answered. No fog when it is time to report.",
  },
] as const;

const fieldShots = [
  {
    src: "/images/cat-loading-haul.png",
    alt: "Excavator loading a haul truck on a mining site",
  },
  {
    src: "/images/hero-site.png",
    alt: "Supervisors overlooking mining operations in Ghana",
  },
  {
    src: "/images/volvo-ec550e.png",
    alt: "Heavy excavator at work on site",
  },
] as const;

export default function MiningServicePage() {
  return (
    <>
      <section className="page-hero bg-navy-cover lg:min-h-[72svh]">
        <Image
          src="/images/cat-loading-haul.png"
          alt="CAT excavator loading a haul truck on a VickYank site"
          fill
          priority
          className="object-cover brightness-[0.72]"
          sizes="100vw"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy-cover via-navy-cover/50 to-navy-cover/15"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gold">Mining</p>
          <h1 className="mt-3 max-w-3xl font-heading text-[2rem] font-medium leading-[1.12] text-white sm:text-5xl lg:text-6xl">
            The ground has to move. Someone has to be accountable.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            VickYank runs mining operations in Ghana — crews, machines, and site
            discipline for people who will still be here when the contract is
            done.
          </p>
          <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href="#enquire" className="btn-gold">
              Discuss a project
            </a>
            <Link href="/services/equipment" className="btn-outline-light">
              See the machines
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="page-title">Who this is for</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
            If one of these is you, we should talk. If none of them is you, the
            next page will serve you better.
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

      <section className="border-t border-white/10 bg-navy-darker page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="page-title">How the work is done</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
            Serious mining is a sequence. We do not skip the first step to look
            busy on the last.
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

      <section className="bg-navy">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {fieldShots.map((shot) => (
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
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="page-title">What you can hold us to</h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-white/70 sm:text-lg">
            <p>
              We run our own heavy equipment. That means a parked machine is our
              problem as much as yours — so we maintain it before it reaches your
              ground.
            </p>
            <p>
              Safety is not a poster. It is how crews go home, and how a site
              stays open. Supervisors are on the work, not only on the phone.
            </p>
            <p>
              We work in Ghana. Local knowledge is not a slogan here. It is how
              you get from a conversation to a running operation without losing
              months in the fog.
            </p>
          </div>
          <p className="mt-10 text-sm text-white/45">
            {site.tagline}
          </p>
        </div>
      </section>

      <section id="enquire" className="border-t border-white/10 bg-navy-ink page-section">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <h2 className="page-title">Tell us about the ground</h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/65 sm:text-lg">
              Site, timeline, and how you want to partner. Operations replies
              within one business day — or now, on WhatsApp.
            </p>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block text-sm text-gold hover:text-gold-soft"
            >
              WhatsApp the desk
            </a>
          </div>
          <div className="brochure-card">
            <InquiryForm
              defaultService="Mining Operations"
              context="mining"
              submitLabel="Send mining enquiry"
              successTitle="We have the enquiry"
              successMessage="The operations team will reply within one business day with a clear next step."
            />
          </div>
        </div>
      </section>
    </>
  );
}
