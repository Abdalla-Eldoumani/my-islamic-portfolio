import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  number: number;
}

export function ProjectCard({ project, number }: ProjectCardProps) {
  const titleId = `${project.id}-title`;

  return (
    <article
      aria-labelledby={titleId}
      className="flex flex-col gap-4 border-t border-rule pt-6 pb-10"
    >
      <div className="flex items-baseline gap-4">
        <span
          aria-hidden="true"
          className="font-display text-3xl text-gold-primary"
        >
          {String(number).padStart(2, "0")}
        </span>
        <p className="text-xs uppercase tracking-[0.18em] text-text-muted">
          {project.categoryLabel}
        </p>
      </div>

      <div>
        <h3
          id={titleId}
          className="font-display text-display-sm font-semibold"
        >
          {project.title}
        </h3>
        {project.arabicTitle && (
          <p className="mt-1 font-arabic text-xl text-gold-primary">
            <span lang="ar" dir="rtl">
              {project.arabicTitle}
            </span>
          </p>
        )}
        <p className="mt-1 text-text-secondary">{project.subtitle}</p>
      </div>

      <p className="leading-relaxed text-text-secondary">
        {project.description}
      </p>

      <dl className="flex flex-wrap gap-x-8 gap-y-3 border-y border-rule py-3">
        {project.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse">
            <dt className="text-xs text-text-muted">{stat.label}</dt>
            <dd className="font-display text-2xl text-gold-primary">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>

      <details>
        <summary className="flex min-h-11 cursor-pointer items-center text-sm font-medium marker:text-gold-primary">
          Highlights
        </summary>
        <ul className="list-disc space-y-2 ps-5 text-sm leading-relaxed text-text-secondary marker:text-gold-primary">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </details>

      <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-text-muted">
        {project.techStack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <ul className="flex flex-wrap gap-x-6">
        {project.links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-gold-primary underline decoration-rule underline-offset-4 hover:decoration-gold-primary"
            >
              {link.label}
              <span className="sr-only">
                : {project.title}, opens in a new tab
              </span>
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
