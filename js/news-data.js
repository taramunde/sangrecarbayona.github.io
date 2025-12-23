/* js/news-data.js */

const newsData = [
    {
        sourceLogo: "https://i.postimg.cc/15Qs5NRP/logo_-_La_Voz_de_Asturias.webp",
        sourceName: "La Voz de Asturias",
        image: "https://i.postimg.cc/YCLwsNHk/J_17_oviedo_celta_lva.webp", // ¡PON AQUÍ LA URL DE LA FOTO DE LA NOTICIA!
        title: "Al Real Oviedo se le olvidó ganar.",
        author: "PABLO FERNÁNDEZ",
        link: "https://www.lavozdeasturias.es/noticia/azulcarbayon/2025/12/20/oviedo-celta/00031766239307317499299.htm"
    },
    {
        sourceLogo: "https://i.postimg.cc/nV7nJ1J0/logo_-_La_Nueva_España.webp",
        sourceName: "La Nueva España",
        image: "https://i.postimg.cc/RFyYfyWc/J_17_Oviedo_Celta_LNE.jpg", // FOTO NOTICIA 2
        title: "Más de lo mismo: un Oviedo sin gol firma otro empate insuficiente ante el Celta (0-0).",
        author: "NACHO AZPARREN",
        link: "https://www.lne.es/real-oviedo/2025/12/20/oviedo-gol-firma-empate-insuficiente-124994492.html"
    },
    {
        sourceLogo: "https://i.postimg.cc/FRkN1yJF/logo_-_El_Comercio.webp",
        sourceName: "El Comercio",
        image: "https://i.postimg.cc/D0C8BQK4/J_17_Oviedo_Celta_EC.webp", // FOTO NOTICIA 3
        title: "La mejoría del Real Oviedo de Almada no basta para ganar al Celta.",
        author: "RAMÓN JULIO",
        link: "https://www.elcomercio.es/real-oviedo/directo-real-oviedo-celta-vigo-liga-primera-20251220111100-di.html"
    },
    {
        sourceLogo: "https://i.postimg.cc/7hvDz5g3/logo_-_Killer_Asturias.webp",
        sourceName: "Killer Asturias",
        image: "https://i.postimg.cc/PxXX9LyS/J_17_Oviedo_Celta_KA.jpg", // FOTO NOTICIA 4
        title: "La Crónica: El Oviedo sigue incapaz de hacer gol ante un tímido Celta.",
        author: "JUAN MORENO",
        link: "https://killerasturias.com/cronicas/la-cronica-el-oviedo-sigue-incapaz-de-hacer-gol-ante-un-timido-celta"
    }
];

/* Función para cargar las noticias */
document.addEventListener("DOMContentLoaded", function() {
    const newsContainer = document.querySelector('.news-container');
    
    if (newsContainer) {
        newsContainer.innerHTML = ''; // Limpiar contenido estático si lo hubiera

        newsData.forEach(news => {
            const newsCard = document.createElement('div');
            newsCard.classList.add('news-card');

            newsCard.innerHTML = `
                <div class="news-header">
                    <img src="${news.sourceLogo}" alt="${news.sourceName}" class="news-logo" loading="lazy">
                </div>
                <div class="news-image-container">
                    <img src="${news.image}" alt="Imagen noticia" class="news-photo" loading="lazy" onerror="this.style.display='none'"> 
                </div>
                <div class="news-content">
                    <h3>${news.title}</h3>
                    <p class="news-author">${news.author} - ${news.sourceName}</p>
                    <a href="${news.link}" target="_blank" class="news-link">Leer más</a>
                </div>
            `;
            newsContainer.appendChild(newsCard);
        });
    }
});
