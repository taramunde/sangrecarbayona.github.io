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
    ['#','C','#','#','#','#','E','#','#','#','N','#','A','#','#','#','#'],
    ['L','A','N','G','A','R','A','#','#','#','#','#','R','#','#','#','#'],
    ['#','#','#','#','#','A','#','I','N','G','L','A','T','E','R','R','A']
];

let currentDirection = 'horizontal';

function createGrid() {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    const numbers = { '0-0':1, '2-2':2, '4-3':3, '6-2':4, '8-1':5, '10-0':6, '11-6':7, '15-0':8, '16-10':9 };

    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'cell';
            input.maxLength = 1;

            if (solution[i][j] === '#') {
                input.classList.add('black');
                input.disabled = true;
            } else {
                if (numbers[`${i}-${j}`]) {
                    const num = document.createElement('span');
                    num.className = 'number';
                    num.textContent = numbers[`${i}-${j}`];
                    input.appendChild(num);
                }
                input.dataset.row = i;
                input.dataset.col = j;

                input.addEventListener('focus', () => {
                    const hasRight = j + 1 < SIZE && solution[i][j + 1] !== '#';
                    const hasDown  = i + 1 < SIZE && solution[i + 1][j] !== '#';
                    currentDirection = (hasRight && hasDown) ? 'horizontal' : hasRight ? 'horizontal' : 'vertical';
                });

                input.addEventListener('input', e => {
                    let v = e.target.value.toUpperCase();
                    e.target.value = v;
                    if (v) {
                        e.target.className = v === solution[i][j] ? 'cell correct' : 'cell incorrect';
                        currentDirection === 'horizontal' ? moveH(i, j + 1) : moveV(i + 1, j);
                    } else e.target.className = 'cell';
                });

                input.addEventListener('keydown', e => {
                    if (e.key === 'Backspace' && !e.target.value) {
                        e.preventDefault();
                        currentDirection === 'horizontal' ? moveH(i, j - 1) : moveV(i - 1, j);
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

const moveH = (r, c) => { 
    while (c >= 0 && c < SIZE && solution[r][c] === '#') c += c < document.querySelector('[data-row="${r}"][data-col="${c}"]').dataset.col ? -1 : 1;
    if (c >= 0 && c < SIZE) document.querySelector(`[data-row="${r}"][data-col="${c}"]`)?.focus();
};
const moveV = (r, c) => { 
    while (r >= 0 && r < SIZE && solution[r][c] === '#') r += r < document.querySelector('[data-row="${r}"][data-col="${c}"]').dataset.row ? -1 : 1;
    if (r >= 0 && r < SIZE) document.querySelector(`[data-row="${r}"][data-col="${c}"]`)?.focus();
};

function checkAnswers() {
    let ok = 0, tot = 0;
    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++) {
            if (solution[i][j] !== '#') {
                tot++;
                const cell = document.querySelector(`[data-row="${i}"][data-col="${j}"]`);
                if (cell.value === solution[i][j]) ok++;
            }
        }
    }
    alert(ok === tot ? '¡COMPLETADO!' : `Tienes ${ok} de ${tot} correctas`);
}

function clearGrid() { 
    if (confirm('¿Borrar todo?')) location.reload(); 
}

function showSolution() {
    if (confirm('¿Ver solución?')) {
        for (let i = 0; i < SIZE; i++) {
            for (let j = 0; j < SIZE; j++) {
                if (solution[i][j] !== '#') {
                    const el = document.querySelector(`[data-row="${i}"][data-col="${j}"]`);
                    el.value = solution[i][j];
                    el.className = 'cell correct';
                }
            }
        }
    }
}

createGrid();
