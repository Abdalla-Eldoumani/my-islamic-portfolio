"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, categories } from "@/data/projects";
import type { Project } from "@/data/projects";
import dynamic from "next/dynamic";
import { ProjectCard } from "./project-card";
import { SectionDivider } from "./section-divider";

const ProjectDetailModal = dynamic(() => import("./project-detail-modal").then(mod => ({ default: mod.ProjectDetailModal })), {
  ssr: false,
});

export function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="portfolio-section">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-display-lg font-semibold text-text-primary mb-4">
          Projects
        </h2>
        <SectionDivider />
        <p className="font-body text-text-secondary mt-6 max-w-xl mx-auto">
          Religious content in every project is sourced from authenticated
          texts. None of it is generated.
        </p>
      </motion.div>

      {/* Category filter — cartouche-style markers */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            aria-label={`Filter by ${cat.label}`}
            aria-pressed={activeCategory === cat.id}
            className={`px-4 sm:px-5 py-2.5 min-h-[44px] rounded-md font-body text-xs uppercase tracking-[0.2em] transition-colors duration-300 border ${
              activeCategory === cat.id
                ? "border-gold-primary/60 bg-gold-primary/10 text-gold-primary"
                : "border-gold-muted/25 text-text-muted hover:border-gold-muted/50 hover:text-text-secondary"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={setSelectedProject}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Detail modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
