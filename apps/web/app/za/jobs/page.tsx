import type { Metadata } from "next";
import VerticalLanding from "@/components/VerticalLanding";

export const metadata: Metadata = {
  title: "Jobs South Africa",
  description:
    "Discover job opportunities from employers and recruiters across South Africa.",
};

export default function JobsPage() {
  return (
    <VerticalLanding
      title="Jobs"
      description="Discover job opportunities from employers, recruiters and approved sources."
    />
  );
}
