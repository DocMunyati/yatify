const trustItems = [
  {
    title: "Freshness first",
    text: "YATIFY is being designed to monitor whether source listings remain available.",
  },
  {
    title: "Less duplication",
    text: "Matching systems will help identify the same listing appearing across multiple sources.",
  },
  {
    title: "Location first",
    text: "Discovery is organised around countries, provinces, cities, towns and local areas.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-yatify-dark py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="font-semibold text-green-300">Why YATIFY</p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Built for useful discovery, not noise.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {trustItems.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-7"
            >
              <h3 className="text-xl font-bold">{item.title}</h3>

              <p className="mt-3 leading-7 text-white/70">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
