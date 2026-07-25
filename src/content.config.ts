import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const caseStudyArtifactSchema = z.object({
    src: z.string().min(1),
    alt: z.string().min(1),
    caption: z.string().min(1),
    width: z.number().int().positive().optional(),
    height: z.number().int().positive().optional(),
    aspectRatio: z.string().optional(),
    kind: z.enum(['screenshot', 'diagram', 'document', 'photo', 'other']).optional(),
    layout: z.enum(['standard', 'featured']).optional(),
});

const caseStudySchema = z.object({
    context: z.string().min(1),
    role: z.string().min(1),
    collaborationScope: z.string().min(1).optional(),
    constraints: z.array(z.string().min(1)).default([]),
    decisions: z.array(z.string().min(1)).default([]),
    outcomes: z.array(z.string().min(1)).default([]),
    reflection: z.string().min(1).optional(),
    links: z.array(z.object({
        label: z.string().min(1),
        url: z.string().url(),
    })).default([]),
    artifacts: z.array(caseStudyArtifactSchema).default([]),
});

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
        caseStudy: caseStudySchema.optional(),
        heroClass: z.string().optional(),
        heroBackground: z.string().optional(),
        galleryCaptions: z.array(z.string()).default([]),
    }),
});

export const collections = { projects };
