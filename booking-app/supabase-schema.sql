-- Creekside Booking — Postgres schema (Supabase), mirrors sqlite-store.ts's table shape.
-- Run this once in the Supabase SQL Editor for project gibbweiprixkeaxzkeuf before flipping
-- CSB_DB_DRIVER=postgres. postgres-store.ts uses the service-role (secret) key, which
-- bypasses RLS entirely, so RLS is left disabled here deliberately -- this table is never
-- queried by an end-user-scoped Supabase client, only by the trusted server-side store.

CREATE TABLE IF NOT EXISTS csb_accounts (
  key TEXT PRIMARY KEY,
  email TEXT NOT NULL,
  label TEXT NOT NULL DEFAULT '',
  refresh_token_encrypted TEXT NOT NULL DEFAULT '',
  calendar_id TEXT NOT NULL DEFAULT '',
  enabled BOOLEAN NOT NULL DEFAULT TRUE,
  slot_minutes INTEGER NOT NULL DEFAULT 30,
  hours_json TEXT NOT NULL DEFAULT '{}',
  auth_error_at TEXT
);

CREATE TABLE IF NOT EXISTS csb_bookings (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  created_at TEXT NOT NULL,
  customer_name TEXT NOT NULL DEFAULT '',
  phone TEXT NOT NULL DEFAULT '',
  email TEXT NOT NULL DEFAULT '',
  service TEXT NOT NULL DEFAULT '',
  company TEXT NOT NULL DEFAULT '',
  budget TEXT NOT NULL DEFAULT '',
  provider_key TEXT NOT NULL DEFAULT '',
  provider_email TEXT NOT NULL DEFAULT '',
  start_at TEXT NOT NULL,
  end_at TEXT NOT NULL,
  event_id TEXT NOT NULL DEFAULT '',
  ical_uid TEXT NOT NULL DEFAULT '',
  calendar_id TEXT NOT NULL DEFAULT '',
  gclid TEXT NOT NULL DEFAULT '',
  fbclid TEXT NOT NULL DEFAULT '',
  source TEXT NOT NULL DEFAULT 'website',
  status TEXT NOT NULL DEFAULT 'created',
  error_detail TEXT
);

CREATE INDEX IF NOT EXISTS idx_csb_bookings_provider_slot ON csb_bookings(provider_key, start_at);
CREATE INDEX IF NOT EXISTS idx_csb_bookings_email_slot ON csb_bookings(email, start_at);

CREATE TABLE IF NOT EXISTS csb_settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);
