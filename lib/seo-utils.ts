/**
 * SEO Utilities for Guías Digitales v2.0
 * Helper functions and constants for SEO optimization
 */

export const SEO_CONFIG = {
  siteUrl: "https://guiasdigitales.mx",
  siteName: "Guías Digitales MX",
  siteDescription: "Plataforma de envíos con notificaciones WhatsApp, gestión de créditos con TDC y plugins Shopify/WordPress",
  locale: "es_MX",
}

// Primary Keywords - High Priority
export const PRIMARY_KEYWORDS = {
  "guías digitales v2.0": {
    searchVolume: "high",
    difficulty: "medium",
    intent: "branded"
  },
  "notificaciones whatsapp envios": {
    searchVolume: "high",
    difficulty: "medium",
    intent: "commercial"
  },
  "gestión créditos paquetería": {
    searchVolume: "high",
    difficulty: "high",
    intent: "commercial"
  },
}

// Secondary Keywords - LSI Keywords
export const SECONDARY_KEYWORDS = [
  "plataforma envios mexico",
  "dashboard logistica",
  "seguimiento de paquetes automatico",
  "facturacion de envios online",
  "pagar creditos tarjeta envios",
  "plugin wordpress woocommerce envios",
  "integraciones shopify envios",
]

// Long-tail Keywords - High Conversion
export const LONGTAIL_KEYWORDS = [
  "como crear guia rapida sin salir de casa",
  "mejor app para enviar paquetes barato",
  "notificaciones cliente final envio paquete",
  "plataforma envios con credito flexible",
  "donde cotizar envios con tarjeta de credito",
  "facturacion automatica paquetes mexico",
  "shopify plugin generar guias automaticamente",
]

// Internal Link Strategy
export const INTERNAL_LINKS = {
  "/": {
    priority: 1,
    changeFreq: "weekly"
  },
  "/blog": {
    priority: 0.8,
    changeFreq: "weekly"
  },
  "/blog/guias-digitales-v2-0": {
    priority: 0.95,
    changeFreq: "weekly"
  },
  "/blog/notificaciones-whatsapp-envios": {
    priority: 0.9,
    changeFreq: "weekly"
  },
  "/blog/gestion-creditos-paqueteria-tdc": {
    priority: 0.9,
    changeFreq: "weekly"
  },
  "/blog/integracion-shopify-wordpress-envios": {
    priority: 0.85,
    changeFreq: "weekly"
  },
  "/blog/facturacion-automatica-envios": {
    priority: 0.85,
    changeFreq: "weekly"
  },
  "/guias-dhl-baratas": {
    priority: 0.9,
    changeFreq: "weekly"
  },
}

// Meta Tags Templates
export const META_TEMPLATES = {
  homepage: {
    title: "Guías Digitales v2.0 - Notificaciones WhatsApp + Gestión de Créditos | Envíos Baratos México",
    description: "Plataforma de envíos v2.0 con notificaciones WhatsApp en tiempo real, gestión de créditos con TDC, incidencias, facturación automática y plugins Shopify/WordPress. Ahorra 60% en envíos.",
    keywords: "guías digitales v2.0, notificaciones whatsapp envios, gestión créditos paquetería, plataforma envios mexico, integraciones shopify woocommerce",
  },
  blogV2: {
    title: "Guías Digitales v2.0: Notificaciones WhatsApp + Créditos con TDC | Guía Completa 2026",
    description: "Descubre todas las características nuevas de v2.0: notificaciones WhatsApp en tiempo real, créditos con tarjeta de crédito, facturación automática, incidencias y más.",
    keywords: "guías digitales v2.0, notificaciones whatsapp, créditos paquetería, facturación automática",
  },
}

// OpenGraph Templates
export const OG_TEMPLATES = {
  homepage: {
    title: "Guías Digitales v2.0 - Notificaciones WhatsApp + Créditos con TDC",
    description: "La plataforma de envíos más completa de México. Notificaciones WhatsApp en tiempo real, créditos con TDC, facturación automática, plugins Shopify/WordPress. Ahorra 60%.",
    image: "/opengraph-image.png",
  },
}

// Structured Data Helpers
export const generateBreadcrumbs = (path: string) => {
  const segments = path.split("/").filter(Boolean)
  const breadcrumbs = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": SEO_CONFIG.siteUrl
    }
  ]

  let currentPath = ""
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`
    breadcrumbs.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": segment.replace(/-/g, " ").toUpperCase(),
      "item": `${SEO_CONFIG.siteUrl}${currentPath}`
    })
  })

  return breadcrumbs
}

// SEO Checklist
export const SEO_CHECKLIST = {
  onPage: [
    "H1 contains primary keyword",
    "Meta title 50-60 chars with keyword",
    "Meta description 150-160 chars with keywords",
    "URL slug is descriptive and SEO-friendly",
    "Internal links to related content",
    "Images have descriptive alt text",
    "Schema markup implemented",
    "Canonical URL set"
  ],
  technical: [
    "Mobile responsive design",
    "Core Web Vitals optimized",
    "Sitemap.xml updated",
    "robots.txt configured",
    "301 redirects for old URLs",
    "SSL certificate active",
    "Fast page load (< 3s)"
  ],
  content: [
    "Content is unique and original",
    "Minimum 1500 words for blog posts",
    "Natural keyword placement",
    "Proper heading hierarchy",
    "Clear call-to-action",
    "Links to authoritative sources"
  ]
}

// Monitoring Keywords
export const MONITOR_KEYWORDS = [
  { keyword: "guías digitales v2.0", position: 0, traffic: 0 },
  { keyword: "notificaciones whatsapp envios", position: 0, traffic: 0 },
  { keyword: "gestión créditos paquetería", position: 0, traffic: 0 },
  { keyword: "plataforma envios mexico", position: 0, traffic: 0 },
  { keyword: "integraciones shopify", position: 0, traffic: 0 },
]

export default {
  SEO_CONFIG,
  PRIMARY_KEYWORDS,
  SECONDARY_KEYWORDS,
  LONGTAIL_KEYWORDS,
  INTERNAL_LINKS,
  META_TEMPLATES,
  OG_TEMPLATES,
  generateBreadcrumbs,
  SEO_CHECKLIST,
  MONITOR_KEYWORDS,
}
