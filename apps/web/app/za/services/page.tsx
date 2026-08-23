import type { Metadata } from "next";
import VerticalLanding from "@/components/VerticalLanding";

export const metadata: Metadata = {
  title: "Services South Africa",
  description:
    "Find professionals and service providers across South Africa with YATIFY.",
};

export default function ServicesPage() {
  return (
    <VerticalLanding
      title="Services"
      description="Find professionals and service providers for the work you need done."
    />
  );
}
