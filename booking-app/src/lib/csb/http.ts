/** Best-effort client IP behind Cloudflare/Nginx — same lookup as src/lib/turnstile.ts. */
export function clientIp(request: Request): string | null {
	return (
		request.headers.get("cf-connecting-ip") ||
		request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
		null
	);
}

export function jsonResponse(data: unknown, status = 200): Response {
	return new Response(JSON.stringify(data), {
		status,
		headers: { "Content-Type": "application/json" },
	});
}

/** Matches the plugin's WP_Error shape closely enough for the widget's `r.body.code` checks. */
export function errorResponse(code: string, message: string, status: number): Response {
	return jsonResponse({ code, message }, status);
}

/**
 * Error type for Google API failures. Defined here rather than in google-client.ts so the
 * auth layer (service-account.ts) can throw it without importing the client that consumes
 * it, which would be circular. google-client.ts re-exports it for existing importers.
 */
export class CsbApiError extends Error {
	constructor(
		message: string,
		public response?: unknown,
		/** HTTP status, when the failure came from an API response rather than a throw. */
		public status?: number,
	) {
		super(message);
		this.name = "CsbApiError";
	}
}
