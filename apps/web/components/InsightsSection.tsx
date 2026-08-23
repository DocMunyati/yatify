export default function InsightsSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="font-semibold text-yatify-brand">
            YATIFY market intelligence
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Discovery should help you understand the market too.
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-yatify-muted">
            As real inventory and historical observations grow, YATIFY will be
            able to surface useful signals such as price movement, supply,
            demand and availability.
          </p>
        </div>

        <div className="rounded-[2rem] bg-yatify-soft p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-yatify-brand">
            Data principles
          </p>

          <ul className="mt-6 space-y-4 font-medium">
            <li>✓ Transparent source provenance</li>
            <li>✓ Historical observations preserved</li>
            <li>✓ Freshness and source-health signals</li>
            <li>✓ No fabricated listing or market counts</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
