$(document).ready(function() {
    // Datos centralizados de todos los jugadores
    const playerData = {
        "aaron": {
            "2025/26": { partidos: "10", golesEncajados: "12", penalesParados: "2", minutosJugados: "900" },
            "2024/25": { partidos: "15", golesEncajados: "18", penalesParados: "1", minutosJugados: "1350" }
            // Añade más temporadas si es necesario
        },
        // Añade más jugadores aquí en el futuro, ej.:
        // "jugador2": {
        //     "2025/26": { partidos: "12", golesEncajados: "15", penalesParados: "0", minutosJugados: "1080" },
        //     "2024/25": { partidos: "18", golesEncajados: "22", penalesParados: "2", minutosJugados: "1620" }
        // }
    };

    // Función para actualizar estadísticas
    function updateStats(player, season) {
        const currentPlayer = playerData[player] || playerData["aaron"]; // Por defecto Aarón si no existe
        const stats = currentPlayer[season] || currentPlayer["2025/26"]; // Por defecto 2025/26 si no existe
        const statsDiv = $("#season-stats");
        statsDiv.html(`
            <p><strong>Partidos jugados:</strong> ${stats.partidos}</p>
            <p><strong>Goles encajados:</strong> ${stats.golesEncajados}</p>
            <p><strong>Penales parados:</strong> ${stats.penalesParados}</p>
            <p><strong>Minutos jugados:</strong> ${stats.minutosJugados}</p>
        `);
        $(".dropdown-btn").first().text(season); // Actualiza el botón con la temporada seleccionada
    }

    // Cargar estadísticas iniciales para el jugador actual
    const currentPlayer = $(".player-section").data("player");
    updateStats(currentPlayer, "2025/26");

    // Manejar clic en opciones de temporada
    $(".dropdown-option").on("click", function(e) {
        e.preventDefault();
        const season = $(this).data("season");
        updateStats(currentPlayer, season);
        $(".seasons-menu").hide(); // Ocultar menú tras selección
    });

    // Toggle del menú desplegable
    $(".dropdown-btn").first().on("click", function() {
        $(".seasons-menu").toggle();
        $(".competitions-menu").hide(); // Ocultar el otro menú si está abierto
    });

    // Cerrar menú al hacer clic en el botón de cerrar
    $(".close-btn").on("click", function() {
        $(this).closest(".dropdown-menu").hide();
    });

    // Cerrar menús si se hace clic fuera
    $(document).on("click", function(e) {
        if (!$(e.target).closest(".stats-buttons").length) {
            $(".dropdown-menu").hide();
        }
    });
});
