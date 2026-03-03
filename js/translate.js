// js/translate.js - VERSIÓN FINAL ANTI-FLICKERING + SIN NADA DE GOOGLE
let currentLang = 'es';
let debounceTimer = null;

function switchLanguage(lang) {
    currentLang = lang;

    // Actualizar banderas
    document.querySelectorAll('.lang-flag').forEach(f => {
        f.classList.toggle('active', f.id === `lang-${lang}`);
    });

    const combo = document.querySelector('.goog-te-combo');
    if (combo) {
        combo.value = lang;
        combo.dispatchEvent(new Event('change'));
    } else {
        document.cookie = `googtrans=/es/${lang}; path=/; max-age=31536000`;
        setTimeout(() => location.reload(), 250);
    }

    localStorage.setItem('preferredLanguage', lang);
}

// Retraducción segura con debounce (evita bucles)
window.forceRetranslate = function(delay = 350) {
    if (currentLang === 'es') return;

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        const combo = document.querySelector('.goog-te-combo');
        if (combo) {
            combo.value = currentLang;
            combo.dispatchEvent(new Event('change'));
        }
    }, delay);
};

// Observer INTELIGENTE (solo mira las zonas dinámicas, no todo el body)
function initObserver() {
    const observer = new MutationObserver(() => {
        window.forceRetranslate();
    });

    // Solo observamos las partes que realmente cambian
    const dynamicZones = [
        document.querySelector('main'),
        document.getElementById('goalscorers-container'),
        document.getElementById('calendario-container'),
        document.querySelector('.score-board'),
        document.querySelector('.cards-wrapper')
    ].filter(Boolean);

    dynamicZones.forEach(zone => {
        observer.observe(zone, { childList: true, subtree: true });
    });
}

// Inicialización
window.addEventListener('load', () => {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang === 'en') {
        setTimeout(() => switchLanguage('en'), 1300);
    }
    initObserver();
});