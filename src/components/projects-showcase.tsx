"use client";

import { useState } from "react";
import { projects, categories } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { SectionDivider } from "./section-divider";

export function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24"
    >
      <div className="mb-12 text-center">
        <h2 className="font-display text-display-lg font-semibold">Projects</h2>
        <SectionDivider />
        <p className="mx-auto mt-6 max-w-xl text-text-secondary">
          The Qur&rsquo;an and hadith in these projects come from published
          sources. None of it is generated at run time.
        </p>
      </div>

      <div
        role="group"
        aria-label="Filter projects by category"
        className="mb-4 flex flex-wrap justify-center gap-2"
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            aria-pressed={activeCategory === cat.id}
            className={`min-h-11 border px-4 text-xs uppercase tracking-[0.18em] ${
              activeCategory === cat.id
                ? "border-gold-primary bg-bg-tertiary text-gold-primary"
                : "border-rule text-text-secondary hover:text-gold-primary"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <p role="status" className="mb-10 text-center text-sm text-text-muted">
        Showing {filteredProjects.length} of {projects.length} projects
      </p>

      <div className="grid grid-cols-1 items-start gap-x-14 lg:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} number={index + 1} />
        ))}
      </div>
    </section>
  );
}
