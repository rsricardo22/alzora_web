interface Env {
  TURNSTILE_SECRET_KEY?: string;
  RESEND_API_KEY?: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
  ALLOWED_ORIGIN?: string;
}

interface PagesContext { request: Request; env: Env; }
type FormPayload = Record<string, unknown>;

const json = (data: unknown, status = 200, headers: HeadersInit = {}) => new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...headers } });
const clean = (value: unknown, max: number) => typeof value === 'string' ? value.trim().slice(0, max) : '';
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const escapeHtml = (value: string) => value.replace(/[&<>'"]/g, (char) => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' })[char] || char);

export const onRequestPost = async ({ request, env }: PagesContext): Promise<Response> => {
  if (!env.TURNSTILE_SECRET_KEY || !env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL || !env.CONTACT_FROM_EMAIL) return json({ message: 'El formulario no está configurado. Escríbenos por correo.' }, 503);
  const origin = request.headers.get('Origin');
  const allowedOrigin = env.ALLOWED_ORIGIN || new URL(request.url).origin;
  if (origin && origin !== allowedOrigin) return json({ message: 'Origen no permitido.' }, 403);
  const length = Number(request.headers.get('Content-Length') || 0);
  if (length > 20_000) return json({ message: 'Solicitud demasiado grande.' }, 413);
  let body: FormPayload;
  try { body = await request.json() as FormPayload; } catch { return json({ message: 'Solicitud inválida.' }, 400); }
  if (clean(body.website, 100)) return json({ message: 'Solicitud rechazada.' }, 400);
  const name = clean(body.name, 100), company = clean(body.company, 120), email = clean(body.email, 160), phone = clean(body.phone, 30), service = clean(body.service, 140), message = clean(body.message, 2000), consent = clean(body.consent, 20), token = clean(body['cf-turnstile-response'], 2048);
  if (name.length < 2 || company.length < 2 || !emailPattern.test(email) || phone.length < 7 || !service || message.length < 20 || consent !== 'accepted' || !token) return json({ message: 'Revisa los campos obligatorios y vuelve a intentar.' }, 400);
  const turnstileBody = new FormData();
  turnstileBody.set('secret', env.TURNSTILE_SECRET_KEY); turnstileBody.set('response', token);
  const ip = request.headers.get('CF-Connecting-IP'); if (ip) turnstileBody.set('remoteip', ip);
  const verification = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body: turnstileBody });
  const verificationResult = await verification.json() as { success?: boolean };
  if (!verificationResult.success) return json({ message: 'La verificación de seguridad venció o no fue válida.' }, 400);
  const rows = [['Nombre',name],['Empresa',company],['Correo',email],['Teléfono',phone],['Servicio',service],['Mensaje',message]];
  const html = `<h1>Nueva solicitud desde alzorasolutions.com</h1>${rows.map(([label,value]) => `<p><strong>${escapeHtml(label)}:</strong><br>${escapeHtml(value).replace(/\n/g,'<br>')}</p>`).join('')}<p><small>Consentimiento informado aceptado en el formulario.</small></p>`;
  const sent = await fetch('https://api.resend.com/emails', { method: 'POST', headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ from: env.CONTACT_FROM_EMAIL, to: [env.CONTACT_TO_EMAIL], reply_to: email, subject: `Nueva solicitud de ${company} — ${service}`, html }) });
  if (!sent.ok) { console.error('Resend error', sent.status, await sent.text()); return json({ message: 'No pudimos enviar la solicitud. Inténtalo luego o escríbenos por correo.' }, 502); }
  return json({ ok: true });
};

export const onRequestGet = async (): Promise<Response> => json({ message: 'Método no permitido.' }, 405, { Allow: 'POST' });
