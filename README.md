# ALZORA — Web Corporativa V1.0

Sitio corporativo estático construido con Astro, TypeScript, Tailwind CSS y Lucide. Está orientado a captación B2B en Perú y preparado para Cloudflare Pages.

## Requisitos

- Node.js 22 LTS o una versión compatible superior.
- npm.

## Inicio local

```bash
npm install
copy .env.example .env
npm run dev
```

El sitio se abre por defecto en `http://localhost:4321`.

## Comandos

- `npm run dev`: servidor de desarrollo.
- `npm run check`: validación de Astro y TypeScript.
- `npm run build`: validación y build de producción en `dist/`.
- `npm run preview`: vista local del build estático (no emula Pages Functions).
- `npm test`: build y comprobación de rutas, metadatos y recursos.

## Configuración

Los textos globales y canales se centralizan en `src/config/site.ts`; los servicios, en `src/data/services.ts`. Copia `.env.example` y completa las variables públicas para desarrollo. Los secretos se configuran en Cloudflare, nunca en archivos versionados.

El formulario se habilita en el HTML solo cuando existe `PUBLIC_TURNSTILE_SITE_KEY`. La Function vuelve a comprobar que todos los secretos estén disponibles y rechaza la petición si falta alguno. No hay modo de éxito simulado.

Para probar Functions localmente se puede usar Wrangler Pages después del build; las credenciales locales deben guardarse en `.dev.vars`, que está ignorado por Git.

## Documentación

- [Estructura](docs/ESTRUCTURA.md)
- [Despliegue en Cloudflare Pages](docs/DESPLIEGUE_CLOUDFLARE.md)
- [Checklist de pruebas](docs/CHECKLIST_PRUEBAS.md)

## Pendientes antes de publicar

1. Confirmar o sustituir los SVG de marca temporales en `public/brand/`.
2. Configurar correo y WhatsApp reales.
3. Crear Turnstile, verificar dominio/remitente en Resend y cargar secretos.
4. Completar datos legales y someter los borradores a revisión profesional.
5. Ejecutar las pruebas manuales indicadas.
