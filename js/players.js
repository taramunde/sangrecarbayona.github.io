// js/players.js - VERSIÓN OPTIMIZADA
// Este archivo usa players-database.js y seasons-squads.js

// Función para obtener datos de jugadores de una temporada
function getSeasonPlayers(season) {
    if (!seasonsSquads[season]) {
        console.error(`Temporada ${season} no encontrada`);
        return null;
    }
    
    const seasonData = {};
    const squad = seasonsSquads[season];
    
    // Para cada posición (porteros, defensas, etc.)
    Object.keys(squad).forEach(position => {
        seasonData[position] = [];
        
        // Para cada jugador ID en esa posición
        squad[position].forEach(playerId => {
            const playerData = playersDatabase[playerId];
            
            if (playerData) {
                seasonData[position].push(playerData);
            } else {
                console.warn(`Jugador ${playerId} no encontrado en la base de datos`);
            }
        });
    });
    
    return seasonData;
}

// Índices actuales para cada posición
const currentIndices = {
    goalkeepers: 0,
    defenders: 0,
    midfielders: 0,
    forwards: 0,
    coaches: 0
};

let currentSeason = '';
let currentSeasonData = null;

function updatePlayerGallery(position) {
    const gallery = document.querySelector(`.players-gallery[data-position="${position}"]`);
    if (!gallery) {
        console.error(`No se encontró .players-gallery para ${position}`);
        return;
    }

    const players = currentSeasonData[position];
    if (!players || players.length === 0) {
        gallery.innerHTML = '<p>No hay jugadores disponibles para esta posición</p>';
        return;
    }

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
    
    preloadImages(position);
}

function initGalleries() {
    const body = document.body;
    currentSeason = body.getAttribute('data-season');
    
    if (!currentSeason) {
        console.error('No se ha especificado una temporada válida en el body de la página.');
        return;
    }

    // Obtener los datos de la temporada usando la nueva estructura
    currentSeasonData = getSeasonPlayers(currentSeason);
    
    if (!currentSeasonData) {
        console.error('No se pudieron cargar los datos de la temporada');
        return;
    }

    // Precargar todas las imágenes de la temporada actual
    preloadAllImagesForSeason();

    Object.keys(currentSeasonData).forEach(position => {
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
                if (currentIndices[position] < currentSeasonData[position].length - 1) {
                    currentIndices[position]++;
                    updatePlayerGallery(position);
                }
            });
        }
    });
}

// Función para precargar imágenes
function preloadImages(position) {
    const players = currentSeasonData[position];
    const currentIndex = currentIndices[position];
    
    // Precargar la imagen actual y las 2 siguientes
    for (let i = currentIndex; i < Math.min(currentIndex + 3, players.length); i++) {
        const img = new Image();
        img.src = players[i].src;
    }
}

// Función para precargar todas las imágenes de una temporada
function preloadAllImagesForSeason() {
    if (!currentSeasonData) return;
    
    Object.keys(currentSeasonData).forEach(position => {
        const players = currentSeasonData[position];
        players.forEach(player => {
            const img = new Image();
            img.src = player.src;
        });
    });
}

document.addEventListener("DOMContentLoaded", initGalleries);
