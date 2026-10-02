// Petit serveur statique pour les tests navigateur : sert dist/ comme l'hébergement
// (index.html des dossiers, 404.html pour les pages inconnues), sans dépendance.
import { createServer } from 'node:http';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { extname, join } from 'node:path';

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
};

/** Démarre le serveur sur un port libre ; renvoie { url, close }. */
export async function serveDist(dist) {
  const server = createServer((req, res) => {
    const path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    let file = join(dist, path);
    if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html');
    const found = existsSync(file);
    res.writeHead(found ? 200 : 404, {
      'Content-Type': found ? (TYPES[extname(file)] ?? 'application/octet-stream') : TYPES['.html'],
    });
    res.end(readFileSync(found ? file : join(dist, '404.html')));
  });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  return { url: `http://127.0.0.1:${server.address().port}`, close: () => server.close() };
}
