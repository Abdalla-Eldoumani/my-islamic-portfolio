import { Contents } from "./contents";

export function Hero() {
  return (
    <section aria-labelledby="title" className="wrap pb-14 pt-4 sm:pt-8 lg:pb-16">
      {/* Quran.com text_imlaei_simple for 1:1, byte for byte. */}
      <p className="basmala" lang="ar" dir="rtl">
        ﴿ بسم الله الرحمن الرحيم ﴾
      </p>

      <div className="mt-4 grid gap-10 border-t border-rule pt-8 lg:mt-6 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:pt-10">
        <div>
          <h1
            id="title"
            className="font-display text-[clamp(2.5rem,1.5rem+3.8vw,4.75rem)] leading-[1.02] text-balance text-ink"
          >
            Open-source Islamic software
          </h1>
          <p className="mt-6 max-w-[34rem] font-display text-[clamp(1.375rem,1.1rem+0.9vw,1.875rem)] leading-[1.3] text-balance text-ink-2">
            Nine projects, built freely so that benefit may continue.
          </p>
          <p className="mt-5 max-w-[34rem] text-ink-2">
            Each plate below says what the project is for, gives three figures
            taken from its repository, and names where its religious text comes
            from.
          </p>
        </div>

        <Contents />
      </div>
    </section>
  );
}
