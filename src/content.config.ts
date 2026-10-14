import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    author: z.string().default('Brandon Wong'),
    category: z.string(),
    order: z.number().default(1),
    executiveAbstract: z.string(),
    paperAbstract: z.string().optional(),
    keyPoints: z.array(z.string()),
    thematicAreas: z.array(z.string()),
    publicationYear: z.number(),
    status: z.string(),
    institution: z.string().optional(),
    courseOrContext: z.string().optional(),
    apaReferences: z.array(z.string()).optional(),
    empiricalCases: z.any().optional(),
    theoreticalFramework: z.any().optional(),
    mainQuestion: z.string().optional(),
    subQuestions: z.array(z.string()).optional(),
  }),
});

export const collections = { research };
