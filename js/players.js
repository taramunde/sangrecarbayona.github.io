// js/players.js
const playersData = {
    goalkeepers: [
        { src: "https://i.postimg.cc/s2YhzvPR/Aar-n-PNG-Alineaci-n.webp", alt: "Aarón", number: "13", name: "Aarón", link: "https://sangrecarbayona.blogspot.com/aaron-ficha" },
        { src: "https://i.postimg.cc/YOUR_URL/portero2.jpg", alt: "Juan Pérez", number: "1", name: "Juan Pérez", link: "https://sangrecarbayona.blogspot.com/juan-perez-ficha" },
        { src: "https://i.postimg.cc/YOUR_URL/portero3.jpg", alt: "Carlos Gómez", number: "12", name: "Carlos Gómez", link: "https://sangrecarbayona.blogspot.com/carlos-gomez-ficha" }
    ],
    defenders: [
        { src: "https://i.postimg.cc/YOUR_URL/defensa1.jpg", alt: "Nombre Defensa 1", number: "2", name: "Nombre Defensa 1", link: "https://sangrecarbayona.blogspot.com/defensa1-ficha" },
        { src: "https://i.postimg.cc/YOUR_URL/defensa2.jpg", alt: "Nombre Defensa 2", number: "3", name: "Nombre Defensa 2", link: "https://sangrecarbayona.blogspot.com/defensa2-ficha" },
        { src: "https://i.postimg.cc/YOUR_URL/defensa3.jpg", alt: "Nombre Defensa 3", number: "4", name: "Nombre Defensa 3", link: "https://sangrecarbayona.blogspot.com/defensa3-ficha" }
    ],
    midfielders: [
        { src: "https://i.postimg.cc/YOUR_URL/centrocampista1.jpg", alt: "Nombre Centrocampista 1", number: "5", name: "Nombre Centrocampista 1", link: "https://sangrecarbayona.blogspot.com/centrocampista1-ficha" },
        { src: "https://i.postimg.cc/YOUR_URL/centrocampista2.jpg", alt: "Nombre Centrocampista 2", number: "6", name: "Nombre Centrocampista 2", link: "https://sangrecarbayona.blogspot.com/centrocampista2-ficha" },
        { src: "https://i.postimg.cc/YOUR_URL/centrocampista3.jpg", alt: "Nombre Centrocampista 3", number: "7", name: "Nombre Centrocampista 3", link: "https://sangrecarbayona.blogspot.com/centrocampista3-ficha" }
    ],
    forwards: [
        { src: "https://i.postimg.cc/YOUR_URL/delanteros1.jpg", alt: "Nombre Delantero 1", number: "9", name: "Nombre Delantero 1", link: "https://sangrecarbayona.blogspot.com/delantero1-ficha" },
        { src: "https://i.postimg.cc/YOUR_URL/delanteros2.jpg", alt: "Nombre Delantero 2", number: "10", name: "Nombre Delantero 2", link: "https://sangrecarbayona.blogspot.com/delantero2-ficha" },
        { src: "https://i.postimg.cc/YOUR_URL/delanteros3.jpg", alt: "Nombre Delantero 3", number: "11", name: "Nombre Delantero 3", link: "https://sangrecarbayona.blogspot.com/delantero3-ficha" }
    ]
};

const currentIndices = {
    goalkeepers: 0,
    defenders: 0,
    midfielders: 0,
    forwards: 0
};

function updatePlayerGallery(position) {
    const mainPlayer = document.querySelector(`.main-player[data-position="${position}"]`);
    const nextPlayer = document.querySelector(`.next-player[data-position="${position}"]`);
    const mainNumber = document.querySelector(`.player-container:not(.faded) .player-number[data-position="${position}"]`);
    const mainName = document.querySelector(`.player-container:not(.faded) .player-name[data-position="${position}"]`);
    const mainButton = document.querySelector(`.player-container:not(.faded) .player-button[data-position="${position}"]`);
    const nextNumber = document.querySelector(`.player-container.faded .player-number[data-position="${position}"]`);
    const nextName = document.querySelector(`.player-container.faded .player-name[data-position="${position}"]`);
    const nextButton = document.querySelector(`.player-container.faded .player-button[data-position="${position}"]`);
    const counter = document.querySelector(`.players-counter[data-position="${position}"]`);
    const prevButton = document.querySelector(`.prev-button[data-position="${position}"]`);
    const nextButton = document.querySelector(`.next-button[data-position="${position}"]`);

    const players = playersData[position];
    const currentIndex = currentIndices[position];

    // Actualizar imagen principal
    mainPlayer.src = players[currentIndex].src;
    mainPlayer.alt = players[currentIndex].alt;
    mainNumber.textContent = players[currentIndex].number;
    mainName.textContent = players[currentIndex].name;
    mainButton.href = players[currentIndex].link;

    // Actualizar imagen secundaria
    if (currentIndex < players.length - 1) {
        nextPlayer.src = players[currentIndex + 1].src;
        nextPlayer.alt = players[currentIndex + 1].alt;
        nextNumber.textContent = players[currentIndex + 1].number;
        nextName.textContent = players[currentIndex + 1].name;
        nextButton.href = players[currentIndex + 1].link;
        nextPlayer.parentElement.style.display = "block";
    } else {
        nextPlayer.parentElement.style.display = "none";
    }

    // Actualizar contador
    counter.textContent = `${currentIndex + 1}/${players.length}`;

    // Habilitar/deshabilitar botones
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === players.length - 1;
}

// Inicializar todas las galerías
function initGalleries() {
    Object.keys(playersData).forEach(position => {
        updatePlayerGallery(position);
        document.querySelector(`.prev-button[data-position="${position}"]`).addEventListener("click", () => {
            if (currentIndices[position] > 0) {
                currentIndices[position]--;
                updatePlayerGallery(position);
            }
        });
        document.querySelector(`.next-button[data-position="${position}"]`).addEventListener("click", () => {
            if (currentIndices[position] < playersData[position].length - 1) {
                currentIndices[position]++;
                updatePlayerGallery(position);
            }
        });
    });
}

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", initGalleries);
