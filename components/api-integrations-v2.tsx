"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap, CheckCircle } from "lucide-react"

export default function APIIntegrationsV2() {
  const integrations = [
    {
      name: "Shopify",
      iconUrl: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/shopify/default.svg",
      description: "Integra directamente con tu tienda Shopify. Genera guías automáticamente desde tus órdenes.",
      features: ["Sincronización automática", "Gestión de inventario", "Etiquetas de envío", "Rastreo integrado"],
    },
    {
      name: "WordPress / WooCommerce",
      iconUrl: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/woocommerce/default.svg",
      description: "Plugin compatible con WooCommerce. Funciona en cualquier sitio WordPress con tienda online.",
      features: ["Configuración en minutos", "Sin código necesario", "Soporte 24/7", "Actualizaciones automáticas"],
    },
  ]

  const benefits = [
    {
      icon: Code,
      title: "API REST Completa",
      description: "Documentación detallada y SDKs en múltiples lenguajes para desarrolladores",
    },
    {
      icon: Zap,
      title: "Instalación Sin Problemas",
      description: "Nuestro equipo se encarga de la instalación y configuración en tu tienda",
    },
    {
      icon: CheckCircle,
      title: "Soporte Técnico Dedicado",
      description: "Asistencia especial para asegurar que todo funcione perfectamente",
    },
  ]

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-br from-[#0F7A7E]/5 via-white to-[#59C5B3]/10">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B0A16] mb-4">
            Integraciones Listas para Usar
          </h2>
          <p className="text-lg text-[#0B0A16]/60 max-w-2xl mx-auto">
            Conecta con tus plataformas favoritas y automatiza tus envíos desde el primer día
          </p>
        </div>

        {/* Integration Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {integrations.map((integration, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-2xl border border-[#0F7A7E]/10 bg-white hover:border-[#0F7A7E]/30 hover:shadow-xl hover:shadow-[#0F7A7E]/10 transition-all duration-300"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="h-16 w-16 rounded-xl bg-white border border-[#0F7A7E]/20 flex items-center justify-center flex-shrink-0 shadow-sm p-3">
                  <img
                    src={integration.iconUrl}
                    alt={integration.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0B0A16]">{integration.name}</h3>
                  <p className="text-[#0B0A16]/60 mt-1">{integration.description}</p>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {integration.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2 text-[#0B0A16]">
                    <CheckCircle className="h-5 w-5 text-[#0F7A7E]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="/documentacion">
                <Button className="w-full bg-[#0F7A7E] hover:bg-[#0F7A7E]/90 text-white">
                  <Code className="h-4 w-4 mr-2" />
                  Ver Documentación
                  <ArrowRight className="h-4 w-4 ml-auto" />
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-br from-[#0F7A7E]/10 to-[#59C5B3]/10 rounded-3xl p-8 border border-[#0F7A7E]/20">
          <h3 className="text-2xl font-bold text-[#0B0A16] mb-8 text-center">Por qué elegir nuestras integraciones</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="h-14 w-14 rounded-full bg-[#0F7A7E] flex items-center justify-center text-white mx-auto mb-4">
                  <benefit.icon className="h-7 w-7" />
                </div>
                <h4 className="font-semibold text-[#0B0A16] mb-2">{benefit.title}</h4>
                <p className="text-[#0B0A16]/60">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-[#0B0A16]/60 mb-6">¿Necesitas una integración personalizada?</p>
          <Button size="lg" className="bg-[#0F7A7E] hover:bg-[#0F7A7E]/90 text-white">
            Contacta a Nuestro Equipo Técnico
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
