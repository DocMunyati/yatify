import { createSeoMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = createSeoMetadata({
  title: "Terms",
  description: "YATIFY terms of use.",
  path: "/legal/terms/",
  index: false,
  follow: true,
});


const termsPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://yatify.africa/legal/terms/#webpage",
  url: "https://yatify.africa/legal/terms/",
  name: "YATIFY Terms",
  description: "YATIFY terms of use.",
  isPartOf: {
    "@id": "https://yatify.africa/#website",
  },
  about: {
    "@id": "https://yatify.africa/#organization",
  },
};
export default function TermsPage() {
  return (
    <>
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(termsPageSchema),
        }}
      />

      <main className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-5xl font-bold tracking-tight">
          Terms
        </h1>

        <p className="mt-7 leading-8 text-yatify-muted">
          YATIFY&apos;s production terms of use will be published before the
          platform accepts public listings, accounts or commercial activity.
        </p>
      </main>

      <SiteFooter />
    </>
  );
}
