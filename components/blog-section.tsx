"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, Newspaper, Zap, Rocket } from "lucide-react"
import { getAllBlogPosts } from "@/lib/blog-data"

export default function BlogSection() {
  const allPosts = getAllBlogPosts()
  const featuredPosts = allPosts.filter((post) => post.featured)
  const regularPosts = allPosts.filter((post) => !post.featured).slice(0, 4)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("es-MX", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      Lanzamiento: "bg-[#F7A23B]/10 text-[#F7A23B] border-[#F7A23B]/30",
      Alianzas: "bg-[#59C5B3]/10 text-[#0F7A7E] border-[#59C5B3]/30",
      Tarifas: "bg-[#0F7A7E]/10 text-[#0F7A7E] border-[#0F7A7E]/30",
      Expansión: "bg-green-100 text-green-700 border-green-300",
      Desarrollo: "bg-purple-100 text-purple-700 border-purple-300",
      Integraciones: "bg-blue-100 text-blue-700 border-blue-300",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700 border-gray-300"
  }

  return (
    <section
      id="blog"
      className="relative w-full py-16 md:py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50/50"
    >
      {/* Marco decorativo animado */}
      <div className="absolute inset-4 -z-10 rounded-3xl border-2 border-[#0F7A7E]/20 bg-gradient-to-br from-[#0F7A7E]/5 via-transparent to-[#59C5B3]/5 overflow-hidden">
        <div className="absolute inset-4 rounded-2xl border border-[#59C5B3]/30 animate-gentle-glow" />

        {/* Elementos decorativos contenidos */}
        <div
          className="pointer-events-none absolute top-4 left-4 h-32 w-32 rounded-full bg-[#59C5B3]/25 blur-3xl animate-bounce"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="pointer-events-none absolute bottom-4 right-4 h-32 w-32 rounded-full bg-[#F7A23B]/20 blur-3xl animate-bounce"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        />
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0F7A7E]/20 blur-2xl animate-gentle-glow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#0F7A7E]/30 bg-[#0F7A7E]/10 px-4 py-2 text-sm font-medium text-[#0F7A7E] mb-4 animate-slide-in-badge">
            <Newspaper className="h-4 w-4" />
            Novedades y actualizaciones
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#0F7A7E] sm:text-4xl">Blog GDMX</h2>
          <p className="mt-3 text-brand-ink/70">
            Mantente al día con las últimas novedades, lanzamientos y mejoras de nuestra plataforma.
          </p>
        </div>

        {/* Posts destacados */}
        {featuredPosts.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-[#0F7A7E] mb-6 flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Destacados
            </h3>
            <div className="grid gap-8 md:grid-cols-2">
              {featuredPosts.map((post, index) => (
                <Card
                  key={post.id}
                  className="group border-2 border-[#0F7A7E]/20 bg-white/95 backdrop-blur-sm transition-all duration-300 hover:translate-y-[-4px] hover:border-[#0F7A7E]/50 hover:shadow-xl hover:shadow-[#0F7A7E]/20 animate-fade-in-up overflow-hidden"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={200}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${getCategoryColor(post.category)}`}
                      >
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-[#F7A23B] to-[#E89529] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      DESTACADO
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-[#0F7A7E] transition-colors duration-300">
                      {post.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-brand-ink/60">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brand-ink/80 mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-md bg-[#0F7A7E]/10 px-2 py-1 text-xs text-[#0F7A7E]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <Button
                        variant="outline"
                        className="border-[#0F7A7E] text-[#0F7A7E] hover:bg-[#0F7A7E] hover:text-white transition-all duration-300 group-hover:scale-105 bg-transparent relative overflow-hidden group/btn"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          Leer artículo completo
                          <ArrowRight className="h-4 w-4" />
                        </span>
                        {/* Efecto de brillo */}
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500"></span>
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Posts regulares */}
        <div>
          <h3 className="text-xl font-semibold text-[#0F7A7E] mb-6 flex items-center gap-2">
            <Rocket className="h-5 w-5" />
            Últimas actualizaciones
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {regularPosts.map((post, index) => (
              <Card
                key={post.id}
                className="group border-2 border-[#0F7A7E]/20 bg-white/95 backdrop-blur-sm transition-all duration-300 hover:translate-y-[-4px] hover:border-[#0F7A7E]/50 hover:shadow-xl hover:shadow-[#0F7A7E]/20 animate-fade-in-up overflow-hidden h-full flex flex-col"
                style={{ animationDelay: `${(index + featuredPosts.length) * 100}ms` }}
              >
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={300}
                    height={128}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2">
                    <span
                      className={`inline-flex items-center rounded-full border px-2 py-1 text-xs font-medium ${getCategoryColor(post.category)}`}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader className="flex-1">
                  <CardTitle className="text-base group-hover:text-[#0F7A7E] transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center gap-3 text-xs text-brand-ink/60">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-brand-ink/80 mb-3 line-clamp-3">{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-[#0F7A7E] text-[#0F7A7E] hover:bg-[#0F7A7E] hover:text-white transition-all duration-300 bg-transparent relative overflow-hidden group/btn"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Leer más
                        <ArrowRight className="h-3 w-3" />
                      </span>
                      {/* Efecto de brillo */}
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500"></span>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <Link href="/blog">
            <Button
              size="lg"
              className="bg-[#0F7A7E] text-white hover:bg-[#17A2A6] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Ver todos los artículos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        @keyframes gentle-glow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
        .animate-gentle-glow {
          animation: gentle-glow 4s ease-in-out infinite;
        }

        @keyframes slide-in-badge {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in-badge {
          animation: slide-in-badge 0.8s ease-out forwards;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}
