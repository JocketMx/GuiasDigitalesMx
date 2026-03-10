import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getAllBlogPosts, getBlogPost, getRelatedPosts } from "@/lib/blog-data"
import BlogPostPageClient from "./BlogPostPageClient"

type Props = {
  params: { slug: string }
}

// Generar metadata dinámicamente
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Post no encontrado - Blog GDMX",
      description: "El artículo que buscas no existe o ha sido movido.",
    }
  }

  return {
    title: `${post.title} - Blog GDMX`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    openGraph: {
      title: `${post.title} - Blog GDMX`,
      description: post.excerpt,
      images: [{ url: post.image }],
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} - Blog GDMX`,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

// Generar rutas estáticas
export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.id,
  }))
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(params.slug, 3)

  return <BlogPostPageClient post={post} relatedPosts={relatedPosts} />
}
