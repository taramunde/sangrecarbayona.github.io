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
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Promoción de Ascenso" },
            { season: "2023/24", team: "U.D. Las Palmas", category: "1ª Div. - Copa del Rey" },
            { season: "2022/23", team: "F.C. Cartagena", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "Granada C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Granada C.F.", category: "1ª Div. - Europa League - Copa del Rey - Clasif. Europa League" },
            { season: "2019/20", team: "Granada C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2018/19", team: "Granada C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2017/18", team: "Recreativo Granada", category: "2ª Div. B Grupo IV" },
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
                liga: { partidos: 15, goles_encajados: 22, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
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
            { season: "2025/26", team: "Real Oviedo", category: "1ª División - Copa del Rey" },
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
            { season: "2023", team: "Rumanía Sub-21", category: "Clasificación Europeo Sub-21" }
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
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div. - Copa del Rey" },
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
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
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
        height: "1,84 m",
        birthDate: "12/04/1994",
        deathDate: null // Poner null si el jugador está vivo
    }, 
        career: [  
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div. - Copa del Rey" },
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
            { season: "2023", team: "Níger Sub-23", category: "Copa África Sub-23" },
            { season: "2023", team: "Níger", category: "Clasificación Mundial África - Clasificación Copa África - Amistosos" },
            { season: "2022", team: "Níger", category: "Clasificación Copa África - Amistosos" }
         ], 
        stats: {
            "2025/26": {
                liga: { partidos: 14, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2024/25": {
                liga: { partidos: 29, goles_marcados: 0, tarjetas_amarillas: 5, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 8, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "davidcostas": {
        name: "David Costas Cordal",
        footballName: "David Costas",
        position: "Defensa",
        role: "jugador",
        number: 4,
        image: "https://i.postimg.cc/V6ScxHbr/David-Costas-PNG.webp", 
    personalData: {
        fullName: "David Costas Cordal",
        nickname: "David Costas",
        birthPlace: "Chapela, Pontevedra",
        country: "España",
        nationality: "Española",
        height: "1,84 m",
        birthDate: "26/03/1995",
        deathDate: null // Poner null si el jugador está vivo
    }, 
        career: [  
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - 2ª Play Offs Ascenso" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Play Offs Ascenso" },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Celta de Vigo", category: "1ª Div." },
            { season: "2019/20", team: "U.D. Almería", category: "2ª Div. - 2ª Play Offs Ascenso" },
            { season: "2019/20", team: "Celta de Vigo", category: "1ª Div. - Copa del Rey" },
            { season: "2018/19", team: "Celta de Vigo", category: "1ª Div. - Copa del Rey" },
            { season: "2017/18", team: "Barça Atlètic", category: "2ª Div." },
            { season: "2017/18", team: "F.C. Barcelona", category: "1ª Div. - Copa del Rey" },
            { season: "2016/17", team: "Real Oviedo", category: "2ª Div." },
            { season: "2016/17", team: "Celta de Vigo", category: "1ª Div. - Europa League - Copa del Rey" },
            { season: "2015/16", team: "R.C.D. Mallorca", category: "2ª Div. - Copa del Rey" },
            { season: "2014/15", team: "Celta de Vigo", category: "1ª Div. - Copa del Rey" },
            { season: "2013/14", team: "Celta Fortuna", category: "2ª Div. B" },
            { season: "2013/14", team: "Celta de Vigo", category: "1ª Div. - Copa del Rey" }
        ],
        nationalTeam: [
            { season: "2014", team: "España Sub-21", category: "Amistosos" },
            { season: "2014", team: "España Sub-19", category: "Clasificación Europeo Sub-19 - Amistosos" },
            { season: "2013", team: "España Sub-19", category: "Amistosos" }
        ], 
        stats: {
            "2025/26": {
                liga: { partidos: 10, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 6, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2024/25": {
                liga: { partidos: 35, goles_marcados: 1, tarjetas_amarillas: 5, tarjetas_rojas: 1 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 6, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2023/24": {
                liga: { partidos: 19, goles_marcados: 0, tarjetas_amarillas: 5, tarjetas_rojas: 1 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 }
            },
            "2022/23": {
                liga: { partidos: 22, goles_marcados: 1, tarjetas_amarillas: 5, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2021/22": {
                liga: { partidos: 40, goles_marcados: 1, tarjetas_amarillas: 6, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2016/17": {
                liga: { partidos: 19, goles_marcados: 3, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },
    
    "danicalvo": {
        name: "Daniel Pedro Calvo San Román",
        footballName: "Dani Calvo",
        position: "Defensa",
        role: "jugador",
        number: 12,
        image: "https://i.postimg.cc/Wb0spKY0/Dani-Calvo-PNG.webp", 
    personalData: {
        fullName: "Daniel Pedro Calvo San Román",
        nickname: "Dani Calvo",
        birthPlace: "Huesca, Huesca",
        country: "España",
        nationality: "Española",
        height: "1,93 m",
        birthDate: "01/04/1994",
        deathDate: null // Poner null si el jugador está vivo
    }, 
        career: [  
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Play Offs Ascenso" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Play Offs Ascenso" },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Elche C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Elche C.F.", category: "2ª Div. - Copa del Rey - 2ª Play Offs Ascenso" },
            { season: "2018/19", team: "Elche C.F.", category: "2ª Div." },
            { season: "2018/19", team: "C.D. Numancia", category: "2ª Div." },
            { season: "2017/18", team: "C.D. Numancia", category: "2ª Div. - Copa del Rey - 2ª Play Offs Ascenso" },
            { season: "2016/17", team: "C.D. Numancia", category: "2ª Div." },
            { season: "2015/16", team: "U.D. Levante", category: "1ª Div." },
            { season: "2015/16", team: "At. Levante", category: "2ª Div. B" },
            { season: "2014/15", team: "C.D. Numancia B", category: "3ª Div." },
            { season: "2014/15", team: "C.D. Numancia", category: "2ª Div. - Copa del Rey" },
            { season: "2013/14", team: "C.D. Numancia", category: "2ª Div." },
            { season: "2013/14", team: "C.D. Numancia B", category: "3ª Div." }
        ],
        
        stats: {
            "2025/26": {
                liga: { partidos: 8, goles_marcados: 0, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2024/25": {
                liga: { partidos: 45, goles_marcados: 2, tarjetas_amarillas: 9, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2023/24": {
                liga: { partidos: 44, goles_marcados: 2, tarjetas_amarillas: 9, tarjetas_rojas: 1 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2022/23": {
                liga: { partidos: 36, goles_marcados: 2, tarjetas_amarillas: 6, tarjetas_rojas: 0 },
                copa: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 6, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2021/22": {
                liga: { partidos: 41, goles_marcados: 1, tarjetas_amarillas: 8, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "luengo": {
        name: "Oier Luengo Redondo",
        footballName: "Luengo",
        position: "Defensa",
        role: "jugador",
        number: 15,
        image: "https://i.postimg.cc/YqQmcd1s/Luengo-PNG.webp", 
    personalData: {
        fullName: "Oier Luengo Redondo",
        nickname: "Luengo",
        birthPlace: "Amorebieta, Vizcaya",
        country: "España",
        nationality: "Española",
        height: "1,85 m",
        birthDate: "11/11/1997",
        deathDate: null // Poner null si el jugador está vivo
    }, 
        career: [  
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Play Offs Ascenso" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Play Offs Ascenso" },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "S.D. Amorebieta", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Bilbao Athletic", category: "2ª Div. B - 2ª B Play Offs Ascenso - 2ª B Play Offs Ascenso - 2ª B Play Offs 2ª Fase Ascenso" },
            { season: "2019/20", team: "Bilbao Athletic", category: "2ª Div. B - 2ª B Play Offs Ascenso" },
            { season: "2018/19", team: "S.D. Amorebieta", category: "2ª Div. B" },
            { season: "2018/19", team: "Bilbao Athletic", category: "2ª Div. B" },
            { season: "2017/18", team: "S.D. Amorebieta", category: "2ª Div. B" },
            { season: "2016/17", team: "S.D. Amorebieta", category: "2ª Div. B - Copa del Rey" }
            
        ],
        
        stats: {
            "2025/26": {
                liga: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2024/25": {
                liga: { partidos: 32, goles_marcados: 2, tarjetas_amarillas: 9, tarjetas_rojas: 1 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2023/24": {
                liga: { partidos: 40, goles_marcados: 2, tarjetas_amarillas: 6, tarjetas_rojas: 1 },
                copa: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 6, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2022/23": {
                liga: { partidos: 11, goles_marcados: 0, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 3, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 6, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "davidcarmo": {
        name: "David Mota Veiga Teixeira do Carmo",
        footballName: "David Carmo",
        position: "Defensa",
        role: "jugador",
        number: 16,
        image: "https://i.postimg.cc/ZqxmPdzn/Carmo-PNG-(2).webp", 
    personalData: {
        fullName: "David Mota Veiga Teixeira do Carmo",
        nickname: "David Carmo",
        birthPlace: "Aveiro, Aveiro",
        country: "Portugal",
        nationality: "Angoleña, Portuguesa",
        height: "1,96 m",
        birthDate: "19/07/1999",
        deathDate: null // Poner null si el jugador está vivo
    }, 
        career: [  
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div." },
            { season: "2024/25", team: "Olympiacos", category: "Super League Griega - Europa League - Copa Griega" },
            { season: "2024/25", team: "Porto", category: "Liga Portugal Betclic - Supercopa de Portugal" },
            { season: "2023/24", team: "Olympiacos", category: "Super League Griega - Conference League" },
            { season: "2023/24", team: "Porto II", category: "Segunda Liga" },
            { season: "2023/24", team: "Porto", category: "Liga Portugal Betclic - Champions League - Taça de Portugal - Copa de la Liga Portugal" },
            { season: "2022/23", team: "Porto", category: "Liga Portugal Betclic - Champions League - Taça de Portugal - Copa de la Liga Portugal" },
            { season: "2022/23", team: "Porto II", category: "Segunda Liga" },
            { season: "2021/22", team: "Sporting de Braga", category: "Liga de Portugal Betclic - Europa League" },
            { season: "2021/22", team: "Sporting de Braga II", category: "Liga 3" },
            { season: "2021/22", team: "Sporting de Braga Sub-23", category: "Liga Revelação" },
            { season: "2020/21", team: "Sporting de Braga", category: "Liga Portugal Betclic - Europa League - Taça de Portugal - Copa de la Liga Portugal" },
            { season: "2019/20", team: "Sporting de Braga", category: "Liga Portugal Betclic - Europa League - Copa de la Liga Portugal" },
            { season: "2019/20", team: "Sporting de Braga Sub-23", category: "Liga Revelação" },
            { season: "2019/20", team: "Sporting de Braga II", category: "Campeonato de Portugal" },
            { season: "2018/19", team: "Sporting de Braga", category: "Liga Portugal Betclic" },
            { season: "2018/19", team: "Sporting de Braga Sub-23", category: "Liga Revelação" },
            { season: "2018/19", team: "Sporting de Braga II", category: "Segunda Liga" }
            
        ],
        nationalTeam: [
            { season: "2025", team: "Angola", category: "Clasificación Mundial África - Amistosos" },
            { season: "2024", team: "Angola", category: "Clasificación Mundial África - Amistosos - Clasificación Copa África" },
            { season: "2022", team: "Portugal", category: "Liga de las Naciones de la UEFA" },
            { season: "2019", team: "Portugal Sub-20", category: "Liga Élite Sub-20" },
            { season: "2018", team: "Portugal Sub-20", category: "Liga Élite Sub-20" },
            { season: "2018", team: "Portugal Sub-21", category: "Amistosos" },
            { season: "2018", team: "Portugal Sub-19", category: "Amistosos" }
        ], 
        
        stats: {
            "2025/26": {
                liga: { partidos: 11, goles_marcados: 1, tarjetas_amarillas: 4, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    }

    
    
};

