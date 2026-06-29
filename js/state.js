// ── Storage key ──────────────────────────────────────────────────────────────
const STORAGE_KEY = 'pmaiguide_v2';

function defaultState() {
  return { completed: {}, notes: {}, startDate: new Date().toISOString().split('T')[0], ghToken: '', ghRepo: '', ghBranch: 'main' };
}

function loadState() {
  try { const r = localStorage.getItem(STORAGE_KEY); return r ? { ...defaultState(), ...JSON.parse(r) } : defaultState(); }
  catch { return defaultState(); }
}
function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(STATE)); } catch {}
}

let STATE = loadState();

// ── Task helpers ─────────────────────────────────────────────────────────────
function tk(day, sess, idx) { return `d${day}_${sess}_${idx}`; }
function isTaskDone(day, sess, idx) { return !!STATE.completed[tk(day, sess, idx)]; }
function toggleTask(day, sess, idx) { STATE.completed[tk(day, sess, idx)] = !STATE.completed[tk(day, sess, idx)]; saveState(); }

function getDayProg(d) {
  let done = 0, total = 0;
  (d.morning || []).forEach((_,i) => { total++; if (isTaskDone(d.day,'m',i)) done++; });
  (d.evening || []).forEach((_,i) => { total++; if (isTaskDone(d.day,'e',i)) done++; });
  return { done, total };
}
function isDayDone(d) { const p = getDayProg(d); return p.total > 0 && p.done === p.total; }

function getOverall() {
  let done = 0, total = 0;
  PLAN.forEach(d => { const p = getDayProg(d); done += p.done; total += p.total; });
  return { done, total, pct: total ? Math.round(done/total*100) : 0 };
}

function getStreak() {
  let s = 0;
  for (let i = PLAN.length - 1; i >= 0; i--) { if (isDayDone(PLAN[i])) s++; else break; }
  return s;
}

function getCurrentDay() {
  for (const d of PLAN) { if (!isDayDone(d)) return d.day; }
  return PLAN[PLAN.length - 1].day;
}

function getNote(day) { return STATE.notes[`n${day}`] || ''; }
function saveNote(day, txt) { STATE.notes[`n${day}`] = txt; saveState(); }

// ── Settings ─────────────────────────────────────────────────────────────────
function getGHCreds() { return { token: STATE.ghToken, repo: STATE.ghRepo, branch: STATE.ghBranch || 'main' }; }
function setGHCreds(token, repo, branch) { STATE.ghToken = token; STATE.ghRepo = repo; STATE.ghBranch = branch || 'main'; saveState(); }
function setStartDate(d) { STATE.startDate = d; saveState(); }

// ── Export ───────────────────────────────────────────────────────────────────
function exportProgress() {
  return { completed: STATE.completed, notes: STATE.notes, startDate: STATE.startDate, exportedAt: new Date().toISOString() };
}
function importProgress(obj) {
  if (obj.completed) STATE.completed = obj.completed;
  if (obj.notes) STATE.notes = obj.notes;
  if (obj.startDate) STATE.startDate = obj.startDate;
  saveState();
}
