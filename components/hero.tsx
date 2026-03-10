"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Zap, Package, Percent, CreditCard, Bell, FileText, Code, Clock } from "lucide-react"

export default function Hero() {
  const features = [
    { icon: CreditCard, text: "Crédito para tu negocio" },
    { icon: Bell, text: "Notificaciones automáticas" },
    { icon: FileText, text: "Facturación en línea" },
    { icon: Code, text: "API para tiendas online" },
  ]

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0B0A16] via-[#0F7A7E]/20 to-[#0B0A16] pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0F7A7E]/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#59C5B3]/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#0F7A7E]/10 to-[#59C5B3]/10 rounded-full blur-3xl" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%230F7A7E%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
      </div>

      {/* Badge de empresa mexicana */}
      <div className="absolute top-24 right-4 z-30 animate-fade-in hidden md:block" style={{ animationDelay: "1s" }}>
        <div className="inline-flex items-center gap-2 rounded-full border border-[#59C5B3]/30 bg-white/5 backdrop-blur-xl px-4 py-2 text-sm text-white/90">
          <span className="text-lg">🇲🇽</span>
          <span className="font-medium">Empresa 100% Mexicana, orgullosamente Tapatía</span>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Stats badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start animate-slide-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#59C5B3]/40 bg-[#59C5B3]/10 px-4 py-2 text-sm text-[#59C5B3]">
                <ShieldCheck className="h-4 w-4" />
                <span>12 años de experiencia</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#F7A23B]/40 bg-[#F7A23B]/10 px-4 py-2 text-sm text-[#F7A23B] font-semibold">
                <Percent className="h-4 w-4" />
                <span>Ahorra hasta 60%</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#59C5B3]/40 bg-[#59C5B3]/10 px-4 py-2 text-sm text-[#59C5B3]">
                <Clock className="h-4 w-4" />
                <span>Guía en 1 minuto</span>
              </div>
            </div>

            {/* Main heading */}
            <div className="space-y-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                La plataforma
                <span className="block gradient-text">completa de envíos</span>
                para tu negocio
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Cotiza, compara y genera guías 24/7. Con crédito, notificaciones automáticas, 
                facturación en línea y API para conectar tus tiendas.
              </p>
            </div>

            {/* Feature pills */}
            <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-3 text-sm text-white/80 hover:bg-white/10 hover:border-[#59C5B3]/30 transition-all duration-300"
                >
                  <feature.icon className="h-4 w-4 text-[#59C5B3] flex-shrink-0" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Link href="https://dashboard.guiasdigitales.mx" target="_blank">
                <Button size="lg" className="bg-[#0F7A7E] hover:bg-[#0F7A7E]/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-[#0F7A7E]/25 hover:shadow-xl hover:shadow-[#0F7A7E]/30 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                  Comenzar ahora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="#beneficios">
                <Button size="lg" variant="outline" className="border-[#F7A23B] text-[#F7A23B] bg-[#F7A23B]/10 hover:bg-[#F7A23B] hover:text-[#0B0A16] px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                  Ver beneficios
                  <Zap className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>

            {/* Logos */}
            <div className="flex items-center gap-6 justify-center lg:justify-start pt-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <Image
                src="/images/logo-gdmx-transparent.png"
                alt="GDMX Logistics"
                width={120}
                height={80}
                className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity invert"
              />
              <div className="h-8 w-px bg-white/20" />
              <Image
                src="/images/logo_guias_hero.png"
                alt="Guías Digitales MX"
                width={120}
                height={80}
                className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity invert"
              />
            </div>
          </div>

          {/* Right column - Visual */}
          <div className="relative animate-slide-up hidden lg:block" style={{ animationDelay: "0.5s" }}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0F7A7E]/30 to-[#59C5B3]/30 rounded-2xl blur-2xl animate-glow" />
              
              {/* Main image */}
              <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-2 shadow-2xl">
                <Image
                  src="/images/login-hero.png"
                  alt="Plataforma Guías Digitales MX"
                  width={800}
                  height={600}
                  className="rounded-xl w-full h-auto"
                  priority
                />
              </div>

              {/* Floating stats cards */}
              <div className="absolute -left-8 top-1/4 rounded-xl border border-white/10 bg-[#0B0A16]/90 backdrop-blur-xl p-4 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[#0F7A7E] flex items-center justify-center">
                    <Package className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">1.5M+</div>
                    <div className="text-xs text-white/60">Envíos entregados</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/4 rounded-xl border border-white/10 bg-[#0B0A16]/90 backdrop-blur-xl p-4 shadow-xl animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[#F7A23B] flex items-center justify-center">
                    <Percent className="h-5 w-5 text-[#0B0A16]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">60%</div>
                    <div className="text-xs text-white/60">Ahorro promedio</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile badge */}
        <div className="mt-8 text-center lg:hidden animate-slide-up" style={{ animationDelay: "0.5s" }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#59C5B3]/30 bg-white/5 backdrop-blur-xl px-4 py-2 text-sm text-white/90">
            <span className="text-lg">🇲🇽</span>
            <span>100% Mexicana, orgullosamente Tapatía</span>
          </div>
        </div>
      </div>
    </section>
  )
}
