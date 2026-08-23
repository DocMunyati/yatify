import { createSeoMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = createSeoMetadata({
  title: "Crawler Information",
  description: "Information about YATIFY automated retrieval and website-owner controls.",
  path: "/bot/",
  index: true,
  follow: true,
});

export default function BotPage() {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-4xl px-6 py-24">
        <p className="font-semibold text-yatify-brand">
          Website owners
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight">
          YATIFY crawler information
        </h1>

        <p className="mt-7 text-lg leading-8 text-yatify-muted">
          This page establishes the public information location for YATIFY
          automated retrieval systems before crawler operations are introduced.
        </p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-2xl font-bold">
              Identification
            </h2>

            <p className="mt-3 leading-7 text-yatify-muted">
              When YATIFY deploys automated retrieval systems, they should use
              an identifiable user agent and reference this page where
              appropriate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              Website-owner controls
            </h2>

            <p className="mt-3 leading-7 text-yatify-muted">
              YATIFY intends to respect legitimate technical restrictions,
              permissions and owner requests. Accessibility of public content
              does not automatically mean permission to republish it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              Contact
            </h2>

            <p className="mt-3 leading-7 text-yatify-muted">
              Website owners will be able to contact YATIFY regarding source
              access, correction or opt-out requests.
            </p>

            <Link
              href="/contact/"
              className="mt-4 inline-block font-semibold text-yatify-brand"
            >
              Contact YATIFY
            </Link>
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
