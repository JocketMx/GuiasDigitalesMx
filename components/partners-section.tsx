import Image from "next/image"
import { cn } from "@/lib/utils"

type Partner = {
  name: string
  src: string
  href: string
}

export default function PartnersSection() {
  const partners: Partner[] = [
    // DHL ahora usa el JPEG con "EXPRESS"
    { name: "DHL", src: "/images/partners/dhl.jpeg", href: "https://www.dhl.com/mx-es/home.html" },
    { name: "FedEx", src: "/images/partners/fedex.png", href: "https://www.fedex.com/es-mx/home.html" },
    // Estafeta ahora usa el JPEG con "Soluciones Logísticas"
    { name: "Estafeta", src: "/images/partners/estafeta.jpeg", href: "https://www.estafeta.com/" },
    { name: "UPS", src: "/images/partners/ups.png", href: "https://www.ups.com/mx/es/Home.page" },
  ]

  return (
    <section id="partners" className="relative w-full py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">Nuestros Partners</h2>
          <p className="mt-3 text-brand-ink/70">Trabajamos con las principales paqueterías para mover tu negocio.</p>
        </div>

        {/* Grilla uniforme: mismas bases, mismos gutters, misma altura interna */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {partners.map((p) => {
            const key = p.name.toLowerCase()
            const isDHL = key === "dhl"
            const isUPS = key === "ups"
            const isEstafeta = key === "estafeta"

            const cardClass = cn(
              "group rounded-xl border p-6 shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-4",
              // Estilos por marca
              isDHL && "ring-1 ring-[#FFCC00]/50 hover:ring-2 hover:ring-[#FFCC00]/70 focus-visible:ring-[#FFCC00]/30",
              isEstafeta &&
                "ring-1 ring-[#CC2229]/50 hover:ring-2 hover:ring-[#CC2229]/70 focus-visible:ring-[#CC2229]/30",
              isUPS && "ring-1 ring-[#6B4F1D]/40 hover:ring-2 hover:ring-[#6B4F1D]/60 focus-visible:ring-[#6B4F1D]/25",
              // Estilo por defecto para FedEx
              !isDHL && !isEstafeta && !isUPS && "hover:ring-2 hover:ring-[#59C5B3]/30 focus-visible:ring-[#F7A23B]/30",
            )

            // Tamaños armonizados: Estafeta/DHL/UPS un poco más grandes
            const imgClass = cn(
              "w-auto object-contain",
              isEstafeta
                ? "w-full h-auto max-h-20 sm:max-h-24"
                : // Estafeta cubre el ancho, altura auto
                  isDHL || isUPS
                  ? "h-16 sm:h-20"
                  : // DHL y UPS con altura fija
                    "h-12 sm:h-14", // FedEx con altura por defecto
            )

            // Ancho y alto para Next/Image, el tamaño real lo controla Tailwind
            const width = isEstafeta ? 600 : isDHL || isUPS ? 320 : 240
            const height = isEstafeta ? 150 : isDHL || isUPS ? 140 : 100

            return (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar sitio de ${p.name}`}
                className={cardClass}
              >
                {/* Contenedor de altura fija para alinear tarjetas sin “saltos” */}
                <div className="flex h-24 items-center justify-center sm:h-28">
                  <Image
                    src={p.src || "/placeholder.svg?height=80&width=220&query=partner%20logo%20placeholder"}
                    alt={`${p.name} logo`}
                    width={width}
                    height={height}
                    className={imgClass}
                    priority={false}
                  />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
