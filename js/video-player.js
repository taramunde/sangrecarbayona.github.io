// js/video-player.js
$(document).ready(function() {
    // Seleccionar el elemento de Alineaciones
    const $alineacionesItem = $('.nav-item.has-submenu:contains("Alineaciones")');
    const $video = $('.video-player');

    // Cuando se hace clic en Alineaciones
    $alineacionesItem.on('click', function() {
        const $submenu = $(this).find('.sub-nav');
        if ($submenu.is(':visible')) {
            $video[0].pause(); // Pausar el video si el submenú se cierra
        } else {
            $video[0].play(); // Reproducir el video si el submenú se abre
        }
    });
});
