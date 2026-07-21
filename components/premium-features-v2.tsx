"use client"

import { MessageCircle, CreditCard, Code, BarChart3, CheckCircle, Zap } from "lucide-react"

export default function PremiumFeaturesV2() {
  const features = [
    {
      icon: MessageCircle,
      title: "Notificaciones WhatsApp en Tiempo Real",
      description:
        "Tus clientes reciben avisos automáticos en cada etapa del envío: creado, recolectado, en tránsito, entregado o con problemas. Ninguna otra plataforma lo ofrece con esta precisión.",
      highlight: true,
      color: "from-[#25D366]/10 to-[#25D366]/5",
    },
    {
      icon: CreditCard,
      title: "Gestión de Créditos y TDC",
      description:
        "Paga tus envíos con crédito flexible o directamente con tu tarjeta de crédito. Única en el mercado: gestiona tu línea de crédito, ve tu estado de cuenta y exporta en PDF.",
      highlight: true,
      color: "from-[#F7A23B]/10 to-[#F7A23B]/5",
    },
    {
      icon: Code,
      title: "API Completa y Funcional",
      description:
        "Integración directa con tu plataforma. Plugins ready-to-use para Shopify y WordPress. Instalación sin problemas en tu tienda online.",
      highlight: false,
      color: "from-[#0F7A7E]/10 to-[#59C5B3]/5",
    },
    {
      icon: BarChart3,
      title: "Métricas Inteligentes",
      description:
        "Dashboard con gráficos de actividad, envíos por paquetería, estados de envío, incidencias y más. Exporta reportes en PDF con tus movimientos.",
      highlight: false,
      color: "from-[#0F7A7E]/10 to-[#59C5B3]/5",
    },
    {
      icon: CheckCircle,
      title: "Verificación de Email",
      description:
        "Seguridad mejorada en cada cuenta. Validación obligatoria para proteger la información de tus clientes.",
      highlight: false,
      color: "from-[#0F7A7E]/10 to-[#59C5B3]/5",
    },
    {
      icon: Zap,
      title: "Facturación Automática en 1 Click",
      description:
        "Crea perfiles de facturación y factura automáticamente todos tus movimientos con un solo clic. Descarga en PDF instantáneamente.",
      highlight: false,
      color: "from-[#0F7A7E]/10 to-[#59C5B3]/5",
    },
  ]

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-br from-white via-[#0F7A7E]/2 to-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B0A16] mb-4">
            Características Premium de v2.0
          </h2>
          <p className="text-lg text-[#0B0A16]/60 max-w-2xl mx-auto">
            Funcionalidades revolucionarias que transformarán tu gestión de envíos
          </p>
        </div>

        <div className="grid gap-6 lg:gap-8">
          {/* Top row: 2 highlighted features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {features.slice(0, 2).map((feature, idx) => (
              <div
                key={idx}
                className={`relative group p-8 rounded-2xl border-2 border-[#0F7A7E]/20 bg-gradient-to-br ${feature.color} hover:border-[#0F7A7E]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#0F7A7E]/20`}
              >
                <div className="absolute -right-2 -top-2 inline-flex items-center gap-1 rounded-full bg-[#F7A23B] text-white px-3 py-1 text-xs font-bold">
                  <Zap className="h-3 w-3" />
                  Destacado
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-xl bg-[#0F7A7E] flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#0B0A16] mb-2">{feature.title}</h3>
                    <p className="text-[#0B0A16]/70 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row: 4 regular features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.slice(2).map((feature, idx) => (
              <div
                key={idx}
                className={`group p-6 rounded-2xl border border-[#0F7A7E]/10 bg-gradient-to-br ${feature.color} hover:border-[#0F7A7E]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#0F7A7E]/15 hover:-translate-y-1`}
              >
                <div className="flex flex-col gap-4">
                  <div className="h-12 w-12 rounded-xl bg-[#0F7A7E] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#0B0A16] mb-2">{feature.title}</h3>
                    <p className="text-sm text-[#0B0A16]/70 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
