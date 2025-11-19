// js/data-manager.js
let partidoData = {};

function cargarDatosPartido() {
    fetch('data.json?' + new Date().getTime())  // evita caché
        .then(response => response.ok ? response.json() : Promise.reject('Error cargando data.json'))
        .then(data => {
            partidoData = data;

            // 1. Jornada (diferente texto en noticias.html si es partido finalizado)
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

            // 2. Partido actual/finalizado
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

            // 3. Siguiente partido
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

        })
        .catch(err => console.error('Error:', err));
}

document.addEventListener('DOMContentLoaded', cargarDatosPartido);
