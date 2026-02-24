"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Chrome, Code } from "lucide-react";
import type { Project } from "@/data/projects";
import { projectIconMap } from "@/lib/icons";

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect?: (project: Project) => void;
}

export function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  const IconComponent = projectIconMap[project.icon] ?? Code;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="glass-card rounded-2xl p-6 md:p-8 flex flex-col gap-4 transition-all duration-300 hover:shadow-card-hover group"
      style={{
        borderColor: hovered ? project.accentColor : undefined,
      }}
    >
      {/* Category badge */}
      <div className="flex items-center justify-between">
        <span
          className="px-3 py-1 rounded-full text-xs font-body font-medium"
          style={{
            backgroundColor: `${project.accentColor}20`,
            color: project.accentColor,
          }}
        >
          {project.categoryLabel}
        </span>
        <IconComponent
          size={20}
          className="text-text-muted group-hover:text-gold-primary transition-colors"
        />
      </div>

      {/* Title & subtitle — clickable area */}
      <div
        className={onSelect ? "cursor-pointer" : undefined}
        onClick={() => onSelect?.(project)}
      >
        <h3 className="font-display text-display-sm text-text-primary mb-1">
          {project.title}
        </h3>
        {project.arabicTitle && (
          <p className="font-arabic text-gold-muted text-sm mb-1" dir="rtl">
            {project.arabicTitle}
          </p>
        )}
        <p className="font-body text-sm text-text-secondary">{project.subtitle}</p>
      </div>

      {/* Description */}
      <p className="font-body text-sm text-text-muted leading-relaxed line-clamp-4">
        {project.description}
      </p>

      {/* Stats */}
      {project.stats && (
        <div className="flex flex-wrap gap-4 sm:gap-6 py-3 border-t border-b border-gold-muted/10">
          {project.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="font-display text-lg font-semibold"
                style={{ color: project.accentColor }}
              >
                {stat.value}
              </div>
              <div className="font-body text-xs text-text-muted">{stat.label}</div>
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
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-bg-tertiary text-text-secondary hover:text-gold-primary hover:bg-gold-primary/10 font-body text-sm transition-all"
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
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-body transition-all hover:bg-gold-primary/10"
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
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-body transition-all hover:bg-gold-primary/10"
            style={{ color: project.accentColor }}
          >
            <Chrome size={14} />
            Chrome Store
          </a>
        )}
        {onSelect && (
          <button
            onClick={() => onSelect(project)}
            className="ml-auto px-4 py-2 rounded-lg text-sm font-body text-text-muted hover:text-gold-primary hover:bg-gold-primary/10 transition-all"
            aria-label={`View details for ${project.title}`}
          >
            Details
          </button>
        )}
      </div>
    </motion.article>
  );
}
