// js/players.js
const playersData = {
    // Temporada actual (datos que ya tenías)
    goalkeepers: [
        { src: "https://i.postimg.cc/s2YhzvPR/Aar-n-PNG-Alineaci-n.webp", alt: "Portero 1", number: "13", name: "Aarón", url: "#" },
        { src: "https://i.postimg.cc/sgPM0mk4/Moldovan-PNG-2.webp", alt: "Portero 2", number: "1", name: "Moldovan", url: "#" },
        { src: "https://i.postimg.cc/XJqXqbps/Narv-ez-PNG.webp", alt: "Portero 3", number: "26", name: "Narváez", url: "#" }
    ],
    defenders: [
        { src: "https://i.postimg.cc/qRHtqnX7/Bailly-PNG-2.webp", alt: "Defensa 1", number: "2", name: "Bailly", url: "#" },
        { src: "https://i.postimg.cc/15bMB7y7/Rahim-PNG.webp", alt: "Defensa 2", number: "3", name: "Rahim", url: "#" },
        { src: "https://i.postimg.cc/V6ScxHbr/David-Costas-PNG.webp", alt: "Defensa 3", number: "4", name: "David Costas", url: "#" },
        { src: "https://i.postimg.cc/hGv5D208/Dani-Calvo-PNG.webp", alt: "Defensa 4", number: "6", name: "Dani Calvo", url: "#" },
        { src: "https://i.postimg.cc/XJqjJ04r/Viti-PNG.webp", alt: "Defensa 5", number: "7", name: "Viti", url: "#" },
        { src: "https://i.postimg.cc/k47NnC2T/Jimmy-PNG.webp", alt: "Defensa 6", number: "8", name: "Jimmy", url: "#" },
        { src: "https://i.postimg.cc/85z1NqJk/Borja-Sanchez-PNG-Alineaci-n.webp", alt: "Defensa 7", number: "10", name: "Borja Sánchez", url: "#" },
        { src: "https://i.postimg.cc/44rD52b5/Luengo-PNG-Alineaci-n.webp", alt: "Defensa 8", number: "12", name: "Luengo", url: "#" },
        { src: "https://i.postimg.cc/6qH6sQvH/Oier-PNG.webp", alt: "Defensa 9", number: "15", name: "Oier Luengo", url: "#" },
        { src: "https://i.postimg.cc/XJPtXp4G/Paulino-PNG.webp", alt: "Defensa 10", number: "17", name: "Paulino", url: "#" },
        { src: "https://i.postimg.cc/Xvm6n6tP/Lucas-Ahijado-PNG.webp", alt: "Defensa 11", number: "20", name: "Lucas Ahijado", url: "#" },
        { src: "https://i.postimg.cc/vBC1p51q/Bretones-PNG.webp", alt: "Defensa 12", number: "22", name: "Abel Bretones", url: "#" }
    ],
    midfielders: [
        { src: "https://i.postimg.cc/763k44Wp/Sebas-Moyano-PNG.webp", alt: "Medio 1", number: "5", name: "Sebas Moyano", url: "#" },
        { src: "https://i.postimg.cc/xT0d207t/Alemao-PNG.webp", alt: "Medio 2", number: "9", name: "Alemao", url: "#" },
        { src: "https://i.postimg.cc/4xb7878g/Masca-PNG.webp", alt: "Medio 3", number: "11", name: "Masca", url: "#" },
        { src: "https://i.postimg.cc/PqjNf1sF/Mier-PNG.webp", alt: "Medio 4", number: "14", name: "Santi Cazorla", url: "#" },
        { src: "https://i.postimg.cc/k4qV1yvJ/Cardero-PNG.webp", alt: "Medio 5", number: "18", name: "Cardero", url: "#" },
        { src: "https://i.postimg.cc/T1917Q9n/Yayo-PNG.webp", alt: "Medio 6", number: "19", name: "Yayo", url: "#" },
        { src: "https://i.postimg.cc/Y9D922w0/Viti-PNG.webp", alt: "Medio 7", number: "21", name: "Jaime Seoane", url: "#" },
        { src: "https://i.postimg.cc/50t0V6fK/Koba-PNG-Alineaci-n.webp", alt: "Medio 8", number: "24", name: "Koba Lein", url: "#" },
        { src: "https://i.postimg.cc/Xvm6n6tP/Lucas-Ahijado-PNG.webp", alt: "Medio 9", number: "27", name: "Lucas Ahijado", url: "#" }
    ],
    forwards: [
        { src: "https://i.postimg.cc/gj1gB44d/Bast-n-PNG.webp", alt: "Delantero 1", number: "16", name: "Bastón", url: "#" }
    ],
    coaches: [
        { src: "https://i.postimg.cc/tCJB09vS/Luis-Carri-n-PNG.webp", alt: "Entrenador", number: "N/A", name: "Luis Carrión", url: "#" }
    ],

    // Datos de la temporada 2024/2025
    "goalkeepers-2024-2025": [
        { src: "URL_IMAGEN_PORTERO_24_25.webp", alt: "Portero de prueba", number: "1", name: "Portero 24/25", url: "#" }
    ],
    "defenders-2024-2025": [
        { src: "URL_IMAGEN_DEFENSA_24_25.webp", alt: "Defensa de prueba", number: "2", name: "Defensa 24/25", url: "#" }
    ],
    "midfielders-2024-2025": [
        { src: "URL_IMAGEN_MEDIO_24_25.webp", alt: "Medio de prueba", number: "8", name: "Medio 24/25", url: "#" }
    ],
    "forwards-2024-2025": [
        { src: "URL_IMAGEN_DELANTERO_24_25.webp", alt: "Delantero de prueba", number: "9", name: "Delantero 24/25", url: "#" }
    ],
    "coaches-2024-2025": [
        { src: "URL_IMAGEN_ENTRENADOR_24_25.webp", alt: "Entrenador de prueba", number: "N/A", name: "Entrenador 24/25", url: "#" }
    ],

    // Datos de la temporada 2023/2024
    "goalkeepers-2023-2024": [
        { src: "URL_IMAGEN_PORTERO_23_24.webp", alt: "Portero de prueba", number: "1", name: "Portero 23/24", url: "#" }
    ],
    "defenders-2023-2024": [
        { src: "URL_IMAGEN_DEFENSA_23_24.webp", alt: "Defensa de prueba", number: "2", name: "Defensa 23/24", url: "#" }
    ],
    "midfielders-2023-2024": [
        { src: "URL_IMAGEN_MEDIO_23_24.webp", alt: "Medio de prueba", number: "8", name: "Medio 23/24", url: "#" }
    ],
    "forwards-2023-2024": [
        { src: "URL_IMAGEN_DELANTERO_23_24.webp", alt: "Delantero de prueba", number: "9", name: "Delantero 23/24", url: "#" }
    ],
    "coaches-2023-2024": [
        { src: "URL_IMAGEN_ENTRENADOR_23_24.webp", alt: "Entrenador de prueba", number: "N/A", name: "Entrenador 23/24", url: "#" }
    ],

    // Datos de la temporada 2022/2023
    "goalkeepers-2022-2023": [
        { src: "URL_IMAGEN_PORTERO_22_23.webp", alt: "Portero de prueba", number: "1", name: "Portero 22/23", url: "#" }
    ],
    "defenders-2022-2023": [
        { src: "URL_IMAGEN_DEFENSA_22_23.webp", alt: "Defensa de prueba", number: "2", name: "Defensa 22/23", url: "#" }
    ],
    "midfielders-2022-2023": [
        { src: "URL_IMAGEN_MEDIO_22_23.webp", alt: "Medio de prueba", number: "8", name: "Medio 22/23", url: "#" }
    ],
    "forwards-2022-2023": [
        { src: "URL_IMAGEN_DELANTERO_22_23.webp", alt: "Delantero de prueba", number: "9", name: "Delantero 22/23", url: "#" }
    ],
    "coaches-2022-2023": [
        { src: "URL_IMAGEN_ENTRENADOR_22_23.webp", alt: "Entrenador de prueba", number: "N/A", name: "Entrenador 22/23", url: "#" }
    ],

    // Datos de la temporada 2021/2022
    "goalkeepers-2021-2022": [
        { src: "URL_IMAGEN_PORTERO_21_22.webp", alt: "Portero de prueba", number: "1", name: "Portero 21/22", url: "#" }
    ],
    "defenders-2021-2022": [
        { src: "URL_IMAGEN_DEFENSA_21_22.webp", alt: "Defensa de prueba", number: "2", name: "Defensa 21/22", url: "#" }
    ],
    "midfielders-2021-2022": [
        { src: "URL_IMAGEN_MEDIO_21_22.webp", alt: "Medio de prueba", number: "8", name: "Medio 21/22", url: "#" }
    ],
    "forwards-2021-2022": [
        { src: "URL_IMAGEN_DELANTERO_21_22.webp", alt: "Delantero de prueba", number: "9", name: "Delantero 21/22", url: "#" }
    ],
    "coaches-2021-2022": [
        { src: "URL_IMAGEN_ENTRENADOR_21_22.webp", alt: "Entrenador de prueba", number: "N/A", name: "Entrenador 21/22", url: "#" }
    ],
    
    // Datos de la temporada 2020/2021
    "goalkeepers-2020-2021": [
        { src: "URL_IMAGEN_PORTERO_20_21.webp", alt: "Portero de prueba", number: "1", name: "Portero 20/21", url: "#" }
    ],
    "defenders-2020-2021": [
        { src: "URL_IMAGEN_DEFENSA_20_21.webp", alt: "Defensa de prueba", number: "2", name: "Defensa 20/21", url: "#" }
    ],
    "midfielders-2020-2021": [
        { src: "URL_IMAGEN_MEDIO_20_21.webp", alt: "Medio de prueba", number: "8", name: "Medio 20/21", url: "#" }
    ],
    "forwards-2020-2021": [
        { src: "URL_IMAGEN_DELANTERO_20_21.webp", alt: "Delantero de prueba", number: "9", name: "Delantero 20/21", url: "#" }
    ],
    "coaches-2020-2021": [
        { src: "URL_IMAGEN_ENTRENADOR_20_21.webp", alt: "Entrenador de prueba", number: "N/A", name: "Entrenador 20/21", url: "#" }
    ]
};

