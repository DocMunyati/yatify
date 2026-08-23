import { createSeoMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = createSeoMetadata({
  title: "About",
  description: "Learn about YATIFY and its African search and discovery platform.",
  path: "/about/",
  index: true,
  follow: true,
});

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-4xl px-6 py-24">
        <p className="font-semibold text-yatify-brand">
          About YATIFY
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight">
          Better discovery across Africa.
        </h1>

        <p className="mt-7 text-lg leading-8 text-yatify-muted">
          YATIFY is being built as an African search, discovery and marketplace
          platform connecting consumers with property, cars, jobs, services
          and businesses.
        </p>
      </main>

      <SiteFooter />
    </>
  );
}
