$(document).ready(function() {
    // Cargar el footer dinámicamente
    $('#footer-placeholder').load('footer.html', function() {
        // Actualizar el año actual dinámicamente después de cargar el footer
        const currentYear = new Date().getFullYear();
        $('#current-year').text(currentYear);
    });
});
