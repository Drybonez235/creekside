// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
//import sitemap from "@astrojs/sitemap";
import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'always',
  build: {
    format: 'directory', // Ensures pages are built as /page/index.html
  },
  site: 'https://creeksidemarketingpros.com',
  vite: {
    plugins: [tailwindcss()],
  },

  server: {
    port: 3000,
    open: true, // Set to true if you want the browser to open on `npm run dev`
  },

  integrations: [sitemap({
    chunks: {
        // Grouping 109 blog articles
        'post': (item) => {
          if (/\/blog\//.test(item.url)) {
            item.changefreq = ChangeFreqEnum.WEEKLY;
            item.priority = 0.8;
            item.lastmod = new Date().toISOString();
            return item;
          }
          return undefined; // Exclude from this chunk
        },
        'case-study-digital-marketing': (item) => {
          if (/\/case-study-digital-marketing\//.test(item.url)) {
            item.changefreq = ChangeFreqEnum.WEEKLY;
            item.priority = 0.8;
            item.lastmod = new Date().toISOString();
            return item;
          }
          return undefined; // Exclude from this chunk
        },
        // Grouping 40 static pages
        'page': (item) => {
          // If it's NOT a post, it's a page
          const isPost = /\/post\//.test(item.url);
          const isCaseStudy = /\/case-study-digital-marketing\//.test(item.url);

          if (!isPost && !isCaseStudy) {
            item.changefreq = ChangeFreqEnum.MONTHLY;
            item.priority = 1.0;
            return item;
          }
          return undefined; // Exclude from this chunk
        }
      },
    }
  )],
});