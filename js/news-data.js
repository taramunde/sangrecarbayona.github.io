/* js/news-data.js */

const newsData = [
    {
        sourceLogo: "https://i.postimg.cc/15Qs5NRP/logo_-_La_Voz_de_Asturias.webp",
        sourceName: "La Voz de Asturias",
        image: "https://i.postimg.cc/htpV3LVW/J-20-LVA.webp", // ¡PON AQUÍ LA URL DE LA FOTO DE LA NOTICIA!
        title: "Osasuna y Quintero González hunden al Real Oviedo.",
        author: "PABLO FERNÁNDEZ",
        link: "https://www.lavozdeasturias.es/noticia/azulcarbayon/2026/01/17/osa-ovi/00031768674841391908953.htm"
    },
    {
        sourceLogo: "https://i.postimg.cc/nV7nJ1J0/logo_-_La_Nueva_España.webp",
        sourceName: "La Nueva España",
        image: "https://i.postimg.cc/YSFqmkrC/J20-LNE.jpg", // FOTO NOTICIA 2
        title: "Al Oviedo le hunden sus propios errores: derrota 3-2 en Pamplona.",
        author: "NACHO AZPARREN",
        link: "https://www.lne.es/real-oviedo/2026/01/17/oviedo-le-hunden-propios-errores-125793650.html"
    },
    {
        sourceLogo: "https://i.postimg.cc/FRkN1yJF/logo_-_El_Comercio.webp",
        sourceName: "El Comercio",
        image: "https://i.postimg.cc/XJVS70pN/J20-EC.webp", // FOTO NOTICIA 3
        title: "Osasuna 3-2 Real Oviedo | El fútbol da la espalda al Real Oviedo.",
        author: "HUGO VELASCO",
        link: "https://www.elcomercio.es/real-oviedo/directo-osasuna-real-oviedo-partido-futbol-primera-division-20260117180016-di.html"
    },
    {
        sourceLogo: "https://i.postimg.cc/7hvDz5g3/logo_-_Killer_Asturias.webp",
        sourceName: "Killer Asturias",
        image: "https://i.postimg.cc/x8h4HrT5/J20-KA.jpg", // FOTO NOTICIA 4
        title: "La Crónica: El Var deja al Oviedo en la UCI.",
        author: "JUAN MORENO",
        link: "https://killerasturias.com/cronicas/la-cronica-el-var-deja-al-oviedo-en-la-uci"
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
