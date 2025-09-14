// js/card-slide.js
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const linkButtons = document.querySelectorAll('.link-button');

    console.log('Tarjetas encontradas:', cards.length); // Depuración

    if (cards.length === 0) {
        console.warn('No se encontraron tarjetas con clase .card');
        return;
    }

    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('flipped');
        });
    });

    document.addEventListener('click', function(e) {
        cards.forEach(card => {
            if (!card.contains(e.target) && card.classList.contains('flipped')) {
                card.classList.remove('flipped');
            }
        });
    });

    linkButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });
});
