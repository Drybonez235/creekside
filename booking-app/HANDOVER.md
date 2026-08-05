# Creekside Booking Scheduler — Handover

Google Calendar-backed appointment scheduler for creeksidemarketingpros.com, with GA4/Google
Ads conversion tracking on confirmed bookings. Built by JT Consulting. Full functional spec:
`../../creekside-scheduler-requirements-v1.md` (two levels up — the repo root's parent
directory). This doc covers what that spec doesn't: the as-built architecture, how to
configure and deploy it, credential rotation, and troubleshooting.

**If you only read one section, read "Before this goes live" at the bottom.**

This is a standalone project living in its own directory (`booking-app/`) inside the
`creekside-site` repo, alongside the marketing site — but it is built, deployed, and run
completely independently. It used to be embedded directly in the marketing site's own Astro
build; it was pulled out into its own project on 2026-08-05 because the two builds have
fundamentally different rendering needs (see "Deployment" below) — the marketing site is
100% static, this is 100% on-demand.

---

## 1. Architecture

```
booking-app/
  src/
    components/BookingWidget.astro   4-step widget (service -> date/time -> details -> confirm)
    pages/book.astro                 hosts the widget
    pages/admin/booking.astro        admin UI: connect accounts, configure hours, CSV export
    pages/api/csb/
      providers.ts                   GET  list of connected/enabled providers (display-safe)
      availability.ts                GET  month of open slots for a provider
      book.ts                        POST rate-limit -> honeypot -> validate -> duplicate
                                      guard -> freebusy re-check -> events.insert -> log
      oauth/callback.ts              GET  OAuth redirect target
      admin/connect.ts               GET  starts the OAuth flow
      admin/export.csv.ts            GET  reconciliation log as CSV
    lib/csb/
      google-client.ts               OAuth, token cache, freebusy/calendars/events calls
      availability.ts                slot computation, 60s cache, pre-create re-check
      accounts.ts                    refresh-token encryption (AES-256-CBC), account keys
      datetime.ts                    wall-clock <-> RFC3339 <-> America/Chicago instant math
      slot-lock.ts                   per-(provider, slot) lock so concurrent bookings can't
                                      both pass the freebusy re-check before either inserts
      oauth-state.ts                 CSRF nonce for the OAuth round trip
      diagnostics.ts                 the admin page's "Test connection" checks
      store/                         CsbStore interface; sqlite-store.ts (local dev) and
                                      postgres-store.ts (Supabase, production)
    middleware.ts                    HTTP Basic Auth gate + kill switch for /admin/* and
                                      /api/csb/admin/*
    layouts/Layout.astro,            copied (not shared) from the marketing site, so this
    components/{BaseHead,SeoHead,    project has zero build-time dependency on it. If the
      JsonLd,Popup,Nav,Footer}.astro marketing site's nav/footer/branding changes, someone
                                      needs to re-copy these — there's no automatic sync.
  DEPLOY.md                          step-by-step runbook for Jonathan (the client's actual
                                      web developer) to actually run this in production
  supabase-schema.sql                run once against the Supabase project before first use
```

Everything booking-specific is prefixed `csb` / `Csb` / `CSB_`.

### Rendering: 100% on-demand, no hybrid tricks needed

Unlike the marketing site (which is fully static), every route in this project is
server-rendered per request (`output: 'server'` in `astro.config.mjs`, no per-page
`prerender` overrides needed) — there's no static content here worth prerendering, since the
whole point of this project is live Google Calendar data and a database-backed admin page.

This project used to be embedded in the marketing site itself with per-file
`export const prerender = false` overrides, which was fragile — a missed flag on the admin
page would have silently made it a public static file with **no auth at all** (Astro
middleware only runs for on-demand routes). Splitting it into its own project removes that
whole failure mode: everything here is on-demand, full stop, so there's no flag to forget.

### Request flow (booking)

