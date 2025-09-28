const playersData = {
    "aaron": {
        name: "Aarón Escandell Banacloche",
        position: "Portero",
        role: "portero", // nuevo campo
        number: 13,
        image: "https://i.postimg.cc/hvxDQPg1/Aar-n-PNG-3.webp",
        stats: {
            "2024/25": {
                liga: { partidos: 15, goles_encajados: 12, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 3, goles_encajados: 2, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_encajados: 3, tarjetas_amarillas: 1, tarjetas_rojas: 0 }
            }
        }
    },
    "delantero_ejemplo": {
        name: "Juan Pérez",
        position: "Delantero",
        role: "jugador", // no es portero
        number: 9,
        image: "url_imagen.webp",
        stats: {
            "2024/25": {
                liga: { partidos: 20, goles_marcados: 8, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
                copa: { partidos: 4, goles_marcados: 2, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                amistosos: { partidos: 6, goles_marcados: 4, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },
    "entrenador_ejemplo": {
        name: "Carlos López",
        position: "Entrenador",
        role: "entrenador",
        number: null,
        image: "url_imagen.webp",
        stats: {
            "2024/25": {
                liga: { partidos_entrenados: 25, victorias: 12, empates: 8, derrotas: 5 },
                copa: { partidos_entrenados: 4, victorias: 2, empates: 1, derrotas: 1 },
                amistosos: { partidos_entrenados: 6, victorias: 4, empates: 1, derrotas: 1 }
            }
        }
    }
};
