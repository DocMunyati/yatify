import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { regions } from "@/data/site";

export const metadata: Metadata = {
  title: "Places in South Africa",
  description:
    "Explore South Africa by province and discover property, cars, jobs, services and businesses with YATIFY.",
};

export default function PlacesPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="font-semibold text-yatify-brand">
              YATIFY Places
            </p>

            <h1 className="mt-4 max-w-3xl text-5xl font-bold tracking-tight md:text-7xl">
              Explore South Africa.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-yatify-muted">
              Start with a province and explore YATIFY&apos;s location-first
              discovery network.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {regions.map((region) => (
                <Link
                  key={region.slug}
                  href={`/za/places/${region.slug}/`}
                  className="link-plain rounded-3xl border border-gray-200 bg-white p-7 transition hover:-translate-y-1 hover:border-yatify-brand hover:shadow-lg"
                >
                  <h2 className="text-xl font-bold">
                    {region.name}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-yatify-muted">
                    Explore property, cars, jobs, services and businesses in{" "}
                    {region.name}.
                  </p>

                  <p className="mt-6 font-semibold text-yatify-brand">
                    Explore {region.name} →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
