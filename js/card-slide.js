// js/card-slide.js
document.addEventListener('DOMContentLoaded', function() {
    
    // Delegación de eventos: funciona para tarjetas que ya están y las que vendrán
    document.addEventListener('click', function(e) {
        
        // Si el click es en el botón de la ficha, dejamos que el enlace funcione normal
        if (e.target.closest('.link-button')) return;

        // Buscamos si el click fue en una tarjeta
        const card = e.target.closest('.card');

        if (card) {
            // Evitamos comportamientos extraños
            e.preventDefault();
            
            // Si la tarjeta ya está girada, la devolvemos. Si no, la giramos.
            card.classList.toggle('flipped');

            // Opcional: Cerrar las demás tarjetas al abrir una nueva
            document.querySelectorAll('.card.flipped').forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('flipped');
                }
            });
        } else {
            // Si hacemos click fuera de cualquier tarjeta, cerramos todas
            document.querySelectorAll('.card.flipped').forEach(openCard => {
                openCard.classList.remove('flipped');
            });
        }
    });
});