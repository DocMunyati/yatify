import { createSeoMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = createSeoMetadata({
  title: "Privacy",
  description: "YATIFY privacy information.",
  path: "/legal/privacy/",
  index: true,
  follow: true,
});

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />

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
