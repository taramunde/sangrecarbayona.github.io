document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('video-grid');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('modal-iframe');
    const modalTitle = document.getElementById('modal-title');
    const closeBtn = document.querySelector('.close-modal');

    const VIDEOS_PER_PAGE = 6;
    let currentPage = 0;

    // --- FUNCIÓN MAESTRA DE COMPARTIR ---
    function shareVideo(platform, videoId, title) {
        const url = `https://www.youtube.com/watch?v=${videoId}`;
        const text = `Mira este resumen del Real Oviedo: ${title}`;
        const encodedUrl = encodeURIComponent(url);
        const encodedText = encodeURIComponent(text);

        const links = {
            fb: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            tw: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
            wa: `https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`,
            tg: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`
        };

        window.open(links[platform], '_blank');
    }

    // --- CREAR TARJETA DE VÍDEO ---
    function createVideoCard(video) {
        const card = document.createElement('div');
        card.className = 'video-card';
        const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

        card.innerHTML = `
            <div class="video-thumb-container">
                <img src="${thumbnailUrl}" alt="${video.title}" loading="lazy">
                <div class="play-icon"></div>
            </div>
            <div class="video-info">
                <h3>${video.title}</h3>
            </div>
            <div class="card-share-container">
                <div class="card-share-btn" data-type="fb"><img src="https://i.postimg.cc/mrz313vR/facebook.png"></div>
                <div class="card-share-btn" data-type="tw"><img src="https://i.postimg.cc/gcLCLWSh/icono-twitter-1.png"></div>
                <div class="card-share-btn" data-type="wa"><img src="https://i.postimg.cc/mk9JvYzj/icono-whatsapp-1.png"></div>
                <div class="card-share-btn" data-type="tg"><img src="https://i.postimg.cc/1XKB9pTS/telegrama.png"></div>
            </div>
        `;

        // Click en imagen o título abre el vídeo
        const openElements = card.querySelectorAll('.video-thumb-container, h3');
        openElements.forEach(el => el.onclick = () => openModal(video.id, video.title));

        // Click en botones de compartir de la tarjeta
        card.querySelectorAll('.card-share-btn').forEach(btn => {
            btn.onclick = (e) => {
                e.stopPropagation();
                shareVideo(btn.dataset.type, video.id, video.title);
            };
        });

        return card;
    }

    // --- ABRIR MODAL ---
    function openModal(videoId, title) {
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
        modalTitle.textContent = title;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        // Inyectamos los botones de compartir dinámicamente en el modal
        const modalShareHtml = `
            <div class="modal-share-section">
                <h4>Compartir este partido</h4>
                <div class="social-icon-list">
                    <div class="card-share-btn" onclick="window.shareFromModal('fb', '${videoId}', '${title}')"><img src="https://i.postimg.cc/mrz313vR/facebook.png"></div>
                    <div class="card-share-btn" onclick="window.shareFromModal('tw', '${videoId}', '${title}')"><img src="https://i.postimg.cc/gcLCLWSh/icono-twitter-1.png"></div>
                    <div class="card-share-btn" onclick="window.shareFromModal('wa', '${videoId}', '${title}')"><img src="https://i.postimg.cc/mk9JvYzj/icono-whatsapp-1.png"></div>
                    <div class="card-share-btn" onclick="window.shareFromModal('tg', '${videoId}', '${title}')"><img src="https://i.postimg.cc/1XKB9pTS/telegrama.png"></div>
                </div>
            </div>
        `;
        
        // Evitamos duplicar la sección de compartir si ya existe
        const existingShare = modal.querySelector('.modal-share-section');
        if (existingShare) existingShare.remove();
        modal.querySelector('.modal-content').insertAdjacentHTML('beforeend', modalShareHtml);
    }

    // Exponer la función al objeto window para los clics del modal
    window.shareFromModal = (platform, id, title) => shareVideo(platform, id, title);

    function closeModal() {
        modal.style.display = 'none';
        iframe.src = '';
        document.body.style.overflow = 'auto';
    }

    function loadVideos() {
        const start = currentPage * VIDEOS_PER_PAGE;
        const end = start + VIDEOS_PER_PAGE;
        const videosToLoad = videosDB.slice(start, end);
        videosToLoad.forEach(video => gridContainer.appendChild(createVideoCard(video)));
        currentPage++;
        if (end >= videosDB.length) loadMoreBtn.style.display = 'none';
    }

    loadMoreBtn.addEventListener('click', loadVideos);
    closeBtn.addEventListener('click', closeModal);
    window.onclick = (e) => { if (e.target === modal) closeModal(); };

    loadVideos();
});