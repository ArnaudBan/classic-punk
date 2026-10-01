// Règle du cahier des charges (§3.3) : `status: available` sans `storeUrl` doit faire échouer le build.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { z } from 'astro/zod';
import { appSchema } from '../src/lib/app-schema.ts';

const schema = appSchema(() => z.any());
const base = {
  name: 'Gig',
  slug: 'gig',
  catalog: 'CP-001',
  endorsement: 'un set Classic Punk',
  platform: 'macos',
  status: 'coming-soon',
  theme: 'gig',
  category: 'BusinessApplication',
  tagline: 'Le time tracker qui ne te loue rien.',
  summary: 'Résumé',
  icon: 'icon.svg',
  screenshots: [{ src: 'shot.png', alt: 'Capture' }],
  seo: { title: 'Titre', description: 'Description' },
};

test('une app non publiée est valide sans storeUrl', () => {
  assert.equal(schema.safeParse(base).success, true);
});

test('status available sans storeUrl est refusé', () => {
  const result = schema.safeParse({ ...base, status: 'available' });
  assert.equal(result.success, false);
  assert.deepEqual(result.error.issues[0].path, ['storeUrl']);
});

test('status available avec storeUrl est accepté', () => {
  const result = schema.safeParse({ ...base, status: 'available', storeUrl: 'https://apps.apple.com/app/id123' });
  assert.equal(result.success, true);
});

test('storeUrl doit être une URL', () => {
  assert.equal(schema.safeParse({ ...base, status: 'available', storeUrl: 'pas une url' }).success, false);
});
