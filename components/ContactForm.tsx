"use client";

import { useState, type FormEvent } from "react";
import { CheckIcon } from "@/components/Icons";

const serviceOptions = [
  "Mining Operations",
  "Gold Trading (Buy / Sell)",
  "Excavator Rental",
  "Excavator Purchase",
  "Excavator Spare Parts",
  "Luxury Car Rental",
  "Other / General Enquiry",
];

type FormState = "idle" | "submitting" | "success";

/**
 * Enquiry form for Vickyank Limited.
 *
 * DEMO MODE: submissions are logged to the browser console only.
 * PRODUCTION: connect to Resend (https://resend.com) or a backend
 * API route — replace the body of handleSubmit with a fetch() to
 * e.g. POST /api/contact and send the email server-side.
 */
export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");

    const data = Object.fromEntries(new FormData(event.currentTarget));

    // Connect to Resend or backend for production.
    console.log("[Vickyank contact form] New enquiry:", data);

    // Small delay so the demo feels like a real submission.
    await new Promise((resolve) => setTimeout(resolve, 800));
    setState("success");
  }

  if (state === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center border border-[#FFC107]/30 bg-[#111111] p-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFC107]/15 text-[#FFC107]">
          <CheckIcon className="h-8 w-8" />
        </span>
        <h3 className="mt-6 font-heading text-2xl font-bold uppercase text-white">
          Message Received
        </h3>
        <p className="mt-3 max-w-sm text-gray-300">
          Thank you for contacting Vickyank Limited Company. Our team will
          respond within one business day.
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-8 border border-gray-800/80 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:border-[#FFC107] hover:text-[#FFC107]"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  const inputClasses = "form-apparatus";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Kwame Mensah"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="055 000 0000"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-300"
        >
          Email Address *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          className={inputClasses}
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="mb-2 block text-sm font-medium text-gray-300"
        >
          Service of Interest *
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className={`${inputClasses} [&>option]:bg-[#151515] [&>option]:text-white`}
        >
          <option value="" disabled>
            Select a service…
          </option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-gray-300"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project or requirements…"
          className={`${inputClasses} resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full bg-[#FFC107] px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider text-[#1A1A1A] transition-colors hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state === "submitting" ? "Sending…" : "Send Enquiry"}
      </button>

      <p className="text-xs text-gray-500">
        By submitting, you agree to be contacted by Vickyank Limited Company
        regarding your enquiry.
      </p>
    </form>
  );
}
