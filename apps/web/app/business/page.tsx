import { createSeoMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = createSeoMetadata({
  title: "YATIFY for Business",
  description: "Learn about YATIFY supplier, business and inventory integration opportunities.",
  path: "/business/",
  index: true,
  follow: true,
});

export default function BusinessPage() {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-6 py-24">
        <p className="font-semibold text-yatify-brand">
          YATIFY for Business
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
          Reach customers through better discovery.
        </h1>

        <p className="mt-7 max-w-3xl text-lg leading-8 text-yatify-muted">
          The YATIFY Business Portal is being designed for dealers, estate
          agencies, employers, recruiters, service providers and other
          businesses.
        </p>

        <div className="mt-10 rounded-3xl bg-yatify-soft p-8">
          <h2 className="text-2xl font-bold">
            Business onboarding is being prepared.
          </h2>

          <p className="mt-3 leading-7 text-yatify-muted">
            Supplier feeds, inventory connections, verification, lead
            attribution and business analytics will be connected here as the
            platform foundation is completed.
          </p>
        </div>

        <Link
          href="/contact/"
          className="mt-8 inline-block font-semibold text-yatify-brand"
        >
          Contact YATIFY
        </Link>
      </main>

      <SiteFooter />
    </>
  );
}
