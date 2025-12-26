const playersData = {
    // PORTEROS
    "aaron": {
        name: "Aarón Escandell Banacloche",
        footballName: "Aarón",
        position: "Portero",
        role: "portero",
        number: null,
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
                liga: { partidos: 17, goles_encajados: 26, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
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
        number: null,
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
        number: null,
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

    "quentinbraat": {
        name: "Quentin Jean-Pierre Guy Braat",
        footballName: "Quentin Braat",
        position: "Portero",
        role: "portero",
        number: null,
        image: "https://i.postimg.cc/wxsLQXj0/Quentin-Braat-PNG.webp", 
    personalData: {
        fullName: "Quentin Jean-Pierre Guy Braat",
        nickname: "Quentin Braat",
        birthPlace: "Fontainebleau, Isla de Francia",
        country: "Francia",
        nationality: "Francesa",
        height: "1,94 m",
        birthDate: "06/07/1997",
        deathDate: null // Poner null si el jugador está vivo
    },
        career: [  
            { season: "2025/26", team: "Rodez A.F.", category: "Ligue 2 - Copa de Francia" },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "Chamois Niort F.C.", category: "Ligue 2" },
            { season: "2020/21", team: "Chamois Niort F.C.", category: "Ligue 2 - Copa de Francia - Ligue 2 Prom. de Ascenso" },
            { season: "2019/20", team: "Chamois Niort F.C. B", category: "National 3" },
            { season: "2019/20", team: "Chamois Niort F.C.", category: "Ligue 2 - Copa de la Liga - Copa de Francia" },
            { season: "2018/19", team: "F.C. Nantes B", category: "National 2" },
            { season: "2017/18", team: "F.C. Nantes B", category: "National 3" },
            { season: "2016/17", team: "F.C. Nantes", category: "Ligue 1 - Copa de la Liga - Copa de Francia" },
            { season: "2016/17", team: "F.C. Nantes B", category: "National 2" },
            { season: "2015/16", team: "F.C. Nantes", category: "Ligue 1 - Copa de Francia" },
            { season: "2015/16", team: "F.C. Nantes B", category: "National 2" },
            { season: "2014/15", team: "F.C. Nantes B", category: "National 2" }


        ],

        nationalTeam: [
            { season: "2017", team: "Francia Sub-20", category: "Mundial Sub-20" },
            { season: "2016", team: "Francia Sub-20", category: "Amistosos" },
            { season: "2016", team: "Francia Sub-19", category: "Europeo Sub-19 - Clasif. Europeo Sub-19 - Amistosos" },
            { season: "2015", team: "Francia Sub-19", category: "Clasif. Europeo Sub-19 - Amistosos" }
            
        ],

        stats: {
            "2024/25": {
                liga: { partidos: 1, goles_encajados: 2, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_encajados: 4, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2023/24": {
                liga: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 2, goles_encajados: 3, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_encajados: 2, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2022/23": {
                liga: { partidos: 26, goles_encajados: 18, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_encajados: 2, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_encajados: 5, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },
    // DEFENSAS
    "bailly": {
        name: "Eric Bertrand Bailly",
        footballName: "Bailly",
        position: "Defensa",
        role: "jugador",
        number: null,
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
                liga: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
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
        number: null,
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
            "2024/25": {
                liga: { partidos: 9, goles_marcados: 0, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 6, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

     "rahim": {
        name: "Abdel Rahim Alhassane Bonkano",
        footballName: "Rahim",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/15bMB7y7/Rahim-PNG.webp", 
    personalData: {
        fullName: "Abdel Rahim Alhassane Bonkano",
        nickname: "Rahim",
        birthPlace: "Abuya, Territorio de la Capital Federal",
        country: "Nigeria",
        nationality: "Nigerina, Nigeriana, Española",
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
                liga: { partidos: 16, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
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
        number: null,
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
                liga: { partidos: 12, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
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
        number: null,
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
                liga: { partidos: 9, goles_marcados: 0, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
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
        number: null,
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
        number: null,
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
                liga: { partidos: 12, goles_marcados: 1, tarjetas_amarillas: 6, tarjetas_rojas: 1 },
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
        number: null,
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
        number: null,
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
                liga: { partidos: 7, goles_marcados: 0, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2024/25": {
                liga: { partidos: 18, goles_marcados: 1, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
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
                liga: { partidos: 40, goles_marcados: 0, tarjetas_amarillas: 6, tarjetas_rojas: 0 },
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
        number: null,
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
                liga: { partidos: 7, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
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
        number: null,
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
        number: null,
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
        number: null,
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

    "alvarolemos": {
        name: "Álvaro Lemos Collazo",
        footballName: "Álvaro Lemos",
        position: "Defensa",
        role: "jugador",
        number: null,
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
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2023/24", team: "U.D. Las Palmas", category: "1ª Div. - Copa del Rey" },
            { season: "2022/23", team: "U.D. Las Palmas", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "U.D. Las Palmas", category: "2ª Div. - 2ª Div. Prom. de Ascenso" },
            { season: "2020/21", team: "U.D. Las Palmas", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "U.D. Las Palmas", category: "2ª Div." },
            { season: "2018/19", team: "U.D. Las Palmas", category: "2ª Div." },
            { season: "2017/18", team: "C.D. Lugo", category: "2ª Div." },
            { season: "2017/18", team: "R.C. Lens", category: "Ligue 2 - Copa de la Liga - Copa de Francia" },
            { season: "2016/17", team: "R.C. Celta de Vigo", category: "1ª Div. - Europa League - Copa del Rey" },
            { season: "2015/16", team: "C.D. Lugo", category: "2ª Div. - Copa del Rey" },
            { season: "2014/15", team: "S.D. Compostela", category: "2ª Div. B" },
            { season: "2013/14", team: "Deportivo Fabril", category: "3ª Div." },
            { season: "2012/13", team: "Deportivo Fabril", category: "3ª Div. Prom. de Ascenso" }

        ],

       
        stats: {
            "2024/25": {
                liga: { partidos: 9, goles_marcados: 0, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 6, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
            
        }
    },

    "pomares": {
        name: "Carlos Pomares Rayo",
        footballName: "Pomares",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/yN4Q1Q53/Pomares_PNG.webp", 
    personalData: {
        fullName: "Carlos Pomares Rayo",
        nickname: "Pomares",
        birthPlace: "Valencia, Valencia",
        country: "España",
        nationality: "Española",
        height: "1,83 m",
        birthDate: "05/12/1992",
        deathDate: null // Poner null si el jugador está vivo
    }, 
        career: [  
            { season: "2025/26", team: "Real Zaragoza", category: "2ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - 2ª Div. Prom. de Ascenso" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "C.D. Tenerife", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2020/21", team: "C.D. Tenerife", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "A.D. Alcorcón", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "Extremadura U.D.", category: "2ª Div. - Copa del Rey" },
            { season: "2017/18", team: "Lorca F.C.", category: "2ª Div. - Copa del Rey" },
            { season: "2016/17", team: "Lorca F.C.", category: "2ª Div. B - Copa del Rey - 2ª Div. B Prom. de Ascenso" },
            { season: "2015/16", team: "Barakaldo C.F.", category: "2ª Div. B - Copa del Rey - 2ª Div. B Prom. de Ascenso" },
            { season: "2014/15", team: "At. Levante", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2013/14", team: "Huracán Valencia C.F.", category: "2ª Div. B" },
            { season: "2012/13", team: "Huracán Valencia C.F.", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2010/11", team: "Sheffield United F.C. Sub-18", category: "FA Youth Cup" }
            

        ],

       
        stats: {
            "2024/25": {
                liga: { partidos: 27, goles_marcados: 0, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
             "2023/24": {
                liga: { partidos: 19, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2022/23": {
                liga: { partidos: 15, goles_marcados: 0, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 }
            }
            
        }
    },

    "jaimevazquez": {
        name: "Jaime Vázquez Cuervo-Arango",
        footballName: "Jaime Vázquez",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/mDSQG8f4/Jaime_Vázquez_PNG.webp", 
    personalData: {
        fullName: "Jaime Vázquez Cuervo-Arango",
        nickname: "Jaime Vázquez",
        birthPlace: "Avilés, Asturias",
        country: "España",
        nationality: "Española",
        height: "1,84 m",
        birthDate: "01/02/2006",
        deathDate: null // Poner null si el jugador está vivo
    }, 
        career: [  
            { season: "2025/26", team: "R.C. Celta Fortuna", category: "1ª Federación" },
            { season: "2024/25", team: "R.C. Celta Fortuna", category: "1ª Federación" }, 
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Real Oviedo Vetusta", category: "3ª Federación" },
            { season: "2023/24", team: "Real Oviedo Sub-19", category: "Copa del Rey Juvenil" },
            { season: "2023/24", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2020/21", team: "Real Sporting Sub-19 B", category: "Liga Nacional" }
            
        ],

        nationalTeam: [
            { season: "2024", team: "España Sub-18", category: "Amistosos" }
            
            
        ],

       stats: {
            "2024/25": {
                liga: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 7, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
             "2023/24": {
                liga: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
            
        }
    },

    "eze": {
        name: "Chukwuma Eze",
        footballName: "Eze",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/KYsb7466/Eze-PNG_(1).webp", 
    personalData: {
        fullName: "Chukwuma Eze",
        nickname: "Eze",
        birthPlace: "Lagos, Lagos",
        country: "Nigeria",
        nationality: "Nigeriana",
        height: "1,85 m",
        birthDate: "16/11/2003",
        deathDate: null // Poner null si el jugador está vivo
    }, 
        career: [  
            { season: "2025/26", team: "Real Avilés Industrial", category: "Copa del Rey - 1ª Federación" },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div." }, 
            { season: "2024/25", team: "Real Oviedo Vetusta", category: "3ª Federación" },
            { season: "2023/24", team: "L'Entregu C.F.", category: "Copa Federación - 3ª Federación - 3ª Federación Prom. de Ascenso" },
            { season: "2022/23", team: "C.D. Llanes", category: "Copa Federación Fase Autonómica" },
            { season: "2021/22", team: "Real Oviedo Sub-19", category: "División de Honor" }
            
        ],
  
            
        stats: {
            "2024/25": {
                liga: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
            
        }
    },

    // CENTROCAMPISTAS

    "fonseca": {
        name: "Nicolás Fonseca",
        footballName: "Fonseca",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/CL5zYC6k/Fonseca-PNG.webp",
    personalData: {
        fullName: "Nicolás Fonseca",
        nickname: "Fonseca",
        birthPlace: "Nápoles, Campania",
        country: "Italia",
        nationality: "Uruguaya, Italiana",
        height: "1,81 m",
        birthDate: "19/10/1998",
        deathDate: null // Poner null si el jugador está vivo
    },
        career: [  
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div." },
            { season: "2025/26", team: "Club León F.C.", category: "Liga MX Apert." },
            { season: "2024/25", team: "Club León F.C.", category: "Liga MX Claus. - Etapas Finales Claus. MX - Leagues Cup" },
            { season: "2023/24", team: "C.A. River Plate", category: "Copa Libertadores - Copa Argentina - Supercopa Argentina - Liga Prof. Argentina - Copa Liga Prof. Argentina" },
            { season: "2023/24", team: "Montevideo Wanderers F.C.", category: "Copa Uruguay" },
            { season: "2022/23", team: "Montevideo Wanderers F.C.", category: "Apert. Uruguay - Claus. Uruguay - Torneo Intermedio Uruguay - Copa Uruguay" },
            { season: "2021/22", team: "Montevideo Wanderers F.C.", category: "Claus. Uruguay" },
            { season: "2021/22", team: "C.A. River Plate Montevideo", category: "Apert. Uruguay - Conmebol Sudamericana - Fase Previa Conmebol Sudamericana - Torneo Intermedio Uruguay" },
            { season: "2019/20", team: "Novara F.C.", category: "Serie C - Coppa Italia" },
            { season: "2018/19", team: "Novara F.C.", category: "Serie C - Coppa Italia" },
            { season: "2017/18", team: "Novara F.C. Sub-19", category: "Campionato Primavera 2 - Coppa Italia Primavera" },
            { season: "2016/17", team: "Novara F.C. Sub-19", category: "Campionato Primavera 1 - Coppa Italia Primavera" }
            
            
        ],

        nationalTeam: [
            { season: "2025", team: "Uruguay", category: "Clasif. Mundial Sudamérica - Amistosos" },
            { season: "2024", team: "Uruguay", category: "Clasif. Mundial Sudamérica - Amistosos" }
            
        ],
        
        stats: {
            "2025/26": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },
    
    "albertoreina": {
        name: "Alberto Reina Campos",
        footballName: "Alberto Reina",
        position: "Centrocampista",
        role: "jugador",
        number: null,
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
                liga: { partidos: 16, goles_marcados: 1, tarjetas_amarillas: 4, tarjetas_rojas: 1 },
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
        number: null,
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
                liga: { partidos: 8, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2024/25": {
                liga: { partidos: 38, goles_marcados: 1, tarjetas_amarillas: 10, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 8, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },
    
    "santicazorla": {
        name: "Santiago Cazorla González",
        footballName: "Santi Cazorla",
        position: "Centrocampista",
        role: "jugador",
        number: null,
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
                liga: { partidos: 11, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 1 },
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
        number: null,
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
                liga: { partidos: 16, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
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
        number: null,
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
            { season: "2021/22", team: "Club León F.C.", category: "Liga MX Apert. - Liga MX Claus. - CONCACAF Champ. Cup - Etapas Finales Apert. MX" },
            { season: "2020/21", team: "Club León F.C.", category: "Liga MX Claus. - Etapas Finales Claus. MX - CONCACAF Champ. Cup - Leagues Cup" },
            { season: "2020/21", team: "Club León F.C. Sub-20", category: "Liga MX Sub-20 Claus." },
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
                liga: { partidos: 13, goles_marcados: 0, tarjetas_amarillas: 4, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2024/25": {
                liga: { partidos: 43, goles_marcados: 4, tarjetas_amarillas: 11, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2023/24": {
                liga: { partidos: 41, goles_marcados: 3, tarjetas_amarillas: 11, tarjetas_rojas: 1 },
                copa: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "ejaria": {
        name: "Oviemuno Dominic Ejaria",
        footballName: "Ejaria",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/BbxX2vpC/Ovi_Ejaria_PNG_(2).webp", 
    personalData: {
        fullName: "Oviemuno Dominic Ejaria",
        nickname: "Ejaria",
        birthPlace: "Londres, Inglaterra",
        country: "Reino Unido",
        nationality: "Británico, Nigeriano",
        height: "1,88 m",
        birthDate: "18/11/1997",
        deathDate: null // Poner null si el jugador está vivo
    },
        career: [  
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div." },
            { season: "2022/23", team: "Reading F.C.", category: "Championship" },
            { season: "2021/22", team: "Reading F.C.", category: "Championship" },
            { season: "2020/21", team: "Reading F.C.", category: "Championship" },
            { season: "2019/20", team: "Reading F.C.", category: "Championship - FA Cup - EFL Cup" },
            { season: "2018/19", team: "Reading F.C.", category: "Championship" },
            { season: "2018/19", team: "Rangers F.C.", category: "Liga Escocia - Europa League - Fase Previa Europa League - Copa de la Liga de Escocia" },
            { season: "2017/18", team: "Sunderland A.F.C.", category: "Championship" },
            { season: "2017/18", team: "F.C. Liverpool Sub-23", category: "Premier League 2ª Div. One" },
            { season: "2016/17", team: "F.C. Liverpool Sub-23", category: "Premier League 2ª Div. One" },
            { season: "2016/17", team: "F.C. Liverpool", category: "Premier League - FA Cup - EFL Cup" },
            { season: "2015/16", team: "F.C. Liverpool Sub-21", category: "Premier League 2ª Div. One" },
            { season: "2015/16", team: "F.C. Liverpool Sub-18", category: "FA Youth Cup" },
            { season: "2014/15", team: "F.C. Liverpool Sub-21", category: "Premier League 2ª Div. One" },
            { season: "2014/15", team: "F.C. Liverpool Sub-19", category: "UEFA Youth League" },
            { season: "2014/15", team: "F.C. Liverpool Sub-18", category: "FA Youth Cup" }
            
         ],

        nationalTeam: [
            { season: "2018", team: "Inglaterra Sub-21", category: "Amistosos" },
            { season: "2017", team: "Inglaterra Sub-20", category: "Mundial Sub-20" },
            { season: "2016", team: "Inglaterra Sub-19", category: "Amistosos" },
            { season: "2016", team: "Inglaterra Sub-20", category: "Amistosos" }
            
            
        ],
        
        stats: {
            "2025/26": {
                liga: { partidos: 7, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "borjasanchez": {
        name: "Borja Sánchez Laborde",
        footballName: "Borja Sánchez",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/v82kfvkD/Borja_Sánchez_PNG.webp", 
    personalData: {
        fullName: "Borja Sánchez Laborde",
        nickname: "Borja Sánchez",
        birthPlace: "Oviedo, Asturias",
        country: "España",
        nationality: "Española",
        height: "1,86 m",
        birthDate: "26/02/1996",
        deathDate: null // Poner null si el jugador está vivo
    },
        career: [  
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div." },
            { season: "2024/25", team: "Burgos C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div." },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div. - 2ª Div. Prom. de Ascenso" },
            { season: "2023/24", team: "Club León F.C.", category: "Liga MX Apert. - Mundial de Clubes - Etapas Finales Apert. MX" },
            { season: "2023/24", team: "Club León F.C. Sub-23", category: "Liga MX Sub-23 Apert." },
            { season: "2022/23", team: "Club León F.C.", category: "Leagues Cup" },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div." },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "Real Oviedo Vetusta", category: "2ª Div. B" },
            { season: "2018/19", team: "Real Oviedo", category: "2ª Div." },
            { season: "2017/18", team: "Real Oviedo Vetusta", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2016/17", team: "R.C.D. Mallorca B", category: "2ª Div. B" },
            { season: "2016/17", team: "Real Madrid Castilla", category: "2ª Div. B" },
            { season: "2015/16", team: "C.F. Fuenlabrada", category: "2ª Div. B" },
            { season: "2014/15", team: "Real Madrid Sub-19", category: "División de Honor - UEFA Youth League" }
            
         ],

        nationalTeam: [
            { season: "2012", team: "España Sub-16", category: "Amistosos" }
            
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
                amistosos: { partidos: 6, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2023/24": {
                liga: { partidos: 16, goles_marcados: 2, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2022/23": {
                liga: { partidos: 24, goles_marcados: 1, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2021/22": {
                liga: { partidos: 40, goles_marcados: 5, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2020/21": {
                liga: { partidos: 37, goles_marcados: 4, tarjetas_amarillas: 4, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2019/20": {
                liga: { partidos: 34, goles_marcados: 4, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2018/19": {
                liga: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "brandondomingues": {
        name: "Brandon Jose Dominguès",
        footballName: "Brandon Dominguès",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/rpTPMZ0Z/Brandon-Domingues-PNG.webp", 
    personalData: {
        fullName: "Brandon Jose Dominguès",
        nickname: "Brandon Dominguès",
        birthPlace: "Grenoble, Auvernia-Ródano-Alpes",
        country: "Francia",
        nationality: "Francesa, Portuguesa",
        height: "1,72 m",
        birthDate: "06/06/2000",
        deathDate: null // Poner null si el jugador está vivo
    },
        career: [  
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Debreceni V.S.C.", category: "Liga Hungría - Copa Hungría" },
            { season: "2023/24", team: "Debreceni V.S.C.", category: "Liga Hungría - Copa Hungría - Fase Previa Conference League" },
            { season: "2022/23", team: "Budapest Honvéd F.C.", category: "Liga Hungría - Copa Hungría" },
            { season: "2021/22", team: "E.S.T.A.C. Troyes", category: "Ligue 1 - Copa de Francia" },
            { season: "2021/22", team: "E.S.T.A.C. Troyes B", category: "National 3" },
            { season: "2020/21", team: "E.S.T.A.C. Troyes", category: "Ligue 2 - Copa de Francia" },
            { season: "2020/21", team: "E.S.T.A.C. Troyes B", category: "National 3" },
            { season: "2019/20", team: "E.S.T.A.C. Troyes B", category: "National 3" },
            { season: "2018/19", team: "E.S.T.A.C. Troyes B", category: "National 3" },
            { season: "2017/18", team: "E.S.T.A.C. Troyes B", category: "National 3" }
            
         ],

        stats: {
            "2025/26": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "brekalo": {
        name: "Josip Brekalo",
        footballName: "Brekalo",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/9MxvJ3Xw/Brekalo_PNG_(2).webp", 
    personalData: {
        fullName: "Josip Brekalo",
        nickname: "Brekalo",
        birthPlace: "Zagreb, Zagreb",
        country: "Croacia",
        nationality: "Croata",
        height: "1,75 m",
        birthDate: "23/06/1998",
        deathDate: null // Poner null si el jugador está vivo
    },
        career: [  
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Kasımpaşa S.K.", category: "Liga Turca" },
            { season: "2024/25", team: "A.C.F. Fiorentina", category: "Serie A - Fase Previa Conference League" },
            { season: "2023/24", team: "H.N.K. Hajduk Split", category: "Liga Croata HNL - Copa Croata" },
            { season: "2023/24", team: "A.C.F. Fiorentina", category: "Serie A - Supercopa de Italia - Coppa Italia - Fase Previa Conference League - Conference League" },
            { season: "2022/23", team: "A.C.F. Fiorentina", category: "Serie A - Coppa Italia - Conference League" },
            { season: "2022/23", team: "V.f.L. Wolfsburg", category: "Bundesliga - DFB Pokal" },
            { season: "2021/22", team: "Torino F. C.", category: "Serie A - Coppa Italia" },
            { season: "2021/22", team: "V.f.L. Wolfsburg", category: "Bundesliga - DFB Pokal" },
            { season: "2020/21", team: "V.f.L. Wolfsburg", category: "Bundesliga - DFB Pokal - Fase Previa Europa League" },
            { season: "2019/20", team: "V.f.L. Wolfsburg", category: "Bundesliga - Europa League - DFB Pokal" },
            { season: "2018/19", team: "V.f.L. Wolfsburg", category: "Bundesliga - DFB Pokal" },
            { season: "2017/18", team: "V.f.L. Wolfsburg", category: "Bundesliga - DFB Pokal - Bundesliga Prom. de Ascenso" },
            { season: "2017/18", team: "V.f.B. Stuttgart", category: "Bundesliga - DFB Pokal" },
            { season: "2016/17", team: "V.f.B. Stuttgart", category: "2 Bundesliga" },
            { season: "2016/17", team: "V.f.L. Wolfsburg II", category: "Regionalliga" },
            { season: "2016/17", team: "V.f.L. Wolfsburg", category: "Bundesliga - DFB Pokal" },
            { season: "2015/16", team: "G.N.K. Dinamo Zagreb", category: "Liga Croata NHL - Copa Croata" },
            { season: "2015/16", team: "G.N.K. Dinamo Zagreb Sub-19", category: "UEFA Youth League" },
            { season: "2015/16", team: "G.N.K. Dinamo Zagreb II", category: "Primera Croacia 1 NL" }
            
            
         ],

          nationalTeam: [
            { season: "2023", team: "Croacia", category: "Clasif. Eurocopa" },
            { season: "2022", team: "Croacia", category: "Liga de las Naciones de la UEFA" },
            { season: "2021", team: "Croacia", category: "Clasif. Mundial Europa - Eurocopa - Amistosos" }, 
            { season: "2020", team: "Croacia", category: "Liga de las Naciones de la UEFA - Amistosos" },  
            { season: "2019", team: "Croacia Sub-21", category: "Europeo Sub-21 - Clasif. Europeo Sub-21" },  
            { season: "2019", team: "Croacia", category: "Clasif. Eurocopa - Amistosos" }, 
            { season: "2018", team: "Croacia", category: "Liga de las Naciones de la UEFA" },
            { season: "2018", team: "Croacia Sub-21", category: "Clasif. Europeo Sub-21" },
            { season: "2017", team: "Croacia Sub-21", category: "Clasif. Europeo Sub-21 - Amistosos" },  
            { season: "2017", team: "Croacia Sub-19", category: "Clasif. Europeo Sub-19" },
            { season: "2016", team: "Croacia Sub-21", category: "Clasif. Europeo Sub-21" },
            { season: "2016", team: "Croacia Sub-19", category: "Europeo Sub-19 - Clasif. Europeo Sub-19 - Amistosos" },  
            { season: "2015", team: "Croacia Sub-19", category: "Clasif. Europeo Sub-19" },
            { season: "2015", team: "Croacia Sub-18", category: "Amistosos" },  
            { season: "2015", team: "Croacia Sub-17", category: "Mundial Sub-17 - Europeo Sub-17 - Clasif. Europeo Sub-17 - Amistosos" },  
            { season: "2014", team: "Croacia Sub-17", category: "Clasif. Europeo Sub-17 - Amistosos" },  
            { season: "2014", team: "Croacia Sub-16", category: "Amistosos" },  
            { season: "2013", team: "Croacia Sub-17", category: "Clasif. Europeo Sub-17 - Amistosos" }
             
        ],

        stats: {
            "2025/26": {
                liga: { partidos: 11, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "dendoncker": {
        name: "Leander Dendoncker",
        footballName: "Dendoncker",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/8cTvCWBS/Dendoncker_PNG(2).webp", 
    personalData: {
        fullName: "Leander Dendoncker",
        nickname: "Dendoncker",
        birthPlace: "Passendale, Flandes Occidental",
        country: "Bélgica",
        nationality: "Belga",
        height: "1,88 m",
        birthDate: "15/04/1995",
        deathDate: null // Poner null si el jugador está vivo
    },
        career: [  
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div. - Copa del Rey" },
            { season: "2024/25", team: "R.S.C. Anderlecht", category: "Liga Belga - Europa League - Copa Belga" },
            { season: "2023/24", team: "S.S.C. Napoli", category: "Serie A" },
            { season: "2023/24", team: "Aston Villa F.C.", category: "Premier League - FA Cup - EFL Cup - Fase Previa Conference League - Conference League" },
            { season: "2022/23", team: "Aston Villa F.C.", category: "Premier League - FA Cup" },
            { season: "2022/23", team: "Wolverhampton Wanderers F.C.", category: "Premier League - FA Cup" },
            { season: "2021/22", team: "Wolverhampton Wanderers F.C.", category: "Premier League - FA Cup - EFL Cup" },
            { season: "2020/21", team: "Wolverhampton Wanderers F.C.", category: "Premier League - FA Cup - EFL Cup" },
            { season: "2019/20", team: "Wolverhampton Wanderers F.C.", category: "Premier League - Europa League - FA Cup - Fase Previa Europa League" },
            { season: "2018/19", team: "Wolverhampton Wanderers F.C.", category: "Premier League - FA Cup - EFL Cup" },
            { season: "2017/18", team: "R.S.C. Anderlecht", category: "Liga Belga - Champ. League - Copa Belga" },
            { season: "2016/17", team: "R.S.C. Anderlecht", category: "Liga Belga - Europa League - Copa Belga - Fase Previa Champ. League - Fase Previa Europa League" },
            { season: "2015/16", team: "R.S.C. Anderlecht", category: "Liga Belga - Europa League - Prom. Liga Belga - Copa Belga" },
            { season: "2014/15", team: "R.S.C. Anderlecht", category: "Liga Belga - Champ. League - Europa League - Copa Belga - Supercopa Belga" },
            { season: "2013/14", team: "R.S.C. Anderlecht", category: "Liga Belga - Copa Belga - Supercopa Belga" },
            { season: "2013/14", team: "R.S.C. Anderlecht Sub-19", category: "UEFA Youth League" },
            { season: "2012/13", team: "R.S.C. Anderlecht Sub-19", category: "UEFA Youth League" }
            
         ],

          nationalTeam: [
            { season: "2023", team: "Bélgica", category: "Clasif. Eurocopa" },
            { season: "2022", team: "Bélgica", category: "Mundial - Liga de las Naciones de la UEFA - Amistosos" },
            { season: "2021", team: "Bélgica", category: "Clasif. Mundial Europa - Eurocopa - Liga de las Naciones de la UEFA - Amistosos" }, 
            { season: "2020", team: "Bélgica", category: "Liga de las Naciones de la UEFA - Amistosos" },  
            { season: "2019", team: "Bélgica", category: "Clasif. Eurocopa" },  
            { season: "2018", team: "Bélgica", category: "Mundial - Liga de las Naciones de la UEFA - Amistosos" },
            { season: "2017", team: "Bélgica", category: "Clasif. Mundial Europa - Amistosos" },  
            { season: "2016", team: "Bélgica", category: "Clasif. Mundial Europa - Amistosos" },
            { season: "2015", team: "Bélgica Sub-21", category: "Clasif. Europeo Sub-21" },
            { season: "2015", team: "Bélgica", category: "Clasif. Eurocopa - Amistosos" },  
            { season: "2014", team: "Bélgica Sub-21", category: "Amistosos" },  
            { season: "2014", team: "Bélgica Sub-19", category: "Clasif. Europeo Sub-19 - Amistosos" },  
            { season: "2013", team: "Bélgica Sub-19", category: "Clasif. Europeo Sub-19 - Amistosos" },
            { season: "2012", team: "Bélgica Sub-17", category: "Europeo Sub-17 - Clasif. Europeo Sub-17" },  
            { season: "2011", team: "Bélgica Sub-17", category: "Clasif. Europeo Sub-17" }, 
            { season: "2011", team: "Bélgica Sub-16", category: "Amistosos" },   
            { season: "2010", team: "Bélgica Sub-16", category: "Amistosos" }
        ],

        stats: {
            "2025/26": {
                liga: { partidos: 15, goles_marcados: 1, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "ilic": {
        name: "Luka Ilić",
        footballName: "Ilić",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/K8bYhFN6/Ilić_PNG.webp", 
    personalData: {
        fullName: "Luka Ilić",
        nickname: "Ilić",
        birthPlace: "Niš, Nišava",
        country: "Serbia",
        nationality: "Serbia",
        height: "1,85 m",
        birthDate: "02/07/1999",
        deathDate: null // Poner null si el jugador está vivo
    },
        career: [  
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Estrella Roja de Belgrado", category: "Champ. League - Liga Serbia - Copa Serbia - Fase Previa Champ. League" },
            { season: "2023/24", team: "E.S.T.A.C. Troyes", category: "Ligue 2 - Copa de Francia" },
            { season: "2022/23", team: "F.K. T.S.C. Bačka Topola", category: "Liga Serbia - Copa Serbia" },
            { season: "2021/22", team: "E.S.T.A.C. Troyes", category: "Ligue 1" },
            { season: "2021/22", team: "E.S.T.A.C. Troyes B", category: "National 3" },
            { season: "2021/22", team: "F.C. Twente Enschede", category: "Eredivisie - KNVB Beker" },
            { season: "2020/21", team: "F.C. Twente Enschede", category: "Eredivisie - KNVB Beker" },
            { season: "2019/20", team: "N.A.C. Breda", category: "Eerste Divisie - KNVB Beker" },
            { season: "2018/19", team: "N.A.C. Breda Sub-21", category: "Beloften Eredivisie" },
            { season: "2018/19", team: "N.A.C. Breda", category: "Eredivisie - KNVB Beker" },
            { season: "2017/18", team: "F.K. Brodarac Belgrad Sub-19", category: "UEFA Youth League" },
            { season: "2017/18", team: "Estrella Roja de Belgrado", category: "Liga Serbia - Copa Serbia - Fase Previa Europa League" }
            
         ],

          nationalTeam: [
            { season: "2025", team: "Serbia", category: "Clasif. Mundial Europa" },
            { season: "2023", team: "Serbia", category: "Amistosos" },
            { season: "2020", team: "Serbia Sub-21", category: "Clasif. Europeo Sub-21" }, 
            { season: "2019", team: "Serbia Sub-21", category: "Clasif. Europeo Sub-21" },  
            { season: "2018", team: "Serbia Sub-21", category: "Clasif. Europeo Sub-21" },
            { season: "2018", team: "Serbia Sub-19", category: "Clasif. Europeo Sub-19" }, 
            { season: "2017", team: "Serbia Sub-21", category: "Clasif. Europeo Sub-21" },
            { season: "2017", team: "Serbia Sub-19", category: "Clasif. Europeo Sub-19" },  
            { season: "2016", team: "Serbia Sub-17", category: "Europeo Sub-17 - Clasif. Europeo - Amistosos" }
            
        ],

        stats: {
            "2025/26": {
                liga: { partidos: 13, goles_marcados: 1, tarjetas_amarillas: 4, tarjetas_rojas: 1 },
                copa: { partidos: 1, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 2, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "alexcardero": {
        name: "Alejandro Suárez Cardero",
        footballName: "Álex Cardero",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/dV30nntX/Alex-Cardero-PNG.webp", 
    personalData: {
        fullName: "Alejandro Suárez Cardero",
        nickname: "Álex Cardero",
        birthPlace: "Lugones, Asturias",
        country: "España",
        nationality: "Española",
        height: "1,74 m",
        birthDate: "25/08/2003",
        deathDate: null // Poner null si el jugador está vivo
    },
        career: [  
            { season: "2025/26", team: "C.D. Mirandés", category: "2ª Div. - Copa del Rey" },
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div." },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2023/24", team: "C.D. Arenteiro", category: "1ª Federación" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2022/23", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "Real Oviedo Vetusta", category: "3ª Federación" },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div." },
            { season: "2020/21", team: "Real Oviedo Vetusta", category: "2ª Div. B - 2ª Div. B Perm. 2ª Div. B" },
            { season: "2020/21", team: "Real Oviedo Sub-19", category: "División de Honor" }
            
         ],

          stats: {
            "2025/26": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2024/25": {
                liga: { partidos: 22, goles_marcados: 1, tarjetas_amarillas: 4, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 8, goles_marcados: 1, tarjetas_amarillas: 1, tarjetas_rojas: 0 }
            },  
            "2023/24": {
                liga: { partidos: 3, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2022/23": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },  
            "2021/22": {
                liga: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2020/21": {
                liga: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }  
        }
    },

    "agudin": {
        name: "Pablo Menéndez Agudín",
        footballName: "Agudín",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/R08HJS5Y/Agudin-PNG.webp", 
    personalData: {
        fullName: "Pablo Menéndez Agudín",
        nickname: "Agudín",
        birthPlace: "Avilés, Asturias",
        country: "España",
        nationality: "Española",
        height: "1,78 m",
        birthDate: "11/11/2007",
        deathDate: null // Poner null si el jugador está vivo
    },
        career: [  
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div. - Copa del Rey" },
            { season: "2025/26", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2024/25", team: "Real Oviedo Vetusta", category: "3ª Federación" },
            { season: "2024/25", team: "Real Oviedo Sub-19", category: "División de Honor - Copa del Rey Juvenil" },
            { season: "2023/24", team: "Real Oviedo Sub-19", category: "División de Honor - Copa del Rey Juvenil" },
            { season: "2022/23", team: "Real Oviedo Sub-19", category: "División de Honor" },
            { season: "2022/23", team: "Real Oviedo Sub-19 B", category: "Liga Nacional" }
            
         ],

          nationalTeam: [
            { season: "2025", team: "España Sub-19", category: "Amistosos" },
            { season: "2023", team: "España Sub-17", category: "Amistosos" },
            { season: "2023", team: "España Sub-16", category: "Amistosos" },  
            { season: "2022", team: "España Sub-16", category: "Amistosos" }
            
        ],

          stats: {
            "2025/26": {
                liga: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            } 
        }
    },

    "cheli": {
        name: "José Luis Pereda López",
        footballName: "Cheli",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/KYYs1kft/Cheli_PNG.webp", 
    personalData: {
        fullName: "José Luis Pereda López",
        nickname: "Cheli",
        birthPlace: "Avilés, Asturias",
        country: "España",
        nationality: "Española",
        height: "1,79 m",
        birthDate: "05/07/2005",
        deathDate: null // Poner null si el jugador está vivo
   },
        career: [  
            { season: "2025/26", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div." },
            { season: "2024/25", team: "Real Oviedo Vetusta", category: "3ª Federación" },
            { season: "2023/24", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2023/24", team: "Real Oviedo Sub-19", category: "División de Honor - Copa del Rey Juvenil" },
            { season: "2022/23", team: "Real Oviedo Sub-19", category: "División de Honor" },
            { season: "2021/22", team: "Real Oviedo Sub-19", category: "División de Honor" },
            { season: "2021/22", team: "Real Oviedo Sub-19 B", category: "Liga Nacional" },
            { season: "2020/21", team: "Real Oviedo Sub-19 B", category: "Liga Nacional" }
            
         ],

         stats: {
            "2025/26": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            } 
        }
    },

    "dieguito": {
        name: "Diego Menéndez Secades",
        footballName: "Dieguito",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/c44YyRL7/Diego_Menéndez_(Dieguito)_PNG.webp", 
    personalData: {
        fullName: "Diego Menéndez Secades",
        nickname: "Dieguito",
        birthPlace: "Oviedo, Asturias",
        country: "España",
        nationality: "Española",
        height: "1,90 m",
        birthDate: "27/04/2005",
        deathDate: null // Poner null si el jugador está vivo
   },
        career: [  
            { season: "2025/26", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Real Oviedo Vetusta", category: "3ª Federación" },
            { season: "2023/24", team: "Real Oviedo Sub-19", category: "División de Honor - Copa del Rey Juvenil" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2023/24", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2022/23", team: "Real Oviedo Sub-19", category: "División de Honor" },
            { season: "2021/22", team: "Real Oviedo Sub-19 B", category: "Liga Nacional" },
            { season: "2021/22", team: "Real Oviedo Sub-19", category: "División de Honor" }
            
         ],

         stats: {
            "2025/26": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2023/24": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            } 
             
        }
    },

    "diegotejon": {
        name: "Diego Tejón Naves",
        footballName: "Diego Tejón",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/mgPHhTMt/Diego_Tejón_PNG.webp", 
    personalData: {
        fullName: "Diego Tejón Naves",
        nickname: "Diego Tejón",
        birthPlace: "Oviedo, Asturias",
        country: "España",
        nationality: "Española",
        height: "1,72 m",
        birthDate: "13/01/2002",
        deathDate: null // Poner null si el jugador está vivo
   },
        career: [  
            { season: "2025/26", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div." },
            { season: "2024/25", team: "Real Oviedo Vetusta", category: "3ª Federación" },
            { season: "2023/24", team: "L'Entregu C.F.", category: "Copa Federación - 3ª Federación - 3ª Federación Promoción de Ascenso" },
            { season: "2022/23", team: "L'Entregu C.F.", category: "3ª Federación - 3ª Federación Promoción de Ascenso" },
            { season: "2022/23", team: "Sporting Atlético", category: "3ª Federación" },
            { season: "2021/22", team: "Sporting Atlético", category: "3ª Federación - 3ª Federación Promoción de Ascenso" },
            { season: "2020/21", team: "Sporting Atlético", category: "2ª Div. B - 2ª Div. B 2ª Fase Permanencia" },
            { season: "2020/21", team: "Real Sporting Sub-19", category: "División de Honor" }
            
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
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            } 
             
        }
    },

    "albertodelmoral": {
        name: "Alberto del Moral Saelices",
        footballName: "A. del Moral",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/HkvrCRhd/Alberto-del-Moral-PNG.webp", 
    personalData: {
        fullName: "Alberto del Moral Saelices",
        nickname: "Alberto del Moral",
        birthPlace: "Villacañas, Toledo",
        country: "España",
        nationality: "Española",
        height: "1,85 m",
        birthDate: "20/07/2000",
        deathDate: null // Poner null si el jugador está vivo
   },
        career: [  
            { season: "2025/26", team: "Córdoba C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Córdoba C.F.", category: "2ª Div." },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div." },
            { season: "2023/24", team: "Villarreal C.F. B", category: "2ª Div." },
            { season: "2022/23", team: "Villarreal C.F. B", category: "2ª Div." },
            { season: "2022/23", team: "Villarreal C.F.", category: "1ª Div." },
            { season: "2021/22", team: "Villarreal C.F. B", category: "1ª Federación - 1ª Federación Promoción de Ascenso" },
            { season: "2020/21", team: "Córdoba C.F. B", category: "3ª Div." },
            { season: "2020/21", team: "Córdoba C.F.", category: "2ª Div. B - Copa del Rey - 2ª Div. B 2ª Fase 1ª Div. RFEF" },
            { season: "2019/20", team: "Córdoba C.F.", category: "2ª Div. B" },
            { season: "2019/20", team: "Córdoba C.F. B", category: "3ª Div." },
            { season: "2018/19", team: "Córdoba C.F. B", category: "3ª Div." }

            
         ],

         stats: {
            "2024/25": {
                liga: { partidos: 12, goles_marcados: 1, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 7, goles_marcados: 1, tarjetas_amarillas: 1, tarjetas_rojas: 0 }
            }
             
        }
    },

    "sebasmoyano": {
        name: "Francisco Sebastián Moyano Jiménez",
        footballName: "Sebas Moyano",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/GhV54hNf/Sebas_Moyano_PNG.webp", 
    personalData: {
        fullName: "Francisco Sebastián Moyano Jiménez",
        nickname: "Sebas Moyano",
        birthPlace: "Villanueva del Duque, Córdoba",
        country: "España",
        nationality: "Española",
        height: "1,73 m",
        birthDate: "23/03/1997",
        deathDate: null // Poner null si el jugador está vivo
   },
        career: [  
            { season: "2025/26", team: "Real Zaragoza", category: "2ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2022/23", team: "C.D. Lugo", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "C.D. Lugo", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "C.D. Ebro", category: "2ª Div. B - 2ª Fase 1ª Div. RFEF" },
            { season: "2020/21", team: "C.D. Lugo", category: "2ª Div." },
            { season: "2019/20", team: "Valencia C.F. Mestalla", category: "2ª Div. B" },
            { season: "2019/20", team: "Córdoba C.F.", category: "2ª Div. B - Copa del Rey" },
            { season: "2018/19", team: "Valencia C.F. Mestalla", category: "2ª Div. B" },
            { season: "2018/19", team: "Córdoba C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "Córdoba C.F. B", category: "3ª Div." },
            { season: "2017/18", team: "Córdoba C.F. B", category: "2ª Div. B" },
            { season: "2017/18", team: "Córdoba C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2016/17", team: "Córdoba C.F. B", category: "2ª Div. B" },
            { season: "2016/17", team: "Córdoba C.F.", category: "2ª Div." },
            { season: "2015/16", team: "Córdoba C.F. B", category: "3ª Div." },
            { season: "2014/15", team: "Córdoba C.F. B", category: "2ª Div. B" },
            { season: "2013/14", team: "Córdoba C.F.", category: "2ª Div. B" },
            { season: "2013/14", team: "Córdoba C.F. B", category: "2ª Div. B" }
            
         ],

         nationalTeam: [
            { season: "2015", team: "España Sub-18", category: "Copa del Atlántico Juvenil - Amistosos" },
            { season: "2013", team: "España Sub-17", category: "Amistosos" }
            
            
        ],

         stats: {
            "2024/25": {
                liga: { partidos: 36, goles_marcados: 0, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 8, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2023/24": {
                liga: { partidos: 45, goles_marcados: 9, tarjetas_amarillas: 4, tarjetas_rojas: 0 },
                copa: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 6, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
             
        }
    },

    // DELANTEROS

    "ilyas": {
        name: "Ilyas Chaira Oihi",
        footballName: "Ilyas",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/xCTdXSFX/Ilyas_PNG_(3).webp", 
    personalData: {
        fullName: "Ilyas Chaira Oihi",
        nickname: "Ilyas",
        birthPlace: "Ripoll, Gerona",
        country: "España",
        nationality: "Española",
        height: "1,86 m",
        birthDate: "02/02/2001",
        deathDate: null // Poner null si el jugador está vivo
   },
        career: [  
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2023/24", team: "C.D. Mirandés", category: "2ª Div. - Copa del Rey" },
            { season: "2022/23", team: "San Fernando C.D.", category: "1ª Federación" },
            { season: "2021/22", team: "Som Maresme F.C.", category: "1ª Federación" },
            { season: "2020/21", team: "U.D. Ibiza", category: "2ª Div. B - Copa del Rey - 2ª Div. Prom. de Ascenso - 2ª Div. B 2ª Fase de Ascenso" },
            { season: "2019/20", team: "Girona F.C.", category: "2ª Div." }
            
         ],

         stats: {
            "2025/26": {
                liga: { partidos: 15, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 1 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 6, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2024/25": {
                liga: { partidos: 34, goles_marcados: 8, tarjetas_amarillas: 8, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            } 
             
        }
    },

    "fedevinas": {
        name: "Federico Sebastián Viñas Barboza",
        footballName: "Fede Viñas",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/mZywx37V/Fede_Viñas_PNG_(3).webp", 
    personalData: {
        fullName: "Federico Sebastián Viñas Barboza",
        nickname: "Fede Viñas",
        birthPlace: "Montevideo, Montevideo",
        country: "Uruguay",
        nationality: "Uruguaya",
        height: "1,82 m",
        birthDate: "30/06/1998",
        deathDate: null // Poner null si el jugador está vivo
   },
        career: [  
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - 2ª Div. Prom. de Ascenso" },
            { season: "2023/24", team: "Club León F.C.", category: "Liga MX Apert. - Mundial de Clubes - Liga MX Claus. - Etapas Finales Apert. MX" },
            { season: "2022/23", team: "Club León F.C.", category: "Leagues Cup" },
            { season: "2022/23", team: "C.F. América Sub-20", category: "Liga MX Sub-20 Claus." },
            { season: "2022/23", team: "C.F. América", category: "Liga MX Apert. - Liga MX Claus. - Etapas Finales Claus. MX - Etapas Finales Apert. MX" },
            { season: "2021/22", team: "C.F. América", category: "Liga MX Apert. - Liga MX Claus. - Etapas Finales Claus. MX - Etapas Finales Apert. MX" },
            { season: "2020/21", team: "C.F. América", category: "Liga MX Apert. - Liga MX Claus. - Etapas Finales Claus. MX - CONCACAF Champs. Cup - Etapas Finales Apert. MX" },
            { season: "2019/20", team: "C.F. América Sub-20", category: "Liga MX Sub-20 Apert." },
            { season: "2019/20", team: "C.F. América", category: "Liga MX Apert. - Liga MX Claus. - Etapas Finales Claus. MX - CONCACAF Champs. Cup - Etapas Finales Apert. MX" },
            { season: "2018/19", team: "C.A. Juventud", category: "Apert. Uruguay - Torneo Intermedio Uruguay" },
            { season: "2017/18", team: "C.A. Juventud", category: "2ª Div. Uruguay" }
         ],

         nationalTeam: [
            { season: "2025", team: "Uruguay", category: "Clasif. Mundial Sudamérica - Amistosos" },
            { season: "2024", team: "Uruguay", category: "Amistosos" },
            { season: "2023", team: "Uruguay", category: "Clasif. Mundial Sudamérica" },  
            { season: "2020", team: "Uruguay Sub-23", category: "Torneo Preolímpico Sudamericano" }
            
        ],

         stats: {
            "2025/26": {
                liga: { partidos: 14, goles_marcados: 1, tarjetas_amarillas: 2, tarjetas_rojas: 2 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 6, goles_marcados: 2, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2024/25": {
                liga: { partidos: 19, goles_marcados: 1, tarjetas_amarillas: 4, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            } 
             
        }
    },

    "alexfores": {
        name: "Álex Forés Mendoza",
        footballName: "Álex Forés",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/FshL02dV/Alex-Fores-PNG.webp", 
    personalData: {
        fullName: "Álex Forés Mendoza",
        nickname: "Álex Forés",
        birthPlace: "Real de Montroy, Valencia",
        country: "España",
        nationality: "Española",
        height: "1,79 m",
        birthDate: "12/04/2001",
        deathDate: null // Poner null si el jugador está vivo
   },
        career: [  
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Levante U.D.", category: "2ª Div." },
            { season: "2024/25", team: "Villarreal C.F. B", category: "1ª Federación" },
            { season: "2023/24", team: "Villarreal C.F.", category: "Copa del Rey" },
            { season: "2023/24", team: "Villarreal C.F. B", category: "2ª Div." },
            { season: "2022/23", team: "Villarreal C.F. B", category: "2ª Div." },
            { season: "2021/22", team: "Villarreal C.F. B", category: "1ª Federación" },
            { season: "2020/21", team: "Villarreal C.F. C", category: "3ª Div. - 3ª Div. 2ª Fase Prom. de Ascenso - 3ª Div. Prom. de Ascenso" },
            { season: "2020/21", team: "Villarreal C.F. B", category: "2ª Div. B" },
            { season: "2019/20", team: "Villarreal C.F. C", category: "3ª Div." },
            { season: "2018/19", team: "C.D. Roda", category: "3ª Div." }
            
         ],

         stats: {
            "2025/26": {
                liga: { partidos: 10, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
             
        }
    },

    "rondon": {
        name: "José Salomón Rondón Giménez",
        footballName: "Rondón",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/m2XZ5qk4/Rondón_PNG_(2).webp", 
    personalData: {
        fullName: "José Salomón Rondón Giménez",
        nickname: "Rondón",
        birthPlace: "Caracas, Distrito Federal",
        country: "Venezuela",
        nationality: "Venezolana",
        height: "1,89 m",
        birthDate: "16/09/1989",
        deathDate: null // Poner null si el jugador está vivo
   },
        career: [  
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div." },
            { season: "2024/25", team: "C.F. Pachuca", category: "Liga MX Apert. - Mundial de Clubes - Liga MX Claus. - Etapas Finales Claus. MX - Copa Intercontinental de la FIFA" },
            { season: "2023/24", team: "C.F. Pachuca", category: "Liga MX Claus. - Etapas Finales Claus. MX - CONCACAF Champs. Cup - Leagues Cup" },
            { season: "2022/23", team: "C.A. River Plate", category: "Copa Libertadores - Copa Argentina - Liga Profesional Argentina - Copa Liga Profesional Argentina" },
            { season: "2022/23", team: "Everton F.C.", category: "Premier League - EFL Cup" },
            { season: "2021/22", team: "Everton F.C.", category: "Premier League - FA Cup - EFL Cup" },
            { season: "2020/21", team: "CSKA de Moscú", category: "Premier League Rusia - Copa Rusa" },
            { season: "2019/20", team: "C.A. River Plate", category: "Trofeo de Campeones" },
            { season: "2019/20", team: "Dalian Pro", category: "Superliga China - Copa China FA" },
            { season: "2018/19", team: "Dalian Pro", category: "Superliga China - Copa China FA" },
            { season: "2018/19", team: "Newcastle United", category: "Premier League - FA Cup - EFL Cup" },
            { season: "2017/18", team: "West Bromwich Albion", category: "Premier League - FA Cup - EFL Cup" },
            { season: "2016/17", team: "West Bromwich Albion", category: "Premier League - FA Cup - EFL Cup" },
            { season: "2015/16", team: "West Bromwich Albion", category: "Premier League - FA Cup - EFL Cup" },
            { season: "2015/16", team: "Zenit de San Petesburgo", category: "Premier League Rusia - Supercopa Rusia" },
            { season: "2014/15", team: "Zenit de San Petesburgo", category: "Premier League Rusia - Champs. League - Europa League - Copa Rusa - Fase Previa Champs. League" },
            { season: "2013/14", team: "Zenit de San Petesburgo", category: "Premier League Rusia - Champs. League" },
            { season: "2013/14", team: "Rubin Kazan", category: "Premier League Rusia - Europa League - Fase Previa Europa League" },
            { season: "2012/13", team: "Rubin Kazan", category: "Premier League Rusia - Europa League" },
            { season: "2011/12", team: "Málaga C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2010/11", team: "Málaga C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2009/10", team: "U.D. Las Palmas", category: "2ª Div. - Copa del Rey" },
            { season: "2008/09", team: "U.D. Las Palmas", category: "2ª Div." }

         ],

         nationalTeam: [
            { season: "2025", team: "Venezuela", category: "Clasif. Mundial Sudamérica" },
            { season: "2024", team: "Venezuela", category: "Clasif. Mundial Sudamérica - Copa América - Amistosos" },
            { season: "2023", team: "Venezuela", category: "Clasif. Mundial Sudamérica - Amistosos" },  
            { season: "2022", team: "Venezuela", category: "Clasif. Mundial Sudamérica - Amistosos" },
            { season: "2020", team: "Venezuela", category: "Clasif. Mundial Sudamérica" }, 
            { season: "2019", team: "Venezuela", category: "Copa América - Amistosos" },
            { season: "2018", team: "Venezuela", category: "Amistosos" },
            { season: "2017", team: "Venezuela", category: "Clasif. Mundial Sudamérica - Amistosos" }, 
            { season: "2016", team: "Venezuela", category: "Clasif. Mundial Sudamérica - Copa América - Amistosos" },
            { season: "2015", team: "Venezuela", category: "Clasif. Mundial Sudamérica - Copa América - Amistosos" },
            { season: "2014", team: "Venezuela", category: "Amistosos" },
            { season: "2013", team: "Venezuela", category: "Clasif. Mundial Sudamérica - Amistosos" },
            { season: "2012", team: "Venezuela", category: "Clasif. Mundial Sudamérica - Amistosos" }, 
            { season: "2011", team: "Venezuela", category: "Clasif. Mundial Sudamérica - Copa América - Amistosos" },
            { season: "2010", team: "Venezuela", category: "Amistosos" },
            { season: "2009", team: "Venezuela", category: "Clasif. Mundial Sudamérica - Amistosos" },
            { season: "2009", team: "Venezuela Sub-20", category: "Mundial Sub-20 - Sudamericano Sub-20" },
            { season: "2008", team: "Venezuela", category: "Amistosos" }
             
        ],

         
         stats: {
            "2025/26": {
                liga: { partidos: 16, goles_marcados: 2, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
             
        }
    },

    // ENTRENADORES
    "paunovic2025": {
        name: "Veljko Paunović",
        footballName: "Paunović",
        position: "Entrenador",
        role: "entrenador",
        number: null,
        image: "https://i.ibb.co/tpdPQpbs/Paunovi-3-entrenador.webp",
        personalData: {
            fullName: "Veljko Paunović",
            nickname: "Paunović",
            birthPlace: "Strumica, Región del Sudeste",
            country: "Yugoslavia", 
            nationality: "Serbia, Española",
            height: "1,84 m",
            birthDate: "21/08/1977",
            deathDate: null // Poner null si el jugador está vivo
        },
        career: [
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div." },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - 2ª Div. Prom. de Ascenso" },
            { season: "2024/25", team: "Club Trigres UANL", category: "Liga MX Claus. - Liga MX Apert. - Etapas Finales Apert. MX - CONCACAF Chapmps. Cup" },
            { season: "2023/24", team: "C.D. Chivas Guadalajara", category: "Liga MX Apert. - Etapas Finales Apert. MX" },
            { season: "2023/24", team: "Club Trigres UANL", category: "Supercopa Liga MX - Leagues Cup" },
            { season: "2022/23", team: "C.D. Chivas Guadalajara", category: "Liga MX Claus. - Etapas Finales Claus. MX - Leagues Cup" },
            { season: "2021/22", team: "Reading F.C.", category: "Championship - FA Cup - EFL Cup" },
            { season: "2020/21", team: "Reading F.C.", category: "Championship - FA Cup - EFL Cup" },
            { season: "2018/19", team: "Chicago Fire F.C.", category: "MLS Liga USA - US Open Cup - Leagues Cup" },
            { season: "2017/18", team: "Chicago Fire F.C.", category: "MLS Liga USA - US Open Cup" },
            { season: "2016/17", team: "Chicago Fire F.C.", category: "MLS Liga USA - US Open Cup" },
            { season: "2015/16", team: "Chicago Fire F.C.", category: "MLS Liga USA - US Open Cup" }
            
        ],

        nationalTeam: [
            { season: "2025", team: "Serbia", category: "Clasif. Mundial Europa" },
            { season: "2015", team: "Serbia Sub-20", category: "Mundial Sub-20 - Amistosos" },
            { season: "2015", team: "Serbia Sub-19", category: "Europeo Sub-19" },  
            { season: "2013", team: "Serbia Sub-18", category: "Amistosos" }
            
             
        ],

        stats: {
            
            "2025/26": {
                liga: { partidos_entrenados: 8, victorias: 2, empates: 0, derrotas: 6 },
                copa: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 },
                uefa: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 },
                amistosos: { partidos_entrenados: 6, victorias: 2, empates: 3, derrotas: 1 }
            },
            "2024/25": {
                liga: { partidos_entrenados: 14, victorias: 9, empates: 4, derrotas: 1 },
                copa: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 },
                uefa: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 },
                amistosos: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 }
            }
        }
    },

    "luiscarrion": {
        name: "Luis Miguel Carrión Delgado",
        footballName: "Luis Carrión",
        position: "Entrenador",
        role: "entrenador",
        number: null,
        image: "https://i.ibb.co/pBYwXRZL/Luis-Carri-n-entrenador-PNG.webp",
        personalData: {
            fullName: "Luis Miguel Carrión Delgado",
            nickname: "Luis Carrión",
            birthPlace: "Barcelona, Barcelona",
            country: "España", 
            nationality: "Española",
            height: "1,76 m",
            birthDate: "07/02/1979",
            deathDate: null // Poner null si el jugador está vivo
        },
        career: [
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div. - Copa del Rey" },
            { season: "2024/25", team: "U.D. Las Palmas", category: "1ª Div." },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2022/23", team: "F.C. Cartagena", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "F.C. Cartagena", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "F.C. Cartagena", category: "2ª Div." },
            { season: "2019/20", team: "C.D. Numancia", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "U.D. Melilla", category: "2ª Div. B - Copa del Rey - 2ª Div. B Prom. de Ascenso" },
            { season: "2017/18", team: "Córdoba C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2016/17", team: "Córdoba C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2016/17", team: "Córdoba C.F. B", category: "2ª Div. B" },
            { season: "2015/16", team: "Córdoba C.F. B", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2014/15", team: "Córdoba C.F. B", category: "2ª Div. B" },
            { season: "2013/14", team: "Córdoba C.F.", category: "2ª Div." }
            
        ],

        stats: {
            
            "2025/26": {
                liga: { partidos_entrenados: 8, victorias: 0, empates: 4, derrotas: 4 },
                copa: { partidos_entrenados: 1, victorias: 0, empates: 0, derrotas: 1 },
                uefa: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 },
                amistosos: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 }
            },
            "2023/24": {
                liga: { partidos_entrenados: 40, victorias: 19, empates: 11, derrotas: 10 },
                copa: { partidos_entrenados: 2, victorias: 1, empates: 0, derrotas: 1 },
                uefa: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 },
                amistosos: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 }
            }
        }
    },

    "almada": {
        name: "Jorge Guillermo Almada Alves",
        footballName: "Almada",
        position: "Entrenador",
        role: "entrenador",
        number: null,
        image: "https://i.postimg.cc/dDPbscw7/Almada-(entrenador)-PNG.webp",
        personalData: {
            fullName: "Jorge Guillermo Almada Alves",
            nickname: "Almada",
            birthPlace: "Montevideo, Montevideo",
            country: "Uruguay", 
            nationality: "Uruguaya",
            height: "1,83 m",
            birthDate: "18/06/1969",
            deathDate: null // Poner null si el jugador está vivo
        },
        career: [
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div." },
            { season: "2025/26", team: "Real Valladolid C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2024/25", team: "C.F. Pachuca", category: "Liga MX Claus. - Liga MX Apert. - Etapas Finales Claus. MX - Copa Intercontinental de la FIFA" },
            { season: "2023/24", team: "C.F. Pachuca", category: "Liga MX Claus. - Liga MX Apert. - Etapas Finales Claus. MX - CONCACAF Champs. Cup - Leagues Cup" },
            { season: "2022/23", team: "C.F. Pachuca", category: "Liga MX Claus. - Liga MX Apert. - Etapas Finales Apert. MX - Etapas Finales Claus. MX - Campeón de Campeones Méjico - CONCACAF Champs. Cup - Leagues Cup" },
            { season: "2021/22", team: "Club Santos Laguna", category: "Liga MX Apert. - Etapas Finales Apert. MX" },
            { season: "2021/22", team: "C.F. Pachuca", category: "Liga MX Claus. - Etapas Finales Claus. MX" },
            { season: "2020/21", team: "Club Santos Laguna", category: "Liga MX Claus. - Liga MX Apert. - Etapas Finales Claus. MX - Etapas Finales Apert. MX - Leagues Cup" },
            { season: "2019/20", team: "Club Santos Laguna", category: "Liga MX Claus. - Liga MX Apert. - Etapas Finales Apert. MX - Copa MX" },
            { season: "2018/19", team: "Barcelona S.C.", category: "LigaPro Ecuador - Fase Previa Copa Libertadores" },
            { season: "2018/19", team: "Club Santos Laguna", category: "Liga MX Claus." },
            { season: "2017/18", team: "Barcelona S.C.", category: "Serie A 1ª Etapa - Serie A 2ª Etapa - Conmebol Sudamericana" },
            { season: "2016/17", team: "Barcelona S.C.", category: "Serie A 2ª Etapa - Serie A 1ª Etapa - Copa Libertadores" },
            { season: "2015/16", team: "Barcelona S.C.", category: "Serie A 2ª Etapa - Serie A 1ª Etapa - Conmebol Sudamericana" },
            { season: "2014/15", team: "Barcelona S.C.", category: "Serie A 1ª Etapa - Serie A 2ª Etapa" },
            { season: "2014/15", team: "C.A. River Plate", category: "Apert. Uruguay - Claus. Uruguay" },
            { season: "2013/14", team: "C.A. River Plate", category: "Apert. Uruguay - Claus. Uruguay - Conmebol Sudamericana" },
            { season: "2012/13", team: "C.A. River Plate", category: "Apert. Uruguay - Claus. Uruguay - Conmebol Sudamericana" },
            { season: "2011/12", team: "C.A. River Plate", category: "Apert. Uruguay - Claus. Uruguay" },
            { season: "2010/11", team: "C.A. River Plate", category: "Claus. Uruguay" },
            { season: "2010/11", team: "Tacuarembó F.C.", category: "Apert. Uruguay" },
            { season: "2009/10", team: "Tacuarembó F.C.", category: "Apert. Uruguay - Claus. Uruguay" },
            { season: "2008/09", team: "Tacuarembó F.C.", category: "Claus. Uruguay" }
            
        ],

        stats: {
            
            "2025/26": {
                liga: { partidos_entrenados: 1, victorias: 0, empates: 1, derrotas: 0 },
                copa: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 },
                uefa: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 },
                amistosos: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 }
            }
        }
    }

    
    
};


