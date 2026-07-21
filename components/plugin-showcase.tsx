"use client"

import { useState } from "react"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

type Platform = "shopify" | "woocommerce"

const platforms = {
  shopify: {
    label: "Shopify",
    logo: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/shopify/default.svg",
    accent: "#95BF47",
    intro:
      "Instala la app de Guías Digitales en tu tienda Shopify y genera guías paso a paso directamente desde cada pedido, sin salir del panel de administración.",
    steps: [
      {
        img: "/images/plugins/shopify-config.jpeg",
        title: "Configuración inicial",
        desc: "Conecta tu cuenta ingresando la API URL y tu API Key. Define compañía, servicio, dirección de origen y paquete por defecto, y valida la conexión con un clic.",
      },
      {
        img: "/images/plugins/shopify-step1.jpeg",
        title: "Paso 1 · Resumen de la orden",
        desc: "Desde cualquier pedido abres el asistente 'Crear guía' que te muestra el número de orden, cliente y dirección destino para confirmar los datos.",
      },
      {
        img: "/images/plugins/shopify-step2.jpeg",
        title: "Paso 2 · Origen y paquete",
        desc: "Eliges la dirección de origen entre tus direcciones guardadas y seleccionas el paquete con sus dimensiones y peso predefinidos.",
      },
      {
        img: "/images/plugins/shopify-step4.jpeg",
        title: "Paso 4 · Cotización",
        desc: "El sistema cotiza automáticamente con la paquetería configurada y te muestra el servicio y precio antes de generar la guía.",
      },
      {
        img: "/images/plugins/shopify-step5.jpeg",
        title: "Paso 5 · Guía generada",
        desc: "Recibes la confirmación con el número de tracking, empresa, servicio y costo, además del acceso directo para ver y descargar el PDF.",
      },
      {
        img: "/images/plugins/shopify-order-block.jpeg",
        title: "Guía dentro del pedido",
        desc: "Cada orden guarda un bloque con la información de la guía asociada: tracking, empresa, servicio, costo y el botón 'Ver PDF' siempre a la mano.",
      },
    ],
  },
  woocommerce: {
    label: "WordPress / WooCommerce",
    logo: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/woocommerce/default.svg",
    accent: "#7F54B3",
    intro:
      "Nuestro plugin para WooCommerce se integra en el panel de tus pedidos de WordPress para cotizar, generar y administrar guías sin instalar nada adicional.",
    steps: [
      {
        img: "/images/plugins/woocommerce-settings.jpeg",
        title: "Ajustes de API",
        desc: "Configura API URL, API Key, paquetería, servicio, IDs de origen y paquete, y el identificador de método con seguro. El estado de cuenta muestra tu saldo en tiempo real.",
      },
      {
        img: "/images/plugins/woocommerce-generate-modal.jpeg",
        title: "Generar guía de envío",
        desc: "Desde el pedido abres el modal que carga la dirección de origen, el paquete y el destino. Activas notificación al destinatario y el seguro del envío antes de cotizar o generar.",
      },
      {
        img: "/images/plugins/woocommerce-order-guide.jpeg",
        title: "Guía creada en el pedido",
        desc: "La guía queda anclada al pedido con tracking, destino, datos del paquete y cargo. Descargas el PDF, la regeneras o actualizas el estatus con un clic.",
      },
    ],
  },
} as const

export default function PluginShowcase() {
  const [active, setActive] = useState<Platform>("shopify")
  const current = platforms[active]

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex flex-col sm:flex-row justify-center gap-3 mb-10">
        {(Object.keys(platforms) as Platform[]).map((key) => {
          const p = platforms[key]
          const isActive = key === active
          return (
            <button
              key={key}
              type="button"
              onClick={() => setActive(key)}
              className={`flex items-center gap-3 rounded-xl border px-5 py-3 min-h-11 font-semibold transition-all ${
                isActive
                  ? "border-[#0F7A7E] bg-white shadow-md text-[#0B0A16]"
                  : "border-[#0F7A7E]/15 bg-white/60 text-[#0B0A16]/60 hover:border-[#0F7A7E]/40"
              }`}
            >
              <span className="h-7 w-7 flex items-center justify-center">
                <img src={p.logo || "/placeholder.svg"} alt={p.label} className="h-full w-full object-contain" />
              </span>
              {p.label}
            </button>
          )
        })}
      </div>

      {/* Intro */}
      <p className="text-center text-[#0B0A16]/60 max-w-2xl mx-auto mb-10 leading-relaxed">
        {current.intro}
      </p>

      {/* Steps grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {current.steps.map((step, idx) => (
          <div
            key={idx}
            className="flex flex-col rounded-2xl border border-[#0F7A7E]/12 bg-white overflow-hidden shadow-sm hover:shadow-lg hover:shadow-[#0F7A7E]/10 transition-all duration-300"
          >
            <div className="relative w-full bg-[#F4F6F8] border-b border-[#0F7A7E]/10 p-3">
              <Image
                src={step.img || "/placeholder.svg"}
                alt={step.title}
                width={640}
                height={420}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="p-5 flex flex-col gap-2 flex-1">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-[#0F7A7E] flex-shrink-0 mt-0.5" />
                <h3 className="font-semibold text-[#0B0A16] leading-snug">{step.title}</h3>
              </div>
              <p className="text-sm text-[#0B0A16]/60 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
