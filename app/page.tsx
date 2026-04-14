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
import FAQSection, { faqItems } from "@/components/faq-section"
import { FAQSchema } from "@/lib/schema-components"
import AnalyticsFeature from "@/components/analytics-feature"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <FAQSchema faqs={faqItems} />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <Showcase />
        <AnalyticsFeature />
        <PamexPartnership />
        <EntreperfumesPartnership />
        <MetricsSection />
        <ClientsSection />
        <PartnersSection />
        <BlogSection />
        <FAQSection />
        <Testimonials />

        {/* CTA Section - Clean light style */}
        <section id="contacto" className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-br from-[#0F7A7E]/5 via-white to-[#59C5B3]/10">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-10 w-64 h-64 bg-[#0F7A7E]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#59C5B3]/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0F7A7E]/30 bg-[#0F7A7E]/10 px-4 py-2 text-sm font-medium text-[#0F7A7E] mb-6">
                <Rocket className="h-4 w-4" />
                Comienza hoy mismo
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0A16] mb-6 leading-tight">
                Tu encargate de vender,
                <span className="block text-[#0F7A7E]">nosotros de la logistica</span>
              </h2>

              <p className="text-lg md:text-xl text-[#0B0A16]/70 mb-8 max-w-2xl mx-auto">
                Implementa en minutos y empieza a ahorrar hasta 60% desde tu primer envio. 
                Credito, notificaciones automaticas, facturacion y API incluidos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href="https://dashboard.guiasdigitales.mx" target="_blank">
                  <Button size="lg" className="bg-[#0F7A7E] hover:bg-[#0F7A7E]/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-[#0F7A7E]/25 hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                    Comenzar ahora gratis
                  </Button>
                </Link>
                <Link href="https://wa.me/523326398319?text=Hola%20me%20interesa%20Gu%C3%ADas%20Digitales%20MX" target="_blank">
                  <Button size="lg" className="bg-[#F7A23B] text-[#0B0A16] hover:bg-[#F7A23B]/90 px-8 py-6 text-lg rounded-xl shadow-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                    Hablar con un asesor
                  </Button>
                </Link>
              </div>

              {/* Special case card */}
              <div className="relative max-w-xl mx-auto p-6 rounded-2xl border border-[#0F7A7E]/20 bg-white shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-[#F7A23B] flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-[#0B0A16]" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-[#0B0A16] mb-1">Tienes un caso especial?</h4>
                    <p className="text-[#0B0A16]/70">
                      Nuestro equipo te acompana para resolverlo. 
                      <span className="text-[#0F7A7E] font-medium"> Tecnologia cuando quieres, personas cuando lo necesitas.</span>
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
