import sharp from "sharp"

// Servimos el logo de Guías Digitales ya recortado para eliminar bordes blancos.
// Esto evita el “rectángulo blanco” sobre el fondo del navbar.
const RELATIVE_PUBLIC_PATH = "/images/logo-guias-transparent.png"

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const base = `${url.protocol}//${url.host}`
    const srcUrl = `${base}${RELATIVE_PUBLIC_PATH}`

    const res = await fetch(srcUrl, { cache: "force-cache" })
    if (!res.ok) {
      throw new Error("No se pudo cargar el logo base")
    }
    const buf = Buffer.from(await res.arrayBuffer())

    // Recorta píxeles de borde uniformes (blancos) y exporta con transparencia
    const out = await sharp(buf).trim(10).png().toBuffer()

    return new Response(out, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=604800",
      },
    })
  } catch (e) {
    // Fallback: devuelve el archivo original.
    const url = new URL(request.url)
    const base = `${url.protocol}//${url.host}`
    const srcUrl = `${base}${RELATIVE_PUBLIC_PATH}`
    const fallback = await fetch(srcUrl)
    return new Response(fallback.body, {
      headers: { "Content-Type": "image/png" },
      status: fallback.status,
      statusText: fallback.statusText,
    })
  }
}
