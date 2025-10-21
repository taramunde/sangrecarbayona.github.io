// Fixed player-menu.js
document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabs = document.querySelectorAll('.menu-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(tc => tc.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Initialize stats based on player role
    initializeStats();
    
    // Dropdown functionality
    setupDropdowns();
});

function initializeStats() {
    // Get player name from the page (you'll need to determine this based on your setup)
    const playerNameElement = document.querySelector('.player-name');
    if (!playerNameElement) return;
    
    const playerKey = playerNameElement.textContent.toLowerCase();
    
    // Try to find the player in the data
    let currentPlayer = null;
    for (const key in playersData) {
        if (playersData[key].footballName.toLowerCase() === playerKey || 
            playersData[key].name.toLowerCase().includes(playerKey.toLowerCase())) {
            currentPlayer = playersData[key];
            break;
        }
    }
    
    if (!currentPlayer) {
        console.error('Player data not found for:', playerKey);
        return;
    }
    
    // Generate seasons dropdown based on available data
    generateSeasonsDropdown(currentPlayer);
    
    // Display initial stats
    displayStats(currentPlayer, 'oficiales');
}

function generateSeasonsDropdown(player) {
    const seasonsMenu = document.querySelector('.seasons-menu');
    if (!seasonsMenu) return;
    
    // Clear existing content except close button
    seasonsMenu.innerHTML = '<button class="close-btn"><span class="close-x">×</span></button>';
    
    // Add seasons from player data
    const seasons = Object.keys(player.stats);
    seasons.forEach(season => {
        const seasonLink = document.createElement('a');
        seasonLink.href = '#';
        seasonLink.className = 'dropdown-option';
        seasonLink.setAttribute('data-season', season);
        seasonLink.textContent = season;
        seasonsMenu.appendChild(seasonLink);
    });
}

function setupDropdowns() {
    // Seasons dropdown
    const seasonsBtn = document.getElementById('seasons-btn');
    const seasonsMenu = document.querySelector('.seasons-menu');
    
    // Competitions dropdown
    const competitionsBtn = document.getElementById('competitions-btn');
    const competitionsMenu = document.querySelector('.competitions-menu');
    
    if (seasonsBtn && seasonsMenu) {
        seasonsBtn.addEventListener('click', function() {
            seasonsMenu.style.display = seasonsMenu.style.display === 'block' ? 'none' : 'block';
            competitionsMenu.style.display = 'none'; // Close other dropdown
        });
        
        // Close button for seasons
        const seasonsCloseBtn = seasonsMenu.querySelector('.close-btn');
        if (seasonsCloseBtn) {
            seasonsCloseBtn.addEventListener('click', function() {
                seasonsMenu.style.display = 'none';
            });
        }
    }
    
    if (competitionsBtn && competitionsMenu) {
        competitionsBtn.addEventListener('click', function() {
            competitionsMenu.style.display = competitionsMenu.style.display === 'block' ? 'none' : 'block';
            seasonsMenu.style.display = 'none'; // Close other dropdown
        });
        
        // Close button for competitions
        const competitionsCloseBtn = competitionsMenu.querySelector('.close-btn');
        if (competitionsCloseBtn) {
            competitionsCloseBtn.addEventListener('click', function() {
                competitionsMenu.style.display = 'none';
            });
        }
        
        // Competition selection
        const competitionOptions = competitionsMenu.querySelectorAll('.dropdown-option');
        competitionOptions.forEach(option => {
            option.addEventListener('click', function(e) {
                e.preventDefault();
                const competition = this.getAttribute('data-competition');
                
                // Get current player
                const playerNameElement = document.querySelector('.player-name');
                if (!playerNameElement) return;
                
                const playerKey = playerNameElement.textContent.toLowerCase();
                let currentPlayer = null;
                
                for (const key in playersData) {
                    if (playersData[key].footballName.toLowerCase() === playerKey || 
                        playersData[key].name.toLowerCase().includes(playerKey.toLowerCase())) {
                        currentPlayer = playersData[key];
                        break;
                    }
                }
                
                if (currentPlayer) {
                    displayStats(currentPlayer, competition);
                }
                
                competitionsMenu.style.display = 'none';
            });
        });
    }
    
    // Season selection (will be added dynamically)
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('dropdown-option') && e.target.getAttribute('data-season')) {
            e.preventDefault();
            const season = e.target.getAttribute('data-season');
            
            // Get current player and display stats for selected season
            const playerNameElement = document.querySelector('.player-name');
            if (!playerNameElement) return;
            
            const playerKey = playerNameElement.textContent.toLowerCase();
            let currentPlayer = null;
            
            for (const key in playersData) {
                if (playersData[key].footballName.toLowerCase() === playerKey || 
                    playersData[key].name.toLowerCase().includes(playerKey.toLowerCase())) {
                    currentPlayer = playersData[key];
                    break;
                }
            }
            
            if (currentPlayer) {
                displayStatsBySeason(currentPlayer, season);
            }
            
            seasonsMenu.style.display = 'none';
        }
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.stats-buttons')) {
            seasonsMenu.style.display = 'none';
            competitionsMenu.style.display = 'none';
        }
    });
}

