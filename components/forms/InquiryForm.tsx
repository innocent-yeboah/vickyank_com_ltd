"use client";

import { useState, type FormEvent } from "react";
import { CheckIcon } from "@/components/ui/Icons";

type FormState = "idle" | "submitting" | "success" | "error";

type InquiryFormProps = {
  /** Prefills the service / interest field */
  defaultService?: string;
  /** Optional subject line context for logging / CRM */
  context?: string;
  submitLabel?: string;
  successTitle?: string;
  successMessage?: string;
  /** Extra fields shown for gold trading / rentals */
  variant?: "default" | "gold" | "rental" | "equipment";
};

/**
 * Reusable lead-capture form for VickYank Limited.
 * Posts to /api/contact (Supabase when configured, otherwise logged).
 */
export default function InquiryForm({
  defaultService = "",
  context = "general",
  submitLabel = "Send Enquiry",
  successTitle = "Enquiry Received",
  successMessage =
    "Thank you for contacting VickYank Limited Company. Our team will respond within one business day.",
  variant = "default",
}: InquiryFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, context }),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(body?.error ?? "Unable to send enquiry.");
      }

      setState("success");
      form.reset();
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center border border-gold/30 bg-navy-dark p-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold">
          <CheckIcon className="h-8 w-8" />
        </span>
        <h3 className="mt-6 font-heading text-2xl font-bold uppercase text-white">
          {successTitle}
        </h3>
        <p className="mt-3 max-w-sm text-gray-300">{successMessage}</p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-8 border border-white/20 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:border-gold hover:text-gold"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="context" value={context} />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="inq-name" className="mb-2 block text-sm font-medium text-gray-300">
            Full Name *
          </label>
          <input
            id="inq-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            className="form-apparatus"
          />
        </div>
        <div>
          <label htmlFor="inq-phone" className="mb-2 block text-sm font-medium text-gray-300">
            Phone Number *
          </label>
          <input
            id="inq-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="055 000 0000"
            className="form-apparatus"
          />
        </div>
      </div>

      <div>
        <label htmlFor="inq-email" className="mb-2 block text-sm font-medium text-gray-300">
          Email Address *
        </label>
        <input
          id="inq-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          className="form-apparatus"
        />
      </div>

      {variant === "gold" && (
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="inq-trade-type" className="mb-2 block text-sm font-medium text-gray-300">
              Trade Type *
            </label>
            <select
              id="inq-trade-type"
              name="tradeType"
              required
              defaultValue=""
              className="form-apparatus [&>option]:bg-navy [&>option]:text-white"
            >
              <option value="" disabled>
                Select…
              </option>
              <option value="sell-raw">Sell raw gold</option>
              <option value="sell-refined">Sell refined gold</option>
              <option value="buy-raw">Buy raw gold</option>
              <option value="buy-refined">Buy refined gold</option>
              <option value="both">Both / discuss</option>
            </select>
          </div>
          <div>
            <label htmlFor="inq-quantity" className="mb-2 block text-sm font-medium text-gray-300">
              Approximate Quantity
            </label>
            <input
              id="inq-quantity"
              name="quantity"
              type="text"
              placeholder="e.g. 2 kg raw gold"
              className="form-apparatus"
            />
          </div>
        </div>
      )}

      {variant === "rental" && (
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="inq-vehicle" className="mb-2 block text-sm font-medium text-gray-300">
              Preferred Vehicle
            </label>
            <input
              id="inq-vehicle"
              name="vehicle"
              type="text"
              placeholder="e.g. Executive Sedan"
              className="form-apparatus"
            />
          </div>
          <div>
            <label htmlFor="inq-dates" className="mb-2 block text-sm font-medium text-gray-300">
              Hire Dates
            </label>
            <input
              id="inq-dates"
              name="dates"
              type="text"
              placeholder="e.g. 20–22 Sep 2026"
              className="form-apparatus"
            />
          </div>
        </div>
      )}

      {variant === "equipment" && (
        <div>
          <label htmlFor="inq-machine" className="mb-2 block text-sm font-medium text-gray-300">
            Machine / Part Needed
          </label>
          <input
            id="inq-machine"
            name="machine"
            type="text"
            placeholder="e.g. 20T excavator or track roller"
            className="form-apparatus"
          />
        </div>
      )}

      <div>
        <label htmlFor="inq-service" className="mb-2 block text-sm font-medium text-gray-300">
          Service / Interest *
        </label>
        {defaultService ? (
          <input
            id="inq-service"
            name="service"
            type="text"
            required
            defaultValue={defaultService}
            className="form-apparatus"
          />
        ) : (
          <select
            id="inq-service"
            name="service"
            required
            defaultValue=""
            className="form-apparatus [&>option]:bg-navy [&>option]:text-white"
          >
            <option value="" disabled>
              Select a subject…
            </option>
            <option value="Mining">Mining</option>
            <option value="Gold Trading">Gold Trading</option>
            <option value="Equipment">Equipment</option>
            <option value="Luxury Cars">Luxury Cars</option>
            <option value="Other">Other</option>
          </select>
        )}
      </div>

      <div>
        <label htmlFor="inq-message" className="mb-2 block text-sm font-medium text-gray-300">
          Message *
        </label>
        <textarea
          id="inq-message"
          name="message"
          required
          rows={5}
          placeholder="Share requirements, timeline, and location…"
          className="form-apparatus resize-y"
        />
      </div>

      {(state === "error" || errorMsg) && (
        <p className="text-sm text-red-400" role="alert">
          {errorMsg || "Let's try that again together?"}
        </p>
      )}

      <button type="submit" disabled={state === "submitting"} className="btn-gold w-full">
        {state === "submitting" ? "Sending…" : submitLabel}
      </button>

      <p className="text-xs text-gray-500">
        By submitting, you agree to be contacted by VickYank Limited Company regarding your
        enquiry.
      </p>
    </form>
  );
}
