/* js/crucigrama.js */

document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.cw-item');
    const btnCheck = document.getElementById('btnCheck');
    const statusMsg = document.getElementById('statusMessage');

    // 1. Navegación automática (Saltar al siguiente al escribir)
    inputs.forEach((input, index) => {
        input.addEventListener('input', function() {
            // Convertir a mayúsculas
            this.value = this.value.toUpperCase();
            
            // Si hay letra, pasar al siguiente input
            if (this.value.length === 1) {
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            }
        });

        // Borrar y volver atrás con Backspace
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' && this.value.length === 0) {
                if (index > 0) {
                    inputs[index - 1].focus();
                }
            }
            // Flechas de dirección (opcional pero útil)
            else if (e.key === 'ArrowRight' && index < inputs.length - 1) inputs[index+1].focus();
            else if (e.key === 'ArrowLeft' && index > 0) inputs[index-1].focus();
        });
    });

    // 2. Función de Comprobar
    btnCheck.addEventListener('click', () => {
        let errors = 0;
        let empty = 0;

        inputs.forEach(input => {
            const userVal = input.value.toUpperCase();
            const correctVal = input.getAttribute('data-ans');

            // Resetear clases
            input.classList.remove('correct', 'wrong');

            if (userVal === '') {
                empty++;
            } else if (userVal === correctVal) {
                input.classList.add('correct');
            } else {
                input.classList.add('wrong');
                errors++;
            }
        });

        // Mensajes de estado
        if (empty === inputs.length) {
            statusMsg.textContent = "Escribe algo antes de comprobar.";
            statusMsg.style.color = "orange";
        } else if (errors === 0 && empty === 0) {
            statusMsg.textContent = "¡ENHORABUENA CARBAYÓN! TODO CORRECTO.";
            statusMsg.style.color = "green";
            // Efecto de victoria (opcional)
            btnCheck.textContent = "¡VICTORIA!";
            btnCheck.style.backgroundColor = "#28a745";
        } else {
            statusMsg.textContent = `Tienes ${errors} errores y te faltan ${empty} letras.`;
            statusMsg.style.color = "red";
        }
    });
});
