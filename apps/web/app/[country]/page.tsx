import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CountryFlag from "@/components/CountryFlag";
import { countries } from "@/data/site";

type PageProps = {
  params: Promise<{
    country: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return countries
    .filter((country) => country.status === "preparing")
    .map((country) => ({
      country: country.code,
    }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { country } = await params;

  const match = countries.find(
    (item) =>
      item.code === country &&
      item.status === "preparing"
  );

  if (!match) {
    return {
      title: "Country not found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `YATIFY ${match.name} — Coming Soon`,

    description:
      `YATIFY is expanding to ${match.name}. See where YATIFY is available now and where we are going next.`,

    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function PreparingCountryPage({
  params,
}: PageProps) {
  const { country } = await params;

  const match = countries.find(
    (item) =>
      item.code === country &&
      item.status === "preparing"
  );

  if (!match) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-yatify-dark text-white">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 py-16">
        <Link
          href="/"
          className="link-plain text-sm font-semibold text-white/60 transition hover:text-white"
        >
          ← All YATIFY countries
        </Link>

        <div className="mt-10 flex items-center gap-4">
          <CountryFlag
            code={match.code}
            size="lg"
          />

          <p className="text-2xl font-extrabold text-green-300">
            YATIFY {match.name}
          </p>
        </div>

        <div className="mt-6">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/60">
            Coming soon
          </span>
        </div>

        <h1 className="mt-7 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
          YATIFY is coming to {match.name}.
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
          We&apos;re working to bring YATIFY&apos;s property, cars, jobs,
          services and business discovery experience to {match.name}.
        </p>

        <p className="mt-4 max-w-2xl leading-7 text-white/60">
          In the meantime, explore YATIFY South Africa or return to our
          Africa page to see where YATIFY is expanding next.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="link-plain rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-white/40"
          >
            View all countries
          </Link>

          <Link
            href="/za/"
            className="link-plain rounded-full bg-white px-6 py-3 font-semibold text-yatify-dark transition hover:-translate-y-0.5"
          >
            Explore South Africa →
          </Link>
        </div>
      </div>
    </main>
  );
}
