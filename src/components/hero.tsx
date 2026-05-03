"use client";

import { motion } from "framer-motion";
import { GeometricPattern } from "./geometric-pattern";

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
      transition: { duration: 0.6, ease: "easeOut" as const },
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

        {/* Descriptive intro */}
        <motion.p
          variants={fadeUp}
          className="font-body text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
        >
          Seven open-source Islamic projects across Quran content, Tajweed,
          the Prophet&rsquo;s life, the 99 Names of Allah, new-Muslim
          guidance, a browser companion, and a desktop prayer tool.
          Religious content is read-only, drawn from authenticated texts.
          Built freely so that benefit may continue.
        </motion.p>
      </motion.div>
    </section>
  );
}
