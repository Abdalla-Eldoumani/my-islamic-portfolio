export function GeometricPattern() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <svg
        viewBox="0 0 800 800"
        className="w-[120%] h-[120%] opacity-[0.04] animate-slow-spin"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="islamic-geo"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <g
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              className="text-gold-primary"
            >
              {/* Outer octagon */}
              <polygon points="50,5 79.3,20.7 95,50 79.3,79.3 50,95 20.7,79.3 5,50 20.7,20.7" />
              {/* Inner star formed by two overlapping squares */}
              <rect x="20" y="20" width="60" height="60" transform="rotate(45 50 50)" />
              <rect x="20" y="20" width="60" height="60" />
              {/* Smaller inner octagon */}
              <polygon points="50,22 64.6,29.7 72,44 64.6,58.3 50,66 35.4,58.3 28,44 35.4,29.7" transform="translate(0,6)" />
              {/* Center circle */}
              <circle cx="50" cy="50" r="12" />
              {/* Inner tiny circle */}
              <circle cx="50" cy="50" r="5" />
              {/* Cardinal connecting lines */}
              <line x1="50" y1="5" x2="50" y2="38" />
              <line x1="95" y1="50" x2="62" y2="50" />
              <line x1="50" y1="95" x2="50" y2="62" />
              <line x1="5" y1="50" x2="38" y2="50" />
              {/* Diagonal cross-lines connecting octagon vertices */}
              <line x1="79.3" y1="20.7" x2="20.7" y2="79.3" />
              <line x1="20.7" y1="20.7" x2="79.3" y2="79.3" />
              {/* Petal arcs between star points */}
              <path d="M 50,5 Q 65,25 79.3,20.7" />
              <path d="M 79.3,20.7 Q 75,40 95,50" />
              <path d="M 95,50 Q 75,65 79.3,79.3" />
              <path d="M 79.3,79.3 Q 60,75 50,95" />
              <path d="M 50,95 Q 35,75 20.7,79.3" />
              <path d="M 20.7,79.3 Q 25,60 5,50" />
              <path d="M 5,50 Q 25,35 20.7,20.7" />
              <path d="M 20.7,20.7 Q 40,25 50,5" />
            </g>
          </pattern>
          {/* Radial fade mask */}
          <radialGradient id="fade-mask" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" />
            <stop offset="70%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </radialGradient>
          <mask id="radial-fade">
            <rect width="800" height="800" fill="url(#fade-mask)" />
          </mask>
        </defs>
        <rect
          width="800"
          height="800"
          fill="url(#islamic-geo)"
          mask="url(#radial-fade)"
        />
      </svg>
    </div>
  );
}
