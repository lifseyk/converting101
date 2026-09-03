import Image from "next/image";

export function ImagePlaceholder({
  label,
  className = "",
  src,
  credit,
}: {
  label: string;
  className?: string;
  src?: string;
  credit?: string;
}) {
  if (src) {
    return (
      <figure className="w-full">
        <div
          className={`relative min-h-[220px] w-full overflow-hidden rounded-2xl ${className}`}
        >
          <Image
            src={src}
            alt={label}
            fill
            sizes="(min-width: 1024px) 700px, 100vw"
            className="object-cover"
          />
        </div>
        {credit && (
          <figcaption className="mt-2 text-right text-xs text-ink-500">{credit}</figcaption>
        )}
      </figure>
    );
  }

  return (
    <div
      className={`relative flex min-h-[220px] w-full items-center justify-center overflow-hidden rounded-2xl border border-dashed border-navy-700/25 bg-mist-100 ${className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_46%,rgba(26,35,64,0.06)_46%,rgba(26,35,64,0.06)_54%,transparent_54%)] bg-[length:22px_22px]" />
      <p className="relative max-w-xs px-6 text-center text-xs font-medium tracking-wide text-ink-500 uppercase">
        {label}
      </p>
    </div>
  );
}
