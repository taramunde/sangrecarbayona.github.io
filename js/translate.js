// js/translate.js - VERSIÓN FINAL SIN FLICKERING (03 marzo 2026)
let currentLang = 'es';
let debounceTimer = null;
let isTranslating = false;

function switchLanguage(lang) {
    if (isTranslating) return;
    isTranslating = true;
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
        setTimeout(() => location.reload(), 300);
    }

    localStorage.setItem('preferredLanguage', lang);

    // Liberar flag después de la traducción
    setTimeout(() => { isTranslating = false; }, 1200);
}

// Retraducción segura (solo se llama desde tus scripts dinámicos)
window.forceRetranslate = function(delay = 400) {
    if (currentLang === 'es' || isTranslating) return;

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        isTranslating = true;
        const combo = document.querySelector('.goog-te-combo');
        if (combo) {
            combo.value = currentLang;
            combo.dispatchEvent(new Event('change'));
        }
        setTimeout(() => { isTranslating = false; }, 800);
    }, delay);
};

// Inicialización
window.addEventListener('load', () => {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang === 'en') {
        setTimeout(() => switchLanguage('en'), 1400);
    }
});