"use client"

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const phone = "523326398319" // +52 33 2639 8319 sin espacios ni +
  const text = encodeURIComponent("Hola, me interesa Guías Digitales MX.")
  const href = `https://wa.me/${phone}?text=${text}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp al +52 33 2639 8319"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 md:bottom-6 md:right-6"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="sr-only">WhatsApp</span>
    </a>
  )
}
