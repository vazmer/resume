import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/pages/works" }),
  schema: z.object({
    title: z.string(),
    url: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
    location: z.string(),
    org: z.string(),
    items: z.string().array(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/pages/projects" }),
  schema: z.object({
    title: z.string(),
    url: z.string().optional(),
    startDate: z.date(),
    endDate: z.date().optional(),
    items: z.string().array(),
    ignore: z.boolean().optional(),
  }),
});

const studies = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/pages/studies" }),
  schema: z.object({
    title: z.string(),
    url: z.string().optional(),
    location: z.string(),
    institute: z.string(),
  }),
});

export const collections = { works, projects, studies };
