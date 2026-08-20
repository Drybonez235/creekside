# Creekside — repo guide for AI agents

Two independent projects share this repo. Read this file fully before editing; several of
the traps below are silent, meaning the code looks correct, the build passes, and the thing
still does nothing in production.

| | Root (`/`) | `booking-app/` |
| :-- | :-- | :-- |
| What | Marketing site: pages, blog, funnels | Booking scheduler: widget, admin, API |
| Rendering | 100% static | 100% on-demand (`output: 'server'`) |
| Deployed as | Committed `dist/` served by Apache | systemd Node process on `127.0.0.1:4000` |
| Built by | `npm run build` at root | `cd booking-app && npm run build` |
| `trailingSlash` | `ignore` | `always` |

**They are separate builds.** Building one does nothing for the other. Apache reverse-proxies
`/book`, `/admin`, `/api/csb/*` to the booking app; everything else is static files.

Deeper docs, kept current — read them before non-trivial work:
- `booking-app/HANDOVER.md` — as-built architecture, env vars, admin guide, troubleshooting,
  and a log of past bugs with root causes. The single best source on this system.
- `booking-app/DEPLOY.md` — production runbook written for the client's developer.

## Traps that have actually bitten

1. **`dist/` is committed and is what production serves.** A change under `public/` or `src/`
   is invisible until the site is rebuilt and the new `dist/` is committed. Never hand-edit
   `dist/`.
2. **API routes need the trailing slash.** `booking-app` sets `trailingSlash: 'always'`, so
   `/api/csb/ghl-lead` 301s to `/api/csb/ghl-lead/`. Browsers replay a redirected POST as a
   **bodyless GET**, so the request silently does nothing. This dropped every lead from one
   funnel for weeks. Always write `fetch('/api/csb/thing/')`.
3. **The two funnels are hand-written HTML in `public/`, not Astro pages.** They live at
   `public/start/index.html` and `public/dental/start/index.html`. Their option values must
   stay in sync with the maps and routing rules in `src/pages/api/csb/ghl-lead.ts` — they
   have drifted apart before, silently misrouting leads.
4. **Never use `perl -0pi -e` for multiline edits here.** It has twice matched an empty
   pattern and destroyed a file (once inflating `HANDOVER.md` to 32MB). Use the Edit tool, or
   rewrite the file with Write.
5. **`astro check` reports 9 pre-existing errors** in `BaseHead.astro`, `Popup.astro`, and
   `astro.config.mjs`. They are not yours. Compare counts before and after rather than
   assuming a clean run.

## Booking app invariants — do not break these

1. **Credentials never reach the browser.** The widget only ever receives display-safe data:
   provider key, label, slot length. Never emails, never tokens.
2. **Auth is a keyless service account with Workspace domain-wide delegation.** There is no
   OAuth flow, no consent screen, no refresh token, and no private key anywhere. Do not
   reintroduce OAuth — it was removed deliberately (HANDOVER.md §1 explains why at length).
   Scopes live in `SA_SCOPES` (`lib/csb/service-account.ts`) and **must exactly match** the
   Workspace Admin console delegation entry; any drift fails every request with
   `unauthorized_client`.
3. **Conversions fire on truth, not intent.** The `booking_confirmed` dataLayer push happens
   only after a successful `events.insert`, using the event ID as `transaction_id`. Never on
   page view, form start, or optimistic UI.
4. **No raw PII to marketing tools.** Only SHA-256 hashed email/phone leave the server.
5. **Google Calendar is the system of record.** `csb_bookings` is a reconciliation/audit log,
   never authoritative appointment state.
6. **The pre-create freebusy re-check is load-bearing.** Google accepts overlapping events, so
   `slotIsFree()` immediately before `events.insert` is the *only* double-booking defense.
   Never cache it, never skip it.
7. **Fail closed on an unreadable calendar.** Google returns HTTP 200 with a per-calendar
   `errors` array and empty `busy` when it cannot read a calendar — indistinguishable from
   "free". `freebusyErrors()` treats that as a hard failure. Never "optimize" it into
   ignoring the error; that would book straight over existing appointments.
8. **Timezone is `America/Chicago` with DST.** All datetime math goes through `datetime.ts`.
   Never hardcode an offset, never use naive strings.
9. **No partial bookings.** If `events.insert` fails, mark the row `error`, return the
   friendly fallback, and fire no conversion.

## Layout

```
src/pages/                     marketing pages, blog, case studies
public/start/index.html        general qualification funnel  (hand-written HTML)
public/dental/start/index.html dental qualification funnel   (hand-written HTML)
dist/                          COMMITTED build output — what production serves

booking-app/
  src/lib/csb/
    service-account.ts         delegated JWT auth (ADC -> signJwt -> jwt-bearer), SA_SCOPES
    google-client.ts           Calendar API calls, retry/backoff, idempotent event creation
    availability.ts            slot computation, caches, freebusy error detection
    accounts.ts                account keys, default hours, public provider list
    datetime.ts                wall-clock <-> RFC3339 <-> America/Chicago
    slot-lock.ts               per-(provider, slot) lock around the re-check + insert
    store/                     CsbStore interface; sqlite (dev) and postgres (prod)
  src/pages/api/csb/
    providers.ts  availability.ts  book.ts  ghl-lead.ts  admin/export.csv.ts
  src/pages/admin/booking.astro  admin UI (Basic Auth via middleware.ts)
  migrations/                  dated SQL, run manually against Supabase
  supabase-schema.sql          run once on a fresh project
```

Everything booking-specific is prefixed `csb` / `Csb` / `CSB_`.

## Environment

Production storage is Supabase Postgres, project ref `ssizilzugycbhryqsmlr`. Local `.env` and
production `.env` hold **different** values for some keys, so production-encrypted data will
not decrypt locally.

Google auth (see `.env.example` for the full list):

```
CSB_SA_EMAIL=creekside-booking@driven-crane-504021-p3.iam.gserviceaccount.com
CSB_SA_CLIENT_ID=108922819435399341151      # Unique ID; what the Admin console calls "Client ID"
GOOGLE_APPLICATION_CREDENTIALS=/etc/creekside/wif-credentials.json   # not a secret
CSB_WORKSPACE_DOMAIN=creeksidemarketingpros.com
```

Every provider must be a real user in the Workspace domain — a service account cannot
impersonate a consumer Gmail account.

## Conventions

- Vanilla JS in widgets. No framework, no client-side build step.
- Public endpoints keep their defensive order: rate limit → honeypot → validate → duplicate
  guard → freebusy re-check → insert → log.
- Google API failures throw `CsbApiError` (defined in `lib/csb/http.ts`); callers handle it.
- `export const prerender = false` stays on every page and API route. It is redundant under
  `output: 'server'` but is deliberate belt-and-braces: without it, an output-mode change
  would silently turn the admin page into an unauthenticated static file.
- Small, scoped commits. Never `git push --force`. Never commit `.env` or secrets.
- Do not create temp scripts or test pages inside `public/` or `src/`.
- When changing `booking-app` dependencies, run `npm install` there rather than hand-editing
  `package-lock.json`.

## Commands

```bash
npm run dev                          # root marketing site
npm run build                        # root site -> dist/ (must be committed)

cd booking-app
npm install
npm run dev                          # http://localhost:3000
npm run build                        # -> dist/server/entry.mjs
npx astro check                      # expect 9 pre-existing errors
```

Both dev servers default to port 3000 and cannot run at once; override with
`astro dev --port <n>`.
