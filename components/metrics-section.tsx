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
    <section className="relative w-full py-20 md:py-28 overflow-hidden bg-gradient-to-br from-[#0B0A16] via-[#0F7A7E]/20 to-[#0B0A16]">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#0F7A7E]/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-[#59C5B3]/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#59C5B3]/30 bg-[#59C5B3]/10 px-4 py-2 text-sm font-medium text-[#59C5B3] mb-6">
            <TrendingUp className="h-4 w-4" />
            Resultados medibles
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Números que
            <span className="block gradient-text">hablan por sí solos</span>
          </h2>
          <p className="text-lg text-white/60">
            La confianza de nuestros clientes se refleja en estas métricas reales.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric) => (
            <Card
              key={metric.label}
              className="group border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-[#0F7A7E] flex items-center justify-center text-white">
                    <metric.icon className="h-6 w-6" />
                  </div>
                  <div className="text-4xl font-bold text-white">
                    {metric.number}
                  </div>
                </div>
                <h3 className="font-semibold text-white mb-1">{metric.label}</h3>
                <p className="text-sm text-white/60">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/40 text-sm">
            * Métricas actualizadas mensualmente
          </p>
        </div>
      </div>
    </section>
  )
}
