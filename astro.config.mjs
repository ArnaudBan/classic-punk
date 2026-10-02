// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import pruneUnusedAssets from './scripts/prune-unused-assets.mjs';

// Domaine du site (à garder synchronisé avec src/config/site.ts et public/robots.txt)
const SITE = 'https://classic-punk.fr';

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    // Scripts toujours servis en fichiers externes : la CSP (public/.htaccess) n'autorise aucun script en ligne.
    build: { assetsInlineLimit: 0 },
  },
  integrations: [
    sitemap({ filter: (page) => !page.includes('/404') }),
    // En dernier : nettoie dist/_astro/ une fois tout généré (hébergement à l'espace limité).
    pruneUnusedAssets(),
  ],
});
