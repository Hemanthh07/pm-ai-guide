# PM + AI Guide 🚀

Your personal 90-day PM + AI readiness companion — installable as a PWA on iPad.

## Quick deploy (GitHub Pages)

```bash
# 1. Unzip and go into the folder
cd pm-ai-guide

# 2. Init git and push
git init
git add .
git commit -m "Initial: PM+AI Guide PWA"
git remote add origin https://github.com/YOUR_USERNAME/pm-ai-guide.git
git branch -M main
git push -u origin main
```

Then: **GitHub repo → Settings → Pages → Branch: main → Save**

Your app lives at: `https://YOUR_USERNAME.github.io/pm-ai-guide/`

---

## Install on iPad

1. Open the URL above in **Safari**
2. Tap Share (□↑) → **Add to Home Screen** → Add
3. Opens full-screen, works offline ✓

---

## GitHub Sync (built into the app)

The app has a built-in GitHub sync feature (Settings ⚙ tab):

- **Push progress** — saves your `completed` tasks and notes as `progress.json` in your repo
- **Pull updates** — loads `progress.json` from the repo (sync across devices)

To set it up:
1. Go to github.com → Settings → Developer settings → Personal access tokens → Fine-grained tokens
2. Create a token with **Contents: Read & Write** on your repo
3. Paste it into the app's Settings → GitHub Sync section

---

## Extend the plan (add days 71–90)

Edit `js/plan.js` — add objects to the `PLAN` array:

```js
{ day: 71, week: 11, title: "Your day title", morning: [
    { type: "pm", title: "Task title", desc: "What to do", link: "https://..." }
  ], evening: [
    { type: "ai", title: "Build task title", desc: "What to build" }
  ]
}
```

Types: `"pm"` (purple), `"ai"` (green), `"port"` (orange/portfolio)  
Omit `link` for build tasks — no resource button will show.

After editing, push to GitHub — the app auto-updates on next load.

---

## File structure

```
pm-ai-guide/
├── index.html        App shell + all panels
├── manifest.json     PWA install config  
├── sw.js             Offline service worker
├── css/app.css       All styles
├── js/
│   ├── plan.js       All task data (edit to add/change days)
│   ├── state.js      localStorage persistence
│   ├── github.js     GitHub API sync
│   └── app.js        Rendering + interactions
└── icons/
    ├── icon-192.png
    └── icon-512.png
```
