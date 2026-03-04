/**
 * ============================================================
 *  TRANSLATOR.JS — Sangre Carbayona
 *  Motor de traducción ES → EN
 *  Sin dependencias externas. Funciona en todas las páginas.
 * ============================================================
 *
 *  CÓMO AÑADIR NUEVAS TRADUCCIONES:
 *  Añade pares "texto español": "english text" en el objeto
 *  TRANSLATIONS de abajo. El motor es insensible a mayúsculas
 *  al buscar, pero respeta las mayúsculas del original al
 *  reemplazar.
 *
 *  PALABRAS PROTEGIDAS (no se traducen nunca):
 *  Añádelas al array PROTECTED_TERMS.
 * ============================================================
 */

(function () {
    'use strict';

    /* ----------------------------------------------------------
       1. TÉRMINOS PROTEGIDOS — jamás se tocan
    ---------------------------------------------------------- */
    const PROTECTED_TERMS = [
        // Nombre del sitio
        'Sangre Carbayona',
        // Clubs de fútbol
        'Real Oviedo', 'Sporting de Gijón', 'Sporting', 'Real Madrid',
        'FC Barcelona', 'Barcelona', 'Atlético de Madrid', 'Athletic Club',
        'Real Betis', 'Sevilla FC', 'Valencia CF', 'Villarreal CF',
        'Real Sociedad', 'Osasuna', 'Celta de Vigo', 'Deportivo de La Coruña',
        'Rayo Vallecano', 'Getafe CF', 'Elche CF', 'Levante UD',
        'Albacete', 'Cartagena', 'Burgos CF', 'Racing de Santander',
        'Mirándés', 'Eldense', 'Huesca', 'Leganés', 'Valladolid',
        'Almería', 'Zaragoza', 'Tenerife', 'Las Palmas', 'Eibar',
        'Andorra', 'Castellón', 'Córdoba', 'Ferrol', 'Oviedo',
        // Estadios y lugares
        'Tartiere', 'Buenavista', 'El Tartiere', 'Carlos Tartiere',
        'Parque del Oeste', 'Fozaneldi', 'Asturias',
        // Jugadores y personas
        'Cazorla', 'Santi Cazorla', 'Lángara', 'Isidro Lángara',
        'Mangas', 'Basiliscus', 'Frichu Yustas', 'Eduardo Muñoz',
        'Marcos Cosío', 'Valentín Fernandez',
        // Competiciones
        'La Liga', 'Segunda División', 'Segunda B', 'Primera RFEF',
        'Copa del Rey', 'LaLiga',
        // Publicaciones
        'La Nueva España', 'Delallama Editorial',
        'Los Derbis Asturianos Desde 1926',
        // Nombres propios varios
        'Oviedista', 'Oviedistas', 'Carbayona', 'Carbayones',
        'Oviesportinguistas',
    ];

    /* ----------------------------------------------------------
       2. DICCIONARIO DE TRADUCCIONES ES → EN
         Formato:  "texto en español exacto (minúsculas)": "english"
         El motor normaliza a minúsculas para comparar, pero
         preserva la capitalización original en la página.
    ---------------------------------------------------------- */
    const TRANSLATIONS = {

        /* ---- Navegación ---- */
        'inicio': 'Home',
        'plantillas': 'Squads',
        'filtro': 'Filter',
        'buscador': 'Search',
        'vídeo resúmenes': 'Video Highlights',
        'video resúmenes': 'Video Highlights',
        'clasificación': 'Standings',
        'noticias': 'News',
        'otros vídeos': 'Other Videos',
        'juegos': 'Games',
        'galería': 'Gallery',
        'derbis': 'Derbies',
        'peñas': 'Fan Clubs',
        'instalaciones': 'Facilities',
        'cómo llegar...': 'How to get there...',
        'alineaciones': 'Line-ups',

        /* ---- Hero / cabecera ---- */
        'desde 1926, con orgullo, valor y garra.': 'Since 1926, with Pride, Courage and Grit.',
        'orgullo, valor y garra': 'Pride, Courage and Grit',

        /* ---- Secciones principales ---- */
        'alineación confirmada': 'Confirmed Line-up',
        'alineación no confirmada': 'Unconfirmed Line-up',
        'siguiente partido': 'Next match',
        'tiempo para el siguiente partido': 'Time until the next match',
        'último partido': 'Last match',
        'jornada': 'Matchday',
        'goleadores': 'Top Scorers',
        'entrenador': 'Coach',
        'entrenadores': 'Coaches',
        'portero': 'Goalkeeper',
        'porteros': 'Goalkeepers',
        'defensa': 'Defender',
        'defensas': 'Defenders',
        'centrocampista': 'Midfielder',
        'centrocampistas': 'Midfielders',
        'delantero': 'Forward',
        'delanteros': 'Forwards',
        'lateral': 'Full-back',
        'lateral derecho': 'Right back',
        'lateral izquierdo': 'Left back',
        'central': 'Centre-back',
        'mediocentro': 'Central midfielder',
        'mediapunta': 'Attacking midfielder',
        'extremo': 'Winger',
        'extremo derecho': 'Right winger',
        'extremo izquierdo': 'Left winger',

        /* ---- Estadísticas jugadores ---- */
        'partidos jugados': 'Matches played',
        'goles': 'Goals',
        'gol minuto': 'Goal minute',
        'ver ficha': 'View profile',
        'partidos': 'Matches',
        'asistencias': 'Assists',
        'tarjetas amarillas': 'Yellow cards',
        'tarjetas rojas': 'Red cards',
        'sin goles': 'No goals',
        
        /* ---- Calendario — días completos (ANTES que abreviaturas) ---- */
        'lunes': 'Monday',
        'martes': 'Tuesday',
        'miércoles': 'Wednesday',
        'jueves': 'Thursday',
        'viernes': 'Friday',
        'sábado': 'Saturday',
        'domingo': 'Sunday',

        /* ---- Calendario — abreviaturas (DESPUÉS de los completos) ---- */
        'lun': 'Mon',
        'mar': 'Tue',
        'mié': 'Wed',
        'jue': 'Thu',
        'vie': 'Fri',
        'sáb': 'Sat',
        'dom': 'Sun',

        /* ---- Meses completos (ANTES de cualquier clave corta) ---- */
        'enero': 'January',
        'febrero': 'February',
        'marzo': 'March',
        'abril': 'April',
        'mayo': 'May',
        'junio': 'June',
        'julio': 'July',
        'agosto': 'August',
        'septiembre': 'September',
        'octubre': 'October',
        'noviembre': 'November',
        'diciembre': 'December',

        /* ---- Cuenta atrás / temporizador ---- */
        'días': 'days',
        'día': 'day',
        'horas': 'hours',
        'hora': 'hour',
        'minutos': 'minutes',
        'minuto': 'minute',
        'segundos': 'seconds',
        'segundo': 'second',

        /* ---- Tiempo meteorológico ---- */
        'pronóstico del tiempo': 'Weather Forecast',
        'busca otra ciudad...': 'Search another city...',
        'buscar': 'Search',
        'volver a oviedo': 'Back to Oviedo',
        'fuente': 'Source',

        /* ---- Tabla de agradecimientos ---- */
        'bibliografía': 'Bibliography',
        'enlaces externos': 'External links',
        'redes sociales': 'Social Media',
        'su historia en números': 'its history in numbers',
        'la enciclopedia del fútbol español': 'The Encyclopaedia of Spanish Football',
        'datos históricos y estadísticas': 'Historical data and statistics',
        'la web del fútbol modesto': 'The grassroots football website',
        'diario digital independiente del fútbol asturiano': 'Independent digital newspaper of Asturian football',
        'la academia del fútbol español': 'The Spanish Football Academy',
        'fotos de formaciones de equipos de fútbol y selecciones nacionales': 'Photos of football team line-ups and national teams',
        'trayectoria de jugadores': 'Player career records',
        'un paseo virtual por las equipaciones de equipos de fútbol de todos los tiempos': 'A virtual tour of football kits from all eras',
        'jugadores de la segunda b': 'Segunda B Players',
        'diario de un oviedista': 'Diary of an Oviedist',

        /* ---- Compartir en redes ---- */
        'compartir': 'Share',

        /* ---- Botones de scroll ---- */
        'subir arriba': 'Scroll to top',
        'bajar abajo': 'Scroll to bottom',

        /* ---- Textos varios del footer (adapta según tu footer.js) ---- */
        'todos los derechos reservados': 'All rights reserved',
        'aviso legal': 'Legal notice',
        'política de privacidad': 'Privacy policy',
        'contacto': 'Contact',
        'sobre nosotros': 'About us',
        'aficionados': 'Fans',
        'afición': 'Fans',
        'temporada': 'Season',

        /* ---- Mensajes de estado / loading ---- */
        'cargando...': 'Loading...',
        'error al cargar los datos': 'Error loading data',
        'sin datos disponibles': 'No data available',
        'tu navegador no soporta el elemento de video.': 'Your browser does not support the video element.',

        /* ---- Secciones de texto libre ---- */
        'desde 1926': 'Since 1926',
        'el real oviedo como nunca lo viste': 'Real Oviedo like you\'ve never seen it before',
        'juega, descubre y revive la historia': 'Play, discover and relive the history',
        'únete a la familia azul': 'Join the blue family',
        'actualidad, fichas y comunidad': 'News, profiles and community',
        'toda la actualidad': 'All the latest news',
        'alineaciones, fichas detalladas de jugadores, resultados y el mejor contenido para la afición carbayona': 'Line-ups, detailed player profiles, results and the best content for the Carbayona fans',
    };

    /* ----------------------------------------------------------
       3. ESTADO
    ---------------------------------------------------------- */
    let isEnglish = false;

    // Almacén de los nodos de texto originales: Map<TextNode, string>
    const originalTexts = new Map();

    /* ----------------------------------------------------------
       4. UTILIDADES
    ---------------------------------------------------------- */

    /** Convierte texto a minúsculas sin acentos para comparar */
    function normalize(str) {
        return str.toLowerCase().trim();
    }

    /** Busca traducción insensible a mayúsculas/acentos */
    function findTranslation(text) {
        const key = normalize(text);
        for (const [es, en] of Object.entries(TRANSLATIONS)) {
            if (normalize(es) === key) return en;
        }
        return null;
    }

    /**
     * ¿El texto contiene algún término protegido?
     * Si el texto ES exactamente un término protegido, no lo traducimos.
     */
    function isProtected(text) {
        const t = text.trim();
        return PROTECTED_TERMS.some(term =>
            t.toLowerCase() === term.toLowerCase()
        );
    }

    /**
     * ¿El nodo de texto está dentro de un elemento con
     * class="notranslate" o atributo translate="no"?
     */
    function isInNoTranslateBlock(node) {
        let el = node.parentElement;
        while (el) {
            if (
                el.classList.contains('notranslate') ||
                el.getAttribute('translate') === 'no'
            ) return true;
            el = el.parentElement;
        }
        return false;
    }

    /* ----------------------------------------------------------
       5. RECOPILAR TODOS LOS NODOS DE TEXTO DE LA PÁGINA
    ---------------------------------------------------------- */
    function collectTextNodes() {
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode(node) {
                    // Ignorar scripts, estilos, etc.
                    const parent = node.parentElement;
                    if (!parent) return NodeFilter.FILTER_REJECT;
                    const tag = parent.tagName.toUpperCase();
                    if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEMPLATE'].includes(tag))
                        return NodeFilter.FILTER_REJECT;
                    // Ignorar bloques marcados como no traducibles
                    if (isInNoTranslateBlock(node))
                        return NodeFilter.FILTER_REJECT;
                    // Ignorar texto vacío
                    if (node.nodeValue.trim() === '')
                        return NodeFilter.FILTER_REJECT;
                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );

        const nodes = [];
        let node;
        while ((node = walker.nextNode())) nodes.push(node);
        return nodes;
    }

    /* ----------------------------------------------------------
       6. TRADUCIR / RESTAURAR
    ---------------------------------------------------------- */

    /**
     * Traduce un segmento de texto buscando todas las frases
     * del diccionario (de mayor a menor longitud para que
     * frases largas tengan prioridad).
     */
    function translateSegment(text) {
        // Ordenar claves por longitud descendente (frases largas primero)
        const keys = Object.keys(TRANSLATIONS).sort((a, b) => b.length - a.length);
        let result = text;

        for (const key of keys) {
            // Escapar caracteres especiales de regex
            const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

            // Lookahead/lookbehind: solo traduce si la coincidencia NO está
            // pegada a otra letra (evita "Vie" dentro de "View", etc.)
            const regex = new RegExp(
                '(?<![\\wáéíóúàèìòùäëïöüñ])' + escaped + '(?![\\wáéíóúàèìòùäëïöüñ])',
                'gi'
            );

            result = result.replace(regex, (match) => {
                if (isProtected(match)) return match;
                return TRANSLATIONS[key];
            });
        }
        return result;
    }

    function translatePage() {
        const nodes = collectTextNodes();
        for (const node of nodes) {
            const original = node.nodeValue;
            if (isProtected(original)) continue;
            const translated = translateSegment(original);
            if (translated !== original) {
                originalTexts.set(node, original);
                node.nodeValue = translated;
            }
        }

        // También traducir placeholders de inputs
        document.querySelectorAll('input[placeholder]').forEach(input => {
            if (isInNoTranslateBlock(input)) return;
            const orig = input.getAttribute('placeholder');
            const tr = findTranslation(orig);
            if (tr) {
                input._origPlaceholder = orig;
                input.setAttribute('placeholder', tr);
            }
        });

        // Traducir aria-labels de botones de scroll
        document.querySelectorAll('[aria-label]').forEach(el => {
            if (isInNoTranslateBlock(el)) return;
            const orig = el.getAttribute('aria-label');
            const tr = findTranslation(orig);
            if (tr) {
                el._origAriaLabel = orig;
                el.setAttribute('aria-label', tr);
            }
        });

        // Cambiar lang del html
        document.documentElement.lang = 'en';
    }

    function restorePage() {
        for (const [node, original] of originalTexts.entries()) {
            node.nodeValue = original;
        }
        originalTexts.clear();

        // Restaurar placeholders
        document.querySelectorAll('input[placeholder]').forEach(input => {
            if (input._origPlaceholder) {
                input.setAttribute('placeholder', input._origPlaceholder);
                delete input._origPlaceholder;
            }
        });

        // Restaurar aria-labels
        document.querySelectorAll('[aria-label]').forEach(el => {
            if (el._origAriaLabel) {
                el.setAttribute('aria-label', el._origAriaLabel);
                delete el._origAriaLabel;
            }
        });

        document.documentElement.lang = 'es';
    }

    /* ----------------------------------------------------------
       7. OBSERVER: re-traducir nodos nuevos (carga dinámica)
    ---------------------------------------------------------- */
    let mutationObserver = null;

    function startObserver() {
        if (mutationObserver) return;
        mutationObserver = new MutationObserver((mutations) => {
            if (!isEnglish) return;
            for (const mutation of mutations) {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE) {
                        if (isInNoTranslateBlock(node)) return;
                        const original = node.nodeValue;
                        if (!original.trim() || isProtected(original)) return;
                        const translated = translateSegment(original);
                        if (translated !== original) {
                            originalTexts.set(node, original);
                            node.nodeValue = translated;
                        }
                    } else if (node.nodeType === Node.ELEMENT_NODE) {
                        // Traducir todos los texto-nodos dentro del nuevo elemento
                        const walker = document.createTreeWalker(
                            node, NodeFilter.SHOW_TEXT
                        );
                        let child;
                        while ((child = walker.nextNode())) {
                            if (isInNoTranslateBlock(child)) continue;
                            const orig = child.nodeValue;
                            if (!orig.trim() || isProtected(orig)) continue;
                            const tr = translateSegment(orig);
                            if (tr !== orig) {
                                originalTexts.set(child, orig);
                                child.nodeValue = tr;
                            }
                        }
                    }
                });
            }
        });
        mutationObserver.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    function stopObserver() {
        if (mutationObserver) {
            mutationObserver.disconnect();
            mutationObserver = null;
        }
    }

    /* ----------------------------------------------------------
       8. CREAR EL BOTÓN EN EL DOM
    ---------------------------------------------------------- */
    function createSwitcher() {
        const container = document.createElement('div');
        container.id = 'language-switcher';

        const btn = document.createElement('button');
        btn.className = 'lang-btn';
        btn.id = 'lang-toggle-btn';
        btn.setAttribute('data-tooltip', 'Switch to English');
        btn.setAttribute('aria-label', 'Switch language');
        btn.setAttribute('title', 'Switch to English / Volver al español');

        // Bandera del Reino Unido (emoji SVG inline para máxima compatibilidad)
        const imgES = document.createElement('img');
        imgES.src = 'https://flagcdn.com/w40/gb.png';
        imgES.alt = 'English';
        imgES.id = 'lang-flag';

        btn.appendChild(imgES);

        const label = document.createElement('span');
        label.className = 'lang-label';
        label.id = 'lang-label-text';
        label.textContent = 'EN';

        container.appendChild(btn);
        container.appendChild(label);
        document.body.appendChild(container);

        /* -- Evento toggle -- */
        btn.addEventListener('click', () => {
            isEnglish = !isEnglish;

            if (isEnglish) {
                translatePage();
                startObserver();
                btn.classList.add('active-translation');
                label.textContent = 'ES';
                imgES.src = 'https://flagcdn.com/w40/es.png';
                imgES.alt = 'Español';
                btn.setAttribute('data-tooltip', 'Volver al español');
            } else {
                stopObserver();
                restorePage();
                btn.classList.remove('active-translation');
                label.textContent = 'EN';
                imgES.src = 'https://flagcdn.com/w40/gb.png';
                imgES.alt = 'English';
                btn.setAttribute('data-tooltip', 'Switch to English');
            }
        });
    }

    /* ----------------------------------------------------------
       9. INIT
    ---------------------------------------------------------- */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createSwitcher);
    } else {
        createSwitcher();
    }

})();
