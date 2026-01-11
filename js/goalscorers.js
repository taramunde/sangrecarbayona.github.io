document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('goalscorers-container');
    const noGoalsCard = document.getElementById('no-goals-card');

    // Cargar datos desde data.json
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            if (data.goalscorers && data.goalscorers.length > 0) {
                // Ocultamos la tarjeta de "SIN GOLES" si hay goleadores
                if (noGoalsCard) noGoalsCard.style.display = 'none';

                data.goalscorers.forEach(player => {
                    const card = document.createElement('div');
                    card.className = 'card-container';
                    card.innerHTML = `
                        <div class="card">
                            <div class="front">
                                <img src="${player.photo}" alt="${player.name}" class="player-photo">
                                <div class="player-number">${player.number}</div>
                                <div class="player-name">${player.name}</div>
                                <div class="team-name2">Real Oviedo</div>
                                <img src="${player.nation}" alt="Nacionalidad" class="nation-flag">
                            </div>
                            <div class="back">
                                <div class="player-name-back">${player.name.toUpperCase()}</div>
                                <div class="stats">
                                    <div class="stat"><span>Partidos:</span><span>${player.partidos || '--'}</span></div>
                                    <div class="stat"><span>Goles:</span><span>${player.goals}</span></div>
                                    <div class="stat"><span>Último Gol:</span><span>${player.minute}</span></div>
                                    <div class="stat"><span>Minutos:</span><span>${player.minutosTotales || '--'}'</span></div>
                                </div>
                                <a href="${player.link}" target="_blank" class="link-button">Ver Ficha</a>
                            </div>
                        </div>
                    `;
                    container.appendChild(card);
                });
            }
        });
});