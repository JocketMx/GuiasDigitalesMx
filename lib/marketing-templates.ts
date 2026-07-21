/**
 * Marketing Templates for v2.0 Launch Campaign
 * Email, Social Media, and Ad Copy Templates
 */

export const EMAIL_TEMPLATES = {
  // Email para usuarios existentes
  existingUsers: {
    subject: "¡Guías Digitales v2.0 ya está aquí! Notificaciones WhatsApp + Créditos con TDC",
    preheader: "Descubre las características que pediste. Acceso exclusivo para usuarios como tú.",
    body: `
Hola [USER_NAME],

Estamos emocionados de anunciar el lanzamiento de **Guías Digitales v2.0** - la plataforma de envíos más completa de México.

## 🎉 Lo Más Destacado

### Notificaciones WhatsApp en Tiempo Real
Tus clientes reciben avisos automáticos en cada etapa del envío:
- Cuando se crea el envío
- Cuando se recolecta
- Cuando está en tránsito
- Cuando se entrega
- Si hay problemas

### Créditos con Tarjeta de Crédito
Única en México: paga directamente con TDC sin intermediarios
- Línea de crédito hasta $100,000
- Términos personalizados
- Facturación automática

### Más Características
- Módulo de incidencias completo
- Dashboard rediseñado
- Facturación en 1 clic
- Plugins Shopify y WordPress
- Chat 24/7

## 👉 Qué Haces Ahora

Tu cuenta se actualiza automáticamente. Solo:
1. Accede a dashboard.guiasdigitales.mx
2. Explora las nuevas características
3. Activa notificaciones WhatsApp
4. Solicita crédito (opcional)

Documentación: https://docs.guiasdigitales.mx/v2-0

## ¿Preguntas?

Nuestro equipo está disponible 24/7:
- Chat en vivo: En tu dashboard
- Email: soporte@guiasdigitales.mx
- WhatsApp: [NUMERO]

¡Bienvenido a la revolución logística!

Equipo Guías Digitales
    `
  },

  // Email para usuarios nuevos
  newUsers: {
    subject: "Bienvenido a Guías Digitales v2.0 - La plataforma de envíos del futuro",
    preheader: "Ahorra 60% en envíos + Notificaciones WhatsApp + Créditos con TDC",
    body: `
Hola [USER_NAME],

¡Bienvenido a Guías Digitales v2.0! Acabas de unirte a 1,500+ empresas que ya confían en nosotros.

## 🚀 Primeros Pasos

1. **Verifica tu email** (click en enlace de confirmación)
2. **Completa tu perfil** (nombre, empresa, dirección)
3. **Cotiza tu primer envío** (menos de 1 minuto)
4. **Crea tu primera guía** (10 segundos)

## 💡 Tips para Empezar

- Usa el cotizador para ver precios de 8+ paqueterías
- Configura notificaciones WhatsApp para tus clientes
- Si envías más de 100/mes, solicita crédito
- Revisa documentación: https://docs.guiasdigitales.mx

## 🎁 Beneficios de v2.0

✅ Notificaciones WhatsApp en tiempo real
✅ Créditos con tarjeta de crédito
✅ Facturación automática
✅ Módulo de incidencias
✅ Plugins Shopify y WordPress
✅ API completa
✅ Soporte 24/7

## ❓ ¿Dudas?

- Webinar gratuito: Martes 10am
- Chat en vivo: En tu dashboard
- Email: hola@guiasdigitales.mx

¡Empecemos! 🎉

Equipo Guías Digitales
    `
  }
}

export const SOCIAL_MEDIA_TEMPLATES = {
  linkedin: [
    {
      title: "v2.0 Announcement",
      content: `Anunciamos Guías Digitales v2.0 - La plataforma de envíos más completa de México.

🔔 Notificaciones WhatsApp en tiempo real
💳 Créditos con tarjeta de crédito (¡única!)
📄 Facturación automática
🛒 Plugins Shopify y WordPress

1,500+ empresas ya confían en nosotros.
1.5M envíos procesados.
96% entrega exitosa.

¿Listo para transformar tu logística?

#Logística #Ecommerce #México #Automatización`,
      hashtags: "#Logística #Ecommerce #México #Automatización #v2 #Innovación"
    },
    {
      title: "WhatsApp Notifications Feature",
      content: `¿Sabías que Guías Digitales es la única plataforma que notifica automáticamente a tus clientes en WhatsApp?

Cada envío, cada etapa:
✅ Creado
✅ Recolectado
✅ En tránsito
✅ Entregado

Resultado: Clientes informados, menos llamadas, más ventas.

Descubre v2.0: https://guiasdigitales.mx

#Logística #Automatización #Ecommerce`,
      hashtags: "#Logística #Automatización #Ecommerce #WhatsApp"
    },
  ],
  instagram: [
    {
      caption: "¡Guías Digitales v2.0 está aquí! 🎉 Notificaciones WhatsApp + Créditos con TDC. La revolución de la logística en México. 🚀 #LogísticaMx #Ecommerce",
      hashtags: "#LogísticaMx #Ecommerce #v2 #Automatización #Envíos #México"
    }
  ],
  twitter: [
    {
      content: "🎉 Guías Digitales v2.0 ya está disponible. Notificaciones WhatsApp automáticas, créditos con TDC, facturación en 1 clic. Única en México. 🚀 https://guiasdigitales.mx",
      hashtags: "#v2 #Logística #Ecommerce #México"
    }
  ],
  facebook: [
    {
      headline: "¡Llegó Guías Digitales v2.0!",
      description: "La plataforma de envíos más completa de México con notificaciones WhatsApp en tiempo real, créditos con tarjeta de crédito y facturación automática.",
      cta: "Conocer v2.0"
    }
  ]
}

