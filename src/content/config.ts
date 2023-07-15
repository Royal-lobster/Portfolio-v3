import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: ({image}) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    coverImage: image(),
  }),
});

const projects = defineCollection({
  schema: ({image}) => z.object({
    title: z.string(),
    description: z.string(),
    image: image(),
    projectLink: z.string().url(),
    githubLink: z.string().url(),
    learned: z.array(z.string()),
  }),
});

const experience = defineCollection({
  schema: z.object({
    title: z.string(),
    startDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    endDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    company: z.string(),
    companyLink: z.string().url(),
  }),
});

export const collections = { posts, projects, experience };
