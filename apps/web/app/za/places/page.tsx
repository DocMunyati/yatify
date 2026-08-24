import { createSeoMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { regions } from "@/data/site";

export const metadata = createSeoMetadata({
  title: "Places in South Africa",
  description: "Explore South Africa by province and discover property, cars, jobs, services and businesses with YATIFY.",
  path: "/za/places/",
  index: true,
  follow: true,
});


const placesBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://yatify.africa/za/places/#breadcrumb",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "YATIFY",
      item: "https://yatify.africa/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "South Africa",
      item: "https://yatify.africa/za/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Places",
      item: "https://yatify.africa/za/places/",
    },
  ],
};

const placesCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://yatify.africa/za/places/#collection",
  url: "https://yatify.africa/za/places/",
  name: "Places in South Africa",
  description:
    "Explore South Africa by province and discover property, cars, jobs, services and businesses with YATIFY.",
  isPartOf: {
    "@id": "https://yatify.africa/#website",
  },
  about: {
    "@id": "https://yatify.africa/za/#country",
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: regions.map((region, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: region.name,
      url: `https://yatify.africa/za/places/${region.slug}/`,
    })),
  },
};
export default function PlacesPage() {
  return (
    <>
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(placesBreadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(placesCollectionSchema),
        }}
      />

      <main>
        <div className="mx-auto max-w-7xl px-6 pt-8">
          <nav
            aria-label="Breadcrumb"
            className="text-sm text-yatify-muted"
          >
            <Link
              href="/za/"
              className="hover:text-yatify-brand"
            >
              South Africa
            </Link>

            <span aria-hidden="true" className="mx-2">
              /
            </span>

            <span aria-current="page">Places</span>
          </nav>
        </div>
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
                      Explore {region.name} &rarr;
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


