import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

type VerticalLandingProps = {
  title: string;
  description: string;
  path: string;
};

export default function VerticalLanding({
  title,
  description,
  path,
}: VerticalLandingProps) {
  const pageUrl = `https://yatify.africa${path}`;

  const verticalBreadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
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
        name: title,
        item: pageUrl,
      },
    ],
  };

  const verticalCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#collection`,
    url: pageUrl,
    name: `${title} South Africa`,
    description,
    isPartOf: {
      "@id": "https://yatify.africa/#website",
    },
    about: {
      "@id": "https://yatify.africa/za/#country",
    },
  };

  return (
    <>
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(verticalBreadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(verticalCollectionSchema),
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

            <span aria-current="page">{title}</span>
          </nav>
        </div>
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="font-semibold text-yatify-brand">
              YATIFY South Africa
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
              {title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-yatify-muted">
              {description}
            </p>

            <div className="mt-10 rounded-3xl border border-gray-200 bg-yatify-soft p-8">
              <h2 className="text-2xl font-bold">
                Live inventory integration
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-yatify-muted">
                This section is ready for YATIFY&apos;s search, supplier feeds,
                deduplication and freshness systems. No invented listings are
                displayed during the foundation build.
              </p>
            </div>

            <Link
              href="/za/"
              className="mt-8 inline-block font-semibold text-yatify-brand"
            >
              ← Back to YATIFY South Africa
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

