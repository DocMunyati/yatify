import { createSeoMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import VerticalLanding from "@/components/VerticalLanding";

export const metadata = createSeoMetadata({
  title: "Jobs South Africa",
  description: "Discover job opportunities from employers and recruiters across South Africa.",
  path: "/za/jobs/",
  index: true,
  follow: true,
});

export default function JobsPage() {
  return (
    <VerticalLanding
      title="Jobs"
      description="Discover job opportunities from employers, recruiters and approved sources."
    />
  );
}
