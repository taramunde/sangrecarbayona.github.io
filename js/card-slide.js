// js/card-slide.js
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const linkButtons = document.querySelectorAll('.link-button');

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
