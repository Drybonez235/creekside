export const CSB_TZ = "America/Chicago"; // D-6: Central, DST-aware — never hardcode an offset.

function env(name: string): string | undefined {
	return (import.meta.env as Record<string, string | undefined>)[name] ?? process.env[name];
}

/** Origin used to build the OAuth redirect URI. Local dev default matches astro.config.mjs. */
export function baseUrl(): string {
	return env("CSB_BASE_URL") || "http://localhost:3000";
}

export function googleClientId(): string | undefined {
	return env("CSB_GOOGLE_CLIENT_ID");
}

export function googleClientSecret(): string | undefined {
	return env("CSB_GOOGLE_CLIENT_SECRET");
}

export function googleConfigured(): boolean {
	return !!googleClientId() && !!googleClientSecret();
}
