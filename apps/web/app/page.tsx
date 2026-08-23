import type { Metadata } from "next";
import Link from "next/link";
import CountryFlag from "@/components/CountryFlag";
import { countries } from "@/data/site";

export const metadata: Metadata = {
  title: "Discover Africa",
  description:
    "Explore YATIFY across Africa. Discover property, cars, jobs, services and businesses as YATIFY expands into more countries.",
};

export default function AfricaGateway() {
  const liveCountries = countries.filter(
    (country) => country.status === "live"
  );

  const preparingCountries = countries.filter(
    (country) => country.status === "preparing"
  );

  return (
    <main className="min-h-screen bg-yatify-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <p className="text-2xl font-extrabold text-green-300">
          YATIFY
        </p>

        <h1 className="mt-8 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Discover Africa.
          <br />
          One place at a time.
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
          Find what you need across Africa. Explore available YATIFY
          marketplaces and see where we are expanding next.
        </p>

        <section
          className="mt-14"
          aria-labelledby="available-markets"
        >
          <div className="flex items-center gap-3">
            <h2
              id="available-markets"
              className="text-sm font-semibold uppercase tracking-[0.14em] text-green-300"
            >
              Available
            </h2>

            <span className="rounded-full bg-green-300/10 px-3 py-1 text-xs text-green-200">
              Explore now
            </span>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {liveCountries.map((country) => (
              <Link
                key={country.code}
                href={`/${country.code}/`}
                className="link-plain group flex items-center justify-between rounded-3xl bg-white p-6 text-yatify-dark transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="flex items-center gap-5">
                  <CountryFlag
                    code={country.code}
                    size="lg"
                  />

                  <span>
                    <strong className="block text-xl">
                      {country.name}
                    </strong>

                    <span className="mt-1 block text-sm text-yatify-muted">
                      Explore YATIFY {country.name}
                    </span>
                  </span>
                </span>

                <span
                  className="text-2xl transition group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section
          className="mt-16"
          aria-labelledby="coming-markets"
        >
          <h2
            id="coming-markets"
            className="text-sm font-semibold uppercase tracking-[0.14em] text-white/50"
          >
            Coming next
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60">
            YATIFY is expanding into more African countries.
            Select a country to learn more.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {preparingCountries.map((country) => (
              <Link
                key={country.code}
                href={`/${country.code}/`}
                className="link-plain flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-5 transition hover:border-white/30 hover:bg-white/10"
              >
                <span className="flex items-center gap-4">
                  <CountryFlag
                    code={country.code}
                    size="md"
                  />

                  <span className="font-semibold">
                    {country.name}
                  </span>
                </span>

                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/60">
                  Coming soon
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
