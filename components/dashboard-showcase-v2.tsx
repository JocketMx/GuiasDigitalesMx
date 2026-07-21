"use client"

import Image from "next/image"
import { useState } from "react"
import { FileText, BarChart3, CreditCard, Package, AlertTriangle, Shield, Truck, Bell } from "lucide-react"

type TabType = "guias" | "seguros" | "billetera" | "recolecciones" | "incidencias" | "facturacion" | "notificaciones" | "cotizaciones"

export default function DashboardShowcaseV2() {
  const [activeTab, setActiveTab] = useState<TabType>("guias")

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: "guias", label: "Guías", icon: <FileText className="h-4 w-4" /> },
    { id: "seguros", label: "Seguros", icon: <Shield className="h-4 w-4" /> },
    { id: "billetera", label: "Billetera", icon: <CreditCard className="h-4 w-4" /> },
    { id: "recolecciones", label: "Recolecciones", icon: <Truck className="h-4 w-4" /> },
    { id: "incidencias", label: "Incidencias", icon: <AlertTriangle className="h-4 w-4" /> },
    { id: "facturacion", label: "Facturación", icon: <FileText className="h-4 w-4" /> },
    { id: "notificaciones", label: "Notificaciones", icon: <Bell className="h-4 w-4" /> },
    { id: "cotizaciones", label: "Cotizaciones", icon: <BarChart3 className="h-4 w-4" /> },
  ]

  const descriptions: Record<TabType, { title: string; subtitle: string; features: string[] }> = {
    guias: {
      title: "Gestión de Guías",
      subtitle: "Resumen completo de todos tus envíos",
      features: ["1,445 guías totales", "261 en tránsito", "90 entregadas", "Control total del estado"],
    },
    seguros: {
      title: "Módulo de Seguros",
      subtitle: "Protege tus envíos de alto valor",
      features: ["1,441 seguros emitidos", "Cobertura activa: $5,658,945", "Valor del producto protegido", "Coberturas por envío"],
    },
    billetera: {
      title: "Mi Billetera y Movimientos",
      subtitle: "Gestiona créditos y pagos",
      features: [
        "Créditos consumidos y disponibles",
        "Pagar deuda con Tarjeta de Crédito",
        "Línea de crédito flexible",
        "Estado de cuenta en PDF",
      ],
    },
    recolecciones: {
      title: "Recolecciones",
      subtitle: "Programa recolecciones especificando cantidad de paquetes",
      features: ["Especifica cantidad de paquetes", "Horario flexible", "Rastreo de recolecciones", "Historial completo"],
    },
    incidencias: {
      title: "Módulo de Incidencias",
      subtitle: "Reporta y da seguimiento a problemas",
      features: ["Crea incidencias en segundos", "Seguimiento del estado", "Información del paquete", "Soporte técnico"],
    },
    facturacion: {
      title: "Facturación Automática",
      subtitle: "Factura en línea con 1 solo clic",
      features: ["Perfiles de facturación", "Facturas automáticas", "Exporta en PDF", "Registro completo"],
    },
    notificaciones: {
      title: "Notificaciones en Tiempo Real",
      subtitle: "Avisos automáticos a tus clientes",
      features: [
        "WhatsApp y Email en tiempo real",
        "Cuando se crea el envío",
        "Cuando se recolecta",
        "Cuando se entrega",
      ],
    },
    cotizaciones: {
      title: "Cotizador Inteligente",
      subtitle: "Compara precios de múltiples paqueterías",
      features: ["8+ paqueterías disponibles", "Precios en tiempo real", "Entregas estimadas", "Envío en menos de 1 minuto"],
    },
  }

  const imageMap: Record<TabType, string> = {
    guias: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202026-07-21%20a%20la%28s%29%2013.27.24-dexnn2qjgZoZrkcFPQoofHQiWkYfdM.png",
    seguros: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202026-07-21%20a%20la%28s%29%2013.28.06-yIxbRf3yW7oWFgokn7MoUYMIpv49fW.png",
    billetera: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202026-07-21%20a%20la%28s%29%2013.31.13-BtkOAcDTv2qluSGYb6DiBAAt8Nyaar.png",
    recolecciones: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202026-07-21%20a%20la%28s%29%2013.29.39-BrL4Wei755DPBCQHHm4u2H4GLkADIv.png",
    incidencias: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202026-07-21%20a%20la%28s%29%2013.30.56-XEh5z4XLT3hyvVsioeNOqa04edDv4U.png",
    facturacion: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202026-07-21%20a%20la%28s%29%2013.32.34-aPbvLhrphRfXnNtWWcKk3ogW0rA6lh.png",
    notificaciones: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-16%20at%2010.28.06-txrQAuLF6CVNipQcKyxeQFAX6kNks5.jpeg",
    cotizaciones: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202026-07-21%20a%20la%28s%29%2013.26.09-uR5DERlblHUt8hY6QKClqvapuIVNKcv.png",
  }

  const current = descriptions[activeTab]

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B0A16] mb-4">
            Dashboard completamente rediseñado
          </h2>
          <p className="text-lg text-[#0B0A16]/60 max-w-2xl mx-auto">
            Explora todos los módulos de la nueva plataforma v2.0
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[#0F7A7E] text-white shadow-lg shadow-[#0F7A7E]/30"
                  : "bg-white text-[#0B0A16] border border-[#0F7A7E]/20 hover:border-[#0F7A7E]/40"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Features */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0B0A16] mb-3">{current.title}</h3>
            <p className="text-lg text-[#0B0A16]/60 mb-6">{current.subtitle}</p>
            <ul className="space-y-3">
              {current.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#0F7A7E] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <span className="text-sm font-semibold">✓</span>
                  </div>
                  <span className="text-[#0B0A16]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Screenshot */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#0F7A7E]/20 border border-[#0F7A7E]/10 bg-[#F5F5F5]">
              <Image
                src={imageMap[activeTab]}
                alt={current.title}
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
