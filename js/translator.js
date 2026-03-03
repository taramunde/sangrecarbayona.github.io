/**
 * translator.js — Sangre Carbayona (VERSIÓN MEJORADA Y OPTIMIZADA)
 * Traductor ES <-> EN con bandera del Reino Unido.
 */

(function () {
  'use strict';

  // ─── CONFIGURACIÓN DE LA API ─────────────────────────────────────────────────
  // Pon aquí un correo real. MyMemory te subirá el límite de 500 a 5000 palabras/día.
  const MYMEMORY_EMAIL = 'taramunde@gmail.com'; 

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

  // ─── IDs DE CONTENEDORES EXCLUIDOS ───────────────────────────────────────────
  const SKIP_IDS = new Set([
    'lang-switcher',        
    'calendario-container', 
    'arena-effect-container', 
  ]);

  const TIMER_ES = ['Días','Horas','Minutos','Segundos'];
  const TIMER_EN = ['Days','Hours','Minutes','Seconds'];

  let isEnglish = localStorage.getItem('sc_lang') === 'en';
  let originalTexts = new Map();
  // Caché local para no fundir la API con textos ya traducidos
  let dictCache = JSON.parse(localStorage.getItem('sc_dict_cache') || '{}'); 
  let isBusy = false;
  let timerObserver = null;

  // ─── ESTILOS ────────────────────────────────────────────────────────────────
  function injectStyles() {
    if (document.getElementById('translator-styles')) return;
    const s = document.createElement('style');
    s.id = 'translator-styles';
    s.textContent = `
      #lang-switcher {
        position: fixed; bottom: 130px; right: 18px; z-index: 99999;
        display: flex; flex-direction: column; align-items: center; gap: 2px;
        background: rgba(0,0,0,0.78); border: 2px solid rgba(255,255,255,0.25);
        border-radius: 12px; padding: 6px 10px; cursor: pointer; user-select: none;
        backdrop-filter: blur(6px); transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
        box-shadow: 0 4px 14px rgba(0,0,0,0.5);
      }
      #lang-switcher:hover { transform: scale(1.08); border-color: rgba(255,255,255,0.5); box-shadow: 0 6px 20px rgba(0,0,0,0.6); }
      #lang-switcher:active { transform: scale(0.96); }
      #lang-switcher .flag-icon { font-size: 24px; line-height: 1; }
      #lang-switcher .lang-label { font-size: 10px; font-weight: 700; color: #fff; letter-spacing: 1px; font-family: Arial, sans-serif; }
      #lang-switcher.busy { opacity: 0.6; pointer-events: none; }
      #lang-switcher .spinner {
        display: inline-block; width: 16px; height: 16px;
        border: 2px solid rgba(255,255,255,0.3); border-top-color: #fff; border-radius: 50%;
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
    if (document.getElementById('lang-switcher')) return;
    const btn = document.createElement('div');
    btn.id = 'lang-switcher';
    btn.title = isEnglish ? 'Cambiar a Español' : 'Switch to English';
    btn.innerHTML = btnHTML();
    btn.addEventListener('click', toggleLanguage);
    document.body.appendChild(btn);
  }

  // ─── UTILIDADES ──────────────────────────────────────────────────────────────
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  function isInsideSkippedZone(textNode) {
    let el = textNode.parentElement;
    while (el && el !== document.body) {
      if (SKIP_IDS.has(el.id)) return true;
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
        result = result.replace(re, ph);
      }
    });
    return { safe: result, map };
  }

  function restoreTerms(text, map) {
    let r = text;
    map.forEach(({ ph, term }) => { r = r.split(ph).join(term); });
    return r;
  }

  // ─── API MYMEMORY CON CACHÉ Y LÍMITES ────────────────────────────────────────
  async function translateText(text) {
    if (!text || !text.trim()) return text;
    
    // 1. Comprobar si ya la tenemos en la caché local
    const cacheKey = text.trim();
    if (dictCache[cacheKey]) {
        return text.replace(cacheKey, dictCache[cacheKey]);
    }

    const { safe, map } = protectTerms(text);
    try {
      let url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(safe)}&langpair=es|en`;
      if (MYMEMORY_EMAIL) url += `&de=${encodeURIComponent(MYMEMORY_EMAIL)}`;

      const res = await fetch(url);
      if (!res.ok) throw new Error('API Error');
      const data = await res.json();
      
      // Controlar límite de cuota agotada de la API
      if (data.responseStatus !== 200) {
        console.warn("MyMemory API limit reached or error:", data.responseDetails);
        return text; 
      }

      let translated = restoreTerms(data.responseData?.translatedText || safe, map);
      
      // Guardar en caché para no volver a pedirlo
      dictCache[cacheKey] = translated.trim();
      localStorage.setItem('sc_dict_cache', JSON.stringify(dictCache));
      
      return text.replace(cacheKey, translated.trim());

    } catch (e) {
      console.error("Translation failed for:", text, e);
      return text;
    }
  }

  // ─── RECOGER NODOS DE TEXTO TRADUCIBLES ─────────────────────────────────────
  function getTextNodes() {
    const nodes = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue.trim() || node.nodeValue.trim().length < 2) return NodeFilter.FILTER_REJECT;
        const tag = node.parentElement?.tagName?.toLowerCase();
        if (['script','style','noscript','code','pre'].includes(tag)) {
          return NodeFilter.FILTER_REJECT;
        }
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
    nodes.forEach(n => { if (!originalTexts.has(n)) originalTexts.set(n, n.nodeValue); });
    
    const BATCH = 3; // Reducido para evitar bloqueos por rate limit
    for (let i = 0; i < nodes.length; i += BATCH) {
      await Promise.all(
        nodes.slice(i, i + BATCH).map(async node => {
          node.nodeValue = await translateText(originalTexts.get(node));
        })
      );
      // Breve pausa entre lotes para no saturar la API
      await sleep(250);
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
        if(btn) {
            btn.classList.add('busy');
            btn.innerHTML = `<span class="spinner"></span><span class="lang-label">...</span>`;
        }
        await translatePage();
        startTimerObserver();
        if(btn) {
            btn.classList.remove('busy');
            btn.innerHTML = btnHTML();
            btn.title = 'Cambiar a Español';
        }
      }, 500);
    }
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', init)
    : init();

})();