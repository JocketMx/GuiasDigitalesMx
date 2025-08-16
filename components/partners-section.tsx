"use client"

import Image from "next/image"
import { Handshake } from "lucide-react"
import { cn } from "@/lib/utils"

type Partner = {
  name: string
  src: string
  href: string
}

export default function PartnersSection() {
  const partners: Partner[] = [
    // DHL ahora usa el JPEG con "EXPRESS"
    { name: "DHL", src: "/images/partners/dhl.jpeg", href: "https://www.dhl.com/mx-es/home.html" },
    { name: "FedEx", src: "/images/partners/fedex.png", href: "https://www.fedex.com/es-mx/home.html" },
    // Estafeta ahora usa el JPEG con "Soluciones Logísticas"
    { name: "Estafeta", src: "/images/partners/estafeta.jpeg", href: "https://www.estafeta.com/" },
    { name: "UPS", src: "/images/partners/ups.png", href: "https://www.ups.com/mx/es/Home.page" },
  ]

  return (
    <section id="partners" className="relative w-full py-16 md:py-20 overflow-hidden bg-white">
      {/* Marco decorativo animado */}
      <div className="absolute inset-4 -z-10 rounded-3xl border-2 border-[#0F7A7E]/20 bg-gradient-to-br from-[#0F7A7E]/5 via-transparent to-[#59C5B3]/5 overflow-hidden">
        <div className="absolute inset-4 rounded-2xl border border-[#59C5B3]/30 animate-pulse" />

        {/* Elementos decorativos contenidos */}
        <div
          className="pointer-events-none absolute top-4 left-4 h-32 w-32 rounded-full bg-[#59C5B3]/25 blur-3xl animate-bounce"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="pointer-events-none absolute bottom-4 right-4 h-32 w-32 rounded-full bg-[#59C5B3]/30 blur-3xl animate-bounce"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        />
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0F7A7E]/20 blur-2xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#0F7A7E]/30 bg-[#0F7A7E]/10 px-4 py-2 text-sm font-medium text-[#0F7A7E] mb-4 animate-pulse">
            <Handshake className="h-4 w-4" />
            Alianzas estratégicas
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl bg-gradient-to-r from-[#0F7A7E] to-[#59C5B3] bg-clip-text text-transparent">
            Nuestros Partners
          </h2>
          <p className="mt-3 text-brand-ink/70">Trabajamos con las principales paqueterías para mover tu negocio.</p>
        </div>

        {/* Grilla uniforme: mismas bases, mismos gutters, misma altura interna */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {partners.map((p, index) => {
            const key = p.name.toLowerCase()
            const isDHL = key === "dhl"
            const isUPS = key === "ups"
            const isEstafeta = key === "estafeta"

            const cardClass = cn(
              "group rounded-xl border-2 border-[#0F7A7E]/20 bg-white/95 backdrop-blur-sm p-6 shadow-sm transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl hover:shadow-[#0F7A7E]/20 focus:outline-none focus-visible:ring-4 animate-fade-in-up",
              // Estilos por marca
              isDHL && "hover:border-[#FFCC00]/70 focus-visible:ring-[#FFCC00]/30",
              isEstafeta && "hover:border-[#CC2229]/70 focus-visible:ring-[#CC2229]/30",
              isUPS && "hover:border-[#6B4F1D]/60 focus-visible:ring-[#6B4F1D]/25",
              // Estilo por defecto para FedEx
              !isDHL && !isEstafeta && !isUPS && "hover:border-[#0F7A7E]/50 focus-visible:ring-[#59C5B3]/30",
            )

            // Tamaños armonizados: Estafeta/DHL/UPS un poco más grandes
            const imgClass = cn(
              "w-auto object-contain transition-transform duration-300 group-hover:scale-105",
              isEstafeta
                ? "w-full h-auto max-h-20 sm:max-h-24"
                : // Estafeta cubre el ancho, altura auto
                  isDHL || isUPS
                  ? "h-16 sm:h-20"
                  : // DHL y UPS con altura fija
                    "h-12 sm:h-14", // FedEx con altura por defecto
            )

            // Ancho y alto para Next/Image, el tamaño real lo controla Tailwind
            const width = isEstafeta ? 600 : isDHL || isUPS ? 320 : 240
            const height = isEstafeta ? 150 : isDHL || isUPS ? 140 : 100

            return (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar sitio de ${p.name}`}
                className={cardClass}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Contenedor de altura fija para alinear tarjetas sin "saltos" */}
                <div className="flex h-24 items-center justify-center sm:h-28">
                  <Image
                    src={p.src || "/placeholder.svg?height=80&width=220&query=partner%20logo%20placeholder"}
                    alt={`${p.name} logo`}
                    width={width}
                    height={height}
                    className={imgClass}
                    priority={false}
                  />
                </div>

                {/* Línea decorativa animada */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0F7A7E] to-[#59C5B3] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </a>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
