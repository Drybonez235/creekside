import type { CsbStore } from "./types";
import { sqliteStore } from "./sqlite-store";

// CSB_DB_DRIVER selects the storage backend. "sqlite" is the local-dev default.
// Once the client confirms their own DB server, add e.g. postgres-store.ts implementing
// the same CsbStore interface and wire it in here — no other file needs to change.
const driver = import.meta.env.CSB_DB_DRIVER || process.env.CSB_DB_DRIVER || "sqlite";

function resolveStore(): CsbStore {
	switch (driver) {
		case "sqlite":
			return sqliteStore;
		default:
			throw new Error(
				`Unknown CSB_DB_DRIVER "${driver}" — no store implementation registered for it yet.`,
			);
	}
}

export const store: CsbStore = resolveStore();
export type { CsbStore } from "./types";
export type {
	CsbAccount,
	CsbBookingRow,
	CsbBookingStatus,
	NewCsbBooking,
	WeeklyHours,
} from "./types";
