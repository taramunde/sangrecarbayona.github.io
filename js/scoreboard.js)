// js/scoreboard.js
document.addEventListener('DOMContentLoaded', function () {
    // Código para futuras interacciones (ej. actualizar marcador vía API)
    const scoreBoard = document.querySelector('.score-board');
    if (scoreBoard) {
        // Ejemplo: Añadir clase para resaltar en hover (funciona en IE8)
        scoreBoard.addEventListener('mouseover', function () {
            scoreBoard.style.opacity = '0.9';
        });
        scoreBoard.addEventListener('mouseout', function () {
            scoreBoard.style.opacity = '1';
        });
    }

    // Fallback para IE8: Asegura centrado
    if (navigator.userAgent.indexOf('MSIE 8.0') !== -1) {
        const timeElement = document.querySelector('.score-board .time');
        if (timeElement) {
            timeElement.style.position = 'absolute';
            timeElement.style.left = '50%';
            timeElement.style.marginLeft = '-135px';
        }
    }
});
