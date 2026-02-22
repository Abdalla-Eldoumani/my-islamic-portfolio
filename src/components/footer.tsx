"use client";

import { Github } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative px-6 py-16 text-center overflow-hidden">
      {/* Decorative 8-pointed star watermark */}
      <svg
        viewBox="0 0 200 200"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-[0.03] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="currentColor" className="text-gold-primary">
          <rect x="50" y="50" width="100" height="100" transform="rotate(45 100 100)" />
          <rect x="50" y="50" width="100" height="100" />
        </g>
      </svg>

      {/* Top divider */}
      <div className="geometric-divider max-w-md mx-auto mb-12" />

      <p className="font-display text-lg gold-shimmer mb-6">
        Built as Sadaqah Jariyah
      </p>

      <a
        href="https://github.com/Abdalla-Eldoumani"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        className="inline-flex items-center gap-2 text-text-secondary hover:text-gold-primary transition-colors font-body text-sm mb-8"
      >
        <Github size={16} />
        github.com/Abdalla-Eldoumani
      </a>

      <p className="font-body text-xs text-text-muted">
        &copy; {currentYear} Abdalla Eldoumani. All projects are open source.
      </p>
    </footer>
  );
}
