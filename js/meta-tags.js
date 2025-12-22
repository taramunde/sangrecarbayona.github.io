// Añade esto al INICIO de tu archivo player-data.js o crea un nuevo archivo meta-tags.js

// Función para generar meta tags dinámicos
function generateMetaTags() {
    // Obtener el parámetro del jugador de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const playerKey = urlParams.get('player');
    
    if (!playerKey || !playersData[playerKey]) {
        return; // Si no hay jugador válido, salir
    }
    
    const player = playersData[playerKey];
    
    // Crear la información para compartir
    const shareTitle = `${player.name} - Real Oviedo`;
    const shareDescription = `${player.footballName} | ${player.position} | Real Oviedo`;
    const shareImage = player.image; // URL de la imagen del jugador
    const shareUrl = window.location.href; // URL actual
    
    // Eliminar meta tags existentes si los hay
    removeExistingMetaTags();
    
    // Crear y añadir nuevos meta tags
    addMetaTag('og:title', shareTitle);
    addMetaTag('og:description', shareDescription);
    addMetaTag('og:image', shareImage);
    addMetaTag('og:url', shareUrl);
    addMetaTag('og:type', 'profile');
    addMetaTag('og:site_name', 'Sangre Carbayona');
    
    // Twitter Cards
    addMetaTag('twitter:card', 'summary_large_image', 'name');
    addMetaTag('twitter:title', shareTitle, 'name');
    addMetaTag('twitter:description', shareDescription, 'name');
    addMetaTag('twitter:image', shareImage, 'name');
    
    // Meta tags adicionales
    document.title = shareTitle;
    addMetaTag('description', shareDescription, 'name');
}

// Función auxiliar para añadir meta tags
function addMetaTag(property, content, attributeType = 'property') {
    const meta = document.createElement('meta');
    meta.setAttribute(attributeType, property);
    meta.setAttribute('content', content);
    document.head.appendChild(meta);
}

// Función para eliminar meta tags existentes
function removeExistingMetaTags() {
    const metaTags = [
        'og:title', 'og:description', 'og:image', 'og:url', 'og:type', 'og:site_name',
        'twitter:card', 'twitter:title', 'twitter:description', 'twitter:image'
    ];
    
    metaTags.forEach(tag => {
        // Eliminar por property
        let elements = document.querySelectorAll(`meta[property="${tag}"]`);
        elements.forEach(el => el.remove());
        
        // Eliminar por name (para Twitter)
        elements = document.querySelectorAll(`meta[name="${tag}"]`);
        elements.forEach(el => el.remove());
    });
}

// Ejecutar cuando se cargue el DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', generateMetaTags);
} else {
    generateMetaTags();
}
