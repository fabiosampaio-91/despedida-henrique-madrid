/* ============================================================
   DESPEDIDA HENRIQUE ELVAS · MADRID — interactions
   ============================================================ */
(function () {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---- link buttons ---- */
  const linkBtns = ({ web, maps, ig }) => {
    let h = '<div class="links">';
    if (web) h += `<a class="lk lk--web" target="_blank" rel="noopener" href="${web}">🌐 Official</a>`;
    if (maps) h += `<a class="lk lk--map" target="_blank" rel="noopener" href="${maps}">📍 Map</a>`;
    if (ig) h += `<a class="lk lk--ig" target="_blank" rel="noopener" href="${ig}">📸 Instagram</a>`;
    return h + "</div>";
  };
  const prosCons = (pros = [], cons = []) =>
    pros.map((p) => `<div class="li pro"><span>${p}</span></div>`).join("") +
    cons.map((c) => `<div class="li con"><span>${c}</span></div>`).join("");

  /* ---- card renderers ---- */
  const renderers = {
    rooftops: (d) => `<article class="card reveal">
      <span class="card__tag">${d.tag}</span>
      <div><div class="card__name">${d.name}</div><div class="card__area">${d.area}</div></div>
      <p class="card__blurb">${d.blurb}</p>
      <div>${prosCons(d.pros, d.cons)}</div>
      <div class="card__meta">🕐 <b>Hours:</b> ${d.hours}<br>📝 <b>Booking:</b> ${d.reservations}</div>
      ${linkBtns(d)}</article>`,

    zones: (d) => `<article class="card zone reveal">
      <span class="vibe">${d.vibe}</span>
      <div class="card__name">${d.name}</div>
      <p class="card__blurb">${d.desc}</p>
      <div class="zone__bars">${d.bars.map((b) => `
        <div class="zbar"><div class="zbar__name">${b.name}</div>
        <div class="zbar__note">${b.note}</div>
        <div class="zbar__links">${b.web ? `<a class="lk lk--web" target="_blank" rel="noopener" href="${b.web}">🌐</a>` : ""}${b.ig ? `<a class="lk lk--ig" target="_blank" rel="noopener" href="${b.ig}">📸</a>` : ""}</div></div>`).join("")}
      </div></article>`,

    specialBars: (d) => `<article class="card reveal">
      <div><div class="card__name">${d.name}</div><div class="card__area">${d.area}</div></div>
      <p class="card__blurb">${d.blurb}</p>
      <div class="card__meta">ℹ️ ${d.note}</div>
      ${linkBtns(d)}</article>`,

    dinnerClubs: (d) => `<article class="card reveal">
      <span class="card__tag">${d.tag}</span>
      <div><div class="card__name">${d.name}</div><div class="card__area">${d.area}</div></div>
      <p class="card__blurb">${d.blurb}</p>
      <div>${prosCons(d.pros, d.cons)}</div>
      <div class="card__meta">🎶 <b>Party:</b> ${d.music}<br>📝 <b>Booking:</b> ${d.reservations}</div>
      ${linkBtns(d)}</article>`,

    clubs: (d) => `<article class="card reveal" data-cat="${d.cat}">
      <span class="card__tag">${d.tag}</span>
      <div><div class="card__name">${d.name}</div><div class="card__area">${d.area}</div></div>
      <p class="card__blurb">${d.blurb}</p>
      <div>${prosCons(d.pros, d.cons)}</div>
      <div class="card__meta">🎟️ ${d.meta}</div>
      ${linkBtns(d)}</article>`,

    luggage: (d) => `<article class="mini reveal">
      <span class="mini__tag">${d.tag}</span>
      <div class="mini__name">${d.name}</div>
      <p class="mini__blurb">${d.blurb}</p>
      <div class="card__meta">💶 <b>${d.price}</b></div>
      ${linkBtns(d)}</article>`,

    brunch: (d) => `<article class="mini reveal">
      <span class="mini__tag">${d.tag}</span>
      <div class="mini__name">${d.name}</div><div class="mini__area">${d.area}</div>
      <p class="mini__blurb">${d.blurb}</p>
      ${linkBtns(d)}</article>`,

    lunch: (d) => `<article class="mini reveal">
      <div class="mini__name">${d.name}</div><div class="mini__area">${d.area}</div>
      <p class="mini__blurb">${d.blurb}</p>
      ${linkBtns(d)}</article>`,
  };

  /* ---- mount all data-render lists ---- */
  $$("[data-render]").forEach((el) => {
    const key = el.getAttribute("data-render");
    if (key === "activities") return; // handled by voting
    const list = DATA[key];
    const fn = renderers[key];
    if (list && fn) el.innerHTML = list.map(fn).join("");
  });

  /* ============================================================
     VOTING  (localStorage-based — per device; share in the chat)
     ============================================================ */
  const VKEY = "despedida_votes_v1";   // tallies
  const MKEY = "despedida_myvote_v1";  // this device's choice
  const acts = DATA.activities;

  const loadVotes = () => {
    let v;
    try { v = JSON.parse(localStorage.getItem(VKEY)); } catch (e) { v = null; }
    if (!v) v = {};
    acts.forEach((a) => { if (typeof v[a.id] !== "number") v[a.id] = 0; });
    return v;
  };
  const saveVotes = (v) => { try { localStorage.setItem(VKEY, JSON.stringify(v)); } catch (e) {} };
  const myVote = () => { try { return localStorage.getItem(MKEY); } catch (e) { return null; } };

  const voteBox = $("#voteBox");

  function renderVote() {
    const votes = loadVotes();
    const mine = myVote();
    const total = acts.reduce((s, a) => s + votes[a.id], 0);
    voteBox.innerHTML = acts.map((a) => {
      const n = votes[a.id];
      const pct = total ? Math.round((n / total) * 100) : 0;
      const isMine = mine === a.id;
      return `<div class="vopt ${isMine ? "is-mine" : ""}" data-id="${a.id}">
        <div class="vopt__emoji">${a.emoji}</div>
        <span class="vopt__tag">${a.tag}</span>
        <div class="vopt__name">${a.name}</div>
        <p class="vopt__blurb">${a.blurb}</p>
        <div class="vopt__pc">${prosCons(a.pros, a.cons)}</div>
        <div class="vopt__meta">${a.meta}</div>
        <div class="vopt__links">${linkBtns(a).replace('<div class="links">', "").replace("</div>", "")}</div>
        <button class="vopt__btn" data-id="${a.id}">${isMine ? "✓ Your pick" : "Vote this"}</button>
        <div class="vopt__count"><span>${n} vote${n === 1 ? "" : "s"}</span><span>${pct}%</span></div>
        <div class="vopt__bar"><div class="vopt__fill" style="width:0"></div></div>
      </div>`;
    }).join("");
    // animate bars after paint
    requestAnimationFrame(() => {
      $$(".vopt", voteBox).forEach((opt) => {
        const id = opt.dataset.id, n = votes[id];
        const pct = total ? Math.round((n / total) * 100) : 0;
        $(".vopt__fill", opt).style.width = pct + "%";
      });
    });
  }

  function castVote(id) {
    if (!acts.some((a) => a.id === id)) return;
    const votes = loadVotes();
    const prev = myVote();
    if (prev === id) return;                 // already mine
    if (prev && votes[prev] > 0) votes[prev]--; // move my vote
    votes[id]++;
    saveVotes(votes);
    try { localStorage.setItem(MKEY, id); } catch (e) {}
    renderVote();
    burst();
  }

  voteBox.addEventListener("click", (e) => {
    const t = e.target.closest("[data-id]");
    if (t) castVote(t.dataset.id);
  });
  $("#voteReset").addEventListener("click", () => {
    const votes = loadVotes(), prev = myVote();
    if (prev && votes[prev] > 0) votes[prev]--;
    saveVotes(votes);
    try { localStorage.removeItem(MKEY); } catch (e) {}
    renderVote();
  });
  // live-sync across tabs
  window.addEventListener("storage", (e) => { if (e.key === VKEY || e.key === MKEY) renderVote(); });
  renderVote();

  /* ---- club filter ---- */
  const filter = $("#clubFilter");
  if (filter) filter.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter__btn");
    if (!btn) return;
    $$(".filter__btn", filter).forEach((b) => b.classList.toggle("is-active", b === btn));
    const cat = btn.dataset.cat;
    $$('[data-render="clubs"] .card').forEach((c) => {
      c.hidden = !(cat === "all" || c.dataset.cat === cat);
    });
  });

  /* ---- footer links (filled at deploy; safe defaults) ---- */
  const repo = "https://github.com/fabiosampaio-91/despedida-henrique-madrid";
  $("#footerLinks").innerHTML = `<a target="_blank" rel="noopener" href="${repo}">⭐ GitHub repo</a> · <a href="#top">↑ back to top</a>`;

  /* ---- scroll reveal ---- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.08 });
  $$(".reveal").forEach((el) => io.observe(el));

  /* ---- confetti (hero) ---- */
  function makeConfetti() {
    const wrap = $("#confetti");
    if (!wrap || window.matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    const colors = ["#ff2d8b", "#9a4dff", "#ffd23f", "#28e0d8", "#fff"];
    const N = window.innerWidth < 600 ? 26 : 50;
    for (let i = 0; i < N; i++) {
      const c = document.createElement("span");
      const size = 6 + Math.random() * 8;
      c.style.cssText = `position:absolute;top:-10vh;left:${Math.random() * 100}%;
        width:${size}px;height:${size * 0.5}px;background:${colors[i % colors.length]};
        opacity:${0.5 + Math.random() * 0.5};border-radius:2px;
        transform:rotate(${Math.random() * 360}deg);
        animation:fall ${5 + Math.random() * 6}s linear ${Math.random() * 6}s infinite;`;
      wrap.appendChild(c);
    }
    const style = document.createElement("style");
    style.textContent = "@keyframes fall{to{transform:translateY(110vh) rotate(720deg)}}";
    document.head.appendChild(style);
  }
  makeConfetti();

  /* ---- small burst on vote ---- */
  function burst() {
    if (window.matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    const colors = ["#ff2d8b", "#9a4dff", "#ffd23f", "#28e0d8"];
    for (let i = 0; i < 24; i++) {
      const p = document.createElement("span");
      const a = Math.random() * Math.PI * 2, d = 60 + Math.random() * 120;
      p.style.cssText = `position:fixed;left:50%;top:55%;z-index:999;pointer-events:none;
        width:9px;height:9px;border-radius:50%;background:${colors[i % colors.length]};
        transition:transform .9s cubic-bezier(.1,.7,.2,1),opacity .9s;`;
      document.body.appendChild(p);
      requestAnimationFrame(() => {
        p.style.transform = `translate(${Math.cos(a) * d}px,${Math.sin(a) * d}px) scale(0)`;
        p.style.opacity = "0";
      });
      setTimeout(() => p.remove(), 950);
    }
  }
})();
