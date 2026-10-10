import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve('dist');
if (!existsSync(root)) throw new Error('No existe dist/. Ejecuta npm run build primero.');

const walk = (dir) => readdirSync(dir).flatMap((name) => {
  const path = join(dir, name);
  return statSync(path).isDirectory() ? walk(path) : [path];
});
const files = walk(root);
const htmlFiles = files.filter((file) => file.endsWith('.html'));
const failures = [];

if (htmlFiles.length < 14) failures.push(`Se esperaban al menos 14 páginas HTML y se encontraron ${htmlFiles.length}.`);
for (const required of ['robots.txt', 'sitemap.xml', 'brand/alzora-logo.svg', 'brand/og-alzora.svg']) {
  if (!existsSync(join(root, required))) failures.push(`Falta archivo requerido: ${required}`);
}

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  if (!/<title>.+<\/title>/.test(html)) failures.push(`Falta title: ${file}`);
  if (!/<meta name="description" content="[^"]+"/.test(html)) failures.push(`Falta meta description: ${file}`);
  if (/href="undefined|src="undefined/.test(html)) failures.push(`Referencia undefined: ${file}`);
  for (const match of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
    const raw = match[1].split(/[?#]/)[0];
    if (!raw || raw.startsWith('/api/')) continue;
    const path = decodeURIComponent(raw);
    const direct = join(root, path);
    const htmlTarget = join(root, path, 'index.html');
    const extensionTarget = `${direct}.html`;
    if (!existsSync(direct) && !existsSync(htmlTarget) && !existsSync(extensionTarget)) failures.push(`Enlace o recurso roto en ${file}: ${raw}`);
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`Verificación correcta: ${htmlFiles.length} páginas y ${files.length} archivos generados.`);
