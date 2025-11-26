// Configuración del crucigrama
const crosswordData = {
    size: 10,
    
    // Definir qué celdas son negras (true = negra, false/undefined = blanca)
    blackCells: {
        '0-1': true, '0-3': true, '0-4': true, '0-6': true, '0-7': true, '0-8': true,
        '1-1': true, '1-3': true, '1-4': true, '1-6': true, '1-7': true, '1-8': true,
        '2-1': true, '2-3': true, '2-5': true, '2-6': true, '2-8': true, '2-9': true,
        '3-1': true, '3-3': true, '3-5': true, '3-6': true, '3-8': true, '3-9': true,
        '4-0': true, '4-3': true, '4-4': true, '4-5': true, '4-8': true, '4-9': true,
        '5-0': true, '5-3': true, '5-4': true, '5-5': true, '5-8': true, '5-9': true,
        '6-1': true, '6-2': true, '6-3': true, '6-4': true, '6-5': true, '6-6': true, '6-7': true, '6-8': true,
        '7-1': true, '7-2': true, '7-3': true, '7-4': true, '7-5': true, '7-6': true, '7-7': true, '7-8': true,
        '8-0': true, '8-2': true, '8-3': true, '8-5': true, '8-6': true, '8-8': true, '8-9': true,
        '9-0': true, '9-2': true, '9-3': true, '9-5': true, '9-6': true, '9-8': true, '9-9': true
    },
    
    // Palabras y sus posiciones
    words: {
        across: {
            1: { answer: "CAZORLA", row: 0, col: 0, length: 7, clue: "Santi ___, mágico centrocampista azul" },
            2: { answer: "OVIEDO", row: 0, col: 9, length: 1, clue: "Ciudad del equipo (vertical)" },
            5: { answer: "TARTON", row: 2, col: 0, length: 6, clue: "Antiguo estadio del Real Oviedo" },
            8: { answer: "GOL", row: 4, col: 1, length: 3, clue: "Lo que más celebramos" },
            9: { answer: "ASCENSO", row: 4, col: 6, length: 7, clue: "Subida de categoría" },
            10: { answer: "AZUL", row: 5, col: 1, length: 4, clue: "Color del Oviedo" },
            11: { answer: "CARBAYONES", row: 6, col: 0, length: 10, clue: "Apodo de los aficionados" },
            12: { answer: "REAL", row: 7, col: 0, length: 4, clue: "Título nobiliario del club" },
            13: { answer: "LIGA", row: 8, col: 1, length: 4, clue: "Competición española" },
            14: { answer: "AFICION", row: 8, col: 7, length: 3, clue: "La mejor del mundo" },
            15: { answer: "HINCHA", row: 9, col: 1, length: 6, clue: "Seguidor del equipo" }
        },
        down: {
            2: { answer: "OVIEDISTA", row: 0, col: 9, length: 9, clue: "Seguidor del Real Oviedo" },
            3: { answer: "SEGUNDA", row: 0, col: 2, length: 7, clue: "División actual" },
            4: { answer: "TITULO", row: 0, col: 5, length: 6, clue: "Copa conseguida en 2004" },
            6: { answer: "TARRIO", row: 2, col: 2, length: 6, clue: "Mítico delantero azul" },
            7: { answer: "FORZA", row: 2, col: 7, length: 6, clue: "Grito de ánimo de la afición" }
        }
    }
};

// Crear grid del crucigrama
function createCrossword() {
    const grid = document.getElementById('crossword-grid');
    grid.innerHTML = ''; // Limpiar contenido previo
    
    for (let row = 0; row < crosswordData.size; row++) {
        for (let col = 0; col < crosswordData.size; col++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.row = row;
            cell.dataset.col = col;
            
            const cellKey = `${row}-${col}`;
            
            // Verificar si es celda negra
            if (crosswordData.blackCells[cellKey]) {
                cell.classList.add('black');
            } else {
                // Crear input para celdas blancas
                const input = document.createElement('input');
                input.type = 'text';
                input.maxLength = 1;
                input.dataset.row = row;
                input.dataset.col = col;
                
                // Eventos
                input.addEventListener('input', handleInput);
                input.addEventListener('keydown', handleKeyDown);
                
                cell.appendChild(input);
                
                // Añadir número si es inicio de palabra
                const wordNum = getWordNumber(row, col);
                if (wordNum) {
                    const number = document.createElement('span');
                    number.className = 'number';
                    number.textContent = wordNum;
                    cell.appendChild(number);
                }
            }
            
            grid.appendChild(cell);
        }
    }
}

// Obtener número de palabra para una celda
function getWordNumber(row, col) {
    // Buscar en palabras horizontales
    for (let [num, word] of Object.entries(crosswordData.words.across)) {
        if (word.row === row && word.col === col) {
            return num;
        }
    }
    
    // Buscar en palabras verticales
    for (let [num, word] of Object.entries(crosswordData.words.down)) {
        if (word.row === row && word.col === col) {
            return num;
        }
    }
    
    return null;
}

