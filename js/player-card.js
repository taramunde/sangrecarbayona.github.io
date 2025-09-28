$(document).ready(function() {
    // Manejar clics en las pestañas
    $('.menu-tab').on('click', function() {
        // Remover clase active de todas las pestañas y contenidos
        $('.menu-tab').removeClass('active');
        $('.tab-content').removeClass('active');

        // Añadir clase active al elemento clicado y su contenido
        $(this).addClass('active');
        $('#' + $(this).data('tab')).addClass('active');
    });

    // Por defecto, activar Estadísticas
    $('.menu-tab[data-tab="stats"]').addClass('active');
    $('#stats').addClass('active');
});
