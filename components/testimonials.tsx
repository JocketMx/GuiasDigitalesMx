"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export default function Testimonials() {
  const data = [
    {
      name: "Eduardo Álvarez",
      role: "Director · PAMEX",
      company: "Perfume Adictos México",
      quote:
        "GDMX Logistics ha sido fundamental para el crecimiento de nuestra comunidad. Su plataforma permite a nuestros vendedores certificados operar con la confianza de tener el mejor soporte logístico del mercado.",
      rating: 5,
      avatar: "/mexican-male-manager.png",
    },
    {
      name: "Antonio Rodríguez",
      role: "Vendedor Certificado · PAMEX",
      company: "Perfume Adictos México",
      quote:
        "Desde que uso GDMX, mis envíos llegaron a otro nivel. El soporte prioritario que tenemos como vendedores PAMEX es increíble. Responden en minutos y siempre resuelven todo.",
      rating: 5,
      avatar: "/mexican-entrepreneur.png",
    },
    {
      name: "Isalia Gaytán",
      role: "Administradora · Entre Perfumes",
      company: "Distribución especializada",
      quote:
        "La alianza con GDMX nos ha permitido ofrecer envíos más rápidos y seguros a nuestros clientes. Su experiencia en fragancias es exactamente lo que necesitábamos.",
      rating: 5,
      avatar: "/mexican-professional-woman.png",
    },
    {
      name: "Juan Pablo Casas",
      role: "Director · Perfumes 11:11",
      company: "E-commerce de fragancias",
      quote:
        "GDMX entiende perfectamente las necesidades del mercado de perfumes. Sus tarifas preferenciales y manejo especializado han sido clave para nuestro crecimiento.",
      rating: 5,
      avatar: "/mexican-male-manager.png",
    },
    {
      name: "Salvador González",
      role: "Director · Sekega",
      company: "Distribución de perfumes",
      quote:
        "La plataforma de GDMX es súper intuitiva y el soporte técnico excepcional. Hemos reducido nuestros tiempos de envío en un 60% desde que trabajamos con ellos.",
      rating: 5,
      avatar: "/mexican-entrepreneur.png",
    },
    {
      name: "Diego León",
      role: "Vendedor Certificado · PAMEX",
      company: "Perfume Adictos México",
      quote:
        "Como vendedor PAMEX, tengo acceso a tarifas que no consigo en ningún otro lado. Mis clientes están felices con los tiempos de entrega y yo ahorro mucho dinero.",
      rating: 5,
      avatar: "/mexican-entrepreneur.png",
    },
    {
      name: "Juan Carlos Reyes",
      role: "Vendedor Certificado · PAMEX",
      company: "Perfume Adictos México",
      quote:
        "El manejo especializado que tienen para fragancias me da mucha tranquilidad. Nunca he tenido problemas con derrames o productos dañados. Son los mejores.",
      rating: 5,
      avatar: "/mexican-male-manager.png",
    },
    {
      name: "Cristina Mingura",
      role: "Administradora · PAMEX",
      company: "Perfume Adictos México",
      quote:
        "Administrar los envíos de todos nuestros vendedores era un caos antes de GDMX. Ahora todo está centralizado y tenemos visibilidad completa de cada envío.",
      rating: 5,
      avatar: "/mexican-professional-woman.png",
    },
    {
      name: "Alejandro Trejo",
      role: "Vendedor Certificado · PAMEX",
      company: "Perfume Adictos México",
      quote:
        "La respuesta inmediata que tenemos como vendedores PAMEX es impresionante. Cualquier duda o problema se resuelve al instante. Eso me permite enfocarme en vender.",
      rating: 5,
      avatar: "/mexican-entrepreneur.png",
    },
    {
      name: "Anabel González",
      role: "Vendedora Certificada · PAMEX",
      company: "Perfume Adictos México",
      quote:
        "Mis clientas siempre me preguntan cómo logro envíos tan rápidos y seguros. La verdad es que GDMX hace que todo sea súper fácil. Solo imprimo la guía y ya.",
      rating: 5,
      avatar: "/mexican-woman-artisan.png",
    },
    {
      name: "Martha Homófono",
      role: "Vendedora Certificada · PAMEX",
      company: "Perfume Adictos México",
      quote:
        "Las tarifas preferenciales que tenemos como vendedores PAMEX me han permitido ser más competitiva. Puedo ofrecer envío gratis y aún así ganar más que antes.",
      rating: 5,
      avatar: "/mexican-woman-director.png",
    },
  ]

  return (
    <section id="testimonios" className="relative w-full py-16 md:py-20 overflow-hidden bg-white">
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

        {/* Elementos decorativos adicionales - solo verde */}
        <div
          className="pointer-events-none absolute top-1/4 right-1/4 h-16 w-16 rounded-full bg-[#59C5B3]/20 blur-2xl animate-gentle-glow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="pointer-events-none absolute bottom-1/3 left-1/4 h-20 w-20 rounded-full bg-[#59C5B3]/20 blur-2xl animate-bounce"
          style={{ animationDuration: "5s", animationDelay: "3s" }}
        />
        <div
          className="pointer-events-none absolute top-3/4 right-1/3 h-14 w-14 rounded-full bg-[#0F7A7E]/15 blur-xl animate-gentle-glow"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#0F7A7E]/30 bg-[#0F7A7E]/10 px-4 py-2 text-sm font-medium text-[#0F7A7E] mb-4 animate-slide-in-badge">
            <Quote className="h-4 w-4" />
            Casos de éxito reales
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#0F7A7E] sm:text-4xl">Testimonios</h2>
          <p className="mt-3 text-brand-ink/70">
            Resultados medibles de nuestras alianzas estratégicas y vendedores certificados.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((t, index) => (
            <Card
              key={`${t.name}-${index}`}
              className="group border-2 border-[#0F7A7E]/20 bg-white/95 backdrop-blur-sm transition-all duration-300 hover:translate-y-[-4px] hover:border-[#0F7A7E]/50 hover:shadow-xl hover:shadow-[#0F7A7E]/20 animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="relative pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <Image
                      src={t.avatar || "/placeholder.svg"}
                      alt={`Avatar de ${t.name}`}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full border-2 border-[#59C5B3]/30 group-hover:border-[#0F7A7E]/50 transition-colors duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-gradient-to-br from-[#0F7A7E] to-[#59C5B3] flex items-center justify-center">
                      <Quote className="h-2 w-2 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-brand-ink group-hover:text-[#0F7A7E] transition-colors duration-300">
                      {t.name}
                    </div>
                    <div className="text-xs text-brand-ink/70">{t.role}</div>
                    <div className="text-xs text-[#0F7A7E]/80 font-medium">{t.company}</div>
                  </div>
                </div>

                <div className="mb-3 flex text-amber-500" aria-hidden>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="text-brand-ink/80 group-hover:text-brand-ink transition-colors duration-300 pb-4">
                <p>&ldquo;{t.quote}&rdquo;</p>
              </CardContent>
              {/* Borde inferior decorativo - posición fija */}
              <div className="absolute bottom-0 left-0 right-0 h-1 w-full bg-gradient-to-r from-[#0F7A7E] to-[#59C5B3] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          ))}
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
