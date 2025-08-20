"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Headphones, Zap, CheckCircle, Star, Award, Clock, Users, MessageCircle } from "lucide-react"

export default function EntreperfumesPartnership() {
  const benefits = [
    {
      icon: Zap,
      title: "Respuesta inmediata",
      desc: "Soporte prioritario para vendedores certificados EP",
    },
    {
      icon: Headphones,
      title: "Soporte personalizado",
      desc: "Línea directa con especialistas en logística de perfumes",
    },
    {
      icon: Shield,
      title: "Manejo especializado",
      desc: "Experiencia específica en envío seguro de fragancias",
    },
    {
      icon: Award,
      title: "Tarifas preferenciales",
      desc: "Descuentos exclusivos para la comunidad EP",
    },
  ]

  return (
    <section className="relative w-full py-16 md:py-20 overflow-hidden bg-gradient-to-b from-gray-50/30 to-white">
      {/* Marco decorativo animado - colores especiales para EP */}
      <div className="absolute inset-4 -z-10 rounded-3xl border-2 border-[#0F7A7E]/20 bg-gradient-to-br from-[#0F7A7E]/5 via-transparent to-[#59C5B3]/8 overflow-hidden">
        <div className="absolute inset-4 rounded-2xl border border-[#59C5B3]/40 animate-gentle-glow" />

        {/* Elementos decorativos contenidos - tonos verdes */}
        <div
          className="pointer-events-none absolute top-4 left-4 h-32 w-32 rounded-full bg-[#59C5B3]/25 blur-3xl animate-bounce"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="pointer-events-none absolute bottom-4 right-4 h-32 w-32 rounded-full bg-[#0F7A7E]/20 blur-3xl animate-bounce"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        />
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#59C5B3]/15 blur-2xl animate-gentle-glow" />

        {/* Elementos decorativos adicionales */}
        <div
          className="pointer-events-none absolute top-1/4 right-1/4 h-16 w-16 rounded-full bg-[#0F7A7E]/15 blur-2xl animate-gentle-glow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="pointer-events-none absolute bottom-1/3 left-1/4 h-20 w-20 rounded-full bg-[#59C5B3]/20 blur-2xl animate-bounce"
          style={{ animationDuration: "5s", animationDelay: "3s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header con badge especial */}
        <div className="mx-auto mb-12 max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#59C5B3]/40 bg-gradient-to-r from-[#59C5B3]/10 to-[#0F7A7E]/10 px-4 py-2 text-sm font-medium text-[#0F7A7E] mb-8 animate-slide-in-badge shadow-lg">
            <Star className="h-4 w-4 text-[#59C5B3]" />
            <Users className="h-4 w-4" />
            Alianza estratégica oficial
          </div>

          {/* Layout mejorado y alineado */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center justify-items-center mb-8">
            {/* Columna izquierda */}
            <div className="text-center lg:text-right order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0F7A7E] mb-3">
                Logística oficial de
              </h2>
              <p className="text-base md:text-lg text-brand-ink/70">Distribuidores especializados en fragancias</p>
            </div>

            {/* Logo EP centrado - Columna central */}
            <div className="relative order-1 lg:order-2 flex justify-center">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#59C5B3]/20 to-[#0F7A7E]/20 blur-xl animate-gentle-glow" />
              <div className="relative bg-white rounded-2xl p-6 md:p-8 border-2 border-[#59C5B3]/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <Image
                  src="/images/clients/logo_entreperfumes.jpg"
                  alt="Entre Perfumes"
                  width={200}
                  height={120}
                  className="h-20 md:h-24 w-auto mx-auto"
                  priority={false}
                />
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#59C5B3] to-[#0F7A7E] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  OFICIAL
                </div>
              </div>
            </div>

            {/* Columna derecha */}
            <div className="text-center lg:text-left order-3 lg:order-3">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0F7A7E] mb-3">Entre Perfumes</h3>
              <p className="text-base md:text-lg text-brand-ink/70">Vendedores certificados con ventajas exclusivas</p>
            </div>
          </div>
        </div>

        {/* Grid de beneficios para vendedores EP - Alineación mejorada */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {benefits.map((benefit, index) => (
            <Card
              key={benefit.title}
              className="group border-2 border-[#0F7A7E]/20 bg-white/95 backdrop-blur-sm transition-all duration-300 hover:translate-y-[-4px] hover:border-[#59C5B3]/50 hover:shadow-xl hover:shadow-[#59C5B3]/20 animate-fade-in-up relative overflow-hidden h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Marco decorativo interno */}
              <div className="absolute inset-2 rounded-lg border border-[#0F7A7E]/10 group-hover:border-[#59C5B3]/30 transition-colors duration-300" />

              <CardContent className="p-6 text-center relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#59C5B3] to-[#0F7A7E] text-white shadow-lg group-hover:scale-110 transition-transform duration-300 mb-4">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold text-brand-ink mb-3 group-hover:text-[#0F7A7E] transition-colors duration-300">
                    {benefit.title}
                  </h4>
                </div>
                <p className="text-sm text-brand-ink/70 group-hover:text-brand-ink/90 transition-colors duration-300">
                  {benefit.desc}
                </p>

                {/* Borde inferior decorativo */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#59C5B3] to-[#0F7A7E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Elemento decorativo flotante */}
                <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-[#59C5B3]/40 group-hover:bg-[#59C5B3]/80 transition-colors duration-300" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action para vendedores EP - Centrado y alineado */}
        <div className="mx-auto max-w-4xl">
          <Card
            className="border-2 border-[#59C5B3]/30 bg-gradient-to-r from-white/95 to-[#59C5B3]/5 backdrop-blur-sm shadow-xl animate-fade-in-up relative overflow-hidden"
            style={{ animationDelay: "600ms" }}
          >
            {/* Elementos decorativos de la tarjeta */}
            <div className="absolute top-4 right-4 h-3 w-3 rounded-full bg-gradient-to-br from-[#59C5B3] to-[#0F7A7E] animate-gentle-glow" />
            <div
              className="absolute bottom-4 left-4 h-2 w-2 rounded-full bg-[#59C5B3]/60 animate-gentle-glow"
              style={{ animationDelay: "1s" }}
            />

            <CardContent className="p-8 md:p-12 text-center relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#59C5B3] to-[#0F7A7E] text-white shadow-lg">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0F7A7E]">¿Eres vendedor certificado EP?</h3>
              </div>

              <p className="text-lg text-brand-ink/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                Accede a nuestro soporte prioritario, tarifas preferenciales y manejo especializado para fragancias.
                <span className="font-semibold text-[#0F7A7E]"> Tu logística, nuestra especialidad.</span>
              </p>

              {/* Botones alineados y centrados */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <Link href="https://gdmx.mx/dashboard" target="_blank">
                  <Button
                    size="lg"
                    className="bg-[#59C5B3] text-white hover:bg-[#4FB3A2] transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto"
                  >
                    Acceder como EP
                  </Button>
                </Link>
                <Link
                  href="https://wa.me/523326398319?text=Hola%2C%20soy%20vendedor%20certificado%20Entre%20Perfumes%20y%20me%20interesa%20el%20soporte%20prioritario"
                  target="_blank"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#0F7A7E] text-[#0F7A7E] hover:bg-[#0F7A7E] hover:text-white transition-all duration-300 hover:scale-105 bg-transparent w-full sm:w-auto"
                  >
                    <Headphones className="mr-2 h-4 w-4" />
                    Soporte EP
                  </Button>
                </Link>
                {/* Botón de WhatsApp para tarifas preferenciales EP */}
                <Link
                  href="https://wa.me/523326398319?text=Hola%20soy%20vendedor%20certificado%20Entre%20Perfumes%20y%20me%20interesan%20tarifas%20preferenciales"
                  target="_blank"
                >
                  <Button
                    size="lg"
                    className="bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Tarifas Preferenciales
                  </Button>
                </Link>
              </div>

              {/* Indicador de tiempo de respuesta - Centrado */}
              <div className="inline-flex items-center gap-2 text-sm text-brand-ink/70 bg-[#0F7A7E]/5 px-4 py-2 rounded-full">
                <Clock className="h-4 w-4 text-[#0F7A7E]" />
                <span>
                  Tiempo de respuesta promedio: <strong className="text-[#0F7A7E]">15 minutos</strong>
                </span>
              </div>
            </CardContent>

            {/* Borde inferior decorativo de la tarjeta */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#59C5B3] via-[#0F7A7E] to-[#59C5B3] opacity-80" />
          </Card>
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

        @keyframes gentle-glow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
        .animate-gentle-glow {
          animation: gentle-glow 4s ease-in-out infinite;
        }

        @keyframes slide-in-badge {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in-badge {
          animation: slide-in-badge 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
