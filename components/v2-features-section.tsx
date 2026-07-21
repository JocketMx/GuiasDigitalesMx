"use client"

import { Mail, MessageSquare, AlertTriangle, MessageCircle, Zap } from "lucide-react"
import V2Badge from "./v2-badge"

export default function V2FeaturesSection() {
  const features = [
    {
      icon: Mail,
      title: "Verificación de Email",
      description: "Seguridad mejorada con validación de correo electronico en cada cuenta",
    },
    {
      icon: MessageCircle,
      title: "Notificaciones WhatsApp",
      description: "Avisos en tiempo real a tus clientes sobre el estado de sus envios",
    },
    {
      icon: AlertTriangle,
      title: "Modulo de Incidencias",
      description: "Reporta y da seguimiento a problemas con paquetes de forma centralizada",
    },
    {
      icon: MessageSquare,
      title: "Chat en Linea",
      description: "Soporte inmediato con nuestro equipo disponible 24/7",
    },
  ]

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-br from-[#0F7A7E]/5 via-white to-[#59C5B3]/10">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <V2Badge />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B0A16] mb-4">
            Las características que pediste
          </h2>
          <p className="text-lg text-[#0B0A16]/60 max-w-2xl mx-auto">
            Hemos escuchado a nuestros clientes y construido una plataforma mas robusta, segura y conectada.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative p-6 rounded-2xl border border-[#0F7A7E]/10 bg-white hover:border-[#0F7A7E]/30 hover:shadow-xl hover:shadow-[#0F7A7E]/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col gap-4">
                <div className="h-12 w-12 rounded-xl bg-[#0F7A7E]/10 flex items-center justify-center text-[#0F7A7E] group-hover:bg-[#0F7A7E] group-hover:text-white transition-all duration-300">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#0B0A16] group-hover:text-[#0F7A7E] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#0B0A16]/60 mt-2">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
