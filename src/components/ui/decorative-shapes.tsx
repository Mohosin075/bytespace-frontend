export function DonutShape({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-xl" fill="none">
        <defs>
          <linearGradient id="donutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-secondary-300)" />
            <stop offset="50%" stopColor="var(--secondary)" />
            <stop offset="100%" stopColor="var(--color-secondary-600)" />
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r="45" stroke="url(#donutGrad)" strokeWidth="22" />
      </svg>
    </div>
  );
}

export function SquiggleShape({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg viewBox="0 0 140 80" className="w-full h-full drop-shadow-xl" fill="none">
        <defs>
          <linearGradient id="squiggleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
        </defs>
        <path
          d="M10 40 Q 30 10, 50 40 T 90 40 T 130 40"
          stroke="url(#squiggleGrad)"
          strokeWidth="18"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function ConeShape({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-xl">
        <defs>
          <linearGradient id="coneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-secondary-400)" />
            <stop offset="100%" stopColor="var(--color-secondary-700)" />
          </linearGradient>
        </defs>
        <polygon points="50,10 90,110 10,110" fill="url(#coneGrad)" />
      </svg>
    </div>
  );
}

export function CylinderShape({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg viewBox="0 0 80 120" className="w-full h-full drop-shadow-xl">
        <defs>
          <linearGradient id="cylGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-secondary-100)" />
            <stop offset="50%" stopColor="var(--secondary)" />
            <stop offset="100%" stopColor="var(--color-secondary-600)" />
          </linearGradient>
        </defs>
        <rect x="10" y="20" width="60" height="80" rx="30" fill="url(#cylGrad)" />
      </svg>
    </div>
  );
}
