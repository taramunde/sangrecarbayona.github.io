$(document).ready(function() {
    // Datos centralizados de todos los jugadores
    const playerData = {
        "aaron": {
            "2025/26": {
                "liga": { partidos: 6, golesEncajados: 8, tarjetasAmarillas: 1, tarjetasRojas: 0 },
                "uefa": { partidos: 4, golesEncajados: 4, tarjetasAmarillas: 0, tarjetasRojas: 0 },
                "amistosos": { partidos: 3, golesEncajados: 2, tarjetasAmarillas: 0, tarjetasRojas: 0 }
            },
            "2024/25": {
                "liga": { partidos: 10, golesEncajados: 12, tarjetasAmarillas: 2, tarjetasRojas: 0 },
                "uefa": { partidos: 5, golesEncajados: 6, tarjetasAmarillas: 1, tarjetasRojas: 0 },
                "amistosos": { partidos: 2, golesEncajados: 1, tarjetasAmarillas: 0, tarjetasRojas: 0 }
            }
            // Añade más temporadas o jugadores si es necesario
        }
    };

    // Función para sumar estadísticas por competencia
    function sumStats(player, season, competition) {
        const data = playerData[player][season] || {};
        if (competition === "oficiales") {
            const officialComps = ["liga", "uefa"];
            return officialComps.reduce((acc, comp) => {
                const compData = data[comp] || { partidos: 0, golesEncajados: 0, tarjetasAmarillas: 0, tarjetasRojas: 0 };
                return {
                    partidos: acc.partidos + compData.partidos,
                    golesEncajados: acc.golesEncajados + compData.golesEncajados,
                    tarjetasAmarillas: acc.tarjetasAmarillas + compData.tarjetasAmarillas,
                    tarjetasRojas: acc.tarjetasRojas + compData.tarjetasRojas
                };
            }, { partidos: 0, golesEncajados: 0, tarjetasAmarillas: 0, tarjetasRojas: 0 });
        }
        return data[competition] || { partidos: 0, golesEncajados: 0, tarjetasAmarillas: 0, tarjetasRojas: 0 };
    }

    // Función para actualizar estadísticas
    function updateStats(player, season, competition) {
        const stats = sumStats(player, season, competition);
        $(".stat-card").eq(0).find(".stat-value").text(stats.partidos);
        $(".stat-card").eq(1).find(".stat-value").text(stats.golesEncajados);
        $(".stat-card").eq(2).find(".stat-value").text(`${stats.tarjetasAmarillas}/${stats.tarjetasRojas}`);
        $(".dropdown-btn").eq(0).text(season); // Actualiza el botón de temporada
        $(".dropdown-btn").eq(1).text(competition === "oficiales" ? "Competiciones oficiales" : competition.charAt(0).toUpperCase() + competition.slice(1));
    }

    // Cargar estadísticas iniciales para el jugador actual
    const currentPlayer = $(".player-section").data("player");
    updateStats(currentPlayer, "2025/26", "oficiales");

    // Manejar clic en opciones de temporada
    $(".dropdown-option").filter("[data-season]").on("click", function(e) {
        e.preventDefault();
        const season = $(this).data("season");
        const currentComp = $(".dropdown-btn").eq(1).text().toLowerCase() === "competiciones oficiales" ? "oficiales" : $(".dropdown-btn").eq(1).text().toLowerCase();
        updateStats(currentPlayer, season, currentComp);
        $(".seasons-menu").hide();
    });

    // Manejar clic en opciones de competición
    $(".dropdown-option").filter("[data-competition]").on("click", function(e) {
        e.preventDefault();
        const competition = $(this).data("competition");
        const currentSeason = $(".dropdown-btn").eq(0).text();
        updateStats(currentPlayer, currentSeason, competition);
        $(".competitions-menu").hide();
    });

    // Toggle de los menús desplegables
    $(".dropdown-btn").eq(0).on("click", function() {
        $(".seasons-menu").toggle();
        $(".competitions-menu").hide();
    });

    $(".dropdown-btn").eq(1).on("click", function() {
        $(".competitions-menu").toggle();
        $(".seasons-menu").hide();
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
