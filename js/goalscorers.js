// js/goalscorers.js
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el contenedor de goleadores
    const goalscorers = document.querySelector('.goalscorers');
    if (goalscorers) {
        // Efecto hover suave (compatible con IE8)
        const goalscorersText = document.querySelector('.goalscorers-text');
        goalscorersText.addEventListener('mouseover', function () {
            goalscorers.style.opacity = '0.9';
        });
        goalscorersText.addEventListener('mouseout', function () {
            goalscorers.style.opacity = '1';
        });
    }

    // Fallback para IE8: Asegura centrado
    if (navigator.userAgent.indexOf('MSIE 8.0') !== -1) {
        goalscorers.style.width = '90%';
        goalscorers.style.marginLeft = 'auto';
        goalscorers.style.marginRight = 'auto';
        goalscorers.style.left = '0';
    }
});
