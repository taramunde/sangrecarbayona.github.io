/**
 * translator.js — Sangre Carbayona
 * Traductor ES <-> EN con bandera del Reino Unido.
 * Uso: <script src="js/translator.js"></script> justo antes de </body>
 */

(function () {
  'use strict';

  // ─── PALABRAS PROTEGIDAS ─────────────────────────────────────────────────────
  const PROTECTED_TERMS = [
    'Sangre Carbayona','Real Oviedo','Sporting de Gijón','Sporting',
    'Carbayona','Tartiere','Buenavista','Estadio Carlos Tartiere',
    'Carlos Tartiere','Lángara','Isidro Lángara','Cazorla','Santi Cazorla',
    'Asturias','La Liga','Segunda División','Primera División','Segunda B',
    'Copa del Rey','Oviedista','Oviedistas','Carbayón','Oviedo',
    'Frichu Yustas','Mangas','Basiliscus','Transfermarkt','Futbolteca',
    'BdFutbol','RSSSF',
  ];

  // ─── IDs DE CONTENEDORES EXCLUIDOS (SOLO ESTOS, nada más) ───────────────────
  // Solo excluimos por ID exacto para no bloquear zonas no deseadas.
  const SKIP_IDS = new Set([
    'lang-switcher',        // el botón del traductor en sí
    'calendario-container', // todo el calendario interactivo
    'arena-effect-container', // efecto de partículas con texto animado
  ]);

  // Labels del timer (se manejan con MutationObserver aparte)
  const TIMER_ES = ['Días','Horas','Minutos','Segundos'];
  const TIMER_EN = ['Days','Hours','Minutes','Seconds'];

  let isEnglish = localStorage.getItem('sc_lang') === 'en';
  let originalTexts = new Map();
  let isBusy = false;
  let timerObserver = null;

  // ─── ESTILOS ────────────────────────────────────────────────────────────────
  function injectStyles() {
    const s = document.createElement('style');
    s.textContent = `
      #lang-switcher {
        position: fixed;
        bottom: 130px;
        right: 18px;
        z-index: 99999;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
        background: rgba(0,0,0,0.78);
        border: 2px solid rgba(255,255,255,0.25);
        border-radius: 12px;
        padding: 6px 10px;
        cursor: pointer;
        user-select: none;
        backdrop-filter: blur(6px);
        transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
        box-shadow: 0 4px 14px rgba(0,0,0,0.5);
      }
      #lang-switcher:hover {
        transform: scale(1.08);
        border-color: rgba(255,255,255,0.5);
        box-shadow: 0 6px 20px rgba(0,0,0,0.6);
      }
      #lang-switcher:active { transform: scale(0.96); }
      #lang-switcher .flag-icon { font-size: 24px; line-height: 1; }
      #lang-switcher .lang-label {
        font-size: 10px; font-weight: 700; color: #fff;
        letter-spacing: 1px; font-family: Arial, sans-serif;
      }
      #lang-switcher.busy { opacity: 0.6; pointer-events: none; }
      #lang-switcher .spinner {
        display: inline-block; width: 16px; height: 16px;
        border: 2px solid rgba(255,255,255,0.3);
        border-top-color: #fff; border-radius: 50%;
        animation: sc-spin 0.7s linear infinite;
      }
      @keyframes sc-spin { to { transform: rotate(360deg); } }
    `;
    document.head.appendChild(s);
  }

  function btnHTML() {
    return `<span class="flag-icon">${isEnglish ? '🇪🇸' : '🇬🇧'}</span>
            <span class="lang-label">${isEnglish ? 'ES' : 'EN'}</span>`;
  }

  function createButton() {
    const btn = document.createElement('div');
    btn.id = 'lang-switcher';
    btn.title = isEnglish ? 'Cambiar a Español' : 'Switch to English';
    btn.innerHTML = btnHTML();
    btn.addEventListener('click', toggleLanguage);
    document.body.appendChild(btn);
  }

  // ─── COMPROBAR SI UN NODO ESTÁ EN ZONA EXCLUIDA ──────────────────────────────
  // Solo comprobamos por ID exacto — nada de clases genéricas.
  function isInsideSkippedZone(textNode) {
    let el = textNode.parentElement;
    while (el && el !== document.body) {
      if (SKIP_IDS.has(el.id)) return true;
      // Respetar translate="no" explícito
      if (el.getAttribute('translate') === 'no') return true;
      el = el.parentElement;
    }
    return false;
  }

  // ─── PROTECCIÓN DE TÉRMINOS ──────────────────────────────────────────────────
  function protectTerms(text) {
    const map = [];
    let result = text;
    PROTECTED_TERMS.forEach((term, i) => {
      const ph = `@@SC${i}@@`;
      const re = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
      if (re.test(result)) {
        map.push({ ph, term });
        result = result.replace(
          new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), ph
        );
      }
    });
    return { safe: result, map };
  }

  function restoreTerms(text, map) {
    let r = text;
    map.forEach(({ ph, term }) => { r = r.split(ph).join(term); });
    return r;
  }

  // ─── API MYMEMORY ────────────────────────────────────────────────────────────
  async function translateText(text) {
    if (!text || !text.trim()) return text;
    const { safe, map } = protectTerms(text);
    try {
      const res = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(safe)}&langpair=es|en`
      );
      if (!res.ok) throw new Error();
      const data = await res.json();
      return restoreTerms(data.responseData?.translatedText || safe, map);
    } catch {
      return text;
    }
  }

  // ─── RECOGER NODOS DE TEXTO TRADUCIBLES ─────────────────────────────────────
  function getTextNodes() {
    const nodes = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        // Saltar nodos vacíos
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        // Saltar etiquetas no traducibles
        const tag = node.parentElement?.tagName?.toLowerCase();
        if (['script','style','noscript','code','pre'].includes(tag)) {
          return NodeFilter.FILTER_REJECT;
        }
        // Saltar zonas excluidas por ID
        if (isInsideSkippedZone(node)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    let n;
    while ((n = walker.nextNode())) nodes.push(n);
    return nodes;
  }

  // ─── TRADUCIR / RESTAURAR ────────────────────────────────────────────────────
  async function translatePage() {
    const nodes = getTextNodes();
    // Guardar originales (solo la primera vez)
    nodes.forEach(n => { if (!originalTexts.has(n)) originalTexts.set(n, n.nodeValue); });
    const BATCH = 8;
    for (let i = 0; i < nodes.length; i += BATCH) {
      await Promise.all(
        nodes.slice(i, i + BATCH).map(async node => {
          node.nodeValue = await translateText(originalTexts.get(node));
        })
      );
    }
  }

  function restorePage() {
    originalTexts.forEach((orig, node) => {
      if (node.isConnected) node.nodeValue = orig;
    });
  }

  // ─── TIMER OBSERVER ──────────────────────────────────────────────────────────
  function fixTimerLabels() {
    const timerEl = document.getElementById('timer');
    if (!timerEl || !isEnglish) return;
    const walker = document.createTreeWalker(timerEl, NodeFilter.SHOW_TEXT, null);
    let n;
    while ((n = walker.nextNode())) {
      const v = n.nodeValue.trim();
      const idx = TIMER_ES.indexOf(v);
      if (idx !== -1) n.nodeValue = TIMER_EN[idx];
    }
  }

  function startTimerObserver() {
    const timerEl = document.getElementById('timer');
    if (!timerEl || timerObserver) return;
    timerObserver = new MutationObserver(fixTimerLabels);
    timerObserver.observe(timerEl, { childList: true, subtree: true, characterData: true });
    fixTimerLabels();
  }

  function stopTimerObserver() {
    if (timerObserver) { timerObserver.disconnect(); timerObserver = null; }
    const timerEl = document.getElementById('timer');
    if (!timerEl) return;
    const walker = document.createTreeWalker(timerEl, NodeFilter.SHOW_TEXT, null);
    let n;
    while ((n = walker.nextNode())) {
      const v = n.nodeValue.trim();
      const idx = TIMER_EN.indexOf(v);
      if (idx !== -1) n.nodeValue = TIMER_ES[idx];
    }
  }

  // ─── TOGGLE ──────────────────────────────────────────────────────────────────
  async function toggleLanguage() {
    if (isBusy) return;
    const btn = document.getElementById('lang-switcher');
    isBusy = true;
    btn.classList.add('busy');
    btn.innerHTML = `<span class="spinner"></span><span class="lang-label">...</span>`;

    if (!isEnglish) {
      await translatePage();
      startTimerObserver();
      isEnglish = true;
      localStorage.setItem('sc_lang', 'en');
    } else {
      stopTimerObserver();
      restorePage();
      isEnglish = false;
      localStorage.setItem('sc_lang', 'es');
    }

    btn.classList.remove('busy');
    btn.innerHTML = btnHTML();
    btn.title = isEnglish ? 'Cambiar a Español' : 'Switch to English';
    isBusy = false;
  }

  // ─── INIT ────────────────────────────────────────────────────────────────────
  function init() {
    injectStyles();
    createButton();

    if (isEnglish) {
      setTimeout(async () => {
        const btn = document.getElementById('lang-switcher');
        btn.classList.add('busy');
        btn.innerHTML = `<span class="spinner"></span><span class="lang-label">...</span>`;
        await translatePage();
        startTimerObserver();
        btn.classList.remove('busy');
        btn.innerHTML = btnHTML();
        btn.title = 'Cambiar a Español';
      }, 800);
    }
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', init)
    : init();

})();