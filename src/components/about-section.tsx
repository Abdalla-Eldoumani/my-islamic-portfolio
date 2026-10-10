export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="wrap scroll-mt-4"
    >
      <div className="grid gap-6 border-t border-rule py-14 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:py-20">
        <h2
          id="about-title"
          className="font-display text-[clamp(2rem,1.4rem+2vw,3rem)] leading-none text-ink"
        >
          About the catalogue
        </h2>
        <div className="max-w-[40rem] space-y-4 text-ink-2">
          <p>
            These projects are written by Abdalla Eldoumani.
            Each is open source, so anyone may read it, use it and improve it.
          </p>
          <p>
            The aim is sadaqah jariyah: work that may keep benefiting people
            after it is published, by the mercy of Allah.
          </p>
        </div>
      </div>
    </section>
  );
}
