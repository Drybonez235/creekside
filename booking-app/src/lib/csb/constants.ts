export const CSB_TZ = "America/Chicago"; // D-6: Central, DST-aware — never hardcode an offset.

function env(name: string): string | undefined {
	return (import.meta.env as Record<string, string | undefined>)[name] ?? process.env[name];
}

/** Origin the app is served from. Local dev default matches astro.config.mjs. */
export function baseUrl(): string {
	return env("CSB_BASE_URL") || "http://localhost:3000";
}

/**
 * True once a service-account key is present. This is the only Google credential the app
 * needs now; there is no client ID/secret pair and no redirect URI, because there is no
 * consent screen. Whether the Admin console delegation is correct can't be known from
 * config alone -- that's what the admin page's "Test connection" exercises.
 */
export function googleConfigured(): boolean {
	return !!env("CSB_SA_KEY_FILE") || !!env("CSB_SA_KEY_JSON");
}

/** Workspace domain every impersonated provider must belong to. */
export function workspaceDomain(): string {
	return env("CSB_WORKSPACE_DOMAIN") || "creeksidemarketingpros.com";
}
