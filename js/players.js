// js/players.js

const allPlayersData = {
    "2025-26": {
        "goalkeepers": [
            {
                "src": "https://i.postimg.cc/hvxDQPg1/Aar-n-PNG-3.webp",
                "alt": "Portero 1",
                "number": "-",
                "name": "Aarón",
                "url": "fichajugador.html?player=aaron"
            },
            {
                "src": "https://i.postimg.cc/sgPM0mk4/Moldovan-PNG-2.webp",
                "alt": "Portero 2",
                "number": "-",
                "name": "Moldovan",
                "url": "fichajugador.html?player=moldovan"
            },
            {
                "src": "https://i.postimg.cc/XJqXqbps/Narv-ez-PNG.webp",
                "alt": "Portero 3",
                "number": "-",
                "name": "Narváez",
                "url": "fichajugador.html?player=narvaez"
            }
        ],
        "defenders": [
            {
                "src": "https://i.postimg.cc/qRHtqnX7/Bailly-PNG-2.webp",
                "alt": "Defensa 1",
                "number": "-",
                "name": "Bailly",
                "url": "fichajugador.html?player=bailly"
            },
            {
                "src": "https://i.postimg.cc/15bMB7y7/Rahim-PNG.webp",
                "alt": "Defensa 2",
                "number": "-",
                "name": "Rahim",
                "url": "fichajugador.html?player=rahim"
            },
            {
                "src": "https://i.postimg.cc/V6ScxHbr/David-Costas-PNG.webp",
                "alt": "Defensa 3",
                "number": "-",
                "name": "David Costas",
                "url": "fichajugador.html?player=davidcostas"
            },
            {
                "src": "https://i.postimg.cc/Wb0spKY0/Dani-Calvo-PNG.webp",
                "alt": "Defensa 4",
                "number": "-",
                "name": "Dani Calvo",
                "url": "fichajugador.html?player=danicalvo"
            },
            {
                "src": "https://i.postimg.cc/YqQmcd1s/Luengo-PNG.webp",
                "alt": "Defensa 5",
                "number": "-",
                "name": "Luengo",
                "url": "fichajugador.html?player=luengo"
            },
            {
                "src": "https://i.postimg.cc/ZqxmPdzn/Carmo-PNG-2.webp",
                "alt": "Defensa 6",
                "number": "-",
                "name": "Carmo",
                "url": "fichajugador.html?player=carmo"
            },
            {
                "src": "https://i.postimg.cc/cLHZ7H4B/Nacho-Vidal-PNG-3.webp",
                "alt": "Defensa 7",
                "number": "-",
                "name": "Nacho Vidal",
                "url": "fichajugador.html?player=nachovidal"
            },
            {
                "src": "https://i.postimg.cc/yYdPX4cz/Lucas_PNG.webp",
                "alt": "Defensa 8",
                "number": "-",
                "name": "Lucas",
                "url": "fichajugador.html?player=lucas"
            },
            {
                "src": "https://i.postimg.cc/W4GZMX4Z/Javi-L-pez-PNG.webp",
                "alt": "Defensa 9",
                "number": "-",
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
                "number": "-",
                "name": "Omar Falah",
                "url": "fichajugador.html?player=omarfalah"
            },
            {
                "src": "https://i.postimg.cc/PqJxqywh/Marco-Esteban-PNG.webp",
                "alt": "Defensa 12",
                "number": "-",
                "name": "Marco Esteban",
                "url": "fichajugador.html?player=marcoesteban"
            },
            {
                "src": "https://i.postimg.cc/vHtvs8y9/Adri-Lopes-PNG.webp",
                "alt": "Defensa 13",
                "number": "-",
                "name": "Adri Lopes",
                "url": "fichajugador.html?player=adrilopes"
            },
            {
                "src": "https://i.postimg.cc/j2R8rDDW/Lamine_PNG.webp",
                "alt": "Defensa 14",
                "number": "-",
                "name": "Lamine",
                "url": "fichajugador.html?player=lamine"
            }
        ],
        "midfielders": [
            {
                "src": "https://i.postimg.cc/mDCkCD2g/Alberto-Reina-PNG.webp",
                "alt": "Centrocampista 1",
                "number": "-",
                "name": "Alberto Reina",
                "url": "fichajugador.html?player=albertoreina"
            },
            {
                "src": "https://i.postimg.cc/gjJYNwFR/Sibo-PNG-Alineaci-n.webp",
                "alt": "Centrocampista 2",
                "number": "-",
                "name": "Sibo",
                "url": "fichajugador.html?player=sibo"
            },
            {
                "src": "https://i.postimg.cc/6qQmv7tk/Santi-Cazorla-PNG.webp",
                "alt": "Centrocampista 3",
                "number": "-",
                "name": "Santi Cazorla",
                "url": "fichajugador.html?player=santicazorla"
            },
            {
                "src": "https://i.postimg.cc/R08GqPNz/Colombatto-PNG.webp",
                "alt": "Centrocampista 4",
                "number": "-",
                "name": "Colombatto",
                "url": "fichajugador.html?player=colombatto"
            },
            {
                "src": "https://i.postimg.cc/BbxX2vpC/Ovi_Ejaria_PNG_(2).webp",
                "alt": "Centrocampista 5",
                "number": "-",
                "name": "Ejaria",
                "url": "fichajugador.html?player=ejaria"
            },
            {
                "src": "https://i.postimg.cc/v82kfvkD/Borja-S-nchez-PNG.webp",
                "alt": "Centrocampista 6",
                "number": "-",
                "name": "Borja Sánchez",
                "url": "fichajugador.html?player=borjasanchez"
            },
            {
                "src": "https://i.postimg.cc/rpTPMZ0Z/Brandon_Dominguès_PNG.webp",
                "alt": "Centrocampista 7",
                "number": "-",
                "name": "Brandon Dominguès",
                "url": "fichajugador.html?player=brandondomingues"
            },
            {
                "src": "https://i.postimg.cc/8cTvCWBS/Dendoncker-PNG-2.webp",
                "alt": "Centrocampista 8",
                "number": "-",
                "name": "Dendoncker",
                "url": "fichajugador.html?player=dendoncker"
            },
            {
                "src": "https://i.postimg.cc/9MxvJ3Xw/Brekalo_PNG_(2).webp",
                "alt": "Centrocampista 9",
                "number": "-",
                "name": "Brekalo",
                "url": "fichajugador.html?player=brekalo"
            },
            {
                "src": "https://i.postimg.cc/K8bYhFN6/Ili-PNG.webp",
                "alt": "Centrocampista 10",
                "number": "-",
                "name": "Ilić",
                "url": "fichajugador.html?player=ilic"
            },
            {
                "src": "https://i.postimg.cc/5tWYNTVz/Hassan-PNG-2.webp",
                "alt": "Centrocampista 11",
                "number": "-",
                "name": "Hassan",
                "url": "fichajugador.html?player=hassan"
            },
            {
                "src": "https://i.postimg.cc/dV30nntX/lex-Cardero-PNG.webp",
                "alt": "Centrocampista 12",
                "number": "-",
                "name": "Álex Cardero",
                "url": "fichajugador.html?player=alexcardero"
            },
            {
                "src": "https://i.postimg.cc/KYYs1kft/Cheli-PNG.webp",
                "alt": "Centrocampista 13",
                "number": "-",
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
                "number": "-",
                "name": "Ilyas",
                "url": "fichajugador.html?player=ilyas"
            },
            {
                "src": "https://i.postimg.cc/mZywx37V/Fede-Vi-as-PNG-3.webp",
                "alt": "Delantero 2",
                "number": "-",
                "name": "Fede Viñas",
                "url": "fichajugador.html?player=fedevinas"
            },
            {
                "src": "https://i.postimg.cc/FshL02dV/lex-For-s-PNG.webp",
                "alt": "Delantero 3",
                "number": "-",
                "name": "Álex Forés",
                "url": "fichajugador.html?player=alexfores"
            },
            {
                "src": "https://i.postimg.cc/m2XZ5qk4/Rond-n-PNG-2.webp",
                "alt": "Delantero 4",
                "number": "-",
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
    "2024-25": {
        "goalkeepers": [
            {
                "src": "https://i.postimg.cc/wxsLQXj0/Quentin-Braat-PNG.webp",
                "alt": "Portero 1",
                "number": "-",
                "name": "Quentin Braat",
                "url": "fichajugador.html?player=quentinbraat"
            },
            {
                "src": "https://i.postimg.cc/s2YhzvPR/Aar-n-PNG-Alineaci-n.webp",
                "alt": "Portero 2",
                "number": "-",
                "name": "Aarón",
                "url": "fichajugador.html?player=aaron"
            },
            {
                "src": "https://i.postimg.cc/XJqXqbps/Narv-ez-PNG.webp",
                "alt": "Portero 3",
                "number": "-",
                "name": "Narváez",
                "url": "fichajugador.html?player=narvaez"
            }
        ],
        "defenders": [
            {
                "src": "https://i.postimg.cc/XYDdjpzZ/lvaro-Lemos-PNG-3.webp",
                "alt": "Defensa 1",
                "number": "-",
                "name": "Álvaro Lemos",
                "url": "fichajugador.html?player=alvarolemos"
            },
            {
                "src": "https://i.postimg.cc/15bMB7y7/Rahim-PNG.webp",
                "alt": "Defensa 2",
                "number": "-",
                "name": "Rahim",
                "url": "fichajugador.html?player=rahim"
            },
            {
                "src": "https://i.postimg.cc/V6ScxHbr/David-Costas-PNG.webp",
                "alt": "Defensa 3",
                "number": "-",
                "name": "David Costas",
                "url": "fichajugador.html?player=davidcostas"
            },
            {
                "src": "https://i.postimg.cc/cLHZ7H4B/Nacho-Vidal-PNG-3.webp",
                "alt": "Defensa 4",
                "number": "-",
                "name": "Nacho Vidal",
                "url": "fichajugador.html?player=nachovidal"
            },
            {
                "src": "https://i.postimg.cc/Wb0spKY0/Dani-Calvo-PNG.webp",
                "alt": "Defensa 5",
                "number": "-",
                "name": "Dani Calvo",
                "url": "fichajugador.html?player=danicalvo"
            },
            {
                "src": "https://i.postimg.cc/YqQmcd1s/Luengo-PNG.webp",
                "alt": "Defensa 6",
                "number": "-",
                "name": "Luengo",
                "url": "fichajugador.html?player=luengo"
            },
            {
                "src": "https://i.postimg.cc/yN4Q1Q53/Pomares-PNG.webp",
                "alt": "Defensa 7",
                "number": "-",
                "name": "Pomares",
                "url": "fichajugador.html?player=pomares"
            },
            {
                "src": "https://i.postimg.cc/yYdPX4cz/Lucas-PNG.webp",
                "alt": "Defensa 8",
                "number": "-",
                "name": "Lucas",
                "url": "fichajugador.html?player=lucas"
            },
            {
                "src": "https://i.postimg.cc/mDSQG8f4/Jaime-V-zquez-PNG.webp",
                "alt": "Defensa 9",
                "number": "-",
                "name": "Jaime Vázquez",
                "url": "fichajugador.html?player=jaimevazquez"
            },
            {
                "src": "https://i.postimg.cc/PqJxqywh/Marco-Esteban-PNG.webp",
                "alt": "Defensa 10",
                "number": "-",
                "name": "Marco Esteban",
                "url": "fichajugador.html?player=marcoesteban"
            },
            {
                "src": "https://i.postimg.cc/KYsb7466/Eze-PNG-1.webp",
                "alt": "Defensa 11",
                "number": "-",
                "name": "Eze",
                "url": "fichajugador.html?player=eze"
            },
            {
                "src": "https://i.postimg.cc/vHtvs8y9/Adri-Lopes-PNG.webp",
                "alt": "Defensa 12",
                "number": "-",
                "name": "Adri Lopes",
                "url": "fichajugador.html?player=adrilopes"
            },
            {
                "src": "https://i.postimg.cc/FsFQmRcX/Omar-Falah-PNG.webp",
                "alt": "Defensa 13",
                "number": "-",
                "name": "Omar Falah",
                "url": "fichajugador.html?player=omarfalah"
            },
            {
                "src": "https://i.postimg.cc/j2R8rDDW/Lamine-PNG.webp",
                "alt": "Defensa 14",
                "number": "-",
                "name": "Lamine",
                "url": "fichajugador.html?player=lamine"
            }
        ],
        "midfielders": [
            {
                "src": "https://i.postimg.cc/636yNz5d/Alberto-del-Moral-PNG-Alineaci-n.webp",
                "alt": "Centrocampista 1",
                "number": "-",
                "name": "Alberto del Moral",
                "url": "fichajugador.html?player=albertodelmoral"
            },
            {
                "src": "https://i.postimg.cc/gjJYNwFR/Sibo-PNG-Alineaci-n.webp",
                "alt": "Centrocampista 2",
                "number": "-",
                "name": "Sibo",
                "url": "fichajugador.html?player=sibo"
            },
            {
                "src": "https://i.postimg.cc/GhV54hNf/Sebas-Moyano-PNG.webp",
                "alt": "Centrocampista 3",
                "number": "-",
                "name": "Sebas Moyano",
                "url": "fichajugador.html?player=sebasmoyano"
            },
            {
                "src": "https://i.postimg.cc/6qQmv7tk/Santi-Cazorla-PNG.webp",
                "alt": "Centrocampista 4",
                "number": "-",
                "name": "Santi Cazorla",
                "url": "fichajugador.html?player=santicazorla"
            },
            {
                "src": "https://i.postimg.cc/v82kfvkD/Borja-S-nchez-PNG.webp",
                "alt": "Centrocampista 5",
                "number": "-",
                "name": "Borja Sánchez",
                "url": "fichajugador.html?player=borjasanchez"
            },
            {
                "src": "https://i.postimg.cc/br8zc90Q/Portillo-PNG-3.webp",
                "alt": "Centrocampista 6",
                "number": "-",
                "name": "Portillo",
                "url": "fichajugador.html?player=portillo"
            },
            {
                "src": "https://i.postimg.cc/R08GqPNz/Colombatto-PNG.webp",
                "alt": "Centrocampista 7",
                "number": "-",
                "name": "Colombatto",
                "url": "fichajugador.html?player=colombatto"
            },
            {
                "src": "https://i.postimg.cc/Z5nr38kY/De-La-Hoz-PNG-3.webp",
                "alt": "Centrocampista 8",
                "number": "-",
                "name": "De La Hoz",
                "url": "fichajugador.html?player=delahoz"
            },
            {
                "src": "https://i.postimg.cc/SxkLgnn3/Paulino-PNG.webp",
                "alt": "Centrocampista 9",
                "number": "-",
                "name": "Paulino",
                "url": "fichajugador.html?player=paulino"
            },
            {
                "src": "https://i.postimg.cc/HLCvtvT4/Seoane-PNG.webp",
                "alt": "Centrocampista 10",
                "number": "-",
                "name": "Seoane",
                "url": "fichajugador.html?player=seoane"
            },
            {
                "src": "https://i.postimg.cc/gcwFM5v3/Carlos-Dotor-PNG.webp",
                "alt": "Centrocampista 11",
                "number": "-",
                "name": "Dotor",
                "url": "fichajugador.html?player=dotor"
            },
            {
                "src": "https://i.postimg.cc/5tWYNTVz/Hassan-PNG-2.webp",
                "alt": "Centrocampista 12",
                "number": "-",
                "name": "Hassan",
                "url": "fichajugador.html?player=hassan"
            },
            {
                "src": "https://i.postimg.cc/dV30nntX/lex-Cardero-PNG.webp",
                "alt": "Centrocampista 13",
                "number": "-",
                "name": "Álex Cardero",
                "url": "fichajugador.html?player=alexcardero"
            },
            {
                "src": "https://i.postimg.cc/V6J7fxgw/Valdera_PNG.webp",
                "alt": "Centrocampista 14",
                "number": "-",
                "name": "Valdera",
                "url": "fichajugador.html?player=valdera"
            },
            {
                "src": "https://i.postimg.cc/mgPHhTMt/Diego-Tej-n-PNG.webp",
                "alt": "Centrocampista 15",
                "number": "-",
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
                "number": "-",
                "name": "Alemão",
                "url": "fichajugador.html?player=alemao"
            },
            {
                "src": "https://i.postimg.cc/vTn7N9LF/Paraschiv-PNG-3.webp",
                "alt": "Delantero 2",
                "number": "-",
                "name": "Paraschiv",
                "url": "fichajugador.html?player=paraschiv"
            },
            {
                "src": "https://i.postimg.cc/xCTdXSFX/Ilyas-PNG-3.webp",
                "alt": "Delantero 3",
                "number": "-",
                "name": "Ilyas",
                "url": "fichajugador.html?player=ilyas"
            },
            {
                "src": "https://i.postimg.cc/R0tYw3y8/Masca-PNG.webp",
                "alt": "Delantero 4",
                "number": "-",
                "name": "Masca",
                "url": "fichajugador.html?player=masca"
            },
            {
                "src": "https://i.postimg.cc/6pm4JqHM/lex-Mill-n-PNG.webp",
                "alt": "Delantero 5",
                "number": "-",
                "name": "Álex Millán",
                "url": "fichajugador.html?player=alexmillan"
            },
            {
                "src": "https://i.postimg.cc/mZywx37V/Fede-Vi-as-PNG-3.webp",
                "alt": "Delantero 6",
                "number": "-",
                "name": "Fede Viñas",
                "url": "fichajugador.html?player=fedevinas"
            },
            {
                "src": "https://i.postimg.cc/0Q0PdXFL/Santi-Migu-lez-PNG.webp",
                "alt": "Delantero 7",
                "number": "-",
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
                "number": "-",
                "name": "Quentin Braat",
                "url": "fichajugador.html?player=quentinbraat"
            },
            {
                "src": "https://i.postimg.cc/mDmMpjF5/Leo-Rom-n-PNG.webp",
                "alt": "Portero 2",
                "number": "-",
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
                "number": "-",
                "name": "Mario Hernández",
                "url": "fichajugador.html?player=mariohernandez"
            },
            {
                "src": "https://i.postimg.cc/SQvGQ1YQ/Rodri-Tar-n-PNG.webp",
                "alt": "Defensa 2",
                "number": "-",
                "name": "Rodri Tarín",
                "url": "fichajugador.html?player=rodritarin"
            },
            {
                "src": "https://i.postimg.cc/V6ScxHbr/David-Costas-PNG.webp",
                "alt": "Defensa 3",
                "number": "-",
                "name": "David Costas",
                "url": "fichajugador.html?player=davidcostas"
            },
            {
                "src": "https://i.postimg.cc/Wb0spKY0/Dani-Calvo-PNG.webp",
                "alt": "Defensa 4",
                "number": "-",
                "name": "Dani Calvo",
                "url": "fichajugador.html?player=danicalvo"
            },
            {
                "src": "https://i.postimg.cc/YqQmcd1s/Luengo-PNG.webp",
                "alt": "Defensa 5",
                "number": "-",
                "name": "Luengo",
                "url": "fichajugador.html?player=luengo"
            },
            {
                "src": "https://i.postimg.cc/yN4Q1Q53/Pomares-PNG.webp",
                "alt": "Defensa 6",
                "number": "-",
                "name": "Pomares",
                "url": "fichajugador.html?player=pomares"
            },
            {
                "src": "https://i.postimg.cc/7LbTGw25/Abel-Bretones-PNG.webp",
                "alt": "Defensa 7",
                "number": "-",
                "name": "Abel Bretones",
                "url": "fichajugador.html?player=abelbretones"
            },
            {
                "src": "https://i.postimg.cc/yYdPX4cz/Lucas-PNG.webp",
                "alt": "Defensa 8",
                "number": "-",
                "name": "Lucas",
                "url": "fichajugador.html?player=lucas"
            },
            {
                "src": "https://i.postimg.cc/KjdChGhC/Charbel-PNG.webp",
                "alt": "Defensa 9",
                "number": "-",
                "name": "Charbel",
                "url": "fichajugador.html?player=charbel"
            },
            {
                "src": "https://i.postimg.cc/PqJxqywh/Marco-Esteban-PNG.webp",
                "alt": "Defensa 10",
                "number": "-",
                "name": "Marco Esteban",
                "url": "fichajugador.html?player=marcoesteban"
            },
            {
                "src": "https://i.postimg.cc/fbJ7mx9j/Aimar-Collante-PNG.webp",
                "alt": "Defensa 11",
                "number": "-",
                "name": "Aimar Collante",
                "url": "fichajugador.html?player=aimarcollante"
            },
            {
                "src": "https://i.postimg.cc/mDSQG8f4/Jaime-V-zquez-PNG.webp",
                "alt": "Defensa 12",
                "number": "-",
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
                "number": "-",
                "name": "Luismi",
                "url": "fichajugador.html?player=luismi"
            },
            {
                "src": "https://i.postimg.cc/qMxTnKsF/Jimmy-PNG.webp",
                "alt": "Centrocampista 2",
                "number": "-",
                "name": "Jimmy",
                "url": "fichajugador.html?player=jimmy"
            },
            {
                "src": "https://i.postimg.cc/3rDLPHWC/Viti-PNG.webp",
                "alt": "Centrocampista 3",
                "number": "-",
                "name": "Viti",
                "url": "fichajugador.html?player=viti"
            },
            {
                "src": "https://i.postimg.cc/sxFrP9Hk/Javi-Mier-PNG.webp",
                "alt": "Centrocampista 4",
                "number": "-",
                "name": "Javi Mier",
                "url": "fichajugador.html?player=javimier"
            },
            {
                "src": "https://i.postimg.cc/6qQmv7tk/Santi-Cazorla-PNG.webp",
                "alt": "Centrocampista 5",
                "number": "-",
                "name": "Santi Cazorla",
                "url": "fichajugador.html?player=santicazorla"
            },
            {
                "src": "https://i.postimg.cc/zfq09L69/Camarasa-PNG.webp",
                "alt": "Centrocampista 6",
                "number": "-",
                "name": "Camarasa",
                "url": "fichajugador.html?player=camarasa"
            },
            {
                "src": "https://i.postimg.cc/j51VxQrW/Hugo-Rama-PNG.webp",
                "alt": "Centrocampista 7",
                "number": "-",
                "name": "Hugo Rama",
                "url": "fichajugador.html?player=hugorama"
            },
            {
                "src": "https://i.postimg.cc/R08GqPNz/Colombatto-PNG.webp",
                "alt": "Centrocampista 8",
                "number": "-",
                "name": "Colombatto",
                "url": "fichajugador.html?player=colombatto"
            },
            {
                "src": "https://i.postimg.cc/Tw1MvNBM/Homenchenko-PNG.webp",
                "alt": "Centrocampista 9",
                "number": "-",
                "name": "Homenchenko",
                "url": "fichajugador.html?player=homenchenko"
            },
            {
                "src": "https://i.postimg.cc/HLCvtvT4/Seoane-PNG.webp",
                "alt": "Centrocampista 10",
                "number": "-",
                "name": "Seoane",
                "url": "fichajugador.html?player=seoane"
            },
            {
                "src": "https://i.postimg.cc/GhV54hNf/Sebas-Moyano-PNG.webp",
                "alt": "Centrocampista 11",
                "number": "-",
                "name": "Sebas Moyano",
                "url": "fichajugador.html?player=sebasmoyano"
            },
            {
                "src": "https://i.postimg.cc/SxkLgnn3/Paulino-PNG.webp",
                "alt": "Centrocampista 12",
                "number": "-",
                "name": "Paulino",
                "url": "fichajugador.html?player=paulino"
            },
            {
                "src": "https://i.postimg.cc/4dQDtkt9/Romario-Ibarra-PNG.webp",
                "alt": "Centrocampista 13",
                "number": "-",
                "name": "Romario Ibarra",
                "url": "fichajugador.html?player=romarioibarra"
            },
            {
                "src": "https://i.postimg.cc/v82kfvkD/Borja-S-nchez-PNG.webp",
                "alt": "Centrocampista 14",
                "number": "-",
                "name": "Borja Sánchez",
                "url": "fichajugador.html?player=borjasanchez"
            },
            {
                "src": "https://i.postimg.cc/dV30nntX/lex-Cardero-PNG.webp",
                "alt": "Centrocampista 15",
                "number": "-",
                "name": "Álex Cardero",
                "url": "fichajugador.html?player=alexcardero"
            },
            {
                "src": "https://i.postimg.cc/d3P8M3Vb/Yayo-PNG.webp",
                "alt": "Centrocampista 16",
                "number": "-",
                "name": "Yayo",
                "url": "fichajugador.html?player=yayo"
            },
            {
                "src": "https://i.postimg.cc/c44YyRL7/Diego-Men-ndez-Dieguito-PNG.webp",
                "alt": "Centrocampista 17",
                "number": "-",
                "name": "Dieguito",
                "url": "fichajugador.html?player=dieguito"
            }
        ],
        "forwards": [
            {
                "src": "https://i.postimg.cc/3rfTZGWf/Borja-Bast-n-PNG.webp",
                "alt": "Delantero 1",
                "number": "-",
                "name": "Borja Bastón",
                "url": "fichajugador.html?player=borjabaston"
            },
            {
                "src": "https://i.postimg.cc/KcPTkZzY/Alem-o-PNG.webp",
                "alt": "Delantero 2",
                "number": "-",
                "name": "Alemão ",
                "url": "fichajugador.html?player=alemao"
            },
            {
                "src": "https://i.postimg.cc/6pm4JqHM/lex-Mill-n-PNG.webp",
                "alt": "Delantero 3",
                "number": "-",
                "name": "Álex Millán",
                "url": "fichajugador.html?player=alexmillan"
            },
            {
                "src": "https://i.postimg.cc/R0tYw3y8/Masca-PNG.webp",
                "alt": "Delantero 4",
                "number": "-",
                "name": "Masca",
                "url": "fichajugador.html?player=masca"
            },
            {
                "src": "https://i.postimg.cc/R02PFM0R/Dubasin-PNG.webp",
                "alt": "Delantero 5",
                "number": "-",
                "name": "Dubasin",
                "url": "fichajugador.html?player=dubasin"
            },
            {
                "src": "https://i.postimg.cc/TYQCbjwh/Enol-PNG.webp",
                "alt": "Delantero 6",
                "number": "-",
                "name": "Enol",
                "url": "fichajugador.html?player=enol"
            },
            {
                "src": "https://i.postimg.cc/2y305Pxm/Ses-PNG.webp",
                "alt": "Delantero 7",
                "number": "-",
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
                "number": "-",
                "name": "Quentin Braat",
                "url": "fichajugador.html?player=quentinbraat"
            },
            {
                "src": "https://i.postimg.cc/FK81Y63m/Tomeu-Nadal-PNG.webp",
                "alt": "Portero 2",
                "number": "-",
                "name": "Tomeu Nadal",
                "url": "fichajugador.html?player=tomeunadal"
            },
            {
                "src": "https://i.postimg.cc/yxJJQHKD/Marco-PNG.webp",
                "alt": "Portero 3",
                "number": "-",
                "name": "Marco",
                "url": "fichajugador.html?player=marco"
            }
        ],
        "defenders": [
            {
                "src": "https://i.postimg.cc/Wzwj8qkX/Miguel-n-PNG.webp",
                "alt": "Defensa 1",
                "number": "-",
                "name": "Miguelón",
                "url": "fichajugador.html?player=miguelon"
            },
            {
                "src": "https://i.postimg.cc/SQvGQ1YQ/Rodri-Tar-n-PNG.webp",
                "alt": "Defensa 2",
                "number": "-",
                "name": "Rodri Tarín",
                "url": "fichajugador.html?player=rodritarin"
            },
            {
                "src": "https://i.postimg.cc/V6ScxHbr/David-Costas-PNG.webp",
                "alt": "Defensa 3",
                "number": "-",
                "name": "David Costas",
                "url": "fichajugador.html?player=davidcostas"
            },
            {
                "src": "https://i.postimg.cc/Wb0spKY0/Dani-Calvo-PNG.webp",
                "alt": "Defensa 4",
                "number": "-",
                "name": "Dani Calvo",
                "url": "fichajugador.html?player=danicalvo"
            },
            {
                "src": "https://i.postimg.cc/YqQmcd1s/Luengo-PNG.webp",
                "alt": "Defensa 5",
                "number": "-",
                "name": "Luengo",
                "url": "fichajugador.html?player=luengo"
            },
            {
                "src": "https://i.postimg.cc/7Pg33Pfc/Alonso-Aceves-PNG.webp",
                "alt": "Defensa 6",
                "number": "-",
                "name": "Alonso Aceves",
                "url": "fichajugador.html?player=alonsoaceves"
            },
            {
                "src": "https://i.postimg.cc/yN4Q1Q53/Pomares-PNG.webp",
                "alt": "Defensa 7",
                "number": "-",
                "name": "Pomares",
                "url": "fichajugador.html?player=pomares"
            },
            {
                "src": "https://i.postimg.cc/dthTWq1w/Jorge-Mier-PNG.webp",
                "alt": "Defensa 8",
                "number": "-",
                "name": "Jorge Mier",
                "url": "fichajugador.html?player=jorgemier"
            },
            {
                "src": "https://i.postimg.cc/4yqnC9dZ/Juanfran-PNG.webp",
                "alt": "Defensa 9",
                "number": "-",
                "name": "Juanfran",
                "url": "fichajugador.html?player=juanfran"
            },
            {
                "src": "https://i.postimg.cc/yYdPX4cz/Lucas-PNG.webp",
                "alt": "Defensa 10",
                "number": "-",
                "name": "Lucas",
                "url": "fichajugador.html?player=lucas"
            },
            {
                "src": "https://i.postimg.cc/7LbTGw25/Abel-Bretones-PNG.webp",
                "alt": "Defensa 11",
                "number": "-",
                "name": "Abel Bretones",
                "url": "fichajugador.html?player=abelbretones"
            },
            {
                "src": "https://i.postimg.cc/tCJFL3r0/Javi-Moreno-PNG.webp",
                "alt": "Defensa 12",
                "number": "-",
                "name": "Javi Moreno",
                "url": "fichajugador.html?player=javimoreno"
            },
            {
                "src": "https://i.postimg.cc/1RnqBm4P/Lucas-Laso-PNG.webp",
                "alt": "Defensa 13",
                "number": "-",
                "name": "Lucas Laso",
                "url": "fichajugador.html?player=lucaslaso"
            },
            {
                "src": "https://i.postimg.cc/2SMp47tC/Osky-PNG.webp",
                "alt": "Defensa 14",
                "number": "-",
                "name": "Osky",
                "url": "fichajugador.html?player=osky"
            }
        ],
        "midfielders": [
            {
                "src": "https://i.postimg.cc/ydshDwst/Luismi-casco-PNG.webp",
                "alt": "Centrocampista 1",
                "number": "-",
                "name": "Luismi",
                "url": "fichajugador.html?player=luismi"
            },
            {
                "src": "https://i.postimg.cc/sxFrP9Hk/Javi-Mier-PNG.webp",
                "alt": "Centrocampista 2",
                "number": "-",
                "name": "Javi Mier",
                "url": "fichajugador.html?player=javimier"
            },
            {
                "src": "https://i.postimg.cc/3rDLPHWC/Viti-PNG.webp",
                "alt": "Centrocampista 3",
                "number": "-",
                "name": "Viti",
                "url": "fichajugador.html?player=viti"
            },
            {
                "src": "https://i.postimg.cc/854YcdQd/Sangalli-PNG.webp",
                "alt": "Centrocampista 4",
                "number": "-",
                "name": "Sangalli",
                "url": "fichajugador.html?player=sangalli"
            },
            {
                "src": "https://i.postimg.cc/v82kfvkD/Borja-S-nchez-PNG.webp",
                "alt": "Centrocampista 5",
                "number": "-",
                "name": "Borja Sánchez",
                "url": "fichajugador.html?player=borjasanchez"
            },
            {
                "src": "https://i.postimg.cc/y6DZjFvk/Jirka-PNG.webp",
                "alt": "Centrocampista 6",
                "number": "-",
                "name": "Jirka",
                "url": "fichajugador.html?player=jirka"
            },
            {
                "src": "https://i.postimg.cc/MGbVJdVD/Marcelo-Flores-PNG.webp",
                "alt": "Centrocampista 7",
                "number": "-",
                "name": "Marcelo Flores",
                "url": "fichajugador.html?player=marceloflores"
            },
            {
                "src": "https://i.postimg.cc/qMxTnKsF/Jimmy-PNG.webp",
                "alt": "Centrocampista 8",
                "number": "-",
                "name": "Jimmy",
                "url": "fichajugador.html?player=jimmy"
            },
            {
                "src": "https://i.postimg.cc/zfq09L69/Camarasa-PNG.webp",
                "alt": "Centrocampista 9",
                "number": "-",
                "name": "Camarasa",
                "url": "fichajugador.html?player=camarasa"
            },
            {
                "src": "https://i.postimg.cc/Z5QDyYMg/Koba-Le-n-PNG.webp",
                "alt": "Centrocampista 10",
                "number": "-",
                "name": "Koba Leïn",
                "url": "fichajugador.html?player=kobalein"
            },
            {
                "src": "https://i.postimg.cc/MKQc898Q/Montoro-PNG.webp",
                "alt": "Centrocampista 11",
                "number": "-",
                "name": "Montoro",
                "url": "fichajugador.html?player=montoro"
            },
            {
                "src": "https://i.postimg.cc/j51VxQrW/Hugo-Rama-PNG.webp",
                "alt": "Centrocampista 12",
                "number": "-",
                "name": "Hugo Rama",
                "url": "fichajugador.html?player=hugorama"
            },
            {
                "src": "https://i.postimg.cc/dV30nntX/lex-Cardero-PNG.webp",
                "alt": "Centrocampista 13",
                "number": "-",
                "name": "Álex Cardero",
                "url": "fichajugador.html?player=alexcardero"
            },
            {
                "src": "https://i.postimg.cc/PJF1FJYn/Mangel-PNG.webp",
                "alt": "Centrocampista 14",
                "number": "-",
                "name": "Mángel",
                "url": "fichajugador.html?player=mangel"
            },
            {
                "src": "https://i.postimg.cc/d3P8M3Vb/Yayo-PNG.webp",
                "alt": "Centrocampista 15",
                "number": "-",
                "name": "Yayo",
                "url": "fichajugador.html?player=yayo"
            },
            {
                "src": "https://i.postimg.cc/K85pJrj6/V-ctor-Blanco-PNG.webp",
                "alt": "Centrocampista 16",
                "number": "-",
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
                "number": "-",
                "name": "Manu Vallejo",
                "url": "fichajugador.html?player=manuvallejo"
            },
            {
                "src": "https://i.postimg.cc/3rfTZGWf/Borja-Bast-n-PNG.webp",
                "alt": "Delantero 2",
                "number": "-",
                "name": "Borja Bastón",
                "url": "fichajugador.html?player=borjabaston"
            },
            {
                "src": "https://i.postimg.cc/Sx688kVd/Obeng-PNG.webp",
                "alt": "Delantero 3",
                "number": "-",
                "name": "Obeng",
                "url": "fichajugador.html?player=obeng"
            },
            {
                "src": "https://i.postimg.cc/8PDTcGJN/Leo-Sequeira-PNG.webp",
                "alt": "Delantero 4",
                "number": "-",
                "name": "Leo Sequeira",
                "url": "fichajugador.html?player=leosequeira"
            },
            {
                "src": "https://i.postimg.cc/tJgQdqhx/Sergi-Enrich-PNG.webp",
                "alt": "Delantero 5",
                "number": "-",
                "name": "Sergi Enrich",
                "url": "fichajugador.html?player=sergienrich"
            },
            {
                "src": "https://i.postimg.cc/kXjLCPWj/Mario-Fuente-PNG.webp",
                "alt": "Delantero 6",
                "number": "-",
                "name": "Mario Fuente",
                "url": "fichajugador.html?player=mariofuente"
            },
            {
                "src": "https://i.postimg.cc/2y305Pxm/Ses-PNG.webp",
                "alt": "Delantero 7",
                "number": "-",
                "name": "Sesé",
                "url": "fichajugador.html?player=sese"
            },
            {
                "src": "https://i.postimg.cc/R0tYw3y8/Masca-PNG.webp",
                "alt": "Delantero 8",
                "number": "-",
                "name": "Masca",
                "url": "fichajugador.html?player=masca"
            },
            {
                "src": "https://i.postimg.cc/TYQCbjwh/Enol-PNG.webp",
                "alt": "Delantero 9",
                "number": "-",
                "name": "Enol",
                "url": "fichajugador.html?player=enol"
            },
            {
                "src": "https://i.postimg.cc/qM9XymrJ/Moro-PNG.webp",
                "alt": "Delantero 10",
                "number": "-",
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
                "number": "-",
                "name": "Femenías",
                "url": "fichajugador.html?player=femenias"
            },
            {
                "src": "https://i.postimg.cc/FK81Y63m/Tomeu-Nadal-PNG.webp",
                "alt": "Portero 2",
                "number": "-",
                "name": "Tomeu Nadal",
                "url": "fichajugador.html?player=tomeunadal"
            },
            {
                "src": "https://i.postimg.cc/GtkRh7JM/Berto-H-rreo-PNG.webp",
                "alt": "Portero 3",
                "number": "-",
                "name": "Berto Hórreo",
                "url": "fichajugador.html?player=bertohorreo"
            }
        ],
        "defenders": [
            {
                "src": "https://i.postimg.cc/5y3pnfNw/Grippo-PNG.webp",
                "alt": "Defensa 1",
                "number": "-",
                "name": "Grippo",
                "url": "fichajugador.html?player=grippo"
            },
            {
                "src": "https://i.postimg.cc/VkT0y2Jn/Arribas-PNG.webp",
                "alt": "Defensa 2",
                "number": "-",
                "name": "Arribas",
                "url": "fichajugador.html?player=arribas"
            },
            {
                "src": "https://i.postimg.cc/SQvGQ1YQ/Rodri-Tar-n-PNG.webp",
                "alt": "Defensa 3",
                "number": "-",
                "name": "Rodri Tarín",
                "url": "fichajugador.html?player=rodritarin"
            },
            {
                "src": "https://i.postimg.cc/V6ScxHbr/David-Costas-PNG.webp",
                "alt": "Defensa 4",
                "number": "-",
                "name": "David Costas",
                "url": "fichajugador.html?player=davidcostas"
            },
            {
                "src": "https://i.postimg.cc/Wb0spKY0/Dani-Calvo-PNG.webp",
                "alt": "Defensa 5",
                "number": "-",
                "name": "Dani Calvo",
                "url": "fichajugador.html?player=danicalvo"
            },
            {
                "src": "https://i.postimg.cc/0NDQTjR1/Bola-o-PNG.webp",
                "alt": "Defensa 6",
                "number": "-",
                "name": "Bolaño",
                "url": "fichajugador.html?player=bolano"
            },
            {
                "src": "https://i.postimg.cc/SNHmm4GS/Carlos-Isaac-PNG.webp",
                "alt": "Defensa 7",
                "number": "-",
                "name": "Carlos Isaac",
                "url": "fichajugador.html?player=carlosisaac"
            },
            {
                "src": "https://i.postimg.cc/mkXpTbfT/Pierre-Cornud-PNG.webp",
                "alt": "Defensa 8",
                "number": "-",
                "name": "Pierre Cornud",
                "url": "fichajugador.html?player=pierrecornud"
            },
            {
                "src": "https://i.postimg.cc/tC99TkKf/Mossa-PNG.webp",
                "alt": "Defensa 9",
                "number": "-",
                "name": "Mossa",
                "url": "fichajugador.html?player=mossa"
            },
            {
                "src": "https://i.postimg.cc/yYdPX4cz/Lucas-PNG.webp",
                "alt": "Defensa 10",
                "number": "-",
                "name": "Lucas",
                "url": "fichajugador.html?player=lucas"
            },
            {
                "src": "https://i.postimg.cc/tCJFL3r0/Javi-Moreno-PNG.webp",
                "alt": "Defensa 11",
                "number": "-",
                "name": "Javi Moreno",
                "url": "fichajugador.html?player=javimoreno"
            },
            {
                "src": "https://i.postimg.cc/CxD7QC1h/Ren-P-rez-PNG.webp",
                "alt": "Defensa 12",
                "number": "-",
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
                "number": "-",
                "name": "Hugo Rama",
                "url": "fichajugador.html?player=hugorama"
            },
            {
                "src": "https://i.postimg.cc/ydshDwst/Luismi-casco-PNG.webp",
                "alt": "Centrocampista 2",
                "number": "-",
                "name": "Luismi",
                "url": "fichajugador.html?player=luismi"
            },
            {
                "src": "https://i.postimg.cc/sxFrP9Hk/Javi-Mier-PNG.webp",
                "alt": "Centrocampista 3",
                "number": "-",
                "name": "Javi Mier",
                "url": "fichajugador.html?player=javimier"
            },
            {
                "src": "https://i.postimg.cc/3rDLPHWC/Viti-PNG.webp",
                "alt": "Centrocampista 4",
                "number": "-",
                "name": "Viti",
                "url": "fichajugador.html?player=viti"
            },
            {
                "src": "https://i.postimg.cc/854YcdQd/Sangalli-PNG.webp",
                "alt": "Centrocampista 5",
                "number": "-",
                "name": "Sangalli",
                "url": "fichajugador.html?player=sangalli"
            },
            {
                "src": "https://i.postimg.cc/v82kfvkD/Borja-S-nchez-PNG.webp",
                "alt": "Centrocampista 6",
                "number": "-",
                "name": "Borja Sánchez",
                "url": "fichajugador.html?player=borjasanchez"
            },
            {
                "src": "https://i.postimg.cc/y6DZjFvk/Jirka-PNG.webp",
                "alt": "Centrocampista 7",
                "number": "-",
                "name": "Jirka",
                "url": "fichajugador.html?player=jirka"
            },
            {
                "src": "https://i.postimg.cc/qMxTnKsF/Jimmy-PNG.webp",
                "alt": "Centrocampista 8",
                "number": "-",
                "name": "Jimmy",
                "url": "fichajugador.html?player=jimmy"
            },
            {
                "src": "https://i.postimg.cc/3RSSjKLz/Brugman-PNG.webp",
                "alt": "Centrocampista 9",
                "number": "-",
                "name": "Brugman",
                "url": "fichajugador.html?player=brugman"
            },
            {
                "src": "https://i.postimg.cc/ZRNkqvYV/Joni-Montiel-PNG.webp",
                "alt": "Centrocampista 10",
                "number": "-",
                "name": "Joni Montiel",
                "url": "fichajugador.html?player=jonimontiel"
            },
            {
                "src": "https://i.postimg.cc/XJ9Vzz5j/Pombo-PNG.webp",
                "alt": "Centrocampista 11",
                "number": "-",
                "name": "Pombo",
                "url": "fichajugador.html?player=pombo"
            },
            {
                "src": "https://i.postimg.cc/dV30nntX/lex-Cardero-PNG.webp",
                "alt": "Centrocampista 12",
                "number": "-",
                "name": "Álex Cardero",
                "url": "fichajugador.html?player=alexcardero"
            },
            {
                "src": "https://i.postimg.cc/d3P8M3Vb/Yayo-PNG.webp",
                "alt": "Centrocampista 13",
                "number": "-",
                "name": "Yayo",
                "url": "fichajugador.html?player=yayo"
            },
            {
                "src": "https://i.postimg.cc/5tZGD95v/Joselu-PNG.webp",
                "alt": "Centrocampista 14",
                "number": "-",
                "name": "Joselu",
                "url": "fichajugador.html?player=joselu"
            },
            {
                "src": "https://i.postimg.cc/PJF1FJYn/Mangel-PNG.webp",
                "alt": "Centrocampista 15",
                "number": "-",
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
                "number": "-",
                "name": "Borja Bastón",
                "url": "fichajugador.html?player=borjabaston"
            },
            {
                "src": "https://i.postimg.cc/Sx688kVd/Obeng-PNG.webp",
                "alt": "Delantero 2",
                "number": "-",
                "name": "Obeng",
                "url": "fichajugador.html?player=obeng"
            },
            {
                "src": "https://i.postimg.cc/Y9fyy5pz/Matheus-Ai-s-PNG.webp",
                "alt": "Delantero 3",
                "number": "-",
                "name": "Matheus Aiás",
                "url": "fichajugador.html?player=matheusaias"
            },
            {
                "src": "https://i.postimg.cc/8CTpYSGZ/Javi-Cueto-PNG.webp",
                "alt": "Delantero 4",
                "number": "-",
                "name": "Javi Cueto",
                "url": "fichajugador.html?player=javicueto"
            },
            {
                "src": "https://i.postimg.cc/kXjLCPWj/Mario-Fuente-PNG.webp",
                "alt": "Delantero 5",
                "number": "-",
                "name": "Mario Fuente",
                "url": "fichajugador.html?player=mariofuente"
            },
            {
                "src": "https://i.postimg.cc/FzYCs7yD/Vanderson_PNG.webp",
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
                "number": "-",
                "name": "Femenías",
                "url": "fichajugador.html?player=femenias"
            },
            {
                "src": "https://i.postimg.cc/CLs032K5/Braz-o-PNG.webp",
                "alt": "Portero 2",
                "number": "-",
                "name": "Brazão",
                "url": "fichajugador.html?player=brazao"
            },
            {
                "src": "https://i.postimg.cc/GtkRh7JM/Berto-H-rreo-PNG.webp",
                "alt": "Portero 3",
                "number": "-",
                "name": "Berto Hórreo",
                "url": "fichajugador.html?player=bertohorreo"
            }
        ],
        "defenders": [
            {
                "src": "https://i.postimg.cc/5y3pnfNw/Grippo-PNG.webp",
                "alt": "Defensa 1",
                "number": "-",
                "name": "Grippo",
                "url": "fichajugador.html?player=grippo"
            },
            {
                "src": "https://i.postimg.cc/VkT0y2Jn/Arribas-PNG.webp",
                "alt": "Defensa 2",
                "number": "-",
                "name": "Arribas",
                "url": "fichajugador.html?player=arribas"
            },
            {
                "src": "https://i.postimg.cc/J761dZDB/Carlos-Hern-ndez-PNG.webp",
                "alt": "Defensa 3",
                "number": "-",
                "name": "Carlos Hernández",
                "url": "fichajugador.html?player=carloshernandez"
            },
            {
                "src": "https://i.postimg.cc/hv5QSY2k/Johannesson-PNG.webp",
                "alt": "Defensa 4",
                "number": "-",
                "name": "Johannesson",
                "url": "fichajugador.html?player=johannesson"
            },
            {
                "src": "https://i.postimg.cc/MKfv7dPG/Juanjo-Nieto-PNG.webp",
                "alt": "Defensa 5",
                "number": "-",
                "name": "Juanjo Nieto",
                "url": "fichajugador.html?player=juanjonieto"
            },
            {
                "src": "https://i.postimg.cc/0NDQTjR1/Bola-o-PNG.webp",
                "alt": "Defensa 6",
                "number": "-",
                "name": "Bolaño",
                "url": "fichajugador.html?player=bolano"
            },
            {
                "src": "https://i.postimg.cc/tC99TkKf/Mossa-PNG.webp",
                "alt": "Defensa 7",
                "number": "-",
                "name": "Mossa",
                "url": "fichajugador.html?player=mossa"
            },
            {
                "src": "https://i.postimg.cc/yYdPX4cz/Lucas-PNG.webp",
                "alt": "Defensa 8",
                "number": "-",
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
                "number": "-",
                "name": "Édgar",
                "url": "fichajugador.html?player=edgar"
            },
            {
                "src": "https://i.postimg.cc/ZRdBHHjZ/Aburjania-PNG.webp",
                "alt": "Centrocampista 2",
                "number": "-",
                "name": "Aburjania",
                "url": "fichajugador.html?player=aburjania"
            },
            {
                "src": "https://i.postimg.cc/854YcdQd/Sangalli-PNG.webp",
                "alt": "Centrocampista 3",
                "number": "-",
                "name": "Sangalli",
                "url": "fichajugador.html?player=sangalli"
            },
            {
                "src": "https://i.postimg.cc/v82kfvkD/Borja-S-nchez-PNG.webp",
                "alt": "Centrocampista 4",
                "number": "-",
                "name": "Borja Sánchez",
                "url": "fichajugador.html?player=borjasanchez"
            },
            {
                "src": "https://i.postimg.cc/qMxTnKsF/Jimmy-PNG.webp",
                "alt": "Centrocampista 5",
                "number": "-",
                "name": "Jimmy",
                "url": "fichajugador.html?player=jimmy"
            },
            {
                "src": "https://i.postimg.cc/T2srvkpV/Nahuel-PNG.webp",
                "alt": "Centrocampista 6",
                "number": "-",
                "name": "Nahuel",
                "url": "fichajugador.html?player=nahuel"
            },
            {
                "src": "https://i.postimg.cc/3rDLPHWC/Viti-PNG.webp",
                "alt": "Centrocampista 7",
                "number": "-",
                "name": "Viti",
                "url": "fichajugador.html?player=viti"
            },
            {
                "src": "https://i.postimg.cc/3xF7mcGm/Cedric-PNG.webp",
                "alt": "Centrocampista 8",
                "number": "-",
                "name": "Cedric",
                "url": "fichajugador.html?player=cedric"
            },
            {
                "src": "https://i.postimg.cc/Cxp4yZ9w/Tejera-PNG.webp",
                "alt": "Centrocampista 9",
                "number": "-",
                "name": "Tejera",
                "url": "fichajugador.html?player=tejera"
            },
            {
                "src": "https://i.postimg.cc/8PzSR5ZP/Riki-PNG.webp",
                "alt": "Centrocampista 10",
                "number": "-",
                "name": "Riki",
                "url": "fichajugador.html?player=riki"
            },
            {
                "src": "https://i.postimg.cc/59pY3XSX/Edu-Cortina-PNG.webp",
                "alt": "Centrocampista 11",
                "number": "-",
                "name": "Edu Cortina",
                "url": "fichajugador.html?player=educortina"
            },
            {
                "src": "https://i.postimg.cc/yYwGr8VH/Borja-Valle-PNG.webp",
                "alt": "Centrocampista 12",
                "number": "-",
                "name": "Borja Valle",
                "url": "fichajugador.html?player=borjavalle"
            },
            {
                "src": "https://i.postimg.cc/rss30hkG/Ton_Ripoll_PNG.webp",
                "alt": "Centrocampista 13",
                "number": "-",
                "name": "Ton Ripoll",
                "url": "fichajugador.html?player=tonripoll"
            },
            {
                "src": "https://i.postimg.cc/sxFrP9Hk/Javi-Mier-PNG.webp",
                "alt": "Centrocampista 14",
                "number": "-",
                "name": "Javi Mier",
                "url": "fichajugador.html?player=javimier"
            },
            {
                "src": "https://i.postimg.cc/5tZGD95v/Joselu-PNG.webp",
                "alt": "Centrocampista 15",
                "number": "-",
                "name": "Joselu",
                "url": "fichajugador.html?player=joselu"
            },
            {
                "src": "https://i.postimg.cc/dV30nntX/lex-Cardero-PNG.webp",
                "alt": "Centrocampista 16",
                "number": "-",
                "name": "Álex Cardero",
                "url": "fichajugador.html?player=alexcardero"
            },
            {
                "src": "https://i.postimg.cc/tJY8G7hx/resized_Sandoval_PNG.png",
                "alt": "Centrocampista 17",
                "number": "-",
                "name": "Sandoval",
                "url": "fichajugador.html?player=sandoval"
            },
            {
                "src": "https://i.postimg.cc/sXgyDgQL/Guille-Bernab-u-PNG.webp",
                "alt": "Centrocampista 18",
                "number": "-",
                "name": "Guille Bernabéu",
                "url": "fichajugador.html?player=guillebernabeu"
            }
        ],
        "forwards": [
            {
                "src": "https://i.postimg.cc/RZhhCmyq/Rodri-R-os-PNG.webp",
                "alt": "Delantero 1",
                "number": "-",
                "name": "Rodrigo",
                "url": "fichajugador.html?player=rodrigo"
            },
            {
                "src": "https://i.postimg.cc/j2168cJh/Mujica-PNG.webp",
                "alt": "Delantero 2",
                "number": "-",
                "name": "Mujica",
                "url": "fichajugador.html?player=mujica"
            },
            {
                "src": "https://i.postimg.cc/Sx688kVd/Obeng-PNG.webp",
                "alt": "Delantero 3",
                "number": "-",
                "name": "Obeng",
                "url": "fichajugador.html?player=obeng"
            },
            {
                "src": "https://i.postimg.cc/900jhmgB/Blanco-Leschuk-PNG.webp",
                "alt": "Delantero 4",
                "number": "-",
                "name": "Blanco Leschuk",
                "url": "fichajugador.html?player=blancoleschuk"
            },
            {
                "src": "https://i.postimg.cc/8CTpYSGZ/Javi-Cueto-PNG.webp",
                "alt": "Delantero 5",
                "number": "-",
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
                "number": "-",
                "name": "Alfonso Herrero",
                "url": "fichajugador.html?player=alfonsoherrero"
            },
            {
                "src": "https://i.postimg.cc/L5S7vHLT/Champagne-PNG.webp",
                "alt": "Portero 2",
                "number": "-",
                "name": "Champagne",
                "url": "fichajugador.html?player=champagne"
            },
            {
                "src": "https://i.postimg.cc/qv2KH43n/Lunin-PNG.webp",
                "alt": "Portero 3",
                "number": "-",
                "name": "Lunin",
                "url": "fichajugador.html?player=lunin"
            }
        ],
        "defenders": [
            {
                "src": "https://i.postimg.cc/hv5QSY2k/Johannesson-PNG.webp",
                "alt": "Defensa 1",
                "number": "-",
                "name": "Johannesson",
                "url": "fichajugador.html?player=johannesson"
            },
            {
                "src": "https://i.postimg.cc/5y3pnfNw/Grippo-PNG.webp",
                "alt": "Defensa 2",
                "number": "-",
                "name": "Grippo",
                "url": "fichajugador.html?player=grippo"
            },
            {
                "src": "https://i.postimg.cc/VkT0y2Jn/Arribas-PNG.webp",
                "alt": "Defensa 3",
                "number": "-",
                "name": "Arribas",
                "url": "fichajugador.html?player=arribas"
            },
            {
                "src": "https://i.postimg.cc/HkhcTNDF/resized_Javi_Fernández_PNG.png",
                "alt": "Defensa 4",
                "number": "-",
                "name": "Javi Fernández",
                "url": "fichajugador.html?player=javifernandez"
            },
            {
                "src": "https://i.postimg.cc/J761dZDB/Carlos-Hern-ndez-PNG.webp",
                "alt": "Defensa 5",
                "number": "-",
                "name": "Carlos Hernández",
                "url": "fichajugador.html?player=carloshernandez"
            },
            {
                "src": "https://i.postimg.cc/MKfv7dPG/Juanjo-Nieto-PNG.webp",
                "alt": "Defensa 6",
                "number": "-",
                "name": "Juanjo Nieto",
                "url": "fichajugador.html?player=juanjonieto"
            },
            {
                "src": "https://i.postimg.cc/0NDQTjR1/Bola-o-PNG.webp",
                "alt": "Defensa 7",
                "number": "-",
                "name": "Bolaño",
                "url": "fichajugador.html?player=bolano"
            },
            {
                "src": "https://i.postimg.cc/tC99TkKf/Mossa-PNG.webp",
                "alt": "Defensa 8",
                "number": "-",
                "name": "Mossa",
                "url": "fichajugador.html?player=mossa"
            },
            {
                "src": "https://i.postimg.cc/yYdPX4cz/Lucas-PNG.webp",
                "alt": "Defensa 9",
                "number": "-",
                "name": "Lucas",
                "url": "fichajugador.html?player=lucas"
            },
            {
                "src": "https://i.postimg.cc/dthTWq1w/Jorge-Mier-PNG.webp",
                "alt": "Defensa 10",
                "number": "-",
                "name": "Jorge Mier",
                "url": "fichajugador.html?player=jorgemier"
            },
            {
                "src": "https://i.postimg.cc/50cXCFt6/resized_Josín_PNG.png",
                "alt": "Defensa 11",
                "number": "-",
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
                "number": "-",
                "name": "Luismi",
                "url": "fichajugador.html?player=luismi"
            },
            {
                "src": "https://i.postimg.cc/sXbhpqr3/Omar-Ramos-PNG.webp",
                "alt": "Centrocampista 2",
                "number": "-",
                "name": "Omar Ramos",
                "url": "fichajugador.html?player=omarramos"
            },
            {
                "src": "https://i.postimg.cc/7YfRPTB7/Sebas-Coris-PNG.webp",
                "alt": "Centrocampista 3",
                "number": "-",
                "name": "Sebas Coris",
                "url": "fichajugador.html?player=sebascoris"
            },
            {
                "src": "https://i.postimg.cc/854YcdQd/Sangalli-PNG.webp",
                "alt": "Centrocampista 4",
                "number": "-",
                "name": "Sangalli",
                "url": "fichajugador.html?player=sangalli"
            },
            {
                "src": "https://i.postimg.cc/qMxTnKsF/Jimmy-PNG.webp",
                "alt": "Centrocampista 5",
                "number": "-",
                "name": "Jimmy",
                "url": "fichajugador.html?player=jimmy"
            },
            {
                "src": "https://i.postimg.cc/v82kfvkD/Borja-S-nchez-PNG.webp",
                "alt": "Centrocampista 6",
                "number": "-",
                "name": "Borja Sánchez",
                "url": "fichajugador.html?player=borjasanchez"
            },
            {
                "src": "https://i.postimg.cc/Cxp4yZ9w/Tejera-PNG.webp",
                "alt": "Centrocampista 7",
                "number": "-",
                "name": "Tejera",
                "url": "fichajugador.html?player=tejera"
            },
            {
                "src": "https://i.postimg.cc/Y9z38tdt/Lolo-Gonz-lez-PNG.webp",
                "alt": "Centrocampista 8",
                "number": "-",
                "name": "Lolo González",
                "url": "fichajugador.html?player=lologonzalez"
            },
            {
                "src": "https://i.postimg.cc/59pY3XSX/Edu-Cortina-PNG.webp",
                "alt": "Centrocampista 9",
                "number": "-",
                "name": "Edu Cortina",
                "url": "fichajugador.html?player=educortina"
            },
            {
                "src": "https://i.postimg.cc/8PzSR5ZP/Riki-PNG.webp",
                "alt": "Centrocampista 10",
                "number": "-",
                "name": "Riki",
                "url": "fichajugador.html?player=riki"
            },
            {
                "src": "https://i.postimg.cc/sxFrP9Hk/Javi-Mier-PNG.webp",
                "alt": "Centrocampista 11",
                "number": "-",
                "name": "Javi Mier",
                "url": "fichajugador.html?player=javimier"
            },
            {
                "src": "https://i.postimg.cc/3rDLPHWC/Viti-PNG.webp",
                "alt": "Centrocampista 12",
                "number": "-",
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
                "number": "-",
                "name": "Joselu",
                "url": "fichajugador.html?player=joselu"
            },
            {
                "src": "https://i.postimg.cc/RZhhCmyq/Rodri-R-os-PNG.webp",
                "alt": "Delantero 2",
                "number": "-",
                "name": "Rodrigo",
                "url": "fichajugador.html?player=rodrigo"
            },
            {
                "src": "https://i.postimg.cc/yNqKqzzM/Sa-l-Berj-n-PNG.webp",
                "alt": "Delantero 3",
                "number": "-",
                "name": "Saúl Berjón",
                "url": "fichajugador.html?player=saulberjon"
            },
            {
                "src": "https://i.postimg.cc/x8NgVBQZ/Yoel-B-rcenas-PNG.webp",
                "alt": "Delantero 4",
                "number": "-",
                "name": "Yoél Bárcenas",
                "url": "fichajugador.html?player=yoelbarcenas"
            },
            {
                "src": "https://i.postimg.cc/QNv0JNkZ/Ortu-o-PNG.webp",
                "alt": "Delantero 5",
                "number": "-",
                "name": "Ortuño",
                "url": "fichajugador.html?player=ortuno"
            },
            {
                "src": "https://i.postimg.cc/4NrnBqn0/Ibra-PNG.webp",
                "alt": "Delantero 6",
                "number": "-",
                "name": "Ibra",
                "url": "fichajugador.html?player=ibra"
            },
            {
                "src": "https://i.postimg.cc/g2h9HB6N/Steven_PNG.webp",
                "alt": "Delantero 7",
                "number": "-",
                "name": "Steven",
                "url": "fichajugador.html?player=steven"
            },
            {
                "src": "https://i.postimg.cc/8CTpYSGZ/Javi-Cueto-PNG.webp",
                "alt": "Delantero 8",
                "number": "-",
                "name": "Javi Cueto",
                "url": "fichajugador.html?player=javicueto"
            },
            {
                "src": "https://i.postimg.cc/Sx688kVd/Obeng-PNG.webp",
                "alt": "Delantero 9",
                "number": "-",
                "name": "Obeng",
                "url": "fichajugador.html?player=obeng"
            },
            {
                "src": "https://i.postimg.cc/vB6S0CMj/resized_Vanderson_PNG.png",
                "alt": "Delantero 10",
                "number": "-",
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
                "number": "-",
                "name": "Alfonso Herrero",
                "url": "fichajugador.html?player=alfonsoherrero"
            },
            {
                "src": "https://i.postimg.cc/L5S7vHLT/Champagne-PNG.webp",
                "alt": "Portero 2",
                "number": "-",
                "name": "Champagne",
                "url": "fichajugador.html?player=champagne"
            },
            {
                "src": "https://i.postimg.cc/7Y6X4GHz/Gorka-Giralt-PNG.webp",
                "alt": "Portero 3",
                "number": "-",
                "name": "Gorka Giralt",
                "url": "fichajugador.html?player=gorkagiralt"
            }
        ],
        "defenders": [
            {
                "src": "https://i.postimg.cc/hv5QSY2k/Johannesson-PNG.webp",
                "alt": "Defensa 1",
                "number": "-",
                "name": "Johannesson",
                "url": "fichajugador.html?player=johannesson"
            },
            {
                "src": "https://i.postimg.cc/g2MqxMn2/Alan-s-PNG.webp",
                "alt": "Defensa 2",
                "number": "-",
                "name": "Alanís",
                "url": "fichajugador.html?player=alanis"
            },
            {
                "src": "https://i.postimg.cc/W3ZH6Rkn/Forl-n-PNG.webp",
                "alt": "Defensa 3",
                "number": "-",
                "name": "Forlín",
                "url": "fichajugador.html?player=forlin"
            },
            {
                "src": "https://i.postimg.cc/J761dZDB/Carlos-Hern-ndez-PNG.webp",
                "alt": "Defensa 4",
                "number": "-",
                "name": "Carlos Hernández",
                "url": "fichajugador.html?player=carloshernandez"
            },
            {
                "src": "https://i.postimg.cc/0NDQTjR1/Bola-o-PNG.webp",
                "alt": "Defensa 5",
                "number": "-",
                "name": "Bolaño",
                "url": "fichajugador.html?player=bolano"
            },
            {
                "src": "https://i.postimg.cc/sgSsXLnp/Carlos-Mart-nez-PNG.webp",
                "alt": "Defensa 6",
                "number": "-",
                "name": "Carlos Martínez",
                "url": "fichajugador.html?player=carlosmartinez"
            },
            {
                "src": "https://i.postimg.cc/tC99TkKf/Mossa-PNG.webp",
                "alt": "Defensa 7",
                "number": "-",
                "name": "Mossa",
                "url": "fichajugador.html?player=mossa"
            },
            {
                "src": "https://i.postimg.cc/kXjDyH4P/resized_Prendes_PNG.png",
                "alt": "Defensa 8",
                "number": "-",
                "name": "Prendes",
                "url": "fichajugador.html?player=prendes"
            },
            {
                "src": "https://i.postimg.cc/0jWDzjyH/Javi-Hern-ndez-PNG.webp",
                "alt": "Defensa 9",
                "number": "-",
                "name": "Javi Hernández",
                "url": "fichajugador.html?player=javihernandez"
            },
            {
                "src": "https://i.postimg.cc/dthTWq1w/Jorge-Mier-PNG.webp",
                "alt": "Defensa 10",
                "number": "-",
                "name": "Jorge Mier",
                "url": "fichajugador.html?player=jorgemier"
            },
            {
                "src": "https://i.postimg.cc/50cXCFt6/resized_Josín_PNG.png",
                "alt": "Defensa 11",
                "number": "-",
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
                "number": "-",
                "name": "Aarón Ñíguez",
                "url": "fichajugador.html?player=aaronniguez"
            },
            {
                "src": "https://i.postimg.cc/sXbhpqr3/Omar-Ramos-PNG.webp",
                "alt": "Centrocampista 2",
                "number": "-",
                "name": "Omar Ramos",
                "url": "fichajugador.html?player=omarramos"
            },
            {
                "src": "https://i.postimg.cc/nzKJkQ8M/Ram-n-Folch-PNG.webp",
                "alt": "Centrocampista 3",
                "number": "-",
                "name": "Ramón Folch",
                "url": "fichajugador.html?player=ramonfolch"
            },
            {
                "src": "https://i.postimg.cc/J01Wd4mx/Richard-Boateng-PNG.webp",
                "alt": "Centrocampista 4",
                "number": "-",
                "name": "Richard Boateng",
                "url": "fichajugador.html?player=richardboateng"
            },
            {
                "src": "https://i.postimg.cc/Cxp4yZ9w/Tejera-PNG.webp",
                "alt": "Centrocampista 5",
                "number": "-",
                "name": "Tejera",
                "url": "fichajugador.html?player=tejera"
            },
            {
                "src": "https://i.postimg.cc/gjvPgXfn/Javi-Mu-oz-PNG.webp",
                "alt": "Centrocampista 6",
                "number": "-",
                "name": "Javi Muñoz",
                "url": "fichajugador.html?player=javimunoz"
            },
            {
                "src": "https://i.postimg.cc/3rDLPHWC/Viti-PNG.webp",
                "alt": "Centrocampista 7",
                "number": "-",
                "name": "Viti",
                "url": "fichajugador.html?player=viti"
            },
            {
                "src": "https://i.postimg.cc/tJY8G7hx/resized_Sandoval_PNG.png",
                "alt": "Centrocampista 8",
                "number": "-",
                "name": "Sandoval",
                "url": "fichajugador.html?player=sandoval"
            },
            {
                "src": "https://i.postimg.cc/59pY3XSX/Edu-Cortina-PNG.webp",
                "alt": "Centrocampista 9",
                "number": "-",
                "name": "Edu Cortina",
                "url": "fichajugador.html?player=educortina"
            },
            {
                "src": "https://i.postimg.cc/v82kfvkD/Borja-S-nchez-PNG.webp",
                "alt": "Centrocampista 10",
                "number": "-",
                "name": "Borja Sánchez",
                "url": "fichajugador.html?player=borjasanchez"
            },
            {
                "src": "https://i.postimg.cc/qMxTnKsF/Jimmy-PNG.webp",
                "alt": "Centrocampista 11",
                "number": "-",
                "name": "Jimmy",
                "url": "fichajugador.html?player=jimmy"
            },
            {
                "src": "https://i.postimg.cc/sxFrP9Hk/Javi-Mier-PNG.webp",
                "alt": "Centrocampista 12",
                "number": "-",
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
                "number": "-",
                "name": "Toché",
                "url": "fichajugador.html?player=toche"
            },
            {
                "src": "https://i.postimg.cc/yNqKqzzM/Sa-l-Berj-n-PNG.webp",
                "alt": "Delantero 2",
                "number": "-",
                "name": "Saúl Berjón",
                "url": "fichajugador.html?player=saulberjon"
            },
            {
                "src": "https://i.postimg.cc/x8NgVBQZ/Yoel-B-rcenas-PNG.webp",
                "alt": "Delantero 3",
                "number": "-",
                "name": "Yoél Bárcenas",
                "url": "fichajugador.html?player=yoelbarcenas"
            },
            {
                "src": "https://i.postimg.cc/4NrnBqn0/Ibra-PNG.webp",
                "alt": "Delantero 4",
                "number": "-",
                "name": "Ibra",
                "url": "fichajugador.html?player=ibra"
            },
            {
                "src": "https://i.postimg.cc/ydtWtbvW/Joselu-PNG.webp",
                "alt": "Delantero 5",
                "number": "-",
                "name": "Joselu",
                "url": "fichajugador.html?player=joselu"
            },
            {
                "src": "https://i.postimg.cc/g2h9HB6N/Steven_PNG.webp",
                "alt": "Delantero 6",
                "number": "-",
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
    },

    "2017-18": {
        "goalkeepers": [
            {
                "src": "https://i.postimg.cc/T2WY4Qm5/Alfonso-Herrero-PNG.webp",
                "alt": "Portero 1",
                "number": "-",
                "name": "Alfonso Herrero",
                "url": "fichajugador.html?player=alfonsoherrero"
            },
            {
                "src": "https://i.postimg.cc/d1sr9pDC/Juan-Carlos-PNG.webp",
                "alt": "Portero 2",
                "number": "-",
                "name": "Juan Carlos",
                "url": "fichajugador.html?player=juancarlos"
            },
            {
                "src": "https://i.postimg.cc/7Y6X4GHz/Gorka-Giralt-PNG.webp",
                "alt": "Portero 3",
                "number": "-",
                "name": "Gorka Giralt",
                "url": "fichajugador.html?player=gorkagiralt"
            }
        ],
        "defenders": [
            {
                "src": "https://i.postimg.cc/hv5QSY2k/Johannesson-PNG.webp",
                "alt": "Defensa 1",
                "number": "-",
                "name": "Johannesson",
                "url": "fichajugador.html?player=johannesson"
            },
            {
                "src": "https://i.postimg.cc/ryrJhXp6/Varela_PNG.webp",
                "alt": "Defensa 2",
                "number": "-",
                "name": "Varela",
                "url": "fichajugador.html?player=varela"
            },
            {
                "src": "https://i.postimg.cc/CLp4XPZR/Verdés_PNG.webp",
                "alt": "Defensa 3",
                "number": "-",
                "name": "Verdés",
                "url": "fichajugador.html?player=verdes"
            },
            {
                "src": "https://i.postimg.cc/W3ZH6Rkn/Forl-n-PNG.webp",
                "alt": "Defensa 4",
                "number": "-",
                "name": "Forlín",
                "url": "fichajugador.html?player=forlin"
            },
            {
                "src": "https://i.postimg.cc/J761dZDB/Carlos-Hern-ndez-PNG.webp",
                "alt": "Defensa 5",
                "number": "-",
                "name": "Carlos Hernández",
                "url": "fichajugador.html?player=carloshernandez"
            },
            {
                "src": "https://i.postimg.cc/0NDQTjR1/Bola-o-PNG.webp",
                "alt": "Defensa 6",
                "number": "-",
                "name": "Bolaño",
                "url": "fichajugador.html?player=bolano"
            },
            {
                "src": "https://i.postimg.cc/mD0SbV86/Valentini_(2017)_PNG.webp",
                "alt": "Defensa 7",
                "number": "-",
                "name": "Valentini",
                "url": "fichajugador.html?player=valentini"
            },
            {
                "src": "https://i.postimg.cc/qRqFthk9/Cotugno_PNG.webp",
                "alt": "Defensa 8",
                "number": "-",
                "name": "Cotugno",
                "url": "fichajugador.html?player=cotugno"
            },
            {
                "src": "https://i.postimg.cc/tC99TkKf/Mossa_PNG.webp",
                "alt": "Defensa 9",
                "number": "-",
                "name": "Mossa",
                "url": "fichajugador.html?player=mossa"
            },
            {
                "src": "https://i.postimg.cc/nL4dCKbR/Prendes_PNG.webp",
                "alt": "Defensa 10",
                "number": "-",
                "name": "Prendes",
                "url": "fichajugador.html?player=prendes"
            },
            {
                "src": "https://i.postimg.cc/02sbphRN/lvaro-2017.webp",
                "alt": "Defensa 11",
                "number": "-",
                "name": "Álvaro",
                "url": "fichajugador.html?player=alvaro"
            },
            {
                "src": "https://i.postimg.cc/WzPf59mP/Fran_(2018)_PNG.webp",
                "alt": "Defensa 12",
                "number": "-",
                "name": "Fran",
                "url": "fichajugador.html?player=fran"
            },
            {
                "src": "https://i.postimg.cc/Px6P4cnC/Josín_PNG.webp",
                "alt": "Defensa 13",
                "number": "-",
                "name": "Josín",
                "url": "fichajugador.html?player=josin"
            },
            {
                "src": "https://i.postimg.cc/dthTWq1w/Jorge_Mier_PNG.webp",
                "alt": "Defensa 14",
                "number": "-",
                "name": "Jorge Mier",
                "url": "fichajugador.html?player=jorgemier"
            },
            {
                "src": "https://i.postimg.cc/htZy2X2f/Gabri-PNG-Gabriel-Sebasti-n-Cardozo-Tom-s-2017.webp",
                "alt": "Defensa 15",
                "number": "-",
                "name": "Gabri",
                "url": "fichajugador.html?player=gabri"
            },
            {
                "src": "https://i.postimg.cc/FKBMVgn9/Emilio_Morilla_PNG.webp",
                "alt": "Defensa 16",
                "number": "-",
                "name": "Emilio Morilla",
                "url": "fichajugador.html?player=emiliomorilla"
            }
        ],
        "midfielders": [
            {
                "src": "https://i.postimg.cc/524zJw9q/Aar-n-guez-PNG.webp",
                "alt": "Centrocampista 1",
                "number": "-",
                "name": "Aarón Ñíguez",
                "url": "fichajugador.html?player=aaronniguez"
            },
            {
                "src": "https://i.postimg.cc/nzKJkQ8M/Ram-n-Folch-PNG.webp",
                "alt": "Centrocampista 2",
                "number": "-",
                "name": "Ramón Folch",
                "url": "fichajugador.html?player=ramonfolch"
            },
            {
                "src": "https://i.postimg.cc/Gm9bC2DS/Pucko_PNG.webp",
                "alt": "Centrocampista 3",
                "number": "-",
                "name": "Pucko",
                "url": "fichajugador.html?player=pucko"
            },
            {
                "src": "https://i.postimg.cc/Pr4gNjhs/Jorge_Ortiz_PNG.webp",
                "alt": "Centrocampista 4",
                "number": "-",
                "name": "Jorge Ortiz",
                "url": "fichajugador.html?player=jorgeortiz"
            },
            {
                "src": "https://i.postimg.cc/K8mJkkfJ/Yeboah_PNG.webp",
                "alt": "Centrocampista 5",
                "number": "-",
                "name": "Yeboah",
                "url": "fichajugador.html?player=yeboah"
            },
            {
                "src": "https://i.postimg.cc/fLzXzmvh/Mariga_PNG.webp",
                "alt": "Centrocampista 6",
                "number": "-",
                "name": "Mariga",
                "url": "fichajugador.html?player=mariga"
            },
            {
                "src": "https://i.postimg.cc/tg2QfGSN/Hidi_PNG.webp",
                "alt": "Centrocampista 7",
                "number": "-",
                "name": "Hidi",
                "url": "fichajugador.html?player=hidi"
            },
            {
                "src": "https://i.postimg.cc/m2b3Zx8H/David_Rocha_PNG.webp",
                "alt": "Centrocampista 8",
                "number": "-",
                "name": "David Rocha",
                "url": "fichajugador.html?player=davidrocha"
            },
            {
                "src": "https://i.postimg.cc/3rDLPHWC/Viti_PNG.webp",
                "alt": "Centrocampista 9",
                "number": "-",
                "name": "viti",
                "url": "fichajugador.html?player=viti"
            },
            {
                "src": "https://i.postimg.cc/nrVxrcX5/Asier-PNG.webp",
                "alt": "Centrocampista 10",
                "number": "-",
                "name": "Asier",
                "url": "fichajugador.html?player=asier"
            },
            {
                "src": "https://i.postimg.cc/59pY3XSX/Edu_Cortina_PNG.webp",
                "alt": "Centrocampista 11",
                "number": "-",
                "name": "Edu Cortina",
                "url": "fichajugador.html?player=educortina"
            },
            {
                "src": "https://i.postimg.cc/yYdPX4cz/Lucas_PNG.webp",
                "alt": "Centrocampista 12",
                "number": "-",
                "name": "Lucas",
                "url": "fichajugador.html?player=lucas"
            },
            {
                "src": "https://i.postimg.cc/VNbkP6tW/Ander-PNG.webp",
                "alt": "Centrocampista 13",
                "number": "-",
                "name": "Ander",
                "url": "fichajugador.html?player=ander"
            },
            {
                "src": "https://i.postimg.cc/sxFrP9Hk/Javi_Mier_PNG.webp",
                "alt": "Centrocampista 14",
                "number": "-",
                "name": "Javi Mier",
                "url": "fichajugador.html?player=javimier"
            },
            {
                "src": "https://i.postimg.cc/qMxTnKsF/Jimmy_PNG.webp",
                "alt": "Centrocampista 15",
                "number": "-",
                "name": "Jimmy",
                "url": "fichajugador.html?player=jimmy"
            },
            {
                "src": "https://i.postimg.cc/Wzzz3qdD/Ernesto-2017-PNG.webp",
                "alt": "Centrocampista 16",
                "number": "-",
                "name": "Ernesto",
                "url": "fichajugador.html?player=ernesto"
            },
            {
                "src": "https://i.postimg.cc/gcK4Lr2y/Juan-2017-PNG.webp",
                "alt": "Centrocampista 17",
                "number": "-",
                "name": "Juan",
                "url": "fichajugador.html?player=juan"
            },
            {
                "src": "https://i.postimg.cc/Wb3BDy4d/Sandoval_PNG.webp",
                "alt": "Centrocampista 18",
                "number": "-",
                "name": "Sandoval",
                "url": "fichajugador.html?player=sandoval"
            },
            {
                "src": "https://i.postimg.cc/J0yLZYQc/Guille_PNG.webp",
                "alt": "Centrocampista 19",
                "number": "-",
                "name": "Guille",
                "url": "fichajugador.html?player=guille"
            }
        ],
        "forwards": [
            {
                "src": "https://i.postimg.cc/wMrPhhqC/Toch-PNG.webp",
                "alt": "Delantero 1",
                "number": "-",
                "name": "Toché",
                "url": "fichajugador.html?player=toche"
            },
            {
                "src": "https://i.postimg.cc/Z5smwyf5/Linares_PNG.webp",
                "alt": "Delantero 2",
                "number": "-",
                "name": "Linares",
                "url": "fichajugador.html?player=linares"
            },
            {
                "src": "https://i.postimg.cc/zBmjN0d2/Fabbrini_PNG.webp",
                "alt": "Delantero 3",
                "number": "-",
                "name": "Fabbrini",
                "url": "fichajugador.html?player=fabbrini"
            },
            {
                "src": "https://i.postimg.cc/yNqKqzzM/Saúl_Berjón_PNG.webp",
                "alt": "Delantero 4",
                "number": "-",
                "name": "Saúl Berjón",
                "url": "fichajugador.html?player=saulberjon"
            },
            {
                "src": "https://i.postimg.cc/rmmtvWTZ/Olmes_García_PNG.webp",
                "alt": "Delantero 5",
                "number": "-",
                "name": "Olmes García",
                "url": "fichajugador.html?player=olmesgarcia"
            },
            {
                "src": "https://i.postimg.cc/Pq7RzdGp/resized_Steven_PNG.png",
                "alt": "Delantero 6",
                "number": "-",
                "name": "Steven",
                "url": "fichajugador.html?player=steven"
            },
            {
                "src": "https://i.postimg.cc/02mZWgcM/Owusu_PNG.webp",
                "alt": "Delantero 7",
                "number": "-",
                "name": "Owusu",
                "url": "fichajugador.html?player=owusu"
            },
            {
                "src": "https://i.postimg.cc/G2S5vkzk/Carlos_Cano_PNG.webp",
                "alt": "Delantero 8",
                "number": "-",
                "name": "Carlos Cano",
                "url": "fichajugador.html?player=carloscano"
            }
        ],
        "coaches": [
            {
                "src": "https://i.postimg.cc/NFXVkKKL/Anquela-entrenador-PNG.webp",
                "alt": "Entrenador 1",
                "number": "-",
                "name": "Anquela",
                "url": "fichajugador.html?player=anquela"
            }
        ]
    },

    "2016-17": {
        "goalkeepers": [
            {
                "src": "https://i.postimg.cc/fT22S725/Esteban-PNG.webp",
                "alt": "Portero 1",
                "number": "-",
                "name": "Esteban",
                "url": "fichajugador.html?player=esteban"
            },
            {
                "src": "https://i.postimg.cc/d1sr9pDC/Juan-Carlos-PNG.webp",
                "alt": "Portero 2",
                "number": "-",
                "name": "Juan Carlos",
                "url": "fichajugador.html?player=juancarlos"
            },
            {
                "src": "https://i.postimg.cc/T2WY4Qm5/Alfonso-Herrero-PNG.webp",
                "alt": "Portero 3",
                "number": "-",
                "name": "Alfonso Herrero",
                "url": "fichajugador.html?player=alfonsoherrero"
            }
        ],
        "defenders": [
            {
                "src": "https://i.postimg.cc/hv5QSY2k/Johannesson-PNG.webp",
                "alt": "Defensa 1",
                "number": "-",
                "name": "Johannesson",
                "url": "fichajugador.html?player=johannesson"
            },
            {
                "src": "https://i.postimg.cc/ryrJhXp6/Varela_PNG.webp",
                "alt": "Defensa 2",
                "number": "-",
                "name": "Varela",
                "url": "fichajugador.html?player=varela"
            },
            {
                "src": "https://i.postimg.cc/rsx2m0jq/David_Fernández_PNG.webp",
                "alt": "Defensa 3",
                "number": "-",
                "name": "David Fernández",
                "url": "fichajugador.html?player=davidfernandez"
            },
            {
                "src": "https://i.postimg.cc/CLp4XPZR/Verdés_PNG.webp",
                "alt": "Defensa 4",
                "number": "-",
                "name": "Verdés",
                "url": "fichajugador.html?player=verdes"
            },
            {
                "src": "https://i.postimg.cc/Vks2yHxf/Fernández_PNG.webp",
                "alt": "Defensa 5",
                "number": "-",
                "name": "Fernández",
                "url": "fichajugador.html?player=fernandez"
            },
            {
                "src": "https://i.postimg.cc/0NDQTjR1/Bola-o-PNG.webp",
                "alt": "Defensa 6",
                "number": "-",
                "name": "Bolaño",
                "url": "fichajugador.html?player=bolano"
            },
            {
                "src": "https://i.postimg.cc/YSYPQKgx/Peña_PNG.webp",
                "alt": "Defensa 7",
                "number": "-",
                "name": "Peña",
                "url": "fichajugador.html?player=pena"
            },
            {
                "src": "https://i.postimg.cc/V6ScxHbr/David_Costas_PNG.webp",
                "alt": "Defensa 8",
                "number": "-",
                "name": "David Costas",
                "url": "fichajugador.html?player=davidcostas"
            },
            {
                "src": "https://i.postimg.cc/X726vbcG/Óscar_Gil_PNG.webp",
                "alt": "Defensa 9",
                "number": "-",
                "name": "Óscar Gil",
                "url": "fichajugador.html?player=oscargil"
            },
            {
                "src": "https://i.postimg.cc/Px6P4cnC/Josín_PNG.webp",
                "alt": "Defensa 10",
                "number": "-",
                "name": "Josín",
                "url": "fichajugador.html?player=josin"
            },
            {
                "src": "https://i.postimg.cc/nL4dCKbR/Prendes_PNG.webpp",
                "alt": "Defensa 11",
                "number": "-",
                "name": "Prendes",
                "url": "fichajugador.html?player=prendes"
            },
            {
                "src": "https://i.postimg.cc/D02PWRdm/Iker_Berruezo_PNG.webp",
                "alt": "Defensa 12",
                "number": "-",
                "name": "Iker Berruezo",
                "url": "fichajugador.html?player=ikerberruezo"
            }
        ],
        "midfielders": [
            {
                "src": "https://i.postimg.cc/cJ2yZBWv/Jonathan_Vila_PNG.webp",
                "alt": "Centrocampista 1",
                "number": "-",
                "name": "Jonathan Vila",
                "url": "fichajugador.html?player=jonathanvila"
            },
            {
                "src": "https://i.postimg.cc/0yt1XqHd/Jon_Erice_PNG.webp",
                "alt": "Centrocampista 2",
                "number": "-",
                "name": "Jon Erice",
                "url": "fichajugador.html?player=jonerice"
            },
            {
                "src": "https://i.postimg.cc/wvjVWSZJ/Susaeta_PNG.webp",
                "alt": "Centrocampista 3",
                "number": "-",
                "name": "Susaeta",
                "url": "fichajugador.html?player=susaeta"
            },
            {
                "src": "https://i.postimg.cc/bYM8p8z6/Héctor_Nespral_PNG.webp",
                "alt": "Centrocampista 4",
                "number": "-",
                "name": "Héctor Nespral",
                "url": "fichajugador.html?player=hectornespral"
            },
            {
                "src": "https://i.postimg.cc/Dw4PHrxj/Lucas_Torró_PNG.webp",
                "alt": "Centrocampista 5",
                "number": "-",
                "name": "Lucas Torró",
                "url": "fichajugador.html?player=lucastorro"
            },
            {
                "src": "https://i.postimg.cc/Pr4gNjhs/Jorge_Ortiz_PNG.webp",
                "alt": "Centrocampista 6",
                "number": "-",
                "name": "Jorge Ortiz",
                "url": "fichajugador.html?player=jorgeortiz"
            },
            {
                "src": "https://i.postimg.cc/m2b3Zx8H/David_Rocha_PNG.webp",
                "alt": "Centrocampista 7",
                "number": "-",
                "name": "David Rocha",
                "url": "fichajugador.html?player=davidrocha"
            },
            {
                "src": "https://i.postimg.cc/yYPJLkhJ/Alaniz-PNG.webp",
                "alt": "Centrocampista 8",
                "number": "-",
                "name": "Alaniz",
                "url": "fichajugador.html?player=alaniz"
            },
            {
                "src": "https://i.postimg.cc/DZNz9Xj6/Nando_García_PNG.webp",
                "alt": "Centrocampista 9",
                "number": "-",
                "name": "Nando",
                "url": "fichajugador.html?player=nando"
            },
            {
                "src": "https://i.postimg.cc/FzPYs6Hy/Edu_Bedia_PNG.webp",
                "alt": "Centrocampista 10",
                "number": "-",
                "name": "Edu Bedia",
                "url": "fichajugador.html?player=edubedia"
            },
            {
                "src": "https://i.postimg.cc/cCtmQft8/Carlos_De_Pena_PNG.webp",
                "alt": "Centrocampista 11",
                "number": "-",
                "name": "Carlitos",
                "url": "fichajugador.html?player=carlitos"
            },
            {
                "src": "https://i.postimg.cc/qqFFrky2/Borja-PNG.webp",
                "alt": "Centrocampista 12",
                "number": "-",
                "name": "Borja",
                "url": "fichajugador.html?player=borja"
            },
            {
                "src": "https://i.postimg.cc/rmj1xQpm/Lula_PNG.webp",
                "alt": "Centrocampista 13",
                "number": "-",
                "name": "Lula",
                "url": "fichajugador.html?player=lula"
            },
            {
                "src": "https://i.postimg.cc/3rDLPHWC/Viti_PNG.webp",
                "alt": "Centrocampista 14",
                "number": "-",
                "name": "Viti",
                "url": "fichajugador.html?player=viti"
            }
        ],
        "forwards": [
            {
                "src": "https://i.postimg.cc/HL2chj1v/Michu_PNG.webp",
                "alt": "Delantero 1",
                "number": "-",
                "name": "Michu",
                "url": "fichajugador.html?player=michu"
            },
            {
                "src": "https://i.postimg.cc/wMrPhhqC/Toch-PNG.webp",
                "alt": "Delantero 2",
                "number": "-",
                "name": "Toché",
                "url": "fichajugador.html?player=toche"
            },
            {
                "src": "https://i.postimg.cc/Z5smwyf5/Linares_PNG.webp",
                "alt": "Delantero 3",
                "number": "-",
                "name": "Linares",
                "url": "fichajugador.html?player=linares"
            },
            {
                "src": "https://i.postimg.cc/L6fZKmdS/Jonathan_Pereira_PNG.webp",
                "alt": "Delantero 4",
                "number": "-",
                "name": "Jonathan Pereira",
                "url": "fichajugador.html?player=jonathanpereira"
            },
            {
                "src": "https://i.postimg.cc/yNqKqzzM/Saúl_Berjón_PNG.webp",
                "alt": "Delantero 5",
                "number": "-",
                "name": "Saúl Berjón",
                "url": "fichajugador.html?player=saulberjon"
            },
            {
                "src": "https://i.postimg.cc/CxF9TLZn/David_Álvarez_PNG.webp",
                "alt": "Delantero 6",
                "number": "-",
                "name": "David Álvarez",
                "url": "fichajugador.html?player=davidalvarez"
            },
            {
                "src": "https://i.postimg.cc/g2h9HB6N/Steven_PNG.webp",
                "alt": "Delantero 7",
                "number": "-",
                "name": "Steven",
                "url": "fichajugador.html?player=steven"
            }
        ],
        "coaches": [
            {
                "src": "https://i.postimg.cc/sxJPzz8w/Hierro-entrenador-PNG.webp",
                "alt": "Entrenador 1",
                "number": "-",
                "name": "Fernando Hierro",
                "url": "fichajugador.html?player=fernandohierro"
            }
        ]
    },
    "2015-16": {
        "goalkeepers": [
            {
                "src": "https://i.postimg.cc/fT22S725/Esteban-PNG.webp",
                "alt": "Portero 1",
                "number": "-",
                "name": "Esteban",
                "url": "fichajugador.html?player=esteban"
            },
            {
                "src": "https://i.postimg.cc/k5pRxGr0/Rubén_Miño_PNG.webp",
                "alt": "Portero 2",
                "number": "-",
                "name": "Rubén Miño",
                "url": "fichajugador.html?player=rubenmino"
            },
            {
                "src": "https://i.postimg.cc/qqmLn0Lg/Gorka_Magunazelaia_PNG.webp",
                "alt": "Portero 3",
                "number": "-",
                "name": "Gorka Magunazelaia",
                "url": "fichajugador.html?player=gorkamagunazelaia"
            }
        ],
        "defenders": [
            {
                "src": "https://i.postimg.cc/G3WcCrKc/Dani_Bautista_PNG.webp",
                "alt": "Defensa 1",
                "number": "-",
                "name": "Dani Bautista",
                "url": "fichajugador.html?player=danibautista"
            },
            {
                "src": "https://i.postimg.cc/rsx2m0jq/David_Fernández_PNG.webp",
                "alt": "Defensa 2",
                "number": "-",
                "name": "David Fernández",
                "url": "fichajugador.html?player=davidfernandez"
            },
            {
                "src": "https://i.postimg.cc/CLp4XPZR/Verdés_PNG.webp",
                "alt": "Defensa 3",
                "number": "-",
                "name": "Verdés",
                "url": "fichajugador.html?player=verdes"
            },
            {
                "src": "https://i.postimg.cc/Vks2yHxf/Fernández_PNG.webp",
                "alt": "Defensa 4",
                "number": "-",
                "name": "Fernández",
                "url": "fichajugador.html?player=fernandez"
            },
            {
                "src": "https://i.postimg.cc/XJgvvPY2/Borja-G-mez-PNG.webp",
                "alt": "Defensa 5",
                "number": "-",
                "name": "Borja Gómez",
                "url": "fichajugador.html?player=borjagomez"
            },
            {
                "src": "https://i.postimg.cc/YSYPQKgx/Peña_PNG.webp",
                "alt": "Defensa 6",
                "number": "-",
                "name": "Peña",
                "url": "fichajugador.html?player=pena"
            },
            {
                "src": "https://i.postimg.cc/k5m6XKyg/Josete_PNG.webp",
                "alt": "Defensa 7",
                "number": "-",
                "name": "Josete",
                "url": "fichajugador.html?player=josete"
            },
            {
                "src": "https://i.postimg.cc/vBTB2zzD/Nacho_López_PNG.webp",
                "alt": "Defensa 8",
                "number": "-",
                "name": "Nacho López",
                "url": "fichajugador.html?player=nacholopez"
            },
            {
                "src": "https://i.postimg.cc/hv5QSY2k/Johannesson_PNG.webp",
                "alt": "Defensa 9",
                "number": "-",
                "name": "Johannesson",
                "url": "fichajugador.html?player=johannesson"
            },
            {
                "src": "https://i.postimg.cc/3xyCDXpj/Jaime_Serrano_PNG.webp",
                "alt": "Defensa 10",
                "number": "-",
                "name": "Jaime Serrano",
                "url": "fichajugador.html?player=jaimeserrano"
            },
            {
                "src": "https://i.postimg.cc/NMPjTHRT/Kike_Torrent_PNG.webp",
                "alt": "Defensa 11",
                "number": "-",
                "name": "Kike Torrent",
                "url": "fichajugador.html?player=kiketorrent"
            },
            {
                "src": "https://i.postimg.cc/Px6P4cnC/Josín_PNG.webp",
                "alt": "Defensa 12",
                "number": "-",
                "name": "Josín",
                "url": "fichajugador.html?player=josin"
            },
            {
                "src": "https://i.postimg.cc/rwL1XR23/Iv-n-2015.webp",
                "alt": "Defensa 13",
                "number": "-",
                "name": "Iván",
                "url": "fichajugador.html?player=ivan"
            }
        ],
        "midfielders": [
            {
                "src": "https://i.postimg.cc/cJ2yZBWv/Jonathan_Vila_PNG.webp",
                "alt": "Centrocampista 1",
                "number": "-",
                "name": "Jonathan Vila",
                "url": "fichajugador.html?player=jonathanvila"
            },
            {
                "src": "https://i.postimg.cc/0yt1XqHd/Jon_Erice_PNG.webp",
                "alt": "Centrocampista 2",
                "number": "-",
                "name": "Jon Erice",
                "url": "fichajugador.html?player=jonerice"
            },
            {
                "src": "https://i.postimg.cc/wvjVWSZJ/Susaeta_PNG.webp",
                "alt": "Centrocampista 3",
                "number": "-",
                "name": "Susaeta",
                "url": "fichajugador.html?player=susaeta"
            },
            {
                "src": "https://i.postimg.cc/QdgrQTcP/Héctor_Font_PNG.webp",
                "alt": "Centrocampista 4",
                "number": "-",
                "name": "Héctor Font",
                "url": "fichajugador.html?player=hectorfont"
            },
            {
                "src": "https://i.postimg.cc/yYwGr8VH/Borja_Valle_PNG.webp",
                "alt": "Centrocampista 5",
                "number": "-",
                "name": "Borja Valle",
                "url": "fichajugador.html?player=borjavalle"
            },
            {
                "src": "https://i.postimg.cc/gjbwThBh/Aguirre-PNG.webp",
                "alt": "Centrocampista 6",
                "number": "-",
                "name": "Aguirre",
                "url": "fichajugador.html?player=aguirre"
            },
            {
                "src": "https://i.postimg.cc/05Jm8kYj/Omgba_PNG.webp",
                "alt": "Centrocampista 7",
                "number": "-",
                "name": "Omgba",
                "url": "fichajugador.html?player=omgba"
            },
            {
                "src": "https://i.postimg.cc/fbZSCmp0/Míchel_PNG.webp",
                "alt": "Centrocampista 8",
                "number": "-",
                "name": "Míchel",
                "url": "fichajugador.html?player=michel"
            },
            {
                "src": "https://i.postimg.cc/02T8dvF6/Generelo_PNG.webp",
                "alt": "Centrocampista 9",
                "number": "-",
                "name": "Generelo",
                "url": "fichajugador.html?player=generelo"
            },
            {
                "src": "https://i.postimg.cc/6Q9xYp0Q/Hervías_PNG.webp",
                "alt": "Centrocampista 10",
                "number": "-",
                "name": "Hervías",
                "url": "fichajugador.html?player=hervias"
            },
            {
                "src": "https://i.postimg.cc/FzPYs6Hy/Edu_Bedia_PNG.webp",
                "alt": "Centrocampista 11",
                "number": "-",
                "name": "Edu Bedia",
                "url": "fichajugador.html?player=edubedia"
            },
            {
                "src": "https://i.postimg.cc/vT50JW8w/Christian_Rivera_PNG.webp",
                "alt": "Centrocampista 12",
                "number": "-",
                "name": "Christian Rivera",
                "url": "fichajugador.html?player=christianrivera"
            },
            {
                "src": "https://i.postimg.cc/yYdPX4cz/Lucas_PNG.webp",
                "alt": "Centrocampista 13",
                "number": "-",
                "name": "Lucas",
                "url": "fichajugador.html?player=lucas"
            },
            {
                "src": "https://i.postimg.cc/bYM8p8z6/Héctor_Nespral_PNG.webp",
                "alt": "Centrocampista 14",
                "number": "-",
                "name": "Héctor Nespral",
                "url": "fichajugador.html?player=hectornespral"
            },
            {
                "src": "https://i.postimg.cc/3rDLPHWC/Viti_PNG.webp",
                "alt": "Centrocampista 15",
                "number": "-",
                "name": "Viti",
                "url": "fichajugador.html?player=viti"
            },
            {
                "src": "https://i.ibb.co/pj9GpThD/Dom-nguez-PNG.webp",
                "alt": "Centrocampista 16",
                "number": "-",
                "name": "Domínguez",
                "url": "fichajugador.html?player=dominguez"
            },
            {
                "src": "https://i.postimg.cc/1XVkfn9v/Ibarra_PNG.webp",
                "alt": "Centrocampista 17",
                "number": "-",
                "name": "Ibarra",
                "url": "fichajugador.html?player=ibarra"
            },
            {
                "src": "https://i.postimg.cc/yddn8MVj/Capelete_PNG.webp",
                "alt": "Centrocampista 18",
                "number": "-",
                "name": "Capelete",
                "url": "fichajugador.html?player=capelete"
            }
        ],
        "forwards": [
            {
                "src": "https://i.postimg.cc/PfY7C8Y8/Diego_Cervero_PNG.webp",
                "alt": "Delantero 1",
                "number": "-",
                "name": "Diego Cervero",
                "url": "fichajugador.html?player=diegocervero"
            },
            {
                "src": "https://i.postimg.cc/Z5smwyf5/Linares_PNG.webp",
                "alt": "Delantero 2",
                "number": "-",
                "name": "Linares",
                "url": "fichajugador.html?player=linares"
            },
            {
                "src": "https://i.postimg.cc/wMrPhhqC/Toché_PNG.webp",
                "alt": "Delantero 3",
                "number": "-",
                "name": "Toché",
                "url": "fichajugador.html?player=toche"
            },
            {
                "src": "https://i.postimg.cc/WpZ4tS56/Koné_PNG.webp",
                "alt": "Delantero 4",
                "number": "-",
                "name": "Koné",
                "url": "fichajugador.html?player=kone"
            },
            {
                "src": "https://i.postimg.cc/wj0Z68Jf/David_González_PNG.webp",
                "alt": "Delantero 5",
                "number": "-",
                "name": "David González",
                "url": "fichajugador.html?player=davidgonzalez"
            },
            {
                "src": "https://i.postimg.cc/tThsx59c/Allyson-PNG.webp",
                "alt": "Delantero 6",
                "number": "-",
                "name": "Allyson",
                "url": "fichajugador.html?player=allyson"
            }
            
        ],
        "coaches": [
            {
                "src": "https://i.postimg.cc/CxbhxKJh/Sergio_Egea_(entrenador)_PNG.webp",
                "alt": "Entrenador 1",
                "number": "-",
                "name": "Sergio Egea",
                "url": "fichajugador.html?player=sergioegea"
            },
            {
                "src": "https://i.postimg.cc/bJkH6kRX/Generelo-entrenador-PNG.webp",
                "alt": "Entrenador 2",
                "number": "-",
                "name": "Generelo",
                "url": "fichajugador.html?player=generelo"
            }

        ]
    },
    "2014-15": {
        "goalkeepers": [
            {
                "src": "https://i.postimg.cc/fT22S725/Esteban-PNG.webp",
                "alt": "Portero 1",
                "number": "-",
                "name": "Esteban",
                "url": "fichajugador.html?player=esteban"
            },
            {
                "src": "https://i.postimg.cc/qqmLn0Lg/Gorka_Magunazelaia_PNG.webp",
                "alt": "Portero 2",
                "number": "-",
                "name": "Gorka Magunazelaia",
                "url": "fichajugador.html?player=gorkamagunazelaia"
            }
        ],
        "defenders": [
            {
                "src": "https://i.postimg.cc/rsx2m0jq/David_Fernández_PNG.webp",
                "alt": "Defensa 1",
                "number": "-",
                "name": "David Fernández",
                "url": "fichajugador.html?player=davidfernandez"
            },
            {
                "src": "https://i.postimg.cc/9fL78zGX/Sergio_Sánchez_PNG.webp",
                "alt": "Defensa 2",
                "number": "-",
                "name": "Sergio Sánchez",
                "url": "fichajugador.html?player=sergiosanchez"
            },
            {
                "src": "https://i.postimg.cc/vBTB2zzD/Nacho_López_PNG.webp",
                "alt": "Defensa 3",
                "number": "-",
                "name": "Nacho López",
                "url": "fichajugador.html?player=nacholopez"
            },
            {
                "src": "https://i.postimg.cc/G3WcCrKc/Dani_Bautista_PNG.webp",
                "alt": "Defensa 4",
                "number": "-",
                "name": "Dani Bautista",
                "url": "fichajugador.html?player=danibautista"
            },
            {
                "src": "https://i.postimg.cc/cJ2yZBWv/Jonathan_Vila_PNG.webp",
                "alt": "Defensa 5",
                "number": "-",
                "name": "Jonathan Vila",
                "url": "fichajugador.html?player=jonathanvila"
            },
            {
                "src": "https://i.postimg.cc/fTVBxQQ0/Redondo_PNG.webp",
                "alt": "Defensa 6",
                "number": "-",
                "name": "Redondo",
                "url": "fichajugador.html?player=redondo"
            },
            {
                "src": "https://i.postimg.cc/7hCjRCdg/Charlie_PNG.webp",
                "alt": "Defensa 7",
                "number": "-",
                "name": "Charlie",
                "url": "fichajugador.html?player=charlie"
            },
            {
                "src": "https://i.postimg.cc/1XqV3Hb4/Sinchi_PNG.webp",
                "alt": "Defensa 8",
                "number": "-",
                "name": "Sinchi",
                "url": "fichajugador.html?player=sinchi"
            },
            {
                "src": "https://i.postimg.cc/kGcRk4Sg/ngel-Saiz-PNG.webp",
                "alt": "Defensa 9",
                "number": "-",
                "name": "Ángel",
                "url": "fichajugador.html?player=angel"
            },
            {
                "src": "https://i.postimg.cc/hv5QSY2k/Johannesson_PNG.webp",
                "alt": "Defensa 10",
                "number": "-",
                "name": "Johannesson",
                "url": "fichajugador.html?player=johannesson"
            },
            {
                "src": "https://i.postimg.cc/mZ5sS4JY/Castiello_PNG.webp",
                "alt": "Defensa 11",
                "number": "-",
                "name": "Castiello",
                "url": "fichajugador.html?player=castiello"
            },
            {
                "src": "https://i.postimg.cc/Mpv2MFds/Óscar_PNG.webp",
                "alt": "Defensa 12",
                "number": "-",
                "name": "Óscar",
                "url": "fichajugador.html?player=oscar"
            },
            {
                "src": "https://i.postimg.cc/YCBTXC3W/Colo_PNG.webp",
                "alt": "Defensa 13",
                "number": "-",
                "name": "Colo",
                "url": "fichajugador.html?player=colo"
            },
            {
                "src": "https://i.postimg.cc/FKBMVgn9/Emilio_Morilla_PNG.webp",
                "alt": "Defensa 14",
                "number": "-",
                "name": "Emilio Morilla",
                "url": "fichajugador.html?player=emiliomorilla"
            }
        ],
        "midfielders": [
            {
                "src": "https://i.postimg.cc/02T8dvF6/Generelo_PNG.webp",
                "alt": "Centrocampista 1",
                "number": "-",
                "name": "Generelo",
                "url": "fichajugador.html?player=generelo"
            },
            {
                "src": "https://i.postimg.cc/05Jm8kYj/Omgba_PNG.webp",
                "alt": "Centrocampista 2",
                "number": "-",
                "name": "Omgba",
                "url": "fichajugador.html?player=omgba"
            },
            {
                "src": "https://i.postimg.cc/0yt1XqHd/Jon_Erice_PNG.webp",
                "alt": "Centrocampista 3",
                "number": "-",
                "name": "Jon Erice",
                "url": "fichajugador.html?player=jonerice"
            },
            {
                "src": "https://i.postimg.cc/cHwjWqTz/Josep_Señé_PNG.webp",
                "alt": "Centrocampista 4",
                "number": "-",
                "name": "Josep Señé",
                "url": "fichajugador.html?player=josepsene"
            },
            {
                "src": "https://i.postimg.cc/Dw4SnBkG/Eneko_PNG.webp",
                "alt": "Centrocampista 5",
                "number": "-",
                "name": "Eneko",
                "url": "fichajugador.html?player=eneko"
            },
            {
                "src": "https://i.postimg.cc/wvjVWSZJ/Susaeta_PNG.webp",
                "alt": "Centrocampista 6",
                "number": "-",
                "name": "Susaeta",
                "url": "fichajugador.html?player=susaeta"
            },
            {
                "src": "https://i.postimg.cc/yYwGr8VH/Borja_Valle_PNG.webp",
                "alt": "Centrocampista 7",
                "number": "-",
                "name": "Borja Valle",
                "url": "fichajugador.html?player=borjavalle"
            },
            {
                "src": "https://i.postimg.cc/QdgrQTcP/Héctor_Font_PNG.webp",
                "alt": "Centrocampista 8",
                "number": "-",
                "name": "Héctor Font",
                "url": "fichajugador.html?player=hectorfont"
            },
            {
                "src": "https://i.postimg.cc/yddn8MVj/Capelete_PNG.webp",
                "alt": "Centrocampista 9",
                "number": "-",
                "name": "Capelete",
                "url": "fichajugador.html?player=capelete"
            },
            {
                "src": "https://i.postimg.cc/yYdPX4cz/Lucas_PNG.webp",
                "alt": "Centrocampista 10",
                "number": "-",
                "name": "Lucas",
                "url": "fichajugador.html?player=lucas"
            },
            {
                "src": "https://i.postimg.cc/0yL11CPb/Rojas_PNG.webp",
                "alt": "Centrocampista 11",
                "number": "-",
                "name": "Rojas",
                "url": "fichajugador.html?player=rojas"
            },
            {
                "src": "https://i.postimg.cc/vT50JW8w/Christian_Rivera_PNG.webp",
                "alt": "Centrocampista 12",
                "number": "-",
                "name": "Christian Rivera",
                "url": "fichajugador.html?player=christianrivera"
            }
        ],
        "forwards": [
            {
                "src": "https://i.postimg.cc/pr1NqwZ1/Sergio_García_PNG.webp",
                "alt": "Delantero 1",
                "number": "-",
                "name": "Sergio García",
                "url": "fichajugador.html?player=sergiogarcia"
            },
            {
                "src": "https://i.postimg.cc/PfY7C8Y8/Diego_Cervero_PNG.webp",
                "alt": "Delantero 2",
                "number": "-",
                "name": "Diego Cervero",
                "url": "fichajugador.html?player=diegocervero"
            },
            {
                "src": "https://i.postimg.cc/Z5smwyf5/Linares_PNG.webp",
                "alt": "Delantero 3",
                "number": "-",
                "name": "Linares",
                "url": "fichajugador.html?player=linares"
            },
            {
                "src": "https://i.postimg.cc/gkpT8kHt/Dioni_PNG.webp",
                "alt": "Delantero 4",
                "number": "-",
                "name": "Dioni",
                "url": "fichajugador.html?player=dioni"
            },
            {
                "src": "https://i.postimg.cc/g2h9HB6N/Steven_PNG.webp",
                "alt": "Delantero 5",
                "number": "-",
                "name": "Steven",
                "url": "fichajugador.html?player=steven"
            },
            {
                "src": "https://i.postimg.cc/wj0Z68Jf/David_González_PNG.webp",
                "alt": "Delantero 6",
                "number": "-",
                "name": "David González",
                "url": "fichajugador.html?player=davidgonzalez"
            },
            {
                "src": "https://i.postimg.cc/tThsx59c/Allyson-PNG.webp",
                "alt": "Delantero 7",
                "number": "-",
                "name": "Allyson",
                "url": "fichajugador.html?player=allyson"
            }
            
        ],
        "coaches": [
            {
                "src": "https://i.postimg.cc/CxbhxKJh/Sergio_Egea_(entrenador)_PNG.webp",
                "alt": "Entrenador 1",
                "number": "-",
                "name": "Sergio Egea",
                "url": "fichajugador.html?player=sergioegea"
            }

        ]
    },
    "2013-14": {
        "goalkeepers": [
            {
                "src": "https://i.postimg.cc/qBtXZfjc/Orlando_Quintana_PNG.webp",
                "alt": "Portero 1",
                "number": "-",
                "name": "Orlando Quintana",
                "url": "fichajugador.html?player=orlandoquintana"
            },
            {
                "src": "https://i.postimg.cc/43LVBwcF/Pol_Freixanet_PNG.webp",
                "alt": "Portero 2",
                "number": "-",
                "name": "Pol Freixanet",
                "url": "fichajugador.html?player=polfreixanet"
            },
            {
                "src": "https://i.postimg.cc/Y9CLFFyf/Marcos_PNG.webp",
                "alt": "Portero 3",
                "number": "-",
                "name": "Marcos",
                "url": "fichajugador.html?player=marcos"
            }
        ],
        "defenders": [
            {
                "src": "https://i.postimg.cc/rsx2m0jq/David_Fernández_PNG.webp",
                "alt": "Defensa 1",
                "number": "-",
                "name": "David Fernández",
                "url": "fichajugador.html?player=davidfernandez"
            },
            {
                "src": "https://i.postimg.cc/BQnRkz9q/Pardo_PNG.webp",
                "alt": "Defensa 2",
                "number": "-",
                "name": "Pardo",
                "url": "fichajugador.html?player=pardo"
            },
            {
                "src": "https://i.postimg.cc/wByJ7gCw/lvaro-Cuello-PNG.webp",
                "alt": "Defensa 3",
                "number": "-",
                "name": "Álvaro Cuello",
                "url": "fichajugador.html?player=alvarocuello"
            },
            {
                "src": "https://i.postimg.cc/0jq7TFHc/Alba-PNG.webp",
                "alt": "Defensa 4",
                "number": "-",
                "name": "Alba",
                "url": "fichajugador.html?player=alba"
            },
            {
                "src": "https://i.postimg.cc/GpLDxvTS/Sergio_Rodríguez_PNG.webp",
                "alt": "Defensa 5",
                "number": "-",
                "name": "Sergio Rodíguez",
                "url": "fichajugador.html?player=sergiorodriguez"
            },
            {
                "src": "https://i.postimg.cc/1X5DRwsq/Javi_Hernández_(La_Mancha)_PNG.webp",
                "alt": "Defensa 6",
                "number": "-",
                "name": "Javi Hernández",
                "url": "fichajugador.html?player=javihernandez"
            },
            {
                "src": "https://i.postimg.cc/W1PgtBNV/Sergio_Díaz_PNG.webp",
                "alt": "Defensa 7",
                "number": "-",
                "name": "Sergio Díaz",
                "url": "fichajugador.html?player=sergiodiaz"
            },
            {
                "src": "https://i.postimg.cc/tT4Khvzv/Chapi_PNG.webp",
                "alt": "Defensa 8",
                "number": "-",
                "name": "Chapi",
                "url": "fichajugador.html?player=chapi"
            },
            {
                "src": "https://i.postimg.cc/kGcRk4Sg/ngel-Saiz-PNG.webp",
                "alt": "Defensa 9",
                "number": "-",
                "name": "Ángel",
                "url": "fichajugador.html?player=angel"
            }
        ],
        "midfielders": [
            {
                "src": "https://i.postimg.cc/mg1KjFCR/Salva_Rivas_PNG.webp",
                "alt": "Centrocampista 1",
                "number": "-",
                "name": "Salva Rivas",
                "url": "fichajugador.html?player=salvarivas"
            },
            {
                "src": "https://i.postimg.cc/j5Bsgr2k/Iván_Rubio_PNG.webp",
                "alt": "Centrocampista 2",
                "number": "-",
                "name": "Iván Rubio",
                "url": "fichajugador.html?player=ivanrubio"
            },
            {
                "src": "https://i.postimg.cc/NfHt0VFQ/Héctor_Simón_PNG.webp",
                "alt": "Centrocampista 3",
                "number": "-",
                "name": "Héctor Simón",
                "url": "fichajugador.html?player=hectorsimon"
            },
            {
                "src": "https://i.postimg.cc/0yt1XqHd/Jon_Erice_PNG.webp",
                "alt": "Centrocampista 4",
                "number": "-",
                "name": "Jon Erice",
                "url": "fichajugador.html?player=jonerice"
            },
            {
                "src": "https://i.postimg.cc/cHwjWqTz/Josep_Señé_PNG.webp",
                "alt": "Centrocampista 5",
                "number": "-",
                "name": "Josep Señé",
                "url": "fichajugador.html?player=josepsene"
            },
            {
                "src": "https://i.postimg.cc/Dw4SnBkG/Eneko_PNG.webp",
                "alt": "Centrocampista 6",
                "number": "-",
                "name": "Eneko",
                "url": "fichajugador.html?player=eneko"
            },
            {
                "src": "https://i.postimg.cc/wvjVWSZJ/Susaeta_PNG.webp",
                "alt": "Centrocampista 7",
                "number": "-",
                "name": "Susaeta",
                "url": "fichajugador.html?player=susaeta"
            },
            {
                "src": "https://i.postimg.cc/QtmL2Gfq/Belar-PNG.webp",
                "alt": "Centrocampista 8",
                "number": "-",
                "name": "Belar",
                "url": "fichajugador.html?player=belar"
            },
            {
                "src": "https://i.postimg.cc/NF8xJBbg/Coutado_PNG.webp",
                "alt": "Centrocampista 9",
                "number": "-",
                "name": "Coutado",
                "url": "fichajugador.html?player=coutado"
            },
            {
                "src": "https://i.postimg.cc/3rg55Gcw/Jordi_PNG.webp",
                "alt": "Centrocampista 10",
                "number": "-",
                "name": "Jordi",
                "url": "fichajugador.html?player=jordi"
            },
            {
                "src": "https://i.postimg.cc/yddn8MVj/Capelete_PNG.webp",
                "alt": "Centrocampista 11",
                "number": "-",
                "name": "Capelete",
                "url": "fichajugador.html?player=capelete"
            },
            {
                "src": "https://i.postimg.cc/yYdPX4cz/Lucas_PNG.webp",
                "alt": "Centrocampista 12",
                "number": "-",
                "name": "Lucas",
                "url": "fichajugador.html?player=lucas"
            }
        ],
        "forwards": [
            {
                "src": "https://i.postimg.cc/pr1NqwZ1/Sergio_García_PNG.webp",
                "alt": "Delantero 1",
                "number": "-",
                "name": "Sergio García",
                "url": "fichajugador.html?player=sergiogarcia"
            },
            {
                "src": "https://i.postimg.cc/PfY7C8Y8/Diego_Cervero_PNG.webp",
                "alt": "Delantero 2",
                "number": "-",
                "name": "Diego Cervero",
                "url": "fichajugador.html?player=diegocervero"
            },
            {
                "src": "https://i.postimg.cc/9Q8ZmJft/Alain-PNG.webp",
                "alt": "Delantero 3",
                "number": "-",
                "name": "Alain",
                "url": "fichajugador.html?player=alain"
            },
            {
                "src": "https://i.postimg.cc/pL4rc7T7/Annunziata-PNG.webp",
                "alt": "Delantero 4",
                "number": "-",
                "name": "Annunziata",
                "url": "fichajugador.html?player=annunziata"
            },
            {
                "src": "https://i.postimg.cc/g2h9HB6N/Steven_PNG.webp",
                "alt": "Delantero 5",
                "number": "-",
                "name": "Steven",
                "url": "fichajugador.html?player=steven"
            }
        ],
        "coaches": [
            {
                "src": "https://i.postimg.cc/nrxKNrdX/Granero-entrenador-PNG.webp",
                "alt": "Entrenador 1",
                "number": "-",
                "name": "Granero",
                "url": "fichajugador.html?player=granero"
            },
            {
                "src": "https://i.postimg.cc/vB0HwSh5/Robles_(entrenador)_PNG.webp",
                "alt": "Entrenador 2",
                "number": "-",
                "name": "Robles",
                "url": "fichajugador.html?player=robles"
            }

        ]
    },
    "2012-13": {
        "goalkeepers": [
            {
                "src": "https://i.postimg.cc/1zNjQgKB/Dani-Barrio-PNG.webp",
                "alt": "Portero 1",
                "number": "-",
                "name": "Dani Barrio",
                "url": "fichajugador.html?player=danibarrio"
            },
            {
                "src": "https://i.postimg.cc/1XL8bjRJ/Mario_Ruyales_PNG.webp",
                "alt": "Portero 2",
                "number": "-",
                "name": "Mario Ruyales",
                "url": "fichajugador.html?player=marioruyales"
            },
            {
                "src": "https://i.postimg.cc/qBtXZfjc/Orlando_Quintana_PNG.webp",
                "alt": "Portero 3",
                "number": "-",
                "name": "Orlando Quintana",
                "url": "fichajugador.html?player=orlandoquintana"
            },
            {
                "src": "https://i.postimg.cc/Y9CLFFyf/Marcos_PNG.webp",
                "alt": "Portero 4",
                "number": "-",
                "name": "Marcos",
                "url": "fichajugador.html?player=marcos"
            }
        ],
        "defenders": [
            {
                "src": "https://i.postimg.cc/rsx2m0jq/David_Fernández_PNG.webp",
                "alt": "Defensa 1",
                "number": "-",
                "name": "David Fernández",
                "url": "fichajugador.html?player=davidfernandez"
            },
            {
                "src": "https://i.postimg.cc/MGV79z9v/Javi_Cantero_PNG.webp",
                "alt": "Defensa 2",
                "number": "-",
                "name": "Javi Cantero",
                "url": "fichajugador.html?player=javicantero"
            },
            {
                "src": "https://i.postimg.cc/wByJ7gCw/lvaro-Cuello-PNG.webp",
                "alt": "Defensa 3",
                "number": "-",
                "name": "Álvaro Cuello",
                "url": "fichajugador.html?player=alvarocuello"
            },
            {
                "src": "https://i.postimg.cc/1XJ4vdxg/Baquero-PNG.webp",
                "alt": "Defensa 4",
                "number": "-",
                "name": "Baquero",
                "url": "fichajugador.html?player=baquero"
            },
            {
                "src": "https://i.postimg.cc/FKLMGJt3/Owona_PNG.webp",
                "alt": "Defensa 5",
                "number": "-",
                "name": "Owona",
                "url": "fichajugador.html?player=owona"
            },
            {
                "src": "https://i.postimg.cc/mkChsrFH/Mantovani_PNG.webp",
                "alt": "Defensa 6",
                "number": "-",
                "name": "Mantovani",
                "url": "fichajugador.html?player=mantovani"
            },
            {
                "src": "https://i.postimg.cc/dVqcs0yK/Efrén_PNG.webp",
                "alt": "Defensa 7",
                "number": "-",
                "name": "Efrén",
                "url": "fichajugador.html?player=efren"
            },
            {
                "src": "https://i.postimg.cc/Z5ZVB7ZG/Trabanco_PNG.webp",
                "alt": "Defensa 8",
                "number": "-",
                "name": "Trabanco",
                "url": "fichajugador.html?player=trabanco"
            }
        ],
        "midfielders": [
            {
                "src": "https://i.postimg.cc/ncZjKvmb/Aitor-Sanz-PNG.webp",
                "alt": "Centrocampista 1",
                "number": "-",
                "name": "Aitor Sanz",
                "url": "fichajugador.html?player=aitorsanz"
            },
            {
                "src": "https://i.postimg.cc/jdPj1Cz6/Iker_Alegre_PNG.webp",
                "alt": "Centrocampista 2",
                "number": "-",
                "name": "Iker Alegre",
                "url": "fichajugador.html?player=ikeralegre"
            },
            {
                "src": "https://i.postimg.cc/s2qX8W0c/Pascual_PNG.webp",
                "alt": "Centrocampista 3",
                "number": "-",
                "name": "Pascual",
                "url": "fichajugador.html?player=pascual"
            },
            {
                "src": "https://i.postimg.cc/NfHt0VFQ/Héctor_Simón_PNG.webp",
                "alt": "Centrocampista 4",
                "number": "-",
                "name": "Héctor Simón",
                "url": "fichajugador.html?player=hectorsimon"
            },
            {
                "src": "https://i.postimg.cc/7Y0v42t6/Casares_PNG.webp",
                "alt": "Centrocampista 5",
                "number": "-",
                "name": "Casares",
                "url": "fichajugador.html?player=casares"
            },
            {
                "src": "https://i.postimg.cc/c4yDW5nq/Xavi_Moré_PNG.webp",
                "alt": "Centrocampista 6",
                "number": "-",
                "name": "Xavi Moré",
                "url": "fichajugador.html?player=xavimore"
            },
            {
                "src": "https://i.postimg.cc/9F3SLfXj/Cerrajería_PNG.webp",
                "alt": "Centrocampista 7",
                "number": "-",
                "name": "Cerrajería",
                "url": "fichajugador.html?player=cerrajeria"
            },
            {
                "src": "https://i.postimg.cc/cHwjWqTz/Josep_Señé_PNG.webp",
                "alt": "Centrocampista 8",
                "number": "-",
                "name": "Josep Señé",
                "url": "fichajugador.html?player=josepsene"
            },
            {
                "src": "https://i.postimg.cc/j5Bsgr2k/Iván_Rubio_PNG.webp",
                "alt": "Centrocampista 9",
                "number": "-",
                "name": "Iván Rubio",
                "url": "fichajugador.html?player=ivanrubio"
            },
            {
                "src": "https://i.postimg.cc/qMbKkNNP/Diego_Rúa_PNG.webp",
                "alt": "Centrocampista 10",
                "number": "-",
                "name": "Diego Rúa",
                "url": "fichajugador.html?player=diegorua"
            },
            {
                "src": "https://i.postimg.cc/N0V2RS6p/Adri-n-Llano-PNG.webp",
                "alt": "Centrocampista 11",
                "number": "-",
                "name": "Adrián Llano",
                "url": "fichajugador.html?player=adrianllano"
            }
        ],
        "forwards": [
            {
                "src": "https://i.postimg.cc/PfY7C8Y8/Diego_Cervero_PNG.webp",
                "alt": "Delantero 1",
                "number": "-",
                "name": "Diego Cervero",
                "url": "fichajugador.html?player=diegocervero"
            },
            {
                "src": "https://i.postimg.cc/J0xvt9vz/Manu_Busto_PNG.webp",
                "alt": "Delantero 2",
                "number": "-",
                "name": "Manu Busto",
                "url": "fichajugador.html?player=manubusto"
            },
            {
                "src": "https://i.postimg.cc/gjz26bSw/Aquino-PNG.webp",
                "alt": "Delantero 3",
                "number": "-",
                "name": "Aquino",
                "url": "fichajugador.html?player=aquino"
            },
            {
                "src": "https://i.postimg.cc/5tkw9psW/Pepe_Díaz_PNG.webp",
                "alt": "Delantero 4",
                "number": "-",
                "name": "Pepe Díaz",
                "url": "fichajugador.html?player=pepediaz"
            },
            {
                "src": "https://i.postimg.cc/y6DLR3RT/Óscar_Martínez_PNG.webp",
                "alt": "Delantero 5",
                "number": "-",
                "name": "Óscar Martínez",
                "url": "fichajugador.html?player=oscarmartinez"
            },
            {
                "src": "https://i.postimg.cc/1tcpQPV4/Fran_Sol_PNG.webp",
                "alt": "Delantero 6",
                "number": "-",
                "name": "Fran Sol",
                "url": "fichajugador.html?player=fransol"
            },
            {
                "src": "https://i.postimg.cc/vZr8XmJ1/Jandrín_PNG.webp",
                "alt": "Delantero 7",
                "number": "-",
                "name": "Jandrín",
                "url": "fichajugador.html?player=jandrin"
            },
            {
                "src": "https://i.postimg.cc/XYS7w5zS/Jairo_Cárcaba_PNG.webp",
                "alt": "Delantero 8",
                "number": "-",
                "name": "Jairo Cárcaba",
                "url": "fichajugador.html?player=jairocarcaba"
            }
        ],
        "coaches": [
            {
                "src": "https://i.postimg.cc/15kRSFG7/Sarriugarte_(entrenador)_PNG.webp",
                "alt": "Entrenador 1",
                "number": "-",
                "name": "Sarriugarte",
                "url": "fichajugador.html?player=sarriugarte"
            },
            {
                "src": "https://i.postimg.cc/nrxKNrdX/Granero-entrenador-PNG.webp",
                "alt": "Entrenador 2",
                "number": "-",
                "name": "Granero",
                "url": "fichajugador.html?player=granero"
            }

        ]
    },
    "2011-12": {
        "goalkeepers": [
            {
                "src": "https://i.postimg.cc/7PQ0gB4C/Lledó_PNG.webp",
                "alt": "Portero 1",
                "number": "-",
                "name": "Lledó",
                "url": "fichajugador.html?player=lledo"
            },
            {
                "src": "https://i.postimg.cc/1zNjQgKB/Dani-Barrio-PNG.webp",
                "alt": "Portero 2",
                "number": "-",
                "name": "Dani Barrio",
                "url": "fichajugador.html?player=danibarrio"
            },
            {
                "src": "https://i.postimg.cc/tgSCLM2W/Adri-n-PNG.webp",
                "alt": "Portero 3",
                "number": "-",
                "name": "Adrián",
                "url": "fichajugador.html?player=adrian"
            }
        ],
        "defenders": [
            {
                "src": "https://i.postimg.cc/DzrvCNL2/Candela-PNG.webp",
                "alt": "Defensa 1",
                "number": "-",
                "name": "Candela",
                "url": "fichajugador.html?player=candela"
            },
            {
                "src": "https://i.postimg.cc/Dzn0KF2W/Juanma_PNG.webp",
                "alt": "Defensa 2",
                "number": "-",
                "name": "Juanma",
                "url": "fichajugador.html?player=juanma"
            },
            {
                "src": "https://i.postimg.cc/FKLMGJt3/Owona_PNG.webp",
                "alt": "Defensa 3",
                "number": "-",
                "name": "Owona",
                "url": "fichajugador.html?player=owona"
            },
            {
                "src": "https://i.postimg.cc/hGsFQRV7/César_Negredo_PNG.webp",
                "alt": "Defensa 4",
                "number": "-",
                "name": "César Negredo",
                "url": "fichajugador.html?player=cesarnegredo"
            },
            {
                "src": "https://i.postimg.cc/fW29j3M8/Jorge_Rodríguez_PNG.webp",
                "alt": "Defensa 5",
                "number": "-",
                "name": "Jorge Rodríguez",
                "url": "fichajugador.html?player=jorgerodriguez"
            },
            {
                "src": "https://i.postimg.cc/6pdqSTNJ/Juanpa_PNG.webp",
                "alt": "Defensa 6",
                "number": "-",
                "name": "Juanpa",
                "url": "fichajugador.html?player=juanpa"
            },
            {
                "src": "https://i.postimg.cc/wByJ7gCw/lvaro-Cuello-PNG.webp",
                "alt": "Defensa 7",
                "number": "-",
                "name": "Álvaro Cuello",
                "url": "fichajugador.html?player=alvarocuello"
            },
            {
                "src": "https://i.postimg.cc/pLNMgZ2y/Catú_PNG.webp",
                "alt": "Defensa 8",
                "number": "-",
                "name": "Catú",
                "url": "fichajugador.html?player=catu"
            },
            {
                "src": "https://i.postimg.cc/x8CbVQ3G/Joaquín_Peña_PNG.webp",
                "alt": "Defensa 9",
                "number": "-",
                "name": "Joaquín Peña",
                "url": "fichajugador.html?player=joaquinpena"
            }
        ],
        "midfielders": [
            {
                "src": "https://i.postimg.cc/s2qX8W0c/Pascual_PNG.webp",
                "alt": "Centrocampista 1",
                "number": "-",
                "name": "Pascual",
                "url": "fichajugador.html?player=pascual"
            },
            {
                "src": "https://i.postimg.cc/SR7xJvQT/Pelayo_PNG.webp",
                "alt": "Centrocampista 2",
                "number": "-",
                "name": "Pelayo",
                "url": "fichajugador.html?player=pelayo"
            },
            {
                "src": "https://i.postimg.cc/L6MfycrW/Abasolo-PNG.webp",
                "alt": "Centrocampista 3",
                "number": "-",
                "name": "Abasolo",
                "url": "fichajugador.html?player=abasolo"
            },
            {
                "src": "https://i.postimg.cc/ncZjKvmb/Aitor-Sanz-PNG.webp",
                "alt": "Centrocampista 4",
                "number": "-",
                "name": "Aitor Sanz",
                "url": "fichajugador.html?player=aitorsanz"
            },
            {
                "src": "https://i.postimg.cc/c4yDW5nq/Xavi_Moré_PNG.webp",
                "alt": "Centrocampista 5",
                "number": "-",
                "name": "Xavi Moré",
                "url": "fichajugador.html?player=xavimore"
            },
            {
                "src": "https://i.postimg.cc/J7T0X9RJ/Falcón_PNG.webp",
                "alt": "Centrocampista 6",
                "number": "-",
                "name": "Falcón",
                "url": "fichajugador.html?player=falcon"
            },
            {
                "src": "https://i.postimg.cc/ncD1wKRd/Teo_PNG.webp",
                "alt": "Centrocampista 7",
                "number": "-",
                "name": "Teo",
                "url": "fichajugador.html?player=teo"
            },
            {
                "src": "https://i.postimg.cc/6TJp3NNG/Nano_PNG.webp",
                "alt": "Centrocampista 8",
                "number": "-",
                "name": "Nano",
                "url": "fichajugador.html?player=nano"
            },
            {
                "src": "https://i.postimg.cc/jdz1mrCn/Chamorro_PNG.webp",
                "alt": "Centrocampista 9",
                "number": "-",
                "name": "Chamorro",
                "url": "fichajugador.html?player=chamorro"
            },
            {
                "src": "https://i.postimg.cc/B6H5b4rx/David_González_PNG.webp",
                "alt": "Centrocampista 10",
                "number": "-",
                "name": "David González",
                "url": "fichajugador.html?player=davidgonzalez"
            },
            {
                "src": "https://i.postimg.cc/SKv2h3jc/Pablo_Espina_PNG.webp",
                "alt": "Centrocampista 11",
                "number": "-",
                "name": "Pablo Espina",
                "url": "fichajugador.html?player=pabloespina"
            }
        ],
        "forwards": [
            {
                "src": "https://i.postimg.cc/vH1d2mVY/Borja-Rubiato-PNG.webp",
                "alt": "Delantero 1",
                "number": "-",
                "name": "Borja Rubiato",
                "url": "fichajugador.html?player=borjarubiato"
            },
            {
                "src": "https://i.postimg.cc/J0xvt9vz/Manu_Busto_PNG.webp",
                "alt": "Delantero 2",
                "number": "-",
                "name": "Manu Busto",
                "url": "fichajugador.html?player=manubusto"
            },
            {
                "src": "https://i.postimg.cc/FH78sCZh/Martins_PNG.webp",
                "alt": "Delantero 3",
                "number": "-",
                "name": "Martins",
                "url": "fichajugador.html?player=martins"
            },
            {
                "src": "https://i.postimg.cc/y6DLR3RT/Óscar_Martínez_PNG.webp",
                "alt": "Delantero 4",
                "number": "-",
                "name": "Óscar Martínez",
                "url": "fichajugador.html?player=oscarmartinez"
            },
            {
                "src": "https://i.postimg.cc/vZr8XmJ1/Jandrín_PNG.webp",
                "alt": "Delantero 5",
                "number": "-",
                "name": "Jandrín",
                "url": "fichajugador.html?player=jandrin"
            },
            {
                "src": "https://i.postimg.cc/XYS7w5zS/Jairo_Cárcaba_PNG.webp",
                "alt": "Delantero 6",
                "number": "-",
                "name": "Jairo Cárcaba",
                "url": "fichajugador.html?player=jairocarcaba"
            }
        ],
        "coaches": [
            {
                "src": "https://i.postimg.cc/0NgzV3XQ/Pacheta_(entrenador)_PNG.webp",
                "alt": "Entrenador 1",
                "number": "-",
                "name": "Pacheta",
                "url": "fichajugador.html?player=pacheta"
            }
          
       ]
    },
    "2010-11": {
        "goalkeepers": [
            {
                "src": "https://i.postimg.cc/mD1RK2cW/Aulestia-PNG.webp",
                "alt": "Portero 1",
                "number": "-",
                "name": "Aulestia",
                "url": "fichajugador.html?player=aulestia"
            },
            {
                "src": "https://i.postimg.cc/QN6kf8Qd/Javi_Martínez_PNG.webp",
                "alt": "Portero 2",
                "number": "-",
                "name": "Javi Martínez",
                "url": "fichajugador.html?player=javimartinez"
            },
            {
                "src": "https://i.postimg.cc/tgSCLM2W/Adri-n-PNG.webp",
                "alt": "Portero 3",
                "number": "-",
                "name": "Adrián",
                "url": "fichajugador.html?player=adrian"
            },
            {
                "src": "https://i.postimg.cc/W3xp4JR4/Alberto-PNG.webp",
                "alt": "Portero 4",
                "number": "-",
                "name": "Alberto",
                "url": "fichajugador.html?player=alberto"
            }
        ],
        "defenders": [
            {
                "src": "https://i.postimg.cc/Z5VF9JwN/Víctor_Díaz_PNG.webp",
                "alt": "Defensa 1",
                "number": "-",
                "name": "Víctor Díaz",
                "url": "fichajugador.html?player=victordiaz"
            },
            {
                "src": "https://i.postimg.cc/NM2WJ9WR/Ernesto_PNG.webp",
                "alt": "Defensa 2",
                "number": "-",
                "name": "Ernesto",
                "url": "fichajugador.html?player=ernesto"
            },
            {
                "src": "https://i.postimg.cc/wTws21HW/Artabe-PNG.webp",
                "alt": "Defensa 3",
                "number": "-",
                "name": "Artabe",
                "url": "fichajugador.html?player=artabe"
            },
            {
                "src": "https://i.postimg.cc/yd0L3FMp/Gonzalo_PNG.webp",
                "alt": "Defensa 4",
                "number": "-",
                "name": "Gonzalo",
                "url": "fichajugador.html?player=gonzalo"
            },
            {
                "src": "https://i.postimg.cc/hGsFQRV7/César_Negredo_PNG.webp",
                "alt": "Defensa 5",
                "number": "-",
                "name": "César Negredo",
                "url": "fichajugador.html?player=cesarnegredo"
            },
            {
                "src": "https://i.postimg.cc/fW29j3M8/Jorge_Rodríguez_PNG.webp",
                "alt": "Defensa 6",
                "number": "-",
                "name": "Jorge Rodríguez",
                "url": "fichajugador.html?player=jorgerodriguez"
            },
            {
                "src": "https://i.postimg.cc/CdpYHH5Z/López_Ramos_PNG.webp",
                "alt": "Defensa 7",
                "number": "-",
                "name": "López Ramos",
                "url": "fichajugador.html?player=lopezramos"
            },
            {
                "src": "https://i.postimg.cc/Dzn0KF2W/Juanma_PNG.webp",
                "alt": "Defensa 8",
                "number": "-",
                "name": "Juanma",
                "url": "fichajugador.html?player=juanma"
            },
            {
                "src": "https://i.postimg.cc/cHDBnXDm/Richi_PNG.webp",
                "alt": "Defensa 9",
                "number": "-",
                "name": "Richi",
                "url": "fichajugador.html?player=richi"
            },
            {
                "src": "https://i.postimg.cc/x8CbVQ3G/Joaquín_Peña_PNG.webp",
                "alt": "Defensa 10",
                "number": "-",
                "name": "Joaquín Peña",
                "url": "fichajugador.html?player=joaquinpena"
            }
        ],
        "midfielders": [
            {
                "src": "https://i.postimg.cc/SR7xJvQT/Pelayo_PNG.webp",
                "alt": "Centrocampista 1",
                "number": "-",
                "name": "Pelayo",
                "url": "fichajugador.html?player=pelayo"
            },
            {
                "src": "https://i.postimg.cc/fLSs0gC7/Jandro_PNG.webp",
                "alt": "Centrocampista 2",
                "number": "-",
                "name": "Jandro",
                "url": "fichajugador.html?player=jandro"
            },
            {
                "src": "https://i.postimg.cc/ncZjKvmb/Aitor-Sanz-PNG.webp",
                "alt": "Centrocampista 3",
                "number": "-",
                "name": "Aitor Sanz",
                "url": "fichajugador.html?player=aitorsanz"
            },
            {
                "src": "https://i.postimg.cc/s2qX8W0c/Pascual_PNG.webp",
                "alt": "Centrocampista 4",
                "number": "-",
                "name": "Pascual",
                "url": "fichajugador.html?player=pascual"
            },
            {
                "src": "https://i.postimg.cc/c4yDW5nq/Xavi_Moré_PNG.webp",
                "alt": "Centrocampista 5",
                "number": "-",
                "name": "Xavi Moré",
                "url": "fichajugador.html?player=xavimore"
            },
            {
                "src": "https://i.postimg.cc/J7T0X9RJ/Falcón_PNG.webp",
                "alt": "Centrocampista 6",
                "number": "-",
                "name": "Falcón",
                "url": "fichajugador.html?player=falcon"
            },
            {
                "src": "https://i.postimg.cc/Qd7c0XMv/Marc_Castells_PNG.webp",
                "alt": "Centrocampista 7",
                "number": "-",
                "name": "Marc Castells",
                "url": "fichajugador.html?player=marccastells"
            },
            {
                "src": "https://i.postimg.cc/6TJp3NNG/Nano_PNG.webp",
                "alt": "Centrocampista 8",
                "number": "-",
                "name": "Nano",
                "url": "fichajugador.html?player=nano"
            },
            {
                "src": "https://i.postimg.cc/BbfrPZXs/Jony_PNG.webp",
                "alt": "Centrocampista 9",
                "number": "-",
                "name": "Jony",
                "url": "fichajugador.html?player=jony"
            },
            {
                "src": "https://i.postimg.cc/kGc7nRwL/Prosi_PNG.webp",
                "alt": "Centrocampista 10",
                "number": "-",
                "name": "Prosi",
                "url": "fichajugador.html?player=prosi"
            },
            {
                "src": "https://i.postimg.cc/B6H5b4rx/David_González_PNG.webp",
                "alt": "Centrocampista 11",
                "number": "-",
                "name": "David González",
                "url": "fichajugador.html?player=davidgonzalez"
            },
            {
                "src": "https://i.postimg.cc/SKv2h3jc/Pablo_Espina_PNG.webp",
                "alt": "Centrocampista 12",
                "number": "-",
                "name": "Pablo Espina",
                "url": "fichajugador.html?player=pabloespina"
            },
            {
                "src": "https://i.postimg.cc/FKRppM2S/Yosu_PNG.webp",
                "alt": "Centrocampista 13",
                "number": "-",
                "name": "Yosu",
                "url": "fichajugador.html?player=yosu"
            }
        ],
        "forwards": [
            {
                "src": "https://i.postimg.cc/vH1d2mVY/Borja-Rubiato-PNG.webp",
                "alt": "Delantero 1",
                "number": "-",
                "name": "Borja Rubiato",
                "url": "fichajugador.html?player=borjarubiato"
            },
            {
                "src": "https://i.postimg.cc/J0xvt9vz/Manu_Busto_PNG.webp",
                "alt": "Delantero 2",
                "number": "-",
                "name": "Manu Busto",
                "url": "fichajugador.html?player=manubusto"
            },
            {
                "src": "https://i.postimg.cc/02q7Nz0j/Perona_PNG.webp",
                "alt": "Delantero 3",
                "number": "-",
                "name": "Perona",
                "url": "fichajugador.html?player=perona"
            },
            {
                "src": "https://i.postimg.cc/cCLTk6kd/Miguel_(Cedrón)_PNG.webp",
                "alt": "Delantero 4",
                "number": "-",
                "name": "Miguel",
                "url": "fichajugador.html?player=miguel"
            },
            {
                "src": "https://i.postimg.cc/vZr8XmJ1/Jandrín_PNG.webp",
                "alt": "Delantero 5",
                "number": "-",
                "name": "Jandrín",
                "url": "fichajugador.html?player=jandrin"
            },
            {
                "src": "https://i.postimg.cc/vTgShcSC/Carlos_Cuello_PNG.webp",
                "alt": "Delantero 6",
                "number": "-",
                "name": "Carlos Cuello",
                "url": "fichajugador.html?player=carloscuello"
            },
            {
                "src": "https://i.postimg.cc/mgsjKd5d/Pablo_Carnero_PNG.webp",
                "alt": "Delantero 7",
                "number": "-",
                "name": "Pablo Carnero",
                "url": "fichajugador.html?player=pablocarnero"
            },
            {
                "src": "https://i.postimg.cc/sD8KKjYR/Moisés_PNG.webp",
                "alt": "Delantero 8",
                "number": "-",
                "name": "Moisés",
                "url": "fichajugador.html?player=moises"
            }
        ],
        "coaches": [
            {
                "src": "https://i.postimg.cc/J4GtMm90/Pichi_Lucas_(entrenador)_PNG.webp",
                "alt": "Entrenador 1",
                "number": "-",
                "name": "Pichi Lucas",
                "url": "fichajugador.html?player=pichilucas"
            },
            {
                "src": "https://i.postimg.cc/K8WPxJqS/Jos-Manuel-entrenador-PNG.webp",
                "alt": "Entrenador 2",
                "number": "-",
                "name": "José Manuel",
                "url": "fichajugador.html?player=josemanuel"
            },
            {
                "src": "https://i.postimg.cc/0NgzV3XQ/Pacheta_(entrenador)_PNG.webp",
                "alt": "Entrenador 3",
                "number": "-",
                "name": "Pacheta",
                "url": "fichajugador.html?player=pacheta"
            }
       ]
    },
    "2009-10": {
        "goalkeepers": [
            {
                "src": "https://i.postimg.cc/26GFRmgT/Iván_Serrano_PNG.webp",
                "alt": "Portero 1",
                "number": "-",
                "name": "Iván Serrano",
                "url": "fichajugador.html?player=ivanserrano"
            },
            {
                "src": "https://i.postimg.cc/mD1RK2cW/Aulestia-PNG.webp",
                "alt": "Portero 2",
                "number": "-",
                "name": "Aulestia",
                "url": "fichajugador.html?player=aulestia"
            },
            {
                "src": "https://i.postimg.cc/pr7jRdCQ/Limones_PNG.webp",
                "alt": "Portero 3",
                "number": "-",
                "name": "Limones",
                "url": "fichajugador.html?player=limones"
            }
        ],
        "defenders": [
            {
                "src": "https://i.postimg.cc/T3rj9R7h/Rubén_González_PNG.webp",
                "alt": "Defensa 1",
                "number": "-",
                "name": "Rubén González",
                "url": "fichajugador.html?player=rubengonzalez"
            },
            {
                "src": "https://i.postimg.cc/htH88Xbk/Javi_Barral_PNG.webp",
                "alt": "Defensa 2",
                "number": "-",
                "name": "Javi Barral",
                "url": "fichajugador.html?player=javibarral"
            },
            {
                "src": "https://i.postimg.cc/D09fp3jw/Larrea_PNG.webp",
                "alt": "Defensa 3",
                "number": "-",
                "name": "Larrea",
                "url": "fichajugador.html?player=larrea"
            },
            {
                "src": "https://i.postimg.cc/wTws21HW/Artabe-PNG.webp",
                "alt": "Defensa 4",
                "number": "-",
                "name": "Artabe",
                "url": "fichajugador.html?player=artabe"
            },
            {
                "src": "https://i.postimg.cc/yd0L3FMp/Gonzalo_PNG.webp",
                "alt": "Defensa 5",
                "number": "-",
                "name": "Gonzalo",
                "url": "fichajugador.html?player=gonzalo"
            },
            {
                "src": "https://i.postimg.cc/NM2WJ9WR/Ernesto_PNG.webp",
                "alt": "Defensa 6",
                "number": "-",
                "name": "Ernesto",
                "url": "fichajugador.html?player=ernesto"
            },
            {
                "src": "https://i.postimg.cc/fW29j3M8/Jorge_Rodríguez_PNG.webp",
                "alt": "Defensa 7",
                "number": "-",
                "name": "Jorge Rodríguez",
                "url": "fichajugador.html?player=jorgerodriguez"
            },
            {
                "src": "https://i.postimg.cc/P5hTC409/Dani_Hedrera_PNG.webp",
                "alt": "Defensa 8",
                "number": "-",
                "name": "Dani Hedrera",
                "url": "fichajugador.html?player=danihedrera"
            },
            {
                "src": "https://i.postimg.cc/bJQjYS3p/Nico_PNG.webp",
                "alt": "Defensa 9",
                "number": "-",
                "name": "Nico",
                "url": "fichajugador.html?player=nico"
            }
        ],
        "midfielders": [
            {
                "src": "https://i.postimg.cc/SR7xJvQT/Pelayo_PNG.webp",
                "alt": "Centrocampista 1",
                "number": "-",
                "name": "Pelayo",
                "url": "fichajugador.html?player=pelayo"
            },
            {
                "src": "https://i.postimg.cc/fLSs0gC7/Jandro_PNG.webp",
                "alt": "Centrocampista 2",
                "number": "-",
                "name": "Jandro",
                "url": "fichajugador.html?player=jandro"
            },
            {
                "src": "https://i.postimg.cc/rpxXVtwg/Rubén_García_PNG.webp",
                "alt": "Centrocampista 3",
                "number": "-",
                "name": "Rubén García",
                "url": "fichajugador.html?player=rubengarcia"
            },
            {
                "src": "https://i.postimg.cc/KYKDXnQp/Curro_PNG.webp",
                "alt": "Centrocampista 4",
                "number": "-",
                "name": "Curro",
                "url": "fichajugador.html?player=curro"
            },
            {
                "src": "https://i.postimg.cc/W46WYm3R/Sergio_Villanueva_PNG.webp",
                "alt": "Centrocampista 5",
                "number": "-",
                "name": "Sergio Villanueva",
                "url": "fichajugador.html?player=sergiovillanueva"
            },
            {
                "src": "https://i.postimg.cc/c4yDW5nq/Xavi_Moré_PNG.webp",
                "alt": "Centrocampista 6",
                "number": "-",
                "name": "Xavi Moré",
                "url": "fichajugador.html?player=xavimore"
            },
            {
                "src": "https://i.postimg.cc/d0dwSfMW/Armando-Invern-n-PNG.webp",
                "alt": "Centrocampista 7",
                "number": "-",
                "name": "Armando Invernón",
                "url": "fichajugador.html?player=armandoinvernon"
            },
            {
                "src": "https://i.postimg.cc/k51MSSmC/Iván_Ania_PNG.webp",
                "alt": "Centrocampista 8",
                "number": "-",
                "name": "Iván Ania",
                "url": "fichajugador.html?player=ivanania"
            },
            {
                "src": "https://i.postimg.cc/3N6DF6QK/Mario_Prieto_PNG.webp",
                "alt": "Centrocampista 9",
                "number": "-",
                "name": "Mario Prieto",
                "url": "fichajugador.html?player=marioprieto"
            },
            {
                "src": "https://i.postimg.cc/FKRppM2S/Yosu_PNG.webp",
                "alt": "Centrocampista 10",
                "number": "-",
                "name": "Yosu",
                "url": "fichajugador.html?player=yosu"
            }
        ],
        "forwards": [
            {
                "src": "https://i.postimg.cc/cCLTk6kd/Miguel_(Cedrón)_PNG.webp",
                "alt": "Delantero 1",
                "number": "-",
                "name": "Miguel",
                "url": "fichajugador.html?player=miguel"
            },
            {
                "src": "https://i.postimg.cc/02q7Nz0j/Perona_PNG.webp",
                "alt": "Delantero 2",
                "number": "-",
                "name": "Perona",
                "url": "fichajugador.html?player=perona"
            },
            {
                "src": "https://i.postimg.cc/J0xvt9vz/Manu_Busto_PNG.webp",
                "alt": "Delantero 3",
                "number": "-",
                "name": "Manu Busto",
                "url": "fichajugador.html?player=manubusto"
            },
            {
                "src": "https://i.postimg.cc/7P1fmmSP/Rayco_PNG.webp",
                "alt": "Delantero 4",
                "number": "-",
                "name": "Rayco",
                "url": "fichajugador.html?player=rayco"
            },
            {
                "src": "https://i.postimg.cc/9MFGCKdp/Nacho_Méndez_PNG.webp",
                "alt": "Delantero 5",
                "number": "-",
                "name": "Nacho Méndez",
                "url": "fichajugador.html?player=nachomendez"
            },
            {
                "src": "https://i.postimg.cc/vZr8XmJ1/Jandrín_PNG.webp",
                "alt": "Delantero 6",
                "number": "-",
                "name": "Jandrín",
                "url": "fichajugador.html?player=jandrín"
            }
        ],
        "coaches": [
            {
                "src": "https://i.postimg.cc/Qt8xPrQX/Raúl_González_(entrenador)_PNG.webp",
                "alt": "Entrenador 1",
                "number": "-",
                "name": "Raúl González",
                "url": "fichajugador.html?player=raulgonzalez"
            },
            {
                "src": "https://i.postimg.cc/yYBnbQ5L/Ferm-n-entrenador-PNG.webp",
                "alt": "Entrenador 2",
                "number": "-",
                "name": "Fermín Álvarez",
                "url": "fichajugador.html?player=ferminalvarez"
            },
            {
                "src": "https://i.postimg.cc/J4GtMm90/Pichi_Lucas_(entrenador)_PNG.webp",
                "alt": "Entrenador 3",
                "number": "-",
                "name": "Pichi Lucas",
                "url": "fichajugador.html?player=pichilucas"
            }
       ]
    },
    "2008-09": {
        "goalkeepers": [
            {
                "src": "https://i.postimg.cc/26GFRmgT/Iván_Serrano_PNG.webp",
                "alt": "Portero 1",
                "number": "-",
                "name": "Iván Serrano",
                "url": "fichajugador.html?player=ivanserrano"
            },
            {
                "src": "https://i.postimg.cc/mD1RK2cW/Aulestia-PNG.webp",
                "alt": "Portero 2",
                "number": "-",
                "name": "Aulestia",
                "url": "fichajugador.html?player=aulestia"
            },
            {
                "src": "https://i.postimg.cc/T1T7gtvN/Eneko-PNG.webp",
                "alt": "Portero 3",
                "number": "-",
                "name": "Eneko",
                "url": "fichajugador.html?player=eneko"
            },
            {
                "src": "https://i.postimg.cc/RVX8QxF7/Dami-n-PNG.webp",
                "alt": "Portero 4",
                "number": "-",
                "name": "Damián",
                "url": "fichajugador.html?player=damian"
            }
        ],
        "defenders": [
            {
                "src": "https://i.postimg.cc/T3rj9R7h/Rubén_González_PNG.webp",
                "alt": "Defensa 1",
                "number": "-",
                "name": "Rubén González",
                "url": "fichajugador.html?player=rubengonzalez"
            },
            {
                "src": "https://i.postimg.cc/1RHHx5sF/Iker_Lasarte_PNG.webp",
                "alt": "Defensa 2",
                "number": "-",
                "name": "Iker Lasarte",
                "url": "fichajugador.html?player=ikerlasarte"
            },
            {
                "src": "https://i.postimg.cc/dtYz60nT/Fariña_PNG.webp",
                "alt": "Defensa 3",
                "number": "-",
                "name": "David Fariña",
                "url": "fichajugador.html?player=davidfarina"
            },
            {
                "src": "https://i.postimg.cc/nLGssrdY/José_Luis_PNG.webp",
                "alt": "Defensa 4",
                "number": "-",
                "name": "José Luis",
                "url": "fichajugador.html?player=joseluis"
            },
            {
                "src": "https://i.postimg.cc/yd0L3FMp/Gonzalo_PNG.webp",
                "alt": "Defensa 5",
                "number": "-",
                "name": "Gonzalo",
                "url": "fichajugador.html?player=gonzalo"
            },
            {
                "src": "https://i.postimg.cc/P5hTC409/Dani_Hedrera_PNG.webp",
                "alt": "Defensa 6",
                "number": "-",
                "name": "Dani Hedrera",
                "url": "fichajugador.html?player=danihedrera"
            },
            {
                "src": "https://i.postimg.cc/bJQjYS3p/Nico_PNG.webp",
                "alt": "Defensa 7",
                "number": "-",
                "name": "Nico",
                "url": "fichajugador.html?player=nico"
            },
            {
                "src": "https://i.postimg.cc/NM2WJ9WR/Ernesto_PNG.webp",
                "alt": "Defensa 8",
                "number": "-",
                "name": "Ernesto",
                "url": "fichajugador.html?player=ernesto"
            },
            {
                "src": "https://i.postimg.cc/0QGL1RyN/Pablo_Naredo_PNG.webp",
                "alt": "Defensa 9",
                "number": "-",
                "name": "Pablo Naredo",
                "url": "fichajugador.html?player=pablonaredo"
            },
            {
                "src": "https://i.postimg.cc/15BDdW0r/lvaro-Costa-PNG.webp",
                "alt": "Defensa 10",
                "number": "-",
                "name": "Álvaro Costa",
                "url": "fichajugador.html?player=alvarocosta"
            }
        ],
        "midfielders": [
            {
                "src": "https://i.postimg.cc/Y0xs415f/Juan_Luis_PNG.webp",
                "alt": "Centrocampista 1",
                "number": "-",
                "name": "Juan Luis",
                "url": "fichajugador.html?player=juanluis"
            },
            {
                "src": "https://i.postimg.cc/XYnnDLN3/Jaime_PNG.webp",
                "alt": "Centrocampista 2",
                "number": "-",
                "name": "Jaime",
                "url": "fichajugador.html?player=jaime"
            },
            {
                "src": "https://i.postimg.cc/KYKDXnQp/Curro_PNG.webp",
                "alt": "Centrocampista 3",
                "number": "-",
                "name": "Curro",
                "url": "fichajugador.html?player=curro"
            },
            {
                "src": "https://i.postimg.cc/W46WYm3R/Sergio_Villanueva_PNG.webp",
                "alt": "Centrocampista 4",
                "number": "-",
                "name": "Sergio Villanueva",
                "url": "fichajugador.html?player=sergiovillanueva"
            },
            {
                "src": "https://i.postimg.cc/FHCwgV7T/Jorge_Valiente_PNG.webp",
                "alt": "Centrocampista 5",
                "number": "-",
                "name": "Jorge Valiente",
                "url": "fichajugador.html?player=jorgevaliente"
            },
            {
                "src": "https://i.postimg.cc/JnV4rLcV/Andr-Bevilacqua-PNG.webp",
                "alt": "Centrocampista 6",
                "number": "-",
                "name": "André",
                "url": "fichajugador.html?player=andre"
            },
            {
                "src": "https://i.postimg.cc/d0dwSfMW/Armando-Invern-n-PNG.webp",
                "alt": "Centrocampista 7",
                "number": "-",
                "name": "Armando Invernón",
                "url": "fichajugador.html?player=armandoinvernon"
            },
            {
                "src": "https://i.postimg.cc/3N6DF6QK/Mario_Prieto_PNG.webp",
                "alt": "Centrocampista 8",
                "number": "-",
                "name": "Mario Prieto",
                "url": "fichajugador.html?player=marioprieto"
            },
            {
                "src": "https://i.postimg.cc/vBTB2zzD/Nacho_López_PNG.webp",
                "alt": "Centrocampista 9",
                "number": "-",
                "name": "Nacho López",
                "url": "fichajugador.html?player=nacholopez"
            },
            {
                "src": "https://i.postimg.cc/SR7xJvQT/Pelayo_PNG.webp",
                "alt": "Centrocampista 10",
                "number": "-",
                "name": "Pelayo",
                "url": "fichajugador.html?player=pelayo"
            }
        ],
        "forwards": [
            {
                "src": "https://i.postimg.cc/sD8KKjYR/Moisés_PNG.webp",
                "alt": "Delantero 1",
                "number": "-",
                "name": "Moisés",
                "url": "fichajugador.html?player=moises"
            },
            {
                "src": "https://i.postimg.cc/PfY7C8Y8/Diego_Cervero_PNG.webp",
                "alt": "Delantero 2",
                "number": "-",
                "name": "Diego Cervero",
                "url": "fichajugador.html?player=diegocervero"
            },
            {
                "src": "https://i.postimg.cc/prscPK59/Matías_PNG.webp",
                "alt": "Delantero 3",
                "number": "-",
                "name": "Matías",
                "url": "fichajugador.html?player=matias"
            },
            {
                "src": "https://i.postimg.cc/RZFJDKT3/lex-Garc-a-PNG.webp",
                "alt": "Delantero 4",
                "number": "-",
                "name": "Álex García",
                "url": "fichajugador.html?player=alexgarcia"
            },
            {
                "src": "https://i.postimg.cc/9MFGCKdp/Nacho_Méndez_PNG.webp",
                "alt": "Delantero 5",
                "number": "-",
                "name": "Nacho Méndez",
                "url": "fichajugador.html?player=nachomendez"
            },
            {
                "src": "https://i.postimg.cc/L8pgmGR1/Jorge_Rodríguez_PNG.webp",
                "alt": "Delantero 6",
                "number": "-",
                "name": "Jorge Rodríguez",
                "url": "fichajugador.html?player=jorgerodriguez"
            },
            {
                "src": "https://i.postimg.cc/Kzn58BwG/Fabinho_PNG.webp",
                "alt": "Delantero 7",
                "number": "-",
                "name": "Fabinho",
                "url": "fichajugador.html?player=fabinho"
            }
        ],
        "coaches": [
            {
                "src": "https://i.postimg.cc/Qt8xPrQX/Raúl_González_(entrenador)_PNG.webp",
                "alt": "Entrenador 1",
                "number": "-",
                "name": "Raúl González",
                "url": "fichajugador.html?player=raulgonzalez"
            }
            
       ]
    },
    "2007-08": {
        "goalkeepers": [
            {
                "src": "https://i.postimg.cc/26GFRmgT/Iván_Serrano_PNG.webp",
                "alt": "Portero 1",
                "number": "-",
                "name": "Iván Serrano",
                "url": "fichajugador.html?player=ivanserrano"
            },
            {
                "src": "https://i.postimg.cc/mD1RK2cW/Aulestia-PNG.webp",
                "alt": "Portero 2",
                "number": "-",
                "name": "Aulestia",
                "url": "fichajugador.html?player=aulestia"
            },
            {
                "src": "https://i.postimg.cc/C56G57hq/Javi_Díaz_PNG.webp",
                "alt": "Portero 3",
                "number": "-",
                "name": "Javi Díaz",
                "url": "fichajugador.html?player=javidiaz"
            }
        ],
        "defenders": [
            {
                "src": "https://i.postimg.cc/WpBJfBJZ/Lucas_Iglesias_PNG.webp",
                "alt": "Defensa 1",
                "number": "-",
                "name": "Lucas Iglesias",
                "url": "fichajugador.html?player=lucasiglesias"
            },
            {
                "src": "https://i.postimg.cc/1RHHx5sF/Iker_Lasarte_PNG.webp",
                "alt": "Defensa 2",
                "number": "-",
                "name": "Iker Lasarte",
                "url": "fichajugador.html?player=ikerlasarte"
            },
            {
                "src": "https://i.postimg.cc/k4MmTg7c/Carmona_PNG.webp",
                "alt": "Defensa 3",
                "number": "-",
                "name": "Carmona",
                "url": "fichajugador.html?player=carmona"
            },
            {
                "src": "https://i.postimg.cc/yYhzCRWP/Diego_Meijide_PNG.webp",
                "alt": "Defensa 4",
                "number": "-",
                "name": "Diego Meijide",
                "url": "fichajugador.html?player=diegomeijide"
            },
            {
                "src": "https://i.postimg.cc/sfwXdb8x/Bravo-PNG.webp",
                "alt": "Defensa 5",
                "number": "-",
                "name": "Bravo",
                "url": "fichajugador.html?player=bravo"
            },
            {
                "src": "https://i.postimg.cc/nLGssrdY/José_Luis_PNG.webp",
                "alt": "Defensa 6",
                "number": "-",
                "name": "José Luis",
                "url": "fichajugador.html?player=joseluis"
            },
            {
                "src": "https://i.postimg.cc/fyxfkD0G/Adri-n-Fuertes-PNG.webp",
                "alt": "Defensa 7",
                "number": "-",
                "name": "Adrián Fuertes",
                "url": "fichajugador.html?player=adrianfuertes"
            },
            {
                "src": "https://i.postimg.cc/bJQjYS3p/Nico_PNG.webp",
                "alt": "Defensa 8",
                "number": "-",
                "name": "Nico",
                "url": "fichajugador.html?player=nico"
            }
        ],
        "midfielders": [
            {
                "src": "https://i.postimg.cc/Y0xs415f/Juan_Luis_PNG.webp",
                "alt": "Centrocampista 1",
                "number": "-",
                "name": "Juan Luis",
                "url": "fichajugador.html?player=juanluis"
            },
            {
                "src": "https://i.postimg.cc/T3b3Z1gq/Falo_PNG.webp",
                "alt": "Centrocampista 2",
                "number": "-",
                "name": "Falo",
                "url": "fichajugador.html?player=falo"
            },
            {
                "src": "https://i.postimg.cc/KYKDXnQp/Curro_PNG.webp",
                "alt": "Centrocampista 3",
                "number": "-",
                "name": "Curro",
                "url": "fichajugador.html?player=curro"
            },
            {
                "src": "https://i.postimg.cc/W46WYm3R/Sergio_Villanueva_PNG.webp",
                "alt": "Centrocampista 4",
                "number": "-",
                "name": "Sergio Villanueva",
                "url": "fichajugador.html?player=sergiovillanueva"
            },
            {
                "src": "https://i.postimg.cc/3N6DF6QK/Mario_Prieto_PNG.webp",
                "alt": "Centrocampista 5",
                "number": "-",
                "name": "Mario Prieto",
                "url": "fichajugador.html?player=marioprieto"
            },
            {
                "src": "https://i.postimg.cc/XYnnDLN3/Jaime_PNG.webp",
                "alt": "Centrocampista 6",
                "number": "-",
                "name": "Jaime",
                "url": "fichajugador.html?player=jaime"
            },
            {
                "src": "https://i.postimg.cc/k4RVXstz/Pablo_Prieto_PNG.webp",
                "alt": "Centrocampista 7",
                "number": "-",
                "name": "Pablo Prieto",
                "url": "fichajugador.html?player=pabloprieto"
            },
            {
                "src": "https://i.postimg.cc/59PGMmmb/Santos_PNG.webp",
                "alt": "Centrocampista 8",
                "number": "-",
                "name": "Santos",
                "url": "fichajugador.html?player=santos"
            },
            {
                "src": "https://i.postimg.cc/G3TVPDCQ/Centrón_PNG.webp",
                "alt": "Centrocampista 9",
                "number": "-",
                "name": "Centrón",
                "url": "fichajugador.html?player=centron"
            },
            {
                "src": "https://i.postimg.cc/BvX9dwrW/Jon_Carrera_PNG.webp",
                "alt": "Centrocampista 10",
                "number": "-",
                "name": "Jon Carrera",
                "url": "fichajugador.html?player=joncarrera"
            },
            {
                "src": "https://i.postimg.cc/T3NJHkjW/Dani_García.webp",
                "alt": "Centrocampista 11",
                "number": "-",
                "name": "Dani García",
                "url": "fichajugador.html?player=danigarcia"
            }
        ],
        "forwards": [
            {
                "src": "https://i.postimg.cc/7Yd87yb5/Stefan_PNG.webp",
                "alt": "Delantero 1",
                "number": "-",
                "name": "Stefan",
                "url": "fichajugador.html?player=stefan"
            },
            {
                "src": "https://i.postimg.cc/PfY7C8Y8/Diego_Cervero_PNG.webp",
                "alt": "Delantero 2",
                "number": "-",
                "name": "Diego Cervero",
                "url": "fichajugador.html?player=diegocervero"
            },
            {
                "src": "https://i.postimg.cc/HLW2krHX/Pacheta_PNG.webp",
                "alt": "Delantero 3",
                "number": "-",
                "name": "Pacheta",
                "url": "fichajugador.html?player=pachetadel"
            },
            {
                "src": "https://i.postimg.cc/zDcsh1P9/Bruno_PNG.webp",
                "alt": "Delantero 4",
                "number": "-",
                "name": "Bruno",
                "url": "fichajugador.html?player=bruno"
            },
            {
                "src": "https://i.postimg.cc/qRLkrZJp/Armando-PNG.webp",
                "alt": "Delantero 5",
                "number": "-",
                "name": "Armando",
                "url": "fichajugador.html?player=armando"
            },
            {
                "src": "https://i.postimg.cc/prscPK59/Matías_PNG.webp",
                "alt": "Delantero 6",
                "number": "-",
                "name": "Matías",
                "url": "fichajugador.html?player=matias"
            }
        ],
        "coaches": [
            {
                "src": "https://i.postimg.cc/JzpTJNpP/Carrasco-entrenador-PNG.webp",
                "alt": "Entrenador 1",
                "number": "-",
                "name": "Carrasco",
                "url": "fichajugador.html?player=carrasco"
            },
            {
                "src": "https://i.postimg.cc/yYBnbQ5L/Ferm-n-entrenador-PNG.webp",
                "alt": "Entrenador 2",
                "number": "-",
                "name": "Fermín Álvarez",
                "url": "fichajugador.html?player=ferminalvarez"
            }
            
       ]
    },
    "2006-07": {
        "goalkeepers": [
            {
                "src": "https://i.postimg.cc/brYgsd1K/Gastón_Pezzuti_PNG.webp",
                "alt": "Portero 1",
                "number": "-",
                "name": "Gastón Pezzuti",
                "url": "fichajugador.html?player=gastonpezzuti"
            },
            {
                "src": "https://i.postimg.cc/26GFRmgT/Iván_Serrano_PNG.webp",
                "alt": "Portero 2",
                "number": "-",
                "name": "Iván Serrano",
                "url": "fichajugador.html?player=ivanserrano"
            },
            {
                "src": "https://i.postimg.cc/X7pKhRLc/Javi_Porrón_PNG.webp",
                "alt": "Portero 3",
                "number": "-",
                "name": "Javi Porrón",
                "url": "fichajugador.html?player=javiporron"
            },
            {
                "src": "https://i.postimg.cc/FRNgB1C7/Iván_Cosío_PNG.webp",
                "alt": "Portero 4",
                "number": "-",
                "name": "Iván Cosío",
                "url": "fichajugador.html?player=ivancosio"
            },
            {
                "src": "https://i.postimg.cc/C56G57hq/Javi_Díaz_PNG.webp",
                "alt": "Portero 5",
                "number": "-",
                "name": "Javi Díaz",
                "url": "fichajugador.html?player=javidiaz"
            }
        ],
        "defenders": [
            {
                "src": "https://i.postimg.cc/3wn6JCHX/Corvera_PNG.webp",
                "alt": "Defensa 1",
                "number": "-",
                "name": "Corvera",
                "url": "fichajugador.html?player=corvera"
            },
            {
                "src": "https://i.postimg.cc/263BPmwQ/Sergio_Labrado_PNG.webp",
                "alt": "Defensa 2",
                "number": "-",
                "name": "Sergio Labrado",
                "url": "fichajugador.html?player=sergiolabrado"
            },
            {
                "src": "https://i.postimg.cc/JnC9F4mg/Pablo_López_PNG.webp",
                "alt": "Defensa 3",
                "number": "-",
                "name": "Pablo López",
                "url": "fichajugador.html?player=pablolopez"
            },
            {
                "src": "https://i.postimg.cc/7LnVxx0j/Ricardo_(2)_PNG.webp",
                "alt": "Defensa 4",
                "number": "-",
                "name": "Ricardo",
                "url": "fichajugador.html?player=ricardo"
            },
            {
                "src": "https://i.postimg.cc/WpBJfBJZ/Lucas_Iglesias_PNG.webp",
                "alt": "Defensa 5",
                "number": "-",
                "name": "Lucas Iglesias",
                "url": "fichajugador.html?player=lucasiglesias"
            },
            {
                "src": "https://i.postimg.cc/C1tf0tPW/Sergio_Sánchez_Quiroga_PNG.webp",
                "alt": "Defensa 6",
                "number": "-",
                "name": "Sergio Sánchez",
                "url": "fichajugador.html?player=sergiosanchez"
            },
            {
                "src": "https://i.postimg.cc/d3xwkcP9/Carlos_Guerra_PNG.webp",
                "alt": "Defensa 7",
                "number": "-",
                "name": "Carlos Guerra",
                "url": "fichajugador.html?player=carlosguerra"
            },
            {
                "src": "https://i.postimg.cc/PrQ0RkFV/Fede_Bahón_PNG.webp",
                "alt": "Defensa 8",
                "number": "-",
                "name": "Fede Bahón",
                "url": "fichajugador.html?player=fedebahon"
            },
            {
                "src": "https://i.postimg.cc/0ycjxFrc/Mario_Castro_PNG.webp",
                "alt": "Defensa 9",
                "number": "-",
                "name": "Mario Castro",
                "url": "fichajugador.html?player=mariocastro"
            },
            {
                "src": "https://i.postimg.cc/d100LBZw/Julián_PNG.webp",
                "alt": "Defensa 10",
                "number": "-",
                "name": "Julián",
                "url": "fichajugador.html?player=julian"
            },
            {
                "src": "https://i.postimg.cc/fyxfkD0G/Adri-n-Fuertes-PNG.webp",
                "alt": "Defensa 11",
                "number": "-",
                "name": "Adrián Fuertes",
                "url": "fichajugador.html?player=adrianfuertes"
            }
        ],
        "midfielders": [
            {
                "src": "https://i.postimg.cc/RV40j4Gj/Pepín_Cebrián_PNG.webp",
                "alt": "Centrocampista 1",
                "number": "-",
                "name": "Pepín",
                "url": "fichajugador.html?player=pepin"
            },
            {
                "src": "https://i.postimg.cc/ZY183Bb6/Nicolás_Rotundo_PNG.webp",
                "alt": "Centrocampista 2",
                "number": "-",
                "name": "Nicolás Rotundo",
                "url": "fichajugador.html?player=nicolasrotundo"
            },
            {
                "src": "https://i.postimg.cc/MZ4c4hgw/Moisés_PNG.webp",
                "alt": "Centrocampista 3",
                "number": "-",
                "name": "Moisés",
                "url": "fichajugador.html?player=moises"
            },
            {
                "src": "https://i.postimg.cc/HL2chj1v/Michu_PNG.webp",
                "alt": "Centrocampista 4",
                "number": "-",
                "name": "Michu",
                "url": "fichajugador.html?player=michu"
            },
            {
                "src": "https://i.postimg.cc/Hn5TFP7W/Jacobo_PNG.webp",
                "alt": "Centrocampista 5",
                "number": "-",
                "name": "Jacobo",
                "url": "fichajugador.html?player=jacobo"
            },
            {
                "src": "https://i.postimg.cc/W46WYm3R/Sergio_Villanueva_PNG.webp",
                "alt": "Centrocampista 6",
                "number": "-",
                "name": "Sergio Villanueva",
                "url": "fichajugador.html?player=sergiovillanueva"
            },
            {
                "src": "https://i.postimg.cc/0QX693Qp/Miguel_PNG.webp",
                "alt": "Centrocampista 7",
                "number": "-",
                "name": "Miguel",
                "url": "fichajugador.html?player=miguel"
            },
            {
                "src": "https://i.postimg.cc/Gt4MqZVt/Caco_Morán_PNG.webp",
                "alt": "Centrocampista 8",
                "number": "-",
                "name": "Caco Morán",
                "url": "fichajugador.html?player=cacomoran"
            },
            {
                "src": "https://i.postimg.cc/BvX9dwrW/Jon_Carrera_PNG.webp",
                "alt": "Centrocampista 9",
                "number": "-",
                "name": "Jon Carrera",
                "url": "fichajugador.html?player=joncarrera"
            },
            {
                "src": "https://i.postimg.cc/ydLfsVcv/Servando_PNG.webp",
                "alt": "Centrocampista 10",
                "number": "-",
                "name": "Servando",
                "url": "fichajugador.html?player=servando"
            },
            {
                "src": "https://i.postimg.cc/5NxyQfcf/lex-Arias-PNG.webp",
                "alt": "Centrocampista 11",
                "number": "-",
                "name": "Álex Arias",
                "url": "fichajugador.html?player=alexarias"
            },
            {
                "src": "https://i.postimg.cc/DyMcxjP4/Luis_PNG.webp",
                "alt": "Centrocampista 12",
                "number": "-",
                "name": "Luis",
                "url": "fichajugador.html?player=luis"
            },
            {
                "src": "https://i.postimg.cc/zDMjj2jb/Tato_PNG.webp",
                "alt": "Centrocampista 13",
                "number": "-",
                "name": "Tato",
                "url": "fichajugador.html?player=tato"
            },
            {
                "src": "https://i.postimg.cc/c4G9vqbh/Piti-2006-PNG.webp",
                "alt": "Centrocampista 14",
                "number": "-",
                "name": "Piti",
                "url": "fichajugador.html?player=piti"
            },
            {
                "src": "https://i.postimg.cc/hvKDm152/An-bal-PNG.webp",
                "alt": "Centrocampista 15",
                "number": "-",
                "name": "Anibal",
                "url": "fichajugador.html?player=anibal"
            }
        ],
        "forwards": [
            {
                "src": "https://i.postimg.cc/nLMFx1sm/Lanzarote_PNG.webp",
                "alt": "Delantero 1",
                "number": "-",
                "name": "Lanzarote",
                "url": "fichajugador.html?player=lanzarote"
            },
            {
                "src": "https://i.postimg.cc/nL148pDr/Nacho_García_PNG.webp",
                "alt": "Delantero 2",
                "number": "-",
                "name": "Nacho García",
                "url": "fichajugador.html?player=nachogarcia"
            },
            {
                "src": "https://i.postimg.cc/fLtRcvDs/Kiko_PNG.webp",
                "alt": "Delantero 3",
                "number": "-",
                "name": "Kiko",
                "url": "fichajugador.html?player=kiko"
            },
            {
                "src": "https://i.postimg.cc/QCDVjTZr/Raúl_Castillo_PNG.webp",
                "alt": "Delantero 4",
                "number": "-",
                "name": "Raúl Castillo",
                "url": "fichajugador.html?player=raulcastillo"
            },
            {
                "src": "https://i.postimg.cc/9MFGCKdp/Nacho_Méndez_PNG.webp",
                "alt": "Delantero 5",
                "number": "-",
                "name": "Nacho Méndez",
                "url": "fichajugador.html?player=nachomendez"
            }
        ],
        "coaches": [
            {
                "src": "https://i.postimg.cc/c1j073b1/Velázquez_(entrenador)_PNG.webp",
                "alt": "Entrenador 1",
                "number": "-",
                "name": "Toño Velázquez",
                "url": "fichajugador.html?player=tonovelazquez"
            },
            {
                "src": "https://i.postimg.cc/nLtL4mM9/Ramiro_Solís_(entrenador)_PNG.webp",
                "alt": "Entrenador 2",
                "number": "-",
                "name": "Ramiro Solís",
                "url": "fichajugador.html?player=ramirosolis"
            },
            {
                "src": "https://i.postimg.cc/1zTJ79hF/D-az-Gal-n-entrenador-PNG.webp",
                "alt": "Entrenador 3",
                "number": "-",
                "name": "Díaz Galán",
                "url": "fichajugador.html?player=diazgalan"
            }
       ]
    },
    "2005-06": {
        "goalkeepers": [
            {
                "src": "https://i.postimg.cc/rF14vqW4/Rafa_Ponzo_PNG.webp",
                "alt": "Portero 1",
                "number": "-",
                "name": "Rafa Ponzo",
                "url": "fichajugador.html?player=rafaponzo"
            },
            {
                "src": "https://i.postimg.cc/Gtjf5Zj1/Chavi-Pascual-PNG.webp",
                "alt": "Portero 2",
                "number": "-",
                "name": "Chavi Pascual",
                "url": "fichajugador.html?player=chavipascual"
            },
            {
                "src": "https://i.postimg.cc/7Y87s5CD/Rafa_PNG.webp",
                "alt": "Portero 3",
                "number": "-",
                "name": "Rafa",
                "url": "fichajugador.html?player=rafa"
            },
            {
                "src": "https://i.postimg.cc/HLx7c5N0/Roberto_PNG.webp",
                "alt": "Portero 4",
                "number": "-",
                "name": "Roberto",
                "url": "fichajugador.html?player=roberto"
            }
        ],
        "defenders": [
            {
                "src": "https://i.postimg.cc/XvPf8QS7/Zamora_PNG.webp",
                "alt": "Defensa 1",
                "number": "-",
                "name": "Zamora",
                "url": "fichajugador.html?player=zamora"
            },
            {
                "src": "https://i.postimg.cc/NFJf6rTm/Borja-PNG.webp",
                "alt": "Defensa 2",
                "number": "-",
                "name": "Borja",
                "url": "fichajugador.html?player=borja"
            },
            {
                "src": "https://i.postimg.cc/tR5LrjcS/Paul_PNG.webp",
                "alt": "Defensa 3",
                "number": "-",
                "name": "Paul",
                "url": "fichajugador.html?player=paul"
            },
            {
                "src": "https://i.postimg.cc/7LnVxx0j/Ricardo_(2)_PNG.webp",
                "alt": "Defensa 4",
                "number": "-",
                "name": "Ricardo",
                "url": "fichajugador.html?player=ricardo"
            },
            {
                "src": "https://i.postimg.cc/sXBvTmjK/Lusarreta_PNG.webp",
                "alt": "Defensa 5",
                "number": "-",
                "name": "Lusarreta",
                "url": "fichajugador.html?player=lusarreta"
            },
            {
                "src": "https://i.postimg.cc/KvQxgLFY/Nacho_Fradejas_PNG.webp",
                "alt": "Defensa 6",
                "number": "-",
                "name": "Nacho Fradejas",
                "url": "fichajugador.html?player=nachofradejas"
            },
            {
                "src": "https://i.postimg.cc/MZ7WqNFV/Mora_PNG.webp",
                "alt": "Defensa 7",
                "number": "-",
                "name": "Mora",
                "url": "fichajugador.html?player=mora"
            },
            {
                "src": "https://i.postimg.cc/263BPmwQ/Sergio_Labrado_PNG.webp",
                "alt": "Defensa 8",
                "number": "-",
                "name": "Sergio Labrado",
                "url": "fichajugador.html?player=sergiolabrado"
            },
            {
                "src": "https://i.postimg.cc/3wn6JCHX/Corvera_PNG.webp",
                "alt": "Defensa 9",
                "number": "-",
                "name": "Corvera",
                "url": "fichajugador.html?player=corvera"
            },
            {
                "src": "https://i.postimg.cc/rmgQ98p5/Queipo_PNG.webp",
                "alt": "Defensa 10",
                "number": "-",
                "name": "Queipo",
                "url": "fichajugador.html?player=queipo"
            },
            {
                "src": "https://i.postimg.cc/HLkm2LYt/Darío_Galán_PNG.webp",
                "alt": "Defensa 11",
                "number": "-",
                "name": "Darío Galán",
                "url": "fichajugador.html?player=dariogalan"
            }
        ],
        "midfielders": [
            {
                "src": "https://i.postimg.cc/CKm54tbW/Nacho_Matador_PNG.webp",
                "alt": "Centrocampista 1",
                "number": "-",
                "name": "Nacho Matador",
                "url": "fichajugador.html?player=nachomatador"
            },
            {
                "src": "https://i.postimg.cc/fLSs0gC7/Jandro_PNG.webp",
                "alt": "Centrocampista 2",
                "number": "-",
                "name": "Jandro",
                "url": "fichajugador.html?player=jandro"
            },
            {
                "src": "https://i.postimg.cc/wjFFhqbH/Yeray_PNG.webp",
                "alt": "Centrocampista 3",
                "number": "-",
                "name": "Yeray",
                "url": "fichajugador.html?player=yeray"
            },
            {
                "src": "https://i.postimg.cc/HL2chj1v/Michu_PNG.webp",
                "alt": "Centrocampista 4",
                "number": "-",
                "name": "Michu",
                "url": "fichajugador.html?player=michu"
            },
            {
                "src": "https://i.postimg.cc/nh1hH5SC/Ismael_PNG.webp",
                "alt": "Centrocampista 5",
                "number": "-",
                "name": "Ismael",
                "url": "fichajugador.html?player=ismael"
            },
            {
                "src": "https://i.postimg.cc/zvRT65jL/Toni_González_PNG.webp",
                "alt": "Centrocampista 6",
                "number": "-",
                "name": "Toni González",
                "url": "fichajugador.html?player=tonigonzalez"
            },
            {
                "src": "https://i.postimg.cc/Gt4MqZVt/Caco_Morán_PNG.webp",
                "alt": "Centrocampista 7",
                "number": "-",
                "name": "Caco Morán",
                "url": "fichajugador.html?player=cacomoran"
            },
            {
                "src": "https://i.postimg.cc/tTb0YC1b/Rubén_PNG.webp",
                "alt": "Centrocampista 8",
                "number": "-",
                "name": "Rubén",
                "url": "fichajugador.html?player=ruben"
            },
            {
                "src": "https://i.postimg.cc/BvX9dwrW/Jon_Carrera_PNG.webp",
                "alt": "Centrocampista 9",
                "number": "-",
                "name": "Jon Carrera",
                "url": "fichajugador.html?player=joncarrera"
            },
            {
                "src": "https://i.postimg.cc/mkSrp59x/Alberto-PNG.webp",
                "alt": "Centrocampista 10",
                "number": "-",
                "name": "Alberto",
                "url": "fichajugador.html?player=alberto"
            },
            {
                "src": "https://i.postimg.cc/YSNTFBBw/Borja-Fern-ndez-2-PNG.webp",
                "alt": "Centrocampista 11",
                "number": "-",
                "name": "Borja Fernández",
                "url": "fichajugador.html?player=borjafernandez"
            },
            {
                "src": "https://i.postimg.cc/vBTB2zzD/Nacho_López_PNG.webp",
                "alt": "Centrocampista 12",
                "number": "-",
                "name": "Nacho López",
                "url": "fichajugador.html?player=nacholopez"
            },
            {
                "src": "https://i.postimg.cc/s2qX8W0c/Pascual_PNG.webp",
                "alt": "Centrocampista 13",
                "number": "-",
                "name": "Pascual",
                "url": "fichajugador.html?player=pascual"
            }
        ],
        "forwards": [
            {
                "src": "https://i.postimg.cc/PfY7C8Y8/Diego_Cervero_PNG.webp",
                "alt": "Delantero 1",
                "number": "-",
                "name": "Diego Cervero",
                "url": "fichajugador.html?player=diegocervero"
            },
            {
                "src": "https://i.postimg.cc/SQMBcPFR/Darío_PNG.webp",
                "alt": "Delantero 2",
                "number": "-",
                "name": "Darío",
                "url": "fichajugador.html?player=dario"
            },
            {
                "src": "https://i.postimg.cc/zvyKRhPH/Nacho_Rodríguez_PNG.webp",
                "alt": "Delantero 3",
                "number": "-",
                "name": "Nacho Rodríguez",
                "url": "fichajugador.html?player=nachorodriguez"
            },
            {
                "src": "https://i.postimg.cc/nL148pDr/Nacho_García_PNG.webp",
                "alt": "Delantero 4",
                "number": "-",
                "name": "Nacho García",
                "url": "fichajugador.html?player=nachogarcia"
            },
            {
                "src": "https://i.postimg.cc/pdm8pzhN/Adri-n-PNG.webp",
                "alt": "Delantero 5",
                "number": "-",
                "name": "Adrián",
                "url": "fichajugador.html?player=adrian"
            },
            {
                "src": "https://i.postimg.cc/k5544mHB/Juan_Valdés_PNG.webp",
                "alt": "Delantero 6",
                "number": "-",
                "name": "Juan Valdés",
                "url": "fichajugador.html?player=juanvaldes"
            }
        ],
        "coaches": [
            {
                "src": "https://i.postimg.cc/Zn0YbFs2/Rivas_(entrenador)_PNG.webp",
                "alt": "Entrenador 1",
                "number": "-",
                "name": "Rivas",
                "url": "fichajugador.html?player=rivas"
            },
            {
                "src": "https://i.postimg.cc/c1j073b1/Velázquez_(entrenador)_PNG.webp",
                "alt": "Entrenador 2",
                "number": "-",
                "name": "Toño Velázquez",
                "url": "fichajugador.html?player=tonovelazquez"
            }
       ]
    },
    "2004-05": {
        "goalkeepers": [
            {
                "src": "https://i.postimg.cc/rF14vqW4/Rafa_Ponzo_PNG.webp",
                "alt": "Portero 1",
                "number": "-",
                "name": "Rafa Ponzo",
                "url": "fichajugador.html?player=rafaponzo"
            },
            {
                "src": "https://i.postimg.cc/DwzzBhcn/Yoyo_PNG.webp",
                "alt": "Portero 2",
                "number": "-",
                "name": "Yoyo",
                "url": "fichajugador.html?player=yoyo"
            },
            {
                "src": "https://i.postimg.cc/MptQpt9K/Roberto_Gómez_PNG.webp",
                "alt": "Portero 3",
                "number": "-",
                "name": "Roberto Gómez",
                "url": "fichajugador.html?player=robertogomez"
            }
        ],
        "defenders": [
            {
                "src": "https://i.postimg.cc/76pbdzb4/Manolo_Aparicio_PNG.webp",
                "alt": "Defensa 1",
                "number": "-",
                "name": "Manolo Aparicio",
                "url": "fichajugador.html?player=manoloaparicio"
            },
            {
                "src": "https://i.postimg.cc/NFJf6rTm/Borja-PNG.webp",
                "alt": "Defensa 2",
                "number": "-",
                "name": "Borja",
                "url": "fichajugador.html?player=borja"
            },
            {
                "src": "https://i.postimg.cc/tR5LrjcS/Paul_PNG.webp",
                "alt": "Defensa 3",
                "number": "-",
                "name": "Paul",
                "url": "fichajugador.html?player=paul"
            },
            {
                "src": "https://i.postimg.cc/K8NQnP8R/Urízar_PNG.webp",
                "alt": "Defensa 4",
                "number": "-",
                "name": "Urízar",
                "url": "fichajugador.html?player=urizar"
            },
            {
                "src": "https://i.postimg.cc/7LnVxx0j/Ricardo_(2)_PNG.webp",
                "alt": "Defensa 5",
                "number": "-",
                "name": "Ricardo",
                "url": "fichajugador.html?player=ricardo"
            },
            {
                "src": "https://i.postimg.cc/KvQxgLFY/Nacho_Fradejas_PNG.webp",
                "alt": "Defensa 6",
                "number": "-",
                "name": "Nacho Fradejas",
                "url": "fichajugador.html?player=nachofradejas"
            },
            {
                "src": "https://i.postimg.cc/q7DNcSTz/Luismi_PNG.webp",
                "alt": "Defensa 7",
                "number": "-",
                "name": "Luismi",
                "url": "fichajugador.html?player=luismi"
            },
            {
                "src": "https://i.postimg.cc/JzmHRjx4/Luis_PNG.webp",
                "alt": "Defensa 8",
                "number": "-",
                "name": "Luis",
                "url": "fichajugador.html?player=luis"
            }
        ],
        "midfielders": [
            {
                "src": "https://i.postimg.cc/Xq1RvKSG/Benjam-n-PNG.webp",
                "alt": "Centrocampista 1",
                "number": "-",
                "name": "Benjamín",
                "url": "fichajugador.html?player=benjamin"
            },
            {
                "src": "https://i.postimg.cc/fLSs0gC7/Jandro_PNG.webp",
                "alt": "Centrocampista 2",
                "number": "-",
                "name": "Jandro",
                "url": "fichajugador.html?player=jandro"
            },
            {
                "src": "https://i.postimg.cc/wjFFhqbH/Yeray_PNG.webp",
                "alt": "Centrocampista 3",
                "number": "-",
                "name": "Yeray",
                "url": "fichajugador.html?player=yeray"
            },
            {
                "src": "https://i.postimg.cc/wTGzxzgf/Ballester-PNG.webp",
                "alt": "Centrocampista 4",
                "number": "-",
                "name": "Ballester",
                "url": "fichajugador.html?player=ballester"
            },
            {
                "src": "https://i.postimg.cc/Gt4MqZVt/Caco_Morán_PNG.webp",
                "alt": "Centrocampista 5",
                "number": "-",
                "name": "Caco Morán",
                "url": "fichajugador.html?player=cacomoran"
            },
            {
                "src": "https://i.postimg.cc/tTb0YC1b/Rubén_PNG.webp",
                "alt": "Centrocampista 6",
                "number": "-",
                "name": "Rubén",
                "url": "fichajugador.html?player=ruben"
            },
            {
                "src": "https://i.postimg.cc/BvX9dwrW/Jon_Carrera_PNG.webp",
                "alt": "Centrocampista 7",
                "number": "-",
                "name": "Jon Carrera",
                "url": "fichajugador.html?player=joncarrera"
            },
            {
                "src": "https://i.postimg.cc/HL2chj1v/Michu_PNG.webp",
                "alt": "Centrocampista 8",
                "number": "-",
                "name": "Michu",
                "url": "fichajugador.html?player=michu"
            },
            {
                "src": "https://i.postimg.cc/8C1sMDfR/Nacho_Matador_(2)_PNG.webp",
                "alt": "Centrocampista 9",
                "number": "-",
                "name": "Nacho Matador",
                "url": "fichajugador.html?player=nachomatador"
            },
            {
                "src": "https://i.postimg.cc/rFkTKjrW/Jito_PNG.webp",
                "alt": "Centrocampista 10",
                "number": "-",
                "name": "Jito",
                "url": "fichajugador.html?player=jito"
            }
        ],
        "forwards": [
            {
                "src": "https://i.postimg.cc/PfY7C8Y8/Diego_Cervero_PNG.webp",
                "alt": "Delantero 1",
                "number": "-",
                "name": "Diego Cervero",
                "url": "fichajugador.html?player=diegocervero"
            },
            {
                "src": "https://i.postimg.cc/pXknCqKb/Aldeondo-PNG.webp",
                "alt": "Delantero 2",
                "number": "-",
                "name": "Aldeondo",
                "url": "fichajugador.html?player=aldeondo"
            },
            {
                "src": "https://i.postimg.cc/SQMBcPFR/Darío_PNG.webp",
                "alt": "Delantero 3",
                "number": "-",
                "name": "Darío",
                "url": "fichajugador.html?player=dario"
            },
            {
                "src": "https://i.postimg.cc/zvyKRhPH/Nacho_Rodríguez_PNG.webp",
                "alt": "Delantero 4",
                "number": "-",
                "name": "Nacho Rodríguez",
                "url": "fichajugador.html?player=nachorodriguez"
            },
            {
                "src": "https://i.postimg.cc/vBJH36ZV/Juanchi_González_PNG.webp",
                "alt": "Delantero 5",
                "number": "-",
                "name": "Juanchi",
                "url": "fichajugador.html?player=juanchi"
            },
            {
                "src": "https://i.postimg.cc/pdm8pzhN/Adri-n-PNG.webp",
                "alt": "Delantero 6",
                "number": "-",
                "name": "Adrián",
                "url": "fichajugador.html?player=adrian"
            },
            {
                "src": "https://i.postimg.cc/k5544mHB/Juan_Valdés_PNG.webp",
                "alt": "Delantero 6",
                "number": "-",
                "name": "Juan Valdés",
                "url": "fichajugador.html?player=juanvaldes"
            }
        ],
        "coaches": [
            {
                "src": "https://i.postimg.cc/Zn0YbFs2/Rivas_(entrenador)_PNG.webp",
                "alt": "Entrenador 1",
                "number": "-",
                "name": "Rivas",
                "url": "fichajugador.html?player=rivas"
            }
       ]
    },
    "2003-04": {
        "goalkeepers": [
            {
                "src": "https://i.postimg.cc/rF14vqW4/Rafa_Ponzo_PNG.webp",
                "alt": "Portero 1",
                "number": "-",
                "name": "Rafa Ponzo",
                "url": "fichajugador.html?player=rafaponzo"
            },
            {
                "src": "https://i.postimg.cc/DwzzBhcn/Yoyo_PNG.webp",
                "alt": "Portero 2",
                "number": "-",
                "name": "Yoyo",
                "url": "fichajugador.html?player=yoyo"
            },
            {
                "src": "https://i.postimg.cc/MptQpt9K/Roberto_Gómez_PNG.webp",
                "alt": "Portero 3",
                "number": "-",
                "name": "Roberto Gómez",
                "url": "fichajugador.html?player=robertogomez"
            }
        ],
        "defenders": [
            {
                "src": "https://i.postimg.cc/tR5LrjcS/Paul_PNG.webp",
                "alt": "Defensa 1",
                "number": "-",
                "name": "Paul",
                "url": "fichajugador.html?player=paul"
            },
            {
                "src": "https://i.postimg.cc/MKJvY1hb/Manu_PNG.webp",
                "alt": "Defensa 2",
                "number": "-",
                "name": "Manu",
                "url": "fichajugador.html?player=manu"
            },
            {
                "src": "https://i.postimg.cc/zBWqLcXm/Merino_PNG.webp",
                "alt": "Defensa 3",
                "number": "-",
                "name": "Merino",
                "url": "fichajugador.html?player=merino"
            },
            {
                "src": "https://i.postimg.cc/Gm3xh03f/Al-ez-PNG.webp",
                "alt": "Defensa 4",
                "number": "-",
                "name": "Alaez",
                "url": "fichajugador.html?player=alaez"
            },
            {
                "src": "https://i.postimg.cc/q7DNcSTz/Luismi_PNG.webp",
                "alt": "Defensa 5",
                "number": "-",
                "name": "Luismi",
                "url": "fichajugador.html?player=luismi"
            },
            {
                "src": "https://i.postimg.cc/76pbdzb4/Manolo_Aparicio_PNG.webp",
                "alt": "Defensa 6",
                "number": "-",
                "name": "Manolo Aparicio",
                "url": "fichajugador.html?player=manoloaparicio"
            },
            {
                "src": "https://i.postimg.cc/JzmHRjx4/Luis_PNG.webp",
                "alt": "Defensa 7",
                "number": "-",
                "name": "Luis",
                "url": "fichajugador.html?player=luis"
            }
        ],
        "midfielders": [
            {
                "src": "https://i.postimg.cc/fTBPDfjM/Kily_PNG.webp",
                "alt": "Centrocampista 1",
                "number": "-",
                "name": "Kily",
                "url": "fichajugador.html?player=kily"
            },
            {
                "src": "https://i.postimg.cc/MGDqSQTR/Granada_PNG.webp",
                "alt": "Centrocampista 2",
                "number": "-",
                "name": "Granada",
                "url": "fichajugador.html?player=granada"
            },
            {
                "src": "https://i.postimg.cc/fLSs0gC7/Jandro_PNG.webp",
                "alt": "Centrocampista 3",
                "number": "-",
                "name": "Jandro",
                "url": "fichajugador.html?player=jandro"
            },
            {
                "src": "https://i.postimg.cc/bJmyQtf8/Fran_Cuétara_PNG.webp",
                "alt": "Centrocampista 4",
                "number": "-",
                "name": "Fran Cuétara",
                "url": "fichajugador.html?player=francuetara"
            },
            {
                "src": "https://i.postimg.cc/Xq1RvKSG/Benjam-n-PNG.webp",
                "alt": "Centrocampista 5",
                "number": "-",
                "name": "Benjamín",
                "url": "fichajugador.html?player=benjamin"
            },
            {
                "src": "https://i.postimg.cc/fTtz9y2n/Fran_Sosa_PNG.webp",
                "alt": "Centrocampista 6",
                "number": "-",
                "name": "Fran Sosa",
                "url": "fichajugador.html?player=fransosa"
            },
            {
                "src": "https://i.postimg.cc/rwD85mf2/Armando-Barb-n-3-PNG.webp",
                "alt": "Centrocampista 7",
                "number": "-",
                "name": "Armando Barbón",
                "url": "fichajugador.html?player=armandobarbon"
            },
            {
                "src": "https://i.postimg.cc/HL2chj1v/Michu_PNG.webp",
                "alt": "Centrocampista 8",
                "number": "-",
                "name": "Michu",
                "url": "fichajugador.html?player=michu"
            },
            {
                "src": "https://i.postimg.cc/s2qX8W0c/Pascual_PNG.webp",
                "alt": "Centrocampista 9",
                "number": "-",
                "name": "Pascual",
                "url": "fichajugador.html?player=pascual"
            },
            {
                "src": "https://i.postimg.cc/8C1sMDfR/Nacho_Matador_(2)_PNG.webp",
                "alt": "Centrocampista 10",
                "number": "-",
                "name": "Nacho Matador",
                "url": "fichajugador.html?player=nachomatador"
            },
            {
                "src": "https://i.postimg.cc/BvX9dwrW/Jon_Carrera_PNG.webp",
                "alt": "Centrocampista 11",
                "number": "-",
                "name": "Jon Carrera",
                "url": "fichajugador.html?player=joncarrera"
            },
            {
                "src": "https://i.postimg.cc/65ts9Qkf/Jorge_Polanco_PNG.webp",
                "alt": "Centrocampista 12",
                "number": "-",
                "name": "Jorge Polanco",
                "url": "fichajugador.html?player=jorgepolanco"
            }
        ],
        "forwards": [
            {
                "src": "https://i.postimg.cc/PfY7C8Y8/Diego_Cervero_PNG.webp",
                "alt": "Delantero 1",
                "number": "-",
                "name": "Diego Cervero",
                "url": "fichajugador.html?player=diegocervero"
            },
            {
                "src": "https://i.postimg.cc/FsD1QzP2/Recamán_PNG.webp",
                "alt": "Delantero 2",
                "number": "-",
                "name": "Recamán",
                "url": "fichajugador.html?player=recaman"
            },
            {
                "src": "https://i.postimg.cc/pT6nxTXW/Omar_(Cibeira)_PNG.webp",
                "alt": "Delantero 3",
                "number": "-",
                "name": "Omar",
                "url": "fichajugador.html?player=omar"
            },
            {
                "src": "https://i.postimg.cc/pXknCqKb/Aldeondo-PNG.webp",
                "alt": "Delantero 4",
                "number": "-",
                "name": "Aldeondo",
                "url": "fichajugador.html?player=aldeondo"
            },
            {
                "src": "https://i.postimg.cc/k5544mHB/Juan_Valdés_PNG.webp",
                "alt": "Delantero 5",
                "number": "-",
                "name": "Juan Valdés",
                "url": "fichajugador.html?player=juanvaldes"
            },
            {
                "src": "https://i.postimg.cc/SQMBcPFR/Darío_PNG.webp",
                "alt": "Delantero 6",
                "number": "-",
                "name": "Darío",
                "url": "fichajugador.html?player=dario"
            }
        ],
        "coaches": [
            {
                "src": "https://i.postimg.cc/Zn0YbFs2/Rivas_(entrenador)_PNG.webp",
                "alt": "Entrenador 1",
                "number": "-",
                "name": "Rivas",
                "url": "fichajugador.html?player=rivas"
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
    
    // AÑADE ESTA LÍNEA AL FINAL:
    preloadImages(position);
}

function initGalleries() {
    // Obtener la temporada del atributo data-season del body
    const body = document.body;
    currentSeason = body.getAttribute('data-season');
    
    if (!currentSeason || !allPlayersData[currentSeason]) {
        console.error('No se ha especificado una temporada válida en el body de la página.');
        return;
    }

    // AÑADE ESTA LÍNEA: Precargar todas las imágenes de la temporada actual
    preloadAllImagesForSeason(currentSeason);

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

// Función para precargar imágenes
function preloadImages(position) {
    const players = allPlayersData[currentSeason][position];
    const currentIndex = currentIndices[position];
    
    // Precargar la imagen actual y las 2 siguientes
    for (let i = currentIndex; i < Math.min(currentIndex + 3, players.length); i++) {
        const img = new Image();
        img.src = players[i].src;
    }
}

// Función para precargar todas las imágenes de una temporada
function preloadAllImagesForSeason(season) {
    if (!allPlayersData[season]) return;
    
    Object.keys(allPlayersData[season]).forEach(position => {
        const players = allPlayersData[season][position];
        players.forEach(player => {
            const img = new Image();
            img.src = player.src;
        });
    });
}

document.addEventListener("DOMContentLoaded", initGalleries);
