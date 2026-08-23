import type { Metadata } from "next";

export const SITE_NAME = "YATIFY";
export const SITE_URL = "https://yatify.africa";

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/")
    ? path
    : `/${path}`;

  return new URL(normalizedPath, SITE_URL).toString();
}

type SeoMetadataOptions = {
  title: string;
  description: string;
  path: string;
  index?: boolean;
  follow?: boolean;
};

export function createSeoMetadata({
  title,
  description,
  path,
  index = true,
  follow = true,
}: SeoMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title,
    description,

    alternates: {
      canonical,
    },

    robots: {
      index,
      follow,
    },

    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      url: canonical,
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
