// JavaScript para la sección de Jornada
document.addEventListener('DOMContentLoaded', function() {
    const jornadaText = document.querySelector('.jornada-text');
    
    if (jornadaText) {
        // Opcional: Agregar eventos o funcionalidad adicional
        jornadaText.addEventListener('click', function() {
            // Puedes agregar funcionalidad aquí si quieres que sea clicable
            console.log('Jornada text clicked');
        });
        
        // Opcional: Pausar animación al hover
        jornadaText.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        jornadaText.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    }
});