const currentIndices = {
    goalkeepers: 0,
    defenders: 0,
    midfielders: 0,
    forwards: 0,
    coaches: 0,
    "goalkeepers-2024-2025": 0,
    "defenders-2024-2025": 0,
    "midfielders-2024-2025": 0,
    "forwards-2024-2025": 0,
    "coaches-2024-2025": 0,
    "goalkeepers-2023-2024": 0,
    "defenders-2023-2024": 0,
    "midfielders-2023-2024": 0,
    "forwards-2023-2024": 0,
    "coaches-2023-2024": 0,
    "goalkeepers-2022-2023": 0,
    "defenders-2022-2023": 0,
    "midfielders-2022-2023": 0,
    "forwards-2022-2023": 0,
    "coaches-2022-2023": 0,
    "goalkeepers-2021-2022": 0,
    "defenders-2021-2022": 0,
    "midfielders-2021-2022": 0,
    "forwards-2021-2022": 0,
    "coaches-2021-2022": 0,
    "goalkeepers-2020-2021": 0,
    "defenders-2020-2021": 0,
    "midfielders-2020-2021": 0,
    "forwards-2020-2021": 0,
    "coaches-2020-2021": 0
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

    if (!gallery || !players || players.length === 0) {
        gallery.innerHTML = '';
        counter.textContent = `0/0`;
        const prevButton = document.querySelector(`.prev-button[data-position="${position}"]`);
        const nextButton = document.querySelector(`.next-button[data-position="${position}"]`);
        if (prevButton) prevButton.disabled = true;
        if (nextButton) nextButton.disabled = true;
        return;
    }
    
    gallery.innerHTML = '';
    const playerOne = createPlayerCard(players[currentIndex]);
    gallery.appendChild(playerOne);

    if (players.length > 1) {
        const nextIndex = (currentIndex + 1) % players.length;
        const playerTwo = createPlayerCard(players[nextIndex]);
        playerTwo.classList.add('faded');
        gallery.appendChild(playerTwo);
    }

    counter.textContent = `${currentIndex + 1}/${players.length}`;

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
