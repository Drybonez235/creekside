// Single-use OAuth state nonce, in-memory with a short TTL — replaces the WP transient
// used by admin-post.php?action=csb_oauth_start / the REST oauth/callback handler.

import crypto from "node:crypto";

const TTL_MS = 10 * 60 * 1000;
const pending = new Map<string, number>(); // state -> expiry ms

export function createState(): string {
	const state = crypto.randomBytes(24).toString("hex");
	pending.set(state, Date.now() + TTL_MS);
	return state;
}

/** True and single-use if the state is known and unexpired. */
export function consumeState(state: string | null | undefined): boolean {
	if (!state) return false;
	const expiry = pending.get(state);
	pending.delete(state);
	return !!expiry && expiry > Date.now();
}
