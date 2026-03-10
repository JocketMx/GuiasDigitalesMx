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
      number: "1 min",
      label: "Tiempo promedio",
      description: "De cotización a guía lista",
      color: "from-[#59C5B3] to-[#0F7A7E]",
    },
    {
      icon: TrendingUp,
      number: "60%",
      label: "Ahorro garantizado",
      description: "vs. tarifas tradicionales",
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
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-[#0F7A7E]">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white mb-6">
            <TrendingUp className="h-4 w-4" />
            Resultados medibles
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Numeros que hablan por si solos
          </h2>
          <p className="text-lg text-white/80">
            La confianza de nuestros clientes se refleja en estas metricas reales.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric) => (
            <Card
              key={metric.label}
              className="group border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center text-[#0F7A7E]">
                    <metric.icon className="h-6 w-6" />
                  </div>
                  <div className="text-4xl font-bold text-white">
                    {metric.number}
                  </div>
                </div>
                <h3 className="font-semibold text-white mb-1">{metric.label}</h3>
                <p className="text-sm text-white/70">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/60 text-sm">
            * Metricas actualizadas mensualmente
          </p>
        </div>
      </div>
    </section>
  )
}
