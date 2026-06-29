// ── Active week ──────────────────────────────────────────────────────────────
let activeWeek = 1;
let activeTab  = 'plan';

// ── Toast ─────────────────────────────────────────────────────────────────────
let _toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

// ── Panels ────────────────────────────────────────────────────────────────────
function openPanel(id) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('open'));
  document.getElementById(id).classList.add('open');
  document.getElementById('overlay').classList.add('show');
}
function closePanel(id) {
  document.getElementById(id).classList.remove('open');
  document.getElementById('overlay').classList.remove('show');
  // reset tab highlight
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-plan').classList.add('active');
  activeTab = 'plan';
}
function closeAllPanels() {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('open'));
  document.getElementById('overlay').classList.remove('show');
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-plan').classList.add('active');
  activeTab = 'plan';
}

function openSettings() {
  prefillGHSettings();
  document.getElementById('start-date-input').value = STATE.startDate || '';
  openPanel('panel-settings');
}

// ── Tabs ──────────────────────────────────────────────────────────────────────
function switchTab(tab) {
  activeTab = tab;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  if (tab === 'plan') { closeAllPanels(); return; }
  if (tab === 'stats') { renderStats(); openPanel('panel-stats'); }
  if (tab === 'notes') { renderNotesList(); openPanel('panel-notes'); }
}

// ── Settings actions ──────────────────────────────────────────────────────────
function updateStartDate(val) { setStartDate(val); }

