document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById('intro-overlay');
    
    // Si el overlay no existe en la página, detenemos el script
    if (!overlay) return;
    
    // Verificamos si el usuario ya vio la animación en esta sesión
    if (!sessionStorage.getItem("introPlayed")) {
        
        // Deshabilitamos el scroll durante la animación
        document.body.style.overflow = 'hidden';

        setTimeout(() => {
            // Añadimos la clase para desvanecer
            overlay.classList.add('intro-hidden');
            
            // Devolvemos el scroll
            document.body.style.overflow = ''; 
            
            // Guardamos el registro para esta sesión
            sessionStorage.setItem("introPlayed", "true");
            
            // Eliminamos el elemento del DOM tras desvanecerse (800ms es el tiempo de la transición CSS)
            setTimeout(() => overlay.remove(), 800);
            
        }, 2800); 
        
    } else {
        // Si ya ha entrado en esta sesión, lo ocultamos y eliminamos inmediatamente
        overlay.style.display = 'none';
        overlay.remove();
    }
});