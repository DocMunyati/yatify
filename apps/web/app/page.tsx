const categories = [
  "Property",
  "Cars",
  "Jobs",
  "Services",
  "Businesses",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-yatify-dark">
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-8">
            <div className="text-2xl font-bold text-yatify-brand">
              YATIFY
            </div>

            <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
              {categories.map((category) => (
                <a
                  key={category}
                  href="#"
                  className="link-plain transition hover:text-yatify-brand"
                >
                  {category}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <button className="hidden rounded-full border border-gray-200 px-4 py-2 font-medium md:block">
              South Africa
            </button>

            <a href="#" className="link-plain hidden font-medium md:block">
              Log in
            </a>

            <button className="rounded-full bg-yatify-action px-5 py-2.5 font-semibold text-white transition hover:bg-yatify-action-hover">
              List with Yatify
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20 md:pt-28">
        <div className="max-w-4xl">
          <p className="mb-5 font-semibold text-yatify-brand">
            Everything you need. Near you.
          </p>

          <h1 className="text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl">
            Find it.
            <br />
            Near you.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-yatify-muted md:text-xl">
            Discover property, cars, jobs, services and businesses from trusted
            providers.
          </p>

          <div className="mt-10 max-w-4xl">
            <div className="flex gap-2 overflow-x-auto pb-3">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={
                    index === 0
                      ? "rounded-full bg-yatify-action px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-yatify-action-hover"
                      : "rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold text-yatify-dark"
                  }
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="mt-2 flex flex-col gap-3 rounded-3xl border border-gray-200 bg-white p-3 shadow-xl md:flex-row">
              <input
                className="min-w-0 flex-1 rounded-2xl px-5 py-4 outline-none"
                type="text"
                placeholder="What are you looking for?"
                aria-label="What are you looking for?"
              />

              <input
                className="min-w-0 flex-1 rounded-2xl px-5 py-4 outline-none md:border-l md:border-gray-200"
                type="text"
                placeholder="City, town or suburb"
                aria-label="Location"
              />

              <button className="rounded-2xl bg-yatify-action px-9 py-4 font-semibold text-white transition hover:bg-yatify-action-hover">
                Search
              </button>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 text-sm text-yatify-muted">
              <span>Popular:</span>

              <a href="#" className="link-plain font-medium text-yatify-dark">
                Houses to rent
              </a>

              <span>•</span>

              <a href="#" className="link-plain font-medium text-yatify-dark">
                Used cars
              </a>

              <span>•</span>

              <a href="#" className="link-plain font-medium text-yatify-dark">
                Jobs near me
              </a>

              <span>•</span>

              <a href="#" className="link-plain font-medium text-yatify-dark">
                Plumbers
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}