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
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - 2ª Div. Prom. de Ascenso" },
            { season: "2023/24", team: "U.D. Las Palmas", category: "1ª Div. - Copa del Rey" },
            { season: "2022/23", team: "F.C. Cartagena", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "Granada C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Granada C.F.", category: "1ª Div. - Europa League - Copa del Rey - Clasif. Europa League" },
            { season: "2019/20", team: "Granada C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2018/19", team: "Granada C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2017/18", team: "Recreativo Granada", category: "2ª Div. B" },
            { season: "2016/17", team: "At. Malagueño", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2016/17", team: "Málaga C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2015/16", team: "Málaga C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2015/16", team: "At. Malagueño", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2014/15", team: "At. Malagueño", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2013/14", team: "Málaga C.F.", category: "1ª Div." },
            { season: "2013/14", team: "At. Malagueño", category: "3ª Div. - 3ª Div. Prom. de Ascenso" }
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
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div. - Copa del Rey" },
            { season: "2024/25", team: "U.S. Sassuolo", category: "Serie B - Coppa Italia" },
            { season: "2024/25", team: "Atlético de Madrid", category: "1ª Div." },
            { season: "2023/24", team: "Atlético de Madrid", category: "1ª Div. - Champ. League - Copa del Rey" },
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
            { season: "2025", team: "Rumanía", category: "Clasif. Mundial Europa - Amistosos" },
            { season: "2024", team: "Rumanía", category: "Eurocopa - Liga de las Naciones de la UEFA - Amistosos" },
            { season: "2023", team: "Rumanía", category: "Clasif. Eurocopa" },
            { season: "2022", team: "Rumanía", category: "Liga de las Naciones de la UEFA - Amistosos" },
            { season: "2021", team: "Rumanía", category: "Clasif. Mundial Europa" },
            { season: "2023", team: "Rumanía Sub-21", category: "Clasif. Europeo Sub-21" }
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
            { season: "2020/21", team: "C.D. Badajoz Sub-19", category: "División de Honor" },
            { season: "2020/21", team: "C.D. Badajoz ", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso - 2ª Div. B 2ª Fase Prom. de Ascenso" },
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
            { season: "2022/23", team: "Olympique Marseille", category: "Ligue 1 - Champ. League - Copa de Francia" },
            { season: "2021/22", team: "Manchester United", category: "Premier League - Champ. League - EFL Cup" },
            { season: "2020/21", team: "Manchester United", category: "Premier League - Champ. League - Europa League - FA Cup - EFL Cup" },
            { season: "2019/20", team: "Manchester United", category: "Premier League - Europa League - FA Cup - EFL Cup" },
            { season: "2019/20", team: "Manchester United Sub-23", category: "Premier League 2ª Div. Two" },
            { season: "2018/19", team: "Manchester United", category: "Premier League - Champ. League - FA Cup - EFL Cup" },
            { season: "2017/18", team: "Manchester United", category: "Premier League - Champ. League - FA Cup" },
            { season: "2016/17", team: "Manchester United Sub-23", category: "Premier League 2ª Div. One" },
            { season: "2016/17", team: "Manchester United", category: "Premier League - Europa League - FA Cup - Community Shield - EFL Cup" },
            { season: "2015/16", team: "Villarreal C.F.", category: "1ª Div. - Europa League - Copa del Rey" },
            { season: "2014/15", team: "Villarreal C.F.", category: "1ª Div. - Europa League - Copa del Rey" },
            { season: "2014/15", team: "R.C.D. Espanyol", category: "1ª Div. - Copa del Rey" },
            { season: "2014/15", team: "R.C.D. Espanyol B", category: "2ª Div. B" },
            { season: "2013/14", team: "R.C.D. Espanyol B", category: "2ª Div. B" },
            { season: "2012/13", team: "R.C.D. Espanyol B", category: "2ª Div. B" }
        ],
        nationalTeam: [
            { season: "2024", team: "Costa de Marfil", category: "Clasif. Copa África" },
            { season: "2023", team: "Costa de Marfil", category: "Clasif. Copa África" },
            { season: "2022", team: "Costa de Marfil", category: "Copa África - Amistosos" },
            { season: "2021", team: "Costa de Marfil Sub-23", category: "Juegos Olímpicos" },
            { season: "2021", team: "Costa de Marfil", category: "Clasif. Mundial África - Clasif. Copa África - Amistosos" },
            { season: "2020", team: "Costa de Marfil", category: "Amistosos" },
            { season: "2019", team: "Costa de Marfil", category: "Clasif. Copa África" },
            { season: "2018", team: "Costa de Marfil", category: "Clasif. Copa África - Amistosos" },
            { season: "2017", team: "Costa de Marfil", category: "Clasif. Mundial África - Copa África - Clasif. Copa África - Amistosos" },
            { season: "2016", team: "Costa de Marfil", category: "Clasif. Mundial África - Clasif. Copa África - Amistosos" },
            { season: "2015", team: "Costa de Marfil", category: "Clasif. Mundial África - Copa África - Clasif. Copa África - Amistosos" }
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

    "alvarolemos": {
        name: "Álvaro Lemos Collazo",
        footballName: "Álvaro Lemos",
        position: "Defensa",
        role: "jugador",
        number: 2,
        image: "https://i.postimg.cc/XYDdjpzZ/Alvaro-Lemos-PNG-3.webp", 
    personalData: {
        fullName: "Álvaro Lemos Collazo",
        nickname: "Álvaro Lemos",
        birthPlace: "Santiago de Compostela, La Coruña",
        country: "España",
        nationality: "Española",
        height: "1,77 m",
        birthDate: "30/03/1993",
        deathDate: null // Poner null si el jugador está vivo
    }, 
        career: [  
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2023/24", team: "U.D. Las Palmas", category: "1ª Div. - Copa del Rey" },
            { season: "2022/23", team: "U.D. Las Palmas", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "U.D. Las Palmas", category: "2ª Div. - 2ª Div. Prom. de Ascenso" },
            { season: "2020/21", team: "U.D. Las Palmas", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "U.D. Las Palmas", category: "2ª Div." },
            { season: "2018/19", team: "U.D. Las Palmas", category: "2ª Div." },
            { season: "2017/18", team: "C.D. Lugo", category: "2ª Div." },
            { season: "2017/18", team: "R.C. Lens", category: "Ligue 2 - Copa de la Liga - Copa de Francia" },
            { season: "2016/17", team: "Celta de Vigo", category: "1ª Div. - Europa League - Copa del Rey" },
            { season: "2015/16", team: "C.D. Lugo", category: "2ª Div. - Copa del Rey" },
            { season: "2014/15", team: "S.D. Compostela", category: "2ª Div. B" },
            { season: "2013/14", team: "Deportivo Fabril", category: "3ª Div." },
            { season: "2012/13", team: "Deportivo Fabril", category: "3ª Div. - 3ª Div. Prom. de Ascenso" }
        ],
        
        stats: {
            "2025/26": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2024/25": {
                liga: { partidos: 9, goles_marcados: 0, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 6, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
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
        country: "Nigeria",
        nationality: "Nigerina, Española",
        height: "1,84 m",
        birthDate: "01/01/2002",
        deathDate: null // Poner null si el jugador está vivo
    }, 
        career: [  
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - 2ª Div. Prom. de Ascenso" },
            { season: "2023/24", team: "Real Club Recreativo de Huelva", category: "1ª Federación - Copa del Rey" },
            { season: "2022/23", team: "Rayo Majadahonda", category: "1ª Federación - Copa del Rey" },
            { season: "2021/22", team: "Gimnástica Segoviana", category: "2ª Federación - Copa del Rey" },
            { season: "2020/21", team: "Rayo Majadahonda Sub-19", category: "División de Honor" },
            { season: "2020/21", team: "Rayo Majadahonda", category: "2ª Div. B - 2ª Fase 1ª Div. RFEF" },
            { season: "2020/21", team: "México F.C.", category: "3ª Div." }
        ],
        nationalTeam: [
            { season: "2025", team: "Níger", category: "Clasif. Mundial África - Amistosos" },
            { season: "2024", team: "Níger", category: "Clasif. Copa África - Amistosos" },
            { season: "2023", team: "Níger Sub-23", category: "Copa África Sub-23" },
            { season: "2023", team: "Níger", category: "Clasif. Mundial África - Clasif. Copa África - Amistosos" },
            { season: "2022", team: "Níger", category: "Clasif. Copa África - Amistosos" }
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
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - 2ª Div. Prom. de Ascenso" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Celta de Vigo", category: "1ª Div." },
            { season: "2019/20", team: "U.D. Almería", category: "2ª Div. - 2ª Div. Prom. de Ascenso" },
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
            { season: "2014", team: "España Sub-19", category: "Clasif. Europeo Sub-19 - Amistosos" },
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
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Elche C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Elche C.F.", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2018/19", team: "Elche C.F.", category: "2ª Div." },
            { season: "2018/19", team: "C.D. Numancia", category: "2ª Div." },
            { season: "2017/18", team: "C.D. Numancia", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
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
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "S.D. Amorebieta", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Bilbao Athletic", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso -  2ª Div. B Prom. de Ascenso 2ª Fase" },
            { season: "2019/20", team: "Bilbao Athletic", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
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
            { season: "2023/24", team: "Porto", category: "Liga Portugal Betclic - Champ. League - Taça de Portugal - Copa de la Liga Portugal" },
            { season: "2022/23", team: "Porto", category: "Liga Portugal Betclic - Champ. League - Taça de Portugal - Copa de la Liga Portugal" },
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
            { season: "2025", team: "Angola", category: "Clasif. Mundial África - Amistosos" },
            { season: "2024", team: "Angola", category: "Clasif. Mundial África - Amistosos - Clasif. Copa África" },
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
    },

    
   "nachovidal": {
        name: "Ignacio Vidal Miralles",
        footballName: "Nacho Vidal",
        position: "Defensa",
        role: "jugador",
        number: 22,
        image: "https://i.postimg.cc/cLHZ7H4B/Nacho-Vidal-PNG-(3).webp", 
    personalData: {
        fullName: "Ignacio Vidal Miralles",
        nickname: "Nacho Vidal",
        birthPlace: "El Campello, Alicante",
        country: "España",
        nationality: "Española",
        height: "1,80 m",
        birthDate: "24/01/1995",
        deathDate: null // Poner null si el jugador está vivo
    }, 
        career: [  
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div." },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - 2ª Div. Prom. de Ascenso" },
            { season: "2024/25", team: "C.A. Osasuna", category: "1ª Div. - Copa del Rey" },
            { season: "2023/24", team: "R.C.D. Mallorca", category: "1ª Div. - Copa del Rey" },
            { season: "2023/24", team: "C.A. Osasuna", category: "1ª Div. - Copa del Rey - Supercopa de España - Clasif. Conference League" },
            { season: "2022/23", team: "C.A. Osasuna", category: "1ª Div. - Copa del Rey" },
            { season: "2021/22", team: "C.A. Osasuna", category: "1ª Div. - Copa del Rey" },
            { season: "2020/21", team: "C.A. Osasuna", category: "1ª Div. - Copa del Rey" },
            { season: "2019/20", team: "C.A. Osasuna", category: "1ª Div. - Copa del Rey" },
            { season: "2018/19", team: "C.A. Osasuna", category: "2ª Div." },
            { season: "2017/18", team: "Valencia C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2016/17", team: "Valencia Mestalla", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2016/17", team: "Valencia C.F.", category: "1ª Div." },
            { season: "2015/16", team: "Valencia Mestalla", category: "2ª Div. B" },
            { season: "2014/15", team: "Valencia Mestalla", category: "2ª Div. B" },
            { season: "2013/14", team: "Valencia Mestalla", category: "2ª Div. B" }
            
        ],
        nationalTeam: [
            { season: "2013", team: "España Sub-18", category: "Amistosos" }
            
        ], 
        
        stats: {
            "2025/26": {
                liga: { partidos: 12, goles_marcados: 0, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 6, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2024/25": {
                liga: { partidos: 22, goles_marcados: 6, tarjetas_amarillas: 6, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "lucas": {
        name: "Lucas Ahijado Quintana",
        footballName: "Lucas",
        position: "Defensa",
        role: "jugador",
        number: 24,
        image: "https://i.postimg.cc/yYdPX4cz/Lucas_PNG.webp", 
    personalData: {
        fullName: "Lucas Ahijado Quintana",
        nickname: "Lucas",
        birthPlace: "Oviedo, Asturias",
        country: "España",
        nationality: "Española",
        height: "1,74 m",
        birthDate: "30/01/1995",
        deathDate: null // Poner null si el jugador está vivo
    }, 
        career: [  
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "Real Oviedo Vetusta", category: "2ª Div. B" },
            { season: "2017/18", team: "Real Oviedo", category: "Copa del Rey" },
            { season: "2017/18", team: "Real Oviedo Vetusta", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2016/17", team: "Real Oviedo Vetusta", category: "3ª Div." },
            { season: "2015/16", team: "Real Oviedo Vetusta", category: "3ª Div." },
            { season: "2015/16", team: "Real Oviedo", category: "2ª Div." },
            { season: "2014/15", team: "Real Oviedo", category: "2ª Div. B - Copa del Rey" },
            { season: "2014/15", team: "Real Oviedo Vetusta", category: "3ª Div." },
            { season: "2013/14", team: "Real Oviedo", category: "2ª Div. B" },
            { season: "2013/14", team: "Real Oviedo Vetusta", category: "3ª Div." },
            { season: "2013/14", team: "Real Oviedo Sub-19", category: "División de Honor" }
            
        ],
        
        stats: {
            "2025/26": {
                liga: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2024/25": {
                liga: { partidos: 19, goles_marcados: 1, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 8, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2023/24": {
                liga: { partidos: 16, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2022/23": {
                liga: { partidos: 41, goles_marcados: 0, tarjetas_amarillas: 6, tarjetas_rojas: 0 },
                copa: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 7, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2021/22": {
                liga: { partidos: 30, goles_marcados: 1, tarjetas_amarillas: 7, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2020/21": {
                liga: { partidos: 26, goles_marcados: 1, tarjetas_amarillas: 4, tarjetas_rojas: 0 },
                copa: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2019/20": {
                liga: { partidos: 11, goles_marcados: 0, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2018/19": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2017/18": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2016/17": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2015/16": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2014/15": {
                liga: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2013/14": {
                liga: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "javilopez": {
        name: "Javier López Carballo",
        footballName: "Javi López",
        position: "Defensa",
        role: "jugador",
        number: 25,
        image: "https://i.postimg.cc/W4GZMX4Z/Javi_López_PNG.webp", 
    personalData: {
        fullName: "Javier López Carballo",
        nickname: "Javi López",
        birthPlace: "Santa Cruz de Tenerife, Santa Cruz de Tenerife",
        country: "España",
        nationality: "Española",
        height: "1,83 m",
        birthDate: "25/03/2002",
        deathDate: null // Poner null si el jugador está vivo
    }, 
        career: [  
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Real Sociedad", category: "1ª Div. - Europa League - Copa del Rey" },
            { season: "2023/24", team: "Deportivo Alavés", category: "1ª Div. - Copa del Rey" },
            { season: "2022/23", team: "Deportivo Alavés", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2021/22", team: "Deportivo Alavés", category: "1ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Deportivo Alavés", category: "1ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Deportivo Alavés", category: "1ª Div." },
            { season: "2019/20", team: "Deportivo Alavés B", category: "2ª Div. B" },
            { season: "2018/19", team: "Deportivo Alavés B", category: "3ª Div. Prom. de Ascenso" }
            
        ],

        nationalTeam: [
            { season: "2024", team: "España Sub-21", category: "Clasif. Europeo Sub-21 - Amistosos" },
            { season: "2023", team: "España Sub-21", category: "Clasif. Europeo Sub-21" },
            { season: "2020", team: "España Sub-18", category: "Copa del Atlántico Juvenil" },
            { season: "2019", team: "España Sub-18", category: "Amistosos" },
            { season: "2019", team: "España Sub-17", category: "Mundial Sub-17 - Europeo Sub-17 - Clasif. Europeo Sub-17 - Amistosos" },
            { season: "2018", team: "España Sub-17", category: "Clasif. Europeo Sub-17 - Amistosos" },
            { season: "2018", team: "España Sub-16", category: "Amistosos" }
            
        ], 
        
        stats: {
            "2025/26": {
                liga: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "lamine": {
        name: "Mouhamed Lamine Gueye",
        footballName: "Lamine",
        position: "Defensa",
        role: "jugador",
        number: 28,
        image: "https://i.postimg.cc/j2R8rDDW/Lamine_PNG.webp", 
    personalData: {
        fullName: "Mouhamed Lamine Gueye",
        nickname: "Lamine",
        birthPlace: "Dakar, Dakar",
        country: "Senegal",
        nationality: "Senegalesa",
        height: "1,71 m",
        birthDate: "15/09/2004",
        deathDate: null // Poner null si el jugador está vivo
    }, 
        career: [  
            { season: "2025/26", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div." },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div." },
            { season: "2024/25", team: "Real Oviedo Vetusta", category: "3ª Federación" },
            { season: "2023/24", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2022/23", team: "Real Oviedo Sub-19", category: "División de Honor" }
           
        ],

       
        stats: {
            "2025/26": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2024/25": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "omarfalah": {
        name: "Omar Falah Ruiz",
        footballName: "Omar Falah",
        position: "Defensa",
        role: "jugador",
        number: 29,
        image: "https://i.postimg.cc/FsFQmRcX/Omar_Falah_PNG.webp", 
    personalData: {
        fullName: "Omar Falah Ruiz",
        nickname: "Omar Falah",
        birthPlace: "Gijón, Asturias",
        country: "España",
        nationality: "Española",
        height: "1,82 m",
        birthDate: "09/09/2003",
        deathDate: null // Poner null si el jugador está vivo
    }, 
        career: [  
            { season: "2025/26", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div." },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - 2ª Div. Prom. de Ascenso" },
            { season: "2024/25", team: "Real Oviedo Vetusta", category: "3ª Federación" },
            { season: "2023/24", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2022/23", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2022/23", team: "U.P. de Langreo", category: "Copa Federación Fase Autonómica - 2ª Federación" },
            { season: "2022/23", team: "U.P. de Langreo B", category: "1ª RFFPA" },
            { season: "2021/22", team: "Burgos C.F. Sub-19", category: "División de Honor" },
            { season: "2020/21", team: "S.D. Llano 2000 Sub-19", category: "Liga Nacional" }
        ],

       
        stats: {
            "2025/26": {
                liga: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2024/25": {
                liga: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "marcoesteban": {
        name: "Marco Esteban Fernández",
        footballName: "Marco Esteban",
        position: "Defensa",
        role: "jugador",
        number: 30,
        image: "https://i.postimg.cc/PqJxqywh/Marco_Esteban_PNG.webp", 
    personalData: {
        fullName: "Marco Esteban Fernández",
        nickname: "Marco Esteban",
        birthPlace: "Oviedo, Asturias",
        country: "España",
        nationality: "Española",
        height: "1,83 m",
        birthDate: "01/03/2006",
        deathDate: null // Poner null si el jugador está vivo
    }, 
        career: [  
            { season: "2025/26", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div." },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2024/25", team: "Real Oviedo Vetusta", category: "3ª Federación" },
            { season: "2023/24", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div." },
            { season: "2022/23", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2022/23", team: "Real Oviedo Sub-19", category: "División de Honor" },
            { season: "2021/22", team: "Real Oviedo Sub-19", category: "División de Honor" },
            { season: "2021/22", team: "Real Oviedo Sub-19 B", category: "Liga Nacional" },
            { season: "2020/21", team: "Real Oviedo Sub-19 B", category: "Liga Nacional" }
        ],

       
        stats: {
            "2025/26": {
                liga: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2024/25": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2023/24": {
                liga: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "adrilopes": {
        name: "Adrián Lopes Marqués",
        footballName: "Adri Lopes",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/vHtvs8y9/Adri-Lopes-PNG.webp", 
    personalData: {
        fullName: "Adrián Lopes Marqués",
        nickname: "Adri Lopes",
        birthPlace: "Oviedo, Asturias",
        country: "España",
        nationality: "Española",
        height: "1,79 m",
        birthDate: "13/12/2005",
        deathDate: null // Poner null si el jugador está vivo
    }, 
        career: [  
            { season: "2025/26", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2024/25", team: "Real Oviedo Vetusta", category: "3ª Federación" },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2023/24", team: "Real Oviedo Sub-19", category: "División de Honor - Copa del Rey Juvenil" },
            { season: "2022/23", team: "Real Oviedo Sub-19", category: "División de Honor" },
            { season: "2021/22", team: "Real Oviedo Sub-19", category: "División de Honor" },
            { season: "2021/22", team: "Real Oviedo Sub-19 B", category: "Liga Nacional" },
            { season: "2020/21", team: "Astur C.F. Sub-19", category: "Liga Nacional" }
        ],

       
        stats: {
            "2025/26": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2024/25": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    // CENTROCAMPISTAS
    "albertoreina": {
        name: "Alberto Reina Campos",
        footballName: "Alberto Reina",
        position: "Centrocampista",
        role: "jugador",
        number: 5,
        image: "https://i.postimg.cc/mDCkCD2g/Alberto-Reina-PNG.webp",
    personalData: {
        fullName: "Alberto Reina Campos",
        nickname: "Alberto Reina",
        birthPlace: "Chiclana de La Frontera, Cádiz",
        country: "España",
        nationality: "Española",
        height: "1,79 m",
        birthDate: "19/11/1997",
        deathDate: null // Poner null si el jugador está vivo
    },
        career: [  
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div. - Copa del Rey" },
            { season: "2024/25", team: "C.D. Mirandés", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2023/24", team: "C.D. Mirandés", category: "2ª Div. - Copa del Rey" },
            { season: "2022/23", team: "A.D. Ceuta F.C.", category: "Copa del Rey - 1ª Federación" },
            { season: "2021/22", team: "A.D. Ceuta F.C.", category: "2ª Federación - 2ª Federación Prom. de Ascenso" },
            { season: "2020/21", team: "A.D. Ceuta F.C.", category: "3ª Div. - 3ª Div. 2ª Fase Prom. de Ascenso - 3ª Div. Prom. de Ascendo" },
            { season: "2019/20", team: "Las Palmas At.", category: "2ª Div. B" },
            { season: "2018/19", team: "Las Palmas At.", category: "2ª Div. B" },
            { season: "2018/19", team: "A.D. Ceuta F.C.", category: "3ª Div. - Copa Federación" },
            { season: "2017/18", team: "A.D. Ceuta F.C.", category: "3ª Div. - 3ª Div. Prom. de Ascendo" },
            { season: "2016/17", team: "C.D. Alcalá", category: "3ª Div." }
            
        ],
        stats: {
            "2025/26": {
                liga: { partidos: 14, goles_marcados: 1, tarjetas_amarillas: 4, tarjetas_rojas: 1 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 6, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },
    
    "sibo": {
        name: "Kwasi Sibo",
        footballName: "Sibo",
        position: "Centrocampista",
        role: "jugador",
        number: 6,
        image: "https://i.postimg.cc/gjJYNwFR/Sibo-PNG-Alineaci-n.webp", 
    personalData: {
        fullName: "Kwasi Sibo",
        nickname: "Sibo",
        birthPlace: "Wa, Región Alta Occidental",
        country: "Ghana",
        nationality: "Ghanés",
        height: "1,83 m",
        birthDate: "24/06/1998",
        deathDate: null // Poner null si el jugador está vivo
    },
        career: [  
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2023/24", team: "S.D. Amorebieta", category: "2ª Div. - Copa del Rey" },
            { season: "2022/23", team: "S.D. Amorebieta", category: "Copa del Rey - 1ª Federación - 1ª Federación Final de Campeones" },
            { season: "2021/22", team: "Betis Deportivo", category: "1ª Federación" },
            { season: "2020/21", team: "U.D. Ibiza", category: "2ª Div. B - Copa del Rey - 2ª Div. B Prom. de Ascenso - 2ª Div. B 2ª Fase Prom. de Ascenso" },
            { season: "2019/20", team: "U.D. Ibiza ", category: "2ª Div. B - Copa del Rey - 2ª Div. B Prom. de Ascenso" },
            { season: "2018/19", team: "K.F. Skënderbeu", category: "Liga Albania - Copa Albania" },
            { season: "2018/19", team: "F.C.Urartu", category: "Fase Previa Europa League" },
            { season: "2017/18", team: "F.C.Urartu", category: "Liga Armenia - Copa Armenia" }
            
        ],
        nationalTeam: [
            { season: "2025", team: "Ghana", category: "Clasif. Mundial África - Amistosos" }
            
        ],    
        stats: {
            "2025/26": {
                liga: { partidos: 7, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },
    
    "santicazorla": {
        name: "Santiago Cazorla González",
        footballName: "Santi Cazorla",
        position: "Centrocampista",
        role: "jugador",
        number: 8,
        image: "https://i.postimg.cc/6qQmv7tk/Santi_Cazorla_PNG.webp", 
    personalData: {
        fullName: "Santiago Cazorla González",
        nickname: "Santi Cazorla",
        birthPlace: "Fonciello, Asturias",
        country: "España",
        nationality: "Española",
        height: "1,68 m",
        birthDate: "13/12/1984",
        deathDate: null // Poner null si el jugador está vivo
    },
        career: [  
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div." },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - 2ª Div. Prom. de Ascenso" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2022/23", team: "Al-Sadd S.C.", category: "Liga Catar - Copa Emir Catar - Copa de Las Estrellas" },
            { season: "2021/22", team: "Al-Sadd S.C.", category: "AFC Champ. League Elite - Liga Catar - Copa Emir Catar - Copa de Catar" },
            { season: "2020/21", team: "Al-Sadd S.C.", category: "AFC Champ. League Elite - Liga Catar - Copa Emir Catar - Copa de Catar - Copa de Las Estrellas" },
            { season: "2019/20", team: "Al-Sadd S.C.", category: "AFC Champ. League Elite - Copa de Las Estrellas" },
            { season: "2019/20", team: "Villarreal C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2018/19", team: "Villarreal C.F.", category: "1ª Div. - Europa League - Copa del Rey" },
            { season: "2016/17", team: "Arsenal F.C.", category: "Premier League - Champ. League" },
            { season: "2015/16", team: "Arsenal F.C. Sub-21", category: "Premier League 2ª Div. Two" },
            { season: "2015/16", team: "Arsenal F.C.", category: "Premier League - Champ. League - Community Shield" },
            { season: "2014/15", team: "Arsenal F.C.", category: "Premier League - Champ. League - FA Cup - Community Shield - EFL Cup - Previa Champ. League" },
            { season: "2013/14", team: "Arsenal F.C.", category: "Premier League - Champ. League - FA Cup - EFL Cup - Previa Champ. League" },
            { season: "2012/13", team: "Arsenal F.C.", category: "Premier League - Champ. League - FA Cup - EFL Cup" },
            { season: "2011/12", team: "Málaga C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2010/11", team: "Villarreal C.F.", category: "1ª Div. - Europa League - Copa del Rey - Previa Europa League" },
            { season: "2009/10", team: "Villarreal C.F.", category: "1ª Div. - Europa League - Copa del Rey - Previa Europa League" },
            { season: "2008/09", team: "Villarreal C.F.", category: "1ª Div. - Champ. League - Copa del Rey" },
            { season: "2007/08", team: "Villarreal C.F.", category: "1ª Div. - Europa League - Copa del Rey" },
            { season: "2006/07", team: "Recreativo de Huelva", category: "1ª Div." },
            { season: "2005/06", team: "Villarreal C.F.", category: "1ª Div. - Champ. League" },
            { season: "2004/05", team: "Villarreal C.F.", category: "1ª Div. - Europa League - Copa del Rey - Copa Intertoto" },
            { season: "2003/04", team: "Villarreal C.F.", category: "1ª Div." }
            
        ],

        nationalTeam: [
            { season: "2019", team: "España", category: "Clasif. Eurocopa" },
            { season: "2015", team: "España", category: "Clasif. Eurocopa - Amistosos" },
            { season: "2014", team: "España", category: "Mundial - Clasif. Eurocopa - Amistosos" },
            { season: "2013", team: "España", category: "Clasif. Mundial Europa - Copa Confederaciones - Amistosos" },
            { season: "2012", team: "España", category: "Clasif. Mundial Europa - Eurocopa - Amistosos" },
            { season: "2011", team: "España", category: "Clasif. Eurocopa - Amistosos" },
            { season: "2010", team: "España", category: "Clasif. Eurocopa - Amistosos" },
            { season: "2009", team: "España", category: "Clasif. Mundial Europa - Copa Confederaciones - Amistosos" },
            { season: "2008", team: "España", category: "Clasif. Mundial Europa - Eurocopa - Amistosos" },
            { season: "2006", team: "España Sub-21", category: "Clasif. Europeo Sub-21" },
            { season: "2005", team: "España Sub-21", category: "Clasif. Europeo Sub-21" },
            { season: "2004", team: "España Sub-21", category: "Clasif. Europeo Sub-21 - Amistosos" }
            
        ],
        
        stats: {
            "2025/26": {
                liga: { partidos: 10, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 1 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2024/25": {
                liga: { partidos: 35, goles_marcados: 5, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2023/24": {
                liga: { partidos: 25, goles_marcados: 0, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "hassan": {
        name: "Haissem Hassan",
        footballName: "Hassan",
        position: "Centrocampista",
        role: "jugador",
        number: 10,
        image: "https://i.postimg.cc/5tWYNTVz/Hassan-PNG-2.webp", 
    personalData: {
        fullName: "Haissem Hassan",
        nickname: "Hassan",
        birthPlace: "Bagnolet, Isla de Francia",
        country: "Francia",
        nationality: "Francesa, Egipcia",
        height: "1,75 m",
        birthDate: "08/02/2002",
        deathDate: null // Poner null si el jugador está vivo
    },
        career: [  
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2023/24", team: "Real Sporting de Gijón", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2022/23", team: "Villarreal C.F.", category: "1ª Div." },
            { season: "2022/23", team: "Villarreal C.F. B", category: "2ª Div." },
            { season: "2021/22", team: "C.D. Mirandés", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Villarreal C.F. B", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2019/20", team: "L.B. Châteauroux", category: "Ligue 2 - Copa de la Liga" },
            { season: "2019/20", team: "L.B. Châteauroux II", category: "National 3" },
            { season: "2018/19", team: "L.B. Châteauroux Sub-19", category: "Copa Gambardella" },
            { season: "2018/19", team: "L.B. Châteauroux", category: "Ligue 2 - Copa de Francia" },
            { season: "2018/19", team: "L.B. Châteauroux II", category: "National 3" }
            
         ],

        nationalTeam: [
            { season: "2021", team: "Francia Sub-20", category: "Amistosos" },
            { season: "2020", team: "Francia Sub-18", category: "Amistosos" },
            { season: "2019", team: "Francia Sub-18", category: "Amistosos" },
            { season: "2019", team: "Francia Sub-17", category: "Mundial Sub-17 - Amistosos" },
            { season: "2018", team: "Francia Sub-17", category: "Clasif. Europeo Sub-17 - Amistosos" }
            
        ],
        
        stats: {
            "2025/26": {
                liga: { partidos: 14, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2024/25": {
                liga: { partidos: 43, goles_marcados: 4, tarjetas_amarillas: 4, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "colombatto": {
        name: "Santiago Colombatto",
        footballName: "Colombatto",
        position: "Centrocampista",
        role: "jugador",
        number: 11,
        image: "https://i.postimg.cc/R08GqPNz/Colombatto_PNG.webp", 
    personalData: {
        fullName: "Santiago Colombatto",
        nickname: "Colombatto",
        birthPlace: "Ucacha, Córdoba",
        country: "Argentina",
        nationality: "Argentina, Italiana",
        height: "1,78 m",
        birthDate: "17/01/1997",
        deathDate: null // Poner null si el jugador está vivo
    },
        career: [  
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2022/23", team: "F.C. Famalicão", category: "Liga Portugal Betclic - Taça de Portugal - Copa de la Liga Portugal" },
            { season: "2021/22", team: "Club León", category: "Liga MX Apert. - Liga MX Claus. - CONCACAF Champ. Cup - Etapas Finales Apert. MX" },
            { season: "2020/21", team: "Club León", category: "Liga MX Claus. - Etapas Finales Claus. MX - CONCACAF Champ. Cup - Leagues Cup" },
            { season: "2020/21", team: "Club León Sub-20", category: "Liga MX Sub-20 Claus." },
            { season: "2020/21", team: "Sint-Truidense VV", category: "Liga Belga" },
            { season: "2019/20", team: "Sint-Truidense VV", category: "Liga Belga - Copa Belga" },
            { season: "2018/19", team: "Hellas Verona F.C.", category: "Serie B - Serie B Prom. de Ascenso" },
            { season: "2017/18", team: "A.C. Perugia Calcio", category: "Serie B - Coppa Italia - Serie B Prom. de Ascenso" },
            { season: "2016/17", team: "F.C. Trapani 1905", category: "Serie B" },
            { season: "2016/17", team: "Pisa S.C.", category: "Coppa Italia" },
            { season: "2015/16", team: "Cagliari Calcio Sub-19", category: "Campionato Primavera 1 - Coppa Italia Primavera" },
            { season: "2015/16", team: "Cagliari Calcio", category: "Serie B - Coppa Italia" }
            
         ],

        nationalTeam: [
            { season: "2021", team: "Argentina Sub-23", category: "Juegos Olímpicos - Amistosos" },
            { season: "2020", team: "Argentina Sub-23", category: "Amistosos" },
            { season: "2019", team: "Argentina Sub-23", category: "Juegos Panamericanos - Amistosos" },
            { season: "2017", team: "Argentina Sub-23", category: "Mundial Sub-20" }
            
            
        ],
        
        stats: {
            "2025/26": {
                liga: { partidos: 11, goles_marcados: 0, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2024/25": {
                liga: { partidos: 43, goles_marcados: 4, tarjetas_amarillas: 12, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2023/24": {
                liga: { partidos: 41, goles_marcados: 3, tarjetas_amarillas: 12, tarjetas_rojas: 1 },
                copa: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    }

    
    
};

