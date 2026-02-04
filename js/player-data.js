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
            { season: "2017/18", team: "Granada C.F. B", category: "2ª Div. B" },
            { season: "2016/17", team: "Club At. Malagueño", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2016/17", team: "Málaga C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2015/16", team: "Málaga C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2015/16", team: "Club At. Malagueño", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2014/15", team: "Club At. Malagueño", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2013/14", team: "Málaga C.F.", category: "1ª Div." },
            { season: "2013/14", team: "At. Malagueño", category: "3ª Div. - 3ª Div. Prom. de Ascenso" }
        ],
        stats: {
            "2025/26": {
                liga: { partidos: 22, goles_encajados: 34, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
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
            { season: "2024/25", team: "Club At. de Madrid", category: "1ª Div." },
            { season: "2023/24", team: "Club At. de Madrid", category: "1ª Div. - Champs. League - Copa del Rey" },
            { season: "2023/24", team: "F.C. Rapid de Bucarest", category: "Liga Rumana - Copa Rumanía" },
            { season: "2022/23", team: "F.C. Rapid de Bucarest", category: "Liga Rumana - Copa Rumanía" },
            { season: "2021/22", team: "F.C. Rapid de Bucarest", category: "Liga Rumana - Copa Rumanía" },
            { season: "2020/21", team: "F.C. Rapid de Bucarest", category: "2ª Rumanía" },
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

    "leoroman": {
        name: "Leonardo Román Riquelme",
        footballName: "Leo Román",
        position: "Portero",
        role: "portero",
        number: null,
        image: "https://i.postimg.cc/mDmMpjF5/Leo-Rom-n-PNG.webp", 
    personalData: {
        fullName: "Leonardo Román Riquelme",
        nickname: "Leo Román",
        birthPlace: "Ibiza, Islas Baleares",
        country: "España",
        nationality: "Española",
        height: "1,89 m",
        birthDate: "06/07/2000",
        deathDate: null // Poner null si el jugador está vivo
    },
        career: [  
            { season: "2025/26", team: "R.C.D. Mallorca", category: "1ª Div. - Copa del Rey" },
            { season: "2024/25", team: "R.C.D. Mallorca", category: "1ª Div. - Copa del Rey - Supercopa de España" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2022/23", team: "R.C.D. Mallorca B", category: "2ª Federación" },
            { season: "2022/23", team: "R.C.D. Mallorca", category: "1ª Div. - Copa del Rey" },
            { season: "2021/22", team: "R.C.D. Mallorca B", category: "3ª Federación" },
            { season: "2021/22", team: "R.C.D. Mallorca", category: "1ª Div. - Copa del Rey" },
            { season: "2020/21", team: "R.C.D. Mallorca B", category: "3ª Div. - 3ª Div. 2ª Fase 2ª Fase 2ª Div. B - Prom. de Ascenso a 2ª Div. B" },
            { season: "2020/21", team: "R.C.D. Mallorca", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "S.C.R. Penya Deportiva", category: "2ª Div. B - Copa del Rey - 2ª Div. B Prom. de Ascenso" },
            { season: "2018/19", team: "C.F. Sant Rafel", category: "3ª Div." },
            { season: "2017/18", team: "S.C.R. Penya Deportiva", category: "2ª Div. B" }
            
        ],

        nationalTeam: [
            { season: "2023", team: "España Sub-21", category: "Europeo Sub-21 - Amistosos" },
            { season: "2022", team: "España Sub-21", category: "Amistosos" }
            
            
        ],

        stats: {
            "2023/24": {
                liga: { partidos: 46, goles_encajados: 41, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_encajados: 6, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "marco": {
        name: "Marco Suárez Coronas Lastra",
        footballName: "Marco",
        position: "Portero",
        role: "portero",
        number: null,
        image: "https://i.postimg.cc/yxJJQHKD/Marco-PNG.webp", 
    personalData: {
        fullName: "Marco Suárez Coronas Lastra",
        nickname: "Marco",
        birthPlace: "Piedras Blancas, Asturias",
        country: "España",
        nationality: "Española",
        height: "1,87 m",
        birthDate: "26/02/2004",
        deathDate: null // Poner null si el jugador está vivo
    },
        career: [  
            { season: "2025/26", team: "Unionistas de Salamanca C.F.", category: "Copa Federación Fase Autonómica - 1ª Federación" },
            { season: "2024/25", team: "Unionistas de Salamanca C.F.", category: "Copa del Rey - 1ª Federación" },
            { season: "2023/24", team: "Real Oviedo", category: "Copa del Rey" },
            { season: "2023/24", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div." },
            { season: "2022/23", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2021/22", team: "Real Oviedo Vetusta", category: "3ª Federación" },
            { season: "2021/22", team: "Real Oviedo Sub-19", category: "División de Honor" },
            { season: "2020/21", team: "Real Oviedo Sub-19", category: "División de Honor" },
            { season: "2020/21", team: "Real Oviedo Sub-19 B", category: "Liga Nacional" }
            
            
        ],

        
        stats: {
            "2023/24": {
                liga: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2022/23": {
                liga: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "victoregboh": {
        name: "Victor Chigozie Egboh",
        footballName: "Victor Egboh",
        position: "Portero",
        role: "portero",
        number: null,
        image: "https://i.postimg.cc/tRh7g2TQ/Victor-Egboh-PNG.webp", 
    personalData: {
        fullName: "Victor Chigozie Egboh",
        nickname: "Victor Egboh",
        birthPlace: "Lagos, Lagos",
        country: "Nigeria",
        nationality: "Nigeriana",
        height: "1,85 m",
        birthDate: "14/10/2002",
        deathDate: null // Poner null si el jugador está vivo
    },
        career: [  
            { season: "2025/26", team: "C.D. Mosconia", category: "Copa Federación Fase Autonómica - 3ª Federación" },
            { season: "2024/25", team: "Real Oviedo Vetusta", category: "3ª Federación" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div." },
            { season: "2023/24", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2022/23", team: "S.D. Lenense Proinastur", category: "1ª RFFPA" }
            
            
        ],

        stats: {
            "2023/24": {
                liga: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "tomeunadal": {
        name: "Bartolomé Nadal Mesquida",
        footballName: "Tomeu Nadal",
        position: "Portero",
        role: "portero",
        number: null,
        image: "https://i.postimg.cc/FK81Y63m/Tomeu-Nadal-PNG.webp",
        personalData: {
            fullName: "Bartolomé Nadal Mesquida",
            nickname: "Tomeu Nadal",
            birthPlace: "Manacor, Islas Baleares",
            country: "España",
            nationality: "Española",
            height: "1,88 m",
            birthDate: "08/02/1989",
            deathDate: null
        },
        career: [
            { season: "2024/25", team: "Burgos C.F.", category: "2ª Div." },
            { season: "2024/25", team: "C.D. Tenerife", category: "2ª Div. - Copa del Rey" },
            { season: "2023/24", team: "C.D. Tenerife", category: "2ª Div. - Copa del Rey" },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Albacete Balompié", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Albacete Balompié", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "Albacete Balompié", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2017/18", team: "Albacete Balompié", category: "2ª Div. - Copa del Rey" },
            { season: "2016/17", team: "Albacete Balompié", category: "2ª Div. B - Copa del Rey - 2ª Div. B Prom. de Ascenso" },
            { season: "2015/16", team: "R.C.D. Mallorca", category: "2ª Div." },
            { season: "2015/16", team: "Gimnàstic de Tarragona", category: "2ª Div. - Copa del Rey" },
            { season: "2014/15", team: "Gimnàstic de Tarragona", category: "2ª Div. B - Copa del Rey - 2ª Div. B Prom. de Ascenso" },
            { season: "2013/14", team: "Gimnàstic de Tarragona", category: "2ª Div. B - Copa del Rey" },
            { season: "2012/13", team: "Getafe C.F. B", category: "2ª Div. B" },
            { season: "2011/12", team: "Getafe C.F.", category: "1ª Div." },
            { season: "2011/12", team: "Getafe C.F. B", category: "2ª Div. B" },
            { season: "2010/11", team: "R.C.D. Mallorca", category: "1ª Div. - Copa del Rey" },
            { season: "2010/11", team: "R.C.D. Mallorca B", category: "2ª Div. B" },
            { season: "2009/10", team: "R.C.D. Mallorca B", category: "2ª Div. B" },
            { season: "2008/09", team: "R.C.D. Mallorca", category: "1ª Div. - Copa del Rey" }
        ],
        nationalTeam: [
            { season: "2009", team: "España Sub-20", category: "Amistosos" }
        ],
        stats: {
            "2022/23": {
                liga: { partidos: 17, goles_encajados: 17, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 2, goles_encajados: 2, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_encajados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2021/22": {
                liga: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_encajados: 2, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "femenias": {
        name: "Joan Femenías del Salto",
        footballName: "Femenías",
        position: "Portero",
        role: "portero",
        number: null,
        image: "https://i.postimg.cc/pXXcdcZp/Femen-as-PNG.webp",
        personalData: {
            fullName: "Joan Femenías del Salto",
            nickname: "Femenías",
            birthPlace: "Manacor, Islas Baleares",
            country: "España",
            nationality: "Española",
            height: "1,89 m",
            birthDate: "19/08/1996",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "F.C. Penafiel", category: "Segunda Liga - Taça de Portugal" },
            { season: "2024/25", team: "Real Zaragoza", category: "2ª Div. - Copa del Rey" },
            { season: "2023/24", team: "Levante U.D.", category: "2ª Div. - Copa del Rey" },
            { season: "2022/23", team: "Levante U.D.", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "C.F. Fuenlabrada", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "Villarreal C.F. B", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2017/18", team: "Villarreal C.F. B", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2016/17", team: "Villarreal C.F. B", category: "2ª Div. B" },
            { season: "2015/16", team: "Villarreal C.F. C", category: "3ª Div." },
            { season: "2014/15", team: "Villarreal C.F. B", category: "2ª Div. B" },
            { season: "2012/13", team: "C.E. Constància", category: "2ª Div. B" }
        ],
        stats: {
            "2021/22": {
                liga: { partidos: 42, goles_encajados: 41, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_encajados: 4, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2020/21": {
                liga: { partidos: 40, goles_encajados: 41, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_encajados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_encajados: 4, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "bertohorreo": {
        name: "Alberto Hórreo Taveras",
        footballName: "Berto Hórreo",
        position: "Portero",
        role: "portero",
        number: null,
        image: "https://i.postimg.cc/GtkRh7JM/Berto-H-rreo-PNG.webp",
        personalData: {
            fullName: "Alberto Hórreo Taveras",
            nickname: "Berto Hórreo",
            birthPlace: "Gijón, Asturias",
            country: "España",
            nationality: "Española, Dominicana",
            height: "1,91 m",
            birthDate: "24/06/2000",
            deathDate: null
        },
        career: [
            { season: "2024/25", team: "U.D. Llanera", category: "2ª Federación - Copa del Rey" },
            { season: "2023/24", team: "S.D. Huesca B", category: "3ª Federación" },
            { season: "2022/23", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div." },
            { season: "2021/22", team: "Real Oviedo Vetusta", category: "3ª Federación" },
            { season: "2020/21", team: "Real Oviedo B", category: "2ª Div. B - 2ª Fase Permanencia 2ª RFEF" },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2017/18", team: "C.D. T.S.K. Roces", category: "3ª Div." }
        ],
        stats: {
            "2021/22": {
                liga: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2020/21": {
                liga: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "brazao": {
        name: "Gabriel Nascimento Resende Brazão",
        footballName: "Brazão",
        position: "Portero",
        role: "portero",
        number: null,
        image: "https://i.postimg.cc/CLs032K5/Braz-o-PNG.webp",
        personalData: {
            fullName: "Gabriel Nascimento Resende Brazão",
            nickname: "Brazão",
            birthPlace: "Uberlândia, Minas Gerais",
            country: "Brasil",
            nationality: "Brasileña",
            height: "1,92 m",
            birthDate: "05/10/2000",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Santos F.C.", category: "Paulista A1" },
            { season: "2024/25", team: "Santos F.C.", category: "Serie A Betano - Paulista A1 - Copa Brasil" },
            { season: "2023/24", team: "Santos F.C.", category: "Paulista A1 - Serie B Brasil" },
            { season: "2023/24", team: "Ternana Calcio", category: "Serie B - Coppa Italia" },
            { season: "2022/23", team: "Ars et Labor Ferrara SPAL", category: "Serie B" },
            { season: "2022/23", team: "Inter de Milán", category: "Serie A - Supercopa Italia - Coppa Italia" },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Albacete Balompié", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "Parma Calcio 1913", category: "Serie A" },
            { season: "2017/18", team: "Cruzeiro E.C. Sub-20", category: "Copa Libertadores Sub-20 - Copa São Paulo Junior " },
            { season: "2016/17", team: "Cruzeiro E.C. Sub-20", category: "Copa São Paulo Junior  - Supercopa de Brasil Sub-20" }
        ],
        nationalTeam: [
            { season: "2021", team: "Brasil Sub-23", category: "Amistosos" },
            { season: "2020", team: "Brasil Sub-23", category: "Amistosos" },
            { season: "2019", team: "Brasil Sub-20", category: "Sudamericano Sub-20" },
            { season: "2018", team: "Brasil", category: "Amistosos" },
            { season: "2018", team: "Brasil Sub-20", category: "Amistosos" },
            { season: "2017", team: "Brasil Sub-17", category: "Mundial Sub-17 - Sudamericano Sub-17 - Amistosos" },
            { season: "2016", team: "Brasil Sub-17", category: "Amistosos" },
            { season: "2015", team: "Brasil Sub-15", category: "Amistosos" }
        ],
        stats: {
            "2020/21": {
                liga: { partidos: 2, goles_encajados: 5, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_encajados: 2, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 1, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "alfonsoherrero": {
        name: "Alfonso Herrero Peinador",
        footballName: "Alfonso Herrero",
        position: "Portero",
        role: "portero",
        number: null,
        image: "https://i.postimg.cc/T2WY4Qm5/Alfonso-Herrero-PNG.webp",
        personalData: {
            fullName: "Alfonso Herrero Peinador",
            nickname: "Alfonso Herrero",
            birthPlace: "Toledo, Toledo",
            country: "España",
            nationality: "Española",
            height: "1,83 m",
            birthDate: "21/04/1994",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Málaga C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Málaga C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2023/24", team: "Málaga C.F.", category: "1ª Federación - 1ª Federación Prom. de Ascenso - Copa del Rey" },
            { season: "2022/23", team: "C.D. Mirandés", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "Burgos C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Marbella F.C.", category: "2ª Div. B - 2ª Div. B 2ª Fase de Permanencia 2ª RFEF - Copa del Rey" },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "Real Oviedo", category: "2ª Div." },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2016/17", team: "Real Oviedo", category: "Copa del Rey" },
            { season: "2016/17", team: "Real Oviedo B", category: "3ª Div." },
            { season: "2015/16", team: "Real Madrid Castilla", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2014/15", team: "Real Madrid Castilla", category: "2ª Div. B" },
            { season: "2013/14", team: "Real Madrid C.F. C", category: "2ª Div. B" }
        ],
        nationalTeam: [
            { season: "2013", team: "España Sub-19", category: "Europeo Sub-19 - Clasif. Europeo Sub-19 - Amistosos" },
            { season: "2011", team: "España Sub-17", category: "Clasif. Europeo Sub-17" },
            { season: "2010", team: "España Sub-17", category: "Europeo Sub-17 - Clasif. Europeo Sub-17 - Amistosos" },
            { season: "2009", team: "España Sub-17", category: "Clasif. Europeo Sub-17 - Amistosos" },
            { season: "2009", team: "España Sub-16", category: "Amistosos" }
        ],
        stats: {
            "2019/20": {
                liga: { partidos: 3, goles_encajados: 6, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_encajados: 3, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_encajados: 9, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2018/19": {
                liga: { partidos: 13, goles_encajados: 19, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_encajados: 3, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2017/18": {
                liga: { partidos: 27, goles_encajados: 27, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_encajados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_encajados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2016/17": {
                liga: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "champagne": {
        name: "Nereo Champagne",
        footballName: "Champagne",
        position: "Portero",
        role: "portero",
        number: null,
        image: "https://i.postimg.cc/L5S7vHLT/Champagne-PNG.webp",
        personalData: {
            fullName: "Nereo Champagne",
            nickname: "Champagne",
            birthPlace: "Salto, Buenos Aires",
            country: "Argentina",
            nationality: "Argentina, Italiana",
            height: "1,88 m",
            birthDate: "20/01/1985",
            deathDate: null
        },
        career: [
            { season: "2023/24", team: "C.A.  Sarmiento", category: "Liga Profesional Argentina" },
            { season: "2023/24", team: "Club Almagro", category: "1ª Nacional" },
            { season: "2022/23", team: "Club Olimpo", category: "Torneo Federal A" },
            { season: "2021/22", team: "C.F. Rayo Majadahonda", category: "1ª Federación - 1ª Federación Prom. de Ascenso - Copa del Rey" },
            { season: "2020/21", team: "Real Murcia C.F.", category: "2ª Div. B - 2ª Div. B 2ª Fase 1ª Div. RFEF" },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2017/18", team: "C.D. Leganés", category: "1ª Div. - Copa del Rey" },
            { season: "2016/17", team: "C.D. Leganés", category: "1ª Div." },
            { season: "2016/17", team: "Club Olimpo", category: "Liga Profesional Argentina" },
            { season: "2015/16", team: "Club Olimpo", category: "Liga Profesional Argentina - Copa Argentina" },
            { season: "2014/15", team: "Club Olimpo", category: "Liga Profesional Argentina - Prom. Copa Sudamericana - Copa Argentina" },
            { season: "2013/14", team: "Club Olimpo", category: "Apert. Argentina - Claus. Argentina - Copa Argentina - Torneo de Transición" },
            { season: "2012/13", team: "Club Olimpo", category: "1ª Nacional - Copa Argentina" },
            { season: "2011/12", team: "C.A. San Lorenzo de Almagro", category: "Apert. Argentina - Claus. Argentina - Copa Argentina" },
            { season: "2010/11", team: "Club Ferro Carril Oeste", category: "1ª Nacional" },
            { season: "2007/08", team: "C.A. San Lorenzo de Almagro", category: "Apert. Argentina - Claus. Argentina" },
            { season: "2005/06", team: "C.A. San Lorenzo de Almagro", category: "Apert. Argentina" }
        ],
        nationalTeam: [
            { season: "2005", team: "Argentina Sub-20", category: "Mundial Sub-20" }
        ],
        stats: {
            "2019/20": {
                liga: { partidos: 19, goles_encajados: 27, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_encajados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2018/19": {
                liga: { partidos: 28, goles_encajados: 29, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_encajados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_encajados: 3, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "lunin": {
        name: "Andriy Oleksiyovych Lunin",
        footballName: "Lunin",
        position: "Portero",
        role: "portero",
        number: null,
        image: "https://i.postimg.cc/qv2KH43n/Lunin-PNG.webp",
        personalData: {
            fullName: "Andriy Oleksiyovych Lunin",
            nickname: "Lunin",
            birthPlace: "Krasnogrado, Jarkov",
            country: "Ucrania",
            nationality: "Ucraniana",
            height: "1,91 m",
            birthDate: "11/02/1999",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Real Madrid C.F.", category: "1ª Div. - Champs. League - Copa del Rey - Supercopa de España" },
            { season: "2024/25", team: "Real Madrid C.F.", category: "1ª Div. - Champs. League - Copa del Rey - Supercopa de España - Supercopa de Europa - Mundial de Clubes" },
            { season: "2023/24", team: "Real Madrid C.F.", category: "1ª Div. - Champs. League - Copa del Rey - Supercopa de España" },
            { season: "2022/23", team: "Real Madrid C.F.", category: "1ª Div. - Champs. League - Copa del Rey - Supercopa de España - Supercopa de Europa - Mundial de Clubes" },
            { season: "2021/22", team: "Real Madrid C.F.", category: "1ª Div. - Champs. League - Copa del Rey - Supercopa de España" },
            { season: "2020/21", team: "Real Madrid C.F.", category: "1ª Div. - Champs. League - Copa del Rey - Supercopa de España" },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div." },
            { season: "2019/20", team: "Real Valladolid C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2018/19", team: "C.D. Leganés", category: "1ª Div. - Copa del Rey" },
            { season: "2018/19", team: "Real Madrid C.F.", category: "Supercopa de Europa" },
            { season: "2017/18", team: "F.C. Zoryá Lugansk", category: "Liga Ucraniana - Europa League - Copa Ucraniana" },
            { season: "2016/17", team: "F.C. Dnipro Dnipropetrovsk", category: "Liga Ucraniana - Copa Ucraniana" }
        ],
        nationalTeam: [
            { season: "2025", team: "Ucrania", category: "Liga de las Naciones de la UEFA - Amistosos" },
            { season: "2024", team: "Ucrania", category: "Clasif. Eurocopa - Eurocopa - Liga de las Naciones de la UEFA - Amistosos" },
            { season: "2023", team: "Ucrania", category: "Clasif. Eurocopa - Amistosos" },
            { season: "2022", team: "Ucrania", category: "Liga de las Naciones de la UEFA" },
            { season: "2021", team: "Ucrania", category: "Clasif. Mundial Europa" },
            { season: "2020", team: "Ucrania", category: "Liga de las Naciones de la UEFA - Amistosos" },
            { season: "2019", team: "Ucrania Sub-20", category: "Mundial Sub-20" },
            { season: "2019", team: "Ucrania", category: "Clasif. Eurocopa - Amistosos" },
            { season: "2018", team: "Ucrania Sub-21", category: "Clasif. Europeo Sub-21" },
            { season: "2018", team: "Ucrania", category: "Liga de las Naciones de la UEFA - Amistosos" },
            { season: "2017", team: "Ucrania Sub-21", category: "Clasif. Europeo Sub-21" },
            { season: "2017", team: "Ucrania", category: "Clasif. Mundial Europa - Amistosos" },
            { season: "2017", team: "Ucrania Sub-19", category: "Clasif. Europeo Sub-19" },
            { season: "2016", team: "Ucrania Sub-18", category: "Amistosos" },
            { season: "2016", team: "Ucrania Sub-17", category: "Europeo Sub-17 - Clasif. Europeo Sub-17" },
            { season: "2015", team: "Ucrania Sub-17", category: "Clasif. Europeo Sub-17" },
            { season: "2015", team: "Ucrania Sub-16", category: "Amistosos" }
        ],
        stats: {
            "2019/20": {
                liga: { partidos: 20, goles_encajados: 20, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "gorkagiralt": {
        name: "Gorka Giralt Amotxategi",
        footballName: "Gorka Giralt",
        position: "Portero",
        role: "portero",
        number: null,
        image: "https://i.postimg.cc/7Y6X4GHz/Gorka-Giralt-PNG.webp",
        personalData: {
            fullName: "Gorka Giralt Amotxategi",
            nickname: "Gorka Giralt",
            birthPlace: "San Sebastián, Guipúzcoa",
            country: "España",
            nationality: "Española",
            height: "1,90 m",
            birthDate: "18/09/1995",
            deathDate: null
        },
        career: [
            { season: "2021/22", team: "C.F. Rayo Majadahonda", category: "1ª Feferación - Copa del Rey" },
            { season: "2020/21", team: "C.D. Burgos Promesas 2000", category: "3ª Div. - 3ª Div. Prom. de Ascenso - Prom. de Ascenso a 2ª Div. RFEF" },
            { season: "2019/20", team: "C.D. Madrilejos", category: "3ª Div." },
            { season: "2018/19", team: "Real Oviedo", category: "Copa del Rey" },
            { season: "2018/19", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2017/18", team: "Real Oviedo B", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2016/17", team: "Real Sociedad de Fútbol B", category: "2ª Div. B" },
            { season: "2015/16", team: "Club Portugalete", category: "2ª Div. B" },
            { season: "2015/16", team: "Real Sociedad de Fútbol B", category: "2ª Div. B" },
            { season: "2014/15", team: "Real Sociedad de Fútbol B", category: "2ª Div. B" },
            { season: "2012/13", team: "Real Sociedad de Fútbol B", category: "2ª Div. B" }
        ],
        stats: {
            "2018/19": {
                liga: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2017/18": {
                liga: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "juancarlos": {
        name: "Juan Carlos Sánchez Martínez",
        footballName: "Juan Carlos",
        position: "Portero",
        role: "portero",
        number: null,
        image: "https://i.postimg.cc/d1sr9pDC/Juan-Carlos-PNG.webp",
        personalData: {
            fullName: "Juan Carlos Sánchez Martínez",
            nickname: "Juan Carlos",
            birthPlace: "Calviá, Islas Baleares",
            country: "España",
            nationality: "Española",
            height: "1,82 m",
            birthDate: "27/07/1987",
            deathDate: null
        },
        career: [
            { season: "2021/22", team: "U.D. Poblense", category: "3ª Federación - 3ª Federación Prom. de Ascenso - Copa Federación Fase Autonómica" },
            { season: "2020/21", team: "C.D. Atlético Baleares", category: "2ª Div. B - Copa del Rey" },
            { season: "2019/20", team: "C.D. Numancia", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "C.D. Numancia", category: "2ª Div." },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div." },
            { season: "2016/17", team: "Real Oviedo", category: "2ª Div." },
            { season: "2015/16", team: "Albacete Balompié", category: "2ª Div." },
            { season: "2014/15", team: "Villarreal C.F.", category: "1ª Div. - Europa League - Copa del Rey - Fase Previa Europa League" },
            { season: "2013/14", team: "Villarreal C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2012/13", team: "Villarreal C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2011/12", team: "Elche C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2010/11", team: "Villarreal C.F.", category: "1ª Div. - Europa League - Copa del Rey - Fase Previa Europa League" },
            { season: "2009/10", team: "Villarreal C.F. B", category: "2ª Div." },
            { season: "2008/09", team: "Villarreal C.F. B", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2008/09", team: "Villarreal C.F.", category: "1ª Div." },
            { season: "2007/08", team: "Villarreal C.F.", category: "1ª Div." },
            { season: "2007/08", team: "Villarreal C.F. B", category: "2ª Div. B" },
            { season: "2005/06", team: "Villarreal C.F.", category: "1ª Div. - Champs. League" },
            { season: "2004/05", team: "Villarreal C.F.", category: "1ª Div." }
        ],
        stats: {
            "2017/18": {
                liga: { partidos: 15, goles_encajados: 21, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_encajados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_encajados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2016/17": {
                liga: { partidos: 42, goles_encajados: 47, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
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
            { season: "2022/23", team: "Olympique de Marsella", category: "Ligue 1 - Champs. League - Copa de Francia" },
            { season: "2021/22", team: "Manchester United", category: "Premier League - Champs. League - EFL Cup" },
            { season: "2020/21", team: "Manchester United", category: "Premier League - Champs. League - Europa League - FA Cup - EFL Cup" },
            { season: "2019/20", team: "Manchester United", category: "Premier League - Europa League - FA Cup - EFL Cup" },
            { season: "2019/20", team: "Manchester United Sub-23", category: "Premier League 2ª Div. Two" },
            { season: "2018/19", team: "Manchester United", category: "Premier League - Champs. League - FA Cup - EFL Cup" },
            { season: "2017/18", team: "Manchester United", category: "Premier League - Champs. League - FA Cup" },
            { season: "2016/17", team: "Manchester United Sub-23", category: "Premier League 2ª Div. One" },
            { season: "2016/17", team: "Manchester United", category: "Premier League - Europa League - FA Cup - Community Shield - EFL Cup" },
            { season: "2015/16", team: "Villarreal C.F.", category: "1ª Div. - Europa League - Copa del Rey" },
            { season: "2014/15", team: "Villarreal C.F.", category: "1ª Div. - Europa League - Copa del Rey" },
            { season: "2014/15", team: "R.C.D. Espanyol de Barcelona", category: "1ª Div. - Copa del Rey" },
            { season: "2014/15", team: "R.C.D. Espanyol de Barcelona B", category: "2ª Div. B" },
            { season: "2013/14", team: "R.C.D. Espanyol de Barcelona B", category: "2ª Div. B" },
            { season: "2012/13", team: "R.C.D. Espanyol de Barcelona B", category: "2ª Div. B" }
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
                liga: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
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
            { season: "2013/14", team: "R.C. Deportivo de La Coruña B", category: "3ª Div." },
            { season: "2012/13", team: "R.C. Deportivo de La Coruña B", category: "3ª Div. - 3ª Div. Prom. de Ascenso" }
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
            { season: "2023/24", team: "R.C. Recreativo de Huelva", category: "1ª Federación - Copa del Rey" },
            { season: "2022/23", team: "C.F. Rayo Majadahonda", category: "1ª Federación - Copa del Rey" },
            { season: "2021/22", team: "Gimnástica Segoviana C.F.", category: "2ª Federación - Copa del Rey" },
            { season: "2020/21", team: "C.F. Rayo Majadahonda Sub-19", category: "División de Honor" },
            { season: "2020/21", team: "C.F. Rayo Majadahonda", category: "2ª Div. B - 2ª Fase 1ª Div. RFEF" },
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
                liga: { partidos: 19, goles_marcados: 0, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
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
            { season: "2020/21", team: "R.C. Celta de Vigo", category: "1ª Div." },
            { season: "2019/20", team: "U.D. Almería", category: "2ª Div. - 2ª Div. Prom. de Ascenso" },
            { season: "2019/20", team: "R.C. Celta de Vigo", category: "1ª Div. - Copa del Rey" },
            { season: "2018/19", team: "R.C. Celta de Vigo", category: "1ª Div. - Copa del Rey" },
            { season: "2017/18", team: "F.C. Barcelona B", category: "2ª Div." },
            { season: "2017/18", team: "F.C. Barcelona", category: "1ª Div. - Copa del Rey" },
            { season: "2016/17", team: "Real Oviedo", category: "2ª Div." },
            { season: "2016/17", team: "R.C. Celta de Vigo", category: "1ª Div. - Europa League - Copa del Rey" },
            { season: "2015/16", team: "R.C.D. Mallorca", category: "2ª Div. - Copa del Rey" },
            { season: "2014/15", team: "R.C. Celta de Vigo", category: "1ª Div. - Copa del Rey" },
            { season: "2013/14", team: "R.C. Celta de Vigo B", category: "2ª Div. B" },
            { season: "2013/14", team: "R.C. Celta de Vigo", category: "1ª Div. - Copa del Rey" }
        ],
        nationalTeam: [
            { season: "2014", team: "España Sub-21", category: "Amistosos" },
            { season: "2014", team: "España Sub-19", category: "Clasif. Europeo Sub-19 - Amistosos" },
            { season: "2013", team: "España Sub-19", category: "Amistosos" }
        ], 
        stats: {
            "2025/26": {
                liga: { partidos: 17, goles_marcados: 0, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
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
            { season: "2015/16", team: "Levante U.D.", category: "1ª Div." },
            { season: "2015/16", team: "At. Levante U.D.", category: "2ª Div. B" },
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
            { season: "2025/26", team: "Burgos C.F.", category: "2ª Div." }, 
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
                liga: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
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
            { season: "2024/25", team: "Olympiakós de El Pireo", category: "Super League Griega - Europa League - Copa Griega" },
            { season: "2024/25", team: "F.C. Oporto", category: "Liga Portugal Betclic - Supercopa de Portugal" },
            { season: "2023/24", team: "Olympiakós de El Pireo", category: "Super League Griega - Conference League" },
            { season: "2023/24", team: "F.C. Oporto II", category: "Segunda Liga" },
            { season: "2023/24", team: "F.C. Oporto", category: "Liga Portugal Betclic - Champs. League - Taça de Portugal - Copa de la Liga Portugal" },
            { season: "2022/23", team: "F.C. Oporto", category: "Liga Portugal Betclic - Champs. League - Taça de Portugal - Copa de la Liga Portugal" },
            { season: "2022/23", team: "F.C. Oporto II", category: "Segunda Liga" },
            { season: "2021/22", team: "Sporting Clube de Braga", category: "Liga de Portugal Betclic - Europa League" },
            { season: "2021/22", team: "Sporting Clube de Braga II", category: "Liga 3" },
            { season: "2021/22", team: "Sporting Clube de Braga Sub-23", category: "Liga Revelação" },
            { season: "2020/21", team: "Sporting Clube de Braga", category: "Liga Portugal Betclic - Europa League - Taça de Portugal - Copa de la Liga Portugal" },
            { season: "2019/20", team: "Sporting Clube de Braga", category: "Liga Portugal Betclic - Europa League - Copa de la Liga Portugal" },
            { season: "2019/20", team: "Sporting Clube de Braga Sub-23", category: "Liga Revelação" },
            { season: "2019/20", team: "Sporting Clube de Braga II", category: "Campeonato de Portugal" },
            { season: "2018/19", team: "Sporting Clube de Braga", category: "Liga Portugal Betclic" },
            { season: "2018/19", team: "Sporting Clube de Braga Sub-23", category: "Liga Revelação" },
            { season: "2018/19", team: "Sporting Clube de Braga II", category: "Segunda Liga" }
            
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
                liga: { partidos: 16, goles_marcados: 1, tarjetas_amarillas: 8, tarjetas_rojas: 1 },
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
                liga: { partidos: 14, goles_marcados: 0, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
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
            { season: "2018/19", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2017/18", team: "Real Oviedo", category: "Copa del Rey" },
            { season: "2017/18", team: "Real Oviedo B", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2016/17", team: "Real Oviedo B", category: "3ª Div." },
            { season: "2015/16", team: "Real Oviedo B", category: "3ª Div." },
            { season: "2015/16", team: "Real Oviedo", category: "2ª Div." },
            { season: "2014/15", team: "Real Oviedo", category: "2ª Div. B - Copa del Rey" },
            { season: "2014/15", team: "Real Oviedo B", category: "3ª Div." },
            { season: "2013/14", team: "Real Oviedo", category: "2ª Div. B" },
            { season: "2013/14", team: "Real Oviedo B", category: "3ª Div." },
            { season: "2013/14", team: "Real Oviedo Sub-19", category: "División de Honor" }
            
        ],
        
        stats: {
            "2025/26": {
                liga: { partidos: 12, goles_marcados: 0, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
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
            { season: "2024/25", team: "Real Sociedad de Fútbol", category: "1ª Div. - Europa League - Copa del Rey" },
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
                liga: { partidos: 10, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
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
            { season: "2013/14", team: "R.C. Deportivo de La Coruña B", category: "3ª Div." },
            { season: "2012/13", team: "R.C. Deportivo de La Coruña B", category: "3ª Div. Prom. de Ascenso" }

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
            { season: "2014/15", team: "At. Levante U.D.", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
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
            { season: "2025/26", team: "R.C. Celta de Vigo Fortuna", category: "1ª Federación" },
            { season: "2024/25", team: "R.C. Celta de Vigo Fortuna", category: "1ª Federación" }, 
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
            { season: "2025/26", team: "Real Avilés Industrial C.F.", category: "Copa del Rey - 1ª Federación" },
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

    "mariohernandez": {
        name: "Mario Hernández Fernández",
        footballName: "Mario Hernández",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/LsWsgPtP/Mario_Hernández_PNG.webp", 
    personalData: {
        fullName: "Mario Hernández Fernández",
        nickname: "Mario Hernández",
        birthPlace: "Madrid, Madrid",
        country: "España",
        nationality: "Española",
        height: "1,77 m",
        birthDate: "25/01/1999",
        deathDate: null // Poner null si el jugador está vivo
    }, 
        career: [  
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div." },
            { season: "2022/23", team: "Rayo Vallecano de Madrid", category: "1ª Div. - Copa del Rey" },
            { season: "2021/22", team: "Rayo Vallecano de Madrid", category: "1ª Div. - Copa del Rey" },
            { season: "2021/22", team: "Rayo Vallecano de Madrid B", category: "3ª Federación" },
            { season: "2020/21", team: "Rayo Vallecano de Madrid", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2019/20", team: "U.D. San Sebastián de Los Reyes", category: "2ª Div. B - Copa del Rey" },
            { season: "2018/19", team: "U.D. Melilla", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2017/18", team: "Rayo Vallecano de Madrid B", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2017/18", team: "Rayo Vallecano de Madrid", category: "Copa del Rey" }
            
        ],
  
            
        stats: {
            "2023/24": {
                liga: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 1, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
            
        }
    },

    "rodritarin": {
        name: "Rodrigo Tarín Higón",
        footballName: "Rodri Tarín",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/SQvGQ1YQ/Rodri_Tarín_PNG.webp", 
    personalData: {
        fullName: "Rodrigo Tarín Higón",
        nickname: "Rodri Tarín",
        birthPlace: "Chiva, Valencia",
        country: "España",
        nationality: "Española",
        height: "1,83 m",
        birthDate: "05/07/1996",
        deathDate: null // Poner null si el jugador está vivo
    }, 
        career: [  
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div." },
            { season: "2021/22", team: "C.D. Leganés", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "C.D. Leganés", category: "2ª Div. - Copa del Rey - 2ª Div. - Prom. de Ascenso" },
            { season: "2019/20", team: "C.D. Leganés", category: "1ª Div. - Copa del Rey" },
            { season: "2018/19", team: "C.D. Leganés", category: "1ª Div. - Copa del Rey" },
            { season: "2017/18", team: "F.C. Barcelona B", category: "2ª Div." },
            { season: "2016/17", team: "F.C. Barcelona B", category: "2ª Div. B" },
            { season: "2015/16", team: "F.C. Barcelona B", category: "2ª Div. B" },
            { season: "2014/15", team: "F.C. Barcelona B", category: "2ª Div." },
            { season: "2014/15", team: "F.C. Barcelona Sub-19", category: "UEFA Youth League" },
            { season: "2013/14", team: "F.C. Barcelona Sub-19", category: "UEFA Youth League" }
            
        ],

        nationalTeam: [
            { season: "2014", team: "España Sub-18", category: "Amistosos" },
            { season: "2013", team: "España Sub-19", category: "Torneo COTIF Sub-20 - Amistosos" },
            { season: "2013", team: "España Sub-17", category: "Clasif. Europeo Sub-17" },
            { season: "2012", team: "España Sub-16", category: "Amistosos" },
            { season: "2012", team: "España Sub-17", category: "Clasif. Europeo Sub-17 - Amistosos" },
            { season: "2011", team: "España Sub-17", category: "Clasif. Europeo Sub-17" },
            { season: "2011", team: "España Sub-16", category: "Amistosos" }
            
        ],
  
            
        stats: {
            "2023/24": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2022/23": {
                liga: { partidos: 23, goles_marcados: 1, tarjetas_amarillas: 7, tarjetas_rojas: 0 },
                copa: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2021/22": {
                liga: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
            
        }
    },

    "abelbretones": {
        name: "Abel Bretones Cruz",
        footballName: "Abel Bretones",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/7LbTGw25/Abel-Bretones-PNG.webp", 
    personalData: {
        fullName: "Abel Bretones Cruz",
        nickname: "Abel Bretones",
        birthPlace: "Langreo, Asturias",
        country: "España",
        nationality: "Española",
        height: "1,88 m",
        birthDate: "21/08/2000",
        deathDate: null // Poner null si el jugador está vivo
    }, 
        career: [  
            { season: "2025/26", team: "C.A. Osasuna", category: "1ª Div. - Copa del Rey" },
            { season: "2024/25", team: "C.A. Osasuna", category: "1ª Div. - Copa del Rey" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2022/23", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "Real Oviedo Vetusta", category: "3ª Federación" },
            { season: "2021/22", team: "U.P. de Langreo", category: "2ª Federación" },
            { season: "2020/21", team: "U.P. de Langreo", category: "2ª Div. B - Copa Federación - 2ª Div. B 2ª Fase 1ª Div. RFEF" },
            { season: "2020/21", team: "U.P. de Langreo B", category: "1ª RFFPA" },
            { season: "2019/20", team: "U.P. de Langreo", category: "2ª Div. B" },
            { season: "2018/19", team: "U.P. de Langreo", category: "2ª Div. B" }
            
            
        ],

        
        stats: {
            "2023/24": {
                liga: { partidos: 43, goles_marcados: 1, tarjetas_amarillas: 10, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2022/23": {
                liga: { partidos: 39, goles_marcados: 0, tarjetas_amarillas: 9, tarjetas_rojas: 1 },
                copa: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 6, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
            
        }
    },

        "charbel": {
        name: "Charbel Anthuan Wehbe González",
        footballName: "Charbel",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/KjdChGhC/Charbel_PNG.webp",
        personalData: {
            fullName: "Charbel Anthuan Wehbe González",
            nickname: "Charbel",
            birthPlace: "Santo Domingo, Santo Domingo",
            country: "República Dominicana",
            nationality: "Dominicana",
            height: "1,83 m",
            birthDate: "08/05/2004",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "C.D. Castellón B", category: "2ª Federación" },
            { season: "2024/25", team: "U.D. Llanera", category: "2ª Federación" },
            { season: "2024/25", team: "A.D. Mérida", category: "1ª Federación" },
            { season: "2023/24", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div." },
            { season: "2022/23", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2022/23", team: "Real Oviedo Sub-19", category: "División de Honor" },
            { season: "2021/22", team: "Real Oviedo Sub-19", category: "División de Honor" },
            { season: "2020/21", team: "Real Oviedo Sub-19", category: "División de Honor" },
            { season: "2020/21", team: "Real Oviedo Sub-19 B", category: "Liga Nacional" }
        ],
        nationalTeam: [
            { season: "2025", team: "República Dominicana", category: "CONCACAF Series" },
            { season: "2024", team: "República Dominicana", category: "Clasif. Mundial CONCACAF - Amistosos" },
            { season: "2022", team: "República Dominicana Sub-20", category: "Campeonato de la CONCACAF Sub-20" }
        ],
        stats: {
            "2023/24": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "aimarcollante": {
        name: "Aimar Collante Coronado",
        footballName: "Aimar Collante",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/fbJ7mx9j/Aimar-Collante-PNG.webp",
        personalData: {
            fullName: "Aimar Collante Coronado",
            nickname: "Aimar Collante",
            birthPlace: "Elorz, Navarra",
            country: "España",
            nationality: "Española",
            height: "1,84 m",
            birthDate: "10/02/2002",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "C.D. Tudelano", category: "2ª Federación" },
            { season: "2024/25", team: "S.D. Gernika", category: "Copa Federación Fase Autonómica - 2ª Federación" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2023/24", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2022/23", team: "U.D. Mutilvera", category: "Copa Federación Fase Autonómica - 2ª Federación" },
            { season: "2021/22", team: "U.D. Mutilvera", category: "Copa Federación Fase Autonómica - 2ª Federación" },
            { season: "2020/21", team: "C.D. Pamplona", category: "3ª Div." },
            { season: "2020/21", team: "C.D. Pamplona Sub-19", category: "División de Honor" }
        ],
        stats: {
            "2023/24": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "osky": {
        name: "Óscar Menéndez Carracedo",
        footballName: "Osky",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/2SMp47tC/Osky_PNG.webp",
        personalData: {
            fullName: "Óscar Menéndez Carracedo",
            nickname: "Osky",
            birthPlace: "Oviedo, Asturias",
            country: "España",
            nationality: "Española",
            height: "1,76 m",
            birthDate: "13/02/2004",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Real Avilés Industrial C.F.", category: "1ª Federación - Copa del Rey" },
            { season: "2024/25", team: "Real Avilés Industrial C.F.", category: "Copa Federación - Copa Federación Fase Autonómica - 2ª Federación - 2ª Federación Prom. de Ascenso" },
            { season: "2023/24", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2022/23", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div." },
            { season: "2021/22", team: "Real Oviedo Vetusta", category: "3ª Federación" },
            { season: "2020/21", team: "Real Oviedo Sub-19", category: "División de Honor" },
            { season: "2020/21", team: "Real Oviedo Sub-19 B", category: "Liga Nacional" }
        ],
        stats: {
            "2023/24": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2022/23": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2021/22": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "miguelon": {
        name: "Miguel Juan Llambrich",
        footballName: "Miguelón",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/Wzwj8qkX/Miguelón_PNG.webp",
        personalData: {
            fullName: "Miguel Juan Llambrich",
            nickname: "Miguelón",
            birthPlace: "Benidorm, Alicante",
            country: "España",
            nationality: "Española",
            height: "1,70 m",
            birthDate: "18/01/1996",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Torrent C.F.", category: "2ª Federación - Copa del Rey" },
            { season: "2024/25", team: "Torrent C.F.", category: "2ª Federación - 2ª Federación Prom. de Ascenso" },
            { season: "2023/24", team: "C.D. Eldense", category: "2ª Div. - Copa del Rey" },
            { season: "2022/23", team: "F.C. Cartagena", category: "2ª Div." },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div." },
            { season: "2021/22", team: "R.C.D. Espanyol de Barcelona", category: "1ª Div. - Copa del Rey" },
            { season: "2020/21", team: "R.C.D. Espanyol de Barcelona", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "S.D. Huesca", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "Villarreal C.F.", category: "1ª Div. - Europa League - Copa del Rey" },
            { season: "2017/18", team: "Villarreal C.F. B", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2016/17", team: "Villarreal C.F. B", category: "2ª Div. B" },
            { season: "2016/17", team: "Villarreal C.F. C", category: "3ª Div." },
            { season: "2015/16", team: "Villarreal C.F. B", category: "2ª Div. B" },
            { season: "2015/16", team: "Villarreal C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2015/16", team: "Villarreal C.F. C", category: "3ª Div." },
            { season: "2015/16", team: "Villarreal C.F. Sub-19", category: "UEFA Youth League" },
            { season: "2013/14", team: "Villarreal C.F. Sub-19", category: "División de Honor" }
        ],
        stats: {
            "2022/23": {
                liga: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "alonsoaceves": {
        name: "Daniel Alonso Aceves Patiño",
        footballName: "Alonso Aceves",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/7Pg33Pfc/Alonso-Aceves-PNG.webp",
        personalData: {
            fullName: "Daniel Alonso Aceves Patiño",
            nickname: "Alonso Aceves",
            birthPlace: "Huixquilucan de Degollado, Estado de Méjico",
            country: "Méjico",
            nationality: "Mejicana",
            height: "1,80 m",
            birthDate: "28/03/2001",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "C.F. Monterrey", category: "Copa Pacífica" },
            { season: "2025/26", team: "C.F. Pachuca", category: "Liga MX Apert. - Etapas Finales Apert." },
            { season: "2024/25", team: "C.F. Pachuca Sub-23", category: "Liga MX Sub-23 Claus." },
            { season: "2024/25", team: "C.F. Pachuca", category: "Liga MX Apert. - Mundial de Clubes - Liga MX Claus. - Etapas Finales Claus. MX - Leagues Cup - Copa Intercontinental de la FIFA" },
            { season: "2023/24", team: "C.F. Pachuca", category: "Liga MX Claus. - Etapas Finales Claus. MX - CONCACAF Champs. Cup - Leagues Cup " },
            { season: "2022/23", team: "Chicago Fire F.C. II", category: "MLS Next Pro" },
            { season: "2022/23", team: "Chicago Fire F.C.", category: "MLS Liga USA - US Open Cup - Leagues Cup" },
            { season: "2022/23", team: "C.F. Pachuca Premier", category: "Liga Premier Serie A Claus." },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2022/23", team: "C.F. Pachuca", category: "Liga MX Apert." },
            { season: "2021/22", team: "C.F. Pachuca", category: "Liga MX Apert. - Liga MX Claus. - Etapas Finales Claus. MX" },
            { season: "2021/22", team: "C.F. Pachuca Sub-20", category: "Liga MX Sub-20 Apert." },
            { season: "2020/21", team: "C.F. Pachuca", category: "Liga MX Apert. - Liga MX Claus." },
            { season: "2020/21", team: "C.F. Pachuca Sub-20", category: "Liga MX Sub-20 Claus. - Liga MX Sub-20 Apert." },
            { season: "2019/20", team: "C.F. Pachuca Sub-20", category: "Liga MX Sub-20 Claus. - Liga MX Sub-20 Apert." },
            { season: "2018/19", team: "C.F. Pachuca Sub-17", category: "Liga MX Sub-17 Claus. - Liga MX Sub-17 Apert." }
        ],
        nationalTeam: [
            { season: "2022", team: "Méjico Sub-21", category: "Torneo Maurice Revello" },
            { season: "2018", team: "Méjico Sub-18", category: "Amistosos" }
        ],
        stats: {
            "2022/23": {
                liga: { partidos: 10, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 1 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "jorgemier": {
        name: "Jorge Mier Martínez",
        footballName: "Jorge Mier",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/dthTWq1w/Jorge_Mier_PNG.webp",
        personalData: {
            fullName: "Jorge Mier Martínez",
            nickname: "Jorge Mier",
            birthPlace: "Oviedo, Asturias",
            country: "España",
            nationality: "Española",
            height: "1,73 m",
            birthDate: "04/02/1999",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Real Murcia C.F.", category: "1ª Federación - Copa del Rey" },
            { season: "2024/25", team: "Real Murcia C.F.", category: "1ª Federación - Copa Federación - 1ª Federación Prom. de Ascenso" },
            { season: "2023/24", team: "S.D. Amorebieta", category: "2ª Div. - Copa del Rey" },
            { season: "2022/23", team: "S.D. Amorebieta", category: "1ª Federación - Copa del Rey - 1ª Federación Final de Campeones" },
            { season: "2021/22", team: "Unionistas de Salamanca C.F.", category: "1ª Federación - Copa del Rey" },
            { season: "2020/21", team: "Real Oviedo B", category: "2ª Div. B - 2ª Div. B 2ª Fase Permanencia 2ª RFEF" },
            { season: "2019/20", team: "Real Oviedo", category: "Copa del Rey" },
            { season: "2019/20", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2018/19", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2017/18", team: "Real Oviedo B", category: "3ª Div. - 3ª Div. Prom. de Ascenso" }
        ],
        stats: {
            "2022/23": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 6, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2021/22": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2020/21": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2019/20": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2018/19": {
                liga: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2017/18": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "juanfran": {
        name: "Juan Francisco Moreno Fuertes",
        footballName: "Juanfran",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/4yqnC9dZ/Juanfran_PNG.webp",
        personalData: {
            fullName: "Juan Francisco Moreno Fuertes",
            nickname: "Juanfran",
            birthPlace: "Madrid, Madrid",
            country: "España",
            nationality: "Española",
            height: "1,79 m",
            birthDate: "11/09/1988",
            deathDate: null
        },
        career: [
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div." },
            { season: "2022/23", team: "Málaga C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "Alanyaspor", category: "Liga Turca - Copa Turca" },
            { season: "2020/21", team: "Alanyaspor", category: "Liga Turca - Copa Turca - Fase Previa Europa League" },
            { season: "2019/20", team: "Alanyaspor", category: "Liga Turca - Copa Turca" },
            { season: "2018/19", team: "C.D. Leganés", category: "1ª Div. - Copa del Rey" },
            { season: "2017/18", team: "R.C. Deportivo de La Coruña", category: "1ª Div. - Copa del Rey" },
            { season: "2016/17", team: "R.C. Deportivo de La Coruña", category: "1ª Div. - Copa del Rey" },
            { season: "2015/16", team: "R.C. Deportivo de La Coruña", category: "1ª Div." },
            { season: "2014/15", team: "R.C. Deportivo de La Coruña", category: "1ª Div." },
            { season: "2013/14", team: "Real Betis Balompié", category: "1ª Div. - Europa League - Copa del Rey - Fase Previa Europa League" },
            { season: "2012/13", team: "Real Madrid Castilla", category: "2ª Div." },
            { season: "2011/12", team: "Real Madrid Castilla", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2010/11", team: "Real Madrid C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2010/11", team: "Real Madrid Castilla", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2009/10", team: "Real Madrid C.F.", category: "1ª Div." },
            { season: "2009/10", team: "Real Madrid Castilla", category: "2ª Div. B" },
            { season: "2008/09", team: "Villarreal C.F. B", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2007/08", team: "Getafe C.F.", category: "1ª Div. - Europa League - Copa del Rey" }
        ],
        stats: {
            "2022/23": {
                liga: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "javimoreno": {
        name: "Javier Moreno Arrones Gil",
        footballName: "Javi Moreno",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/tCJFL3r0/Javi_Moreno_PNG.webp",
        personalData: {
            fullName: "Javier Moreno Arrones Gil",
            nickname: "Javi Moreno",
            birthPlace: "Oviedo, Asturias",
            country: "España",
            nationality: "Española",
            height: "1,84 m",
            birthDate: "16/05/2000",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Albacete Balompié", category: "2ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Albacete Balompié", category: "2ª Div." },
            { season: "2024/25", team: "C.D. Arenteiro", category: "1ª Federación - Copa Federación Fase Autonómica" },
            { season: "2023/24", team: "C.D. Arenteiro", category: "1ª Federación - Copa del Rey" },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div." },
            { season: "2022/23", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div." },
            { season: "2021/22", team: "Real Oviedo Vetusta", category: "3ª Federación" },
            { season: "2020/21", team: "C.D. Llanes", category: "3ª Div. - Copa Federación Fase Autonómica - 3ª Div. 2ª Fase Ascenso a 2ª RFEF - Prom. de Ascenso a 2ª Div. RFEF" },
            { season: "2019/20", team: "C.D. Llanes", category: "3ª Div." },
            { season: "2018/19", team: "Real Oviedo B", category: "2ª Div. B" }
        ],
        stats: {
            "2022/23": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2021/22": {
                liga: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "lucaslaso": {
        name: "Lucas Laso Gutiérrez",
        footballName: "Lucas Laso",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/1RnqBm4P/Lucas_Laso_PNG.webp",
        personalData: {
            fullName: "Lucas Laso Gutiérrez",
            nickname: "Lucas Laso",
            birthPlace: "Santander, Cantabria",
            country: "España",
            nationality: "Española",
            height: "1,89 m",
            birthDate: "04/01/2003",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Getafe C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2025/26", team: "Getafe C.F. B", category: "2ª Federación" },
            { season: "2024/25", team: "C.D. Numancia", category: "2ª Federación - 2ª Federación Prom. de Ascenso" },
            { season: "2023/24", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2022/23", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div." },
            { season: "2021/22", team: "Real Oviedo Vetusta", category: "3ª Federación" },
            { season: "2021/22", team: "Real Oviedo Sub-19", category: "División de Honor" },
            { season: "2020/21", team: "Real Oviedo Sub-19", category: "División de Honor" },
            { season: "2020/21", team: "Real Oviedo B", category: "2ª Div. B" }
        ],
        nationalTeam: [
            { season: "2020", team: "España Sub-17", category: "Amistosos" }
        ],
        stats: {
            "2022/23": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 6, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2021/22": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "grippo": {
        name: "Simone Damiano Grippo",
        footballName: "Grippo",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/5y3pnfNw/Grippo_PNG.webp",
        personalData: {
            fullName: "Simone Damiano Grippo",
            nickname: "Grippo",
            birthPlace: "Basilea, Basilea",
            country: "Suiza",
            nationality: "Suiza, Italiana",
            height: "1,88 m",
            birthDate: "12/12/1988",
            deathDate: null
        },
        career: [
            { season: "2023/24", team: "F.C. Lausanne Sport", category: "Liga Suiza - Copa Suiza" },
            { season: "2022/23", team: "F.C. Lausanne Sport", category: "2ª Suiza" },
            { season: "2022/23", team: "F.C. Lausanne Sport II", category: "5ª Suiza" },
            { season: "2021/22", team: "F.C. Lausanne Sport", category: "Liga Suiza - Copa Suiza" },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div." },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div." },
            { season: "2019/20", team: "Real Zaragoza", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "Real Zaragoza", category: "2ª Div. - Copa del Rey" },
            { season: "2017/18", team: "Real Zaragoza", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2016/17", team: "F.C. Vaduz", category: "Liga Suiza - Fase Previa Europa League - Copa Liechtenstein" },
            { season: "2015/16", team: "F.C. Vaduz", category: "Liga Suiza - Fase Previa Europa League - Copa Liechtenstein" },
            { season: "2014/15", team: "F.C. Vaduz", category: "Liga Suiza - Fase Previa Europa League" },
            { season: "2013/14", team: "F.C. Vaduz", category: "2ª Suiza - Copa Liechtenstein" },
            { season: "2012/13", team: "Servette F.C. Genève", category: "Liga Suiza - Copa Suiza - Fase Previa Europa League" },
            { season: "2011/12", team: "F.C. Lugano", category: "2ª Suiza" },
            { season: "2011/12", team: "A.C. Chievo Verona", category: "Coppa Italia" },
            { season: "2010/11", team: "Frosinone Calcio", category: "Serie B - Coppa Italia" },
            { season: "2009/10", team: "F.C. Lumezzane", category: "Serie C - Coppa Italia" },
            { season: "2008/09", team: "Piacenza Calcio 1919", category: "Serie B" },
            { season: "2008/09", team: "A.C. Chievo Verona", category: "Serie A" },
            { season: "2008/09", team: "A.C. Chievo Verona Sub-19", category: "Campionato Primavera 1" },
            { season: "2007/08", team: "F.C. Concordia Basel", category: "2ª Suiza - Copa Suiza" },
            { season: "2006/07", team: "F.C. Basilea II", category: "4ª Suiza" },
            { season: "2006/07", team: "F.C. Basilea", category: "Liga Suiza - Fase Previa Europa League" }
        ],
        nationalTeam: [
            { season: "2010", team: "Suiza Sub-21", category: "Clasif. Europeo Sub-21" },
            { season: "2009", team: "Suiza Sub-20", category: "Amistosos" },
            { season: "2009", team: "Suiza Sub-21", category: "Clasif. Europeo Sub-21 - Amistosos" },
            { season: "2008", team: "Suiza Sub-20", category: "Amistosos" },
            { season: "2007", team: "Suiza Sub-20", category: "Amistosos" },
            { season: "2007", team: "Suiza Sub-19", category: "Clasif. Europeo Sub-19 - Amistosos" },
            { season: "2006", team: "Suiza Sub-19", category: "Amistosos" }
        ],
        stats: {
            "2021/22": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2020/21": {
                liga: { partidos: 25, goles_marcados: 1, tarjetas_amarillas: 4, tarjetas_rojas: 1 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2019/20": {
                liga: { partidos: 7, goles_marcados: 0, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "arribas": {
        name: "Alejandro Arribas Garrido",
        footballName: "Arribas",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/VkT0y2Jn/Arribas-PNG.webp",
        personalData: {
            fullName: "Alejandro Arribas Garrido",
            nickname: "Arribas",
            birthPlace: "Madrid, Madrid",
            country: "España",
            nationality: "Española",
            height: "1,82 m",
            birthDate: "01/05/1989",
            deathDate: null
        },
        career: [
            { season: "2024/25", team: "C.F. Rayo Majadahonda", category: "2ª Federación - 2ª Federación Prom. de Ascenso" },
            { season: "2023/24", team: "P.S. Kalamata", category: "2ª Grecia - Copa Grecia" },
            { season: "2022/23", team: "F.C. Juárez", category: "Liga MX Apert. - Liga MX Claus. - Etapas Finales Apert. MX" },
            { season: "2021/22", team: "F.C. Juárez", category: "Liga MX Claus." },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div." },
            { season: "2018/19", team: "Club Universidad Nacional PUMAS", category: "Liga MX Apert. - Liga MX Claus. - Copa Méjico Claus. - Copa Méjico Apert. - Etapas Finales Apert. MX" },
            { season: "2017/18", team: "Club Universidad Nacional PUMAS", category: "Liga MX Claus. - Copa Méjico Claus. - Etapas Finales Claus. MX" },
            { season: "2017/18", team: "R.C. Deportivo de La Coruña", category: "1ª Div." },
            { season: "2016/17", team: "R.C. Deportivo de La Coruña", category: "1ª Div. - Copa del Rey" },
            { season: "2015/16", team: "R.C. Deportivo de La Coruña", category: "1ª Div. - Copa del Rey" },
            { season: "2014/15", team: "Sevilla F.C.", category: "1ª Div. - Europa League - Copa del Rey" },
            { season: "2013/14", team: "C.A. Osasuna", category: "1ª Div. - Copa del Rey" },
            { season: "2012/13", team: "C.A. Osasuna", category: "1ª Div. - Copa del Rey" },
            { season: "2011/12", team: "Rayo Vallecano de Madrid", category: "1ª Div. - Copa del Rey" },
            { season: "2010/11", team: "Rayo Vallecano de Madrid", category: "2ª Div." },
            { season: "2009/10", team: "Rayo Vallecano de Madrid", category: "2ª Div. - Copa del Rey" },
            { season: "2009/10", team: "Rayo Vallecano de Madrid B", category: "3ª Div." },
            { season: "2008/09", team: "C.D.A. Navalcarnero", category: "2ª Div. B" }
        ],
        stats: {
            "2021/22": {
                liga: { partidos: 6, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2020/21": {
                liga: { partidos: 32, goles_marcados: 2, tarjetas_amarillas: 9, tarjetas_rojas: 1 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2019/20": {
                liga: { partidos: 27, goles_marcados: 0, tarjetas_amarillas: 7, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "bolano": {
        name: "Christian Fernández Salas",
        footballName: "Bolaño",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/0NDQTjR1/Bolano-PNG.webp",
        personalData: {
            fullName: "Christian Fernández Salas",
            nickname: "Bolaño",
            birthPlace: "Santander, Cantabria",
            country: "España",
            nationality: "Española",
            height: "1,82 m",
            birthDate: "15/10/1985",
            deathDate: null
        },
        career: [
            { season: "2022/23", team: "R.S. Gimnástica de Torrelavega", category: "2ª Federación" },
            { season: "2022/23", team: "C.F. Fuenlabrada", category: "1ª Federación - Copa del Rey" },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div." },
            { season: "2018/19", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2016/17", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2015/16", team: "S.D. Huesca", category: "2ª Div. - Copa del Rey" },
            { season: "2014/15", team: "U.D. Las Palmas", category: "2ª Div. - Copa del Rey" },
            { season: "2013/14", team: "D.C. United", category: "MLS Liga USA" },
            { season: "2013/14", team: "U.D. Almería", category: "1ª Div. - Copa del Rey" },
            { season: "2012/13", team: "U.D. Almería", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2011/12", team: "Real Racing Club de Santander", category: "1ª Div. - Copa del Rey" },
            { season: "2010/11", team: "Real Racing Club de Santander", category: "1ª Div. - Copa del Rey" },
            { season: "2009/10", team: "Real Racing Club de Santander", category: "1ª Div. - Copa del Rey" },
            { season: "2008/09", team: "Real Racing Club de Santander", category: "1ª Div. - Copa del Rey" },
            { season: "2007/08", team: "U.D. Las Palmas", category: "2ª Div." },
            { season: "2007/08", team: "Real Racing Club de Santander", category: "1ª Div. - Copa del Rey" },
            { season: "2006/07", team: "Real Racing Club de Santander", category: "1ª Div. - Copa del Rey" },
            { season: "2006/07", team: "Real Racing Club de Santander B", category: "2ª Div. B" },
            { season: "2005/06", team: "Real Racing Club de Santander B", category: "2ª Div. B" },
            { season: "2003/04", team: "Real Racing Club de Santander B", category: "2ª Div. B" },
            { season: "2002/03", team: "Real Racing Club de Santander B", category: "2ª Div. B" }
        ],
        stats: {
            "2021/22": {
                liga: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2020/21": {
                liga: { partidos: 32, goles_marcados: 1, tarjetas_amarillas: 12, tarjetas_rojas: 1 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2019/20": {
                liga: { partidos: 37, goles_marcados: 1, tarjetas_amarillas: 13, tarjetas_rojas: 1 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2018/19": {
                liga: { partidos: 36, goles_marcados: 2, tarjetas_amarillas: 15, tarjetas_rojas: 1 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2017/18": {
                liga: { partidos: 37, goles_marcados: 3, tarjetas_amarillas: 15, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2016/17": {
                liga: { partidos: 31, goles_marcados: 2, tarjetas_amarillas: 8, tarjetas_rojas: 1 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "carlosisaac": {
        name: "Carlos Isaac Muñoz Obejero",
        footballName: "Carlos Isaac",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/SNHmm4GS/Carlos_Isaac_PNG.webp",
        personalData: {
            fullName: "Carlos Isaac Muñoz Obejero",
            nickname: "Carlos Isaac",
            birthPlace: "Navalmoral de la Mata, Cáceres",
            country: "España",
            nationality: "Española",
            height: "1,84 m",
            birthDate: "30/04/1998",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Córdoba C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Córdoba C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2023/24", team: "Albacete Balompié", category: "2ª Div. - Copa del Rey" },
            { season: "2022/23", team: "Albacete Balompié", category: "2ª Div. - 2ª Div. Prom. de Ascenso" },
            { season: "2022/23", team: "F.C. Vizela", category: "Liga Portugal Betclic - Taça de Portugal - Copa de la Liga Portugal" },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Albacete Balompié", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Club At. de Madrid B", category: "2ª Div. B" },
            { season: "2018/19", team: "Club At. de Madrid", category: "1ª Div." },
            { season: "2018/19", team: "Club At. de Madrid B", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2017/18", team: "Club At. de Madrid", category: "1ª Div." },
            { season: "2017/18", team: "Club At. de Madrid B", category: "2ª Div. B" },
            { season: "2017/18", team: "Club At. de Madrid Sub-19", category: "UEFA Youth League" },
            { season: "2016/17", team: "Club At. de Madrid Sub-19", category: "UEFA Youth League - Copa de Campeones División de Honor" },
            { season: "2015/16", team: "Club At. de Madrid Sub-19", category: "UEFA Youth League" }
        ],
        stats: {
            "2021/22": {
                liga: { partidos: 19, goles_marcados: 1, tarjetas_amarillas: 6, tarjetas_rojas: 1 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "pierrecornud": {
        name: "Pierre Cornud",
        footballName: "Pierre Cornud",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/mkXpTbfT/Pierre_Cornud_PNG.webp",
        personalData: {
            fullName: "Pierre Cornud",
            nickname: "Pierre Cornud",
            birthPlace: "Aviñón, Provenza-Alpes-Costa Azul",
            country: "Francia",
            nationality: "Francesa, Israelita",
            height: "1,77 m",
            birthDate: "12/12/1996",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Maccabi Haifa F.C.", category: "Liga Israel - Copa Israel - Copa Toto Liga Israel - Fase Previa Conference League" },
            { season: "2024/25", team: "A.S. Saint-Étienne", category: "Ligue 1" },
            { season: "2024/25", team: "Maccabi Haifa F.C.", category: "Copa Toto Liga Israel - Fase Previa Conference League" },
            { season: "2023/24", team: "Maccabi Haifa F.C.", category: "Liga Israel - Europa League - Copa Israel - Fase Previa Champs. League - Copa Toto Liga Israel - Conference League" },
            { season: "2022/23", team: "Maccabi Haifa F.C.", category: "Liga Israel - Champs. League - Copa Israel - Fase Previa Champs. League - Copa Toto Liga Israel - Supercopa Israel" },
            { season: "2021/22", team: "Maccabi Haifa F.C.", category: "Supercopa Israel" },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "C.E. Sabadell F.C.", category: "2ª Div." },
            { season: "2019/20", team: "U.D. Ibiza", category: "2ª Div. B" },
            { season: "2019/20", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2018/19", team: "Real Balompédica Linense", category: "2ª Div. B" },
            { season: "2017/18", team: "R.C.D. Mallorca B", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2017/18", team: "R.C.D. Mallorca", category: "Copa del Rey" },
            { season: "2016/17", team: "Dijon F.C.O. B", category: "National 3" },
            { season: "2015/16", team: "Montpellier H.S.C. B", category: "National 3" },
            { season: "2014/15", team: "Montpellier H.S.C. B", category: "National 2" },
            { season: "2013/14", team: "Montpellier H.S.C. B", category: "National 3" }
        ],
        stats: {
            "2021/22": {
                liga: { partidos: 31, goles_marcados: 0, tarjetas_amarillas: 9, tarjetas_rojas: 1 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "mossa": {
        name: "José María Angresola Jiménez",
        footballName: "Mossa",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/tC99TkKf/Mossa_PNG.webp",
        personalData: {
            fullName: "José María Angresola Jiménez",
            nickname: "Mossa",
            birthPlace: "El Puig, Valencia",
            country: "España",
            nationality: "Española",
            height: "1,78 m",
            birthDate: "24/01/1989",
            deathDate: null
        },
        career: [
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2016/17", team: "Gimnàstic de Tarragona", category: "2ª Div. - Copa del Rey" },
            { season: "2015/16", team: "Gimnàstic de Tarragona", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2014/15", team: "Gimnàstic de Tarragona", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2013/14", team: "At. Levante U.D.", category: "2ª Div. B" },
            { season: "2012/13", team: "At. Levante U.D.", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2011/12", team: "Valencia Mestalla", category: "2ª Div. B" },
            { season: "2010/11", team: "At. Levante U.D.", category: "3ª Div." },
            { season: "2010/11", team: "Levante U.D.", category: "1ª Div. - Copa del Rey" },
            { season: "2008/09", team: "Levante U.D.", category: "2ª Div." },
            { season: "2007/08", team: "At. Levante U.D.", category: "2ª Div. B" }
        ],
        stats: {
            "2021/22": {
                liga: { partidos: 19, goles_marcados: 0, tarjetas_amarillas: 5, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2020/21": {
                liga: { partidos: 27, goles_marcados: 0, tarjetas_amarillas: 6, tarjetas_rojas: 0 },
                copa: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2019/20": {
                liga: { partidos: 30, goles_marcados: 0, tarjetas_amarillas: 10, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 6, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2018/19": {
                liga: { partidos: 32, goles_marcados: 2, tarjetas_amarillas: 11, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2017/18": {
                liga: { partidos: 38, goles_marcados: 2, tarjetas_amarillas: 10, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "reneperez": {
        name: "René Pérez Iglesias",
        footballName: "René Pérez",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/CxD7QC1h/René_Pérez_PNG.webp",
        personalData: {
            fullName: "René Pérez Iglesias",
            nickname: "René Pérez",
            birthPlace: "Colunga, Asturias",
            country: "España",
            nationality: "Española",
            height: "1,88 m",
            birthDate: "19/10/2000",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Gimnástica Segoviana C.F.", category: "2ª Federación" },
            { season: "2024/25", team: "U.D. Almería B", category: "2ª Federación" },
            { season: "2023/24", team: "U.D. Almería B", category: "3ª Federación - 3ª Federación Prom. de Ascenso" },
            { season: "2022/23", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div." },
            { season: "2021/22", team: "Real Oviedo Vetusta", category: "3ª Federación" },
            { season: "2020/21", team: "C.D. Lealtad de Villaviciosa", category: "2ª Div. B - Copa del Rey - 2ª Div. B 2ª Fase Permanencia 2ª RFEF" },
            { season: "2019/20", team: "C.D. Lealtad de Villaviciosa", category: "3ª Div. - Copa del Rey - 3ª Div. Prom. de Ascenso" },
            { season: "2018/19", team: "C.D. Lealtad de Villaviciosa", category: "3ª Div. - Copa Federación - 3ª Div. Prom. de Ascenso" },
            { season: "2017/18", team: "C.D. Lealtad de Villaviciosa", category: "2ª Div. B" },
            { season: "2016/17", team: "C.D. Lealtad de Villaviciosa", category: "2ª Div. B" }
        ],
        stats: {
            "2021/22": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "carloshernandez": {
        name: "Carlos Hernández Alarcón",
        footballName: "Carlos Hdez.",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/J761dZDB/Carlos_Hernández_PNG.webp",
        personalData: {
            fullName: "Carlos Hernández Alarcón",
            nickname: "Carlos Hernández",
            birthPlace: "Jaén, Jaén",
            country: "España",
            nationality: "Española",
            height: "1,85 m",
            birthDate: "15/09/1990",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "A.D. Ceuta F.C.", category: "2ª Div." },
            { season: "2024/25", team: "A.D. Ceuta F.C.", category: "1ª Federación - 1ª Federación Final de Campeones - Copa del Rey" },
            { season: "2023/24", team: "C.D. Eldense", category: "2ª Div. - Copa del Rey" },
            { season: "2022/23", team: "C.D. Eldense", category: "1ª Federación - 1ª Federación Prom. de Ascenso - Copa del Rey" },
            { season: "2021/22", team: "A.D. Alcorcón", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div." },
            { season: "2018/19", team: "Real Oviedo", category: "2ª Div." },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2016/17", team: "C.D. Lugo", category: "2ª Div. - Copa del Rey" },
            { season: "2015/16", team: "C.D. Lugo", category: "2ª Div. - Copa del Rey" },
            { season: "2014/15", team: "C.E. Sabadell F.C.", category: "2ª Div. - Copa del Rey" },
            { season: "2013/14", team: "C.E. Sabadell F.C.", category: "2ª Div. - Copa del Rey" },
            { season: "2012/13", team: "Real Zaragoza Deportivo Aragón", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2011/12", team: "Real Jaén C.F.", category: "2ª Div. B - Copa del Rey - 2ª Div. B Prom. de Ascenso" },
            { season: "2010/11", team: "Real Jaén C.F.", category: "2ª Div. B" },
            { season: "2009/10", team: "Real Jaén C.F.", category: "2ª Div. B" }
        ],
        stats: {
            "2020/21": {
                liga: { partidos: 17, goles_marcados: 0, tarjetas_amarillas: 4, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2019/20": {
                liga: { partidos: 30, goles_marcados: 0, tarjetas_amarillas: 9, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2018/19": {
                liga: { partidos: 27, goles_marcados: 4, tarjetas_amarillas: 8, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2017/18": {
                liga: { partidos: 38, goles_marcados: 6, tarjetas_amarillas: 12, tarjetas_rojas: 1 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "johannesson": {
        name: "Diego Johannesson Pando",
        footballName: "Johannesson",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/hv5QSY2k/Johannesson_PNG.webp",
        personalData: {
            fullName: "Diego Johannesson Pando",
            nickname: "Johannesson",
            birthPlace: "Villaviciosa, Asturias",
            country: "España",
            nationality: "Española, Islandesa",
            height: "1,75 m",
            birthDate: "03/10/1993",
            deathDate: null
        },
        career: [
            { season: "2022/23", team: "Albacete Balompié", category: "2ª Div." },
            { season: "2021/22", team: "Albacete Balompié", category: "1ª Federación - Copa del Rey" },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "F.C. Cartagena", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div." },
            { season: "2018/19", team: "Real Oviedo", category: "2ª Div." },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div." },
            { season: "2016/17", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2015/16", team: "Real Oviedo", category: "2ª Div." },
            { season: "2014/15", team: "Real Oviedo", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso - Copa del Rey" },
            { season: "2014/15", team: "Real Oviedo B", category: "3ª Div." },
            { season: "2013/14", team: "Real Oviedo B", category: "3ª Div." },
            { season: "2012/13", team: "Real Oviedo B", category: "3ª Div." }
        ],
        nationalTeam: [
            { season: "2017", team: "Islandia", category: "Amistosos" }
        ],
        stats: {
            "2020/21": {
                liga: { partidos: 7, goles_marcados: 1, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2019/20": {
                liga: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2018/19": {
                liga: { partidos: 36, goles_marcados: 2, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2017/18": {
                liga: { partidos: 32, goles_marcados: 4, tarjetas_amarillas: 8, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2016/17": {
                liga: { partidos: 17, goles_marcados: 0, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2015/16": {
                liga: { partidos: 18, goles_marcados: 0, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2014/15": {
                liga: { partidos: 13, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "juanjonieto": {
        name: "Juan José Nieto Zarzoso",
        footballName: "Juanjo Nieto",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/MKfv7dPG/Juanjo_Nieto_PNG.webp",
        personalData: {
            fullName: "Juan José Nieto Zarzoso",
            nickname: "Juanjo Nieto",
            birthPlace: "Castellón de la Plana, Castellón",
            country: "España",
            nationality: "Española",
            height: "1,74 m",
            birthDate: "03/10/1994",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "N.K. Celje", category: "Liga Eslovena SNL - Fase Previa Europa League - Fase Previa Conference League - Conference League" },
            { season: "2024/25", team: "N.K. Celje", category: "Liga Eslovena SNL - Copa Eslovenia - Fase Previa Conference League - Conference League" },
            { season: "2023/24", team: "S.D. Huesca", category: "2ª Div. - Copa del Rey" },
            { season: "2022/23", team: "S.D. Huesca", category: "2ª Div." },
            { season: "2021/22", team: "U.D. Almería", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div." },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "Hércules de Alicante C.F.", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2017/18", team: "Hércules de Alicante C.F.", category: "2ª Div. B - Copa del Rey" },
            { season: "2016/17", team: "R.C.D. Mallorca", category: "2ª Div." },
            { season: "2016/17", team: "Real Zaragoza", category: "2ª Div." },
            { season: "2016/17", team: "R.C.D. Mallorca B", category: "2ª Div. B" },
            { season: "2015/16", team: "C.D. Atlético Baleares", category: "2ª Div. B - Copa Federación" },
            { season: "2014/15", team: "Real Valladolid C.F. Promesas", category: "2ª Div. B" },
            { season: "2013/14", team: "Real Valladolid C.F. Promesas", category: "3ª Div. - 3ª Div. Prom. de Ascenso" }
        ],
        stats: {
            "2020/21": {
                liga: { partidos: 34, goles_marcados: 1, tarjetas_amarillas: 8, tarjetas_rojas: 1 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2019/20": {
                liga: { partidos: 25, goles_marcados: 2, tarjetas_amarillas: 9, tarjetas_rojas: 1 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "ugarte": {
        name: "Andoni Ugarte Mendizabal",
        footballName: "Ugarte",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/zfG7pyyp/Ugarte_PNG.webp",
        personalData: {
            fullName: "Andoni Ugarte Mendizabal",
            nickname: "Ugarte",
            birthPlace: "Oñate, Guipúzcoa",
            country: "España",
            nationality: "Española",
            height: "1,90 m",
            birthDate: "05/04/1995",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "U.D. Logroñés", category: "2ª Federación - Copa del Rey" },
            { season: "2024/25", team: "U.D. Logroñés", category: "2ª Federación - Copa del Rey" },
            { season: "2023/24", team: "U.D. Logroñés", category: "2ª Federación - 2ª Federación Prom. de Ascenso - Copa Federación - Copa Federación Fase Autonómica" },
            { season: "2022/23", team: "Sestao River Club", category: "2ª Federación - Copa del Rey" },
            { season: "2021/22", team: "C.D. Calahorra", category: "1ª Federación - Copa del Rey" },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div." },
            { season: "2020/21", team: "Real Oviedo B", category: "2ª Div. B - 2ª Div. B 2ª Fase de Permanencia 2ª RFEF" },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div." },
            { season: "2019/20", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2018/19", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2017/18", team: "Real Sociedad de Fútbol B", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2016/17", team: "Real Sociedad de Fútbol B", category: "2ª Div. B" },
            { season: "2015/16", team: "Real Sociedad de Fútbol B", category: "2ª Div. B" },
            { season: "2014/15", team: "Real Sociedad de Fútbol B", category: "2ª Div. B" },
            { season: "2013/14", team: "Real Sociedad de Fútbol Sub-19", category: "División de Honor" },
            { season: "2013/14", team: "Real Sociedad de Fútbol B", category: "2ª Div. B" },
            { season: "2013/14", team: "Real Sociedad de Fútbol Sub-19", category: "UEFA Youth League" },
            { season: "2012/13", team: "Real Sociedad de Fútbol B", category: "2ª Div. B" }
        ],
        stats: {
            "2020/21": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2019/20": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "javifernandez": {
        name: "Javier Fernández Hernández",
        footballName: "Javi Fernández",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/V6wjT2h4/Javi_Fernández_PNG.webp",
        personalData: {
            fullName: "Javier Fernández Hernández",
            nickname: "Javi Fernández",
            birthPlace: "Cartagena, Murcia",
            country: "España",
            nationality: "Española",
            height: "1,92 m",
            birthDate: "03/08/1997",
            deathDate: null
        },
        career: [
            { season: "2023/24", team: "Real Balompédica Linense", category: "2ª Federación" },
            { season: "2022/23", team: "F.C. Cartagena B", category: "2ª Federación" },
            { season: "2021/22", team: "San Fernando C.D.", category: "1ª Federación - Copa del Rey" },
            { season: "2020/21", team: "San Fernando C.D.", category: "2ª Div. B - 2ª Div. B 2ª Fase de Ascenso a 2ª" },
            { season: "2019/20", team: "Villarreal C.F. B", category: "2ª Div. B" },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "UCAM Murcia C.F.", category: "2ª Div. B - Copa del Rey" },
            { season: "2017/18", team: "UCAM Murcia C.F.", category: "2ª Div. B - Copa del Rey - Copa Federación" },
            { season: "2016/17", team: "UCAM Murcia C.F. B", category: "3ª Div." },
            { season: "2016/17", team: "UCAM Murcia C.F.", category: "2ª Div." }
        ],
        stats: {
            "2019/20": {
                liga: { partidos: 6, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 6, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "josin": {
        name: "José Antonio Martínez Álvarez",
        footballName: "Josín",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/Px6P4cnC/Josín_PNG.webp",
        personalData: {
            fullName: "José Antonio Martínez Álvarez",
            nickname: "Josín",
            birthPlace: "Oviedo, Asturias",
            country: "España",
            nationality: "Española",
            height: "1,81 m",
            birthDate: "29/07/1997",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Gimnástica Segoviana C.F.", category: "2ª Federación" },
            { season: "2024/25", team: "Real Avilés Industrial C.F.", category: "2ª Federación - 2ª Federación Prom. de Ascenso - Copa Federación Fase Autonómica" },
            { season: "2023/24", team: "U.D. San Sebastián de Los Reyes", category: "2ª Federación - 2ª Federación Prom. de Ascenso - Copa Federación Fase Autonómica" },
            { season: "2022/23", team: "C.P. Cacereño", category: "2ª Federación - 2ª Federación Prom. de Ascenso - Copa del Rey" },
            { season: "2021/22", team: "C.P. Cacereño", category: "2ª Federación - Copa del Rey" },
            { season: "2020/21", team: "C.D. Guijuelo", category: "2ª Div. B - 2ª Div. B 2ª Fase de Permanencia 2ª RFEF - Copa del Rey" },
            { season: "2019/20", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "Real Oviedo", category: "2ª Div. " },
            { season: "2018/19", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2017/18", team: "Real Oviedo B", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div." },
            { season: "2016/17", team: "Real Oviedo B", category: "3ª Div." },
            { season: "2016/17", team: "Real Oviedo", category: "2ª Div." },
            { season: "2015/16", team: "Real Oviedo B", category: "3ª Div." },
            { season: "2015/16", team: "Real Oviedo", category: "2ª Div." },
            { season: "2014/15", team: "Real Oviedo B", category: "3ª Div." },
            { season: "2014/15", team: "Real Oviedo Sub-19", category: "División de Honor" }
        ],
        stats: {
            "2019/20": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2018/19": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2017/18": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2016/17": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2015/16": {
                liga: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 1 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "jero": {
        name: "Jerónimo Rodríguez Güemes",
        footballName: "Jero",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/g2680YFN/Jero_PNG.webp",
        personalData: {
            fullName: "Jerónimo Rodríguez Güemes",
            nickname: "Jero",
            birthPlace: "Ciudad de México, Ciudad de México",
            country: "Méjico",
            nationality: "Mejicana",
            height: "1,80 m",
            birthDate: "25/03/1999",
            deathDate: null
        },
        career: [
            { season: "2024/25", team: "Venados F.C. Yucatán", category: "Liga de Expansión MX Apert." },
            { season: "2023/24", team: "Venados F.C. Yucatán", category: "Liga de Expansión MX Apert. - Liga de Expansión MX Claus." },
            { season: "2022/23", team: "Venados F.C. Yucatán", category: "Liga de Expansión MX Claus." },
            { season: "2022/23", team: "Club Universidad Nacional PUMAS", category: "Liga MX Apert." },
            { season: "2022/23", team: "Club Universidad Nacional PUMAS Sub-20", category: "Liga MX Sub-20 Apert." },
            { season: "2021/22", team: "Club Universidad Nacional PUMAS Sub-20", category: "Liga MX Sub-20 Apert." },
            { season: "2021/22", team: "Club Universidad Nacional PUMAS", category: "Liga MX Apert. - Liga MX Claus. - CONCACAF Champs. Cup - Etapas Finales Apert. MX" },
            { season: "2020/21", team: "Club Universidad Nacional PUMAS Sub-20", category: "Liga MX Sub-20 Apert." },
            { season: "2020/21", team: "Club Universidad Nacional PUMAS", category: "Liga MX Apert. - Liga MX Claus. - Etapas Finales Apert. MX - Leagues Cup" },
            { season: "2019/20", team: "Club Universidad Nacional PUMAS Sub-20", category: "Liga MX Sub-20 Claus." },
            { season: "2019/20", team: "Club Universidad Nacional PUMAS", category: "Liga MX Claus. - Copa Méjico" },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div." },
            { season: "2019/20", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2018/19", team: "Real Oviedo B", category: "2ª Div. B" }
        ],
        stats: {
            "2019/20": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "alanis": {
        name: "Oswaldo Alanís Pantoja",
        footballName: "Alanís",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/g2MqxMn2/Alanis-PNG.webp",
        personalData: {
            fullName: "Oswaldo Alanís Pantoja",
            nickname: "Alanís",
            birthPlace: "Morelia, Michoacán de Ocampo",
            country: "Méjico",
            nationality: "Mejicana",
            height: "1,83 m",
            birthDate: "18/03/1989",
            deathDate: null
        },
        career: [
            { season: "2023/24", team: "Hyderabad F.C.", category: "India Super League" },
            { season: "2022/23", team: "Mazatlán F.C.", category: "Liga MX Apert. - Liga MX Claus." },
            { season: "2021/22", team: "Mazatlán F.C.", category: "Liga MX Claus. - Etapas Finales Claus. MX" },
            { season: "2020/21", team: "San Jose Earthquakes", category: "MLS Liga USA" },
            { season: "2019/20", team: "San Jose Earthquakes", category: "MLS Liga USA" },
            { season: "2019/20", team: "C.D. Chivas Guadalajara", category: "Liga MX Apert. - Copa MX" },
            { season: "2018/19", team: "Real Oviedo", category: "2ª Div." },
            { season: "2018/19", team: "Getafe C.F.", category: "1ª Div." },
            { season: "2017/18", team: "C.D. Chivas Guadalajara", category: "Liga MX Apert. - Liga MX Claus. - Copa Méjico Apert. - CONCACAF Champs. Cup" },
            { season: "2016/17", team: "C.D. Chivas Guadalajara", category: "Liga MX Apert. - Liga MX Claus. - Copa Méjico Claus. - Etapas Finales Claus. MX - Copa Méjico Apert. - Etapas Finales Apert. - Campeón de Campeones Méjico" },
            { season: "2015/16", team: "C.D. Chivas Guadalajara", category: "Liga MX Apert. - Copa Méjico Apert." },
            { season: "2014/15", team: "Club Santos Laguna", category: "Liga MX Apert. - Liga MX Claus. - Copa Méjico Claus. - Copa Méjico Apert." },
            { season: "2013/14", team: "Club Santos Laguna", category: "Liga MX Apert. - Liga MX Claus. - Copa Libertadores - Etapas Finales Claus. - Copa Méjico Apert. - Etapas Finales Apert. MX" },
            { season: "2012/13", team: "Club Santos Laguna", category: "Liga MX Apert. - Liga MX Claus. - CONCACAF Champs. Cup" },
            { season: "2011/12", team: "Tecos F.C.", category: "Liga MX Apert. - Liga MX Claus." },
            { season: "2010/11", team: "Tecos F.C.", category: "Liga MX Apert. - Liga MX Claus." },
            { season: "2009/10", team: "Tecos F.C.", category: "Liga MX Apert. - Liga MX Claus. - Fase Previa Copa Libertadores" },
            { season: "2008/09", team: "Tecos F.C.", category: "Liga MX Claus. - Etapas Finales Claus. MX" },
            { season: "2008/09", team: "Tecos U.A.G. II", category: "Ascenso MX Apert." }
        ],
        nationalTeam: [
            { season: "2018", team: "Méjico", category: "Amistosos" },
            { season: "2017", team: "Méjico", category: "Clasif. Mundial CONCACAF - Copa Confederaciones - Amistosos" },
            { season: "2016", team: "Méjico", category: "Clasif. Mundial CONCACAF" },
            { season: "2015", team: "Méjico", category: "Clasif. Mundial CONCACAF - Copa Oro - Amistosos" },
            { season: "2014", team: "Méjico", category: "Amistosos" },
            { season: "2011", team: "Méjico", category: "Copa América" }
        ],
        stats: {
            "2018/19": {
                liga: { partidos: 24, goles_marcados: 1, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "forlin": {
        name: "Juan Daniel Forlín",
        footballName: "Forlín",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/W3ZH6Rkn/Forlín_PNG.webp",
        personalData: {
            fullName: "Juan Daniel Forlín",
            nickname: "Forlín",
            birthPlace: "Reconquista, Santa Fe",
            country: "Argentina",
            nationality: "Argentina, Española",
            height: "1,80 m",
            birthDate: "10/01/1988",
            deathDate: null
        },
        career: [
            { season: "2023/24", team: "C.F. Badalona", category: "3ª Federación" },
            { season: "2022/23", team: "Som Maresme F.C.", category: "2ª Federación - Copa de Catalunya" },
            { season: "2021/22", team: "Som Maresme F.C.", category: "1ª Federación - Copa Federación" },
            { season: "2020/21", team: "Som Maresme F.C.", category: "2ª Div. B - 2ª Div. B 2ª Fase 1ª Div. RFEF" },
            { season: "2019/20", team: "Júbilo Iwata", category: "2ª Japonesa J2" },
            { season: "2018/19", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2016/17", team: "Querétaro F.C.", category: "Liga MX Apert. - Liga MX Claus. - Copa Méjico Claus. - Copa Méjico Apert.." },
            { season: "2015/16", team: "Querétaro F.C.", category: "Liga MX Apert. - Liga MX Claus. - CONCACAF Champs. Cup" },
            { season: "2014/15", team: "C.A. Boca Juniors", category: "Copa Argentina" },
            { season: "2013/14", team: "C.A. Boca Juniors", category: "Claus. Argentina - Conmebol Sudamericana - Copa Argentina - Torneo de Transición" },
            { season: "2013/14", team: "Al-Rayyan S.C.", category: "Liga Catar" },
            { season: "2012/13", team: "R.C.D. Espanyol", category: "1ª Div. - Copa del Rey" },
            { season: "2011/12", team: "R.C.D. Espanyol", category: "1ª Div. - Copa del Rey" },
            { season: "2010/11", team: "R.C.D. Espanyol", category: "1ª Div. - Copa del Rey" },
            { season: "2009/10", team: "R.C.D. Espanyol", category: "1ª Div." },
            { season: "2008/09", team: "C.A. Boca Juniors", category: "Apert. Argentina - Claus. Argentina - Copa Libertadores" },
            { season: "2007/08", team: "C.A. Boca Juniors", category: "Claus. Argentina - Conmebol Sudamericana" }
        ],
        nationalTeam: [
            { season: "2009", team: "Argentina", category: "Amistosos" },
            { season: "2007", team: "Argentina Sub-20", category: "Mundial Sub-20" }
        ],
        stats: {
            "2018/19": {
                liga: { partidos: 13, goles_marcados: 0, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2017/18": {
                liga: { partidos: 33, goles_marcados: 2, tarjetas_amarillas: 13, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "carlosmartinez": {
        name: "Carlos Martínez Díez",
        footballName: "Carlos Martínez",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/sgSsXLnp/Carlos_Martínez_PNG.webp",
        personalData: {
            fullName: "Carlos Martínez Díez",
            nickname: "Carlos Martínez",
            birthPlace: "Lodosa, Navarra",
            country: "España",
            nationality: "Española",
            height: "1,88 m",
            birthDate: "09/04/1986",
            deathDate: null
        },
        career: [
            { season: "2019/20", team: "Burgos C.F.", category: "2ª Div. B - Copa Federación" },
            { season: "2018/19", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2017/18", team: "Real Sociedad de Fútbol", category: "1ª Div. - Copa del Rey" },
            { season: "2016/17", team: "Real Sociedad de Fútbol", category: "1ª Div. - Copa del Rey" },
            { season: "2015/16", team: "Real Sociedad de Fútbol", category: "1ª Div. - Copa del Rey" },
            { season: "2014/15", team: "Real Sociedad de Fútbol", category: "1ª Div. - Copa del Rey - Fase Previa Europa League" },
            { season: "2013/14", team: "Real Sociedad de Fútbol", category: "1ª Div. - Champs. League - Copa del Rey - Fase Previa Champs. League" },
            { season: "2012/13", team: "Real Sociedad de Fútbol", category: "1ª Div. - Copa del Rey" },
            { season: "2011/12", team: "Real Sociedad de Fútbol", category: "1ª Div. - Copa del Rey" },
            { season: "2010/11", team: "Real Sociedad de Fútbol", category: "1ª Div. - Copa del Rey" },
            { season: "2009/10", team: "Real Sociedad de Fútbol", category: "2ª Div." },
            { season: "2008/09", team: "Real Sociedad de Fútbol", category: "2ª Div. - Copa del Rey" },
            { season: "2007/08", team: "Real Sociedad de Fútbol", category: "2ª Div." },
            { season: "2006/07", team: "Real Sociedad de Fútbol", category: "1ª Div." },
            { season: "2006/07", team: "Real Sociedad de Fútbol B", category: "2ª Div. B" },
            { season: "2005/06", team: "Real Sociedad de Fútbol B", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2004/05", team: "Real Sociedad de Fútbol B", category: "2ª Div. B" }
        ],
        stats: {
            "2018/19": {
                liga: { partidos: 14, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "prendes": {
        name: "Alejandro Prendes Reina",
        footballName: "Prendes",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/nL4dCKbR/Prendes_PNG.webp",
        personalData: {
            fullName: "Alejandro Prendes Reina",
            nickname: "Prendes",
            birthPlace: "Avilés, Asturias",
            country: "España",
            nationality: "Española",
            height: "1,88 m",
            birthDate: "12/04/1997",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Il Delfino Curi Pescara", category: "Eccellenza Abruzzo - Coppa Italia Eccellenza Abruzzo" },
            { season: "2023/24", team: "Albanova Calcio", category: "Eccellenza Campania Girone A" },
            { season: "2023/24", team: "Caudal Deportivo", category: "3ª Federación - Copa Federación Fase Autonómica" },
            { season: "2022/23", team: "Real Avilés Industrial C.F.", category: "2ª Federación - Copa Federación - Copa Federación Fase Autonómica" },
            { season: "2021/22", team: "Real Avilés Industrial C.F.", category: "2ª Federación - Copa Federación - Copa Federación Fase Autonómica" },
            { season: "2020/21", team: "Real Avilés Industrial C.F.", category: "3ª Div. - 3ª Div. 2ª Fase de Ascenso a 2ª RFEF - Prom. de Ascenso a 2ª Div. RFEF" },
            { season: "2019/20", team: "Barakaldo C.F.", category: "2ª Div. B - Copa del Rey" },
            { season: "2019/20", team: "R.S. Gimnástica de Torrelavega", category: "3ª Div." },
            { season: "2019/20", team: "U.D. Almería B", category: "3ª Div." },
            { season: "2018/19", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2018/19", team: "Real Oviedo", category: "2ª Div." },
            { season: "2017/18", team: "Real Oviedo", category: "Copa del Rey" },
            { season: "2017/18", team: "Real Oviedo B", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2016/17", team: "Real Oviedo ", category: "2ª Div." },
            { season: "2016/17", team: "Real Oviedo B", category: "3ª Div." },
            { season: "2015/16", team: "Real Oviedo B", category: "3ª Div." },
            { season: "2014/15", team: "Veriña C.F.", category: "División de Honor" }
        ],
        stats: {
            "2018/19": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2017/18": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2016/17": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "javihernandez": {
        name: "Javier Hernández Carrera",
        footballName: "Javi Hernández",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/0jWDzjyH/Javi_Hernández_PNG.webp",
        personalData: {
            fullName: "Javier Hernández Carrera",
            nickname: "Javi Hernández",
            birthPlace: "Jerez de la Frontera, Cádiz",
            country: "España",
            nationality: "Española",
            height: "1,80 m",
            birthDate: "02/05/1998",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Al-Arabi S.C.", category: "Liga Catar - Copa de Las Estrellas" },
            { season: "2024/25", team: "C.D. Leganés", category: "1ª Div. - Copa del Rey" },
            { season: "2023/24", team: "Cádiz C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2022/23", team: "Girona F.C.", category: "1ª Div. - Copa del Rey" },
            { season: "2021/22", team: "C.D. Leganés", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "C.D. Leganés", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2019/20", team: "Real Madrid", category: "1ª Div. - Champs. League" },
            { season: "2019/20", team: "Real Madrid Castilla", category: "2ª Div. B" },
            { season: "2018/19", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2018/19", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2017/18", team: "Club Polideportivo El Ejido 2012", category: "2ª Div. B" },
            { season: "2016/17", team: "Real Madrid C.F. Sub-19", category: "UEFA Youth League - Copa de Campeones División de Honor" }
        ],
        stats: {
            "2018/19": {
                liga: { partidos: 25, goles_marcados: 1, tarjetas_amarillas: 7, tarjetas_rojas: 1 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "lobato": {
        name: "Rubén Lobato Cabal",
        footballName: "Lobato",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/zB3JJG4f/Lobato_PNG.webp",
        personalData: {
            fullName: "Rubén Lobato Cabal",
            nickname: "Lobato",
            birthPlace: "Madrid, Madrid",
            country: "España",
            nationality: "Española",
            height: "1,80 m",
            birthDate: "09/03/1994",
            deathDate: null
        },
        career: [
            { season: "2024/25", team: "C.F. Villanovense", category: "2ª Federación - 2ª Federación Prom. de Permanencia" },
            { season: "2023/24", team: "Sestao River Club", category: "1ª Federación - Copa del Rey" },
            { season: "2022/23", team: "C.D. Alcoyano", category: "1ª Federación" },
            { season: "2022/23", team: "Górnik Łęczna", category: "2ª Polonia - Copa Polonia" },
            { season: "2021/22", team: "Górnik Łęczna", category: "Liga Polaca - Copa Polonia" },
            { season: "2020/21", team: "Burgos C.F.", category: "2ª Div. B - Copa del Rey - 2ª Div. B Prom. de Ascenso - 2ª Div. B 2ª Fase de Ascenso a 2ª" },
            { season: "2019/20", team: "Burgos C.F.", category: "2ª Div. B" },
            { season: "2019/20", team: "Getafe C.F. B", category: "2ª Div. B" },
            { season: "2018/19", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2018/19", team: "Real Oviedo", category: "2ª Div." },
            { season: "2017/18", team: "Real Oviedo B", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2016/17", team: "A.D. Mérida", category: "2ª Div. B" },
            { season: "2016/17", team: "C.F. Fuenlabrada", category: "2ª Div. B - Copa Federación" },
            { season: "2015/16", team: "C.D. Lealtad de Villaviciosa", category: "2ª Div. B" },
            { season: "2014/15", team: "Pontevedra C.F.", category: "3ª Div." },
            { season: "2014/15", team: "Club At. de Madrid C", category: "3ª Div." },
            { season: "2013/14", team: "R.S.D. Alcalá", category: "3ª Div." }
        ],
        stats: {
            "2018/19": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "varela": {
        name: "Francisco Miguel Varela Martín",
        footballName: "Varela",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/ryrJhXp6/Varela_PNG.webp",
        personalData: {
            fullName: "Francisco Miguel Varela Martín",
            nickname: "Varela",
            birthPlace: "Atarfe, Granada",
            country: "España",
            nationality: "Española",
            height: "1,74 m",
            birthDate: "26/10/1994",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "U.D. Melilla", category: "2ª Federación - Copa Federación" },
            { season: "2024/25", team: "U.D. Melilla", category: "2ª Federación" },
            { season: "2024/25", team: "C.D. Atlético Paso", category: "2ª Federación" },
            { season: "2023/24", team: "Linares Deportivo", category: "1ª Federación - Copa del Rey" },
            { season: "2022/23", team: "Linares Deportivo", category: "1ª Federación" },
            { season: "2022/23", team: "C.D. Alcoyano", category: "1ª Federación - Copa Federación Fase Autonómica" },
            { season: "2021/22", team: "Som Maresme F.C.", category: "1ª Federación" },
            { season: "2021/22", team: "Extremadura U.D.", category: "1ª Federación - Copa del Rey" },
            { season: "2020/21", team: "San Fernando C.D.", category: "2ª Div. B - 2ª Div. B 2ª Fase de Ascenso a 2ª" },
            { season: "2020/21", team: "C.F. Os Belenenses", category: "Campeonato de Portugal" },
            { season: "2019/20", team: "Os Belenenses Sub-23", category: "Liga Revelação" },
            { season: "2019/20", team: "Os Belenenses", category: "Liga Portugal Betclic - Taça de Portugal" },
            { season: "2018/19", team: "C.F. Rayo Majadahonda", category: "2ª Div. - Copa del Rey" },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div." },
            { season: "2016/17", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2015/16", team: "Real Betis Balompié", category: "1ª Div. - Copa del Rey" },
            { season: "2014/15", team: "Real Betis Balompié", category: "2ª Div." },
            { season: "2014/15", team: "Real Betis Balompié B", category: "2ª Div. B" },
            { season: "2013/14", team: "Real Betis Balompié", category: "1ª Div. - Europa League" },
            { season: "2013/14", team: "Real Betis Balompié B", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2012/13", team: "Real Betis Balompié", category: "1ª Div." },
            { season: "2012/13", team: "Real Betis Balompié B", category: "2ª Div. B" },
            { season: "2011/12", team: "Real Betis Balompié B", category: "2ª Div. B" }
        ],
        nationalTeam: [
            { season: "2015", team: "España Sub-21", category: "Clasif. Europeo Sub-21" },
            { season: "2013", team: "España Sub-19", category: "Clasif. Europeo Sub-19 - Amistosos" },
            { season: "2012", team: "España Sub-20", category: "Torneo COTIF Sub-20" },
            { season: "2012", team: "España Sub-19", category: "Amistosos" }
        ],
        stats: {
            "2017/18": {
                liga: { partidos: 8, goles_marcados: 0, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2016/17": {
                liga: { partidos: 16, goles_marcados: 1, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "verdes": {
        name: "Héctor Verdés Ortega",
        footballName: "Verdés",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/CLp4XPZR/Verdés_PNG.webp",
        personalData: {
            fullName: "Héctor Verdés Ortega",
            nickname: "Verdés",
            birthPlace: "Villar del Arzobispo, Valencia",
            country: "España",
            nationality: "Española",
            height: "1,84 m",
            birthDate: "24/06/1984",
            deathDate: null
        },
        career: [
            { season: "2019/20", team: "C.D. Castellón", category: "2ª Div. B" },
            { season: "2018/19", team: "C.F. Rayo Majadahonda", category: "2ª Div. - Copa del Rey" },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div." },
            { season: "2016/17", team: "Real Oviedo", category: "2ª Div." },
            { season: "2015/16", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2014/15", team: "A.D. Alcorcón", category: "2ª Div." },
            { season: "2013/14", team: "A.D. Alcorcón", category: "2ª Div. - Copa del Rey" },
            { season: "2012/13", team: "Elche C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2011/12", team: "Elche C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2010/11", team: "Elche C.F.", category: "2ª Div. - 2ª Div. Prom. de Ascenso" },
            { season: "2009/10", team: "Valencia Mestalla", category: "2ª Div. B" },
            { season: "2008/09", team: "F.C. Barcelona Atlètic", category: "2ª Div. B" },
            { season: "2007/08", team: "Xerez C.D.", category: "2ª Div. - Copa del Rey" },
            { season: "2006/07", team: "Valencia Mestalla", category: "2ª Div. B - 2ª Div. B Prom. de Permanencia" },
            { season: "2003/04", team: "Valencia C.F. B", category: "2ª Div. B" }
        ],
        stats: {
            "2017/18": {
                liga: { partidos: 16, goles_marcados: 0, tarjetas_amarillas: 8, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2016/17": {
                liga: { partidos: 23, goles_marcados: 2, tarjetas_amarillas: 13, tarjetas_rojas: 1 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2015/16": {
                liga: { partidos: 16, goles_marcados: 0, tarjetas_amarillas: 12, tarjetas_rojas: 4 },
                copa: { partidos: 2, goles_marcados: 1, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "valentini": {
        name: "Martín Nahuel Valentini",
        footballName: "Valentini",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/mD0SbV86/Valentini_(2017)_PNG.webp",
        personalData: {
            fullName: "Martín Nahuel Valentini",
            nickname: "Valentini",
            birthPlace: "Fighiera, Santa Fe",
            country: "Argentina",
            nationality: "Argentina, Italiana",
            height: "1,84 m",
            birthDate: "19/09/1988",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "C.S. Scandicci", category: "Serie D - Coppa Italia Serie D" },
            { season: "2024/25", team: "U.S.D. Sestri Levante 1919", category: "Serie C" },
            { season: "2023/24", team: "Ars et Labor Ferrara SPAL", category: "Serie C - Coppa Italia Serie C" },
            { season: "2022/23", team: "A. Calcio Padova", category: "Serie C - Coppa Italia" },
            { season: "2021/22", team: "A. Calcio Padova", category: "Serie C - Coppa Italia - Coppa Italia Serie C" },
            { season: "2020/21", team: "L.R. Vicenza", category: "Serie B" },
            { season: "2020/21", team: "A. Calcio Padova", category: "Serie C - Coppa Italia - Coppa Italia Serie C" },
            { season: "2019/20", team: "Ascoli Calcio 1898 F.C.", category: "Serie B - Coppa Italia" },
            { season: "2018/19", team: "Ascoli Calcio 1898 F.C.", category: "Serie B" },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2016/17", team: "Spezia Calcio", category: "Serie B - Coppa Italia - Serie B Prom. de Ascenso" },
            { season: "2015/16", team: "Spezia Calcio", category: "Serie B - Coppa Italia - Serie B Prom. de Ascenso" },
            { season: "2014/15", team: "Spezia Calcio", category: "Serie B - Serie B Prom. de Ascenso" },
            { season: "2013/14", team: "U.S. Livorno 1915", category: "Serie A - Coppa Italia" },
            { season: "2012/13", team: "C.A. Rosario Central", category: "1ª Nacional" },
            { season: "2011/12", team: "C.A. Rosario Central", category: "1ª Nacional - Copa Argentina" },
            { season: "2010/11", team: "C.A. Rosario Central", category: "1ª Nacional" },
            { season: "2009/10", team: "C.A. Rosario Central", category: "Apert. Argentina - Claus. Argentina" },
            { season: "2008/09", team: "C.A. Rosario Central", category: "Apert. Argentina - Claus. Argentina" },
            { season: "2007/08", team: "C.A. Rosario Central", category: "Claus. Argentina" }
        ],
        stats: {
            "2017/18": {
                liga: { partidos: 7, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "cotugno": {
        name: "Martín Nahuel Valentini",
        footballName: "Cotugno",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/qRqFthk9/Cotugno_PNG.webp",
        personalData: {
            fullName: "Martín Nahuel Valentini",
            nickname: "Cotugno",
            birthPlace: "Montevideo, Montevideo",
            country: "Uruguay",
            nationality: "Uruguaya, Italiana",
            height: "1,77 m",
            birthDate: "12/03/19952025/26",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Racing Club de Montevideo", category: "Copa Uruguay" },
            { season: "2024/25", team: "Racing Club de Montevideo", category: "Apert. Uruguay - Claus. Uruguay - Conmebol Sudamericana - Fase Previa Conmebol Sudamericana - Torneo Intermedio Uruguay - Copa Uruguay" },
            { season: "2023/24", team: "Racing Club de Montevideo", category: "Apert. Uruguay - Claus. Uruguay - Conmebol Sudamericana - Fase Previa Conmebol Sudamericana - Torneo Intermedio Uruguay" },
            { season: "2023/24", team: "C.D. Maldonado", category: "Copa Uruguay" },
            { season: "2022/23", team: "C.D. Maldonado", category: "Apert. Uruguay - Claus. Uruguay - Fase Previa Copa Libertadores - Torneo Intermedio Uruguay - Copa Uruguay" },
            { season: "2021/22", team: "C.D. Maldonado", category: "Apert. Uruguay - Claus. Uruguay - Torneo Intermedio Uruguay" },
            { season: "2020/21", team: "C.D. Maldonado", category: "Claus. Uruguay" },
            { season: "2020/21", team: "Śląsk Wrocław II", category: "3ª Polonia" },
            { season: "2020/21", team: "Śląsk Wrocław", category: "Liga Polaca" },
            { season: "2019/20", team: "Śląsk Wrocław", category: "Liga Polaca" },
            { season: "2018/19", team: "Club Nacional de Footbal", category: "Apert. Uruguay - Claus. Uruguay - Copa Libertadores - Supercopa Uruguay - Torneo Intermedio Uruguay" },
            { season: "2017/18", team: "Club Nacional de Footbal", category: "Claus. Uruguay" },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2016/17", team: "Club Atlético Talleres", category: "Copa Argentina - Liga Profesional Argentina" },
            { season: "2015/16", team: "F.C. Rubin Kazán", category: "Premier League Rusia - Europa League - Fase Previa Europa League" },
            { season: "2014/15", team: "F.C. Rubin Kazán", category: "Premier League Rusia - Copa Rusa" },
            { season: "2014/15", team: "Danubio F.C.", category: "Apert. Uruguay - Claus. Uruguay - Copa Libertadores" },
            { season: "2013/14", team: "Danubio F.C.", category: "Claus. Uruguay - Conmebol Sudamericana - Uruguay Final de Campeones" }
        ],
        nationalTeam: [
            { season: "2015", team: "Uruguay Sub-20", category: "Mundial Sub-20 - Sudamericano Sub-20 - Amistosos" }
        ],
        stats: {
            "2017/18": {
                liga: { partidos: 29, goles_marcados: 1, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "alvaro": {
        name: "Álvaro García Fernández",
        footballName: "Álvaro",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/02sbphRN/Alvaro-2017.webp",
        personalData: {
            fullName: "Álvaro García Fernández",
            nickname: "Álvaro",
            birthPlace: "Oviedo, Asturias",
            country: "España",
            nationality: "Española",
            height: "1,84 m",
            birthDate: "15/03/1998",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "C.D. Lealtad de Villaviciosa", category: "2ª Federación" },
            { season: "2024/25", team: "U.D. Llanera", category: "2ª Federación - Copa del Rey" },
            { season: "2023/24", team: "C.D. Covadonga", category: "2ª Federación - Copa del Rey" },
            { season: "2022/23", team: "C.D. Covadonga", category: "3ª Federación - Copa Federación Fase Autonómica" },
            { season: "2021/22", team: "C.D. Llanes", category: "3ª Federación" },
            { season: "2021/22", team: "U.P. de Langreo", category: "2ª Federación - Copa Federación" },
            { season: "2021/22", team: "C.D. Llanes", category: "3ª Div." },
            { season: "2020/21", team: "C.D. Covadonga", category: "2ª Div. B - Copa Federación Fase Autonómica - 2ª Div. B 2ª Fase de Permanencia a 2ª RFEF" },
            { season: "2019/20", team: "C.D. Numancia B", category: "3ª Div." },
            { season: "2018/19", team: "C.D. Llanes", category: "3ª Div." },
            { season: "2017/18", team: "C.D. Praviano", category: "3ª Div." },
            { season: "2017/18", team: "Real Oviedo B", category: "3ª Div." },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div." },
            { season: "2016/17", team: "Real Oviedo Sub-19", category: "División de Honor" },
            { season: "2015/16", team: "Real Oviedo Sub-19", category: "División de Honor" },
            { season: "2014/15", team: "Real Oviedo Sub-19", category: "División de Honor" }

        ],
        stats: {
            "2017/18": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "fran": {
        name: "Francisco Álvarez Fernández",
        footballName: "Fran",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/WzPf59mP/Fran_(2018)_PNG.webp",
        personalData: {
            fullName: "Francisco Álvarez Fernández",
            nickname: "Fran",
            birthPlace: "Colunga, Asturias",
            country: "España",
            nationality: "Española",
            height: "1,74 m",
            birthDate: "09/01/2000",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "L'Entregu C.F.", category: "3ª Federación - Copa Federación Fase Autonómica" },
            { season: "2024/25", team: "C.D. Covadonga", category: "3ª Federación - Copa Federación Fase Autonómica - 3ª Federación Prom. de Ascenso" },
            { season: "2023/24", team: "C.D. Llanes", category: "3ª Federación - Copa Federación Fase Autonómica" },
            { season: "2022/23", team: "Racing Rioja C.F.", category: "2ª Federación" },
            { season: "2022/23", team: "U.P. de Langreo", category: "2ª Federación - Copa Federación Fase Autonómica" },
            { season: "2021/22", team: "Vélez C.F.", category: "2ª Federación - Copa del Rey" },
            { season: "2020/21", team: "Real Oviedo B", category: "2ª Div. B - 2ª Div. B 2ª Fase de Permanencia a 2ª RFEF" },
            { season: "2019/20", team: "C.D. Praviano", category: "3ª Div." },
            { season: "2018/19", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2018/19", team: "Real Oviedo Sub-19", category: "División de Honor" },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div." },
            { season: "2017/18", team: "Real Oviedo Sub-19", category: "División de Honor" },
            { season: "2016/17", team: "Real Oviedo Sub-19", category: "División de Honor" },
            { season: "2015/16", team: "Real Oviedo Sub-19", category: "División de Honor" }
        ],
        stats: {
            "2017/18": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "gabri": {
        name: "Gabriel Sebastián Cardozo Tomás",
        footballName: "Gabri",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/htZy2X2f/Gabri_PNG_(Gabriel_Sebastián_Cardozo_Tomás)_2017.webp",
        personalData: {
            fullName: "Gabriel Sebastián Cardozo Tomás",
            nickname: "Gabri",
            birthPlace: "Montevideo, Montevideo",
            country: "Uruguay",
            nationality: "Uruguaya, Española",
            height: "1,90 m",
            birthDate: "27/12/1997",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "St. Joseph's F.C.", category: "Premier División Gibraltar - Fase Previa Conference League" },
            { season: "2024/25", team: "St. Joseph's F.C.", category: "Premier División Gibraltar - Rock Cup Gibraltar - Supercopa Gigraltar - Fase Previa Conference League" },
            { season: "2023/24", team: "St. Joseph's F.C.", category: "Premier División Gibraltar - Rock Cup Gibraltar" },
            { season: "2022/23", team: "U.D. Montijo", category: "2ª Federación" },
            { season: "2021/22", team: "U.D. Montijo", category: "2ª Federación - Copa del Rey" },
            { season: "2020/21", team: "Pobla de Mafumet C.F.", category: "3ª Div. - 3ª Div. 2ª Fase de Permanencia en 3ª RFEF" },
            { season: "2019/20", team: "Extremadura U.D.", category: "2ª Div." },
            { season: "2019/20", team: "Extremadura U.D. B", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2018/19", team: "Extremadura U.D. B", category: "3ª Div." },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div." },
            { season: "2017/18", team: "Real Oviedo B", category: "3ª Div." },
            { season: "2016/17", team: "Club At. Malagueño", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2015/16", team: "Málaga C.F. Sub-19", category: "División de Honor" }
        ],
        stats: {
            "2017/18": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "emiliomorilla": {
        name: "Emilio Morilla Losada",
        footballName: "Emilio Morilla",
        position: "Defensa",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/FKBMVgn9/Emilio_Morilla_PNG.webp",
        personalData: {
            fullName: "Emilio Morilla Losada",
            nickname: "Emilio Morilla",
            birthPlace: "Oviedo, Asturias",
            country: "España",
            nationality: "Española",
            height: "1,80 m",
            birthDate: "04/10/1995",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "C.D. Covadonga", category: "3ª Federación" },
            { season: "2024/25", team: "C.D. Covadonga", category: "3ª Federación - Copa Federación Fase Autonómica - 3ª Federación Prom. de Ascenso" },
            { season: "2023/24", team: "C.D. Covadonga", category: "2ª Federación - Copa del Rey" },
            { season: "2022/23", team: "C.D. Covadonga", category: "3ª Federación - Copa Federación Fase Autonómica" },
            { season: "2021/22", team: "Club Marino de Luanco", category: "2ª Federación" },
            { season: "2020/21", team: "Club Marino de Luanco", category: "2ª Div. B - Copa Federación Fase Autonómica - 2ª Div. B 2ª Fase 1ª Div. RFEF" },
            { season: "2019/20", team: "Club Marino de Luanco", category: "2ª Div. B - Copa del Rey" },
            { season: "2018/19", team: "Club Marino de Luanco", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2017/18", team: "Real Oviedo B", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div." },
            { season: "2016/17", team: "Real Oviedo B", category: "3ª Div." },
            { season: "2015/16", team: "Caudal Deportivo", category: "3ª Div." },
            { season: "2015/16", team: "Real Oviedo B", category: "3ª Div." },
            { season: "2014/15", team: "Real Oviedo", category: "2ª Div. B Prom. de Ascenso" },
            { season: "2014/15", team: "Real Oviedo B", category: "3ª Div." },
            { season: "2013/14", team: "Real Oviedo B", category: "3ª Div." },
            { season: "2013/14", team: "Real Oviedo Sub-19", category: "División de Honor" }
        ],
        stats: {
            "2017/18": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2014/15": {
                liga: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
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
                liga: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
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
                liga: { partidos: 21, goles_marcados: 2, tarjetas_amarillas: 4, tarjetas_rojas: 1 },
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
            { season: "2021/22", team: "Betis Deportivo Balompié", category: "1ª Federación" },
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
                liga: { partidos: 13, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
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
            { season: "2021/22", team: "Al-Sadd S.C.", category: "AFC Champs. League Elite - Liga Catar - Copa Emir Catar - Copa de Catar" },
            { season: "2020/21", team: "Al-Sadd S.C.", category: "AFC Champs. League Elite - Liga Catar - Copa Emir Catar - Copa de Catar - Copa de Las Estrellas" },
            { season: "2019/20", team: "Al-Sadd S.C.", category: "AFC Champs. League Elite - Copa de Las Estrellas" },
            { season: "2019/20", team: "Villarreal C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2018/19", team: "Villarreal C.F.", category: "1ª Div. - Europa League - Copa del Rey" },
            { season: "2016/17", team: "Arsenal F.C.", category: "Premier League - Champs. League" },
            { season: "2015/16", team: "Arsenal F.C. Sub-21", category: "Premier League 2ª Div. Two" },
            { season: "2015/16", team: "Arsenal F.C.", category: "Premier League - Champs. League - Community Shield" },
            { season: "2014/15", team: "Arsenal F.C.", category: "Premier League - Champs. League - FA Cup - Community Shield - EFL Cup - Previa Champs. League" },
            { season: "2013/14", team: "Arsenal F.C.", category: "Premier League - Champs. League - FA Cup - EFL Cup - Previa Champs. League" },
            { season: "2012/13", team: "Arsenal F.C.", category: "Premier League - Champs. League - FA Cup - EFL Cup" },
            { season: "2011/12", team: "Málaga C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2010/11", team: "Villarreal C.F.", category: "1ª Div. - Europa League - Copa del Rey - Previa Europa League" },
            { season: "2009/10", team: "Villarreal C.F.", category: "1ª Div. - Europa League - Copa del Rey - Previa Europa League" },
            { season: "2008/09", team: "Villarreal C.F.", category: "1ª Div. - Champs. League - Copa del Rey" },
            { season: "2007/08", team: "Villarreal C.F.", category: "1ª Div. - Europa League - Copa del Rey" },
            { season: "2006/07", team: "R.C. Recreativo de Huelva", category: "1ª Div." },
            { season: "2005/06", team: "Villarreal C.F.", category: "1ª Div. - Champs. League" },
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
                liga: { partidos: 13, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 1 },
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
                liga: { partidos: 21, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
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
            { season: "2021/22", team: "Club León F.C.", category: "Liga MX Apert. - Liga MX Claus. - CONCACAF Champs. Cup - Etapas Finales Apert. MX" },
            { season: "2020/21", team: "Club León F.C.", category: "Liga MX Claus. - Etapas Finales Claus. MX - CONCACAF Champs. Cup - Leagues Cup" },
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
                liga: { partidos: 18, goles_marcados: 0, tarjetas_amarillas: 4, tarjetas_rojas: 0 },
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
            { season: "2018/19", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2018/19", team: "Real Oviedo", category: "2ª Div." },
            { season: "2017/18", team: "Real Oviedo B", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2016/17", team: "R.C.D. Mallorca B", category: "2ª Div. B" },
            { season: "2016/17", team: "Real Madrid Castilla", category: "2ª Div. B" },
            { season: "2015/16", team: "C.F. Fuenlabrada", category: "2ª Div. B" },
            { season: "2014/15", team: "Real Madrid C.F. Sub-19", category: "División de Honor - UEFA Youth League" }
            
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
            { season: "2025/26", team: "Hertha Berlín S.C.", category: "2ª Alemania" },
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
            { season: "2015/16", team: "G.N.K. Dinamo Zagreb II", category: "1ª Croacia 1 NL" }
            
            
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
                liga: { partidos: 14, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
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
            { season: "2017/18", team: "R.S.C. Anderlecht", category: "Liga Belga - Champs. League - Copa Belga" },
            { season: "2016/17", team: "R.S.C. Anderlecht", category: "Liga Belga - Europa League - Copa Belga - Fase Previa Champ. League - Fase Previa Europa League" },
            { season: "2015/16", team: "R.S.C. Anderlecht", category: "Liga Belga - Europa League - Prom. Liga Belga - Copa Belga" },
            { season: "2014/15", team: "R.S.C. Anderlecht", category: "Liga Belga - Champs. League - Europa League - Copa Belga - Supercopa Belga" },
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
                liga: { partidos: 18, goles_marcados: 1, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
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
            { season: "2024/25", team: "Estrella Roja de Belgrado", category: "Champs. League - Liga Serbia - Copa Serbia - Fase Previa Champs. League" },
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
                liga: { partidos: 14, goles_marcados: 1, tarjetas_amarillas: 4, tarjetas_rojas: 1 },
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
            { season: "2025/26", team: "A.E.K. Larnaca", category: "Liga Chipre" },
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
            { season: "2020/21", team: "Real Oviedo B", category: "2ª Div. B - 2ª Div. B Perm. 2ª Div. B" },
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
            { season: "2019/20", team: "Valencia Mestalla", category: "2ª Div. B" },
            { season: "2019/20", team: "Córdoba C.F.", category: "2ª Div. B - Copa del Rey" },
            { season: "2018/19", team: "Valencia Mestalla", category: "2ª Div. B" },
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

    "portillo": {
        name: "Francisco Portillo Soler",
        footballName: "Portillo",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/br8zc90Q/Portillo_PNG_(3).webp", 
    personalData: {
        fullName: "Francisco Portillo Soler",
        nickname: "Portillo",
        birthPlace: "Málaga, Málaga",
        country: "España",
        nationality: "Española",
        height: "1,69 m",
        birthDate: "13/06/1990",
        deathDate: null // Poner null si el jugador está vivo
   },
        career: [  
            { season: "2025/26", team: "S.D. Huesca", category: "2ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - 2ª Div. Prom. de Ascenso" },
            { season: "2023/24", team: "C.D. Leganés", category: "2ª Div. - Copa del Rey" },
            { season: "2022/23", team: "U.D. Almería", category: "1ª Div. - Copa del Rey" },
            { season: "2021/22", team: "U.D. Almería", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Getafe C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Getafe C.F.", category: "1ª Div. - Europa League - Copa del Rey" },
            { season: "2018/19", team: "Getafe C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2017/18", team: "Getafe C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2016/17", team: "Getafe C.F.", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2015/16", team: "Real Betis Balompié", category: "1ª Div. - Copa del Rey" },
            { season: "2014/15", team: "Real Betis Balompié", category: "2ª Div." },
            { season: "2014/15", team: "Málaga C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2013/14", team: "Málaga C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2012/13", team: "Málaga C.F.", category: "1ª Div. - Champs. League - Copa del Rey - Fase Previa Champs. League" },
            { season: "2011/12", team: "Málaga C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2010/11", team: "Málaga C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2009/10", team: "Málaga C.F.", category: "1ª Div." },
            { season: "2009/10", team: "At. Malagueño", category: "3ª Div." }

            
         ],

         
         stats: {
            "2024/25": {
                liga: { partidos: 24, goles_marcados: 2, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
             
        }
    },

    "delahoz": {
        name: "César de La Hoz López",
        footballName: "De La Hoz",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/Z5nr38kY/De_La_Hoz_PNG_(3).webp", 
    personalData: {
        fullName: "César de La Hoz López",
        nickname: "De La Hoz",
        birthPlace: "Orejo, Cantabria",
        country: "España",
        nationality: "Española",
        height: "1,79 m",
        birthDate: "30/03/1992",
        deathDate: null // Poner null si el jugador está vivo
   },
        career: [  
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - 2ª Div. Prom. de Ascenso" },
            { season: "2024/25", team: "Real Valladolid C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2023/24", team: "Real Valladolid C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2022/23", team: "U.D. Almería", category: "1ª Div. - Copa del Rey" },
            { season: "2021/22", team: "U.D. Almería", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "U.D. Almería", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2019/20", team: "U.D. Almería", category: "2ª Div. - 2ª Div. Prom. de Ascenso" },
            { season: "2018/19", team: "U.D. Almería", category: "2ª Div. - Copa del Rey" },
            { season: "2017/18", team: "Albacete Balompié", category: "2ª Div. - Copa del Rey" },
            { season: "2016/17", team: "Betis Deportivo Balompié", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2015/16", team: "Betis Deportivo Balompié", category: "2ª Div. B" },
            { season: "2014/15", team: "Betis Deportivo Balompié", category: "2ª Div. B" },
            { season: "2013/14", team: "Barakaldo C.F.", category: "2ª Div. B - Copa del Rey" },
            { season: "2012/13", team: "Real Racing Club de Santander B", category: "2ª Div. B" },
            { season: "2012/13", team: "Real Racing Club de Santander", category: "2ª Div." },
            { season: "2011/12", team: "Real Racing Club de Santander", category: "1ª Div." },
            { season: "2011/12", team: "Real Racing Club de Santander B", category: "3ª Div. - Copa Federación" },
            { season: "2010/11", team: "Real Racing Club de Santander B", category: "3ª Div. Prom. de Ascenso" }

            
         ],

         
         stats: {
            "2024/25": {
                liga: { partidos: 15, goles_marcados: 0, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
             
        }
    },

    "paulino2024": {
        name: "Paulino de la Fuente Gómez",
        footballName: "Paulino",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/SxkLgnn3/Paulino_PNG.webp", 
    personalData: {
        fullName: "Paulino de la Fuente Gómez",
        nickname: "Paulino",
        birthPlace: "Santander, Cantabria",
        country: "España",
        nationality: "Española",
        height: "1,84 m",
        birthDate: "27/06/1997",
        deathDate: null // Poner null si el jugador está vivo
   },
        career: [  
            { season: "2025/26", team: "Real Zaragoza", category: "2ª Div." },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - 2ª Div. Prom. de Ascenso" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div. - 2ª Div. Prom. de Ascenso" },
            { season: "2023/24", team: "Pachuca C.F.", category: "Liga MX Apert." },
            { season: "2022/23", team: "Pachuca C.F. Sub-20", category: "Liga MX Sub-20 Claus. - Liga MX Sub-20 Apert." },
            { season: "2022/23", team: "Pachuca C.F.", category: "Liga MX Apert. - Liga MX Claus. - Etapas Finales Claus. MX - Etapas Finales Apert. MX - Campeón de Campeones Méjico" },
            { season: "2021/22", team: "Málaga C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "U.D. Logroñés", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Deportivo Alavés", category: "1ª Div." },
            { season: "2019/20", team: "Deportivo Alavés B", category: "2ª Div. B" },
            { season: "2018/19", team: "Deportivo Alavés B", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2017/18", team: "Deportivo Alavés B", category: "3ª Div. - Copa Federación - 3ª Div. Prom. de Ascenso" },
            { season: "2016/17", team: "Deportivo Alavés B", category: "3ª Div. - Copa Federación - 3ª Div. Prom. de Ascenso" },
            { season: "2015/16", team: "F.C. Inter Primavera Sub-19", category: "Campionato Primavera 1 - Coppa Italia Primavera" }
            

         ],

         
         stats: {
            "2024/25": {
                liga: { partidos: 28, goles_marcados: 1, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2023/24": {
                liga: { partidos: 37, goles_marcados: 9, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
             
        }
    },

    "seoane2024": {
        name: "Jaime Seoane Valenciano",
        footballName: "Seoane",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/HLCvtvT4/Seoane_PNG.webp", 
    personalData: {
        fullName: "Jaime Seoane Valenciano",
        nickname: "Seoane",
        birthPlace: "Madrid, Madrid",
        country: "España",
        nationality: "Española",
        height: "1,77 m",
        birthDate: "22/01/1997",
        deathDate: null // Poner null si el jugador está vivo
   },
        career: [  
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - 2ª Div. Prom. de Ascenso" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2022/23", team: "Getafe C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2021/22", team: "S.D. Huesca", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "S.D. Huesca", category: "1ª Div. - Copa del Rey" },
            { season: "2019/20", team: "C.D. Lugo", category: "2ª Div." },
            { season: "2019/20", team: "S.D. Huesca", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "Real Madrid C.F.", category: "1ª Div." },
            { season: "2018/19", team: "Real Madrid Castilla", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2017/18", team: "Real Madrid C.F.", category: "Copa del Rey" },
            { season: "2017/18", team: "Real Madrid Castilla", category: "2ª Div. B" },
            { season: "2016/17", team: "Real Madrid Castilla", category: "2ª Div. B" },
            { season: "2016/17", team: "Real Madrid Sub-19", category: "UEFA Youth League" },
            { season: "2015/16", team: "Real Madrid C.F. Sub-19", category: "División de Honor - UEFA Youth League" },
            { season: "2014/15", team: "Real Madrid C.F. C", category: "3ª Div." }

         ],

         
         stats: {
            "2024/25": {
                liga: { partidos: 29, goles_marcados: 3, tarjetas_amarillas: 5, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2023/24": {
                liga: { partidos: 41, goles_marcados: 4, tarjetas_amarillas: 9, tarjetas_rojas: 1 },
                copa: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
             
        }
    },

    "dotor": {
        name: "Carlos Dotor González",
        footballName: "Dotor",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/gcwFM5v3/Carlos_Dotor_PNG.webp", 
    personalData: {
        fullName: "Carlos Dotor González",
        nickname: "Dotor",
        birthPlace: "Madrid, Madrid",
        country: "España",
        nationality: "Española",
        height: "1,80 m",
        birthDate: "15/03/2001",
        deathDate: null // Poner null si el jugador está vivo
   },
        career: [  
            { season: "2025/26", team: "Málaga C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Real Sporting de Gijón", category: "2ª Div." },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div." },
            { season: "2023/24", team: "R.C. Celta de Vigo", category: "1ª Div. - Copa del Rey" },
            { season: "2022/23", team: "Real Madrid C.F.", category: "1ª Div. - Champs. League" },
            { season: "2022/23", team: "Real Madrid Castilla", category: "1ª Federación - 1ª Federación Prom. de Ascenso" },
            { season: "2021/22", team: "Real Madrid Castilla", category: "1ª Federación" },
            { season: "2020/21", team: "Real Madrid Castilla", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso - 2ª Div. B fase Ascenso a 2ª" },
            { season: "2019/20", team: "Real Madrid Castilla", category: "2ª Div. B" },
            { season: "2019/20", team: "Real Madrid C.F. Sub-19", category: "UEFA Youth League" }
            

         ],

         
         stats: {
            "2024/25": {
                liga: { partidos: 6, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
             
        }
    },

    "valdera": {
        name: "Rubén Valdera Martínez",
        footballName: "Valdera",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/V6J7fxgw/Valdera_PNG.webp", 
    personalData: {
        fullName: "Rubén Valdera Martínez",
        nickname: "Valdera",
        birthPlace: "Bollullos Par del Condado, Huelva",
        country: "España",
        nationality: "Española",
        height: "1,85 m",
        birthDate: "25/02/2003",
        deathDate: null // Poner null si el jugador está vivo
   },
        career: [  
            { season: "2025/26", team: "C.P. Cacereño", category: "Copa del Rey - 1ª Federación" },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div." },
            { season: "2024/25", team: "Real Oviedo Vetusta", category: "3ª Federación" },
            { season: "2023/24", team: "C.D. Estepona", category: "2ª Federación" },
            { season: "2022/23", team: "C.D. Estepona", category: "2ª Federación" },
            { season: "2021/22", team: "Club At. de Madrid Sub-19", category: "División de Honor - UEFA Youth League - Copa de Campeones División de Honor - Copa del Rey Juvenil" },
            { season: "2020/21", team: "Club At. de Madrid B Sub-19", category: "División de Honor" }
            
         ],

         
         stats: {
            "2024/25": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
             
        }
    },

    "castri": {
        name: "Guillermo Castrillejo Manso",
        footballName: "Castri",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/Y0FPt53V/Castri_PNG.webp", 
    personalData: {
        fullName: "Guillermo Castrillejo Manso",
        nickname: "Castri",
        birthPlace: "Villahán, Palencia",
        country: "España",
        nationality: "Española",
        height: "1,78 m",
        birthDate: "01/10/2002",
        deathDate: null // Poner null si el jugador está vivo
   },
        career: [  
            { season: "2025/26", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2024/25", team: "Real Oviedo Vetusta", category: "3ª Federación" },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div." },
            { season: "2023/24", team: "C.D. Badajoz", category: "2ª Federación" },
            { season: "2022/23", team: "S.D. Logroñés", category: "1ª Federación" },
            { season: "2021/22", team: "Real Valladolid C.F. Promesas", category: "1ª Federación" },
            { season: "2020/21", team: "Real Valladolid C.F. Sub-19", category: "División de Honor" },
            { season: "2020/21", team: "Real Valladolid C.F. Promesas", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2019/20", team: "Real Valladolid C.F. Promesas", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" }
            
         ],

         
         stats: {
            "2024/25": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
             
        }
    },

    "luismi2023": {
        name: "Luis Miguel Sánchez Benítez",
        footballName: "Luismi",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/ydshDwst/Luismi_(casco)_PNG.webp",
        personalData: {
            fullName: "Luis Miguel Sánchez Benítez",
            nickname: "Luismi",
            birthPlace: "Puerto Serrano, Cádiz",
            country: "España",
            nationality: "Española",
            height: "1,79 m",
            birthDate: "05/05/1992",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Málaga C.F.", category: "2ª Div." },
            { season: "2024/25", team: "Málaga C.F.", category: "2ª Div." },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div. - 2ª Div. Prom. de Ascenso" },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Elche C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Real Valladolid C.F.", category: "1ª Div." },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div." },
            { season: "2019/20", team: "Real Valladolid C.F.", category: "Copa del Rey" },
            { season: "2018/19", team: "Real Valladolid C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2017/18", team: "Real Valladolid C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2016/17", team: "Gimnàstic de Tarragona", category: "2ª Div." },
            { season: "2016/17", team: "Real Valladolid C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2015/16", team: "Sevilla F.C.", category: "1ª Div. - Champs. League - Copa del Rey - Supercopa Europa" },
            { season: "2014/15", team: "Sevilla At.", category: "2ª Div. B" },
            { season: "2014/15", team: "Sevilla F.C.", category: "1ª Div. - Copa del Rey" },
            { season: "2013/14", team: "Sevilla F.C.", category: "1ª Div. - Europa League" },
            { season: "2013/14", team: "Sevilla At.", category: "2ª Div. B" },
            { season: "2012/13", team: "Sevilla At.", category: "2ª Div. B" }
        ],
        stats: {
            "2023/24": {
                liga: { partidos: 24, goles_marcados: 0, tarjetas_amarillas: 9, tarjetas_rojas: 1 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2022/23": {
                liga: { partidos: 31, goles_marcados: 1, tarjetas_amarillas: 16, tarjetas_rojas: 1 },
                copa: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 }
            },
            "2021/22": {
                liga: { partidos: 32, goles_marcados: 1, tarjetas_amarillas: 8, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2019/20": {
                liga: { partidos: 19, goles_marcados: 1, tarjetas_amarillas: 4, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "jimmy": {
        name: "Jaime Suárez Juesas",
        footballName: "Jimmy",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/qMxTnKsF/Jimmy_PNG.webp",
        personalData: {
            fullName: "Jaime Suárez Juesas",
            nickname: "Jimmy",
            birthPlace: "Oviedo, Asturias",
            country: "España",
            nationality: "Española",
            height: "1,70 m",
            birthDate: "31/12/1996",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "A.E.K. Larnaca", category: "Liga Chipre - Fase Previa Europa League - Supercopa de Chipre - Conference League" },
            { season: "2024/25", team: "A.E.K. Larnaca", category: "Liga Chipre - Copa de Chipre - Fase Previa Conference League" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2017/18", team: "Real Oviedo B", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2016/17", team: "Real Oviedo B", category: "3ª Div." },
            { season: "2015/16", team: "Astur C.F.", category: "3ª Div." },
            { season: "2014/15", team: "Real Oviedo Sub-19", category: "División de Honor" },
            { season: "2013/14", team: "Real Oviedo Sub-19", category: "División de Honor" }
        ],
        stats: {
            "2023/24": {
                liga: { partidos: 31, goles_marcados: 0, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 6, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2022/23": {
                liga: { partidos: 23, goles_marcados: 1, tarjetas_amarillas: 5, tarjetas_rojas: 0 },
                copa: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 7, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2021/22": {
                liga: { partidos: 35, goles_marcados: 0, tarjetas_amarillas: 6, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2020/21": {
                liga: { partidos: 15, goles_marcados: 0, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
                copa: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2019/20": {
                liga: { partidos: 23, goles_marcados: 0, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2018/19": {
                liga: { partidos: 10, goles_marcados: 0, tarjetas_amarillas: 5, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2017/18": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "viti2023": {
        name: "Víctor Álvarez Rozada",
        footballName: "Viti",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/3rDLPHWC/Viti_PNG.webp",
        personalData: {
            fullName: "Víctor Álvarez Rozada",
            nickname: "Viti",
            birthPlace: "Pola de Laviana, Asturias",
            country: "",
            nationality: "Española",
            height: "1,72 m",
            birthDate: "",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "U.D. Las Palmas", category: "2ª Div. - Copa del Rey" },
            { season: "2024/25", team: "U.D. Las Palmas", category: "1ª Div. - Copa del Rey" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div." },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div." },
            { season: "2019/20", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2018/19", team: "Real Oviedo", category: "2ª Div." },
            { season: "2018/19", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2017/18", team: "Real Oviedo B", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div." },
            { season: "2016/17", team: "Real Oviedo B", category: "3ª Div." },
            { season: "2015/16", team: "Real Oviedo B", category: "3ª Div." },
            { season: "2014/15", team: "Real Oviedo B", category: "3ª Div." },
            { season: "2014/15", team: "Real Oviedo Sub-19", category: "División de Honor" }
        ],
        stats: {
            "2023/24": {
                liga: { partidos: 45, goles_marcados: 0, tarjetas_amarillas: 6, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2022/23": {
                liga: { partidos: 29, goles_marcados: 2, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 7, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2021/22": {
                liga: { partidos: 38, goles_marcados: 2, tarjetas_amarillas: 4, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2020/21": {
                liga: { partidos: 16, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 2, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2019/20": {
                liga: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2018/19": {
                liga: { partidos: 14, goles_marcados: 0, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2017/18": {
                liga: { partidos: 7, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2016/17": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2015/16": {
                liga: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "javimier": {
        name: "Javier Mier Martínez",
        footballName: "Javi Mier",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/sxFrP9Hk/Javi_Mier_PNG.webp",
        personalData: {
            fullName: "Javier Mier Martínez",
            nickname: "Javi Mier",
            birthPlace: "Oviedo, Asturias",
            country: "España",
            nationality: "Española",
            height: "1,76 m",
            birthDate: "04/02/1999",
            deathDate: null
        },
        career: [
            { season: "2024/25", team: "S.D. Huesca", category: "2ª Div. - Copa del Rey" },
            { season: "2023/24", team: "S.D. Huesca", category: "2ª Div. - Copa del Rey" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div." },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div." },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div." },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2018/19", team: "Real Oviedo", category: "2ª Div." },
            { season: "2018/19", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2017/18", team: "Real Oviedo B", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2016/17", team: "Real Oviedo B", category: "3ª Div." }
        ],
        nationalTeam: [
            { season: "2015", team: "España Sub-17", category: "Clasif. Europeo Sub-17 - Amistosos" },
            { season: "2015", team: "España Sub-16", category: "Amistosos" },
            { season: "2014", team: "España Sub-16", category: "Amistosos" }
        ],
        stats: {
            "2023/24": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 1, tarjetas_amarillas: 1, tarjetas_rojas: 0 }
            },
            "2022/23": {
                liga: { partidos: 10, goles_marcados: 0, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 6, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2021/22": {
                liga: { partidos: 27, goles_marcados: 2, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 1, tarjetas_amarillas: 1, tarjetas_rojas: 0 }
            },
            "2020/21": {
                liga: { partidos: 24, goles_marcados: 1, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
                copa: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 2, tarjetas_rojas: 1 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2019/20": {
                liga: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2018/19": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2017/18": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "camarasa": {
        name: "Víctor Camarasa Ferrando",
        footballName: "Camarasa",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/zfq09L69/Camarasa_PNG.webp",
        personalData: {
            fullName: "Víctor Camarasa Ferrando",
            nickname: "Camarasa",
            birthPlace: "Meliana, Valencia",
            country: "España",
            nationality: "Española",
            height: "1,83 m",
            birthDate: "28/05/1994",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Debreceni V.S.C.", category: "Liga Hungría - Copa Hungría" },
            { season: "2024/25", team: "C.D. Eldense", category: "2ª Div." },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div." },
            { season: "2021/22", team: "Real Betis Balompié", category: "1ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Deportivo Alavés", category: "1ª Div." },
            { season: "2019/20", team: "Crystal Palace F.C.", category: "Premier League - EFL Cup" },
            { season: "2018/19", team: "Cardiff City F.C.", category: "Premier League - EFL Cup" },
            { season: "2017/18", team: "Real Betis Balompié", category: "1ª Div. - Copa del Rey" },
            { season: "2016/17", team: "Deportivo Alavés", category: "1ª Div. - Copa del Rey" },
            { season: "2015/16", team: "Levante U.D.", category: "1ª Div." },
            { season: "2014/15", team: "Levante U.D.", category: "1ª Div. - Copa del Rey" },
            { season: "2013/14", team: "Levante U.D.", category: "1ª Div. - Copa del Rey" },
            { season: "2013/14", team: "At. Levante U.D.", category: "2ª Div. B" },
            { season: "2012/13", team: "At. Levante U.D.", category: "2ª Div. B" }
        ],
        nationalTeam: [
            { season: "2017", team: "España Sub-21", category: "Amistosos" },
            { season: "2016", team: "España Sub-21", category: "Clasif. Europeo Sub-21 - Amistosos" },
            { season: "2015", team: "España Sub-21", category: "Clasif. Europeo Sub-21" },
            { season: "2014", team: "España Sub-21", category: "Amistosos" }
        ],
        stats: {
            "2023/24": {
                liga: { partidos: 10, goles_marcados: 2, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2022/23": {
                liga: { partidos: 11, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "hugorama": {
        name: "Hugo José Rama Calviño",
        footballName: "Hugo Rama",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/j51VxQrW/Hugo_Rama_PNG.webp",
        personalData: {
            fullName: "Hugo José Rama Calviño",
            nickname: "Hugo Rama",
            birthPlace: "Oroso, La Coruña",
            country: "España",
            nationality: "Española",
            height: "1,77 m",
            birthDate: "22/11/1996",
            deathDate: null
        },
        career: [
            { season: "2024/25", team: "R.C. Deportivo de La Coruña", category: "2ª Div. - Copa del Rey" },
            { season: "2023/24", team: "R.C. Deportivo de La Coruña", category: "1ª Federación - Copa del Rey" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div." },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div." },
            { season: "2021/22", team: "C.D. Lugo", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "C.D. Lugo", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "C.D. Lugo", category: "2ª Div." },
            { season: "2018/19", team: "C.D. Mirandés", category: "2ª Div. B - Copa del Rey - Copa Federación - 2ª Div. B Prom. de Ascenso" },
            { season: "2017/18", team: "C.C.D. Cerceda", category: "2ª Div. B" },
            { season: "2016/17", team: "R.C. Deportivo de La Coruña B", category: "3ª Div." },
            { season: "2015/16", team: "R.C. Deportivo de La Coruña B", category: "3ª Div." },
            { season: "2014/15", team: "R.C. Deportivo de La Coruña Sub-19", category: "División de Honor" }
        ],
        stats: {
            "2023/24": {
                liga: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 1, tarjetas_amarillas: 1, tarjetas_rojas: 0 }
            },
            "2022/23": {
                liga: { partidos: 34, goles_marcados: 0, tarjetas_amarillas: 4, tarjetas_rojas: 0 },
                copa: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 7, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2021/22": {
                liga: { partidos: 10, goles_marcados: 1, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "homenchenko": {
        name: "Santiago Damián Homenchenko Bianchi",
        footballName: "Homenchenko",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/Tw1MvNBM/Homenchenko_PNG.webp",
        personalData: {
            fullName: "Santiago Damián Homenchenko Bianchi",
            nickname: "Homenchenko",
            birthPlace: "Mercedes, Soriano",
            country: "Uruguay",
            nationality: "Uruguaya",
            height: "1,85 m",
            birthDate: "30/08/2003",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Querétaro F.C.", category: "Liga MX Apert." },
            { season: "2025/26", team: "C.F. Pachuca", category: "Liga MX Apert." },
            { season: "2024/25", team: "C.F. Pachuca", category: "Mundial de Clubes - Liga MX Claus. - Etapas Finales Claus. MX" },
            { season: "2024/25", team: "C.F. Pachuca Sub-23", category: "Liga MX Sub-23 Claus." },
            { season: "2024/25", team: "C.D. Mirandés", category: "2ª Div. - Copa del Rey" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div. - 2ª Div. Prom. de Ascenso" },
            { season: "2023/24", team: "C.A. Peñarol", category: "Copa Uruguay" },
            { season: "2022/23", team: "C.A. Peñarol", category: "Apert. Uruguay - Claus. Uruguay - Conmebol Sudamericana - Uruguay Final de Campeones - Fase Previa Conmebol Sudamericana - Torneo Intermedio Uruguay - Copa Uruguay" },
            { season: "2022/23", team: "C.A. Peñarol Sub-20", category: "Copa Libertadores Sub-20 - Copa Intercontinental Sub-20" },
            { season: "2021/22", team: "C.A. Peñarol", category: "Claus. Uruguay" },
            { season: "2021/22", team: "C.A. Peñarol", category: "Copa Libertadores Sub-20" },
            { season: "2020/21", team: "C. Plaza Colonia de Deportes", category: "Apert. Uruguay" }
        ],
        nationalTeam: [
            { season: "2025", team: "Uruguay", category: "Amistosos" },
            { season: "2024", team: "Uruguay Sub-23", category: "Torneo Preolímpico Sudamericano - Amistosos" },
            { season: "2023", team: "Uruguay Sub-20", category: "Mundial Sub-20 - Amistosos" },
            { season: "2022", team: "Uruguay Sub-20", category: "Juegos Suramericanos" }
        ],
        stats: {
            "2023/24": {
                liga: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 2, tarjetas_rojas: 1 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "romarioibarra": {
        name: "Romario Andrés Ibarra Mina",
        footballName: "Romario Ibarra",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/4dQDtkt9/Romario_Ibarra_PNG.webp",
        personalData: {
            fullName: "Romario Andrés Ibarra Mina",
            nickname: "Romario Ibarra",
            birthPlace: "Atuntaqui, Imbabura",
            country: "Ecuador",
            nationality: "Ecuatoriana",
            height: "1,76 m",
            birthDate: "24/09/1994",
            deathDate: null
        },
        career: [
            { season: "2024/25", team: "Vinotinto del Ecuador F.C.", category: "Serie A Ecuador" },
            { season: "2024/25", team: "C.D. Independiente del Valle", category: "Copa Libertadores - Serie A Ecuador" },
            { season: "2023/24", team: "C.D. Independiente del Valle", category: "Serie A 1ª Etapa - Serie A 2ª Etapa - Copa Libertadores - Conmebol Sudamericana - Serie A Etapas Finales - Copa Ecuador" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div." },
            { season: "2022/23", team: "C.F. Pachuca Sub-20", category: "Liga MX Sub-20 Claus." },
            { season: "2022/23", team: "C.F. Pachuca", category: "Liga MX Apert. - Liga MX Claus. - Etapas Finales Claus. MX - CONCACAF Champs. Cup - Etapas Finales Apert. MX" },
            { season: "2021/22", team: "C.F. Pachuca", category: "Liga MX Apert. - Liga MX Claus. - Etapas Finales Claus. MX" },
            { season: "2020/21", team: "C.F. Pachuca Sub-20", category: "Liga MX Sub-20 Claus." },
            { season: "2020/21", team: "C.F. Pachuca", category: "Liga MX Apert. - Liga MX Claus. - Etapas Finales Claus. MX" },
            { season: "2019/20", team: "C.F. Pachuca", category: "Liga MX Apert. - Liga MX Claus. - Copa MX" },
            { season: "2018/19", team: "Minnesota United F.C.", category: "MLS Liga USA - US Open Cup" },
            { season: "2017/18", team: "Minnesota United F.C.", category: "MLS Liga USA" },
            { season: "2017/18", team: "C.D. Universidad Católica", category: "Serie A 1ª Etapa" },
            { season: "2016/17", team: "C.D. Universidad Católica", category: "Serie A 1ª Etapa - Serie A 2ª Etapa - Conmebol Sudamericana" },
            { season: "2015/16", team: "C.D. Universidad Católica", category: "Serie A 1ª Etapa - Serie A 2ª Etapa - Conmebol Sudamericana" },
            { season: "2014/15", team: "C.D. Universidad Católica", category: "Serie A 1ª Etapa - Serie A 2ª Etapa - Conmebol Sudamericana" },
            { season: "2013/14", team: "C.D. Universidad Católica", category: "Serie A 1ª Etapa - Serie A 2ª Etapa" },
            { season: "2012/13", team: "L.D.U. de Quito", category: "Serie A 2ª Etapa" }
        ],
        nationalTeam: [
            { season: "2022", team: "Ecuador", category: "Clasif. Mundial Sudamérica - Mundial - Amistosos" },
            { season: "2020", team: "Ecuador", category: "Clasif. Mundial Sudamérica" },
            { season: "2019", team: "Ecuador", category: "Copa América - Amistosos" },
            { season: "2018", team: "Ecuador", category: "Amistosos" },
            { season: "2017", team: "Ecuador", category: "Clasif. Mundial Sudamérica" }
        ],
        stats: {
            "2023/24": {
                liga: { partidos: 7, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "yayo": {
        name: "Pelayo González Rey",
        footballName: "Yayo",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/d3P8M3Vb/Yayo-PNG.webp",
        personalData: {
            fullName: "Pelayo González Rey",
            nickname: "Yayo",
            birthPlace: "Oviedo, Asturias",
            country: "España",
            nationality: "Española",
            height: "1,75 m",
            birthDate: "30/07/2004",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Cultural y Deportiva Leonesa", category: "2ª Div. - Copa del Rey" },
            { season: "2024/25", team: "C.D. Lugo", category: "Copa Federación - Copa Federación Fase Autonómica - 1ª Federación" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Div. Prom de Ascenso" },
            { season: "2023/24", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2022/23", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div." },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "Real Oviedo Sub-19", category: "División de Honor" },
            { season: "2021/22", team: "Real Oviedo Vetusta", category: "3ª Federación" },
            { season: "2020/21", team: "Real Oviedo Sub-19", category: "División de Honor" },
            { season: "2020/21", team: "Real Oviedo Sub-19 B", category: "Liga Nacional" }
        ],
        stats: {
            "2023/24": {
                liga: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 2, tarjetas_rojas: 0 }
            },
            "2022/23": {
                liga: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2021/22": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
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
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div. - Copa del Rey" },
            { season: "2025/26", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2024/25", team: "Real Oviedo Vetusta", category: "3ª Federación" },
            { season: "2023/24", team: "Real Oviedo Sub-19", category: "División de Honor - Copa del Rey Juvenil" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2023/24", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2022/23", team: "Real Oviedo Sub-19", category: "División de Honor" },
            { season: "2021/22", team: "Real Oviedo Sub-19", category: "División de Honor" },
            { season: "2021/22", team: "Real Oviedo Sub-19 B", category: "Liga Nacional" }
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

        "sangalli": {
        name: "Marco Sangalli Fuentes",
        footballName: "Sangalli",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/854YcdQd/Sangalli_PNG.webp",
        personalData: {
            fullName: "Marco Sangalli Fuentes",
            nickname: "Sangalli",
            birthPlace: "San Sebastián, Guipúzcoa",
            country: "España",
            nationality: "Española, Italiana",
            height: "1,79 m",
            birthDate: "07/02/1992",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Real Racing Club de Santander", category: "2ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Real Racing Club de Santander", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2023/24", team: "Real Racing Club de Santander", category: "2ª Div. - Copa del Rey" },
            { season: "2022/23", team: "Real Racing Club de Santander", category: "2ª Div." },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div." },
            { season: "2018/19", team: "A.D. Alcorcón", category: "2ª Div. - Copa del Rey" },
            { season: "2017/18", team: "A.D. Alcorcón", category: "2ª Div. - Copa del Rey" },
            { season: "2016/17", team: "C.D. Mirandés", category: "2ª Div. - Copa del Rey" },
            { season: "2015/16", team: "C.D. Mirandés", category: "2ª Div. - Copa del Rey" },
            { season: "2014/15", team: "Deportivo Alavés", category: "2ª Div. - Copa del Rey" },
            { season: "2013/14", team: "Real Sociedad de Fútbol B", category: "2ª Div. B" },
            { season: "2013/14", team: "Real Sociedad de Fútbol", category: "1ª Div. - Champs. League - Copa del Rey" },
            { season: "2012/13", team: "Real Sociedad de Fútbol B", category: "2ª Div. B" },
            { season: "2011/12", team: "Real Sociedad de Fútbol B", category: "2ª Div. B" }
        ],
        stats: {
            "2022/23": {
                liga: { partidos: 10, goles_marcados: 0, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 2, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2021/22": {
                liga: { partidos: 29, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2020/21": {
                liga: { partidos: 40, goles_marcados: 5, tarjetas_amarillas: 12, tarjetas_rojas: 1 },
                copa: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2019/20": {
                liga: { partidos: 39, goles_marcados: 5, tarjetas_amarillas: 6, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "jirka": {
        name: "Erik Jirka",
        footballName: "Jirka",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/y6DZjFvk/Jirka-PNG.webp",
        personalData: {
            fullName: "Erik Jirka",
            nickname: "Jirka",
            birthPlace: "Trnava, Trnava",
            country: "Eslovaquia",
            nationality: "Eslovaca",
            height: "1,83 m",
            birthDate: "19/09/1997",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Piast Gliwice", category: "Liga Polaca - Copa Polonia" },
            { season: "2024/25", team: "Piast Gliwice", category: "Liga Polaca - Copa Polonia" },
            { season: "2024/25", team: "F.C. Viktoria Pilsen B", category: "3 Liga Checa" },
            { season: "2024/25", team: "F.C. Viktoria Pilsen", category: "Liga Checa - Europa League - Copa Checa - Fase Previa Europa League" },
            { season: "2023/24", team: "F.C. Viktoria Pilsen", category: "Liga Checa - Copa Checa - Fase Previa Conference League - Conference League" },
            { season: "2022/23", team: "F.C. Viktoria Pilsen B", category: "3 Liga Checa" },
            { season: "2022/23", team: "F.C. Viktoria Pilsen", category: "Liga Checa - Champs. League - Copa Checa - Fase Previa Champs. League" },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "C.D. Mirandés", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Górnik Zabrze", category: "Liga Polaca" },
            { season: "2019/20", team: "F.K. Radnicki Niš", category: "Liga Serbia - Copa Serbia - Fase Previa Europa League" },
            { season: "2018/19", team: "Estrella Roja de Belgrado", category: "Liga Serbia - Copa Serbia" },
            { season: "2018/19", team: "F.C. Spartak Trnava", category: "Liga Eslovaquia - Europa League - Fase Previa Champs. League - Fase Previa Europa League - Copa Eslovaquia" },
            { season: "2017/18", team: "F.C. Spartak Trnava", category: "Liga Eslovaquia - Copa Eslovaquia" },
            { season: "2016/17", team: "F.C. Spartak Trnava B", category: "2ª Eslovaquia" },
            { season: "2016/17", team: "F.C. Spartak Trnava", category: "Liga Eslovaquia - Fase Previa Europa League - Copa Eslovaquia" },
            { season: "2015/16", team: "F.C. Spartak Trnava B", category: "2ª Eslovaquia" },
            { season: "2015/16", team: "F.C. Spartak Trnava", category: "Liga Eslovaquia - Fase Previa Europa League" },
            { season: "2014/15", team: "F.C. Spartak Trnava B", category: "2ª Eslovaquia" },
            { season: "2014/15", team: "F.C. Spartak Trnava", category: "Liga Eslovaquia - Copa Eslovaquia" },
            { season: "2013/14", team: "F.C. Spartak Trnava B", category: "2ª Eslovaquia" }
        ],
        nationalTeam: [
            { season: "2023", team: "Eslovaquia", category: "Clasif. Eurocopa" },
            { season: "2022", team: "Eslovaquia", category: "Liga de las Naciones de la UEFA - Amistosos" },
            { season: "2021", team: "Eslovaquia", category: "Clasif. Mundial Europa - Amistosos" },
            { season: "2018", team: "Eslovaquia Sub-21", category: "Clasif. Europeo Sub-21 - Amistosos" },
            { season: "2017", team: "Eslovaquia Sub-21", category: "Clasif. Europeo Sub-21" },
            { season: "2016", team: "Eslovaquia Sub-19", category: "Clasif. Europeo Sub-19 - Amistosos" },
            { season: "2015", team: "Eslovaquia Sub-19", category: "Clasif. Europeo Sub-19" },
            { season: "2015", team: "Eslovaquia Sub-18", category: "Amistosos" },
            { season: "2014", team: "Eslovaquia Sub-18", category: "Amistosos" }
        ],
        stats: {
            "2022/23": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2021/22": {
                liga: { partidos: 19, goles_marcados: 0, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "marceloflores": {
        name: "Marcelo Flores Dorrell",
        footballName: "Marcelo Flores",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/MGbVJdVD/Marcelo_Flores_PNG.webp",
        personalData: {
            fullName: "Marcelo Flores Dorrell",
            nickname: "Marcelo Flores",
            birthPlace: "Georgetown, Ontario",
            country: "Canadá",
            nationality: "Mejicana, Canadiense",
            height: "1,68 m",
            birthDate: "01/10/2003",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Club Tigres U.A.N.L.", category: "Liga MX Apert. - Etapas Finales Apert. MX" },
            { season: "2024/25", team: "Club Tigres U.A.N.L.", category: "Liga MX Apert. - Liga MX Claus. - Etapas Finales Claus. MX - CONCACAF Champs. Cup - Etapas Finales Apert. MX - Leagues Cup" },
            { season: "2024/25", team: "Club Tigres U.A.N.L. Sub-23", category: "Liga MX Sub-23 Claus." },
            { season: "2023/24", team: "Club Tigres U.A.N.L.", category: "Liga MX Apert. - Liga MX Claus. - Etapas Finales Claus. MX - CONCACAF Champs. Cup - Etapas Finales Apert. MX - Leagues Cup" },
            { season: "2023/24", team: "Arsenal F.C. Sub-21", category: "EFL Trophy" },
            { season: "2022/23", team: "Club Tigres U.A.N.L.", category: "Campeones Cup" },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "Arsenal F.C. Sub-23", category: "Premier League 2ª Div. One" },
            { season: "2021/22", team: "Arsenal F.C.", category: "Premier League" },
            { season: "2021/22", team: "Arsenal F.C. Sub-21", category: "EFL Trophy" },
            { season: "2021/22", team: "Arsenal F.C. Sub-18", category: "Premier League Sub-18 - Premier League Cup Sub-18" },
            { season: "2020/21", team: "Arsenal F.C. Sub-23", category: "Premier League 2ª Div. One" },
            { season: "2020/21", team: "Arsenal F.C. Sub-18", category: "Premier League Sub-18 - FA Youth Cup" },
            { season: "2020/21", team: "Arsenal F.C. Sub-21", category: "EFL Trophy" },
            { season: "2019/20", team: "Arsenal F.C. Sub-18", category: "Premier League Sub-18 - FA Youth Cup - Premier League Cup Sub-18" }
        ],
        nationalTeam: [
            { season: "2024", team: "Méjico", category: "Copa América - Amistosos" },
            { season: "2024", team: "Méjico Sub-23", category: "Amistosos" },
            { season: "2023", team: "Méjico Sub-23", category: "Torneo Maurice Revello" },
            { season: "2022", team: "Méjico Sub-20", category: "Amistosos" },
            { season: "2022", team: "Méjico", category: "Liga de las Naciones de la CONCACAF - Amistosos" },
            { season: "2021", team: "Méjico", category: "Amistosos" },
            { season: "2021", team: "Méjico Sub-20", category: "Amistosos" },
            { season: "2021", team: "Méjico Sub-19", category: "Amistosos" },
            { season: "2020", team: "Méjico Sub-18", category: "Copa del Atlántico Juvenil" },
            { season: "2019", team: "Méjico Sub-17", category: "Amistosos" },
            { season: "2019", team: "Méjico Sub-16", category: "Amistosos" }
        ],
        stats: {
            "2022/23": {
                liga: { partidos: 13, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "kobalein": {
        name: "Koba Leïn Koindredi",
        footballName: "Koba Leïn",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/Z5QDyYMg/Koba_Leïn_PNG.webp",
        personalData: {
            fullName: "Koba Leïn Koindredi",
            nickname: "Koba Leïn",
            birthPlace: "Païta, Yibuti",
            country: "Yibuti",
            nationality: "Francesa",
            height: "1,84 m",
            birthDate: "27/10/2001",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "F.C. Basilea", category: "Liga Suiza - Europa League - Copa Suiza - Fase Previa Champs. League" },
            { season: "2024/25", team: "F.C. Lausanne Sport", category: "Liga Suiza - Copa Suiza" },
            { season: "2023/24", team: "Sporting Clube de Portugal", category: "Liga Portugal Betclic - Europa League - Taça de Portugal" },
            { season: "2023/24", team: "G.D. Estoril Praia", category: "Liga Portugal Betclic - Taça de Portugal - Copa de la Liga Portugal" },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2022/23", team: "Valencia C.F.", category: "1ª Div." },
            { season: "2021/22", team: "Valencia C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Valencia Mestalla", category: "2ª Div. B - 2ª Div. B Fase Permanencia 2ª RFEF" },
            { season: "2020/21", team: "Valencia C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Valencia C.F.", category: "1ª Div." },
            { season: "2019/20", team: "Valencia Mestalla", category: "2ª Div. B" },
            { season: "2019/20", team: "Valencia C.F. Sub-19", category: "UEFA Youth League" },
            { season: "2018/19", team: "Valencia Mestalla", category: "2ª Div. B" },
            { season: "2018/19", team: "R.C. Lens B", category: "National 2" }
        ],
        nationalTeam: [
            { season: "2020", team: "Francia Sub-19", category: "Amistosos" },
            { season: "2019", team: "Francia Sub-19", category: "Clasif. Europeo Sub-19 - Amistosos" },
            { season: "2019", team: "Francia Sub-18", category: "Amistosos" },
            { season: "2019", team: "Francia Sub-21", category: "Torneo Maurice Revello" },
            { season: "2018", team: "Francia Sub-17", category: "Clasif. Europeo Sub-17 - Amistosos" }
        ],
        stats: {
            "2022/23": {
                liga: { partidos: 18, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "montoro": {
        name: "Ángel Montoro Sánchez",
        footballName: "Montoro",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/MKQc898Q/Montoro_PNG.webp",
        personalData: {
            fullName: "Ángel Montoro Sánchez",
            nickname: "Montoro",
            birthPlace: "Valencia, Valencia",
            country: "España",
            nationality: "Española",
            height: "1,80 m",
            birthDate: "25/06/1988",
            deathDate: null
        },
        career: [
            { season: "2023/24", team: "Real Murcia C.F.", category: "1ª Federación" },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "Granada C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Granada C.F.", category: "1ª Div. - Europa League - Copa del Rey - Fase Previa Europa League" },
            { season: "2019/20", team: "Granada C.F.", category: "1ª Div." },
            { season: "2018/19", team: "Granada C.F.", category: "2ª Div." },
            { season: "2017/18", team: "Granada C.F.", category: "2ª Div." },
            { season: "2016/17", team: "U.D. Las Palmas", category: "1ª Div. - Copa del Rey" },
            { season: "2015/16", team: "U.D. Las Palmas", category: "1ª Div. - Copa del Rey" },
            { season: "2015/16", team: "U.D. Almería", category: "2ª Div. - Copa del Rey" },
            { season: "2014/15", team: "R.C. Recreativo de Huelva", category: "2ª Div. - Copa del Rey" },
            { season: "2013/14", team: "R.C. Recreativo de Huelva", category: "2ª Div. - Copa del Rey" },
            { season: "2012/13", team: "R.C. Recreativo de Huelva", category: "2ª Div. - Copa del Rey" },
            { season: "2011/12", team: "Valencia Mestalla", category: "2ª Div. B" },
            { season: "2010/11", team: "Valencia C.F.", category: "1ª Div." },
            { season: "2010/11", team: "Valencia Mestalla", category: "3ª Div. Prom. de Ascenso" },
            { season: "2009/10", team: "Real Unión Club", category: "2ª Div. - Copa del Rey" },
            { season: "2008/09", team: "Real Murcia C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2007/08", team: "Valencia C.F.", category: "1ª Div. - Champs. League - Copa del Rey" },
            { season: "2006/07", team: "Valencia Mestalla", category: "2ª Div. B - 2ª Div. B Prom. de Permanencia" }
        ],
        nationalTeam: [
            { season: "2007", team: "España Sub-19", category: "Europeo Sub-19 - Clasif. Europeo Sub-19" },
            { season: "2005", team: "España Sub-17", category: "Clasif. Europeo Sub-17" },
            { season: "2004", team: "España Sub-16", category: "Amistosos" }
        ],
        stats: {
            "2022/23": {
                liga: { partidos: 28, goles_marcados: 1, tarjetas_amarillas: 8, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "mangel": {
        name: "Miguel Ángel Prendes Pérez",
        footballName: "Mángel",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/PJF1FJYn/Mangel_PNG.webp",
        personalData: {
            fullName: "Miguel Ángel Prendes Pérez",
            nickname: "Mángel",
            birthPlace: "Candás, Asturias",
            country: "España",
            nationality: "Española",
            height: "1,86 m",
            birthDate: "28/06/2001",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Gimnàstic de Tarragona", category: "1ª Federación" },
            { season: "2024/25", team: "C.D. Arenteiro", category: "1ª Federación - Copa Federación Fase Autonómica" },
            { season: "2023/24", team: "S.D. Ponferradina", category: "1ª Federación - 1ª Federación Prom. de Ascenso" },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2022/23", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2021/22", team: "Real Oviedo Vetusta", category: "3ª Federación" },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div." },
            { season: "2020/21", team: "R.C. Deportivo Fabril", category: "3ª Div. - 2ª Fase 2ª Div. RFEF" },
            { season: "2019/20", team: "R.C. Deportivo Fabril", category: "3ª Div." },
            { season: "2017/18", team: "C.D. TSK Roces", category: "3ª Div." }
        ],
        stats: {
            "2022/23": {
                liga: { partidos: 15, goles_marcados: 0, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2021/22": {
                liga: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "victorblanco": {
        name: "Víctor Blanco Sánchez",
        footballName: "Víctor Blanco",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/K85pJrj6/Víctor_Blanco_PNG.webp",
        personalData: {
            fullName: "Víctor Blanco Sánchez",
            nickname: "Víctor Blanco",
            birthPlace: "Benidorm, Alicante",
            country: "España",
            nationality: "Española",
            height: "1,77 m",
            birthDate: "29/08/2002",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "C.F. La Nucía", category: "3ª Federación" },
            { season: "2024/25", team: "Córdoba C.F.", category: "2ª Div." },
            { season: "2024/25", team: "Córdoba C.F. B", category: "3ª Federación" },
            { season: "2023/24", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2022/23", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div." },
            { season: "2021/22", team: "Elche Ilicitano C.F.", category: "3ª Federación" },
            { season: "2021/22", team: "U.D. Almería B", category: "3ª Federación" },
            { season: "2020/21", team: "Levante U.D. Sub-19", category: "División de Honor - Copa de Campeones División de Honor" }
        ],
        stats: {
            "2022/23": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "nnoshiri": {
        name: "Samuel Chijindum Nnoshiri",
        footballName: "Nnoshiri",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/9FZGBm0K/Nnoshiri_PNG.webp",
        personalData: {
            fullName: "Samuel Chijindum Nnoshiri",
            nickname: "Nnoshiri",
            birthPlace: "Owerri, Imo",
            country: "Nigeria",
            nationality: "Nigeriana",
            height: "1,75 m",
            birthDate: "02/07/2001",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "C.D. Mosconia", category: "3ª Federación" },
            { season: "2024/25", team: "Al-Nasr Club F.C.", category: "Oman Jindal League - Copa del Sultán" },
            { season: "2023/24", team: "T.S. Podbeskidzie Bielsko-Biała", category: "2ª Polonia - Copa Polonia" },
            { season: "2022/23", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2021/22", team: "Real Oviedo Vetusta", category: "3ª Federación" },
            { season: "2020/21", team: "Katsina United F.C.", category: "Premier League Nigeria" },
            { season: "2020/21", team: "Heartland Owerri F.C.", category: "Premier League Nigeria" },
            { season: "2019/20", team: "Heartland Owerri F.C.", category: "Premier League Nigeria" },
            { season: "2018/19", team: "Heartland Owerri F.C.", category: "Premier League Nigeria" }
        ],
        stats: {
            "2022/23": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "brugman": {
        name: "Gastón Brugman Duarte",
        footballName: "Brugman",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/3RSSjKLz/Brugman_PNG.webp",
        personalData: {
            fullName: "Gastón Brugman Duarte",
            nickname: "Brugman",
            birthPlace: "Rosario, Colonia",
            country: "Uruguay",
            nationality: "Uruguaya, Italiana",
            height: "1,75 m",
            birthDate: "07/09/1992",
            deathDate: null
        },
        career: [
            { season: "2024/25", team: "Nashville S.C.", category: "MLS Liga USA - US Open Cup" },
            { season: "2023/24", team: "Los Angeles Galaxy", category: "MLS Liga USA - Leagues Cup" },
            { season: "2022/23", team: "Los Angeles Galaxy", category: "MLS Liga USA - US Open Cup - Leagues Cup" },
            { season: "2021/22", team: "Los Angeles Galaxy", category: "MLS Liga USA - Leagues Cup" },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div." },
            { season: "2021/22", team: "Parma Calcio 1913", category: "Serie B - Coppa Italia" },
            { season: "2020/21", team: "Parma Calcio 1913", category: "Serie A - Coppa Italia" },
            { season: "2019/20", team: "Parma Calcio 1913", category: "Serie A - Coppa Italia" },
            { season: "2018/19", team: "Delfino Pescara 1936", category: "Serie B - Coppa Italia - Serie B Prom. de Ascenso" },
            { season: "2017/18", team: "Delfino Pescara 1936", category: "Serie B - Coppa Italia" },
            { season: "2016/17", team: "Delfino Pescara 1936", category: "Serie A - Coppa Italia" },
            { season: "2015/16", team: "Palermo F.C.", category: "Serie A - Coppa Italia" },
            { season: "2014/15", team: "Delfino Pescara 1936", category: "Serie B - Serie B Prom. de Ascenso" },
            { season: "2013/14", team: "Delfino Pescara 1936", category: "Serie B - Coppa Italia" },
            { season: "2012/13", team: "U.S. Grosseto F.C.", category: "Serie B" },
            { season: "2012/13", team: "Delfino Pescara 1936", category: "Coppa Italia" },
            { season: "2011/12", team: "Empoli F.C.", category: "Serie B - Coppa Italia - Serie B Prom. de Permanencia" },
            { season: "2010/11", team: "Empoli F.C.", category: "Serie B" },
            { season: "2010/11", team: "Empoli F.C. Sub-19", category: "Campionato Primavera 1" },
            { season: "2009/10", team: "Empoli F.C. Sub-19", category: "Campionato Primavera 1" }
        ],
        nationalTeam: [
            { season: "2009", team: "Uruguay Sub-17", category: "Mundial Sub-17" }
        ],
        stats: {
            "2021/22": {
                liga: { partidos: 33, goles_marcados: 3, tarjetas_amarillas: 6, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "jonimontiel": {
        name: "Jonathan Montiel Caballero",
        footballName: "Joni Montiel",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/ZRNkqvYV/Joni_Montiel_PNG.webp",
        personalData: {
            fullName: "Jonathan Montiel Caballero",
            nickname: "Joni Montiel",
            birthPlace: "Madrid, Madrid",
            country: "España",
            nationality: "Española",
            height: "1,73 m",
            birthDate: "03/09/1998",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Qarabağ F.K.", category: "Champs. League - Liga Azerbaiyán - Copa Azerbaiyán" },
            { season: "2024/25", team: "Rayo Vallecano de Madrid", category: "1ª Div. - Copa del Rey" },
            { season: "2023/24", team: "Burgos C.F.", category: "2ª Div." },
            { season: "2023/24", team: "Real Valladolid C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2022/23", team: "Levante U.D.", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Rayo Vallecano de Madrid", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2019/20", team: "Rayo Vallecano de Madrid", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "R.C. Deportivo de La Coruña", category: "2ª Div." },
            { season: "2018/19", team: "R.C. Deportivo Fabril", category: "2ª Div. B" },
            { season: "2017/18", team: "C.D. Toledo", category: "2ª Div. B" },
            { season: "2017/18", team: "Rayo Vallecano de Madrid", category: "2ª Div. - Copa del Rey" },
            { season: "2016/17", team: "Rayo Vallecano de Madrid B", category: "3ª Div." },
            { season: "2016/17", team: "Rayo Vallecano de Madrid", category: "2ª Div. - Copa del Rey" },
            { season: "2015/16", team: "Rayo Vallecano de Madrid", category: "1ª Div. - Copa del Rey" },
            { season: "2015/16", team: "Rayo Vallecano de Madrid B", category: "3ª Div." }
        ],
        nationalTeam: [
            { season: "2016", team: "España Sub-19", category: "Clasif. Europeo Sub-19 - Amistosos" },
            { season: "2016", team: "España Sub-18", category: "Amistosos" },
            { season: "2014", team: "España Sub-17", category: "Amistosos" }
        ],
        stats: {
            "2021/22": {
                liga: { partidos: 28, goles_marcados: 3, tarjetas_amarillas: 5, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "pombo": {
        name: "Jorge Marcos Pombo Escobar",
        footballName: "Pombo",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/XJ9Vzz5j/Pombo_PNG.webp",
        personalData: {
            fullName: "Jorge Marcos Pombo Escobar",
            nickname: "Pombo",
            birthPlace: "Zaragoza, Zaragoza",
            country: "España",
            nationality: "Española",
            height: "1,77 m",
            birthDate: "22/02/1994",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "A.E. Kifisia F.C.", category: "Super League Griega - Copa Griega" },
            { season: "2024/25", team: "A.E. Kifisia F.C.", category: "2ª Grecia - Copa Griega" },
            { season: "2023/24", team: "F.C. Andorra", category: "2ª Div." },
            { season: "2023/24", team: "Real Racing Club de Santander", category: "2ª Div. - Copa del Rey" },
            { season: "2022/23", team: "Real Racing Club de Santander", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Cádiz C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Cádiz C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Real Zaragoza", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "Real Zaragoza", category: "2ª Div. - Copa del Rey" },
            { season: "2017/18", team: "Real Zaragoza", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2016/17", team: "Real Zaragoza Deportivo Aragón", category: "3ª Div." },
            { season: "2016/17", team: "Real Zaragoza", category: "2ª Div. - Copa del Rey" },
            { season: "2015/16", team: "Real Zaragoza Deportivo Aragón", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2014/15", team: "Real Zaragoza", category: "2ª Div." },
            { season: "2014/15", team: "Real Zaragoza Deportivo Aragón", category: "2ª Div. B" },
            { season: "2013/14", team: "Real Zaragoza Deportivo Aragón", category: "3ª Div. - Copa Federación" }
        ],
        stats: {
            "2021/2022": {
                liga: { partidos: 23, goles_marcados: 1, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "joselu2021": {
        name: "José Luis Guerra Rodríguez",
        footballName: "Joselu",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/5tZGD95v/Joselu_PNG.webp",
        personalData: {
            fullName: "José Luis Guerra Rodríguez",
            nickname: "Joselu",
            birthPlace: "Avilés, Asturias",
            country: "España",
            nationality: "Española",
            height: "1,73 m",
            birthDate: "27/06/2000",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "S.D. Logroñés", category: "2ª Federación - Copa del Rey" },
            { season: "2024/25", team: "U.P. de Langreo", category: "2ª Federación - Copa del Rey" },
            { season: "2023/24", team: "U.P. de Langreo", category: "2ª Federación" },
            { season: "2022/23", team: "U.P. de Langreo", category: "2ª Federación" },
            { season: "2021/22", team: "Real Oviedo Vetusta", category: "3ª Federación" },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div." },
            { season: "2020/21", team: "Real Oviedo B", category: "2ª Div. B - 2ª Div. B 2ª Fase de Permanencia 2ª RFEF" },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2019/20", team: "C.D. Praviano", category: "3ª Div." },
            { season: "2018/19", team: "Real Oviedo B", category: "2ª Div. B" }
        ],
        stats: {
            "2021/22": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2020/21": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "davidiglesias": {
        name: "David Iglesias Calero",
        footballName: "David Iglesias",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/prBDQkXr/David_Iglesias_PNG.webp",
        personalData: {
            fullName: "David Iglesias Calero",
            nickname: "David Iglesias",
            birthPlace: "Sama de Langreo, Asturias",
            country: "España",
            nationality: "Española",
            height: "1,76 m",
            birthDate: "13/04/2000",
            deathDate: null
        },
        career: [
            { season: "2024/25", team: "Club Siero", category: "1ª RFFPA" },
            { season: "2023/24", team: "Club Siero", category: "1ª RFFPA" },
            { season: "2023/24", team: "Club Marino de Luanco", category: "2ª Federación - Copa Federación Fase Autonómica" },
            { season: "2022/23", team: "U.P. de Langreo", category: "2ª Federación - Copa Federación Fase Autonómica" },
            { season: "2021/22", team: "U.P. de Langreo", category: "2ª Federación" },
            { season: "2021/22", team: "Real Oviedo Vetusta", category: "3ª Federación" },
            { season: "2020/21", team: "U.P. de Langreo", category: "2ª Div. B - 2ª Div. B 2ª Fase 1ª Div. RFEF" },
            { season: "2020/21", team: "C.D. Praviano", category: "3ª Div." },
            { season: "2019/20", team: "U.D. Gijón Industrial", category: "3ª Div." },
            { season: "2019/20", team: "San Ignacio C.F.", category: "3ª Div." },
            { season: "2017/18", team: "C.D. TSK Roces", category: "3ª Div." }
        ],
        stats: {
            "2021/22": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "guillebernabeu": {
        name: " Guillermo Bernabéu Nortes",
        footballName: "Guille Bernabéu",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/sXgyDgQL/Guille_Bernabéu_PNG.webp",
        personalData: {
            fullName: " Guillermo Bernabéu Nortes",
            nickname: "Guille Bernabéu",
            birthPlace: "Orihuela, Alicante",
            country: "España",
            nationality: "Española",
            height: "1,80 m",
            birthDate: "13/01/2001",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "C.D. Unión Malacitano", category: "2ª Federación - Copa del Rey" },
            { season: "2025/26", team: "F.C. La Unión Atlético", category: "2ª Federación" },
            { season: "2024/25", team: "F.C. La Unión Atlético", category: "2ª Federación - 2ª Federación Prom. de Ascenso" },
            { season: "2023/24", team: "F.C. Cartagena B", category: "2ª Federación" },
            { season: "2022/23", team: "Racing Cartagena Mar Menor F.C.", category: "2ª Federación - Copa Federación" },
            { season: "2021/22", team: "Hércules de Alicante C.F.", category: "2ª Federación" },
            { season: "2021/22", team: "Hércules de Alicante C.F. B", category: "3ª Federación" },
            { season: "2021/22", team: "Real Oviedo Vetusta", category: "3ª Federación" },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div." },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div." },
            { season: "2020/21", team: "Real Oviedo B", category: "2ª Div. B - 2ª Div. B 2ª Fase de Permanencia 2ª RFEF" },
            { season: "2019/20", team: "Club At. Malagueño", category: "3ª Div." }
        ],
        stats: {
            "2021/22": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2020/21": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "edgar": {
        name: "Edgar González Estrada",
        footballName: "Edgar",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/sxfBzzsf/Edgar_PNG.webp",
        personalData: {
            fullName: "Edgar González Estrada",
            nickname: "Edgar",
            birthPlace: "San Juan Despí, Barcelona",
            country: "España",
            nationality: "Española",
            height: "1,92 m",
            birthDate: "01/04/1997",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "F.C. Andorra", category: "2ª Div." },
            { season: "2025/26", team: "H.N.K. Hajduk Split", category: "Liga Croata HNL - Copa Croata" },
            { season: "2024/25", team: "U.D. Almería", category: "2ª Div. - 2ª Div. Prom. de Ascenso - Copa del Rey" },
            { season: "2023/24", team: "U.D. Almería", category: "1ª Div. - Copa del Rey" },
            { season: "2022/23", team: "Real Betis Balompié", category: "1ª Div. - Europa League - Copa del Rey - Supercopa de España" },
            { season: "2021/22", team: "Real Betis Balompié", category: "1ª Div. - Europa League - Copa del Rey" },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Real Betis Balompié", category: "1ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Betis Deportivo Balompié", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2018/19", team: "Betis Deportivo Balompié", category: "3ª Div. - Copa Federación" },
            { season: "2018/19", team: "Real Betis Balompié", category: "Copa del Rey" },
            { season: "2017/18", team: "U.E. Cornellà", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso - Copa de Catalunya" },
            { season: "2016/17", team: "U.E. Cornellà", category: "2ª Div. B - Copa del Rey" },
            { season: "2015/16", team: "R.C.D. Espanyol de Barcelona B", category: "2ª Div. B" },
            { season: "2014/15", team: "U.E. Cornellà", category: "2ª Div. B" }
        ],
        stats: {
            "2020/21": {
                liga: { partidos: 37, goles_marcados: 3, tarjetas_amarillas: 17, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 }
            }
        }
    },

    "aburjania": {
        name: "Giorgi Aburjania",
        footballName: "Aburjania",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/ZRdBHHjZ/Aburjania-PNG.webp",
        personalData: {
            fullName: "Giorgi Aburjania",
            nickname: "Aburjania",
            birthPlace: "Tiflis, Tiflis",
            country: "Georgia",
            nationality: "Georgiana",
            height: "1,86 m",
            birthDate: "02/01/1995",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Jeddah S.C.", category: "1ª Arabia Saudí - Copa del Rey Saudí" },
            { season: "2024/25", team: "A.V.S. Futebol", category: "Liga Portugal Betclic - Taça de Portugal - Liga Portuguesa Prom. de Ascenso" },
            { season: "2023/24", team: "Hatayspor Kulübü", category: "Liga Turca - Copa Turca" },
            { season: "2022/23", team: "Gil Vicente F.C.", category: "Liga Portugal Betclic - Taça de Portugal - Copa de la Liga Portugal - Fase Previa Conference League" },
            { season: "2021/22", team: "Gil Vicente F.C.", category: "Liga Portugal Betclic - Taça de Portugal" },
            { season: "2020/21", team: "F.C. Cartagena", category: "2ª Div." },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "F.C. Twente Enschede Sub-21", category: "Beloften Eredivisie" },
            { season: "2019/20", team: "F.C. Twente Enschede", category: "Eredivisie - KNVB Beker" },
            { season: "2018/19", team: "C.D. Lugo", category: "2ª Div. - Copa del Rey" },
            { season: "2017/18", team: "Sevilla At.", category: "2ª Div." },
            { season: "2016/17", team: "Sevilla At.", category: "2ª Div." },
            { season: "2015/16", team: "Gimnàstic de Tarragona", category: "2ª Div. - 2ª Div. Prom. de Ascenso" },
            { season: "2015/16", team: "Anorthosis Famagusta F.C.", category: "Liga Chipre" },
            { season: "2014/15", team: "Anorthosis Famagusta F.C.", category: "Liga Chipre - Copa Chipre" },
            { season: "2013/14", team: "F.C. Locomotive Tbilisi", category: "2ª Georgia" },
            { season: "2013/14", team: "F.C. Dila Gori", category: "Liga Georgia - Fase Previa Europa League - Copa Georgia" },
            { season: "2012/13", team: "F.C. Dila Gori", category: "Liga Georgia - Copa Georgia" },
            { season: "2011/12", team: "F.C. Metalurgi Rustavi", category: "Liga Georgia - Fase Previa Europa League" },
            { season: "2010/11", team: "F.C. Metalurgi Rustavi", category: "Liga Georgia" }
        ],
        nationalTeam: [
            { season: "2023", team: "Georgia", category: "Clasif. Eurocopa - Amistosos" },
            { season: "2022", team: "Georgia", category: "Liga de las Naciones de la UEFA - Amistosos" },
            { season: "2021", team: "Georgia", category: "Clasif. Mundial Europa - Amistosos" },
            { season: "2020", team: "Georgia", category: "Clasif. Eurocopa - Liga de las Naciones de la UEFA" },
            { season: "2019", team: "Georgia", category: "Clasif. Eurocopa - Amistosos" },
            { season: "2018", team: "Georgia", category: "Liga de las Naciones de la UEFA - Amistosos" },
            { season: "2017", team: "Georgia", category: "Clasif. Mundial Europa - Amistosos" },
            { season: "2016", team: "Georgia", category: "Amistosos" },
            { season: "2016", team: "Georgia Sub-21", category: "Clasif. Europeo Sub-21" },
            { season: "2015", team: "Georgia Sub-21", category: "Clasif. Europeo Sub-21 - Amistosos" },
            { season: "2014", team: "Georgia Sub-19", category: "Clasif. Europeo Sub-19 - Amistosos" },
            { season: "2013", team: "Georgia Sub-19", category: "Clasif. Europeo Sub-19" },
            { season: "2012", team: "Georgia Sub-19", category: "Clasif. Europeo Sub-19" },
            { season: "2012", team: "Georgia Sub-17", category: "Europeo Sub-17 - Clasif. Europeo Sub-17" }
        ],
        stats: {
            "2020/21": {
                liga: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "nahuel": {
        name: "Matías Nahuel Leiva Esquivel",
        footballName: "Nahuel",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/T2srvkpV/Nahuel_PNG.webp",
        personalData: {
            fullName: "Matías Nahuel Leiva Esquivel",
            nickname: "Nahuel",
            birthPlace: "Rosario, Santa Fe",
            country: "Argentina",
            nationality: "Argentina, Española",
            height: "1,72 m",
            birthDate: "22/11/1996",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Maccabi Haifa F.C.", category: "Liga Israel - Copa Israel - Copa Toto Liga Israel - Fase Previa Conference League" },
            { season: "2024/25", team: "Maccabi Haifa F.C.", category: "Liga Israel - Copa Israel - Copa Toto Liga Israel" },
            { season: "2024/25", team: "Śląsk Wroclaw", category: "Liga Polaca - Fase Previa Conference League" },
            { season: "2023/24", team: "Śląsk Wroclaw", category: "Liga Polaca - Copa Polonia" },
            { season: "2022/23", team: "Śląsk Wroclaw", category: "Liga Polaca - Copa Polonia" },
            { season: "2021/22", team: "C.D. Tenerife", category: "2ª Div. - 2ª Div. Prom. de Ascenso" },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "C.D. Tenerife", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "R.C. Deportivo de La Coruña", category: "2ª Div. - 2ª Div. Prom. de Ascenso" },
            { season: "2018/19", team: "Olympiakós de El Pireo", category: "Super League Griega - Europa League - Copa Griega" },
            { season: "2017/18", team: "F.C. Barcelona B", category: "2ª Div." },
            { season: "2017/18", team: "Real Betis Balompié", category: "1ª Div. - Copa del Rey" },
            { season: "2016/17", team: "Real Betis Balompié", category: "1ª Div. - Copa del Rey" },
            { season: "2015/16", team: "Villarreal C.F.", category: "1ª Div. - Europa League - Copa del Rey" },
            { season: "2014/15", team: "Villarreal C.F.", category: "1ª Div. - Copa del Rey - Fase Previa Europa League" },
            { season: "2014/15", team: "Villarreal C.F. B", category: "2ª Div. B" },
            { season: "2013/14", team: "Villarreal C.F.", category: "1ª Div." },
            { season: "2013/14", team: "Villarreal C.F. B", category: "2ª Div. B" },
            { season: "2012/13", team: "Villarreal C.F. C", category: "3ª Div." },
            { season: "2012/13", team: "Villarreal C.F. B", category: "2ª Div. B" }
        ],
        nationalTeam: [
            { season: "2017", team: "España Sub-21", category: "Clasif. Europeo Sub-21 - Amistosos" },
            { season: "2015", team: "España Sub-21", category: "Clasif. Europeo Sub-21" },
            { season: "2015", team: "España Sub-19", category: "Europeo Sub-19 - Amistosos" },
            { season: "2014", team: "España Sub-19", category: "Amistosos" }
        ],
        stats: {
            "2020/21": {
                liga: { partidos: 37, goles_marcados: 6, tarjetas_amarillas: 5, tarjetas_rojas: 0 },
                copa: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "cedric": {
        name: "Cedric Wilfried Teguía Noubi",
        footballName: "Cedric",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/3xF7mcGm/Cedric_PNG.webp",
        personalData: {
            fullName: "Cedric Wilfried Teguía Noubi",
            nickname: "Cedric",
            birthPlace: "Duala, Región del Litoral",
            country: "Camerún",
            nationality: "Camerunesa, Española",
            height: "1,80 m",
            birthDate: "01/10/2001",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Moreirense F.C.", category: "Liga Portugal Betclic - Taça de Portugal" },
            { season: "2024/25", team: "Moreirense F.C.", category: "Liga Portugal Betclic" },
            { season: "2024/25", team: "F.C. Cartagena", category: "2ª Div. - Copa del Rey" },
            { season: "2023/24", team: "A.D. Ceuta F.C.", category: "1ª Federación - 1ª Federación Prom. de Ascenso" },
            { season: "2022/23", team: "C.F. Intercity", category: "1ª Federación" },
            { season: "2022/23", team: "Córdoba C.F.", category: "1ª Federación - Copa del Rey" },
            { season: "2021/22", team: "R.C. Celta de Vigo B", category: "1ª Federación" },
            { season: "2020/21", team: "Albacete Balompié", category: "2ª Div." },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Club At. de Madrid B", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2019/20", team: "Club At. de Madrid Sub-19", category: "UEFA Youth League" },
            { season: "2018/19", team: "Club At. de Madrid Sub-19", category: "UEFA Youth League" },
            { season: "2018/19", team: "Club At. de Madrid B", category: "2ª Div. B" }
        ],
        nationalTeam: [
            { season: "2019", team: "España Sub-19", category: "Clasif. Europeo Sub-19 - Amistosos" },
            { season: "2019", team: "España Sub-20", category: "Torneo COTIF Sub-20" },
            { season: "2019", team: "España Sub-18", category: "Copa Eslovaquia Sub-18 - Copa del Atlántico Juvenil" },
            { season: "2018", team: "España Sub-18", category: "Amistosos" },
            { season: "2018", team: "España Sub-17", category: "Amistosos" },
            { season: "2017", team: "España Sub-17", category: "Clasif. Europeo Sub-17" }
        ],
        stats: {
            "2020/21": {
                liga: { partidos: 9, goles_marcados: 0, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "tejera": {
        name: "Sergio Tejera Rodríguez",
        footballName: "Tejera",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/Cxp4yZ9w/Tejera_PNG.webp",
        personalData: {
            fullName: "Sergio Tejera Rodríguez",
            nickname: "Tejera",
            birthPlace: "Barcelona, Barcelona",
            country: "España",
            nationality: "Española",
            height: "1,80 m",
            birthDate: "28/05/1990",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Racing Club de Ferrol", category: "1ª Federación - Copa del Rey" },
            { season: "2024/25", team: "APOEL F.C.", category: "Liga Chipre - Fase Previa Champs. League - Copa de Chipre - Supercopa de Chipre - Conference League" },
            { season: "2023/24", team: "Anorthosis Famagusta F.C.", category: "Liga Chipre - Copa Chipre" },
            { season: "2022/23", team: "Anorthosis Famagusta F.C.", category: "Liga Chipre - Copa Chipre" },
            { season: "2022/23", team: "F.C. Cartagena", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "F.C. Cartagena", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div." },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div." },
            { season: "2018/19", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2017/18", team: "Gimnàstic de Tarragona", category: "2ª Div." },
            { season: "2016/17", team: "Gimnàstic de Tarragona", category: "2ª Div. - Copa del Rey" },
            { season: "2015/16", team: "Gimnàstic de Tarragona", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2014/15", team: "Deportivo Alavés", category: "2ª Div. - Copa del Rey" },
            { season: "2013/14", team: "Deportivo Alavés", category: "2ª Div." },
            { season: "2013/14", team: "R.C.D. Espanyol de Barcelona", category: "1ª Div. - Copa del Rey" },
            { season: "2012/13", team: "R.C.D. Espanyol de Barcelona", category: "1ª Div. - Copa del Rey" },
            { season: "2011/12", team: "R.C.D. Mallorca", category: "1ª Div. - Copa del Rey" },
            { season: "2010/11", team: "R.C.D. Mallorca", category: "1ª Div. - Copa del Rey" },
            { season: "2010/11", team: "R.C.D. Mallorca B", category: "2ª Div. B" },
            { season: "2009/10", team: "R.C.D. Mallorca B", category: "2ª Div. B" },
            { season: "2007/08", team: "Chelsea F.C. Sub-18", category: "FA Youth Cup" }
        ],
        nationalTeam: [
            { season: "2007", team: "España Sub-17", category: "Mundial Sub-17 - Amistosos" },
            { season: "2006", team: "España Sub-15", category: "Amistosos" },
            { season: "2005", team: "España Sub-16", category: "Amistosos" }
        ],
        stats: {
            "2020/21": {
                liga: { partidos: 33, goles_marcados: 4, tarjetas_amarillas: 10, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2019/20": {
                liga: { partidos: 35, goles_marcados: 2, tarjetas_amarillas: 14, tarjetas_rojas: 2 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2018/19": {
                liga: { partidos: 34, goles_marcados: 4, tarjetas_amarillas: 15, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "riki": {
        name: "Ricardo Rodríguez Gil-Carcedo",
        footballName: "Riki",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/8PzSR5ZP/Riki_PNG.webp",
        personalData: {
            fullName: "Ricardo Rodríguez Gil-Carcedo",
            nickname: "Riki",
            birthPlace: "Oviedo, Asturias",
            country: "España",
            nationality: "Española",
            height: "1,75 m",
            birthDate: "25/09/1997",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Albacete Balompié", category: "2ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Albacete Balompié", category: "2ª Div. - Copa del Rey" },
            { season: "2023/24", team: "Albacete Balompié", category: "2ª Div. - Copa del Rey" },
            { season: "2022/23", team: "Albacete Balompié", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2021/22", team: "Albacete Balompié", category: "1ª Federación - 1ª Federación Prom. de Ascenso" },
            { season: "2021/22", team: "Burgos C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Real Racing Club de Santander", category: "2ª Div. B - 2ª Div. B 2ª Fase 1ª Div. RFEF" },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "U.P. de Langreo", category: "2ª Div. B - Copa del Rey - Copa Federación" },
            { season: "2017/18", team: "Club Marino de Luanco", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2016/17", team: "C.D. Tineo", category: "3ª Div." },
            { season: "2015/16", team: "Real Oviedo B", category: "3ª Div." },
            { season: "2014/15", team: "Astur C.F. Sub-19", category: "División de Honor" }
        ],
        stats: {
            "2020/21": {
                liga: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2019/20": {
                liga: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "educortina": {
        name: "Eduardo Cortina García",
        footballName: "Edu Cortina",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/59pY3XSX/Edu_Cortina_PNG.webp",
        personalData: {
            fullName: "Eduardo Cortina García",
            nickname: "Edu Cortina",
            birthPlace: "Oviedo, Asturias",
            country: "España",
            nationality: "Española",
            height: "1,74 m",
            birthDate: "25/09/1996",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Real Avilés Industrial C.F.", category: "1ª Federación" },
            { season: "2024/25", team: "Real Avilés Industrial C.F.", category: "2ª Federación" },
            { season: "2023/24", team: "Real Avilés Industrial C.F.", category: "2ª Federación - 2ª Federación Prom. de Permanencia" },
            { season: "2022/23", team: "Real Avilés Industrial C.F.", category: "2ª Federación - 2ª Federación Prom. de Ascenso - Copa Federación Fase Autonómica - Copa Federación" },
            { season: "2021/22", team: "Unionistas de Salamanca C.F.", category: "1ª Federación - Copa del Rey" },
            { season: "2020/21", team: "A.D. Mérida", category: "2ª Div. B" },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div." },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2018/19", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2017/18", team: "Real Oviedo B", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div." },
            { season: "2016/17", team: "Real Oviedo B", category: "3ª Div." },
            { season: "2015/16", team: "Real Oviedo B", category: "3ª Div." },
            { season: "2014/15", team: "Real Oviedo Sub-19", category: "División de Honor" },
            { season: "2013/14", team: "Real Oviedo Sub-19", category: "División de Honor" }
        ],
        stats: {
            "2020/21": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2019/20": {
                liga: { partidos: 10, goles_marcados: 0, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2018/19": {
                liga: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2017/18": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "borjavalle": {
        name: "Borja Valle Balonga",
        footballName: "Borja Valle",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/yYwGr8VH/Borja_Valle_PNG.webp",
        personalData: {
            fullName: "Borja Valle Balonga",
            nickname: "Borja Valle",
            birthPlace: "Ponferrada, León",
            country: "España",
            nationality: "Española",
            height: "1,77 m",
            birthDate: "09/07/1992",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "S.D. Ponferradina", category: "1ª Federación - Copa del Rey" },
            { season: "2024/25", team: "S.D. Ponferradina", category: "1ª Federación - 1ª Federación Prom. de Ascenso - Copa del Rey" },
            { season: "2023/24", team: "S.D. Ponferradina", category: "1ª Federación - 1ª Federación Prom. de Ascenso" },
            { season: "2023/24", team: "F.C. Rapid de Bucarest", category: "Liga Rumana - Copa Rumanía" },
            { season: "2022/23", team: "F.C. Cartagena", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "A.D. Alcorcón", category: "2ª Div." },
            { season: "2021/22", team: "Khor Fakkan S.S.C.", category: "Liga Emiratos" },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "F.C. Dinamo de Bucarest", category: "Liga Rumana - Copa Rumanía" },
            { season: "2019/20", team: "R.C. Deportivo de La Coruña", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "R.C. Deportivo de La Coruña", category: "2ª Div. - 2ª Div. Prom. de Ascenso" },
            { season: "2017/18", team: "R.C. Deportivo de La Coruña", category: "1ª Div. - Copa del Rey" },
            { season: "2016/17", team: "Elche C.F.", category: "2ª Div." },
            { season: "2016/17", team: "R.C. Deportivo de La Coruña", category: "1ª Div. - Copa del Rey" },
            { season: "2015/16", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2014/15", team: "Real Oviedo", category: "2ª Div. B - Copa del Rey - 2ª Div. B Prom. de Ascenso" },
            { season: "2013/14", team: "C.D. Ourense", category: "2ª Div. B - Copa Federación" },
            { season: "2012/13", team: "C.D. Ourense", category: "2ª Div. B - Copa del Rey" },
            { season: "2011/12", team: "R.C. Celta de Vigo B", category: "2ª Div. B" },
            { season: "2011/12", team: "S.D. Ponferradina", category: "2ª Div. B - Copa del Rey - 2ª Div. B Prom. de Ascenso" },
            { season: "2010/11", team: "S.D. Ponferradina", category: "2ª Div." },
            { season: "2009/10", team: "S.D. Ponferradina", category: "2ª Div. B" }
        ],
        stats: {
            "2020/21": {
                liga: { partidos: 21, goles_marcados: 0, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2015/16": {
                liga: { partidos: 29, goles_marcados: 6, tarjetas_amarillas: 4, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2014/15": {
                liga: { partidos: 25, goles_marcados: 9, tarjetas_amarillas: 5, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "tonripoll": {
        name: "Ton Ripoll i Solera",
        footballName: "Ton Ripoll",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/rss30hkG/Ton_Ripoll_PNG.webp",
        personalData: {
            fullName: "Ton Ripoll i Solera",
            nickname: "Ton Ripoll",
            birthPlace: "Sampedor, Barcelona",
            country: "España",
            nationality: "Española",
            height: "1,78 m",
            birthDate: "27/05/1998",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "C.E. Sabadell F.C.", category: "1ª Federación - Copa de Catalunya - Copa del Rey" },
            { season: "2024/25", team: "C.E. Sabadell F.C.", category: "2ª Federación - 2ª Federación Prom. de Ascenso - Copa Federación Fase Autonómica - Copa Federación - Copa de Catalunya" },
            { season: "2023/24", team: "Lleida C.F.", category: "2ª Federación - 2ª Federación Prom. de Ascenso - Copa Federación Fase Autonómica - Copa Federación" },
            { season: "2022/23", team: "S.C.R. Penya Deportiva", category: "2ª Federación - 2ª Federación Prom. de Ascenso - Copa del Rey" },
            { season: "2021/22", team: "S.C.R. Penya Deportiva", category: "2ª Federación - 2ª Federación Prom. de Ascenso - Copa Federación Fase Autonómica - Copa Federación" },
            { season: "2020/21", team: "Real Murcia C.F.", category: "2ª Div. B" },
            { season: "2020/21", team: "Real Oviedo", category: "Copa del Rey" },
            { season: "2020/21", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2019/20", team: "C.E. L’Hospitalet", category: "3ª Div. - 3ª Div. Prom. de Ascenso - Copa del Rey" },
            { season: "2018/19", team: "C.E. L’Hospitalet", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2017/18", team: "F.C. Vilafranca", category: "3ª Div. - Copa Federación - Copa de Catalunya" }
        ],
        stats: {
            "2020/21": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "sandoval": {
        name: "Daniel Sandoval Fernández",
        footballName: "Sandoval",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/Wb3BDy4d/Sandoval_PNG.webp",
        personalData: {
            fullName: "Daniel Sandoval Fernández",
            nickname: "Sandoval",
            birthPlace: "Gijón, Asturias",
            country: "España",
            nationality: "Española",
            height: "1,78 m",
            birthDate: "16/02/1998",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "G.K.S. Tychy", category: "2ª Polonia" },
            { season: "2025/26", team: "K.S. Wieczysta Cracovia", category: "2ª Polonia - Copa Polonia" },
            { season: "2024/25", team: "K.S. Wieczysta Cracovia", category: "3ª Polonia" },
            { season: "2023/24", team: "A.D. Mérida", category: "1ª Federación" },
            { season: "2022/23", team: "A.D. Mérida", category: "1ª Federación - Copa del Rey" },
            { season: "2021/22", team: "S.D. Logroñés", category: "1ª Federación - Copa del Rey" },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div." },
            { season: "2020/21", team: "Real Oviedo B", category: "2ª Div. B - 2ª Div. B 2ª Fase de Permanencia 2ª RFEF" },
            { season: "2020/21", team: "Real Murcia C.F.", category: "2ª Div. B - Copa Federación" },
            { season: "2019/20", team: "At. Levante U.D.", category: "2ª Div. B" },
            { season: "2018/19", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2018/19", team: "Real Oviedo", category: "2ª Div." },
            { season: "2017/18", team: "Real Oviedo B", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div." }
        ],
        stats: {
            "2020/21": {
                liga: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2018/19": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2017/18": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 1, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "omarramos": {
        name: "Julián Omar Ramos Suárez",
        footballName: "Omar Ramos",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/sXbhpqr3/Omar_Ramos_PNG.webp",
        personalData: {
            fullName: "Julián Omar Ramos Suárez",
            nickname: "Omar Ramos",
            birthPlace: "San Cristóbal de La Laguna, Santa Cruz de Tenerife",
            country: "España",
            nationality: "Española",
            height: "1,75 m",
            birthDate: "26/01/1988",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "C.D. Laguna", category: "Preferente Canarias - Copa Federación - Copa Federación Fase Autonómica" },
            { season: "2022/23", team: "Gokulam Kerala F.C.", category: "Liga India - Supercopa India" },
            { season: "2021/22", team: "Rajasthan United F.C.", category: "Liga India" },
            { season: "2020/21", team: "C.D. Alcoyano", category: "2ª Div. B - 2ª Div. B 2ª Fase de Ascenso a 2ª" },
            { season: "2019/20", team: "S.D. Ponferradina", category: "2ª Div." },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div." },
            { season: "2018/19", team: "Real Oviedo", category: "2ª Div." },
            { season: "2017/18", team: "C.D. Leganés", category: "1ª Div. - Copa del Rey" },
            { season: "2016/17", team: "C.D. Leganés", category: "1ª Div. - Copa del Rey" },
            { season: "2015/16", team: "C.D. Leganés", category: "2ª Div. - Copa del Rey" },
            { season: "2014/15", team: "Real Valladolid C.F.", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2013/14", team: "Real Valladolid C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2012/13", team: "Real Valladolid C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2011/12", team: "S.D. Huesca", category: "2ª Div." },
            { season: "2011/12", team: "U.D. Almería", category: "2ª Div. - Copa del Rey" },
            { season: "2010/11", team: "C.D. Tenerife", category: "2ª Div. - Copa del Rey" },
            { season: "2009/10", team: "C.D. Tenerife B", category: "2ª Div. B" },
            { season: "2009/10", team: "C.D. Tenerife", category: "1ª Div. - Copa del Rey" },
            { season: "2007/08", team: "C.D. Tenerife", category: "2ª Div. - Copa del Rey" },
            { season: "2006/07", team: "U.E. Lleida", category: "2ª Div. B" },
            { season: "2006/04", team: "C.D. Tenerife", category: "2ª Div. - Copa del Rey" }
        ],
        nationalTeam: [
            { season: "2009", team: "España Sub-21", category: "Clasif. Europeo Sub-21" }
        ],
        stats: {
            "2019/20": {
                liga: { partidos: 9, goles_marcados: 0, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2018/19": {
                liga: { partidos: 12, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "sebascoris": {
        name: "Sebastián Coris Cardeñosa",
        footballName: "Sebas Coris",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/7YfRPTB7/Sebas_Coris_PNG.webp",
        personalData: {
            fullName: "Sebastián Coris Cardeñosa",
            nickname: "Sebas Coris",
            birthPlace: "Tosa de Mar, Gerona",
            country: "España",
            nationality: "Española",
            height: "1,82 m",
            birthDate: "31/05/1993",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "U.E. Tossa", category: "Primera Catalana" },
            { season: "2024/25", team: "U.E. Tossa", category: "Primera Catalana" },
            { season: "2022/23", team: "U.E. Olot", category: "2ª Federación - Copa de Catalunya - Copa del Rey" },
            { season: "2021/22", team: "Extremadura U.D.", category: "1ª Federación - Copa del Rey" },
            { season: "2021/22", team: "Som Maresme F.C.", category: "1ª Federación" },
            { season: "2020/21", team: "Extremadura U.D.", category: "2ª Div. B - Copa del Rey" },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div." },
            { season: "2019/20", team: "Girona F.C.", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "Gimnàstic de Tarragona", category: "2ª Div." },
            { season: "2017/18", team: "C.A. Osasuna", category: "2ª Div. - Copa del Rey" },
            { season: "2016/17", team: "Girona F.C.", category: "2ª Div. - Copa de Catalunya - Copa del Rey" },
            { season: "2015/16", team: "Girona F.C.", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2014/15", team: "Girona F.C.", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2013/14", team: "Girona F.C.", category: "2ª Div. - Copa del Rey" }
        ],
        stats: {
            "2019/20": {
                liga: { partidos: 7, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "lologonzalez": {
        name: "Emmanuel González Rodríguez",
        footballName: "Lolo González",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/Y9z38tdt/Lolo_González_PNG.webp",
        personalData: {
            fullName: "Emmanuel González Rodríguez",
            nickname: "Lolo González",
            birthPlace: "Sanlúcar de Barrameda, Cádiz",
            country: "España",
            nationality: "Española",
            height: "1,86 m",
            birthDate: "22/07/1991",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "C.D. Badajoz", category: "3ª Federación" },
            { season: "2025/26", team: "C.D. Estepona", category: "2ª Federación - Copa del Rey" },
            { season: "2024/25", team: "U.D. Melilla", category: "2ª Federación" },
            { season: "2024/25", team: "A.D. Ceuta F.C.", category: "1ª Federación - Copa del Rey" },
            { season: "2023/24", team: "A.D. Ceuta F.C.", category: "1ª Federación - 1ª Federación Prom. de Ascenso" },
            { season: "2022/23", team: "Linares Deportivo", category: "1ª Federación - Copa del Rey" },
            { season: "2021/22", team: "At. Sanluqueño C.F.", category: "1ª Federación" },
            { season: "2021/22", team: "Extremadura U.D.", category: "1ª Federación - Copa del Rey" },
            { season: "2020/21", team: "San Fernando C.D.", category: "2ª Div. B - Copa del Rey - 2ª Div. B 2ª Fase de Ascenso a 2ª" },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "Extremadura U.D.", category: "2ª Div." },
            { season: "2018/19", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2017/18", team: "Club Polideportivo El Ejido 2012", category: "2ª Div. B" },
            { season: "2016/17", team: "Marbella F.C.", category: "2ª Div. B" },
            { season: "2015/16", team: "C.D. San Roque de Lepe", category: "2ª Div. B" },
            { season: "2014/15", team: "Real Betis Balompié B", category: "2ª Div. B" },
            { season: "2013/14", team: "Real Betis Balompié B", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2012/13", team: "At. Sanluqueño C.F.", category: "2ª Div. B - Copa del Rey" },
            { season: "2010/11", team: "At. Sanluqueño C.F.", category: "3ª Div." },
            { season: "2008/09", team: "R.C. Portuense", category: "2ª Div. B" }
        ],
        stats: {
            "2019/20": {
                liga: { partidos: 28, goles_marcados: 1, tarjetas_amarillas: 9, tarjetas_rojas: 1 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "robersierra": {
        name: "Roberto Manuel Sierra Giménez",
        footballName: "Rober Sierra",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/jqXTnNQF/Rober_Sierra_PNG.webp",
        personalData: {
            fullName: "Roberto Manuel Sierra Giménez",
            nickname: "Rober Sierra",
            birthPlace: "",
            country: "España",
            nationality: "Española",
            height: "Valencia, Valencia",
            birthDate: "21/05/1996",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "F.C. Argeș Pitești", category: "Liga Rumana - Copa Rumanía" },
            { season: "2024/25", team: "F.C. Steaua de Bucarest", category: "2ª Rumanía" },
            { season: "2023/24", team: "F.C. Steaua de Bucarest", category: "2ª Rumanía - Copa Rumanía" },
            { season: "2022/23", team: "F.C. Spartak Varna", category: "Liga Bulgaria - Copa Bulgaria" },
            { season: "2021/22", team: "F.C. Inter Turku", category: "Liga Finlandia - Copa Finlandia" },
            { season: "2021/22", team: "S.D. Formentera", category: "2ª Federación - Copa Federación Fase Autonómica" },
            { season: "2020/21", team: "Real Oviedo B", category: "2ª Div. B - 2ª Div. B 2ª Fase de Permanencia 2ª RFEF" },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div." },
            { season: "2019/20", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2018/19", team: "C.F. Peralada", category: "2ª Div. B" },
            { season: "2017/18", team: "Ontinyent C.F.", category: "2ª Div. B - Copa Federación" },
            { season: "2016/17", team: "Ontinyent C.F.", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2015/16", team: "R.C.D. Mallorca B", category: "3ª Div." },
            { season: "2015/16", team: "At. Levante U.D.", category: "2ª Div. B" }
        ],
        stats: {
            "2019/20": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "aaronniguez": {
        name: "Aarón Ñíguez Esclapez",
        footballName: "Aarón Ñíguez",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/524zJw9q/Aaron-Niguez-PNG.webp",
        personalData: {
            fullName: "Aarón Ñíguez Esclapez",
            nickname: "Aarón Ñíguez",
            birthPlace: "Elche, Alicante",
            country: "España",
            nationality: "Española",
            height: "1,70 m",
            birthDate: "26/04/1989",
            deathDate: null
        },
        career: [
            { season: "2023/24", team: "Club Costa City", category: "2ª FFCV" },
            { season: "2021/22", team: "C.D. Eldense", category: "2ª Federación - Copa del Rey - 2ª Federación Prom. de Ascenso" },
            { season: "2020/21", team: "C.F. La Nucía", category: "2ª Div. B - Copa del Rey - 2ª Div. B 2ª Fase 1ª Div. RFEF" },
            { season: "2019/20", team: "Málaga C.F.", category: "2ª Div." },
            { season: "2018/19", team: "Johor Darul Takzim F.C.", category: "Liga Malasia" },
            { season: "2018/19", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div." },
            { season: "2016/17", team: "C.D. Tenerife", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2015/16", team: "Sporting Clube de Braga", category: "Liga Portugal Betclic - Copa de la Liga Portugal - Taça de Portugal" },
            { season: "2014/15", team: "Elche C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2013/14", team: "Elche C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2012/13", team: "Elche C.F.", category: "2ª Div." },
            { season: "2012/13", team: "U.D. Almería", category: "2ª Div. - Copa del Rey" },
            { season: "2011/12", team: "U.D. Almería", category: "2ª Div. - Copa del Rey" },
            { season: "2010/11", team: "R.C. Recreativo de Huelva", category: "2ª Div." },
            { season: "2009/10", team: "R.C. Celta de Vigo", category: "2ª Div. - Copa del Rey" },
            { season: "2008/09", team: "Rangers F.C.", category: "Liga Escocia - Copa Escocia" },
            { season: "2007/08", team: "Iraklis de Tesalónica F.C.", category: "Super League Griega - Copa Griega" },
            { season: "2007/08", team: "Xerez C.D.", category: "2ª Div. - Copa del Rey" },
            { season: "2006/07", team: "Valencia C.F.", category: "1ª Div. - Champs. League - Copa del Rey" },
            { season: "2006/07", team: "Valencia Mestalla", category: "2ª Div. B - 2ª Div. B Prom. de Permanencia" }
        ],
        nationalTeam: [
            { season: "2009", team: "España Sub-20", category: "Mundial Sub-20 - Amistosos" },
            { season: "2009", team: "España Sub-21", category: "Clasif. Europeo Sub-21 - Amistosos" },
            { season: "2008", team: "España Sub-21", category: "Amistosos" },
            { season: "2008", team: "España Sub-19", category: "Europeo Sub-19 - Clasif. Europeo Sub-19" },
            { season: "2007", team: "España Sub-19", category: "Europeo Sub-19 - Clasif. Europeo Sub-19 - Amistosos" },
            { season: "2006", team: "España Sub-19", category: "Amistosos" },
            { season: "2006", team: "España Sub-17", category: "Europeo Sub-17 - Clasif. Europeo Sub-17 - Amistosos" },
            { season: "2005", team: "España Sub-17", category: "Clasif. Europeo Sub-17" },
            { season: "2005", team: "España Sub-16", category: "Amistosos" },
            { season: "2004", team: "España Sub-16", category: "Amistosos" }
        ],
        stats: {
            "2018/19": {
                liga: { partidos: 9, goles_marcados: 0, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2017/18": {
                liga: { partidos: 35, goles_marcados: 5, tarjetas_amarillas: 6, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "ramonfolch": {
        name: "Ramón Folch Frigola",
        footballName: "Ramón Folch",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/nzKJkQ8M/Ramón_Folch_PNG.webp",
        personalData: {
            fullName: "Ramón Folch Frigola",
            nickname: "Ramón Folch",
            birthPlace: "Reus, Tarragona",
            country: "España",
            nationality: "Española",
            height: "1,83 m",
            birthDate: "04/10/1989",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Reus F.C. Reddis", category: "2ª Federación - Copa del Rey" },
            { season: "2024/25", team: "Reus F.C. Reddis", category: "3ª Federación - Copa Federación Fase Autonómica - Copa de Catalunya" },
            { season: "2023/24", team: "Reus F.C. Reddis", category: "3ª Federación - Copa de Catalunya" },
            { season: "2022/23", team: "U.E. Cornellà", category: "1ª Federación - Copa de Catalunya" },
            { season: "2021/22", team: "C.E. Sabadell F.C.", category: "1ª Federación" },
            { season: "2020/21", team: "C.D. Tenerife", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Elche C.F.", category: "1ª Div." },
            { season: "2019/20", team: "Elche C.F.", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2018/19", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2016/17", team: "C.F. Reus Deportiu", category: "2ª Div." },
            { season: "2015/16", team: "C.F. Reus Deportiu", category: "2ª Div. B - Copa del Rey - 2ª Div. B Prom. de Ascenso" },
            { season: "2014/15", team: "C.F. Reus Deportiu", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2013/14", team: "C.F. Reus Deportiu", category: "2ª Div. B" },
            { season: "2012/13", team: "U.B. Conquense", category: "3ª Div. Prom. de Ascenso" },
            { season: "2011/12", team: "C.F. Amposta", category: "3ª Div." }
        ],
        stats: {
            "2018/19": {
                liga: { partidos: 34, goles_marcados: 1, tarjetas_amarillas: 8, tarjetas_rojas: 1 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2017/18": {
                liga: { partidos: 41, goles_marcados: 1, tarjetas_amarillas: 8, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "richardboateng": {
        name: "Richard Boateng Welbeck",
        footballName: "Richard Boateng",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/J01Wd4mx/Richard_Boateng_PNG.webp",
        personalData: {
            fullName: "Richard Boateng Welbeck",
            nickname: "Richard Boateng",
            birthPlace: "Accra, Gran Accra",
            country: "Ghana",
            nationality: "Ghanesa, Española",
            height: "1,80 m",
            birthDate: "10/07/1992",
            deathDate: null
        },
        career: [
            { season: "2024/25", team: "Real Murcia C.F.", category: "1ª Federación - 1ª Federación Prom. de Ascenso - Copa Federación" },
            { season: "2023/24", team: "Hapoel Petah Tikva", category: "Liga Israel" },
            { season: "2022/23", team: "Maccabi Bnei Reineh", category: "Liga Israel - Copa Israel - Copa Toto Liga Israel" },
            { season: "2021/22", team: "F.C. Cartagena", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "A.D. Alcorcón", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "A.D. Alcorcón", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "A.D. Alcorcón", category: "2ª Div." },
            { season: "2018/19", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2017/18", team: "U.D. Melilla", category: "2ª Div. B" },
            { season: "2016/17", team: "Extremadura U.D.", category: "2ª Div. B" },
            { season: "2015/16", team: "Granada C.F. B", category: "2ª Div. B - Copa Federación" },
            { season: "2014/15", team: "Granada C.F. B", category: "2ª Div. B" },
            { season: "2013/14", team: "Granada C.F.", category: "1ª Div." },
            { season: "2013/14", team: "Granada C.F. B", category: "2ª Div. B" },
            { season: "2012/13", team: "C.D. San Roque de Lepe", category: "2ª Div. B - Copa del Rey" },
            { season: "2011/12", team: "Granada C.F.", category: "Copa del Rey" }
        ],
        nationalTeam: [
            { season: "2013", team: "Ghana", category: "Clasif. Mundial África - Copa África - Amistosos" },
            { season: "2012", team: "Ghana", category: "Clasif. Mundial África" }
        ],
        stats: {
            "2018/19": {
                liga: { partidos: 13, goles_marcados: 0, tarjetas_amarillas: 6, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "javimunoz": {
        name: "Javier Muñoz Jiménez",
        footballName: "Javi Muñoz",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/gjvPgXfn/Javi_Muñoz_PNG.webp",
        personalData: {
            fullName: "Javier Muñoz Jiménez",
            nickname: "Javi Muñoz",
            birthPlace: "Parla, Madrid",
            country: "España",
            nationality: "Española",
            height: "1,77 m",
            birthDate: "28/02/1995",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Getafe C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2024/25", team: "U.D. Las Palmas", category: "1ª Div. - Copa del Rey" },
            { season: "2023/24", team: "U.D. Las Palmas", category: "1ª Div. - Copa del Rey" },
            { season: "2022/23", team: "S.D. Eibar", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2021/22", team: "S.D. Eibar", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2020/21", team: "C.D. Mirandés", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "C.D. Tenerife", category: "2ª Div." },
            { season: "2019/20", team: "Deportivo Alavés", category: "1ª Div. - Copa del Rey" },
            { season: "2018/19", team: "Real Oviedo", category: "2ª Div." },
            { season: "2017/18", team: "Lorca F.C.", category: "2ª Div. - Copa del Rey" },
            { season: "2016/17", team: "Real Madrid Castilla", category: "2ª Div. B" },
            { season: "2015/16", team: "Real Madrid Castilla", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2014/15", team: "Real Madrid C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2014/15", team: "Real Madrid Castilla", category: "2ª Div. B" },
            { season: "2014/15", team: "Real Madrid C.F. C", category: "3ª Div." },
            { season: "2013/14", team: "Real Madrid C.F. Sub-19", category: "División de Honor - UEFA Youth League" }
        ],
        nationalTeam: [
            { season: "2014", team: "España Sub-19", category: "Amistosos" }
        ],
        stats: {
            "2018/19": {
                liga: { partidos: 27, goles_marcados: 1, tarjetas_amarillas: 7, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "pucko": {
        name: "Matej Pučko",
        footballName: "Pučko",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/Gm9bC2DS/Pucko_PNG.webp",
        personalData: {
            fullName: "Matej Pučko",
            nickname: "Pučko",
            birthPlace: "Murska Sobota, Pomurska",
            country: "Eslovenia",
            nationality: "Eslovena",
            height: "1,75 m",
            birthDate: "06/10/1993",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "S.V.U. R.B. Tieschen", category: "Unterliga Süd" },
            { season: "2024/25", team: "T.U.S. Heiligenkreuz", category: "4ª Austria" },
            { season: "2023/24", team: "T.U.S. Heiligenkreuz", category: "4ª Austria" },
            { season: "2021/22", team: "Bandirma Spor", category: "Liga Turca - Copa Turca" },
            { season: "2020/21", team: "Tuzlaspor", category: "Liga Turca - Copa Turca" },
            { season: "2019/20", team: "Korona Kielce", category: "Liga Polaca - Copa Polonia" },
            { season: "2019/20", team: "Korona Kielce II", category: "4ª Polonia" },
            { season: "2018/19", team: "Korona Kielce", category: "Liga Polaca - Copa Polonia" },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2016/17", team: "F.C. Koper", category: "Liga Eslovena SNL - Copa Eslovenia" },
            { season: "2015/16", team: "C.A. Osasuna", category: "2ª Div. - 2ª Div. Prom. de Ascenso" },
            { season: "2015/16", team: "F.C. Koper", category: "Liga Eslovena SNL - Fase Previa Europa League - Supercopa Eslovenia" },
            { season: "2014/15", team: "F.C. Koper", category: "Liga Eslovena SNL - Fase Previa Europa League - Copa Eslovenia" },
            { season: "2013/14", team: "F.C. Koper", category: "Liga Eslovena SNL" },
            { season: "2012/13", team: "F.C. Koper", category: "Liga Eslovena SNL - Copa Eslovenia" },
            { season: "2011/12", team: "F.C. Koper", category: "Liga Eslovena SNL - Copa Eslovenia" },
            { season: "2010/11", team: "N.K. Aluminij", category: "2ª Eslovenia 2 SNL" }
        ],
        nationalTeam: [
            { season: "2017", team: "Eslovenia", category: "Amistosos" },
            { season: "2014", team: "Eslovenia Sub-21", category: "Clasif. Europeo Sub-21 - Amistosos" },
            { season: "2013", team: "Eslovenia Sub-21", category: "Clasif. Europeo Sub-21 - Amistosos" },
            { season: "2012", team: "Eslovenia Sub-19", category: "Clasif. Europeo Sub-19" },
            { season: "2011", team: "Eslovenia Sub-20", category: "Amistosos" },
            { season: "2011", team: "Eslovenia Sub-19", category: "Clasif. Europeo Sub-19" },
            { season: "2009", team: "Eslovenia Sub-17", category: "Clasif. Europeo Sub-17" }
        ],
        stats: {
            "2017/18": {
                liga: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "jorgeortiz": {
        name: "Jorge Ortiz Mendoza",
        footballName: "Jorge Ortiz",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/Pr4gNjhs/Jorge_Ortiz_PNG.webp",
        personalData: {
            fullName: "Jorge Ortiz Mendoza",
            nickname: "Jorge Ortiz",
            birthPlace: "Villacañas, Toledo",
            country: "España",
            nationality: "Española",
            height: "1,73 m",
            birthDate: "25/04/1992",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Mumbai City F.C.", category: "Supercopa India" },
            { season: "2024/25", team: "Mumbai City F.C.", category: "India Super League - Supercopa India" },
            { season: "2023/24", team: "Shenzhen Peng City F.C.", category: "Superliga China - Copa China FA" },
            { season: "2022/23", team: "Shenzhen Peng City F.C.", category: "Liga Uno China" },
            { season: "2021/22", team: "Shenzhen Peng City F.C.", category: "Liga Uno China - Copa China FA" },
            { season: "2021/22", team: "F.C. Goa", category: "India Super League" },
            { season: "2020/21", team: "F.C. Goa", category: "India Super League - AFC Champs. League Elite" },
            { season: "2019/20", team: "C.D. Atlético Baleares", category: "2ª Div. B - Copa del Rey - 2ª Div. B Prom. de Ascenso" },
            { season: "2018/19", team: "Cultural y Deportiva Leonesa", category: "2ª Div. B - Copa del Rey" },
            { season: "2017/18", team: "Club At. de Madrid B", category: "2ª Div. B" },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div." },
            { season: "2016/17", team: "Real Oviedo", category: "2ª Div." },
            { season: "2015/16", team: "C.F. Fuenlabrada", category: "2ª Div. B" },
            { season: "2014/15", team: "A.D. Alcorcón", category: "2ª Div." },
            { season: "2014/15", team: "A.D. Alcorcón B", category: "3ª Div." },
            { season: "2013/14", team: "C.F. Internacional de Madrid", category: "3ª Div." },
            { season: "2011/12", team: "Albacete Balompié B", category: "3ª Div." }
        ],
        stats: {
            "2017/18": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2016/17": {
                liga: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "yeboah": {
        name: "Yaw Yeboah",
        footballName: "Yeboah",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/K8mJkkfJ/Yeboah_PNG.webp",
        personalData: {
            fullName: "Yaw Yeboah",
            nickname: "Yeboah",
            birthPlace: "Accra, Gran Accra",
            country: "Ghana",
            nationality: "Ghanesa",
            height: "1,75 m",
            birthDate: "28/03/1997",
            deathDate: null
        },
        career: [
            { season: "2024/25", team: "Los Angeles F.C. 2", category: "MLS Next Pro" },
            { season: "2024/25", team: "Los Angeles F.C.", category: "MLS Liga USA - Mundial de Clubes - CONCACAF Champs. Cup - Leagues Cup - Clasif. Mundial de Clubes" },
            { season: "2023/24", team: "Columbus Crew S.C.", category: "MLS Liga USA - CONCACAF Champs. Cup - Campeones Cup - Leagues Cup" },
            { season: "2022/23", team: "Columbus Crew 2 S.C.", category: "MLS Next Pro" },
            { season: "2022/23", team: "Columbus Crew S.C.", category: "MLS Liga USA - US Open Cup - Leagues Cup" },
            { season: "2021/22", team: "Columbus Crew S.C.", category: "MLS Liga USA - US Open Cup" },
            { season: "2021/22", team: "Wisla Cracovia", category: "Liga Polaca - Copa Polonia" },
            { season: "2020/21", team: "Wisla Cracovia", category: "Liga Polaca" },
            { season: "2019/20", team: "R.C. Celta de Vigo B", category: "2ª Div. B" },
            { season: "2018/19", team: "C.D. Numancia", category: "2ª Div." },
            { season: "2017/18", team: "Manchester City F.C. Sub-23", category: "Premier League 2ª Div. One" },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2016/17", team: "Manchester City F.C. Sub-23", category: "Premier League 2ª Div. Two" },
            { season: "2016/17", team: "F.C. Twente Enschede", category: "Eredivisie - KNVB Beker" },
            { season: "2015/16", team: "Manchester City F.C. Sub-21", category: "Premier League Sub-21" },
            { season: "2015/16", team: "Lille Olympique S.C.", category: "Ligue 1 - Copa de La Liga - Copa de Francia" },
            { season: "2015/16", team: "Lille Olympique B S.C.", category: "National 3" },
            { season: "2014/15", team: "Manchester City F.C. Sub-21", category: "Premier League Sub-21" }
        ],
        nationalTeam: [
            { season: "2022", team: "Ghana", category: "Clasif. Mundial África" },
            { season: "2021", team: "Ghana", category: "Clasif. Mundial África" },
            { season: "2019", team: "Ghana Sub-23", category: "Copa África Sub-23" },
            { season: "2019", team: "Ghana", category: "Amistosos" },
            { season: "2016", team: "Ghana", category: "Amistosos" },
            { season: "2015", team: "Ghana Sub-20", category: "Mundial Sub-20 - Copa África Sub-20 - Amistosos" }
        ],
        stats: {
            "2017/18": {
                liga: { partidos: 20, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 1 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "mariga": {
        name: "McDonald Mariga Wanyama",
        footballName: "Mariga",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/fLzXzmvh/Mariga_PNG.webp",
        personalData: {
            fullName: "McDonald Mariga Wanyama",
            nickname: "Mariga",
            birthPlace: "Nairobi, Nairobi",
            country: "Kenia",
            nationality: "Keniana",
            height: "1,88 m",
            birthDate: "04/04/1987",
            deathDate: null
        },
        career: [
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div." },
            { season: "2016/17", team: "U.S. Latina Calcio 1932", category: "Serie B - Coppa Italia" },
            { season: "2015/16", team: "U.S. Latina Calcio 1932", category: "Serie B" },
            { season: "2014/15", team: "Parma Calcio 1913", category: "Serie A - Coppa Italia" },
            { season: "2013/14", team: "Inter de Milán Sub-19", category: "Campionato Primavera 1" },
            { season: "2012/13", team: "Parma Calcio 1913", category: "Serie A" },
            { season: "2012/13", team: "Inter de Milán", category: "Serie A - Coppa Italia" },
            { season: "2012/13", team: "Inter de Milán Sub-19", category: "Campionato Primavera 1" },
            { season: "2011/12", team: "Parma Calcio 1913", category: "Serie A" },
            { season: "2011/12", team: "Real Sociedad de Fútbol", category: "1ª Div. - Copa del Rey" },
            { season: "2010/11", team: "Inter de Milán", category: "Serie A - Champs. League - Mundial de Clubes - Supercopa de Italia - Coppa de Italia" },
            { season: "2009/10", team: "Inter de Milán", category: "Serie A - Champs. League - Coppa Italia" },
            { season: "2009/10", team: "Parma Calcio 1913", category: "Serie A - Coppa Italia" },
            { season: "2008/09", team: "Parma Calcio 1913", category: "Serie B - Coppa Italia" },
            { season: "2007/08", team: "Parma Calcio 1913", category: "Serie A" },
            { season: "2007/08", team: "Helsingborgs I.F.", category: "Fase Previa Europa League" },
            { season: "2006/07", team: "Helsingborgs I.F.", category: "Liga Sueca" },
            { season: "2005/06", team: "Helsingborgs I.F.", category: "Liga Sueca" }
        ],
        nationalTeam: [
            { season: "2018", team: "Kenia", category: "Amistosos" },
            { season: "2014", team: "Kenia", category: "Clasif. Copa África - Amistosos" },
            { season: "2011", team: "Kenia", category: "Clasif. Copa África" },
            { season: "2010", team: "Kenia", category: "Clasif. Copa África" },
            { season: "2009", team: "Kenia", category: "Clasif. Mundial África" },
            { season: "2008", team: "Kenia", category: "Clasif. Mundial África" },
            { season: "2005", team: "Kenia", category: "Clasif. Mundial África" },
            { season: "2004", team: "Kenia", category: "Clasif. Mundial África" }
        ],
        stats: {
            "2017/18": {
                liga: { partidos: 15, goles_marcados: 0, tarjetas_amarillas: 6, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "hidi": {
        name: "Patrik Hidi",
        footballName: "Hidi",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/tg2QfGSN/Hidi_PNG.webp",
        personalData: {
            fullName: "Patrik Hidi",
            nickname: "Hidi",
            birthPlace: "Győr, Győr-Moson-Sopron",
            country: "Hungría",
            nationality: "Húngara",
            height: "1,86 m",
            birthDate: "27/11/1990",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Karcagi S.E.", category: "2ª Hungría" },
            { season: "2024/25", team: "Budapest V.S.C.", category: "2ª Hungría - Copa Hungría" },
            { season: "2023/24", team: "Budapest V.S.C.", category: "2ª Hungría - Copa Hungría" },
            { season: "2022/23", team: "Vasas Budapest S.C.", category: "Liga Hungría - Copa Hungría" },
            { season: "2021/22", team: "Budapest Honvéd F.C.", category: "Liga Hungría - Copa Hungría" },
            { season: "2020/21", team: "Budapest Honvéd F.C.", category: "Liga Hungría - Copa Hungría - Fase Previa Europa League" },
            { season: "2019/20", team: "Budapest Honvéd F.C.", category: "Liga Hungría - Copa Hungría" },
            { season: "2018/19", team: "FK Irtysh Pavlodar", category: "Liga Kazajistán - Copa Kazajistán" },
            { season: "2018/19", team: "Budapest Honvéd F.C.", category: "Liga Hungría" },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div." },
            { season: "2016/17", team: "Budapest Honvéd F.C.", category: "Liga Hungría - Copa Hungría" },
            { season: "2015/16", team: "Budapest Honvéd F.C.", category: "Liga Hungría - Copa Hungría" },
            { season: "2014/15", team: "Budapest Honvéd F.C.", category: "Liga Hungría - Copa Hungría - Copa de la Liga Hungría" },
            { season: "2013/14", team: "Budapest Honvéd F.C.", category: "Liga Hungría - Copa Hungría - Fase Previa Europa League" },
            { season: "2012/13", team: "Budapest Honvéd F.C.", category: "Liga Hungría - Copa Hungría - Copa de la Liga Hungría - Fase Previa Europa League" },
            { season: "2011/12", team: "Budapest Honvéd F.C. II", category: "2ª Hungría" },
            { season: "2011/12", team: "Budapest Honvéd F.C.", category: "Liga Hungría" },
            { season: "2010/11", team: "Budapest Honvéd F.C.", category: "Liga Hungría - Copa Hungría" },
            { season: "2010/11", team: "Budapest Honvéd F.C. II", category: "2ª Hungría" },
            { season: "2009/10", team: "Budapest Honvéd F.C.", category: "Liga Hungría - Copa Hungría - Fase Previa Europa League" },
            { season: "2008/09", team: "Budapest Honvéd F.C.", category: "Liga Hungría - Supercopa Hungría" }
        ],
        nationalTeam: [
            { season: "2011", team: "Hungría Sub-21", category: "Clasif. Europeo Sub-21 - Amistosos" },
            { season: "2010", team: "Hungría Sub-21", category: "Amistosos" },
            { season: "2009", team: "Hungría Sub-19", category: "Clasif. Europeo Sub-19" }
        ],
        stats: {
            "2017/18": {
                liga: { partidos: 14, goles_marcados: 0, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "davidrocha": {
        name: "David Mateos Rocha",
        footballName: "David Rocha",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/m2b3Zx8H/David_Rocha_PNG.webp",
        personalData: {
            fullName: "David Mateos Rocha",
            nickname: "David Rocha",
            birthPlace: "Cáceres, Cáceres",
            country: "España",
            nationality: "Española",
            height: "1,80 m",
            birthDate: "07/02/1985",
            deathDate: null
        },
        career: [
            { season: "2021/22", team: "A.D. Mérida", category: "2ª Federación - Copa Federación" },
            { season: "2020/21", team: "A.D. Mérida", category: "2ª Div. B - 2ª Div. B 2ª Fase 1ª Div. RFEF" },
            { season: "2019/20", team: "Extremadura U.D.", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "U.D. Almería", category: "2ª Div." },
            { season: "2018/19", team: "Gimnàstic de Tarragona", category: "2ª Div. - Copa del Rey" },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2016/17", team: "Real Oviedo", category: "2ª Div." },
            { season: "2015/16", team: "Houston Dynamo F.C.", category: "MLS Liga USA - US Open Cup" },
            { season: "2015/16", team: "Gimnàstic de Tarragona", category: "2ª Div. - Copa del Rey" },
            { season: "2014/15", team: "Gimnàstic de Tarragona", category: "2ª Div. B - Copa del Rey - 2ª Div. B Prom. de Ascenso" },
            { season: "2013/14", team: "Gimnàstic de Tarragona", category: "2ª Div. B - Copa del Rey - 2ª Div. B Prom. de Ascenso" },
            { season: "2012/13", team: "Albacete Balompié", category: "2ª Div. B - Copa del Rey - 2ª Div. B Prom. de Ascenso" },
            { season: "2011/12", team: "Albacete Balompié", category: "2ª Div. B - Copa del Rey - 2ª Div. B Prom. de Ascenso" },
            { season: "2010/11", team: "C.P. Cacereño", category: "2ª Div. B" },
            { season: "2009/10", team: "C.P. Cacereño", category: "2ª Div. B" },
            { season: "2008/09", team: "C.P. Cacereño", category: "3ª Div." },
            { season: "2007/08", team: "F.C. Cartagena", category: "2ª Div. B" },
            { season: "2007/08", team: "Villarreal C.F.", category: "Copa del Rey" },
            { season: "2007/08", team: "Villarreal C.F. B", category: "2ª Div. B" },
            { season: "2006/07", team: "Villarreal C.F. B", category: "3ª Div." },
            { season: "2005/06", team: "Villarreal C.F. B", category: "3ª Div." },
            { season: "2004/05", team: "C.P. Cacereño", category: "3ª Div." },
            { season: "2003/04", team: "C.P. Cacereño", category: "2ª Div. B - Copa del Rey" },
            { season: "2002/03", team: "C.P. Cacereño", category: "2ª Div. B" }
        ],
        stats: {
            "2017/18": {
                liga: { partidos: 33, goles_marcados: 3, tarjetas_amarillas: 7, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2016/17": {
                liga: { partidos: 30, goles_marcados: 0, tarjetas_amarillas: 4, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "asier": {
        name: "Asier Gomes Álvarez",
        footballName: "Asier",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/nrVxrcX5/Asier-PNG.webp",
        personalData: {
            fullName: "Asier Gomes Álvarez",
            nickname: "Asier",
            birthPlace: "Oviedo, Asturias",
            country: "España",
            nationality: "Española",
            height: "1,74 m",
            birthDate: "01/01/1998",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Kannur Warriors F.C.", category: "Super League Kerala - Super League Kerala Promoción" },
            { season: "2024/25", team: "Saham Club", category: "1ª Omán" },
            { season: "2023/24", team: "C.D. Covadonga", category: "2ª Federación - Copa del Rey" },
            { season: "2022/23", team: "C.D. Covadonga", category: "3ª Federación - Copa Federación Fase Autonómica" },
            { season: "2021/22", team: "C.D. Covadonga", category: "3ª Federación - Copa Federación Fase Autonómica" },
            { season: "2020/21", team: "C.D. Covadonga", category: "2ª Div. B - Copa Federación Fase Autonómica" },
            { season: "2019/20", team: "U.P. de Langreo", category: "2ª Div. B - Copa del Rey" },
            { season: "2018/19", team: "Real Racing Club de Santander B", category: "3ª Div." },
            { season: "2017/18", team: "Real Oviedo B", category: "3ª Div." },
            { season: "2017/18", team: "Real Oviedo", category: "Copa del Rey" },
            { season: "2016/17", team: "Real Oviedo B", category: "3ª Div." }
        ],
        nationalTeam: [
            { season: "2014", team: "España Sub-16", category: "Amistosos" }
        ],
        stats: {
            "2017/18": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "ander": {
        name: "Ander Mediavilla García",
        footballName: "Ander",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/VNbkP6tW/Ander-PNG.webp",
        personalData: {
            fullName: "Ander Mediavilla García",
            nickname: "Ander",
            birthPlace: "Bilbao, Vizcaya",
            country: "España",
            nationality: "Española",
            height: "1,77 m",
            birthDate: "22/03/1996",
            deathDate: null
        },
        career: [
            { season: "2022/23", team: "C.D. Llanes", category: "3ª Federación - Copa Federación Fase Autonómica" },
            { season: "2021/22", team: "Palencia C.F.", category: "3ª Federación" },
            { season: "2020/21", team: "Palencia C.F.", category: "Preferente Castilla y León" },
            { season: "2019/20", team: "C.D. Llanes", category: "3ª Div. - Copa Federación" },
            { season: "2018/19", team: "C.D. Llanes", category: "3ª Div." },
            { season: "2017/18", team: "Real Oviedo B", category: "3ª Div." },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2016/17", team: "Real Oviedo B", category: "3ª Div." },
            { season: "2015/16", team: "C.D. Basconia", category: "3ª Div." },
            { season: "2014/15", team: "Athletic Club Sub-19", category: "UEFA Youth League" }
        ],
        stats: {
            "2017/18": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "ernesto2017": {
        name: "Ernesto Gómez Muñoz",
        footballName: "Ernesto",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/Wzzz3qdD/Ernesto_2017_PNG.webp",
        personalData: {
            fullName: "Ernesto Gómez Muñoz",
            nickname: "Ernesto",
            birthPlace: "Albolote, Granada",
            country: "España",
            nationality: "Española",
            height: "1,73 m",
            birthDate: "18/07/1994",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Persatuan Sepak Bola Indonesia Kediri", category: "1ª Indonesia" },
            { season: "2025/26", team: "U.D. Ibiza", category: "1ª Federación - Copa del Rey" },
            { season: "2024/25", team: "S.D. Ponferradina", category: "1ª Federación - Copa del Rey - 1ª Federación Prom. de Ascenso" },
            { season: "2023/24", team: "S.D. Ponferradina", category: "1ª Federación - 1ª Federación Prom. de Ascenso" },
            { season: "2022/23", team: "A.D. Alcorcón", category: "1ª Federación - 1ª Federación Prom. de Ascenso" },
            { season: "2021/22", team: "Burgos C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "A.D. Alcorcón", category: "2ª Div." },
            { season: "2020/21", team: "A.D. Alcorcón", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "A.D. Alcorcón", category: "2ª Div." },
            { season: "2018/19", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div." },
            { season: "2017/18", team: "Real Oviedo B", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2016/17", team: "Caudal Deportivo", category: "2ª Div. B - Copa del Rey" },
            { season: "2015/16", team: "Arroyo C.P.", category: "3ª Div." },
            { season: "2014/15", team: "Club At. Malagueño", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2013/14", team: "San Fernando C.D.", category: "2ª Div. B - Copa del Rey" }
        ],
        stats: {
            "2017/18": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "juan2017": {
        name: "Juan López Pérez",
        footballName: "Juan",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/gcK4Lr2y/Juan_2017_PNG.webp",
        personalData: {
            fullName: "Juan López Pérez",
            nickname: "Juan",
            birthPlace: "Pola de Siero, Asturias",
            country: "España",
            nationality: "Española",
            height: "1,79 m",
            birthDate: "01/08/1995",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "U.P. de Langreo", category: "2ª Federación" },
            { season: "2024/25", team: "U.P. de Langreo", category: "2ª Federación - Copa del Rey" },
            { season: "2023/24", team: "U.P. de Langreo", category: "2ª Federación - Copa Federación Fase Autonómica" },
            { season: "2022/23", team: "Real Avilés Industrial C.F.", category: "2ª Federación - 2ª Federación Prom. de Ascenso - Copa Federación Fase Autonómica - Copa Federación" },
            { season: "2021/22", team: "U.P. de Langreo", category: "2ª Federación - Copa Federación" },
            { season: "2020/21", team: "C.D. Lealtad de Villaviciosa", category: "2ª Div. B - 2ª Div. B 2ª Fase de Permanencia 2ª RFEF" },
            { season: "2019/20", team: "C.D. Lealtad de Villaviciosa", category: "3ª Div. - Copa del Rey - 3ª Div. Prom. de Ascenso" },
            { season: "2018/19", team: "Club Marino de Luanco", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2017/18", team: "U.D. Somozas", category: "3ª Div." },
            { season: "2017/18", team: "C.D. Praviano", category: "3ª Div." },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div." },
            { season: "2017/18", team: "Real Oviedo B", category: "3ª Div." },
            { season: "2016/17", team: "S.D. Negreira", category: "3ª Div." },
            { season: "2015/16", team: "R.C. Deportivo de La Coruña B", category: "3ª Div." },
            { season: "2014/15", team: "R.C. Deportivo de La Coruña B", category: "3ª Div." }
        ],
        stats: {
            "2017/18": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "guille": {
        name: "Guillermo Sánchez Pinín",
        footballName: "Guille",
        position: "Centrocampista",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/J0yLZYQc/Guille_PNG.webp",
        personalData: {
            fullName: "Guillermo Sánchez Pinín",
            nickname: "Guille",
            birthPlace: "Mieres, Asturias",
            country: "España",
            nationality: "Española",
            height: "1,74 m",
            birthDate: "08/03/1998",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Coruxo F.C.", category: "2ª Federación - Copa Federación Fase Autonómica" },
            { season: "2024/25", team: "Club Marino de Luanco", category: "2ª Federación - Copa Federación Fase Autonómica" },
            { season: "2023/24", team: "Club Marino de Luanco", category: "2ª Federación - Copa Federación Fase Autonómica - Copa Federación" },
            { season: "2022/23", team: "Club Marino de Luanco", category: "2ª Federación - Copa Federación Fase Autonómica" },
            { season: "2021/22", team: "Club Marino de Luanco", category: "2ª Federación - Copa Federación Fase Autonómica" },
            { season: "2020/21", team: "Club Marino de Luanco", category: "2ª Div. B 2ª Fase 1ª Div. RFEF - Copa Federación Fase Autonómica" },
            { season: "2019/20", team: "Caudal Deportivo", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2018/19", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2018/19", team: "C.D. Mosconia", category: "3ª Div." },
            { season: "2017/18", team: "C.D. Mosconia", category: "3ª Div." },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div." },
            { season: "2016/17", team: "Real Oviedo Sub-19", category: "División de Honor" },
            { season: "2015/16", team: "Real Oviedo B", category: "3ª Div." },
            { season: "2015/16", team: "Real Oviedo Sub-19", category: "División de Honor" },
            { season: "2014/15", team: "Real Oviedo Sub-19", category: "División de Honor" }
        ],
        stats: {
            "2017/18": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
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
        nationality: "Española, Marroquí",
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
                liga: { partidos: 20, goles_marcados: 2, tarjetas_amarillas: 1, tarjetas_rojas: 1 },
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
                liga: { partidos: 18, goles_marcados: 3, tarjetas_amarillas: 4, tarjetas_rojas: 3 },
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
                liga: { partidos: 12, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
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

    "thiagoborbas": {
        name: "Thiago Nicolás Borbas Silva",
        footballName: "Thiago Borbas",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/2j4jkvj8/Thiago_Borbas_PNG.webp", 
    personalData: {
        fullName: "Thiago Nicolás Borbas Silva",
        nickname: "Thiago Borbas",
        birthPlace: "Montevideo, Montevideo",
        country: "Uruguay",
        nationality: "Uruguaya",
        height: "1,86 m",
        birthDate: "07/04/2002",
        deathDate: null // Poner null si el jugador está vivo
   },
        career: [  
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div." },
            { season: "2024/25", team: "Red Bull Bragantino", category: "Serie A Betano - Paulista A1 - Copa Brasil" },
            { season: "2023/24", team: "Red Bull Bragantino", category: "Serie A Betano - Paulista A1 - Conmebol Sudamericana - Copa Brasil - Fase Previa Copa Libertadores" },
            { season: "2022/23", team: "Red Bull Bragantino", category: "Serie A Betano - Paulista A1 - Conmebol Sudamericana - Copa Brasil" },
            { season: "2021/22", team: "C.A. River Plate Montevideo", category: "Apert. Uruguay - Claus. Uruguay - Conmebol Sudamericana - Fase Previa Conmebol Sudamericana - Torneo Intermedio Uruguay" },
            { season: "2020/21", team: "C.A. River Plate Montevideo", category: "Apert. Uruguay - Claus. Uruguay" },
            { season: "2019/20", team: "C.A. River Plate Montevideo", category: "Apert. Uruguay - Claus. Uruguay - Conmebol Sudamericana - Torneo Intermedio Uruguay" }
            

         ],

         nationalTeam: [
            { season: "2023", team: "Uruguay", category: "Amistosos" }
            
        ],

         
         stats: {
            "2025/26": {
                liga: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
             
        }
    },

    "thiagofernandez": {
        name: "Thiago Cruz Fernández",
        footballName: "Thiago Fdez.",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/yYs1MfJd/Thiago-Fernandez-PNG.webp", 
    personalData: {
        fullName: "Thiago Cruz Fernández",
        nickname: "Thiago Fernández",
        birthPlace: "Buenos Aires, Buenos Aires",
        country: "Argentina",
        nationality: "Argentina",
        height: "1,75 m",
        birthDate: "03/04/2004",
        deathDate: null // Poner null si el jugador está vivo
   },
        career: [  
            { season: "2025/26", team: "Real Oviedo", category: "1ª Div." },
            { season: "2025/26", team: "Villarreal C.F.", category: "1ª Div." },
            { season: "2023/24", team: "C.A. Vélez Sarsfield", category: "Liga Profesional Argentina - Copa Liga Profesional Argentina - Copa Argentina" },
            { season: "2022/23", team: "C.A. Vélez Sarsfield II", category: "Torneo Proyección - Copa Proyección" },
            { season: "2022/23", team: "C.A. Vélez Sarsfield", category: "Liga Profesional Argentina - Copa Liga Profesional Argentina - Copa Argentina" },
            { season: "2021/22", team: "C.A. Vélez Sarsfield II", category: "Torneo Proyección - Copa Proyección" }
            
            

         ],

         nationalTeam: [
            { season: "2024", team: "Argentina Sub-23", category: "Amistosos" }
            
        ],

         
         stats: {
            "2025/26": {
                liga: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
             
        }
    },

    "alemao": {
        name: "Alexandre Zurawski",
        footballName: "Alemão",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/KcPTkZzY/Alemao-PNG.webp", 
    personalData: {
        fullName: "Alexandre Zurawski",
        nickname: "Alemão",
        birthPlace: "Campo Erê, Santa Catarina",
        country: "Brasil",
        nationality: "Brasileña, Polaca",
        height: "1,82 m",
        birthDate: "01/04/1998",
        deathDate: null // Poner null si el jugador está vivo
   },
        career: [  
            { season: "2025/26", team: "Rayo Vallecano de Madrid", category: "1ª Div. - Copa del Rey - Conference League" },
            { season: "2025/26", team: "C.F. Pachuca", category: "Liga MX Apert." },
            { season: "2024/25", team: "C.F. Pachuca", category: "Leagues Cup" },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2022/23", team: "S.C. Internacional", category: "Serie A Betano - Copa Libertadores - Gaucho 1 - Copa Brasil" },
            { season: "2021/22", team: "S.C. Internacional", category: "Serie A Betano - Conmebol Sudamericana" },
            { season: "2021/22", team: "E.C. Novo Hamburgo", category: "Gaucho 1" },
            { season: "2020/21", team: "G.E. Juventus S.C.", category: "Catarinense 1" },
            { season: "2019/20", team: "Avaí F.C.", category: "Catarinense 1 - Copa Brasil" },
            { season: "2018/19", team: "Criciúma E.C.", category: "Catarinense 1" },
            { season: "2017/18", team: "Kyoto Sanga F.C.", category: "Segunda Japonesa J2" },
            { season: "2016/17", team: "C.A. Metropolitano", category: "Catarinense 1" }

         ],

         stats: {
            "2024/25": {
                liga: { partidos: 44, goles_marcados: 14, tarjetas_amarillas: 5, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 7, goles_marcados: 4, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2023/24": {
                liga: { partidos: 37, goles_marcados: 7, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 2, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 2, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
             
        }
    },

    "paraschiv": {
        name: "Daniel George Paraschiv",
        footballName: "Paraschiv",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/vTn7N9LF/Paraschiv_PNG_(3).webp", 
    personalData: {
        fullName: "Daniel George Paraschiv",
        nickname: "Paraschiv",
        birthPlace: "Brașov, Transilvania",
        country: "Rumanía",
        nationality: "Rumana, Moldava",
        height: "1,85 m",
        birthDate: "24/04/1999",
        deathDate: null // Poner null si el jugador está vivo
   },
        career: [ 
            { season: "2025/26", team: "F.C. Rapid de Bucarest", category: "Liga Rumana" }, 
            { season: "2025/26", team: "Cultural y Deportiva Leonesa", category: "2ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2023/24", team: "A.F.C. Hermannstadt", category: "Liga Rumana - Copa Rumanía" },
            { season: "2022/23", team: "A.F.C. Hermannstadt", category: "Liga Rumana - Copa Rumanía" },
            { season: "2021/22", team: "A.F.C. Hermannstadt", category: "Segunda Rumanía" },
            { season: "2021/22", team: "F.C. Voluntari", category: "Liga Rumana - Copa Rumanía" },
            { season: "2020/21", team: "Viitorul Pandurii Târgu Jiu", category: "Segunda Rumanía - Copa Rumanía" },
            { season: "2019/20", team: "Viitorul Pandurii Târgu Jiu", category: "Segunda Rumanía" },
            { season: "2018/19", team: "C.S. Luceafărul Oradea", category: "Segunda Rumanía - Copa Rumanía" }
            

         ],

         stats: {
            "2024/25": {
                liga: { partidos: 30, goles_marcados: 3, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 6, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
             
        }
    },

    "masca": {
        name: "Francisco Fumaça Mascarenhas Costa Pessoa",
        footballName: "Masca",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/R0tYw3y8/Masca_PNG.webp", 
    personalData: {
        fullName: "Francisco Fumaça Mascarenhas Costa Pessoa",
        nickname: "Masca",
        birthPlace: "Cascaes, Lisboa",
        country: "Portugal",
        nationality: "Portuguesa",
        height: "1,82 m",
        birthDate: "15/05/2000",
        deathDate: null // Poner null si el jugador está vivo
   },
        career: [  
            { season: "2025/26", team: "S.V. Waldhof Mannheim", category: "3 Liga" },
            { season: "2024/25", team: "C.D. Eldense", category: "2ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div." },
            { season: "2022/23", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2021/22", team: "Portimonense S.C. Sub-23", category: "Liga Revelação - Taça Revelação Sub-23" },
            { season: "2020/21", team: "Portimonense S.C. Sub-23", category: "Liga Revelação" },
            { season: "2019/20", team: "G.D. Estoril Praia Sub-23", category: "Liga Revelação" },
            { season: "2018/19", team: "G.D. Estoril Praia Sub-23", category: "Liga Revelação - Taça Revelação Sub-23" }
            

         ],

         stats: {
            "2024/25": {
                liga: { partidos: 5, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 }
            },
            "2023/24": {
                liga: { partidos: 37, goles_marcados: 5, tarjetas_amarillas: 4, tarjetas_rojas: 0 },
                copa: { partidos: 2, goles_marcados: 2, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 6, goles_marcados: 3, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2022/23": {
                liga: { partidos: 9, goles_marcados: 1, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
             
        }
    },

    "borjabaston": {
        name: "Borja González Tomás",
        footballName: "Borja Bastón",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/3rfTZGWf/Borja-Baston-PNG.webp",
        personalData: {
            fullName: "Borja González Tomás",
            nickname: "Borja Bastón",
            birthPlace: "Madrid, Madrid",
            country: "España",
            nationality: "Española",
            height: "1,86 m",
            birthDate: "25/08/1992",
            deathDate: null
        },
        career: [
            { season: "2024/25", team: "Granada C.F.", category: "2ª Div." },
            { season: "2024/25", team: "C.F. Pachuca", category: "Liga MX Apert. - Copa Intercontinental de la FIFA" },
            { season: "2023/24", team: "C.F. Pachuca", category: "Leagues Cup" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div." },
            { season: "2020/21", team: "C.D. Leganés", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2019/20", team: "Aston Villa F.C.", category: "Premier League" },
            { season: "2019/20", team: "Swansea City A.F.C.", category: "Championship - FA Cup - EFL Cup" },
            { season: "2018/19", team: "Deportivo Alavés", category: "1ª Div. - Copa del Rey" },
            { season: "2017/18", team: "Málaga C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2016/17", team: "Swansea City A.F.C.", category: "Premier League - FA Cup - EFL Cup" },
            { season: "2015/16", team: "S.D. Eibar", category: "1ª Div. - Copa del Rey" },
            { season: "2014/15", team: "Real Zaragoza", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2013/14", team: "R.C. Deportivo de La Coruña", category: "2ª Div. - Copa del Rey" },
            { season: "2012/13", team: "S.D. Huesca", category: "2ª Div. - Copa del Rey" },
            { season: "2011/12", team: "Real Murcia C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2010/11", team: "Club At. de Madrid B", category: "2ª Div. B" },
            { season: "2010/11", team: "Club At. de Madrid", category: "1ª Div. - Copa del Rey" },
            { season: "2009/10", team: "Club At. de Madrid", category: "1ª Div." },
            { season: "2009/10", team: "Club At. de Madrid B", category: "2ª Div. B" }
        ],
        nationalTeam: [
            { season: "2011", team: "España Sub-19", category: "Europeo Sub-19" },
            { season: "2009", team: "España Sub-17", category: "Mundial Sub-17 - Europeo Sub-17 - Clasif. Europeo Sub-17 -  Amistosos" },
            { season: "2008", team: "España Sub-17", category: "Clasif. Europeo Sub-17 - Amistosos" },
            { season: "2008", team: "España Sub-16", category: "Amistosos" }
        ],
        stats: {
            "2023/24": {
                liga: { partidos: 42, goles_marcados: 10, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2022/23": {
                liga: { partidos: 33, goles_marcados: 8, tarjetas_amarillas: 7, tarjetas_rojas: 0 },
                copa: { partidos: 3, goles_marcados: 2, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2021/22": {
                liga: { partidos: 40, goles_marcados: 22, tarjetas_amarillas: 4, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "dubasin": {
        name: "Jonathan Dubasin",
        footballName: "Dubasin",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/R02PFM0R/Dubasin_PNG.webp",
        personalData: {
            fullName: "Jonathan Dubasin",
            nickname: "Dubasin",
            birthPlace: "Seo de Urgel, Lérida",
            country: "España",
            nationality: "Española, Belga",
            height: "1,81 m",
            birthDate: "02/02/2000",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Real Sporting de Gijón", category: "2ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Real Sporting de Gijón", category: "2ª Div. - Copa del Rey" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div. - 2ª Div. Prom. de Ascenso" },
            { season: "2023/24", team: "F.C. Basilea", category: "Liga Suiza - Copa Suiza" },
            { season: "2022/23", team: "Albacete Balompié", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2021/22", team: "U.D. Logroñés", category: "Copa del Rey - 1ª Federación - 1ª Federación Prom. de Ascenso" },
            { season: "2020/21", team: "Som Maresme F.C.", category: "2ª Div. B - Copa del Rey - Copa Federación - 2ª Div. B 2ª Fase 1ª Div. RFEF" },
            { season: "2019/20", team: "U.E. Figueres", category: "3ª Div." }
        ],
        stats: {
            "2023/24": {
                liga: { partidos: 23, goles_marcados: 0, tarjetas_amarillas: 4, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "enol": {
        name: "Enol Rodríguez Heres",
        footballName: "Enol",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/TYQCbjwh/Enol_PNG.webp",
        personalData: {
            fullName: "Enol Rodríguez Heres",
            nickname: "Enol",
            birthPlace: "Candás, Asturias",
            country: "España",
            nationality: "Española",
            height: "1,87 m",
            birthDate: "28/07/2001",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "S.D. Huesca", category: "2ª Div. - Copa del Rey" },
            { season: "2024/25", team: "C.D. Arenteiro", category: "1ª Federación" },
            { season: "2023/24", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div." },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div." },
            { season: "2022/23", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2021/22", team: "U.D. Logroñés Sub-19", category: "División de Honor" },
            { season: "2021/22", team: "U.D. Logroñés Promesas", category: "2ª Federación" },
            { season: "2021/22", team: "U.D. Logroñés", category: "1ª Federación" },
            { season: "2020/21", team: "Club Marino de Luanco", category: "2ª Div. B - Copa Federación Fase Autonómica - 2ª Div. B 2ª Fase 1ª Div. RFEF" },
            { season: "2020/21", team: "Club Marino de Luanco", category: "2ª Div. B" }
        ],
        stats: {
            "2023/24": {
                liga: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2022/23": {
                liga: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "sese": {
        name: "Mario Sesé Vera",
        footballName: "Sesé",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/2y305Pxm/Sesé_PNG.webp",
        personalData: {
            fullName: "Mario Sesé Vera",
            nickname: "Sesé",
            birthPlace: "Cuart de Poblet, Valencia",
            country: "España",
            nationality: "Española",
            height: "1,78 m",
            birthDate: "30/08/2002",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "At. Levante U.D.", category: "3ª Federación" },
            { season: "2024/25", team: "Real Valladolid C.F. Promesas", category: "2ª Federación" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2023/24", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2022/23", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2021/22", team: "U.D. Alzira", category: "Copa del Rey - 2ª Federación" },
            { season: "2020/21", team: "U.D. Alzira", category: "3ª Div." },
            { season: "2020/21", team: "U.D. Alzira Sub-19", category: "División de Honor" }
        ],
        stats: {
            "2023/24": {
                liga: { partidos: 8, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2022/23": {
                liga: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "mariofuente": {
        name: "Mario Fuente Fernández",
        footballName: "Mario Fuente",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/kXjLCPWj/Mario_Fuente_PNG.webp",
        personalData: {
            fullName: "Mario Fuente Fernández",
            nickname: "Mario Fuente",
            birthPlace: "Oviedo, Asturias",
            country: "España",
            nationality: "Española",
            height: "1,80 m",
            birthDate: "19/06/2004",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "S.D. Eibar C", category: "3ª Federación" },
            { season: "2024/25", team: "Rayo Cantabria", category: "2ª Federación" },
            { season: "2023/24", team: "Gran Peña F.C.", category: "3ª Federación - 3ª Federación Prom. de Ascenso" },
            { season: "2023/24", team: "R.C. Celta de Vigo Fortuna", category: "1ª Federación" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div." },
            { season: "2023/24", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2022/23", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div." },
            { season: "2021/22", team: "Real Oviedo Vetusta", category: "3ª Federación" },
            { season: "2021/22", team: "Real Oviedo Sub-19", category: "División de Honor" },
            { season: "2020/21", team: "Real Oviedo Sub-19", category: "División de Honor" },
            { season: "2020/21", team: "Real Oviedo Sub-19 B", category: "Liga Nacional" }
        ],
        stats: {
            "2023/24": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2022/23": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2021/22": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "alexmillan": {
        name: "Alejandro Millán Iranzo",
        footballName: "Álex Millán",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/6pm4JqHM/Alex-Millan-PNG.webp", 
    personalData: {
        fullName: "Alejandro Millán Iranzo",
        nickname: "Álex Millán",
        birthPlace: "Zaragoza, Zaragoza",
        country: "España",
        nationality: "Española",
        height: "1,82 m",
        birthDate: "07/11/1999",
        deathDate: null // Poner null si el jugador está vivo
   },
        career: [  
            { season: "2025/26", team: "C.D. Leganés", category: "2ª Div. - Copa del Rey" },
            { season: "2024/25", team: "F.C. Cartagena", category: "2ª Div." },
            { season: "2024/25", team: "S.C. Farense", category: "Liga Portugal Betclic - Taça de Portugal" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div. - 2ª Div. Prom. de Ascenso" },
            { season: "2022/23", team: "Villarreal C.F. B", category: "2ª Div." },
            { season: "2022/23", team: "F.C. Famalicão", category: "Liga Portugal Betclic - Taça de Portugal - Copa de la Liga Portugal" },
            { season: "2021/22", team: "Royal Union Saint-Gilloise", category: "Liga Belga" },
            { season: "2021/22", team: "Cercle Brugge K.S.V.", category: "Liga Belga - Copa Belga" },
            { season: "2020/21", team: "Villarreal C.F. B", category: "2ª Div. B - 2ª Div. Prom. de Ascenso" },
            { season: "2020/21", team: "Villarreal C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Villarreal C.F. B", category: "2ª Div. B" },
            { season: "2018/19", team: "Villarreal C.F. C", category: "3ª Div." },
            { season: "2018/19", team: "Villarreal C.F. B", category: "2ª Div. B" },
            { season: "2017/18", team: "Villarreal C.F. C", category: "3ª Div." },
            { season: "2016/17", team: "Villarreal C.F. Sub-19", category: "Copa de Campeones División de Honor" }
            

         ],

         nationalTeam: [
            { season: "2017", team: "España Sub-18", category: "Amistosos" },
            { season: "2016", team: "España Sub-17", category: "Europeo Sub-17 - Amistosos" },
            { season: "2015", team: "España Sub-17", category: "Clasf. Europeo Sub-17 - Amistosos" },
            { season: "2015", team: "España Sub-16", category: "Amistosos" }
             
        ],

         stats: {
            "2024/25": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 8, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2023/24": {
                liga: { partidos: 9, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
             
        }
    },

    "santimiguelez": {
        name: "Santiago Miguélez Sánchez",
        footballName: "Santi Miguélez",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/0Q0PdXFL/Santi_Miguélez_PNG.webp", 
    personalData: {
        fullName: "Santiago Miguélez Sánchez",
        nickname: "Santi Miguélez",
        birthPlace: "Oviedo, Asturias",
        country: "España",
        nationality: "Española",
        height: "1,87 m",
        birthDate: "05/04/2002",
        deathDate: null // Poner null si el jugador está vivo
   },
        career: [  
            { season: "2025/26", team: "Real Unión Club", category: "Copa Federación Fase Autonómica - 2ª Federación" },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Real Oviedo Vetusta", category: "3ª Federación" },
            { season: "2023/24", team: "Real Oviedo Vetusta", category: "2ª Federación" },
            { season: "2022/23", team: "Club At. de Madrid B", category: "2ª Federación - 2 ª Federacción Prom. de Ascenso" },
            { season: "2021/22", team: "Club At. de Madrid B", category: "3ª Federación" },
            { season: "2020/21", team: "Burgos C.F.", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2020/21", team: "Burgos C.F. Sub-19", category: "División de Honor" },
            { season: "2019/20", team: "C.D. Covadonga", category: "3ª Div. Prom. de Ascenso" }
            
         ],

         stats: {
            "2024/25": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
             
        }
    },

        "manuvallejo": {
        name: "Manuel Javier Vallejo Galván",
        footballName: "Manu Vallejo",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/858qYdLN/Manu_Vallejo_PNG.webp",
        personalData: {
            fullName: "Manuel Javier Vallejo Galván",
            nickname: "Manu Vallejo",
            birthPlace: "Chiclana de la Frontera, Cádiz",
            country: "España",
            nationality: "Española",
            height: "1,67 m",
            birthDate: "14/02/1997",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "A.D. Ceuta F.C.", category: "2ª Div." },
            { season: "2024/25", team: "Racing Club de Ferrol", category: "2ª Div. - Copa del Rey" },
            { season: "2023/24", team: "Real Zaragoza", category: "2ª Div. - Copa del Rey" },
            { season: "2023/24", team: "Girona F.C.", category: "1ª Div." },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div." },
            { season: "2022/23", team: "Girona F.C.", category: "1ª Div. - Copa del Rey" },
            { season: "2022/23", team: "Valencia C.F.", category: "1ª Div." },
            { season: "2021/22", team: "Deportivo Alavés", category: "1ª Div." },
            { season: "2021/22", team: "Valencia C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Valencia C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Valencia C.F.", category: "1ª Div. - Champs. League" },
            { season: "2018/19", team: "Cádiz C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2017/18", team: "Cádiz C.F. Mirandilla", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2017/18", team: "Cádiz C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2015/16", team: "Cádiz C.F.", category: "Copa del Rey" },
            { season: "2015/16", team: "Cádiz C.F. Mirandilla", category: "1ª Andaluza" },
            { season: "2014/15", team: "Cádiz C.F. Mirandilla", category: "3ª Div." }
        ],
        nationalTeam: [
            { season: "2019", team: "España Sub-21", category: "Europeo Sub-21 - Amistosos" }
        ],
        stats: {
            "2022/23": {
                liga: { partidos: 16, goles_marcados: 4, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "obeng": {
        name: "Samuel Obeng Gyabaa",
        footballName: "Obeng",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/Sx688kVd/Obeng_PNG.webp",
        personalData: {
            fullName: "Samuel Obeng Gyabaa",
            nickname: "Obeng",
            birthPlace: "Nsapor, Región Brong-Ahafo",
            country: "Ghana",
            nationality: "Ghanesa, Española",
            height: "1,83 m",
            birthDate: "15/05/1997",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "A.D. Ceuta F.C.", category: "2ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Wydad Casablanca A.C.", category: "Botola Pro - Mundial de Clubes - Copa de Marruecos" },
            { season: "2024/25", team: "Casa Pia A.C.", category: "Liga Portugal Betclic - Taça de Portugal" },
            { season: "2023/24", team: "S.D. Huesca", category: "2ª Div. - Copa del Rey" },
            { season: "2022/23", team: "S.D. Huesca", category: "2ª Div." },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "C.D. Calahorra", category: "2ª Div. B - Copa del Rey" },
            { season: "2017/18", team: "E.C. Granollers", category: "3ª Div." }
        ],
        nationalTeam: [
            { season: "2021", team: "Ghana Sub-23", category: "Amistosos" },
            { season: "2019", team: "Ghana Sub-23", category: "Copa África Sub-23" }
        ],
        stats: {
            "2022/23": {
                liga: { partidos: 22, goles_marcados: 1, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
                copa: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 7, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2021/22": {
                liga: { partidos: 34, goles_marcados: 8, tarjetas_amarillas: 3, tarjetas_rojas: 1 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 3, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2020/21": {
                liga: { partidos: 36, goles_marcados: 3, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 2, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2019/20": {
                liga: { partidos: 17, goles_marcados: 3, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "leosequeira": {
        name: "Leonardo Exequiel Sequeira",
        footballName: "Leo Sequeira",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/8PDTcGJN/Leo_Sequeira_PNG.webp",
        personalData: {
            fullName: "Leonardo Exequiel Sequeira",
            nickname: "Leo Sequeira",
            birthPlace: "La Banda, Santiago del Estero",
            country: "Argentina",
            nationality: "Argentina",
            height: "1,77 m",
            birthDate: "26/04/1995",
            deathDate: null
        },
        career: [
            { season: "2024/25", team: "C.A. Huracán", category: "Apert. Argentina - Claus. Argentina - Conmebol Sudamericana - Copa Argentina" },
            { season: "2023/24", team: "C.A. Peñarol", category: "Apert. Uruguay - Claus. Uruguay - Copa Libertadores - Torneo Intermedio Uruguay - Copa Uruguay" },
            { season: "2022/23", team: "C.D. Everton Viña del Mar", category: "1ª Chile - Copa Chile" },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2022/23", team: "Querétaro F.C.", category: "Liga MX Apert." },
            { season: "2021/22", team: "Querétaro F.C.", category: "Liga MX Claus." },
            { season: "2020/21", team: "C.A. Central Córdoba", category: "Liga Profesional Argentina - Copa Liga Profesional Argentina" },
            { season: "2019/20", team: "C.A. Belgrano", category: "1ª Nacional" },
            { season: "2018/19", team: "C.A. Belgrano", category: "Copa Argentina - Liga Profesional Argentina - Copa Diego Armando Maradona" },
            { season: "2017/18", team: "C.A. Belgrano", category: "Copa Argentina - Liga Profesional Argentina" },
            { season: "2016/17", team: "C.A. Belgrano", category: "Copa Argentina" },
            { season: "2016/17", team: "C.A. Central Córdoba", category: "1ª Nacional" },
            { season: "2015/16", team: "C.A. Central Córdoba", category: "1ª Nacional" },
            { season: "2014/15", team: "C.A. Central Córdoba", category: "1ª Nacional - Torneo Federal A" },
            { season: "2014/15", team: "C.A. Central Córdoba Rosario", category: "1ª C" },
            { season: "2013/14", team: "C.A. Central Córdoba", category: "Copa Argentina - Torneo Federal A PlayOffs" }
        ],
        stats: {
            "2022/23": {
                liga: { partidos: 12, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "sergienrich": {
        name: "Sergi Enrich Ametller",
        footballName: "Sergi Enrich",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/tJgQdqhx/Sergi_Enrich_PNG.webp",
        personalData: {
            fullName: "Sergi Enrich Ametller",
            nickname: "Sergi Enrich",
            birthPlace: "Ciudadela de Menorca, Islas Baleares",
            country: "España",
            nationality: "Española",
            height: "1,83 m",
            birthDate: "26/02/1990",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "S.D. Huesca", category: "2ª Div. - Copa del Rey" },
            { season: "2024/25", team: "S.D. Huesca", category: "2ª Div. - Copa del Rey" },
            { season: "2023/24", team: "Real Zaragoza", category: "2ª Div. - Copa del Rey" },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "S.D. Ponferradina", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "S.D. Eibar", category: "1ª Div. - Copa del Rey" },
            { season: "2019/20", team: "S.D. Eibar", category: "1ª Div. - Copa del Rey" },
            { season: "2018/19", team: "S.D. Eibar", category: "1ª Div. - Copa del Rey" },
            { season: "2017/18", team: "S.D. Eibar", category: "1ª Div. - Copa del Rey" },
            { season: "2016/17", team: "S.D. Eibar", category: "1ª Div. - Copa del Rey" },
            { season: "2015/16", team: "S.D. Eibar", category: "1ª Div. - Copa del Rey" },
            { season: "2014/15", team: "C.D. Numancia", category: "2ª Div. - Copa del Rey" },
            { season: "2013/14", team: "C.D. Numancia", category: "2ª Div. - Copa del Rey" },
            { season: "2012/13", team: "A.D. Alcorcón", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2011/12", team: "R.C. Recreativo de Huelva", category: "2ª Div." },
            { season: "2010/11", team: "R.C.D. Mallorca B", category: "2ª Div. B" },
            { season: "2010/11", team: "R.C.D. Mallorca", category: "1ª Div. - Copa del Rey" },
            { season: "2009/10", team: "R.C.D. Mallorca", category: "1ª Div. - Copa del Rey" },
            { season: "2009/10", team: "R.C.D. Mallorca B", category: "2ª Div. B" }
        ],
        nationalTeam: [
            { season: "2009", team: "España Sub-19", category: "Amistosos" },
            { season: "2008", team: "España Sub-19", category: "Clasif. Europeo Sub-19 - Amistosos" }
        ],
        stats: {
            "2022/23": {
                liga: { partidos: 34, goles_marcados: 7, tarjetas_amarillas: 3, tarjetas_rojas: 2 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "moro": {
        name: "Raúl Moro Prescoli",
        footballName: "Moro",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/qM9XymrJ/Moro_PNG.webp",
        personalData: {
            fullName: "Raúl Moro Prescoli",
            nickname: "Moro",
            birthPlace: "Abrera, Barcelona",
            country: "España",
            nationality: "Española",
            height: "1,69 m",
            birthDate: "05/12/2002",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Ajax de Ámsterdam", category: "Eredivisie - Champs. League - KNVB Beker" },
            { season: "2024/25", team: "Real Valladolid C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2023/24", team: "Real Valladolid C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div." },
            { season: "2022/23", team: "Ternana Calcio", category: "Serie B" },
            { season: "2022/23", team: "S.S. Lazio", category: "Serie A" },
            { season: "2021/22", team: "S.S. Lazio Sub-19", category: "Campionato Primavera 2" },
            { season: "2021/22", team: "S.S. Lazio", category: "Serie A - Europa League - Coppa Italia" },
            { season: "2020/21", team: "S.S. Lazio", category: "Serie A" },
            { season: "2020/21", team: "S.S. Lazio Sub-19", category: "Campionato Primavera 1 - Coppa Italia Primavera" },
            { season: "2019/20", team: "S.S. Lazio", category: "Serie A" },
            { season: "2019/20", team: "S.S. Lazio Sub-19", category: "Campionato Primavera 1" }
        ],
        nationalTeam: [
            { season: "2025", team: "España Sub-21", category: "Europeo Sub-21 - Amistosos" },
            { season: "2024", team: "España Sub-21", category: "Clasif. Europeo Sub-21 - Amistosos" },
            { season: "2021", team: "España Sub-21", category: "Clasif. Europeo Sub-21" },
            { season: "2020", team: "España Sub-18", category: "Amistosos" },
            { season: "2019", team: "España Sub-18", category: "Amistosos" },
            { season: "2019", team: "España Sub-17", category: "Clasif. Europeo Sub-17 - Amistosos" }
        ],
        stats: {
            "2022/23": {
                liga: { partidos: 16, goles_marcados: 0, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "matheusaias": {
        name: "Matheus Aiás Barrozo Rodrigues",
        footballName: "Matheus Aiás",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/Y9fyy5pz/Matheus_Aiás_PNG.webp",
        personalData: {
            fullName: "Matheus Aiás Barrozo Rodrigues",
            nickname: "Matheus Aiás",
            birthPlace: "Palmares Paulista, São Paulo",
            country: "Brasil",
            nationality: "Brasileña",
            height: "1,76 m",
            birthDate: "30/12/1996",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "F.C. Noah Yerevan", category: "Liga Armenia - Fase Previa Champs. League - Fase Previa Europa League - Fase Previa Conference League - Conference League" },
            { season: "2024/25", team: "F.C. Noah Yerevan", category: "Liga Armenia - Copa Armenia - Fase Previa Conference League - Conference League" },
            { season: "2023/24", team: "Moreirense F.C.", category: "Liga Portugal Betclic - Taça de Portugal" },
            { season: "2023/24", team: "Real Racing Club de Santander", category: "2ª Div." },
            { season: "2022/23", team: "Real Racing Club de Santander", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Orlando City S.C.", category: "MLS Liga USA" },
            { season: "2019/20", team: "Orlando City S.C.", category: "MLS Liga USA" },
            { season: "2019/20", team: "C.D. Mirandés", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "C.D. Mirandés", category: "2ª Div. B - Copa del Rey - Copa Federación - 2ª Div. B Prom. de Ascenso" },
            { season: "2017/18", team: "Valencia Mestalla", category: "2ª Div. B" },
            { season: "2017/18", team: "C.F. Fuenlabrada", category: "2ª Div. B - Copa del Rey" },
            { season: "2016/17", team: "Lorca F.C.", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2016/17", team: "Granada C.F. B", category: "2ª Div. B" },
            { season: "2015/16", team: "Granada C.F. B", category: "2ª Div. B - Copa Federación" },
            { season: "2014/15", team: "Granada C.F. B", category: "2ª Div. B" },
            { season: "2013/14", team: "A. Atl. Ponte Preta S.P. Sub-17", category: "Copa Brasil" }
        ],
        stats: {
            "2021/22": {
                liga: { partidos: 26, goles_marcados: 2, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "javicueto": {
        name: "Javier Cueto Suárez",
        footballName: "Javi Cueto",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/8CTpYSGZ/Javi_Cueto_PNG.webp",
        personalData: {
            fullName: "Javier Cueto Suárez",
            nickname: "Javi Cueto",
            birthPlace: "Gijón, Asturias",
            country: "España",
            nationality: "Española",
            height: "1,82 m",
            birthDate: "11/01/2001",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Real Avilés Industrial C.F.", category: "1ª Federación - Copa del Rey" },
            { season: "2024/25", team: "Real Avilés Industrial C.F.", category: "2ª Federación - Copa Federación Fase Autonómica - 2ª Federación Prom. de Ascenso" },
            { season: "2023/24", team: "Algeciras C.F.", category: "1ª Federación" },
            { season: "2022/23", team: "Club At. de Madrid B", category: "2ª Federación - 2ª Federación Prom. de Ascenso" },
            { season: "2021/22", team: "Real Oviedo Vetusta", category: "3ª Federación" },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div." },
            { season: "2020/21", team: "Real Oviedo B", category: "2ª Div. B - 2ª Div. B 2ª Fase de Permanencia 2ª RFEF" },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div." },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div." },
            { season: "2019/20", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2018/19", team: "Real Oviedo B", category: "2ª Div. B" }
        ],
        nationalTeam: [
            { season: "2018", team: "España Sub-18", category: "Amistosos" }
        ],
        stats: {
            "2021/22": {
                liga: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2020/21": {
                liga: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2019/20": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "vanderson": {
        name: "Vanderson Silva Teles",
        footballName: "Vanderson",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/FzYCs7yD/Vanderson_PNG.webp",
        personalData: {
            fullName: "Vanderson Silva Teles",
            nickname: "Vanderson",
            birthPlace: "San Salvador de la Bahía de Todos los Santos, Bahía",
            country: "Brasil",
            nationality: "Brasileña",
            height: "1,84 m",
            birthDate: "18/10/1998",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "U.D. San Sebastián de Los Reyes", category: "2ª Federación - Copa Federación Fase Autonómica - Copa Federación" },
            { season: "2024/25", team: "San Fernando C.D.", category: "2ª Federación" },
            { season: "2024/25", team: "U.P. de Langreo", category: "2ª Federación - Copa del Rey" },
            { season: "2023/24", team: "Coruxo F.C.", category: "2ª Federación - Copa Federación Fase Autonómica" },
            { season: "2022/23", team: "Club Marino de Luanco", category: "2ª Federación" },
            { season: "2021/22", team: "Real Oviedo Vetusta", category: "3ª Federación" },
            { season: "2020/21", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div." },
            { season: "2019/20", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div." },
            { season: "2018/19", team: "Capivariano F.C.", category: "Paulista A3" },
            { season: "2017/18", team: "Paulista F.C.", category: "Copa São Paulo Junior" }
        ],
        stats: {
            "2020/21": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2019/20": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "rodrigo": {
        name: "Rodrigo Ríos Lozano",
        footballName: "Rodrigo",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/RZhhCmyq/Rodri_Ríos_PNG.webp",
        personalData: {
            fullName: "Rodrigo Ríos Lozano",
            nickname: "Rodrigo",
            birthPlace: "Soria, Soria",
            country: "España",
            nationality: "Española",
            height: "1,74 m",
            birthDate: "06/06/1990",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Marbella F.C.", category: "1ª Federación" },
            { season: "2024/25", team: "A.D. Ceuta F.C.", category: "1ª Federación - 1ª Federación Final de Campeones - Copa del Rey" },
            { season: "2023/24", team: "A.D. Ceuta F.C.", category: "1ª Federación - 1ª Federación Prom. de Ascenso" },
            { season: "2023/24", team: "Real Murcia C.F.", category: "1ª Federación - Copa del Rey" },
            { season: "2022/23", team: "A.D. Ceuta F.C.", category: "1ª Federación - Copa del Rey" },
            { season: "2021/22", team: "U.D. Logroñés", category: "1ª Federación - 1ª Federación Prom. de Ascenso" },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div." },
            { season: "2019/20", team: "Bristol City F.C.", category: "Championship" },
            { season: "2018/19", team: "Granada C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2017/18", team: "Cultural y Deportiva Leonesa", category: "2ª Div. - Copa del Rey" },
            { season: "2016/17", team: "Córdoba C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2015/16", team: "Real Valladolid C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2014/15", team: "T.S.V. 1860 München", category: "2 Bundesliga" },
            { season: "2013/14", team: "U.D. Almería", category: "1ª Div." },
            { season: "2012/13", team: "Real Zaragoza", category: "1ª Div." },
            { season: "2012/13", team: "Sheffield Wednesday F.C.", category: "Championship - EFL Cup" },
            { season: "2011/12", team: "F.C. Barcelona B", category: "2ª Div." },
            { season: "2010/11", team: "Sevilla F.C.", category: "1ª Div. - Europa League - Copa del Rey - Fase Previa Champs. League" },
            { season: "2010/11", team: "Sevilla At.", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2009/10", team: "Sevilla F.C.", category: "1ª Div. - Copa del Rey" },
            { season: "2009/10", team: "Sevilla At.", category: "2ª Div. B" }
        ],
        nationalTeam: [
            { season: "2011", team: "España Sub-21", category: "Amistosos" },
            { season: "2010", team: "España Sub-21", category: "Clasif. Europeo Sub-21" }
        ],
        stats: {
            "2020/21": {
                liga: { partidos: 24, goles_marcados: 3, tarjetas_amarillas: 5, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2019/20": {
                liga: { partidos: 15, goles_marcados: 3, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "mujica": {
        name: "Rafael Sebastián Mujica García",
        footballName: "Mujica",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/j2168cJh/Mujica_PNG.webp",
        personalData: {
            fullName: "Rafael Sebastián Mujica García",
            nickname: "Mujica",
            birthPlace: "Las Palmas de Gran Canaria, Las Palmas",
            country: "España",
            nationality: "Española",
            height: "1,83 m",
            birthDate: "29/10/1998",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Al-Sadd S.C.", category: "AFC Champs. League Elite - Liga Catar - Copa de Las Estrellas" },
            { season: "2024/25", team: "Al-Sadd S.C.", category: "AFC Champs. League Elite - Liga Catar - Copa Emir Catar - Copa de Catar - Super Shield UAE Catar" },
            { season: "2023/24", team: "F.C. Arouca", category: "Liga Portugal Betclic - Taça de Portugal - Copa de la Liga Portugal - Fases Previas Copa de la Liga - Fase Previa Conference League" },
            { season: "2022/23", team: "F.C. Arouca", category: "Liga Portugal Betclic - Taça de Portugal - Copa de la Liga Portugal" },
            { season: "2021/22", team: "U.D. Las Palmas", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2020/21", team: "U.D. Las Palmas", category: "2ª Div." },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Villarreal C.F. B", category: "2ª Div. B" },
            { season: "2019/20", team: "Extremadura U.D.", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "F.C. Barcelona B", category: "2ª Div. B - Copa de Catalunya" },
            { season: "2017/18", team: "U.E. Cornellà", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso - Copa de Catalunya" },
            { season: "2017/18", team: "F.C. Barcelona B", category: "2ª Div." },
            { season: "2017/18", team: "F.C. Barcelona Sub-19", category: "UEFA Youth League" },
            { season: "2016/17", team: "F.C. Barcelona B", category: "2ª Div. B - Copa de Catalunya" },
            { season: "2015/16", team: "F.C. Barcelona B", category: "2ª Div. B - Copa de Catalunya" },
            { season: "2015/16", team: "F.C. Barcelona Sub-19", category: "UEFA Youth League" }
        ],
        nationalTeam: [
            { season: "2016", team: "España Sub-19", category: "Amistosos" }
        ],
        stats: {
            "2020/21": {
                liga: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 2, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "blancoleschuk": {
        name: "Gustavo Ezequiel Blanco Leschuk",
        footballName: "Blanco Leschuk",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/900jhmgB/Blanco-Leschuk-PNG.webp",
        personalData: {
            fullName: "Gustavo Ezequiel Blanco Leschuk",
            nickname: "Blanco Leschuk",
            birthPlace: "Mendoza, Mendoza",
            country: "Argentina",
            nationality: "Argentina, Ucraniana",
            height: "1,90 m",
            birthDate: "05/11/1991",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Foolad Khuzestan F.C.", category: "Liga Irán" },
            { season: "2024/25", team: "Foolad Khuzestan F.C.", category: "Liga Irán - Copa Irán" },
            { season: "2024/25", team: "Esteghlal Tehran F.C.", category: "Liga Irán - AFC Champs. League Elite - Copa Irán" },
            { season: "2023/24", team: "Esteghlal Tehran F.C.", category: "Liga Irán" },
            { season: "2022/23", team: "S.D. Eibar", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2021/22", team: "S.D. Eibar", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div." },
            { season: "2019/20", team: "Antalyaspor Kulübü", category: "Liga Turca - Copa Turca" },
            { season: "2019/20", team: "F.K. Shakhtar Donetsk", category: "Liga Ucraniana" },
            { season: "2018/19", team: "Málaga C.F.", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2017/18", team: "F.K. Shakhtar Donetsk", category: "Liga Ucraniana - Champs. League - Copa Ucraniana - Supercopa Ucrania" },
            { season: "2016/17", team: "F.K. Shakhtar Donetsk", category: "Liga Ucraniana - Europa League - Copa Ucraniana" },
            { season: "2016/17", team: "F.K. Karpaty Lviv", category: "Liga Ucraniana - Copa Ucraniana" },
            { season: "2015/16", team: "F.K. Karpaty Lviv", category: "Liga Ucraniana" },
            { season: "2015/16", team: "Assyriska F.F.", category: "Copa Suecia" },
            { season: "2014/15", team: "Assyriska F.F.", category: "2ª Suecia" },
            { season: "2014/15", team: "Wydad Casablanca A.C.", category: "Botola Pro" },
            { season: "2012/13", team: "C.S. Deportivo Merlo", category: "1ª Nacional - Copa Argentina" },
            { season: "2011/12", team: "Arsenal de Sarandí F.C.", category: "Apert. Argentina - Claus. Argentina - Copa Libertadores - Copa Argentina - Fase Previa Copa Libertadores" },
            { season: "2010/11", team: "Arsenal de Sarandí F.C.", category: "Claus. Argentina - Conmebol Sudamericana" }
        ],
        stats: {
            "2020/21": {
                liga: { partidos: 33, goles_marcados: 7, tarjetas_amarillas: 5, tarjetas_rojas: 1 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "gassan": {
        name: "Gassan Ahadme Yahyai",
        footballName: "Gassan",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/3w2GX7B9/Gassan_PNG.webp",
        personalData: {
            fullName: "Gassan Ahadme Yahyai",
            nickname: "Gassan",
            birthPlace: "Vic, Barcelona",
            country: "España",
            nationality: "Española, Marroquí",
            height: "1,87 m",
            birthDate: "17/11/2000",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Stevenage F.C.", category: "League One - FA Cup - EFL Trophy" },
            { season: "2024/25", team: "Charlton Athletic F.C.", category: "League One - FA Cup - EFL Cup - EFL Trophy" },
            { season: "2023/24", team: "Cambridge United F.C.", category: "League One - FA Cup - EFL Cup - EFL Trophy" },
            { season: "2022/23", team: "Burton Albion F.C.", category: "League One - EFL Cup - EFL Trophy" },
            { season: "2022/23", team: "Ipswich Town F.C.", category: "League One - FA Cup" },
            { season: "2021/22", team: "Burton Albion F.C.", category: "League One" },
            { season: "2021/22", team: "Portsmouth F.C.", category: "League One - FA Cup - EFL Cup - EFL Trophy" },
            { season: "2020/21", team: "Real Oviedo B", category: "2ª Div. B - 2ª Div. B 2ª Fase de Permanencia 2ª RFEF" },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div." },
            { season: "2019/20", team: "Norwich City Sub-23", category: "Premier League 2ª Div. Two" },
            { season: "2019/20", team: "Norwich City Sub-21", category: "EFL Trophy" },
            { season: "2018/19", team: "Norwich City Sub-18", category: "Premier League Sub-18" },
            { season: "2018/19", team: "Norwich City Sub-23", category: "Premier League 2ª Div. Two" },
            { season: "2018/19", team: "Club Gimnàstic Manresa", category: "División de Honor" }
        ],
        nationalTeam: [
            { season: "", team: "", category: "" }
        ],
        stats: {
            "2020/21": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "joselu": {
        name: "José Luis Moreno Barroso",
        footballName: "Joselu",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/ydtWtbvW/Joselu_PNG.webp",
        personalData: {
            fullName: "José Luis Moreno Barroso",
            nickname: "Joselu",
            birthPlace: "Cartaya, Huelva",
            country: "España",
            nationality: "Española",
            height: "1,77 m",
            birthDate: "03/03/1991",
            deathDate: null
        },
        career: [
            { season: "2022/23", team: "C.D. Lugo", category: "2ª Div." },
            { season: "2021/22", team: "C.D. Lugo", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "C.D. Tenerife", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "C.D. Tenerife", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div." },
            { season: "2018/19", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2017/18", team: "Granada C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2016/17", team: "C.D. Lugo", category: "2ª Div. - Copa del Rey" },
            { season: "2015/16", team: "C.D. Lugo", category: "2ª Div. - Copa del Rey" },
            { season: "2014/15", team: "R.C.D. Mallorca", category: "2ª Div." },
            { season: "2014/15", team: "R.C. Recreativo de Huelva", category: "2ª Div. - Copa del Rey" },
            { season: "2013/14", team: "R.C. Recreativo de Huelva", category: "2ª Div. - Copa del Rey" },
            { season: "2012/13", team: "Córdoba C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2011/12", team: "Villarreal C.F. B", category: "2ª Div." },
            { season: "2011/12", team: "Villarreal C.F.", category: "1ª Div. - Champs. League - Copa del Rey" },
            { season: "2010/11", team: "Villarreal C.F. B", category: "2ª Div." },
            { season: "2010/11", team: "Villarreal C.F. C", category: "3ª Div." },
            { season: "2009/10", team: "Villarreal C.F. B", category: "2ª Div." }
        ],
        stats: {
            "2019/20": {
                liga: { partidos: 9, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2018/19": {
                liga: { partidos: 36, goles_marcados: 10, tarjetas_amarillas: 5, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "saulberjon": {
        name: "Saúl Berjón Pérez",
        footballName: "Saúl Berjón",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/yNqKqzzM/Saúl_Berjón_PNG.webp",
        personalData: {
            fullName: "Saúl Berjón Pérez",
            nickname: "Saúl Berjón",
            birthPlace: "Oviedo, Asturias",
            country: "España",
            nationality: "Española",
            height: "1,78 m",
            birthDate: "24/05/1986",
            deathDate: null
        },
        career: [
            { season: "2022/23", team: "Burgos C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "Burgos C.F.", category: "2ª Div." },
            { season: "2020/21", team: "Burgos C.F.", category: "2ª Div. B - Copa del Rey - 2ª Div. B Prom. de Ascenso - 2ª Div. B 2ª Fase de Ascenso a 2ª" },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div." },
            { season: "2018/19", team: "Real Oviedo", category: "2ª Div." },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div." },
            { season: "2016/17", team: "Real Oviedo", category: "2ª Div." },
            { season: "2016/17", team: "Club Universidad Nacional PUMAS", category: "Liga MX Apert. - CONCACAF Champs. Cup - Etapas Finales Apert. MX" },
            { season: "2015/16", team: "S.D. Eibar", category: "1ª Div. - Copa del Rey" },
            { season: "2014/15", team: "S.D. Eibar", category: "1ª Div. - Copa del Rey" },
            { season: "2013/14", team: "Real Murcia C.F.", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2012/13", team: "Real Murcia C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2011/12", team: "A.D. Alcorcón", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2010/11", team: "F.C. Barcelona B", category: "2ª Div." },
            { season: "2009/10", team: "U.D. Las Palmas", category: "2ª Div. - Copa del Rey" },
            { season: "2008/09", team: "U.D. Las Palmas", category: "2ª Div. - Copa del Rey" },
            { season: "2007/08", team: "U.D. Pájara Playas de Jandía", category: "2ª Div. B" }
        ],
        stats: {
            "2019/20": {
                liga: { partidos: 24, goles_marcados: 0, tarjetas_amarillas: 2, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2018/19": {
                liga: { partidos: 28, goles_marcados: 4, tarjetas_amarillas: 5, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2017/18": {
                liga: { partidos: 40, goles_marcados: 7, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2016/17": {
                liga: { partidos: 22, goles_marcados: 2, tarjetas_amarillas: 4, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "yoelbarcenas": {
        name: "Edgar Yoel Bárcenas Herrera",
        footballName: "Yoel Bárcenas",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/x8NgVBQZ/Yoel_Bárcenas_PNG.webp",
        personalData: {
            fullName: "Edgar Yoel Bárcenas Herrera",
            nickname: "Yoel Bárcenas",
            birthPlace: "Colón, Colón",
            country: "Panamá",
            nationality: "Panameña",
            height: "1,75 m",
            birthDate: "23/10/1993",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Mazatlán F.C.", category: "Liga MX Apert. - Liga MX Claus." },
            { season: "2024/25", team: "Mazatlán F.C.", category: "Liga MX Apert. - Liga MX Claus." },
            { season: "2023/24", team: "Mazatlán F.C.", category: "Liga MX Apert. - Liga MX Claus. - Etapas Finales Apert. MX - Leagues Cup" },
            { season: "2022/23", team: "Mazatlán F.C.", category: "Liga MX Apert. - Liga MX Claus. - Leagues Cup" },
            { season: "2021/22", team: "C.D. Leganés", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Girona F.C.", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2017/18", team: "Cafetaleros de Tapachula", category: "Ascenso MX Apert. - Ascenso MX Claus. - Ascenso MX Prom. de Ascenso" },
            { season: "2016/17", team: "Cafetaleros de Tapachula", category: "Ascenso MX Claus." },
            { season: "2016/17", team: "C.D. Árabe Unido", category: "LPF Panamá Apert. - CONCACAF Champs. Cup" },
            { season: "2015/16", team: "R.N.K. Split", category: "Liga Croata HNL" },
            { season: "2015/16", team: "C.D. Árabe Unido", category: "LPF Panamá Apert. - CONCACAF Champs. Cup" },
            { season: "2014/15", team: "C.D. Árabe Unido", category: "LPF Panamá Apert. - LPF Panamá Claus." },
            { season: "2013/14", team: "C.D. Árabe Unido", category: "LPF Panamá Apert. - LPF Panamá Claus. - CONCACAF Champs. Cup" },
            { season: "2012/13", team: "C.D. Árabe Unido", category: "LPF Panamá Apert. - LPF Panamá Claus." }
        ],
        nationalTeam: [
            { season: "2025", team: "Panamá", category: "Clasif. Mundial CONCACAF - Amistosos" },
            { season: "2024", team: "Panamá", category: "Clasif. Mundial CONCACAF - Copa América - Liga de las Naciones CONCACAF - Amistosos" },
            { season: "2023", team: "Panamá", category: "Copa Oro - Liga de las Naciones CONCACAF" },
            { season: "2022", team: "Panamá", category: "Clasif. Mundial CONCACAF - Liga de las Naciones CONCACAF - Amistosos" },
            { season: "2021", team: "Panamá", category: "Clasif. Mundial CONCACAF - Copa Oro - Amistosos" },
            { season: "2020", team: "Panamá", category: "Amistosos" },
            { season: "2019", team: "Panamá", category: "Copa Oro - Liga de las Naciones CONCACAF" },
            { season: "2018", team: "Panamá", category: "Mundial - Amistosos" },
            { season: "2017", team: "Panamá", category: "Clasif. Mundial CONCACAF - Copa Oro - Copa Centroamericana" },
            { season: "2016", team: "Panamá", category: "Clasif. Mundial CONCACAF - Clasif. Copa América - Amistosos" },
            { season: "2015", team: "Panamá Sub-23", category: "Preolímpico de CONCACAF - Juegos Panamericanos" },
            { season: "2014", team: "Panamá", category: "Amistosos" }
        ],
        stats: {
            "2019/20": {
                liga: { partidos: 33, goles_marcados: 8, tarjetas_amarillas: 2, tarjetas_rojas: 1 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2018/19": {
                liga: { partidos: 37, goles_marcados: 6, tarjetas_amarillas: 7, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "ortuno": {
        name: "Alfredo Ortuño Martínez",
        footballName: "Ortuño",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/QNv0JNkZ/Ortuño_PNG.webp",
        personalData: {
            fullName: "Alfredo Ortuño Martínez",
            nickname: "Ortuño",
            birthPlace: "Yecla, Murcia",
            country: "España",
            nationality: "Española",
            height: "1,84 m",
            birthDate: "21/01/1991",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "F.C. Cartagena", category: "1ª Federación - Copa del Rey" },
            { season: "2024/25", team: "F.C. Cartagena", category: "2ª Div. - Copa del Rey" },
            { season: "2023/24", team: "F.C. Cartagena", category: "2ª Div. - Copa del Rey" },
            { season: "2022/23", team: "F.C. Cartagena", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "F.C. Cartagena", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Albacete Balompié", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div." },
            { season: "2018/19", team: "Extremadura U.D.", category: "2ª Div." },
            { season: "2018/19", team: "Albacete Balompié", category: "2ª Div. - Copa del Rey" },
            { season: "2017/18", team: "Real Salt Lake City", category: "MLS Liga USA - US Open Cup" },
            { season: "2016/17", team: "Cádiz C.F.", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2015/16", team: "R.C.D. Mallorca", category: "2ª Div." },
            { season: "2015/16", team: "Real Zaragoza", category: "2ª Div. - Copa del Rey" },
            { season: "2014/15", team: "U.D. Las Palmas", category: "2ª Div. - 2ª Div. Prom. de Ascenso" },
            { season: "2014/15", team: "Granada C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2013/14", team: "Girona F.C.", category: "2ª Div." },
            { season: "2013/14", team: "Lorca F.C.", category: "2ª Div. B - Copa del Rey" },
            { season: "2012/13", team: "At. Levante U.D.", category: "2ª Div. B" },
            { season: "2011/12", team: "Getafe C.F. B", category: "2ª Div. B" },
            { season: "2010/11", team: "Albacete Balompié", category: "2ª Div. - Copa del Rey" },
            { season: "2008/09", team: "Albacete Balompié", category: "2ª Div." }
        ],
        stats: {
            "2019/20": {
                liga: { partidos: 38, goles_marcados: 14, tarjetas_amarillas: 4, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 1, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "ibra": {
        name: "Ibrahima Balde",
        footballName: "Ibra",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/4NrnBqn0/Ibra_PNG.webp",
        personalData: {
            fullName: "Ibrahima Balde",
            nickname: "Ibra",
            birthPlace: "Pikine, Dakar",
            country: "Senegal",
            nationality: "Senegalesa",
            height: "1,90 m",
            birthDate: "04/04/1989",
            deathDate: null
        },
        career: [
            { season: "2023/24", team: "TRAU F.C.", category: "Liga India" },
            { season: "2022/23", team: "Boluspor S.K.", category: "Liga Turca" },
            { season: "2021/22", team: "Giresunspor S.K.", category: "Liga Turca - Copa Turca" },
            { season: "2020/21", team: "Giresunspor S.K.", category: "Liga Turca" },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2017/18", team: "F.C. CFR 1907 Cluj", category: "Liga Rumana - Copa Rumanía" },
            { season: "2016/17", team: "Stade de Reims", category: "Ligue 2 - Copa de Francia" },
            { season: "2016/17", team: "Stade de Reims B", category: "National 2" },
            { season: "2015/16", team: "F.C. Kuban Krasnodar", category: "Premier League Rusia - Copa Rusa" },
            { season: "2014/15", team: "F.C. Kuban Krasnodar", category: "Premier League Rusia - Copa Rusa" },
            { season: "2013/14", team: "F.C. Kuban Krasnodar", category: "Premier League Rusia - Europa League - Fase Previa Europa League" },
            { season: "2012/13", team: "F.C. Kuban Krasnodar", category: "Premier League Rusia" },
            { season: "2011/12", team: "C.A. Osasuna", category: "1ª Div. - Copa del Rey" },
            { season: "2010/11", team: "C.D. Numancia", category: "2ª Div. - Copa del Rey" },
            { season: "2009/10", team: "Club At. de Madrid", category: "1ª Div. - Copa del Rey" },
            { season: "2009/10", team: "Club At. de Madrid B", category: "2ª Div. B" },
            { season: "2008/09", team: "Club At. de Madrid B", category: "2ª Div. B" }
        ],
        nationalTeam: [
            { season: "2016", team: "Senegal", category: "Clasif. Copa África" },
            { season: "2015", team: "Senegal", category: "Clasif. Copa África" },
            { season: "2013", team: "Senegal", category: "Clasif. Mundial África - Amistosos" },
            { season: "2012", team: "Senegal Sub-23", category: "Juegos Olímpicos - Amistosos" },
            { season: "2012", team: "Senegal", category: "Clasif. Mundial África - Amistosos" }
        ],
        stats: {
            "2019/20": {
                liga: { partidos: 28, goles_marcados: 4, tarjetas_amarillas: 3, tarjetas_rojas: 1 },
                copa: { partidos: 1, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2018/19": {
                liga: { partidos: 32, goles_marcados: 6, tarjetas_amarillas: 3, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 2, goles_marcados: 2, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "steven": {
        name: "Steven Nicanor Prieto Morales",
        footballName: "Steven",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/g2h9HB6N/Steven_PNG.webp",
        personalData: {
            fullName: "Steven Nicanor Prieto Morales",
            nickname: "Steven",
            birthPlace: "Oviedo, Asturias",
            country: "España",
            nationality: "Española, Colombiana",
            height: "1,81 m",
            birthDate: "30/07/1997",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "C.D. Alcoyano", category: "2ª Federación" },
            { season: "2024/25", team: "Torrent C.F.", category: "2ª Federación - 2ª Federación Prom. de Ascenso" },
            { season: "2024/25", team: "U.D. Llanera", category: "2ª Federación - Copa del Rey" },
            { season: "2023/24", team: "U.P. de Langreo", category: "2ª Federación" },
            { season: "2022/23", team: "Orihuela C.F.", category: "3ª Federación - Copa Federación Fase Autonómica" },
            { season: "2021/22", team: "Club Marino de Luanco", category: "2ª Federación - Copa Federación Fase Autonómica" },
            { season: "2020/21", team: "Real Oviedo B", category: "2ª Div. B - 2ª Div. B 2ª Fase de Permanencia 2ª RFEF" },
            { season: "2019/20", team: "C.D. Badajoz", category: "2ª Div. B" },
            { season: "2019/20", team: "Real Oviedo", category: "Copa del Rey" },
            { season: "2019/20", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2018/19", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2018/19", team: "Real Oviedo", category: "2ª Div." },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2017/18", team: "Real Oviedo B", category: "3ª Div. 3ª Div. Prom. de Ascenso" },
            { season: "2016/17", team: "Real Oviedo B", category: "3ª Div." },
            { season: "2016/17", team: "Real Oviedo", category: "2ª Div." },
            { season: "2015/16", team: "Real Oviedo B", category: "3ª Div." }
        ],
        nationalTeam: [
            { season: "2013", team: "España Sub-17", category: "Amistosos" },
            { season: "2013", team: "España Sub-16", category: "Amistosos" }
        ],
        stats: {
            "2019/20": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2018/19": {
                liga: { partidos: 8, goles_marcados: 0, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 2, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2017/18": {
                liga: { partidos: 2, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 3, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2016/17": {
                liga: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "toche": {
        name: "José Verdú Nicolás",
        footballName: "Toché",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/wMrPhhqC/Toché_PNG.webp",
        personalData: {
            fullName: "José Verdú Nicolás",
            nickname: "Toché",
            birthPlace: "Santomera, Murcia",
            country: "España",
            nationality: "Española",
            height: "1,86 m",
            birthDate: "01/01/1983",
            deathDate: null
        },
        career: [
            { season: "2020/21", team: "Orihuela C.F.", category: "2ª Div. B - 2ª Div. B 2ª Fase de Permanencia a 2ª RFEF" },
            { season: "2019/20", team: "Burgos C.F.", category: "2ª Div. B - Copa Federación" },
            { season: "2018/19", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div." },
            { season: "2016/17", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2015/16", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2014/15", team: "R.C. Deportivo de La Coruña", category: "1ª Div. - Copa del Rey" },
            { season: "2013/14", team: "R.C. Deportivo de La Coruña", category: "2ª Div." },
            { season: "2012/13", team: "Panathinaikos F.C.", category: "Super League Griega - Europa League - Copa Griega - Fase Previa Champs. League" },
            { season: "2011/12", team: "Panathinaikos F.C.", category: "Super League Griega - Copa Griega - Fase Previa Champs. League - Fase Previa Europa League" },
            { season: "2010/11", team: "F.C. Cartagena", category: "2ª Div. - Copa del Rey" },
            { season: "2009/10", team: "F.C. Cartagena", category: "2ª Div. - Copa del Rey" },
            { season: "2008/09", team: "Albacete Balompié", category: "2ª Div." },
            { season: "2008/09", team: "C.D. Numancia", category: "1ª Div. - Copa del Rey" },
            { season: "2007/08", team: "C.D. Numancia", category: "2ª Div. - Copa del Rey" },
            { season: "2006/07", team: "Real Valladolid C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2005/06", team: "Hércules C.F.", category: "2ª Div." },
            { season: "2004/05", team: "C.D. Numancia", category: "1ª Div." },
            { season: "2003/04", team: "Club At. de Madrid", category: "1ª Div. - Copa del Rey" },
            { season: "2003/04", team: "Club At. de Madrid B", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2002/03", team: "Club At. de Madrid B", category: "2ª Div. B" }
        ],
        nationalTeam: [
            { season: "2003", team: "España Sub-20", category: "Amistosos" },
            { season: "2002", team: "España Sub-20", category: "Torneo COTIF Sub-20" },
            { season: "2000", team: "España Sub-16", category: "Europeo Sub-16 - Amistosos" }
        ],
        stats: {
            "2018/19": {
                liga: { partidos: 26, goles_marcados: 2, tarjetas_amarillas: 4, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 5, goles_marcados: 2, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2017/18": {
                liga: { partidos: 33, goles_marcados: 6, tarjetas_amarillas: 8, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2016/17": {
                liga: { partidos: 40, goles_marcados: 17, tarjetas_amarillas: 8, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2015/16": {
                liga: { partidos: 37, goles_marcados: 17, tarjetas_amarillas: 5, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

        "linares": {
        name: "Miguel Linares Cólera",
        footballName: "Linares",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/Z5smwyf5/Linares_PNG.webp",
        personalData: {
            fullName: "Miguel Linares Cólera",
            nickname: "Linares",
            birthPlace: "Fuentes de Ebro, Zaragoza",
            country: "España",
            nationality: "Española",
            height: "1,81 m",
            birthDate: "30/09/1982",
            deathDate: null
        },
        career: [
            { season: "2020/21", team: "S.D. Ejea", category: "Copa Federación - Copa Federación Fase Autonómica" },
            { season: "2019/20", team: "Real Zaragoza", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2018/19", team: "Real Zaragoza", category: "2ª Div." },
            { season: "2018/19", team: "C.F. Reus Deportiu", category: "2ª Div. - Copa del Rey" },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2016/17", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2015/16", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2014/15", team: "Real Oviedo", category: "2ª Div. B - Copa del Rey - 2ª Div. B Prom. de Ascenso" },
            { season: "2013/14", team: "R.C. Recreativo de Huelva", category: "2ª Div. - Copa del Rey" },
            { season: "2012/13", team: "Elche C.F.", category: "2ª Div." },
            { season: "2011/12", team: "Elche C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2010/11", team: "Elche C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2009/10", team: "U.D. Salamanca", category: "2ª Div. - Copa del Rey" },
            { season: "2008/09", team: "C.D. Alcoyano", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2006/07", team: "U.D. Barbastro", category: "2ª Div. B - Copa del Rey" },
            { season: "2005/06", team: "S.D. Huesca", category: "2ª Div. B" },
            { season: "2004/05", team: "Real Zaragoza B", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" }
        ],
        stats: {
            "2017/18": {
                liga: { partidos: 36, goles_marcados: 10, tarjetas_amarillas: 9, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 4, goles_marcados: 3, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2016/17": {
                liga: { partidos: 35, goles_marcados: 8, tarjetas_amarillas: 8, tarjetas_rojas: 0 },
                copa: { partidos: 1, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2015/16": {
                liga: { partidos: 24, goles_marcados: 6, tarjetas_amarillas: 6, tarjetas_rojas: 1 },
                copa: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 1, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            },
            "2014/15": {
                liga: { partidos: 39, goles_marcados: 30, tarjetas_amarillas: 6, tarjetas_rojas: 1 },
                copa: { partidos: 1, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 1, goles_marcados: 1, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
            }
        }
    },

    "fabbrini": {
        name: "Diego Fabbrini",
        footballName: "Fabbrini",
        position: "Delantero",
        role: "jugador",
        number: null,
        image: "https://i.postimg.cc/zBmjN0d2/Fabbrini_PNG.webp",
        personalData: {
            fullName: "Diego Fabbrini",
            nickname: "Fabbrini",
            birthPlace: "San Giuliano Terme, Toscana",
            country: "Italia",
            nationality: "Italiana",
            height: "1,81 m",
            birthDate: "31/07/1990",
            deathDate: null
        },
        career: [
            { season: "2024/25", team: "U.S. Sambenedettese", category: "Serie D - Coppa Italia Serie D" },
            { season: "2023/24", team: "U.S. Sambenedettese", category: "Serie D" },
            { season: "2022/23", team: "A.S. Lucchese Libertas 1905 F.C.", category: "Serie C" },
            { season: "2021/22", team: "U.S. Alessandria Calcio 1912", category: "Serie B" },
            { season: "2021/22", team: "Ascoli Calcio 1898 F.C.", category: "Serie B - Coppa Italia" },
            { season: "2020/21", team: "F.C. Dinamo de Bucarest", category: "Liga Rumana - Copa Rumanía" },
            { season: "2019/20", team: "F.C. Dinamo de Bucarest", category: "Liga Rumana - Copa Rumanía" },
            { season: "2019/20", team: "C.S.K.A. Sofía", category: "Liga Bulgaria - Fase Previa Europa League" },
            { season: "2018/19", team: "F.C. Botoșani", category: "Liga Rumana - Copa Rumanía" },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div." },
            { season: "2016/17", team: "Spezia Calcio", category: "Serie B - Serie B Prom. de Ascenso" },
            { season: "2016/17", team: "Birmingham City F.C.", category: "Championship - FA Cup - EFL Cup" },
            { season: "2015/16", team: "Birmingham City F.C.", category: "Championship" },
            { season: "2015/16", team: "Middlesbrough F.C.", category: "Championship - FA Cup - EFL Cup" },
            { season: "2014/15", team: "Birmingham City F.C.", category: "Championship" },
            { season: "2014/15", team: "Millwall F.C.", category: "Championship" },
            { season: "2014/15", team: "Watford F.C.", category: "Championship - EFL Cup" },
            { season: "2013/14", team: "Siena F.C.", category: "Serie B" },
            { season: "2013/14", team: "Watford F.C.", category: "Championship - FA Cup - EFL Cup" },
            { season: "2012/13", team: "Palermo F.C.", category: "Serie A" },
            { season: "2012/13", team: "Udinese Calcio", category: "Serie A - Europa League - Coppa Italia - Fase Previa Champs. League" },
            { season: "2011/12", team: "Udinese Calcio", category: "Serie A - Europa League - Coppa Italia - Fase Previa Champs. League" },
            { season: "2010/11", team: "Empoli F.C.", category: "Serie B - Coppa Italia" },
            { season: "2009/10", team: "Empoli F.C. Sub-19", category: "Campionato Primavera 1" },
            { season: "2009/10", team: "Empoli F.C.", category: "Serie B - Coppa Italia" },
            { season: "2008/09", team: "Empoli F.C. Sub-19", category: "Campionato Primavera 1" },
            { season: "2007/08", team: "Empoli F.C. Sub-19", category: "Campionato Primavera 1" }
        ],
        nationalTeam: [
            { season: "2012", team: "Italia", category: "Amistosos" },
            { season: "2011", team: "Italia Sub-20", category: "Torneo Maurice Revello" },
            { season: "2011", team: "Italia Sub-21", category: "Clasif. Europeo Sub-21 - Amistosos" },
            { season: "2010", team: "Italia Sub-21", category: "Clasif. Europeo Sub-21 - Amistosos" }
        ],
        stats: {
            "2017/18": {
                liga: { partidos: 17, goles_marcados: 1, tarjetas_amarillas: 1, tarjetas_rojas: 0 },
                copa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                uefa: { partidos: 0, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 },
                amistosos: { partidos: 1, goles_marcados: 0, tarjetas_amarillas: 0, tarjetas_rojas: 0 }
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

        "alvarocervera": {
        name: "Álvaro Cervera Díaz",
        footballName: "Álvaro Cervera",
        position: "Entrenador",
        role: "entrenador",
        number: null,
        image: "https://i.ibb.co/RkNqr49R/lvaro-Cervera-entrenador-PNG.webp",
        personalData: {
            fullName: "Álvaro Cervera Díaz",
            nickname: "Álvaro Cervera",
            birthPlace: "Santa Isabel, Fernando Poo",
            country: "España",
            nationality: "Española, Ecuatoguineana",
            height: "1,75 m",
            birthDate: "20/09/1965",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "C.D. Tenerife", category: "1ª Federación - Copa del Rey" },
            { season: "2024/25", team: "C.D. Tenerife", category: "2ª Div. - Copa del Rey" },
            { season: "2023/24", team: "Real Oviedo", category: "2ª Div." },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "Cádiz C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Cádiz C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Cádiz C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "Cádiz C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2017/18", team: "Cádiz C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2016/17", team: "Cádiz C.F.", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2015/16", team: "Cádiz C.F.", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2014/15", team: "C.D. Tenerife", category: "2ª Div. - Copa del Rey" },
            { season: "2013/14", team: "C.D. Tenerife", category: "2ª Div. - Copa del Rey" },
            { season: "2012/13", team: "C.D. Tenerife", category: "2ª Div. B - Copa del Rey - 2ª Div. B Prom. de Ascenso" },
            { season: "2011/12", team: "Real Racing Club de Santander", category: "1ª Div." },
            { season: "2011/12", team: "R.C. Recreativo de Huelva", category: "2ª Div. - Copa del Rey" },
            { season: "2010/11", team: "Real Unión Club", category: "2ª Div. B - Copa del Rey" },
            { season: "2010/11", team: "R.C. Recreativo de Huelva", category: "2ª Div." },
            { season: "2009/10", team: "Real Jaén C.F.", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2008/09", team: "Cultural y Deportiva Leonesa", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2006/07", team: "C.F. Independiente Alicante", category: "2ª Div. B - Copa del Rey" },
            { season: "2006/07", team: "U.D. Almansa", category: "3ª Div." },
            { season: "2005/06", team: "C.D. Castellón", category: "2ª Div. - Copa del Rey" },
            { season: "2004/05", team: "Catarroja C.F.", category: "3ª Div." },
            { season: "2003/04", team: "Villarreal C.F. B", category: "3ª Div." }
        ],
        stats: {
            "2023/24": {
                liga: { partidos_entrenados: 6, victorias: 0, empates: 3, derrotas: 3 },
                copa: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 },
                uefa: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 },
                amistosos: { partidos_entrenados: 6, victorias: 4, empates: 1, derrotas: 1 }
            },
            "2022/23": {
                liga: { partidos_entrenados: 31, victorias: 14, empates: 7, derrotas: 10 },
                copa: { partidos_entrenados: 3, victorias: 2, empates: 0, derrotas: 1 },
                uefa: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 },
                amistosos: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 }
            }
        }
    },

        "bolo": {
        name: "Juan Antonio Pérez Alonso",
        footballName: "Bolo",
        position: "Entrenador",
        role: "entrenador",
        number: null,
        image: "https://i.ibb.co/5g2wztDY/Bolo-entrenador-PNG.webp",
        personalData: {
            fullName: "Juan Antonio Pérez Alonso",
            nickname: "Bolo",
            birthPlace: "Bilbao, Vizcaya",
            country: "España",
            nationality: "Española",
            height: "1,86 m",
            birthDate: "05/03/1974",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "S.D. Huesca", category: "2ª Div. - Copa del Rey" },
            { season: "2024/25", team: "Burgos C.F.", category: "2ª Div." },
            { season: "2023/24", team: "Burgos C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "2022/23", team: "Real Oviedo", category: "2ª Div." },
            { season: "2021/22", team: "S.D. Ponferradina", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "S.D. Ponferradina", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "S.D. Ponferradina", category: "2ª Div. - Copa del Rey" },
            { season: "2018/19", team: "S.D. Ponferradina", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2017/18", team: "Arenas Club de Getxo", category: "2ª Div. B" },
            { season: "2016/17", team: "Arenas Club de Getxo", category: "2ª Div. B - Copa del Rey" },
            { season: "2015/16", team: "Arenas Club de Getxo", category: "2ª Div. B" },
            { season: "2014/15", team: "Arenas Club de Getxo", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2013/14", team: "Arenas Club de Getxo", category: "3ª Div. - 3ª Div. Prom. de Ascenso" }
        ],
        stats: {
            "2022/23": {
                liga: { partidos_entrenados: 11, victorias: 2, empates: 4, derrotas: 5 },
                copa: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 },
                uefa: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 },
                amistosos: { partidos_entrenados: 7, victorias: 2, empates: 3, derrotas: 2 }
            }
        }
    },

    "javicalleja": {
        name: "Javier Calleja Revilla",
        footballName: "Javi Calleja",
        position: "Entrenador",
        role: "entrenador",
        number: null,
        image: "https://i.ibb.co/pjBqgb66/Javi-Calleja-entrenador-PNG.webp",
        personalData: {
            fullName: "Javier Calleja Revilla",
            nickname: "Javi Calleja",
            birthPlace: "Madrid, Madrid",
            country: "España", 
            nationality: "Española",
            height: "1,71 m",
            birthDate: "12/05/1978",
            deathDate: null // Poner null si el jugador está vivo
        },
        career: [
            { season: "2025/26", team: "Al-Riyadh S.C.", category: "Liga Saudí - Copa del Rey Saudí" },
            { season: "2024/25", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2023/24", team: "Levante U.D.", category: "2ª Div. - Copa del Rey" },
            { season: "2022/23", team: "Levante U.D.", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2021/22", team: "Deportivo Alavés", category: "1ª Div." },
            { season: "2020/21", team: "Deportivo Alavés", category: "1ª Div." },
            { season: "2019/20", team: "Villarreal C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2018/19", team: "Villarreal C.F.", category: "1ª Div. - Europa League - Copa del Rey" },
            { season: "2017/18", team: "Villarreal C.F.", category: "1ª Div. - Europa League - Copa del Rey" },
            { season: "2017/18", team: "Villarreal C.F. B", category: "2ª Div. B" },
            { season: "2016/17", team: "Villarreal C.F. Sub-19", category: "División de Honor - Copa de Campeones División de Honor" },
            { season: "2015/16", team: "Villarreal C.F. Sub-19", category: "División de Honor - UEFA Youth League - Copa del Rey Juvenil - Copa de Campeones División de Honor" }
            
            
        ],

        stats: {
            
            "2024/25": {
                liga: { partidos_entrenados: 32, victorias: 14, empates: 9, derrotas: 9 },
                copa: { partidos_entrenados: 1, victorias: 0, empates: 0, derrotas: 1 },
                uefa: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 },
                amistosos: { partidos_entrenados: 8, victorias: 3, empates: 2, derrotas: 3 }
            }
        }
    },

        "anquela": {
        name: "Juan Antonio Albacete Anquela",
        footballName: "Anquela",
        position: "Entrenador",
        role: "entrenador",
        number: null,
        image: "https://i.ibb.co/mFyhBmqk/Anquela-entrenador-PNG.webp",
        personalData: {
            fullName: "Juan Antonio Albacete Anquela",
            nickname: "Anquela",
            birthPlace: "Linares, Jaén",
            country: "España",
            nationality: "Española",
            height: "1,70 m",
            birthDate: "11/09/1957",
            deathDate: null
        },
        career: [
            { season: "2022/23", team: "U.D. Ibiza", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "A.D. Alcorcón", category: "2ª Div." },
            { season: "2020/21", team: "A.D. Alcorcón", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "R.C. Deportivo de La Coruña", category: "2ª Div." },
            { season: "2018/19", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2017/18", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2016/17", team: "S.D. Huesca", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2015/16", team: "S.D. Huesca", category: "2ª Div. - Copa del Rey" },
            { season: "2014/15", team: "C.D. Numancia", category: "2ª Div. - Copa del Rey" },
            { season: "2013/14", team: "C.D. Numancia", category: "2ª Div. - Copa del Rey - Copa Castilla y León" },
            { season: "2012/13", team: "Granada C.F.", category: "1ª Div. - Copa del Rey" },
            { season: "2011/12", team: "A.D. Alcorcón", category: "2ª Div. - Copa del Rey - 2ª Div. Prom. de Ascenso" },
            { season: "2010/11", team: "A.D. Alcorcón", category: "2ª Div. - Copa del Rey" },
            { season: "2009/10", team: "A.D. Alcorcón", category: "2ª Div. B - Copa del Rey - 2ª Div. B Prom. de Ascenso" },
            { season: "2008/09", team: "A.D. Alcorcón", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2005/06", team: "U.D. Melilla", category: "2ª Div. B" },
            { season: "2004/05", team: "S.D. Huesca", category: "2ª Div. B" },
            { season: "2001/02", team: "Real Jaén C.F.", category: "2ª Div." }
        ],
        stats: {
            "2018/19": {
                liga: { partidos_entrenados: 34, victorias: 13, empates: 11, derrotas: 10 },
                copa: { partidos_entrenados: 1, victorias: 0, empates: 0, derrotas: 1 },
                uefa: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 },
                amistosos: { partidos_entrenados: 8, victorias: 3, empates: 3, derrotas: 2 }
            },
            "2017/18": {
                liga: { partidos_entrenados: 42, victorias: 18, empates: 11, derrotas: 13 },
                copa: { partidos_entrenados: 1, victorias: 0, empates: 0, derrotas: 1 },
                uefa: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 },
                amistosos: { partidos_entrenados: 9, victorias: 3, empates: 5, derrotas: 1 }
            }
        }
    },

        "sergioegea": {
        name: "Sergio Horacio Egea Rueda",
        footballName: "Sergio Egea",
        position: "Entrenador",
        role: "entrenador",
        number: null,
        image: "https://i.ibb.co/jvQfrQvz/Sergio-Egea-entrenador-PNG.webp",
        personalData: {
            fullName: "Sergio Horacio Egea Rueda",
            nickname: "Sergio Egea",
            birthPlace: "Necochea, Buenos Aires",
            country: "Argentina",
            nationality: "Argentina, Española",
            height: "1,84 m",
            birthDate: "21/09/1957",
            deathDate: null
        },
        career: [
            { season: "2021/22", team: "C.S.D. Xelajú M.C.", category: "Liga Guatemala Apert. - Liga Guatemala Claus." },
            { season: "2020/21", team: "Salamanca CF U.D.S.", category: "2ª Div. B - Copa Federación" },
            { season: "2020/21", team: "C.S.D. Xelajú M.C.", category: "Liga Guatemala Apert. - Liga Guatemala Claus." },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div." },
            { season: "2019/20", team: "C.S.D. Xelajú M.C.", category: "Liga Guatemala Apert. - Liga Guatemala Claus." },
            { season: "2018/19", team: "Real Oviedo", category: "2ª Div." },
            { season: "2017/18", team: "Club Universidad Nacional PUMAS", category: "Liga MX Apert. - Copa Méjico Apert." },
            { season: "2015/16", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2014/15", team: "Real Oviedo", category: "2ª Div. B - Copa del Rey - 2ª Div. B Prom. de Ascenso" },
            { season: "2013/14", team: "C.D. Eldense", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "1999/00", team: "Real Valladolid C.F. B", category: "2ª Div. B" },
            { season: "1998/99", team: "Hércules C.F.", category: "2ª Div. - Copa del Rey" },
            { season: "1997/98", team: "C.D. Toledo", category: "2ª Div. - Copa del Rey" },
            { season: "1996/97", team: "Real Madrid C.F. B", category: "2ª Div." },
            { season: "1995/96", team: "Real Madrid C.F. B", category: "2ª Div." }
        ],
        stats: {
            "2019/20": {
                liga: { partidos_entrenados: 5, victorias: 0, empates: 1, derrotas: 4 },
                copa: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 },
                uefa: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 },
                amistosos: { partidos_entrenados: 6, victorias: 2, empates: 0, derrotas: 4 }
            },
            "2018/19": {
                liga: { partidos_entrenados: 7, victorias: 3, empates: 1, derrotas: 3 },
                copa: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 },
                uefa: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 },
                amistosos: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 }
            },
            "2015/16": {
                liga: { partidos_entrenados: 29, victorias: 12, empates: 10, derrotas: 7 },
                copa: { partidos_entrenados: 2, victorias: 1, empates: 0, derrotas: 1 },
                uefa: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 },
                amistosos: { partidos_entrenados: 6, victorias: 4, empates: 0, derrotas: 2 }
            },
            "2014/15": {
                liga: { partidos_entrenados: 42, victorias: 26, empates: 9, derrotas: 7 },
                copa: { partidos_entrenados: 4, victorias: 2, empates: 1, derrotas: 1 },
                uefa: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 },
                amistosos: { partidos_entrenados: 2, victorias: 1, empates: 1, derrotas: 0 }
            }
        }
    },

        "javirozada": {
        name: "Javier Fernández-Rozada Álvarez",
        footballName: "Javi Rozada",
        position: "Entrenador",
        role: "entrenador",
        number: null,
        image: "https://i.ibb.co/G37f99XB/Javi-Rozada-entrenador-PNG.webp",
        personalData: {
            fullName: "Javier Fernández-Rozada Álvarez",
            nickname: "Javi Rozada",
            birthPlace: "Oviedo, Asturias",
            country: "España",
            nationality: "Española",
            height: "null",
            birthDate: "03/07/1982",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Krasava Ypsonas", category: "Liga Chipre" },
            { season: "2024/25", team: "Real Avilés Industrial C.F.", category: "2ª Federación - Copa Federación - 2ª Federación Prom. de Ascenso - Copa Federación Fase Autonómica" },
            { season: "2023/24", team: "Real Avilés Industrial C.F.", category: "2ª Federación Prom. de Permanencia" },
            { season: "2020/21", team: "Real Racing Club de Santander", category: "2ª Div. B - Copa del Rey" },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2018/19", team: "Real Oviedo B", category: "2ª Div. B" },
            { season: "2017/18", team: "Real Oviedo B", category: "3ª Div. - 3ª Div. Prom. de Ascenso" },
            { season: "2015/16", team: "C.D. Lealtad de Villaviciosa", category: "2ª Div. B" },
            { season: "2014/15", team: "C.D. Lealtad de Villaviciosa", category: "2ª Div. B - Copa del Rey" },
            { season: "2013/14", team: "C.D. Lealtad de Villaviciosa", category: "3ª Div. - 3ª Div. Prom. de Ascenso" }
        ],
        stats: {
            "2019/20": {
                liga: { partidos_entrenados: 23, victorias: 6, empates: 10, derrotas: 7 },
                copa: { partidos_entrenados: 1, victorias: 0, empates: 0, derrotas: 1 },
                uefa: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 },
                amistosos: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 }
            }
        }
    },

        "ziganda": {
        name: "José Ángel Ziganda Lakunza",
        footballName: "Ziganda",
        position: "Entrenador",
        role: "entrenador",
        number: null,
        image: "https://i.ibb.co/JRrM0Mjf/Ziganda-entrenador-PNG.webp",
        personalData: {
            fullName: "José Ángel Ziganda Lakunza",
            nickname: "Ziganda",
            birthPlace: "Larráinzar, Navarra",
            country: "España",
            nationality: "Española",
            height: "1,82 m",
            birthDate: "01/10/1966",
            deathDate: null
        },
        career: [
            { season: "2025/26", team: "Cultural y Deportiva Leonesa", category: "2ª Div. - Copa del Rey" },
            { season: "2023/24", team: "S.D. Huesca", category: "2ª Div." },
            { season: "2022/23", team: "S.D. Huesca", category: "2ª Div. - Copa del Rey" },
            { season: "2021/22", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2020/21", team: "Real Oviedo", category: "2ª Div. - Copa del Rey" },
            { season: "2019/20", team: "Real Oviedo", category: "2ª Div." },
            { season: "2017/18", team: "Athletic Club", category: "1ª Div. - Europa League - Copa del Rey - Fase Previa Europa League" },
            { season: "2016/17", team: "Bilbao Athletic", category: "2ª Div. B" },
            { season: "2015/16", team: "Bilbao Athletic", category: "2ª Div." },
            { season: "2014/15", team: "Bilbao Athletic", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2013/14", team: "Bilbao Athletic", category: "2ª Div. B" },
            { season: "2012/13", team: "Bilbao Athletic", category: "2ª Div. B - 2ª Div. B Prom. de Ascenso" },
            { season: "2011/12", team: "Bilbao Athletic", category: "2ª Div. B" },
            { season: "2009/10", team: "Xerez C.D.", category: "1ª Div. - Copa del Rey" },
            { season: "2008/09", team: "C.A. Osasuna", category: "1ª Div." },
            { season: "2007/08", team: "C.A. Osasuna", category: "1ª Div. - Copa del Rey" },
            { season: "2006/07", team: "C.A. Osasuna", category: "1ª Div. - Europa League - Copa del Rey - Fase Previa Champs. League" },
            { season: "2005/06", team: "C.A. Osasuna B", category: "2ª Div. B" }
        ],
        stats: {
            "2021/22": {
                liga: { partidos_entrenados: 42, victorias: 17, empates: 17, derrotas: 8 },
                copa: { partidos_entrenados: 1, victorias: 0, empates: 0, derrotas: 1 },
                uefa: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 },
                amistosos: { partidos_entrenados: 5, victorias: 2, empates: 1, derrotas: 2 }
            },
            "2020/21": {
                liga: { partidos_entrenados: 42, victorias: 11, empates: 19, derrotas: 12 },
                copa: { partidos_entrenados: 2, victorias: 1, empates: 0, derrotas: 1 },
                uefa: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 },
                amistosos: { partidos_entrenados: 4, victorias: 1, empates: 3, derrotas: 0 }
            },
            "2019/20": {
                liga: { partidos_entrenados: 14, victorias: 7, empates: 3, derrotas: 4 },
                copa: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 },
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
                liga: { partidos_entrenados: 6, victorias: 1, empates: 3, derrotas: 2 },
                copa: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 },
                uefa: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 },
                amistosos: { partidos_entrenados: 0, victorias: 0, empates: 0, derrotas: 0 }
            }
        }
    }

    
    
};


