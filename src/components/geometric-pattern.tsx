export function GeometricPattern() {
  // Single deliberate frontispiece. Centred on the hero, no tiling, no rotation.
  // Concentric eight-point rosettes inside an octagonal frame, in the manner
  // of Mamluk Quran illumination.
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 800 800"
        className="w-[min(90vmin,800px)] h-[min(90vmin,800px)] opacity-[0.12]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="hero-frontispiece-mask" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="65%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="black" stopOpacity="1" />
          </radialGradient>
          <mask id="hero-frontispiece-fade">
            <rect width="800" height="800" fill="url(#hero-frontispiece-mask)" />
          </mask>
        </defs>

        {/* The mask sits on an untransformed group so its rect covers the full viewBox. */}
        <g mask="url(#hero-frontispiece-fade)">
          <g
            stroke="currentColor"
            strokeWidth="0.7"
            fill="none"
            className="text-gold-primary"
            transform="translate(400 400)"
          >
            {/* Outer ring: large octagon */}
            <polygon points="0,-340 240,-240 340,0 240,240 0,340 -240,240 -340,0 -240,-240" />

            {/* Outer eight-point star (two squares offset 45°) */}
            <rect x="-260" y="-260" width="520" height="520" />
            <rect x="-260" y="-260" width="520" height="520" transform="rotate(45)" />

            {/* Mid octagon */}
            <polygon points="0,-220 156,-156 220,0 156,156 0,220 -156,156 -220,0 -156,-156" />

            {/* Inner eight-point star */}
            <rect x="-130" y="-130" width="260" height="260" />
            <rect x="-130" y="-130" width="260" height="260" transform="rotate(45)" />

            {/* Inner octagon */}
            <polygon points="0,-110 78,-78 110,0 78,78 0,110 -78,78 -110,0 -78,-78" />

            {/* Concentric circles */}
            <circle cx="0" cy="0" r="80" />
            <circle cx="0" cy="0" r="44" />
            <circle cx="0" cy="0" r="18" />

            {/* Cardinal radial lines, halted before the centre */}
            <line x1="0" y1="-340" x2="0" y2="-110" />
            <line x1="0" y1="340" x2="0" y2="110" />
            <line x1="-340" y1="0" x2="-110" y2="0" />
            <line x1="340" y1="0" x2="110" y2="0" />

            {/* Diagonal radial lines */}
            <line x1="-240" y1="-240" x2="-78" y2="-78" />
            <line x1="240" y1="-240" x2="78" y2="-78" />
            <line x1="-240" y1="240" x2="-78" y2="78" />
            <line x1="240" y1="240" x2="78" y2="78" />

            {/* Innermost eight-point star */}
            <rect x="-13" y="-13" width="26" height="26" />
            <rect x="-13" y="-13" width="26" height="26" transform="rotate(45)" />
          </g>
        </g>
      </svg>
    </div>
  );
}
