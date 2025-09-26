// Espera a que el DOM cargue
document.addEventListener('DOMContentLoaded', function() {
    const playerCard = document.querySelector('.player-card');
    if (playerCard) {
        playerCard.style.opacity = 0; // Empieza invisible
        playerCard.style.transition = 'opacity 0.5s ease-in-out'; // Animación suave
        setTimeout(() => {
            playerCard.style.opacity = 1; // Aparece
        }, 100); // Pequeño delay
    }
});
