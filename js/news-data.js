/* js/news-data.js */

const newsData = [
    {
        sourceLogo: "https://i.postimg.cc/15Qs5NRP/logo_-_La_Voz_de_Asturias.webp",
        sourceName: "La Voz de Asturias",
        image: "https://i.postimg.cc/3R2CbLgB/J24-LVA.webp", // ¡PON AQUÍ LA URL DE LA FOTO DE LA NOTICIA!
        title: "Un Athletic ramplón remonta y deja muy tocado al Real Oviedo.",
        author: "PABLO FERNÁNDEZ",
        link: "https://www.lavozdeasturias.es/noticia/azulcarbayon/2026/02/15/croni/00031771162809581619696.htm"
    },
    {
        sourceLogo: "https://i.postimg.cc/nV7nJ1J0/logo_-_La_Nueva_España.webp",
        sourceName: "La Nueva España",
        image: "https://i.postimg.cc/wvDcbWhF/J24-LNE.jpg", // FOTO NOTICIA 2
        title: "El Oviedo deja pasar su gran oportunidad por delante: dolorosa derrota ante el Athletic (1-2).",
        author: "NACHO AZPARREN",
        link: "https://www.lne.es/real-oviedo/2026/02/15/oviedo-deja-pasar-gran-oportunidad-126860104.html"
    },
    {
        sourceLogo: "https://i.postimg.cc/FRkN1yJF/logo_-_El_Comercio.webp",
        sourceName: "El Comercio",
        image: "https://i.postimg.cc/508qkPw7/J24-EC.webp", // FOTO NOTICIA 3
        title: "La ilusión del Real Oviedo contra el Athletic se esfuma tras el descanso.",
        author: "RAMÓN JULIO",
        link: "https://www.elcomercio.es/real-oviedo/real-oviedo-athletic-bilbao-partido-goles-resultado-jugadas-cronica-20260215163634-nt.html"
    },
    {
        sourceLogo: "https://i.postimg.cc/7hvDz5g3/logo_-_Killer_Asturias.webp",
        sourceName: "Killer Asturias",
        image: "https://i.postimg.cc/MT1brsys/J24-KA.jpg", // FOTO NOTICIA 4
        title: "La Crónica: Dos zarpazos del Athletic hunden al Oviedo.",
        author: "JUAN MORENO",
        link: "https://killerasturias.com/cronicas/la-cronica-dos-zarpazos-del-athletic-hunden-al-oviedo"
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
