export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#08221b]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="text-2xl font-bold text-[#12893e]">
          YATIFY
        </div>

        <nav className="hidden gap-6 text-sm font-medium md:flex">
          <a href="#">Property</a>
          <a href="#">Cars</a>
          <a href="#">Jobs</a>
          <a href="#">Services</a>
          <a href="#">Businesses</a>
        </nav>

        <button className="rounded-full bg-[#12893e] px-5 py-2.5 text-sm font-semibold text-white">
          List with Yatify
        </button>
      </header>

      <section className="mx-auto flex min-h-[75vh] max-w-7xl items-center px-6">
        <div className="max-w-3xl">
          <p className="mb-4 font-semibold text-[#12893e]">
            Everything you need. Near you.
          </p>

          <h1 className="text-6xl font-bold tracking-tight md:text-8xl">
            Find it.
            <br />
            Near you.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-[#5b6a65]">
            Discover property, cars, jobs and services from trusted providers.
          </p>

          <div className="mt-10 flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-3 shadow-lg md:flex-row">
            <input
              className="flex-1 rounded-xl px-4 py-4 outline-none"
              type="text"
              placeholder="What are you looking for?"
            />

            <input
              className="flex-1 rounded-xl px-4 py-4 outline-none"
              type="text"
              placeholder="Location"
            />

            <button className="rounded-xl bg-[#12893e] px-8 py-4 font-semibold text-white">
              Search
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}