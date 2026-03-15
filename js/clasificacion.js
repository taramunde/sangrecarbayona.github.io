// js/clasificacion.js
// NOTA: La tabla de clasificación la gestiona api-manager.js (loadStandings)
// Este archivo solo gestiona la gráfica de evolución del Oviedo.

// =============================================
// GRÁFICA DE EVOLUCIÓN DEL OVIEDO
// =============================================

let chartInstance = null;

// Calcula la posición del Oviedo jornada a jornada a partir de los partidos jugados
function calcularEvolucionOviedo(partidos) {
    // Agrupar partidos por número de jornada
    const porJornada = {};
    partidos.forEach(p => {
        const round = p.league.round; // Ej: "Regular Season - 12"
        if (!porJornada[round]) porJornada[round] = [];
        porJornada[round].push(p);
    });

    // Ordenar jornadas numéricamente
    const jornadasOrdenadas = Object.keys(porJornada).sort((a, b) => {
        const numA = parseInt(a.match(/\d+$/)?.[0] || 0);
        const numB = parseInt(b.match(/\d+$/)?.[0] || 0);
        return numA - numB;
    });

    // Acumular estadísticas equipo a equipo jornada a jornada
    const statsAcum = {}; // { teamId: { pts, gf, gc, nombre } }
    const posicionesPorJornada = [];

    jornadasOrdenadas.forEach(jornada => {
        const partJornada = porJornada[jornada];
        let hayResultadosEnEstaJornada = false;

        partJornada.forEach(p => {
            const h  = p.teams.home;
            const a  = p.teams.away;
            const gh = p.goals.home;
            const ga = p.goals.away;

            if (gh === null || ga === null) return; // partido sin resultado
            hayResultadosEnEstaJornada = true;

            if (!statsAcum[h.id]) statsAcum[h.id] = { pts: 0, gf: 0, gc: 0, nombre: h.name };
            if (!statsAcum[a.id]) statsAcum[a.id] = { pts: 0, gf: 0, gc: 0, nombre: a.name };

            statsAcum[h.id].gf += gh;
            statsAcum[h.id].gc += ga;
            statsAcum[a.id].gf += ga;
            statsAcum[a.id].gc += gh;

            if (gh > ga)      { statsAcum[h.id].pts += 3; }
            else if (gh < ga) { statsAcum[a.id].pts += 3; }
            else              { statsAcum[h.id].pts += 1; statsAcum[a.id].pts += 1; }
        });

        if (!hayResultadosEnEstaJornada) return; // jornada sin resultados aún, no graficar

        // Calcular clasificación en este punto
        const ranking = Object.entries(statsAcum)
            .map(([id, s]) => ({ id: parseInt(id), ...s, dg: s.gf - s.gc }))
            .sort((a, b) => (b.pts - a.pts) || (b.dg - a.dg) || (b.gf - a.gf));

        const oviedoIdx = ranking.findIndex(e => e.nombre.toLowerCase().includes('oviedo'));
        if (oviedoIdx !== -1) {
            const num = jornada.match(/\d+$/)?.[0] || '?';
            posicionesPorJornada.push({ jornada: `J${num}`, pos: oviedoIdx + 1 });
        }
    });

    return posicionesPorJornada;
}

function renderizarGrafica(posiciones) {
    const canvas = document.getElementById('team-position-chart-canvas');
    if (!canvas) return;
    if (posiciones.length === 0) return;

    const labels = posiciones.map(p => p.jornada);
    const data   = posiciones.map(p => p.pos);

    if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
    }

    const ctx = canvas.getContext('2d');
    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets: [{
                label: 'Posición Real Oviedo',
                data,
                borderColor: '#0033cc',
                backgroundColor: 'rgba(0, 51, 204, 0.1)',
                borderWidth: 3,
                pointBackgroundColor: '#ffcc00',
                pointBorderColor: '#0033cc',
                pointRadius: 5,
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    reverse: true,
                    min: 1,
                    max: 20,
                    grid: { color: '#eee' },
                    ticks: { stepSize: 1 }
                },
                x: { grid: { display: false } }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#0033cc',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    callbacks: {
                        label: ctx => `Posición: ${ctx.raw}º`
                    }
                }
            }
        }
    });

    // Mejor y peor posición
    const mejor = Math.min(...data);
    const peor  = Math.max(...data);
    const elMejor = document.getElementById('team-position-best');
    const elPeor  = document.getElementById('team-position-worst');
    if (elMejor) elMejor.textContent = `${mejor}º`;
    if (elPeor)  elPeor.textContent  = `${peor}º`;
}

// Función pública que api-manager.js puede llamar después de obtener los partidos
window.initClasificacionChart = async function() {
    try {
        // Reutilizamos fetchData de api-manager.js (ya cargado antes en el HTML)
        const partidos = await fetchData(
            `fixtures?league=${API_CONFIG.leagueId}&season=${API_CONFIG.season}&status=FT`,
            'fixtures_ft_laliga'
        );
        if (partidos && partidos.length > 0) {
            const evolucion = calcularEvolucionOviedo(partidos);
            renderizarGrafica(evolucion);
        }
    } catch (err) {
        console.error('Error al cargar gráfica de evolución:', err);
    }
};