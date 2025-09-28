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
    
    // Función para detectar si hay espacio suficiente abajo
    function hasSpaceBelow(button, menuHeight) {
        const buttonRect = button.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const footerHeight = 100; // Estimación de altura del footer
        const spaceBelow = windowHeight - buttonRect.bottom - footerHeight;
        return spaceBelow >= menuHeight + 20; // 20px de margen adicional
    }
    
    // Función para posicionar el menú inteligentemente
    function positionDropdownMenu(menu, button) {
        const menuHeight = 200; // altura máxima que definiste en CSS
        const $menu = $(menu);
        
        if (hasSpaceBelow(button, menuHeight)) {
            // Si hay espacio suficiente abajo, mostrar hacia abajo (normal)
            $menu.css({
                'top': '100%',
                'bottom': 'auto'
            }).removeClass('dropdown-up');
        } else {
            // Si no hay espacio suficiente abajo, mostrar hacia arriba
            $menu.css({
                'top': 'auto',
                'bottom': '100%'
            }).addClass('dropdown-up');
        }
    }
    
    // Manejar clics en los botones desplegables
    $('.dropdown-btn').on('click', function() {
        const menu = $(this).next('.dropdown-menu');
        $('.dropdown-menu').not(menu).hide(); // Cierra otros menús abiertos
        
        if (menu.is(':visible')) {
            menu.hide();
        } else {
            menu.show();
            // Aplicar posicionamiento inteligente después de mostrar el menú
            positionDropdownMenu(menu[0], this);
        }
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
    
    // Reposicionar menús al redimensionar la ventana
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
