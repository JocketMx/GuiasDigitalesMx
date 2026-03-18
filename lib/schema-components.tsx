import type { FC } from 'react'

// JSON-LD Schema Components
export const OrganizationSchema: FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Guías Digitales MX (GDMX)',
    url: 'https://guiasdigitales.mx',
    logo: 'https://guiasdigitales.mx/images/logo_guias.png',
    description: 'Plataforma líder de envíos y logística en México. Cotiza, compara y crea guías digitales con hasta 60% de ahorro.',
    sameAs: [
      'https://wa.me/523326398319',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'México',
      addressCountry: 'MX',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+52-332-639-8319',
      email: 'support@guiasdigitales.mx',
      availableLanguage: 'es-MX',
      hoursAvailable: 'Mo-Su 00:00-23:59',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'MXN',
      description: 'Servicio de envíos con descuentos de hasta 60%',
      availability: 'https://schema.org/InStock',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export const LocalBusinessSchema: FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Guías Digitales MX',
    image: 'https://guiasdigitales.mx/images/logo_guias.png',
    description: 'Plataforma de envíos 24/7 con integración a 7 paqueterías',
    url: 'https://guiasdigitales.mx',
    telephone: '+52-332-639-8319',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'MX',
    },
    areaServed: 'MX',
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '500+',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export const FAQSchema: FC<{ faqs: Array<{ question: string; answer: string }> }> = ({ faqs }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export const BreadcrumbSchema: FC<{ items: Array<{ name: string; url: string }> }> = ({ items }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export const ArticleSchema: FC<{
  title: string
  description: string
  image: string
  datePublished: string
  dateModified: string
  author: string
  url: string
}> = ({ title, description, image, datePublished, dateModified, author, url }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: image,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      '@type': 'Person',
      name: author,
    },
    mainEntity: {
      '@type': 'Article',
      '@id': url,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export const ProductSchema: FC<{
  name: string
  description: string
  price: number
  currency: string
}> = ({ name, description, price, currency }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: name,
    description: description,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: currency,
      lowPrice: price,
      highPrice: price * 0.4,
      offerCount: 1,
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '500+',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export const ReviewSchema: FC<{
  reviews: Array<{ name: string; text: string; rating: number }>
}> = ({ reviews }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Guías Digitales MX',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: reviews.length,
    },
    review: reviews.map(review => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: '5',
        worstRating: '1',
      },
      reviewBody: review.text,
      author: {
        '@type': 'Person',
        name: review.name,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