function exportData() {
  const blob = new Blob([JSON.stringify(exportProgress(), null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'pm-ai-progress.json';
  a.click();
  showToast('Exported ✓');
}

function confirmReset() {
  if (confirm('Reset ALL progress? This cannot be undone.')) {
    STATE.completed = {}; STATE.notes = {};
    saveState(); render();
    showToast('Progress reset');
    closeAllPanels();
  }
}

// ── Stats ─────────────────────────────────────────────────────────────────────
function renderStats() {
  const overall = getOverall();
  const streak  = getStreak();
  const done    = PLAN.filter(d => isDayDone(d)).length;
  const weeks   = [...new Set(PLAN.map(d => d.week))];

  const phaseLabel = w => w <= 4 ? 'M1' : w <= 8 ? 'M2' : 'M3';

  let html = `
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-val">${overall.pct}%</div><div class="stat-lbl">Complete</div></div>
      <div class="stat-card"><div class="stat-val">${streak}</div><div class="stat-lbl">Day streak</div></div>
      <div class="stat-card"><div class="stat-val">${done}</div><div class="stat-lbl">Days done</div></div>
      <div class="stat-card"><div class="stat-val">${overall.done}</div><div class="stat-lbl">Tasks done</div></div>
    </div>
    <div class="section-title-sm">By week</div>
    <div class="week-progress-list">`;

  weeks.forEach(w => {
    const wDays = PLAN.filter(d => d.week === w);
    let wDone = 0, wTotal = 0;
    wDays.forEach(d => { const p = getDayProg(d); wDone += p.done; wTotal += p.total; });
    const pct = wTotal ? Math.round(wDone/wTotal*100) : 0;
    const col = pct === 100 ? 'var(--ai)' : pct > 0 ? 'var(--pm)' : 'var(--border2)';
    html += `
      <div class="week-row-stat">
        <div class="week-row-top">
          <div class="week-row-label">${phaseLabel(w)} · Week ${w}</div>
          <div class="week-row-pct">${pct}%</div>
        </div>
        <div class="week-track"><div class="week-fill" style="width:${pct}%;background:${col}"></div></div>
      </div>`;
  });

  html += `</div>`;
  document.getElementById('stats-body').innerHTML = html;
}

// ── Notes list ────────────────────────────────────────────────────────────────
function renderNotesList() {
  const entries = PLAN.filter(d => getNote(d.day).trim());
  if (!entries.length) {
    document.getElementById('notes-body').innerHTML = '<div class="no-notes">No notes yet — open a day and jot something down.</div>';
    return;
  }
  document.getElementById('notes-body').innerHTML = entries.map(d => `
    <div class="note-entry">
      <div class="note-day-label">Day ${d.day} · Week ${d.week}</div>
      <div class="note-day-title">${d.title}</div>
      <div class="note-day-text">${escHtml(getNote(d.day))}</div>
    </div>`).join('');
}

function escHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ── Main render ───────────────────────────────────────────────────────────────
function render() {
  renderHeader();
  renderWeekStrip();
  renderBanner();
  renderDays();
}

function renderHeader() {
  const o = getOverall();
  document.getElementById('progress-bar').style.width = o.pct + '%';
  document.getElementById('progress-meta').textContent = `${o.done} / ${o.total} tasks complete`;
  document.getElementById('streak-pill').textContent = '🔥 ' + getStreak();
}

function renderWeekStrip() {
  const weeks = [...new Set(PLAN.map(d => d.week))];
  const strip = document.getElementById('week-strip');
  strip.innerHTML = '';
  weeks.forEach(w => {
    const phase = w <= 4 ? 'M1' : w <= 8 ? 'M2' : 'M3';
    const allDone = PLAN.filter(d => d.week === w).every(d => isDayDone(d));
    const btn = document.createElement('button');
    btn.className = 'week-btn' + (w === activeWeek ? ' active' : '') + (allDone && w !== activeWeek ? ' done' : '');
    btn.textContent = `${phase} · Wk ${w}`;
    btn.onclick = () => { activeWeek = w; render(); };
    strip.appendChild(btn);
  });
}

function renderBanner() {
  const curDay = getCurrentDay();
  const d = PLAN.find(p => p.day === curDay);
  const el = document.getElementById('today-banner');
  if (!d) { el.innerHTML = ''; return; }
  const phase = d.week <= 4 ? 'Month 1 — Foundations' : d.week <= 8 ? 'Month 2 — Depth' : 'Month 3 — Activate';
  el.innerHTML = `
    <div class="today-banner">
      <div class="banner-pulse"></div>
      <div class="banner-copy">
        <div class="banner-title">Today · Day ${d.day}: ${d.title}</div>
        <div class="banner-sub">${phase} · Week ${d.week}</div>
      </div>
      <button class="banner-go" onclick="jumpToday()">Go →</button>
    </div>`;
}

function jumpToday() {
  const curDay = getCurrentDay();
  const d = PLAN.find(p => p.day === curDay);
  if (!d) return;
  activeWeek = d.week;
  render();
  setTimeout(() => {
    const el = document.getElementById('day-' + curDay);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 60);
}

const PHASE_LABELS = {
  1:'Month 1 — Foundations', 2:'Month 1 — Foundations',
  3:'Month 1 — Foundations', 4:'Month 1 — Foundations',
  5:'Month 2 — Depth',       6:'Month 2 — Depth',
  7:'Month 2 — Depth',       8:'Month 2 — Depth',
  9:'Month 3 — Activate',   10:'Month 3 — Activate'
};

function renderDays() {
  const curDay = getCurrentDay();
  const weekDays = PLAN.filter(d => d.week === activeWeek);
  const container = document.getElementById('day-list');
  container.innerHTML = `
    <div class="phase-divider">
      <div class="phase-line"></div>
      <div class="phase-text">${PHASE_LABELS[activeWeek] || ''} · Week ${activeWeek}</div>
      <div class="phase-line"></div>
    </div>`;

  weekDays.forEach(dayData => {
    const prog    = getDayProg(dayData);
    const allDone = isDayDone(dayData);
    const isToday = dayData.day === curDay;

    const card = document.createElement('div');
    card.className = 'day-card' + (isToday ? ' today' : '') + (allDone ? ' done' : '') + (isToday ? ' open' : '');
    card.id = 'day-' + dayData.day;

    card.innerHTML = `
      <div class="day-header" onclick="toggleDay(${dayData.day})">
        <div class="day-num">${allDone ? '✓' : dayData.day}</div>
        <div class="day-meta-col">
          <div class="day-title">${isToday ? '● ' : ''}${dayData.title}</div>
          <div class="day-sub">${prog.done}/${prog.total} tasks${isToday ? ' · Today' : ''}</div>
        </div>
        <span class="day-pct">${prog.done > 0 ? Math.round(prog.done/prog.total*100)+'%' : ''}</span>
        <span class="day-chev">⌄</span>
      </div>
      <div class="day-body">
        ${buildSession(dayData, 'morning', 'm', '🌅 Morning — Core PM skill', 'var(--pm)')}
        ${buildSession(dayData, 'evening', 'e', '🌙 Evening — AI skill', 'var(--ai)')}
        <div class="note-area">
          <div class="note-label">📝 Notes</div>
          <textarea class="note-input" placeholder="What did you learn? What was hard? What to revisit…"
            oninput="saveNote(${dayData.day}, this.value)">${escHtml(getNote(dayData.day))}</textarea>
        </div>
      </div>`;

    container.appendChild(card);
  });
}

function buildSession(dayData, key, sessId, label, dotColor) {
  const tasks = dayData[key];
  if (!tasks || !tasks.length) return '';
  const rows = tasks.map((t, idx) => {
    const done = isTaskDone(dayData.day, sessId, idx);
    const cls  = done ? 'done' : (t.type || 'pm');
    const link = t.link && !done
      ? `<a class="task-link" href="${t.link}" target="_blank" rel="noopener" onclick="event.stopPropagation()">Open resource ↗</a>`
      : '';
    return `
      <div class="task ${cls}" onclick="handleTaskClick(${dayData.day},'${sessId}',${idx},this)">
        <div class="task-cb">${done ? '✓' : ''}</div>
        <div class="task-body">
          <div class="task-title">${t.title}</div>
          <div class="task-desc">${t.desc}</div>
          ${link}
        </div>
      </div>`;
  }).join('');
  return `
    <div class="session-head">
      <div class="session-dot" style="background:${dotColor}"></div>${label}
    </div>${rows}`;
}

// ── Interactions ──────────────────────────────────────────────────────────────
function toggleDay(day) {
  const card = document.getElementById('day-' + day);
  if (card) card.classList.toggle('open');
}

function handleTaskClick(day, sess, idx, el) {
  toggleTask(day, sess, idx);
  // Optimistic UI update without full re-render
  const task = el;
  const done = isTaskDone(day, sess, idx);
  const typeCls = task.dataset.type || 'pm';
  task.className = 'task ' + (done ? 'done' : typeCls);
  task.querySelector('.task-cb').textContent = done ? '✓' : '';
  const titleEl = task.querySelector('.task-title');
  const linkEl  = task.querySelector('.task-link');
  if (done) {
    if (linkEl) linkEl.style.display = 'none';
    showToast('Done ✓');
  } else {
    if (linkEl) linkEl.style.display = '';
  }
  // Update header + day meta lazily
  renderHeader();
  const card = document.getElementById('day-' + day);
  if (card) {
    const p = getDayProg(PLAN.find(d => d.day === day));
    const subEl = card.querySelector('.day-sub');
    if (subEl) subEl.textContent = `${p.done}/${p.total} tasks` + (card.classList.contains('today') ? ' · Today' : '');
    const pctEl = card.querySelector('.day-pct');
    if (pctEl) pctEl.textContent = p.done > 0 ? Math.round(p.done/p.total*100)+'%' : '';
    if (isDayDone(PLAN.find(d => d.day === day))) {
      card.classList.add('done');
      card.querySelector('.day-num').textContent = '✓';
    } else {
      card.classList.remove('done');
    }
  }
}

// ── Service worker ────────────────────────────────────────────────────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}

// ── Init ──────────────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  const curDay = getCurrentDay();
  const d = PLAN.find(p => p.day === curDay);
  activeWeek = d ? d.week : 1;
  render();
});
