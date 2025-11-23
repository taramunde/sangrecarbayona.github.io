/* js/social-share.js */
document.addEventListener("DOMContentLoaded", function() {
    const urlToShare = window.location.href;
    const textToShare = "Mira este contenido interesante de Sangre Carbayona:";

    const btnFacebook = document.getElementById('share-facebook');
    const btnTwitter = document.getElementById('share-twitter');
    const btnWhatsapp = document.getElementById('share-whatsapp');
    const btnTelegram = document.getElementById('share-telegram');

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
