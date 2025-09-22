// js/players.js
const playersData = {
    goalkeepers: [
        { src: "https://i.postimg.cc/s2YhzvPR/Aar-n-PNG-Alineaci-n.webp", alt: "Aarón" },
        { src: "https://i.postimg.cc/your-image/portero2.jpg", alt: "Nombre Portero 2" },
        { src: "https://i.postimg.cc/your-image/portero3.jpg", alt: "Nombre Portero 3" }
    ],
    defenders: [
        { src: "https://i.postimg.cc/your-image/defensa1.jpg", alt: "Nombre Defensa 1" },
        { src: "https://i.postimg.cc/your-image/defensa2.jpg", alt: "Nombre Defensa 2" },
        { src: "https://i.postimg.cc/your-image/defensa3.jpg", alt: "Nombre Defensa 3" }
    ],
    midfielders: [
        { src: "https://i.postimg.cc/your-image/centrocampista1.jpg", alt: "Nombre Centrocampista 1" },
        { src: "https://i.postimg.cc/your-image/centrocampista2.jpg", alt: "Nombre Centrocampista 2" },
        { src: "https://i.postimg.cc/your-image/centrocampista3.jpg", alt: "Nombre Centrocampista 3" }
    ],
    forwards: [
        { src: "https://i.postimg.cc/your-image/delanteros1.jpg", alt: "Nombre Delantero 1" },
        { src: "https://i.postimg.cc/your-image/delanteros2.jpg", alt: "Nombre Delantero 2" },
        { src: "https://i.postimg.cc/your-image/delanteros3.jpg", alt: "Nombre Delantero 3" }
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
    const counter = document.querySelector(`.players-counter[data-position="${position}"]`);
    const prevButton = document.querySelector(`.prev-button[data-position="${position}"]`);
    const nextButton = document.querySelector(`.next-button[data-position="${position}"]`);

    const players = playersData[position];
    const currentIndex = currentIndices[position];

    // Actualizar imágenes
    mainPlayer.src = players[currentIndex].src;
    mainPlayer.alt = players[currentIndex].alt;

    if (currentIndex < players.length - 1) {
        nextPlayer.src = players[currentIndex + 1].src;
        nextPlayer.alt = players[currentIndex + 1].alt;
        nextPlayer.style.display = "block";
    } else {
        nextPlayer.style.display = "none";
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
