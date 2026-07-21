"use client"

import Image from "next/image"
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
          {/* Top row: WhatsApp (wide) + Credits (normal) */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* WhatsApp card — spans 3 cols, includes real screenshot */}
            <div className="lg:col-span-3 relative group rounded-2xl border-2 border-[#25D366]/30 bg-gradient-to-br from-[#25D366]/10 to-[#25D366]/5 hover:border-[#25D366]/60 transition-all duration-300 hover:shadow-xl hover:shadow-[#25D366]/20 overflow-hidden">
              {/* Badge — same position as Credits card */}
              <div className="absolute -right-2 -top-2 inline-flex items-center gap-1 rounded-full bg-[#F7A23B] text-white px-3 py-1 text-xs font-bold z-10">
                <Zap className="h-3 w-3" />
                Destacado
              </div>
              <div className="flex flex-col md:flex-row items-stretch gap-0">
                {/* Text side */}
                <div className="p-8 flex flex-col justify-center md:w-1/2">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-14 w-14 rounded-xl bg-[#25D366] flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                      <MessageCircle className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0B0A16] mb-2">Notificaciones WhatsApp en Tiempo Real</h3>
                      <p className="text-[#0B0A16]/70 leading-relaxed text-sm">
                        Tus clientes reciben avisos automáticos en cada etapa del envío: creado, recolectado, en tránsito y entregado. Ninguna otra plataforma lo ofrece con esta precisión.
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-2">
                    {["Envío creado con número de guía", "Envío recolectado por paquetería", "Envío en tránsito hacia destino", "Envío entregado correctamente"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-[#0B0A16]/80">
                        <div className="h-4 w-4 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-[9px] font-bold">✓</span>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Screenshot side */}
                <div className="md:w-1/2 relative bg-[#ECE5DD] flex items-center justify-center p-3 min-h-[280px]">
                  <div className="relative w-full max-w-[260px] rounded-xl overflow-hidden shadow-xl border border-black/10">
                    <Image
                      src="/images/whatsapp-notifications.jpeg"
                      alt="Notificaciones WhatsApp automáticas de Guías Digitales MX"
                      width={520}
                      height={984}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Credits card — spans 2 cols, with payment screenshot */}
            <div className="lg:col-span-2 relative group rounded-2xl border-2 border-[#0F7A7E]/20 bg-gradient-to-br from-[#F7A23B]/10 to-[#F7A23B]/5 hover:border-[#0F7A7E]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#0F7A7E]/20 overflow-hidden">
              <div className="absolute -right-2 -top-2 inline-flex items-center gap-1 rounded-full bg-[#F7A23B] text-white px-3 py-1 text-xs font-bold z-10">
                <Zap className="h-3 w-3" />
                Destacado
              </div>
              <div className="flex flex-col h-full">
                {/* Text section */}
                <div className="p-8 pb-4">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-14 w-14 rounded-xl bg-[#0F7A7E] flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CreditCard className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0B0A16] mb-2">Gestión de Créditos y TDC</h3>
                      <p className="text-[#0B0A16]/70 leading-relaxed text-sm">
                        Paga tus envíos con crédito flexible o con tarjeta. Gestiona tu línea de crédito, ve tu estado de cuenta y exporta en PDF.
                      </p>
                    </div>
                  </div>
                  {/* Payment methods */}
                  <div className="mt-3">
                    <p className="text-xs font-semibold text-[#0B0A16]/50 uppercase tracking-wider mb-2">Métodos de pago aceptados</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      {/* Visa */}
                      <div className="h-7 bg-white rounded-md border border-black/10 px-1.5 flex items-center">
                        <img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/visa/default.svg" alt="Visa" className="h-4 w-auto" />
                      </div>
                      {/* Mastercard */}
                      <div className="h-7 bg-white rounded-md border border-black/10 px-1.5 flex items-center">
                        <img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/mastercard/default.svg" alt="Mastercard" className="h-4 w-auto" />
                      </div>
                      {/* Amex */}
                      <div className="h-7 bg-white rounded-md border border-black/10 px-1.5 flex items-center">
                        <img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/american-express/default.svg" alt="American Express" className="h-4 w-auto" />
                      </div>
                      {/* Apple Pay */}
                      <div className="h-7 bg-black rounded-md border border-black/10 px-2 flex items-center">
                        <img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/apple-pay/light.svg" alt="Apple Pay" className="h-3.5 w-auto" />
                      </div>
                      {/* Google Pay */}
                      <div className="h-7 bg-white rounded-md border border-black/10 px-1.5 flex items-center">
                        <img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/google-pay/default.svg" alt="Google Pay" className="h-4 w-auto" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Screenshot */}
                <div className="flex-1 relative bg-[#F5F5F7] flex items-end justify-center pt-2 px-6 min-h-[200px]">
                  <div className="relative w-full max-w-[220px] rounded-t-xl overflow-hidden shadow-xl border border-black/10 border-b-0">
                    <Image
                      src="/images/payment-tdc.png"
                      alt="Pantalla de pago con tarjeta en Guías Digitales MX"
                      width={572}
                      height={1084}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
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
