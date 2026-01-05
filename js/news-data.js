/* js/news-data.js */

const newsData = [
    {
        sourceLogo: "https://i.postimg.cc/15Qs5NRP/logo_-_La_Voz_de_Asturias.webp",
        sourceName: "La Voz de Asturias",
        image: "https://i.postimg.cc/CKR0DhpT/j18-lva.webp", // ¡PON AQUÍ LA URL DE LA FOTO DE LA NOTICIA!
        title: "No hay manera con este Real Oviedo.",
        author: "PABLO FERNÁNDEZ",
        link: "https://www.lavozdeasturias.es/noticia/azulcarbayon/2026/01/04/cronica/00031767551865008203965.htm"
    },
    {
        sourceLogo: "https://i.postimg.cc/nV7nJ1J0/logo_-_La_Nueva_España.webp",
        sourceName: "La Nueva España",
        image: "https://i.postimg.cc/L8TBcPXk/j18-lne.jpg", // FOTO NOTICIA 2
        title: "Un Oviedo con brotes verdes se sacude el gafe del gol, pero falla mucho y lo paga caro en Mendizorroza (1-1)",
        author: "JOAQUÍN ALONSO",
        link: "https://www.lne.es/real-oviedo/2026/01/04/oviedo-sacude-gafe-gol-falla-125370770.html"
    },
    {
        sourceLogo: "https://i.postimg.cc/FRkN1yJF/logo_-_El_Comercio.webp",
        sourceName: "El Comercio",
        image: "https://i.postimg.cc/yd6Fnbjw/j18-ec.webp", // FOTO NOTICIA 3
        title: "El mejor Oviedo del curso vuelve a perdonar.",
        author: "RAMÓN JULIO",
        link: "https://www.elcomercio.es/real-oviedo/mejor-oviedo-curso-vuelve-perdonar-20260105213702-nt.html"
    },
    {
        sourceLogo: "https://i.postimg.cc/7hvDz5g3/logo_-_Killer_Asturias.webp",
        sourceName: "Killer Asturias",
        image: "https://i.postimg.cc/CKR0DhpT/j18-lva.webp", // FOTO NOTICIA 4
        title: "La Crónica: Un gran Oviedo se deja dos puntos en Mendizorroza.",
        author: "JUAN MORENO",
        link: "https://killerasturias.com/cronicas/la-cronica-un-gran-oviedo-se-deja-dos-puntos-en-mendizorroza"
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
