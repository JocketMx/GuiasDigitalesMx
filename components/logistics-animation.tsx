"use client"

export default function LogisticsAnimation() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">

      {/* === LANE: between Empresa badge (~4%) and feature pills (~16%) === */}

      {/* 1. Delivery truck — main element, drives right */}
      <div className="absolute" style={{ animation: "driveAcross 24s linear infinite 0s", top: "9%" }}>
        <div className="relative flex items-center gap-0.5">
          <span className="block h-1 w-8 rounded-full bg-[#0F7A7E]/15" style={{ animation: "dustFade 24s linear infinite 0.4s" }} />
          <span className="block h-1.5 w-4 rounded-full bg-[#0F7A7E]/20" style={{ animation: "dustFade 24s linear infinite 0.2s" }} />
          <span className="block h-2 w-2 rounded-full bg-[#0F7A7E]/25" style={{ animation: "dustFade 24s linear infinite 0.1s" }} />
          <svg width="46" height="28" viewBox="0 0 46 28" fill="none" className="text-[#0F7A7E] drop-shadow-sm">
            <rect x="0" y="6" width="28" height="16" rx="2" fill="currentColor" opacity="0.18" />
            <rect x="0" y="6" width="28" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M28 10 L28 22 L42 22 L42 14 L38 10 Z" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M30 12 L30 18 L40 18 L40 14 L37 12 Z" fill="white" opacity="0.7" />
            <circle cx="8"  cy="23" r="4" fill="white" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="8"  cy="23" r="1.5" fill="currentColor" opacity="0.4" />
            <circle cx="22" cy="23" r="4" fill="white" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="22" cy="23" r="1.5" fill="currentColor" opacity="0.4" />
            <circle cx="37" cy="23" r="4" fill="white" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="37" cy="23" r="1.5" fill="currentColor" opacity="0.4" />
          </svg>
        </div>
      </div>

      {/* 2. Shipping box — floats slightly above, drifts slower, offset start */}
      <div className="absolute" style={{ animation: "floatAcross 34s linear infinite 8s", top: "7%" }}>
        <div className="relative flex items-center gap-1">
          <span className="block h-1 w-5 rounded-full bg-[#59C5B3]/20" style={{ animation: "dustFade 34s linear infinite 8.4s" }} />
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="text-[#0F7A7E] drop-shadow-sm">
            {/* Box body */}
            <rect x="2" y="8" width="18" height="12" rx="1.5" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.2" />
            {/* Box lid */}
            <path d="M1 8 L11 4 L21 8" stroke="currentColor" strokeWidth="1.2" fill="currentColor" opacity="0.1" />
            {/* Tape strip */}
            <rect x="9" y="8" width="4" height="12" rx="0.5" fill="currentColor" opacity="0.2" />
            {/* Label */}
            <rect x="4" y="11" width="7" height="5" rx="0.8" fill="white" opacity="0.7" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
          </svg>
        </div>
      </div>

      {/* 3. Shipping label / guia — a small document drifting right, delayed */}
      <div className="absolute" style={{ animation: "floatAcross 40s linear infinite 16s", top: "10.5%" }}>
        <div className="relative flex items-center gap-1">
          <span className="block h-1 w-4 rounded-full bg-[#59C5B3]/15" style={{ animation: "dustFade 40s linear infinite 16.3s" }} />
          <svg width="18" height="24" viewBox="0 0 18 24" fill="none" className="text-[#0F7A7E]">
            {/* Page body */}
            <rect x="1" y="1" width="14" height="20" rx="1.5" fill="white" opacity="0.7" stroke="currentColor" strokeWidth="1.2" />
            {/* Folded corner */}
            <path d="M11 1 L15 5 L11 5 Z" fill="currentColor" opacity="0.2" />
            <path d="M11 1 L11 5 L15 5" stroke="currentColor" strokeWidth="0.8" />
            {/* Barcode lines */}
            <rect x="3" y="8"  width="1" height="8" rx="0.3" fill="currentColor" opacity="0.4" />
            <rect x="5" y="8"  width="2" height="8" rx="0.3" fill="currentColor" opacity="0.4" />
            <rect x="8" y="8"  width="1" height="8" rx="0.3" fill="currentColor" opacity="0.4" />
            <rect x="10" y="8" width="2" height="8" rx="0.3" fill="currentColor" opacity="0.4" />
            <rect x="13" y="8" width="1" height="8" rx="0.3" fill="currentColor" opacity="0.4" />
            {/* Address lines */}
            <rect x="3" y="3" width="7" height="1"   rx="0.5" fill="currentColor" opacity="0.35" />
            <rect x="3" y="5" width="5" height="0.8" rx="0.5" fill="currentColor" opacity="0.25" />
          </svg>
        </div>
      </div>

      {/* 4. Small cargo drone — floats slightly higher, very slow */}
      <div className="absolute" style={{ animation: "floatAcross 50s linear infinite 26s", top: "6.5%" }}>
        <svg width="30" height="18" viewBox="0 0 30 18" fill="none" className="text-[#59C5B3] opacity-70">
          {/* Body */}
          <rect x="10" y="7" width="10" height="5" rx="2" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1" />
          {/* Arms */}
          <line x1="5" y1="9" x2="10" y2="9" stroke="currentColor" strokeWidth="1" />
          <line x1="20" y1="9" x2="25" y2="9" stroke="currentColor" strokeWidth="1" />
          {/* Rotors left */}
          <ellipse cx="5" cy="8.5" rx="4" ry="1.2" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="0.8" />
          {/* Rotors right */}
          <ellipse cx="25" cy="8.5" rx="4" ry="1.2" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="0.8" />
          {/* Hanging package */}
          <line x1="15" y1="12" x2="15" y2="15" stroke="currentColor" strokeWidth="0.8" strokeDasharray="1.5 1" />
          <rect x="12.5" y="15" width="5" height="3" rx="0.8" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="0.8" />
        </svg>
      </div>

      <style>{`
        @keyframes driveAcross {
          0%   { transform: translateX(-80px); opacity: 0; }
          4%   { opacity: 1; }
          92%  { opacity: 1; }
          100% { transform: translateX(110vw); opacity: 0; }
        }
        @keyframes floatAcross {
          0%   { transform: translateX(-60px) translateY(0px); opacity: 0; }
          4%   { opacity: 0.75; }
          50%  { transform: translateX(55vw) translateY(-4px); }
          92%  { opacity: 0.75; }
          100% { transform: translateX(110vw) translateY(0px); opacity: 0; }
        }
        @keyframes dustFade {
          0%, 100% { opacity: 0; }
          4%, 92%  { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
