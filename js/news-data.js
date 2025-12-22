/* js/news-data.js */

const newsData = [
    {
        sourceLogo: "https://i.postimg.cc/15Qs5NRP/logo_-_La_Voz_de_Asturias.webp",
        sourceName: "La Voz de Asturias",
        image: "https://i.postimg.cc/907sx7R5/J_15_lva.webp", // ¡PON AQUÍ LA URL DE LA FOTO DE LA NOTICIA!
        title: "El Real Oviedo ya es el segundo equipo menos goleador del siglo XXI en Primera División.",
        author: "PABLO FERNÁNDEZ",
        link: "https://www.lavozdeasturias.es/noticia/azulcarbayon/2025/12/06/real-oviedo-segundo-equipo-goleador-siglo-xxi-primera-division/00031765021617593811906.htm"
    },
    {
        sourceLogo: "https://i.postimg.cc/nV7nJ1J0/logo_-_La_Nueva_España.webp",
        sourceName: "La Nueva España",
        image: "https://i.postimg.cc/D0XRCXJ2/j_15_lne.webp", // FOTO NOTICIA 2
        title: "El Oviedo sigue seco: sin gol, solo puede empatar con el Mallorca (0-0) en un choque en el que acabó con nueve.",
        author: "NACHO AZPARREN",
        link: "https://www.lne.es/real-oviedo/2025/12/05/ovi-124505110.html"
    },
    {
        sourceLogo: "https://i.postimg.cc/FRkN1yJF/logo_-_El_Comercio.webp",
        sourceName: "El Comercio",
        image: "https://i.postimg.cc/Gty6My8n/j_15_ec.webp", // FOTO NOTICIA 3
        title: "Real Oviedo 0-0 Mallorca: La falta de gol condena una vez más al Oviedo.",
        author: "RAMÓN JULIO",
        link: "https://www.elcomercio.es/real-oviedo/real-oviedo-mallorca-falta-gol-condena-vez-20251205233147-nt.html"
    },
    {
        sourceLogo: "https://i.postimg.cc/7hvDz5g3/logo_-_Killer_Asturias.webp",
        sourceName: "Killer Asturias",
        image: "https://i.postimg.cc/NG2hGWN5/j15_ka.webp", // FOTO NOTICIA 4
        title: "La Crónica: El mejor Oviedo acaba desquiciado ante el Mallorca.",
        author: "JUAN MORENO",
        link: "https://killerasturias.com/cronicas/la-cronica-el-mejor-oviedo-acaba-desquiciado-ante-el-mallorca"
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
