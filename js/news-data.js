/* js/news-data.js */

const newsData = [
    {
        sourceLogo: "https://i.postimg.cc/15Qs5NRP/logo_-_La_Voz_de_Asturias.webp",
        sourceName: "La Voz de Asturias",
        image: "https://i.postimg.cc/VkvcR5Kf/J31-LVA.webp", // ¡PON AQUÍ LA URL DE LA FOTO DE LA NOTICIA!
        title: "Fede reina en Balaídos: el Real Oviedo gana 0-3 y se agarra a la permanencia.",
        author: "PABLO FERNÁNDEZ",
        link: "https://www.lavozdeasturias.es/noticia/azulcarbayon/2026/04/12/fede-reina-balaidos-real-oviedo-gana-0-3-agarra-permanencia/00031776009583584927309.htm"
    },
    {
        sourceLogo: "https://i.postimg.cc/nV7nJ1J0/logo_-_La_Nueva_España.webp",
        sourceName: "La Nueva España",
        image: "https://i.postimg.cc/y8t2yjJV/J31-LNE.jpg", // FOTO NOTICIA 2
        title: "El Real Oviedo se lanza a por su milagro: goleada al Celta en el mejor partido del año (0-3).",
        author: "NACHO AZPARREN",
        link: "https://www.lne.es/real-oviedo/2026/04/12/real-oviedo-lanza-milagro-goleada-129017877.html"
    },
    {
        sourceLogo: "https://i.postimg.cc/FRkN1yJF/logo_-_El_Comercio.webp",
        sourceName: "El Comercio",
        image: "https://i.postimg.cc/gJDMQH03/J31-EC.webp", // FOTO NOTICIA 3
        title: "Fede Viñas mantiene viva la esperanza del Real Oviedo.",
        author: "RAMÓN JULIO",
        link: "https://www.elcomercio.es/real-oviedo/celta-vigo-real-oviedo-partido-resultado-goles-cronica-fede-vinas-20260412212542-nt.html"
    },
    {
        sourceLogo: "https://i.postimg.cc/7hvDz5g3/logo_-_Killer_Asturias.webp",
        sourceName: "Killer Asturias",
        image: "https://i.postimg.cc/4x9Wsgdv/J31-KA.jpg", // FOTO NOTICIA 4
        title: "La Crónica: Fede Viñas desata a un gran Oviedo en Balaídos.",
        author: "JUAN MORENO",
        link: "https://killerasturias.com/cronicas/la-cronica-fede-vinas-desata-un-gran-oviedo-en-balaidos"
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
