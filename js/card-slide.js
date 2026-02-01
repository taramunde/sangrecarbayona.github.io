document.addEventListener('DOMContentLoaded', function() {
    
    // Escuchamos clicks en todo el documento para manejar elementos dinámicos
    document.addEventListener('click', function(e) {
        
        // 1. Comprobar si el click fue en el botón de enlace "Ver Ficha"
        // Si es así, no hacemos nada para dejar que el enlace funcione
        if (e.target.closest('.link-button')) {
            return;
        }

        // 2. Comprobar si el click fue dentro de una tarjeta (.card)
        const card = e.target.closest('.card');

        if (card) {
            // Si hacemos click en una tarjeta, alternamos la clase 'flipped'
            card.classList.toggle('flipped');

            // Opcional: Cerrar otras tarjetas que pudieran estar abiertas
            const allCards = document.querySelectorAll('.card.flipped');
            allCards.forEach(c => {
                if (c !== card) {
                    c.classList.remove('flipped');
                }
            });
        } else {
            // 3. Si el click fue FUERA de cualquier tarjeta, cerrar las que estén abiertas
            const flippedCards = document.querySelectorAll('.card.flipped');
            flippedCards.forEach(flippedCard => {
                flippedCard.classList.remove('flipped');
            });
        }
    });
});