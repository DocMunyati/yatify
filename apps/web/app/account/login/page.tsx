import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Log in",
  description: "YATIFY account access.",
};

export default function LoginPage() {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-xl px-6 py-24">
        <p className="font-semibold text-yatify-brand">
          My YATIFY
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight">
          Log in
        </h1>

        <div className="mt-8 rounded-3xl border border-gray-200 bg-yatify-soft p-8">
          <h2 className="text-xl font-bold">
            Account access is being prepared.
          </h2>

          <p className="mt-3 leading-7 text-yatify-muted">
            Authentication will be connected when the YATIFY account system is
            ready. This page exists now so public navigation never points to a
            fake link.
          </p>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
