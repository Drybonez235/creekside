import type { APIRoute } from "astro";
import { publicProviders } from "../../../lib/csb/accounts";

export const prerender = false;

export const GET: APIRoute = async () => {
	const providers = await publicProviders();
	return new Response(JSON.stringify(providers), {
		status: 200,
		headers: { "Content-Type": "application/json" },
	});
};
