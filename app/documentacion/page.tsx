import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowLeft, Code, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Documentación API | Guías Digitales MX",
  description: "Documentación de la API de Guías Digitales MX. Próximamente disponible. Contáctanos por WhatsApp para soporte técnico.",
}

export default function DocumentacionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-[#0F7A7E]/5 to-[#59C5B3]/10 flex flex-col items-center justify-center px-4 py-16">

      {/* Back link */}
      <div className="absolute top-6 left-6">
        <Link href="/" className="inline-flex items-center gap-2 text-[#0F7A7E] hover:text-[#0F7A7E]/80 transition-colors text-sm font-medium">
          <ArrowLeft className="h-4 w-4" />
          Regresar al inicio
        </Link>
      </div>

      <div className="max-w-2xl w-full text-center space-y-8">

        {/* Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="h-24 w-24 rounded-2xl bg-[#0F7A7E] flex items-center justify-center shadow-2xl shadow-[#0F7A7E]/30">
              <Code className="h-12 w-12 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-[#F7A23B] flex items-center justify-center shadow-lg">
              <Clock className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#F7A23B]/40 bg-[#F7A23B]/10 px-5 py-2 text-sm font-semibold text-[#F7A23B]">
          <Clock className="h-4 w-4" />
          Proximamente
        </div>

        {/* Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B0A16] tracking-tight">
            Documentación API
            <span className="block text-[#0F7A7E]">en construccion</span>
          </h1>
          <p className="text-lg text-[#0B0A16]/60 max-w-lg mx-auto leading-relaxed">
            Estamos preparando una documentación completa y detallada de nuestra API REST para que puedas integrar Guías Digitales con cualquier sistema.
          </p>
        </div>

        {/* Features coming */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          {[
            { title: "API REST", desc: "Endpoints documentados con ejemplos" },
            { title: "SDKs", desc: "Librerías para JS, PHP, Python y más" },
            { title: "Webhooks", desc: "Eventos en tiempo real para tu app" },
          ].map((item) => (
            <div
              key={item.title}
              className="p-4 rounded-xl border border-[#0F7A7E]/15 bg-white shadow-sm"
            >
              <p className="font-semibold text-[#0B0A16] text-sm">{item.title}</p>
              <p className="text-xs text-[#0B0A16]/55 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#0F7A7E]/15" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-sm text-[#0B0A16]/40">Mientras tanto</span>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="bg-white rounded-2xl border border-[#0F7A7E]/15 p-8 shadow-sm space-y-4">
          <p className="text-[#0B0A16] font-semibold text-lg">
            ¿Necesitas integrarte ahora?
          </p>
          <p className="text-[#0B0A16]/60">
            Nuestro equipo tecnico esta disponible para ayudarte directamente por WhatsApp. Te guiamos paso a paso con tu integracion.
          </p>
          <Link
            href="https://wa.me/523312345678?text=Hola,%20necesito%20ayuda%20con%20la%20integraci%C3%B3n%20de%20la%20API%20de%20Gu%C3%ADas%20Digitales"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#25D366]/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-[#25D366]/25 hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contactar por WhatsApp
            </Button>
          </Link>
        </div>

      </div>
    </main>
  )
}
