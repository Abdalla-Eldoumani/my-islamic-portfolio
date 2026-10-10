import Link from "next/link";

const linkClass =
  "inline-flex min-h-11 items-center px-2.5 text-[0.9375rem] text-ink-2 transition-colors hover:text-accent sm:px-3 sm:text-base";

export function Navbar() {
  return (
    <header className="border-b border-rule">
      <nav
        aria-label="Primary"
        className="wrap flex flex-wrap items-center justify-between"
      >
        <Link
          href="/"
          className="inline-flex min-h-11 items-center font-display text-xl text-ink transition-colors hover:text-accent"
        >
          Abdalla Eldoumani
        </Link>
        <ul className="-me-2.5 flex flex-wrap items-center sm:-me-3">
          <li>
            <a href="#contents" className={linkClass}>
              Contents
            </a>
          </li>
          <li>
            <a href="#about" className={linkClass}>
              About
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
