document.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('.crossword-board');
    const inputs = board.querySelectorAll('input.crossword-board__item');

    // Mejora de Input: Saltar a la siguiente casilla automáticamente y mayúsculas
    inputs.forEach((input, index) => {
        input.addEventListener('input', function() {
            // Asegurar mayúsculas
            this.value = this.value.toUpperCase();
            
            // Si escribió una letra, saltar al siguiente
            if (this.value.length === 1) {
                const nextInput = inputs[index + 1];
                if (nextInput) {
                    nextInput.focus();
                }
            }
        });

        // Permitir borrar y volver atrás con Backspace
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' && this.value.length === 0) {
                const prevInput = inputs[index - 1];
                if (prevInput) {
                    prevInput.focus();
                }
            }
        });
    });

    // Detectar victoria para scroll automático
    const winMessage = document.querySelector('.crossword-complete');
    
    // Un pequeño observador para ver si el mensaje de victoria aparece (opacity 1)
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (window.getComputedStyle(winMessage).opacity === '1') {
                winMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });

    observer.observe(winMessage, { attributes: true, attributeFilter: ['style', 'class'] });
});
