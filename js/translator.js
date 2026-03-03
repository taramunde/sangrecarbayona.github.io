/**
 * translator.js — Sangre Carbayona (VERSIÓN HÍBRIDA ULTRA-ROBUSTA)
 */
(function () {
    'use strict';

    // 1. DICCIONARIO ESTÁTICO (Para que los menús y botones nunca fallen)
    const UI_DICTIONARY = {
        'Inicio': 'Home',
        'Plantilla': 'Squad',
        'Resultados': 'Results',
        'Calendario': 'Calendar',
        'Noticias': 'News',
        'Comunidad': 'Community',
        'Actualidad': 'Latest News',
        'Fichas detalladas': 'Detailed Profiles',
        'Contenido para la afición': 'Fans Content',
        'Próximo Partido': 'Next Match',
        'Último Resultado': 'Last Result',
        'Clasificación': 'Standings',
        'Goleadores': 'Top Scorers',
        'Ver más': 'See more',
        'Subir arriba': 'Scroll up',
        'Bajar abajo': 'Scroll down',
        'Días': 'Days',
        'Horas': 'Hours',
        'Minutos': 'Minutes',
        'Segundos': 'Seconds'
    };

    const MYMEMORY_EMAIL = 'taramunde1974@gmail.com'; // <--- CAMBIA ESTO
    const PROTECTED_TERMS = ['Real Oviedo', 'Tartiere', 'Cazorla', 'Sangre Carbayona', 'Carbayón', 'Asturias'];
    const SKIP_IDS = new Set(['lang-switcher', 'calendario-container', 'arena-effect-container']);

    let isEnglish = localStorage.getItem('sc_lang') === 'en';
    let originalTexts = new Map();
    let dictCache = JSON.parse(localStorage.getItem('sc_dict_cache') || '{}');
    let isBusy = false;

    // --- ESTILOS ---
    function injectStyles() {
        if (document.getElementById('translator-styles')) return;
        const s = document.createElement('style');
        s.id = 'translator-styles';
        s.textContent = `
            #lang-switcher {
                position: fixed; bottom: 130px; right: 18px; z-index: 10000;
                display: flex; flex-direction: column; align-items: center; gap: 2px;
                background: rgba(0,0,0,0.85); border: 2px solid #005599;
                border-radius: 12px; padding: 8px 12px; cursor: pointer;
                backdrop-filter: blur(8px); color: white; transition: all 0.3s;
            }
            #lang-switcher:hover { transform: scale(1.1); border-color: #fff; }
            .sc-spinner { width: 18px; height: 18px; border: 3px solid #fff3; border-top: 3px solid #fff; border-radius: 50%; animation: spin 0.8s linear infinite; }
            @keyframes spin { to { transform: rotate(360deg); } }
        `;
        document.head.appendChild(s);
    }

    // --- LÓGICA DE TRADUCCIÓN ---
    async function translateText(text) {
        const cleanText = text.trim();
        if (!cleanText || cleanText.length < 2) return text;

        // A. Prioridad 1: Diccionario Estático
        if (UI_DICTIONARY[cleanText]) return UI_DICTIONARY[cleanText];

        // B. Prioridad 2: Caché Local
        if (dictCache[cleanText]) return dictCache[cleanText];

        // C. Prioridad 3: API (Solo para lo que no conocemos)
        try {
            console.log(`📡 Consultando API para: "${cleanText.substring(0,20)}..."`);
            let url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(cleanText)}&langpair=es|en`;
            if (MYMEMORY_EMAIL !== 'tu_correo@ejemplo.com') url += `&de=${MYMEMORY_EMAIL}`;

            const res = await fetch(url);
            const data = await res.json();

            if (data.responseStatus === 200) {
                const translated = data.responseData.translatedText;
                dictCache[cleanText] = translated;
                localStorage.setItem('sc_dict_cache', JSON.stringify(dictCache));
                return translated;
            } else {
                console.error("❌ Límite de API alcanzado:", data.responseDetails);
                return text;
            }
        } catch (e) {
            return text;
        }
    }

    async function processPage(toEnglish) {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
                if (SKIP_IDS.has(node.parentElement?.id) || node.parentElement?.closest('#lang-switcher')) return NodeFilter.FILTER_REJECT;
                return NodeFilter.FILTER_ACCEPT;
            }
        });

        const nodes = [];
        let n;
        while (n = walker.nextNode()) nodes.push(n);

        if (toEnglish) {
            for (const node of nodes) {
                if (!originalTexts.has(node)) originalTexts.set(node, node.nodeValue);
                node.nodeValue = await translateText(originalTexts.get(node));
            }
        } else {
            nodes.forEach(node => {
                if (originalTexts.has(node)) node.nodeValue = originalTexts.get(node);
            });
        }
    }

    function updateButton() {
        const btn = document.getElementById('lang-switcher');
        if (!btn) return;
        btn.innerHTML = isBusy 
            ? '<div class="sc-spinner"></div>' 
            : `<span style="font-size:20px">${isEnglish ? '🇪🇸' : '🇬🇧'}</span><span style="font-size:10px; font-weight:bold">${isEnglish ? 'ES' : 'EN'}</span>`;
    }

    async function toggleLanguage() {
        if (isBusy) return;
        isBusy = true;
        updateButton();

        isEnglish = !isEnglish;
        await processPage(isEnglish);
        localStorage.setItem('sc_lang', isEnglish ? 'en' : 'es');

        isBusy = false;
        updateButton();
    }

    function init() {
        injectStyles();
        const btn = document.createElement('div');
        btn.id = 'lang-switcher';
        btn.onclick = toggleLanguage;
        document.body.appendChild(btn);
        updateButton();

        if (isEnglish) processPage(true);
    }

    if (document.readyState === 'complete') init();
    else window.addEventListener('load', init);

})();