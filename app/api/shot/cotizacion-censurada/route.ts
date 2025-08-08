import sharp from "sharp"

// Usamos la versión adjunta por ti y la servimos con censura en la esquina superior derecha.
const RELATIVE_PUBLIC_PATH = "/images/cotizacion-v2.png"

export async function GET(request: Request) {
  try {
    // Obtenemos la URL absoluta al asset público
    const url = new URL(request.url)
    const base = `${url.protocol}//${url.host}`
    const srcUrl = `${base}${RELATIVE_PUBLIC_PATH}`
    const res = await fetch(srcUrl, { cache: "force-cache" })
    if (!res.ok) throw new Error("No se pudo cargar la imagen de origen")
    const buf = Buffer.from(await res.arrayBuffer())

    const meta = await sharp(buf).metadata()
    const w = meta.width || 1920
    const h = meta.height || 1080

    // Región aproximada del usuario arriba a la derecha (proporcional)
    const regionWidth = Math.round(w * 0.26)
    const regionHeight = Math.round(h * 0.085)
    const left = Math.max(0, w - regionWidth - Math.round(w * 0.02))
    const top = Math.round(h * 0.015)

    // Extraemos, desenfocamos y recomponemos
    const baseImg = sharp(buf)
    const blurred = await sharp(buf)
      .extract({ left, top, width: regionWidth, height: regionHeight })
      .blur(30)
      .png()
      .toBuffer()

    const out = await baseImg
      .composite([{ input: blurred, top, left }])
      .png()
      .toBuffer()

    return new Response(out, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=604800",
      },
    })
  } catch (err) {
    return new Response("Error al censurar la imagen", { status: 500 })
  }
}
