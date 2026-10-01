/**
 * Schéma de la collection `apps`, isolé de content.config.ts pour pouvoir être testé hors d'Astro
 * (tests/app-schema.test.mjs). `image` est la fonction fournie par Astro pour les champs image.
 */
import { z } from 'astro/zod';

export const appSchema = <Image extends z.ZodType>(image: () => Image) =>
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
      /** Période de sortie prévue, affichée tant que l'app n'est pas disponible. */
      release: z.string().optional(),
      theme: z.enum(['gig', 'last-round']),
      /** Catégorie schema.org (applicationCategory). */
      category: z.string(),
      tagline: z.string(),
      summary: z.string(),
      icon: image(),
      screenshots: z.array(
        z.object({
          src: image(),
          alt: z.string(),
          caption: z.string().optional(),
          /** Capture mise en avant sur la pochette de l'accueil. */
          featured: z.boolean().optional(),
        }),
      ),
      seo: z.object({ title: z.string(), description: z.string() }),
    })
    .refine((app) => app.status !== 'available' || Boolean(app.storeUrl), {
      message: '`status: available` exige une `storeUrl` (lien App Store).',
      path: ['storeUrl'],
    });
