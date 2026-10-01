import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { appSchema } from './lib/app-schema';

const apps = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/apps' }),
  schema: ({ image }) => appSchema(image),
});

export const collections = { apps };
