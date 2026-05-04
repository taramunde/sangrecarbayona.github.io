/* js/news-data.js */

const newsData = [
    {
        sourceLogo: "https://i.postimg.cc/15Qs5NRP/logo_-_La_Voz_de_Asturias.webp",
        sourceName: "La Voz de Asturias",
        image: "https://i.postimg.cc/d3B2164W/J-34-LVA.webp", // ¡PON AQUÍ LA URL DE LA FOTO DE LA NOTICIA!
        title: "El Betis se aprovecha de los fallos del Real Oviedo.",
        author: "PABLO FERNÁNDEZ",
        link: "https://www.lavozdeasturias.es/noticia/azulcarbayon/2026/05/03/betis-ovi/00031777829093136246760.htm"
    },
    {
        sourceLogo: "https://i.postimg.cc/nV7nJ1J0/logo_-_La_Nueva_España.webp",
        sourceName: "La Nueva España",
        image: "https://i.postimg.cc/T19Vw0C4/J-34-LNE.jpg", // FOTO NOTICIA 2
        title: "El Oviedo elige no pelear: goleada ante un Betis que se aprovechó de los errores azules (3-0).",
        author: "NACHO AZPARREN",
        link: "https://www.lne.es/real-oviedo/2026/05/03/oviedo-elige-pelear-goleada-betis-129803829.html"
    },
    {
        sourceLogo: "https://i.postimg.cc/FRkN1yJF/logo_-_El_Comercio.webp",
        sourceName: "El Comercio",
        image: "https://i.postimg.cc/zvjCB70M/J-34-EC.webp", // FOTO NOTICIA 3
        title: "El Betis hurga en la herida de un flojo Real Oviedo.",
        author: "RAMÓN JULIO",
        link: "https://www.elcomercio.es/real-oviedo/betis-hurga-herida-flojo-real-oviedo-20260503214712-nt.html"
    },
    {
        sourceLogo: "https://i.postimg.cc/7hvDz5g3/logo_-_Killer_Asturias.webp",
        sourceName: "Killer Asturias",
        image: "https://i.postimg.cc/QCbQtm0z/J-34-KA.jpg", // FOTO NOTICIA 4
        title: "La Crónica: El Betis y el VAR castigan a un competitivo Oviedo.",
        author: "JUAN MORENO",
        link: "https://killerasturias.com/cronicas/la-cronica-el-betis-y-el-var-castigan-un-competitivo-oviedo"
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
