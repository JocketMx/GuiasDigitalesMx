"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Headphones, Lock, Rocket, Truck, Zap, CreditCard, Bell, FileText, Code } from "lucide-react"

export default function Benefits() {
  const items = [
    {
      icon: CreditCard,
      title: "Crédito para tu negocio",
      desc: "Genera guías a crédito y paga después. Impulsa tu operación sin descapitalizarte.",
      highlight: true,
    },
    {
      icon: Bell,
      title: "Notificaciones automáticas",
      desc: "Tus clientes reciben actualizaciones por correo y WhatsApp en tiempo real.",
      highlight: true,
    },
    {
      icon: FileText,
      title: "Facturación en línea",
      desc: "Genera tus facturas directamente desde la plataforma. Rápido y sin complicaciones.",
      highlight: true,
    },
    {
      icon: Code,
      title: "API para tiendas online",
      desc: "Conecta Shopify, WooCommerce o tu tienda y automatiza todo el proceso de envíos.",
      highlight: true,
    },
    {
      icon: Zap,
      title: "Ahorro del 60%",
      desc: "Accede a tarifas preferenciales con las principales paqueterías del país.",
      highlight: false,
    },
    {
      icon: Clock,
      title: "Guía en 1 minuto",
      desc: "De cotización a guía impresa en menos de 60 segundos. Sin pasos innecesarios.",
      highlight: false,
    },
    {
      icon: Truck,
      title: "Múltiples paqueterías",
      desc: "DHL, FedEx, Estafeta, UPS y más. Compara y elige la mejor opción.",
      highlight: false,
    },
    {
      icon: Headphones,
      title: "Soporte humano experto",
      desc: "Acompañamiento de GDMX Logistics cuando surgen envíos complejos.",
      highlight: false,
    },
  ]

  return (
    <section id="beneficios" className="relative w-full py-20 md:py-28 overflow-hidden bg-[#FAFAFA]">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%230F7A7E%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0F7A7E]/20 bg-[#0F7A7E]/5 px-4 py-2 text-sm font-medium text-[#0F7A7E] mb-6">
            <Zap className="h-4 w-4" />
            Plataforma completa
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B0A16] mb-4">
            Todo lo que necesitas para
            <span className="block gradient-text">escalar tus envíos</span>
          </h2>
          <p className="text-lg text-[#0B0A16]/60 max-w-2xl mx-auto">
            12 años de experiencia en logística, ahora en una plataforma digital con las herramientas más avanzadas del mercado.
          </p>
        </div>

        {/* Featured items - New features */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {items.filter(it => it.highlight).map((it, index) => (
            <Card
              key={it.title}
              className="group relative overflow-hidden border-0 bg-gradient-to-br from-[#0F7A7E] to-[#0F7A7E]/90 text-white shadow-xl hover:shadow-2xl hover:shadow-[#0F7A7E]/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              <CardHeader className="relative pb-2">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  <it.icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-xl text-white">
                  {it.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/80 relative">
                {it.desc}
              </CardContent>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#59C5B3]" />
            </Card>
          ))}
        </div>

        {/* Regular items */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.filter(it => !it.highlight).map((it, index) => (
            <Card
              key={it.title}
              className="group border border-[#0F7A7E]/10 bg-white hover:border-[#0F7A7E]/30 hover:shadow-lg hover:shadow-[#0F7A7E]/10 transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="pb-2">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0F7A7E]/10 text-[#0F7A7E] mb-3 group-hover:bg-[#0F7A7E] group-hover:text-white transition-all duration-300">
                  <it.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg text-[#0B0A16] group-hover:text-[#0F7A7E] transition-colors">
                  {it.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-[#0B0A16]/60">
                {it.desc}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
