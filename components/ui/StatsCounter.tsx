type StatItem = {
  value: number;
  suffix?: string;
  label: string;
};

type StatsCounterProps = {
  stats: readonly StatItem[];
};

/**
 * Trust-indicator metrics band — static values (no scroll animation).
 */
export default function StatsCounter({ stats }: StatsCounterProps) {
  return (
    <section
      className="border-b border-gold/20 bg-charcoal"
      aria-label="Company performance indicators"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center px-6 py-10 text-center"
          >
            <span className="font-heading text-4xl font-bold tabular-nums text-gold sm:text-5xl">
              {stat.value}
              {stat.suffix ?? ""}
            </span>
            <span className="mt-2 text-sm uppercase tracking-widest text-gray-400">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
