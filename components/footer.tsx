import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="container mx-auto flex flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo_guias_footer.png"
            alt="Guías Digitales MX"
            width={140}
            height={40}
            className="h-8 w-auto md:h-9"
            priority={false}
          />
          <span className="text-sm text-brand-ink/70">Guías Digitales MX · por GDMX Logistics</span>
        </div>
        <div className="text-sm text-brand-ink/70">© {new Date().getFullYear()} GDMX Logistics. Todos los derechos reservados.</div>
        <div className="flex items-center gap-4">
          <Link href="https://gdmx.mx/dashboard" target="_blank" className="text-sm text-brand-ink/70 hover:text-brand-ink">
            Plataforma
          </Link>
          <a href="#beneficios" className="text-sm text-brand-ink/70 hover:text-brand-ink">
            Beneficios
          </a>
          <a href="#plataforma" className="text-sm text-brand-ink/70 hover:text-brand-ink">
            Plataforma
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-10">
        <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-brand-ink/70">
          <span className="font-medium">Redes sociales:</span>
          <a
            href="https://www.facebook.com/GuiasDigitalesMx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook de Guías Digitales MX"
            className="inline-flex items-center gap-2 hover:text-brand-ink"
          >
            <Facebook className="h-4 w-4" />
            <span>Facebook</span>
          </a>
          <span className="inline-flex items-center gap-2 opacity-70">
            <Instagram className="h-4 w-4" />
            <span>Instagram: Link pendiente</span>
          </span>
          <span className="inline-flex items-center gap-2 opacity-70">
            <Twitter className="h-4 w-4" />
            <span>X: Link pendiente</span>
          </span>
        </div>
      </div>
    </footer>
  )
}
