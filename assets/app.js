/* ============================================================
   DESPEDIDA HENRIQUE ELVAS · MADRID · interações
   Site 100% estático. A votação é feita FORA do site, num único
   formulário do Google (ver os botões "Votar"). Sem localStorage,
   sem backend, sem widget de votos.
   ============================================================ */
(function () {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---- link buttons ---- */
  const linkBtns = ({ web, maps, ig }) => {
    let h = '<div class="links">';
    if (web) h += `<a class="lk lk--web" target="_blank" rel="noopener" href="${web}">🌐 Oficial</a>`;
    if (maps) h += `<a class="lk lk--map" target="_blank" rel="noopener" href="${maps}">📍 Mapa</a>`;
    if (ig) h += `<a class="lk lk--ig" target="_blank" rel="noopener" href="${ig}">📸 Instagram</a>`;
    return h + "</div>";
  };
  const prosCons = (pros = [], cons = []) =>
    pros.map((p) => `<div class="li pro"><span>${p}</span></div>`).join("") +
    cons.map((c) => `<div class="li con"><span>${c}</span></div>`).join("");

  /* mood badge for rooftops */
  const moodBadge = (mood) => {
    if (mood === "festa") return `<span class="mood mood--festa">🔥 mais animado · bom para festa</span>`;
    if (mood === "vista") return `<span class="mood mood--vista">🌅 mais tranquilo · vista</span>`;
    return "";
  };

  /* ---- card renderers ---- */
  const renderers = {
    rooftops: (d) => `<article class="card reveal">
      <div class="card__tags"><span class="card__tag">${d.tag}</span>${moodBadge(d.mood)}</div>
      <div><div class="card__name">${d.name}</div><div class="card__area">${d.area}</div></div>
      <p class="card__blurb">${d.blurb}</p>
      <div>${prosCons(d.pros, d.cons)}</div>
      <div class="card__meta">🕐 <b>Horário:</b> ${d.hours}<br>📝 <b>Reserva:</b> ${d.reservations}</div>
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

    activities: (d) => `<article class="card reveal">
      <div class="card__emoji">${d.emoji}</div>
      <span class="card__tag">${d.tag}</span>
      <div class="card__name">${d.name}</div>
      <p class="card__blurb">${d.blurb}</p>
      <div>${prosCons(d.pros, d.cons)}</div>
      <div class="card__meta">📋 ${d.meta}</div>
      ${linkBtns(d)}</article>`,

    dinnerClubs: (d) => `<article class="card reveal">
      <span class="card__tag">${d.tag}</span>
      <div><div class="card__name">${d.name}</div><div class="card__area">${d.area}</div></div>
      <p class="card__blurb">${d.blurb}</p>
      <div>${prosCons(d.pros, d.cons)}</div>
      <div class="card__meta">🎶 <b>Festa:</b> ${d.music}<br>📝 <b>Reserva:</b> ${d.reservations}</div>
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
    const list = DATA[key];
    const fn = renderers[key];
    if (list && fn) el.innerHTML = list.map(fn).join("");
  });

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

  /* ---- footer links ---- */
  const repo = "https://github.com/fabiosampaio-91/despedida-henrique-madrid";
  $("#footerLinks").innerHTML = `<a target="_blank" rel="noopener" href="${repo}">⭐ Repositório no GitHub</a> · <a href="#top">↑ voltar ao topo</a>`;

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
})();
