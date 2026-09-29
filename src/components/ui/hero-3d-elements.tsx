export function Hero3DElements() {
  return (
    <>
      {/* 1. Top-Left Lime 3D Zigzag / Snake Ribbon */}
      <div className="absolute top-12 left-4 sm:left-10 w-36 h-48 sm:w-44 sm:h-56 pointer-events-none z-10 transform -rotate-12">
        <svg viewBox="0 0 160 220" fill="none" className="w-full h-full filter drop-shadow-2xl">
          <defs>
            <linearGradient id="limeZigzagGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#faffc5" />
              <stop offset="30%" stopColor="#cbfc01" />
              <stop offset="80%" stopColor="#8cb400" />
              <stop offset="100%" stopColor="#4b6b00" />
            </linearGradient>
          </defs>
          <path
            d="M 30 20 Q 140 30 110 70 Q 20 110 130 130 Q 30 170 120 200"
            stroke="url(#limeZigzagGrad)"
            strokeWidth="32"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* 2. Mid-Left White 3D Wavy Ribbon / Spring */}
      <div className="absolute top-72 left-28 sm:left-36 w-24 h-28 sm:w-32 sm:h-36 pointer-events-none z-10 transform -rotate-12">
        <svg viewBox="0 0 140 160" fill="none" className="w-full h-full filter drop-shadow-xl">
          <defs>
            <linearGradient id="whiteSpringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="70%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>
          </defs>
          <path
            d="M 20 30 Q 120 30 90 70 Q 20 110 110 130"
            stroke="url(#whiteSpringGrad)"
            strokeWidth="24"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* 3. Bottom-Left Giant White 3D Torus Ring */}
      <div className="absolute -bottom-10 -left-12 sm:left-4 w-52 h-52 sm:w-72 sm:h-72 pointer-events-none z-20 transform -rotate-45">
        <svg viewBox="0 0 240 240" fill="none" className="w-full h-full filter drop-shadow-2xl">
          <defs>
            <linearGradient id="whiteTorusGradExact" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#f8fafc" />
              <stop offset="85%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>
          </defs>
          <path
            d="M 120 20 A 100 100 0 1 0 120 220 A 100 100 0 1 0 120 20 M 120 65 A 55 55 0 1 1 120 175 A 55 55 0 1 1 120 65"
            fill="url(#whiteTorusGradExact)"
          />
        </svg>
      </div>

      {/* 4. Top-Right Giant Lime 3D Cylinder Capsule */}
      <div className="absolute top-16 right-4 sm:right-10 w-36 h-56 sm:w-48 sm:h-72 pointer-events-none z-10 transform rotate-12">
        <svg viewBox="0 0 140 240" fill="none" className="w-full h-full filter drop-shadow-2xl">
          <defs>
            <linearGradient id="limeCylGradExact" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fdffe4" />
              <stop offset="40%" stopColor="#cbfc01" />
              <stop offset="80%" stopColor="#8cb400" />
              <stop offset="100%" stopColor="#465a0d" />
            </linearGradient>
          </defs>
          <rect x="15" y="15" width="110" height="210" rx="55" fill="url(#limeCylGradExact)" />
        </svg>
      </div>

      {/* 5. Mid-Right White 3D Pyramid Cone */}
      <div className="absolute top-72 right-28 sm:right-40 w-32 h-36 sm:w-44 sm:h-48 pointer-events-none z-10 transform -rotate-12">
        <svg viewBox="0 0 160 180" fill="none" className="w-full h-full filter drop-shadow-2xl">
          <defs>
            <linearGradient id="pyramidGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>
            <linearGradient id="pyramidGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
          </defs>
          {/* Front face */}
          <polygon points="80,10 150,150 80,170" fill="url(#pyramidGrad1)" />
          {/* Side face */}
          <polygon points="80,10 80,170 10,130" fill="url(#pyramidGrad2)" />
        </svg>
      </div>

      {/* 6. Bottom-Right White 3D Wavy Ribbon / Spring */}
      <div className="absolute bottom-16 right-6 sm:right-12 w-32 h-36 sm:w-44 sm:h-48 pointer-events-none z-20 transform rotate-12">
        <svg viewBox="0 0 160 200" fill="none" className="w-full h-full filter drop-shadow-2xl">
          <defs>
            <linearGradient id="whiteSpringRightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#f1f5f9" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>
          </defs>
          <path
            d="M 20 30 Q 140 30 100 80 Q 20 130 130 160"
            stroke="url(#whiteSpringRightGrad)"
            strokeWidth="28"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </>
  );
}
