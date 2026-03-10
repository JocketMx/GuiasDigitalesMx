"use client"

import { Monitor, Smartphone, Tag, Printer, Clock, Code } from "lucide-react"
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

  const features = [
    { icon: Tag, title: "60% de ahorro", desc: "En tarifas vs. precio de mostrador" },
    { icon: Clock, title: "1 minuto", desc: "De cotización a guía impresa" },
    { icon: Printer, title: "Súper fácil", desc: "Imprime tu guía y ya" },
    { icon: Code, title: "API disponible", desc: "Conecta tu tienda online" },
  ]

  return (
    <section id="plataforma" className="relative w-full py-20 md:py-28 overflow-hidden bg-white">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] to-white" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0F7A7E]/20 bg-[#0F7A7E]/5 px-4 py-2 text-sm font-medium text-[#0F7A7E] mb-6">
            <Monitor className="h-4 w-4" />
            <Smartphone className="h-4 w-4" />
            Interfaz intuitiva
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B0A16] mb-4">
            Plataforma disenada para
            <span className="block text-[#0F7A7E]">decidir rapido</span>
          </h2>
          <p className="text-lg text-[#0B0A16]/60 max-w-2xl mx-auto">
            Menos clics, más control y visibilidad total de tus envíos.
          </p>
        </div>

        {/* Carousel */}
        <div className="mb-16">
          <MediaCarousel slides={slides} />
        </div>

        {/* Feature cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl border border-[#0F7A7E]/10 bg-white hover:border-[#0F7A7E]/30 hover:shadow-xl hover:shadow-[#0F7A7E]/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-[#0F7A7E]/10 flex items-center justify-center text-[#0F7A7E] group-hover:bg-[#0F7A7E] group-hover:text-white transition-all duration-300">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#0B0A16] group-hover:text-[#0F7A7E] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#0B0A16]/60">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
