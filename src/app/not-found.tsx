import Link from "next/link";
import { GeometricPattern } from "@/components/geometric-pattern";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <GeometricPattern />

      <div className="relative mx-auto max-w-lg">
        <p
          className="mb-6 font-arabic text-2xl text-gold-primary"
          lang="ar"
          dir="rtl"
        >
          إنا لله وإنا إليه راجعون
        </p>

        <h1 className="font-display text-display-lg font-semibold lining-nums">404</h1>
        <p className="mt-2 font-display text-display-sm text-text-secondary">
          Page not found
        </p>

        <p className="mt-6 leading-relaxed text-text-secondary">
          The page you are looking for does not exist or has been moved.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex min-h-11 items-center border border-gold-primary px-6 text-sm text-gold-primary hover:bg-bg-tertiary"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
