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
        <h2 className="font-display text-display-lg text-text-primary mb-4">
          About
        </h2>
        <SectionDivider />

        <div className="mt-8 space-y-6 font-body text-text-secondary leading-relaxed">
          <p>
            I&apos;m Abdalla — a Computer Science student at the University of Calgary
            with a Philosophy minor. I build open-source Islamic software as{" "}
            <span className="text-gold-primary italic">sadaqah jariyah</span>, ongoing
            charity that continues to benefit the Muslim community long after the code
            is written.
          </p>
          <p>
            Every project here treats religious content with absolute care. Quranic
            verses, hadith, and Islamic scholarship are sourced exclusively from
            authenticated texts — Sahih al-Bukhari, Sahih Muslim, Ar-Raheeq Al-Makhtum,
            and other verified primary sources. No AI-generated religious content, ever.
          </p>
          <p className="text-text-muted text-sm">
            May Allah accept these efforts and make them beneficial for the ummah.
          </p>
        </div>

        {/* Decorative accent below closing dua */}
        <div className="geometric-divider max-w-xs mx-auto mt-8" />
      </motion.div>
    </section>
  );
}
