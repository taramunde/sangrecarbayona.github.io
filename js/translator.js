/**
 * translator.js — Sangre Carbayona
 * Traductor ES <-> EN con bandera del Reino Unido.
 * Añade este script en cualquier página HTML justo antes de </body>
 * 
 * Uso: <script src="js/translator.js"></script>
 */

(function () {
  'use strict';

  // ─── PALABRAS PROTEGIDAS (no se traducen) ───────────────────────────────────
  // Se reemplazan por placeholders antes de traducir y se restauran después.
  const PROTECTED_TERMS = [
    'Sangre Carbayona',
    'Real Oviedo',
    'Sporting de Gijón',
    'Sporting',
    'Carbayona',
    'Tartiere',
    'Buenavista',
    'Buenavista Stadium',
    'Estadio Carlos Tartiere',
    'Carlos Tartiere',
    'Lángara',
    'Isidro Lángara',
    'Cazorla',
    'Santi Cazorla',
    'Asturias',
    'La Liga',
    'Segunda División',
    'Primera División',
    'Segunda B',
    'Copa del Rey',
    'Oviedista',
    'Oviedistas',
    'Carbayón',
    'Oviedo',
    'Frichu Yustas',
    'Mangas',
    'Basiliscus',
    'Transfermarkt',
    'Futbolteca',
    'BdFutbol',
    'RSSSF',
  ];

  // ─── NODOS A IGNORAR (no se tocan nunca) ────────────────────────────────────
  const SKIP_SELECTORS = [
    'script', 'style', 'noscript', 'code', 'pre',
    '.notranslate', '[translate="no"]',
    '#lang-switcher',           // el propio botón
    '.social-icon',
    'a[href]',                  // links de nav: solo traducimos el texto, no el href
  ];

  // ─── ESTADO ─────────────────────────────────────────────────────────────────
  let isEnglish = localStorage.getItem('sc_lang') === 'en';
  let originalTexts = new Map();   // nodo -> texto original
  let isBusy = false;

  // ─── CREACIÓN DEL BOTÓN ─────────────────────────────────────────────────────
  function createButton() {
    const btn = document.createElement('div');
    btn.id = 'lang-switcher';
    btn.title = isEnglish ? 'Switch to Spanish' : 'Switch to English';
    btn.innerHTML = `
      <span class="flag-icon">${isEnglish ? '🇪🇸' : '🇬🇧'}</span>
      <span class="lang-label">${isEnglish ? 'ES' : 'EN'}</span>
    `;
    btn.addEventListener('click', toggleLanguage);
    document.body.appendChild(btn);
    return btn;
  }

  // ─── ESTILOS ────────────────────────────────────────────────────────────────
  function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
      #lang-switcher {
        position: fixed;
        bottom: 80px;
        right: 18px;
        z-index: 99999;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
        background: rgba(0,0,0,0.75);
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
      #lang-switcher:active {
        transform: scale(0.96);
      }
      #lang-switcher .flag-icon {
        font-size: 24px;
        line-height: 1;
      }
      #lang-switcher .lang-label {
        font-size: 10px;
        font-weight: 700;
        color: #fff;
        letter-spacing: 1px;
        font-family: Arial, sans-serif;
      }
      #lang-switcher.busy {
        opacity: 0.6;
        pointer-events: none;
      }
      #lang-switcher .spinner {
        display: inline-block;
        width: 16px;
        height: 16px;
        border: 2px solid rgba(255,255,255,0.3);
        border-top-color: #fff;
        border-radius: 50%;
        animation: sc-spin 0.7s linear infinite;
      }
      @keyframes sc-spin {
        to { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
  }

  // ─── PROTECCIÓN DE TÉRMINOS ──────────────────────────────────────────────────
  // Reemplazamos cada término protegido por @@PROTECTED_N@@ antes de enviar a la API
  function protectTerms(text) {
    const map = [];
    let result = text;
    PROTECTED_TERMS.forEach((term, i) => {
      const placeholder = `@@SC${i}@@`;
      // Reemplazo case-insensitive
      const regex = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
      if (regex.test(result)) {
        map.push({ placeholder, term });
        result = result.replace(new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), placeholder);
      }
    });
    return { protected: result, map };
  }

  function restoreTerms(text, map) {
    let result = text;
    map.forEach(({ placeholder, term }) => {
      result = result.split(placeholder).join(term);
    });
    return result;
  }

  // ─── API DE TRADUCCIÓN (MyMemory — gratuita, sin clave) ─────────────────────
  async function translateText(text, from, to) {
    if (!text || !text.trim()) return text;

    const { protected: safeText, map } = protectTerms(text);

    try {
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(safeText)}&langpair=${from}|${to}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('API error');
      const data = await res.json();
      const translated = data.responseData?.translatedText || safeText;
      return restoreTerms(translated, map);
    } catch (e) {
      // Si falla la API, devolvemos el texto original
      return text;
    }
  }

  // ─── OBTENER NODOS DE TEXTO TRADUCIBLES ─────────────────────────────────────
  function getTextNodes(root) {
    const nodes = [];
    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          // Texto vacío o solo espacios
          if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;

          // Padres a ignorar
          let parent = node.parentElement;
          while (parent && parent !== root) {
            const tag = parent.tagName.toLowerCase();
            if (['script', 'style', 'noscript', 'code', 'pre'].includes(tag)) {
              return NodeFilter.FILTER_REJECT;
            }
            if (
              parent.id === 'lang-switcher' ||
              parent.classList.contains('notranslate') ||
              parent.getAttribute('translate') === 'no'
            ) {
              return NodeFilter.FILTER_REJECT;
            }
            parent = parent.parentElement;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    let node;
    while ((node = walker.nextNode())) {
      nodes.push(node);
    }
    return nodes;
  }

  // ─── TRADUCIR TODA LA PÁGINA ─────────────────────────────────────────────────
  async function translatePage(btn) {
    const nodes = getTextNodes(document.body);
    const BATCH = 8; // nodos por lote para no saturar la API

    // Guardar originales si es la primera vez
    nodes.forEach(n => {
      if (!originalTexts.has(n)) {
        originalTexts.set(n, n.nodeValue);
      }
    });

    // Traducir en lotes
    for (let i = 0; i < nodes.length; i += BATCH) {
      const batch = nodes.slice(i, i + BATCH);
      await Promise.all(
        batch.map(async (node) => {
          const original = originalTexts.get(node);
          const translated = await translateText(original, 'es', 'en');
          node.nodeValue = translated;
        })
      );
    }
  }

  // ─── RESTAURAR ESPAÑOL ───────────────────────────────────────────────────────
  function restorePage() {
    originalTexts.forEach((original, node) => {
      // El nodo puede haberse eliminado del DOM; lo comprobamos
      if (node.isConnected) {
        node.nodeValue = original;
      }
    });
  }

  // ─── TOGGLE ──────────────────────────────────────────────────────────────────
  async function toggleLanguage() {
    if (isBusy) return;
    const btn = document.getElementById('lang-switcher');
    isBusy = true;
    btn.classList.add('busy');
    btn.innerHTML = `<span class="spinner"></span><span class="lang-label">...</span>`;

    if (!isEnglish) {
      // → Traducir a inglés
      await translatePage(btn);
      isEnglish = true;
      localStorage.setItem('sc_lang', 'en');
    } else {
      // → Volver a español
      restorePage();
      isEnglish = false;
      localStorage.setItem('sc_lang', 'es');
    }

    btn.classList.remove('busy');
    btn.innerHTML = `
      <span class="flag-icon">${isEnglish ? '🇪🇸' : '🇬🇧'}</span>
      <span class="lang-label">${isEnglish ? 'ES' : 'EN'}</span>
    `;
    btn.title = isEnglish ? 'Switch to Spanish' : 'Switch to English';
    isBusy = false;
  }

  // ─── INIT ────────────────────────────────────────────────────────────────────
  function init() {
    injectStyles();
    const btn = createButton();

    // Si el usuario ya había seleccionado inglés antes, traducir automáticamente
    if (isEnglish) {
      // Pequeño delay para que el DOM esté listo
      setTimeout(async () => {
        btn.classList.add('busy');
        btn.innerHTML = `<span class="spinner"></span><span class="lang-label">...</span>`;
        await translatePage(btn);
        btn.classList.remove('busy');
        btn.innerHTML = `
          <span class="flag-icon">🇪🇸</span>
          <span class="lang-label">ES</span>
        `;
        btn.title = 'Switch to Spanish';
      }, 600);
    }
  }

  // Esperar a que el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();