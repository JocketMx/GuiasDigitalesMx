"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, Tag } from "lucide-react"
import type { BlogPost } from "@/lib/blog-data"

type Props = {
  post: BlogPost
  relatedPosts: BlogPost[]
}

export default function BlogPostPageClient({ post, relatedPosts }: Props) {
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

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        })
      } catch (err) {
        console.log("Error sharing:", err)
      }
    } else {
      // Fallback: copiar URL al clipboard
      navigator.clipboard.writeText(window.location.href)
      alert("URL copiada al portapapeles")
    }
  }

  const renderContent = (content: string) => {
    return content.split("\n").map((paragraph, index) => {
      if (paragraph.startsWith("# ")) {
        return (
          <h2 key={index} className="text-2xl font-bold text-[#0F7A7E] mt-8 mb-4">
            {paragraph.replace("# ", "")}
          </h2>
        )
      }
      if (paragraph.startsWith("## ")) {
        return (
          <h3 key={index} className="text-xl font-semibold text-[#0F7A7E] mt-6 mb-3">
            {paragraph.replace("## ", "")}
          </h3>
        )
      }
      if (paragraph.startsWith("### ")) {
        return (
          <h4 key={index} className="text-lg font-semibold text-brand-ink mt-4 mb-2">
            {paragraph.replace("### ", "")}
          </h4>
        )
      }
      if (paragraph.startsWith("#### ")) {
        return (
          <h5 key={index} className="text-base font-semibold text-brand-ink mt-3 mb-2">
            {paragraph.replace("#### ", "")}
          </h5>
        )
      }
      if (paragraph.startsWith("- ")) {
        return (
          <li key={index} className="ml-4 mb-1 list-disc">
            {paragraph.replace("- ", "")}
          </li>
        )
      }
      if (paragraph.startsWith("| ")) {
        // Simple table rendering
        const cells = paragraph.split("|").filter((cell) => cell.trim())
        return (
          <div key={index} className="flex border-b border-gray-200 py-2">
            {cells.map((cell, cellIndex) => (
              <div key={cellIndex} className="flex-1 px-2 text-sm">
                {cell.trim()}
              </div>
            ))}
          </div>
        )
      }
      if (paragraph.startsWith("*") && paragraph.endsWith("*") && paragraph.length > 2) {
        return (
          <p key={index} className="italic text-brand-ink/70 text-center my-4">
            {paragraph.replace(/\*/g, "")}
          </p>
        )
      }
      if (paragraph.startsWith("---")) {
        return <hr key={index} className="my-8 border-[#0F7A7E]/20" />
      }
      if (paragraph.trim() === "") {
        return <br key={index} />
      }
      if (paragraph.startsWith("[") && paragraph.includes("](")) {
        // Simple link rendering
        const linkMatch = paragraph.match(/\[([^\]]+)\]$$([^)]+)$$/)
        if (linkMatch) {
          const [, text, url] = linkMatch
          return (
            <p key={index} className="mb-4">
              <Link href={url} className="text-[#0F7A7E] hover:underline font-medium">
                {text}
              </Link>
            </p>
          )
        }
      }
      return (
        <p key={index} className="mb-4">
          {paragraph}
        </p>
      )
    })
  }

  return (
    <div className="relative w-full py-16 md:py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50/50">
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
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex items-center gap-2 text-sm text-brand-ink/60">
            <Link href="/" className="hover:text-[#0F7A7E] transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#0F7A7E] transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-[#0F7A7E] font-medium line-clamp-1">{post.title}</span>
          </nav>
        </div>

        {/* Botón volver */}
        <div className="mb-8">
          <Link href="/blog">
            <Button
              variant="outline"
              className="border-[#0F7A7E] text-[#0F7A7E] hover:bg-[#0F7A7E] hover:text-white transition-all duration-300 bg-transparent"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al blog
            </Button>
          </Link>
        </div>

        {/* Header del artículo */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span
              className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium ${getCategoryColor(post.category)}`}
            >
              {post.category}
            </span>
            {post.featured && (
              <span className="bg-gradient-to-r from-[#F7A23B] to-[#E89529] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                DESTACADO
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0F7A7E] mb-4">{post.title}</h1>

          <p className="text-lg text-brand-ink/80 mb-6 leading-relaxed">{post.excerpt}</p>

          {/* Metadata del artículo */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-brand-ink/60 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {formatDate(post.date)}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime} de lectura
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author.name} - {post.author.role}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-md bg-[#0F7A7E]/10 px-3 py-1 text-sm text-[#0F7A7E]"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>

          {/* Botón compartir */}
          <div className="flex justify-end mb-8">
            <Button
              onClick={handleShare}
              variant="outline"
              size="sm"
              className="border-[#59C5B3] text-[#0F7A7E] hover:bg-[#59C5B3] hover:text-white transition-all duration-300 bg-transparent"
            >
              <Share2 className="mr-2 h-4 w-4" />
              Compartir
            </Button>
          </div>
        </div>

        {/* Imagen principal */}
        <div className="mb-8">
          <div className="relative aspect-video overflow-hidden rounded-xl border-2 border-[#0F7A7E]/20 shadow-lg">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={800}
              height={450}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Contenido del artículo */}
        <div className="prose prose-lg max-w-none mb-12">
          <div
            className="text-brand-ink/90 leading-relaxed"
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
            }}
          >
            {renderContent(post.content)}
          </div>
        </div>

        {/* Información del autor */}
        <div className="mb-12">
          <Card className="border-2 border-[#0F7A7E]/20 bg-white/95 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Image
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full border-2 border-[#59C5B3]/30"
                />
                <div>
                  <h3 className="font-semibold text-[#0F7A7E] text-lg">{post.author.name}</h3>
                  <p className="text-brand-ink/70">{post.author.role}</p>
                  <p className="text-sm text-brand-ink/60 mt-1">
                    Especialista en logística y tecnología en GDMX Logistics
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Posts relacionados */}
        {relatedPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#0F7A7E] mb-6">Artículos relacionados</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Card
                  key={relatedPost.id}
                  className="group border-2 border-[#0F7A7E]/20 bg-white/95 backdrop-blur-sm transition-all duration-300 hover:translate-y-[-4px] hover:border-[#0F7A7E]/50 hover:shadow-xl hover:shadow-[#0F7A7E]/20 overflow-hidden h-full flex flex-col"
                >
                  <div className="relative h-32 overflow-hidden">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      width={300}
                      height={128}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2">
                      <span
                        className={`inline-flex items-center rounded-full border px-2 py-1 text-xs font-medium ${getCategoryColor(relatedPost.category)}`}
                      >
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader className="flex-1">
                    <CardTitle className="text-sm group-hover:text-[#0F7A7E] transition-colors duration-300 line-clamp-2">
                      {relatedPost.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs text-brand-ink/80 mb-3 line-clamp-2">{relatedPost.excerpt}</p>
                    <Link href={`/blog/${relatedPost.id}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-[#0F7A7E] text-[#0F7A7E] hover:bg-[#0F7A7E] hover:text-white transition-all duration-300 bg-transparent"
                      >
                        Leer más
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Call to action */}
        <div className="text-center">
          <Card className="border-2 border-[#59C5B3]/30 bg-gradient-to-r from-white/95 to-[#59C5B3]/5 backdrop-blur-sm shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[#0F7A7E] mb-4">¿Te gustó este artículo?</h3>
              <p className="text-brand-ink/80 mb-6">Mantente al día con todas nuestras novedades y actualizaciones.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/blog">
                  <Button
                    size="lg"
                    className="bg-[#0F7A7E] text-white hover:bg-[#17A2A6] transition-all duration-300 hover:scale-105"
                  >
                    Ver más artículos
                  </Button>
                </Link>
                <Link href="https://dashboard.guiasdigitales.mx" target="_blank">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#59C5B3] text-[#0F7A7E] hover:bg-[#59C5B3] hover:text-white transition-all duration-300 hover:scale-105 bg-transparent"
                  >
                    Probar la plataforma
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx>{`
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

        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}
