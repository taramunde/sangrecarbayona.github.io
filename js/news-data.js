/* js/news-data.js */

const newsData = [
    {
        sourceLogo: "https://i.postimg.cc/15Qs5NRP/logo_-_La_Voz_de_Asturias.webp",
        sourceName: "La Voz de Asturias",
        image: "https://i.postimg.cc/rFJbpVkB/J-25-LVA.webp", // ¡PON AQUÍ LA URL DE LA FOTO DE LA NOTICIA!
        title: "El Real Oviedo desperdicia otro 0-2 y empata en el descuento en un partido loco.",
        author: "PABLO FERNÁNDEZ",
        link: "https://www.lavozdeasturias.es/noticia/azulcarbayon/2026/02/21/real-oviedo-desperdicia-0-2-empata-descuento-partido-loco/00031771682674685983903.htm"
    },
    {
        sourceLogo: "https://i.postimg.cc/nV7nJ1J0/logo_-_La_Nueva_España.webp",
        sourceName: "La Nueva España",
        image: "https://i.postimg.cc/Vkv7LX4k/J-25-LNE.jpg", // FOTO NOTICIA 2
        title: "Y otra vez, otra remontada en contra: el Oviedo firma las tablas en Anoeta tras ir con una ventaja de dos goles (3-3).",
        author: "JOAQUÍN ALONSO",
        link: "https://www.lne.es/real-oviedo/2026/02/21/vez-remontada-oviedo-firma-tablas-127109282.html"
    },
    {
        sourceLogo: "https://i.postimg.cc/FRkN1yJF/logo_-_El_Comercio.webp",
        sourceName: "El Comercio",
        image: "https://i.postimg.cc/m2XwqtRW/J-25-EC.webp", // FOTO NOTICIA 3
        title: "Real Sociedad 3-3 Real Oviedo: Los azules desaprovechan una ventaja de dos goles en la segunda parte.",
        author: "HUGO VELASCO",
        link: "https://www.elcomercio.es/real-oviedo/directo-real-sociedad-real-oviedo-partido-primera-division-laliga-20260221102148-di.html"
    },
    {
        sourceLogo: "https://i.postimg.cc/7hvDz5g3/logo_-_Killer_Asturias.webp",
        sourceName: "Killer Asturias",
        image: "https://i.postimg.cc/xTCGKnmt/J-25-KO.jpg", // FOTO NOTICIA 4
        title: "La Crónica: El Oviedo revive el síndrome de Girona en Anoeta.",
        author: "JUAN MORENO",
        link: "https://killerasturias.com/cronicas/la-cronica-el-oviedo-revive-el-sindrome-de-girona-en-anoeta"
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
