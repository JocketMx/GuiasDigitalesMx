export function V2SoftwareAppSchema() {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "SoftwareApplication",
    "name": "Guías Digitales v2.0",
    "description": "Plataforma de envíos con notificaciones WhatsApp, gestión de créditos con TDC, facturación automática y plugins Shopify/WordPress",
    "url": "https://guiasdigitales.mx",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "80",
      "priceCurrency": "MXN",
      "description": "Cotización desde $80 MXN por guía"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "featureList": [
      "Notificaciones WhatsApp en tiempo real",
      "Gestión de créditos con tarjeta de crédito",
      "Facturación automática en 1 clic",
      "Módulo de incidencias completo",
      "Dashboard con métricas inteligentes",
      "Plugins Shopify y WooCommerce",
      "API REST completa",
      "Verificación de email",
      "Chat en línea 24/7",
      "Recolecciones con cantidad especificada"
    ],
    "publisher": {
      "@type": "Organization",
      "name": "Guías Digitales MX",
      "logo": {
        "@type": "ImageObject",
        "url": "https://guiasdigitales.mx/logo_guias.png",
        "width": 250,
        "height": 60
      }
    },
    "author": {
      "@type": "Organization",
      "name": "Guías Digitales MX",
      "url": "https://guiasdigitales.mx"
    },
    "downloadUrl": "https://guiasdigitales.mx",
    "version": "2.0",
    "releaseDate": "2026-07-21",
    "fileSize": "Web-based"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}

export function V2FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué es Guías Digitales v2.0?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Guías Digitales v2.0 es la plataforma más completa de México para gestionar envíos con notificaciones WhatsApp en tiempo real, gestión de créditos con tarjeta de crédito, facturación automática, módulo de incidencias y más."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo funcionan las notificaciones WhatsApp?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tus clientes reciben avisos automáticos en WhatsApp en cada etapa del envío: cuando se crea, cuando se recolecta, cuando está en tránsito, cuando se entrega, y si hay problemas. Es una característica única que ninguna otra plataforma ofrece."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo pagar con tarjeta de crédito?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, v2.0 permite pagar directamente con tarjeta de crédito sin intermediarios. Además ofrecemos crédito flexible con línea de crédito hasta $100,000 según tu perfil. Somos la única plataforma en México que ofrece esta flexibilidad."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo integro mi tienda Shopify o WooCommerce?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tenemos plugins ready-to-use para Shopify y WordPress/WooCommerce. Nuestro equipo técnico se encarga de la instalación y configuración sin problemas. Soporte disponible 24/7."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuál es el costo de las guías?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Las cotizaciones comienzan desde $80 MXN. Puedes comparar precios de 8+ paqueterías (DHL, FedEx, UPS, Estafeta, etc.) y elegir la mejor opción en menos de 1 minuto."
        }
      },
      {
        "@type": "Question",
        "name": "¿Mis datos están seguros?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. Usamos encriptación end-to-end, autenticación de dos factores, backup automático cada 6 horas y cumplimos con todas las normas de protección de datos en México."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué paqueterías están disponibles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tenemos integración con 8+ paqueterías: DHL, FedEx, UPS, Estafeta, Paquetexpress, AMPM, 99 Minutos y Grupo AMPM. Cobertura nacional incluyendo zonas remotas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo usar la plataforma desde móvil?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, la plataforma v2.0 es completamente responsive y optimizada para móviles. Funciona como app web progresiva (PWA) e incluso offline."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué es el módulo de incidencias?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El módulo de incidencias permite reportar problemas con paquetes de forma centralizada, dar seguimiento al estado, acceder a información del paquete y obtener soporte técnico dedicado para resolverlos rápidamente."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo descargar mis reportes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, puedes exportar reportes en PDF con tus movimientos, estado de cuenta, facturación y análisis de envíos. La facturación también se genera automáticamente con 1 clic."
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}

export function V2BreadcrumbSchema() {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://guiasdigitales.mx"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "v2.0",
        "item": "https://guiasdigitales.mx#v2-features"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Blog",
        "item": "https://guiasdigitales.mx/blog"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Guías Digitales v2.0",
        "item": "https://guiasdigitales.mx/blog/guias-digitales-v2-0"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}
