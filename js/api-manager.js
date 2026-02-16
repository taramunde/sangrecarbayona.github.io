// js/api-manager.js

const API_CONFIG = {
    key: "79616dc2c53f61d4bb90aa5f82315aeb", // <--- NO OLVIDES PONER TU KEY
    teamId: 532,     
    leagueId: 140,   // LaLiga EA Sports (Primera)
    season: 2025,    // Temporada 25/26
    cacheTime: 3600000 // 1 hora de caché para ahorrar peticiones
};

// --- MOTOR DE PETICIONES CON CACHÉ ---
async function fetchData(endpoint, cacheKey) {
    const now = new Date().getTime();
    const cached = localStorage.getItem(cacheKey);
    
    if (cached) {
        const data = JSON.parse(cached);
        if (now - data.timestamp < API_CONFIG.cacheTime) {
            return data.content;
        }
    }

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
        if (json.response) {
            localStorage.setItem(cacheKey, JSON.stringify({
                timestamp: now,
                content: json.response
            }));
            return json.response;
        }
        return null;
    } catch (error) {
        console.error("Error API:", error);
        return null;
    }
}

// --- 1. CARGAR MARCADORES (INDEX) ---
async function loadMatches() {
    const nextMatchData = await fetchData(`fixtures?team=${API_CONFIG.teamId}&next=1`, 'nextMatch_oviedo');
    if (nextMatchData && nextMatchData.length > 0) {
        updateMatchWidget('next-match', nextMatchData[0]);
        const targetDate = nextMatchData[0].fixture.date;
        // Iniciar cuenta atrás
        if(typeof updateTimer === 'function') updateTimer(targetDate);
    }

    const lastMatchData = await fetchData(`fixtures?team=${API_CONFIG.teamId}&last=1`, 'lastMatch_oviedo');
    if (lastMatchData && lastMatchData.length > 0) {
        updateMatchWidget('current-match', lastMatchData[0]);
    }
}

function updateMatchWidget(elementId, match) {
    const container = document.getElementById(elementId);
    if (!container) return;

    const goals = match.goals;
    const date = new Date(match.fixture.date);
    
    container.querySelector('.team-home img').src = match.teams.home.logo;
    container.querySelector('.team-home .team-code').textContent = match.teams.home.name.substring(0,3).toUpperCase();
    container.querySelector('.team-visitor img').src = match.teams.away.logo;
    container.querySelector('.team-visitor .team-code').textContent = match.teams.away.name.substring(0,3).toUpperCase();

    const scoreElement = container.querySelector('.score');
    if (match.fixture.status.short === 'NS') {
        scoreElement.textContent = "VS";
        container.querySelector('.time u').textContent = date.toLocaleTimeString('es-ES', {hour:'2-digit', minute:'2-digit'});
    } else {
        scoreElement.textContent = `${goals.home} - ${goals.away}`;
        container.querySelector('.time u').textContent = match.fixture.status.short;
    }
}

// --- 2. CARGAR JORNADA COMPLETA (NUEVO) ---
async function loadCurrentRound() {
    const container = document.getElementById('jornada-container');
    if (!container) return;

    // A. Obtener cuál es la jornada actual de la liga
    const rounds = await fetchData(`fixtures/rounds?league=${API_CONFIG.leagueId}&season=${API_CONFIG.season}&current=true`, 'current_round_name');
    if (!rounds || rounds.length === 0) return;
    const currentRound = rounds[0];

    // B. Obtener todos los partidos de esa jornada
    const matches = await fetchData(`fixtures?league=${API_CONFIG.leagueId}&season=${API_CONFIG.season}&round=${encodeURIComponent(currentRound)}`, `matches_${currentRound.replace(/\s/g, '_')}`);
    
    if (matches) {
        // Título de la jornada (Limpiamos el texto "Regular Season - ")
        let cleanTitle = currentRound.replace('Regular Season - ', 'JORNADA ');
        let html = `<h2 class="jornada-main-title">${cleanTitle}</h2><div class="jornada-flex-grid">`;
        
        matches.sort((a, b) => new Date(a.fixture.date) - new Date(b.fixture.date)); // Ordenar por hora

        matches.forEach(m => {
            const date = new Date(m.fixture.date);
            const time = date.toLocaleTimeString('es-ES', {hour: '2-digit', minute:'2-digit'});
            const day = date.toLocaleDateString('es-ES', {day: '2-digit', month: '2-digit'});
            const isFinished = m.fixture.status.short === 'FT';
            const isLive = ['1H', '2H', 'HT'].includes(m.fixture.status.short);
            
            html += `
                <div class="jornada-match-card ${isLive ? 'live-border' : ''}">
                    <div class="j-team">
                        <img src="${m.teams.home.logo}" loading="lazy">
                        <span class="j-team-name">${m.teams.home.name}</span>
                    </div>
                    
                    <div class="j-result">
                        ${isFinished || isLive ? 
                            `<span class="j-score ${isLive ? 'live-text' : ''}">${m.goals.home} - ${m.goals.away}</span>` : 
                            `<span class="j-time">${day} | ${time}</span>`
                        }
                        ${isLive ? '<span class="live-dot">● EN VIVO</span>' : ''}
                    </div>

                    <div class="j-team">
                        <img src="${m.teams.away.logo}" loading="lazy">
                        <span class="j-team-name">${m.teams.away.name}</span>
                    </div>
                </div>
            `;
        });
        
        html += `</div>`;
        container.innerHTML = html;
    }
}

// --- 3. CARGAR CLASIFICACIÓN (CLASIFICACION.HTML) ---
async function loadStandings() {
    const tableBody = document.getElementById('cuerpoTabla');
    if (!tableBody) return;

    const data = await fetchData(`standings?league=${API_CONFIG.leagueId}&season=${API_CONFIG.season}`, 'standings_oviedo');
    if (data && data.length > 0) {
        const standings = data[0].league.standings[0];
        let html = '';
        standings.forEach(team => {
            const isOviedo = team.team.id === API_CONFIG.teamId ? 'class="oviedo-highlight"' : '';
            const pClass = team.rank <= 4 ? 'champions' : (team.rank <= 6 ? 'conference' : (team.rank >= 18 ? 'descenso' : ''));
            html += `
                <tr ${isOviedo}>
                    <td><span class="rank-badge ${pClass}">${team.rank}</span></td>
                    <td class="team-cell">
                        <img src="${team.team.logo}" class="team-mini-logo">
                        <span class="team-name-table">${team.team.name}</span>
                    </td>
                    <td><strong>${team.points}</strong></td>
                    <td>${team.all.played}</td>
                    <td>${team.goalsDiff}</td>
                </tr>`;
        });
        tableBody.innerHTML = html;
    }
}

// --- INICIO ---
document.addEventListener('DOMContentLoaded', () => {
    loadMatches();
    loadCurrentRound();
    loadStandings();
});