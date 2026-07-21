import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { OrganizationSchema, LocalBusinessSchema } from "@/lib/schema-components"

export const metadata: Metadata = {
  metadataBase: new URL("https://guiasdigitales.mx"),
  title: "Guías Digitales v2.0 - Notificaciones WhatsApp + Gestión de Créditos | Envíos Baratos México",
  description:
    "Plataforma de envíos v2.0 con notificaciones WhatsApp en tiempo real, gestión de créditos con TDC, incidencias, facturación automática y plugins Shopify/WordPress. Ahorra 60% en envíos.",
  keywords: "guías digitales v2.0, notificaciones whatsapp envios, gestión créditos paquetería, plataforma envios mexico, integraciones shopify woocommerce, logística, paquetería, envíos baratos",
  authors: [{ name: "GDMX Logistics" }],
  alternates: {
    canonical: "https://guiasdigitales.mx",
  },
  openGraph: {
    title: "Guías Digitales v2.0 - Notificaciones WhatsApp + Créditos con TDC",
    description: "La plataforma de envíos más completa de México. Notificaciones WhatsApp en tiempo real, créditos con TDC, facturación automática, plugins Shopify/WordPress. Ahorra 60%.",
    siteName: "Guías Digitales MX",
    url: "https://guiasdigitales.mx",
    images: [{ url: "/opengraph-image.png" }],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guías Digitales v2.0 - Notificaciones WhatsApp + Créditos con TDC",
    description: "Notificaciones WhatsApp en tiempo real, gestión de créditos con TDC, facturación automática. La plataforma de envíos más robusta de México.",
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
      <head>
        <OrganizationSchema />
        <LocalBusinessSchema />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0F7A7E" />
      </head>
      <body>{children}</body>
    </html>
  )
}
