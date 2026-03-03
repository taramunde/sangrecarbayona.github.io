/**
translator_v2.js — Sangre Carbayona (Mejorado)
Traductor ES <-> EN con bandera del Reino Unido.
Uso:  justo antes de </body>
*/
(function () {
    'use strict';

    // --- CONFIGURACIÓN ---
    const CACHE_KEY = 'sc_translation_cache'; // Clave para localStorage
    const MAX_CACHE_AGE = 7 * 24 * 60 * 60 * 1000; // 7 días en milisegundos
    const REQUEST_DELAY = 250; // Milisegundos de espera entre solicitudes para no saturar
    const BATCH_SIZE = 5;      // Número de textos por lote para procesar
    // --------------------

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
    const SKIP_IDS = new Set([
        'lang-switcher',        // el botón del traductor en sí
        'calendario-container', // todo el calendario interactivo
        'arena-effect-container', // efecto de partículas con texto animado
    ]);

    const TIMER_ES = ['Días','Horas','Minutos','Segundos'];
    const TIMER_EN = ['Days','Hours','Minutes','Seconds'];

    let isEnglish = localStorage.getItem('sc_lang') === 'en';
    let originalTexts = new Map(); // Mapea nodo -> texto original en español
    let translatedTexts = new Map(); // Mapea nodo -> texto traducido en inglés
    let isBusy = false;
    let timerObserver = null;

    // --- FUNCIÓN DE CACHÉ ---
    function getCache() {
        try {
            const cachedJSON = localStorage.getItem(CACHE_KEY);
            if (!cachedJSON) return {};
            const cache = JSON.parse(cachedJSON);
            const now = Date.now();
            // Limpiar entradas expiradas
            Object.keys(cache).forEach(key => {
                if (now - cache[key].timestamp > MAX_CACHE_AGE) {
                    delete cache[key];
                }
            });
            return cache;
        } catch (e) {
            console.warn("Error al leer la caché de traducción:", e);
            return {};
        }
    }

    function setCache(cache) {
        try {
            localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
        } catch (e) {
            console.warn("Error al guardar la caché de traducción:", e);
        }
    }

    function getCachedTranslation(textKey) {
        const cache = getCache();
        const entry = cache[textKey];
        if (entry && Date.now() - entry.timestamp <= MAX_CACHE_AGE) {
            return entry.translation;
        }
        return null;
    }

    function setCachedTranslation(textKey, translation) {
        const cache = getCache();
        cache[textKey] = { translation: translation, timestamp: Date.now() };
        setCache(cache);
    }
    // -----------------------

    // ─── ESTILOS ────────────────────────────────────────────────────────────────
    function injectStyles() {
        const s = document.createElement('style');
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
            #lang-switcher .spinner { display: inline-block; width: 16px; height: 16px; border: 2px solid rgba(255,255,255,0.3); border-top-color: #fff; border-radius: 50%; animation: sc-spin 0.7s linear infinite; }
            @keyframes sc-spin { to { transform: rotate(360deg); } }
            /* Mensaje de error */
            #translation-error { position: fixed; top: 10px; left: 50%; transform: translateX(-50%); background: #f44336; color: white; padding: 10px 20px; border-radius: 4px; z-index: 100000; font-family: Arial, sans-serif; }
        `;
        document.head.appendChild(s);
    }

    function showError(message) {
        // Eliminar mensaje anterior si existe
        let existingError = document.getElementById('translation-error');
        if (existingError) existingError.remove();

        const errorDiv = document.createElement('div');
        errorDiv.id = 'translation-error';
        errorDiv.textContent = message;
        document.body.appendChild(errorDiv);

        // Quitar el mensaje después de unos segundos
        setTimeout(() => {
            const err = document.getElementById('translation-error');
            if (err) err.remove();
        }, 5000);
    }

    function btnHTML() {
        return `<span class="flag-icon">${isEnglish ? '🇪🇸' : '🇬🇧'}</span> <span class="lang-label">${isEnglish ? 'ES' : 'EN'}</span>`;
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
            const re = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'); // Escapa caracteres regex
            if (re.test(result)) {
                map.push({ ph, term });
                result = result.replace(re, ph); // Usar la expresión regular compilada
            }
        });
        return { safe: result, map };
    }

    function restoreTerms(text, map) {
        let r = text;
        map.forEach(({ ph, term }) => { r = r.replace(new RegExp(ph.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), term); });
        return r;
    }

    // ─── API MYMEMORY CON RETRASO Y CACHÉ ────────────────────────────────────────────────────
    async function translateTextWithDelayAndCache(text) {
        if (!text || !text.trim()) return text;

        const cacheKey = `${isEnglish ? 'es_to_en' : 'en_to_es'}_${text}`;
        const cachedResult = getCachedTranslation(cacheKey);
        if (cachedResult) {
            console.log(`Usando caché para: ${text.substring(0, 30)}...`);
            return cachedResult;
        }

        const { safe, map } = protectTerms(text);
        const langPair = isEnglish ? 'es|en' : 'en|es'; // Si es inglés, traducir de ES a EN. Si es español, de EN a ES.

        try {
            // Aplicar retraso para respetar límites de la API
            await new Promise(resolve => setTimeout(resolve, REQUEST_DELAY));

            const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(safe)}&langpair=${langPair}`;
            const res = await fetch(url);

            if (!res.ok) {
                if (res.status === 429) {
                     throw new Error('Demasiadas solicitudes a la API de traducción. Inténtelo de nuevo más tarde.');
                }
                // Intenta obtener el cuerpo de error para más detalles
                let errorMessage = `Error HTTP ${res.status}: ${res.statusText}`;
                try {
                    const errorBody = await res.text();
                    if (errorBody) errorMessage += ` - ${errorBody}`;
                } catch (e) {
                    // Ignorar errores al leer el cuerpo del error
                }
                throw new Error(errorMessage);
            }

            const data = await res.json();
            const translatedSafe = data.responseData?.translatedText || safe;
            const finalTranslated = restoreTerms(translatedSafe, map);

            // Almacenar en caché solo si la respuesta es válida
            if (data.responseStatus === 200 && finalTranslated !== safe) {
                 setCachedTranslation(cacheKey, finalTranslated);
            }

            return finalTranslated;
        } catch (error) {
            console.error("Error en la traducción:", error.message);
            showError(`Error de traducción: ${error.message}`);
            // Devolver texto original en caso de fallo
            return text;
        }
    }


    // ─── RECOGER NODOS DE TEXTO TRADUCIBLES ─────────────────────────────────────
    function getTextNodes() {
        const nodes = [];
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
                if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
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
        console.log(`Encontrados ${nodes.length} nodos de texto.`);

        // Guardar originales (solo la primera vez) y preparar nodos a traducir
        const nodesToTranslate = [];
        nodes.forEach(n => {
            if (!originalTexts.has(n)) {
                originalTexts.set(n, n.nodeValue);
            }
            // Solo añadir al array de traducción si es diferente al guardado (significa que fue traducido antes)
            if (isEnglish && translatedTexts.has(n)) {
                 // Si ya estaba traducido, no lo volvemos a traducir aquí, sino que lo aplicamos desde la caché local
                 n.nodeValue = translatedTexts.get(n);
            } else {
                 nodesToTranslate.push(n);
            }
        });

        // Procesar nodos en lotes
        for (let i = 0; i < nodesToTranslate.length; i += BATCH_SIZE) {
            const batch = nodesToTranslate.slice(i, i + BATCH_SIZE);
            // Esperar que todas las traducciones del lote terminen
            const translations = await Promise.all(batch.map(node => translateTextWithDelayAndCache(originalTexts.get(node))));
            // Aplicar las traducciones obtenidas al DOM
            batch.forEach((node, index) => {
                node.nodeValue = translations[index];
                // Actualizar la caché local de traduccidos
                translatedTexts.set(node, translations[index]);
            });
        }
    }

    function restorePage() {
        originalTexts.forEach((orig, node) => {
            if (node.isConnected) {
                node.nodeValue = orig;
                // Actualizar la caché local de traduccidos
                translatedTexts.delete(node);
            }
        });
    }

    // ─── TIMER OBSERVER ──────────────────────────────────────────────────────────
    function fixTimerLabels() {
        const timerEl = document.getElementById('timer');
        if (!timerEl || !isEnglish) return;
        const walker = document.createTreeWalker(timerEl, NodeFilter.SHOW_TEXT, null);
        let n;
        while ((Node())) {
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
        showError(""); // Limpiar errores anteriores

        try {
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
        } catch (e) {
             console.error("Error fatal en toggleLanguage:", e);
             showError(`Error interno: ${e.message}`);
             // Restaurar estado si algo falla gravemente
             if (isEnglish) {
                 stopTimerObserver();
                 restorePage();
                 isEnglish = false;
                 localStorage.setItem('sc_lang', 'es');
             }
        } finally {
            btn.classList.remove('busy');
            btn.innerHTML = btnHTML();
            btn.title = isEnglish ? 'Cambiar a Español' : 'Switch to English';
            isBusy = false;
        }
    }

    // ─── INIT ────────────────────────────────────────────────────────────────────
    function init() {
        injectStyles();
        createButton();
        if (isEnglish) {
            console.log("Cargando en modo Inglés...");
            setTimeout(async () => {
                const btn = document.getElementById('lang-switcher');
                btn.classList.add('busy');
                btn.innerHTML = `<span class="spinner"></span><span class="lang-label">...</span>`;
                showError(""); // Limpiar errores anteriores
                try {
                    await translatePage();
                    startTimerObserver();
                } catch (e) {
                     console.error("Error inicializando traducción:", e);
                     showError(`Error al iniciar: ${e.message}`);
                     // Forzar a estado en español si falla la carga inicial
                     restorePage();
                     stopTimerObserver();
                     isEnglish = false;
                     localStorage.setItem('sc_lang', 'es');
                } finally {
                    btn.classList.remove('busy');
                    btn.innerHTML = btnHTML();
                    btn.title = isEnglish ? 'Cambiar a Español' : 'Switch to English';
                }
            }, 800); // Pequeño delay para asegurar carga del DOM
        }
    }

    // Ejecutar la inicialización cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();