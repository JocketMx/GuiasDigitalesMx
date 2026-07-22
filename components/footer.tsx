import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Twitter } from 'lucide-react'

// Meta verified badge — blue checkmark matching Meta's official verification mark
function MetaVerifiedBadge() {
  return (
    <span
      title="Cuenta verificada por Meta"
      aria-label="Verificado por Meta"
      className="inline-flex items-center justify-center"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <circle cx="7" cy="7" r="7" fill="#1877F2" />
        <path d="M4 7L6 9.5L10 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

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
          <Link href="https://dashboard.guiasdigitales.mx" target="_blank" className="text-sm text-brand-ink/70 hover:text-brand-ink">
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

      {/* Social profiles + Meta verification */}
      <div className="container mx-auto px-4 pb-10">
        <div className="rounded-xl border border-[#0F7A7E]/10 bg-[#0F7A7E]/5 px-5 py-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Social links */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-ink/50">Síguenos</span>

              {/* Facebook — Meta verified */}
              <a
                href="https://www.facebook.com/GuiasDigitalesMx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook oficial de Guías Digitales MX (verificado por Meta)"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#1877F2]/20 bg-white px-3 py-1.5 text-sm font-medium text-[#1877F2] shadow-sm hover:bg-[#1877F2]/5 transition-colors"
              >
                <Facebook className="h-3.5 w-3.5" />
                <span>Facebook</span>
                <MetaVerifiedBadge />
              </a>

              {/* Instagram — Meta verified */}
              <a
                href="https://www.instagram.com/guiasdigitalesmx/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram oficial de Guías Digitales MX (verificado por Meta)"
                className="inline-flex items-center gap-1.5 rounded-full border border-pink-200 bg-white px-3 py-1.5 text-sm font-medium text-pink-600 shadow-sm hover:bg-pink-50 transition-colors"
              >
                <Instagram className="h-3.5 w-3.5" />
                <span>@guiasdigitalesmx</span>
                <MetaVerifiedBadge />
              </a>

              {/* X — coming soon */}
              <span
                aria-label="Perfil de X / Twitter próximamente"
                className="inline-flex items-center gap-1.5 rounded-full border border-brand-ink/10 bg-white px-3 py-1.5 text-sm font-medium text-brand-ink/40 cursor-default"
              >
                <Twitter className="h-3.5 w-3.5" />
                <span>X</span>
                <span className="rounded-full bg-brand-ink/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide">Próximamente</span>
              </span>
            </div>

            {/* Meta verification callout */}
            <div className="flex items-center gap-2 text-xs text-brand-ink/60">
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="flex-shrink-0">
                <circle cx="7" cy="7" r="7" fill="#1877F2" />
                <path d="M4 7L6 9.5L10 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Cuentas verificadas por <strong className="font-semibold text-brand-ink/80">Meta</strong> en Facebook e Instagram</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
