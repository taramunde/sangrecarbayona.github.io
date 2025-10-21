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

    // LÓGICA AÑADIDA PARA EL CRESPÓN
    if (player.personalData && player.personalData.deathDate) {
    $('.black-ribbon-container').show();
    } else {
    $('.black-ribbon-container').hide();
   }

}
    
    // Cargar datos del jugador actual
    updatePlayerInfo();
    loadPlayerSeasons();
    generateStatsHTML();
    updateStats(); 
    loadCareerInfo(); 
    loadPersonalData();
    
    // Resto de funciones exactamente como las tienes...
    $('.menu-tab').on('click', function() {
        $('.menu-tab').removeClass('active');
        $('.tab-content').removeClass('active');
        $(this).addClass('active');
        $('#' + $(this).data('tab')).addClass('active');
    });
    
    $('.menu-tab[data-tab="stats"]').addClass('active');
    $('#stats').addClass('active');

    // Nueva función para cargar la trayectoria
function loadCareerInfo() {
    const player = playersData[currentPlayer];
    if (!player || (!player.career && !player.nationalTeam)) {
        $('#career').html('<p>No hay información de trayectoria disponible.</p>');
        return;
    }
    
    let careerHTML = '<div class="career-timeline">';
    
    // Cargar trayectoria de clubes
    if (player.career && player.career.length > 0) {
        player.career.forEach(item => {
            careerHTML += `
                <div class="career-item">
                    <span class="career-season">${item.season}</span>
                    <span class="career-team">${item.team}</span>
                    <span class="career-category">${item.category}</span>
                </div>
            `;
        });
    }
    
    // Cargar trayectoria con selección nacional
    if (player.nationalTeam && player.nationalTeam.length > 0) {
        player.nationalTeam.forEach(item => {
            careerHTML += `
                <div class="career-item national-team-item">
                    <span class="career-season">${item.season}</span>
                    <span class="career-team">${item.team}</span>
                    <span class="career-category">${item.category}</span>
                </div>
            `;
        });
    }
    
    careerHTML += '</div>';
    
    $('#career').html(careerHTML);
}
    
    function loadPlayerSeasons() {
    const player = playersData[currentPlayer];
    if (!player || !player.stats) return;

    const seasonsMenu = $('.seasons-menu');
    const seasons = Object.keys(player.stats).sort().reverse();

    seasonsMenu.find('.dropdown-option').remove();

    // --- CÓDIGO AÑADIDO ---
    // Añade la opción para ver todas las temporadas juntas
    seasonsMenu.append(`<a href="#" class="dropdown-option" data-season="Todos">Todas</a>`);
    // --- FIN DEL CÓDIGO AÑADIDO ---

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
    if (!player || !player.stats) {
        // Devuelve un objeto vacío si no hay datos
        if (player.role === 'portero') return { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 };
        if (player.role === 'jugador') return { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 };
        if (player.role === 'entrenador') return { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 };
    }

    // Inicializa el objeto de estadísticas totales
    let totalStats = {};
    if (player.role === 'portero') {
        totalStats = { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 };
    } else if (player.role === 'jugador') {
        totalStats = { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 };
    } else if (player.role === 'entrenador') {
        totalStats = { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 };
    }

    // --- LÓGICA MODIFICADA ---
    const seasonsToCalculate = season === 'Todos' ? Object.keys(player.stats) : [season];

    seasonsToCalculate.forEach(currentSeason => {
        const seasonData = player.stats[currentSeason];
        if (!seasonData) return; // Continúa si la temporada no existe en los datos

        if (competition === 'oficiales') {
            Object.keys(seasonData).forEach(comp => {
                if (comp !== 'amistosos') {
                    const compData = seasonData[comp];
                    Object.keys(totalStats).forEach(key => {
                        totalStats[key] += compData[key] || 0;
                    });
                }
            });
        } else if (competition === 'todos') {
            Object.keys(seasonData).forEach(comp => {
                const compData = seasonData[comp];
                Object.keys(totalStats).forEach(key => {
                    totalStats[key] += compData[key] || 0;
                });
            });
        } else if (seasonData[competition]) {
            Object.keys(totalStats).forEach(key => {
                totalStats[key] += seasonData[competition][key] || 0;
            });
        }
    });
    // --- FIN DE LA LÓGICA MODIFICADA ---

    return totalStats;
}
    
    function updateStats() {
    const player = playersData[currentPlayer];
    const stats = calculateStats(selectedSeason, selectedCompetition);
    
    // Actualizar texto de los botones (con lógica para "Todas")
    $('#seasons-btn').text(selectedSeason === 'Todos' ? 'Todas' : selectedSeason);
    $('#competitions-btn').text(getCompetitionDisplayName(selectedCompetition));

       // --- CÓDIGO A AÑADIR ---
    // Comprueba el rol para cambiar el título dinámicamente
        if (player.role === 'portero' || player.role === 'jugador') {
            const titleElement = $('#partidos-count').siblings('h4');
            
            // Si la competición es 'amistosos'
            if (selectedCompetition === 'amistosos') {
                titleElement.text('Partidos Amistosos');
            // Si es 'todos', muestra ambos
            } else if (selectedCompetition === 'todos') {
                titleElement.text('Oficiales y Amistosos');
            // Para el resto de casos ('oficiales', 'liga', etc.)
            } else {
                titleElement.text('Partidos Oficiales');
            }
        }
    // --- FIN DEL CÓDIGO A AÑADIR --- 
    
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

    function loadPersonalData() {
    const player = playersData[currentPlayer];
    if (!player || !player.personalData) {
        $('#personal-data').html('<p>No hay datos personales disponibles.</p>');
        return;
    }

    const data = player.personalData;
    // Usaremos un div contenedor para tener más control sobre el estilo
    let personalDataHTML = '<div class="personal-data-grid">';

    // Cada dato será un 'data-item' con una etiqueta y un valor
    if (data.fullName) personalDataHTML += `<div class="data-item"><span class="data-label">Nombre completo</span><span class="data-value">${data.fullName}</span></div>`;
    if (data.nickname) personalDataHTML += `<div class="data-item"><span class="data-label">Apodo</span><span class="data-value">${data.nickname}</span></div>`;
    if (data.birthPlace) personalDataHTML += `<div class="data-item"><span class="data-label">Lugar de Nacimiento</span><span class="data-value">${data.birthPlace}</span></div>`;
    if (data.country) personalDataHTML += `<div class="data-item"><span class="data-label">País</span><span class="data-value">${data.country}</span></div>`;
    if (data.nationality) personalDataHTML += `<div class="data-item"><span class="data-label">Nacionalidad</span><span class="data-value">${data.nationality}</span></div>`;
    if (data.height) personalDataHTML += `<div class="data-item"><span class="data-label">Altura</span><span class="data-value">${data.height}</span></div>`;
    if (data.birthDate) personalDataHTML += `<div class="data-item"><span class="data-label">F. Nacimiento</span><span class="data-value">${data.birthDate}</span></div>`;
    if (data.deathDate) personalDataHTML += `<div class="data-item"><span class="data-label">F. Fallecimiento</span><span class="data-value">${data.deathDate}</span></div>`;

    personalDataHTML += '</div>';
    $('#personal-data').html(personalDataHTML);
}
});
