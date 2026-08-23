import type { Metadata } from "next";
import Link from "next/link";
import SouthAfricaFlag from "@/components/SouthAfricaFlag";

export const metadata: Metadata = {
  title: "Discover Africa",
  description:
    "Choose a YATIFY country marketplace and discover useful opportunities across Africa.",
};

export default function AfricaGateway() {
  return (
    <main className="min-h-screen bg-yatify-dark text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-16">
        <p className="text-2xl font-extrabold text-green-300">
          YATIFY
        </p>

        <h1 className="mt-8 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Discover Africa.
          <br />
          One place at a time.
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
          Choose the country you want to explore. YATIFY activates countries
          as reliable inventory, suppliers and local discovery systems become
          ready.
        </p>

        <div className="mt-12 max-w-xl">
          <Link
            href="/za/"
            className="link-plain flex items-center justify-between rounded-3xl bg-white p-6 text-yatify-dark transition hover:-translate-y-1"
          >
            <span className="flex items-center gap-4">
              <SouthAfricaFlag />

              <span>
                <strong className="block text-lg">
                  South Africa
                </strong>

                <span className="text-sm text-yatify-muted">
                  Explore YATIFY South Africa
                </span>
              </span>
            </span>

            <span className="text-2xl" aria-hidden="true">
              →
            </span>
          </Link>
        </div>

        <p className="mt-8 text-sm text-white/50">
          Additional African country marketplaces will appear as they become
          ready for reliable public discovery.
        </p>
      </div>
    </main>
  );
}
