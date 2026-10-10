# Despliegue en Cloudflare Pages

## 1. Repositorio

1. Crear un repositorio Git y subir este proyecto a GitHub.
2. En Cloudflare, crear un proyecto de Pages y conectarlo al repositorio.
3. Elegir `main` como rama de producción.

## 2. Configuración de build

- Framework preset: `Astro`.
- Build command: `npm run build`.
- Build output directory: `dist`.
- Root directory: `/`.
- Versión recomendada de Node: 22 LTS o superior compatible con las dependencias bloqueadas.

La carpeta `functions/` es detectada por Cloudflare Pages y se publica junto con los archivos estáticos.

## 3. Variables y secretos

En Settings → Variables and Secrets configurar:

- `PUBLIC_TURNSTILE_SITE_KEY`: clave pública del widget. Debe existir también durante el build.
- `TURNSTILE_SECRET_KEY`: secreto del widget, cifrado.
- `RESEND_API_KEY`: API key de Resend, cifrada.
- `CONTACT_TO_EMAIL`: buzón que recibirá solicitudes.
- `CONTACT_FROM_EMAIL`: remitente verificado en Resend.
- `ALLOWED_ORIGIN`: `https://alzorasolutions.com`.
- `PUBLIC_COMPANY_EMAIL`: correo mostrado en la web.
- `PUBLIC_WHATSAPP_NUMBER`: número con código de país, solo dígitos.

Crear un widget Turnstile autorizado para `alzorasolutions.com` y para el dominio temporal de Pages si se probará allí. Verificar el dominio remitente en Resend. Nunca guardar secretos en Git ni anteponerles `PUBLIC_`.

## 4. Dominio

Agregar `alzorasolutions.com` como Custom Domain. Redirigir una de las variantes (`www` o raíz) hacia la canónica elegida. El proyecto usa la raíz sin `www` como URL canónica.

## 5. Verificación posterior

Ejecutar el checklist, enviar una solicitud real, revisar registros de Functions y confirmar entrega. Validar también `https://alzorasolutions.com/robots.txt` y `/sitemap.xml`.
