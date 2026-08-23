import Link from "next/link";
import { categories } from "@/data/site";

export default function CategorySection() {
  return (
    <section className="bg-yatify-soft py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="font-semibold text-yatify-brand">Browse YATIFY</p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Everything in one place.
          </h2>

          <p className="mt-4 leading-7 text-yatify-muted">
            Start with the category you need and narrow your search by location.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="link-plain rounded-3xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">{category.name}</h3>

              <p className="mt-3 text-sm leading-6 text-yatify-muted">
                {category.description}
              </p>

              <p className="mt-6 font-semibold text-yatify-brand">
                Explore →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
