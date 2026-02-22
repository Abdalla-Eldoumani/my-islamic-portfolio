export function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-4">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-muted/60" />
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        className="text-gold-primary"
        fill="currentColor"
      >
        <rect x="3" y="3" width="6" height="6" transform="rotate(45 6 6)" />
      </svg>
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-muted/60" />
    </div>
  );
}
