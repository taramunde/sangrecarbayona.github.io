/* js/quiz.js - Lógica del Quiz Carbayón */

const quizData = [
    ["Fecha de fundación del Real Oviedo", ["1 de Julio de 1905", "24 de Abril de 1935", "8 de Agosto de 1956", "26 de Marzo de 1926"], 3],
    ["Primer equipo al que se ha enfrentado el Real Oviedo tras su fundación", ["Real Madrid", "Arenas de Guecho", "Real Sporting de Gijón", "F.C. Barcelona"], 1],
    ["¿Quién marcó el primer gol en el Estadio de Buenavista?", ["Emilín", "Gallart", "Lángara", "Inciarte"], 2],
    ["¿Quién marcó el gol número 1 del Real Oviedo en 1ª División?", ["Herrerita", "Lángara", "Areta", "Gallart"], 3],
    ["¿A qué equipo consiguió el Real Oviedo marcarle un 7-3 como local?", ["F.C. Barcelona", "Atlético de Madrid", "Real Sporting de Gijón", "Real Madrid"], 0],
    ["¿Quién es el máximo goleador histórico con 257 dianas?", ["Lángara", "Oli", "Emilín", "Herrerita"], 0],
    ["¿De qué país era el primer entrenador del Real Oviedo (1926)?", ["España", "Irlanda", "Reino Unido", "Checoslovaquia"], 2],
    ["¿Qué equipo asturiano debutó primero en 1ª División?", ["Real Gijón", "Stadium Avilesino", "Club Gijón", "Real Oviedo F.C."], 3],
    ["¿Cuál fue la mayor goleada del Real Oviedo en El Molinón?", ["0-6", "0-5", "2-8", "1-4"], 2],
    ["¿Qué jugador tiene el récord de partidos con la camiseta azul?", ["Berto", "Tensi", "Carlos", "Emilín"], 0],
    ["¿Qué dos equipos se fusionaron para crear el Real Oviedo?", ["Real Juvencia y Astur C.F.", "Victoria Sport Club y Club Fortuna Ovetense", "Pumarín F.C. y Club Nacional", "Real Stadium Club Ovetense y Real Club Deportivo Ovetense"], 3],
    ["¿Quién fue el primer Presidente del Real Oviedo?", ["Francisco Silvela López", "José Manuel Bango Fuente", "José María Velasco Álvarez", "Carlos Tartiere De Las Alas Pumariño"], 3]
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
            <p>12 preguntas para probar tu oviedismo.</p>
            <button class="btn-start" onclick="startGame()">¡Empezar!</button>
        </div>
    `;
}

// Iniciar juego
function startGame() {
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
    const correctIndex = quizData[currentQuestionIndex][2];
    const isCorrect = selectedOptionIndex === correctIndex;
    
    if(isCorrect) score++;

    const feedbackClass = isCorrect ? 'correct' : 'incorrect';
    const feedbackText = isCorrect ? '¡CORRECTO!' : `¡FALLO! La correcta era: ${quizData[currentQuestionIndex][1][correctIndex]}`;

    appContainer.innerHTML = `
        <div class="animate-slide">
            <div class="result-message ${feedbackClass}">
                ${feedbackText}
            </div>
        </div>
    `;

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            renderQuestion();
        } else {
            renderResults();
        }
    }, 2000);
};

// Pantalla de Resultados
function renderResults() {
    const percentage = Math.round((score / quizData.length) * 100);
    let message = "";
    
    if(percentage === 100) message = "¡MATRICULA DE HONOR! Eres historia del club.";
    else if(percentage >= 80) message = "¡Enhorabuena! Sangre azul pura.";
    else if(percentage >= 50) message = "No está mal, pero hay que repasar la historia.";
    else message = "¡Uy! Necesitas ir más al Tartiere.";

    appContainer.innerHTML = `
        <div class="quiz-end-screen animate-slide">
            <h2>Resultado Final</h2>
            <div class="final-score">${percentage}%</div>
            <p>${message}</p>
            <p>Has acertado ${score} de ${quizData.length}</p>
            <img src="https://i.ibb.co/CPCwd0s/escudo.png" alt="Escudo Real Oviedo" class="final-img">
            <button class="btn-restart" onclick="startGame()">Volver a jugar</button>
        </div>
    `;
}

// Arrancar cuando cargue el DOM
document.addEventListener('DOMContentLoaded', initQuiz);
