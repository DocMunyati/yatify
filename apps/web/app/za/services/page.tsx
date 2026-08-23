import { createSeoMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import VerticalLanding from "@/components/VerticalLanding";

export const metadata = createSeoMetadata({
  title: "Services South Africa",
  description: "Find professionals and service providers across South Africa with YATIFY.",
  path: "/za/services/",
  index: true,
  follow: true,
});

export default function ServicesPage() {
  return (
    <VerticalLanding
      title="Services"
      description="Find professionals and service providers for the work you need done."
    />
  );
}
