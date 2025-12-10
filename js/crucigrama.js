/* Configuración del juego */
const SIZE = 17;
const solution = [
    ['#','B','U','E','N','A','V','I','S','T','A','#','#','#','#','#','#'],
    ['#','#','#','#','#','#','E','#','#','#','#','#','#','#','#','C','#'],
    ['#','#','#','#','#','#','T','E','A','T','I','N','O','S','#','H','#'],
    ['#','#','J','#','#','#','U','#','#','#','#','#','#','A','Z','U','L'],
    ['#','#','U','#','#','#','S','#','#','#','#','#','#','C','#','S','#'],
    ['#','#','S','P','O','R','T','I','N','G','#','#','#','A','#','#','#'],
    ['#','#','T','#','V','#','A','#','#','#','#','#','#','V','#','B','#'],
    ['#','#','O','#','I','#','#','#','T','A','R','T','I','E','R','E','#'],
    ['#','#','#','#','E','#','#','#','#','#','E','#','#','R','#','R','#'],
    ['#','P','#','#','D','#','#','#','#','#','Q','#','#','A','#','T','#'],
    ['B','A','N','G','O','#','#','#','#','#','U','#','G','#','#','O','#'],
    ['#','C','#','#','#','#','I','R','U','R','E','T','A','#','#','#','#'],
    ['#','H','#','#','#','M','#','#','#','#','X','#','L','#','#','#','#'],
    ['#','U','#','#','#','I','#','Y','U','G','O','S','L','A','V','I','A'],
    ['#','C','#','#','#','E','#','#','#','#','N','#','A','#','#','#','#'],
    ['L','A','N','G','A','R','A','#','#','#','#','#','R','#','#','#','#'],
    ['#','#','#','#','#','A','#','I','N','G','L','A','T','E','R','R','A']
];

let currentDirection = 'horizontal';

// Mapeo de coordenadas a números de preguntas (Fila-Columna)
const numbers = { 
    // HORIZONTALES
    '0-1': 1,   // BUENAVISTA (fila 0, col 1-10)
    '2-7': 4,   // TEATINOS (fila 2, col 7-13)
    '3-13': 7,  // AZUL (fila 3, col 13-16) - También inicio vertical 5
    '5-3': 8,   // SPORTING (fila 5, col 3-9)
    '7-8': 11,  // TARTIERE (fila 7, col 8-14)
    '10-0': 14, // BANGO (fila 10, col 0-4)
    '11-6': 16, // IRURETA (fila 11, col 6-12)
    '13-7': 18, // YUGOSLAVIA (fila 13, col 7-16)
    '15-0': 19, // LANGARA (fila 15, col 0-6)
    '16-7': 20, // INGLATERRA (fila 16, col 7-16)

    // VERTICALES
    '1-6': 2,   // TEATINOS (col 6, fila 1-7)
    '3-15': 3,  // CHUS (col 15, fila 3-6)
    // '3-13': 5 está compartido con horizontal 7
    '3-2': 6,   // JUSTO (col 2, fila 3-7)
    '5-13': 9,  // OVIEDO (col 13, fila 5-10)
    '6-15': 10, // BERTO (col 15, fila 6-10)
    '7-10': 12, // REQUEXON (col 10, fila 7-14)
    '9-1': 13,  // PACHUCA (col 1, fila 9-15)
    '7-12': 15, // GALLART (col 12, fila 7-13)
    '11-5': 17, // MIERA (col 5, fila 11-15)
    
    // Pista 5 (SACAVERA) comparte celda inicial con pista 7 (AZUL)
    // En crucigramas, cuando dos palabras comparten inicio, usan el mismo número
    // Por eso la pista 5 vertical también está en '3-13' junto con la 7 horizontal
};

