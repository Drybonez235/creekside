import { defineCollection, z } from 'astro:content';

// 1. Define the schema (The 'contract' for your blog posts)
const blogCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    image: z.string(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});


// 2. Export the collections object
// The KEY here ('blog') is what Astro uses to find the folder 'src/content/blog/'
const caseStudies = defineCollection({
  type: 'content', // 'content' for Markdown/MDX files
  schema: z.object({
    title: z.string(),
    client: z.string(),
    category: z.string(),
    logo: z.string().optional(),
    "logo-alt": z.string().optional(),
    summary: z.string(),
    tags: z.array(z.string()),
    metrics: z.object({
      roas: z.string(),
      scale: z.string(),
    }),
    featured: z.boolean().default(false), // Useful for that big top hero section
  }),
});

export const collections = {
  'blog': blogCollection,
  'case-studies': caseStudies,
};