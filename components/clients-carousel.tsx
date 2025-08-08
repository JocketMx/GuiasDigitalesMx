"use client"

import * as React from "react"
import useEmblaCarousel, { type EmblaOptionsType } from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { cn } from "@/lib/utils"

export type ClientLogo = {
  name: string
  src: string
  href?: string
  bg?: string // opcional, por si algún logo necesita fondo
}

type ClientsCarouselProps = {
  logos: ClientLogo[]
  options?: EmblaOptionsType
  autoPlayDelayMs?: number
  className?: string
}

export default function ClientsCarousel({
  logos,
  options = { loop: true, align: "start", dragFree: true },
  autoPlayDelayMs = 2500,
  className,
}: ClientsCarouselProps) {
  const autoplay = React.useRef(
    Autoplay({
      delay: autoPlayDelayMs,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  )
  const [emblaRef] = useEmblaCarousel(options, [autoplay.current])

  return (
    <div ref={emblaRef} className={cn("overflow-hidden", className)}>
      <div className="flex">
        {logos.concat(logos).map((logo, idx) => {
          const card = (
            <div
              className={cn(
                "group flex h-28 items-center justify-center rounded-xl border bg-white/90 p-4 shadow-sm transition",
                "hover:shadow-md hover:ring-2 hover:ring-[#59C5B3]/40",
                logo.bg
              )}
            >
              <Image
                src={logo.src || "/placeholder.svg?height=120&width=220&query=logo%20de%20cliente"}
                alt={logo.name}
                width={220}
                height={120}
                className="h-12 w-auto object-contain sm:h-14"
              />
            </div>
          )

          return (
            <div
              key={`${logo.name}-${idx}`}
              className="min-w-0 shrink-0 basis-1/2 px-2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
            >
              {logo.href ? (
                <a
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar sitio de ${logo.name}`}
                  className="block focus:outline-none focus-visible:ring-4 focus-visible:ring-[#F7A23B]/30 rounded-xl"
                >
                  {card}
                </a>
              ) : (
                card
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
