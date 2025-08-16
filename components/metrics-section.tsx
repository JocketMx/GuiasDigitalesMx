"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Clock, Package, Users, Zap, Shield } from "lucide-react"

export default function MetricsSection() {
  const metrics = [
    {
      icon: Package,
      number: "1.5M+",
      label: "Envíos entregados",
      description: "Paquetes exitosamente distribuidos",
      color: "from-[#0F7A7E] to-[#59C5B3]",
    },
    {
      icon: Clock,
      number: "4 min",
      label: "Tiempo promedio",
      description: "De cotización a guía lista",
      color: "from-[#59C5B3] to-[#0F7A7E]",
    },
    {
      icon: TrendingUp,
      number: "85%",
      label: "Ahorro de tiempo",
      description: "vs. proceso manual tradicional",
      color: "from-[#0F7A7E] to-[#59C5B3]",
    },
    {
      icon: Users,
      number: "200+",
      label: "Empresas activas",
      description: "Confían en nuestra plataforma",
      color: "from-[#59C5B3] to-[#0F7A7E]",
    },
    {
      icon: Zap,
      number: "24/7",
      label: "Disponibilidad",
      description: "Plataforma siempre activa",
      color: "from-[#0F7A7E] to-[#59C5B3]",
    },
    {
      icon: Shield,
      number: "99.9%",
      label: "Confiabilidad",
      description: "Uptime de la plataforma",
      color: "from-[#59C5B3] to-[#0F7A7E]",
    },
  ]

  return (
    <section className="relative w-full py-16 md:py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50/50">
      {/* Marco decorativo animado */}
      <div className="absolute inset-4 -z-10 rounded-3xl border-2 border-[#0F7A7E]/20 bg-gradient-to-br from-[#0F7A7E]/5 via-transparent to-[#59C5B3]/5 overflow-hidden">
        <div className="absolute inset-4 rounded-2xl border border-[#59C5B3]/30 animate-pulse" />

        {/* Elementos decorativos contenidos */}
        <div
          className="pointer-events-none absolute top-4 left-4 h-32 w-32 rounded-full bg-[#59C5B3]/25 blur-3xl animate-bounce"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="pointer-events-none absolute bottom-4 right-4 h-32 w-32 rounded-full bg-[#0F7A7E]/30 blur-3xl animate-bounce"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#0F7A7E]/30 bg-[#0F7A7E]/10 px-4 py-2 text-sm font-medium text-[#0F7A7E] mb-4 animate-pulse">
            <TrendingUp className="h-4 w-4" />
            Resultados medibles
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl bg-gradient-to-r from-[#0F7A7E] to-[#59C5B3] bg-clip-text text-transparent">
            Números que hablan por sí solos
          </h2>
          <p className="mt-3 text-brand-ink/70">
            La confianza de nuestros clientes se refleja en estas métricas reales.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric, index) => (
            <Card
              key={metric.label}
              className="group border-2 border-[#0F7A7E]/20 bg-white/95 backdrop-blur-sm transition-all duration-300 hover:translate-y-[-4px] hover:border-[#0F7A7E]/50 hover:shadow-xl hover:shadow-[#0F7A7E]/20 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 relative">
                {/* Icono con gradiente */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${metric.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <metric.icon className="h-6 w-6" />
                  </div>
                  {/* Elemento decorativo */}
                  <div
                    className={`h-2 w-16 rounded-full bg-gradient-to-r ${metric.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                </div>

                {/* Número principal */}
                <div className="mb-2">
                  <div
                    className={`text-3xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 inline-block`}
                  >
                    {metric.number}
                  </div>
                </div>

                {/* Label y descripción */}
                <div className="space-y-1">
                  <h3 className="font-semibold text-brand-ink group-hover:text-[#0F7A7E] transition-colors duration-300">
                    {metric.label}
                  </h3>
                  <p className="text-sm text-brand-ink/70 group-hover:text-brand-ink/90 transition-colors duration-300">
                    {metric.description}
                  </p>
                </div>

                {/* Línea decorativa animada */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${metric.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Texto adicional */}
        <div className="mt-12 text-center">
          <p className="text-brand-ink/60 text-sm">
            * Métricas actualizadas mensualmente · Datos de los últimos 12 meses
          </p>
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
