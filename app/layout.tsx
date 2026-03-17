import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://guiasdigitales.mx"),
  title: "Guías Digitales MX - La Plataforma Completa de Envíos",
  description:
    "Plataforma 24/7 para cotizar, comparar y crear guías de envío. Ahorra hasta 60% con crédito, notificaciones automáticas, facturación y API.",
  keywords: "logística, envíos, paquetería, guías digitales, GDMX, México, e-commerce, shipping, API, facturación, crédito",
  authors: [{ name: "GDMX Logistics" }],
  alternates: {
    canonical: "https://guiasdigitales.mx",
  },
  openGraph: {
    title: "Guías Digitales MX - La Plataforma Completa de Envíos",
    description: "Ahorra hasta 60% en envíos. Crédito, notificaciones automáticas, facturación en línea y API para tu negocio.",
    siteName: "Guías Digitales MX",
    url: "https://guiasdigitales.mx",
    images: [{ url: "/opengraph-image.png" }],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guías Digitales MX - La Plataforma Completa de Envíos",
    description: "Ahorra hasta 60% en envíos. Crédito, notificaciones automáticas, facturación en línea y API para tu negocio.",
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
