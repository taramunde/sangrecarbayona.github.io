document.addEventListener('DOMContentLoaded', function() {
    // Obtener la temporada de la URL y actualizar el body
    var urlParams = new URLSearchParams(window.location.search);
    var season = urlParams.get('season');
    if (!season) {
        season = '2025-26'; // Temporada por defecto
    }
    document.body.setAttribute('data-season', season);
    var seasonButton = document.getElementById('season-button');
    var seasonContainer = document.getElementById('season-container');
    var closeButton = document.getElementById('close-button');

    // Función para alternar clases (compatible con navegadores antiguos)
    function toggleClass(element, className) {
        if (element.classList) {
            element.classList.toggle(className);
        } else {
            // Para IE9 o navegadores muy antiguos
            var classes = element.className.split(' ');
            var index = classes.indexOf(className);
            if (index >= 0) {
                classes.splice(index, 1);
            } else {
                classes.push(className);
            }
            element.className = classes.join(' ');
        }
    }

    // Función para añadir clase
    function addClass(element, className) {
        if (element.classList) {
            element.classList.add(className);
        } else if (!element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))) {
            element.className += ' ' + className;
        }
    }

    // Función para quitar clase
    function removeClass(element, className) {
        if (element.classList) {
            element.classList.remove(className);
        } else {
            element.className = element.className.replace(new RegExp('(\\s|^)' + className + '(\\s|$)'), ' ').trim();
        }
    }

    if (seasonButton && seasonContainer && closeButton) {
        seasonButton.addEventListener('click', function() {
            var isOpen = seasonContainer.className.indexOf('open') !== -1;
            if (isOpen) {
                removeClass(seasonContainer, 'open');
                removeClass(closeButton, 'open');
                seasonButton.setAttribute('aria-expanded', 'false');
            } else {
                addClass(seasonContainer, 'open');
                addClass(closeButton, 'open');
                seasonButton.setAttribute('aria-expanded', 'true');
            }
        });

        closeButton.addEventListener('click', function() {
            removeClass(seasonContainer, 'open');
            removeClass(closeButton, 'open');
            seasonButton.setAttribute('aria-expanded', 'false');
        });
    }
});
