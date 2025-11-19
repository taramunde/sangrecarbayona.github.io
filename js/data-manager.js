// js/data-manager.js
let partidoData = {};

function cargarDatosPartido() {
    fetch('data.json')
        .then(response => {
            if (!response.ok) throw new Error('Error al cargar data.json');
            return response.json();
        })
        .then(data => {
            partidoData = data;

            // 1. Actualizar jornada en todos los sitios donde aparezca
            document.querySelectorAll('.jornada-text').forEach(el => {
                // En index.html quieres "Jornada 13 LaLiga EA Sports 2025/26"
                // En noticias.html quieres algo como "Partido Finalizado - Jornada 13..."
                if (el.closest('noticias.html') || el.textContent.includes('Partido Finalizado')) {
                    // En noticias puedes decidir qué texto poner exactamente
                    el.textContent = `Partido Finalizado - Jornada ${data.jornada.split(' ')[1]} LaLiga EA Sports 2025/26`;
                } else {
                    el.textContent = `Jornada ${data.jornada.split(' ')[1]} LaLiga EA Sports 2025/26`;
                }
            });

            // 2. Último partido / Partido actual (en index.html suele ser el último jugado)
            const ultimoMarcador = document.querySelector('.score-board:not(.next-match)');
            if (ultimoMarcador) {
                ultimoMarcador.querySelector('.team-home img').src = data.currentMatch.homeImg;
                ultimoMarcador.querySelector('.team-home').innerHTML += data.currentMatch.home;
                ultimoMarcador.querySelector('.team-visitor img').src = data.currentMatch.visitorImg;
                ultimoMarcador.querySelector('.team-visitor').innerHTML += data.currentMatch.visitor;
                ultimoMarcador.querySelector('.score').textContent = data.currentMatch.score.replace(' ', ' - ');
                ultimoMarcador.querySelector('.time').innerHTML = `<u>${data.currentMatch.time}</u><br><small>${data.currentMatch.date}</small>`;
            }

            // 3. Siguiente partido
            const siguienteMarcador = document.querySelector('.score-board.next-match') || document.querySelectorAll('.score-board')[1];
            if (siguienteMarcador) {
                siguienteMarcador.querySelector('.team-home img').src = data.nextMatch.homeImg;
                siguienteMarcador.querySelector('.team-home').innerHTML += data.nextMatch.home;
                siguienteMarcador.querySelector('.team-visitor img').src = data.nextMatch.visitorImg;
                siguienteMarcador.querySelector('.team-visitor').innerHTML += data.nextMatch.visitor;
                siguienteMarcador.querySelector('.score').textContent = data.nextMatch.score;
                siguienteMarcador.querySelector('.time').innerHTML = `<u>${data.nextMatch.time}</u><br><small>${data.nextMatch.date}</small>`;
            }

            // Si quieres distinguir claramente el siguiente partido, añade una clase
            if (siguienteMarcador) siguienteMarcador.classList.add('next-match');

        })
        .catch(err => {
            console.error('Error cargando data.json:', err);
        });
}

// Cargar cuando la página esté lista
document.addEventListener('DOMContentLoaded', cargarDatosPartido);
