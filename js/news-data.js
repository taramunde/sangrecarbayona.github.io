/* js/news-data.js */

const newsData = [
    {
        sourceLogo: "https://i.postimg.cc/15Qs5NRP/logo_-_La_Voz_de_Asturias.webp",
        sourceName: "La Voz de Asturias",
        image: "https://i.postimg.cc/mkfcyBsX/J-33-LVA.jpg", // ¡PON AQUÍ LA URL DE LA FOTO DE LA NOTICIA!
        title: "Punto guerrero del Real Oviedo ante el Villarreal.",
        author: "PABLO FERNÁNDEZ",
        link: "https://www.lavozdeasturias.es/noticia/azulcarbayon/2026/04/23/cronica/00031776976353117623891.htm"
    },
    {
        sourceLogo: "https://i.postimg.cc/nV7nJ1J0/logo_-_La_Nueva_España.webp",
        sourceName: "La Nueva España",
        image: "https://i.postimg.cc/kG3Vvqmj/J-33-LNE.webp", // FOTO NOTICIA 2
        title: "Un punto que pudieron ser tres: el Oviedo se levanta con brío y sigue vivo (1-1).",
        author: "NACHO AZPARREN",
        link: "https://www.lne.es/real-oviedo/2026/04/23/punto-pudieron-tres-oviedo-levanta-129460419.html"
    },
    {
        sourceLogo: "https://i.postimg.cc/FRkN1yJF/logo_-_El_Comercio.webp",
        sourceName: "El Comercio",
        image: "https://i.postimg.cc/cCyKB0S5/J-33-EC.jpg", // FOTO NOTICIA 3
        title: "El Real Oviedo tira de épica para aferrarse a Primera.",
        author: "RAMÓN JULIO",
        link: "https://www.elcomercio.es/real-oviedo/real-oviedo-tira-epica-aferrarse-primera-20260423235455-nt.html"
    },
    {
        sourceLogo: "https://i.postimg.cc/7hvDz5g3/logo_-_Killer_Asturias.webp",
        sourceName: "Killer Asturias",
        image: "https://i.postimg.cc/6qJ7ftXP/J-33-KA.jpg", // FOTO NOTICIA 4
        title: "La Crónica: El Oviedo se levanta ante el Villarreal y mantiene viva la llama.",
        author: "JUAN MORENO",
        link: "https://killerasturias.com/cronicas/la-cronica-el-oviedo-se-levanta-ante-el-villarreal-y-mantiene-viva-la-llama"
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
