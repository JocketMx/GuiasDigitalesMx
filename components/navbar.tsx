"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const links = [
    { href: "#beneficios", label: "Beneficios" },
    { href: "#plataforma", label: "Plataforma" },
    { href: "#blog", label: "Blog" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white text-[#0B0A16] shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="#" className="flex items-center gap-3" aria-label="Inicio">
          {/* GDMX: más pequeño y oculto en móvil */}
          <Image
            src="/images/logo_gdmx.png"
            alt="GDMX Logistics"
            width={120}
            height={40}
            className="hidden h-7 w-auto md:block opacity-95"
            priority={false}
          />

          {/* Separador vertical solo en desktop */}
          <span className="hidden h-7 w-px bg-gray-300/70 md:block" aria-hidden />

          {/* Guías Digitales: tamaño principal */}
          <Image
            src="/images/logo_guias_transparente.png"
            alt="Guías Digitales MX"
            width={140}
            height={40}
            className="h-8 w-auto md:h-9"
            priority
          />
          <span className="sr-only">GDMX Logistics y Guías Digitales MX</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group relative text-sm text-[#0B0A16]/80 hover:text-[#0F7A7E] transition-all duration-300 px-3 py-2 rounded-lg hover:bg-[#0F7A7E]/5"
            >
              <span className="relative z-10">{l.label}</span>
              {/* Efecto de subrayado animado */}
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-[#0F7A7E] to-[#59C5B3] transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></span>
              {/* Efecto de brillo sutil */}
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#0F7A7E]/0 via-[#59C5B3]/0 to-[#0F7A7E]/0 group-hover:from-[#0F7A7E]/5 group-hover:via-[#59C5B3]/10 group-hover:to-[#0F7A7E]/5 transition-all duration-300"></span>
            </Link>
          ))}
          <Link href="https://dashboard.guiasdigitales.mx" target="_blank">
            <Button className="bg-[#0F7A7E] text-white hover:bg-[#17A2A6] hover:shadow-lg hover:shadow-[#0F7A7E]/25 transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              <span className="relative z-10">Ir a la Plataforma</span>
              {/* Efecto de brillo que se mueve */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            </Button>
          </Link>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="outline"
                className="border-gray-300 bg-white text-[#0B0A16] hover:bg-[#0F7A7E]/5 hover:border-[#0F7A7E]/30 hover:text-[#0F7A7E] transition-all duration-300"
                aria-label="Abrir menú"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white">
              <div className="mt-6 grid gap-4">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="group relative text-base text-[#0B0A16]/80 hover:text-[#0F7A7E] transition-all duration-300 px-4 py-3 rounded-lg hover:bg-[#0F7A7E]/5 border border-transparent hover:border-[#0F7A7E]/20"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      {/* Indicador visual para móvil */}
                      <span className="h-2 w-2 rounded-full bg-[#0F7A7E]/0 group-hover:bg-[#0F7A7E] transition-all duration-300"></span>
                      {l.label}
                    </span>
                    {/* Efecto de borde izquierdo */}
                    <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#0F7A7E] to-[#59C5B3] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center rounded-r-full"></span>
                  </Link>
                ))}
                <Link href="https://dashboard.guiasdigitales.mx" target="_blank" className="mt-4">
                  <Button className="w-full bg-[#0F7A7E] text-white hover:bg-[#17A2A6] hover:shadow-lg hover:shadow-[#0F7A7E]/25 transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                    <span className="relative z-10">Ir a la Plataforma</span>
                    {/* Efecto de brillo que se mueve */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
