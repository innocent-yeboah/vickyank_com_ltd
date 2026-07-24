type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  /** Use light text on dark section backgrounds. */
  dark?: boolean;
  align?: "left" | "center";
};

/**
 * Consistent corporate section header: gold eyebrow label,
 * bold heading, optional supporting paragraph.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold">
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            dark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
