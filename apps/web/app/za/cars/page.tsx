import { createSeoMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import VerticalLanding from "@/components/VerticalLanding";

export const metadata = createSeoMetadata({
  title: "Cars South Africa",
  description: "Discover new and used vehicles from dealers and vehicle providers across South Africa.",
  path: "/za/cars/",
  index: true,
  follow: true,
});

export default function CarsPage() {
  return (
    <VerticalLanding
      title="Cars"
      description="Discover new and used vehicles from dealers and trusted vehicle providers."
    />
  );
}