function displayStats(player, competition) {
    const statsDisplay = document.getElementById('stats-display');
    if (!statsDisplay) return;
    
    let totalStats = {
        partidos: 0,
        goles: 0,
        asistencias: 0,
        goles_encajados: 0,
        tarjetas_amarillas: 0,
        tarjetas_rojas: 0
    };
    
    // Aggregate stats across all seasons for the specified competition
    Object.keys(player.stats).forEach(season => {
        const seasonStats = player.stats[season];
        
        if (competition === 'oficiales') {
            // Sum all competitions except amistosos
            ['liga', 'copa', 'uefa'].forEach(comp => {
                if (seasonStats[comp]) {
                    Object.keys(totalStats).forEach(stat => {
                        if (seasonStats[comp][stat] !== undefined) {
                            totalStats[stat] += seasonStats[comp][stat];
                        }
                    });
                }
            });
        } else if (seasonStats[competition]) {
            // Sum specific competition
            Object.keys(totalStats).forEach(stat => {
                if (seasonStats[competition][stat] !== undefined) {
                    totalStats[stat] += seasonStats[competition][stat];
                }
            });
        }
    });
    
    // Generate HTML based on player role
    let html = '<div class="stats-grid">';
    
    if (player.role === 'portero') {
        html += `
            <div class="stat-item">
                <span class="stat-label">Partidos:</span>
                <span class="stat-value">${totalStats.partidos}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Goles Encajados:</span>
                <span class="stat-value">${totalStats.goles_encajados}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Tarjetas Amarillas:</span>
                <span class="stat-value">${totalStats.tarjetas_amarillas}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Tarjetas Rojas:</span>
                <span class="stat-value">${totalStats.tarjetas_rojas}</span>
            </div>
        `;
    } else {
        // For field players (defensa, centrocampista, delantero)
        html += `
            <div class="stat-item">
                <span class="stat-label">Partidos:</span>
                <span class="stat-value">${totalStats.partidos}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Goles:</span>
                <span class="stat-value">${totalStats.goles}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Asistencias:</span>
                <span class="stat-value">${totalStats.asistencias}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Tarjetas Amarillas:</span>
                <span class="stat-value">${totalStats.tarjetas_amarillas}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Tarjetas Rojas:</span>
                <span class="stat-value">${totalStats.tarjetas_rojas}</span>
            </div>
        `;
    }
    
    html += '</div>';
    statsDisplay.innerHTML = html;
}

function displayStatsBySeason(player, season) {
    const statsDisplay = document.getElementById('stats-display');
    if (!statsDisplay) return;
    
    const seasonData = player.stats[season];
    if (!seasonData) return;
    
    let html = `<h4>Temporada ${season}</h4>`;
    
    // Display stats for each competition in that season
    ['liga', 'copa', 'uefa', 'amistosos'].forEach(competition => {
        if (seasonData[competition]) {
            const compData = seasonData[competition];
            const compName = {
                liga: 'Liga',
                copa: 'Copa del Rey',
                uefa: 'UEFA',
                amistosos: 'Amistosos'
            };
            
            html += `<div class="season-competition">
                <h5>${compName[competition]}</h5>
                <div class="stats-grid">`;
            
            if (player.role === 'portero') {
                html += `
                    <div class="stat-item">
                        <span class="stat-label">Partidos:</span>
                        <span class="stat-value">${compData.partidos || 0}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Goles Encajados:</span>
                        <span class="stat-value">${compData.goles_encajados || 0}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Tarjetas Amarillas:</span>
                        <span class="stat-value">${compData.tarjetas_amarillas || 0}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Tarjetas Rojas:</span>
                        <span class="stat-value">${compData.tarjetas_rojas || 0}</span>
                    </div>
                `;
            } else {
                html += `
                    <div class="stat-item">
                        <span class="stat-label">Partidos:</span>
                        <span class="stat-value">${compData.partidos || 0}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Goles:</span>
                        <span class="stat-value">${compData.goles || 0}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Asistencias:</span>
                        <span class="stat-value">${compData.asistencias || 0}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Tarjetas Amarillas:</span>
                        <span class="stat-value">${compData.tarjetas_amarillas || 0}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Tarjetas Rojas:</span>
                        <span class="stat-value">${compData.tarjetas_rojas || 0}</span>
                    </div>
                `;
            }
            
            html += '</div></div>';
        }
    });
    
    statsDisplay.innerHTML = html;
        }
