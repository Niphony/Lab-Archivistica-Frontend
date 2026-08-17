import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './public/news' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    author: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { news };
