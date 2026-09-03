# Form Archives

Snapshots of retired landing-page form versions so they can be relaunched later
without digging through git history. Files here are NOT served (this folder is
outside `public/`).

## Convention

- One subfolder per form location (e.g. `dental-start/` = `public/dental/start/index.html`).
- Whenever a live form is replaced, snapshot the OUTGOING version here first:
  `YYYY-MM-DD_<steps>-<questions>-<descriptor>.html` (date = date it was retired).
- To relaunch an archived version, copy it back over the live `index.html`,
  re-check the tracking event names and payload keys against the current
  `booking-app/src/pages/api/csb/ghl-lead.ts`, and push.

## The bolt-on architecture

Every form is one self-contained HTML file with two parts:

1. **Swappable question steps** -- `<div class="step" data-step="N">` blocks with
   `option-btn` buttons (`data-field` / `data-value`). Add/remove/reword freely.
   Keep `totalSteps` in the JS and the `step-dot` count in sync with the number
   of steps (contact step included). First step gets `class="step active"` and
   no back button.
2. **The fixed system (do not change)** -- the contact step (name, phone, email,
   website + honeypot), `handleSubmit()`, the payload keys posted to
   `/api/csb/ghl-lead/`, the `sessionStorage.dental_lead` handoff, and the
   redirect to the booking page. Unanswered fields send `''` -- the endpoint
   tolerates that, so any question subset works against the same backend.

Per-variant knobs:
- **Tracking prefix**: each form uses its own event prefix (`Dental_Start_*`,
  `Dental_Expert_*`, ...) so GA4/Meta funnels never blend. Events fire
  dynamically in `showStep(n)`; no GTM changes needed for step-count changes.
- **`variant` payload key**: adds an extra GHL tag (e.g. `variant: 'expert'` ->
  tag `dental-expert-form`) on top of the base `dental-funnel` tags that drive
  the GHL workflow. Add new variants in `ghl-lead.ts`.

## Archived versions

### dental-start/
| File | Retired | Description |
|------|---------|-------------|
| `2026-09-03_7step-6q-original.html` | 2026-09-03 | Original 6-question form (practice type w/ "Other" input, services, revenue, challenge, decision maker, running ads). Dots above card. |
| `2026-09-03_5step-4q-challenge-first.html` | 2026-09-03 | Interim same-day version: challenge first, 4 questions, dots below card. Live only part of the day. |
| `2026-09-03_6step-5q-andrew-street.html` | (live) | Andrew Street order: own practice Y/N, revenue, challenge, decision maker, CRM Y/N. Snapshot of the currently live version. |
