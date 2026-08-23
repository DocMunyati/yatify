"use client";

import { FormEvent, useState } from "react";
import { categories } from "@/data/site";

export default function SearchPanel() {
  const [activeCategory, setActiveCategory] = useState("Property");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage(
      "Live YATIFY search will connect here when the search service is integrated."
    );
  }

  return (
    <div className="mt-10 max-w-4xl">
      <div
        className="no-scrollbar flex gap-2 overflow-x-auto pb-3"
        role="group"
        aria-label="Choose search category"
      >
        {categories.map((category) => {
          const active = activeCategory === category.name;

          return (
            <button
              key={category.name}
              type="button"
              aria-pressed={active}
              onClick={() => setActiveCategory(category.name)}
              className={
                active
                  ? "shrink-0 rounded-full bg-yatify-action px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-yatify-action-hover"
                  : "shrink-0 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-yatify-dark transition hover:border-gray-300"
              }
            >
              {category.name}
            </button>
          );
        })}
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-2 flex flex-col gap-3 rounded-3xl border border-gray-200 bg-white p-3 shadow-xl md:flex-row"
      >
        <label className="sr-only" htmlFor="yatify-query">
          What are you looking for?
        </label>

        <input
          id="yatify-query"
          name="q"
          type="search"
          className="min-w-0 flex-1 rounded-2xl px-5 py-4 outline-none"
          placeholder={`Search ${activeCategory.toLowerCase()}`}
        />

        <label className="sr-only" htmlFor="yatify-location">
          Location
        </label>

        <input
          id="yatify-location"
          name="location"
          type="text"
          className="min-w-0 flex-1 rounded-2xl px-5 py-4 outline-none md:border-l md:border-gray-200"
          placeholder="City, town or suburb"
        />

        <button
          type="submit"
          className="rounded-2xl bg-yatify-action px-9 py-4 font-semibold text-white transition hover:bg-yatify-action-hover"
        >
          Search
        </button>
      </form>

      {message && (
        <p
          className="mt-3 text-sm text-yatify-muted"
          role="status"
          aria-live="polite"
        >
          {message}
        </p>
      )}

      <div className="mt-5 flex flex-wrap gap-2 text-sm text-yatify-muted">
        <span>Popular:</span>
        <span className="font-medium text-yatify-dark">Houses to rent</span>
        <span>•</span>
        <span className="font-medium text-yatify-dark">Used cars</span>
        <span>•</span>
        <span className="font-medium text-yatify-dark">Jobs near me</span>
        <span>•</span>
        <span className="font-medium text-yatify-dark">Plumbers</span>
      </div>
    </div>
  );
}
