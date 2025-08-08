import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck } from 'lucide-react'

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-b from-[#0F7A7E]/12 via-[#59C5B3]/12 to-white">
      <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-2 md:items-center md:py-20">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#59C5B3]/50 bg-white px-3 py-1 text-xs text-[#0F7A7E] shadow-sm">
            <ShieldCheck className="h-3.5 w-3.5" />
            12 años impulsando logística en México
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-brand-ink sm:text-5xl">
            Envíos inteligentes para negocios reales
          </h1>
          <p className="text-lg text-brand-ink/80">
            Convierte tu logística en una ventaja competitiva: cotiza, compara y crea guías 24/7 con el respaldo humano de GDMX Logistics.
          </p>

          {/* Botones y logos: cada columna contiene su botón y su logo centrados */}
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Columna 1: Ir a la Plataforma + logo GDMX */}
            <div className="flex flex-col items-center gap-3">
              <Link href="https://gdmx.mx/dashboard" target="_blank">
                <Button size="lg" className="bg-[#0F7A7E] hover:bg-[#17A2A6] text-white">
                  Ir a la Plataforma <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Image
                src="/images/logo-gdmx-transparent.png"
                alt="GDMX Logistics"
                width={160}
                height={120}
                className="h-11 w-auto md:h-12"
                priority={false}
              />
            </div>

            {/* Columna 2: Ver beneficios + logo Guías Digitales */}
            <div className="flex flex-col items-center gap-3">
              <a href="#beneficios">
                <Button
                  size="lg"
                  className="bg-[#F7A23B] text-[#0B0A16] hover:bg-[#E89529] focus-visible:ring-[#F7A23B]/30"
                >
                  Ver beneficios
                </Button>
              </a>
              <Image
                src="/images/logo_guias_hero.png"
                alt="Guías Digitales MX"
                width={160}
                height={120}
                className="h-9 w-auto md:h-10"
                priority={false}
              />
            </div>
          </div>
        </div>

        {/* Imagen derecha: screenshot de Inicio de sesión */}
        <div className="relative">
          <div className="relative mx-auto w-full max-w-[560px] overflow-visible">
            <Image
              src="/images/login-hero.png"
              alt="Inicio de sesión · Guías Digitales MX"
              width={1600}
              height={1000}
              className="h-auto w-full rounded-xl border bg-white shadow-sm"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
