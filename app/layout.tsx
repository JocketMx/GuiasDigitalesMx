import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Guías Digitales MX - Logística Inteligente por GDMX",
  description:
    "Plataforma 24/7 para cotizar, comparar y crear guías de envío. Ahorra más del 50% en tus envíos con el respaldo de GDMX Logistics.",
  keywords: "logística, envíos, paquetería, guías digitales, GDMX, México, e-commerce, shipping",
  authors: [{ name: "GDMX Logistics" }],
  openGraph: {
    title: "Guías Digitales MX - Logística Inteligente por GDMX",
    description: "Plataforma 24/7 para cotizar, comparar y crear guías de envío. Ahorra más del 50% en tus envíos.",
    siteName: "Guías Digitales MX",
    images: [{ url: "/opengraph-image.png" }],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guías Digitales MX - Logística Inteligente por GDMX",
    description: "Plataforma 24/7 para cotizar, comparar y crear guías de envío. Ahorra más del 50% en tus envíos.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
