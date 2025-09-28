$(document).ready(function() {
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

    // Manejar clics en los botones desplegables
    $('.dropdown-btn').on('click', function() {
        const menu = $(this).next('.dropdown-menu');
        $('.dropdown-menu').not(menu).hide(); // Cierra otros menús abiertos
        menu.toggle(); // Muestra/oculta el menú correspondiente
    });

    // Manejar clics en el botón de cerrar
    $('.close-btn').on('click', function() {
        $(this).parent('.dropdown-menu').hide();
    });

    // Cerrar menús si se hace clic fuera
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.stats-buttons').length) {
            $('.dropdown-menu').hide();
        }
    });

    // Función para detectar si hay espacio suficiente abajo
function hasSpaceBelow(button, menuHeight) {
    const buttonRect = button.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const spaceBelow = windowHeight - buttonRect.bottom;
    return spaceBelow >= menuHeight + 20; // 20px de margen
}

// Modifica la función de mostrar menús para ajustar posición
function positionDropdownMenu(menu, button) {
    const menuHeight = 300; // altura máxima del menú
    
    if (hasSpaceBelow(button, menuHeight)) {
        menu.style.top = '100%';
        menu.style.bottom = 'auto';
    } else {
        menu.style.top = 'auto';
        menu.style.bottom = '100%';
    }
}
});
