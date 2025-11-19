// js/data-manager.js - VERSIÓN FINAL 100% FUNCIONAL (19/11/2025)
let partidoData = {};

function cargarDatosPartido() {
    fetch('data.json?' + Date.now())
        .then(r => r.ok ? r.json() : Promise.reject())
        .then(data => {
            partidoData = data;

            // ==== JORNADA ====
            const jornadaTexto = data.jornada || "13 LaLiga EA Sports 2025/26";
            document.querySelectorAll('.jornada-text').forEach(el => {
                if (el.textContent.includes('Partido Finalizado') || el.textContent.includes('NOTICIAS')) {
                    el.textContent = `Partido Finalizado - Jornada ${jornadaTexto}`;
                } else if (el.textContent.includes('Siguiente partido')) {
                    el.textContent = "Siguiente partido";
                } else if (el.textContent.toLowerCase().includes('goleadores')) {
                    el.textContent = `Goleadores Jornada ${jornadaTexto}`;
                } else {
                    el.textContent = `Jornada ${jornadaTexto}`;
                }
            });

            // ==== PARTIDO ACTUAL ====
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

            // ==== SIGUIENTE PARTIDO ====
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

            // ==== GOLEADORES ====
            const container = document.getElementById('goalscorers-container');
            const noGoalsCard = document.getElementById('no-goals-card');
            if (container && noGoalsCard) {
                container.innerHTML = '';
                noGoalsCard.classList.remove('hidden');

                if (!data.goalscorers || data.goalscorers.length === 0) {
                    noGoalsCard.classList.remove('hidden');
                } else {
                    noGoalsCard.classList.add('hidden');
                    data.goalscorers.forEach(p => {
                        container.insertAdjacentHTML('beforeend', `
                        <div class="card-container">
                            <div class="card">
                                <div class="front">
                                    <div class="player-image-container">
                                        <img class="player-image" src="${p.photo}" alt="${p.name}">
                                    </div>
                                    <img class="nation-country" src="${p.nation}" alt="Bandera">
                                    <img class="team-crest" src="https://i.postimg.cc/rwPjdyz9/Real-Oviedo-2019-actualidad.png">
                                    <div class="player-number">${p.number}</div>
                                    <div class="player-name">${p.name}</div>
                                    <div class="team-name">Real Oviedo</div>
                                </div>
                                <div class="back">
                                    <div class="player-name-back"><u>${p.name.toUpperCase()}</u></div>
                                    <div class="temp-name">(Temp. ${p.temp})</div>
                                    <div class="stats">
                                        <div class="stat"><span>PARTIDOS JUGADOS:</span><span>--</span></div>
                                        <div class="stat"><span>ASISTENCIAS:</span><span>--</span></div>
                                        <div class="stat"><span>GOLES:</span><span>${p.goals}</span></div>
                                        <div class="stat"><span>GOL MINUTO:</span><span>${p.minute}</span></div>
                                    </div>
                                    <a href="${p.link}" target="_blank" class="link-button">Ver Ficha</a>
                                </div>
                            </div>
                        </div>`);
                    });
                }
            }
        })
        .catch(err => console.error('Error data.json:', err));
}

document.addEventListener('DOMContentLoaded', cargarDatosPartido);
