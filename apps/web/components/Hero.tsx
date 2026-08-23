import SearchPanel from "@/components/SearchPanel";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="absolute right-[-10rem] top-[-10rem] h-[34rem] w-[34rem] rounded-full bg-yatify-soft"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
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
            providers across South Africa.
          </p>

          <SearchPanel />
        </div>
      </div>
    </section>
  );
}
