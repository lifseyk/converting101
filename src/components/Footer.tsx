import Link from "next/link";
import { topics } from "@/lib/topics";

export function Footer() {
  return (
    <footer className="border-t border-mist-200 bg-navy-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
              <span className="text-lg font-black text-accent-500">R2R</span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              A plain-language guide to roll-to-roll converting — the processes, equipment,
              and terminology behind the industry.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-white/40 uppercase">
              The 101
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
              {topics.map((topic) => (
                <li key={topic.slug}>
                  <Link href={`/101/${topic.slug}`} className="text-white/70 hover:text-white">
                    {topic.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-white/40 uppercase">
              Site
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              <li>
                <Link href="/" className="text-white/70 hover:text-white">
                  What Is Converting?
                </Link>
              </li>
              <li>
                <Link href="/101" className="text-white/70 hover:text-white">
                  Technologies Overview
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-12 text-xs text-white/40">
          Converting 101 — an educational resource on roll-to-roll converting.
        </p>
      </div>
    </footer>
  );
}
