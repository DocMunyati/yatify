import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { regions } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const coreRoutes = [
    "/",
    "/za/",
    "/za/property/",
    "/za/cars/",
    "/za/jobs/",
    "/za/services/",
    "/za/businesses/",
    "/za/places/",
    "/about/",
    "/contact/",
    "/business/",
    "/bot/",
    "/legal/privacy/",
    "/legal/terms/",
  ];

  const placeRoutes = regions.map(
    (region) => `/za/places/${region.slug}/`
  );

  return [...coreRoutes, ...placeRoutes].map((path) => ({
    url: absoluteUrl(path),
  }));
}
