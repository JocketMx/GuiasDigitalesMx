import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star } from 'lucide-react'

export default function Testimonials() {
  const data = [
    {
      name: "María G.",
      role: "E‑commerce",
      quote:
        "Pasé del caos a la claridad: cotizo y genero etiquetas en minutos, incluso de madrugada. Es eficiencia real.",
    },
    {
      name: "Jorge R.",
      role: "Operaciones",
      quote:
        "Cuando un envío se complica, el soporte de GDMX Logistics responde. Tranquilidad que se nota en resultados.",
    },
    {
      name: "Ana P.",
      role: "Retail",
      quote:
        "Con multipaquetería elijo la mejor opción por zona y urgencia. Menos incidencias, más entregas a tiempo.",
    },
  ]

  return (
    <section id="testimonios" className="w-full py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">Testimonios</h2>
          <p className="mt-3 text-brand-ink/70">Prueba social que impulsa decisiones: resultados medibles, clientes reales.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((t) => (
            <Card key={t.name} className="border-brand-green/30">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Image
                    src={`/placeholder.svg?height=48&width=48&query=foto%20de%20perfil`}
                    alt={`Avatar de ${t.name}`}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full border"
                  />
                  <div>
                    <div className="font-medium text-brand-ink">{t.name}</div>
                    <div className="text-xs text-brand-ink/70">{t.role}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-2 flex text-amber-500" aria-hidden>
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
                <p className="text-brand-ink/80">&ldquo;{t.quote}&rdquo;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
