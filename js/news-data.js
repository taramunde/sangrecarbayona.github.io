/* js/news-data.js */

const newsData = [
    {
        sourceLogo: "https://i.postimg.cc/15Qs5NRP/logo_-_La_Voz_de_Asturias.webp",
        sourceName: "La Voz de Asturias",
        image: "https://i.postimg.cc/NMg3gQyg/J21-LVA.webp", // ¡PON AQUÍ LA URL DE LA FOTO DE LA NOTICIA!
        title: "El Real Oviedo se pega tres tiros en el pie ante el Barça.",
        author: "PABLO FERNÁNDEZ",
        link: "https://www.lavozdeasturias.es/noticia/azulcarbayon/2026/01/25/croni/00031769354132609316124.htm"
    },
    {
        sourceLogo: "https://i.postimg.cc/nV7nJ1J0/logo_-_La_Nueva_España.webp",
        sourceName: "La Nueva España",
        image: "https://i.postimg.cc/QtX2XjBd/J2-LNE.jpg", // FOTO NOTICIA 2
        title: "El castillo se desmorona (3-0) en 5 minutos: derrota del Oviedo en el Camp Nou.",
        author: "NACHO AZPARREN",
        link: "https://www.lne.es/real-oviedo/2026/01/25/castillo-desmorona-3-0-5-126073786.html"
    },
    {
        sourceLogo: "https://i.postimg.cc/FRkN1yJF/logo_-_El_Comercio.webp",
        sourceName: "El Comercio",
        image: "https://i.postimg.cc/j5spsRWC/J21-EC.webp", // FOTO NOTICIA 3
        title: "El Oviedo reincide en sus errores ante el Barça.",
        author: "RAMÓN JULIO",
        link: "https://www.elcomercio.es/real-oviedo/oviedo-reincide-errores-ante-barca-20260125211322-nt.html"
    },
    {
        sourceLogo: "https://i.postimg.cc/7hvDz5g3/logo_-_Killer_Asturias.webp",
        sourceName: "Killer Asturias",
        image: "https://i.postimg.cc/mDbvbTcr/J21-KA.jpg", // FOTO NOTICIA 4
        title: "La Crónica: El Oviedo se hace el harakiri en el Camp Nou.",
        author: "JUAN MORENO",
        link: "https://killerasturias.com/index.php/cronicas/la-cronica-el-oviedo-se-hace-el-harakiri-en-el-camp-nou"
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
