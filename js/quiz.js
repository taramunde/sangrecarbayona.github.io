/* js/quiz.js - Lógica del Quiz Carbayón - 50 Preguntas */

const quizData = [
    // --- HISTORIA Y FUNDACIÓN (1-4) ---
    [
        "¿En qué fecha exacta se fundó el Real Oviedo?",
        [
            "1 de Julio de 1905",
            "26 de Marzo de 1926",
            "14 de Abril de 1931",
            "21 de Septiembre de 1928"
        ],
        1 // 26 de Marzo de 1926
    ],
    [
        "¿Qué dos equipos se fusionaron para fundar el Real Oviedo?",
        [
            "Real Juvencia y Astur C.F.",
            "Real Stadium Club Ovetense y Real Club Deportivo Ovetense",
            "Sporting de Oviedo y Club Fortuna",
            "Pumarín F.C. y Vetusta"
        ],
        1
    ],
    [
        "¿Quién fue el primer presidente de la historia del club?",
        [
            "Carlos Tartiere",
            "José Suárez",
            "Manuel Lafuente",
            "Eugenio Prieto"
        ],
        0
    ],
    [
        "¿Cómo se llamaba el estadio anterior al viejo Carlos Tartiere (Buenavista)?",
        [
            "Campo de Teatinos",
            "El Requexón",
            "Llamaquique",
            "Vetusta Arena"
        ],
        0
    ],
    
    // --- LEYENDAS Y JUGADORES CLAVE (5-10) ---
    [
        "¿Quién es el máximo goleador histórico del club (257 goles)?",
        [
            "Isidro Lángara",
            "Herrerita",
            "Diego Cervero",
            "Carlos Muñoz"
        ],
        0
    ],
    [
        "¿Qué jugador ostenta el récord de partidos oficiales con la camiseta azul?",
        [
            "Tensi",
            "Berto",
            "Viti",
            "Esteban"
        ],
        1 // Berto (512 partidos)
    ],
    [
        "¿Qué canterano del Oviedo ganó la Champions League y el Mundial?",
        [
            "Santi Cazorla",
            "Juan Mata",
            "Michu",
            "Adrián López"
        ],
        1 // Mata (con Chelsea y España)
    ],
    [
        "¿Quién formaba la famosa 'Delantera Eléctrica' junto a Casuco, Gallart, Lángara y Herrerita?",
        [
            "Emilín",
            "Antón",
            "Goyín",
            "Sánchez"
        ],
        0
    ],
    [
        "¿Qué jugador fue el pichichi de Primera División con el Oviedo en 1935-36?",
        [
            "Herrerita",
            "Isidro Lángara",
            "Emilín",
            "Pruden"
        ],
        1
    ],
    [
        "¿Qué dorsal mítico llevó Carlos Muñoz en el Real Oviedo?",
        [
            "9",
            "10",
            "7",
            "11"
        ],
        0
    ],

    // --- HITOS DEPORTIVOS (11-15) ---
    [
        "¿Cuál ha sido la mejor clasificación del Oviedo en Primera División?",
        [
            "Campeón de Liga",
            "3º (Tercer puesto)",
            "4º (Cuarto puesto)",
            "Subcampeón"
        ],
        1 // Temporadas 34-35, 35-36 y 62-63
    ],
    [
        "¿Qué equipo europeo eliminó al Oviedo en la Copa de la UEFA 1991-92?",
        [
            "Genoa",
            "Inter de Milán",
            "Nápoles",
            "Bayern de Múnich"
        ],
        0
    ],
    [
        "¿A qué equipo ganó el Real Oviedo por 7-3 en una mítica goleada en los años 40?",
        [
            "Real Madrid",
            "F.C. Barcelona",
            "Atlético de Madrid",
            "Athletic Club"
        ],
        1
    ],
    [
        "¿Qué jugador tiene el récord de goles en una temporada en Primera (28)?",
        [
            "Isidro Lángara",
            "Carlos Muñoz",
            "Oli",
            "Herrerita"
        ],
        0
    ],
    [
        "¿Cuál fue el resultado de la mayor victoria del Oviedo en El Molinón (1944)?",
        [
            "0-5",
            "2-7",
            "1-6",
            "2-8"
        ],
        3
    ],

    // --- LA ETAPA DEL BARRO (16-20) ---
    [
        "¿Quién marcó el gol del ascenso a Segunda en Cádiz (2015)?",
        [
            "Diego Cervero",
            "Miguel Linares",
            "David Fernández",
            "Héctor Verdés"
        ],
        2 // David Fernández de cabeza
    ],
    [
        "¿Qué movimiento mundial salvó al club de la desaparición en 2012?",
        [
            "Proud of You",
            "SOS Real Oviedo",
            "Locos por el Oviedo",
            "Volveremos"
        ],
        0
    ],
    [
        "¿Qué entrenador dirigía al equipo en el ascenso de Cádiz en 2015?",
        [
            "Sergio Egea",
            "Fernando Hierro",
            "Anquela",
            "José Rojo 'Pacheta'"
        ],
        0
    ],
    [
        "¿Qué jugador regresó al Oviedo en 2023 cobrando el salario mínimo?",
        [
            "Juan Mata",
            "Michu",
            "Adrián López",
            "Santi Cazorla"
        ],
        3
    ],
    [
        "¿Qué famoso cántico se popularizó durante la crisis de 2003?",
        [
            "Volveremos",
            "Sí se puede",
            "No me falles Real Oviedo",
            "Alirón"
        ],
        0
    ],

    // --- NUEVO TARTIERE Y ACTUALIDAD (21-25) ---
    [
        "¿En qué año se inauguró el NUEVO Carlos Tartiere?",
        [
            "1998",
            "2000",
            "2003",
            "2005"
        ],
        1
    ],
    [
        "¿Quién marcó el primer gol oficial en el Nuevo Carlos Tartiere?",
        [
            "Roberto 'Chino' Losada",
            "Oli",
            "Iván Ania",
            "Paunovic"
        ],
        0
    ],
    [
        "¿Qué entrenador logró el ascenso a Primera en la temporada 1987-88?",
        [
            "Vicente Miera",
            "Javier Irureta",
            "Luis Aragonés",
            "Radomir Antić"
        ],
        0
    ],
    [
        "¿Contra qué equipo se jugó la final del playoff de ascenso a Primera en 2024?",
        [
            "Eibar",
            "Espanyol",
            "Sporting de Gijón",
            "Leganés"
        ],
        1
    ],
    [
        "¿Quién es el actual presidente (o figura principal) del Grupo Carso, dueño del club?",
        [
            "Arturo Elías Ayub",
            "Carlos Slim Helú",
            "Carlos Slim Domit",
            "Jorge Vergara"
        ],
        2
    ],

    // --- PREGUNTAS ADICIONALES (26-50) ---

    // --- DERBIS Y RIVALIDAD ---
    [
        "¿Quién marcó el gol de la victoria en el derbi en el nuevo Tartiere (2018)?",
        [
            "Toché",
            "Saúl Berjón",
            "Diegui Johannesson",
            "Javi Muñoz"
        ],
        1 // Saúl Berjón de penalti
    ],
    [
        "¿Cuál fue el resultado del primer derbi asturiano en Primera División (1933)?",
        [
            "4-2",
            "3-3",
            "1-0",
            "2-1"
        ],
        1
    ],
    [
        "¿Quién fue el último capitán del Oviedo en Primera (2000-01)?",
        [
            "Iván Ania",
            "Oli",
            "Nadir",
            "Onopko"
        ],
        3
    ],
    [
        "¿Qué jugador es el segundo máximo goleador en Primera División del club, tras Lángara?",
        [
            "Carlos Muñoz",
            "Oli",
            "Emilín",
            "Herrerita"
        ],
        3 // Herrerita (119 goles)
    ],
    [
        "¿Quién es el jugador extranjero con más partidos en el club?",
        [
            "Janko Janković",
            "Peter Dubovsky",
            "Nadir",
            "Viktor Onopko"
        ],
        3 // Viktor Onopko
    ],

    // --- MÁXIMOS LOGROS Y RECORDS ---
    [
        "¿Qué entrenador logró el ascenso a Primera en 1991?",
        [
            "Vicente Miera",
            "Radomir Antić",
            "Javier Irureta",
            "José Luis Romero"
        ],
        2
    ],
    [
        "¿Qué entrenador ostenta el mejor porcentaje de victorias en la historia del club (porcentaje alto)?",
        [
            "José María Maguregui",
            "Fred Pentland",
            "Sergio Egea",
            "Radomir Antić"
        ],
        2 // Sergio Egea
    ],
    [
        "¿Cuál es el récord de imbatibilidad de un portero en el Oviedo (en minutos, por debajo de 800)?",
        [
            "634",
            "687",
            "735",
            "799"
        ],
        2 // Esteban (735 minutos en la 2011/12)
    ],
    [
        "¿Quién fue el autor del gol del ascenso a Segunda A en 2005 (Play-off contra el At. Madrid B)?",
        [
            "Michu",
            "Diego Cervero",
            "Javi Venta",
            "David Rivas"
        ],
        1 // Diego Cervero
    ],
    [
        "¿Cuál es el nombre del campo de entrenamiento del Real Oviedo?",
        [
            "El Molinón",
            "El Requexón",
            "La Pixarra",
            "Tudela Veguín"
        ],
        1
    ],

    // --- GOLEADORES Y PICHICHIS ---
    [
        "¿Qué jugador del Oviedo fue pichichi de Primera División en la temporada 1940-41?",
        [
            "Isidro Lángara",
            "Pruden",
            "Herrerita",
            "Emilín"
        ],
        1 // Pruden (30 goles)
    ],
    [
        "¿Quién marcó el gol 1.000 del Oviedo en Primera División?",
        [
            "Oli",
            "Carlos Muñoz",
            "Peter Dubovsky",
            "Losada"
        ],
        2
    ],
    [
        "¿Quién marcó el gol de la permanencia en Primera en 2000 contra el Rayo Vallecano?",
        [
            "Oli",
            "Viti",
            "Rubén Suárez",
            "Peter Dubovsky"
        ],
        2 // Rubén Suárez
    ],
    [
        "¿Quién fue el Pichichi de Segunda División en la temporada 1971-72?",
        [
            "Carlos",
            "Marianín",
            "Lángara",
            "Michu"
        ],
        1 // Marianín
    ],
    [
        "¿Quién marcó el gol del empate en el 95' contra el Sporting (2018)?",
        [
            "Toché",
            "Saúl Berjón",
            "Ibra",
            "Diegui Johannesson"
        ],
        1 // Saúl Berjón
    ],

    // --- CURIOSIDADES Y FECHAS ---
    [
        "¿En qué año debutó el Real Oviedo en Primera División?",
        [
            "1932-33",
            "1933-34",
            "1935-36",
            "1944-45"
        ],
        1
    ],
    [
        "¿En qué año descendió el Real Oviedo a Tercera División por impagos?",
        [
            "2001",
            "2003",
            "2005",
            "2010"
        ],
        1
    ],
    [
        "¿Cuál es el nombre de la peña ultra más antigua del club?",
        [
            "Frente Azul",
            "Symmachiarii",
            "Orgullo Carbayón",
            "Desperta Ferro"
        ],
        1
    ],
    [
        "¿Quién fue el autor del himno oficial 'Sangre Carbayona' (1992)?",
        [
            "Vicente Prado 'El Pravianu'",
            "Tino Casal",
            "Víctor Manuel",
            "Melendi"
        ],
        0
    ],
    [
        "¿Qué país aportó la mayor inversión en la ampliación de capital de 2012, tras el Grupo Carso?",
        [
            "Estados Unidos",
            "España",
            "México",
            "Japón"
        ],
        2
    ],

    // --- CANTERA Y TALENTOS ---
    [
        "¿Qué jugador del Oviedo fue campeón del mundo sub-20 con España?",
        [
            "Borja Bastón",
            "Javi Mier",
            "Álex Cardero",
            "Viti"
        ],
        3 // Viti (con la Sub-20 de España en 1999)
    ],
    [
        "¿En qué año debutó Santi Cazorla con el primer equipo?",
        [
            "2003",
            "2004",
            "2005",
            "2006"
        ],
        0 // 2003
    ],
    [
        "¿Qué entrenador logró el ascenso a Primera en 2001 (ascenso directo)?",
        [
            "Juan Manuel Lillo",
            "Luis Costa",
            "José Antonio Gómez",
            "Fernando Vázquez"
        ],
        1
    ],
    [
        "¿Qué jugador del Oviedo ganó una Eurocopa con España?",
        [
            "Michu",
            "Santi Cazorla",
            "Juan Mata",
            "Nino"
        ],
        1 // Santi Cazorla
    ],
    [
        "¿Quién es el jugador más joven en debutar con el primer equipo del Real Oviedo?",
        [
            "Santi Cazorla",
            "Álex Cardero",
            "Javi Mier",
            "Marco André"
        ],
        1 // Álex Cardero (con 17 años y 3 meses, rompiendo el récord de Javi Mier)
    ],
    [
        "¿Quién es el máximo goleador del Oviedo en Segunda División?",
        [
            "Oli",
            "Toché",
            "Diego Cervero",
            "Borja Bastón"
        ],
        1 // Toché (50 goles)
    ]
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOptionIndex = -1;

const appContainer = document.getElementById('quiz-app');

// Función para iniciar la app
function initQuiz() {
    renderStartScreen();
}

// Pantalla de Inicio
function renderStartScreen() {
    appContainer.innerHTML = `
        <div class="quiz-start-screen animate-slide">
            <h2>¿Cuánto sabes del Real Oviedo?</h2>
            <p>${quizData.length} preguntas para probar tu oviedismo.</p>
            <button class="btn-start" onclick="startGame()">¡Empezar!</button>
        </div>
    `;
}

// Iniciar juego
function startGame() {
    // Para barajar las preguntas al inicio (opcional, pero divertido)
    // quizData.sort(() => Math.random() - 0.5); 
    currentQuestionIndex = 0;
    score = 0;
    renderQuestion();
}

// Renderizar pregunta actual
function renderQuestion() {
    const questionData = quizData[currentQuestionIndex];
    const questionText = questionData[0];
    const answers = questionData[1];
    
    let answersHtml = '';
    answers.forEach((ans, index) => {
        answersHtml += `<button class="option-btn" onclick="selectOption(${index}, this)">${ans}</button>`;
    });

    appContainer.innerHTML = `
        <div class="quiz-active animate-slide">
            <div class="quiz-question-number">Pregunta ${currentQuestionIndex + 1} de ${quizData.length}</div>
            <div class="quiz-question-text">${questionText}</div>
            <div class="quiz-options">${answersHtml}</div>
            <button class="btn-submit" id="submitBtn" onclick="submitAnswer()" disabled>Confirmar</button>
        </div>
    `;
    selectedOptionIndex = -1;
}

// Seleccionar opción (UI)
window.selectOption = function(index, btnElement) {
    selectedOptionIndex = index;
    // Limpiar selección previa
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    // Marcar nueva
    btnElement.classList.add('selected');
    // Activar botón de enviar
    document.getElementById('submitBtn').disabled = false;
    document.getElementById('submitBtn').style.opacity = "1";
};

// Enviar respuesta y verificar
window.submitAnswer = function() {
    // Si no ha seleccionado nada, no hacemos nada (aunque el botón esté disabled)
    if (selectedOptionIndex === -1) return;

    const correctIndex = quizData[currentQuestionIndex][2];
    const isCorrect = selectedOptionIndex === correctIndex;
    
    if(isCorrect) score++;

    // Deshabilitar todas las opciones para evitar doble click
    document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);
    document.getElementById('submitBtn').disabled = true;

    // Marcar la respuesta correcta e incorrecta para visualización
    const options = document.querySelectorAll('.option-btn');
    options[selectedOptionIndex].classList.add(isCorrect ? 'selected-correct' : 'selected-incorrect');
    if (!isCorrect) {
        options[correctIndex].classList.add('correct-answer-show');
    }
    
    const feedbackClass = isCorrect ? 'correct' : 'incorrect';
    const feedbackText = isCorrect ? '¡CORRECTO!' : `¡FALLO! La correcta era: ${quizData[currentQuestionIndex][1][correctIndex]}`;

    // Mostrar el feedback temporalmente (Puedes quitar esto si quieres el feedback directo en la opción)
    const feedbackDiv = document.createElement('div');
    feedbackDiv.classList.add('result-message', feedbackClass, 'animate-slide');
    feedbackDiv.innerHTML = feedbackText;
    appContainer.appendChild(feedbackDiv);
    
    // Mejorar la interfaz de feedback CSS (Añade estos estilos a quiz.css si quieres un look más pulido):
    /*
    .option-btn.selected-correct {
        background: #28a745;
        color: white;
        border-color: #28a745;
    }
    .option-btn.selected-incorrect {
        background: #dc3545;
        color: white;
        border-color: #dc3545;
    }
    .option-btn.correct-answer-show {
        background: #28a745 !important;
        color: white !important;
        border-color: #28a745 !important;
        animation: pulse 1s infinite;
    }
    @keyframes pulse {
        0% { box-shadow: 0 0 0 0 rgba(40, 167, 69, 0.4); }
        70% { box-shadow: 0 0 0 10px rgba(40, 167, 69, 0); }
        100% { box-shadow: 0 0 0 0 rgba(40, 167, 69, 0); }
    }
    */


    setTimeout(() => {
        appContainer.removeChild(feedbackDiv); // Quitar el mensaje de feedback

        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            renderQuestion();
        } else {
            renderResults();
        }
    }, 2500); // 2.5 segundos de pausa antes de la siguiente pregunta
};

