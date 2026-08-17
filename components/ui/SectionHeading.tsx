type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Use light text on dark section backgrounds. */
  dark?: boolean;
  align?: "left" | "center";
};

/**
 * Brochure section header: gold kicker, Playfair gold title.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  dark = true,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {eyebrow ? <p className="kicker">{eyebrow}</p> : null}
      <h2 className={`page-title ${eyebrow ? "mt-3" : ""}`}>{title}</h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            dark ? "text-white/80" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
