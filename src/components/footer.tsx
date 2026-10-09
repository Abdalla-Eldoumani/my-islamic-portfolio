export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-rule bg-bg-secondary px-6 py-16 text-center">
      <div className="mx-auto max-w-xl">
        <figure>
          <blockquote>
            <p
              className="font-arabic text-2xl leading-loose text-text-primary"
              lang="ar"
              dir="rtl"
            >
              أحب الناس إلى الله أنفعهم للناس
            </p>
            <p className="mt-3 font-display text-lg leading-relaxed text-text-secondary">
              &ldquo;The most beloved of people to Allah are those most
              beneficial to people.&rdquo;
            </p>
          </blockquote>
          <figcaption className="mt-3 text-sm leading-relaxed text-text-muted">
            Narrated by Abdullah ibn Umar (excerpt) · al-Tabarani, al-Mu&rsquo;jam
            al-Awsat 6026 · graded sahih by al-Albani, al-Silsilah al-Sahihah
            906 · English rendering is the site&rsquo;s own
          </figcaption>
        </figure>

        <figure className="mt-10">
          <blockquote>
            <p className="font-display text-lg leading-relaxed text-text-secondary">
              &ldquo;And who is better in speech than one who invites to Allah
              and does righteousness and says, &lsquo;Indeed, I am of the
              Muslims.&rsquo;&rdquo;
            </p>
          </blockquote>
          <figcaption className="mt-3 text-sm text-text-muted">
            Surah Fussilat 41:33 · Saheeh International translation
          </figcaption>
        </figure>

        <p className="mt-12 font-display text-xl text-gold-primary">
          Built as Sadaqah Jariyah
        </p>

        <a
          href="https://github.com/Abdalla-Eldoumani"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex min-h-11 items-center text-sm text-text-secondary underline decoration-rule underline-offset-4 hover:text-gold-primary hover:decoration-gold-primary"
        >
          github.com/Abdalla-Eldoumani
          <span className="sr-only"> (opens in a new tab)</span>
        </a>

        <p className="mt-6 text-sm text-text-muted">
          &copy; {currentYear} Abdalla Eldoumani. All projects are open source.
        </p>
      </div>
    </footer>
  );
}
