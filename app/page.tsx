import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Benefits from "@/components/benefits"
import Showcase from "@/components/showcase"
import Testimonials from "@/components/testimonials"
import WhatsAppButton from "@/components/whatsapp-button"
import ClientsSection from "@/components/clients-section"
import Footer from "@/components/footer"
import PartnersSection from "@/components/partners-section"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <Showcase />
        <Testimonials />
        <ClientsSection />
        <PartnersSection />
        <section id="contacto" className="w-full bg-brand-green/10">
          <div className="container mx-auto grid items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-20">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold tracking-tight text-brand-ink md:text-4xl">
                Tu encárgate de vender, nosotros solucionamos tu logística.
              </h3>
              <p className="text-lg text-brand-ink/80">
                Implementa en minutos y empieza a ahorrar desde tu primer envío. Plataforma 24/7 con respaldo humano.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="https://gdmx.mx/dashboard" target="_blank">
                  <Button size="lg" className="bg-[#0F7A7E] hover:bg-[#17A2A6] text-white">
                    Ir a la Plataforma
                  </Button>
                </Link>
                <Link href="mailto:hola@guiasdigitales.mx">
                  <Button size="lg" className="bg-[#59C5B3] text-[#0B0A16] hover:bg-[#4FB3A2]">
                    Escríbenos
                  </Button>
                </Link>
                <Link
                  href="https://wa.me/523326398319?text=Hola%20me%20interesa%20Gu%C3%ADas%20Digitales%20MX"
                  target="_blank"
                >
                  <Button size="lg" className="bg-[#25D366] text-white hover:bg-[#1EBE5D]">
                    WhatsApp
                  </Button>
                </Link>
              </div>
            </div>
            <div className="text-brand-ink/80">
              ¿Tienes un caso especial? Nuestro equipo te acompaña para resolverlo. Tecnología cuando quieres, personas
              cuando lo necesitas.
            </div>
          </div>
        </section>

        <WhatsAppButton />
      </main>
      <Footer />
    </div>
  )
}
