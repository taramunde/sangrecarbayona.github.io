// js/plantilla-manager.js - Gestiona la temporada dinámica en plantilla.html

(function() {
    'use strict';
    
    // Función para obtener parámetros de la URL
    function getURLParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }
    
    // Función para establecer la temporada en el body
    function setSeasonInBody(season) {
        document.body.setAttribute('data-season', season);
    }
    
    // Función para actualizar el título de la temporada
    function updateSeasonTitle(season) {
        const title = document.querySelector('.plantilla-title h1');
        if (title) {
            // Convertir formato: "2025-26" -> "2025/26"
            const displaySeason = season.replace('-', '/');
            title.textContent = displaySeason;
        }
    }
    
    // Función para actualizar el botón selector de temporada
    function updateSeasonButton(season) {
        const button = document.getElementById('season-button');
        if (button) {
            const displaySeason = season.replace('-', '/');
            const arrow = button.querySelector('.arrow');
            const arrowHTML = arrow ? arrow.outerHTML : '<span class="arrow">▼</span>';
            button.innerHTML = displaySeason + ' ' + arrowHTML;
        }
    }
    
    // Función para actualizar los enlaces del selector de temporadas
    function updateSeasonLinks() {
        const seasonLinks = document.querySelectorAll('.season-list a');
        seasonLinks.forEach(link => {
            const href = link.getAttribute('href');
            // Si el enlace no tiene parámetros, añadirlos
            if (href && !href.includes('?season=')) {
                // Extraer la temporada del texto del enlace o del href original
                const seasonText = link.textContent.trim(); // Ej: "2025/2026"
                const season = seasonText.replace('/', '-').substring(0, 7); // "2025-26"
                link.setAttribute('href', 'plantilla.html?season=' + season);
            }
        });
    }
    
    // Función principal de inicialización
    function initPlantillaManager() {
        // Obtener la temporada de la URL o usar la actual por defecto
        let season = getURLParameter('season');
        
        // Si no hay parámetro, usar la temporada actual (2025-26)
        if (!season) {
            season = '2025-26';
        }
        
        // Establecer la temporada en el body
        setSeasonInBody(season);
        
        // Actualizar el título
        updateSeasonTitle(season);
        
        // Actualizar el botón selector
        updateSeasonButton(season);
        
        // Actualizar los enlaces del selector
        updateSeasonLinks();
        
        console.log('Plantilla Manager inicializado - Temporada:', season);
    }
    
    // Ejecutar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPlantillaManager);
    } else {
        initPlantillaManager();
    }
})();
