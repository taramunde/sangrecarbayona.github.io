// js/data-manager.js
let partidoData = {};

function cargarDatosPartido() {
    fetch('data.json?' + new Date().getTime())
        .then(response => response.ok ? response.json() : Promise.reject('Error cargando data.json'))
        .then(data => {
            partidoData = data;

            // === JORNADA ===
            const esNoticias = document.body.textContent.includes('ÚLTIMAS NOTICIAS SOBRE EL REAL OVIEDO');
            const jornadaNumero = data.jornada.split(' ')[0];
            const jornadaTexto = `${jornadaNumero} LaLiga EA Sports 2025/26`;

            document.querySelectorAll('.jornada-text').forEach(el => {
                if (el.textContent.includes('Partido Finalizado') || esNoticias) {
                    el.textContent = `Partido Finalizado - Jornada ${jornadaTexto}`;
                } else if (el.textContent.includes('Siguiente partido')) {
                    el.textContent = 'Siguiente partido';
                } else {
                    el.textContent = `Jornada ${jornadaTexto}`;
                }
            });

            // === PARTIDO ACTUAL / FINALIZADO ===
            const current = document.getElementById('current-match');
            if (current) {
                current.querySelector('.team-home img').src = data.currentMatch.homeImg;
                current.querySelector('.team-home .team-code').textContent = data.currentMatch.home;
                current.querySelector('.team-visitor img').src = data.currentMatch.visitorImg;
                current.querySelector('.team-visitor .team-code').textContent = data.currentMatch.visitor;
                current.querySelector('.score').textContent = data.currentMatch.score;
                current.querySelector('.time u').textContent = data.currentMatch.time;
                current.querySelector('.time small').textContent = data.currentMatch.date;
            }

            // === SIGUIENTE PARTIDO ===
            const next = document.getElementById('next-match');
            if (next) {
                next.querySelector('.team-home img').src = data.nextMatch.homeImg;
                next.querySelector('.team-home .team-code').textContent = data.nextMatch.home;
                next.querySelector('.team-visitor img').src = data.nextMatch.visitorImg;
                next.querySelector('.team-visitor .team-code').textContent = data.nextMatch.visitor;
                next.querySelector('.score').textContent = data.nextMatch.score;
                next.querySelector('.time u').textContent = data.nextMatch.time;
                next.querySelector('.time small').textContent = data.nextMatch.date;
            }

                        // === GOLEADORES DINÁMICOS ===
            const container = document.getElementById('goalscorers-container');
            const noGoalsCard = document.getElementById('no-goals-card');

            if (!container) return;

            container.innerHTML = '';
            noGoalsCard.classList.remove('hidden'); // por si acaso

            if (!data.goalscorers || data.goalscorers.length === 0) {
                noGoalsCard.classList.remove('hidden');
                return;
            }

            // OCULTAMOS LA TARJETA "SIN GOLES"
            noGoalsCard.classList.add('hidden');

            data.goalscorers.forEach(player => {
                const cardHTML = `
                <div class="card-container">
                    <div class="card">
                        <div class="front">
                            <div class="player-image-container">
                                <img class="player-image" src="${player.photo}" alt="${player.name}">
                            </div>
                            <img class="nation-country" src="${player.nation}" alt="Nación">
                            <img class="team-crest" src="https://i.postimg.cc/rwPjdyz9/Real-Oviedo-2019-actualidad.png" alt="Real Oviedo">
                            <div class="player-number">${player.number}</div>
                            <div class="player-name">${player.name}</div>
                            <div class="team-name">Real Oviedo</div>
                        </div>
                        <div class="back">
                            <div class="player-name-back"><u>${player.name.toUpperCase()}</u></div>
                            <div class="temp-name">(Temp. ${player.temp})</div> 
                            <div class="stats">
                                <div class="stat"><span>PARTIDOS JUGADOS:</span><span>--</span></div>
                                <div class="stat"><span>ASISTENCIAS:</span><span>--</span></div>
                                <div class="stat"><span>GOLES:</span><span>${player.goals}</span></div>
                                <div class="stat"><span>GOL MINUTO:</span><span>${player.minute}</span></div>
                            </div>
                            <a href="${player.link}" target="_blank" class="link-button">Ver Ficha</a>
                        </div>
                    </div>
                </div>`;
                container.insertAdjacentHTML('beforeend', cardHTML);
            });
