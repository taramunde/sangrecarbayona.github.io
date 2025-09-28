$(document).ready(function() {
    let currentPlayer = 'aaron'; // Esto se puede obtener de la URL o parámetro
    let selectedSeason = '2024/25';
    let selectedCompetition = 'oficiales';
    
    // Cargar datos del jugador actual
    loadPlayerSeasons();
    generateStatsHTML();
    updateStats();
    
    // Resto de funciones existentes...
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
    
    // Nueva función para generar HTML según el rol
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
    
    // Función mejorada para calcular estadísticas según el rol
    function calculateStats(season, competition) {
        const player = playersData[currentPlayer];
        if (!player || !player.stats || !player.stats[season]) {
            // Devolver objeto vacío según el rol
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
        
        // Inicializar según el rol
        if (player.role === 'portero') {
            totalStats = { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 };
        } else if (player.role === 'jugador') {
            totalStats = { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 };
        } else if (player.role === 'entrenador') {
            totalStats = { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 };
        }
        
        if (competition === 'oficiales') {
            // Sumar liga y copa/UEFA (excluir amistosos)
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
    
    // Función mejorada para actualizar estadísticas
    function updateStats() {
        const player = playersData[currentPlayer];
        const stats = calculateStats(selectedSeason, selectedCompetition);
        
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
    
    // Resto del código existente para manejo de eventos...
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
    
    // Resto de funciones de posicionamiento y manejo de menús...
    function hasSpaceBelow(button, menuHeight) {
        const buttonRect = button.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const footerHeight = 100;
        const spaceBelow = windowHeight - buttonRect.bottom - footerHeight;
        return spaceBelow >= menuHeight + 20;
    }
    
    function positionDropdownMenu(menu, button) {
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
