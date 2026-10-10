import { projects } from "@/data/projects";
import { Plate } from "./plate";

export function ProjectsSection() {
  return (
    <section id="catalogue" aria-label="Catalogue of projects" className="wrap">
      {projects.map((project, index) => (
        <Plate
          key={project.id}
          project={project}
          index={index}
          total={projects.length}
        />
      ))}
    </section>
  );
}
