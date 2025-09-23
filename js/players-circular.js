// js/players-circular.js

const playersData = {
    "goalkeepers-2024-2025": [
        { src: "https://i.postimg.cc/s2YhzvPR/Aar-n-PNG-Alineaci-n.webp", alt: "Portero de prueba", number: "1", name: "Portero 24/25", url: "#" }
    ],
    "defenders-2024-2025": [
        { src: "https://i.postimg.cc/qRHtqnX7/Bailly-PNG-2.webp", alt: "Defensa de prueba", number: "2", name: "Defensa 24/25", url: "#" }
    ],
    "midfielders-2024-2025": [
        { src: "https://i.postimg.cc/763k44Wp/Sebas-Moyano-PNG.webp", alt: "Medio de prueba", number: "8", name: "Medio 24/25", url: "#" }
    ],
    "forwards-2024-2025": [
        { src: "https://i.postimg.cc/gj1gB44d/Bast-n-PNG.webp", alt: "Delantero de prueba", number: "9", name: "Delantero 24/25", url: "#" }
    ],
    "coaches-2024-2025": [
        { src: "https://i.postimg.cc/tCJB09vS/Luis-Carri-n-PNG.webp", alt: "Entrenador de prueba", number: "N/A", name: "Entrenador 24/25", url: "#" }
    ]
};

const currentIndices = {
    "goalkeepers-2024-2025": 0,
    "defenders-2024-2025": 0,
    "midfielders-2024-2025": 0,
    "forwards-2024-2025": 0,
    "coaches-2024-2025": 0
};

function createPlayerCard(player) {
    const playerCard = document.createElement("div");
    playerCard.className = "player-card";

    const image = document.createElement("img");
    image.src = player.src;
    image.alt = player.alt;

    const info = document.createElement("div");
    info.className = "player-info";

    const details = document.createElement("div");
    details.className = "player-details";

    const number = document.createElement("span");
    number.className = "player-number";
    number.textContent = player.number;

    const name = document.createElement("span");
    name.className = "player-name";
    name.textContent = player.name;

    const button = document.createElement("a");
    button.href = player.url;
    button.className = "player-button";
    button.textContent = "Ver más";

    details.appendChild(number);
    details.appendChild(name);
    info.appendChild(details);
    info.appendChild(button);
    playerCard.appendChild(image);
    playerCard.appendChild(info);

    return playerCard;
}

function updatePlayerGallery(position) {
    const gallery = document.querySelector(`.players-gallery[data-position="${position}"]`);
    const counter = document.querySelector(`.players-counter[data-position="${position}"]`);
    const players = playersData[position];
    const currentIndex = currentIndices[position];

    if (!gallery || !players) {
        return;
    }

    gallery.innerHTML = '';
    const player = players[currentIndex];
    if (player) {
        gallery.appendChild(createPlayerCard(player));
        counter.textContent = `${currentIndex + 1}/${players.length}`;
    } else {
        counter.textContent = "0/0";
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
