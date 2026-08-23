"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { categories } from "@/data/site";
import SouthAfricaFlag from "@/components/SouthAfricaFlag";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="relative z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <div className="flex items-center gap-8">
          <Link
            href="/za/"
            className="link-plain text-2xl font-extrabold tracking-tight text-yatify-brand"
          >
            YATIFY
          </Link>

          <nav
            className="hidden items-center gap-6 text-sm font-semibold lg:flex"
            aria-label="Primary navigation"
          >
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="link-plain transition hover:text-yatify-brand"
              >
                {category.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2 text-sm sm:gap-3">
          <Link
            href="/"
            className="link-plain flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2 font-medium sm:px-4"
            aria-label="Change country"
          >
            <SouthAfricaFlag />

            <span className="sm:hidden">ZA</span>
            <span className="hidden sm:inline">South Africa</span>
          </Link>

          <Link
            href="/account/login/"
            className="link-plain hidden font-semibold transition hover:text-yatify-brand md:block"
          >
            Log in
          </Link>

          <button
            type="button"
            className="rounded-full border border-gray-200 px-3 py-2 font-medium lg:hidden sm:px-4"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>

          <Link
            href="/business/"
            className="link-plain rounded-full bg-yatify-action px-4 py-2.5 font-semibold text-white transition hover:bg-yatify-action-hover sm:px-5"
          >
            <span className="sm:hidden">List</span>
            <span className="hidden sm:inline">List with Yatify</span>
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-0 right-0 top-full border-b border-gray-200 bg-white shadow-xl lg:hidden"
        >
          <div className="mx-auto max-w-7xl px-5 py-6">
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="link-plain border-b border-gray-100 py-4 text-lg font-semibold transition hover:text-yatify-brand"
                  onClick={() => setMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </nav>

            <div className="mt-6 grid gap-3">
              <Link
                href="/"
                className="link-plain flex items-center justify-between rounded-2xl border border-gray-200 px-4 py-4 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                <span className="flex items-center gap-3">
                  <SouthAfricaFlag />
                  South Africa
                </span>

                <span aria-hidden="true">›</span>
              </Link>

              <Link
                href="/account/login/"
                className="link-plain rounded-2xl border border-gray-200 px-4 py-4 text-center font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                Log in
              </Link>

              <Link
                href="/business/"
                className="link-plain rounded-2xl bg-yatify-action px-4 py-4 text-center font-semibold text-white"
                onClick={() => setMenuOpen(false)}
              >
                List with Yatify
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
