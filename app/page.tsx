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
import PamexPartnership from "@/components/pamex-partnership"
import EntreperfumesPartnership from "@/components/entreperfumes-partnership"
import BlogSection from "@/components/blog-section"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <Showcase />
        <PamexPartnership />
        <EntreperfumesPartnership />
        <MetricsSection />
        <ClientsSection />
        <PartnersSection />
        <BlogSection />
        <Testimonials />

        {/* CTA Section - Modern dark style */}
        <section id="contacto" className="relative w-full py-20 md:py-28 overflow-hidden bg-gradient-to-br from-[#0B0A16] via-[#0F7A7E]/20 to-[#0B0A16]">
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0F7A7E]/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#59C5B3]/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#59C5B3]/30 bg-[#59C5B3]/10 px-4 py-2 text-sm font-medium text-[#59C5B3] mb-6">
                <Rocket className="h-4 w-4" />
                Comienza hoy mismo
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Tu encárgate de vender,
                <span className="block gradient-text">nosotros de la logística</span>
              </h2>

              <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Implementa en minutos y empieza a ahorrar hasta 60% desde tu primer envío. 
                Crédito, notificaciones automáticas, facturación y API incluidos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href="https://dashboard.guiasdigitales.mx" target="_blank">
                  <Button size="lg" className="bg-[#0F7A7E] hover:bg-[#0F7A7E]/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-[#0F7A7E]/25 hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                    Comenzar ahora gratis
                  </Button>
                </Link>
                <Link href="https://wa.me/523326398319?text=Hola%20me%20interesa%20Gu%C3%ADas%20Digitales%20MX" target="_blank">
                  <Button size="lg" variant="outline" className="border-white/20 text-white bg-white/5 hover:bg-white/10 px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                    Hablar con un asesor
                  </Button>
                </Link>
              </div>

              {/* Special case card */}
              <div className="relative max-w-xl mx-auto p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-[#F7A23B] flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-[#0B0A16]" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-white mb-1">¿Tienes un caso especial?</h4>
                    <p className="text-white/60">
                      Nuestro equipo te acompaña para resolverlo. 
                      <span className="text-[#59C5B3]"> Tecnología cuando quieres, personas cuando lo necesitas.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WhatsAppButton />
      </main>
      <Footer />
    </div>
  )
}
