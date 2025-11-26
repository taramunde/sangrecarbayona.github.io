/*
 * Código JavaScript para la Funcionalidad (crucigrama.js)
 * Maneja el auto-avance del cursor y la comprobación de finalización del juego.
 *
 * NOTA: Este código requiere que jQuery esté incluido en tu HTML.
 */

$(document).ready(function() {
    // Seleccionar todos los inputs de la cuadrícula
    const $inputs = $('.crossword-board__item input');
    // Seleccionar el mensaje de éxito
    const $completeMessage = $('.crossword-complete');

    // Función 1: Mejorar la navegación (Auto-avance)
    $inputs.on('input', function() {
        // Si el input actual tiene una sola letra (ya está lleno)
        if ($(this).val().length === 1) {
            // Encuentra el índice del input actual en la colección
            const currentIndex = $inputs.index(this);
            
            // Si no es el último input, avanza el foco al siguiente
            if (currentIndex < $inputs.length - 1) {
                // Obtiene el siguiente input en la lista
                const $nextInput = $inputs.eq(currentIndex + 1);

                // Solo avanza si el siguiente no es parte de una celda negra
                if (!$nextInput.closest('.crossword-board__item--blank').length) {
                    $nextInput.focus();
                } else {
                    // Si es una celda negra, buscar el siguiente input válido
                    let nextIndex = currentIndex + 2;
                    while (nextIndex < $inputs.length) {
                        const $potentialNext = $inputs.eq(nextIndex);
                        if (!$potentialNext.closest('.crossword-board__item--blank').length) {
                            $potentialNext.focus();
                            break;
                        }
                        nextIndex++;
                    }
                }
            }
        }
        
        // Comprobar si el juego ha terminado después de cada entrada
        checkGameCompletion();
    });

    // Función 2: Comprobar la finalización del juego
    function checkGameCompletion() {
        let allValid = true;
        
        // Iterar solo sobre los inputs que no están en celdas en blanco
        $inputs.not(function() {
            return $(this).closest('.crossword-board__item--blank').length;
        }).each(function() {
            // 'this.checkValidity()' usa el atributo 'pattern' del HTML para validar
            if (!this.checkValidity()) {
                allValid = false;
                return false; // Salir del bucle 'each' si uno es inválido
            }
        });

        if (allValid) {
            $completeMessage.fadeIn(500); // Muestra el mensaje de éxito con una animación
        } else {
            $completeMessage.fadeOut(200); // Oculta si ya no está completo
        }
    }

    // Inicializar la comprobación al cargar la página por si ya estaba resuelto
    checkGameCompletion();

    // Mejorar la selección de texto al enfocarse
    $inputs.on('focus', function() {
        $(this).select();
    });
});
