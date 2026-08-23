import Link from "next/link";
import { regions } from "@/data/site";

export default function RegionSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="font-semibold text-yatify-brand">Explore by region</p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Discover what is near you.
          </h2>

          <p className="mt-4 leading-7 text-yatify-muted">
            Browse South Africa by province as YATIFY builds its location-first
            discovery network.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
          {regions.map((region) => (
            <Link
              key={region.slug}
              href={`/za/places/${region.slug}/`}
              className="link-plain rounded-2xl border border-gray-200 px-5 py-5 font-semibold transition hover:border-yatify-brand hover:text-yatify-brand"
            >
              {region.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
