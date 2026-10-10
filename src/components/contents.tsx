import { projects } from "@/data/projects";
import { plateNumber } from "@/lib/plate-number";

export function Contents() {
  return (
    <nav id="contents" aria-labelledby="contents-title" className="scroll-mt-4">
      <h2
        id="contents-title"
        className="text-[0.8125rem] font-medium uppercase tracking-[0.1em] text-ink-3"
      >
        Contents
      </h2>
      <ol className="mt-3 border-t border-rule">
        {projects.map((project, index) => (
          <li key={project.id} className="border-b border-rule">
            <a
              href={`#${project.id}`}
              className="group grid min-h-14 grid-cols-[2.75rem_minmax(0,1fr)] items-center gap-x-3 py-2 min-[26rem]:grid-cols-[2.75rem_minmax(0,1fr)_auto] min-[26rem]:py-1.5"
            >
              <span className="row-span-2 font-display text-2xl text-accent min-[26rem]:row-span-1">
                {plateNumber(index)}
              </span>
              <span>
                <span className="block font-display text-2xl leading-tight text-ink transition-colors group-hover:text-accent">
                  {project.title}
                </span>
                <span className="block text-sm leading-snug text-ink-3">
                  {project.kind}
                </span>
              </span>
              <span
                className="arabic-name col-start-2 justify-self-start text-xl text-ink-2 min-[26rem]:col-start-3 min-[26rem]:justify-self-auto sm:text-2xl"
                lang="ar"
                dir="rtl"
              >
                {project.arabicTitle}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
