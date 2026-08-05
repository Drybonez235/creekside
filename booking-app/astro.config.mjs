// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";

// This project is 100% dynamic (booking widget, admin, API routes) -- unlike the marketing
// site, there's no static content worth prerendering here, so output: 'server' applies to
// everything by default without needing per-page `prerender = false` overrides.
//
// Runs as a small persistent Node process on Jonathan's own AWS box (his own preference,
// reconsidered after the cost/traffic-split tradeoff of a separate serverless host) --
// Apache reverse-proxies /book, /admin, /api/csb/* to it. See ../HANDOVER.md.
export default defineConfig({
	trailingSlash: "always",
	build: {
		format: "directory",
	},
	output: "server",
	adapter: node({
		mode: "standalone",
	}),
	vite: {
		plugins: [tailwindcss()],
	},
	server: {
		// Matches the redirect URI already registered in Google Cloud
		// (http://localhost:3000/api/csb/oauth/callback/). Since creekside-site (the marketing
		// site) also defaults to 3000, the two dev servers can't run concurrently without
		// overriding one via `astro dev --port <n>` -- acceptable since local booking work and
		// marketing-site work are rarely happening in the same session.
		port: 3000,
	},
});
