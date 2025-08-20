"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Headphones, Lock, Rocket, Truck, Zap } from "lucide-react"

export default function Benefits() {
  const items = [
    {
      icon: Clock,
      title: "Disponible 24/7",
      desc: "Opera cuando tu negocio lo necesite. Cotiza y crea guías en tiempo real.",
    },
    {
      icon: Zap,
      title: "Ahorro inmediato",
      desc: "Flujos claros para crear etiquetas en segundos y reducir errores. Ahorra más del 50% vs. tarifas tradicionales.",
    },
    {
      icon: Truck,
      title: "Decisiones inteligentes",
      desc: "Compara paqueterías y elige la mejor tarifa por zona, urgencia y servicio.",
    },
    {
      icon: Headphones,
      title: "Soporte humano experto",
      desc: "Acompañamiento de GDMX Logistics cuando surgen envíos complejos.",
    },
    {
      icon: Lock,
      title: "Confianza y seguridad",
      desc: "Buenas prácticas y protección de datos para operar con tranquilidad.",
    },
    {
      icon: Rocket,
      title: "Escala sin fricción",
      desc: "De 1 a 10,000 envíos. Sin cuellos de botella, sin procesos manuales. Recolección disponible.",
    },
  ]

  return (
    <section id="beneficios" className="relative w-full py-16 md:py-20 overflow-hidden bg-white">
      {/* Marco decorativo animado */}
      <div className="absolute inset-4 -z-10 rounded-3xl border-2 border-[#0F7A7E]/20 bg-gradient-to-br from-[#0F7A7E]/5 via-transparent to-[#59C5B3]/5 overflow-hidden">
        <div className="absolute inset-4 rounded-2xl border border-[#59C5B3]/30 animate-gentle-glow" />

        {/* Elementos decorativos contenidos dentro del marco - solo verde */}
        <div
          className="pointer-events-none absolute top-4 left-4 h-32 w-32 rounded-full bg-[#59C5B3]/25 blur-3xl animate-bounce"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="pointer-events-none absolute bottom-4 right-4 h-32 w-32 rounded-full bg-[#59C5B3]/30 blur-3xl animate-bounce"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        />
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0F7A7E]/20 blur-2xl animate-gentle-glow" />

        {/* Más elementos decorativos - solo verde */}
        <div
          className="pointer-events-none absolute top-1/4 right-1/3 h-16 w-16 rounded-full bg-[#59C5B3]/15 blur-xl animate-gentle-glow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="pointer-events-none absolute bottom-1/3 left-1/4 h-20 w-20 rounded-full bg-[#59C5B3]/20 blur-2xl animate-bounce"
          style={{ animationDuration: "6s", animationDelay: "3s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#0F7A7E]/30 bg-[#0F7A7E]/10 px-4 py-2 text-sm font-medium text-[#0F7A7E] mb-4 animate-slide-in-badge">
            <Zap className="h-4 w-4" />
            Plataforma 24/7
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#0F7A7E] sm:text-4xl">
            Beneficios de nuestra plataforma 24/7
          </h2>
          <p className="mt-3 text-brand-ink/70">La experiencia de 12 años de GDMX Logistics, ahora digital.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, index) => (
            <Card
              key={it.title}
              className="group border-2 border-[#0F7A7E]/20 bg-white/95 backdrop-blur-sm transition-all duration-300 hover:translate-y-[-4px] hover:border-[#0F7A7E]/50 hover:shadow-xl hover:shadow-[#0F7A7E]/20 animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="relative pb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0F7A7E] to-[#59C5B3] text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <it.icon className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4 text-brand-ink group-hover:text-[#0F7A7E] transition-colors duration-300">
                  {it.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-brand-ink/80 group-hover:text-brand-ink transition-colors duration-300 pb-4">
                {it.desc}
              </CardContent>
              {/* Borde inferior decorativo - posición fija */}
              <div className="absolute bottom-0 left-0 right-0 h-1 w-full bg-gradient-to-r from-[#0F7A7E] to-[#59C5B3] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          ))}
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

        @keyframes gentle-glow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
        .animate-gentle-glow {
          animation: gentle-glow 4s ease-in-out infinite;
        }

        @keyframes slide-in-badge {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in-badge {
          animation: slide-in-badge 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
