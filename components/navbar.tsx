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
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4">
        <Link href="#" className="flex items-center gap-3" aria-label="Inicio">
          <Image
            src="/images/logo_gdmx.png"
            alt="GDMX Logistics"
            width={120}
            height={40}
            className={`hidden h-7 w-auto md:block transition-all duration-300 ${scrolled ? "opacity-100" : "opacity-90 invert"}`}
            priority={false}
          />
          <span className={`hidden h-7 w-px md:block transition-colors duration-300 ${scrolled ? "bg-gray-300" : "bg-white/30"}`} aria-hidden />
          <Image
            src="/images/logo_guias_transparente.png"
            alt="Guías Digitales MX"
            width={140}
            height={40}
            className={`h-8 w-auto md:h-9 transition-all duration-300 ${scrolled ? "" : "invert"}`}
            priority
          />
          <span className="sr-only">GDMX Logistics y Guías Digitales MX</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`group relative text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                scrolled 
                  ? "text-[#0B0A16]/70 hover:text-[#0F7A7E] hover:bg-[#0F7A7E]/5" 
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="https://dashboard.guiasdigitales.mx" target="_blank" className="ml-4">
            <Button className="bg-[#0F7A7E] text-white hover:bg-[#0F7A7E]/90 px-6 rounded-full shadow-lg shadow-[#0F7A7E]/25 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              Comenzar
              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className={`transition-all duration-300 ${
                  scrolled 
                    ? "text-[#0B0A16] hover:bg-[#0F7A7E]/10" 
                    : "text-white hover:bg-white/10"
                }`}
                aria-label="Abrir menú"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0B0A16] border-l border-white/10">
              <div className="mt-8 grid gap-2">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-lg text-white/70 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl transition-all duration-300"
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
