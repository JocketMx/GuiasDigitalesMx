import Image from "next/image"
import * as React from "react"

type BaseProps = {
  src: string
  alt: string
  width?: number
  height?: number
  // Opcional: colocar una máscara de censura arriba derecha
  censorTopRight?: boolean
  censorWidthPercent?: number // 0-100
  censorHeightPercent?: number // 0-100
  censorOffsetXPx?: number
  censorOffsetYPx?: number
}

type PhoneExtra = {
  // Ajustes de encuadre para móvil
  zoom?: number // 1 = sin zoom
  offsetXPercent?: number // -100 a 100
  offsetYPercent?: number // -100 a 100
  objectFit?: "cover" | "contain"
  objectPosition?: string
}

export function DeviceLaptop({
  src,
  alt,
  width = 1400,
  height = 900,
  censorTopRight = false,
  censorWidthPercent = 26,
  censorHeightPercent = 9,
  censorOffsetXPx = 12,
  censorOffsetYPx = 12,
}: BaseProps) {
  return (
    <figure className="mx-auto w-full max-w-2xl">
      <div className="relative mx-auto aspect-[16/10] w-full overflow-hidden rounded-t-[14px] border bg-gradient-to-br from-brand-green/20 via-white to-brand-orange/10 shadow-sm">
        <div className="absolute inset-0 rounded-t-[14px] ring-1 ring-brand-green/30" aria-hidden />
        <div className="absolute left-1/2 top-0 z-10 h-2 w-24 -translate-x-1/2 rounded-b-md bg-brand-ink/20" aria-hidden />
        <div className="absolute left-1/2 top-2 z-10 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-brand-ink/30 ring-2 ring-brand-ink/10" aria-hidden />
        <div className="absolute inset-3 overflow-hidden rounded-md bg-black">
          <Image
            src={src || "/placeholder.svg?height=900&width=1400&query=laptop%20mockup"}
            alt={alt}
            width={width}
            height={height}
            className="h-full w-full object-cover"
            priority={false}
          />
          {censorTopRight && (
            <div
              className="absolute right-0 top-0 rounded-md bg-white/70 backdrop-blur-md ring-1 ring-white/40"
              style={{
                width: `${censorWidthPercent}%`,
                height: `${censorHeightPercent}%`,
                marginRight: `${censorOffsetXPx}px`,
                marginTop: `${censorOffsetYPx}px`,
              }}
              aria-hidden
            />
          )}
        </div>
        <div className="pointer-events-none absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-brand-orange/25 blur-3xl" />
        <div className="pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-full bg-brand-green/25 blur-3xl" />
      </div>
      <div className="mx-auto h-3 w-[92%] rounded-b-[14px] bg-neutral-300 shadow-[0_2px_0_0_rgba(0,0,0,0.05)_inset]" aria-hidden />
      <figcaption className="mt-2 text-center text-sm text-muted-foreground">{alt}</figcaption>
    </figure>
  )
}

export function DevicePhone({
  src,
  alt,
  width = 1170,
  height = 2532,
  zoom = 1.14,
  offsetXPercent = 0,
  offsetYPercent = -8,
  objectFit = "cover",
  objectPosition = "center top",
  censorTopRight = false,
  censorWidthPercent = 45,
  censorHeightPercent = 10,
  censorOffsetXPx = 12,
  censorOffsetYPx = 12,
}: BaseProps & PhoneExtra) {
  return (
    <figure className="mx-auto w-full max-w-[18rem]">
      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[36px] border-2 border-brand-green/40 bg-gradient-to-b from-brand-green/15 via-white to-brand-orange/10 shadow">
        <div className="absolute left-1/2 top-0 z-10 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-brand-ink/20" aria-hidden />
        <div className="absolute inset-[10px] overflow-hidden rounded-[28px] bg-black">
          <div
            className="relative h-full w-full"
            style={{
              transform: `translate(${offsetXPercent}%, ${offsetYPercent}%) scale(${zoom})`,
              transformOrigin: "center",
            }}
          >
            <Image
              src={src || "/placeholder.svg?height=2532&width=1170&query=mobile%20mockup"}
              alt={alt}
              width={width}
              height={height}
              style={{ objectPosition }}
              className={`h-full w-full ${objectFit === "contain" ? "object-contain" : "object-cover"}`}
            />
            {censorTopRight && (
              <div
                className="absolute right-0 top-0 rounded-md bg-white/70 backdrop-blur-md ring-1 ring-white/40"
                style={{
                  width: `${censorWidthPercent}%`,
                  height: `${censorHeightPercent}%`,
                  marginRight: `${censorOffsetXPx}px`,
                  marginTop: `${censorOffsetYPx}px`,
                }}
                aria-hidden
              />
            )}
          </div>
        </div>
        <div className="pointer-events-none absolute -bottom-6 -left-6 h-16 w-16 rounded-full bg-brand-orange/25 blur-3xl" />
        <div className="pointer-events-none absolute -top-6 -right-6 h-16 w-16 rounded-full bg-brand-green/25 blur-3xl" />
      </div>
      <figcaption className="mt-2 text-center text-sm text-muted-foreground">{alt}</figcaption>
    </figure>
  )
}
