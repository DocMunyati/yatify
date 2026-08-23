import type { Metadata } from "next";
import VerticalLanding from "@/components/VerticalLanding";

export const metadata: Metadata = {
  title: "Cars South Africa",
  description:
    "Discover new and used vehicles from dealers and vehicle providers across South Africa.",
};

export default function CarsPage() {
  return (
    <VerticalLanding
      title="Cars"
      description="Discover new and used vehicles from dealers and trusted vehicle providers."
    />
  );
}
