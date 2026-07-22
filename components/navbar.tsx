"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { href: "#beneficios", label: "Beneficios" },
    { href: "#plataforma", label: "Plataforma" },
    { href: "#blog", label: "Blog" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="#" className="flex items-center gap-3" aria-label="Inicio">
          <Image
            src="/images/logo_gdmx.png"
            alt="GDMX Logistics"
            width={120}
            height={40}
            className="hidden h-7 w-auto md:block"
            priority={false}
          />
          <span className="hidden h-7 w-px bg-gray-300 md:block" aria-hidden />
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

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium px-4 py-2 rounded-full text-[#0B0A16]/70 hover:text-[#0F7A7E] hover:bg-[#0F7A7E]/5 transition-all duration-300"
            >
              {l.label}
            </Link>
          ))}
          {/* Animated truck CTA pill */}
          <Link
            href="https://dashboard.guiasdigitales.mx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ir al dashboard"
            className="ml-3 group relative flex items-center gap-2 rounded-full border border-[#0F7A7E]/20 bg-[#0F7A7E]/5 pl-1 pr-5 py-1 hover:border-[#0F7A7E]/50 hover:bg-[#0F7A7E]/10 transition-all duration-300 overflow-hidden"
          >
            {/* Truck icon bubble */}
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#0F7A7E] flex-shrink-0 shadow-sm group-hover:shadow-md transition-shadow">
              {/* Pulsing ring */}
              <span className="absolute inset-0 rounded-full bg-[#0F7A7E] opacity-30 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700" />
              <svg width="18" height="12" viewBox="0 0 44 28" fill="none" aria-hidden="true" style={{ animation: "navTruckBounce 2s ease-in-out infinite" }}>
                <rect x="0" y="4" width="26" height="15" rx="2" fill="white" opacity="0.25" />
                <rect x="0" y="4" width="26" height="15" rx="2" stroke="white" strokeWidth="1.8" />
                <path d="M26 8 L26 19 L38 19 L38 13 L34 8 Z" fill="white" opacity="0.3" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M28 10 L28 16 L36 16 L36 13 L33 10 Z" fill="white" opacity="0.6" />
                <circle cx="8" cy="21" r="3.5" fill="white" opacity="0.9" stroke="white" strokeWidth="0.5" />
                <circle cx="20" cy="21" r="3.5" fill="white" opacity="0.9" stroke="white" strokeWidth="0.5" />
                <circle cx="33" cy="21" r="3.5" fill="white" opacity="0.9" stroke="white" strokeWidth="0.5" />
              </svg>
            </span>
            <span className="text-sm font-semibold text-[#0F7A7E]">Comenzar</span>
            <ArrowRight className="h-3.5 w-3.5 text-[#0F7A7E] group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </nav>
        <style>{`
          @keyframes navTruckBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-1.5px); }
          }
        `}</style>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="text-[#0B0A16] hover:bg-[#0F7A7E]/10"
                aria-label="Abrir menú"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white border-l border-gray-200">
              <div className="mt-8 grid gap-2">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-lg text-[#0B0A16]/70 hover:text-[#0F7A7E] hover:bg-[#0F7A7E]/5 px-4 py-3 rounded-xl transition-all duration-300"
                  >
                    {l.label}
                  </Link>
                ))}
                <Link href="https://dashboard.guiasdigitales.mx" target="_blank" className="mt-6">
                  <Button className="w-full bg-[#0F7A7E] text-white hover:bg-[#0F7A7E]/90 py-6 rounded-xl shadow-lg transition-all duration-300">
                    Comenzar ahora
                    <ArrowRight className="ml-2 h-5 w-5" />
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
