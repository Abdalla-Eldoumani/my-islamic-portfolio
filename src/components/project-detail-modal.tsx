"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Chrome, Code } from "lucide-react";
import type { Project } from "@/data/projects";
import { projectIconMap } from "@/lib/icons";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetailModal({
  project,
  onClose,
}: ProjectDetailModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const stableOnClose = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") stableOnClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    // Auto-focus close button for keyboard accessibility
    requestAnimationFrame(() => closeRef.current?.focus());

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, stableOnClose]);

  const IconComponent = project ? (projectIconMap[project.icon] ?? Code) : null;

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50"
          />

          {/* Modal */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} details`}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" as const }}
            className="fixed inset-4 md:inset-12 lg:inset-24 z-50 glass-card rounded-2xl p-5 sm:p-6 md:p-8 lg:p-12 overflow-y-auto"
          >
            {/* Close button */}
            <button
              ref={closeRef}
              onClick={onClose}
              className="absolute top-2 right-2 p-2 text-text-muted hover:text-text-primary transition-colors"
              aria-label="Close dialog"
            >
              <X size={24} />
            </button>

            {/* Content */}
            <div className="max-w-3xl mx-auto">
              {/* Header */}
              <div className="flex items-start gap-4 mb-8">
                <div
                  className="p-3 rounded-xl shrink-0"
                  style={{ backgroundColor: `${project.accentColor}20` }}
                >
                  {IconComponent && (
                    <IconComponent
                      size={28}
                      style={{ color: project.accentColor }}
                    />
                  )}
                </div>
                <div>
                  <span
                    className="text-xs font-body font-medium"
                    style={{ color: project.accentColor }}
                  >
                    {project.categoryLabel}
                  </span>
                  <h2 className="font-display text-display-md text-text-primary">
                    {project.title}
                  </h2>
                  {project.arabicTitle && (
                    <p
                      className="font-arabic text-gold-muted text-lg"
                      lang="ar"
                      dir="rtl"
                    >
                      {project.arabicTitle}
                    </p>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="font-body text-text-secondary leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-display text-display-sm text-text-primary mb-4">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex gap-3 font-body text-sm text-text-secondary"
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: project.accentColor }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats */}
              {project.stats && (
                <div className="flex flex-wrap gap-8 mb-8 py-4 border-t border-b border-gold-muted/10">
                  {project.stats.map((stat) => (
                    <div key={stat.label}>
                      <div
                        className="font-display text-2xl font-semibold"
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
              <div className="mb-8">
                <h3 className="font-display text-display-sm text-text-primary mb-3">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-bg-tertiary text-text-secondary font-body text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source on GitHub`}
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-4 sm:px-6 py-3 rounded-xl bg-bg-tertiary text-text-primary hover:text-gold-primary hover:bg-gold-primary/10 font-body text-sm transition-all"
                >
                  <Github size={16} />
                  View Source
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live demo`}
                    className="flex items-center justify-center gap-2 w-full sm:w-auto px-4 sm:px-6 py-3 rounded-xl font-body text-sm transition-all hover:bg-gold-primary/10"
                    style={{ color: project.accentColor }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
                {project.chromeStoreUrl && (
                  <a
                    href={project.chromeStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on Chrome Web Store`}
                    className="flex items-center justify-center gap-2 w-full sm:w-auto px-4 sm:px-6 py-3 rounded-xl font-body text-sm transition-all hover:bg-gold-primary/10"
                    style={{ color: project.accentColor }}
                  >
                    <Chrome size={16} />
                    Chrome Web Store
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
