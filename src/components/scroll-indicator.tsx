"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
  return (
    <a
      href="#about"
      className="flex flex-col items-center gap-2 text-text-muted hover:text-gold-primary transition-colors"
      aria-label="Scroll to about section"
    >
      <span className="font-body text-xs uppercase tracking-widest">Explore</span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={20} />
      </motion.div>
    </a>
  );
}