// Crear lista de pistas
function createClues() {
    const acrossList = document.getElementById('clues-across');
    const downList = document.getElementById('clues-down');
    
    acrossList.innerHTML = '';
    downList.innerHTML = '';
    
    Object.entries(crosswordData.words.across).forEach(([num, word]) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${num}.</strong> ${word.clue}`;
        acrossList.appendChild(li);
    });
    
    Object.entries(crosswordData.words.down).forEach(([num, word]) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${num}.</strong> ${word.clue}`;
        downList.appendChild(li);
    });
}

// Manejar entrada de texto
function handleInput(e) {
    const input = e.target;
    if (input.value) {
        input.value = input.value.toUpperCase();
        // Limpiar clases de correcto/incorrecto al escribir
        input.parentElement.classList.remove('correct', 'incorrect');
        // Mover al siguiente input
        moveToNext(input);
    }
}

// Navegación con teclado
function handleKeyDown(e) {
    const input = e.target;
    const row = parseInt(input.dataset.row);
    const col = parseInt(input.dataset.col);
    
    switch(e.key) {
        case 'ArrowRight':
            e.preventDefault();
            moveTo(row, col + 1);
            break;
        case 'ArrowLeft':
            e.preventDefault();
            moveTo(row, col - 1);
            break;
        case 'ArrowDown':
            e.preventDefault();
            moveTo(row + 1, col);
            break;
        case 'ArrowUp':
            e.preventDefault();
            moveTo(row - 1, col);
            break;
        case 'Backspace':
            if (!input.value) {
                e.preventDefault();
                moveTo(row, col - 1);
            }
            break;
    }
}

function moveToNext(currentInput) {
    const row = parseInt(currentInput.dataset.row);
    const col = parseInt(currentInput.dataset.col);
    moveTo(row, col + 1);
}

function moveTo(row, col) {
    if (row < 0 || row >= crosswordData.size || col < 0 || col >= crosswordData.size) return;
    
    // Saltar celdas negras
    const cellKey = `${row}-${col}`;
    if (crosswordData.blackCells[cellKey]) {
        return;
    }
    
    const nextInput = document.querySelector(`input[data-row="${row}"][data-col="${col}"]`);
    if (nextInput) {
        nextInput.focus();
        nextInput.select();
    }
}

// Comprobar respuestas
function checkAnswers() {
    let correct = 0;
    let total = 0;
    
    // Comprobar palabras horizontales
    Object.values(crosswordData.words.across).forEach(word => {
        for (let i = 0; i < word.answer.length; i++) {
            const input = document.querySelector(`input[data-row="${word.row}"][data-col="${word.col + i}"]`);
            if (input) {
                total++;
                const cell = input.parentElement;
                if (input.value.toUpperCase() === word.answer[i]) {
                    cell.classList.add('correct');
                    cell.classList.remove('incorrect');
                    correct++;
                } else if (input.value) {
                    cell.classList.add('incorrect');
                    cell.classList.remove('correct');
                }
            }
        }
    });
    
    // Comprobar palabras verticales (sin duplicar el conteo)
    Object.values(crosswordData.words.down).forEach(word => {
        for (let i = 0; i < word.answer.length; i++) {
            const input = document.querySelector(`input[data-row="${word.row + i}"][data-col="${word.col}"]`);
            if (input && input.value.toUpperCase() === word.answer[i]) {
                input.parentElement.classList.add('correct');
                input.parentElement.classList.remove('incorrect');
            }
        }
    });
    
    // Actualizar estadísticas
    const progress = Math.round((correct / total) * 100);
    document.getElementById('correct-count').textContent = `Correctas: ${correct}/${total}`;
    document.getElementById('progress').textContent = `Progreso: ${progress}%`;
    
    if (correct === total) {
        setTimeout(() => {
            alert('¡Felicidades! Has completado el crucigrama correctamente. ¡FORZA OVIEDO! 💙');
        }, 500);
    }
}

// Reiniciar crucigrama
function resetCrossword() {
    if (confirm('¿Seguro que quieres reiniciar el crucigrama?')) {
        document.querySelectorAll('#crossword-grid input').forEach(input => {
            input.value = '';
            input.parentElement.classList.remove('correct', 'incorrect');
        });
        document.getElementById('correct-count').textContent = 'Correctas: 0';
        document.getElementById('progress').textContent = 'Progreso: 0%';
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    createCrossword();
    createClues();
    
    document.getElementById('checkAnswers').addEventListener('click', checkAnswers);
    document.getElementById('resetCrossword').addEventListener('click', resetCrossword);
    
    // Enfocar primera celda
    const firstInput = document.querySelector('#crossword-grid input');
    if (firstInput) {
        firstInput.focus();
    }
});
