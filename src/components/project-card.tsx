"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Chrome } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect?: (project: Project) => void;
}

export function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative bg-bg-secondary border border-gold-muted/25 hover:border-[var(--card-accent)] rounded-2xl p-6 md:p-8 flex flex-col gap-4 transition-colors duration-500 group"
      style={
        { "--card-accent": project.accentColor } as React.CSSProperties
      }
    >
      {/* Corner ornament (top-right). Eight-point mark, intensifies on hover. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="absolute top-4 right-4 w-5 h-5 text-gold-muted opacity-40 group-hover:opacity-80 transition-opacity duration-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <rect x="6" y="6" width="12" height="12" />
        <rect x="6" y="6" width="12" height="12" transform="rotate(45 12 12)" />
      </svg>

      {/* Category badge */}
      <span
        className="inline-block w-fit px-3 py-1 rounded-md text-xs font-body font-medium uppercase tracking-wider"
        style={{
          backgroundColor: `${project.accentColor}1A`,
          color: project.accentColor,
        }}
      >
        {project.categoryLabel}
      </span>

      {/* Title & subtitle — clickable area */}
      <div
        className={onSelect ? "cursor-pointer" : undefined}
        onClick={() => onSelect?.(project)}
      >
        <h3 className="font-display text-display-sm text-text-primary mb-1">
          {project.title}
        </h3>
        {project.arabicTitle && (
          <p
            className="font-arabic text-gold-muted text-sm mb-1"
            lang="ar"
            dir="rtl"
          >
            {project.arabicTitle}
          </p>
        )}
        <p className="font-body text-sm text-text-secondary">
          {project.subtitle}
        </p>
      </div>

      {/* Description */}
      <p className="font-body text-sm text-text-muted leading-relaxed line-clamp-4">
        {project.description}
      </p>

      {/* Stats */}
      {project.stats && (
        <div className="flex flex-wrap gap-4 sm:gap-6 py-3 border-t border-b border-gold-muted/15">
          {project.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="font-display text-lg font-semibold"
                style={{ color: project.accentColor }}
              >
                {stat.value}
              </div>
              <div className="font-body text-xs text-text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.techStack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 rounded-md bg-bg-tertiary text-text-muted font-body text-xs"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 4 && (
          <span className="px-2 py-1 text-text-muted font-body text-xs">
            +{project.techStack.length - 4}
          </span>
        )}
      </div>

      {/* Action links */}
      <div className="flex flex-wrap gap-3 pt-2">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} source on GitHub`}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-bg-tertiary text-text-secondary hover:text-gold-primary hover:bg-gold-primary/10 font-body text-sm transition-colors"
        >
          <Github size={14} />
          Source
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} live demo`}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-body transition-colors hover:bg-gold-primary/10"
            style={{ color: project.accentColor }}
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        )}
        {project.chromeStoreUrl && (
          <a
            href={project.chromeStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on Chrome Web Store`}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-body transition-colors hover:bg-gold-primary/10"
            style={{ color: project.accentColor }}
          >
            <Chrome size={14} />
            Chrome Store
          </a>
        )}
        {onSelect && (
          <button
            onClick={() => onSelect(project)}
            className="ml-auto px-4 py-2 rounded-lg text-sm font-body text-text-muted hover:text-gold-primary hover:bg-gold-primary/10 transition-colors"
            aria-label={`View details for ${project.title}`}
          >
            Details
          </button>
        )}
      </div>
    </motion.article>
  );
}
