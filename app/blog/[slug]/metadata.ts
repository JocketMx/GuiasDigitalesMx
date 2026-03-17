import { Metadata } from 'next'
import { getBlogPost } from '@/lib/blog-data'

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {
      title: 'Post no encontrado',
      description: 'El artículo que buscas no existe.',
    }
  }

  const url = `https://guiasdigitales.mx/blog/${params.slug}`

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: url,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: `https://guiasdigitales.mx${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [`https://guiasdigitales.mx${post.image}`],
    },
    alternates: {
      canonical: url,
    },
  }
}
