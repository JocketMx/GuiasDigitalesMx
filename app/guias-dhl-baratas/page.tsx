import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  ArrowRight, TrendingDown, Zap, Clock, Shield, DollarSign, 
  CheckCircle, MessageSquare, ShoppingCart, Truck, MapPin, Package,
  ChevronDown
} from "lucide-react"
import { useState } from "react"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import WhatsAppButton from "@/components/whatsapp-button"
import GuiasDHLBaratasSchema from "./schema"

export const metadata: Metadata = {
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

// FAQ Component
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqItems = [
    {
      question: "¿Cómo comprar guías DHL baratas en México?",
      answer: "Es muy simple: regístrate en la plataforma, ingresa los datos del envío, selecciona DHL, compara precios con otras paqueterías y genera tu guía en menos de un minuto. Puedes generar guías a crédito y pagar después."
    },
    {
      question: "¿Qué son las guías prepagadas DHL?",
      answer: "Son etiquetas de envío DHL que pagas anticipadamente. Con Guías Digitales MX compras tus guías DHL prepagadas al mejor precio del mercado, sin intermediarios y directamente desde nuestra plataforma."
    },
    {
      question: "¿Cuánto puedo ahorrar al generar envíos desde esta plataforma?",
      answer: "Nuestros usuarios ahorran hasta 60% comparado con los precios de mostrador de DHL y otras paqueterías. Accedes a tarifas preferenciales por volumen sin necesidad de tener un contrato empresarial."
    },
    {
      question: "¿Es seguro usar una plataforma para comprar guías DHL?",
      answer: "Completamente. Guías Digitales MX lleva 12 años en el mercado y ha procesado más de 1.5 millones de envíos. Todos tus datos están protegidos, las guías son 100% válidas y emitidas directamente por DHL."
    },
    {
      question: "¿Esta opción funciona para emprendedores y tiendas en línea?",
      answer: "Sí, es perfecta para emprendedores, tiendas Shopify, WooCommerce, vendedores de marketplaces y pequeños negocios. Puedes generar desde 1 guía hasta cientos por mes."
    },
    {
      question: "¿Puedo cotizar antes de generar mi guía?",
      answer: "Claro. Nuestro cotizador te muestra los precios de DHL, FedEx, Estafeta, UPS y más en tiempo real. Compara y elige la paquetería que mejor se adapte a tu envío."
    },
    {
      question: "¿Qué otras paqueterías puedo usar además de DHL?",
      answer: "Además de DHL Express, trabajamos con FedEx, Estafeta, UPS, Paquetexpress, AMPM y 99 Minutos. Todos disponibles en la misma plataforma para que compares precios."
    },
    {
      question: "¿Cuánto tarda generar una guía DHL?",
      answer: "Menos de 1 minuto. Ingresa los datos del remitente y destinatario, selecciona DHL, confirma el envío y listo: tu guía está lista para imprimir o entregar al cliente."
    },
    {
      question: "¿Necesito experiencia previa para usar la plataforma?",
      answer: "No, está diseñada para cualquier persona. La interfaz es muy intuitiva y tenemos soporte humano disponible si necesitas ayuda. También puedes ver videotutoriales en nuestro sitio."
    },
    {
      question: "¿Puedo usar la plataforma si hago pocos envíos al mes?",
      answer: "Por supuesto. No hay mínimo de envíos, cuota de suscripción ni compromisos. Pagas solo por cada guía que generes. Muchos usuarios empiezan con 1 ó 2 envíos al mes."
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white via-[#0F7A7E]/5 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0F7A7E]/30 bg-[#0F7A7E]/10 px-4 py-2 text-sm font-medium text-[#0F7A7E] mb-4">
              Preguntas frecuentes
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0A16] mb-4">
              Todo sobre guías DHL baratas
            </h2>
            <p className="text-lg text-[#0B0A16]/70">
              Respuestas a las preguntas más comunes sobre cómo ahorrar en tus envíos DHL
            </p>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-[#0F7A7E]/20 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#0F7A7E]/5 transition-colors text-left"
                >
                  <h3 className="font-semibold text-[#0B0A16] text-lg">{item.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-[#0F7A7E] flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-4 border-t border-[#0F7A7E]/20">
                    <p className="text-[#0B0A16]/70 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function GuiasDHLBaratasPage() {
  return (
    <>
      <GuiasDHLBaratasSchema />
      <Navbar />
      <main className="relative w-full">

        {/* HERO SECTION */}
        <section className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-br from-white via-[#0F7A7E]/5 to-[#59C5B3]/10">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-10 w-72 h-72 bg-[#0F7A7E]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#59C5B3]/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6 text-center lg:text-left">
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#0F7A7E]/30 bg-[#0F7A7E]/10 px-4 py-2 text-sm text-[#0F7A7E] font-medium">
                    <TrendingDown className="h-4 w-4" />
                    <span>Hasta 60% más barato</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#F7A23B]/40 bg-[#F7A23B]/10 px-4 py-2 text-sm text-[#F7A23B] font-semibold">
                    <Zap className="h-4 w-4" />
                    <span>Desde $80 + IVA</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B0A16] leading-[1.1]">
                    Guías DHL baratas
                    <span className="block text-[#0F7A7E]">en México para tu negocio</span>
                  </h1>
                  <p className="text-lg md:text-xl text-[#0B0A16]/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                    Cotiza, compara y genera tus guías DHL prepagadas en minutos. La plataforma más fácil y segura para emprendedores, tiendas en línea y negocios que buscan ahorrar en envíos.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto lg:mx-0">
                  <div className="flex items-center gap-2 rounded-xl border border-[#0F7A7E]/20 bg-white px-4 py-3 text-sm text-[#0B0A16]/80 shadow-sm">
                    <Clock className="h-4 w-4 text-[#0F7A7E] flex-shrink-0" />
                    <span>Guía en 1 minuto</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-[#0F7A7E]/20 bg-white px-4 py-3 text-sm text-[#0B0A16]/80 shadow-sm">
                    <Shield className="h-4 w-4 text-[#0F7A7E] flex-shrink-0" />
                    <span>100% seguro</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-[#0F7A7E]/20 bg-white px-4 py-3 text-sm text-[#0B0A16]/80 shadow-sm">
                    <MapPin className="h-4 w-4 text-[#0F7A7E] flex-shrink-0" />
                    <span>Plataforma 24/7</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-[#0F7A7E]/20 bg-white px-4 py-3 text-sm text-[#0B0A16]/80 shadow-sm">
                    <MessageSquare className="h-4 w-4 text-[#0F7A7E] flex-shrink-0" />
                    <span>Atención personalizada</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="https://dashboard.guiasdigitales.mx" target="_blank">
                    <Button size="lg" className="bg-[#0F7A7E] hover:bg-[#0F7A7E]/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-[#0F7A7E]/25 hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                      Generar guía ahora
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <a href="#como-funciona">
                    <Button size="lg" className="bg-[#F7A23B] text-[#0B0A16] hover:bg-[#F7A23B]/90 px-8 py-6 text-lg rounded-xl shadow-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                      Cotizar envío
                      <Zap className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="relative rounded-2xl border-2 border-[#0F7A7E]/20 bg-white p-2 shadow-2xl overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202026-03-10%20a%20la%28s%29%2010.22.29-N4N29JDRaVId0UwPe34dSnDbPE2NYf.png"
                    alt="Cotizador de guías DHL - Compara precios en tiempo real"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-xl"
                  />
                </div>

                <div className="absolute -left-6 top-1/4 rounded-xl border border-[#0F7A7E]/20 bg-white p-4 shadow-xl animate-bounce">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-[#0F7A7E] flex items-center justify-center">
                      <Package className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#0B0A16]">1.5M+</div>
                      <div className="text-xs text-[#0B0A16]/60">Envíos procesados</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-4 bottom-1/4 rounded-xl border border-[#F7A23B]/30 bg-white p-4 shadow-xl animate-bounce" style={{ animationDelay: "0.5s" }}>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-[#F7A23B] flex items-center justify-center">
                      <TrendingDown className="h-5 w-5 text-[#0B0A16]" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#0B0A16]">60%</div>
                      <div className="text-xs text-[#0B0A16]/60">Ahorro promedio</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROOF SECTION */}
        <section className="py-12 md:py-16 bg-[#FAFAFA] border-t border-b border-[#0F7A7E]/10">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#0F7A7E] mb-2">1.5M+</div>
                <p className="text-[#0B0A16]/70">Envíos procesados</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#0F7A7E] mb-2">200+</div>
                <p className="text-[#0B0A16]/70">Empresas confían en nosotros</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#0F7A7E] mb-2">60%</div>
                <p className="text-[#0B0A16]/70">Ahorro en promedio</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#0F7A7E] mb-2">12 años</div>
                <p className="text-[#0B0A16]/70">De experiencia en logística</p>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="py-20 md:py-28 bg-[#FAFAFA]">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0F7A7E]/20 bg-[#0F7A7E]/5 px-4 py-2 text-sm font-medium text-[#0F7A7E] mb-6">
                <Zap className="h-4 w-4" />
                Por qué elegir nuestro servicio
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B0A16] mb-4">
                Todo lo que necesitas para
                <span className="block text-[#0F7A7E]">ahorrar en envíos DHL</span>
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: DollarSign,
                  title: "Mejores precios que comprar directo",
                  desc: "Acceso a tarifas preferenciales con DHL sin necesidad de contrato empresarial. Ahorra desde el primer envío."
                },
                {
                  icon: Zap,
                  title: "Genera guías en minutos",
                  desc: "De cotización a guía impresa en menos de 60 segundos. Sin pasos innecesarios ni complicaciones."
                },
                {
                  icon: Package,
                  title: "Plataforma fácil de usar",
                  desc: "Interfaz intuitiva y amigable. No necesitas experiencia previa para generar tus guías DHL."
                },
                {
                  icon: ShoppingCart,
                  title: "Perfecto para ecommerce",
                  desc: "Integración con Shopify y WooCommerce. Automatiza tus envíos sin salir de tu tienda en línea."
                },
                {
                  icon: MessageSquare,
                  title: "Soporte humano incluido",
                  desc: "Acompañamiento de nuestro equipo cuando surgen envíos complejos. Atención personalizada 24/7."
                },
                {
                  icon: Clock,
                  title: "Cotización clara y rápida",
                  desc: "Ve precios en tiempo real de todas las paqueterías. Elige la que mejor se adapte a tu envío."
                }
              ].map((item, index) => (
                <Card
                  key={index}
                  className="group border border-[#0F7A7E]/10 bg-white hover:border-[#0F7A7E]/30 hover:shadow-lg hover:shadow-[#0F7A7E]/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader className="pb-2">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0F7A7E]/10 text-[#0F7A7E] mb-3 group-hover:bg-[#0F7A7E] group-hover:text-white transition-all duration-300">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg text-[#0B0A16] group-hover:text-[#0F7A7E] transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-[#0B0A16]/60">
                    {item.desc}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section id="como-funciona" className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0F7A7E]/20 bg-[#0F7A7E]/5 px-4 py-2 text-sm font-medium text-[#0F7A7E] mb-6">
                <CheckCircle className="h-4 w-4" />
                Proceso simple
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B0A16] mb-4">
                Cómo generar tus guías DHL baratas
              </h2>
              <p className="text-lg text-[#0B0A16]/70">
                3 simples pasos para empezar a ahorrar en tus envíos
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  step: "1",
                  title: "Cotiza tu envío",
                  desc: "Ingresa el origen, destino y detalles del paquete. El sistema te muestra precios de DHL y otras paqueterías en tiempo real."
                },
                {
                  step: "2",
                  title: "Genera tu guía",
                  desc: "Elige DHL o la paquetería que prefieras. Confirma los datos y listo: tu guía está generada en menos de un minuto."
                },
                {
                  step: "3",
                  title: "Entrega tu paquete",
                  desc: "Imprime la guía y entrégala a DHL o a puntos de recepción autorizados. Recibe notificaciones del estado en tiempo real."
                }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="rounded-2xl border-2 border-[#0F7A7E]/20 bg-gradient-to-br from-white to-[#0F7A7E]/5 p-8 text-center h-full">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#0F7A7E] text-white font-bold text-2xl mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-[#0B0A16] mb-3">{item.title}</h3>
                    <p className="text-[#0B0A16]/70">{item.desc}</p>
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="h-8 w-8 text-[#0F7A7E]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMMERCIAL SEO COPY SECTION */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-white via-[#0F7A7E]/5 to-[#59C5B3]/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B0A16] mb-8">
                ¿Por qué las guías DHL son más baratas en Guías Digitales MX?
              </h2>

              <div className="space-y-6 text-lg text-[#0B0A16]/75 leading-relaxed">
                <p>
                  Si eres emprendedor, vendedor en línea o empresa pequeña en México, probablemente conozcas el problema: los precios de mostrador de DHL para envíos son muy altos. Una guía DHL estándar cuesta entre $150 y $300 pesos, lo que reduce significativamente tu margen de ganancia, especialmente en envíos de bajo valor.
                </p>

                <p>
                  Guías Digitales MX resuelve esto ofreciendo acceso a tarifas corporativas negociadas directamente con DHL y otras paqueterías. Al consolidar el volumen de miles de usuarios, hemos conseguido descuentos especiales que podemos trasladar directamente a ti. Resultado: guías DHL baratas desde $80 + IVA, con ahorros de hasta 60%.
                </p>

                <p>
                  Nuestra plataforma está diseñada específicamente para pequeños negocios y emprendedores. No necesitas contrato empresarial ni comprometerte a volúmenes mínimos. Generas guías cuando las necesitas, pagas lo que usas, y accedes a precios de empresa sin pagar por servicios innecesarios. Además, el proceso es totalmente automatizado: cotizas, generas y descargas tu guía en menos de un minuto.
                </p>

                <p>
                  Con 12 años en el mercado, más de 1.5 millones de envíos procesados y 200+ empresas confiando en nosotros, sabemos exactamente qué necesitan los emprendedores mexicanos: precios justos, proceso simple, soporte humano cuando lo necesitan, y la tranquilidad de saber que sus paquetes llegan a tiempo. Por eso somos la plataforma número uno para generar guías baratas en México.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO IS THIS FOR SECTION */}
        <section className="py-20 md:py-28 bg-[#FAFAFA]">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B0A16] mb-4">
                Para quién es Guías Digitales MX
              </h2>
              <p className="text-lg text-[#0B0A16]/70">
                Independientemente del tamaño de tu negocio, nosotros te ayudamos a ahorrar
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: ShoppingCart,
                  title: "Emprendedores",
                  desc: "Que venden en línea, mercados o redes sociales y necesitan envíos baratos y confiables."
                },
                {
                  icon: Truck,
                  title: "Tiendas en línea",
                  desc: "Shopify, WooCommerce o plataformas propias. Integración directa para automatizar envíos."
                },
                {
                  icon: Package,
                  title: "Negocios con envíos frecuentes",
                  desc: "Desde 5 hasta cientos de envíos mensuales. Acceso a tarifas progresivas según volumen."
                },
                {
                  icon: DollarSign,
                  title: "Empresas que buscan ahorrar",
                  desc: "En logística sin perder calidad ni confiabilidad. 60% de ahorro garantizado en promedio."
                }
              ].map((item, index) => (
                <Card
                  key={index}
                  className="group border border-[#0F7A7E]/20 bg-white hover:border-[#0F7A7E]/40 hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader className="pb-2">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0F7A7E]/10 text-[#0F7A7E] mb-3 group-hover:bg-[#0F7A7E] group-hover:text-white transition-all">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg text-[#0B0A16]">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-[#0B0A16]/70">
                    {item.desc}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <FAQSection />

        {/* FINAL CTA SECTION */}
        <section className="py-20 md:py-28 bg-gradient-to-r from-[#0F7A7E] to-[#0F7A7E]/90 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Empieza a ahorrar en tus envíos hoy
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Genera tus guías DHL baratas en minutos. Acceso a tarifas corporativas sin compromiso ni cuotas mensuales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="https://dashboard.guiasdigitales.mx" target="_blank">
                  <Button size="lg" className="bg-white text-[#0F7A7E] hover:bg-white/90 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 w-full sm:w-auto font-semibold">
                    Generar guía ahora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://wa.me/523326398319?text=Hola%20me%20interesa%20saber%20más%20sobre%20guías%20DHL%20baratas" target="_blank">
                  <Button size="lg" className="bg-white/20 text-white hover:bg-white/30 px-8 py-6 text-lg rounded-xl border border-white/30 shadow-lg transition-all hover:scale-105 w-full sm:w-auto font-semibold">
                    Hablar con un asesor
                    <MessageSquare className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <WhatsAppButton />
      <Footer />
    </>
  )
}
