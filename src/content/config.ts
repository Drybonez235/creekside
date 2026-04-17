import { defineCollection, z } from 'astro:content';

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

/** Metric card variant determines color treatment */
const metricCardSchema = z.object({
  value: z.string(),
  label: z.string(),
  context: z.string(),
  variant: z.enum(["highlight", "success", "default"]).default("default"),
});

/** Table row as an array of cell strings */
const tableRowSchema = z.object({
  cells: z.array(z.string()),
});

/**
 * Section types matching the case-study-editor's rich format.
 * Each section has a type discriminator + type-specific fields.
 */
const sectionSchema = z.object({
  type: z.enum(["text", "metrics-grid", "table", "highlight-box", "quote", "image"]),
  sectionLabel: z.string().optional(),
  heading: z.string().optional(),
  paragraphs: z.array(z.string()).optional(),
  tags: z.array(z.string()).optional(),
  cards: z.array(metricCardSchema).optional(),
  tableHeaders: z.array(z.string()).optional(),
  tableRows: z.array(tableRowSchema).optional(),
  bigStat: z.string().optional(),
  boxHeading: z.string().optional(),
  boxText: z.string().optional(),
  quoteText: z.string().optional(),
  quoteAttr: z.string().optional(),
  imageUrl: z.string().optional(),
  imageCaption: z.string().optional(),
});

const caseStudies = defineCollection({
  type: 'content',
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
    featured: z.boolean().default(false),
    // Rich format fields (optional for backward compat during migration)
    heroBadge: z.string().default("Client Case Study"),
    heroTitle: z.string().optional(),
    heroSubtitle: z.string().optional(),
    clientInfo: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })).optional(),
    metricStrip: z.array(z.object({
      value: z.string(),
      label: z.string(),
    })).optional(),
    sections: z.array(sectionSchema).optional(),
    footerCta: z.string().default("Ready to see results like these?"),
  }),
});

export const collections = {
  'blog': blogCollection,
  'case-studies': caseStudies,
};
