"use client";

import { motion } from "framer-motion";
import { SectionDivider } from "./section-divider";

export function AboutSection() {
  return (
    <section id="about" className="portfolio-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="font-display text-display-lg font-semibold text-text-primary mb-4">
          About
        </h2>
        <SectionDivider />

        <p className="mt-8 font-body text-text-secondary leading-relaxed">
          This portfolio is the work of Abdalla Eldoumani, a Computer Science
          student at the University of Calgary. The aim is{" "}
          <span className="text-gold-primary italic">sadaqah jariyah</span>,
          work that may continue to benefit others by the mercy of Allah.
        </p>

        <div className="geometric-divider max-w-xs mx-auto mt-10" />
      </motion.div>
    </section>
  );
}
