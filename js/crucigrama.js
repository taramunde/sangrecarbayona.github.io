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
    '0-0':1, '2-2':2, '4-3':3, '6-2':4, '8-1':5, '10-0':6, 
    '11-6':7, '15-0':8, '16-10':9 
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
                if (numbers[`${i}-${j}`]) {
                    const num = document.createElement('span');
                    num.className = 'number';
                    num.textContent = numbers[`${i}-${j}`];
                    // El span no puede ir dentro de un input, usamos un contenedor relativo en el CSS
                    // pero para simplificar sin cambiar HTML, lo insertamos antes o usamos background.
                    // TRUCO: Como input no puede tener hijos, lo ideal es usar un div wrapper, 
                    // pero mantendremos tu lógica insertando el input y posicionando el número con CSS o JS si fuera un div.
                    // CORRECCIÓN: Los inputs NO pueden tener hijos en HTML válido.
                    // Para que se vean los números, necesitamos un truco.
                    // Lo dejaremos así, pero ten en cuenta que el span dentro de input se perderá en el renderizado.
                }
                
                // NOTA IMPORTANTE SOBRE NÚMEROS: 
                // Como los inputs no pueden tener hijos, el código original fallaba al mostrar números.
                // La mejor forma rápida es usar el placeholder si está vacío o un div contenedor.
                // Sin embargo, para no complicar tu estructura, usaremos el placeholder temporalmente o data-atributes.
                if (numbers[`${i}-${j}`]) {
                    input.setAttribute('placeholder', numbers[`${i}-${j}`]);
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
    while(c>=0&&c<SIZE&&solution[r][c]==='#') c+=c<j?-1:1; // Corrección simple de salto
    if(c>=0&&c<SIZE) document.querySelector(`[data-row="${r}"][data-col="${c}"]`)?.focus(); 
};
const moveV = (r,c) => { 
    while(r>=0&&r<SIZE&&solution[r][c]==='#') r+=r<i?-1:1; 
    if(r>=0&&r<SIZE) document.querySelector(`[data-row="${r}"][data-col="${c}"]`)?.focus(); 
};

function checkAnswers() {
    let ok = 0, tot = 0;
    for(let i=0;i<SIZE;i++) {
        for(let j=0;j<SIZE;j++) {
            if(solution[i][j]!=='#'){
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
        alert(ok===tot ? '¡ENHORABUENA! ¡PUXA OVIEDO!' : `Llevas ${ok} de ${tot} aciertos.`);
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
        for(let i=0;i<SIZE;i++) for(let j=0;j<SIZE;j++) if(solution[i][j]!=='#'){
            const el = document.querySelector(`[data-row="${i}"][data-col="${j}"]`);
            el.value = solution[i][j];
            el.className = 'cell correct';
        }
    }
}

// Iniciar cuando cargue el documento
document.addEventListener('DOMContentLoaded', createGrid);
