// Driver-agnostic storage contract for Creekside Booking. Every route/lib module talks
// only to a CsbStore — never to SQL directly — so swapping the dev SQLite implementation
// for the client's own DB server later (Postgres, MySQL, Supabase — TBD) is a matter of
// adding one new file that implements this interface, not touching business logic.

export type WeeklyHours = {
	mon: [string, string] | [];
	tue: [string, string] | [];
	wed: [string, string] | [];
	thu: [string, string] | [];
	fri: [string, string] | [];
	sat: [string, string] | [];
	sun: [string, string] | [];
};

export interface CsbAccount {
	key: string;
	email: string;
	label: string;
	/** AES-256-CBC ciphertext, base64 — see lib/csb/accounts.ts encrypt/decrypt. */
	refreshTokenEncrypted: string;
	/** Dedicated "Creekside Bookings" secondary calendar id (D-4). Empty until first created. */
	calendarId: string;
	enabled: boolean;
	slotMinutes: number;
	hours: WeeklyHours;
	/** ISO timestamp of the last auth failure (revoked/expired refresh token), for admin display. */
	authErrorAt?: string | null;
}

export type CsbBookingStatus = "pending" | "created" | "error";

export interface CsbBookingRow {
	id: number;
	createdAt: string;
	customerName: string;
	phone: string;
	email: string;
	/** Lead-qualification fields from the multi-step widget's "your info" step. */
	service: string;
	company: string;
	budget: string;
	providerKey: string;
	providerEmail: string;
	/** Wall-clock America/Chicago, 'YYYY-MM-DD HH:mm:ss'. */
	startAt: string;
	endAt: string;
	eventId: string;
	icalUid: string;
	calendarId: string;
	gclid: string;
	fbclid: string;
	source: string;
	status: CsbBookingStatus;
	errorDetail: string | null;
}

export type NewCsbBooking = Pick<
	CsbBookingRow,
	| "customerName"
	| "phone"
	| "email"
	| "service"
	| "company"
	| "budget"
	| "providerKey"
	| "providerEmail"
	| "startAt"
	| "endAt"
	| "gclid"
	| "fbclid"
>;

export interface CsbStore {
	getAccounts(enabledOnly?: boolean): Promise<CsbAccount[]>;
	getAccount(key: string): Promise<CsbAccount | null>;
	saveAccount(account: CsbAccount): Promise<void>;

	insertBooking(row: NewCsbBooking): Promise<number>;
	updateBooking(id: number, patch: Partial<CsbBookingRow>): Promise<void>;
	findDuplicateBooking(
		email: string,
		providerKey: string,
		startAt: string,
	): Promise<boolean>;
	listBookings(limit: number): Promise<CsbBookingRow[]>;

	getSetting(key: string, defaultValue: string): Promise<string>;
	setSetting(key: string, value: string): Promise<void>;
}
