// js/players.js

const allPlayersData = {
    "2025-26": {
        "goalkeepers": [
            {
                "src": "https://i.postimg.cc/hvxDQPg1/Aar-n-PNG-3.webp",
                "alt": "Portero 1",
                "number": "13",
                "name": "Aarón",
                "url": "fichajugador.html?player=aaron"
            },
            {
                "src": "https://i.postimg.cc/sgPM0mk4/Moldovan-PNG-2.webp",
                "alt": "Portero 2",
                "number": "1",
                "name": "Moldovan",
                "url": "fichajugador.html?player=moldovan"
            },
            {
                "src": "https://i.postimg.cc/XJqXqbps/Narv-ez-PNG.webp",
                "alt": "Portero 3",
                "number": "26",
                "name": "Narváez",
                "url": "fichajugador.html?player=narvaez"
            }
        ],
        "defenders": [
            {
                "src": "https://i.postimg.cc/qRHtqnX7/Bailly-PNG-2.webp",
                "alt": "Defensa 1",
                "number": "2",
                "name": "Bailly",
                "url": "fichajugador.html?player=bailly"
            },
            {
                "src": "https://i.postimg.cc/15bMB7y7/Rahim-PNG.webp",
                "alt": "Defensa 2",
                "number": "3",
                "name": "Rahim",
                "url": "fichajugador.html?player=rahim"
            },
            {
                "src": "https://i.postimg.cc/V6ScxHbr/David-Costas-PNG.webp",
                "alt": "Defensa 3",
                "number": "4",
                "name": "David Costas",
                "url": "fichajugador.html?player=davidcostas"
            },
            {
                "src": "https://i.postimg.cc/Wb0spKY0/Dani-Calvo-PNG.webp",
                "alt": "Defensa 4",
                "number": "12",
                "name": "Dani Calvo",
                "url": "fichajugador.html?player=danicalvo"
            },
            {
                "src": "https://i.postimg.cc/YqQmcd1s/Luengo-PNG.webp",
                "alt": "Defensa 5",
                "number": "15",
                "name": "Luengo",
                "url": "fichajugador.html?player=luengo"
            },
            {
                "src": "https://i.postimg.cc/ZqxmPdzn/Carmo-PNG-2.webp",
                "alt": "Defensa 6",
                "number": "16",
                "name": "Carmo",
                "url": "fichajugador.html?player=carmo"
            },
            {
                "src": "https://i.postimg.cc/cLHZ7H4B/Nacho-Vidal-PNG-3.webp",
                "alt": "Defensa 7",
                "number": "22",
                "name": "Nacho Vidal",
                "url": "fichajugador.html?player=nachovidal"
            },
            {
                "src": "https://i.postimg.cc/yYdPX4cz/Lucas_PNG.webp",
                "alt": "Defensa 8",
                "number": "24",
                "name": "Lucas",
                "url": "fichajugador.html?player=lucas"
            },
            {
                "src": "https://i.postimg.cc/W4GZMX4Z/Javi-L-pez-PNG.webp",
                "alt": "Defensa 9",
                "number": "25",
                "name": "Javi López",
                "url": "fichajugador.html?player=javilopez"
            },
            {
                "src": "https://i.postimg.cc/XYDdjpzZ/lvaro-Lemos-PNG-3.webp",
                "alt": "Defensa 10",
                "number": "-",
                "name": "Álvaro Lemos",
                "url": "fichajugador.html?player=alvarolemos"
            },
            {
                "src": "https://i.postimg.cc/FsFQmRcX/Omar-Falah-PNG.webp",
                "alt": "Defensa 11",
                "number": "29",
                "name": "Omar Falah",
                "url": "fichajugador.html?player=omarfalah"
            },
            {
                "src": "https://i.postimg.cc/PqJxqywh/Marco-Esteban-PNG.webp",
                "alt": "Defensa 12",
                "number": "30",
                "name": "Marco Esteban",
                "url": "fichajugador.html?player=marcoesteban"
            },
            {
                "src": "https://i.postimg.cc/vHtvs8y9/Adri-Lopes-PNG.webp",
                "alt": "Defensa 13",
                "number": "32",
                "name": "Adri Lopes",
                "url": "fichajugador.html?player=adrilopes"
            },
            {
                "src": "https://i.postimg.cc/j2R8rDDW/Lamine_PNG.webp",
                "alt": "Defensa 14",
                "number": "28",
                "name": "Lamine",
                "url": "fichajugador.html?player=lamine"
            }
        ],
        "midfielders": [
            {
                "src": "https://i.postimg.cc/mDCkCD2g/Alberto-Reina-PNG.webp",
                "alt": "Centrocampista 1",
                "number": "5",
                "name": "Alberto Reina",
                "url": "fichajugador.html?player=albertoreina"
            },
            {
                "src": "https://i.postimg.cc/gjJYNwFR/Sibo-PNG-Alineaci-n.webp",
                "alt": "Centrocampista 2",
                "number": "6",
                "name": "Sibo",
                "url": "fichajugador.html?player=sibo"
            },
            {
                "src": "https://i.postimg.cc/6qQmv7tk/Santi-Cazorla-PNG.webp",
                "alt": "Centrocampista 3",
                "number": "8",
                "name": "Santi Cazorla",
                "url": "fichajugador.html?player=santicazorla"
            },
            {
                "src": "https://i.postimg.cc/R08GqPNz/Colombatto-PNG.webp",
                "alt": "Centrocampista 4",
                "number": "11",
                "name": "Colombatto",
                "url": "fichajugador.html?player=colombatto"
            },
            {
                "src": "https://i.postimg.cc/BbxX2vpC/Ovi_Ejaria_PNG_(2).webp",
                "alt": "Centrocampista 5",
                "number": "14",
                "name": "Ejaria",
                "url": "fichajugador.html?player=ejaria"
            },
            {
                "src": "https://i.postimg.cc/v82kfvkD/Borja-S-nchez-PNG.webp",
                "alt": "Centrocampista 6",
                "number": "16",
                "name": "Borja Sánchez",
                "url": "fichajugador.html?player=borjasanchez"
            },
            {
                "src": "https://i.postimg.cc/rpTPMZ0Z/Brandon_Dominguès_PNG.webp",
                "alt": "Centrocampista 7",
                "number": "17",
                "name": "Brandon Dominguès",
                "url": "fichajugador.html?player=brandondomingues"
            },
            {
                "src": "https://i.postimg.cc/8cTvCWBS/Dendoncker-PNG-2.webp",
                "alt": "Centrocampista 8",
                "number": "20",
                "name": "Dendoncker",
                "url": "fichajugador.html?player=dendoncker"
            },
            {
                "src": "https://i.postimg.cc/9MxvJ3Xw/Brekalo_PNG_(2).webp",
                "alt": "Centrocampista 9",
                "number": "18",
                "name": "Brekalo",
                "url": "fichajugador.html?player=brekalo"
            },
            {
                "src": "https://i.postimg.cc/K8bYhFN6/Ili-PNG.webp",
                "alt": "Centrocampista 10",
                "number": "21",
                "name": "Ilić",
                "url": "fichajugador.html?player=ilic"
            },
            {
                "src": "https://i.postimg.cc/5tWYNTVz/Hassan-PNG-2.webp",
                "alt": "Centrocampista 11",
                "number": "10",
                "name": "Hassan",
                "url": "fichajugador.html?player=hassan"
            },
            {
                "src": "https://i.postimg.cc/dV30nntX/lex-Cardero-PNG.webp",
                "alt": "Centrocampista 12",
                "number": "27",
                "name": "Álex Cardero",
                "url": "fichajugador.html?player=alexcardero"
            },
            {
                "src": "https://i.postimg.cc/KYYs1kft/Cheli-PNG.webp",
                "alt": "Centrocampista 13",
                "number": "31",
                "name": "Cheli",
                "url": "fichajugador.html?player=cheli"
            },
            {
                "src": "https://i.postimg.cc/mgPHhTMt/Diego_Tejón_PNG.webp",
                "alt": "Centrocampista 14",
                "number": "-",
                "name": "Diego Tejón",
                "url": "fichajugador.html?player=diegotejon"
            }
        ],
        "forwards": [
            {
                "src": "https://i.postimg.cc/xCTdXSFX/Ilyas-PNG-3.webp",
                "alt": "Delantero 1",
                "number": "7",
                "name": "Ilyas",
                "url": "fichajugador.html?player=ilyas"
            },
            {
                "src": "https://i.postimg.cc/mZywx37V/Fede-Vi-as-PNG-3.webp",
                "alt": "Delantero 2",
                "number": "9",
                "name": "Fede Viñas",
                "url": "fichajugador.html?player=fedevinas"
            },
            {
                "src": "https://i.postimg.cc/FshL02dV/lex-For-s-PNG.webp",
                "alt": "Delantero 3",
                "number": "19",
                "name": "Álex Forés",
                "url": "fichajugador.html?player=alexfores"
            },
            {
                "src": "https://i.postimg.cc/m2XZ5qk4/Rond-n-PNG-2.webp",
                "alt": "Delantero 4",
                "number": "23",
                "name": "Rondón",
                "url": "fichajugador.html?player=rondon"
            }
        ],
        "coaches": [
            {
                "src": "https://i.postimg.cc/9FK0fKhp/Paunović_(3)_(entrenador).webp",
                "alt": "Entrenador 1",
                "number": "-",
                "name": "Paunović",
                "url": "fichajugador.html?player=paunovic"
            }
        ]
    },
    "2024-25": {
        "goalkeepers": [
            {
                "src": "https://i.postimg.cc/wxsLQXj0/Quentin-Braat-PNG.webp",
                "alt": "Portero 1",
                "number": "1",
                "name": "Quentin Braat",
                "url": "fichajugador.html?player=quentinbraat"
            },
            {
                "src": "https://i.postimg.cc/s2YhzvPR/Aar-n-PNG-Alineaci-n.webp",
                "alt": "Portero 2",
                "number": "13",
                "name": "Aarón",
                "url": "fichajugador.html?player=aaron"
            },
            {
                "src": "https://i.postimg.cc/XJqXqbps/Narv-ez-PNG.webp",
                "alt": "Portero 3",
                "number": "26",
                "name": "Narváez",
                "url": "fichajugador.html?player=narvaez"
            }
        ],
        "defenders": [
            {
                "src": "https://i.postimg.cc/XYDdjpzZ/lvaro-Lemos-PNG-3.webp",
                "alt": "Defensa 1",
                "number": "2",
                "name": "Álvaro Lemos",
                "url": "fichajugador.html?player=alvarolemos"
            },
            {
                "src": "https://i.postimg.cc/15bMB7y7/Rahim-PNG.webp",
                "alt": "Defensa 2",
                "number": "3",
                "name": "Rahim",
                "url": "fichajugador.html?player=rahim"
            },
            {
                "src": "https://i.postimg.cc/V6ScxHbr/David-Costas-PNG.webp",
                "alt": "Defensa 3",
                "number": "4",
                "name": "David Costas",
                "url": "fichajugador.html?player=davidcostas"
            },
            {
                "src": "https://i.postimg.cc/cLHZ7H4B/Nacho-Vidal-PNG-3.webp",
                "alt": "Defensa 4",
                "number": "5",
                "name": "Nacho Vidal",
                "url": "fichajugador.html?player=nachovidal"
            },
            {
                "src": "https://i.postimg.cc/Wb0spKY0/Dani-Calvo-PNG.webp",
                "alt": "Defensa 5",
                "number": "12",
                "name": "Dani Calvo",
                "url": "fichajugador.html?player=danicalvo"
            },
            {
                "src": "https://i.postimg.cc/YqQmcd1s/Luengo-PNG.webp",
                "alt": "Defensa 6",
                "number": "15",
                "name": "Luengo",
                "url": "fichajugador.html?player=luengo"
            },
            {
                "src": "https://i.postimg.cc/yN4Q1Q53/Pomares-PNG.webp",
                "alt": "Defensa 7",
                "number": "21",
                "name": "Pomares",
                "url": "fichajugador.html?player=pomares"
            },
            {
                "src": "https://i.postimg.cc/yYdPX4cz/Lucas-PNG.webp",
                "alt": "Defensa 8",
                "number": "24",
                "name": "Lucas",
                "url": "fichajugador.html?player=lucas"
            },
            {
                "src": "https://i.postimg.cc/mDSQG8f4/Jaime-V-zquez-PNG.webp",
                "alt": "Defensa 9",
                "number": "29",
                "name": "Jaime Vázquez",
                "url": "fichajugador.html?player=jaimevazquez"
            },
            {
                "src": "https://i.postimg.cc/PqJxqywh/Marco-Esteban-PNG.webp",
                "alt": "Defensa 10",
                "number": "30",
                "name": "Marco Esteban",
                "url": "fichajugador.html?player=marcoesteban"
            },
            {
                "src": "https://i.postimg.cc/KYsb7466/Eze-PNG-1.webp",
                "alt": "Defensa 11",
                "number": "31",
                "name": "Eze",
                "url": "fichajugador.html?player=eze"
            },
            {
                "src": "https://i.postimg.cc/vHtvs8y9/Adri-Lopes-PNG.webp",
                "alt": "Defensa 12",
                "number": "32",
                "name": "Adri Lopes",
                "url": "fichajugador.html?player=adrilopes"
            },
            {
                "src": "https://i.postimg.cc/FsFQmRcX/Omar-Falah-PNG.webp",
                "alt": "Defensa 13",
                "number": "35",
                "name": "Omar Falah",
                "url": "fichajugador.html?player=omarfalah"
            },
            {
                "src": "https://i.postimg.cc/j2R8rDDW/Lamine-PNG.webp",
                "alt": "Defensa 14",
                "number": "36",
                "name": "Lamine",
                "url": "fichajugador.html?player=lamine"
            }
        ],
        "midfielders": [
            {
                "src": "https://i.postimg.cc/636yNz5d/Alberto-del-Moral-PNG-Alineaci-n.webp",
                "alt": "Centrocampista 1",
                "number": "5",
                "name": "Alberto del Moral",
                "url": "fichajugador.html?player=albertodelmoral"
            },
            {
                "src": "https://i.postimg.cc/gjJYNwFR/Sibo-PNG-Alineaci-n.webp",
                "alt": "Centrocampista 2",
                "number": "6",
                "name": "Sibo",
                "url": "fichajugador.html?player=sibo"
            },
            {
                "src": "https://i.postimg.cc/GhV54hNf/Sebas-Moyano-PNG.webp",
                "alt": "Centrocampista 3",
                "number": "7",
                "name": "Sebas Moyano",
                "url": "fichajugador.html?player=sebasmoyano"
            },
            {
                "src": "https://i.postimg.cc/6qQmv7tk/Santi-Cazorla-PNG.webp",
                "alt": "Centrocampista 4",
                "number": "8",
                "name": "Santi Cazorla",
                "url": "fichajugador.html?player=santicazorla"
            },
            {
                "src": "https://i.postimg.cc/v82kfvkD/Borja-S-nchez-PNG.webp",
                "alt": "Centrocampista 5",
                "number": "10",
                "name": "Borja Sánchez",
                "url": "fichajugador.html?player=borjasanchez"
            },
            {
                "src": "https://i.postimg.cc/br8zc90Q/Portillo-PNG-3.webp",
                "alt": "Centrocampista 6",
                "number": "10",
                "name": "Portillo",
                "url": "fichajugador.html?player=portillo"
            },
            {
                "src": "https://i.postimg.cc/R08GqPNz/Colombatto-PNG.webp",
                "alt": "Centrocampista 7",
                "number": "11",
                "name": "Colombatto",
                "url": "fichajugador.html?player=colombatto"
            },
            {
                "src": "https://i.postimg.cc/Z5nr38kY/De-La-Hoz-PNG-3.webp",
                "alt": "Centrocampista 8",
                "number": "17",
                "name": "De La Hoz",
                "url": "fichajugador.html?player=delahoz"
            },
            {
                "src": "https://i.postimg.cc/SxkLgnn3/Paulino-PNG.webp",
                "alt": "Centrocampista 9",
                "number": "18",
                "name": "Paulino",
                "url": "fichajugador.html?player=paulino"
            },
            {
                "src": "https://i.postimg.cc/HLCvtvT4/Seoane-PNG.webp",
                "alt": "Centrocampista 10",
                "number": "20",
                "name": "Seoane",
                "url": "fichajugador.html?player=seoane"
            },
            {
                "src": "https://i.postimg.cc/gcwFM5v3/Carlos-Dotor-PNG.webp",
                "alt": "Centrocampista 11",
                "number": "22",
                "name": "Dotor",
                "url": "fichajugador.html?player=dotor"
            },
            {
                "src": "https://i.postimg.cc/5tWYNTVz/Hassan-PNG-2.webp",
                "alt": "Centrocampista 12",
                "number": "23",
                "name": "Hassan",
                "url": "fichajugador.html?player=hassan"
            },
            {
                "src": "https://i.postimg.cc/dV30nntX/lex-Cardero-PNG.webp",
                "alt": "Centrocampista 13",
                "number": "27",
                "name": "Álex Cardero",
                "url": "fichajugador.html?player=alexcardero"
            },
            {
                "src": "https://i.postimg.cc/V6J7fxgw/Valdera_PNG.webp",
                "alt": "Centrocampista 14",
                "number": "33",
                "name": "Valdera",
                "url": "fichajugador.html?player=valdera"
            },
            {
                "src": "https://i.postimg.cc/mgPHhTMt/Diego-Tej-n-PNG.webp",
                "alt": "Centrocampista 15",
                "number": "34",
                "name": "Diego Tejón",
                "url": "fichajugador.html?player=diegotejon"
            },
            {
                "src": "https://i.postimg.cc/Y0FPt53V/Castri-PNG.webp",
                "alt": "Centrocampista 16",
                "number": "-",
                "name": "Castri",
                "url": "fichajugador.html?player=castri"
            }
        ],
        "forwards": [
            {
                "src": "https://i.postimg.cc/KcPTkZzY/Alem-o-PNG.webp",
                "alt": "Delantero 1",
                "number": "9",
                "name": "Alemão",
                "url": "fichajugador.html?player=alemao"
            },
            {
                "src": "https://i.postimg.cc/vTn7N9LF/Paraschiv-PNG-3.webp",
                "alt": "Delantero 2",
                "number": "14",
                "name": "Paraschiv",
                "url": "fichajugador.html?player=paraschiv"
            },
            {
                "src": "https://i.postimg.cc/xCTdXSFX/Ilyas-PNG-3.webp",
                "alt": "Delantero 3",
                "number": "16",
                "name": "Ilyas",
                "url": "fichajugador.html?player=ilyas"
            },
            {
                "src": "https://i.postimg.cc/R0tYw3y8/Masca-PNG.webp",
                "alt": "Delantero 4",
                "number": "17",
                "name": "Masca",
                "url": "fichajugador.html?player=masca"
            },
            {
                "src": "https://i.postimg.cc/6pm4JqHM/lex-Mill-n-PNG.webp",
                "alt": "Delantero 5",
                "number": "19",
                "name": "Álex Millán",
                "url": "fichajugador.html?player=alexmillan"
            },
            {
                "src": "https://i.postimg.cc/mZywx37V/Fede-Vi-as-PNG-3.webp",
                "alt": "Delantero 6",
                "number": "19",
                "name": "Fede Viñas",
                "url": "fichajugador.html?player=fedevinas"
            },
            {
                "src": "https://i.postimg.cc/0Q0PdXFL/Santi-Migu-lez-PNG.webp",
                "alt": "Delantero 7",
                "number": "28",
                "name": "Santi Miguélez",
                "url": "fichajugador.html?player=santimiguelez"
            }
        ],
        "coaches": [
            {
                "src": "https://i.postimg.cc/fLnY0kQ8/Javi-Calleja-entrenador-PNG.webp",
                "alt": "Entrenador 1",
                "number": "-",
                "name": "Javi Calleja",
                "url": "fichajugador.html?player=javicalleja"
            },
            {
                "src": "https://i.postimg.cc/9FK0fKhp/Paunović_(3)_(entrenador).webp",
                "alt": "Entrenador 2",
                "number": "-",
                "name": "Paunović",
                "url": "fichajugador.html?player=paunovic"
            }
        ]
    },
    "2023-24": {
        "goalkeepers": [
            {
                "src": "https://i.postimg.cc/wxsLQXj0/Quentin-Braat-PNG.webp",
                "alt": "Portero 1",
                "number": "1",
                "name": "Quentin Braat",
                "url": "fichajugador.html?player=quentinbraat"
            },
            {
                "src": "https://i.postimg.cc/mDmMpjF5/Leo-Rom-n-PNG.webp",
                "alt": "Portero 2",
                "number": "31",
                "name": "Leo Román",
                "url": "fichajugador.html?player=leoroman"
            },
            {
                "src": "https://i.postimg.cc/yxJJQHKD/Marco-PNG.webp",
                "alt": "Portero 3",
                "number": "-",
                "name": "Marco",
                "url": "fichajugador.html?player=marco"
            },
            {
                "src": "https://i.postimg.cc/tRh7g2TQ/Victor-Egboh-PNG.webp",
                "alt": "Portero 4",
                "number": "-",
                "name": "Victor Egboh",
                "url": "fichajugador.html?player=victoregboh"
            }
        ],
        "defenders": [
            {
                "src": "https://i.postimg.cc/LsWsgPtP/Mario-Hern-ndez-PNG.webp",
                "alt": "Defensa 1",
                "number": "2",
                "name": "Mario Hernández",
                "url": "fichajugador.html?player=mariohernandez"
            },
            {
                "src": "https://i.postimg.cc/SQvGQ1YQ/Rodri-Tar-n-PNG.webp",
                "alt": "Defensa 2",
                "number": "3",
                "name": "Rodri Tarín",
                "url": "fichajugador.html?player=rodritarin"
            },
            {
                "src": "https://i.postimg.cc/V6ScxHbr/David-Costas-PNG.webp",
                "alt": "Defensa 3",
                "number": "4",
                "name": "David Costas",
                "url": "fichajugador.html?player=davidcostas"
            },
            {
                "src": "https://i.postimg.cc/Wb0spKY0/Dani-Calvo-PNG.webp",
                "alt": "Defensa 4",
                "number": "12",
                "name": "Dani Calvo",
                "url": "fichajugador.html?player=danicalvo"
            },
            {
                "src": "https://i.postimg.cc/YqQmcd1s/Luengo-PNG.webp",
                "alt": "Defensa 5",
                "number": "15",
                "name": "Luengo",
                "url": "fichajugador.html?player=luengo"
            },
            {
                "src": "https://i.postimg.cc/yN4Q1Q53/Pomares-PNG.webp",
                "alt": "Defensa 6",
                "number": "21",
                "name": "Pomares",
                "url": "fichajugador.html?player=pomares"
            },
            {
                "src": "https://i.postimg.cc/7LbTGw25/Abel-Bretones-PNG.webp",
                "alt": "Defensa 7",
                "number": "23",
                "name": "Abel Bretones",
                "url": "fichajugador.html?player=abelbretones"
            },
            {
                "src": "https://i.postimg.cc/yYdPX4cz/Lucas-PNG.webp",
                "alt": "Defensa 8",
                "number": "24",
                "name": "Lucas",
                "url": "fichajugador.html?player=lucas"
            },
            {
                "src": "https://i.postimg.cc/KjdChGhC/Charbel-PNG.webp",
                "alt": "Defensa 9",
                "number": "29",
                "name": "Charbel",
                "url": "fichajugador.html?player=charbel"
            },
            {
                "src": "https://i.postimg.cc/PqJxqywh/Marco-Esteban-PNG.webp",
                "alt": "Defensa 10",
                "number": "30",
                "name": "Marco Esteban",
                "url": "fichajugador.html?player=marcoesteban"
            },
            {
                "src": "https://i.postimg.cc/fbJ7mx9j/Aimar-Collante-PNG.webp",
                "alt": "Defensa 11",
                "number": "33",
                "name": "Aimar Collante",
                "url": "fichajugador.html?player=aimarcollante"
            },
            {
                "src": "https://i.postimg.cc/mDSQG8f4/Jaime-V-zquez-PNG.webp",
                "alt": "Defensa 12",
                "number": "35",
                "name": "Jaime Vázquez",
                "url": "fichajugador.html?player=jaimevazquez"
            },
            {
                "src": "https://i.postimg.cc/2SMp47tC/Osky-PNG.webp",
                "alt": "Defensa 13",
                "number": "-",
                "name": "Osky",
                "url": "fichajugador.html?player=osky"
            }
        ],
        "midfielders": [
            {
                "src": "https://i.postimg.cc/ydshDwst/Luismi-casco-PNG.webp",
                "alt": "Centrocampista 1",
                "number": "5",
                "name": "Luismi",
                "url": "fichajugador.html?player=luismi"
            },
            {
                "src": "https://i.postimg.cc/qMxTnKsF/Jimmy-PNG.webp",
                "alt": "Centrocampista 2",
                "number": "6",
                "name": "Jimmy",
                "url": "fichajugador.html?player=jimmy"
            },
            {
                "src": "https://i.postimg.cc/3rDLPHWC/Viti-PNG.webp",
                "alt": "Centrocampista 3",
                "number": "7",
                "name": "Viti",
                "url": "fichajugador.html?player=viti"
            },
            {
                "src": "https://i.postimg.cc/sxFrP9Hk/Javi-Mier-PNG.webp",
                "alt": "Centrocampista 4",
                "number": "8",
                "name": "Javi Mier",
                "url": "fichajugador.html?player=javimier"
            },
            {
                "src": "https://i.postimg.cc/6qQmv7tk/Santi-Cazorla-PNG.webp",
                "alt": "Centrocampista 5",
                "number": "8",
                "name": "Santi Cazorla",
                "url": "fichajugador.html?player=santicazorla"
            },
            {
                "src": "https://i.postimg.cc/zfq09L69/Camarasa-PNG.webp",
                "alt": "Centrocampista 6",
                "number": "10",
                "name": "Camarasa",
                "url": "fichajugador.html?player=camarasa"
            },
            {
                "src": "https://i.postimg.cc/j51VxQrW/Hugo-Rama-PNG.webp",
                "alt": "Centrocampista 7",
                "number": "11",
                "name": "Hugo Rama",
                "url": "fichajugador.html?player=hugorama"
            },
            {
                "src": "https://i.postimg.cc/R08GqPNz/Colombatto-PNG.webp",
                "alt": "Centrocampista 8",
                "number": "11",
                "name": "Colombatto",
                "url": "fichajugador.html?player=colombatto"
            },
            {
                "src": "https://i.postimg.cc/Tw1MvNBM/Homenchenko-PNG.webp",
                "alt": "Centrocampista 9",
                "number": "13",
                "name": "Homenchenko",
                "url": "fichajugador.html?player=homenchenko"
            },
            {
                "src": "https://i.postimg.cc/HLCvtvT4/Seoane-PNG.webp",
                "alt": "Centrocampista 10",
                "number": "16",
                "name": "Seoane",
                "url": "fichajugador.html?player=seoane"
            },
            {
                "src": "https://i.postimg.cc/GhV54hNf/Sebas-Moyano-PNG.webp",
                "alt": "Centrocampista 11",
                "number": "17",
                "name": "Sebas Moyano",
                "url": "fichajugador.html?player=sebasmoyano"
            },
            {
                "src": "https://i.postimg.cc/SxkLgnn3/Paulino-PNG.webp",
                "alt": "Centrocampista 12",
                "number": "18",
                "name": "Paulino",
                "url": "fichajugador.html?player=paulino"
            },
            {
                "src": "https://i.postimg.cc/4dQDtkt9/Romario-Ibarra-PNG.webp",
                "alt": "Centrocampista 13",
                "number": "22",
                "name": "Romario Ibarra",
                "url": "fichajugador.html?player=romarioibarra"
            },
            {
                "src": "https://i.postimg.cc/v82kfvkD/Borja-S-nchez-PNG.webp",
                "alt": "Centrocampista 14",
                "number": "25",
                "name": "Borja Sánchez",
                "url": "fichajugador.html?player=borjasanchez"
            },
            {
                "src": "https://i.postimg.cc/dV30nntX/lex-Cardero-PNG.webp",
                "alt": "Centrocampista 15",
                "number": "33",
                "name": "Álex Cardero",
                "url": "fichajugador.html?player=alexcardero"
            },
            {
                "src": "https://i.postimg.cc/d3P8M3Vb/Yayo-PNG.webp",
                "alt": "Centrocampista 16",
                "number": "34",
                "name": "Yayo",
                "url": "fichajugador.html?player=yayo"
            },
            {
                "src": "https://i.postimg.cc/c44YyRL7/Diego-Men-ndez-Dieguito-PNG.webp",
                "alt": "Centrocampista 17",
                "number": "36",
                "name": "Dieguito",
                "url": "fichajugador.html?player=dieguito"
            }
        ],
        "forwards": [
            {
                "src": "https://i.postimg.cc/3rfTZGWf/Borja-Bast-n-PNG.webp",
                "alt": "Delantero 1",
                "number": "9",
                "name": "Borja Bastón",
                "url": "fichajugador.html?player=borjabaston"
            },
            {
                "src": "https://i.postimg.cc/KcPTkZzY/Alem-o-PNG.webp",
                "alt": "Delantero 2",
                "number": "14",
                "name": "Alemão ",
                "url": "fichajugador.html?player=alemao"
            },
            {
                "src": "https://i.postimg.cc/6pm4JqHM/lex-Mill-n-PNG.webp",
                "alt": "Delantero 3",
                "number": "19",
                "name": "Álex Millán",
                "url": "fichajugador.html?player=alexmillan"
            },
            {
                "src": "https://i.postimg.cc/R0tYw3y8/Masca-PNG.webp",
                "alt": "Delantero 4",
                "number": "20",
                "name": "Masca",
                "url": "fichajugador.html?player=masca"
            },
            {
                "src": "https://i.postimg.cc/R02PFM0R/Dubasin-PNG.webp",
                "alt": "Delantero 5",
                "number": "22",
                "name": "Dubasin",
                "url": "fichajugador.html?player=dubasin"
            },
            {
                "src": "https://i.postimg.cc/TYQCbjwh/Enol-PNG.webp",
                "alt": "Delantero 6",
                "number": "27",
                "name": "Enol",
                "url": "fichajugador.html?player=enol"
            },
            {
                "src": "https://i.postimg.cc/2y305Pxm/Ses-PNG.webp",
                "alt": "Delantero 7",
                "number": "28",
                "name": "Sesé",
                "url": "fichajugador.html?player=sese"
            },
            {
                "src": "https://i.postimg.cc/kXjLCPWj/Mario-Fuente-PNG.webp",
                "alt": "Delantero 8",
                "number": "-",
                "name": "Mario Fuente",
                "url": "fichajugador.html?player=mariofuente"
            }
        ],
        "coaches": [
            {
                "src": "https://i.postimg.cc/dQZzYx5v/lvaro-Cervera-entrenador-PNG.webp",
                "alt": "Entrenador 1",
                "number": "-",
                "name": "Álvaro Cervera",
                "url": "fichajugador.html?player=alvarocervera"
            },
            {
                "src": "https://i.postimg.cc/9fT7VVwZ/Luis-Carri-n-entrenador-PNG.webp",
                "alt": "Entrenador 2",
                "number": "-",
                "name": "Luis Carrión",
                "url": "fichajugador.html?player=luiscarrion"
            }
        ]
    },

    "2022-23": {
        "goalkeepers": [
            {
                "src": "https://i.postimg.cc/wxsLQXj0/Quentin-Braat-PNG.webp",
                "alt": "Portero 1",
                "number": "1",
                "name": "Quentin Braat",
                "url": "fichajugador.html?player=quentinbraat"
            },
            {
                "src": "https://i.postimg.cc/FK81Y63m/Tomeu-Nadal-PNG.webp",
                "alt": "Portero 2",
                "number": "13",
                "name": "Tomeu Nadal",
                "url": "fichajugador.html?player=tomeunadal"
            },
            {
                "src": "https://i.postimg.cc/yxJJQHKD/Marco-PNG.webp",
                "alt": "Portero 3",
                "number": "26",
                "name": "Marco",
                "url": "fichajugador.html?player=marco"
            }
        ],
        "defenders": [
            {
                "src": "https://i.postimg.cc/Wzwj8qkX/Miguel-n-PNG.webp",
                "alt": "Defensa 1",
                "number": "2",
                "name": "Miguelón",
                "url": "fichajugador.html?player=miguelon"
            },
            {
                "src": "https://i.postimg.cc/SQvGQ1YQ/Rodri-Tar-n-PNG.webp",
                "alt": "Defensa 2",
                "number": "3",
                "name": "Rodri Tarín",
                "url": "fichajugador.html?player=rodritarin"
            },
            {
                "src": "https://i.postimg.cc/V6ScxHbr/David-Costas-PNG.webp",
                "alt": "Defensa 3",
                "number": "4",
                "name": "David Costas",
                "url": "fichajugador.html?player=davidcostas"
            },
            {
                "src": "https://i.postimg.cc/Wb0spKY0/Dani-Calvo-PNG.webp",
                "alt": "Defensa 4",
                "number": "12",
                "name": "Dani Calvo",
                "url": "fichajugador.html?player=danicalvo"
            },
            {
                "src": "https://i.postimg.cc/YqQmcd1s/Luengo-PNG.webp",
                "alt": "Defensa 5",
                "number": "15",
                "name": "Luengo",
                "url": "fichajugador.html?player=luengo"
            },
            {
                "src": "https://i.postimg.cc/7Pg33Pfc/Alonso-Aceves-PNG.webp",
                "alt": "Defensa 6",
                "number": "17",
                "name": "Alonso Aceves",
                "url": "fichajugador.html?player=alonsoaceves"
            },
            {
                "src": "https://i.postimg.cc/yN4Q1Q53/Pomares-PNG.webp",
                "alt": "Defensa 7",
                "number": "21",
                "name": "Pomares",
                "url": "fichajugador.html?player=pomares"
            },
            {
                "src": "https://i.postimg.cc/dthTWq1w/Jorge-Mier-PNG.webp",
                "alt": "Defensa 8",
                "number": "22",
                "name": "Jorge Mier",
                "url": "fichajugador.html?player=jorgemier"
            },
            {
                "src": "https://i.postimg.cc/4yqnC9dZ/Juanfran-PNG.webp",
                "alt": "Defensa 9",
                "number": "22",
                "name": "Juanfran",
                "url": "fichajugador.html?player=juanfran"
            },
            {
                "src": "https://i.postimg.cc/yYdPX4cz/Lucas-PNG.webp",
                "alt": "Defensa 10",
                "number": "24",
                "name": "Lucas",
                "url": "fichajugador.html?player=lucas"
            },
            {
                "src": "https://i.postimg.cc/7LbTGw25/Abel-Bretones-PNG.webp",
                "alt": "Defensa 11",
                "number": "28/2",
                "name": "Abel Bretones",
                "url": "fichajugador.html?player=abelbretones"
            },
            {
                "src": "https://i.postimg.cc/tCJFL3r0/Javi-Moreno-PNG.webp",
                "alt": "Defensa 12",
                "number": "29",
                "name": "Javi Moreno",
                "url": "fichajugador.html?player=javimoreno"
            },
            {
                "src": "https://i.postimg.cc/1RnqBm4P/Lucas-Laso-PNG.webp",
                "alt": "Defensa 13",
                "number": "30",
                "name": "Lucas Laso",
                "url": "fichajugador.html?player=lucaslaso"
            },
            {
                "src": "https://i.postimg.cc/2SMp47tC/Osky-PNG.webp",
                "alt": "Defensa 14",
                "number": "32",
                "name": "Osky",
                "url": "fichajugador.html?player=osky"
            }
        ],
        "midfielders": [
            {
                "src": "https://i.postimg.cc/ydshDwst/Luismi-casco-PNG.webp",
                "alt": "Centrocampista 1",
                "number": "5",
                "name": "Luismi",
                "url": "fichajugador.html?player=luismi"
            },
            {
                "src": "https://i.postimg.cc/sxFrP9Hk/Javi-Mier-PNG.webp",
                "alt": "Centrocampista 2",
                "number": "6",
                "name": "Javi Mier",
                "url": "fichajugador.html?player=javimier"
            },
            {
                "src": "https://i.postimg.cc/3rDLPHWC/Viti-PNG.webp",
                "alt": "Centrocampista 3",
                "number": "7",
                "name": "Viti",
                "url": "fichajugador.html?player=viti"
            },
            {
                "src": "https://i.postimg.cc/854YcdQd/Sangalli-PNG.webp",
                "alt": "Centrocampista 4",
                "number": "8",
                "name": "Sangalli",
                "url": "fichajugador.html?player=sangalli"
            },
            {
                "src": "https://i.postimg.cc/v82kfvkD/Borja-S-nchez-PNG.webp",
                "alt": "Centrocampista 5",
                "number": "10",
                "name": "Borja Sánchez",
                "url": "fichajugador.html?player=borjasanchez"
            },
            {
                "src": "https://i.postimg.cc/y6DZjFvk/Jirka-PNG.webp",
                "alt": "Centrocampista 6",
                "number": "11",
                "name": "Jirka",
                "url": "fichajugador.html?player=jirka"
            },
            {
                "src": "https://i.postimg.cc/MGbVJdVD/Marcelo-Flores-PNG.webp",
                "alt": "Centrocampista 7",
                "number": "11",
                "name": "Marcelo Flores",
                "url": "fichajugador.html?player=marceloflores"
            },
            {
                "src": "https://i.postimg.cc/qMxTnKsF/Jimmy-PNG.webp",
                "alt": "Centrocampista 8",
                "number": "14",
                "name": "Jimmy",
                "url": "fichajugador.html?player=jimmy"
            },
            {
                "src": "https://i.postimg.cc/zfq09L69/Camarasa-PNG.webp",
                "alt": "Centrocampista 9",
                "number": "16",
                "name": "Camarasa",
                "url": "fichajugador.html?player=camarasa"
            },
            {
                "src": "https://i.postimg.cc/Z5QDyYMg/Koba-Le-n-PNG.webp",
                "alt": "Centrocampista 10",
                "number": "18",
                "name": "Koba Leïn",
                "url": "fichajugador.html?player=kobalein"
            },
            {
                "src": "https://i.postimg.cc/MKQc898Q/Montoro-PNG.webp",
                "alt": "Centrocampista 11",
                "number": "19",
                "name": "Montoro",
                "url": "fichajugador.html?player=montoro"
            },
            {
                "src": "https://i.postimg.cc/j51VxQrW/Hugo-Rama-PNG.webp",
                "alt": "Centrocampista 12",
                "number": "20",
                "name": "Hugo Rama",
                "url": "fichajugador.html?player=hugorama"
            },
            {
                "src": "https://i.postimg.cc/dV30nntX/lex-Cardero-PNG.webp",
                "alt": "Centrocampista 13",
                "number": "27",
                "name": "Álex Cardero",
                "url": "fichajugador.html?player=alexcardero"
            },
            {
                "src": "https://i.postimg.cc/PJF1FJYn/Mangel-PNG.webp",
                "alt": "Centrocampista 14",
                "number": "31",
                "name": "Mángel",
                "url": "fichajugador.html?player=mangel"
            },
            {
                "src": "https://i.postimg.cc/d3P8M3Vb/Yayo-PNG.webp",
                "alt": "Centrocampista 15",
                "number": "34",
                "name": "Yayo",
                "url": "fichajugador.html?player=yayo"
            },
            {
                "src": "https://i.postimg.cc/K85pJrj6/V-ctor-Blanco-PNG.webp",
                "alt": "Centrocampista 16",
                "number": "36",
                "name": "Víctor Blanco",
                "url": "fichajugador.html?player=victorblanco"
            },
            {
                "src": "https://i.postimg.cc/9FZGBm0K/Nnoshiri-PNG.webp",
                "alt": "Centrocampista 17",
                "number": "-",
                "name": "Nnoshiri",
                "url": "fichajugador.html?player=nnoshiri"
            }
        ],
        "forwards": [
            {
                "src": "https://i.postimg.cc/858qYdLN/Manu-Vallejo-PNG.webp",
                "alt": "Delantero 1",
                "number": "8",
                "name": "Manu Vallejo",
                "url": "fichajugador.html?player=manuvallejo"
            },
            {
                "src": "https://i.postimg.cc/3rfTZGWf/Borja-Bast-n-PNG.webp",
                "alt": "Delantero 2",
                "number": "9",
                "name": "Borja Bastón",
                "url": "fichajugador.html?player=borjabaston"
            },
            {
                "src": "https://i.postimg.cc/Sx688kVd/Obeng-PNG.webp",
                "alt": "Delantero 3",
                "number": "16",
                "name": "Obeng",
                "url": "fichajugador.html?player=obeng"
            },
            {
                "src": "https://i.postimg.cc/8PDTcGJN/Leo-Sequeira-PNG.webp",
                "alt": "Delantero 4",
                "number": "17",
                "name": "Leo Sequeira",
                "url": "fichajugador.html?player=leosequeira"
            },
            {
                "src": "https://i.postimg.cc/tJgQdqhx/Sergi-Enrich-PNG.webp",
                "alt": "Delantero 5",
                "number": "23",
                "name": "Sergi Enrich",
                "url": "fichajugador.html?player=sergienrich"
            },
            {
                "src": "https://i.postimg.cc/kXjLCPWj/Mario-Fuente-PNG.webp",
                "alt": "Delantero 6",
                "number": "33",
                "name": "Mario Fuente",
                "url": "fichajugador.html?player=mariofuente"
            },
            {
                "src": "https://i.postimg.cc/2y305Pxm/Ses-PNG.webp",
                "alt": "Delantero 7",
                "number": "37",
                "name": "Sesé",
                "url": "fichajugador.html?player=sese"
            },
            {
                "src": "https://i.postimg.cc/R0tYw3y8/Masca-PNG.webp",
                "alt": "Delantero 8",
                "number": "38",
                "name": "Masca",
                "url": "fichajugador.html?player=masca"
            },
            {
                "src": "https://i.postimg.cc/TYQCbjwh/Enol-PNG.webp",
                "alt": "Delantero 9",
                "number": "39",
                "name": "Enol",
                "url": "fichajugador.html?player=enol"
            },
            {
                "src": "https://i.postimg.cc/qM9XymrJ/Moro-PNG.webp",
                "alt": "Delantero 10",
                "number": "40",
                "name": "Moro",
                "url": "fichajugador.html?player=moro"
            }
        ],
        "coaches": [
            {
                "src": "https://i.postimg.cc/L6M0M6qB/Bolo-entrenador-PNG.webp",
                "alt": "Entrenador 1",
                "number": "-",
                "name": "Bolo",
                "url": "fichajugador.html?player=bolo"
            },
            {
                "src": "https://i.postimg.cc/dQZzYx5v/lvaro-Cervera-entrenador-PNG.webp",
                "alt": "Entrenador 2",
                "number": "-",
                "name": "Álvaro Cervera",
                "url": "fichajugador.html?player=alvarocervera"
            }
        ]
    },

    "2021-22": {
        "goalkeepers": [
            {
                "src": "https://i.postimg.cc/pXXcdcZp/Femen-as-PNG.webp",
                "alt": "Portero 1",
                "number": "1",
                "name": "Femenías",
                "url": "fichajugador.html?player=femenias"
            },
            {
                "src": "https://i.postimg.cc/FK81Y63m/Tomeu-Nadal-PNG.webp",
                "alt": "Portero 2",
                "number": "13",
                "name": "Tomeu Nadal",
                "url": "fichajugador.html?player=tomeunadal"
            },
            {
                "src": "https://i.postimg.cc/GhnjCHJn/resized-Berto-H-rreo-PNG.png",
                "alt": "Portero 3",
                "number": "26",
                "name": "Berto Hórreo",
                "url": "fichajugador.html?player=bertohorreo"
            }
        ],
        "defenders": [
            {
                "src": "https://i.postimg.cc/5y3pnfNw/Grippo-PNG.webp",
                "alt": "Defensa 1",
                "number": "2",
                "name": "Grippo",
                "url": "fichajugador.html?player=grippo"
            },
            {
                "src": "https://i.postimg.cc/VkT0y2Jn/Arribas-PNG.webp",
                "alt": "Defensa 2",
                "number": "3",
                "name": "Arribas",
                "url": "fichajugador.html?player=arribas"
            },
            {
                "src": "https://i.postimg.cc/SQvGQ1YQ/Rodri-Tar-n-PNG.webp",
                "alt": "Defensa 3",
                "number": "3",
                "name": "Rodri Tarín",
                "url": "fichajugador.html?player=rodritarin"
            },
            {
                "src": "https://i.postimg.cc/V6ScxHbr/David-Costas-PNG.webp",
                "alt": "Defensa 4",
                "number": "4",
                "name": "David Costas",
                "url": "fichajugador.html?player=davidcostas"
            },
            {
                "src": "https://i.postimg.cc/Wb0spKY0/Dani-Calvo-PNG.webp",
                "alt": "Defensa 5",
                "number": "12",
                "name": "Dani Calvo",
                "url": "fichajugador.html?player=danicalvo"
            },
            {
                "src": "https://i.postimg.cc/0NDQTjR1/Bola-o-PNG.webp",
                "alt": "Defensa 6",
                "number": "18",
                "name": "Bolaño",
                "url": "fichajugador.html?player=bolano"
            },
            {
                "src": "https://i.postimg.cc/SNHmm4GS/Carlos-Isaac-PNG.webp",
                "alt": "Defensa 7",
                "number": "21",
                "name": "Carlos Isaac",
                "url": "fichajugador.html?player=carlosisaac"
            },
            {
                "src": "https://i.postimg.cc/mkXpTbfT/Pierre-Cornud-PNG.webp",
                "alt": "Defensa 8",
                "number": "22",
                "name": "Pierre Cornud",
                "url": "fichajugador.html?player=pierrecornud"
            },
            {
                "src": "https://i.postimg.cc/tC99TkKf/Mossa-PNG.webp",
                "alt": "Defensa 9",
                "number": "23",
                "name": "Mossa",
                "url": "fichajugador.html?player=mossa"
            },
            {
                "src": "https://i.postimg.cc/yYdPX4cz/Lucas-PNG.webp",
                "alt": "Defensa 10",
                "number": "24",
                "name": "Lucas",
                "url": "fichajugador.html?player=lucas"
            },
            {
                "src": "https://i.postimg.cc/tCJFL3r0/Javi-Moreno-PNG.webp",
                "alt": "Defensa 11",
                "number": "28",
                "name": "Javi Moreno",
                "url": "fichajugador.html?player=javimoreno"
            },
            {
                "src": "https://i.postimg.cc/CxD7QC1h/Ren-P-rez-PNG.webp",
                "alt": "Defensa 12",
                "number": "32",
                "name": "René Pérez",
                "url": "fichajugador.html?player=reneperez"
            },
            {
                "src": "https://i.postimg.cc/dthTWq1w/Jorge-Mier-PNG.webp",
                "alt": "Defensa 13",
                "number": "-",
                "name": "Jorge Mier",
                "url": "fichajugador.html?player=jorgemier"
            },
            {
                "src": "https://i.postimg.cc/1RnqBm4P/Lucas-Laso-PNG.webp",
                "alt": "Defensa 14",
                "number": "-",
                "name": "Lucas Laso",
                "url": "fichajugador.html?player=lucaslaso"
            },
            {
                "src": "https://i.postimg.cc/2SMp47tC/Osky_PNG.webp",
                "alt": "Defensa 15",
                "number": "-",
                "name": "Osky",
                "url": "fichajugador.html?player=osky"
            }
        ],
        "midfielders": [
            {
                "src": "https://i.postimg.cc/j51VxQrW/Hugo-Rama-PNG.webp",
                "alt": "Centrocampista 1",
                "number": "2",
                "name": "Hugo Rama",
                "url": "fichajugador.html?player=hugorama"
            },
            {
                "src": "https://i.postimg.cc/ydshDwst/Luismi-casco-PNG.webp",
                "alt": "Centrocampista 2",
                "number": "5",
                "name": "Luismi",
                "url": "fichajugador.html?player=luismi"
            },
            {
                "src": "https://i.postimg.cc/sxFrP9Hk/Javi-Mier-PNG.webp",
                "alt": "Centrocampista 3",
                "number": "6",
                "name": "Javi Mier",
                "url": "fichajugador.html?player=javimier"
            },
            {
                "src": "https://i.postimg.cc/3rDLPHWC/Viti-PNG.webp",
                "alt": "Centrocampista 4",
                "number": "7",
                "name": "Viti",
                "url": "fichajugador.html?player=viti"
            },
            {
                "src": "https://i.postimg.cc/854YcdQd/Sangalli-PNG.webp",
                "alt": "Centrocampista 5",
                "number": "8",
                "name": "Sangalli",
                "url": "fichajugador.html?player=sangalli"
            },
            {
                "src": "https://i.postimg.cc/v82kfvkD/Borja-S-nchez-PNG.webp",
                "alt": "Centrocampista 6",
                "number": "10",
                "name": "Borja Sánchez",
                "url": "fichajugador.html?player=borjasanchez"
            },
            {
                "src": "https://i.postimg.cc/y6DZjFvk/Jirka-PNG.webp",
                "alt": "Centrocampista 7",
                "number": "11",
                "name": "Jirka",
                "url": "fichajugador.html?player=jirka"
            },
            {
                "src": "https://i.postimg.cc/qMxTnKsF/Jimmy-PNG.webp",
                "alt": "Centrocampista 8",
                "number": "14",
                "name": "Jimmy",
                "url": "fichajugador.html?player=jimmy"
            },
            {
                "src": "https://i.postimg.cc/3RSSjKLz/Brugman-PNG.webp",
                "alt": "Centrocampista 9",
                "number": "15",
                "name": "Brugman",
                "url": "fichajugador.html?player=brugman"
            },
            {
                "src": "https://i.postimg.cc/ZRNkqvYV/Joni-Montiel-PNG.webp",
                "alt": "Centrocampista 10",
                "number": "17",
                "name": "Joni Montiel",
                "url": "fichajugador.html?player=jonimontiel"
            },
            {
                "src": "https://i.postimg.cc/XJ9Vzz5j/Pombo-PNG.webp",
                "alt": "Centrocampista 11",
                "number": "20",
                "name": "Pombo",
                "url": "fichajugador.html?player=pombo"
            },
            {
                "src": "https://i.postimg.cc/dV30nntX/lex-Cardero-PNG.webp",
                "alt": "Centrocampista 12",
                "number": "27",
                "name": "Álex Cardero",
                "url": "fichajugador.html?player=alexcardero"
            },
            {
                "src": "https://i.postimg.cc/d3P8M3Vb/Yayo-PNG.webp",
                "alt": "Centrocampista 13",
                "number": "31",
                "name": "Yayo",
                "url": "fichajugador.html?player=yayo"
            },
            {
                "src": "https://i.postimg.cc/5tZGD95v/Joselu-PNG.webp",
                "alt": "Centrocampista 14",
                "number": "33",
                "name": "Joselu",
                "url": "fichajugador.html?player=joselu"
            },
            {
                "src": "https://i.postimg.cc/PJF1FJYn/Mangel-PNG.webp",
                "alt": "Centrocampista 15",
                "number": "37",
                "name": "Mángel",
                "url": "fichajugador.html?player=mangel"
            },
            {
                "src": "https://i.postimg.cc/prBDQkXr/David-Iglesias-PNG.webp",
                "alt": "Centrocampista 16",
                "number": "-",
                "name": "David Iglesias",
                "url": "fichajugador.html?player=davidiglesias"
            },
            {
                "src": "https://i.postimg.cc/sXgyDgQL/Guille-Bernab-u-PNG.webp",
                "alt": "Centrocampista 17",
                "number": "-",
                "name": "Guille Bernabéu",
                "url": "fichajugador.html?player=guillebernabeu"
            }
        ],
        "forwards": [
            {
                "src": "https://i.postimg.cc/3rfTZGWf/Borja-Bast-n-PNG.webp",
                "alt": "Delantero 1",
                "number": "9",
                "name": "Borja Bastón",
                "url": "fichajugador.html?player=borjabaston"
            },
            {
                "src": "https://i.postimg.cc/Sx688kVd/Obeng-PNG.webp",
                "alt": "Delantero 2",
                "number": "16",
                "name": "Obeng",
                "url": "fichajugador.html?player=obeng"
            },
            {
                "src": "https://i.postimg.cc/Y9fyy5pz/Matheus-Ai-s-PNG.webp",
                "alt": "Delantero 3",
                "number": "19",
                "name": "Matheus Aiás",
                "url": "fichajugador.html?player=matheusaias"
            },
            {
                "src": "https://i.postimg.cc/8CTpYSGZ/Javi-Cueto-PNG.webp",
                "alt": "Delantero 4",
                "number": "29",
                "name": "Javi Cueto",
                "url": "fichajugador.html?player=javicueto"
            },
            {
                "src": "https://i.postimg.cc/kXjLCPWj/Mario-Fuente-PNG.webp",
                "alt": "Delantero 5",
                "number": "36",
                "name": "Mario Fuente",
                "url": "fichajugador.html?player=mariofuente"
            },
            {
                "src": "https://i.postimg.cc/vB6S0CMj/resized_Vanderson_PNG.png",
                "alt": "Delantero 6",
                "number": "-",
                "name": "Vanderson",
                "url": "fichajugador.html?player=vanderson"
            }
        ],
        "coaches": [
            {
                "src": "https://i.postimg.cc/2SdYfK83/Ziganda-entrenador-PNG.webp",
                "alt": "Entrenador 1",
                "number": "-",
                "name": "Ziganda",
                "url": "fichajugador.html?player=ziganda"
            }
        ]
    },

    "2020-21": {
        "goalkeepers": [
            {
                "src": "https://i.postimg.cc/pXXcdcZp/Femen-as-PNG.webp",
                "alt": "Portero 1",
                "number": "1",
                "name": "Femenías",
                "url": "fichajugador.html?player=femenias"
            },
            {
                "src": "https://i.postimg.cc/CLs032K5/Braz-o-PNG.webp",
                "alt": "Portero 2",
                "number": "13",
                "name": "Brazão",
                "url": "fichajugador.html?player=brazao"
            },
            {
                "src": "https://i.postimg.cc/GhnjCHJn/resized-Berto-H-rreo-PNG.png",
                "alt": "Portero 3",
                "number": "34",
                "name": "Berto Hórreo",
                "url": "fichajugador.html?player=bertohorreo"
            }
        ],
        "defenders": [
            {
                "src": "https://i.postimg.cc/5y3pnfNw/Grippo-PNG.webp",
                "alt": "Defensa 1",
                "number": "2",
                "name": "Grippo",
                "url": "fichajugador.html?player=grippo"
            },
            {
                "src": "https://i.postimg.cc/VkT0y2Jn/Arribas-PNG.webp",
                "alt": "Defensa 2",
                "number": "3",
                "name": "Arribas",
                "url": "fichajugador.html?player=arribas"
            },
            {
                "src": "https://i.postimg.cc/J761dZDB/Carlos-Hern-ndez-PNG.webp",
                "alt": "Defensa 3",
                "number": "6",
                "name": "Carlos Hernández",
                "url": "fichajugador.html?player=carloshernandez"
            },
            {
                "src": "https://i.postimg.cc/hv5QSY2k/Johannesson-PNG.webp",
                "alt": "Defensa 4",
                "number": "7",
                "name": "Johannesson",
                "url": "fichajugador.html?player=johannesson"
            },
            {
                "src": "https://i.postimg.cc/MKfv7dPG/Juanjo-Nieto-PNG.webp",
                "alt": "Defensa 5",
                "number": "12",
                "name": "Juanjo Nieto",
                "url": "fichajugador.html?player=juanjonieto"
            },
            {
                "src": "https://i.postimg.cc/0NDQTjR1/Bola-o-PNG.webp",
                "alt": "Defensa 6",
                "number": "18",
                "name": "Bolaño",
                "url": "fichajugador.html?player=bolano"
            },
            {
                "src": "https://i.postimg.cc/tC99TkKf/Mossa-PNG.webp",
                "alt": "Defensa 7",
                "number": "23",
                "name": "Mossa",
                "url": "fichajugador.html?player=mossa"
            },
            {
                "src": "https://i.postimg.cc/yYdPX4cz/Lucas-PNG.webp",
                "alt": "Defensa 8",
                "number": "24",
                "name": "Lucas",
                "url": "fichajugador.html?player=lucas"
            },
            {
                "src": "https://i.postimg.cc/dthTWq1w/Jorge-Mier-PNG.webp",
                "alt": "Defensa 9",
                "number": "-",
                "name": "Jorge Mier",
                "url": "fichajugador.html?player=jorgemier"
            },
            {
                "src": "https://i.postimg.cc/zfG7pyyp/Ugarte-PNG.webp",
                "alt": "Defensa 10",
                "number": "-",
                "name": "Ugarte",
                "url": "fichajugador.html?player=ugarte"
            }
        ],
        "midfielders": [
            {
                "src": "https://i.postimg.cc/sxfBzzsf/Edgar-PNG.webp",
                "alt": "Centrocampista 1",
                "number": "4",
                "name": "Édgar",
                "url": "fichajugador.html?player=edgar"
            },
            {
                "src": "https://i.postimg.cc/ZRdBHHjZ/Aburjania-PNG.webp",
                "alt": "Centrocampista 2",
                "number": "5",
                "name": "Aburjania",
                "url": "fichajugador.html?player=aburjania"
            },
            {
                "src": "https://i.postimg.cc/854YcdQd/Sangalli-PNG.webp",
                "alt": "Centrocampista 3",
                "number": "8",
                "name": "Sangalli",
                "url": "fichajugador.html?player=sangalli"
            },
            {
                "src": "https://i.postimg.cc/v82kfvkD/Borja-S-nchez-PNG.webp",
                "alt": "Centrocampista 4",
                "number": "10",
                "name": "Borja Sánchez",
                "url": "fichajugador.html?player=borjasanchez"
            },
            {
                "src": "https://i.postimg.cc/qMxTnKsF/Jimmy-PNG.webp",
                "alt": "Centrocampista 5",
                "number": "14",
                "name": "Jimmy",
                "url": "fichajugador.html?player=jimmy"
            },
            {
                "src": "https://i.postimg.cc/T2srvkpV/Nahuel-PNG.webp",
                "alt": "Centrocampista 6",
                "number": "15",
                "name": "Nahuel",
                "url": "fichajugador.html?player=nahuel"
            },
            {
                "src": "https://i.postimg.cc/3rDLPHWC/Viti-PNG.webp",
                "alt": "Centrocampista 7",
                "number": "17",
                "name": "Viti",
                "url": "fichajugador.html?player=viti"
            },
            {
                "src": "https://i.postimg.cc/3xF7mcGm/Cedric-PNG.webp",
                "alt": "Centrocampista 8",
                "number": "19",
                "name": "Cedric",
                "url": "fichajugador.html?player=cedric"
            },
            {
                "src": "https://i.postimg.cc/Cxp4yZ9w/Tejera-PNG.webp",
                "alt": "Centrocampista 9",
                "number": "20",
                "name": "Tejera",
                "url": "fichajugador.html?player=tejera"
            },
            {
                "src": "https://i.postimg.cc/8PzSR5ZP/Riki-PNG.webp",
                "alt": "Centrocampista 10",
                "number": "21",
                "name": "Riki",
                "url": "fichajugador.html?player=riki"
            },
            {
                "src": "https://i.postimg.cc/59pY3XSX/Edu-Cortina-PNG.webp",
                "alt": "Centrocampista 11",
                "number": "22",
                "name": "Edu Cortina",
                "url": "fichajugador.html?player=educortina"
            },
            {
                "src": "https://i.postimg.cc/yYwGr8VH/Borja-Valle-PNG.webp",
                "alt": "Centrocampista 12",
                "number": "25",
                "name": "Borja Valle",
                "url": "fichajugador.html?player=borjavalle"
            },
            {
                "src": "https://i.postimg.cc/q7F5XpfX/resized_Ton_Ripoll_PNG.png",
                "alt": "Centrocampista 13",
                "number": "27",
                "name": "Ton Ripoll",
                "url": "fichajugador.html?player=tonripoll"
            },
            {
                "src": "https://i.postimg.cc/sxFrP9Hk/Javi-Mier-PNG.webp",
                "alt": "Centrocampista 14",
                "number": "28",
                "name": "Javi Mier",
                "url": "fichajugador.html?player=javimier"
            },
            {
                "src": "https://i.postimg.cc/5tZGD95v/Joselu-PNG.webp",
                "alt": "Centrocampista 15",
                "number": "31",
                "name": "Joselu",
                "url": "fichajugador.html?player=joselu"
            },
            {
                "src": "https://i.postimg.cc/dV30nntX/lex-Cardero-PNG.webp",
                "alt": "Centrocampista 16",
                "number": "32",
                "name": "Álex Cardero",
                "url": "fichajugador.html?player=alexcardero"
            },
            {
                "src": "https://i.postimg.cc/tJY8G7hx/resized_Sandoval_PNG.png",
                "alt": "Centrocampista 17",
                "number": "33",
                "name": "Sandoval",
                "url": "fichajugador.html?player=sandoval"
            },
            {
                "src": "https://i.postimg.cc/sXgyDgQL/Guille-Bernab-u-PNG.webp",
                "alt": "Centrocampista 18",
                "number": "40",
                "name": "Guille Bernabéu",
                "url": "fichajugador.html?player=guillebernabeu"
            }
        ],
        "forwards": [
            {
                "src": "https://i.postimg.cc/RZhhCmyq/Rodri-R-os-PNG.webp",
                "alt": "Delantero 1",
                "number": "9",
                "name": "Rodrigo",
                "url": "fichajugador.html?player=rodrigo"
            },
            {
                "src": "https://i.postimg.cc/j2168cJh/Mujica-PNG.webp",
                "alt": "Delantero 2",
                "number": "11",
                "name": "Mujica",
                "url": "fichajugador.html?player=mujica"
            },
            {
                "src": "https://i.postimg.cc/Sx688kVd/Obeng-PNG.webp",
                "alt": "Delantero 3",
                "number": "16",
                "name": "Obeng",
                "url": "fichajugador.html?player=obeng"
            },
            {
                "src": "https://i.postimg.cc/900jhmgB/Blanco-Leschuk-PNG.webp",
                "alt": "Delantero 4",
                "number": "22",
                "name": "Blanco Leschuk",
                "url": "fichajugador.html?player=blancoleschuk"
            },
            {
                "src": "https://i.postimg.cc/8CTpYSGZ/Javi-Cueto-PNG.webp",
                "alt": "Delantero 5",
                "number": "29",
                "name": "Javi Cueto",
                "url": "fichajugador.html?player=javicueto"
            },
            {
                "src": "https://i.postimg.cc/vB6S0CMj/resized_Vanderson_PNG.png",
                "alt": "Delantero 6",
                "number": "-",
                "name": "Vanderson",
                "url": "fichajugador.html?player=vanderson"
            },
            {
                "src": "https://i.postimg.cc/3w2GX7B9/Gassan-PNG.webp",
                "alt": "Delantero 7",
                "number": "-",
                "name": "Gassan",
                "url": "fichajugador.html?player=gassan"
            }
        ],
        "coaches": [
            {
                "src": "https://i.postimg.cc/2SdYfK83/Ziganda-entrenador-PNG.webp",
                "alt": "Entrenador 1",
                "number": "-",
                "name": "Ziganda",
                "url": "fichajugador.html?player=ziganda"
            }
        ]
    },

    "2019-20": {
        "goalkeepers": [
            {
                "src": "https://i.postimg.cc/T2WY4Qm5/Alfonso-Herrero-PNG.webp",
                "alt": "Portero 1",
                "number": "1",
                "name": "Alfonso Herrero",
                "url": "fichajugador.html?player=alfonsoherrero"
            },
            {
                "src": "https://i.postimg.cc/L5S7vHLT/Champagne-PNG.webp",
                "alt": "Portero 2",
                "number": "13",
                "name": "Champagne",
                "url": "fichajugador.html?player=champagne"
            },
            {
                "src": "https://i.postimg.cc/qv2KH43n/Lunin-PNG.webp",
                "alt": "Portero 3",
                "number": "25",
                "name": "Lunin",
                "url": "fichajugador.html?player=lunin"
            }
        ],
        "defenders": [
            {
                "src": "https://i.postimg.cc/hv5QSY2k/Johannesson-PNG.webp",
                "alt": "Defensa 1",
                "number": "2",
                "name": "Johannesson",
                "url": "fichajugador.html?player=johannesson"
            },
            {
                "src": "https://i.postimg.cc/5y3pnfNw/Grippo-PNG.webp",
                "alt": "Defensa 2",
                "number": "2",
                "name": "Grippo",
                "url": "fichajugador.html?player=grippo"
            },
            {
                "src": "https://i.postimg.cc/VkT0y2Jn/Arribas-PNG.webp",
                "alt": "Defensa 3",
                "number": "3",
                "name": "Arribas",
                "url": "fichajugador.html?player=arribas"
            },
            {
                "src": "https://i.postimg.cc/HkhcTNDF/resized_Javi_Fernández_PNG.png",
                "alt": "Defensa 4",
                "number": "5",
                "name": "Javi Fernández",
                "url": "fichajugador.html?player=javifernandez"
            },
            {
                "src": "https://i.postimg.cc/J761dZDB/Carlos-Hern-ndez-PNG.webp",
                "alt": "Defensa 5",
                "number": "6",
                "name": "Carlos Hernández",
                "url": "fichajugador.html?player=carloshernandez"
            },
            {
                "src": "https://i.postimg.cc/MKfv7dPG/Juanjo-Nieto-PNG.webp",
                "alt": "Defensa 6",
                "number": "12",
                "name": "Juanjo Nieto",
                "url": "fichajugador.html?player=juanjonieto"
            },
            {
                "src": "https://i.postimg.cc/0NDQTjR1/Bola-o-PNG.webp",
                "alt": "Defensa 7",
                "number": "18",
                "name": "Bolaño",
                "url": "fichajugador.html?player=bolano"
            },
            {
                "src": "https://i.postimg.cc/tC99TkKf/Mossa-PNG.webp",
                "alt": "Defensa 8",
                "number": "23",
                "name": "Mossa",
                "url": "fichajugador.html?player=mossa"
            },
            {
                "src": "https://i.postimg.cc/yYdPX4cz/Lucas-PNG.webp",
                "alt": "Defensa 9",
                "number": "24",
                "name": "Lucas",
                "url": "fichajugador.html?player=lucas"
            },
            {
                "src": "https://i.postimg.cc/dthTWq1w/Jorge-Mier-PNG.webp",
                "alt": "Defensa 10",
                "number": "31",
                "name": "Jorge Mier",
                "url": "fichajugador.html?player=jorgemier"
            },
            {
                "src": "https://i.postimg.cc/50cXCFt6/resized_Josín_PNG.png",
                "alt": "Defensa 11",
                "number": "33",
                "name": "Josín",
                "url": "fichajugador.html?player=josin"
            },
            {
                "src": "https://i.postimg.cc/zfG7pyyp/Ugarte-PNG.webp",
                "alt": "Defensa 12",
                "number": "-",
                "name": "Ugarte",
                "url": "fichajugador.html?player=ugarte"
            },
            {
                "src": "https://i.postimg.cc/g2680YFN/Jero-PNG.webp",
                "alt": "Defensa 13",
                "number": "-",
                "name": "Jero",
                "url": "fichajugador.html?player=jero"
            }
        ],
        "midfielders": [
            {
                "src": "https://i.postimg.cc/ydshDwst/Luismi-casco-PNG.webp",
                "alt": "Centrocampista 1",
                "number": "4",
                "name": "Luismi",
                "url": "fichajugador.html?player=luismi"
            },
            {
                "src": "https://i.postimg.cc/sXbhpqr3/Omar-Ramos-PNG.webp",
                "alt": "Centrocampista 2",
                "number": "7",
                "name": "Omar Ramos",
                "url": "fichajugador.html?player=omarramos"
            },
            {
                "src": "https://i.postimg.cc/7YfRPTB7/Sebas-Coris-PNG.webp",
                "alt": "Centrocampista 3",
                "number": "7",
                "name": "Sebas Coris",
                "url": "fichajugador.html?player=sebascoris"
            },
            {
                "src": "https://i.postimg.cc/854YcdQd/Sangalli-PNG.webp",
                "alt": "Centrocampista 4",
                "number": "8",
                "name": "Sangalli",
                "url": "fichajugador.html?player=sangalli"
            },
            {
                "src": "https://i.postimg.cc/qMxTnKsF/Jimmy-PNG.webp",
                "alt": "Centrocampista 5",
                "number": "14",
                "name": "Jimmy",
                "url": "fichajugador.html?player=jimmy"
            },
            {
                "src": "https://i.postimg.cc/v82kfvkD/Borja-S-nchez-PNG.webp",
                "alt": "Centrocampista 6",
                "number": "19",
                "name": "Borja Sánchez",
                "url": "fichajugador.html?player=borjasanchez"
            },
            {
                "src": "https://i.postimg.cc/Cxp4yZ9w/Tejera-PNG.webp",
                "alt": "Centrocampista 7",
                "number": "20",
                "name": "Tejera",
                "url": "fichajugador.html?player=tejera"
            },
            {
                "src": "https://i.postimg.cc/Y9z38tdt/Lolo-Gonz-lez-PNG.webp",
                "alt": "Centrocampista 8",
                "number": "21",
                "name": "Lolo González",
                "url": "fichajugador.html?player=lologonzalez"
            },
            {
                "src": "https://i.postimg.cc/59pY3XSX/Edu-Cortina-PNG.webp",
                "alt": "Centrocampista 9",
                "number": "22",
                "name": "Edu Cortina",
                "url": "fichajugador.html?player=educortina"
            },
            {
                "src": "https://i.postimg.cc/8PzSR5ZP/Riki-PNG.webp",
                "alt": "Centrocampista 10",
                "number": "28",
                "name": "Riki",
                "url": "fichajugador.html?player=riki"
            },
            {
                "src": "https://i.postimg.cc/sxFrP9Hk/Javi-Mier-PNG.webp",
                "alt": "Centrocampista 11",
                "number": "32",
                "name": "Javi Mier",
                "url": "fichajugador.html?player=javimier"
            },
            {
                "src": "https://i.postimg.cc/3rDLPHWC/Viti-PNG.webp",
                "alt": "Centrocampista 12",
                "number": "37",
                "name": "Viti",
                "url": "fichajugador.html?player=viti"
            },
            {
                "src": "https://i.postimg.cc/jqXTnNQF/Rober-Sierra-PNG.webp",
                "alt": "Centrocampista 13",
                "number": "-",
                "name": "Rober Sierra",
                "url": "fichajugador.html?player=robersierra"
            }
        ],
        "forwards": [
            {
                "src": "https://i.postimg.cc/ydtWtbvW/Joselu-PNG.webp",
                "alt": "Delantero 1",
                "number": "9",
                "name": "Joselu",
                "url": "fichajugador.html?player=joselu"
            },
            {
                "src": "https://i.postimg.cc/RZhhCmyq/Rodri-R-os-PNG.webp",
                "alt": "Delantero 2",
                "number": "9",
                "name": "Rodrigo",
                "url": "fichajugador.html?player=rodrigo"
            },
            {
                "src": "https://i.postimg.cc/yNqKqzzM/Sa-l-Berj-n-PNG.webp",
                "alt": "Delantero 3",
                "number": "10",
                "name": "Saúl Berjón",
                "url": "fichajugador.html?player=saulberjon"
            },
            {
                "src": "https://i.postimg.cc/x8NgVBQZ/Yoel-B-rcenas-PNG.webp",
                "alt": "Delantero 4",
                "number": "11",
                "name": "Yoél Bárcenas",
                "url": "fichajugador.html?player=yoelbarcenas"
            },
            {
                "src": "https://i.postimg.cc/QNv0JNkZ/Ortu-o-PNG.webp",
                "alt": "Delantero 5",
                "number": "15",
                "name": "Ortuño",
                "url": "fichajugador.html?player=ortuno"
            },
            {
                "src": "https://i.postimg.cc/4NrnBqn0/Ibra-PNG.webp",
                "alt": "Delantero 6",
                "number": "17",
                "name": "Ibra",
                "url": "fichajugador.html?player=ibra"
            },
            {
                "src": "https://i.postimg.cc/Pq7RzdGp/resized_Steven_PNG.png",
                "alt": "Delantero 7",
                "number": "27",
                "name": "Steven",
                "url": "fichajugador.html?player=steven"
            },
            {
                "src": "https://i.postimg.cc/8CTpYSGZ/Javi-Cueto-PNG.webp",
                "alt": "Delantero 8",
                "number": "29",
                "name": "Javi Cueto",
                "url": "fichajugador.html?player=javicueto"
            },
            {
                "src": "https://i.postimg.cc/Sx688kVd/Obeng-PNG.webp",
                "alt": "Delantero 9",
                "number": "30",
                "name": "Obeng",
                "url": "fichajugador.html?player=obeng"
            },
            {
                "src": "https://i.postimg.cc/vB6S0CMj/resized_Vanderson_PNG.png",
                "alt": "Delantero 10",
                "number": "34",
                "name": "Vanderson",
                "url": "fichajugador.html?player=vanderson"
            }
        ],
        "coaches": [
            {
                "src": "https://i.postimg.cc/CxbhxKJh/Sergio-Egea-entrenador-PNG.webp",
                "alt": "Entrenador 1",
                "number": "-",
                "name": "Sergio Egea",
                "url": "fichajugador.html?player=sergioegea"
            },
            {
                "src": "https://i.postimg.cc/Bv1x6Hk8/Javi-Rozada-entrenador-PNG.webp",
                "alt": "Entrenador 2",
                "number": "-",
                "name": "Javi Rozada",
                "url": "fichajugador.html?player=javirozada"
            },
            {
                "src": "https://i.postimg.cc/2SdYfK83/Ziganda-entrenador-PNG.webp",
                "alt": "Entrenador 3",
                "number": "-",
                "name": "Ziganda",
                "url": "fichajugador.html?player=ziganda"
            }
        ]
    },

    "2018-19": {
        "goalkeepers": [
            {
                "src": "https://i.postimg.cc/T2WY4Qm5/Alfonso-Herrero-PNG.webp",
                "alt": "Portero 1",
                "number": "1",
                "name": "Alfonso Herrero",
                "url": "fichajugador.html?player=alfonsoherrero"
            },
            {
                "src": "https://i.postimg.cc/L5S7vHLT/Champagne-PNG.webp",
                "alt": "Portero 2",
                "number": "13",
                "name": "Champagne",
                "url": "fichajugador.html?player=champagne"
            },
            {
                "src": "https://i.postimg.cc/7Y6X4GHz/Gorka-Giralt-PNG.webp",
                "alt": "Portero 3",
                "number": "26",
                "name": "Gorka Giralt",
                "url": "fichajugador.html?player=gorkagiralt"
            }
        ],
        "defenders": [
            {
                "src": "https://i.postimg.cc/hv5QSY2k/Johannesson-PNG.webp",
                "alt": "Defensa 1",
                "number": "2",
                "name": "Johannesson",
                "url": "fichajugador.html?player=johannesson"
            },
            {
                "src": "https://i.postimg.cc/g2MqxMn2/Alan-s-PNG.webp",
                "alt": "Defensa 2",
                "number": "3",
                "name": "Alanís",
                "url": "fichajugador.html?player=alanis"
            },
            {
                "src": "https://i.postimg.cc/W3ZH6Rkn/Forl-n-PNG.webp",
                "alt": "Defensa 3",
                "number": "5",
                "name": "Forlín",
                "url": "fichajugador.html?player=forlin"
            },
            {
                "src": "https://i.postimg.cc/J761dZDB/Carlos-Hern-ndez-PNG.webp",
                "alt": "Defensa 4",
                "number": "6",
                "name": "Carlos Hernández",
                "url": "fichajugador.html?player=carloshernandez"
            },
            {
                "src": "https://i.postimg.cc/0NDQTjR1/Bola-o-PNG.webp",
                "alt": "Defensa 5",
                "number": "18",
                "name": "Bolaño",
                "url": "fichajugador.html?player=bolano"
            },
            {
                "src": "https://i.postimg.cc/sgSsXLnp/Carlos-Mart-nez-PNG.webp",
                "alt": "Defensa 6",
                "number": "19",
                "name": "Carlos Martínez",
                "url": "fichajugador.html?player=carlosmartinez"
            },
            {
                "src": "https://i.postimg.cc/tC99TkKf/Mossa-PNG.webp",
                "alt": "Defensa 7",
                "number": "23",
                "name": "Mossa",
                "url": "fichajugador.html?player=mossa"
            },
            {
                "src": "https://i.postimg.cc/kXjDyH4P/resized_Prendes_PNG.png",
                "alt": "Defensa 8",
                "number": "28",
                "name": "Prendes",
                "url": "fichajugador.html?player=prendes"
            },
            {
                "src": "https://i.postimg.cc/0jWDzjyH/Javi-Hern-ndez-PNG.webp",
                "alt": "Defensa 9",
                "number": "33",
                "name": "Javi Hernández",
                "url": "fichajugador.html?player=javihernandez"
            },
            {
                "src": "https://i.postimg.cc/dthTWq1w/Jorge-Mier-PNG.webp",
                "alt": "Defensa 10",
                "number": "35",
                "name": "Jorge Mier",
                "url": "fichajugador.html?player=jorgemier"
            },
            {
                "src": "https://i.postimg.cc/50cXCFt6/resized_Josín_PNG.png",
                "alt": "Defensa 11",
                "number": "37",
                "name": "Josín",
                "url": "fichajugador.html?player=josin"
            },
            {
                "src": "https://i.postimg.cc/zB3JJG4f/Lobato-PNG.webp",
                "alt": "Defensa 12",
                "number": "-",
                "name": "Lobato",
                "url": "fichajugador.html?player=lobato"
            }
        ],
        "midfielders": [
            {
                "src": "https://i.postimg.cc/524zJw9q/Aar-n-guez-PNG.webp",
                "alt": "Centrocampista 1",
                "number": "7",
                "name": "Aarón Ñíguez",
                "url": "fichajugador.html?player=aaronniguez"
            },
            {
                "src": "https://i.postimg.cc/sXbhpqr3/Omar-Ramos-PNG.webp",
                "alt": "Centrocampista 2",
                "number": "7",
                "name": "Omar Ramos",
                "url": "fichajugador.html?player=omarramos"
            },
            {
                "src": "https://i.postimg.cc/nzKJkQ8M/Ram-n-Folch-PNG.webp",
                "alt": "Centrocampista 3",
                "number": "8",
                "name": "Ramón Folch",
                "url": "fichajugador.html?player=ramonfolch"
            },
            {
                "src": "https://i.postimg.cc/J01Wd4mx/Richard-Boateng-PNG.webp",
                "alt": "Centrocampista 4",
                "number": "14",
                "name": "Richard Boateng",
                "url": "fichajugador.html?player=richardboateng"
            },
            {
                "src": "https://i.postimg.cc/Cxp4yZ9w/Tejera-PNG.webp",
                "alt": "Centrocampista 5",
                "number": "20",
                "name": "Tejera",
                "url": "fichajugador.html?player=tejera"
            },
            {
                "src": "https://i.postimg.cc/gjvPgXfn/Javi-Mu-oz-PNG.webp",
                "alt": "Centrocampista 6",
                "number": "24",
                "name": "Javi Muñoz",
                "url": "fichajugador.html?player=javimunoz"
            },
            {
                "src": "https://i.postimg.cc/3rDLPHWC/Viti-PNG.webp",
                "alt": "Centrocampista 7",
                "number": "27",
                "name": "Viti",
                "url": "fichajugador.html?player=viti"
            },
            {
                "src": "https://i.postimg.cc/Wb3BDy4d/Sandoval-PNG.webp",
                "alt": "Centrocampista 8",
                "number": "29",
                "name": "Sandoval",
                "url": "fichajugador.html?player=sandoval"
            },
            {
                "src": "https://i.postimg.cc/59pY3XSX/Edu-Cortina-PNG.webp",
                "alt": "Centrocampista 9",
                "number": "30",
                "name": "Edu Cortina",
                "url": "fichajugador.html?player=educortina"
            },
            {
                "src": "https://i.postimg.cc/v82kfvkD/Borja-S-nchez-PNG.webp",
                "alt": "Centrocampista 10",
                "number": "31",
                "name": "Borja Sánchez",
                "url": "fichajugador.html?player=borjasanchez"
            },
            {
                "src": "https://i.postimg.cc/qMxTnKsF/Jimmy-PNG.webp",
                "alt": "Centrocampista 11",
                "number": "34",
                "name": "Jimmy",
                "url": "fichajugador.html?player=jimmy"
            },
            {
                "src": "https://i.postimg.cc/sxFrP9Hk/Javi-Mier-PNG.webp",
                "alt": "Centrocampista 12",
                "number": "36",
                "name": "Javi Mier",
                "url": "fichajugador.html?player=javimier"
            },
            {
                "src": "https://i.postimg.cc/yYdPX4cz/Lucas-PNG.webp",
                "alt": "Centrocampista 13",
                "number": "-",
                "name": "Lucas",
                "url": "fichajugador.html?player=lucas"
            }
        ],
        "forwards": [
            {
                "src": "https://i.postimg.cc/wMrPhhqC/Toch-PNG.webp",
                "alt": "Delantero 1",
                "number": "9",
                "name": "Toché",
                "url": "fichajugador.html?player=toche"
            },
            {
                "src": "https://i.postimg.cc/yNqKqzzM/Sa-l-Berj-n-PNG.webp",
                "alt": "Delantero 2",
                "number": "10",
                "name": "Saúl Berjón",
                "url": "fichajugador.html?player=saulberjon"
            },
            {
                "src": "https://i.postimg.cc/x8NgVBQZ/Yoel-B-rcenas-PNG.webp",
                "alt": "Delantero 3",
                "number": "11",
                "name": "Yoél Bárcenas",
                "url": "fichajugador.html?player=yoelbarcenas"
            },
            {
                "src": "https://i.postimg.cc/4NrnBqn0/Ibra-PNG.webp",
                "alt": "Delantero 4",
                "number": "17",
                "name": "Ibra",
                "url": "fichajugador.html?player=ibra"
            },
            {
                "src": "https://i.postimg.cc/ydtWtbvW/Joselu-PNG.webp",
                "alt": "Delantero 5",
                "number": "22",
                "name": "Joselu",
                "url": "fichajugador.html?player=joselu"
            },
            {
                "src": "https://i.postimg.cc/g2h9HB6N/Steven-PNG.webp",
                "alt": "Delantero 6",
                "number": "32",
                "name": "Steven",
                "url": "fichajugador.html?player=steven"
            }
        ],
        "coaches": [
            {
                "src": "https://i.postimg.cc/NFXVkKKL/Anquela-entrenador-PNG.webp",
                "alt": "Entrenador 1",
                "number": "-",
                "name": "Anquela",
                "url": "fichajugador.html?player=anquela"
            },
            {
                "src": "https://i.postimg.cc/CxbhxKJh/Sergio-Egea-entrenador-PNG.webp",
                "alt": "Entrenador 2",
                "number": "-",
                "name": "Sergio Egea",
                "url": "fichajugador.html?player=sergioegea"
            }
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
