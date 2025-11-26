// Configuración del crucigrama
const crosswordData = {
    size: 10,
    // 0 = celda negra, número = inicio de palabra
    grid: [
        [1, 0, 2, 0, 0, 3, 0, 0, 0, 4],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [5, 0, 0, 0, 6, 0, 0, 7, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 8, 0, 0, 0, 0, 9, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [10, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    
    // Palabras y sus posiciones
    words: {
        across: {
            1: { answer: "CAZORLA", row: 0, col: 0, clue: "Centrocampista mágico que vistió el azul" },
            5: { answer: "TARTON", row: 2, col: 0, clue: "Estadio histórico del Oviedo" },
            8: { answer: "GOLES", row: 4, col: 1, clue: "Lo que celebramos en cada partido" },
            10: { answer: "CARBAYONES", row: 6, col: 0, clue: "Apodo de los aficionados del Oviedo" }
        },
        down: {
            2: { answer: "ASCENSO", row: 0, col: 2, clue: "Subida de categoría ansiada" },
            3: { answer: "AZUL", row: 0, col: 5, clue: "Color principal del escudo" },
            4: { answer: "OVIEDO", row: 0, col: 9, clue: "Ciudad del equipo" },
            6: { answer: "REAL", row: 2, col: 4, clue: "Título nobiliario del club" },
            7: { answer: "LIGA", row: 2, col: 7, clue: "Competición española" },
            9: { answer: "HINCHA", row: 4, col: 6, clue: "Seguidor apasionado del equipo" }
        }
    }
};

// Crear grid
function createCrossword() {
    const grid = document.getElementById('crossword-grid');
    const blackCells = getBlackCells();
    
    for (let row = 0; row < crosswordData.size; row++) {
        for (let col = 0; col < crosswordData.size; col++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.row = row;
            cell.dataset.col = col;
            
            const cellKey = `${row}-${col}`;
            if (blackCells.has(cellKey)) {
                cell.classList.add('black');
            } else {
                const input = document.createElement('input');
                input.type = 'text';
                input.maxLength = 1;
                input.dataset.row = row;
                input.dataset.col = col;
                
                // Navegación con teclado
                input.addEventListener('input', handleInput);
                input.addEventListener('keydown', handleKeyDown);
                
                cell.appendChild(input);
                
                // Añadir número si es inicio de palabra
                const num = crosswordData.grid[row][col];
                if (num > 0) {
                    const number = document.createElement('span');
                    number.className = 'number';
                    number.textContent = num;
                    cell.appendChild(number);
                }
            }
            
            grid.appendChild(cell);
        }
    }
}

// Determinar celdas negras
function getBlackCells() {
    const blackCells = new Set();
    const usedCells = new Set();
    
    // Marcar celdas usadas por palabras horizontales
    Object.values(crosswordData.words.across).forEach(word => {
        for (let i = 0; i < word.answer.length; i++) {
            usedCells.add(`${word.row}-${word.col + i}`);
        }
    });
    
    // Marcar celdas usadas por palabras verticales
    Object.values(crosswordData.words.down).forEach(word => {
        for (let i = 0; i < word.answer.length; i++) {
            usedCells.add(`${word.row + i}-${word.col}`);
        }
    });
    
    // Las celdas no usadas son negras
    for (let row = 0; row < crosswordData.size; row++) {
        for (let col = 0; col < crosswordData.size; col++) {
            if (!usedCells.has(`${row}-${col}`)) {
                blackCells.add(`${row}-${col}`);
            }
        }
    }
    
    return blackCells;
}

// Crear lista de pistas
function createClues() {
    const acrossList = document.getElementById('clues-across');
    const downList = document.getElementById('clues-down');
    
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
            moveTo(row, col + 1);
            break;
        case 'ArrowLeft':
            moveTo(row, col - 1);
            break;
        case 'ArrowDown':
            moveTo(row + 1, col);
            break;
        case 'ArrowUp':
            moveTo(row - 1, col);
            break;
        case 'Backspace':
            if (!input.value) {
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
    
    const nextInput = document.querySelector(`input[data-row="${row}"][data-col="${col}"]`);
    if (nextInput) {
        nextInput.focus();
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
    
    // Comprobar palabras verticales
    Object.values(crosswordData.words.down).forEach(word => {
        for (let i = 0; i < word.answer.length; i++) {
            const input = document.querySelector(`input[data-row="${word.row + i}"][data-col="${word.col}"]`);
            if (input) {
                // No incrementar total si ya se contó
                if (input.value.toUpperCase() === word.answer[i]) {
                    input.parentElement.classList.add('correct');
                }
            }
        }
    });
    
    // Actualizar estadísticas
    const progress = Math.round((correct / total) * 100);
    document.getElementById('correct-count').textContent = `Correctas: ${correct}/${total}`;
    document.getElementById('progress').textContent = `Progreso: ${progress}%`;
    
    if (correct === total) {
        setTimeout(() => {
            alert('¡Felicidades! Has completado el crucigrama correctamente. ¡Forza Oviedo!');
        }, 500);
    }
}

// Reiniciar crucigrama
function resetCrossword() {
    document.querySelectorAll('#crossword-grid input').forEach(input => {
        input.value = '';
        input.parentElement.classList.remove('correct', 'incorrect');
    });
    document.getElementById('correct-count').textContent = 'Correctas: 0';
    document.getElementById('progress').textContent = 'Progreso: 0%';
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    createCrossword();
    createClues();
    
    document.getElementById('checkAnswers').addEventListener('click', checkAnswers);
    document.getElementById('resetCrossword').addEventListener('click', resetCrossword);
});
