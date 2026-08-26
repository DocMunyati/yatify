import { createSeoMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = createSeoMetadata({
  title: "Privacy",
  description: "YATIFY privacy information.",
  path: "/legal/privacy/",
  index: false,
  follow: true,
});


const privacyPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://yatify.africa/legal/privacy/#webpage",
  url: "https://yatify.africa/legal/privacy/",
  name: "YATIFY Privacy",
  description: "YATIFY privacy information.",
  isPartOf: {
    "@id": "https://yatify.africa/#website",
  },
  about: {
    "@id": "https://yatify.africa/#organization",
  },
};
export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(privacyPageSchema),
        }}
      />

      <main className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-5xl font-bold tracking-tight">
          Privacy
        </h1>

        <p className="mt-7 leading-8 text-yatify-muted">
          YATIFY&apos;s final privacy notice will be published before
          production launch and will reflect applicable data-protection
          requirements and platform functionality.
        </p>
      </main>

      <SiteFooter />
    </>
  );
}
