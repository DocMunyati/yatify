import type { Metadata } from "next";
import VerticalLanding from "@/components/VerticalLanding";

export const metadata: Metadata = {
  title: "Property South Africa",
  description:
    "Discover homes, rentals and property opportunities across South Africa with YATIFY.",
};

export default function PropertyPage() {
  return (
    <VerticalLanding
      title="Property"
      description="Discover homes, rentals and property opportunities across South Africa."
    />
  );
}