1. Widget loads `/book/`, fetches `GET /api/csb/providers` (DB read, no Google call) and,
   once a provider's chosen, `GET /api/csb/availability` (Google `freebusy.query`, cached
   60s per provider/month).
2. Customer picks a slot, fills details, submits → `POST /api/csb/book`.
3. Server: rate limit (5/10min/IP) → honeypot (bots get a silent `{ok:true}`, no row
   written) → validation → duplicate guard (same email+slot, DB only) → **fresh** freebusy
   re-check against Google (never cached — this is the actual double-booking defense, since
   Google's API happily accepts overlapping events) → reconciliation row inserted →
   `events.insert` on the account's dedicated "Creekside Bookings" calendar, customer added
   as attendee with `sendUpdates=all` (Google's native invite email is the confirmation) →
   row updated with the event ID → response.
4. Widget pushes `booking_confirmed` to `dataLayer`: `transaction_id` is the Google Calendar
   event ID (the dedup key), plus SHA-256 hashed email/phone, GCLID/FBCLID, no raw PII.
5. GTM (`GTM-MWQVSPJ`, already on the site) needs a GA4 event tag and a Google Ads
   conversion tag listening for this trigger — **not built yet**, see open items below.

### Why non-sensitive OAuth scopes only

Scopes are exactly `openid email calendar.app.created calendar.freebusy`. Do **not** add
`calendar`, `calendar.events`, or `calendar.readonly` — those are sensitive scopes that
trigger Google's app-verification review and would block go-live. This is why bookings land
on an app-created secondary "Creekside Bookings" calendar rather than the provider's primary
calendar (which `calendar.app.created` doesn't allow writing to), and why the primary
calendar is only ever read as free/busy.

---

## 2. Local development

```
npm install
cp .env.example .env      # fill in real values, see below
npm run dev                # http://localhost:3000
```

Port 3000 is shared with the marketing site's own dev server (`creekside-site/`, one level
up) — they can't run concurrently without overriding one via `astro dev --port <n>`.
Acceptable since local booking work and marketing-site work rarely overlap in the same
session.

| Variable | Purpose |
| :-- | :-- |
| `CSB_GOOGLE_CLIENT_ID` / `CSB_GOOGLE_CLIENT_SECRET` | OAuth web client, from Google Cloud |
| `CSB_ENCRYPTION_KEY` | Derives the AES-256-CBC key that encrypts stored refresh tokens |
| `CSB_ADMIN_USER` / `CSB_ADMIN_PASS` | Basic Auth for `/admin/booking` and `/api/csb/admin/*` |
| `CSB_ADMIN_ENABLED` | Kill switch — see §4 |
| `CSB_DB_DRIVER` | `sqlite` (default, local dev) or `postgres` (Supabase — the production driver) |
| `CSB_BASE_URL` | Origin used to build the OAuth redirect URI; must match Google Cloud exactly |
| `SUPABASE_URL` / `SUPABASE_PUBLISHABLE_KEY` / `SUPABASE_SECRET_KEY` / `SUPABASE_JWKS_URL` | Only needed when `CSB_DB_DRIVER=postgres`. Project `gibbweiprixkeaxzkeuf` — a dedicated Supabase project for this client, separate from JT's own warehouse project. `postgres-store.ts` uses the **secret** key directly via `@supabase/supabase-js` (bypasses RLS, same as a service-role key) — not `@supabase/server`'s request-auth wrapper, since this is trusted server-side code talking to its own tables, not a public API authenticating callers. |

Register `http://localhost:3000/api/csb/oauth/callback/` (trailing slash matters — this
project's `trailingSlash: 'always'` config makes the extensionless route 404 without it) as
an authorized redirect URI in Google Cloud, alongside the production URI.

Before first use of the Postgres driver, run `supabase-schema.sql` (this directory) once
against the Supabase project's SQL Editor — creates `csb_accounts`, `csb_bookings`, and
`csb_settings`, mirroring the SQLite schema exactly (same columns, same types where it
matters — e.g. datetimes stay `TEXT` wall-clock strings, not `timestamptz`).

---

## 3. Deployment

**Decision history, because it changed twice and the reasoning matters:**

The marketing site (one level up) is served by Jonathan (the client's actual web developer)
building it locally and copying the static `dist/` output to Apache on an AWS box — no Node
process, ever, for that site. This project's routes (`/book`, `/admin/booking`,
`/api/csb/*`) need a live server (they call the Google Calendar API and read/write a
database), so they can't run under that model at all — hence this being pulled into its own
project.

Two ways to actually run this separate piece were considered:

1. **A serverless platform (Vercel was built and fully tested — see §7).** No process to
   run, but it's a genuinely separate hosting account and bill — realistically $20/mo
   indefinitely to stay ToS-compliant for commercial use (free tiers on these platforms are
   generally restricted to non-commercial projects), on top of whatever the AWS box already
   costs. **Reversed** on 2026-08-05: doubling infrastructure providers/bills contradicts the
   low-cost value proposition this project was pitched on.
2. **A small persistent Node process on Jonathan's existing box** (`@astrojs/node`,
   standalone mode), reverse-proxied by Apache. **This is what's actually being built.**
   Jonathan initially leaned serverless assuming his box "wasn't sized for web apps," but
   after the cost tradeoff was named directly, he confirmed he's comfortable running it —
   it's genuinely low-traffic (one request cycle per booking, not real site traffic), and he
   has prior experience running web apps on his own infrastructure.

A same-domain Apache reverse-proxy (`ProxyPass`/`ProxyPassReverse` for `/book`, `/admin`,
`/api/csb/*`, with `ProxyPreserveHost On`) was chosen over two other integration approaches,
regardless of which backend option won — worth knowing why, if either resurfaces:
- **A subdomain** (`book.creeksidemarketingpros.com`) — breaks `sessionStorage`-based
  GCLID/FBCLID capture across the origin boundary, and needs explicit GA4 cross-domain
  configuration to avoid the visit being counted as a new session. That's the exact
  attribution problem this project exists to prevent.
- **An iframe embed** — `dataLayer.push` from inside a cross-origin iframe never reaches the
  parent page's real GTM container without a `postMessage` bridge, and cross-origin iframe
  storage is subject to ongoing Safari/Firefox partitioning that same-origin proxying
  doesn't have to worry about.

The same-domain proxy keeps everything fully same-origin (zero attribution risk, no code
change to existing `/book/`-relative links across the site), and — because Apache proxies
transparently — the OAuth redirect URI never has to change from what's already registered.

**Status as of 2026-08-05:** `DEPLOY.md` (this directory) is a self-contained runbook written
for Jonathan to implement directly — systemd service, Apache config, env setup. He's agreed
to implement it; not yet done as of this writing. **PR #2 is superseded** — it described the
booking feature still embedded in the marketing site's own build (the earlier, abandoned
approach) and should not be merged; a new PR reflecting this project split is what's
actually up for review.

---

## 4. Admin guide

`/admin/booking` (Basic Auth via `CSB_ADMIN_USER`/`CSB_ADMIN_PASS`):

- **Connect Google Account** — starts the OAuth flow for a provider's Google account.
  Creates the "Creekside Bookings" secondary calendar on first connect. Repeat per provider
  (Peterson, Cade, etc.) — each connected account becomes a selectable agent in the widget.
- **Test connection** — runs token refresh → calendar read → freebusy → slot computation,
  PASS/FAIL per step. Use this first when something's not working.
- **Per-provider settings** — label, slot minutes, weekly hours (JSON), lead time, booking
  window. **Caution:** the settings-save form resaves every visible account's `enabled`
  state based on which checkboxes are present in the submitted form — a partial/manual form
  POST (e.g. testing via curl) that omits an account's checkbox will silently disable it.
  Submitting the real rendered form in a browser always includes every account correctly;
  this only bites hand-crafted requests.
- **Recent bookings / Export CSV** — the reconciliation log, joinable to Google Calendar by
  event ID.

**Kill switch:** set `CSB_ADMIN_ENABLED=false` (and restart) once setup is finished, to take
the whole admin surface out of service. It responds `404`, not `401` — deliberate, so an
unauthenticated prober can't even tell an admin page exists. Flip back to `true` to
reconnect an account after a refresh-token revocation, or to pull a CSV export.

---

## 5. Credential rotation

- **`CSB_GOOGLE_CLIENT_SECRET`:** safe to rotate in Google Cloud, then update the env var and
  restart. Existing refresh tokens keep working — they're tied to the OAuth client ID, not
  the secret's value, as long as the new secret is used for the next token exchange.
- **`CSB_ENCRYPTION_KEY`:** rotating this **orphans every connected account** — all stored
  refresh tokens become undecryptable. Every provider needs to reconnect via **Connect
  Google Account** afterward. Don't rotate this casually.
- **Revoked/expired refresh token:** "Test connection" will fail at the token-refresh step.
  Reconnect the affected account. (Note: while the Google OAuth app is in Testing mode
  rather than Published, Google expires refresh tokens after 7 days regardless — publishing
  the app removes this — see "Before this goes live.")

---

## 6. Troubleshooting

| Symptom | Cause / fix |
| :-- | :-- |
| `redirect_uri_mismatch` | Registered URI doesn't match byte-for-byte — check trailing slash and `http` vs `https` against what `CSB_BASE_URL` produces |
| "Access blocked: app not verified" with no Advanced link | The connecting Google account isn't in the OAuth consent screen's Test users list |
| `invalid_scope` | Consent screen scopes don't include `calendar.app.created` and `calendar.freebusy` |
| Test connection fails at "Token refresh" | Refresh token revoked/expired — reconnect the account |
| Test connection fails at "Booking calendar" (403) | `calendar.app.created` scope missing — fix consent screen, reconnect |
| Widget shows the fallback message immediately | Check `CSB_GOOGLE_CLIENT_ID`/`SECRET` are set and correct; verified behavior — see §7 |
| `/admin/booking` returns 404 even with correct creds | `CSB_ADMIN_ENABLED=false` — this is the kill switch, not a bug |
| Slots don't reflect a just-made calendar change | 60s availability cache (per provider/month) — wait it out |
| A connected account "disappears" from the widget | Check `enabled` on that account row — see the admin-guide caution in §4 about partial form submissions |
| 502/503 from Apache on `/book`, `/admin`, or `/api/csb/*` | The Node process (systemd service, per `DEPLOY.md`) isn't running or crashed — check `journalctl -u creekside-booking` |

---

## 7. Testing & validation

Every acceptance-criteria test from the spec was run against a live, OAuth-connected Google
account (not mocked), 2026-08-03/04:

| Test | Result |
| :-- | :-- |
| Full booking flow, widget → Google Calendar | Pass — event created correctly |
| Timezone correctness (9:00 AM selection) | Pass — Google event reads `2026-08-18T09:00:00-05:00` / `America/Chicago`, verified via direct Calendar API read, not just the UI |
| Confirmation email delivery | Pass — native Google invite arrived; displayed time correctly localized to the recipient's own Gmail timezone setting |
| `dataLayer` `booking_confirmed`: fires once, correct `transaction_id`, hashed PII only | Pass |
| Refresh/back-button doesn't duplicate | Pass — widget holds no server-side confirmation state to replay |
| Concurrent double-booking (two simultaneous requests, same slot) | Pass — one succeeds, other gets `csb_slot_taken` (409) |
| Duplicate submission (same email + slot twice) | Pass — second gets `csb_duplicate` (409) |
| Manual block in Google Calendar closes the slot; delete reopens it | Pass — verified live against the 60s cache window |
| Reconciliation log matches Calendar; CSV export | Pass |
| Admin auth gating (401 without creds, 200 with, 404 when `CSB_ADMIN_ENABLED=false`) | Pass |
| Honeypot bot field | Pass — `{ok:true}` returned, no booking row written |
| Degraded credentials → friendly fallback, no partial booking | Pass — corrupted `CSB_GOOGLE_CLIENT_SECRET` in a scratch copy of `.env`, confirmed both `/api/csb/availability` and `/api/csb/book` return 503 with no DB row written, and the widget shows the fallback message rather than a broken UI. Real credentials restored and re-verified working afterward. |

**Postgres store parity (2026-08-04):** with `CSB_DB_DRIVER=postgres` against the live
Supabase project, every `CsbStore` method was re-verified against real data:

| Method | Verified via |
| :-- | :-- |
| `getAccounts` / `getAccount` / `saveAccount` | Full OAuth connect flow — real Google account saved and read back correctly |
| `insertBooking` / `updateBooking` / `findDuplicateBooking` | Real booking created, event ID written back, duplicate correctly rejected (409) |
| `listBookings` | CSV export matches the booking exactly |
| `getSetting` / `setSetting` | Admin settings form save → widget render read the value back |

**Project extraction + both adapters (2026-08-05):** after splitting into this standalone
project, re-verified against real data on **both** adapters before settling on Node:

| What | Result |
| :-- | :-- |
| `@astrojs/vercel`, deployed to Vercel (`jt-consulting2/booking-app`) | Pass — full booking flow, availability, admin auth gating, and CSV export all worked correctly against the live Supabase project through an actual Vercel deployment. Reversed afterward for the cost reasons in §3, not a technical failure. |
| `@astrojs/node`, run via `npm run start` (the real production entrypoint, not `astro dev`) | Pass — `/book/`, `/api/csb/providers`, and admin auth gating (401/200) all verified against the built server binary, matching dev-mode behavior exactly. |

---

## 8. Before this goes live

- **Jonathan needs to implement `DEPLOY.md`.** He's agreed to run this as a systemd-managed
  Node process on the existing AWS box, with Apache proxying to it. Written and reviewed;
  not yet implemented as of 2026-08-05.
- **Real secret values need to reach Jonathan through a secure channel** — not committed to
  git, not pasted in plain email. `DEPLOY.md` deliberately doesn't contain real values, only
  a pointer to `.env.example`.
- **Register the production OAuth redirect URI** in Google Cloud
  (`https://creeksidemarketingpros.com/api/csb/oauth/callback/`) once the domain/path is
  confirmed with Jonathan — this is on Jordan's side, not Jonathan's.
- **Publish the OAuth consent screen.** The Google Cloud OAuth client is still in **Testing**
  status, which means Google force-expires every connected account's refresh token after 7
  days — whoever connected their calendar has to reconnect weekly, indefinitely, until this
  is done. Flip the consent screen to **In production** in Google Cloud Console. Because this
  app deliberately uses only non-sensitive scopes, publishing does **not** trigger Google's
  app-verification review; it's a self-service toggle. Hard blocker for a real launch.
- **Real provider accounts.** Only test Google accounts are connected. Peterson's and Cade's
  real accounts need to be connected via the admin page once it's deployed, and someone
  needs to confirm which calendar/agent maps to which part of the site.
- **Real provider hours.** Currently placeholder defaults (9–5 Mon–Fri, 30 min slots, 60 min
  lead time, 42 day booking window) — needs the client's actual values.
- **GTM tags.** The `booking_confirmed` trigger fires correctly; the GA4 event tag and
  Google Ads conversion tag that should listen for it in GTM (`GTM-MWQVSPJ`) aren't built.
  Needs GA4/Google Ads account access.
- **Google Cloud project ownership.** Still under Jordan's (JT Consulting's) account —
  recommended to transfer to the client's account so credentials survive the engagement.
  Same question applies to the Supabase project.
- **Decommission the Vercel project** (`jt-consulting2/booking-app`) once the Node-process
  path is confirmed working in production — it's dormant but still exists with env vars
  configured from the earlier test.
- **Admin kill switch.** Set `CSB_ADMIN_ENABLED=false` once the above is done.
