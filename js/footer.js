$(document).ready(function() {
    // Cargar el footer dinámicamente, evitando caché
    const nocache = new Date().getTime(); // cambia cada vez que recargas
    $('#footer-placeholder').load('footer.html?nocache=' + nocache, function() {
        // Actualizar el año actual dinámicamente después de cargar el footer
        const currentYear = new Date().getFullYear();
        $('#current-year').text(currentYear);
    });
});
