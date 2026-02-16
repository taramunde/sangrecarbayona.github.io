// js/api-manager.js

const API_CONFIG = {
    key: "79616dc2c53f61d4bb90aa5f82315aeb", // <--- PEGA TU API KEY AQUÍ
    teamId: 532,     // ID del Real Oviedo en API-Football
    leagueId: 140,   // ID de LaLiga EA Sports (Primera División)
    season: 2025,    // Año de inicio de la temporada actual
    cacheTime: 3600000 // 1 hora en milisegundos (para ahorrar peticiones)
};

// --- LÓGICA DEL SISTEMA (NO TOCAR) ---

async function fetchData(endpoint, cacheKey) {
    const now = new Date().getTime();
    const cached = localStorage.getItem(cacheKey);
    
    // 1. Revisar si tenemos datos guardados recientes
    if (cached) {
        const data = JSON.parse(cached);
        if (now - data.timestamp < API_CONFIG.cacheTime) {
            console.log(`Cargando ${cacheKey} desde caché...`);
            return data.content;
        }
    }

    // 2. Si no, pedimos a la API
    console.log(`Pidiendo ${cacheKey} a la API...`);
    const url = `https://v3.football.api-sports.io/${endpoint}`;
    
    try {
        const response = await fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": API_CONFIG.key
            }
        });

        const json = await response.json();
        
        // Guardar en caché si no hay errores
        if (!json.errors || Object.keys(json.errors).length === 0) {
            localStorage.setItem(cacheKey, JSON.stringify({
                timestamp: now,
                content: json.response
            }));
            return json.response;
        } else {
            console.error("Error API:", json.errors);
            return null;
        }
    } catch (error) {
        console.error("Error de red:", error);
        return null;
    }
}

// --- FUNCIONES PARA PINTAR LA WEB ---

// 1. Cargar Próximo Partido y Partido Anterior (Index)
async function loadMatches() {
    // Próximo Partido
    const nextMatchData = await fetchData(`fixtures?team=${API_CONFIG.teamId}&next=1`, 'nextMatch_oviedo');
    if (nextMatchData && nextMatchData.length > 0) {
        updateMatchWidget('next-match', nextMatchData[0]);
        updateTimer(nextMatchData[0].fixture.date);
    }

    // Partido Anterior (Resultado)
    const lastMatchData = await fetchData(`fixtures?team=${API_CONFIG.teamId}&last=1`, 'lastMatch_oviedo');
    if (lastMatchData && lastMatchData.length > 0) {
        updateMatchWidget('current-match', lastMatchData[0]);
    }
}

// Función auxiliar para rellenar los marcadores
function updateMatchWidget(elementId, match) {
    const container = document.getElementById(elementId);
    if (!container) return;

    const home = match.teams.home;
    const away = match.teams.away;
    const goals = match.goals;
    const date = new Date(match.fixture.date);
    
    // Formato de hora y fecha
    const timeStr = date.toLocaleTimeString('es-ES', {hour: '2-digit', minute:'2-digit'});
    const dateStr = date.toLocaleDateString('es-ES', {day: 'numeric', month: 'short'});

    // Rellenar HTML
    container.querySelector('.team-home img').src = home.logo;
    container.querySelector('.team-home .team-code').textContent = home.name.substring(0, 3).toUpperCase();
    
    container.querySelector('.team-visitor img').src = away.logo;
    container.querySelector('.team-visitor .team-code').textContent = away.name.substring(0, 3).toUpperCase();

    // Si es el próximo partido, mostramos la hora. Si es el anterior, el resultado.
    const scoreElement = container.querySelector('.score');
    if (match.fixture.status.short === 'NS') { // No Empezado
        scoreElement.textContent = "VS";
        container.querySelector('.time u').textContent = timeStr;
        container.querySelector('.time small').textContent = dateStr;
    } else { // Terminado o en juego
        scoreElement.textContent = `${goals.home} - ${goals.away}`;
        container.querySelector('.time u').textContent = match.fixture.status.short; // FT, 1H, etc.
        container.querySelector('.time small').textContent = dateStr;
    }
}

// 2. Cargar Clasificación (Clasificacion.html)
async function loadStandings() {
    const tableBody = document.getElementById('cuerpoTabla');
    if (!tableBody) return;

    const data = await fetchData(`standings?league=${API_CONFIG.leagueId}&season=${API_CONFIG.season}`, 'standings_oviedo');
    
    if (data && data.length > 0) {
        const standings = data[0].league.standings[0];
        let html = '';

        standings.forEach(team => {
            // Destacar al Oviedo
            const isOviedo = team.team.id === API_CONFIG.teamId ? 'style="background-color: #e6f2ff; font-weight:bold;"' : '';
            const promotionClass = getPromotionClass(team.rank); // Función para colores de ascenso

            html += `
                <tr ${isOviedo}>
                    <td><span class="rank-badge ${promotionClass}">${team.rank}</span></td>
                    <td class="team-cell">
                        <img src="${team.team.logo}" alt="${team.team.name}" class="team-mini-logo">
                        <span class="team-name-table">${team.team.name}</span>
                    </td>
                    <td><strong>${team.points}</strong></td>
                    <td>${team.all.played}</td>
                    <td class="desktop-only">${team.all.win}</td>
                    <td class="desktop-only">${team.all.draw}</td>
                    <td class="desktop-only">${team.all.lose}</td>
                    <td class="desktop-only">${team.all.goals.for}</td>
                    <td class="desktop-only">${team.all.goals.against}</td>
                    <td>${team.goalsDiff}</td>
                </tr>
            `;
        });
        tableBody.innerHTML = html;
    }
}

function getPromotionClass(rank) {
    if (rank <= 4) return 'champions';    // Champions League (Verde)
    if (rank <= 6) return 'conference';   // Europa / Conference (Dorado)
    if (rank >= 18) return 'descenso';    // Descenso a Segunda (Rojo)
    return '';
}

// 3. Cuenta Atrás
function updateTimer(targetDateStr) {
    const timerContainer = document.getElementById('timer');
    if(!timerContainer) return;

    const targetDate = new Date(targetDateStr).getTime();

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(interval);
            timerContainer.innerHTML = "¡PARTIDO EN JUEGO!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        timerContainer.innerHTML = `
            <div class="time-box"><span>${days}</span>DÍAS</div>
            <div class="time-box"><span>${hours}</span>HRS</div>
            <div class="time-box"><span>${minutes}</span>MIN</div>
        `;
    }, 1000);
}

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    // Detectar en qué página estamos para cargar lo necesario
    if (document.getElementById('next-match')) {
        loadMatches();
    }
    if (document.getElementById('cuerpoTabla')) {
        loadStandings();
    }
});