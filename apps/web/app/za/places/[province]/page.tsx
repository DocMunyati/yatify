import { createSeoMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { regions } from "@/data/site";

type PageProps = {
  params: Promise<{
    province: string;
  }>;
};

export async function generateStaticParams() {
  return regions.map((region) => ({
    province: region.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { province } = await params;

  const region = regions.find(
    (item) => item.slug === province
  );

  if (!region) {
    return {
      title: "Place not found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return createSeoMetadata({
    title: `${region.name} | Places South Africa`,
    description:
      `Explore property, cars, jobs, services and businesses in ${region.name}, South Africa with YATIFY.`,
    path: `/za/places/${region.slug}/`,
    index: true,
    follow: true,
  });
}

export default async function ProvincePage({
  params,
}: PageProps) {
  const { province } = await params;

  const region = regions.find((item) => item.slug === province);

  if (!region) {
    notFound();
  }

  const provinceUrl =
    `https://yatify.africa/za/places/${region.slug}/`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${provinceUrl}#breadcrumb`,
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
      {
        "@type": "ListItem",
        position: 4,
        name: region.name,
        item: provinceUrl,
      },
    ],
  };

  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "AdministrativeArea",
    "@id": `${provinceUrl}#place`,
    name: region.name,
    url: provinceUrl,
    containedInPlace: {
      "@type": "Country",
      name: "South Africa",
    },
    isPartOf: {
      "@id": "https://yatify.africa/#website",
    },
  };

  return (
    <>
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(placeSchema),
        }}
      />

      <main className="mx-auto max-w-7xl px-6 py-24">
        <nav
          aria-label="Breadcrumb"
          className="mb-8 text-sm text-yatify-muted"
        >
          <Link href="/za/" className="hover:text-yatify-brand">
            South Africa
          </Link>

          <span aria-hidden="true" className="mx-2">
            /
          </span>

          <Link
            href="/za/places/"
            className="hover:text-yatify-brand"
          >
            Places
          </Link>

          <span aria-hidden="true" className="mx-2">
            /
          </span>

          <span aria-current="page">{region.name}</span>
        </nav>

        <p className="font-semibold text-yatify-brand">
          Explore South Africa
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
          {region.name}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-yatify-muted">
          This location page establishes YATIFY&apos;s province-level discovery
          architecture. Live local inventory will appear when verified data
          sources are integrated.
        </p>
      </main>

      <SiteFooter />
    </>
  );
}
