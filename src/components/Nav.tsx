"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navMenus, signInLink, type NavLink } from "@/lib/nav";

function LinkItem({ item, className }: { item: NavLink; className: string }) {
  if (item.internal) {
    return (
      <Link href={item.href} className={className}>
        {item.label}
        {item.badge && (
          <span className="ml-2 rounded-full bg-accent-500 px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-navy-950 uppercase">
            {item.badge}
          </span>
        )}
      </Link>
    );
  }
  return (
    <a href={item.href} className={className}>
      {item.label}
    </a>
  );
}

export function Nav() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenMenu(null);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 border-b border-mist-200 bg-white/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a
          href="https://www.rolltoroll.org"
          className="flex items-center gap-3"
          aria-label="Association for Roll-to-Roll Converters — rolltoroll.org"
        >
          <Image
            src="/brand/arc-logo.png"
            alt="Association for Roll-to-Roll Converters"
            width={1226}
            height={444}
            priority
            className="h-9 w-auto"
          />
          <span className="hidden h-8 w-px bg-mist-200 sm:block" />
          <span className="hidden text-sm font-bold leading-tight tracking-tight text-navy-900 sm:block">
            Converting
            <br />
            101
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navMenus.map((menu) => (
            <div key={menu.label} className="relative">
              <button
                type="button"
                onClick={() => setOpenMenu(openMenu === menu.label ? null : menu.label)}
                aria-expanded={openMenu === menu.label}
                className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-ink-700 hover:bg-mist-50 hover:text-navy-900"
              >
                {menu.label}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  className={`transition-transform ${openMenu === menu.label ? "rotate-180" : ""}`}
                >
                  <path
                    d="M1.5 3.5L5 7L8.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {openMenu === menu.label && (
                <div
                  className="absolute top-full left-0 mt-2 flex gap-10 rounded-2xl border border-mist-200 bg-white p-6 shadow-xl"
                  style={{ minWidth: menu.columns.length > 1 ? 560 : 240 }}
                >
                  {menu.columns.map((column) => (
                    <div key={column.heading} className="flex min-w-[160px] flex-col gap-2.5">
                      <p className="text-xs font-semibold tracking-[0.1em] text-ink-500 uppercase">
                        {column.heading}
                      </p>
                      {column.items.map((item) => (
                        <LinkItem
                          key={item.label}
                          item={item}
                          className="text-sm text-ink-700 hover:text-navy-900"
                        />
                      ))}
                      {column.cta && (
                        <LinkItem
                          item={column.cta}
                          className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-navy-900 hover:text-navy-700"
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          <a
            href={signInLink.href}
            className="rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-navy-950 hover:bg-accent-400"
          >
            {signInLink.label}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-mist-200 lg:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            {mobileOpen ? (
              <path
                d="M2 2L16 16M16 2L2 16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M1 4H17M1 9H17M1 14H17"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-60px)] overflow-y-auto border-t border-mist-200 bg-white px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navMenus.map((menu) => (
              <div key={menu.label} className="border-b border-mist-100 py-1">
                <button
                  type="button"
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === menu.label ? null : menu.label)
                  }
                  className="flex w-full items-center justify-between py-2.5 text-left text-sm font-semibold text-navy-900"
                >
                  {menu.label}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    className={`transition-transform ${mobileExpanded === menu.label ? "rotate-180" : ""}`}
                  >
                    <path
                      d="M1.5 3.5L5 7L8.5 3.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {mobileExpanded === menu.label && (
                  <div className="flex flex-col gap-4 pb-4 pl-1">
                    {menu.columns.map((column) => (
                      <div key={column.heading} className="flex flex-col gap-2">
                        <p className="text-xs font-semibold tracking-[0.1em] text-ink-500 uppercase">
                          {column.heading}
                        </p>
                        {column.items.map((item) => (
                          <LinkItem
                            key={item.label}
                            item={item}
                            className="text-sm text-ink-700"
                          />
                        ))}
                        {column.cta && (
                          <LinkItem
                            item={column.cta}
                            className="text-sm font-semibold text-navy-900"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href={signInLink.href}
              className="mt-4 rounded-full bg-accent-500 px-5 py-2.5 text-center text-sm font-semibold text-navy-950"
            >
              {signInLink.label}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
