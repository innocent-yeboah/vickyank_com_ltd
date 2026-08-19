import type { Metadata } from "next";
import Image from "next/image";
import InquiryForm from "@/components/forms/InquiryForm";
import CarFilm from "@/components/services/CarFilm";
import { luxuryFleet } from "@/lib/catalog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Luxury Car Rental",
  description:
    "Chauffeured or self-drive luxury cars in Ghana from VickYank Limited — Escalade, Mercedes-AMG GLE, Jaguar XE, Land Cruiser, and more. Detailed before every hire.",
};

const forWhom = [
  {
    title: "You have a room to enter",
    body: "A meeting, an airport, a table that already has a view of the door. The car is the first sentence. It should be the right one.",
  },
  {
    title: "The day has to look like it matters",
    body: "A wedding, a launch, a gift. Presence without noise. A chauffeur if you do not want to think about the road.",
  },
  {
    title: "You want the keys",
    body: "Self-drive, with a valid licence. The car still leaves us detailed, insured, and ready — you just sit in the seat.",
  },
] as const;

const method = [
  {
    title: "You name the day",
    body: "Occasion, dates, city, and whether you want a chauffeur. A specialist answers within one business day.",
  },
  {
    title: "We say what is actually free",
    body: "The exact car, not a class that might appear. If it is not available, we say so — and offer the next right metal.",
  },
  {
    title: "The car is prepared",
    body: "Detailed to showroom standard. Fuel, papers, and insurance in order before it moves.",
  },
  {
    title: "You arrive",
    body: "Collection or delivery. A driver if you asked. Quiet from the first kilometre.",
  },
] as const;

const fleetOrder = [
  "car-escalade",
  "car-gle",
  "car-sedan",
  "car-coupe",
  "car-trx",
  "car-suv",
] as const;

const fleetLines: Record<string, string> = {
  "car-escalade":
    "When the room should already know who has arrived. Chauffeured, as a rule.",
  "car-gle":
    "AMG presence for the launch, the wedding, the short stretch that has to feel considered.",
  "car-sedan":
    "Quiet executive metal. Airport to the table, chauffeured or in your own hands.",
  "car-coupe":
    "Command without noise. Principals, convoys, and the road that is not a city street.",
  "car-trx":
    "When the statement is the machine itself. Hire by the day or the week.",
  "car-suv":
    "Space for a delegation. Presence for the event. Detailed before every outing.",
};

export default function LuxuryCarsPage() {
  const fleet = fleetOrder
    .map((id) => luxuryFleet.find((car) => car.id === id))
    .filter((car): car is (typeof luxuryFleet)[number] => Boolean(car));

  return (
    <>
      <section className="page-hero bg-navy-cover lg:min-h-[85svh]">
        <Image
          src="/images/cadillac-escalade.png"
          alt="Cadillac Escalade prepared for hire"
          fill
          priority
          className="object-cover object-[center_60%] brightness-[0.72] motion-safe:animate-cinematic-still"
          sizes="100vw"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy-cover via-navy-cover/45 to-navy-cover/10"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gold">Luxury cars</p>
          <h1 className="mt-3 max-w-3xl font-heading text-[2rem] font-medium leading-[1.12] text-white sm:text-5xl lg:text-6xl">
            Arrive the way you intend.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Chauffeured or self-drive in Ghana. The car is detailed. The time is
            yours. The first impression is not left to chance.
          </p>
          <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href="#enquire" className="btn-gold">
              Reserve a car
            </a>
            <a href="#fleet" className="btn-outline-light">
              See the fleet
            </a>
          </div>
        </div>
      </section>

      <CarFilm />

      <section className="bg-navy page-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="page-title">Who this is for</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
            A hire is not a brochure of badges. It is a day that has to look like
            it belongs to you.
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
          <h2 className="page-title">How a hire is done</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
            Four movements. The car does not leave the yard until it is ready
            to be seen.
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

      <section id="fleet" className="bg-navy">
        {fleet.map((car) => (
          <article
            key={car.id}
            className="group relative min-h-[78svh] overflow-hidden"
          >
            <Image
              src={car.image}
              alt={car.name}
              fill
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              sizes="100vw"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-navy-cover via-navy-cover/35 to-transparent"
            />
            <div className="relative flex min-h-[78svh] items-end">
              <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                <p className="text-xs tracking-[0.18em] text-gold">{car.status}</p>
                <h3 className="mt-3 max-w-2xl font-heading text-3xl text-white sm:text-5xl lg:text-6xl">
                  {car.name}
                </h3>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70">
                  {fleetLines[car.id] ?? car.specs[0]}
                </p>
                <a
                  href="#enquire"
                  className="mt-8 inline-block text-sm text-gold hover:text-gold-soft"
                >
                  Reserve this car
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-navy page-section">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="page-title">What you can hold us to</h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-white/70 sm:text-lg">
            <p>
              The car you are promised is the car that arrives. Availability is
              said in the open. We do not sell a photograph of a class that is
              not free.
            </p>
            <p>
              Every hire is detailed before it leaves. Fuel is full-to-full unless
              we agree otherwise. A deposit is held for the duration — then
              returned when the car comes home as it left.
            </p>
            <p>
              Self-drive needs a valid licence. A chauffeur is a professional,
              not an afterthought. Forty-eight hours’ notice is how we keep the
              diary honest if plans change. That is the luxury: nothing theatrical,
              nothing missing.
            </p>
          </div>
          <p className="mt-10 text-sm text-white/45">{site.tagline}</p>
        </div>
      </section>

      <section
        id="enquire"
        className="border-t border-white/10 bg-navy-ink page-section"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <h2 className="page-title">Reserve a car</h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/65 sm:text-lg">
              The car, the dates, and whether you want a chauffeur. We confirm
              what is actually free within one business day.
            </p>
            <div className="mt-8 space-y-3 text-sm text-white/60">
              <p>
                <a
                  href={`tel:${site.phoneInternational}`}
                  className="text-gold hover:text-gold-soft"
                >
                  {site.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-soft"
                >
                  WhatsApp the desk
                </a>
              </p>
            </div>
          </div>
          <div className="brochure-card">
            <InquiryForm
              variant="rental"
              defaultService="Luxury Car Rental"
              context="luxury-cars"
              submitLabel="Send hire enquiry"
              successTitle="The desk has your request"
              successMessage="Mobility will confirm the car, the dates, and the next step within one business day."
            />
          </div>
        </div>
      </section>
    </>
  );
}
