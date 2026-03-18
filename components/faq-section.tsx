'use client'

import type { FC } from 'react'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: '¿Cuánto puedo ahorrar usando Guías Digitales MX?',
    answer: 'Nuestros usuarios ahorran hasta un 60% en costos de envío comparado con tarifas públicas. Los vendedores certificados de nuestras alianzas (PAMEX, Entre Perfumes) obtienen descuentos aún mayores desde el primer envío.',
  },
  {
    question: '¿Cuál es el proceso para crear una guía?',
    answer: 'Es muy simple: 1) Ingresa los datos del remitente y destinatario, 2) Selecciona el tipo de envío, 3) El sistema calcula automáticamente el costo con todas las paqueterías disponibles, 4) Elige la que prefieras, 5) Genera y descarga la guía en PDF.',
  },
  {
    question: '¿Con cuántas paqueterías trabajamos?',
    answer: 'Integramos 7 paqueterías principales: DHL Express, FedEx, Estafeta, UPS, Paquetexpress, AMPM y 99 Minutos. Esto te permite comparar precios y elegir la mejor opción para cada envío.',
  },
  {
    question: '¿Tiene costo la plataforma?',
    answer: 'No, la plataforma es completamente gratuita. Pagamos solo por cada guía que generes. Recibes crédito inicial para probar sin compromiso.',
  },
  {
    question: '¿Cómo funciona el rastreo en tiempo real?',
    answer: 'Una vez creada la guía, recibiras notificaciones automáticas del estado del envío. Puedes rastrear desde nuestro dashboard o darle el link a tu cliente para que vea el progreso 24/7.',
  },
  {
    question: '¿Puedo integrar la plataforma con mi tienda online?',
    answer: 'Sí, tenemos integraciones directas con Shopify, WooCommerce, Magento y otras plataformas. También disponemos de APIs REST y GraphQL para integraciones personalizadas.',
  },
  {
    question: '¿Qué es el módulo de incidencias?',
    answer: 'Es una herramienta para reportar problemas con envíos (retrasos, daños, pérdidas). El sistema documenta todo automáticamente y coordina con la paquetería para resolver rápidamente.',
  },
  {
    question: '¿Tienen facturación automática?',
    answer: 'Sí, el sistema genera facturas automáticas para cada guía o por período. Los vendedores certificados reciben facturación integrada con sus reportes de ahorro.',
  },
]

const FAQSection: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white via-[#0F7A7E]/5 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0F7A7E]/30 bg-[#0F7A7E]/10 px-4 py-2 text-sm font-medium text-[#0F7A7E] mb-4">
              Preguntas frecuentes
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0A16] mb-4">
              Todo lo que necesitas saber
            </h2>
            <p className="text-lg text-[#0B0A16]/70">
              Respuestas a las preguntas más comunes sobre Guías Digitales MX
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-[#0F7A7E]/20 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#0F7A7E]/5 transition-colors text-left"
                >
                  <h3 className="font-semibold text-[#0B0A16] text-lg">{item.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-[#0F7A7E] flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-4 border-t border-[#0F7A7E]/20">
                    <p className="text-[#0B0A16]/70 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#0F7A7E]/10 to-[#59C5B3]/10 border border-[#0F7A7E]/20">
            <p className="text-center text-[#0B0A16]/70 mb-4">
              ¿No encontraste lo que buscas?
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://wa.me/523326398319"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-lg bg-[#0F7A7E] text-white font-medium hover:bg-[#0F7A7E]/90 transition-colors"
              >
                Contactar soporte
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
export { faqItems }
