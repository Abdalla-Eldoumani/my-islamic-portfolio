"use client";

import { motion } from "framer-motion";
import { GeometricPattern } from "./geometric-pattern";
import { ScrollIndicator } from "./scroll-indicator";

export function Hero() {
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
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background geometric pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <GeometricPattern />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        {/* Bismillah */}
        <motion.p
          variants={fadeUp}
          className="font-arabic text-2xl md:text-3xl lg:text-4xl gold-shimmer mb-8"
          dir="rtl"
        >
          بسم الله الرحمن الرحيم
        </motion.p>

        {/* Main heading */}
        <motion.h1
          variants={fadeUp}
          className="font-display text-display-xl text-text-primary mb-8"
        >
          Islamic Software
          <br />
          Portfolio
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="font-body text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
        >
          Building open-source tools for the Muslim community as{" "}
          <span className="text-gold-primary italic">sadaqah jariyah</span> —
          ongoing charity that continues to benefit others inshallah.
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8"
      >
        <ScrollIndicator />
      </motion.div>
    </section>
  );
}
