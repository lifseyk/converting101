"use client";

import { useEffect, useState } from "react";

export function TableOfContents({ items }: { items: { id: string; label: string }[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id);

  useEffect(() => {
    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className="rounded-2xl border border-mist-200 p-5" aria-label="On this page">
      <p className="text-xs font-semibold tracking-[0.14em] text-ink-500 uppercase">
        On This Page
      </p>
      <ul className="mt-3 flex flex-col gap-0.5">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block rounded-lg px-3 py-1.5 text-sm transition ${
                activeId === item.id
                  ? "bg-accent-400/25 font-semibold text-navy-900"
                  : "text-ink-700 hover:text-navy-900"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
