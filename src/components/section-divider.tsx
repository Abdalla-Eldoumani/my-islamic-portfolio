export function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-4">
      <div className="h-px w-20 bg-linear-to-r from-transparent to-gold-muted/60" />
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        className="text-gold-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.7"
        aria-hidden="true"
      >
        {/* Eight-point star: two squares offset 45 degrees */}
        <rect x="3" y="3" width="12" height="12" />
        <rect x="3" y="3" width="12" height="12" transform="rotate(45 9 9)" />
        {/* Inner circle for centred dot detail */}
        <circle cx="9" cy="9" r="2.5" />
      </svg>
      <div className="h-px w-20 bg-linear-to-l from-transparent to-gold-muted/60" />
    </div>
  );
}
