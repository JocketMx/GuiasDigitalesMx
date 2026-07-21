"use client"

import { useEffect, useRef } from "react"

export default function LogisticsAnimation() {
  const planeRef = useRef<HTMLDivElement>(null)

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Flying plane trail */}
      <div
        ref={planeRef}
        className="absolute"
        style={{
          animation: "flyAcross 18s linear infinite",
          top: "18%",
        }}
      >
        {/* Plane SVG */}
        <div className="relative flex items-center gap-1">
          {/* Trail dots */}
          <span className="block h-1 w-1 rounded-full bg-[#0F7A7E]/20" style={{ animation: "fadeTrail 18s linear infinite 0.6s" }} />
          <span className="block h-1.5 w-1.5 rounded-full bg-[#0F7A7E]/30" style={{ animation: "fadeTrail 18s linear infinite 0.3s" }} />
          <span className="block h-2 w-2 rounded-full bg-[#0F7A7E]/40" style={{ animation: "fadeTrail 18s linear infinite 0.1s" }} />
          {/* Plane icon */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            className="text-[#0F7A7E] drop-shadow-sm"
          >
            <path
              d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Second plane — smaller, lower, slower */}
      <div
        className="absolute"
        style={{
          animation: "flyAcross 28s linear infinite 9s",
          top: "72%",
          opacity: 0.5,
        }}
      >
        <div className="relative flex items-center gap-1">
          <span className="block h-1 w-1 rounded-full bg-[#59C5B3]/25" />
          <span className="block h-1.5 w-1.5 rounded-full bg-[#59C5B3]/35" />
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="text-[#59C5B3]"
          >
            <path
              d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes flyAcross {
          0%   { transform: translateX(-80px); opacity: 0; }
          5%   { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateX(110vw); opacity: 0; }
        }
        @keyframes fadeTrail {
          0%, 100% { opacity: 0; }
          5%, 90%  { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
