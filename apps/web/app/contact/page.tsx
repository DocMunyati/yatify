import { createSeoMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = createSeoMetadata({
  title: "Contact",
  description: "Contact YATIFY.",
  path: "/contact/",
  index: true,
  follow: true,
});


const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://yatify.africa/contact/#contact",
  url: "https://yatify.africa/contact/",
  name: "Contact YATIFY",
  description: "Contact YATIFY.",
  isPartOf: {
    "@id": "https://yatify.africa/#website",
  },
  about: {
    "@id": "https://yatify.africa/#organization",
  },
};
export default function ContactPage() {
  return (
    <>
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema),
        }}
      />

      <main className="mx-auto max-w-4xl px-6 py-24">
        <p className="font-semibold text-yatify-brand">
          Contact
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight">
          Contact YATIFY
        </h1>

        <p className="mt-7 text-lg leading-8 text-yatify-muted">
          Official public contact channels will be published here as YATIFY
          moves toward public launch.
        </p>
      </main>

      <SiteFooter />
    </>
  );
}
