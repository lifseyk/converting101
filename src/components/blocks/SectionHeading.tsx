import { Kicker } from "@/components/Kicker";
import { slugify } from "@/lib/slug";

export function SectionHeading({
  kicker,
  heading,
  intro,
}: {
  kicker?: string;
  heading?: string;
  intro?: string;
}) {
  if (!kicker && !heading && !intro) return null;
  return (
    <div className="mb-8 max-w-3xl">
      {kicker && <Kicker>{kicker}</Kicker>}
      {heading && (
        <h2
          id={slugify(heading)}
          className="scroll-mt-24 text-2xl font-bold tracking-tight text-navy-900 md:text-3xl"
        >
          {heading}
        </h2>
      )}
      {intro && <p className="mt-4 leading-relaxed text-ink-700">{intro}</p>}
    </div>
  );
}
