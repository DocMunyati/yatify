import { createSeoMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import VerticalLanding from "@/components/VerticalLanding";

export const metadata = createSeoMetadata({
  title: "Property South Africa",
  description: "Discover homes, rentals and property opportunities across South Africa with YATIFY.",
  path: "/za/property/",
  index: true,
  follow: true,
});

export default function PropertyPage() {
  return (
    <VerticalLanding
      title="Property"
      description="Discover homes, rentals and property opportunities across South Africa."
    />
  );
}
