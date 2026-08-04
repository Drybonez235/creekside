# Creekside Booking Scheduler — Handover

Google Calendar-backed appointment scheduler built directly into the Creekside Marketing
Pros Astro site, with GA4/Google Ads conversion tracking on confirmed bookings. Built by JT
Consulting. Full functional spec: `../creekside-scheduler-requirements-v1.md` (one level up
from this repo). This doc covers what that spec doesn't: the as-built architecture, how to
configure and deploy it, credential rotation, and troubleshooting.

**If you only read one section, read "Before this goes live" at the bottom** — there are a
few things that will silently break in production if skipped.

---

## 1. Architecture

The booking feature is native to this Astro app — not a plugin, not a separate service.

```
src/
  components/BookingWidget.astro   4-step widget (service -> date/time -> details -> confirm)
  pages/book.astro                 hosts the widget, on-demand rendered
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
    store/                         CsbStore interface + sqlite-store.ts implementation
  middleware.ts                    HTTP Basic Auth gate + kill switch for /admin/* and
                                    /api/csb/admin/*
```

Everything is prefixed `csb` / `Csb` / `CSB_`.

### Rendering model — read this before touching `astro.config.mjs` again

The rest of the site (109+ blog posts, case studies, service pages) is **static** —
prerendered to HTML at build time, same as before this feature existed. Only the booking
feature is **on-demand** (server-rendered per request), because it needs live data:
availability reads Google Calendar in real time, and the admin page reads/writes SQLite.

This is controlled two ways, and both matter:

1. `astro.config.mjs` does **not** set `output: 'server'`. Leaving it unset keeps the
   site's default (static) so the 109+ existing pages keep prerendering. An early version of
   this build set `output: 'server'` globally, which — silently — made *every* page on the
   site server-rendered on every request instead of static. That's a real behavior and
   hosting-cost change to the whole marketing site, not something scoped to booking. It's
   been reverted; don't reintroduce it.
2. Every file that needs on-demand rendering has an explicit
   `export const prerender = false;` at the top: `book.astro`, `admin/booking.astro`, and
   every file under `pages/api/csb/`. If you add a new API route or admin page, it needs
   this line too, or it'll get silently baked into a static file at build time — which for
   `admin/booking.astro` specifically would mean **the Basic Auth gate in `middleware.ts`
   never runs**, because Astro middleware only executes for on-demand routes, not
   prerendered ones. A prerendered admin page is a public static HTML file with no auth.
3. `astro dev` does **not** distinguish prerendered from on-demand routes — everything is
   rendered live in dev mode regardless of the `prerender` flag. This means dev testing
   alone cannot catch a missing `prerender = false` (or an accidentally-static admin page).
   **Always verify with a real build before shipping a change to these files:**
   ```
   npm run build
   npm run start
   ```
   then confirm blog/case-study pages still 200 fast and unauthenticated `/admin/booking/`
   still 401s.

### Request flow (booking)

1. Widget loads `/book/` (on-demand), fetches `GET /api/csb/providers` (DB read, no Google
   call) and, once a provider's chosen, `GET /api/csb/availability` (Google `freebusy.query`,
   cached 60s per provider/month).
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

Each `.env` value is documented inline in `.env.example`. In short:

| Variable | Purpose |
| :-- | :-- |
| `CSB_GOOGLE_CLIENT_ID` / `CSB_GOOGLE_CLIENT_SECRET` | OAuth web client, from Google Cloud |
| `CSB_ENCRYPTION_KEY` | Derives the AES-256-CBC key that encrypts stored refresh tokens |
| `CSB_ADMIN_USER` / `CSB_ADMIN_PASS` | Basic Auth for `/admin/booking` and `/api/csb/admin/*` |
| `CSB_ADMIN_ENABLED` | Kill switch — see §4 |
| `CSB_DB_DRIVER` | `sqlite` only, today (see §5, "Before this goes live") |
| `CSB_BASE_URL` | Origin used to build the OAuth redirect URI; must match Google Cloud exactly |

