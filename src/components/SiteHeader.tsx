"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/config/navigation";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-neutral-200/70 bg-white/90 backdrop-blur supports-[backdrop-filter]:backdrop-blur-xl">
      <div className="page-shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-4 transition hover:opacity-80">
          <div className="relative h-11 w-11">
            <Image src="/Dark-Theme-Logo.png" alt="Victor Consultancy monogram" fill priority sizes="44px" className="object-contain" />
          </div>
          <div className="relative h-12 w-44">
            <Image src="/Light-Theme-Logo.png" alt="Victor Consultancy wordmark" fill priority sizes="192px" className="object-contain" />
          </div>
        </Link>
        <nav className="hidden items-center gap-8 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-neutral-500 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative pb-2 transition hover:text-neutral-900 after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-center after:scale-x-0 after:bg-neutral-900 after:transition after:duration-200 hover:after:scale-x-100"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-neutral-600 transition hover:text-neutral-900 sm:inline-flex">
            Log In
          </Link>
          <button
            type="button"
            className="hidden items-center gap-2 rounded-full border border-neutral-200 px-3 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-neutral-500 transition hover:border-neutral-900 hover:text-neutral-900 sm:flex"
          >
            <span aria-hidden role="img">🇺🇸</span>
            <span>EN</span>
          </button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900 lg:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span className="relative block h-4 w-4">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-full origin-center bg-current transition ${
                  isMenuOpen ? "translate-y-1.5 rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-full bg-current transition ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-3 block h-0.5 w-full origin-center bg-current transition ${
                  isMenuOpen ? "-translate-y-1.5 -rotate-45" : "translate-y-1.5"
                }`}
              />
            </span>
          </button>
        </div>
      </div>
      {isMenuOpen ? (
        <div className="border-t border-neutral-200/80 bg-white/95 py-4 lg:hidden">
          <div className="page-shell flex flex-col gap-4 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-neutral-600">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-neutral-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/login" className="transition hover:text-neutral-900" onClick={() => setIsMenuOpen(false)}>
              Log In
            </Link>
            <button
              type="button"
              className="flex w-max items-center gap-2 rounded-full border border-neutral-200 px-3 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-neutral-500 transition hover:border-neutral-900 hover:text-neutral-900"
            >
              <span aria-hidden role="img">🇺🇸</span>
              <span>EN</span>
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
