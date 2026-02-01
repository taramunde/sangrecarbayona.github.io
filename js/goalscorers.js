document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('goalscorers-container');
    const noGoalsCard = document.getElementById('no-goals-card');

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Limpiamos el contenedor y lo ocultamos un momento para evitar el efecto "foto grande"
            container.style.opacity = '0';
            container.innerHTML = ''; 

            if (data.goalscorers && data.goalscorers.length > 0) {
                // Ocultamos la tarjeta de "SIN GOLES"
                if (noGoalsCard) noGoalsCard.style.display = 'none';

                data.goalscorers.forEach(player => {
                    const cardWrapper = document.createElement('div');
                    cardWrapper.className = 'card-container';
                    
                    cardWrapper.innerHTML = `
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
                    container.appendChild(cardWrapper);
                });

                // Forzamos un pequeño retraso para que el CSS se aplique antes de mostrar
                setTimeout(() => {
                    container.style.transition = 'opacity 0.3s ease';
                    container.style.opacity = '1';
                }, 50);

            } else {
                if (noGoalsCard) noGoalsCard.style.display = 'block';
                container.style.opacity = '1';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            if (noGoalsCard) noGoalsCard.style.display = 'block';
        });
});