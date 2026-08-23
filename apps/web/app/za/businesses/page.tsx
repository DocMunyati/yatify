import { createSeoMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import VerticalLanding from "@/components/VerticalLanding";

export const metadata = createSeoMetadata({
  title: "Businesses South Africa",
  description: "Discover businesses and useful providers across South Africa with YATIFY.",
  path: "/za/businesses/",
  index: true,
  follow: true,
});

export default function BusinessesPage() {
  return (
    <VerticalLanding
      title="Businesses"
      description="Discover useful businesses and providers operating near you."
    />
  );
}
