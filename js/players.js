// js/players.js
const playersData = {
    goalkeepers: [
        { src: "https://i.postimg.cc/s2YhzvPR/Aar-n-PNG-Alineaci-n.webp", alt: "Aarón", number: "13", name: "Aarón", link: "https://sangrecarbayona.blogspot.com/aaron-ficha" },
        { src: "https://i.postimg.cc/sgPM0mk4/Moldovan-PNG-2.webp", alt: "Moldovan", number: "1", name: "Moldovan", link: "https://sangrecarbayona.blogspot.com/moldovan-ficha" },
        { src: "https://i.postimg.cc/XJqXqbps/Narv-ez-PNG.webp", alt: "Narváez", number: "-", name: "Narváez", link: "https://sangrecarbayona.blogspot.com/narvaez-ficha" }
    ],
    defenders: [
        { src: "https://i.postimg.cc/EXAMPLE_URL/defensa1.webp", alt: "Defensa 1", number: "2", name: "Defensa 1", link: "https://sangrecarbayona.blogspot.com/defensa1-ficha" },
        { src: "https://i.postimg.cc/EXAMPLE_URL/defensa2.webp", alt: "Defensa 2", number: "3", name: "Defensa 2", link: "https://sangrecarbayona.blogspot.com/defensa2-ficha" },
        { src: "https://i.postimg.cc/EXAMPLE_URL/defensa3.webp", alt: "Defensa 3", number: "4", name: "Defensa 3", link: "https://sangrecarbayona.blogspot.com/defensa3-ficha" }
    ],
    midfielders: [
        { src: "https://i.postimg.cc/EXAMPLE_URL/centrocampista1.webp", alt: "Centrocampista 1", number: "5", name: "Centrocampista 1", link: "https://sangrecarbayona.blogspot.com/centrocampista1-ficha" },
        { src: "https://i.postimg.cc/EXAMPLE_URL/centrocampista2.webp", alt: "Centrocampista 2", number: "6", name: "Centrocampista 2", link: "https://sangrecarbayona.blogspot.com/centrocampista2-ficha" },
        { src: "https://i.postimg.cc/EXAMPLE_URL/centrocampista3.webp", alt: "Centrocampista 3", number: "7", name: "Centrocampista 3", link: "https://sangrecarbayona.blogspot.com/centrocampista3-ficha" }
    ],
    forwards: [
        { src: "https://i.postimg.cc/EXAMPLE_URL/delantero1.webp", alt: "Delantero 1", number: "9", name: "Delantero 1", link: "https://sangrecarbayona.blogspot.com/delantero1-ficha" },
        { src: "https://i.postimg.cc/EXAMPLE_URL/delantero2.webp", alt: "Delantero 2", number: "10", name: "Delantero 2", link: "https://sangrecarbayona.blogspot.com/delantero2-ficha" },
        { src: "https://i.postimg.cc/EXAMPLE_URL/delantero3.webp", alt: "Delantero 3", number: "11", name: "Delantero 3", link: "https://sangrecarbayona.blogspot.com/delantero3-ficha" }
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

    // Verificar que los elementos existen
    if (!mainPlayer || !mainNumber || !mainName || !mainButton || !counter || !prevButton || !nextButton) {
        console.error(`Elementos no encontrados para la posición: ${position}`);
        return;
    }

    // Actualizar imagen principal
    mainPlayer.src = players[currentIndex].src;
    mainPlayer.alt = players[currentIndex].alt;
    mainNumber.textContent = players[currentIndex].number;
    mainName.textContent = players[currentIndex].name;
    mainButton.href = players[currentIndex].link;

    // Actualizar imagen secundaria
    if (currentIndex < players.length - 1 && nextPlayer && nextNumber && nextName && nextButton) {
        nextPlayer.src = players[currentIndex + 1].src;
        nextPlayer.alt = players[currentIndex + 1].alt;
        nextNumber.textContent = players[currentIndex + 1].number;
        nextName.textContent = players[currentIndex + 1].name;
        nextButton.href = players[currentIndex + 1].link;
        nextPlayer.parentElement.style.display = "block";
    } else {
        if (nextPlayer) nextPlayer.parentElement.style.display = "none";
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

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    console.log("Iniciando galerías...");
    initGalleries();
});
