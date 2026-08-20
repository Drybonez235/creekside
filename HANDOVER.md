# Creekside Booking Scheduler — moved

The booking feature and its handover doc live in `booking-app/` — see
[`booking-app/HANDOVER.md`](booking-app/HANDOVER.md) for the as-built architecture, and
[`booking-app/DEPLOY.md`](booking-app/DEPLOY.md) for the production runbook.

For a fast orientation before editing anything in this repo, read
[`CLAUDE.md`](CLAUDE.md) — it covers the two-build layout, the invariants, and the silent
traps (committed `dist/`, trailing-slash-sensitive API routes, hand-written funnel HTML).

This repo (`creekside-site/`) is the marketing site: fully static, no adapter, built and
deployed by Jonathan exactly as it always was. The booking feature was pulled out into its
own standalone project (`booking-app/`) on 2026-08-05 because its routes need on-demand
server rendering, which is fundamentally incompatible with the marketing site's pure-static
build — see `booking-app/HANDOVER.md` §1 for the full reasoning.
