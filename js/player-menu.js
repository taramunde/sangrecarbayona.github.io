// Obtener el nombre del jugador de la URL o usar uno por defecto
function getPlayerNameFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('player') || 'aaron'; // 'aaron' es el valor por defecto
}

const currentPlayerName = getPlayerNameFromURL();
const currentPlayer = playersData[currentPlayerName];

if (!currentPlayer) {
    console.error(`Jugador '${currentPlayerName}' no encontrado en playersData`);
}

// ===== GESTIÓN DE PESTAÑAS =====
document.querySelectorAll('.menu-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        const tabName = this.getAttribute('data-tab');
        
        // Remover clase active de todas las pestañas y contenidos
        document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        // Agregar clase active a la pestaña seleccionada
        this.classList.add('active');
        document.getElementById(tabName).classList.add('active');
        
        // Generar contenido según la pestaña
        if (tabName === 'stats') {
            generateStats();
        } else if (tabName === 'career') {
            generateCareer();
        } else if (tabName === 'personal-data') {
            generatePersonalData();
        }
    });
});

// ===== GENERAR ESTADÍSTICAS =====
function generateStats() {
    const statsDisplay = document.getElementById('stats-display');
    const stats = currentPlayer.stats || {};
    
    // Si no hay estadísticas
    if (Object.keys(stats).length === 0) {
        statsDisplay.innerHTML = '<p class="no-data">No hay estadísticas disponibles</p>';
        return;
    }
    
    let html = '<div class="stats-table-container">';
    
    // Obtener todas las temporadas y competiciones
    const seasons = Object.keys(stats).sort().reverse();
    const competitions = new Set();
    seasons.forEach(season => {
        Object.keys(stats[season]).forEach(comp => competitions.add(comp));
    });
    
    // Generar tabla
    html += `
        <table class="stats-table">
            <thead>
                <tr>
                    <th>Temporada</th>
                    <th>Competición</th>
                    <th>Partidos</th>
                    <th>${currentPlayer.role === 'portero' ? 'Goles Encajados' : 'Goles Marcados'}</th>
                    <th>Tarjetas Amarillas</th>
                    <th>Tarjetas Rojas</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    seasons.forEach(season => {
        const seasonStats = stats[season];
        Object.entries(seasonStats).forEach(([comp, data]) => {
            const goalsKey = currentPlayer.role === 'portero' ? 'goles_encajados' : 'goles_marcados';
            html += `
                <tr>
                    <td>${season}</td>
                    <td>${comp.charAt(0).toUpperCase() + comp.slice(1)}</td>
                    <td>${data.partidos || 0}</td>
                    <td>${data[goalsKey] || 0}</td>
                    <td>${data.tarjetas_amarillas || 0}</td>
                    <td>${data.tarjetas_rojas || 0}</td>
                </tr>
            `;
        });
    });
    
    html += `
            </tbody>
        </table>
    </div>
    `;
    
    statsDisplay.innerHTML = html;
}

// ===== GENERAR TRAYECTORIA =====
function generateCareer() {
    const careerContent = document.getElementById('career');
    const career = currentPlayer.career || [];
    const nationalTeam = currentPlayer.nationalTeam || [];
    
    if (career.length === 0 && nationalTeam.length === 0) {
        careerContent.innerHTML = '<p class="no-data">No hay información de trayectoria</p>';
        return;
    }
    
    let html = '<div class="career-container">';
    
    // Carrera en clubes
    if (career.length > 0) {
        html += '<h3>Carrera en Clubes</h3>';
        html += '<div class="career-list">';
        career.forEach(entry => {
            html += `
                <div class="career-item">
                    <span class="career-season">${entry.season}</span>
                    <span class="career-team">${entry.team}</span>
                    <span class="career-category">${entry.category}</span>
                </div>
            `;
        });
        html += '</div>';
    }
    
    // Selección nacional
    if (nationalTeam.length > 0) {
        html += '<h3>Selección Nacional</h3>';
        html += '<div class="career-list">';
        nationalTeam.forEach(entry => {
            html += `
                <div class="career-item">
                    <span class="career-season">${entry.season}</span>
                    <span class="career-team">${entry.team}</span>
                    <span class="career-category">${entry.category}</span>
                </div>
            `;
        });
        html += '</div>';
    }
    
    html += '</div>';
    careerContent.innerHTML = html;
}

// ===== GENERAR DATOS PERSONALES =====
function generatePersonalData() {
    const personalDataContent = document.getElementById('personal-data');
    const personalData = currentPlayer.personalData || {};
    
    if (Object.keys(personalData).length === 0) {
        personalDataContent.innerHTML = '<p class="no-data">No hay datos personales disponibles</p>';
        return;
    }
    
    let html = '<div class="personal-data-container">';
    html += `
        <div class="personal-data-item">
            <span class="label">Nombre Completo:</span>
            <span class="value">${personalData.fullName || 'N/A'}</span>
        </div>
        <div class="personal-data-item">
            <span class="label">Apodo:</span>
            <span class="value">${personalData.nickname || 'N/A'}</span>
        </div>
        <div class="personal-data-item">
            <span class="label">Fecha de Nacimiento:</span>
            <span class="value">${personalData.birthDate || 'N/A'}</span>
        </div>
        <div class="personal-data-item">
            <span class="label">Lugar de Nacimiento:</span>
            <span class="value">${personalData.birthPlace || 'N/A'}</span>
        </div>
        <div class="personal-data-item">
            <span class="label">Altura:</span>
            <span class="value">${personalData.height || 'N/A'}</span>
        </div>
        <div class="personal-data-item">
            <span class="label">Nacionalidad:</span>
            <span class="value">${personalData.nationality || 'N/A'}</span>
        </div>
        <div class="personal-data-item">
            <span class="label">País:</span>
            <span class="value">${personalData.country || 'N/A'}</span>
        </div>
    `;
    
    if (personalData.deathDate) {
        html += `
            <div class="personal-data-item">
                <span class="label">Fecha de Fallecimiento:</span>
                <span class="value">${personalData.deathDate}</span>
            </div>
        `;
    }
    
    html += '</div>';
    personalDataContent.innerHTML = html;
}

// ===== GESTIÓN DE DROPDOWNS =====
const seasonsBtn = document.getElementById('seasons-btn');
const competitionsBtn = document.getElementById('competitions-btn');
const seasonsMenu = document.querySelector('.seasons-menu');
const competitionsMenu = document.querySelector('.competitions-menu');

// Dropdown de Temporadas
if (seasonsBtn) {
    seasonsBtn.addEventListener('click', function() {
        seasonsMenu.style.display = seasonsMenu.style.display === 'none' ? 'block' : 'none';
        competitionsMenu.style.display = 'none';
        
        // Generar opciones de temporadas
        if (seasonsMenu.children.length === 1) { // Solo tiene el botón de cerrar
            const stats = currentPlayer.stats || {};
            Object.keys(stats).sort().reverse().forEach(season => {
                const option = document.createElement('a');
                option.href = '#';
                option.className = 'dropdown-option';
                option.textContent = season;
                option.addEventListener('click', (e) => {
                    e.preventDefault();
                    // Aquí puedes filtrar las estadísticas por temporada
                });
                seasonsMenu.appendChild(option);
            });
        }
    });
}

// Dropdown de Competiciones
if (competitionsBtn) {
    competitionsBtn.addEventListener('click', function() {
        competitionsMenu.style.display = competitionsMenu.style.display === 'none' ? 'block' : 'none';
        seasonsMenu.style.display = 'none';
    });
}

// Botones de cerrar
document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.parentElement.style.display = 'none';
    });
});

// Opciones de competiciones
document.querySelectorAll('.dropdown-option').forEach(option => {
    option.addEventListener('click', function(e) {
        e.preventDefault();
        const competition = this.getAttribute('data-competition');
        console.log('Competición seleccionada:', competition);
        // Aquí puedes filtrar las estadísticas por competición
    });
});

// Cerrar dropdowns al hacer clic fuera
document.addEventListener('click', function(e) {
    if (!e.target.closest('.stats-buttons')) {
        if (seasonsMenu) seasonsMenu.style.display = 'none';
        if (competitionsMenu) competitionsMenu.style.display = 'none';
    }
});

// Generar contenido inicial
generateStats();
generateCareer();
generatePersonalData();
