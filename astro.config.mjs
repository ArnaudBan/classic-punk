// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: domaine définitif à confirmer (à garder synchronisé avec src/config/site.ts)
const SITE = 'https://classicpunk.fr';

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
  integrations: [
    sitemap({ filter: (page) => !page.includes('/404') }),
  ],
});
