// js/players.js
const playersData = {
    goalkeepers: [
        { src: "https://i.postimg.cc/s2YhzvPR/Aar-n-PNG-Alineaci-n.webp", alt: "Portero 1", number: "13", name: "Aarón", url: "#" },
        { src: "https://i.postimg.cc/sgPM0mk4/Moldovan-PNG-2.webp", alt: "Portero 2", number: "1", name: "Moldovan", url: "#" },
        { src: "https://i.postimg.cc/XJqXqbps/Narv-ez-PNG.webp", alt: "Portero 3", number: "26", name: "Narváez", url: "#" }
    ],
    defenders: [
        { src: "https://i.postimg.cc/qRHtqnX7/Bailly-PNG-2.webp", alt: "Defensa 1", number: "2", name: "Bailly", url: "#" },
        { src: "https://i.postimg.cc/15bMB7y7/Rahim-PNG.webp", alt: "Defensa 2", number: "3", name: "Rahim", url: "#" },
        { src: "https://i.postimg.cc/V6ScxHbr/David-Costas-PNG.webp", alt: "Defensa 3", number: "4", name: "David Costas", url: "#" },
        { src: "https://i.postimg.cc/Wb0spKY0/Dani-Calvo-PNG.webp", alt: "Defensa 4", number: "12", name: "Dani Calvo", url: "#" },
        { src: "https://i.postimg.cc/YqQmcd1s/Luengo-PNG.webp", alt: "Defensa 5", number: "15", name: "Luengo", url: "#" },
    ],
    midfielders: [
        { src: "https://i.postimg.cc/placeholder/centrocampista1.jpg", alt: "Centrocampista 1", number: "8", name: "Centrocampista 1", url: "#" },
        { src: "https://i.postimg.cc/placeholder/centrocampista2.jpg", alt: "Centrocampista 2", number: "10", name: "Centrocampista 2", url: "#" },
        { src: "https://i.postimg.cc/placeholder/centrocampista3.jpg", alt: "Centrocampista 3", number: "11", name: "Centrocampista 3", url: "#" }
    ],
    forwards: [
        { src: "https://i.postimg.cc/placeholder/delanteros1.jpg", alt: "Delantero 1", number: "9", name: "Delantero 1", url: "#" },
        { src: "https://i.postimg.cc/placeholder/delanteros2.jpg", alt: "Delantero 2", number: "7", name: "Delantero 2", url: "#" },
        { src: "https://i.postimg.cc/placeholder/delanteros3.jpg", alt: "Delantero 3", number: "19", name: "Delantero 3", url: "#" }
    ]
};

const currentIndices = {
    goalkeepers: 0,
    defenders: 0,
    midfielders: 0,
    forwards: 0
};

function updatePlayerGallery(position) {
    const gallery = document.querySelector(`.players-gallery[data-position="${position}"]`);
    if (!gallery) {
        console.error(`No se encontró .players-gallery para ${position}`);
        return;
    }

    const players = playersData[position];
    const currentIndex = currentIndices[position];

    let mainPlayerHTML = `
        <div class="player-card">
            <img class="main-player" data-position="${position}" src="${players[currentIndex].src}" alt="${players[currentIndex].alt}">
            <div class="player-info">
                <div class="player-details">
                    <span class="player-number">${players[currentIndex].number}</span>
                    <span class="player-name">${players[currentIndex].name}</span>
                </div>
                <button class="player-button" onclick="window.location.href='${players[currentIndex].url}'">Ver Ficha</button>
            </div>
        </div>
    `;

    let nextPlayerHTML = '';
    if (currentIndex < players.length - 1) {
        nextPlayerHTML = `
            <div class="player-card">
                <img class="next-player faded" data-position="${position}" src="${players[currentIndex + 1].src}" alt="${players[currentIndex + 1].alt}">
                <div class="player-info">
                    <div class="player-details">
                        <span class="player-number">${players[currentIndex + 1].number}</span>
                        <span class="player-name">${players[currentIndex + 1].name}</span>
                    </div>
                    <button class="player-button" onclick="window.location.href='${players[currentIndex + 1].url}'">Ver Ficha</button>
                </div>
            </div>
        `;
    }

    gallery.innerHTML = mainPlayerHTML + nextPlayerHTML;

    const counter = document.querySelector(`.players-counter[data-position="${position}"]`);
    if (counter) {
        counter.textContent = `${currentIndex + 1}/${players.length}`;
    }

    const prevButton = document.querySelector(`.prev-button[data-position="${position}"]`);
    const nextButton = document.querySelector(`.next-button[data-position="${position}"]`);
    if (prevButton) prevButton.disabled = currentIndex === 0;
    if (nextButton) nextButton.disabled = currentIndex === players.length - 1;
}

function initGalleries() {
    Object.keys(playersData).forEach(position => {
        const gallery = document.querySelector(`.players-gallery[data-position="${position}"]`);
        if (!gallery) {
            console.error(`No se encontró .players-gallery para ${position}`);
            return;
        }
        gallery.setAttribute('data-position', position);
        updatePlayerGallery(position);
        const prevButton = document.querySelector(`.prev-button[data-position="${position}"]`);
        const nextButton = document.querySelector(`.next-button[data-position="${position}"]`);
        if (prevButton) {
            prevButton.addEventListener("click", () => {
                if (currentIndices[position] > 0) {
                    currentIndices[position]--;
                    updatePlayerGallery(position);
                }
            });
        }
        if (nextButton) {
            nextButton.addEventListener("click", () => {
                if (currentIndices[position] < playersData[position].length - 1) {
                    currentIndices[position]++;
                    updatePlayerGallery(position);
                }
            });
        }
    });
}

document.addEventListener("DOMContentLoaded", initGalleries);
