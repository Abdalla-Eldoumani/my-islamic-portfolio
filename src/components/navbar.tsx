const linkClass =
  "inline-flex min-h-11 items-center px-3 text-sm text-text-secondary hover:text-gold-primary";

export function Navbar() {
  return (
    <header className="border-b border-rule">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between px-3 md:px-5"
      >
        <a
          href="/"
          className="inline-flex min-h-11 items-center px-3 font-display text-lg text-text-primary hover:text-gold-primary"
        >
          Abdalla Eldoumani
        </a>
        <ul className="flex flex-wrap items-center">
          <li>
            <a href="#about" className={linkClass}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" className={linkClass}>
              Projects
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Abdalla-Eldoumani"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
