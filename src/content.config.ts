import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        company: z.string(),
        companyLabel: z.string(),
        dateRange: z.string(),
        dateMeta: z.string(),
        tags: z.array(z.string()),
        sortOrder: z.number(),
        heroClass: z.string(),
        heroBackground: z.string(),
        galleryCaptions: z.array(z.string()).default([]),
    }),
});

export const collections = { projects };
