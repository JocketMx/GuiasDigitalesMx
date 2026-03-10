"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Zap, Package, Percent, Clock, MapPin, Truck, AlertCircle } from "lucide-react"
import { useState, useEffect } from "react"

const screenshots = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202026-03-10%20a%20la%28s%29%2010.22.29-N4N29JDRaVId0UwPe34dSnDbPE2NYf.png",
    alt: "Cotizador de guias - Compara precios de paqueterias",
    label: "Cotizador"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202026-03-10%20a%20la%28s%29%2010.23.37-mJVNlKMIaoG1l3t7AOHrrsAJ9CKFlt.png",
    alt: "Historial de guias - Estatus en tiempo real",
    label: "Rastreo"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202026-03-10%20a%20la%28s%29%2010.22.47-myhxSys564dhEKqWEDYIF3dnG6Q0I8.png",
    alt: "Validador de zonas remotas",
    label: "Zonas"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202026-03-10%20a%20la%28s%29%2010.25.56-HWXYJU2H2tgDorG5hVGj8WbgyylYnw.png",
    alt: "Modulo de incidencias",
    label: "Incidencias"
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const features = [
    { icon: MapPin, text: "Estatus en tiempo real" },
    { icon: Truck, text: "Recolecciones a domicilio" },
    { icon: AlertCircle, text: "Modulo de incidencias" },
    { icon: Zap, text: "API para tiendas online" },
  ]

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-br from-white via-[#0F7A7E]/5 to-[#59C5B3]/10">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#0F7A7E]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#59C5B3]/10 rounded-full blur-3xl" />
      </div>

      <div className="absolute top-4 right-4 z-30 hidden md:block">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#0F7A7E]/20 bg-white/80 backdrop-blur-sm px-4 py-2 text-sm text-[#0F7A7E] shadow-sm">
          <span className="text-lg">🇲🇽</span>
          <span className="font-medium">Empresa 100% Mexicana, orgullosamente Tapatia</span>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0F7A7E]/30 bg-[#0F7A7E]/10 px-4 py-2 text-sm text-[#0F7A7E] font-medium">
                <ShieldCheck className="h-4 w-4" />
                <span>12 anos de experiencia</span>
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

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B0A16] leading-[1.1]">
                La plataforma
                <span className="block text-[#0F7A7E]">completa de envios</span>
                para tu negocio
              </h1>
              <p className="text-lg md:text-xl text-[#0B0A16]/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Cotiza, compara y genera guias 24/7. Con estatus en tiempo real, recolecciones, 
                modulo de incidencias y API para conectar tus tiendas.
              </p>
            </div>

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

          {/* Right column - Screenshot Carousel */}
          <div className="relative hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0F7A7E]/20 to-[#59C5B3]/20 rounded-2xl blur-xl" />
              
              {/* Screenshot carousel */}
              <div className="relative rounded-2xl border-2 border-[#0F7A7E]/20 bg-white p-2 shadow-2xl overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white">
                  {screenshots.map((screenshot, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out flex items-center justify-center bg-white ${
                        index === currentSlide 
                          ? "opacity-100 translate-x-0" 
                          : index < currentSlide 
                            ? "opacity-0 -translate-x-full" 
                            : "opacity-0 translate-x-full"
                      }`}
                    >
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt}
                        fill
                        className="object-contain object-center"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>
                
                {/* Slide indicators */}
                <div className="flex items-center justify-center gap-2 mt-3 pb-1">
                  {screenshots.map((screenshot, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`transition-all duration-300 ${
                        index === currentSlide 
                          ? "bg-[#0F7A7E] px-4 py-1 rounded-full" 
                          : "bg-[#0F7A7E]/20 w-2 h-2 rounded-full hover:bg-[#0F7A7E]/40"
                      }`}
                    >
                      {index === currentSlide && (
                        <span className="text-white text-xs font-medium">{screenshot.label}</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Floating stats cards */}
              <div className="absolute -left-6 top-1/4 rounded-xl border border-[#0F7A7E]/20 bg-white p-4 shadow-xl animate-bounce" style={{ animationDuration: "3s" }}>
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

              <div className="absolute -right-4 bottom-1/4 rounded-xl border border-[#F7A23B]/30 bg-white p-4 shadow-xl animate-bounce" style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}>
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
