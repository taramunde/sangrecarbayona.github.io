// js/api-manager.js

const API_CONFIG = {
    key: "79616dc2c53f61d4bb90aa5f82315aeb",
    teamId: 532,       // Real Oviedo
    leagueId: 140,     // LaLiga EA Sports (Primera)
    season: 2024,      // Temporada 24/25 (plan gratuito llega hasta 2024)
    cacheTime: 3600000 // 1 hora de caché
};

// =============================================
// MOTOR DE PETICIONES CON CACHÉ
// =============================================
async function fetchData(endpoint, cacheKey) {
    const now = Date.now();
    const cached = localStorage.getItem(cacheKey);

    if (cached) {
        try {
            const data = JSON.parse(cached);
            if (now - data.timestamp < API_CONFIG.cacheTime) {
                return data.content;
            }
        } catch(e) {
            localStorage.removeItem(cacheKey); // caché corrupta, borrar
        }
    }

    const url = `https://v3.football.api-sports.io/${endpoint}`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'v3.football.api-sports.io',
                'x-rapidapi-key': API_CONFIG.key
            }
        });
        const json = await response.json();

        if (json.errors && Object.keys(json.errors).length > 0) {
            console.error('API-Football error:', json.errors);
            return null;
        }

        if (json.response) {
            localStorage.setItem(cacheKey, JSON.stringify({
                timestamp: now,
                content: json.response
            }));
            return json.response;
        }
        return null;
    } catch (error) {
        console.error('Error API:', error);
        return null;
    }
}

// =============================================
// 1. MARCADORES (INDEX)
// =============================================
async function loadMatches() {
    const nextMatchData = await fetchData(
        `fixtures?team=${API_CONFIG.teamId}&next=1`,
        'nextMatch_oviedo'
    );
    if (nextMatchData && nextMatchData.length > 0) {
        updateMatchWidget('next-match', nextMatchData[0]);
        const targetDate = nextMatchData[0].fixture.date;
        if (typeof updateTimer === 'function') updateTimer(targetDate);
    }

    const lastMatchData = await fetchData(
        `fixtures?team=${API_CONFIG.teamId}&last=1`,
        'lastMatch_oviedo'
    );
    if (lastMatchData && lastMatchData.length > 0) {
        updateMatchWidget('current-match', lastMatchData[0]);
    }
}

function updateMatchWidget(elementId, match) {
    const container = document.getElementById(elementId);
    if (!container) return;

    const goals = match.goals;
    const date  = new Date(match.fixture.date);

    const homeImg  = container.querySelector('.team-home img');
    const homeCode = container.querySelector('.team-home .team-code');
    const awayImg  = container.querySelector('.team-visitor img');
    const awayCode = container.querySelector('.team-visitor .team-code');
    const scoreEl  = container.querySelector('.score');
    const timeEl   = container.querySelector('.time u');

    if (homeImg)  homeImg.src           = match.teams.home.logo;
    if (homeCode) homeCode.textContent  = match.teams.home.name.substring(0, 3).toUpperCase();
    if (awayImg)  awayImg.src           = match.teams.away.logo;
    if (awayCode) awayCode.textContent  = match.teams.away.name.substring(0, 3).toUpperCase();

    if (match.fixture.status.short === 'NS') {
        if (scoreEl) scoreEl.textContent = 'VS';
        if (timeEl)  timeEl.textContent  = date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
    } else {
        if (scoreEl) scoreEl.textContent = `${goals.home} - ${goals.away}`;
        if (timeEl)  timeEl.textContent  = match.fixture.status.short;
    }
}

