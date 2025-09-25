// js/players.js

const allPlayersData = {
    "2025-26": { // Temporada actual
        goalkeepers: [
            { src: "https://i.postimg.cc/s2YhzvPR/Aar-n-PNG-Alineaci-n.webp", alt: "Portero 1", number: "13", name: "Aarón", url: "#" },
            { src: "https://i.postimg.cc/sgPM0mk4/Moldovan-PNG-2.webp", alt: "Portero 2", number: "1", name: "Moldovan", url: "#" },
            { src: "https://i.postimg.cc/XJqXqbps/Narv-ez-PNG.webp", alt: "Portero 3", number: "26", name: "Narváez", url: "#" }
        ],
        defenders: [
            { src: "https://i.postimg.cc/qRHtqnX7/Bailly-PNG-2.webp", alt: "Defensa 1", number: "2", name: "Bailly", url: "#" },
            { src: "https://i.postimg.cc/15bMB7y7/Rahim-PNG.webp", alt: "Defensa 2", number: "3", name: "Rahim", url: "#" },
            { src: "https://i.postimg.cc/V6ScxHbr/David-Costas-PNG.webp", alt: "Defensa 3", number: "4", name: "David Costas", url: "#" },
            { src: "https://i.postimg.cc/Wb0spKY0/Dani-Calvo-PNG.webp", alt: "Defensa 4", number: "12", name: "Dani Calvo", url: "#" },
            { src: "https://i.postimg.cc/YqQmcd1s/Luengo-PNG.webp", alt: "Defensa 5", number: "15", name: "Luengo", url: "#" },
            { src: "https://i.postimg.cc/ZqxmPdzn/Carmo-PNG-2.webp", alt: "Defensa 6", number: "16", name: "Carmo", url: "#" },
            { src: "https://i.postimg.cc/cLHZ7H4B/Nacho-Vidal-PNG-3.webp", alt: "Defensa 7", number: "22", name: "Nacho Vidal", url: "#" },
            { src: "https://i.postimg.cc/yYdPX4cz/Lucas-PNG.webp", alt: "Defensa 8", number: "24", name: "Lucas", url: "#" },
            { src: "https://i.postimg.cc/W4GZMX4Z/Javi-L-pez-PNG.webp", alt: "Defensa 9", number: "25", name: "Javi López", url: "#" },
            { src: "https://i.postimg.cc/FsFQmRcX/Omar-Falah-PNG.webp", alt: "Defensa 10", number: "29", name: "Omar Falah", url: "#" },
            { src: "https://i.postimg.cc/PqJxqywh/Marco-Esteban-PNG.webp", alt: "Defensa 11", number: "30", name: "Marco Esteban", url: "#" },
            { src: "https://i.postimg.cc/vHtvs8y9/Adri-Lopes-PNG.webp", alt: "Defensa 12", number: "32", name: "Adri Lopes", url: "#" },
            { src: "https://i.postimg.cc/j2R8rDDW/Lamine-PNG.webp", alt: "Defensa 13", number: "28", name: "Lamine", url: "#" }
        ],
        midfielders: [
            { src: "https://i.postimg.cc/mDCkCD2g/Alberto-Reina-PNG.webp", alt: "Centrocampista 1", number: "5", name: "Alberto Reina", url: "#" },
            { src: "https://i.postimg.cc/gjJYNwFR/Sibo-PNG-Alineaci-n.webp", alt: "Centrocampista 2", number: "6", name: "Sibo", url: "#" },
            { src: "https://i.postimg.cc/6qQmv7tk/Santi-Cazorla-PNG.webp", alt: "Centrocampista 3", number: "8", name: "Santi Cazorla", url: "#" },
            { src: "https://i.postimg.cc/R08GqPNz/Colombatto-PNG.webp", alt: "Centrocampista 4", number: "11", name: "Colombatto", url: "#" },
            { src: "https://i.postimg.cc/BbxX2vpC/Ovi_Ejaria_PNG_(2).webp", alt: "Centrocampista 5", number: "14", name: "Ejaria", url: "#" },
            { src: "https://i.postimg.cc/v82kfvkD/Borja-S-nchez-PNG.webp", alt: "Centrocampista 6", number: "16", name: "Borja Sánchez", url: "#" },
            { src: "https://i.postimg.cc/rpTPMZ0Z/Brandon_Dominguès_PNG.webp", alt: "Centrocampista 7", number: "17", name: "Brandon Dominguès", url: "#" },
            { src: "https://i.postimg.cc/8cTvCWBS/Dendoncker-PNG-2.webp", alt: "Centrocampista 8", number: "20", name: "Dendoncker", url: "#" },
            { src: "https://i.postimg.cc/9MxvJ3Xw/Brekalo_PNG_(2).webp", alt: "Centrocampista 9", number: "18", name: "Brekalo", url: "#" },
            { src: "https://i.postimg.cc/K8bYhFN6/Ili-PNG.webp", alt: "Centrocampista 10", number: "21", name: "Ilić", url: "#" },
            { src: "https://i.postimg.cc/5tWYNTVz/Hassan-PNG-2.webp", alt: "Centrocampista 11", number: "10", name: "Hassan", url: "#" },
            { src: "https://i.postimg.cc/dV30nntX/lex-Cardero-PNG.webp", alt: "Centrocampista 12", number: "27", name: "Álex Cardero", url: "#" },
            { src: "https://i.postimg.cc/KYYs1kft/Cheli-PNG.webp", alt: "Centrocampista 13", number: "31", name: "Cheli", url: "#" },
            { src: "https://i.postimg.cc/mgPHhTMt/Diego_Tejón_PNG.webp", alt: "Centrocampista 14", number: "34", name: "Diego Tejón", url: "#" }
        ],
        forwards: [
            { src: "https://i.postimg.cc/xCTdXSFX/Ilyas-PNG-3.webp", alt: "Delantero 1", number: "7", name: "Ilyas", url: "#" },
            { src: "https://i.postimg.cc/mZywx37V/Fede-Vi-as-PNG-3.webp", alt: "Delantero 2", number: "9", name: "Fede Viñas", url: "#" },
            { src: "https://i.postimg.cc/FshL02dV/lex-For-s-PNG.webp", alt: "Delantero 3", number: "19", name: "Álex Forés", url: "#" },
            { src: "https://i.postimg.cc/m2XZ5qk4/Rond-n-PNG-2.webp", alt: "Delantero 4", number: "23", name: "Rondón", url: "#" }
        ],
        coaches: [
            { src: "https://i.postimg.cc/9FK0fKhp/Paunović_(3)_(entrenador).webp", alt: "Entrenador 1", number: "-", name: "Paunović", url: "#" }
        ]
    },
    
    "2024-25": { // Temporada 2024-25
        goalkeepers: [
            { src: "https://i.postimg.cc/wxsLQXj0/Quentin-Braat-PNG.webp", alt: "Portero 1", number: "1", name: "Quentin Braat", url: "#" },
            { src: "https://i.postimg.cc/s2YhzvPR/Aar-n-PNG-Alineaci-n.webp", alt: "Portero 2", number: "13", name: "Aarón", url: "#" },
            { src: "https://i.postimg.cc/XJqXqbps/Narv-ez-PNG.webp", alt: "Portero 3", number: "26", name: "Narváez", url: "#" }
        ],
        defenders: [
            { src: "https://i.postimg.cc/XYDdjpzZ/lvaro-Lemos-PNG-3.webp", alt: "Defensa 1", number: "2", name: "Álvaro Lemos", url: "#" },
            { src: "https://i.postimg.cc/15bMB7y7/Rahim-PNG.webp", alt: "Defensa 2", number: "3", name: "Rahim", url: "#" },
            { src: "https://i.postimg.cc/V6ScxHbr/David-Costas-PNG.webp", alt: "Defensa 3", number: "4", name: "David Costas", url: "#" },
            { src: "https://i.postimg.cc/cLHZ7H4B/Nacho-Vidal-PNG-3.webp", alt: "Defensa 4", number: "5", name: "Nacho Vidal", url: "#" },
            { src: "https://i.postimg.cc/Wb0spKY0/Dani-Calvo-PNG.webp", alt: "Defensa 5", number: "12", name: "Dani Calvo", url: "#" },
            { src: "https://i.postimg.cc/YqQmcd1s/Luengo-PNG.webp", alt: "Defensa 6", number: "15", name: "Luengo", url: "#" },
            { src: "https://i.postimg.cc/yN4Q1Q53/Pomares-PNG.webp", alt: "Defensa 7", number: "21", name: "Pomares", url: "#" },
            { src: "https://i.postimg.cc/yYdPX4cz/Lucas-PNG.webp", alt: "Defensa 8", number: "24", name: "Lucas", url: "#" },
            { src: "https://i.postimg.cc/mDSQG8f4/Jaime-V-zquez-PNG.webp", alt: "Defensa 9", number: "29", name: "Jaime Vázquez", url: "#" },
            { src: "https://i.postimg.cc/PqJxqywh/Marco-Esteban-PNG.webp", alt: "Defensa 10", number: "30", name: "Marco Esteban", url: "#" },
            { src: "https://i.postimg.cc/j2zBKVq5/Eze-PNG.webp", alt: "Defensa 11", number: "31", name: "Eze", url: "#" },
            { src: "https://i.postimg.cc/vHtvs8y9/Adri-Lopes-PNG.webp", alt: "Defensa 12", number: "32", name: "Adri Lopes", url: "#" },
            { src: "https://i.postimg.cc/FsFQmRcX/Omar-Falah-PNG.webp", alt: "Defensa 13", number: "35", name: "Omar Falah", url: "#" },
            { src: "https://i.postimg.cc/j2R8rDDW/Lamine-PNG.webp", alt: "Defensa 14", number: "36", name: "Lamine", url: "#" }
        ],
        midfielders: [
            { src: "https://i.postimg.cc/636yNz5d/Alberto-del-Moral-PNG-Alineaci-n.webp", alt: "Centrocampista 1", number: "5", name: "Alberto del Moral", url: "#" },
            { src: "https://i.postimg.cc/gjJYNwFR/Sibo-PNG-Alineaci-n.webp", alt: "Centrocampista 2", number: "6", name: "Sibo", url: "#" },
            { src: "https://i.postimg.cc/GhV54hNf/Sebas-Moyano-PNG.webp", alt: "Centrocampista 3", number: "7", name: "Sebas Moyano", url: "#" },
            { src: "https://i.postimg.cc/6qQmv7tk/Santi-Cazorla-PNG.webp", alt: "Centrocampista 4", number: "8", name: "Santi Cazorla", url: "#" },
            { src: "https://i.postimg.cc/v82kfvkD/Borja-S-nchez-PNG.webp", alt: "Centrocampista 5", number: "10", name: "Borja Sánchez", url: "#" },
            { src: "https://i.postimg.cc/br8zc90Q/Portillo-PNG-3.webp", alt: "Centrocampista 6", number: "10", name: "Portillo", url: "#" },
            { src: "https://i.postimg.cc/R08GqPNz/Colombatto-PNG.webp", alt: "Centrocampista 7", number: "11", name: "Colombatto", url: "#" },
            { src: "https://i.postimg.cc/Z5nr38kY/De-La-Hoz-PNG-3.webp", alt: "Centrocampista 8", number: "17", name: "De La Hoz", url: "#" },
            { src: "https://i.postimg.cc/SxkLgnn3/Paulino-PNG.webp", alt: "Centrocampista 9", number: "18", name: "Paulino", url: "#" },
            { src: "https://i.postimg.cc/HLCvtvT4/Seoane-PNG.webp", alt: "Centrocampista 10", number: "20", name: "Seoane", url: "#" },
            { src: "https://i.postimg.cc/gcwFM5v3/Carlos-Dotor-PNG.webp", alt: "Centrocampista 11", number: "22", name: "Dotor", url: "#" },
            { src: "https://i.postimg.cc/5tWYNTVz/Hassan-PNG-2.webp", alt: "Centrocampista 12", number: "23", name: "Hassan", url: "#" },
            { src: "https://i.postimg.cc/dV30nntX/lex-Cardero-PNG.webp", alt: "Centrocampista 13", number: "27", name: "Álex Cardero", url: "#" },
            { src: "https://i.postimg.cc/V6J7fxgw/Valdera_PNG.webp", alt: "Centrocampista 14", number: "33", name: "Valdera", url: "#" },
            { src: "https://i.postimg.cc/mgPHhTMt/Diego-Tej-n-PNG.webp", alt: "Centrocampista 15", number: "34", name: "Diego Tejón", url: "#" },
            { src: "https://i.postimg.cc/Y0FPt53V/Castri-PNG.webp", alt: "Centrocampista 16", number: "-", name: "Castri", url: "#" }
        ],
        forwards: [
            { src: "https://i.postimg.cc/KcPTkZzY/Alem-o-PNG.webp", alt: "Delantero 1", number: "9", name: "Alemão", url: "#" },
            { src: "https://i.postimg.cc/vTn7N9LF/Paraschiv-PNG-3.webp", alt: "Delantero 2", number: "14", name: "Paraschiv", url: "#" },
            { src: "https://i.postimg.cc/xCTdXSFX/Ilyas-PNG-3.webp", alt: "Delantero 3", number: "16", name: "Ilyas", url: "#" },
            { src: "https://i.postimg.cc/R0tYw3y8/Masca-PNG.webp", alt: "Delantero 4", number: "17", name: "Masca", url: "#" },
            { src: "https://i.postimg.cc/6pm4JqHM/lex-Mill-n-PNG.webp", alt: "Delantero 5", number: "19", name: "Álex Millán", url: "#" },
            { src: "https://i.postimg.cc/mZywx37V/Fede-Vi-as-PNG-3.webp", alt: "Delantero 6", number: "19", name: "Fede Viñas", url: "#" },
            { src: "https://i.postimg.cc/0Q0PdXFL/Santi-Migu-lez-PNG.webp", alt: "Delantero 7", number: "28", name: "Santi Miguélez", url: "#" }
        ],
        coaches: [
            { src: "https://i.postimg.cc/fLnY0kQ8/Javi-Calleja-entrenador-PNG.webp", alt: "Entrenador 1", number: "-", name: "Javi Calleja", url: "#" },
            { src: "https://i.postimg.cc/9FK0fKhp/Paunović_(3)_(entrenador).webp", alt: "Entrenador 2", number: "-", name: "Paunović", url: "#" }
        ]
    },

    "2023-24": { // Temporada 2023-24
        goalkeepers: [
            { src: "https://i.postimg.cc/wxsLQXj0/Quentin-Braat-PNG.webp", alt: "Portero 1", number: "1", name: "Quentin Braat", url: "#" },
            { src: "https://i.postimg.cc/mDmMpjF5/Leo_Román_PNG.webp", alt: "Portero 2", number: "31", name: "Leo Román", url: "#" },
            { src: "https://i.postimg.cc/yxJJQHKD/Marco_PNG.webp", alt: "Portero 3", number: "-", name: "Marco", url: "#" },
            { src: "https://i.postimg.cc/tRh7g2TQ/Victor-Egboh-PNG.webp", alt: "Portero 4", number: "-", name: "Victor Egboh", url: "#" }
        ],
        defenders: [
            { src: "https://i.postimg.cc/LsWsgPtP/Mario_Hernández_PNG.webp", alt: "Defensa 1", number: "2", name: "Mario Hernández", url: "#" },
            { src: "https://i.postimg.cc/SQvGQ1YQ/Rodri_Tarín_PNG.webp", alt: "Defensa 2", number: "3", name: "Rodri Tarín", url: "#" },
            { src: "https://i.postimg.cc/V6ScxHbr/David-Costas-PNG.webp", alt: "Defensa 3", number: "4", name: "David Costas", url: "#" },
            { src: "https://i.postimg.cc/Wb0spKY0/Dani_Calvo_PNG.webp", alt: "Defensa 4", number: "12", name: "Dani Calvo", url: "#" },
            { src: "https://i.postimg.cc/YqQmcd1s/Luengo_PNG.webp", alt: "Defensa 5", number: "15", name: "Luengo", url: "#" },
            { src: "https://i.postimg.cc/yN4Q1Q53/Pomares_PNG.webp", alt: "Defensa 6", number: "21", name: "Pomares", url: "#" },
            { src: "https://i.postimg.cc/7LbTGw25/Abel-Bretones-PNG.webp", alt: "Defensa 7", number: "23", name: "Abel Bretones", url: "#" },
            { src: "https://i.postimg.cc/yYdPX4cz/Lucas-PNG.webp", alt: "Defensa 8", number: "24", name: "Lucas", url: "#" },
            { src: "https://i.postimg.cc/KjdChGhC/Charbel-PNG.webp", alt: "Defensa 9", number: "29", name: "Charbel", url: "#" },
            { src: "https://i.postimg.cc/PqJxqywh/Marco-Esteban-PNG.webp", alt: "Defensa 10", number: "30", name: "Marco Esteban", url: "#" },
            { src: "https://i.postimg.cc/fbJ7mx9j/Aimar-Collante-PNG.webp", alt: "Defensa 11", number: "33", name: "Aimar Collante", url: "#" },
            { src: "https://i.postimg.cc/mDSQG8f4/Jaime-V-zquez-PNG.webp", alt: "Defensa 12", number: "35", name: "Jaime Vázquez", url: "#" },
            { src: "https://i.postimg.cc/2SMp47tC/Osky-PNG.webp", alt: "Defensa 13", number: "-", name: "Osky", url: "#" }
        ],
        midfielders: [
            { src: "https://i.postimg.cc/ydshDwst/Luismi_(casco)_PNG.webp", alt: "Centrocampista 1", number: "5", name: "Luismi", url: "#" },
            { src: "https://i.postimg.cc/qMxTnKsF/Jimmy_PNG.webp", alt: "Centrocampista 2", number: "6", name: "Jimmy", url: "#" },
            { src: "https://i.postimg.cc/3rDLPHWC/Viti_PNG.webp", alt: "Centrocampista 3", number: "7", name: "Viti", url: "#" },
            { src: "https://i.postimg.cc/sxFrP9Hk/Javi_Mier_PNG.webp", alt: "Centrocampista 4", number: "8", name: "Javi Mier", url: "#" },
            { src: "https://i.postimg.cc/6qQmv7tk/Santi_Cazorla_PNG.webp", alt: "Centrocampista 5", number: "8", name: "Santi Cazorla", url: "#" },
            { src: "https://i.postimg.cc/zfq09L69/Camarasa_PNG.webp", alt: "Centrocampista 6", number: "10", name: "Camarasa", url: "#" },
            { src: "https://i.postimg.cc/j51VxQrW/Hugo_Rama_PNG.webp", alt: "Centrocampista 7", number: "11", name: "Hugo Rama", url: "#" },
            { src: "https://i.postimg.cc/R08GqPNz/Colombatto_PNG.webp", alt: "Centrocampista 8", number: "11", name: "Colombatto", url: "#" },
            { src: "https://i.postimg.cc/Tw1MvNBM/Homenchenko_PNG.webp", alt: "Centrocampista 9", number: "13", name: "Homenchenko", url: "#" },
            { src: "https://i.postimg.cc/HLCvtvT4/Seoane-PNG.webp", alt: "Centrocampista 10", number: "16", name: "Seoane", url: "#" },
            { src: "https://i.postimg.cc/GhV54hNf/Sebas_Moyano_PNG.webp", alt: "Centrocampista 11", number: "17", name: "Sebas Moyano", url: "#" },
            { src: "https://i.postimg.cc/SxkLgnn3/Paulino_PNG.webp", alt: "Centrocampista 12", number: "18", name: "Paulino", url: "#" },
            { src: "https://i.postimg.cc/4dQDtkt9/Romario_Ibarra_PNG.webp", alt: "Centrocampista 13", number: "22", name: "Romario Ibarra", url: "#" },
            { src: "https://i.postimg.cc/v82kfvkD/Borja_Sánchez_PNG.webp", alt: "Centrocampista 14", number: "25", name: "Borja Sánchez", url: "#" },
            { src: "https://i.postimg.cc/dV30nntX/lex-Cardero-PNG.webp", alt: "Centrocampista 15", number: "32", name: "Álex Cardero", url: "#" },
            { src: "https://i.postimg.cc/d3P8M3Vb/Yayo-PNG.webp", alt: "Centrocampista 16", number: "34", name: "Yayo", url: "#" },
            { src: "https://i.postimg.cc/c44YyRL7/Diego-Men-ndez-Dieguito-PNG.webp", alt: "Centrocampista 17", number: "36", name: "Dieguito", url: "#" }
        ],
        forwards: [
            { src: "https://i.postimg.cc/3rfTZGWf/Borja-Bast-n-PNG.webp", alt: "Delantero 1", number: "9", name: "Borja Bastón", url: "#" },
            { src: "https://i.postimg.cc/KcPTkZzY/Alem-o-PNG.webp", alt: "Delantero 2", number: "14", name: "Alemão", url: "#" },
            { src: "https://i.postimg.cc/6pm4JqHM/lex-Mill-n-PNG.webp", alt: "Delantero 3", number: "19", name: "Álex Millán", url: "#" },
            { src: "https://i.postimg.cc/R0tYw3y8/Masca-PNG.webp", alt: "Delantero 4", number: "20", name: "Masca", url: "#" },
            { src: "https://i.postimg.cc/R02PFM0R/Dubasin-PNG.webp", alt: "Delantero 5", number: "22", name: "Dubasin", url: "#" },
            { src: "https://i.postimg.cc/TYQCbjwh/Enol-PNG.webp", alt: "Delantero 6", number: "27", name: "Enol", url: "#" },
            { src: "https://i.postimg.cc/0Q0PdXFL/Santi-Migu-lez-PNG.webp", alt: "Delantero 7", number: "28", name: "Santi Miguélez", url: "#" }
        ],
        coaches: [
            { src: "https://i.postimg.cc/fLnY0kQ8/Javi-Calleja-entrenador-PNG.webp", alt: "Entrenador 1", number: "-", name: "Javi Calleja", url: "#" },
            { src: "https://i.postimg.cc/9FK0fKhp/Paunović_(3)_(entrenador).webp", alt: "Entrenador 2", number: "-", name: "Paunović", url: "#" }
        ]
    }
};

