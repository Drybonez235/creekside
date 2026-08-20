# Deploying the Creekside booking app — for Jonathan

This is a small, separate Node.js app (Astro, `@astrojs/node` adapter) that runs alongside
the main site on the same box. It only serves a handful of routes — `/book`, `/admin`, and
`/api/csb/*` — everything else on creeksidemarketingpros.com stays exactly as it is today:
you keep building the main site locally and serving `dist/` via Apache, completely
unchanged. Apache just needs a few new lines to forward those specific paths to this app
over localhost.

It's low-traffic by nature (one request cycle per person booking a consultation, not real
site traffic) — nothing like serving the main site.

---

## 1. What you need on the box

- Node.js 20 or 22 (22 is what this was built/tested against; anything 20+ should work)
- `git` (you already have this)
- A way to keep a process running persistently — this doc uses **systemd**, since it's
  already on Ubuntu and needs nothing extra installed. If you'd rather use `pm2` or
  something else you already run other apps with, that works too — just adapt step 4.

## 2. Get the code

```bash
git clone https://github.com/Drybonez235/creekside.git
cd creekside/booking-app
npm ci
```

(If you already have the main repo cloned somewhere, just `cd` into `booking-app/` inside
it — this app lives in the same repo as the marketing site, in its own directory, with its
own `package.json`. It's built and deployed completely independently from the main site.)

## 3. Configure environment variables

```bash
cp .env.example .env
```

Edit `.env` and fill in the real values. **Jordan will send you the actual secret values
through a separate secure channel — this file should never be committed to git or pasted in
plain email/chat, which is also why it's already gitignored.** The one you'll need to set
yourself, specific to this deployment:

```
CSB_BASE_URL=https://creeksidemarketingpros.com
```

That's the real public domain, not `localhost`. Apache proxies transparently, so the app
never sees its own internal port from the outside.

### Google credentials (keyless — nothing secret goes on the box)

There is **no service-account key file**. Google's org policy blocks creating them, and the
keyless setup is the better design anyway: nothing long-lived sits on this machine, so
nothing can leak from it. Instead the box proves its identity using its own AWS IAM role,
and Google signs everything server-side.

This needs one thing from you on the AWS side, and one file.

**1. The EC2 instance needs an IAM role attached.** If it already has an instance profile,
tell Jordan its full role ARN. If it has none, create an empty role (no AWS permissions
required — it is used purely as an identity) and attach it. Nothing about this role grants
access to anything in AWS.

**2. Jordan sends you a credential config file.** Put it on the box:

```bash
sudo mkdir -p /etc/creekside
sudo mv wif-credentials.json /etc/creekside/wif-credentials.json
sudo chown creekside:creekside /etc/creekside/wif-credentials.json
sudo chmod 644 /etc/creekside/wif-credentials.json
```

Then in `.env`:

```
GOOGLE_APPLICATION_CREDENTIALS=/etc/creekside/wif-credentials.json
CSB_SA_EMAIL=creekside-booking@<project-id>.iam.gserviceaccount.com
CSB_SA_CLIENT_ID=<numeric unique id>
CSB_WORKSPACE_DOMAIN=creeksidemarketingpros.com
```

Unlike the old setup, `wif-credentials.json` is **not a secret**. It holds no key material,
only pointers to the identity pool and the AWS metadata endpoint — useless to anyone who is
not running on this instance. It can be sent over normal channels and does not need `600`.

## 4. Build and run it

```bash
npm run build
```

This produces `dist/`. To run it directly (for a first smoke test before wiring up
persistence):

```bash
PORT=4000 HOST=127.0.0.1 node ./dist/server/entry.mjs
```

Pick any free internal port — 4000 is just a suggestion. **Bind to `127.0.0.1`, not
`0.0.0.0`** — this should never be reachable directly from outside the box, only through
Apache's proxy.

Once that's confirmed working (see §6), stop it (Ctrl+C) and set it up as a systemd service
so it survives reboots and restarts on crash:

```ini
# /etc/systemd/system/creekside-booking.service
[Unit]
Description=Creekside booking app
After=network.target

[Service]
Type=simple
User=<a low-privilege user, not root>
WorkingDirectory=/path/to/creekside/booking-app
Environment=PORT=4000
Environment=HOST=127.0.0.1
ExecStart=/usr/bin/node ./dist/server/entry.mjs
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now creekside-booking
sudo systemctl status creekside-booking   # confirm it's running
journalctl -u creekside-booking -f        # tail logs
```

## 5. Apache config

Add to the existing vhost for creeksidemarketingpros.com (adjust the port to whatever you
picked in step 4):

```apache
ProxyPreserveHost On
ProxyPass        /book              http://127.0.0.1:4000/book
ProxyPassReverse /book              http://127.0.0.1:4000/book
ProxyPass        /admin             http://127.0.0.1:4000/admin
ProxyPassReverse /admin             http://127.0.0.1:4000/admin
ProxyPass        /api/csb           http://127.0.0.1:4000/api/csb
ProxyPassReverse /api/csb           http://127.0.0.1:4000/api/csb
```

If `mod_proxy` and `mod_proxy_http` aren't already enabled:

```bash
sudo a2enmod proxy proxy_http
sudo systemctl restart apache2
```

`ProxyPreserveHost On` matters — it's what lets the app see `creeksidemarketingpros.com` as
the host it's being reached at (matching `CSB_BASE_URL`), even though it's actually being
hit on `127.0.0.1` internally.

## 6. Verify it's working

Once the systemd service is running and Apache's reloaded:

- `https://creeksidemarketingpros.com/book/` should load the booking widget, styled like the
  rest of the site.
- `https://creeksidemarketingpros.com/admin/booking/` should prompt for HTTP Basic Auth
  (401 without credentials) — that's expected, not a bug.
- Check `journalctl -u creekside-booking` for errors if anything 500s.

Jordan will do a full pass afterward (a real test booking, Google Calendar event, admin CSV
export) once it's live, matching what's already been tested locally against the exact same
code.

## 7. One more thing before this is really "done"

The service account has to be authorized in the Google Workspace Admin console before any
booking can work. This is the one step Jordan cannot do without Workspace super-admin
access, so it needs Peterson or whoever holds that role:

1. Admin console -> Security -> Access and data control -> API controls
2. "Manage Domain Wide Delegation" -> Add new
3. Client ID: the service account's numeric Unique ID (shown on `/admin/booking` once
   `CSB_SA_CLIENT_ID` is set, or on the service account's details page in Google Cloud)
4. OAuth scopes, comma-separated, exactly these two:
   `https://www.googleapis.com/auth/calendar.events,https://www.googleapis.com/auth/calendar.freebusy`
5. Authorize

The scope list must match the app's `SA_SCOPES` exactly. Any mismatch fails every token
request with `unauthorized_client`, which names nothing useful on its own — the admin page's
"Test connection" translates it.

Note what this step is NOT: there is no OAuth consent screen, no app publication, and no
Google verification review. Authority comes from the domain admin, not from each provider
clicking "Allow", which is why the old seven-day token expiry is gone too.

---

Questions or something doesn't match what you're seeing — flag it back to Jordan rather than
guessing, especially anything to do with the systemd unit or Apache config, since exact paths
and permissions will differ from what's written here.
