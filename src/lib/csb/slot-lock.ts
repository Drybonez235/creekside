// Serializes concurrent booking attempts for the same (provider, slot) within this process.
//
// FR-14's freebusy re-check is check-then-act: Google's freebusy read and the later
// events.insert are two separate calls with no atomicity between them, so two requests that
// both read "free" before either has created its event will both succeed — a real double
// booking. Verified in testing: two truly concurrent requests for the same slot both
// returned 200 with distinct event ids. This doesn't fix the general distributed race (a
// second server process, or someone booking directly in Google Calendar in that exact
// window, is still possible per the spec's acknowledged limits) but it does close the
// realistic case this acceptance criterion describes — two browser tabs hitting one server.
const tails = new Map<string, Promise<unknown>>();

export function withSlotLock<T>(key: string, fn: () => Promise<T>): Promise<T> {
	const tail = tails.get(key) ?? Promise.resolve();
	const result = tail.then(fn, fn);
	const settled = result.then(
		() => undefined,
		() => undefined,
	);
	tails.set(key, settled);
	settled.then(() => {
		if (tails.get(key) === settled) tails.delete(key);
	});
	return result;
}
