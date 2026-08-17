"use client";

import { useState, type FormEvent } from "react";
import { CheckIcon } from "@/components/ui/Icons";

const INTERESTS = [
  "Mining Operations",
  "Gold Trading",
  "Excavator Machines",
  "Spare Parts",
  "Luxury Car Rental",
] as const;

const labelClass =
  "mb-1 block text-xs font-medium text-gray-300 sm:mb-2 sm:text-sm";

/**
 * Newsletter signup for VickYank Limited — email plus optional name and interests.
 */
export default function NewsletterForm() {
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const interests = data.getAll("interests").map(String);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          interests,
        }),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(body?.error ?? "Unable to subscribe just now.");
      }

      setState("success");
      form.reset();
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : "Let's try that again together?"
      );
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center border border-gold/30 bg-navy-dark p-6 text-center sm:p-10">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold">
          <CheckIcon className="h-8 w-8" />
        </span>
        <h3 className="mt-6 font-heading text-2xl font-bold uppercase text-white">
          You Are Subscribed
        </h3>
        <p className="mt-3 max-w-sm text-gray-300">
          Thank you. We will send considered updates — no pressure, no clutter.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-5">
      <div>
        <label htmlFor="nl-name" className={labelClass}>
          Name
        </label>
        <input
          id="nl-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          className="form-apparatus"
        />
      </div>
      <div>
        <label htmlFor="nl-email" className={labelClass}>
          Email *
        </label>
        <input
          id="nl-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          className="form-apparatus"
        />
      </div>
      <fieldset>
        <legend className={labelClass}>Interests (optional)</legend>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {INTERESTS.map((interest) => (
            <label
              key={interest}
              className="flex min-h-11 items-center gap-2 text-sm text-white/80"
            >
              <input
                type="checkbox"
                name="interests"
                value={interest}
                className="h-4 w-4 shrink-0 accent-[#D4AF37]"
              />
              {interest}
            </label>
          ))}
        </div>
      </fieldset>

      {(state === "error" || errorMsg) && (
        <p className="text-sm text-red-400" role="alert">
          {errorMsg || "Let's try that again together?"}
        </p>
      )}

      <button type="submit" disabled={state === "submitting"} className="btn-gold w-full">
        {state === "submitting" ? "Subscribing…" : "Subscribe"}
      </button>
      <p className="text-[11px] leading-snug text-gray-500 sm:text-xs">
        We use your email only for the VickYank newsletter. You can ask to be
        removed at any time.
      </p>
    </form>
  );
}