const currentIndices = {
    goalkeepers: 0,
    defenders: 0,
    midfielders: 0,
    forwards: 0,
    coaches: 0
};

let currentSeason = '';

function updatePlayerGallery(position) {
    const gallery = document.querySelector(`.players-gallery[data-position="${position}"]`);
    if (!gallery) {
        console.error(`No se encontró .players-gallery para ${position}`);
        return;
    }

    const players = allPlayersData[currentSeason][position];
    const currentIndex = currentIndices[position];

    let mainPlayerHTML = `
        <div class="player-card">
            <img class="main-player" data-position="${position}" src="${players[currentIndex].src}" alt="${players[currentIndex].alt}">
            <div class="player-info">
                <div class="player-details">
                    <span class="player-number">${players[currentIndex].number}</span>
                    <span class="player-name">${players[currentIndex].name}</span>
                </div>
                <button class="player-button" onclick="window.location.href='${players[currentIndex].url}'">Ver Ficha</button>
            </div>
        </div>
    `;

    let nextPlayerHTML = '';
    if (currentIndex < players.length - 1) {
        nextPlayerHTML = `
            <div class="player-card">
                <img class="next-player faded" data-position="${position}" src="${players[currentIndex + 1].src}" alt="${players[currentIndex + 1].alt}">
                <div class="player-info">
                    <div class="player-details">
                        <span class="player-number">${players[currentIndex + 1].number}</span>
                        <span class="player-name">${players[currentIndex + 1].name}</span>
                    </div>
                    <button class="player-button" onclick="window.location.href='${players[currentIndex + 1].url}'">Ver Ficha</button>
                </div>
            </div>
        `;
    }

    gallery.innerHTML = mainPlayerHTML + nextPlayerHTML;

    const counter = document.querySelector(`.players-counter[data-position="${position}"]`);
    if (counter) {
        counter.textContent = `${currentIndex + 1}/${players.length}`;
    }

    const prevButton = document.querySelector(`.prev-button[data-position="${position}"]`);
    const nextButton = document.querySelector(`.next-button[data-position="${position}"]`);
    if (prevButton) prevButton.disabled = currentIndex === 0;
    if (nextButton) nextButton.disabled = currentIndex === players.length - 1;
}

