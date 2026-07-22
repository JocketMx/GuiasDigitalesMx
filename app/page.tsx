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
import V2FeaturesSection from "@/components/v2-features-section"
import DashboardShowcaseV2 from "@/components/dashboard-showcase-v2"
import PremiumFeaturesV2 from "@/components/premium-features-v2"
import APIIntegrationsV2 from "@/components/api-integrations-v2"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <FAQSchema faqs={faqItems} />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <V2FeaturesSection />
        <DashboardShowcaseV2 />
        <Benefits />
        <Showcase />
        <AnalyticsFeature />
        <PremiumFeaturesV2 />
        <APIIntegrationsV2 />
        <PamexPartnership />
        <EntreperfumesPartnership />
        <MetricsSection />
        <ClientsSection />
        <PartnersSection />
        <BlogSection />
        <FAQSection />
        <Testimonials />

        {/* Animated logistics CTA — truck button linking to dashboard */}
        <section className="relative w-full py-12 md:py-16 overflow-hidden bg-white border-y border-[#0F7A7E]/8">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <a
                href="https://dashboard.guiasdigitales.mx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ir al dashboard de Guías Digitales MX"
                className="group relative flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl border-2 border-[#0F7A7E]/20 bg-gradient-to-br from-[#0F7A7E]/5 via-white to-[#59C5B3]/8 px-8 py-7 shadow-sm hover:border-[#0F7A7E]/50 hover:shadow-xl hover:shadow-[#0F7A7E]/15 transition-all duration-500 cursor-pointer"
              >
                {/* Road dashes — decorative */}
                <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden rounded-b-3xl">
                  <div className="h-full w-full bg-gradient-to-r from-transparent via-[#0F7A7E]/20 to-transparent" />
                </div>

                {/* Left: text */}
                <div className="text-center sm:text-left">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#0F7A7E]/60 mb-1">Plataforma lista</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0B0A16] leading-tight">
                    Tu próximo envío está a<br className="hidden sm:block" />
                    <span className="text-[#0F7A7E]"> un clic de distancia</span>
                  </h3>
                  <p className="mt-2 text-sm text-[#0B0A16]/55">Accede al dashboard y cotiza en segundos</p>
                </div>

                {/* Center: animated truck SVG */}
                <div className="relative flex items-center justify-center flex-shrink-0">
                  {/* Road track */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-[#0F7A7E]/15 rounded-full" />
                  {/* Pulsing glow behind truck */}
                  <div className="absolute inset-0 rounded-full bg-[#0F7A7E]/10 blur-xl scale-125 group-hover:scale-150 group-hover:bg-[#0F7A7E]/20 transition-all duration-700" />
                  <div
                    className="relative"
                    style={{ animation: "truckBounce 2.5s ease-in-out infinite" }}
                  >
                    <svg width="120" height="72" viewBox="0 0 120 72" fill="none" className="drop-shadow-md group-hover:drop-shadow-lg transition-all duration-300" aria-hidden="true">
                      {/* Truck body */}
                      <rect x="2" y="16" width="72" height="40" rx="5" fill="#0F7A7E" opacity="0.15" />
                      <rect x="2" y="16" width="72" height="40" rx="5" stroke="#0F7A7E" strokeWidth="2.5" />
                      {/* GDMX text on truck body */}
                      <text x="36" y="41" textAnchor="middle" fontSize="9" fontWeight="700" fill="#0F7A7E" opacity="0.7" fontFamily="sans-serif">GDMX</text>
                      {/* Cab */}
                      <path d="M74 26 L74 56 L106 56 L106 38 L96 26 Z" fill="#0F7A7E" opacity="0.22" stroke="#0F7A7E" strokeWidth="2.5" strokeLinejoin="round" />
                      {/* Cab window */}
                      <path d="M76 29 L76 48 L102 48 L102 38 L93 29 Z" fill="white" opacity="0.75" />
                      {/* Speed lines */}
                      <line x1="0" y1="32" x2="-14" y2="32" stroke="#59C5B3" strokeWidth="2" strokeLinecap="round" strokeDasharray="4,3" opacity="0.7" style={{ animation: "speedLine 1.2s linear infinite" }} />
                      <line x1="0" y1="40" x2="-20" y2="40" stroke="#59C5B3" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="6,4" opacity="0.5" style={{ animation: "speedLine 1.2s linear infinite 0.2s" }} />
                      <line x1="0" y1="48" x2="-10" y2="48" stroke="#59C5B3" strokeWidth="1" strokeLinecap="round" strokeDasharray="3,3" opacity="0.4" style={{ animation: "speedLine 1.2s linear infinite 0.4s" }} />
                      {/* Rear wheel */}
                      <circle cx="22" cy="59" r="11" fill="white" stroke="#0F7A7E" strokeWidth="2.5" />
                      <circle cx="22" cy="59" r="4.5" fill="#0F7A7E" opacity="0.25" />
                      {/* Front wheel */}
                      <circle cx="58" cy="59" r="11" fill="white" stroke="#0F7A7E" strokeWidth="2.5" />
                      <circle cx="58" cy="59" r="4.5" fill="#0F7A7E" opacity="0.25" />
                      {/* Cab wheel */}
                      <circle cx="94" cy="59" r="11" fill="white" stroke="#0F7A7E" strokeWidth="2.5" />
                      <circle cx="94" cy="59" r="4.5" fill="#0F7A7E" opacity="0.25" />
                      {/* Package on top of cab */}
                      <rect x="80" y="15" width="18" height="14" rx="2" fill="#F7A23B" opacity="0.85" stroke="#F7A23B" strokeWidth="1" />
                      <line x1="89" y1="15" x2="89" y2="29" stroke="white" strokeWidth="1" opacity="0.6" />
                      <line x1="80" y1="22" x2="98" y2="22" stroke="white" strokeWidth="1" opacity="0.6" />
                    </svg>
                  </div>
                </div>

                {/* Right: CTA arrow badge */}
                <div className="flex-shrink-0 flex items-center gap-3">
                  <div className="rounded-2xl bg-[#0F7A7E] px-6 py-3.5 text-white font-semibold text-base shadow-lg group-hover:bg-[#0C6467] group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                    Ir al Dashboard
                    <svg className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <style>{`
            @keyframes truckBounce {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-4px); }
            }
            @keyframes speedLine {
              0% { transform: translateX(0); opacity: 0.7; }
              100% { transform: translateX(-18px); opacity: 0; }
            }
          `}</style>
        </section>

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
                Tú encárgate de vender,
                <span className="block text-[#0F7A7E]">nosotros de la logística</span>
              </h2>

              <p className="text-lg md:text-xl text-[#0B0A16]/70 mb-8 max-w-2xl mx-auto">
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
                    <h4 className="text-lg font-semibold text-[#0B0A16] mb-1">¿Tienes un caso especial?</h4>
                    <p className="text-[#0B0A16]/70">
                      Nuestro equipo te acompaña para resolverlo. 
                      <span className="text-[#0F7A7E] font-medium"> Tecnología cuando quieres, personas cuando lo necesitas.</span>
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
