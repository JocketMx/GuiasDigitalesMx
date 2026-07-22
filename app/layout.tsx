import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { OrganizationSchema, LocalBusinessSchema, WebSiteSchema } from "@/lib/schema-components"

export const metadata: Metadata = {
  metadataBase: new URL("https://guiasdigitales.mx"),
  title: "Guías Digitales | Guías de Envío Baratas DHL, FedEx, UPS, Estafeta México",
  description:
    "Guías Digitales MX — genera guías de envío prepagadas con DHL, FedEx, UPS, Estafeta, 99 Minutos y más. Ahorra hasta 60% vs precio de mostrador. Cotiza, compara y crea tu guía en 1 minuto. 12 años de experiencia en logística.",
  keywords: [
    "guias digitales",
    "guias de envio",
    "guias prepagadas",
    "guias DHL",
    "guias FedEx",
    "guias UPS",
    "guias Estafeta",
    "guias baratas Mexico",
    "guias de envio baratas",
    "guias prepagadas DHL baratas",
    "guias prepagadas FedEx",
    "guias prepagadas Estafeta",
    "cotizar envio Mexico",
    "paqueteria barata Mexico",
    "plataforma envios Mexico",
    "envios baratos para negocios",
    "guias de paqueteria",
    "generar guia de envio",
    "envios DHL baratos",
    "envios FedEx baratos",
    "envios UPS Mexico",
    "logistica ecommerce Mexico",
    "GDMX Logistics",
    "Guías Digitales MX",
  ].join(", "),
  authors: [{ name: "GDMX Logistics", url: "https://guiasdigitales.mx" }],
  alternates: {
    canonical: "https://guiasdigitales.mx",
  },
  openGraph: {
    title: "Guías Digitales | Guías de Envío Baratas DHL, FedEx, UPS, Estafeta",
    description: "Genera guías de envío prepagadas con las mejores paqueterías de México. Ahorra hasta 60% en DHL, FedEx, UPS, Estafeta y más. Cotiza en segundos.",
    siteName: "Guías Digitales MX",
    url: "https://guiasdigitales.mx",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Guías Digitales MX — Plataforma de guías de envío baratas en México",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guías Digitales | Guías de Envío Baratas DHL, FedEx, UPS, Estafeta México",
    description: "Genera guías prepagadas con DHL, FedEx, UPS y Estafeta con hasta 60% de descuento. Cotiza y crea tu guía en 1 minuto.",
    images: ["/opengraph-image.png"],
    site: "@guiasdigitalesmx",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    // Add Google Search Console / Bing verification tokens here when available
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
        <WebSiteSchema />
        <OrganizationSchema />
        <LocalBusinessSchema />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0F7A7E" />
      </head>
      <body>{children}</body>
    </html>
  )
}
