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
      google-client.ts               OAuth, token cache, freebusy/calendars/events calls,
                                      backoff/retry, idempotent event creation
      availability.ts                slot computation, 60s slot + booking-rule caches,
                                      pre-create re-check, freeBusy error detection
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
server-rendered per request (`output: 'server'` in `astro.config.mjs`) — there's no static
content here worth prerendering, since the whole point of this project is live Google
Calendar data and a database-backed admin page.

This project used to be embedded in the marketing site itself, where each route needed its
own `export const prerender = false` to opt out of static generation. That was fragile: a
missed flag on the admin page would have silently made it a public static HTML file with
**no auth at all** (Astro middleware only runs for on-demand routes). Splitting it into its
own project removed that failure mode — `output: 'server'` makes everything on-demand by
default, so there's no per-file flag to forget.

Those `export const prerender = false` lines are nevertheless **still present** in every
page and API route, and should stay. They're redundant under `output: 'server'`, but they're
deliberate belt-and-braces: if anyone ever changes the output mode, they're what keeps the
admin page from silently becoming an unauthenticated static file. Redundant, not vestigial.

### Request flow (booking)

1. Widget loads `/book/`, fetches `GET /api/csb/providers` (DB read, no Google call) and,
   once a provider's chosen, `GET /api/csb/availability` (Google `freebusy.query`, cached
   60s per provider/month).
