"use client"

import MediaCarousel from "./media-carousel"

export default function Showcase() {
  const slides = [
    { id: "s1", device: "laptop" as const, src: "/images/cotizacion-main.png", alt: "Compara y cotiza paqueterías", censor: true },
    { id: "s2", device: "laptop" as const, src: "/images/login.png", alt: "Inicio de sesión", censor: false },
    { id: "s3", device: "laptop" as const, src: "/images/nueva-guia.png", alt: "Generación de guía paso a paso", censor: false },
    { id: "s4", device: "laptop" as const, src: "/images/paquetes.png", alt: "Catálogo y plantillas de paquetes", censor: false },
    { id: "s5", device: "laptop" as const, src: "/images/movimientos.png", alt: "Créditos y registro de movimientos", censor: false },
  ]

  return (
    <section id="plataforma" className="w-full bg-muted/40 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">Plataforma en acción</h2>
          <p className="mt-3 text-brand-ink/70">Diseñada para decidir rápido: menos clics, más control y visibilidad.</p>
        </div>
        <MediaCarousel slides={slides} />
      </div>
    </section>
  )
}
