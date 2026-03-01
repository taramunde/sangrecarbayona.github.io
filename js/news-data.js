/* js/news-data.js */

const newsData = [
    {
        sourceLogo: "https://i.postimg.cc/15Qs5NRP/logo_-_La_Voz_de_Asturias.webp",
        sourceName: "La Voz de Asturias",
        image: "https://i.postimg.cc/cCxpPL7G/J-26-LVA.webp", // ¡PON AQUÍ LA URL DE LA FOTO DE LA NOTICIA!
        title: "Castigo demasiado cruel para un notable Real Oviedo: 0-1 de Julián Álvarez en el descuento.",
        author: "PABLO FERNÁNDEZ",
        link: "https://www.lavozdeasturias.es/noticia/azulcarbayon/2026/02/28/dfg/00031772312324904653353.htm"
    },
    {
        sourceLogo: "https://i.postimg.cc/nV7nJ1J0/logo_-_La_Nueva_España.webp",
        sourceName: "La Nueva España",
        image: "https://i.postimg.cc/QCcqgQKM/J-26-LNE.jpg", // FOTO NOTICIA 2
        title: "Julián congela la esperanza: cruel derrota de un buen Oviedo en el minuto 94 (0-1).",
        author: "NACHO AZPARREN",
        link: "https://www.lne.es/real-oviedo/2026/02/28/julian-congela-esperanza-cruel-derrota-127399369.html"
    },
    {
        sourceLogo: "https://i.postimg.cc/FRkN1yJF/logo_-_El_Comercio.webp",
        sourceName: "El Comercio",
        image: "https://i.postimg.cc/mrmsyMWs/J-26-EC.webp", // FOTO NOTICIA 3
        title: "Un Real Oviedo notable cae con crueldad e injusticia.",
        author: "RAMÓN JULIO",
        link: "https://www.elcomercio.es/real-oviedo/real-oviedo-atletico-madrid-notable-cae-crueldad-injusticia-20260301234213-nt.html"
    },
    {
        sourceLogo: "https://i.postimg.cc/7hvDz5g3/logo_-_Killer_Asturias.webp",
        sourceName: "Killer Asturias",
        image: "https://i.postimg.cc/Z57mrphf/J-26-KA.jpg", // FOTO NOTICIA 4
        title: "La Crónica: Julián Álvarez da la puntilla al Oviedo.",
        author: "JUAN MORENO",
        link: "https://killerasturias.com/cronicas/la-cronica-julian-alvarez-da-la-puntilla-al-oviedo"
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
