import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { regions } from "@/data/site";

type PageProps = {
  params: Promise<{
    province: string;
  }>;
};

export async function generateStaticParams() {
  return regions.map((region) => ({
    province: region.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { province } = await params;

  const region = regions.find((item) => item.slug === province);

  if (!region) {
    return {
      title: "Location not found",
    };
  }

  return {
    title: `${region.name} | South Africa`,
    description: `Discover property, cars, jobs, services and businesses in ${region.name} with YATIFY.`,
  };
}

export default async function ProvincePage({
  params,
}: PageProps) {
  const { province } = await params;

  const region = regions.find((item) => item.slug === province);

  if (!region) {
    notFound();
  }

  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-6 py-24">
        <p className="font-semibold text-yatify-brand">
          Explore South Africa
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
          {region.name}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-yatify-muted">
          This location page establishes YATIFY&apos;s province-level discovery
          architecture. Live local inventory will appear when verified data
          sources are integrated.
        </p>
      </main>

      <SiteFooter />
    </>
  );
}