// =============================================
// 2. JORNADA COMPLETA
// =============================================
async function loadCurrentRound() {
    const container = document.getElementById('jornada-container');
    if (!container) return;

    const rounds = await fetchData(
        `fixtures/rounds?league=${API_CONFIG.leagueId}&season=${API_CONFIG.season}&current=true`,
        'current_round_name'
    );
    if (!rounds || rounds.length === 0) return;
    const currentRound = rounds[0];

    const matches = await fetchData(
        `fixtures?league=${API_CONFIG.leagueId}&season=${API_CONFIG.season}&round=${encodeURIComponent(currentRound)}`,
        `matches_${currentRound.replace(/\s/g, '_')}`
    );

    if (!matches) return;

    const cleanTitle = currentRound.replace('Regular Season - ', 'JORNADA ');
    let html = `<h2 class="jornada-main-title">${cleanTitle}</h2><div class="jornada-flex-grid">`;

    matches
        .sort((a, b) => new Date(a.fixture.date) - new Date(b.fixture.date))
        .forEach(m => {
            const date       = new Date(m.fixture.date);
            const time       = date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
            const day        = date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit' });
            const isFinished = m.fixture.status.short === 'FT';
            const isLive     = ['1H', '2H', 'HT'].includes(m.fixture.status.short);

            html += `
            <div class="jornada-match-card ${isLive ? 'live-border' : ''}">
                <div class="j-team">
                    <img src="${m.teams.home.logo}" loading="lazy">
                    <span class="j-team-name">${m.teams.home.name}</span>
                </div>
                <div class="j-result">
                    ${isFinished || isLive
                        ? `<span class="j-score ${isLive ? 'live-text' : ''}">${m.goals.home} - ${m.goals.away}</span>`
                        : `<span class="j-time">${day} | ${time}</span>`
                    }
                    ${isLive ? '<span class="live-dot">● EN VIVO</span>' : ''}
                </div>
                <div class="j-team">
                    <img src="${m.teams.away.logo}" loading="lazy">
                    <span class="j-team-name">${m.teams.away.name}</span>
                </div>
            </div>`;
        });

    html += '</div>';
    container.innerHTML = html;
}

// =============================================
// 3. CLASIFICACIÓN (clasificacion.html)
// =============================================
async function loadStandings() {
    const tableBody = document.getElementById('cuerpoTabla');
    if (!tableBody) return;

    // Estado de carga
    tableBody.innerHTML = `
        <tr>
            <td colspan="10" style="text-align:center; padding:2rem; color:#666;">
                Cargando clasificación...
            </td>
        </tr>`;

    const data = await fetchData(
        `standings?league=${API_CONFIG.leagueId}&season=${API_CONFIG.season}`,
        'standings_laliga'
    );

    if (!data || !data[0] || !data[0].league || !data[0].league.standings) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="10" style="text-align:center; padding:2rem; color:#cc0000;">
                    ⚠️ No se pudo cargar la clasificación.
                </td>
            </tr>`;
        return;
    }

    const standings = data[0].league.standings[0];
    tableBody.innerHTML = '';

    standings.forEach(item => {
        const pos    = item.rank;
        const equipo = item.team;
        const stats  = item.all;       // { played, win, draw, lose, goals: { for, against } }
        const puntos = item.points;
        const dg     = item.goalsDiff;

        // Clases de zona — mismas que usa clasificacion.css
        let claseZona = '';
        if (pos <= 4)       claseZona = 'pos-champions';
        else if (pos === 5) claseZona = 'pos-europa';
        else if (pos === 6) claseZona = 'pos-conference';
        else if (pos >= 18) claseZona = 'pos-descenso';

        // Resaltar Oviedo por ID (más fiable que por nombre)
        const esOviedo  = equipo.id === API_CONFIG.teamId;
        const claseFila = esOviedo ? 'row-oviedo' : '';

        // Color diferencia de goles
        let claseDG = '';
        let signoDG = '';
        if (dg > 0)      { claseDG = 'dg-positiva'; signoDG = '+'; }
        else if (dg < 0) { claseDG = 'dg-negativa'; }

        const fila = document.createElement('tr');
        fila.className = claseFila;
        fila.innerHTML = `
            <td class="${claseZona}">${pos}</td>
            <td>
                <img src="${equipo.logo}" alt="${equipo.name}" class="escudo-tabla"
                     onerror="this.style.display='none'">
                <span>${equipo.name}</span>
            </td>
            <td style="font-weight:bold">${puntos}</td>
            <td>${stats.played}</td>
            <td class="desktop-only">${stats.win}</td>
            <td class="desktop-only">${stats.draw}</td>
            <td class="desktop-only">${stats.lose}</td>
            <td class="desktop-only">${stats.goals.for}</td>
            <td class="desktop-only">${stats.goals.against}</td>
            <td class="${claseDG}">${signoDG}${dg}</td>
        `;
        tableBody.appendChild(fila);
    });

    // Lanzar gráfica de evolución si estamos en clasificacion.html
    if (typeof window.initClasificacionChart === 'function') {
        window.initClasificacionChart();
    }
}

// =============================================
// ARRANQUE
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    loadMatches();
    loadCurrentRound();
    // loadStandings() desactivado — la tabla la gestiona clasificacion.js con datos locales
});