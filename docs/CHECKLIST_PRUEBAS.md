# Checklist de pruebas

## Automatizadas

- [ ] `npm ci` finaliza sin errores.
- [ ] `npm test` completa `astro check`, build y revisión de enlaces internos.
- [ ] `dist/` contiene las páginas, sitemap, robots y recursos de marca.

## Responsive y navegadores

- [ ] Revisar 320 px, 375 px, 768 px, 1024 px y 1440 px.
- [ ] Probar Chrome/Edge, Firefox y Safari actuales.
- [ ] Confirmar navegación móvil, foco visible y orden de tabulación.
- [ ] Confirmar que no exista scroll horizontal.

## Contenido y SEO

- [ ] Sustituir o aprobar el logotipo temporal.
- [ ] Confirmar correo corporativo y número de WhatsApp.
- [ ] Revisar títulos, descripciones, canonical, Open Graph y JSON-LD.
- [ ] Abrir todas las rutas y confirmar ausencia de enlaces rotos.
- [ ] Revisar borradores legales con asesoría y completar datos registrales.

## Formulario

- [ ] Sin claves, el botón permanece deshabilitado y muestra el estado pendiente.
- [ ] Configurar Turnstile, Resend, remitente y destinatario reales.
- [ ] Probar campos vacíos, correo inválido, texto corto y consentimiento ausente.
- [ ] Probar token Turnstile inválido y origen no autorizado.
- [ ] Confirmar estado de éxito solo después de la entrega aceptada por Resend.
- [ ] Confirmar recepción y `reply-to` del interesado.

## Accesibilidad y rendimiento

- [ ] Ejecutar Lighthouse y axe/WAVE sobre producción.
- [ ] Probar zoom al 200 %, teclado y lector de pantalla.
- [ ] Verificar contraste y `prefers-reduced-motion`.
- [ ] Confirmar caché de recursos y ausencia de recursos externos no autorizados.
