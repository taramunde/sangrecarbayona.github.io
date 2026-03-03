// js/translate.js - VERSIÓN ULTRA-DINÁMICA 2026
let currentLang = 'es';

function switchLanguage(lang) {
    currentLang = lang;

    // Actualizar banderas visuales
    document.querySelectorAll('.lang-flag').forEach(f => {
        f.classList.toggle('active', f.id === `lang-${lang}`);
    });

    // Trigger Google
    const combo = document.querySelector('.goog-te-combo');
    if (combo) {
        combo.value = lang;
        combo.dispatchEvent(new Event('change'));
    } else {
        document.cookie = `googtrans=/es/${lang}; path=/; max-age=31536000`;
        setTimeout(() => location.reload(), 400);
    }

    localStorage.setItem('preferredLanguage', lang);
}

// Retraducción FUERTE para contenido dinámico
window.forceRetranslate = function(delay = 100) {
    if (currentLang === 'es') return;
    setTimeout(() => {
        const combo = document.querySelector('.goog-te-combo');
        if (combo) {
            combo.value = currentLang;
            combo.dispatchEvent(new Event('change'));
        }
    }, delay);
};

// Observador MUTATION OBSERVER AGRESIVO (captura TODO lo que se añada)
function initObserver() {
    const observer = new MutationObserver(() => {
        if (currentLang !== 'es') {
            window.forceRetranslate(80);
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: false
    });
}

// Init
window.addEventListener('load', () => {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang === 'en') {
        setTimeout(() => switchLanguage('en'), 1300);
    }
    initObserver();

    // Extra seguridad: reintento cada 2 segundos si hay contenido nuevo
    setInterval(() => {
        if (currentLang !== 'es') window.forceRetranslate(50);
    }, 2000);
});