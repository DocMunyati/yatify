import Link from "next/link";

export default function SupplierCTA() {
  return (
    <section className="bg-yatify-soft py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[2rem] bg-yatify-action px-7 py-12 text-white md:px-12">
          <div className="max-w-3xl">
            <p className="font-semibold text-green-100">
              For businesses
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Bring your inventory and services closer to customers.
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-white/80">
              YATIFY is being built for dealers, estate agencies, employers,
              recruiters, service providers and businesses.
            </p>

            <Link
              href="/business/"
              className="link-plain mt-8 inline-block rounded-full bg-white px-6 py-3 font-bold text-yatify-action"
            >
              List with Yatify
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
