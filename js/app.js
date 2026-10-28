/* ==========================================================================
   ULTRA GK — app runtime
   brand · i18n engine · smart routing · hero stack · live simulator · case filter · project brief
   ========================================================================== */
(() => {
  "use strict";

  const TR = window.TRANSLATIONS;
  const BRAND = window.BRAND;
  const LANGS = ["pt", "en", "it", "es"];
  const LOCALE = { pt: "pt-BR", en: "en-US", it: "it-IT", es: "es-ES" };
  const HTML_LANG = { pt: "pt-BR", en: "en", it: "it", es: "es" };
  const OG_LOCALE = { pt: "pt_BR", en: "en_US", it: "it_IT", es: "es_ES" };
  const UI_CURRENCY = { pt: "BRL", en: "USD", it: "EUR", es: "EUR" };
  const STORAGE_KEY = "gf.lang";
  const SWITCH_MS = 150;

  const CONTACT = {
    waKaua: "5519996691034",
    waGustavo: "5519971715232",
    emails: ["kauaespind@gmail.com", "gustavo.clati@gmail.com"]
  };

  const root = document.documentElement;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const pad = (n, l = 2) => String(n).padStart(l, "0");

  /* ====================================================================
     i18n ENGINE
     ==================================================================== */
  let lang = "pt";

  const getPath = (obj, path) => path.split(".").reduce((o, k) => (o == null ? undefined : o[k]), obj);

  function t(path, vars) {
    let v = getPath(TR[lang], path);
    if (v === undefined) v = getPath(TR.pt, path);
    if (v === undefined) { console.warn(`[i18n] missing key: ${path}`); return path; }
    if (typeof v === "string") {
      const all = { brand: BRAND.name, ...vars };
      v = v.replace(/\{(\w+)\}/g, (_, k) => (all[k] ?? ""));
    }
    return v;
  }

  function normalizeLang(v) {
    if (!v) return null;
    const s = String(v).toLowerCase().trim();
    return LANGS.find((l) => s === l || s.startsWith(l + "-") || s.startsWith(l + "_")) || null;
  }

  function detectLang() {
    // 1) URL (?lang=it) — lets us send prospecting links already localized
    const fromUrl = normalizeLang(new URLSearchParams(location.search).get("lang"));
    if (fromUrl) { store(fromUrl); return fromUrl; }
    // 2) previous explicit choice
    let stored = null;
    try { stored = normalizeLang(localStorage.getItem(STORAGE_KEY)); } catch (_) { /* private mode */ }
    if (stored) return stored;
    // 3) browser language
    const navs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language];
    for (const n of navs) { const l = normalizeLang(n); if (l) return l; }
    return "pt";
  }

  function store(l) { try { localStorage.setItem(STORAGE_KEY, l); } catch (_) { /* noop */ } }

  function syncUrl(l) {
    try {
      const url = new URL(location.href);
      url.searchParams.set("lang", l);
      history.replaceState(history.state, "", url);
    } catch (_) { /* file:// or sandboxed — ignore */ }
  }

  // Dev guard: every language must mirror the `pt` structure
  function validateDictionary() {
    const walk = (ref, cmp, path, code) => {
      Object.keys(ref).forEach((k) => {
        const p = path ? `${path}.${k}` : k;
        const a = ref[k], b = cmp ? cmp[k] : undefined;
        if (b === undefined || b === "") { console.warn(`[i18n] "${code}" is missing "${p}"`); return; }
        if (Array.isArray(a)) {
          if (!Array.isArray(b) || a.length !== b.length) console.warn(`[i18n] "${code}" array length mismatch at "${p}"`);
          else a.forEach((item, i) => { if (item && typeof item === "object") walk(item, b[i], `${p}[${i}]`, code); });
        } else if (a && typeof a === "object") walk(a, b, p, code);
      });
    };
    LANGS.filter((l) => l !== "pt").forEach((l) => walk(TR.pt, TR[l], "", l));
  }

  function applyStatic() {
    $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$("[data-i18n-html]").forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); }); // trusted dictionary only
    $$("[data-i18n-ph]").forEach((el) => { el.setAttribute("placeholder", t(el.dataset.i18nPh)); });
    $$("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
  }

  function updateMeta() {
    root.lang = HTML_LANG[lang];
    document.title = t("meta.title");
    const set = (sel, val) => { const el = $(sel); if (el) el.setAttribute("content", val); };
    set('meta[name="description"]', t("meta.description"));
    set('meta[property="og:title"]', t("meta.title"));
    set('meta[property="og:description"]', t("meta.description"));
    set('meta[property="og:locale"]', OG_LOCALE[lang]);
  }

  function updateLangControls() {
    $$("[data-lang]").forEach((b) => {
      const on = b.dataset.lang === lang;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", String(on));
    });
    moveLangIndicator();
  }

  function moveLangIndicator() {
    const sw = $("#lang-switch");
    const active = sw && $(".lang-btn.is-active", sw);
    const ind = sw && $(".lang-switch__indicator", sw);
    if (!active || !ind) return;
    ind.style.width = `${active.offsetWidth}px`;
    ind.style.transform = `translateX(${active.offsetLeft}px)`;
  }

  function renderAll() {
    applyStatic();
    updateMeta();
    updateLangControls();
    renderClock();
    renderTeam();
    renderCases();
    renderStock();
    renderPy();
    renderWfCode();
    renderCalc();
  }

  let switchTimer = null;
  function setLang(next, { animate = true } = {}) {
    next = normalizeLang(next) || "pt";
    const commit = () => {
      lang = next;
      if (!calc.regionTouched) calc.region = defaultRegion();
      renderAll();
      store(lang);
      syncUrl(lang);
    };
    if (!animate || reduceMotion) { commit(); return; }
    if (next === lang) return;
    root.classList.add("lang-switching");
    clearTimeout(switchTimer);
    switchTimer = setTimeout(() => {
      commit();
      requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove("lang-switching")));
    }, SWITCH_MS);
  }

  /* ====================================================================
     FORMATTERS
     ==================================================================== */
  const money = (v, currency = UI_CURRENCY[lang], digits = 2) =>
    new Intl.NumberFormat(LOCALE[lang], { style: "currency", currency, minimumFractionDigits: digits, maximumFractionDigits: digits }).format(v);
  const num = (v, digits = 0) =>
    new Intl.NumberFormat(LOCALE[lang], { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(v);

  /* ====================================================================
     STATUS BAR CLOCK (São Paulo ⇄ Rome)
     ==================================================================== */
  function renderClock() {
    const el = $("#sb-clock");
    if (!el) return;
    const fmt = (tz) => new Intl.DateTimeFormat(LOCALE[lang], { timeZone: tz, hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(new Date());
    el.innerHTML = `${esc(t("status.local"))} · SP ${fmt("America/Sao_Paulo")}<span class="rome"> · ${esc(t("status.rome"))} ${fmt("Europe/Rome")}</span>`;
  }

  /* ====================================================================
     TEAM
     ==================================================================== */
  function renderTeam() {
    ["k", "g"].forEach((p) => {
      const edu = t(`team.${p}.edu`);
      const practice = t(`team.${p}.practice`);
      const stack = t(`team.${p}.stack`);
      $(`#${p}-edu`).innerHTML = edu.map((e) => `<li><strong>${esc(e.t)}</strong><span class="mono">${esc(e.s)}</span></li>`).join("");
      $(`#${p}-practice`).innerHTML = practice.map((x) =>
        `<li><div class="org"><strong>${esc(x.org)}</strong><span class="mono">${esc(x.role)}</span></div><p>${esc(x.text)}</p></li>`).join("");
      $(`#${p}-stack`).innerHTML = stack.map((s) => `<li>${esc(s)}</li>`).join("");
    });
  }

  /* ====================================================================
     PROJECTS · filter
     ==================================================================== */
  // Language-independent case data — same order as `projects.cases` in i18n.js
  const BEHANCE = "https://www.behance.net/gallery/";
  const CASE_META = [
    { cat: "systems",    by: "k", links: [["site", "https://kbyte-show.vercel.app/"]] },
    { cat: "systems",    by: "g", links: [["behance", `${BEHANCE}245382437/NovaPulse-Commerce-Dashboard-Clean-Admin-Panel-Design`]] },
    { cat: "systems",    by: "k", links: [["site", "https://hat-trick-main.vercel.app/web/inicial.html"]] },
    { cat: "landing",    by: "k", links: [["site", "https://iron-park.vercel.app/"]] },
    { cat: "landing",    by: "g", links: [["behance", `${BEHANCE}245383311/Rivlo-AI-Powered-Fitness-Training-Platform-Website`]] },
    { cat: "landing",    by: "g", links: [["behance", `${BEHANCE}245382843/Aurora-Contabil-Institutional-Website-Design`]] },
    { cat: "landing",    by: "g", links: [["behance", `${BEHANCE}245382197/Website-Vortice-Fitness-Modern-Landing-Page`]] },
    { cat: "landing",    by: "k", links: [["site", "https://pizzaria-rest.vercel.app/", "La Forno"], ["site", "https://restaurante-net.vercel.app/", "Lumina"]] },
    { cat: "automation", by: "k", links: [["code", "https://github.com/kaua-espindola/ComunaCheck-main"]] },
    { cat: "automation", by: "g", links: [] }
  ];
  const AUTHOR = { k: "Kauã", g: "Gustavo" };
  let currentFilter = "all";

  function caseLinks(meta) {
    if (!meta.links.length) return `<p class="case__links case__links--none mono">${esc(t("projects.links.none"))}</p>`;
    return `<div class="case__links">${meta.links.map(([type, url, label]) =>
      `<a class="case__link mono" href="${esc(url)}" target="_blank" rel="noopener">${esc(label ? `${t(`projects.links.${type}`)} · ${label}` : t(`projects.links.${type}`))}<span aria-hidden="true">↗</span></a>`).join("")}</div>`;
  }

  function renderCases() {
    const cases = t("projects.cases");
    const wrap = $("#cases");
    wrap.innerHTML = cases.map((c, i) => {
      const meta = CASE_META[i];
      const cat = meta.cat;
      return `
      <article class="case" data-cat="${cat}" data-by="${meta.by}" id="case-${pad(i + 1)}">
        <div class="case__meta mono"><span><b>${esc(t("projects.caseLabel"))} ${pad(i + 1)}</b> · ${esc(t("projects.lBy"))} <span class="case__by">${esc(AUTHOR[meta.by])}</span></span><span>${esc(t(`projects.filters.${cat}`))}</span></div>
        <h3 class="case__title">${esc(c.title)}</h3>
        <p class="case__ctx mono">${esc(c.context)}</p>
        <dl class="case__dl">
          <div><dt>${esc(t("projects.lProblem"))}</dt><dd>${esc(c.problem)}</dd></div>
          <div><dt>${esc(t("projects.lArch"))}</dt><dd>${esc(c.arch)}</dd></div>
          <div><dt>${esc(t("projects.lResult"))}</dt><dd>${esc(c.result)}</dd></div>
        </dl>
        <ul class="tags mono">${c.stack.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
        ${caseLinks(meta)}
      </article>`;
    }).join("");

    // cases are re-rendered on language switch — only animate them the first time
    if (!casesSeen) $$(".case", wrap).forEach((el, i) => armReveal(el, "up", i % 2));

    const counts = { all: cases.length };
    CASE_META.forEach(({ cat }) => { counts[cat] = (counts[cat] || 0) + 1; });
    $$("[data-count]").forEach((el) => { el.textContent = pad(counts[el.dataset.count] || 0); });
    applyFilter(false);
  }

  function applyFilter(animate = true) {
    const wrap = $("#cases");
    const run = () => {
      let visible = 0;
      $$(".case", wrap).forEach((c) => {
        const show = currentFilter === "all" || c.dataset.cat === currentFilter;
        c.hidden = !show;
        if (show) visible++;
      });
      $("#cases-count").textContent = `${pad(visible)} / ${pad(CASE_META.length)} ${t("projects.count")}`;
      $$(".filter").forEach((b) => {
        const on = b.dataset.filter === currentFilter;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-pressed", String(on));
      });
    };
    if (!animate || reduceMotion) { run(); return; }
    wrap.classList.add("is-filtering");
    setTimeout(() => { run(); requestAnimationFrame(() => wrap.classList.remove("is-filtering")); }, 200);
  }

  /* ====================================================================
     SIMULATOR · tabs
     ==================================================================== */
  function initTabs() {
    const tabs = $$(".sim__tab");
    const points = $$(".simlab__pt");
    const activate = (tab, focus = false) => {
      tabs.forEach((tb) => {
        const on = tb === tab;
        tb.classList.toggle("is-active", on);
        tb.setAttribute("aria-selected", String(on));
        tb.tabIndex = on ? 0 : -1;
        $(`#${tb.getAttribute("aria-controls")}`).hidden = !on;
      });
      points.forEach((p) => p.classList.toggle("is-active", p.dataset.goto === tab.id));
      if (focus) tab.focus();
    };
    // the numbered list beside the simulator drives the same tabs
    points.forEach((p) => p.addEventListener("click", () => activate($(`#${p.dataset.goto}`))));
    tabs.forEach((tb, i) => {
      tb.addEventListener("click", () => activate(tb));
      tb.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
          e.preventDefault();
          const n = (i + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
          activate(tabs[n], true);
        }
      });
    });
  }

  /* ====================================================================
     BRAND — fills every [data-brand] slot from window.BRAND
     ==================================================================== */
  function applyBrand() {
    $$("[data-brand]").forEach((el) => {
      const key = el.dataset.brand;
      if (key === "lockup") {
        const [a, b = ""] = BRAND.lockup || BRAND.name.toLowerCase().split(" ");
        el.innerHTML = `<b>${esc(a)}</b><span>${esc(b)}</span>`;
      }
      else if (key === "wordmark") el.innerHTML = BRAND.wordmark.map(esc).join("<span>//</span>");
      else el.textContent = BRAND[key];
    });
    $$("[data-brand-aria]").forEach((el) => el.setAttribute("aria-label", BRAND.name));
  }

  /* ====================================================================
     HERO · layered stack (headline line ⇄ drawing layer)
     ==================================================================== */
  function initHeroStack() {
    const fig = $("#hero-stack");
    if (!fig) return;
    const lines = $$("#hero-title .line");
    const layers = $$(".layer", fig);
    let idx = 0, timer = null, held = false, visible = true;

    const set = (i) => {
      idx = i;
      lines.forEach((l) => l.classList.toggle("is-on", Number(l.dataset.layer) === i));
      layers.forEach((l) => l.classList.toggle("is-on", Number(l.dataset.layer) === i));
    };
    const stop = () => { clearInterval(timer); timer = null; };
    const play = () => {
      stop();
      if (reduceMotion || held || !visible) return;
      timer = setInterval(() => set((idx + 1) % 3), 2600);
    };
    const hold = (i) => { held = true; stop(); set(i); };
    const release = () => { held = false; play(); };

    [...lines, ...layers].forEach((el) => {
      el.addEventListener("pointerenter", () => hold(Number(el.dataset.layer)));
      el.addEventListener("pointerleave", release);
    });

    // only animate while the hero is on screen
    new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      visible ? play() : stop();
    }, { threshold: 0.15 }).observe(fig);

    // subtle depth parallax
    if (finePointer && !reduceMotion) {
      const hero = $("#inicio");
      hero.addEventListener("pointermove", (e) => {
        const r = hero.getBoundingClientRect();
        fig.style.setProperty("--mx", (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
        fig.style.setProperty("--my", (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
      });
      hero.addEventListener("pointerleave", () => { fig.style.setProperty("--mx", 0); fig.style.setProperty("--my", 0); });
    }

    set(0);
    requestAnimationFrame(() => fig.classList.add("is-in"));
    play();
  }

  /* ====================================================================
     SIMULATOR · Tab 1 — wireframe → UI
     ==================================================================== */
  const wf = { value: 55, userTouched: false };

  function setReveal(v) {
    wf.value = Math.max(0, Math.min(100, v));
    $("#wf-mock").style.setProperty("--reveal", `${wf.value}%`);
    $("#wf-range").value = String(Math.round(wf.value));
    renderWfCode();
  }

  function renderWfCode() {
    const el = $("#wf-code");
    if (!el) return;
    const v = wf.value;
    if (v < 30) {
      el.innerHTML = `<span class="c-attr">◇</span> ${esc(t("sim.web.figma"))}`;
    } else if (v < 80) {
      el.innerHTML = `<span class="c-tag">&lt;section</span> <span class="c-attr">class</span>=<span class="c-str">"grid md:grid-cols-2 gap-6 px-6 py-8"</span><span class="c-tag">&gt;</span>`;
    } else {
      el.innerHTML = `<span class="c-ok">✓</span> ${esc(t("sim.web.status"))}`;
    }
  }

  function initWireframe() {
    const range = $("#wf-range");
    range.addEventListener("input", () => { wf.userTouched = true; setReveal(Number(range.value)); });

    // drag directly on the mock
    const mock = $("#wf-mock");
    let dragging = false;
    const fromPointer = (e) => {
      const r = mock.getBoundingClientRect();
      setReveal(((e.clientX - r.left) / r.width) * 100);
    };
    mock.addEventListener("pointerdown", (e) => { dragging = true; wf.userTouched = true; mock.setPointerCapture(e.pointerId); fromPointer(e); });
    mock.addEventListener("pointermove", (e) => { if (dragging) fromPointer(e); });
    mock.addEventListener("pointerup", () => { dragging = false; });
    mock.addEventListener("pointercancel", () => { dragging = false; });
    mock.style.touchAction = "pan-y";

    $$("#wf-device button").forEach((b) => b.addEventListener("click", () => {
      $$("#wf-device button").forEach((x) => x.classList.toggle("is-active", x === b));
      mock.classList.toggle("is-mobile", b.dataset.device === "mobile");
    }));

    // one-time intro sweep when the simulator enters the viewport
    if (reduceMotion) return;
    const io = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      io.disconnect();
      const keys = [[0, 55], [700, 4], [1700, 100], [2700, 55]];
      const start = performance.now();
      const ease = (x) => 1 - Math.pow(1 - x, 3);
      const step = (now) => {
        if (wf.userTouched) return;
        const el = now - start;
        let i = keys.findIndex((k, idx) => idx < keys.length - 1 && el >= k[0] && el < keys[idx + 1][0]);
        if (i === -1) { setReveal(keys[keys.length - 1][1]); return; }
        const [t0, v0] = keys[i], [t1, v1] = keys[i + 1];
        setReveal(v0 + (v1 - v0) * ease((el - t0) / (t1 - t0)));
        requestAnimationFrame(step);
      };
      setTimeout(() => requestAnimationFrame(step), 400);
    }, { threshold: 0.5 });
    io.observe(mock);
  }

  /* ====================================================================
     SIMULATOR · Tab 2 — inventory system
     ==================================================================== */
  const stock = {
    items: [
      { id: 1, seed: 0, qty: 12, price: 389.9 },
      { id: 2, seed: 1, qty: 3, price: 219.0 },
      { id: 3, seed: 2, qty: 48, price: 24.9 },
      { id: 4, seed: 3, qty: 2, price: 39.9 }
    ],
    nextId: 5,
    sales: 0,
    salesValue: 0,
    log: [{ k: "logReady" }],
    flashId: null,
    bump: []
  };
  const LOW_LIMIT = 3;
  const itemName = (it) => (it.seed != null ? t("sim.stock.seed")[it.seed] : it.name);

  function stockLog(entry) {
    stock.log.push(entry);
    if (stock.log.length > 3) stock.log.shift();
  }

  function renderStock() {
    const body = $("#stk-body");
    if (!body) return;
    body.innerHTML = stock.items.map((it) => {
      const low = it.qty <= LOW_LIMIT;
      return `<tr class="${it.id === stock.flashId ? "flash" : ""}">
        <td class="id">#${pad(it.id, 3)}</td>
        <td class="name" title="${esc(itemName(it))}">${esc(itemName(it))}<span class="badge ${low ? "badge--low" : "badge--ok"}">${esc(t(low ? "sim.stock.low" : "sim.stock.ok"))}</span></td>
        <td class="num">${num(it.qty)}</td>
        <td class="num">${money(it.price)}</td>
        <td><span class="act">
          <button type="button" data-act="sell" data-id="${it.id}" ${it.qty === 0 ? "disabled" : ""}>${esc(t("sim.stock.sell"))}</button>
          <button type="button" data-act="restock" data-id="${it.id}">${esc(t("sim.stock.restock"))}</button>
        </span></td>
      </tr>`;
    }).join("");
    stock.flashId = null;

    const totalQty = stock.items.reduce((s, i) => s + i.qty, 0);
    const totalVal = stock.items.reduce((s, i) => s + i.qty * i.price, 0);
    const lowCount = stock.items.filter((i) => i.qty <= LOW_LIMIT).length;
    const kpis = {
      "kpi-items": num(totalQty),
      "kpi-value": money(totalVal, undefined, 0),
      "kpi-sales": `${stock.sales} · ${money(stock.salesValue, undefined, 0)}`,
      "kpi-low": pad(lowCount)
    };
    Object.entries(kpis).forEach(([id, v]) => {
      const el = $(`#${id}`);
      if (el.textContent !== v && stock.bump.includes(id)) {
        el.classList.remove("bump"); void el.offsetWidth; el.classList.add("bump");
      }
      el.textContent = v;
    });
    stock.bump = [];

    $("#stk-log").innerHTML = stock.log.map((l) => {
      const msg = esc(t(`sim.stock.${l.k}`)) + (l.extra ? ` <span>${esc(l.extra)}</span>` : "");
      return `<p><span class="${l.err ? "err" : "pr"}">mysql&gt;</span> ${msg}</p>`;
    }).join("");
  }

  function initStock() {
    const form = $("#stk-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = $("#stk-name").value.trim();
      const qty = parseInt($("#stk-qty").value, 10);
      const price = parseFloat(String($("#stk-price").value).replace(",", "."));
      if (!name || !Number.isFinite(qty) || qty < 0 || !Number.isFinite(price) || price < 0) {
        form.classList.add("is-invalid");
        stockLog({ k: "invalid", err: true });
        renderStock();
        return;
      }
      form.classList.remove("is-invalid");
      const id = stock.nextId++;
      stock.items.unshift({ id, seed: null, name, qty, price });
      stock.flashId = id;
      stock.bump = ["kpi-items", "kpi-value", "kpi-low"];
      stockLog({ k: "logInsert", extra: `(#${pad(id, 3)}, '${name.slice(0, 18)}', ${qty}, ${price.toFixed(2)})` });
      form.reset();
      renderStock();
      $(".stk__table-wrap").scrollTop = 0;
      $("#stk-name").focus();
    });

    $("#stk-body").addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-act]");
      if (!btn) return;
      const it = stock.items.find((i) => i.id === Number(btn.dataset.id));
      if (!it) return;
      if (btn.dataset.act === "sell" && it.qty > 0) {
        it.qty -= 1;
        stock.sales += 1;
        stock.salesValue += it.price;
        stockLog({ k: "logSale", extra: `#${pad(it.id, 3)}` });
        stock.bump = ["kpi-items", "kpi-value", "kpi-sales", "kpi-low"];
      } else if (btn.dataset.act === "restock") {
        it.qty += 5;
        stockLog({ k: "logRestock", extra: `#${pad(it.id, 3)}` });
        stock.bump = ["kpi-items", "kpi-value", "kpi-low"];
      }
      stock.flashId = it.id;
      renderStock();
    });
  }

  /* ====================================================================
     SIMULATOR · Tab 3 — Python routine
     ==================================================================== */
  const PY_RAW = [
    { c: ["12/03/26", "  JOÃO silva ", "marketplace", "1.250,00"], issue: null },
    { c: ["2026-03-12", "Ana Prado", "LOJA", "R$ 89,9"], issue: "format" },
    { c: ["12/03/26", "  JOÃO silva ", "marketplace", "1.250,00"], issue: "dup" },
    { c: ["", "carlos M.", "ecommerce", ""], issue: "missing" },
    { c: ["13-03-2026", "BRUNA k", "whatsapp", "\"340\""], issue: "format" },
    { c: ["14/03/26", "Luca Romano", "Marketplace ", "€ 75.00"], issue: "format" },
    { c: ["14/03/26", "luca romano", "marketplace", "75"], issue: "dup" },
    { c: ["15/03/26", "Marta Ruiz", "e-commerce", "212,40"], issue: null }
  ];
  const PY_RESULT = [
    { orders: 412, revenue: 48320.5 },
    { orders: 268, revenue: 21940.0 },
    { orders: 351, revenue: 39115.8 },
    { orders: 216, revenue: 14602.3 }
  ];
  const py = { phase: "idle", step: 0 };
  let pyTimer = null;

  function renderPy() {
    const logs = t("sim.py.logs");
    const total = logs.length;

    // raw sheet
    const scanning = py.phase === "running" && py.step >= 1 && py.step <= 3;
    const fixed = py.phase === "done" || (py.phase === "running" && py.step >= 4);
    $("#py-raw").innerHTML =
      `<div class="raw-row raw-row--h"><span class="cells">${esc(t("sim.py.header"))}</span></div>` +
      PY_RAW.map((r, i) => {
        const cls = ["raw-row"];
        if (r.issue) cls.push(fixed ? "is-fixed" : "has-issue");
        if (scanning && i % 3 === py.step % 3) cls.push("is-scanning");
        const flag = r.issue ? `<span class="flag">${esc(t(`sim.py.issues.${r.issue}`))}</span>` : "";
        return `<div class="${cls.join(" ")}"><span class="cells">${esc(r.c.join(";"))}</span>${flag}</div>`;
      }).join("");

    // output
    const out = $("#py-out");
    if (py.phase === "done") {
      const ch = t("sim.py.channels");
      const max = Math.max(...PY_RESULT.map((r) => r.revenue));
      const totOrders = PY_RESULT.reduce((s, r) => s + r.orders, 0);
      const totRev = PY_RESULT.reduce((s, r) => s + r.revenue, 0);
      out.innerHTML = `
        <table class="out-table">
          <thead><tr><th>${esc(t("sim.py.colChannel"))}</th><th class="r">${esc(t("sim.py.colOrders"))}</th><th class="r">${esc(t("sim.py.colRevenue"))}</th></tr></thead>
          <tbody>${PY_RESULT.map((r, i) => `<tr><td>${esc(ch[i])}</td><td class="r">${num(r.orders)}</td><td class="r">${num(r.revenue, 2)}</td></tr>`).join("")}</tbody>
          <tfoot><tr><td>${esc(t("sim.py.total"))}</td><td class="r">${num(totOrders)}</td><td class="r">${num(totRev, 2)}</td></tr></tfoot>
        </table>
        <div class="out-bars">${PY_RESULT.map((r, i) => `<div class="out-bar"><span>${esc(ch[i])}</span><i style="width:${((r.revenue / max) * 100).toFixed(1)}%;animation-delay:${i * 90}ms"></i></div>`).join("")}</div>`;
    } else {
      out.innerHTML = `<div class="py__placeholder"><span class="sk"></span><span class="sk"></span><span class="sk"></span><span>${esc(t("sim.py.waiting"))}</span></div>`;
    }

    // terminal
    const term = $("#py-term");
    if (py.phase === "idle") {
      term.innerHTML = `<p class="idle">${esc(t("sim.py.idle"))} <span class="cursor"></span></p>`;
    } else {
      term.innerHTML = logs.slice(0, py.step).map((l, i) => {
        const cls = i === 0 ? "cmd" : (i === total - 1 ? "done" : "");
        return `<p class="${cls}">${esc(l)}</p>`;
      }).join("") + (py.phase === "running" ? `<p><span class="cursor"></span></p>` : "");
      term.scrollTop = term.scrollHeight;
    }

    // controls
    const pct = py.phase === "idle" ? 0 : Math.round((py.step / total) * 100);
    $("#py-progress").style.transform = `scaleX(${pct / 100})`;
    $("#py-pct").textContent = `${pct}%`;
    const btn = $("#py-run");
    btn.disabled = py.phase === "running";
    $("#py-run-label").textContent = t(py.phase === "running" ? "sim.py.running" : py.phase === "done" ? "sim.py.rerun" : "sim.py.run");
  }

  function runPy() {
    if (py.phase === "running") return;
    clearTimeout(pyTimer);
    py.phase = "running";
    py.step = 0;
    renderPy();
    const total = t("sim.py.logs").length;
    const tick = () => {
      py.step += 1;
      if (py.step >= total) { py.step = total; py.phase = "done"; }
      renderPy();
      if (py.phase === "running") pyTimer = setTimeout(tick, 360 + Math.random() * 280);
    };
    pyTimer = setTimeout(tick, 260);
  }

  /* ====================================================================
     PROJECT BRIEF (no prices — the proposal comes after a call)
     ==================================================================== */
  const defaultRegion = () => ({ pt: "brl", en: "usd", it: "eur", es: "eur" }[lang]);

  const calc = { type: "landing", deadline: "d30", region: "brl", regionTouched: false };
  const ticketId = `#${BRAND.ticket}-${String(new Date().getFullYear()).slice(2)}${Math.random().toString(16).slice(2, 6).toUpperCase()}`;

  function buildMessage(rich) {
    const m = t("calc.msg");
    const b = rich ? "*" : "";
    const name = $("#calc-name").value.trim();
    const details = $("#calc-details").value.trim();
    return [
      m.intro,
      "",
      `${b}${m.head}${b} — ${ticketId}`,
      `• ${m.type}: ${t(`calc.types.${calc.type}.t`)}`,
      `• ${m.deadline}: ${t(`calc.deadlines.${calc.deadline}.t`)}`,
      `• ${m.region}: ${t(`calc.regions.${calc.region}.t`)}`,
      `• ${m.details}: ${details || m.notInformed}`,
      `• ${m.name}: ${name || m.notInformed}`,
      `• ${m.lang}: ${t("langName")}`,
      "",
      m.outro
    ].join("\n");
  }

  function renderCalc() {
    $$(".opts").forEach((group) => {
      const key = group.dataset.group;
      $$(".opt", group).forEach((o) => {
        const on = o.dataset.value === calc[key];
        o.classList.toggle("is-selected", on);
        o.setAttribute("aria-pressed", String(on));
      });
    });
    $("#ticket-id").textContent = ticketId;
    $("#sum-type").textContent = t(`calc.types.${calc.type}.t`);
    $("#sum-deadline").textContent = t(`calc.deadlines.${calc.deadline}.t`);
    $("#sum-region").textContent = t(`calc.regions.${calc.region}.t`);
    $("#sum-lang").textContent = t("langName");

    const rich = buildMessage(true);
    const plain = buildMessage(false);
    $("#calc-preview").textContent = plain;
    $("#send-wa-kaua").href = `https://wa.me/${CONTACT.waKaua}?text=${encodeURIComponent(rich)}`;
    $("#send-wa-gustavo").href = `https://wa.me/${CONTACT.waGustavo}?text=${encodeURIComponent(rich)}`;
    const subject = t("calc.msg.subject", { type: t(`calc.types.${calc.type}.t`) });
    $("#send-email").href = `mailto:${CONTACT.emails.join(",")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(plain)}`;
    $("#copy-label").textContent = t("calc.copy");
  }

  function initCalc() {
    $$(".opts").forEach((group) => {
      group.addEventListener("click", (e) => {
        const opt = e.target.closest(".opt");
        if (!opt) return;
        calc[group.dataset.group] = opt.dataset.value;
        if (group.dataset.group === "region") calc.regionTouched = true;
        renderCalc();
      });
    });
    ["#calc-name", "#calc-details"].forEach((s) => $(s).addEventListener("input", renderCalc));

    $("#copy-summary").addEventListener("click", async () => {
      const label = $("#copy-label");
      try {
        await navigator.clipboard.writeText(buildMessage(false));
      } catch (_) {
        const ta = document.createElement("textarea");
        ta.value = buildMessage(false);
        document.body.appendChild(ta); ta.select();
        try { document.execCommand("copy"); } catch (__) { /* noop */ }
        ta.remove();
      }
      label.textContent = t("calc.copied");
      setTimeout(() => { label.textContent = t("calc.copy"); }, 1600);
    });
  }

  /* ====================================================================
     UI · header, menu, magnetic, reveal, scrollspy
     ==================================================================== */
  function initHeader() {
    const header = $("#site-header");
    const toggle = $("#menu-toggle");
    const close = () => { header.classList.remove("menu-open"); toggle.setAttribute("aria-expanded", "false"); };
    toggle.addEventListener("click", () => {
      const open = !header.classList.contains("menu-open");
      header.classList.toggle("menu-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
    $$(".mobile-drawer a").forEach((a) => a.addEventListener("click", close));
    window.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
    window.addEventListener("resize", () => { if (window.innerWidth > 1100) close(); moveLangIndicator(); }, { passive: true });

    // scrollspy
    const links = $$(".nav-link");
    const map = new Map(links.map((l) => [l.getAttribute("href").slice(1), l]));
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        links.forEach((l) => l.classList.remove("is-current"));
        const l = map.get(en.target.id);
        if (l) l.classList.add("is-current");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ["simulador", "solucoes", "dupla", "projetos", "orcamento"].forEach((id) => { const el = document.getElementById(id); if (el) spy.observe(el); });
  }

  function initMagnetic() {
    if (!finePointer || reduceMotion) return;
    $$(".magnetic").forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x * 0.22}px, ${y * 0.35}px)`;
      });
      el.addEventListener("pointerleave", () => { el.style.transform = ""; });
    });
  }

  /* Scroll reveal — [selector, kind, stagger(index)]. Kinds: up (fade + rise),
     clip (titles rising out of a mask), fade (no movement; sec-meta draws its line). */
  const REVEAL_MAP = [
    [".sec-meta", "fade", () => 0],
    [".hero__title .line", "up", (i) => i + 1],
    [".hero__sub", "up", () => 4],
    [".hero__ctas", "up", () => 5],
    [".stack__cap", "fade", () => 7],
    [".sec-title", "clip", () => 0],
    [".sec-intro", "up", () => 2],
    [".simlab__pt", "up", (i) => 3 + i],
    [".simlab__stage", "up", () => 2],
    [".bento__cell", "up", (i) => i % 2],
    [".team-shared", "up", () => 0],
    [".profile", "up", (i) => i * 2],
    [".filters", "up", () => 0],
    [".hub", "up", () => 0],
    [".calc__step", "up", (i) => i],
    [".calc__summary", "up", () => 2],
    [".footer__kicker", "up", () => 0],
    [".footer__title", "clip", () => 1],
    ["#footer-cta", "up", () => 3],
    [".fcol", "up", (i) => i],
    [".footer__mark", "up", () => 1],
    [".footer__bottom", "fade", () => 2],
    [".reveal", "up", () => 0]
  ];
  let revealIO = null;
  let casesSeen = false;
  const revealTargets = new Map(); // observed element → elements it reveals

  function armReveal(el, kind = "up", d = 0) {
    if (!revealIO || el.dataset.reveal) return;
    if (reduceMotion) kind = "fade"; // fade in place, no rise/clip
    el.dataset.reveal = kind;
    el.style.setProperty("--d", d);
    // a fully clipped element has no visible area, so the observer would never fire for it:
    // let its parent trigger it instead
    const trigger = kind === "clip" ? el.parentElement : el;
    if (!revealTargets.has(trigger)) { revealTargets.set(trigger, []); revealIO.observe(trigger); }
    revealTargets.get(trigger).push(el);
  }

  function landReveal(el) {
    el.classList.add("in");
    if (el.classList.contains("case")) casesSeen = true;
    // once landed, hand the element back to its own styles (hover transitions etc.)
    const d = Number(el.style.getPropertyValue("--d")) || 0;
    setTimeout(() => {
      el.removeAttribute("data-reveal");
      el.classList.remove("in");
      el.style.removeProperty("--d");
    }, 1700 + d * 90);
  }

  function initReveal() {
    if (!("IntersectionObserver" in window)) return; // everything simply stays visible
    revealIO = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        revealIO.unobserve(en.target);
        (revealTargets.get(en.target) || []).forEach(landReveal);
        revealTargets.delete(en.target);
      });
    }, { threshold: 0.12 }); // no negative bottom margin: elements at the very end of the page must still fire
    REVEAL_MAP.forEach(([sel, kind, stagger]) => $$(sel).forEach((el, i) => armReveal(el, kind, stagger(i))));
  }

  function initScrollProgress() {
    const bar = $("#scroll-progress");
    if (!bar) return;
    let ticking = false;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.setProperty("--p", max > 0 ? (window.scrollY / max).toFixed(4) : 0);
      ticking = false;
    };
    window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();
  }

  /* ====================================================================
     BOOT
     ==================================================================== */
  function boot() {
    validateDictionary();
    lang = detectLang();
    calc.region = defaultRegion();

    $$("[data-lang]").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
    $$(".filter").forEach((b) => b.addEventListener("click", () => {
      if (b.dataset.filter === currentFilter) return;
      currentFilter = b.dataset.filter;
      applyFilter(true);
    }));
    $("#py-run").addEventListener("click", runPy);

    applyBrand();
    initHeroStack();
    initTabs();
    initWireframe();
    initStock();
    initCalc();
    initHeader();
    initMagnetic();
    initReveal();
    initScrollProgress();

    renderAll();
    setInterval(renderClock, 1000);

    requestAnimationFrame(() => root.classList.remove("i18n-pending"));
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(moveLangIndicator);
  }

  boot();
})();
