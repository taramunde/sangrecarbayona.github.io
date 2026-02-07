document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('goalscorers-container');
    const noGoalsCard = document.getElementById('no-goals-card');

    // Añadimos nocache para que los cambios en los goles se vean al segundo
    fetch('data.json?v=' + Date.now())
        .then(response => response.json())
        .then(data => {
            container.style.opacity = '0';
            container.innerHTML = ''; 

            // Verificamos si hay goleadores
            if (data.goalscorers && data.goalscorers.length > 0) {
                // HAY GOLES: Ocultamos la tarjeta de vacío
                if (noGoalsCard) noGoalsCard.style.display = 'none';

                const imageLoadPromises = [];

                data.goalscorers.forEach(player => {
                    const cardWrapper = document.createElement('div');
                    cardWrapper.className = 'card-container';
                    
                    cardWrapper.innerHTML = `
                        <div class="card">
                            <div class="front">
                                <img src="${player.photo}" alt="${player.name}" class="player-image">
                                <div class="player-number">${player.number}</div>
                                <div class="player-name">${player.name}</div>
                                <div class="team-name2">Real Oviedo</div>
                                <img src="${player.nation}" alt="Nacionalidad" class="nation-flag">
                            </div>
                            <div class="back">
                                <div class="player-name-back">${player.name.toUpperCase()}</div>
                                <div class="stats">
                                    <div class="stat"><span>Partidos:</span><span>${player.partidos}</span></div>
                                    <div class="stat"><span>Goles:</span><span>${player.goals}</span></div>
                                    <div class="stat"><span>Temporada:</span><span>${player.temp}</span></div>
                                </div>
                                <a href="${player.link}" class="link-button">Ver Ficha</a>
                            </div>
                        </div>
                    `;
                    container.appendChild(cardWrapper);

                    // Control de carga de imágenes
                    const playerImg = cardWrapper.querySelector('.player-image');
                    const nationImg = cardWrapper.querySelector('.nation-flag');

                    const imgPromise = (img) => new Promise(res => {
                        if (img.complete) res(); else { img.onload = res; img.onerror = res; }
                    });

                    imageLoadPromises.push(imgPromise(playerImg), imgPromise(nationImg));
                });

                Promise.all(imageLoadPromises).then(() => {
                    setTimeout(() => {
                        container.style.transition = 'opacity 0.3s ease';
                        container.style.opacity = '1';
                    }, 50);
                });

            } else {
                // NO HAY GOLES: Mostramos la tarjeta de "Sin Goles"
                if (noGoalsCard) noGoalsCard.style.display = 'block';
                container.style.opacity = '1';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            if (noGoalsCard) noGoalsCard.style.display = 'block';
        });
});