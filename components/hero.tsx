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
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-br from-white via-[#0F7A7E]/5 to-[#59C5B3]/10">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#0F7A7E]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#59C5B3]/10 rounded-full blur-3xl" />
      </div>

      {/* Badge de empresa mexicana */}
      <div className="absolute top-4 right-4 z-30 hidden md:block">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#0F7A7E]/20 bg-white/80 backdrop-blur-sm px-4 py-2 text-sm text-[#0F7A7E] shadow-sm">
          <span className="text-lg">🇲🇽</span>
          <span className="font-medium">Empresa 100% Mexicana, orgullosamente Tapatia</span>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left column - Content */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Stats badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0F7A7E]/30 bg-[#0F7A7E]/10 px-4 py-2 text-sm text-[#0F7A7E] font-medium">
                <ShieldCheck className="h-4 w-4" />
                <span>12 años de experiencia</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#F7A23B]/40 bg-[#F7A23B]/10 px-4 py-2 text-sm text-[#F7A23B] font-semibold">
                <Percent className="h-4 w-4" />
                <span>Ahorra hasta 60%</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0F7A7E]/30 bg-[#0F7A7E]/10 px-4 py-2 text-sm text-[#0F7A7E] font-medium">
                <Clock className="h-4 w-4" />
                <span>Guia en 1 minuto</span>
              </div>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B0A16] leading-[1.1]">
                La plataforma
                <span className="block text-[#0F7A7E]">completa de envios</span>
                para tu negocio
              </h1>
              <p className="text-lg md:text-xl text-[#0B0A16]/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Cotiza, compara y genera guias 24/7. Con credito, notificaciones automaticas, 
                facturacion en linea y API para conectar tus tiendas.
              </p>
            </div>

            {/* Feature pills */}
            <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto lg:mx-0">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 rounded-xl border border-[#0F7A7E]/20 bg-white px-4 py-3 text-sm text-[#0B0A16]/80 shadow-sm hover:shadow-md hover:border-[#0F7A7E]/40 transition-all duration-300"
                >
                  <feature.icon className="h-4 w-4 text-[#0F7A7E] flex-shrink-0" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="https://dashboard.guiasdigitales.mx" target="_blank">
                <Button size="lg" className="bg-[#0F7A7E] hover:bg-[#0F7A7E]/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-[#0F7A7E]/25 hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                  Comenzar ahora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="#beneficios">
                <Button size="lg" className="bg-[#F7A23B] text-[#0B0A16] hover:bg-[#F7A23B]/90 px-8 py-6 text-lg rounded-xl shadow-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                  Ver beneficios
                  <Zap className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>

            {/* Logos */}
            <div className="flex items-center gap-6 justify-center lg:justify-start pt-4">
              <Image
                src="/images/logo-gdmx-transparent.png"
                alt="GDMX Logistics"
                width={120}
                height={80}
                className="h-10 w-auto"
              />
              <div className="h-8 w-px bg-[#0B0A16]/20" />
              <Image
                src="/images/logo_guias_hero.png"
                alt="Guias Digitales MX"
                width={120}
                height={80}
                className="h-8 w-auto"
              />
            </div>
          </div>

          {/* Right column - Visual */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0F7A7E]/20 to-[#59C5B3]/20 rounded-2xl blur-xl" />
              
              {/* Main image */}
              <div className="relative rounded-2xl border-2 border-[#0F7A7E]/20 bg-white p-2 shadow-2xl">
                <Image
                  src="/images/login-hero.png"
                  alt="Plataforma Guias Digitales MX"
                  width={800}
                  height={600}
                  className="rounded-xl w-full h-auto"
                  priority
                />
              </div>

              {/* Floating stats cards */}
              <div className="absolute -left-6 top-1/4 rounded-xl border border-[#0F7A7E]/20 bg-white p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[#0F7A7E] flex items-center justify-center">
                    <Package className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#0B0A16]">1.5M+</div>
                    <div className="text-xs text-[#0B0A16]/60">Envios entregados</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/4 rounded-xl border border-[#F7A23B]/30 bg-white p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[#F7A23B] flex items-center justify-center">
                    <Percent className="h-5 w-5 text-[#0B0A16]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#0B0A16]">60%</div>
                    <div className="text-xs text-[#0B0A16]/60">Ahorro promedio</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile badge */}
        <div className="mt-8 text-center lg:hidden">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0F7A7E]/20 bg-white/80 backdrop-blur-sm px-4 py-2 text-sm text-[#0F7A7E]">
            <span className="text-lg">🇲🇽</span>
            <span>100% Mexicana, orgullosamente Tapatia</span>
          </div>
        </div>
      </div>
    </section>
  )
}
