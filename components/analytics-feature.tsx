"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BarChart3, PieChart, TrendingUp, Calendar, Package, Shield, AlertTriangle, CheckCircle, Sparkles } from "lucide-react"

export default function AnalyticsFeature() {
  const metrics = [
    { 
      icon: Package, 
      title: "Guias generadas", 
      desc: "Total de envios creados por periodo",
      color: "bg-[#0F7A7E]"
    },
    { 
      icon: Shield, 
      title: "Seguros emitidos", 
      desc: "Guias con proteccion adicional",
      color: "bg-[#F7A23B]"
    },
    { 
      icon: PieChart, 
      title: "Estados de envio", 
      desc: "Distribucion: entregado, en transito, excepcion",
      color: "bg-[#59C5B3]"
    },
    { 
      icon: AlertTriangle, 
      title: "Incidencias", 
      desc: "Seguimiento de problemas activos y resueltos",
      color: "bg-red-500"
    },
  ]

  const features = [
    "Filtra por 7, 30 o 90 dias",
    "Selecciona rangos personalizados",
    "Resolucion diaria, semanal o mensual",
    "Exporta reportes en PDF",
    "Graficas interactivas en tiempo real",
    "Desglose por paqueteria",
  ]

  return (
    <section id="metricas" className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white to-[#0F7A7E]/5">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F7A23B]/30 bg-[#F7A23B]/10 px-4 py-2 text-sm font-medium text-[#F7A23B] mb-6">
            <Sparkles className="h-4 w-4" />
            Nueva funcion
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B0A16] mb-4">
            Metricas avanzadas
            <span className="block text-[#0F7A7E]">para tu negocio</span>
          </h2>
          <p className="text-lg text-[#0B0A16]/60 max-w-2xl mx-auto">
            Monitorea guias, seguros, ganancias, estados de envio e incidencias por periodo. 
            Toma decisiones informadas con datos en tiempo real.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left: Screenshots */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#0F7A7E]/20 border border-[#0F7A7E]/10">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202026-04-14%20a%20la%28s%29%209.10.04-HwpXrNWNZOFCnf7DBxuOv6pHTM8Usl.png"
                alt="Panel de metricas - Guias generadas y seguros emitidos"
                width={600}
                height={400}
                className="w-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 rounded-xl overflow-hidden shadow-xl border border-[#0F7A7E]/20 bg-white">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202026-04-14%20a%20la%28s%29%209.10.44-SERTWcfk1v2UrZ2iQvVpuIxMajUasw.png"
                alt="Grafica de estados de envio"
                width={256}
                height={200}
                className="w-full"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#F7A23B]/20 rounded-full blur-2xl" />
          </div>

          {/* Right: Features */}
          <div>
            <h3 className="text-2xl font-bold text-[#0B0A16] mb-6">
              Todo lo que necesitas saber de tus envios
            </h3>
            
            {/* Metrics cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {metrics.map((metric) => (
                <div
                  key={metric.title}
                  className="group p-4 rounded-xl border border-[#0F7A7E]/10 bg-white hover:border-[#0F7A7E]/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className={`h-10 w-10 rounded-lg ${metric.color} flex items-center justify-center text-white flex-shrink-0`}>
                      <metric.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0B0A16] text-sm">{metric.title}</h4>
                      <p className="text-xs text-[#0B0A16]/60">{metric.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Features list */}
            <div className="bg-[#0F7A7E]/5 rounded-xl p-6 border border-[#0F7A7E]/10">
              <h4 className="font-semibold text-[#0B0A16] mb-4 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-[#0F7A7E]" />
                Caracteristicas incluidas
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#0F7A7E] flex-shrink-0" />
                    <span className="text-sm text-[#0B0A16]/70">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="https://dashboard.guiasdigitales.mx" target="_blank">
            <Button size="lg" className="bg-[#0F7A7E] hover:bg-[#0F7A7E]/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-[#0F7A7E]/25 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <TrendingUp className="mr-2 h-5 w-5" />
              Acceder a mis metricas
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