2. Customer picks a slot, fills details, submits → `POST /api/csb/book`.
3. Server: rate limit (5/10min/IP) → honeypot (bots get a silent `{ok:true}`, no row
   written) → validation → duplicate guard (same email+slot, DB only) → **fresh** freebusy
   re-check against Google (never cached — this is the actual double-booking defense, since
   Google's API happily accepts overlapping events) → reconciliation row inserted →
   `events.insert` on the provider's **primary** calendar with a Google Meet link attached
   (`conferenceData.createRequest` + `conferenceDataVersion=1`), customer added as attendee
   with `sendUpdates=all` (Google's native invite email is the confirmation) → row updated
   with the event ID → response.

   The app-created "Creekside Bookings" secondary calendar still exists on each account and
   is still read for free/busy, but is no longer written to. Meet links need a primary-calendar
   write; see §1 on scopes.
4. Widget pushes `booking_confirmed` to `dataLayer`: `transaction_id` is the Google Calendar
   event ID (the dedup key), plus SHA-256 hashed email/phone, GCLID/FBCLID, no raw PII.

**Note for whoever wires the GTM tags:** `transaction_id` is still the Google Calendar event
id, but that id is now **generated by this app**, not by Google — it always looks like
`csb` + 32 hex chars (e.g. `csbb7074ba0eff2212633b4a4038388e636`), rather than Google's
opaque format. This is what makes `events.insert` safe to retry (see §7); the value is
still globally unique and still the correct dedup key, it just has a predictable shape now.

### Two failure modes that are deliberately "fail closed"

Both exist because a wrong answer here is worse than no answer, and both surface to the
customer as the "call us" fallback rather than a broken or dishonest UI:

- **Unreadable calendar → refuse to answer.** Google returns HTTP 200 when it can't read a
  requested calendar, reporting it only as a per-calendar `errors` array with an empty
  `busy` list — which is indistinguishable from a genuinely free calendar. Both
  `slotIsFree()` and `slotsForMonth()` treat any such error as a hard failure rather than
  computing availability from an incomplete busy picture. Never "optimize" this into
  ignoring the error; it's the difference between the double-booking defense working and
  silently doing nothing.
- **Out-of-window months → answer without calling Google.** `/availability` is public and
  unrate-limited, so months entirely beyond the booking window return empty *before* any
  Calendar API call. Without that, any caller could burn the API quota — and since quota
  exhaustion fails closed per the point above, that would take booking offline for real
  customers.
5. GTM (`GTM-MWQVSPJ`, already on the site) needs a GA4 event tag and a Google Ads
   conversion tag listening for this trigger — **not built yet**, see open items below.

### OAuth scopes, and why the consent screen is Internal

Scopes are `openid email calendar.events calendar.app.created calendar.freebusy`.

`calendar.events` is a **sensitive** scope and is used deliberately: Meet link generation
(`conferenceData`) requires a scope that can write to a real user's calendar, and every such
scope is sensitive. So is the Meet REST API's `meetings.space.created` — there is no
non-sensitive route to per-booking Meet links.

That would normally be a launch blocker, because publishing an External app with a sensitive
scope triggers Google's verification review. It isn't one here, because the consent screen's
user type is **Internal**. The GCP project (`driven-crane-504021-p3`, display name "Google
Calendar") sits inside the creeksidemarketingpros.com Workspace org, and Internal apps are
exempt from both:

- **Verification review** — not required, at any scope sensitivity.
- **The 7-day refresh-token expiry** that hits External apps in Testing status. That expiry
  was silently disconnecting providers weekly.

**Do not switch the consent screen back to External.** Both consequences return, and the
weekly breakage is the kind that looks like a different bug each time.

Two constraints that follow from Internal:

- Only users **inside the Workspace org** can authorize. An outside address (e.g. the old
  `jordan@jtryonconsulting.com` test account) can never reconnect and should be removed from
  the provider list rather than left failing.
- Switching to Internal does **not** re-scope tokens already issued. Every provider must
  re-consent once afterward. The connect flow sends `access_type=offline` and
  `prompt=consent`, so a reconnect reliably reissues a refresh token — no revoke-first step
  is needed.

Bookings are written to the provider's **primary** calendar (not the app-created secondary
one), which is what `calendar.events` buys and what makes `conferenceData` work.

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
| `SUPABASE_URL` / `SUPABASE_PUBLISHABLE_KEY` / `SUPABASE_SECRET_KEY` / `SUPABASE_JWKS_URL` | Only needed when `CSB_DB_DRIVER=postgres`. Project `ssizilzugycbhryqsmlr` — a dedicated Supabase project for this client, separate from JT's own warehouse project (moved here 2026-08-05 from an earlier dedicated project, `gibbweiprixkeaxzkeuf` — if you see that ref anywhere, it's stale). `postgres-store.ts` uses the **secret** key directly via `@supabase/supabase-js` (bypasses RLS, same as a service-role key) — not `@supabase/server`'s request-auth wrapper, since this is trusted server-side code talking to its own tables, not a public API authenticating callers. |

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
  window. Fixed 2026-08-05: the settings-save handler used to resave every visible account's
  `enabled` state based on which checkboxes were present in the submitted form, so a
  partial/manual form POST (e.g. testing via curl) that omitted an account's checkbox would
  silently disable it — bit testing twice before the fix. Now an account is only touched if
  its `label__<key>` field is present at all, so a partial submission leaves accounts it
  doesn't mention untouched rather than resetting them to disabled.
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
  Reconnect the affected account. This should now be rare: the consent screen is **Internal**,
  so the 7-day expiry that applied under External + Testing no longer bites. If several
  accounts expire together, check that the consent screen has not been flipped back to
  External.

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
| Widget shows the fallback, and everything *looks* configured correctly | Most likely the booking calendar became unreadable — deleted from Google Calendar, permissions changed, or a stale `calendar_id` after a reconnect. This is deliberate fail-closed behavior, not a crash: the app refuses to compute availability it can't verify. Run **Test connection** — it fails at "Booking calendar" or "Free/busy read" and names the calendar. Reconnecting the account recreates it. |
| Booking works but the customer never gets an invite | Confirmation delivery is Google's native invite (customer added as an attendee with `sendUpdates=all`), not an email this app sends. Check the event exists on the "Creekside Bookings" calendar and that the attendee is on it. |
| Admin page shows "Reconnect needed" but the account works fine | Should no longer happen — the flag is now only set on Google's actual `invalid_grant` and is cleared on the next successful token refresh. If it persists, the refresh genuinely is failing: check **Test connection**'s "Token refresh" step. |
| `/admin/booking` returns 404 even with correct creds | `CSB_ADMIN_ENABLED=false` — this is the kill switch, not a bug |
| Slots don't reflect a just-made calendar change | 60s availability cache (per provider/month) — wait it out |
| A connected account "disappears" from the widget | Check `enabled` on that account row — the settings-save partial-submission bug that used to cause this is fixed (§4), but it's still possible to uncheck a box by hand in the real form |
| 502/503 from Apache on `/book`, `/admin`, or `/api/csb/*` | The Node process (systemd service, per `DEPLOY.md`) isn't running or crashed — check `journalctl -u creekside-booking` |
| Admin settings-save or "Test connection" returns 403 "Cross-site POST form submissions are forbidden" | Astro's built-in CSRF origin-check (`security.checkOrigin`, on by default) rejected it. This should already be fixed via `security.allowedDomains` in `astro.config.mjs`, but if a new host/port is added (a new dev port, a domain change), it needs adding to that list too — see the comment above it in `astro.config.mjs` for why the default behavior misfires. |

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

**Admin form submission, against the new Supabase project (2026-08-05):** the earlier test
passes above never actually exercised a real `<form>` POST from a browser (curl doesn't send
an `Origin` header, and JSON `fetch()` calls aren't form submissions) — the first real
attempt caught two genuine bugs, both fixed and reverified:

| Bug | Fix | Verified |
| :-- | :-- | :-- |
| Astro's CSRF origin-check (`security.checkOrigin`, on by default) silently discards the real `Host` header and falls back to a bare `localhost` (no port) whenever `security.allowedDomains` isn't configured — which never matches a real `Origin` header, so **every** admin form POST 403'd, including in what would have been production. Confirmed by reading `node_modules/astro/dist/core/app/validate-headers.js` directly. | Added `security.allowedDomains` to `astro.config.mjs` listing both the dev host and `creeksidemarketingpros.com`. | Pass — "Test connection" (a real browser form submission, not curl) returned all 4 PASS checks afterward. |
| Settings-save resaved every visible account's `enabled` state from the submitted form's checkboxes, so a partial/manual POST omitting an account's checkbox silently disabled it (bit testing twice) | Skip an account entirely if its `label__<key>` field isn't present in the submission at all, rather than defaulting to disabled | Pass — a partial POST no longer disables the connected account. |

Full booking flow (availability, book, event creation) also re-verified end-to-end against
the new Supabase project after both fixes.

**Full code review pass (2026-08-06):** read through every file under `src/lib/csb/`,
`src/pages/api/csb/`, `src/pages/admin/booking.astro`, `src/middleware.ts`, and
`src/components/BookingWidget.astro` looking specifically for bugs, not style. Found and
fixed four real ones:

| Bug | Fix |
| :-- | :-- |
| **CSV/formula injection (CWE-1236):** customer-controlled free text (name, company, etc.) flowed straight into the admin CSV export. A booking with a name like `=cmd\|'/c calc'!A1` would execute as a live formula if Peterson or Cade opened the export in Excel/Sheets. | `csvCell()` in `export.csv.ts` now prefixes any value starting with `=`, `+`, `-`, `@`, tab, or CR with a bare quote — the standard defense, forces spreadsheet apps to treat it as text. Verified with an actual formula-shaped booking. |
| **HTTP Basic Auth credentials split on every colon**, not just the first (RFC 7617 requires splitting on the first colon only — everything after belongs to the password). A `CSB_ADMIN_PASS` containing a colon would get silently truncated, permanently locking out that credential. | `middleware.ts` now splits only on the first colon via `indexOf`. |
| **Rate limiting fails open** when the client IP can't be determined (`clientIp()` returns `null`) — the whole `/api/csb/book` endpoint's rate limit silently disabled itself rather than just that one request. Apache should always forward `X-Forwarded-For` by default (`ProxyAddHeaders` is on unless explicitly disabled), so this shouldn't trigger in a correctly configured deployment, but the old behavior had no safety net if it ever did. | Requests with no determinable IP now share a single bucketed key instead of bypassing the limit entirely. |
| **`testConnection`'s "Slot computation" step used `now.getUTCMonth()`/`getUTCFullYear()`** instead of the Central-time-aware helpers the rest of the codebase is careful to use — exactly the naive-UTC bug class the file's own comments warn against (D-6/D-7). Near a UTC month boundary (e.g. shortly after midnight UTC, still evening of the previous day in Central), the admin diagnostics panel would silently test the wrong month. Customer-facing availability was never affected — only this one informational admin panel value. | Added `currentYearMonthInTz()` to `datetime.ts`; `diagnostics.ts` uses it instead of the raw UTC getters. |

Also reviewed and ruled out as non-issues: a client-side "today" comparison in
`BookingWidget.astro`'s calendar navigation uses the customer's own browser-local timezone,
not Central — cosmetic only (a UI nicety for graying out past dates), since the server
remains the actual source of truth for slot validity regardless of what the widget's nav
buttons show. A hardcoded `year < 2026` floor in the availability route is a sanity check
against malformed input, not a forward-compatibility bug (it only rejects past years, never
future ones). `ensureBookingCalendar`'s theoretical create-calendar race on an account's
very first booking is moot in practice — the OAuth callback already creates the booking
calendar eagerly at connect time, before any booking can happen.

All four fixes verified with a real build (`npm run build` + `npm run start`, not `astro
dev`) — providers, admin auth gating, a real form-based "Test connection" submission, a real
booking, and a booking with formula-shaped input all confirmed working correctly afterward.

**Second review pass (2026-08-06), focused on the Google API contract and slot logic.** Three
more real bugs, the first of which is the most serious one found in the project so far:

| Bug | Fix |
| :-- | :-- |
| **`freebusy` failed OPEN on an unreadable calendar — a hole straight through invariant #6.** Google returns **HTTP 200** when it can't read a requested calendar; the failure appears only as a per-calendar `errors` array alongside an empty `busy` list. Both `slotIsFree()` and `slotsForMonth()` only looked at `busy`, so an unreadable calendar was indistinguishable from a completely open one. If the booking calendar ever became unreadable (deleted in Google Calendar, permissions changed, stale id after a reconnect), **every existing appointment on it would go invisible and the app would book straight over the top of them** — silently, with no error anywhere. Verified against the live API, not assumed: an unreadable calendar returns `{errors:[{domain:"global",reason:"notFound"}], busy:[]}` with status 200. | Added `freebusyErrors()` in `availability.ts`. Both call sites now throw when any calendar reports an error, so the customer gets the "call us" fallback rather than availability computed from an incomplete busy picture. `slotIsFree()` deliberately throws rather than returning `false` — `false` would tell the customer "that time was just taken, pick another" and loop them through slots that all fail identically. |
| **ICS export produced malformed calendar files.** RFC 5545 requires escaping `\`, `;`, `,` and newlines inside TEXT values. `serviceLabel()` joins multiple selections with `", "`, so **any booking selecting two services** emitted a raw comma into `SUMMARY` — which strict parsers read as a value-list separator. Customer names ("Smith, Jr.") and free-text "Other" input hit it too. | Added an `icsText()` escaper applied to `SUMMARY` and `DESCRIPTION`. |
| **Malformed-but-well-shaped dates surfaced as a misleading 503.** `DATE_RE`/`TIME_RE` only check shape, so `2026-02-30` (a nonexistent date that matches the regex perfectly) and `25:99` both produced an `Invalid Date`. The past-check couldn't catch it either, since every comparison against `NaN` is false. It survived to `toRfc3339()`'s `toISOString()`, which threw inside the `slotIsFree` try/catch and surfaced as "Calendar unavailable" — pointing at Google for what was really a bad request. | Explicit `Number.isNaN(start.getTime())` guard returning a 400 before any of that. |

The fail-open fix was verified by **actually inducing the failure**, not just reading code:
temporarily repointed the connected account at an unreadable calendar id, restarted (to clear
the 60s in-memory cache), and confirmed `/availability` and `/book` both return 503 where they
previously would have advertised a full month of bogus slots and accepted a booking against
them. Real calendar id restored and normal operation re-verified afterward (September
correctly shows 12 bookable days, 09-01 → 09-16, matching the 42-day booking window).

**Third review pass (2026-08-06), focused on error paths and the retry logic** — the parts
that only misbehave once something *else* is already broken, which is why earlier happy-path
testing never touched them. Five more real bugs:

| Bug | Fix |
| :-- | :-- |
| **`/availability` was an unauthenticated amplifier for Google API quota.** It's public, has no rate limit (only `/book` does), and the route only validated `year >= 2026` — so every distinct future year/month, *including year 3000*, cost a live `freeBusy` call plus a permanent `monthCache` entry. Measured before the fix: ~0.5-1.0s per far-future request (a real API round trip) vs ~0.1s for a past month's early return. Anyone could burn the Calendar API's per-minute quota from a shell loop, and because quota exhaustion now (correctly) fails closed after the fix above, that would take booking **offline for real customers**. | Bail out for months entirely beyond the booking window *before* touching Google. Verified after: far-future requests drop to ~0.11s with zero network I/O. |
| **The first version of that fix was insufficient** — the early exit sat after two `getSetting()` calls, so it just moved the amplifier from the Calendar API onto Postgres (~0.3-0.4s of DB round trips per request, on every attempt, forever). Caught by measuring rather than assuming the fix worked. | Booking rules are now cached in-process for the same 60s as the month cache, so the early exit costs no I/O at all. |
| **`events.insert` was retried non-idempotently — a duplicate-booking hole.** `apiRequest()` retries 5xx/429, and events.insert is not naturally idempotent: if the first attempt created the event but its response was lost, the retry created a **second** calendar event on both the provider's and the customer's calendar, with only one recorded in the reconciliation log. | Send a client-generated event id, which makes the insert idempotent, and treat the resulting 409 as success by reading the event back. Proven against the live API: 1st insert → 200 created, identical retry → **409 "The requested identifier already exists"**, GET by id → same event recovered. |
| **A transient token blip left a permanent false "Reconnect needed".** Any failed token refresh set `authErrorAt`, including a 5xx or network blip — and nothing ever cleared it except a full OAuth reconnect. One bad minute meant the admin page demanded a reconnect on a perfectly healthy account, indefinitely. | Only flag on Google's actual `invalid_grant` (the real revoked/expired signal), and clear the flag on a successful refresh. |
| **Malformed booking rules silently disabled the lead time and booking window.** `Math.max(0, NaN)` is `NaN`, so a non-numeric value persisted the literal string `"NaN"`, which read back as `NaN` — and since every comparison against `NaN` is false, *both* guards quietly switched off rather than erroring. | Sanitized on write and on read, falling back to the documented defaults. Verified: a hand-built POST with `lead_minutes=abc&window_days=xyz` now persists `60`/`42`. |

Also swept expired entries from the OAuth-state and month caches — this runs as a long-lived
process rather than a serverless function, so nothing reclaims abandoned entries for free.

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
- ~~**Publish the OAuth consent screen.**~~ **Resolved 2026-08-20** by switching the user
  type to **Internal** instead, which removes both the verification review and the 7-day
  refresh-token expiry outright. See §1. No publication and no review are needed.
- **Every provider must re-consent once.** Hard blocker — bookings stay down until this
  happens. The Internal switch does not re-scope tokens already issued, and the current
  tokens predate `calendar.events`, which is what the 2026-08-19 outage actually is. Do
  Peterson first, run a real end-to-end booking, and only then ask the other three.
- **Remove the out-of-org provider row.** `jordan@jtryonconsulting.com` is not in the
  Workspace domain, so under Internal it can never reconnect. Disable or delete it, or it
  will fail every "Test connection" forever.
- **Real provider accounts.** Someone needs to confirm which agent maps to which funnel
  (dental and general both currently route to Cade or Keith).
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
