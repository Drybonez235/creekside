# Creekside Booking Scheduler — moved

The booking feature and its handover doc now live in `booking-app/` — see
[`booking-app/HANDOVER.md`](booking-app/HANDOVER.md).

This repo (`creekside-site/`) is the marketing site only: fully static, no adapter, built and
deployed by Jonathan exactly as it always was. The booking feature was pulled out into its
own standalone project (`booking-app/`) on 2026-08-05 because its routes need on-demand
server rendering, which is fundamentally incompatible with the marketing site's pure-static
build — see `booking-app/HANDOVER.md` §3 for the full reasoning.
