import type { APIRoute } from "astro";
import { createState } from "../../../../lib/csb/oauth-state";
import { authUrl } from "../../../../lib/csb/google-client";
import { googleConfigured } from "../../../../lib/csb/constants";

export const GET: APIRoute = ({ redirect }) => {
	if (!googleConfigured()) {
		return new Response(
			"Set CSB_GOOGLE_CLIENT_ID and CSB_GOOGLE_CLIENT_SECRET in .env first.",
			{ status: 500 },
		);
	}
	const state = createState();
	return redirect(authUrl(state));
};