function initGalleries() {
    // Obtener la temporada del atributo data-season del body
    const body = document.body;
    currentSeason = body.getAttribute('data-season');
    
    if (!currentSeason || !allPlayersData[currentSeason]) {
        console.error('No se ha especificado una temporada válida en el body de la página.');
        return;
    }

    Object.keys(allPlayersData[currentSeason]).forEach(position => {
        const gallery = document.querySelector(`.players-gallery[data-position="${position}"]`);
        if (!gallery) {
            console.error(`No se encontró .players-gallery para ${position}`);
            return;
        }
        gallery.setAttribute('data-position', position);
        updatePlayerGallery(position);
        
        const prevButton = document.querySelector(`.prev-button[data-position="${position}"]`);
        const nextButton = document.querySelector(`.next-button[data-position="${position}"]`);
        
        if (prevButton) {
            prevButton.addEventListener("click", () => {
                if (currentIndices[position] > 0) {
                    currentIndices[position]--;
                    updatePlayerGallery(position);
                }
            });
        }
        if (nextButton) {
            nextButton.addEventListener("click", () => {
                if (currentIndices[position] < allPlayersData[currentSeason][position].length - 1) {
                    currentIndices[position]++;
                    updatePlayerGallery(position);
                }
            });
        }
    });
}

document.addEventListener("DOMContentLoaded", initGalleries);
