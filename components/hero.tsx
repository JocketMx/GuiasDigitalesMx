"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Plane, Package, Percent } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative w-full py-14 md:py-20 overflow-hidden bg-white">
      {/* Marco decorativo animado */}
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
          className="pointer-events-none absolute bottom-1/4 left-1/4 h-20 w-20 rounded-full bg-[#59C5B3]/20 blur-2xl animate-bounce"
          style={{ animationDuration: "5s", animationDelay: "3s" }}
        />
      </div>

      {/* Badge de empresa mexicana - esquina superior derecha */}
      <div className="absolute top-6 right-6 z-30 animate-fade-in-up" style={{ animationDelay: "1s" }}>
        <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#0F7A7E]/40 bg-white/95 backdrop-blur-sm px-3 py-1.5 text-xs text-[#0F7A7E] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <span className="text-sm">🇲🇽</span>
          <span className="font-semibold">Empresa 100% Mexicana, orgullosamente Tapatía</span>
        </div>
      </div>

      <div className="container mx-auto grid gap-10 px-4 md:grid-cols-2 md:items-center relative z-10">
        <div className="space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#59C5B3]/50 bg-white px-3 py-1 text-xs text-[#0F7A7E] shadow-sm animate-pulse">
            <ShieldCheck className="h-3.5 w-3.5" />
            12 años impulsando logística en México
          </div>

          {/* Badge de descuento - verde */}
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#0F7A7E]/50 bg-[#0F7A7E]/10 px-3 py-1 text-xs text-[#0F7A7E] font-semibold shadow-sm animate-pulse">
            <Percent className="h-3.5 w-3.5" />
            Ahorra más del 50% en tus envíos
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0F7A7E] to-[#59C5B3] text-white shadow-lg animate-bounce"
              style={{ animationDuration: "2s" }}
            >
              <Plane className="h-6 w-6" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-brand-ink sm:text-5xl bg-gradient-to-r from-[#0F7A7E] to-[#59C5B3] bg-clip-text text-transparent">
              Envíos inteligentes para negocios reales
            </h1>
          </div>

          <p className="text-lg text-brand-ink/80">
            Convierte tu logística en una ventaja competitiva: cotiza, compara y crea guías 24/7 con el respaldo humano
            de GDMX Logistics. <span className="font-semibold text-[#0F7A7E]">Imprime tu guía y ya.</span>
          </p>

          {/* Botones y logos: cada columna contiene su botón y su logo centrados */}
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Columna 1: Ir a la Plataforma + logo GDMX */}
            <div className="flex flex-col items-center gap-3 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <Link href="https://gdmx.mx/dashboard" target="_blank">
                <Button
                  size="lg"
                  className="bg-[#0F7A7E] hover:bg-[#17A2A6] text-white transition-all duration-300 hover:scale-105"
                >
                  Ir a la Plataforma <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Image
                src="/images/logo-gdmx-transparent.png"
                alt="GDMX Logistics"
                width={160}
                height={120}
                className="h-11 w-auto md:h-12 transition-transform duration-300 hover:scale-105"
                priority={false}
              />
            </div>

            {/* Columna 2: Ver beneficios + logo Guías Digitales - MANTENER NARANJA */}
            <div className="flex flex-col items-center gap-3 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              <a href="#beneficios">
                <Button
                  size="lg"
                  className="bg-[#F7A23B] text-[#0B0A16] hover:bg-[#E89529] focus-visible:ring-[#F7A23B]/30 transition-all duration-300 hover:scale-105"
                >
                  Ver beneficios <Package className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Image
                src="/images/logo_guias_hero.png"
                alt="Guías Digitales MX"
                width={160}
                height={120}
                className="h-9 w-auto md:h-10 transition-transform duration-300 hover:scale-105"
                priority={false}
              />
            </div>
          </div>
        </div>

        {/* Imagen derecha: screenshot de Inicio de sesión */}
        <div className="relative animate-fade-in-up" style={{ animationDelay: "600ms" }}>
          <div className="relative mx-auto w-full max-w-[560px] overflow-visible">
            <Image
              src="/images/login-hero.png"
              alt="Inicio de sesión · Guías Digitales MX"
              width={1600}
              height={1000}
              className="h-auto w-full rounded-xl border-2 border-[#59C5B3]/30 bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#0F7A7E]/20 hover:scale-[1.02]"
              priority
            />
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
  )
}
