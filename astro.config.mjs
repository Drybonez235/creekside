// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
// https://astro.build/config
export default defineConfig({
  site: 'https://creeksidemarketingpros.com',
  vite: {
    plugins: [tailwindcss()],
  },

  server: {
    port: 3000,
    open: true, // Set to true if you want the browser to open on `npm run dev`
  },

  integrations: [sitemap()],
});