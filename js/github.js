// ── GitHub API helpers ───────────────────────────────────────────────────────
// Pushes progress.json to your repo and can pull plan.js updates.

const GH_API = 'https://api.github.com';

function ghHeaders(token) {
  return { 'Authorization': `Bearer ${token}`, 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json' };
}

// Get file SHA (needed for updates)
async function ghGetFileSHA(token, repo, branch, path) {
  const r = await fetch(`${GH_API}/repos/${repo}/contents/${path}?ref=${branch}`, { headers: ghHeaders(token) });
  if (r.status === 404) return null;
  if (!r.ok) throw new Error(`GitHub ${r.status}: ${r.statusText}`);
  const d = await r.json();
  return d.sha || null;
}

// Push progress.json to repo
async function ghPushProgress(token, repo, branch) {
  const path = 'progress.json';
  const content = btoa(unescape(encodeURIComponent(JSON.stringify(exportProgress(), null, 2))));
  const sha = await ghGetFileSHA(token, repo, branch, path);
  const body = { message: `Progress sync ${new Date().toISOString().slice(0,10)}`, content, branch };
  if (sha) body.sha = sha;
  const r = await fetch(`${GH_API}/repos/${repo}/contents/${path}`, { method: 'PUT', headers: ghHeaders(token), body: JSON.stringify(body) });
  if (!r.ok) { const e = await r.json(); throw new Error(e.message || `GitHub ${r.status}`); }
  return await r.json();
}

// Pull progress.json from repo and merge into local state
async function ghPullProgress(token, repo, branch) {
  const path = 'progress.json';
  const r = await fetch(`${GH_API}/repos/${repo}/contents/${path}?ref=${branch}`, { headers: ghHeaders(token) });
  if (r.status === 404) throw new Error('progress.json not found in repo. Push first to create it.');
  if (!r.ok) throw new Error(`GitHub ${r.status}: ${r.statusText}`);
  const d = await r.json();
  const text = decodeURIComponent(escape(atob(d.content.replace(/\n/g,''))));
  const obj = JSON.parse(text);
  importProgress(obj);
  return obj;
}

// Push plan.js to repo (lets you update the plan from Claude and sync it)
async function ghPushPlan(token, repo, branch) {
  const path = 'js/plan.js';
  // Read current plan.js content from the page's own script tag
  const planSrc = document.querySelector('script[src="js/plan.js"]');
  let planText = '';
  try {
    const r = await fetch('./js/plan.js');
    planText = await r.text();
  } catch { throw new Error('Could not read local plan.js'); }
  const content = btoa(unescape(encodeURIComponent(planText)));
  const sha = await ghGetFileSHA(token, repo, branch, path);
  const body = { message: `Update plan.js ${new Date().toISOString().slice(0,10)}`, content, branch };
  if (sha) body.sha = sha;
  const r = await fetch(`${GH_API}/repos/${repo}/contents/${path}`, { method: 'PUT', headers: ghHeaders(token), body: JSON.stringify(body) });
  if (!r.ok) { const e = await r.json(); throw new Error(e.message || `GitHub ${r.status}`); }
}

// ── UI wiring ────────────────────────────────────────────────────────────────
function ghFieldChange() {
  const token  = document.getElementById('gh-token').value.trim();
  const repo   = document.getElementById('gh-repo').value.trim();
  const branch = document.getElementById('gh-branch').value.trim() || 'main';
  const valid  = token.length > 0 && repo.includes('/');
  document.getElementById('btn-push').disabled = !valid;
  document.getElementById('btn-pull').disabled = !valid;
  if (valid) setGHCreds(token, repo, branch);
}

function setSyncStatus(msg, cls) {
  const el = document.getElementById('sync-status');
  el.textContent = msg; el.className = 'sync-status ' + (cls || '');
}

async function ghPush() {
  const { token, repo, branch } = getGHCreds();
  const btn = document.getElementById('btn-push');
  btn.disabled = true; btn.textContent = '⏳ Pushing…';
  setSyncStatus('Connecting to GitHub…');
  try {
    await ghPushProgress(token, repo, branch);
    setSyncStatus('✓ Progress pushed to ' + repo + ' (' + branch + ')', 'ok');
    showToast('Pushed to GitHub ✓');
  } catch(e) {
    setSyncStatus('✗ ' + e.message, 'err');
    showToast('Push failed — check settings');
  } finally {
    btn.disabled = false; btn.textContent = '⬆ Push progress';
  }
}

async function ghPull() {
  const { token, repo, branch } = getGHCreds();
  const btn = document.getElementById('btn-pull');
  btn.disabled = true; btn.textContent = '⏳ Pulling…';
  setSyncStatus('Fetching from GitHub…');
  try {
    await ghPullProgress(token, repo, branch);
    setSyncStatus('✓ Progress pulled from ' + repo, 'ok');
    showToast('Pulled from GitHub ✓');
    render();
  } catch(e) {
    setSyncStatus('✗ ' + e.message, 'err');
    showToast('Pull failed — check settings');
  } finally {
    btn.disabled = false; btn.textContent = '⬇ Pull updates';
  }
}

// Pre-fill saved creds on settings open
function prefillGHSettings() {
  const { token, repo, branch } = getGHCreds();
  document.getElementById('gh-token').value  = token  || '';
  document.getElementById('gh-repo').value   = repo   || '';
  document.getElementById('gh-branch').value = branch || 'main';
  const valid = token.length > 0 && repo.includes('/');
  document.getElementById('btn-push').disabled = !valid;
  document.getElementById('btn-pull').disabled = !valid;
  setSyncStatus('');
}
