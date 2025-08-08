"use client"

import * as React from "react"
import useEmblaCarousel, { type EmblaOptionsType } from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { DeviceLaptop, DevicePhone } from "./device-frames"

type Slide = {
  id: string
  device: "laptop" | "phone"
  src: string
  alt: string
  censor?: boolean
}

type MediaCarouselProps = {
  slides: Slide[]
  options?: EmblaOptionsType
  autoPlayDelayMs?: number
}

export default function MediaCarousel({
  slides,
  options = { loop: true, align: "center" },
  autoPlayDelayMs = 3500,
}: MediaCarouselProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const autoplay = React.useRef(
    Autoplay({
      delay: autoPlayDelayMs,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  )
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current])

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  const scrollPrev = React.useCallback(() => {
    autoplay.current?.reset()
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    autoplay.current?.reset()
    emblaApi?.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative" aria-roledescription="carousel" aria-label="Galería de la plataforma">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((s, i) => (
            <div
              key={s.id}
              className="min-w-0 shrink-0 basis-full px-2 md:basis-1/2"
              role="group"
              aria-roledescription="slide"
              aria-label={`Diapositiva ${i + 1} de ${slides.length}`}
            >
              {s.device === "laptop" ? (
                <DeviceLaptop
                  src={s.src}
                  alt={s.alt}
                  censorTopRight={s.censor}
                  censorWidthPercent={26}
                  censorHeightPercent={9}
                  censorOffsetXPx={12}
                  censorOffsetYPx={12}
                />
              ) : (
                <DevicePhone
                  src={s.src}
                  alt={s.alt}
                  zoom={1.15}
                  offsetYPercent={-10}
                  objectPosition="center top"
                  censorTopRight={s.censor}
                  censorWidthPercent={45}
                  censorHeightPercent={10}
                  censorOffsetXPx={12}
                  censorOffsetYPx={12}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-1">
        <Button
          size="icon"
          variant="outline"
          className="pointer-events-auto bg-white/90 backdrop-blur hover:bg-white"
          onClick={scrollPrev}
          aria-label="Anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          size="icon"
          variant="outline"
          className="pointer-events-auto bg-white/90 backdrop-blur hover:bg-white"
          onClick={scrollNext}
          aria-label="Siguiente"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              selectedIndex === i ? "bg-brand-teal-dark" : "bg-brand-green/60 hover:bg-brand-green"
            }`}
            aria-label={`Ir a la diapositiva ${i + 1}`}
            aria-current={selectedIndex === i ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  )
}
