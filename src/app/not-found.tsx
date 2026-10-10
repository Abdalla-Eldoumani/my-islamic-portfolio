import Link from "next/link";
import { projects } from "@/data/projects";
import { plateNumber } from "@/lib/plate-number";

export default function NotFound() {
  return (
    <main className="wrap py-14 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
        <div>
          <p className="font-display text-[clamp(5rem,3rem+9vw,9rem)] leading-none text-accent lining-nums">
            404
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-ink">
            Page not found
          </h1>
          <p className="mt-4 max-w-[28rem] text-ink-2">
            This address is not in the catalogue. It may have moved, or the
            link may have a typing error.
          </p>
          <Link
            href="/"
            className="link mt-6 inline-flex min-h-11 items-center"
          >
            Return to the catalogue
          </Link>
        </div>

        <nav aria-labelledby="notfound-contents">
          <h2
            id="notfound-contents"
            className="text-[0.8125rem] font-medium uppercase tracking-[0.1em] text-ink-3"
          >
            Projects
          </h2>
          <ol className="mt-3 border-t border-rule">
            {projects.map((project, index) => (
              <li key={project.id} className="border-b border-rule">
                <Link
                  href={`/#${project.id}`}
                  className="group grid min-h-12 grid-cols-[2.75rem_minmax(0,1fr)] items-center gap-x-3 py-1.5"
                >
                  <span className="font-display text-2xl text-accent">
                    {plateNumber(index)}
                  </span>
                  <span className="font-display text-2xl text-ink transition-colors group-hover:text-accent">
                    {project.title}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </main>
  );
}
