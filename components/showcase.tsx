"use client"

import { Monitor, Smartphone, Tag, Printer, Truck, Shield } from "lucide-react"
import MediaCarousel from "./media-carousel"

export default function Showcase() {
  const slides = [
    {
      id: "s1",
      device: "laptop" as const,
      src: "/images/cotizacion-main.png",
      alt: "Compara y cotiza paqueterías",
      censor: true,
    },
    { id: "s2", device: "laptop" as const, src: "/images/login.png", alt: "Inicio de sesión", censor: false },
    {
      id: "s3",
      device: "laptop" as const,
      src: "/images/nueva-guia.png",
      alt: "Generación de guía paso a paso",
      censor: false,
    },
    {
      id: "s4",
      device: "laptop" as const,
      src: "/images/paquetes.png",
      alt: "Catálogo y plantillas de paquetes",
      censor: false,
    },
    {
      id: "s5",
      device: "laptop" as const,
      src: "/images/movimientos.png",
      alt: "Créditos y registro de movimientos",
      censor: false,
    },
  ]

  return (
    <section id="plataforma" className="relative w-full py-16 md:py-20 overflow-hidden bg-white">
      {/* Marco decorativo animado - solo verde */}
      <div className="absolute inset-4 -z-10 rounded-3xl border-2 border-[#0F7A7E]/20 bg-gradient-to-br from-[#0F7A7E]/5 via-transparent to-[#59C5B3]/5 overflow-hidden">
        <div className="absolute inset-4 rounded-2xl border border-[#59C5B3]/30 animate-pulse" />

        {/* Elementos decorativos contenidos - solo verde */}
        <div
          className="pointer-events-none absolute top-4 left-4 h-32 w-32 rounded-full bg-[#59C5B3]/25 blur-3xl animate-bounce"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="pointer-events-none absolute bottom-4 right-4 h-32 w-32 rounded-full bg-[#59C5B3]/30 blur-3xl animate-bounce"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        />
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0F7A7E]/20 blur-2xl animate-pulse" />

        {/* Elementos decorativos adicionales - solo verde */}
        <div
          className="pointer-events-none absolute top-1/3 right-1/4 h-18 w-18 rounded-full bg-[#59C5B3]/20 blur-2xl animate-pulse"
          style={{ animationDelay: "2.5s" }}
        />
        <div
          className="pointer-events-none absolute bottom-1/4 left-1/3 h-22 w-22 rounded-full bg-[#59C5B3]/25 blur-3xl animate-bounce"
          style={{ animationDuration: "5s", animationDelay: "1.5s" }}
        />
        <div
          className="pointer-events-none absolute top-3/4 right-1/3 h-14 w-14 rounded-full bg-[#0F7A7E]/15 blur-xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#0F7A7E]/30 bg-[#0F7A7E]/10 px-4 py-2 text-sm font-medium text-[#0F7A7E] mb-4 animate-pulse">
            <Monitor className="h-4 w-4" />
            <Smartphone className="h-4 w-4" />
            Interfaz intuitiva
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl bg-gradient-to-r from-[#0F7A7E] to-[#59C5B3] bg-clip-text text-transparent">
            Plataforma en acción
          </h2>
          <p className="mt-3 text-brand-ink/70">
            Diseñada para decidir rápido: menos clics, más control y visibilidad.
            <span className="font-semibold text-[#0F7A7E]"> Imprime tu guía y ya.</span>
          </p>
        </div>

        <div className="animate-fade-in-up">
          <MediaCarousel slides={slides} />
        </div>

        {/* Información adicional sobre facilidades - ahora con 4 tarjetas */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="text-center p-6 rounded-xl border-2 border-[#0F7A7E]/20 bg-white/50 backdrop-blur-sm animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#0F7A7E] to-[#59C5B3] text-white mb-3">
              <Tag className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-brand-ink mb-2">Ahorro garantizado</h3>
            <p className="text-sm text-brand-ink/70">Más del 50% de descuento vs. tarifas tradicionales</p>
          </div>

          <div
            className="text-center p-6 rounded-xl border-2 border-[#0F7A7E]/20 bg-white/50 backdrop-blur-sm animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#0F7A7E] to-[#59C5B3] text-white mb-3">
              <Printer className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-brand-ink mb-2">Súper fácil</h3>
            <p className="text-sm text-brand-ink/70">Imprime tu guía y ya. Sin complicaciones.</p>
          </div>

          <div
            className="text-center p-6 rounded-xl border-2 border-[#0F7A7E]/20 bg-white/50 backdrop-blur-sm animate-fade-in-up"
            style={{ animationDelay: "600ms" }}
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#0F7A7E] to-[#59C5B3] text-white mb-3">
              <Truck className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-brand-ink mb-2">Recolección</h3>
            <p className="text-sm text-brand-ink/70">Servicio de recolección de paquetes disponible</p>
          </div>

          <div
            className="text-center p-6 rounded-xl border-2 border-[#0F7A7E]/20 bg-white/50 backdrop-blur-sm animate-fade-in-up"
            style={{ animationDelay: "800ms" }}
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#0F7A7E] to-[#59C5B3] text-white mb-3">
              <Shield className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-brand-ink mb-2">Seguros</h3>
            <p className="text-sm text-brand-ink/70">Asegura tus envíos en línea, sin complicaciones</p>
          </div>
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
