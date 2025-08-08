import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Headphones, Lock, Rocket, Truck, Zap } from 'lucide-react'

export default function Benefits() {
  const items = [
    {
      icon: Clock,
      title: "Disponible 24/7",
      desc: "Opera cuando tu negocio lo necesite. Cotiza y crea guías en tiempo real.",
    },
    {
      icon: Zap,
      title: "Ahorro inmediato",
      desc: "Flujos claros para crear etiquetas en segundos y reducir errores.",
    },
    {
      icon: Truck,
      title: "Decisiones inteligentes",
      desc: "Compara paqueterías y elige la mejor tarifa por zona, urgencia y servicio.",
    },
    {
      icon: Headphones,
      title: "Soporte humano experto",
      desc: "Acompañamiento de GDMX Logistics cuando surgen envíos complejos.",
    },
    {
      icon: Lock,
      title: "Confianza y seguridad",
      desc: "Buenas prácticas y protección de datos para operar con tranquilidad.",
    },
    {
      icon: Rocket,
      title: "Escala sin fricción",
      desc: "De 1 a 10,000 envíos. Sin cuellos de botella, sin procesos manuales.",
    },
  ]

  return (
    <section id="beneficios" className="w-full py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">Beneficios de nuestra plataforma 24/7</h2>
          <p className="mt-3 text-brand-ink/70">La experiencia de 12 años de GDMX Logistics, ahora digital.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <Card key={it.title} className="border-brand-green/30 transition hover:border-brand-green/50">
              <CardHeader>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-green/20 text-brand-teal-dark">
                  <it.icon className="h-5 w-5" />
                </div>
                <CardTitle className="mt-3">{it.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-brand-ink/70">{it.desc}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
