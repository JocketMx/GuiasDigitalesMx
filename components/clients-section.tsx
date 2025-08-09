import ClientsCarousel, { type ClientLogo } from "./clients-carousel"

export default function ClientsSection() {
  const logos: ClientLogo[] = [
    {
      name: "PAMEX Essentials",
      src: "/images/clients/logo_pamex.png",
      href: "https://www.facebook.com/groups/perfumeadictosmexicoEssentials",
    },
    {
      name: "Grupo Formativo Estudiantil",
      src: "/images/clients/logo_grupoformativoestudiantil.png",
      href: "https://grupoformativoestudiantil.org/",
    },
    { name: "SeaJewels by ultrafemme", src: "/images/clients/logo_ultrafemme.jpg", href: "https://ultrafemme.com" },
    { name: "Entre Perfumes", src: "/images/clients/logo_entreperfumes.jpg" },
    { name: "Perfumes 11:11", src: "/images/clients/logo_perfumes1111.png", href: "https://perfumes11-11.com" },
    // Sekega actualizado al SVG nuevo
    { name: "Sekega", src: "/images/clients/logo_sekega.svg", href: "https://sekega.com" },
    // Nuevo cliente Essentials usando el PNG anterior de Sekega
    { name: "Essentials", src: "/images/clients/logo_sekega.png", href: "https://essentialsmx.com" },
  ]

  return (
    <section id="clientes" className="relative w-full py-16">
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#59C5B3]/10 via-white to-[#F7A23B]/10"
        aria-hidden
      />
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">Nuestros clientes</h2>
          <p className="mt-3 text-brand-ink/70">Marcas que confían en GDMX Logistics y Guías Digitales MX.</p>
        </div>

        <ClientsCarousel logos={logos} className="mb-6" />
        <ClientsCarousel logos={[...logos].reverse()} autoPlayDelayMs={3000} />
      </div>
    </section>
  )
}
