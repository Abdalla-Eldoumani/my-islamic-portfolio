// Sahih Muslim 1631, copied from sunnah.com: the narrator's name through the
// closing quotation mark, with the page's own directional marks left in place.
const hadithArabic = `عَنْ أَبِي هُرَيْرَةَ، أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم قَالَ ‏"‏ إِذَا مَاتَ الإِنْسَانُ انْقَطَعَ عَنْهُ عَمَلُهُ إِلاَّ مِنْ ثَلاَثَةٍ إِلاَّ مِنْ صَدَقَةٍ جَارِيَةٍ أَوْ عِلْمٍ يُنْتَفَعُ بِهِ أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ ‏"‏`;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-rule">
      <div className="wrap py-14 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[7fr_5fr] lg:gap-16">
          <figure>
            <blockquote>
              <p
                className="font-naskh text-[clamp(1.625rem,1.3rem+1.2vw,2.125rem)] leading-[2.1] text-ink"
                lang="ar"
                dir="rtl"
              >
                {hadithArabic}
              </p>
              <p className="mt-5 font-display text-2xl leading-snug text-pretty text-ink-2">
                Abu Huraira (Allah be pleased with him) reported Allah&rsquo;s
                Messenger (ﷺ) as saying:
              </p>
              <p className="mt-2 font-display text-2xl leading-snug text-pretty text-ink-2">
                When a man dies, his acts come to an end, but three, recurring
                charity, or knowledge (by which people) benefit, or a pious
                child, who prays for him (for the deceased).
              </p>
            </blockquote>
            <figcaption className="mt-4 text-sm text-ink-3">
              Sahih Muslim 1631, English from sunnah.com
            </figcaption>
          </figure>

          <div>
            <figure>
              <blockquote>
                <p className="font-display text-2xl leading-snug text-pretty text-ink-2">
                  &ldquo;And who is better in speech than one who invites to
                  Allah and does righteousness and says, &lsquo;Indeed, I am of
                  the Muslims.&rsquo;&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-4 text-sm text-ink-3">
                Surah Fussilat 41:33, Saheeh International translation
              </figcaption>
            </figure>

            <div className="mt-12 border-t border-rule pt-6">
              <p className="font-display text-3xl text-accent">
                Built as sadaqah jariyah
              </p>
              <a
                href="https://github.com/Abdalla-Eldoumani"
                target="_blank"
                rel="noopener noreferrer"
                className="link mt-2 inline-flex min-h-11 items-center"
              >
                github.com/Abdalla-Eldoumani
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <p className="mt-2 text-sm text-ink-3">
                &copy; {currentYear} Abdalla Eldoumani. All projects are open
                source.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
