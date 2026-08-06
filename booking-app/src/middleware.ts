// HTTP Basic Auth gate for the booking admin surface. This is a single-operator internal
// tool (connect a Google account, tweak provider hours, export bookings) — Basic Auth
// against an env-var user/pass is proportionate; a full session/login system would be
// overbuilt for one operator.
//
// CSB_ADMIN_ENABLED is the kill switch for once setup is finished: set it to "false" to
// take the admin surface out of service. It 404s rather than 401s in that state, so the
// route reveals nothing to an unauthenticated prober — a 401 with a WWW-Authenticate header
// confirms an admin surface exists at all, which a 404 does not.

import { defineMiddleware } from "astro:middleware";

function env(name: string): string | undefined {
	return (import.meta.env as Record<string, string | undefined>)[name] ?? process.env[name];
}

export const onRequest = defineMiddleware((context, next) => {
	const { pathname } = context.url;
	const guarded = pathname.startsWith("/admin") || pathname.startsWith("/api/csb/admin");
	if (!guarded) return next();

	if (env("CSB_ADMIN_ENABLED") === "false") {
		return new Response("Not found", { status: 404 });
	}

	const user = env("CSB_ADMIN_USER");
	const pass = env("CSB_ADMIN_PASS");
	if (!user || !pass) {
		return new Response(
			"Booking admin is not configured: set CSB_ADMIN_USER and CSB_ADMIN_PASS in .env.",
			{ status: 500 },
		);
	}

	const header = context.request.headers.get("authorization") || "";
	const [scheme, encoded] = header.split(" ");
	if (scheme === "Basic" && encoded) {
		const decoded = Buffer.from(encoded, "base64").toString("utf8");
		// Split on the FIRST colon only (RFC 7617) -- a naive .split(":") truncates any
		// password that itself contains a colon, silently locking out that credential.
		const sep = decoded.indexOf(":");
		const u = sep === -1 ? decoded : decoded.slice(0, sep);
		const p = sep === -1 ? "" : decoded.slice(sep + 1);
		if (u === user && p === pass) return next();
	}

	return new Response("Authentication required.", {
		status: 401,
		headers: { "WWW-Authenticate": 'Basic realm="Creekside Booking Admin"' },
	});
});
