/* js/news-data.js */

const newsData = [
    {
        sourceLogo: "https://i.postimg.cc/15Qs5NRP/logo_-_La_Voz_de_Asturias.webp",
        sourceName: "La Voz de Asturias",
        image: "https://i.postimg.cc/CMsp1rGy/J-35-LVA.jpg", // ¡PON AQUÍ LA URL DE LA FOTO DE LA NOTICIA!
        title: "Un digno Oviedo evita ante el Getafe el descenso matemático.",
        author: "PABLO FERNÁNDEZ",
        link: "https://www.lavozdeasturias.es/noticia/azulcarbayon/2026/05/10/digno-oviedo-evita-ante-getafe-descenso-matematico/00031778434275452249405.htm"
    },
    {
        sourceLogo: "https://i.postimg.cc/nV7nJ1J0/logo_-_La_Nueva_España.webp",
        sourceName: "La Nueva España",
        image: "https://i.postimg.cc/xj3VCpKs/J-35-LNE.webp", // FOTO NOTICIA 2
        title: "Un orgulloso Oviedo evita el descenso en el Tartiere: empate con dos menos ante el Getafe (0-0).",
        author: "NACHO AZPARREN",
        link: "https://www.lne.es/real-oviedo/2026/05/10/orgulloso-oviedo-evita-descenso-tartiere-130070510.html"
    },
    {
        sourceLogo: "https://i.postimg.cc/FRkN1yJF/logo_-_El_Comercio.webp",
        sourceName: "El Comercio",
        image: "https://i.postimg.cc/ZKYtyPcw/J-35-EC.jpg", // FOTO NOTICIA 3
        title: "Punto de coraje para prolongar la agonía del Real Oviedo.",
        author: "RAMÓN JULIO",
        link: "https://www.elcomercio.es/real-oviedo/punto-coraje-prolongar-agonia-real-oviedo-20260510211128-nt.html"
    },
    {
        sourceLogo: "https://i.postimg.cc/7hvDz5g3/logo_-_Killer_Asturias.webp",
        sourceName: "Killer Asturias",
        image: "https://i.postimg.cc/RVC5n1dV/J-35-KA.jpg", // FOTO NOTICIA 4
        title: "La Crónica: El Oviedo resiste al VAR y al Getafe.",
        author: "JUAN MORENO",
        link: "https://killerasturias.com/index.php/cronicas/la-cronica-el-oviedo-resiste-al-var-y-al-getafe"
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
