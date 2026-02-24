import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
  return (
    <a
      href="#about"
      className="flex flex-col items-center gap-2 text-text-muted hover:text-gold-primary transition-colors"
      aria-label="Scroll to about section"
    >
      <span className="font-body text-xs uppercase tracking-widest">Explore</span>
      <div className="animate-bounce-subtle">
        <ChevronDown size={20} />
      </div>
    </a>
  );
}
