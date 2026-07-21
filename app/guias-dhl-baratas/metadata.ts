import { Metadata } from 'next'

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: "Guías DHL baratas en México | Ahorra 60% | Guías Digitales MX",
    description: "Compra guías DHL baratas en México. Cotiza, genera y entrega envíos en minutos con la plataforma más fácil y segura para emprendedores y tiendas en línea.",
    keywords: "guías DHL baratas, guías prepagadas DHL, envíos baratos México, guías para envíos, cotizar envío DHL barato",
    openGraph: {
      title: "Guías DHL baratas en México | Ahorra 60%",
      description: "Genera guías DHL baratas desde $80 + IVA. Plataforma 100% mexicana para emprendedores, ecommerce y negocios.",
      type: "website",
      url: "https://guiasdigitales.mx/guias-dhl-baratas",
    },
    alternates: {
      canonical: "https://guiasdigitales.mx/guias-dhl-baratas",
    },
  }
}
