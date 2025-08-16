"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export default function Testimonials() {
  const data = [
    {
      name: "Carmen López",
      role: "Dueña · Boutique Mía",
      company: "Ropa femenina online",
      quote:
        "Honestamente, al principio era escéptica. Pero cuando vi que podía crear guías a las 11 PM para envíos del día siguiente, me convenció. Ya no dependo de horarios de oficina.",
      rating: 5,
      avatar: "/mexican-professional-woman.png",
    },
    {
      name: "Javier Morales",
      role: "Gerente · Electrónicos del Valle",
      company: "Distribución de electrónicos",
      quote:
        "Lo que más me gusta es comparar precios al instante. Antes llamaba a 3 paqueterías y perdía media mañana. Ahora en 2 minutos ya sé cuál me conviene más. Me ahorro más del 50%.",
      rating: 5,
      avatar: "/mexican-entrepreneur.png",
    },
    {
      name: "Rosa María Hernández",
      role: "Fundadora · Dulces Tradicionales Oaxaca",
      company: "Productos artesanales",
      quote:
        "Mi hija me ayudó a configurarlo. Pensé que sería complicado, pero es súper fácil. Mis dulces llegan a todo México sin complicaciones. Imprimo la guía y ya.",
      rating: 5,
      avatar: "/mexican-woman-artisan.png",
    },
    {
      name: "Miguel Ángel Ruiz",
      role: "Coordinador de Envíos · LibrosMX",
      company: "Librería online",
      quote:
        "El cambio fue inmediato. Antes mi asistente se tardaba 20 minutos por envío, ahora ella sola procesa 15 envíos en el mismo tiempo. Increíble. Hasta tenemos recolección.",
      rating: 5,
      avatar: "/mexican-male-manager.png",
    },
    {
      name: "Patricia Sánchez",
      role: "Directora · Cosméticos Luna",
      company: "Belleza y cuidado",
      quote:
        "Mis clientas siempre preguntan por sus pedidos. Ahora les mando el tracking automáticamente y ya no me llaman tanto. Todos contentos.",
      rating: 5,
      avatar: "/mexican-woman-director.png",
    },
    {
      name: "Eduardo Vázquez",
      role: "Propietario · Suplementos Fitness Pro",
      company: "Nutrición deportiva",
      quote:
        "La diferencia de precios entre paqueterías es brutal. En envíos a Monterrey ahorro hasta $50 pesos por paquete. Al mes son varios miles de pesos. Más del 50% de ahorro real.",
      rating: 5,
      avatar: "/placeholder-l6va8.png",
    },
  ]

  return (
    <section id="testimonios" className="relative w-full py-16 md:py-20 overflow-hidden bg-white">
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
          className="pointer-events-none absolute top-1/4 right-1/4 h-16 w-16 rounded-full bg-[#59C5B3]/20 blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="pointer-events-none absolute bottom-1/3 left-1/4 h-20 w-20 rounded-full bg-[#59C5B3]/20 blur-2xl animate-bounce"
          style={{ animationDuration: "5s", animationDelay: "3s" }}
        />
        <div
          className="pointer-events-none absolute top-3/4 right-1/3 h-14 w-14 rounded-full bg-[#0F7A7E]/15 blur-xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#0F7A7E]/30 bg-[#0F7A7E]/10 px-4 py-2 text-sm font-medium text-[#0F7A7E] mb-4 animate-pulse">
            <Quote className="h-4 w-4" />
            Casos de éxito reales
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl bg-gradient-to-r from-[#0F7A7E] to-[#59C5B3] bg-clip-text text-transparent">
            Testimonios
          </h2>
          <p className="mt-3 text-brand-ink/70">
            Resultados medibles de empresas que transformaron su logística con nosotros.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((t, index) => (
            <Card
              key={t.name}
              className="group border-2 border-[#0F7A7E]/20 bg-white/95 backdrop-blur-sm transition-all duration-300 hover:translate-y-[-4px] hover:border-[#0F7A7E]/50 hover:shadow-xl hover:shadow-[#0F7A7E]/20 animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="relative pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <Image
                      src={t.avatar || "/placeholder.svg"}
                      alt={`Avatar de ${t.name}`}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full border-2 border-[#59C5B3]/30 group-hover:border-[#0F7A7E]/50 transition-colors duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-gradient-to-br from-[#0F7A7E] to-[#59C5B3] flex items-center justify-center">
                      <Quote className="h-2 w-2 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-brand-ink group-hover:text-[#0F7A7E] transition-colors duration-300">
                      {t.name}
                    </div>
                    <div className="text-xs text-brand-ink/70">{t.role}</div>
                    <div className="text-xs text-[#0F7A7E]/80 font-medium">{t.company}</div>
                  </div>
                </div>

                <div className="mb-3 flex text-amber-500" aria-hidden>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="text-brand-ink/80 group-hover:text-brand-ink transition-colors duration-300 pb-4">
                <p>&ldquo;{t.quote}&rdquo;</p>
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
      `}</style>
    </section>
  )
}
