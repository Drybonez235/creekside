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
