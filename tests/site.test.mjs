// Tests sur le site généré (dist/), lancés après `astro build` (script pretest).
import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { test } from 'node:test';

const DIST = new URL('../dist/', import.meta.url).pathname;
assert.ok(existsSync(DIST), 'dist/ absent : lancer `npm run build` avant les tests.');

const htmlFiles = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? htmlFiles(path) : name.endsWith('.html') ? [path] : [];
  });

/** Pages générées, indexées par leur URL (/gig/, /404.html…). */
const pages = new Map(
  htmlFiles(DIST).map((file) => {
    const rel = '/' + relative(DIST, file);
    return [rel.endsWith('/index.html') ? rel.slice(0, -'index.html'.length) : rel, readFileSync(file, 'utf8')];
  }),
);
const ids = (html) => new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));

test('les pages attendues sont générées', () => {
  for (const url of ['/', '/gig/', '/last-round/', '/contact/', '/legal/', '/404.html']) {
    assert.ok(pages.has(url), `page manquante : ${url}`);
  }
});

test('les ancres légales déclarées chez Apple sont présentes (ne jamais les changer)', () => {
  const legal = ids(pages.get('/legal/'));
  for (const anchor of [
    'mentions',
    'confidentialite',
    'gig',
    'gig-confidentialite',
    'gig-conditions',
    'last-round',
    'last-round-confidentialite',
    'last-round-conditions',
    'propriete',
  ]) {
    assert.ok(legal.has(anchor), `ancre manquante sur /legal/ : #${anchor}`);
  }
});

for (const [url, html] of pages) {
  test(`${url} : un seul h1, title et meta description non vides`, () => {
    assert.equal((html.match(/<h1[\s>]/g) ?? []).length, 1, 'nombre de <h1>');
    const title = html.match(/<title>([^<]*)<\/title>/)?.[1]?.trim();
    assert.ok(title, '<title> vide ou absent');
    const description = html.match(/<meta name="description" content="([^"]*)"/)?.[1]?.trim();
    assert.ok(description, 'meta description vide ou absente');
  });

  test(`${url} : aucun script en ligne exécutable (CSP)`, () => {
    for (const [tag] of html.matchAll(/<script\b[^>]*>/g)) {
      assert.ok(/type="application\/ld\+json"|\ssrc="/.test(tag), `script en ligne interdit par la CSP : ${tag}`);
    }
  });

  test(`${url} : aucun lien interne cassé`, () => {
    const pageIds = ids(html);
    for (const [, href] of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
      if (/^(https?:|mailto:|data:|\/\/)/.test(href)) continue;
      if (href.startsWith('#')) {
        assert.ok(href === '#' || pageIds.has(href.slice(1)), `ancre absente de ${url} : ${href}`);
        continue;
      }
      const [path, hash] = href.split('#');
      const target = path.split('?')[0];
      if (pages.has(target)) {
        if (hash) assert.ok(ids(pages.get(target)).has(hash), `ancre absente : ${href}`);
      } else {
        assert.ok(existsSync(join(DIST, target)), `lien cassé dans ${url} : ${href}`);
      }
    }
  });
}

test('le sitemap exclut la 404', () => {
  const sitemap = readFileSync(join(DIST, 'sitemap-0.xml'), 'utf8');
  assert.ok(!sitemap.includes('404'), 'la 404 ne doit pas être dans le sitemap');
  assert.ok(sitemap.includes('https://classic-punk.fr/legal/'));
});