// Pantalla de Resultados
function renderResults() {
    const percentage = Math.round((score / quizData.length) * 100);
    let message = "";
    let finalImage = "https://i.ibb.co/CPCwd0s/escudo.png";
    
    if(percentage === 100) {
        message = "¡MATRICULA DE HONOR! Eres historia pura del club. ¡Puxa Asturies y Puxa Oviedo!";
    } else if(percentage >= 90) {
        message = "¡EXCELENTE! Sangre azul y oro, todo un sabio del oviedismo.";
    } else if(percentage >= 70) {
        message = "¡Notable! Un gran oviedista, pero hay que repasar algún detalle.";
    } else if(percentage >= 50) {
        message = "Aprobado. Conoce lo esencial, pero aún le falta barro y gloria.";
    } else {
        message = "¡Uy! Necesitas urgentemente repasar la historia carbayona y visitar el Tartiere más a menudo. ¡A seguir aprendiendo!";
        finalImage = "https://i.postimg.cc/851Gk6c1/jugador-fallo.png"; // Puedes usar una imagen de fallo
    }

    appContainer.innerHTML = `
        <div class="quiz-end-screen animate-slide">
            <h2>Resultado Final</h2>
            <div class="final-score">${percentage}%</div>
            <p>${message}</p>
            <p>Has acertado ${score} de ${quizData.length} preguntas.</p>
            <img src="${finalImage}" alt="Escudo Real Oviedo" class="final-img">
            <button class="btn-restart" onclick="startGame()">Volver a jugar</button>
        </div>
    `;
}

// Arrancar cuando cargue el DOM
document.addEventListener('DOMContentLoaded', initQuiz);
