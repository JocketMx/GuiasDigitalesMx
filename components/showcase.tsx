"use client"

import { Monitor, Smartphone, Tag, Printer, Clock, Code, Truck, MapPin, Shield, Zap } from "lucide-react"

export default function Showcase() {
  const features = [
    { icon: Tag, title: "60% de ahorro", desc: "En tarifas vs. precio de mostrador" },
    { icon: Clock, title: "1 minuto", desc: "De cotizacion a guia impresa" },
    { icon: Printer, title: "Super facil", desc: "Imprime tu guia y listo" },
    { icon: Code, title: "API disponible", desc: "Conecta tu tienda online" },
  ]

  const capabilities = [
    { icon: Truck, title: "7 paqueterias", desc: "DHL, FedEx, UPS, Estafeta, Paquetexpress, AMPM, 99 Minutos" },
    { icon: MapPin, title: "Cobertura nacional", desc: "Envios a todo Mexico, incluyendo zonas remotas" },
    { icon: Shield, title: "Seguros incluidos", desc: "Proteccion para tus envios de alto valor" },
    { icon: Zap, title: "Soporte 24/7", desc: "Atencion personalizada cuando lo necesites" },
  ]

  return (
    <section id="plataforma" className="relative w-full py-16 md:py-24 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] to-white" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0F7A7E]/20 bg-[#0F7A7E]/5 px-4 py-2 text-sm font-medium text-[#0F7A7E] mb-6">
            <Monitor className="h-4 w-4" />
            <Smartphone className="h-4 w-4" />
            Interfaz intuitiva
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B0A16] mb-4">
            Plataforma disenada para
            <span className="block text-[#0F7A7E]">decidir rapido</span>
          </h2>
          <p className="text-lg text-[#0B0A16]/60 max-w-2xl mx-auto">
            Menos clics, mas control y visibilidad total de tus envios.
          </p>
        </div>

        {/* Stats principales */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl border border-[#0F7A7E]/10 bg-white hover:border-[#0F7A7E]/30 hover:shadow-xl hover:shadow-[#0F7A7E]/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-[#0F7A7E]/10 flex items-center justify-center text-[#0F7A7E] group-hover:bg-[#0F7A7E] group-hover:text-white transition-all duration-300">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#0B0A16] group-hover:text-[#0F7A7E] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#0B0A16]/60">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Capacidades */}
        <div className="bg-gradient-to-br from-[#0F7A7E]/5 to-[#59C5B3]/5 rounded-3xl p-8 border border-[#0F7A7E]/10">
          <h3 className="text-xl font-bold text-[#0B0A16] mb-6 text-center">Por que elegirnos</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap) => (
              <div key={cap.title} className="text-center">
                <div className="h-14 w-14 rounded-full bg-[#0F7A7E] flex items-center justify-center text-white mx-auto mb-3">
                  <cap.icon className="h-7 w-7" />
                </div>
                <h4 className="font-semibold text-[#0B0A16] mb-1">{cap.title}</h4>
                <p className="text-sm text-[#0B0A16]/60">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
