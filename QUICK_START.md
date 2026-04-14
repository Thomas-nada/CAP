# Quick Start — CAP Portal

## Access the portal

**https://cap-portal.onrender.com**

Anyone can browse proposals, view the constitution, and read guides — no account needed.

---

## Submit a proposal

1. Click **Login** in the nav bar
2. Authorise the app on GitHub (you'll be redirected back automatically)
3. Click **New CAP** in the nav to start the wizard
4. Complete the steps and submit — your proposal is created as a GitHub Issue in `Thomas-nada/cap`

---

## Editor access

Editors see additional controls on each proposal's detail page:

- **Lifecycle stage** — move the proposal through the 10-stage process
- **Editor signals** — ok / concern / suggested
- **Special handling** — bundle, minor, major, pause, fast-track

To become an editor, your GitHub username must be added to `editors.json` in the repo root.

---

## Run locally

```bash
python dev-server.py
# Open: http://localhost:8765
```

Must be served over HTTP — opening `index.html` directly via `file://` will not work (ES6 modules).

---

## Common issues

| Problem | Fix |
|---------|-----|
| Login spins for 20–30s | Auth server is cold-starting — just wait |
| Not appearing as editor | Check `editors.json` in the repo, then log out and back in |
| Proposals not loading | GitHub API unauthenticated rate limit (60/hr) — log in to raise the limit |
| Blank page | Open browser console (F12) and check for errors; hard-reload with Ctrl+Shift+R |

Full docs: see `README.md`
