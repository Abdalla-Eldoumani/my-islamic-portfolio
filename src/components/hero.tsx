import { GeometricPattern } from "./geometric-pattern";

export function Hero() {
  return (
    <section className="relative flex min-h-[80svh] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
      <GeometricPattern />

      <div className="relative mx-auto max-w-3xl">
        <p
          className="mb-10 font-arabic text-5xl leading-[1.7] text-gold-primary md:text-6xl lg:text-7xl"
          lang="ar"
          dir="rtl"
        >
          ﴿ بسم الله الرحمن الرحيم ﴾
        </p>

        <h1 className="font-display text-display-lg font-semibold">
          Open-source Islamic software
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
          Qur&rsquo;an videos, Tajweed lessons, the Prophet&rsquo;s life, the 99
          Names of Allah, guidance for new Muslims, a browser extension and a
          desktop prayer-times widget. Built freely so that benefit may
          continue.
        </p>
      </div>
    </section>
  );
}
