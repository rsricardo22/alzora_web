import { services } from '../data/services';
import { site } from '../config/site';

export const prerender = true;
const paths = ['/', '/nosotros', '/servicios', ...services.map((service) => `/servicios/${service.slug}`), '/soluciones', '/como-trabajamos', '/contacto', '/privacidad', '/tratamiento-datos'];

export async function GET() {
  const urls = paths.map((path) => `<url><loc>${new URL(path, site.url).href}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
