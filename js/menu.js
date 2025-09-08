/* menu.js */
$(document).ready(function() {
    // Cargar menú lateral
    $("#sidebar").load("menu.html #sidebar", function() {
        // Cargar submenús después de cargar el menú
        $("#entrenadores-submenu").load("submenus.html #entrenadores-submenu");
        $("#porteros-submenu").load("submenus.html #porteros-submenu");
        $("#defensas-submenu").load("submenus.html #defensas-submenu");
        $("#centrocampistas-submenu").load("submenus.html #centrocampistas-submenu");
        $("#delanteros-submenu").load("submenus.html #delanteros-submenu");
        $("#alineaciones-submenu").load("submenus.html #alineaciones-submenu");

        // Submenús
        $('.nav-item.has-submenu').click(function() {
            $(this).find('.sub-nav').slideToggle();
            $(this).toggleClass('selected');
        });
    });

    // Botón hamburguesa
    $("#bun").click(function() {
        $(this).toggleClass("menu-open");
        $("#sidebar").toggleClass("nav-slide");
        $(".menu-header-image").toggleClass("show");
        $(".nav-item").each(function(i) {
            var item = $(this);
            setTimeout(function() {
                item.toggleClass("item-slide");
            }, i * 50);
        });
    });
});
