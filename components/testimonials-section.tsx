'use client'

import type { FC } from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { ReviewSchema } from '@/lib/schema-components'

interface Testimonial {
  name: string
  role: string
  company: string
  avatar: string
  content: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: 'Carlos Mendoza',
    role: 'Dueño',
    company: 'Perfume Adictos México (PAMEX)',
    avatar: '/mexican-entrepreneur.png',
    content: 'Desde que implementamos GDMX, nuestros costos de envío bajaron un 55%. Pero lo más importante es el soporte - entienden perfectamente el mercado de perfumes.',
    rating: 5,
  },
  {
    name: 'María González',
    role: 'Gerente de Logística',
    company: 'Entre Perfumes',
    avatar: '/mexican-professional-woman.png',
    content: 'La plataforma es increíblemente intuitiva. Nuestro equipo la domina en menos de una hora. El rastreo en tiempo real es exacto y confiable.',
    rating: 5,
  },
  {
    name: 'Roberto Silva',
    role: 'Emprendedor',
    company: 'Tienda Online de Fragancias',
    avatar: '/mexican-male-manager.png',
    content: 'Pasé de usar 3 paqueterías diferentes a usar GDMX y comparar todas desde un solo lugar. Ahorro tiempo y dinero. Recomendado 100%.',
    rating: 5,
  },
  {
    name: 'Ana Patricia López',
    role: 'Directora',
    company: 'Distribuidora Mayorista',
    avatar: '/mexican-woman-director.png',
    content: 'El sistema de incidencias es excelente. Cuando algo va mal, la resolución es rápida y documentada. Profesionalismo total.',
    rating: 5,
  },
]

const TestimonialsSection: FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <ReviewSchema reviews={testimonials.map(t => ({
        name: t.name,
        text: t.content,
        rating: t.rating
      }))} />

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0F7A7E]/30 bg-[#0F7A7E]/10 px-4 py-2 text-sm font-medium text-[#0F7A7E] mb-4">
            Testimonios
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0A16] mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-[#0B0A16]/70">
            Empresas de logística y e-commerce confían en nosotros para optimizar sus envíos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-[#0F7A7E]/20 bg-gradient-to-br from-white to-[#0F7A7E]/5 shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-[#F7A23B] text-[#F7A23B]"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-[#0B0A16]/70 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-[#0B0A16]">{testimonial.name}</p>
                  <p className="text-sm text-[#0B0A16]/60">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 pt-16 border-t border-[#0F7A7E]/20">
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            <div>
              <p className="text-4xl font-bold text-[#0F7A7E] mb-2">4.8/5</p>
              <p className="text-[#0B0A16]/70">Calificación promedio</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#0F7A7E] mb-2">500+</p>
              <p className="text-[#0B0A16]/70">Reviews verificados</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#0F7A7E] mb-2">98%</p>
              <p className="text-[#0B0A16]/70">Recomendación</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
export { testimonials }
