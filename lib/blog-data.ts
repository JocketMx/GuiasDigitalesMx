export type BlogPost = {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  category: string
  image: string
  featured: boolean
  tags: string[]
  author: {
    name: string
    role: string
    avatar: string
  }
}

// Datos del blog centralizados
export const blogPosts: BlogPost[] = [
  {
    id: "nueva-plataforma-2024",
    title: "🚀 Nueva Plataforma: dashboard.guiasdigitales.mx",
    excerpt:
      "Lanzamos nuestra nueva plataforma con interfaz renovada, mejor rendimiento y nuevas funcionalidades para optimizar tus envíos.",
    content: `
# Nueva Plataforma: dashboard.guiasdigitales.mx

Estamos emocionados de presentar nuestra nueva plataforma **dashboard.guiasdigitales.mx** con una interfaz completamente renovada, mejor rendimiento y nuevas funcionalidades diseñadas para optimizar tus envíos.

## ✨ Principales mejoras

### Interfaz renovada
- **Diseño moderno y limpio** que facilita la navegación
- **Dashboard intuitivo** con métricas en tiempo real
- **Responsive design** optimizado para móviles y tablets
- **Modo oscuro** disponible para mayor comodidad

### Mejor rendimiento
- **Carga 3x más rápida** que la versión anterior
- **Optimización de imágenes** automática
- **Cache inteligente** para una experiencia fluida
- **Sincronización en tiempo real** con paqueterías

### Nuevas funcionalidades

#### 🎯 Dashboard mejorado
- Métricas de envíos en tiempo real
- Gráficos interactivos de rendimiento
- Alertas personalizables
- Historial detallado de transacciones

#### 📊 Reportes avanzados
- Exportación a Excel y PDF
- Análisis de costos por período
- Comparativas entre paqueterías
- Reportes de eficiencia de rutas

#### 🔔 Sistema de notificaciones
- Alertas push en tiempo real
- Notificaciones por email y SMS
- Estados de envío actualizados
- Recordatorios de recolección

#### 🤖 Automatización inteligente
- Selección automática de paquetería
- Plantillas de envío personalizables
- Integración con APIs de e-commerce
- Procesamiento por lotes

## 🔧 Mejoras técnicas

### Seguridad reforzada
- **Autenticación de dos factores** (2FA)
- **Encriptación end-to-end** de datos sensibles
- **Auditoría completa** de acciones
- **Backup automático** cada 6 horas

### Integraciones ampliadas
- **Shopify, WooCommerce, Magento** nativamente
- **APIs REST y GraphQL** para desarrolladores
- **Webhooks** para sincronización automática
- **SDK** para integraciones personalizadas

## 📱 Experiencia móvil

La nueva plataforma está completamente optimizada para dispositivos móviles:

- **App web progresiva** (PWA) que funciona offline
- **Gestos táctiles** intuitivos
- **Cámara integrada** para escanear códigos
- **Geolocalización** para direcciones automáticas

## 🎓 Capacitación y soporte

Para aprovechar al máximo las nuevas funcionalidades:

- **Webinars gratuitos** todos los martes
- **Documentación actualizada** con videos tutoriales
- **Soporte prioritario** para clientes existentes
- **Migración asistida** sin costo adicional

## 🚀 Próximas funcionalidades

Ya estamos trabajando en:

- **Inteligencia artificial** para predicción de costos
- **Blockchain** para trazabilidad completa
- **Realidad aumentada** para empaque optimizado
- **Chatbot avanzado** con procesamiento de lenguaje natural

## 💡 Cómo migrar

La migración es **completamente automática**:

1. **Tus datos** se transfieren automáticamente
2. **Configuraciones** se mantienen intactas
3. **Integraciones** continúan funcionando
4. **URLs** redirigen automáticamente

## 🎉 Beneficios inmediatos

Desde el primer día notarás:

- ⚡ **50% menos tiempo** en crear guías
- 💰 **Mejor visibilidad** de costos y ahorros
- 📈 **Reportes más detallados** para tomar decisiones
- 🔄 **Sincronización perfecta** con tus sistemas

---

**¿Listo para experimentar la nueva plataforma?**

[Acceder a dashboard.guiasdigitales.mx](https://dashboard.guiasdigitales.mx)

*¿Tienes preguntas sobre la migración? Nuestro equipo está disponible 24/7 para ayudarte.*
    `,
    date: "2024-12-29",
    readTime: "5 min",
    category: "Lanzamiento",
    image: "/images/login-hero.png",
    featured: true,
    tags: ["Plataforma", "Actualización", "UI/UX", "Tecnología"],
    author: {
      name: "Equipo GDMX",
      role: "Desarrollo de Producto",
      avatar: "/mexican-professional-woman.png",
    },
  },
  {
    id: "alianza-pamex-oficial",
    title: "🤝 Alianza Oficial con PAMEX",
    excerpt:
      "Nos convertimos en el proveedor logístico oficial de Perfume Adictos México, ofreciendo tarifas preferenciales a vendedores certificados.",
    content: `
# Alianza Oficial con PAMEX

Anunciamos con orgullo nuestra **alianza estratégica oficial** con PAMEX (Perfume Adictos México), la comunidad de perfumes más grande de México. Esta alianza representa un hito importante en nuestro compromiso de brindar soluciones logísticas especializadas.

## 🌟 Sobre PAMEX

**Perfume Adictos México** es la comunidad líder en el mercado de fragancias mexicano:

- **+15,000 miembros activos** en toda la República
- **+500 vendedores certificados** con operaciones diarias
- **+50,000 transacciones mensuales** en perfumes y fragancias
- **Presencia nacional** en más de 200 ciudades

## 🎯 Beneficios exclusivos para vendedores PAMEX

### 💰 Tarifas preferenciales
- **Hasta 60% de descuento** vs. tarifas públicas
- **Sin mínimos de volumen** para acceder a descuentos
- **Tarifas fijas** por 12 meses garantizados
- **Descuentos adicionales** por volumen mensual

### ⚡ Soporte prioritario
- **Línea directa** exclusiva para vendedores PAMEX
- **Tiempo de respuesta: 15 minutos** promedio
- **Soporte 24/7** los 365 días del año
- **Especialistas en fragancias** capacitados específicamente

### 🛡️ Manejo especializado
- **Protocolos específicos** para líquidos y fragancias
- **Embalaje especializado** incluido sin costo
- **Seguro automático** para productos de alto valor
- **Trazabilidad completa** con alertas en tiempo real

### 🚀 Herramientas exclusivas
- **Dashboard personalizado** con métricas de PAMEX
- **Plantillas pre-configuradas** para productos de perfumería
- **Integración directa** con catálogos de PAMEX
- **Reportes especializados** para el mercado de fragancias

## 📊 Impacto de la alianza

### Para vendedores PAMEX
- **Reducción promedio del 55%** en costos de envío
- **Aumento del 40%** en satisfacción del cliente
- **Disminución del 80%** en incidencias de envío
- **Incremento del 25%** en ventas por mejores tiempos de entrega

### Para GDMX Logistics
- **+2,000 nuevos usuarios** en los primeros 30 días
- **+15,000 envíos mensuales** adicionales
- **Especialización líder** en el mercado de fragancias
- **Expansión geográfica** a nuevas rutas

## 🎓 Capacitación especializada

Desarrollamos un programa de capacitación específico:

### Para vendedores PAMEX
- **Webinars semanales** sobre logística de fragancias
- **Certificación GDMX-PAMEX** en mejores prácticas
- **Materiales educativos** exclusivos
- **Sesiones 1-on-1** para casos especiales

### Para nuestro equipo
- **Capacitación en productos** de perfumería
- **Protocolos de manejo** específicos
- **Conocimiento del mercado** PAMEX
- **Atención especializada** en fragancias

## 🔮 Innovaciones conjuntas

### Próximos lanzamientos
- **App móvil PAMEX-GDMX** para vendedores
- **Calculadora de costos** integrada en plataformas PAMEX
- **Sistema de recompensas** por volumen de envíos
- **Marketplace logístico** exclusivo

### Tecnología compartida
- **APIs integradas** para sincronización automática
- **Base de datos compartida** de productos
- **Sistema de calificaciones** bidireccional
- **Analytics avanzados** del mercado de fragancias

## 💼 Casos de éxito

### Vendedor certificado - Ciudad de México
*"Desde la alianza GDMX-PAMEX, mis costos de envío bajaron 65% y mis clientes reciben sus pedidos 2 días antes. Es increíble."*
- **Ahorro mensual**: $15,000 MXN
- **Mejora en tiempos**: 40% más rápido
- **Satisfacción del cliente**: 98%

### Distribuidor mayorista - Guadalajara
*"El soporte especializado es excepcional. Entienden perfectamente las necesidades del mercado de perfumes."*
- **Volumen mensual**: 500+ envíos
- **Incidencias**: Reducidas en 90%
- **Crecimiento**: +35% en ventas

## 🌍 Expansión nacional

La alianza nos permite expandir a:

### Nuevas rutas especializadas
- **Rutas express** entre principales ciudades
- **Cobertura rural** mejorada
- **Horarios extendidos** para recolección
- **Centros de distribución** especializados

### Cobertura geográfica
- **32 estados** con servicio especializado
- **+500 municipios** con entrega directa
- **Islas y zonas remotas** con servicio especial
- **Frontera norte** con tiempos optimizados

## 🎉 Cómo unirse

### Para vendedores PAMEX existentes
1. **Verificación automática** de estatus certificado
2. **Activación inmediata** de beneficios
3. **Migración gratuita** de datos existentes
4. **Capacitación personalizada** incluida

### Para nuevos vendedores
1. **Certificación PAMEX** requerida
2. **Proceso de verificación** (24-48 horas)
3. **Onboarding especializado** incluido
4. **Soporte dedicado** durante primeros 30 días

---

**¿Eres vendedor certificado PAMEX?**

[Activar beneficios ahora](https://dashboard.guiasdigitales.mx/pamex)

[Contactar soporte PAMEX](https://wa.me/523326398319?text=Hola%2C%20soy%20vendedor%20certificado%20PAMEX)

*Esta alianza marca el inicio de una nueva era en la logística especializada de fragancias en México.*
    `,
    date: "2024-12-15",
    readTime: "7 min",
    category: "Alianzas",
    image: "/images/clients/logo_pamex_nuevo.png",
    featured: true,
    tags: ["PAMEX", "Alianzas", "Perfumes", "Tarifas Preferenciales"],
    author: {
      name: "Eduardo Álvarez",
      role: "Director de Alianzas Estratégicas",
      avatar: "/mexican-male-manager.png",
    },
  },
  {
    id: "nuevas-tarifas-2024",
    title: "💰 Nuevas Tarifas Preferenciales",
    excerpt: "Reducimos nuestras tarifas hasta un 60% para vendedores certificados de nuestras alianzas estratégicas.",
    content: `
# Nuevas Tarifas Preferenciales 2024

Como parte de nuestro compromiso con nuestros socios estratégicos, hemos implementado **nuevas tarifas preferenciales** que representan ahorros significativos para vendedores certificados de nuestras alianzas.

## 💰 Ahorros por alianza

### PAMEX (Perfume Adictos México)
- **Descuento base**: 50%
- **Descuento por volumen**: Hasta 60%
- **Sin mínimos** de envíos mensuales
- **Tarifas fijas** por 12 meses

### Entre Perfumes
- **Descuento base**: 45%
- **Descuento por volumen**: Hasta 55%
- **Beneficios adicionales** por antigüedad
- **Tarifas especiales** para productos premium

## 📊 Comparativa de ahorros

| Paquetería | Tarifa Pública | Tarifa PAMEX | Ahorro |
|------------|----------------|--------------|--------|
| DHL Express | $450 | $180 | 60% |
| FedEx | $380 | $190 | 50% |
| Estafeta | $280 | $140 | 50% |
| UPS | $420 | $210 | 50% |

*Ejemplo: Envío 1kg, CDMX a Guadalajara*

## 🎯 Beneficios adicionales

- **Seguro incluido** hasta $5,000 MXN
- **Recolección gratuita** en zona metropolitana
- **Embalaje especializado** sin costo
- **Soporte prioritario** 24/7

---

[Ver tarifas completas](https://dashboard.guiasdigitales.mx/tarifas)
    `,
    date: "2024-12-10",
    readTime: "3 min",
    category: "Tarifas",
    image: "/images/cotizacion-main.png",
    featured: false,
    tags: ["Tarifas", "Descuentos", "Ahorro"],
    author: {
      name: "Ana Patricia González",
      role: "Gerente de Pricing",
      avatar: "/mexican-professional-woman.png",
    },
  },
  {
    id: "expansion-cobertura",
    title: "📍 Expansión de Cobertura Nacional",
    excerpt:
      "Ampliamos nuestra cobertura a 500 nuevas localidades en toda la República Mexicana con nuestros partners logísticos.",
    content: `
# Expansión de Cobertura Nacional

Continuamos expandiendo nuestra red logística para llegar a más rincones de México. Con la incorporación de nuevas rutas y alianzas con paqueterías regionales, ahora cubrimos **500 localidades adicionales**.

## 🗺️ Nueva cobertura

### Estados con expansión
- **Oaxaca**: +45 municipios
- **Chiapas**: +38 municipios  
- **Guerrero**: +32 municipios
- **Veracruz**: +55 municipios
- **Puebla**: +28 municipios

### Beneficios de la expansión
- **Tiempos de entrega** reducidos en 30%
- **Costos competitivos** en zonas rurales
- **Cobertura 99.2%** del territorio nacional
- **Nuevas rutas express** entre ciudades principales

## 📈 Impacto esperado

- **+25% más envíos** a zonas rurales
- **Mejor conectividad** para e-commerce
- **Oportunidades de negocio** en nuevos mercados
- **Inclusión digital** logística

---

[Ver mapa de cobertura](https://dashboard.guiasdigitales.mx/cobertura)
    `,
    date: "2024-11-28",
    readTime: "4 min",
    category: "Expansión",
    image: "/mapa-de-mexico-logistica.png",
    featured: false,
    tags: ["Cobertura", "Expansión", "México"],
    author: {
      name: "Carlos Mendoza",
      role: "Director de Operaciones",
      avatar: "/mexican-entrepreneur.png",
    },
  },
  {
    id: "app-movil-beta",
    title: "📱 App Móvil en Beta",
    excerpt: "Próximamente: aplicación móvil para crear guías desde tu smartphone. Regístrate para acceso anticipado.",
    content: `
# App Móvil en Beta

Estamos desarrollando nuestra **aplicación móvil nativa** para iOS y Android que permitirá crear guías, rastrear envíos y gestionar tu cuenta desde cualquier lugar.

## 📱 Características principales

### Creación de guías
- **Escáner de códigos** integrado
- **Autocompletado** de direcciones
- **Plantillas** personalizables
- **Cálculo automático** de costos

### Seguimiento en tiempo real
- **Notificaciones push** de estados
- **Mapa interactivo** de rutas
- **Historial completo** de envíos
- **Alertas personalizables**

### Gestión de cuenta
- **Dashboard móvil** optimizado
- **Reportes descargables**
- **Configuración de preferencias**
- **Soporte integrado**

## 🚀 Programa Beta

### Requisitos para participar
- **Cuenta activa** en GDMX
- **Mínimo 10 envíos** mensuales
- **Feedback constructivo** requerido
- **Disponibilidad** para pruebas

### Beneficios Beta
- **Acceso anticipado** gratuito
- **Funciones exclusivas** por 6 meses
- **Soporte directo** con desarrolladores
- **Influencia** en funcionalidades finales

---

[Registrarse para Beta](https://dashboard.guiasdigitales.mx/app-beta)
    `,
    date: "2024-11-20",
    readTime: "3 min",
    category: "Desarrollo",
    image: "/app-movil-logistica.png",
    featured: false,
    tags: ["App Móvil", "Beta", "Innovación"],
    author: {
      name: "María Fernanda López",
      role: "Product Manager Mobile",
      avatar: "/mexican-woman-director.png",
    },
  },
  {
    id: "integracion-shopify",
    title: "🛒 Integración con Shopify",
    excerpt: "Nueva integración directa con Shopify para automatizar completamente tus envíos desde tu tienda online.",
    content: `
# Integración con Shopify

Lanzamos nuestra **integración oficial con Shopify** que permite automatizar completamente el proceso de envíos desde tu tienda online. Sincronización automática de pedidos, generación de guías y actualización de tracking.

## 🔗 Funcionalidades

### Sincronización automática
- **Importación** de pedidos en tiempo real
- **Actualización** de estados de envío
- **Tracking numbers** automáticos
- **Notificaciones** a clientes

### Configuración inteligente
- **Reglas de envío** personalizables
- **Selección automática** de paquetería
- **Cálculo dinámico** de costos
- **Zonas de envío** configurables

### Reportes integrados
- **Analytics** de envíos en Shopify
- **Costos consolidados** por período
- **Rendimiento** por paquetería
- **Métricas** de satisfacción

## ⚙️ Instalación

1. **Buscar** "GDMX Logistics" en Shopify App Store
2. **Instalar** con un clic
3. **Conectar** tu cuenta GDMX
4. **Configurar** reglas de envío
5. **¡Listo!** Automatización completa

## 💡 Beneficios

- **80% menos tiempo** en gestión de envíos
- **Errores reducidos** en 95%
- **Mejor experiencia** del cliente
- **Escalabilidad** sin límites

---

[Instalar desde Shopify App Store](https://apps.shopify.com/gdmx-logistics)
    `,
    date: "2024-11-15",
    readTime: "4 min",
    category: "Integraciones",
    image: "/shopify-integration-ecommerce.png",
    featured: false,
    tags: ["Shopify", "E-commerce", "Automatización"],
    author: {
      name: "Roberto Silva",
      role: "Tech Lead Integraciones",
      avatar: "/mexican-male-manager.png",
    },
  },
]

// Función para obtener un post por slug - MEJORADA
export function getBlogPost(slug: string): BlogPost | undefined {
  console.log("Buscando post con slug:", slug) // Debug log
  const post = blogPosts.find((post) => post.id === slug)
  console.log("Post encontrado:", post ? post.title : "No encontrado") // Debug log
  return post
}

// Función para obtener todos los posts
export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Función para obtener posts relacionados
export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const currentPost = getBlogPost(currentSlug)
  if (!currentPost) return []

  return blogPosts
    .filter((post) => post.id !== currentSlug)
    .filter((post) => post.category === currentPost.category || post.tags.some((tag) => currentPost.tags.includes(tag)))
    .slice(0, limit)
}
