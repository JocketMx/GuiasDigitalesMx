"use client"

export default function LogisticsAnimation() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Single animated group: truck + companions all travel together at same speed, same height */}
      <div
        className="absolute"
        style={{
          animation: "driveAcross 26s linear infinite",
          top: "9.3%",
        }}
      >
        <div className="relative flex items-center gap-3">
          {/* Dust trail */}
          <span className="block h-1 w-8 rounded-full bg-[#0F7A7E]/15" style={{ animation: "dustFade 26s linear infinite 0.4s" }} />
          <span className="block h-1.5 w-4 rounded-full bg-[#0F7A7E]/20" style={{ animation: "dustFade 26s linear infinite 0.2s" }} />
          <span className="block h-2 w-2 rounded-full bg-[#0F7A7E]/25" style={{ animation: "dustFade 26s linear infinite 0.1s" }} />

          {/* 1. Delivery truck — main focus */}
          <svg width="46" height="28" viewBox="0 0 46 28" fill="none" className="text-[#0F7A7E] drop-shadow-sm flex-shrink-0">
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

          {/* 2. Shipping package — behind and slightly back */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#0F7A7E] opacity-60 flex-shrink-0" style={{ marginLeft: "-16px" }}>
            {/* Box body */}
            <rect x="3" y="8" width="18" height="13" rx="1.5" fill="currentColor" opacity="0.12" stroke="currentColor" strokeWidth="1.1" />
            {/* Front flap */}
            <path d="M3 8 L12 4 L21 8" stroke="currentColor" strokeWidth="1.1" fill="none" />
            {/* Tape down center */}
            <line x1="12" y1="8" x2="12" y2="21" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
            {/* Handle */}
            <path d="M6 8 Q12 5 18 8" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
          </svg>

          {/* 3. Shipping label / guía document */}
          <svg width="20" height="26" viewBox="0 0 20 26" fill="none" className="text-[#0F7A7E] opacity-50 flex-shrink-0" style={{ marginLeft: "-12px" }}>
            {/* Document body */}
            <rect x="1" y="1" width="16" height="22" rx="1.5" fill="white" opacity="0.6" stroke="currentColor" strokeWidth="1.1" />
            {/* Folded corner */}
            <path d="M13 1 L17 5 L13 5 Z" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="0.7" />
            {/* Barcode section */}
            <rect x="3" y="10" width="2" height="8" fill="currentColor" opacity="0.35" />
            <rect x="6" y="10" width="1" height="8" fill="currentColor" opacity="0.35" />
            <rect x="8" y="10" width="2" height="8" fill="currentColor" opacity="0.35" />
            <rect x="11" y="10" width="1" height="8" fill="currentColor" opacity="0.35" />
            <rect x="13" y="10" width="2" height="8" fill="currentColor" opacity="0.35" />
            {/* Text lines */}
            <rect x="3" y="3" width="8" height="1.2" rx="0.6" fill="currentColor" opacity="0.3" />
            <rect x="3" y="5.5" width="6" height="0.9" rx="0.45" fill="currentColor" opacity="0.2" />
          </svg>

          {/* 4. Cargo drone — bringing up rear */}
          <svg width="32" height="20" viewBox="0 0 32 20" fill="none" className="text-[#59C5B3] opacity-45 flex-shrink-0" style={{ marginLeft: "-14px" }}>
            {/* Main body / battery */}
            <ellipse cx="16" cy="10" rx="5" ry="3.5" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1" />
            {/* Left arm */}
            <line x1="4" y1="10" x2="11" y2="10" stroke="currentColor" strokeWidth="1.1" />
            {/* Right arm */}
            <line x1="21" y1="10" x2="28" y2="10" stroke="currentColor" strokeWidth="1.1" />
            {/* Left rotor (spinning impression) */}
            <circle cx="4" cy="10" r="3.5" fill="none" stroke="currentColor" strokeWidth="0.9" opacity="0.5" />
            <line x1="4" y1="6.5" x2="4" y2="13.5" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
            {/* Right rotor */}
            <circle cx="28" cy="10" r="3.5" fill="none" stroke="currentColor" strokeWidth="0.9" opacity="0.5" />
            <line x1="28" y1="6.5" x2="28" y2="13.5" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
            {/* Payload hook and small package */}
            <line x1="16" y1="13" x2="16" y2="16" stroke="currentColor" strokeWidth="0.9" strokeDasharray="1,1" opacity="0.6" />
            <rect x="13.5" y="16" width="5" height="3" rx="0.6" fill="currentColor" opacity="0.18" stroke="currentColor" strokeWidth="0.8" />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes driveAcross {
          0%   { transform: translateX(-120px); opacity: 0; }
          3%   { opacity: 1; }
          93%  { opacity: 1; }
          100% { transform: translateX(110vw); opacity: 0; }
        }
        @keyframes dustFade {
          0%, 100% { opacity: 0; }
          3%, 93%  { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