function createGrid() {
    const grid = document.getElementById('grid');
    if(!grid) return; 
    
    grid.innerHTML = '';

    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++) {
            
            // Creamos el contenedor DIV para la celda
            const cellWrapper = document.createElement('div');
            cellWrapper.className = 'cell-wrapper';
            cellWrapper.dataset.row = i;
            cellWrapper.dataset.col = j;

            if (solution[i][j] === '#') {
                cellWrapper.classList.add('black');
            } else {
                
                // 1. Crear el SPAN para el número (si existe en esa coordenada)
                if (numbers[`${i}-${j}`]) {
                    const num = document.createElement('span');
                    num.className = 'number';
                    num.textContent = numbers[`${i}-${j}`];
                    cellWrapper.appendChild(num);
                }

                // 2. Crear el INPUT para la letra
                const input = document.createElement('input');
                input.type = 'text';
                input.className = 'cell';
                input.maxLength = 1;
                input.autocomplete = 'off';
                
                cellWrapper.appendChild(input);

                // Función auxiliar para mover el foco
                const moveFocus = (r, c) => {
                    const targetCell = document.querySelector(`[data-row="${r}"][data-col="${c}"] .cell`);
                    if (targetCell) {
                        targetCell.focus();
                    }
                };

                input.addEventListener('focus', () => {
                    const hasRight = j + 1 < SIZE && solution[i][j + 1] !== '#';
                    const hasDown  = i + 1 < SIZE && solution[i + 1][j] !== '#';
                    
                    if(hasRight && !hasDown) currentDirection = 'horizontal';
                    else if(!hasRight && hasDown) currentDirection = 'vertical';
                });

                input.addEventListener('input', e => {
                    let v = e.target.value.toUpperCase();
                    e.target.value = v;
                    e.target.classList.remove('incorrect', 'correct'); 
                    
                    if (v) {
                        let nextR = i;
                        let nextC = j;

                        if (currentDirection === 'horizontal') {
                            nextC = j + 1;
                            while (nextC < SIZE && solution[i][nextC] === '#') nextC++;
                        } else {
                            nextR = i + 1;
                            while (nextR < SIZE && solution[nextR][j] === '#') nextR++;
                        }
                        moveFocus(nextR, nextC);
                    }
                });

                input.addEventListener('keydown', e => {
                    let dirR = 0, dirC = 0;
                    let isMove = false;
                    
                    if (e.key === 'Backspace' && !e.target.value) {
                        e.preventDefault();
                        dirC = (currentDirection === 'horizontal' ? -1 : 0);
                        dirR = (currentDirection === 'vertical' ? -1 : 0);
                        isMove = true;
                    } else if (e.key === 'ArrowRight') { dirC = 1; isMove = true; currentDirection = 'horizontal'; }
                    else if (e.key === 'ArrowLeft') { dirC = -1; isMove = true; currentDirection = 'horizontal'; }
                    else if (e.key === 'ArrowDown') { dirR = 1; isMove = true; currentDirection = 'vertical'; }
                    else if (e.key === 'ArrowUp') { dirR = -1; isMove = true; currentDirection = 'vertical'; }

                    if (isMove) {
                        e.preventDefault();
                        let nextR = i + dirR;
                        let nextC = j + dirC;
                        while (nextR >= 0 && nextR < SIZE && nextC >= 0 && nextC < SIZE && solution[nextR][nextC] === '#') {
                            nextR += dirR;
                            nextC += dirC;
                        }
                        moveFocus(nextR, nextC);
                    }
                });
            }
            grid.appendChild(cellWrapper);
        }
    }
}

function checkAnswers() {
    let ok = 0, tot = 0;
    for(let i=0;i<SIZE;i++) {
        for(let j=0;j<SIZE;j++) {
            if(solution[i][j]!=='#'){
                tot++;
                const el = document.querySelector(`[data-row="${i}"][data-col="${j}"] .cell`);
                if (!el) continue;

                if(el.value.toUpperCase() === solution[i][j]) {
                    ok++;
                    el.classList.add('correct');
                    el.classList.remove('incorrect');
                } else {
                    if(el.value !== '') el.classList.add('incorrect');
                    el.classList.remove('correct');
                }
            }
        }
    }
    setTimeout(() => {
        alert(ok===tot ? '¡ENHORABUENA! ¡PUXA OVIEDO!' : `Llevas ${ok} de ${tot} aciertos.`);
    }, 100);
}

function clearGrid() { 
    if(confirm('¿Quieres borrar todo el progreso?')) {
        const cells = document.querySelectorAll('.cell-wrapper:not(.black) .cell');
        cells.forEach(cell => {
            cell.value = '';
            cell.classList.remove('correct', 'incorrect');
        });
    }
}

function showSolution() {
    if(confirm('¿Rendirse y ver la solución?')){
        for(let i=0;i<SIZE;i++) for(let j=0;j<SIZE;j++) if(solution[i][j]!=='#'){
            const el = document.querySelector(`[data-row="${i}"][data-col="${j}"] .cell`);
            if (!el) continue;
            el.value = solution[i][j];
            el.className = 'cell correct';
        }
    }
}

document.addEventListener('DOMContentLoaded', createGrid);
