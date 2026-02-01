/* js/news-data.js */

const newsData = [
    {
        sourceLogo: "https://i.postimg.cc/15Qs5NRP/logo_-_La_Voz_de_Asturias.webp",
        sourceName: "La Voz de Asturias",
        image: "https://i.postimg.cc/L5sHxxKs/J-22-LVA.webp", // ¡PON AQUÍ LA URL DE LA FOTO DE LA NOTICIA!
        title: "El Real Oviedo vuelve a ganar de la mano de Santi Cazorla.",
        author: "PABLO FERNÁNDEZ",
        link: "https://www.lavozdeasturias.es/noticia/azulcarbayon/2026/01/31/dfsdg/00031769867768366789521.htm"
    },
    {
        sourceLogo: "https://i.postimg.cc/nV7nJ1J0/logo_-_La_Nueva_España.webp",
        sourceName: "La Nueva España",
        image: "https://i.postimg.cc/fR81KMWt/J-22-LNE.jpg", // FOTO NOTICIA 2
        title: "Cazorla manda, el Oviedo gana, el Tartiere sonríe: victoria de oro ante el Girona (1-0).",
        author: "NACHO AZPARREN",
        link: "https://www.lne.es/real-oviedo/2026/01/31/cazorla-manda-oviedo-gana-tartiere-126299465.html"
    },
    {
        sourceLogo: "https://i.postimg.cc/FRkN1yJF/logo_-_El_Comercio.webp",
        sourceName: "El Comercio",
        image: "https://i.postimg.cc/g2jgG8p5/J-22-EC.webp", // FOTO NOTICIA 3
        title: "Real Oviedo 1-0 Girona | El Real Oviedo vuelve a creer con una trabajada victoria.",
        author: "RAMÓN JULIO",
        link: "https://www.elcomercio.es/real-oviedo/real-oviedo-vuelve-creer-trabajada-victoria-girona-tartiere-20260131164255-nt.html"
    },
    {
        sourceLogo: "https://i.postimg.cc/7hvDz5g3/logo_-_Killer_Asturias.webp",
        sourceName: "Killer Asturias",
        image: "https://i.postimg.cc/ZqFBgsgS/J-22-KA.jpg", // FOTO NOTICIA 4
        title: "La Crónica: Cazorla y Thiago sostienen la fe del Oviedo.",
        author: "JUAN MORENO",
        link: "https://killerasturias.com/cronicas/la-cronica-cazorla-y-thiago-sostienen-la-fe-del-oviedo"
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
