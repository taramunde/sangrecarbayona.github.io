$(document).ready(function() {
    var originalTop = $('#bun').css('top');
    var originalLeft = $('#bun').css('left');
    
    // Configurar delays de animación solo si no es desktop
    if ($(window).width() <= 768) {
        var delay = 300;
        $('.nav-item').each(function() {
            $(this).css('transition-delay', delay + 'ms');
            delay = delay + 100;
        });
    }
    
    // Marcar elementos con submenú
    $('.nav-item.has-submenu').addClass('arrowed');
    
    // Botón de menú (solo relevante en mobile)
    $('#bun').click(function() {
        var $this = $(this);
        
        if (!$this.hasClass('menu-open')) {
            // Abrir menú
            $this.addClass('menu-open');
            setTimeout(function() {
                $('.menu-header-image').addClass('show');
            }, 300);
        } else {
            // Cerrar menú
            $('.menu-header-image').removeClass('show');
            $('.sub-nav').hide(); // Ocultar todos los submenús
            $('.nav-item').removeClass('selected'); // Quitar selección
            setTimeout(function() {
                $this.removeClass('menu-open');
                $this.css({
                    'top': originalTop,
                    'left': originalLeft
                });
            }, 300);
        }
        
        $('#sidebar').toggleClass('nav-slide');
        $('.nav-item').toggleClass('item-slide');
    });
    
    // Manejo de submenús
    $('.nav-item.has-submenu').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        var $this = $(this);
        var $subNav = $this.find('.sub-nav');
        
        // Toggle del estado seleccionado
        $this.toggleClass('selected');
        
        // Cerrar otros submenús
        $('.nav-item.has-submenu').not($this).removeClass('selected');
        $('.sub-nav').not($subNav).slideUp('slow');
        
        // Toggle del submenú actual
        if ($subNav.is(':visible')) {
            $subNav.slideUp('slow');
        } else {
            $subNav.slideDown('slow');
        }
    });
    
    // Prevenir que los clicks en submenús cierren el menú principal
    $('.sub-nav').click(function(e) {
        e.stopPropagation();
    });
});