Register `http://localhost:3000/api/csb/oauth/callback/` (trailing slash matters — this
site's `trailingSlash: 'always'` config makes the extensionless route 404 without it) as an
authorized redirect URI in Google Cloud, alongside the production URI.

---

## 3. Deployment (Railway)

Build/start commands:

```
npm run build     # astro build — static pages + server bundle to dist/
npm run start      # node ./dist/server/entry.mjs
```

Set the same env vars from §2 in Railway's environment config, with production values:
- `CSB_BASE_URL` → the production origin (`https://creeksidemarketingpros.com`)
- Register the production redirect URI in Google Cloud the same way as the dev one
- `CSB_ADMIN_ENABLED` → leave `true` (or unset) during initial setup, flip to `false` once
  accounts are connected and hours configured (see §4)

**Before deploying, resolve the SQLite storage question — see §5.** Deploying as-is risks
losing connected accounts and the reconciliation log on the next Railway restart/redeploy.

---

## 4. Admin guide

`/admin/booking` (Basic Auth via `CSB_ADMIN_USER`/`CSB_ADMIN_PASS`):

- **Connect Google Account** — starts the OAuth flow for a provider's Google account.
  Creates the "Creekside Bookings" secondary calendar on first connect. Repeat per provider
  (Peterson, Cade, etc.) — each connected account becomes a selectable agent in the widget.
- **Test connection** — runs token refresh → calendar read → freebusy → slot computation,
  PASS/FAIL per step. Use this first when something's not working.
- **Per-provider settings** — label, slot minutes, weekly hours (JSON), lead time, booking
  window.
- **Recent bookings / Export CSV** — the reconciliation log, joinable to Google Calendar by
  event ID.

**Kill switch:** set `CSB_ADMIN_ENABLED=false` (and restart/redeploy) once setup is
finished, to take the whole admin surface out of service. It responds `404`, not `401` —
this is deliberate, so an unauthenticated prober can't even tell an admin page exists (a 401
with a `WWW-Authenticate` header confirms it). Flip back to `true` to reconnect an account
after a refresh-token revocation, or to pull a CSV export.

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
  the app removes this.)

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
| Blog/case-study pages feel slow or start 500ing | Something reintroduced global `output: 'server'`, or a new file with `prerender = false` has a bug that's now affecting a route it shouldn't — see §1 |

---

## 7. Testing & validation (2026-08-03/04 session)

Every acceptance-criteria test from the spec was run against a live, OAuth-connected Google
account (not mocked):

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
| Degraded credentials → friendly fallback, no partial booking | Pass — corrupted `CSB_GOOGLE_CLIENT_SECRET` in a scratch copy of `.env`, confirmed both `/api/csb/availability` and `/api/csb/book` return 503 with no DB row written, and the widget shows "Online booking is temporarily unavailable. Please call us at (931) 342-4114" rather than a broken UI. Real credentials restored and re-verified working afterward. |

---

## 8. Before this goes live

- **Publish the OAuth consent screen.** The Google Cloud OAuth client is still in **Testing**
  status, which means Google force-expires every connected account's refresh token after 7
  days — whoever connected their calendar has to reconnect weekly, indefinitely, until this
  is done. Flip the consent screen to **In production** in Google Cloud Console. Because this
  app deliberately uses only non-sensitive scopes (`openid`, `email`, `calendar.app.created`,
  `calendar.freebusy` — see §1), publishing does **not** trigger Google's app-verification
  review; it's a self-service toggle. This is a hard blocker for a real launch, not optional
  polish.
- **SQLite persistence on Railway.** `CSB_DB_DRIVER` only has a `sqlite` implementation
  today. Railway's filesystem is not guaranteed to persist across deploys/restarts — without
  a mounted volume, connected accounts and the entire reconciliation log can vanish on the
  next deploy. Either attach a persistent Railway volume for `data/creekside-booking.db`, or
  implement a `postgres-store.ts` against the same `CsbStore` interface
  (`src/lib/csb/store/types.ts`) and set `CSB_DB_DRIVER=postgres`.
- **Real provider accounts.** Only two test Google accounts are connected. Peterson's and
  Cade's real accounts need to be connected via the admin page, and someone needs to confirm
  which calendar/agent maps to which part of the site.
- **Real provider hours.** Currently placeholder defaults (9–5 Mon–Fri, 30 min slots, 60 min
  lead time, 42 day booking window) — needs the client's actual values.
- **GTM tags.** The `booking_confirmed` trigger fires correctly; the GA4 event tag and
  Google Ads conversion tag that should listen for it in GTM (`GTM-MWQVSPJ`) aren't built.
  Needs GA4/Google Ads account access.
- **Google Cloud project ownership.** Still under Jordan's (JT Consulting's) account —
  recommended to transfer to the client's account so credentials survive the engagement.
- **Admin kill switch.** Set `CSB_ADMIN_ENABLED=false` once the above is done.
