export const site = {
  name: 'ALZORA',
  legalName: 'ALZORA',
  domain: 'alzorasolutions.com',
  url: 'https://alzorasolutions.com',
  tagline: 'Procesos más simples. Empresas más ágiles.',
  description: 'Automatización de procesos, soluciones tecnológicas, soporte aplicativo e inteligencia artificial para empresas en Perú.',
  locale: 'es_PE',
  country: 'PE',
  email: import.meta.env.PUBLIC_COMPANY_EMAIL || 'contacto@alzorasolutions.com',
  whatsappNumber: import.meta.env.PUBLIC_WHATSAPP_NUMBER || '',
  whatsappMessage: 'Hola, quisiera solicitar un diagnóstico para mi empresa.',
  turnstileSiteKey: import.meta.env.PUBLIC_TURNSTILE_SITE_KEY || '',
} as const;

export const whatsappUrl = site.whatsappNumber
  ? `https://wa.me/${site.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(site.whatsappMessage)}`
  : '';

export const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Soluciones', href: '/soluciones' },
  { label: 'Cómo trabajamos', href: '/como-trabajamos' },
  { label: 'Contacto', href: '/contacto' },
] as const;
