import { SectionDivider } from "./section-divider";

export function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto max-w-2xl px-6 py-16 text-center md:py-24"
    >
      <h2 className="font-display text-display-lg font-semibold">About</h2>
      <SectionDivider />

      <p className="mt-8 leading-relaxed text-text-secondary">
        The aim of this portfolio is{" "}
        <span className="text-gold-primary">sadaqah jariyah</span>, work that
        may continue to benefit others by the mercy of Allah.
      </p>
    </section>
  );
}