export const GOOGLE_ADS_TEMPLATES = {
  search: [
    {
      headline1: "Guías Digitales v2.0",
      headline2: "Notificaciones WhatsApp + Créditos TDC",
      headline3: "Ahorra 60% en Envíos",
      description1: "La plataforma de envíos más completa de México. Notificaciones automáticas, créditos con tarjeta, facturación en 1 clic.",
      description2: "1,500+ empresas ya confían en nosotros. 1.5M envíos procesados. Solicita tu acceso hoy.",
      displayUrl: "guiasdigitales.mx",
      finalUrl: "https://guiasdigitales.mx"
    }
  ],
  display: [
    {
      adHeadline: "¿Cansado de pagar en efectivo por envíos?",
      description: "Paga con tarjeta de crédito. Crédito flexible. Sin intermediarios.",
      displayUrl: "guiasdigitales.mx",
      callToAction: "Solicitar Acceso"
    }
  ]
}

export const PRESS_RELEASE = {
  title: "Guías Digitales Lanza v2.0: Revolución en Logística Digital de México",
  subtitle: "Primera plataforma del país con notificaciones WhatsApp automáticas, créditos con TDC y facturación en 1 clic",
  body: `
CIUDAD DE MÉXICO, 21 de Julio de 2026 – Guías Digitales MX, la plataforma líder de gestión de envíos en México, anuncia el lanzamiento de v2.0, una versión completamente rediseñada que revoluciona la forma en que las empresas mexicanas gestionan sus envíos.

## Características Revolucionarias

v2.0 introduce:

1. **Notificaciones WhatsApp en Tiempo Real** – Característica única en México. Los clientes reciben avisos automáticos en cada etapa del envío.

2. **Créditos con Tarjeta de Crédito** – Primera y única plataforma que permite pagar directamente con TDC sin intermediarios.

3. **Facturación Automática** – Un clic para generar facturas de todos tus movimientos.

4. **Módulo de Incidencias** – Gestión centralizada de problemas con paquetes.

5. **Plugins Shopify y WordPress** – Sincronización automática de órdenes.

## Datos del Lanzamiento

- 1,500+ usuarios activos
- 1.5 millones de envíos procesados
- 96% de entrega exitosa
- 99.9% uptime
- Cobertura nacional incluyendo zonas remotas

## Declaración de Prensa

"Con v2.0, hemos escuchado a nuestros clientes y construido la plataforma que siempre merecieron. Notificaciones WhatsApp automáticas, créditos con TDC, facturación en 1 clic. Esto no es solo actualización, es una revolución."

— Equipo Guías Digitales MX

## Disponibilidad

La plataforma v2.0 ya está disponible en https://guiasdigitales.mx

Para solicitudes de prensa o más información: prensa@guiasdigitales.mx

---

**Sobre Guías Digitales MX**
Guías Digitales es la plataforma de envíos líder en México, permitiendo a más de 1,500 empresas enviar paquetes con 8+ paqueterías, ahorrar hasta 60% en tarifas, y gestionar su logística completamente desde la nube.
`,
}

export const MARKETING_CALENDAR = {
  week1: {
    monday: ["Email announcement to existing users", "Blog post v2.0 goes live"],
    tuesday: ["LinkedIn posts", "Twitter threads"],
    wednesday: ["Google Ads campaign begins", "Facebook ads launch"],
    thursday: ["Instagram posts", "Webinar announcement"],
    friday: ["Week 1 performance review", "Optimization adjustments"],
  },
  week2: {
    monday: ["Secondary blog articles live", "Email to new segment"],
    tuesday: ["Press release distribution", "LinkedIn thought leadership"],
    wednesday: ["Instagram Stories campaign", "WhatsApp broadcast"],
    thursday: ["Retargeting ads", "Email follow-up"],
    friday: ["Analytics review", "Next week planning"],
  },
}

export default {
  EMAIL_TEMPLATES,
  SOCIAL_MEDIA_TEMPLATES,
  GOOGLE_ADS_TEMPLATES,
  PRESS_RELEASE,
  MARKETING_CALENDAR,
}
