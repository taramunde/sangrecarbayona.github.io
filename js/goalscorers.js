document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('goalscorers-container');
    const noGoalsCard = document.getElementById('no-goals-card');

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Limpiamos el contenedor y lo ocultamos
            container.style.opacity = '0';
            container.innerHTML = ''; 

            if (data.goalscorers && data.goalscorers.length > 0) {
                // Ocultamos la tarjeta de "SIN GOLES"
                if (noGoalsCard) noGoalsCard.style.display = 'none';

                // Array para almacenar las promesas de carga de imágenes
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
                                <img src="${player.nation}" alt="Nacionalidad" class="nation-country">
                            </div>
                            <div class="back">
                                <div class="player-name-back">${player.name.toUpperCase()}</div>
                                <div class="stats">
                                    <div class="stat"><span>Partidos:</span><span>${player.partidos || '--'}</span></div>
                                    <div class="stat"><span>Goles:</span><span>${player.goals}</span></div>
                                    <div class="stat"><span>Último Gol:</span><span>${player.minute}</span></div>
                                </div>
                                <a href="${player.link}" target="_blank" class="link-button">Ver Ficha</a>
                            </div>
                        </div>
                    `;
                    
                    // Añadir al contenedor (pero aún invisible)
                    container.appendChild(cardWrapper);

                    // Crear promesas para las dos imágenes de cada tarjeta
                    const playerImg = cardWrapper.querySelector('.player-image');
                    const nationImg = cardWrapper.querySelector('.nation-country');
                    
                    // Promesa para la foto del jugador
                    const playerImgPromise = new Promise((resolve, reject) => {
                        if (playerImg.complete) {
                            resolve();
                        } else {
                            playerImg.onload = resolve;
                            playerImg.onerror = resolve; // Resolvemos igual si falla para no bloquear
                        }
                    });

                    // Promesa para la bandera
                    const nationImgPromise = new Promise((resolve, reject) => {
                        if (nationImg.complete) {
                            resolve();
                        } else {
                            nationImg.onload = resolve;
                            nationImg.onerror = resolve;
                        }
                    });

                    imageLoadPromises.push(playerImgPromise, nationImgPromise);
                });

                // Esperar a que TODAS las imágenes estén cargadas
                Promise.all(imageLoadPromises).then(() => {
                    // Pequeño delay adicional para asegurar que el CSS se ha aplicado
                    setTimeout(() => {
                        container.style.transition = 'opacity 0.3s ease';
                        container.style.opacity = '1';
                    }, 50);
                });

            } else {
                if (noGoalsCard) noGoalsCard.style.display = 'block';
                container.style.opacity = '1';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            if (noGoalsCard) noGoalsCard.style.display = 'block';
            container.style.opacity = '1';
        });
});