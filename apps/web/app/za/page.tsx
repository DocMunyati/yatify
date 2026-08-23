import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import RegionSection from "@/components/RegionSection";
import TrustSection from "@/components/TrustSection";
import InsightsSection from "@/components/InsightsSection";
import SupplierCTA from "@/components/SupplierCTA";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "South Africa",
  description:
    "Discover property, cars, jobs, services and businesses across South Africa with YATIFY.",
};

export default function SouthAfricaHome() {
  return (
    <>
      <SiteHeader />

      <main>
        <Hero />
        <CategorySection />
        <RegionSection />
        <TrustSection />
        <InsightsSection />
        <SupplierCTA />
      </main>

      <SiteFooter />
    </>
  );
}
