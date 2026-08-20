export const CSB_TZ = "America/Chicago"; // D-6: Central, DST-aware — never hardcode an offset.

function env(name: string): string | undefined {
	return (import.meta.env as Record<string, string | undefined>)[name] ?? process.env[name];
}

/** Origin the app is served from. Local dev default matches astro.config.mjs. */
export function baseUrl(): string {
	return env("CSB_BASE_URL") || "http://localhost:3000";
}

/**
 * True once the app knows which service account to sign as. Auth itself comes from
 * Application Default Credentials (Workload Identity Federation in production), and neither
 * that nor the Admin console delegation can be verified from config alone — both are
 * exercised by the admin page's "Test connection".
 */
export function googleConfigured(): boolean {
	return !!env("CSB_SA_EMAIL");
}

/** Workspace domain every impersonated provider must belong to. */
export function workspaceDomain(): string {
	return env("CSB_WORKSPACE_DOMAIN") || "creeksidemarketingpros.com";
}
