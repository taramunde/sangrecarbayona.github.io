/* js/news-data.js */

const newsData = [
    {
        sourceLogo: "https://i.postimg.cc/15Qs5NRP/logo_-_La_Voz_de_Asturias.webp",
        sourceName: "La Voz de Asturias",
        image: "https://i.postimg.cc/6Qn24b1j/J-19-LVA.webp", // ¡PON AQUÍ LA URL DE LA FOTO DE LA NOTICIA!
        title: "Otro punto que no saca de pobre al Real Oviedo.",
        author: "PABLO FERNÁNDEZ",
        link: "https://www.lavozdeasturias.es/noticia/azulcarbayon/2026/01/10/oviedo-betis/00031768053623707107721.htm"
    },
    {
        sourceLogo: "https://i.postimg.cc/nV7nJ1J0/logo_-_La_Nueva_España.webp",
        sourceName: "La Nueva España",
        image: "https://i.postimg.cc/tgWZnvmv/J-19-LNE.jpg", // FOTO NOTICIA 2
        title: "Un final amargo evita la victoria de un valiente Oviedo ante el Betis",
        author: "NACHO AZPARREN",
        link: "https://www.lne.es/real-oviedo/2026/01/10/final-amargo-evita-victoria-valiente-125554499.html"
    },
    {
        sourceLogo: "https://i.postimg.cc/FRkN1yJF/logo_-_El_Comercio.webp",
        sourceName: "El Comercio",
        image: "https://i.postimg.cc/g08XLtB7/J-19-EC.webp", // FOTO NOTICIA 3
        title: "Real Oviedo 1-1 Betis: Reparto de puntos en el Tartiere.",
        author: "HUGO VELASCO",
        link: "https://www.elcomercio.es/real-oviedo/real-oviedo-betis-directo-partido-futbol-goles-jugadas-primera-20260110132809-di.html"
    },
    {
        sourceLogo: "https://i.postimg.cc/7hvDz5g3/logo_-_Killer_Asturias.webp",
        sourceName: "Killer Asturias",
        image: "https://i.postimg.cc/JhZDHYdd/J-19-KA.png", // FOTO NOTICIA 4
        title: "FINAL: Así fue el empate entre Real Oviedo y Real Betis (1-1).",
        author: "TATO FELGUEROSO",
        link: "https://killerasturias.com/noticias/en-directo-real-oviedo-0-0-real-betis"
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
