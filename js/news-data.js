/* js/news-data.js */

const newsData = [
    {
        sourceLogo: "https://i.postimg.cc/15Qs5NRP/logo_-_La_Voz_de_Asturias.webp",
        sourceName: "La Voz de Asturias",
        image: "https://i.postimg.cc/L8NjLpjZ/J-28-LVA.webp", // ¡PON AQUÍ LA URL DE LA FOTO DE LA NOTICIA!
        title: "El Real Oviedo se da una pequeña alegría ante el Valencia.",
        author: "PABLO FERNÁNDEZ",
        link: "https://www.lavozdeasturias.es/noticia/azulcarbayon/2026/03/14/cronica/00031773512998829293109.htm"
    },
    {
        sourceLogo: "https://i.postimg.cc/nV7nJ1J0/logo_-_La_Nueva_España.webp",
        sourceName: "La Nueva España",
        image: "https://i.postimg.cc/KzFF2dsC/J-28-LNE.jpg", // FOTO NOTICIA 2
        title: "El Oviedo invita a creer: victoria merecida con fútbol y sufrimiento ante el Valencia (1-0).",
        author: "NACHO AZPARREN",
        link: "https://www.lne.es/real-oviedo/2026/03/14/oviedo-invita-creer-victoria-merecida-127966166.html"
    },
    {
        sourceLogo: "https://i.postimg.cc/FRkN1yJF/logo_-_El_Comercio.webp",
        sourceName: "El Comercio",
        image: "https://i.postimg.cc/ZqSXB6Fq/J-28-EC.webp", // FOTO NOTICIA 3
        title: "Derroche de garra del Real Oviedo para aferrarse a una ilusión.",
        author: "RAMÓN JULIO",
        link: "https://www.elcomercio.es/real-oviedo/derroche-garra-real-oviedo-aferrarse-ilusion-20260314210133-nt.html"
    },
    {
        sourceLogo: "https://i.postimg.cc/7hvDz5g3/logo_-_Killer_Asturias.webp",
        sourceName: "Killer Asturias",
        image: "https://i.postimg.cc/nVXZtY3W/J-28-KA.jpg", // FOTO NOTICIA 4
        title: "La Crónica: El Oviedo vence al Valencia... y también al VAR.",
        author: "JUAN MORENO",
        link: "https://killerasturias.com/cronicas/la-cronica-el-oviedo-vence-al-valencia-y-tambien-al-var"
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
