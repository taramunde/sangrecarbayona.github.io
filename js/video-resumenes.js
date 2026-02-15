document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('video-grid');
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    // Elementos del Modal
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('modal-iframe');
    const modalTitle = document.getElementById('modal-title');
    const closeBtn = document.querySelector('.close-modal');

    // Configuración
    const VIDEOS_PER_PAGE = 6;
    let currentPage = 0;

    // Función para crear la tarjeta HTML de un vídeo
    function createVideoCard(video) {
        const card = document.createElement('div');
        card.className = 'video-card';
        
        // Obtenemos la miniatura de alta calidad de YouTube automáticamente
        const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

        card.innerHTML = `
            <img src="${thumbnailUrl}" alt="${video.title}" loading="lazy">
            <div class="play-icon"></div>
            <div class="video-info">
                <h3>${video.title}</h3>
            </div>
        `;

        // Evento Click para abrir Modal
        card.addEventListener('click', () => {
            openModal(video.id, video.title);
        });

        return card;
    }

    // Función para abrir el Modal
    function openModal(videoId, title) {
        // Usamos autoplay=1 para que empiece solo al abrir
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
        modalTitle.textContent = title;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Bloquear scroll de fondo
    }

    // Función para cerrar el Modal
    function closeModal() {
        modal.style.display = 'none';
        iframe.src = ''; // Parar vídeo
        document.body.style.overflow = 'auto'; // Restaurar scroll
    }

    // Cargar vídeos (Paginación)
    function loadVideos() {
        const start = currentPage * VIDEOS_PER_PAGE;
        const end = start + VIDEOS_PER_PAGE;
        const videosToLoad = videosDB.slice(start, end);

        videosToLoad.forEach(video => {
            const card = createVideoCard(video);
            gridContainer.appendChild(card);
        });

        currentPage++;

        // Ocultar botón si no hay más vídeos
        if (end >= videosDB.length) {
            loadMoreBtn.style.display = 'none';
        }
    }

    // Event Listeners
    loadMoreBtn.addEventListener('click', loadVideos);
    closeBtn.addEventListener('click', closeModal);
    
    // Cerrar al hacer clic fuera del vídeo
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Carga inicial
    loadVideos();
});