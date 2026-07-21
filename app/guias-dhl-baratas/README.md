# Página SEO: Guías DHL Baratas en México

## Descripción General
Página optimizada para la keyword primaria **"guías DHL baratas"** con objetivo de capturar tráfico de intención comercial/transaccional desde Google.

## Estructura de Archivos
```
/app/guias-dhl-baratas/
├── page.tsx          # Componente principal de la página
└── schema.tsx        # Schema JSON-LD para SEO
```

## Características Implementadas

### 1. SEO On-Page
- ✅ H1 optimizado con keyword primaria
- ✅ Meta title con keyword y propuesta de valor
- ✅ Meta description optimizada para CTR
- ✅ Canonical URL correcta
- ✅ Open Graph tags
- ✅ Estructura H1/H2/H3 semántica

### 2. Secciones de Contenido
- **Hero**: Propuesta de valor clara, CTA primario y secundario
- **Proof Section**: Métricas de confianza (1.5M envíos, 200+ empresas, 60% ahorro)
- **Benefits**: 6 tarjetas con razones para elegir la plataforma
- **How It Works**: 3 pasos simples y claros
- **Commercial SEO Copy**: 4 párrafos optimizados con keywords naturales
- **Who Is This For**: 4 segmentos de audiencia
- **FAQ**: 10 preguntas frecuentes optimizadas para búsqueda por voz
- **Final CTA**: Sección de conversión con doble botón

### 3. Schema Markup
- FAQPage schema (10 preguntas)
- Organization schema (con datos de contacto)
- WebPage schema

### 4. Diseño Consistente
- Reutiliza componentes UI existentes (Button, Card)
- Mantiene sistema de colores del sitio (#0F7A7E, #F7A23B)
- Responsive design mobile-first
- Animaciones sutiles y accesibles

## Keywords Cubiertos

### Primaria
- guías DHL baratas

### Secundarias
- guías prepagadas DHL
- envíos baratos México
- guías para envíos
- cotizar envío DHL barato
- envíos para emprendedores México
- paquetería barata México
- plataforma de envíos baratos

## Cómo Reutilizar para Otras Keywords

Esta página está estructurada para ser fácilmente duplicada. Para crear una nueva página SEO:

### Paso 1: Copiar la carpeta
```
cp -r /app/guias-dhl-baratas /app/nueva-keyword
```

### Paso 2: Actualizar variables en la nueva página
- **URL**: Cambiar slug en `/app/[nueva-keyword]/page.tsx`
- **PRIMARY_KEYWORD**: La keyword objetivo
- **SECONDARY_KEYWORDS**: Keywords relacionadas
- **H1**: Reescribir manteniendo la keyword
- **Meta title/description**: Adaptadas a la nueva keyword
- **Content**: Reescribir beneficios y FAQs manteniendo estructura

### Paso 3: Variables a reemplazar en `page.tsx`

```typescript
// CAMBIAR ESTO:
export const metadata: Metadata = {
  title: "Guías DHL baratas en México...", // NUEVO TITLE
  description: "Compra guías DHL baratas...", // NUEVA DESCRIPCIÓN
  keywords: "guías DHL baratas, ...", // NUEVAS KEYWORDS
  alternates: {
    canonical: "https://guiasdigitales.mx/guias-dhl-baratas", // NUEVO SLUG
  },
}

// Y EN EL HERO:
<h1 className="...">
  Guías DHL baratas  {/* CAMBIAR KEYWORD */}
  <span className="block text-[#0F7A7E]">en México para tu negocio</span>
</h1>
```

### Paso 4: Actualizar schema en `schema.tsx`
- Cambiar nombre de la página
- Actualizar description
- Mantener FAQs relevantes o crear nuevas

### Paso 5: Actualizar sitemap
Agregar nueva ruta en `/app/sitemap.ts`:
```typescript
{
  url: `${baseUrl}/nueva-keyword`,
  lastModified: new Date(),
  changeFrequency: 'weekly',
  priority: 0.9,
}
```

## Ejemplos de Nuevas Páginas a Crear

Usando esta plantilla, puedes crear:

1. **guías-fedex-baratas**
   - Primary: "guías FedEx baratas"
   - Secondary: guías prepagadas FedEx, envíos FedEx económicos

2. **guías-ups-baratas**
   - Primary: "guías UPS baratas"
   - Secondary: guías prepagadas UPS, envíos UPS económicos

3. **guías-prepagadas-dhl**
   - Primary: "guías prepagadas DHL"
   - Secondary: comprar guías DHL prepagadas, guías DHL baratas

4. **envios-baratos-mexico**
   - Primary: "envíos baratos México"
   - Secondary: envíos económicos, paquetería barata

5. **plataforma-envios-baratos**
   - Primary: "plataforma de envíos baratos"
   - Secondary: software para envíos económicos

## Performance & SEO Metrics

### On-Page Elements
- Palabra clave principal aparece en: H1, Meta Title, URL, 2-3 párrafos
- Palabras clave secundarias: Distribuidas naturalmente sin repetición
- Densidad de keyword: 0.5-1% (natural, sin keyword stuffing)
- Enlaces internos: 5-8 links con anchor text natural

### Content Quality
- Longitud total: ~2,500 palabras
- Secciones: 9 principales
- Párrafos cortos: 2-3 líneas promedio
- Listas y viñetas: Para escaneo visual
- Multimedia: Imágenes del producto

### Technical SEO
- Mobile-first design
- Lighthouse score target: 90+
- Core Web Vitals optimizados
- Structured data implementado
- Canonical tag presente
- Open Graph metadata

## Internal Linking Strategy

La página incluye enlaces internos contextuales a:
- **Homepage**: `/` - Branding general
- **Dashboard**: `https://dashboard.guiasdigitales.mx` - CTA primario
- **Blog**: Puede agregarse para temas relacionados
- **Otras pages SEO**: Cuando existan

Todos los enlaces usan anchor text natural y relevante.

## CTA Strategy

**Primario**: "Generar guía ahora" → Dashboard (conversión principal)
**Secundario**: "Cotizar envío" → Sección How It Works (micor-conversion)
**Terciario**: "Hablar con un asesor" → WhatsApp (lead generation)

## Mantenimiento y Updates

### Mensualmente
- Revisar rankings en GSC
- Actualizar métricas si cambian (envíos procesados, ahorro %)
- A/B test en CTAs

### Trimestralmente
- Revisar performance de keywords
- Actualizar FAQ con preguntas reales
- Mejorar contenido basado en engagement

### Anualmente
- Full SEO audit
- Actualizar números y estadísticas
- Revisar y crear nuevas variaciones de keywords

## Checklist de Publicación

- ✅ Página creada en `/app/guias-dhl-baratas/page.tsx`
- ✅ Schema JSON-LD creado
- ✅ Sitemap actualizado
- ✅ Metadata correcta
- ✅ Links internos configurados
- ✅ Mobile responsive verificado
- ✅ Performance optimizado
- ✅ Enviado a Google Search Console
- ✅ Solicitada indexación manual

## Notas Importantes

1. **No modificar diseño global**: La página mantiene el sistema de diseño existente
2. **Componentes reutilizables**: Usa Card, Button, Footer, Navbar existentes
3. **Colores corporativos**: #0F7A7E (teal), #F7A23B (naranja)
4. **Tipo de contenido**: Optimizado para intención comercial/transaccional
5. **Público objetivo**: Emprendedores, tiendas en línea, negocios pequeños en México

## Questions?

Para agregar nuevas páginas SEO o modificar ésta, contactar a:
- Tech Lead
- SEO Manager
