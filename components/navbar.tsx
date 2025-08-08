"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
const links = [
  { href: "#beneficios", label: "Beneficios" },
  { href: "#plataforma", label: "Plataforma" },
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
          <Link key={l.href} href={l.href} className="text-sm text-[#0B0A16]/80 hover:text-[#0B0A16]">
            {l.label}
          </Link>
        ))}
        <Link href="https://gdmx.mx/dashboard" target="_blank">
          <Button className="bg-[#0F7A7E] text-white hover:bg-[#17A2A6]">Ir a la Plataforma</Button>
        </Link>
      </nav>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="outline"
              className="border-gray-300 bg-white text-[#0B0A16] hover:bg-gray-50"
              aria-label="Abrir menú"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="mt-6 grid gap-4">
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="text-base">
                  {l.label}
                </Link>
              ))}
              <Link href="https://gdmx.mx/dashboard" target="_blank">
                <Button className="w-full bg-[#0F7A7E] text-white hover:bg-[#17A2A6]">Ir a la Plataforma</Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>
)
}
