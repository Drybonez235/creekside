import type { CsbStore } from "./types";
import { sqliteStore } from "./sqlite-store";
import { postgresStore } from "./postgres-store";

// CSB_DB_DRIVER selects the storage backend. "sqlite" is the local-dev default; "postgres"
// (Supabase) is what production actually needs -- serverless hosts like Vercel don't give
// better-sqlite3 a persistent disk to write to. postgres-store.ts builds its Supabase client
// lazily on first use, not at import time, so statically importing it here doesn't demand
// SUPABASE_* env vars from sqlite-only dev sessions that never select this driver.
const driver = import.meta.env.CSB_DB_DRIVER || process.env.CSB_DB_DRIVER || "sqlite";

function resolveStore(): CsbStore {
	switch (driver) {
		case "sqlite":
			return sqliteStore;
		case "postgres":
			return postgresStore;
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
