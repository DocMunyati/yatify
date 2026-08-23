import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Terms",
  description: "YATIFY terms of use.",
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />

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
