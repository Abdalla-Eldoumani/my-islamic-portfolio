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
      <div className="geometric-divider max-w-md mx-auto mb-10" />

      {/* Hadith on beneficial people */}
      <p
        className="font-arabic text-lg md:text-xl text-text-primary leading-loose"
        lang="ar"
        dir="rtl"
      >
        أحب الناس إلى الله أنفعهم للناس
      </p>
      <p className="font-display text-base md:text-lg text-text-secondary italic max-w-xl mx-auto leading-relaxed mt-3">
        &ldquo;The most beloved of people to Allah are those most beneficial
        to people.&rdquo;
      </p>
      <p className="font-body text-xs text-text-muted mt-2 mb-8">
        From Abdullah ibn Umar · Sahih, al-Silsilah al-Sahihah by al-Albani
      </p>

      <div className="geometric-divider max-w-xs mx-auto opacity-40 mb-8" />

      {/* Quran 41:33 */}
      <p className="font-display text-base md:text-lg text-text-secondary italic max-w-xl mx-auto leading-relaxed">
        &ldquo;And who is better in speech than one who invites to Allah and
        does righteousness and says, &lsquo;Indeed, I am of the
        Muslims.&rsquo;&rdquo;
      </p>
      <p className="font-body text-xs text-text-muted mt-2 mb-10">
        Surah Fussilat 41:33 · Saheeh International translation
      </p>

      <p className="font-display text-lg gold-shimmer mb-6">
        Built as Sadaqah Jariyah
      </p>

      <a
        href="https://github.com/Abdalla-Eldoumani"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        className="inline-flex items-center gap-2 py-2 text-text-secondary hover:text-gold-primary transition-colors font-body text-sm mb-8"
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
