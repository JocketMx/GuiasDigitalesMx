"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Target, Rocket } from "lucide-react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Benefits from "@/components/benefits"
import Showcase from "@/components/showcase"
import Testimonials from "@/components/testimonials"
import WhatsAppButton from "@/components/whatsapp-button"
import ClientsSection from "@/components/clients-section"
import Footer from "@/components/footer"
import PartnersSection from "@/components/partners-section"
import MetricsSection from "@/components/metrics-section"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <Showcase />
        <Testimonials />
        <MetricsSection />
        <ClientsSection />
        <PartnersSection />

        {/* Sección de contacto estilizada - solo verde */}
        <section id="contacto" className="relative w-full py-16 md:py-20 overflow-hidden bg-white">
          {/* Marco decorativo animado - solo verde */}
          <div className="absolute inset-4 -z-10 rounded-3xl border-2 border-[#0F7A7E]/20 bg-gradient-to-br from-[#0F7A7E]/5 via-transparent to-[#59C5B3]/5 overflow-hidden">
            <div className="absolute inset-4 rounded-2xl border border-[#59C5B3]/30 animate-pulse" />

            {/* Elementos decorativos contenidos - solo verde */}
            <div
              className="pointer-events-none absolute top-4 left-4 h-32 w-32 rounded-full bg-[#59C5B3]/25 blur-3xl animate-bounce"
              style={{ animationDuration: "3s" }}
            />
            <div
              className="pointer-events-none absolute bottom-4 right-4 h-32 w-32 rounded-full bg-[#59C5B3]/30 blur-3xl animate-bounce"
              style={{ animationDuration: "4s", animationDelay: "1s" }}
            />
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0F7A7E]/20 blur-2xl animate-pulse" />

            {/* Elementos decorativos adicionales - solo verde */}
            <div
              className="pointer-events-none absolute top-1/4 right-1/4 h-16 w-16 rounded-full bg-[#59C5B3]/20 blur-2xl animate-pulse"
              style={{ animationDelay: "2s" }}
            />
            <div
              className="pointer-events-none absolute bottom-1/3 left-1/4 h-20 w-20 rounded-full bg-[#59C5B3]/20 blur-2xl animate-bounce"
              style={{ animationDuration: "5s", animationDelay: "3s" }}
            />
          </div>

          <div className="container mx-auto grid items-center gap-8 px-4 md:grid-cols-2 relative z-10">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#0F7A7E]/30 bg-[#0F7A7E]/10 px-4 py-2 text-sm font-medium text-[#0F7A7E] mb-4 animate-pulse">
                <Target className="h-4 w-4" />
                Comienza hoy mismo
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0F7A7E] to-[#59C5B3] text-white shadow-lg animate-bounce"
                  style={{ animationDuration: "2s" }}
                >
                  <Rocket className="h-6 w-6" />
                </div>
                <h3 className="text-3xl font-bold tracking-tight text-brand-ink md:text-4xl bg-gradient-to-r from-[#0F7A7E] to-[#59C5B3] bg-clip-text text-transparent">
                  Tu encárgate de vender, nosotros solucionamos tu logística.
                </h3>
              </div>

              <p className="text-lg text-brand-ink/80">
                Implementa en minutos y empieza a ahorrar desde tu primer envío. Plataforma 24/7 con respaldo humano.
                <span className="font-semibold text-[#0F7A7E]"> Ahorra más del 50% en cada envío.</span>
              </p>

              <div
                className="flex flex-col gap-3 sm:flex-row sm:flex-wrap animate-fade-in-up"
                style={{ animationDelay: "200ms" }}
              >
                <Link href="https://gdmx.mx/dashboard" target="_blank">
                  <Button
                    size="lg"
                    className="bg-[#0F7A7E] hover:bg-[#17A2A6] text-white transition-all duration-300 hover:scale-105"
                  >
                    Ir a la Plataforma
                  </Button>
                </Link>
                <Link href="mailto:hola@guiasdigitales.mx">
                  <Button
                    size="lg"
                    className="bg-[#F7A23B] text-[#0B0A16] hover:bg-[#E89529] transition-all duration-300 hover:scale-105"
                  >
                    Escríbenos
                  </Button>
                </Link>
                <Link
                  href="https://wa.me/523326398319?text=Hola%20me%20interesa%20Gu%C3%ADas%20Digitales%20MX"
                  target="_blank"
                >
                  <Button
                    size="lg"
                    className="bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-all duration-300 hover:scale-105"
                  >
                    WhatsApp
                  </Button>
                </Link>
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              <div className="relative p-8 rounded-2xl border-2 border-[#0F7A7E]/30 bg-gradient-to-br from-white/95 to-[#59C5B3]/5 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#0F7A7E]/50">
                {/* Elemento decorativo en la esquina */}
                <div className="absolute top-4 right-4 h-3 w-3 rounded-full bg-gradient-to-br from-[#0F7A7E] to-[#59C5B3] animate-pulse"></div>

                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-[#0F7A7E] mb-3">¿Tienes un caso especial?</h4>
                  <p className="text-lg text-brand-ink/90 leading-relaxed">
                    Nuestro equipo te acompaña para resolverlo.
                    <span className="block mt-2 font-medium text-[#0F7A7E]">
                      Tecnología cuando quieres, personas cuando lo necesitas.
                    </span>
                  </p>
                </div>

                {/* Borde inferior decorativo */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0F7A7E] to-[#59C5B3] rounded-b-2xl opacity-60"></div>
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes fade-in-up {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fade-in-up {
              animation: fade-in-up 0.6s ease-out forwards;
              opacity: 0;
            }
          `}</style>
        </section>

        <WhatsAppButton />
      </main>
      <Footer />
    </div>
  )
}
