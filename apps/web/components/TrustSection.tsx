const benefits = [
  {
    title: "Everything in one place",
    text: "Explore property, cars, jobs, services and businesses without jumping between different platforms.",
  },
  {
    title: "Built around where you are",
    text: "Start with your country, province, city or area and discover what matters near you.",
  },
  {
    title: "Made for Africa",
    text: "One YATIFY platform designed to grow across African markets while keeping each country experience local.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-yatify-dark py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="font-semibold text-green-300">
            Why YATIFY
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Find more. Search less.
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-white/70">
            YATIFY brings useful opportunities together so you can spend less
            time searching and more time finding what you need.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-7"
            >
              <h3 className="text-xl font-bold">
                {benefit.title}
              </h3>

              <p className="mt-3 leading-7 text-white/70">
                {benefit.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
