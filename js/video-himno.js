document.addEventListener('DOMContentLoaded', () => {
    const himnoLink = document.querySelector('#mobile-nav a[href="#himno-container"]');
    const himnoContainer = document.getElementById('himno-container');
    const otherContainers = document.querySelectorAll('main > div:not(#himno-container)');

    if (himnoLink && himnoContainer) {
        himnoLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Oculta otros contenedores
            otherContainers.forEach(container => {
                container.classList.remove('active');
                container.style.display = 'none';
            });
            // Muestra el contenedor del himno
            himnoContainer.classList.add('active');
            himnoContainer.style.display = 'block';
            // Desplaza suavemente
            himnoContainer.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Opcional: Mostrar partículas y portada al cargar la página
    const arenaContainer = document.getElementById('arena-effect-container');
    const heroContainer = document.getElementById('hero-container');
    if (arenaContainer && heroContainer) {
        arenaContainer.style.display = 'block';
        heroContainer.style.display = 'block';
    }
});
