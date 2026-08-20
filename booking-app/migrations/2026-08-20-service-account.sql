-- Service-account migration (2026-08-20).
--
-- Auth moved from per-provider OAuth to a service account with Workspace domain-wide
-- delegation, so the two credential columns on csb_accounts no longer hold anything the
-- app reads:
--
--   refresh_token_encrypted : there are no refresh tokens now
--   auth_error_at           : there is no per-account grant to go stale; a delegation
--                             failure affects every provider at once and surfaces on the
--                             admin page's "Test connection" instead
--   calendar_id             : bookings write to each provider's primary calendar, so the
--                             app-created "Creekside Bookings" calendar is unused
--
-- The columns are NOT dropped here on purpose. Dropping them is irreversible and would
-- strand a rollback to the OAuth build, which is a live possibility until delegation is
-- confirmed working in production. Blank the secrets now; drop the columns later once the
-- service-account path has run clean for a while.
--
-- Run against the Supabase SQL editor for project ssizilzugycbhryqsmlr.

BEGIN;

-- Encrypted refresh tokens are now dead weight, and they are the most sensitive thing in
-- this table. Clear them rather than leaving decryptable credentials at rest.
UPDATE csb_accounts SET refresh_token_encrypted = '' WHERE refresh_token_encrypted <> '';

-- Stale "reconnect needed" flags would otherwise render a permanent warning badge for a
-- reconnect flow that no longer exists.
UPDATE csb_accounts SET auth_error_at = NULL WHERE auth_error_at IS NOT NULL;

COMMIT;

-- Deferred until the OAuth build is definitively retired:
--   ALTER TABLE csb_accounts DROP COLUMN refresh_token_encrypted;
--   ALTER TABLE csb_accounts DROP COLUMN auth_error_at;
--   ALTER TABLE csb_accounts DROP COLUMN calendar_id;
