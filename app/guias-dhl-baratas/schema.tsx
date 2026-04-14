'use client'

import Script from 'next/script'

export default function GuiasDHLBaratasSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': '¿Cómo comprar guías DHL baratas en México?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Es muy simple: regístrate en la plataforma, ingresa los datos del envío, selecciona DHL, compara precios con otras paqueterías y genera tu guía en menos de un minuto. Puedes generar guías a crédito y pagar después.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Qué son las guías prepagadas DHL?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Son etiquetas de envío DHL que pagas anticipadamente. Con Guías Digitales MX compras tus guías DHL prepagadas al mejor precio del mercado, sin intermediarios y directamente desde nuestra plataforma.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Cuánto puedo ahorrar al generar envíos desde esta plataforma?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Nuestros usuarios ahorran hasta 60% comparado con los precios de mostrador de DHL y otras paqueterías. Accedes a tarifas preferenciales por volumen sin necesidad de tener un contrato empresarial.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Es seguro usar una plataforma para comprar guías DHL?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Completamente. Guías Digitales MX lleva 12 años en el mercado y ha procesado más de 1.5 millones de envíos. Todos tus datos están protegidos, las guías son 100% válidas y emitidas directamente por DHL.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Esta opción funciona para emprendedores y tiendas en línea?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí, es perfecta para emprendedores, tiendas Shopify, WooCommerce, vendedores de marketplaces y pequeños negocios. Puedes generar desde 1 guía hasta cientos por mes.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Puedo cotizar antes de generar mi guía?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Claro. Nuestro cotizador te muestra los precios de DHL, FedEx, Estafeta, UPS y más en tiempo real. Compara y elige la paquetería que mejor se adapte a tu envío.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Qué otras paqueterías puedo usar además de DHL?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Además de DHL Express, trabajamos con FedEx, Estafeta, UPS, Paquetexpress, AMPM y 99 Minutos. Todos disponibles en la misma plataforma para que compares precios.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Cuánto tarda generar una guía DHL?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Menos de 1 minuto. Ingresa los datos del remitente y destinatario, selecciona DHL, confirma el envío y listo: tu guía está lista para imprimir o entregar al cliente.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Necesito experiencia previa para usar la plataforma?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No, está diseñada para cualquier persona. La interfaz es muy intuitiva y tenemos soporte humano disponible si necesitas ayuda. También puedes ver videotutoriales en nuestro sitio.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Puedo usar la plataforma si hago pocos envíos al mes?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Por supuesto. No hay mínimo de envíos, cuota de suscripción ni compromisos. Pagas solo por cada guía que generes. Muchos usuarios empiezan con 1 ó 2 envíos al mes.'
            }
          }
        ]
      },
      {
        '@type': 'Organization',
        'name': 'Guías Digitales MX',
        'url': 'https://guiasdigitales.mx',
        'logo': 'https://guiasdigitales.mx/images/logo_guias.png',
        'description': 'Plataforma para generar guías DHL baratas en México. Ahorra hasta 60% en envíos para emprendedores y tiendas en línea.',
        'contact': {
          '@type': 'ContactPoint',
          'telephone': '+52-33-2639-8319',
          'contactType': 'Customer Support'
        },
        'areaServed': 'MX',
        'foundingDate': '2012'
      },
      {
        '@type': 'WebPage',
        'url': 'https://guiasdigitales.mx/guias-dhl-baratas',
        'name': 'Guías DHL baratas en México | Ahorra 60%',
        'description': 'Compra guías DHL baratas en México. Cotiza, genera y entrega envíos en minutos con la plataforma más fácil y segura para emprendedores.',
        'publisher': {
          '@type': 'Organization',
          'name': 'Guías Digitales MX'
        }
      }
    ]
  }

  return (
    <Script
      id="guias-dhl-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  )
}
