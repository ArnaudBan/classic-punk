import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const apps = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/apps' }),
  schema: ({ image }) =>
    z
      .object({
        name: z.string(),
        slug: z.enum(['gig', 'last-round']),
        catalog: z.string(),
        endorsement: z.string(),
        platform: z.enum(['macos', 'ios']),
        minOS: z.string().optional(),
        status: z.enum(['dev', 'coming-soon', 'beta', 'available']),
        storeUrl: z.url().optional(),
        price: z.string().optional(),
        theme: z.enum(['gig', 'last-round']),
        tagline: z.string(),
        summary: z.string(),
        icon: image(),
        screenshots: z.array(z.object({ src: image(), alt: z.string() })),
        seo: z.object({ title: z.string(), description: z.string() }),
      })
      .refine((app) => app.status !== 'available' || Boolean(app.storeUrl), {
        message: '`status: available` exige une `storeUrl` (lien App Store).',
        path: ['storeUrl'],
      }),
});

export const collections = { apps };
