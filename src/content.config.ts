import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    executiveAbstract: z.string(),
    paperAbstract: z.string(),
    mainQuestion: z.string(),
    subQuestions: z.array(z.string()),
    empiricalCases: z.object({
      primary: z.string(),
      structural: z.string(),
      comparative: z.string(),
    }),
    theoreticalFramework: z.array(
      z.object({
        concept: z.string(),
        scholar: z.string(),
        description: z.string(),
      })
    ),
    apaReferences: z.array(z.string()),
    publicationYear: z.number(),
    status: z.string(),
    thematicAreas: z.array(z.string()),
  }),
});

export const collections = { research };
