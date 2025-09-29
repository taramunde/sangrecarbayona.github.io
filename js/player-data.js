const playersData = {
    "aaron": {
        name: "Aarón Escandell Banacloche",
        footballName: "Aarón",
        position: "Portero",
        role: "portero",
        number: 13,
        image: "https://i.postimg.cc/hvxDQPg1/Aar-n-PNG-3.webp",
        career: [  // NUEVO CAMPO
            { season: "2025/26", team: "Real Oviedo", category: "Primera División" },
            { season: "2024/25", team: "Real Oviedo", category: "Segunda División - Segunda Play Offs Ascenso" },
            { season: "2023/24", team: "U.D. Las Palmas", category: "Primera División - Copa del Rey" },
            { season: "2022/23", team: "F.C. Cartagena", category: "Segunda División - Copa del Rey" },
            { season: "2021/22", team: "Granada C.F.", category: "Primera División - Copa del Rey" },
            { season: "2020/21", team: "Granada C.F.", category: "Primera División - Europa League - Copa del Rey" },
            { season: "2019/20", team: "Granada C.F.", category: "Primera División - Copa del Rey" },
            { season: "2018/19", team: "Granada C.F.", category: "Segunda División - Copa del Rey" },
            { season: "2017/18", team: "Granada C.F.", category: "Segunda División" },
            { season: "2017/18", team: "Recreativo Granada", category: "Segunda División B" },
            { season: "2016/17", team: "Málaga C.F.", category: "Primera División - Copa del Rey" },
            { season: "2016/17", team: "At. Malagueño", category: "Tercera División - Tercera Play Offs Ascenso" },
            { season: "2015/16", team: "Málaga C.F.", category: "Primera División - Copa del Rey" },
            { season: "2015/16", team: "At. Malagueño", category: "Tercera División - Tercera Play Offs Ascenso" },
            { season: "2014/15", team: "At. Malagueño", category: "Tercera División - Tercera Play Offs Ascenso" },
            { season: "2013/14", team: "Málaga C.F.", category: "Primera División" },
            { season: "2013/14", team: "At. Malagueño", category: "Tercera División - Tercera Play Offs Ascenso" }
        ],
        stats: {
            "2025/26": {
                liga: { partidos: 6, goles_encajados: 11, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_encajados: 3, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2024/25": {
                liga: { partidos: 45, goles_encajados: 44, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_encajados: 2, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },
    
    "moldovan": {
        name: "Horațiu Alexandru Moldovan",
        footballName: "Moldovan",
        position: "Portero",
        role: "portero",
        number: 1,
        image: "https://i.postimg.cc/sgPM0mk4/Moldovan-PNG-2.webp", 
        career: [  // NUEVO CAMPO
            { season: "2025/26 - Actualidad", team: "Real Oviedo", category: "Segunda División" },
            { season: "2024/25", team: "Atlético de Madrid", category: "Primera División" },
            { season: "2023/24", team: "Atlético de Madrid", category: "Primera División" },
            { season: "2022/23", team: "Rapid Bucarest", category: "Liga I (Rumanía)" }
        ],
        stats: {
            "2025/26": {
                liga: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_encajados: 3, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },
    
    "narváez": {
        name: "Miguel de Jesús Narváez López",
        footballName: "Narváez",
        position: "Portero",
        role: "portero",
        number: 26,
        image: "https://i.postimg.cc/XJqXqbps/Narv-ez-PNG.webp", 
        stats: {
            "2025/26": {
                liga: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2024/25": {
                liga: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "bailly": {
        name: "Eric Bertrand Bailly",
        footballName: "Bailly",
        position: "Defensa",
        role: "jugador",
        number: 2,
        image: "https://i.postimg.cc/qRHtqnX7/Bailly-PNG-2.webp", 
        stats: {
            "2025/26": {
                liga: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
            
        }
    },

     "rahim": {
        name: "Rahim Alhassane",
        footballName: "Rahim",
        position: "Defensa",
        role: "jugador",
        number: 3,
        image: "https://i.postimg.cc/15bMB7y7/Rahim-PNG.webp", 
        stats: {
            "2025/26": {
                liga: { partidos: 6, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2024/25": {
                liga: { partidos: 29, goles_marcados: 0, tarjetas_amarillas: 5, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    }
    

    
    
};

