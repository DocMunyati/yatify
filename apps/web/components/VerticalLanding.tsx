import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

type VerticalLandingProps = {
  title: string;
  description: string;
};

export default function VerticalLanding({
  title,
  description,
}: VerticalLandingProps) {
  return (
    <>
      <SiteHeader />

      <main>
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
