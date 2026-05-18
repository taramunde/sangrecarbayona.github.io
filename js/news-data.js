/* js/news-data.js */

const newsData = [
    {
        sourceLogo: "https://i.postimg.cc/15Qs5NRP/logo_-_La_Voz_de_Asturias.webp",
        sourceName: "La Voz de Asturias",
        image: "https://i.postimg.cc/s2qdz9L7/J-37-LVA.jpg", // ¡PON AQUÍ LA URL DE LA FOTO DE LA NOTICIA!
        title: "El Tartiere clama por la continuidad de Cazorla y el Alavés se salva.",
        author: "PABLO FERNÁNDEZ",
        link: "https://www.lavozdeasturias.es/noticia/azulcarbayon/2026/05/17/tartiere-clama-continuidad-cazorla-alaves-salva/00031779040744849363977.htm"
    },
    {
        sourceLogo: "https://i.postimg.cc/nV7nJ1J0/logo_-_La_Nueva_España.webp",
        sourceName: "La Nueva España",
        image: "https://i.postimg.cc/tgwQbtc3/J-37-LNE.jpg", // FOTO NOTICIA 2
        title: "Triste colofón a una temporada para el olvido: derrota del Oviedo ante el Alavés (0-1).",
        author: "NACHO AZPARREN",
        link: "https://www.lne.es/real-oviedo/2026/05/17/triste-colofon-temporada-olvido-derrota-130333595.html"
    },
    {
        sourceLogo: "https://i.postimg.cc/FRkN1yJF/logo_-_El_Comercio.webp",
        sourceName: "El Comercio",
        image: "https://i.postimg.cc/tgwQbtcF/J-37-EC.jpg", // FOTO NOTICIA 3
        title: "El Tartiere clama a Cazorla que se quede en el Real Oviedo.",
        author: "RAMÓN JULIO",
        link: "https://www.elcomercio.es/real-oviedo/tartiere-clama-cazorla-quede-real-oviedo-20260517215639-nt.html"
    },
    {
        sourceLogo: "https://i.postimg.cc/7hvDz5g3/logo_-_Killer_Asturias.webp",
        sourceName: "Killer Asturias",
        image: "https://i.postimg.cc/rp3XTCHS/J-37-KA.jpg", // FOTO NOTICIA 4
        title: "La Crónica: El Oviedo no encuentra ni consuelo en el Tartiere.",
        author: "JUAN MORENO",
        link: "https://killerasturias.com/cronicas/la-cronica-el-oviedo-no-encuentra-ni-consuelo-en-el-tartiere"
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
