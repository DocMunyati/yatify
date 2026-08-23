import type { Metadata } from "next";
import VerticalLanding from "@/components/VerticalLanding";

export const metadata: Metadata = {
  title: "Businesses South Africa",
  description:
    "Discover businesses and useful providers across South Africa with YATIFY.",
};

export default function BusinessesPage() {
  return (
    <VerticalLanding
      title="Businesses"
      description="Discover useful businesses and providers operating near you."
    />
  );
}
