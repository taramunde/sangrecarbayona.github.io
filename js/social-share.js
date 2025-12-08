/* js/social-share.js - VERSIÓN CORREGIDA PARA COMPARTIR ENLACES ESTÁTICOS */
document.addEventListener("DOMContentLoaded", function() {

    // 1. URL base de tu sitio web (Asegúrate de que coincida con tu carpeta raíz)
    const BASE_URL_ROOT = "https://taramunde.github.io/sangrecarbayona.github.io"; 
    
    // 2. Determinar la URL a compartir
    let urlToShare = window.location.href;
    
    // Comprobar si la URL actual es la plantilla dinámica (fichajugador.html?player=ID)
    if (urlToShare.includes('fichajugador.html') && urlToShare.includes('?player=')) {
        
        // Extraer el ID del jugador del parámetro 'player'
        const urlParams = new URLSearchParams(window.location.search);
        const playerId = urlParams.get('player');
        
        if (playerId) {
            // Construir la URL estática correcta para compartir
            // Asume que la carpeta se llama 'fichas_redes'
            urlToShare = `${BASE_URL_ROOT}/fichas_redes/${playerId}.html`;
        }
    } 
    
    const textToShare = "Mira este contenido interesante de Sangre Carbayona:";

    const btnFacebook = document.getElementById('share-facebook');
    const btnTwitter = document.getElementById('share-twitter');
    const btnWhatsapp = document.getElementById('share-whatsapp');
    const btnTelegram = document.getElementById('share-telegram');

    // Funciones de compartir
    if(btnFacebook) {
        btnFacebook.onclick = function() {
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`, '_blank');
        }
    }

    if(btnTwitter) {
        btnTwitter.onclick = function() {
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(textToShare)}&url=${encodeURIComponent(urlToShare)}`, '_blank');
        }
    }

    if(btnWhatsapp) {
        btnWhatsapp.onclick = function() {
            window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(textToShare)}%20${encodeURIComponent(urlToShare)}`, '_blank');
        }
    }

    if(btnTelegram) {
        btnTelegram.onclick = function() {
            window.open(`https://t.me/share/url?url=${encodeURIComponent(urlToShare)}&text=${encodeURIComponent(textToShare)}`, '_blank');
        }
    }
});
