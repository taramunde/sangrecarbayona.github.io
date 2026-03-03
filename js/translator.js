/**
 * translator.js — Sangre Carbayona (MÉTODO GOOGLE RELIABLE)
 */
(function() {
    'use strict';

    const PROTECTED_TERMS = ['Real Oviedo', 'Sangre Carbayona', 'Carlos Tartiere', 'Cazorla', 'Carbayón'];
    let isEnglish = localStorage.getItem('sc_lang') === 'en';

    // 1. Inyectar el script oficial de Google en el head
    function loadGoogleTranslate() {
        if (!document.getElementById('google_translate_script')) {
            const script = document.createElement('script');
            script.id = 'google_translate_script';
            script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            document.head.appendChild(script);
        }
    }

    // 2. Configuración de Google (se ejecuta cuando carga el script)
    window.googleTranslateElementInit = function() {
        new google.translate.TranslateElement({
            pageLanguage: 'es',
            includedLanguages: 'en,es',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
        }, 'google_translate_element');
        
        // Si el usuario ya lo tenía en inglés, activarlo al cargar
        if (isEnglish) {
            setTimeout(applyGoogleTranslation, 1000);
        }
    };

    // 3. Proteger términos clave para que NO se traduzcan
    function protectTerms() {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let node;
        while (node = walker.nextNode()) {
            let text = node.nodeValue;
            PROTECTED_TERMS.forEach(term => {
                if (text.includes(term) && node.parentElement && !node.parentElement.classList.contains('notranslate')) {
                    const span = document.createElement('span');
                    span.classList.add('notranslate'); // Clase que Google respeta
                    span.innerText = term;
                    // Aquí habría que hacer un reemplazo más complejo, 
                    // pero para simplificar, marcamos el contenedor:
                    node.parentElement.classList.add('notranslate');
                }
            });
        }
    }

    // 4. Activar/Desactivar traducción
    function applyGoogleTranslation() {
        const select = document.querySelector('.goog-te-combo');
        if (select) {
            select.value = isEnglish ? 'en' : 'es';
            select.dispatchEvent(new Event('change'));
        }
    }

    function toggleLanguage() {
        isEnglish = !isEnglish;
        localStorage.setItem('sc_lang', isEnglish ? 'en' : 'es');
        
        // Si no está cargado el combo de Google, lo intentamos de nuevo
        const select = document.querySelector('.goog-te-combo');
        if (!select) {
            location.reload(); // Recarga para asegurar inicialización
            return;
        }

        applyGoogleTranslation();
        updateButton();
    }

    // 5. Crear UI
    function updateButton() {
        const btn = document.getElementById('lang-switcher');
        if (btn) {
            btn.innerHTML = `<span style="font-size:20px">${isEnglish ? '🇪🇸' : '🇬🇧'}</span>
                             <span style="font-size:10px; font-weight:bold">${isEnglish ? 'ES' : 'EN'}</span>`;
        }
    }

    function init() {
        // Crear el contenedor oculto que necesita Google
        const hiddenDiv = document.createElement('div');
        hiddenDiv.id = 'google_translate_element';
        hiddenDiv.style.display = 'none';
        document.body.appendChild(hiddenDiv);

        // Crear botón
        const btn = document.createElement('div');
        btn.id = 'lang-switcher';
        btn.style.cssText = "position:fixed; bottom:130px; right:18px; z-index:10000; background:rgba(0,0,0,0.8); border:2px solid #005599; border-radius:12px; padding:8px 12px; cursor:pointer; color:white; display:flex; flex-direction:column; align-items:center;";
        btn.onclick = toggleLanguage;
        document.body.appendChild(btn);

        protectTerms();
        loadGoogleTranslate();
        updateButton();
        
        // Ocultar la barra superior fea de Google
        const style = document.createElement('style');
        style.innerHTML = `
            .goog-te-banner-frame { display: none !important; }
            body { top: 0 !important; }
            .goog-te-balloon-frame { display: none !important; }
            #goog-gt-tt { display: none !important; }
        `;
        document.head.appendChild(style);
    }

    window.addEventListener('load', init);
})();