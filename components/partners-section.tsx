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
    { name: "DHL", src: "/images/partners/dhl.jpeg", href: "https://www.dhl.com/mx-es/home.html" },
    { name: "FedEx", src: "/images/partners/fedex.png", href: "https://www.fedex.com/es-mx/home.html" },
    { name: "Estafeta", src: "/images/partners/estafeta.jpeg", href: "https://www.estafeta.com/" },
    { name: "UPS", src: "/images/partners/ups.png", href: "https://www.ups.com/mx/es/Home.page" },
    { name: "Paquetexpress", src: "/images/partners/paquetexpress.png", href: "https://www.paquetexpress.com.mx/" },
    { name: "AMPM", src: "/images/partners/ampm.png", href: "https://www.grupoampm.com.mx/" },
    { name: "99 Minutos", src: "/images/partners/99minutos.png", href: "https://www.99minutos.com/" },
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
          <h2 className="text-3xl font-bold tracking-tight text-[#0F7A7E] sm:text-4xl">Nuestros Partners</h2>
          <p className="mt-3 text-brand-ink/70">Trabajamos con las principales paqueterías para mover tu negocio.</p>
        </div>

        {/* Grilla responsive para 7 partners */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
          {partners.map((p, index) => {
            const cardClass = "group relative rounded-xl border-2 border-[#0F7A7E]/20 bg-white/95 backdrop-blur-sm p-4 shadow-sm transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl hover:shadow-[#0F7A7E]/20 hover:border-[#0F7A7E]/50 focus:outline-none focus-visible:ring-4 animate-fade-in-up"

            const imgClass = "w-auto h-10 sm:h-12 object-contain transition-transform duration-300 group-hover:scale-105"

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
                <div className="flex h-16 items-center justify-center sm:h-20">
                  <Image
                    src={p.src}
                    alt={`${p.name} logo`}
                    width={200}
                    height={80}
                    className={imgClass}
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
