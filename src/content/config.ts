import { defineCollection, z } from 'astro:content';

// 1. Define the schema (The 'contract' for your blog posts)
const blogCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    image: z.string(),
    category: z.string().default('General'),
    tags: z.array(z.string()).default([]),
  }),
});

// 2. Export the collections object
// The KEY here ('blog') is what Astro uses to find the folder 'src/content/blog/'
export const collections = {
  'blog': blogCollection,
};