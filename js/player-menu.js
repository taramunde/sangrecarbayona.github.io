$(document).ready(function() {
    // Obtener jugador desde la URL
    function getPlayerFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('player') || 'aaron';
    }
    
    let currentPlayer = getPlayerFromURL(); // CAMBIO: ahora obtiene de la URL
    let selectedSeason = '2024/25';
    let selectedCompetition = 'oficiales';
    
    // Verificar si el jugador existe
    if (!playersData[currentPlayer]) {
        console.error('Jugador no encontrado:', currentPlayer);
        currentPlayer = 'aaron'; // fallback
    }
    
    // NUEVA FUNCIÓN: Actualizar información del jugador en la página
    function updatePlayerInfo() {
    const player = playersData[currentPlayer];
    if (!player) return;
    
    // Actualizar imagen
    $('.player-image').attr('src', player.image);
    $('.player-image').attr('alt', player.footballName + ' - ' + player.position);
    
    // Actualizar nombres - CAMBIO AQUÍ
    $('.player-name').text(player.footballName); // Usar footballName en lugar del primer nombre
    $('.player-full-name').text(player.name); // El nombre completo sigue igual
    
    // Actualizar posición
    $('.player-position').text(player.position);
    
    // Actualizar número (si existe)
    if (player.number) {
        $('.player-card-number').text(player.number).show();
    } else {
        $('.player-card-number').hide(); // Para entrenadores
    }
}
    
    // Cargar datos del jugador actual
updatePlayerInfo();
loadPlayerSeasons();
generateStatsHTML();
updateStats(); // Esto ya actualiza los botones con los valores iniciales
    
    // Resto de funciones exactamente como las tienes...
    $('.menu-tab').on('click', function() {
        $('.menu-tab').removeClass('active');
        $('.tab-content').removeClass('active');
        $(this).addClass('active');
        $('#' + $(this).data('tab')).addClass('active');
    });
    
    $('.menu-tab[data-tab="stats"]').addClass('active');
    $('#stats').addClass('active');
    
    function loadPlayerSeasons() {
        const player = playersData[currentPlayer];
        if (!player || !player.stats) return;
        
        const seasonsMenu = $('.seasons-menu');
        const seasons = Object.keys(player.stats).sort().reverse();
        
        seasonsMenu.find('.dropdown-option').remove();
        
        seasons.forEach(season => {
            seasonsMenu.append(`<a href="#" class="dropdown-option" data-season="${season}">${season}</a>`);
        });
        
        if (seasons.length > 0) {
            selectedSeason = seasons[0];
        }
    }
    
    function generateStatsHTML() {
        const player = playersData[currentPlayer];
        if (!player) return;
        
        const statsDisplay = $('#stats-display');
        let html = '';
        
        if (player.role === 'portero') {
            html = `
                <div class="stat-card">
                    <h4>Partidos Oficiales</h4>
                    <span class="stat-number" id="partidos-count">0</span>
                </div>
                <div class="stat-card">
                    <h4>Goles Encajados</h4>
                    <span class="stat-number" id="goles-count">0</span>
                </div>
                <div class="stat-card">
                    <h4>Tarjetas</h4>
                    <div class="tarjetas-container">
                        <span class="tarjeta amarilla" id="amarillas-count">0</span>
                        <span class="tarjeta roja" id="rojas-count">0</span>
                    </div>
                </div>
            `;
        } else if (player.role === 'jugador') {
            html = `
                <div class="stat-card">
                    <h4>Partidos Oficiales</h4>
                    <span class="stat-number" id="partidos-count">0</span>
                </div>
                <div class="stat-card">
                    <h4>Goles Marcados</h4>
                    <span class="stat-number" id="goles-count">0</span>
                </div>
                <div class="stat-card">
                    <h4>Tarjetas</h4>
                    <div class="tarjetas-container">
                        <span class="tarjeta amarilla" id="amarillas-count">0</span>
                        <span class="tarjeta roja" id="rojas-count">0</span>
                    </div>
                </div>
            `;
        } else if (player.role === 'entrenador') {
            html = `
                <div class="stat-card">
                    <h4>Partidos Entrenados</h4>
                    <span class="stat-number" id="partidos-count">0</span>
                </div>
                <div class="stat-card">
                    <h4>Victorias</h4>
                    <span class="stat-number" id="victorias-count">0</span>
                </div>
                <div class="stat-card">
                    <h4>Empates</h4>
                    <span class="stat-number" id="empates-count">0</span>
                </div>
                <div class="stat-card">
                    <h4>Derrotas</h4>
                    <span class="stat-number" id="derrotas-count">0</span>
                </div>
            `;
        }
        
        statsDisplay.html(html);
    }
    
    function calculateStats(season, competition) {
        const player = playersData[currentPlayer];
        if (!player || !player.stats || !player.stats[season]) {
            if (player.role === 'portero') {
                return { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 };
            } else if (player.role === 'jugador') {
                return { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 };
            } else if (player.role === 'entrenador') {
                return { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 };
            }
        }
        
        const seasonData = player.stats[season];
        let totalStats = {};
        
        if (player.role === 'portero') {
            totalStats = { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 };
        } else if (player.role === 'jugador') {
            totalStats = { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 };
        } else if (player.role === 'entrenador') {
            totalStats = { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 };
        }
        
        if (competition === 'oficiales') {
            Object.keys(seasonData).forEach(comp => {
                if (comp !== 'amistosos') {
                    const compData = seasonData[comp];
                    Object.keys(totalStats).forEach(key => {
                        totalStats[key] += compData[key] || 0;
                    });
                }
            });
        } else if (seasonData[competition]) {
            totalStats = seasonData[competition];
        }
        
        return totalStats;
    }
    
    function updateStats() {
    const player = playersData[currentPlayer];
    const stats = calculateStats(selectedSeason, selectedCompetition);
    
    // Actualizar texto de los botones
    $('#seasons-btn').text(selectedSeason);
    $('#competitions-btn').text(getCompetitionDisplayName(selectedCompetition));
    
    if (player.role === 'portero') {
        $('#partidos-count').text(stats.partidos);
        $('#goles-count').text(stats.goles_encajados);
        $('#amarillas-count').text(stats.tarjetas_amarillas);
        $('#rojas-count').text(stats.tarjetas_rojas);
    } else if (player.role === 'jugador') {
        $('#partidos-count').text(stats.partidos);
        $('#goles-count').text(stats.goles_marcados);
        $('#amarillas-count').text(stats.tarjetas_amarillas);
        $('#rojas-count').text(stats.tarjetas_rojas);
    } else if (player.role === 'entrenador') {
        $('#partidos-count').text(stats.partidos_entrenados);
        $('#victorias-count').text(stats.victorias);
        $('#empates-count').text(stats.empates);
        $('#derrotas-count').text(stats.derrotas);
    }
}

    // Función para convertir IDs de competición a nombres legibles
function getCompetitionDisplayName(competition) {
    const names = {
        'oficiales': 'Oficiales',
        'liga': 'Liga',
        'copa': 'Copa del Rey',
        'uefa': 'UEFA',
        'amistosos': 'Amistosos',
        'todos': 'Todos'
    };
    return names[competition] || competition;
}
    
    $(document).on('click', '.seasons-menu .dropdown-option', function(e) {
        e.preventDefault();
        selectedSeason = $(this).data('season');
        updateStats();
        $('.seasons-menu').hide();
    });
    
    $(document).on('click', '.competitions-menu .dropdown-option', function(e) {
        e.preventDefault();
        selectedCompetition = $(this).data('competition');
        updateStats();
        $('.competitions-menu').hide();
    });
    
    // Agregar función para móvil
    function isMobile() {
        return window.innerWidth <= 599;
    }
    
    function hasSpaceBelow(button, menuHeight) {
        const buttonRect = button.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const footerHeight = 100;
        const spaceBelow = windowHeight - buttonRect.bottom - footerHeight;
        return spaceBelow >= menuHeight + 20;
    }
    
    function positionDropdownMenu(menu, button) {
        if (isMobile()) {
            return; // No hacer nada en móvil
        }
        
        const menuHeight = 200;
        const $menu = $(menu);
        
        if (hasSpaceBelow(button, menuHeight)) {
            $menu.css({
                'top': '100%',
                'bottom': 'auto'
            }).removeClass('dropdown-up');
        } else {
            $menu.css({
                'top': 'auto',
                'bottom': '100%'
            }).addClass('dropdown-up');
        }
    }
    
    $('.dropdown-btn').on('click', function() {
        const menu = $(this).next('.dropdown-menu');
        $('.dropdown-menu').not(menu).hide();
        
        if (menu.is(':visible')) {
            menu.hide();
        } else {
            menu.show();
            positionDropdownMenu(menu[0], this);
        }
    });
    
    $('.close-btn').on('click', function() {
        $(this).parent('.dropdown-menu').hide();
    });
    
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.stats-buttons').length) {
            $('.dropdown-menu').hide();
        }
    });
    
    $(window).on('resize', function() {
        $('.dropdown-menu:visible').each(function() {
            const menu = this;
            const button = $(this).prev('.dropdown-btn')[0];
            if (button) {
                positionDropdownMenu(menu, button);
            }
        });
    });
});
