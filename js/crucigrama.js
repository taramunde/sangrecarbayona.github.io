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

// Mapeo de coordenadas a números de preguntas
const numbers = { 
    '0-1':1, '1-6':2, '2-15':3, '3-2':4, '5-2':5, '6-4':6, 
    '7-3':7, '9-1':8, '9-9':9, '10-0':10, '10-10':11, '11-6':12, '12-5':13, 
    '13-10':14, '15-0':15, '15-12':16, '16-7':17 
};

function createGrid() {
    const grid = document.getElementById('grid');
    if(!grid) return; // Protección por si no carga el HTML
    
    grid.innerHTML = '';

    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'cell';
            input.maxLength = 1;
            input.autocomplete = 'off'; // Evitar autocompletado del navegador

            if (solution[i][j] === '#') {
                input.classList.add('black');
                input.disabled = true;
            } else {
                // Asignar número si existe en el mapeo
                if (numbers[`${i}-${j}`]) {
                    input.setAttribute('data-number', numbers[`${i}-${j}`]);
                }

                input.dataset.row = i;
                input.dataset.col = j;

                input.addEventListener('focus', () => {
                    const hasRight = j + 1 < SIZE && solution[i][j + 1] !== '#';
                    const hasDown  = i + 1 < SIZE && solution[i + 1][j] !== '#';
                    // Lógica simple de dirección
                    if(hasRight && !hasDown) currentDirection = 'horizontal';
                    else if(!hasRight && hasDown) currentDirection = 'vertical';
                });

                input.addEventListener('input', e => {
                    let v = e.target.value.toUpperCase();
                    e.target.value = v;
                    if (v) {
                        // Eliminamos la validación instantánea de colores (opcional, para hacerlo más difícil)
                        // Si quieres ver verde/rojo al momento, descomenta la siguiente línea:
                        // e.target.className = v === solution[i][j] ? 'cell correct' : 'cell incorrect';
                        e.target.classList.remove('incorrect', 'correct'); // Limpiar estados previos
                        
                        currentDirection === 'horizontal' ? moveH(i,j+1) : moveV(i+1,j);
                    }
                });

                input.addEventListener('keydown', e => {
                    if (e.key === 'Backspace' && !e.target.value) {
                        e.preventDefault();
                        currentDirection === 'horizontal' ? moveH(i,j-1) : moveV(i-1,j);
                    } else if (e.key.includes('Arrow')) {
                        e.preventDefault();
                        const isHor = e.key === 'ArrowLeft' || e.key === 'ArrowRight';
                        currentDirection = isHor ? 'horizontal' : 'vertical';
                        const dir = (e.key === 'ArrowRight' || e.key === 'ArrowDown') ? 1 : -1;
                        isHor ? moveH(i, j + dir) : moveV(i + dir, j);
                    }
                });
            }
            grid.appendChild(input);
        }
    }
}

const moveH = (r,c) => { 
    const originalC = c;
    while(c >= 0 && c < SIZE && solution[r][c] === '#') {
        c += (c < originalC) ? -1 : 1;
    }
    if(c >= 0 && c < SIZE) {
        const cell = document.querySelector(`[data-row="${r}"][data-col="${c}"]`);
        if(cell) cell.focus();
    }
};

const moveV = (r,c) => { 
    const originalR = r;
    while(r >= 0 && r < SIZE && solution[r][c] === '#') {
        r += (r < originalR) ? -1 : 1;
    }
    if(r >= 0 && r < SIZE) {
        const cell = document.querySelector(`[data-row="${r}"][data-col="${c}"]`);
        if(cell) cell.focus();
    }
};

function checkAnswers() {
    let ok = 0, tot = 0;
    for(let i = 0; i < SIZE; i++) {
        for(let j = 0; j < SIZE; j++) {
            if(solution[i][j] !== '#'){
                tot++;
                const el = document.querySelector(`[data-row="${i}"][data-col="${j}"]`);
                if(el.value === solution[i][j]) {
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
    // Pequeño delay para que se pinte antes del alert
    setTimeout(() => {
        alert(ok === tot ? '¡ENHORABUENA! ¡PUXA OVIEDO!' : `Llevas ${ok} de ${tot} aciertos.`);
    }, 100);
}

function clearGrid() { 
    if(confirm('¿Quieres borrar todo el progreso?')) {
        const cells = document.querySelectorAll('.cell:not(.black)');
        cells.forEach(cell => {
            cell.value = '';
            cell.classList.remove('correct', 'incorrect');
        });
    }
}

function showSolution() {
    if(confirm('¿Rendirse y ver la solución?')){
        for(let i = 0; i < SIZE; i++) {
            for(let j = 0; j < SIZE; j++) {
                if(solution[i][j] !== '#'){
                    const el = document.querySelector(`[data-row="${i}"][data-col="${j}"]`);
                    el.value = solution[i][j];
                    el.className = 'cell correct';
                }
            }
        }
    }
}

// Iniciar cuando cargue el documento
document.addEventListener('DOMContentLoaded', createGrid);
