"use client";

import { motion } from "framer-motion";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Decorative background star */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          viewBox="0 0 400 400"
          className="w-80 h-80 opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="currentColor" className="text-gold-primary">
            <rect x="100" y="100" width="200" height="200" transform="rotate(45 200 200)" />
            <rect x="100" y="100" width="200" height="200" />
          </g>
        </svg>
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-lg mx-auto"
      >
        <motion.p
          variants={fadeUp}
          className="font-arabic text-xl gold-shimmer mb-6"
          dir="rtl"
        >
          إنا لله وإنا إليه راجعون
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="font-display text-display-lg text-text-primary mb-4"
        >
          404
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="font-display text-display-sm text-text-secondary mb-6"
        >
          Page Not Found
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="font-body text-text-muted mb-10 leading-relaxed"
        >
          The page you are looking for does not exist or has been moved.
        </motion.p>

        <motion.div variants={fadeUp}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-primary/10 text-gold-primary hover:bg-gold-primary/20 font-body text-sm transition-all border border-gold-primary/20 hover:border-gold-primary/40"
          >
            <Home size={16} />
            Return Home
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom divider accent */}
      <div className="absolute bottom-12 w-full max-w-xs mx-auto">
        <div className="geometric-divider" />
      </div>
    </main>
  );
}
