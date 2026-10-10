import Image from "next/image";
import type { Project } from "@/data/projects";
import { plateNumber } from "@/lib/plate-number";

interface PlateProps {
  project: Project;
  index: number;
  total: number;
}

export function Plate({ project, index, total }: PlateProps) {
  const titleId = `${project.id}-title`;
  const { image } = project;

  return (
    <article id={project.id} aria-labelledby={titleId} className="plate">
      <header className="plate-head">
        <p className="plate-no font-display text-2xl text-accent">
          {plateNumber(index)}
          <span className="text-ink-3"> / {plateNumber(total - 1)}</span>
        </p>
        <div className="mt-2 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1">
          <h2
            id={titleId}
            className="font-display text-[clamp(2.5rem,1.5rem+3.6vw,4.5rem)] leading-none text-ink"
          >
            {project.title}
          </h2>
          <p
            className="arabic-name text-[clamp(2rem,1.3rem+2.4vw,3.25rem)] text-accent"
            lang="ar"
            dir="rtl"
          >
            {project.arabicTitle}
          </p>
        </div>
        <p className="mt-2 text-[0.8125rem] font-medium uppercase tracking-[0.1em] text-ink-3">
          {project.kind}
        </p>
      </header>

      <figure className="plate-figure">
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
          sizes="(min-width: 80rem) 46rem, (min-width: 64rem) 55vw, 100vw"
          unoptimized
          className="block h-auto w-full border border-rule bg-sunk"
        />
        <figcaption className="mt-2 text-sm text-ink-3">
          {image.caption}
        </figcaption>
      </figure>

      <div className="plate-entry">
        <p className="font-display text-[clamp(1.5rem,1.2rem+0.9vw,2rem)] leading-[1.25] text-ink">
          {project.summary}
        </p>

        <dl className="mt-8">
          {project.facts.map((fact) => (
            <div
              key={fact.label}
              className="grid grid-cols-[6.5rem_minmax(0,1fr)] items-baseline border-t border-rule py-3"
            >
              <dt className="font-display text-4xl leading-none text-accent">
                {fact.value}
              </dt>
              <dd className="text-ink-2">{fact.label}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-6 border-t border-rule pt-4 text-[0.9375rem] leading-relaxed text-ink-2">
          <span className="font-medium text-ink">Sources. </span>
          {project.sources}
        </p>

        <ul className="mt-6 flex flex-wrap gap-x-6">
          {project.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link inline-flex min-h-11 items-center"
              >
                {link.label}
                <span className="sr-only"> for {project.title} (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
