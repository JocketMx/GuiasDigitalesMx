"use client"

export default function LogisticsAnimation() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Delivery truck — travels across the hero above feature pills */}
      <div
        className="absolute"
        style={{
          animation: "driveAcross 22s linear infinite",
          top: "6%",
        }}
      >
        <div className="relative flex items-center gap-0.5">
          {/* Road dust trail */}
          <span className="block h-1 w-6 rounded-full bg-[#0F7A7E]/15" style={{ animation: "dustFade 22s linear infinite 0.4s" }} />
          <span className="block h-1.5 w-3 rounded-full bg-[#0F7A7E]/20" style={{ animation: "dustFade 22s linear infinite 0.2s" }} />
          <span className="block h-2 w-2 rounded-full bg-[#0F7A7E]/25" style={{ animation: "dustFade 22s linear infinite 0.1s" }} />
          {/* Truck SVG */}
          <svg width="44" height="28" viewBox="0 0 44 28" fill="none" className="text-[#0F7A7E] drop-shadow-sm">
            {/* Truck body */}
            <rect x="0" y="6" width="28" height="16" rx="2" fill="currentColor" opacity="0.18" />
            <rect x="0" y="6" width="28" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
            {/* Cab */}
            <path d="M28 10 L28 22 L40 22 L40 14 L36 10 Z" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            {/* Cab window */}
            <path d="M30 12 L30 18 L38 18 L38 14 L35 12 Z" fill="white" opacity="0.7" />
            {/* Wheels */}
            <circle cx="8" cy="23" r="4" fill="white" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="8" cy="23" r="1.5" fill="currentColor" opacity="0.4" />
            <circle cx="22" cy="23" r="4" fill="white" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="22" cy="23" r="1.5" fill="currentColor" opacity="0.4" />
            <circle cx="36" cy="23" r="4" fill="white" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="36" cy="23" r="1.5" fill="currentColor" opacity="0.4" />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes driveAcross {
          0%   { transform: translateX(-80px); opacity: 0; }
          4%   { opacity: 1; }
          92%  { opacity: 1; }
          100% { transform: translateX(110vw); opacity: 0; }
        }
        @keyframes dustFade {
          0%, 100% { opacity: 0; }
          4%, 92%  { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
