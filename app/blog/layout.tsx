import type React from "react"
import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Blog GDMX - Novedades y Actualizaciones Logísticas",
  description:
    "Mantente al día con las últimas novedades, lanzamientos y mejoras de nuestra plataforma logística. Consejos, casos de éxito y tendencias del sector.",
  keywords: "blog logística, novedades GDMX, actualizaciones plataforma, consejos envíos, casos éxito logística",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <WhatsAppButton />
      <Footer />
    </div>
  )
}
