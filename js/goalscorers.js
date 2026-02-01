document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('goalscorers-container');
    const noGoalsCard = document.getElementById('no-goals-card');

    // Cargar datos desde data.json
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // 1. LIMPIEZA: Borramos cualquier contenido previo (esto evita que salgan dobles)
            container.innerHTML = ''; 

            if (data.goalscorers && data.goalscorers.length > 0) {
                // CASO A: HAY GOLEADORES
                // Ocultamos la tarjeta fija de "SIN GOLES"
                if (noGoalsCard) noGoalsCard.style.display = 'none';

                data.goalscorers.forEach(player => {
                    const card = document.createElement('div');
                    card.className = 'card-container';
                    // Construimos la tarjeta con los datos del JSON
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
            } else {
                // CASO B: NO HAY DATOS
                // Si el array está vacío, nos aseguramos de que se vea la tarjeta "SIN GOLES"
                if (noGoalsCard) noGoalsCard.style.display = 'block'; 
            }
        })
        .catch(error => {
            console.error('Error cargando los datos:', error);
            // Si hay error, mostramos la tarjeta por defecto por seguridad
            if (noGoalsCard) noGoalsCard.style.display = 'block'; 
        });
});