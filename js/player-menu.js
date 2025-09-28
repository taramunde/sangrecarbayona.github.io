$(document).ready(function() {
    let currentPlayer = 'aaron'; // Por defecto Aaron, luego esto se puede obtener de la URL
    let selectedSeason = '2024/25';
    let selectedCompetition = 'oficiales';
    
    // Cargar datos del jugador actual
    loadPlayerSeasons();
    updateStats();
    
    // Manejar clics en las pestañas principales
    $('.menu-tab').on('click', function() {
        $('.menu-tab').removeClass('active');
        $('.tab-content').removeClass('active');
        $(this).addClass('active');
        $('#' + $(this).data('tab')).addClass('active');
    });
    
    // Por defecto, activar Estadísticas
    $('.menu-tab[data-tab="stats"]').addClass('active');
    $('#stats').addClass('active');
    
    // Cargar temporadas disponibles para el jugador actual
    function loadPlayerSeasons() {
        const player = playersData[currentPlayer];
        if (!player || !player.stats) return;
        
        const seasonsMenu = $('.seasons-menu');
        const seasons = Object.keys(player.stats).sort().reverse();
        
        // Limpiar opciones existentes excepto el botón cerrar
        seasonsMenu.find('.dropdown-option').remove();
        
        // Agregar nuevas opciones
        seasons.forEach(season => {
            seasonsMenu.append(`<a href="#" class="dropdown-option" data-season="${season}">${season}</a>`);
        });
        
        // Establecer primera temporada como seleccionada
        if (seasons.length > 0) {
            selectedSeason = seasons[0];
        }
    }
    
    // Función para calcular estadísticas
    function calculateStats(season, competition) {
        const player = playersData[currentPlayer];
        if (!player || !player.stats || !player.stats[season]) {
            return { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 };
        }
        
        const seasonData = player.stats[season];
        let totalStats = { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 };
        
        if (competition === 'oficiales') {
            // Sumar liga y copa/UEFA (excluir amistosos)
            Object.keys(seasonData).forEach(comp => {
                if (comp !== 'amistosos') {
                    totalStats.partidos += seasonData[comp].partidos || 0;
                    totalStats.goles_encajados += seasonData[comp].goles_encajados || 0;
                    totalStats.tarjetas_amarillas += seasonData[comp].tarjetas_amarillas || 0;
                    totalStats.tarjetas_rojas += seasonData[comp].tarjetas_rojas || 0;
                }
            });
        } else if (seasonData[competition]) {
            totalStats = seasonData[competition];
        }
        
        return totalStats;
    }
    
    // Actualizar estadísticas mostradas
    function updateStats() {
        const stats = calculateStats(selectedSeason, selectedCompetition);
        
        $('#partidos-count').text(stats.partidos);
        $('#goles-count').text(stats.goles_encajados);
        $('#amarillas-count').text(stats.tarjetas_amarillas);
        $('#rojas-count').text(stats.tarjetas_rojas);
    }
    
    // Manejar selección de temporada
    $(document).on('click', '.seasons-menu .dropdown-option', function(e) {
        e.preventDefault();
        selectedSeason = $(this).data('season');
        updateStats();
        $('.seasons-menu').hide();
    });
    
    // Manejar selección de competición
    $(document).on('click', '.competitions-menu .dropdown-option', function(e) {
        e.preventDefault();
        selectedCompetition = $(this).data('competition');
        updateStats();
        $('.competitions-menu').hide();
    });
    
    // Resto del código de manejo de menús desplegables...
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
  
    // Función específica para móvil - desactivar posicionamiento inteligente
function isMobile() {
    return window.innerWidth <= 599;
}

// Modificar la función existente de posicionamiento
function positionDropdownMenu(menu, button) {
    // En móvil, siempre usar posición estática
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
});
