"use client"

import { Users } from "lucide-react"
import ClientsCarousel, { type ClientLogo } from "./clients-carousel"

export default function ClientsSection() {
  const logos: ClientLogo[] = [
    {
      name: "PAMEX Essentials",
      src: "/images/clients/logo_pamex_nuevo.png",
      href: "https://www.facebook.com/groups/perfumeadictosmexicoEssentials",
    },
    {
      name: "Grupo Formativo Estudiantil",
      src: "/images/clients/logo_grupoformativoestudiantil.png",
      href: "https://grupoformativoestudiantil.org/",
    },
    { name: "SeaJewels by ultrafemme", src: "/images/clients/logo_ultrafemme.jpg", href: "https://ultrafemme.com" },
    { name: "Entre Perfumes", src: "/images/clients/logo_entreperfumes.jpg" },
    { name: "Perfumes 11:11", src: "/images/clients/logo_perfumes1111.png", href: "https://perfumes11-11.com" },
    // Sekega actualizado al SVG nuevo
    { name: "Sekega", src: "/images/clients/logo_sekega.svg", href: "https://sekega.com" },
    // Nuevo cliente Essentials usando el PNG anterior de Sekega
    { name: "Essentials", src: "/images/clients/logo_sekega.png", href: "https://essentialsmx.com" },
  ]

  return (
    <section id="clientes" className="relative w-full py-16 md:py-20 overflow-hidden bg-white">
      {/* Marco decorativo animado - solo verde */}
      <div className="absolute inset-4 -z-10 rounded-3xl border-2 border-[#0F7A7E]/20 bg-gradient-to-br from-[#0F7A7E]/5 via-transparent to-[#59C5B3]/5 overflow-hidden">
        <div className="absolute inset-4 rounded-2xl border border-[#59C5B3]/30 animate-gentle-glow" />

        {/* Elementos decorativos contenidos - solo verde */}
        <div
          className="pointer-events-none absolute top-4 left-4 h-32 w-32 rounded-full bg-[#59C5B3]/25 blur-3xl animate-bounce"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="pointer-events-none absolute bottom-4 right-4 h-32 w-32 rounded-full bg-[#59C5B3]/30 blur-3xl animate-bounce"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        />
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0F7A7E]/20 blur-2xl animate-gentle-glow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#0F7A7E]/30 bg-[#0F7A7E]/10 px-4 py-2 text-sm font-medium text-[#0F7A7E] mb-4 animate-slide-in-badge">
            <Users className="h-4 w-4" />
            Casos de éxito
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#0F7A7E] sm:text-4xl">Nuestros clientes</h2>
          <p className="mt-3 text-brand-ink/70">Marcas que confían en GDMX Logistics y Guías Digitales MX.</p>
        </div>

        <div className="space-y-6">
          <ClientsCarousel logos={logos} className="animate-fade-in-up" />
          <ClientsCarousel
            logos={[...logos].reverse()}
            autoPlayDelayMs={3000}
            className="animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          />
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
