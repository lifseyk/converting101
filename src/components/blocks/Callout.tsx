import type { CalloutBlock } from "@/lib/types";

export function Callout({ block }: { block: CalloutBlock }) {
  return (
    <div className="my-4 max-w-3xl rounded-xl border-l-4 border-accent-500 bg-mist-50 px-5 py-4">
      <p className="text-sm leading-relaxed text-ink-700 italic">{block.text}</p>
    </div>
  );
}
