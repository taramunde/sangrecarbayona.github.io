const playersData = {
    // PORTEROS
    "aaron": {
        name: "Aarón Escandell Banacloche",
        footballName: "Aarón",
        position: "Portero",
        role: "portero",
        number: 13,
        image: "https://i.postimg.cc/hvxDQPg1/Aar-n-PNG-3.webp",
    personalData: {
        fullName: "Aarón Escandell Banacloche",
        nickname: "Aarón",
        birthPlace: "Carcagente, Valencia",
        country: "España",
        nationality: "Española",
        height: "1,84 m",
        birthDate: "27/09/1995",
        deathDate: null // Poner null si el jugador está vivo
    },
        career: [  
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div." },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - 2ª Play Offs Ascenso" },
            { season: "2023/24", team: "U.D. Las Palmas", category: "1ª Div. - Copa del Rey" },
            { season: "2022/23", team: "F.C. Cartagena", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "Granada C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Granada C.F.", category: "1ª Div. - Europa League - Copa del Rey" },
            { season: "2019/20", team: "Granada C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2018/19", team: "Granada C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2017/18", team: "Granada C.F.", category: "2ª Div." },
            { season: "2017/18", team: "Recreativo Granada", category: "2ª Div. B" },
            { season: "2016/17", team: "Málaga C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2016/17", team: "At. Malagueño", category: "3ª Div. - 3ª Play Offs Ascenso" },
            { season: "2015/16", team: "Málaga C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2015/16", team: "At. Malagueño", category: "3ª Div. - 3ª Play Offs Ascenso" },
            { season: "2014/15", team: "At. Malagueño", category: "3ª Div. - 3ª Play Offs Ascenso" },
            { season: "2013/14", team: "Málaga C.F.", category: "1ª Div." },
            { season: "2013/14", team: "At. Malagueño", category: "3ª Div. - 3ª Play Offs Ascenso" }
        ],
        stats: {
            "2025/26": {
                liga: { partidos: 14, goles_encajados: 22, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_encajados: 3, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2024/25": {
                liga: { partidos: 45, goles_encajados: 44, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 6, goles_encajados: 7, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
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
    personalData: {
        fullName: "Horațiu Alexandru Moldovan",
        nickname: "Moldovan",
        birthPlace: "Cluj-Napoca, Transilvania",
        country: "Rumanía",
        nationality: "Rumana",
        height: "1,86 m",
        birthDate: "20/01/1998",
        deathDate: null // Poner null si el jugador está vivo
    },
        career: [  
            { season: "2025/26", team: "Real Oviedo", category: "1ª División" },
            { season: "2024/25", team: "U.S. Sassuolo", category: "Serie B - Coppa Italia" },
            { season: "2024/25", team: "Atlético de Madrid", category: "1ª División" },
            { season: "2023/24", team: "Atlético de Madrid", category: "1ª División - Champions League - Copa del Rey" },
            { season: "2023/24", team: "F.C. Rapid Bucuresti", category: "Liga Rumana - Copa Rumanía" },
            { season: "2022/23", team: "F.C. Rapid Bucuresti", category: "Liga Rumana - Copa Rumanía" },
            { season: "2021/22", team: "F.C. Rapid Bucuresti", category: "Liga Rumana - Copa Rumanía" },
            { season: "2020/21", team: "F.C. Rapid Bucuresti", category: "2ª Rumanía" },
            { season: "2020/21", team: "F.C. UTA Arad", category: "Liga Rumana" },
            { season: "2019/20", team: "F.C. Ripensia Timisoara ", category: "2ª Rumanía" },
            { season: "2019/20", team: "A.C.S. Sepsi", category: "Liga Rumana - Copa Rumanía" },
            { season: "2018/19", team: "F.C. Ripensia Timisoara", category: "2ª Rumanía" },
            { season: "2018/19", team: "A.C.S. Energeticianul", category: "2ª Rumanía - Copa Rumanía" },
            { season: "2017/18", team: "F.C. Hermannstadt", category: "2ª Rumanía - Copa Rumanía" }
            
        ],
        nationalTeam: [
            { season: "2025", team: "Rumanía", category: "Clasificación Mundial Europa - Amistosos" },
            { season: "2024", team: "Rumanía", category: "Eurocopa - Liga de las Naciones de la UEFA - Amistosos" },
            { season: "2023", team: "Rumanía", category: "Clasificación Eurocopa" },
            { season: "2022", team: "Rumanía", category: "Liga de las Naciones de la UEFA - Amistosos" },
            { season: "2021", team: "Rumanía", category: "Clasificación Mundial Europa" },
            { season: "2023", team: "Rumanía Sub-21", category: "Clasificación Europeo U21" }
        ],    
        stats: {
            "2025/26": {
                liga: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_encajados: 4, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_encajados: 3, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },
    
    "narvaez": {
        name: "Miguel de Jesús Narváez López",
        footballName: "Narváez",
        position: "Portero",
        role: "portero",
        number: 26,
        image: "https://i.postimg.cc/XJqXqbps/Narv-ez-PNG.webp", 
    personalData: {
        fullName: "Miguel de Jesús Narváez López",
        nickname: "Narváez",
        birthPlace: "Badajoz, Badajoz",
        country: "España",
        nationality: "Española",
        height: "1,88 m",
        birthDate: "29/04/2002",
        deathDate: null // Poner null si el jugador está vivo
    },
        career: [  
            { season: "2025/26", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div." },
            { season: "2024/25", team: "Real Oviedo Vetusta", category: "3ª Federación" },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2023/24", team: "C.D. Badajoz", category: "2ª Federación" },
            { season: "2022/23", team: "C.D. Badajoz", category: "1ª Federación" },
            { season: "2021/22", team: "C.D. Badajoz", category: "1ª Federación" },
            { season: "2021/22", team: "C.D. Badajoz B", category: "Copa Federación Fase Autonómica - 3ª Federación" },
            { season: "2020/21", team: "C.D. Badajoz U19", category: "División de Honor" },
            { season: "2020/21", team: "C.D. Badajoz ", category: "2ª Div. B - 2ª Div. B Play Offs Ascenso - 2ª Div. B 2ª Fase Ascenso a 2ª" },
            { season: "2020/21", team: "C.D. Badajoz B", category: "1ª Reg. Extremadura" },
            { season: "2019/20", team: "C.D. Badajoz B", category: "1ª Reg. Extremadura" }
        ],
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
    // DEFENSAS
    "bailly": {
        name: "Eric Bertrand Bailly",
        footballName: "Bailly",
        position: "Defensa",
        role: "jugador",
        number: 2,
        image: "https://i.postimg.cc/qRHtqnX7/Bailly-PNG-2.webp", 
    personalData: {
        fullName: "Eric Bertrand Bailly",
        nickname: "Bailly",
        birthPlace: "Bingerville, Lagunes",
        country: "Costa de Marfil",
        nationality: "Costamarfileña",
        height: "1,87 m",
        birthDate: "12/04/1994",
        deathDate: null // Poner null si el jugador está vivo
    },
        career: [  
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div." },
            { season: "2024/25", team: "Villarreal C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2023/24", team: "Villarreal C.F.", category: "1ª Div. - Europa League - Copa del Rey" },
            { season: "2023/24", team: "Beşiktaş J.K.", category: "Liga Turca - Conference League" },
            { season: "2022/23", team: "Olympique Marseille", category: "Ligue 1 - Champions League - Copa de Francia" },
            { season: "2021/22", team: "Manchester United", category: "Premier League - Champions League - EFL Cup" },
            { season: "2020/21", team: "Manchester United", category: "Premier League - Champions League - Europa League - FA Cup - EFL Cup" },
            { season: "2019/20", team: "Manchester United", category: "Premier League - Europa League - FA Cup - EFL Cup" },
            { season: "2019/20", team: "Manchester United U23", category: "Premier League 2ª Div. Two" },
            { season: "2018/19", team: "Manchester United ", category: "Premier League - Champions League - FA Cup - EFL Cup" },
            { season: "2017/18", team: "Manchester United", category: "Premier League - Champions League - FA Cup" },
            { season: "2016/17", team: "Manchester United U23", category: "Premier League 2ª Div. One" },
            { season: "2016/17", team: "Manchester United", category: "Premier League - Europa League - FA Cup - Community Shield - EFL Cup" },
            { season: "2015/16", team: "Villarreal C.F.", category: "1ª Div. - Europa League - Copa del Rey" },
            { season: "2014/15", team: "Villarreal C.F.", category: "1ª Div. - Europa League - Copa del Rey" },
            { season: "2014/15", team: "R.C.D. Espanyol", category: "1ª Div. - Copa del Rey" },
            { season: "2014/15", team: "R.C.D. Espanyol B", category: "2ª Div. B" },
            { season: "2013/14", team: "R.C.D. Espanyol B", category: "2ª Div. B" },
            { season: "2012/13", team: "R.C.D. Espanyol B", category: "2ª Div. B" }
        ],
        nationalTeam: [
            { season: "2024", team: "Costa de Marfil", category: "Clasificación Copa África" },
            { season: "2023", team: "Costa de Marfil", category: "Clasificación Copa África" },
            { season: "2022", team: "Costa de Marfil", category: "Copa África - Amistosos" },
            { season: "2021", team: "Costa de Marfil Sub-23", category: "Juegos Olímpicos" },
            { season: "2021", team: "Costa de Marfil", category: "Clasificación Mundial África - Clasificación Copa África - Amistosos" },
            { season: "2020", team: "Costa de Marfil", category: "Amistosos" },
            { season: "2019", team: "Costa de Marfil", category: "Clasificación Copa África" },
            { season: "2018", team: "Costa de Marfil", category: "Clasificación Copa África - Amistosos" },
            { season: "2017", team: "Costa de Marfil", category: "Clasificación Mundial África - Copa África - Clasificación Copa África - Amistosos" },
            { season: "2016", team: "Costa de Marfil", category: "Clasificación Mundial África - Clasificación Copa África - Amistosos" },
            { season: "2015", team: "Costa de Marfil", category: "Clasificación Mundial África - Copa África - Clasificación Copa África - Amistosos" }
        ],
        stats: {
            "2025/26": {
                liga: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
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
    personalData: {
        fullName: "Rahim Alhassane",
        nickname: "Rahim",
        birthPlace: "Abuya, Territorio de la Capital Federal",
        country: "Costa de Marfil",
        nationality: "Costamarfileña",
        height: "1,87 m",
        birthDate: "12/04/1994",
        deathDate: null // Poner null si el jugador está vivo
    }, 
        career: [  
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div." },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - 2ª Play Offs Ascenso" },
            { season: "2023/24", team: "Real Club Recreativo de Huelva", category: "1ª Federación - Copa del Rey" },
            { season: "2022/23", team: "Rayo Majadahonda", category: "1ª Federación - Copa del Rey" },
            { season: "2021/22", team: "Gimnástica Segoviana", category: "2ª Federación - Copa del Rey" },
            { season: "2020/21", team: "Rayo Majadahonda U19", category: "División de Honor" },
            { season: "2020/21", team: "Rayo Majadahonda", category: "2ª Div. B - 2ª Fase 1ª Div. RFEF" },
            { season: "2020/21", team: "México F.C.", category: "3ª Div." }
        ],
        nationalTeam: [
            { season: "2025", team: "Níger", category: "Clasificación Mundial África - Amistosos" },
            { season: "2024", team: "Níger", category: "Clasificación Copa África - Amistosos" },
            { season: "2023", team: "Níger Sub-23", category: "Copa África U23" },
            { season: "2023", team: "Níger", category: "Clasificación Mundial África - Clasificación Copa África - Amistosos" },
            { season: "2022", team: "Níger", category: "Clasificación Copa África - Amistosos" }
         ], 
        stats: {
            "2025/26": {
                liga: { partidos: 8, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
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

