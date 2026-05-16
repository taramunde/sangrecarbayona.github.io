/* js/news-data.js */

const newsData = [
    {
        sourceLogo: "https://i.postimg.cc/15Qs5NRP/logo_-_La_Voz_de_Asturias.webp",
        sourceName: "La Voz de Asturias",
        image: "https://i.postimg.cc/SNSn98z4/J-36-LVA.webp", // ¡PON AQUÍ LA URL DE LA FOTO DE LA NOTICIA!
        title: "El Oviedo no es capaz de darse una alegría ante un Madrid en crisis.",
        author: "PABLO FERNÁNDEZ",
        link: "https://www.lavozdeasturias.es/noticia/azulcarbayon/2026/05/14/rm-ovi/00031778790904971560135.htm"
    },
    {
        sourceLogo: "https://i.postimg.cc/nV7nJ1J0/logo_-_La_Nueva_España.webp",
        sourceName: "La Nueva España",
        image: "https://i.postimg.cc/sDjMWSZs/J-36-LNE.jpg", // FOTO NOTICIA 2
        title: "Entre la bronca a Mbappé y la ovación a Cazorla, otra derrota del Oviedo (2-0).",
        author: "NACHO AZPARREN",
        link: "https://www.lne.es/real-oviedo/2026/05/14/bronca-mbappe-ovacion-cazorla-derrota-130247321.html"
    },
    {
        sourceLogo: "https://i.postimg.cc/FRkN1yJF/logo_-_El_Comercio.webp",
        sourceName: "El Comercio",
        image: "https://i.postimg.cc/BQSjFD1s/J-36-EC.webp", // FOTO NOTICIA 3
        title: "El Real Oviedo no puede con un Real Madrid en crisis.",
        author: "RAMÓN JULIO",
        link: "https://www.elcomercio.es/real-oviedo/real-madrid-oviedo-crisis-cazorla-almada-partido-20260514235219-nt.html"
    },
    {
        sourceLogo: "https://i.postimg.cc/7hvDz5g3/logo_-_Killer_Asturias.webp",
        sourceName: "Killer Asturias",
        image: "https://i.postimg.cc/DyvSGsb7/J-36-KA.jpg", // FOTO NOTICIA 4
        title: "La Crónica: El Madrid cumple el trámite ante un digno Oviedo.",
        author: "JUAN MORENO",
        link: "https://killerasturias.com/cronicas/la-cronica-el-madrid-cumple-el-tramite-ante-un-digno-oviedo"
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
