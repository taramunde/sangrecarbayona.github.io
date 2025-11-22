/* js/ahorcado-engine.js - Motor del juego reutilizable */

class AhorcadoGame {
    constructor(data, containerIds) {
        this.words = data; // Array de [Palabra, Pista]
        this.ids = containerIds; // IDs de los elementos HTML
        
        this.currentWord = "";
        this.currentHint = "";
        this.guessedLetters = [];
        this.mistakes = 0;
        this.maxMistakes = 10; // Total de piezas del muñeco
        
        this.alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
        
        // Elementos del DOM
        this.wordDisplay = document.getElementById(this.ids.wordDisplay);
        this.keyboard = document.getElementById(this.ids.keyboard);
        this.hintBox = document.getElementById(this.ids.hintBox);
        this.drawingParts = document.querySelectorAll('.draw-part');
        
        this.init();
    }

    init() {
        this.setupKeyboard();
    }

    startNewGame() {
        // 1. Resetear variables
        this.mistakes = 0;
        this.guessedLetters = [];
        this.hintBox.style.display = 'none';
        
        // 2. Elegir palabra al azar
        const randomIndex = Math.floor(Math.random() * this.words.length);
        this.currentWord = this.words[randomIndex][0].toUpperCase();
        this.currentHint = this.words[randomIndex][1];

        // 3. Limpiar interfaz
        this.resetDrawing();
        this.renderWord();
        this.enableKeyboard();
        
        // 4. Ocultar pantallas de overlay
        document.getElementById(this.ids.startScreen).classList.add('hidden');
        document.getElementById(this.ids.resultScreen).classList.add('hidden');
    }

    setupKeyboard() {
        this.keyboard.innerHTML = '';
        this.alphabet.split('').forEach(letter => {
            const btn = document.createElement('button');
            btn.textContent = letter;
            btn.className = 'key-btn';
            btn.onclick = () => this.handleGuess(letter, btn);
            this.keyboard.appendChild(btn);
        });
    }

    enableKeyboard() {
        const buttons = this.keyboard.querySelectorAll('.key-btn');
        buttons.forEach(btn => {
            btn.classList.remove('correct', 'wrong');
            btn.disabled = false;
        });
    }

    handleGuess(letter, btnElement) {
        if (this.guessedLetters.includes(letter) || this.mistakes >= this.maxMistakes) return;

        this.guessedLetters.push(letter);
        btnElement.disabled = true;

        if (this.currentWord.includes(letter)) {
            btnElement.classList.add('correct');
            this.renderWord();
            this.checkWin();
        } else {
            btnElement.classList.add('wrong');
            this.mistakes++;
            this.drawNextPart();
            this.checkLoss();
        }
    }

    renderWord() {
        // Genera los guiones o letras
        const displayHTML = this.currentWord.split('').map(char => {
            if (char === ' ') return '<span class="letter-slot space"></span>';
            return this.guessedLetters.includes(char) 
                ? `<span class="letter-slot">${char}</span>` 
                : '<span class="letter-slot">&nbsp;</span>';
        }).join('');
        
        this.wordDisplay.innerHTML = displayHTML;
    }

    drawNextPart() {
        // El orden de las clases en el HTML debe coincidir con el orden lógico de dibujo
        // 0: suelo, 1: poste, 2: techo, 3: cuerda, 4: cabeza, 5: cuerpo, 6: brazo I, 7: brazo D, 8: pierna I, 9: pierna D
        // Ajustamos el índice (mistakes - 1) porque mistakes empieza en 1 tras el error
        const partIndex = this.mistakes - 1;
        if (partIndex < this.drawingParts.length) {
            this.drawingParts[partIndex].classList.remove('invisible');
        }
    }

    resetDrawing() {
        this.drawingParts.forEach(part => part.classList.add('invisible'));
    }

    showHint() {
        this.hintBox.textContent = "Pista: " + this.currentHint;
        this.hintBox.style.display = 'block';
    }

    checkWin() {
        // Ver si todas las letras (quitando espacios) están adivinadas
        const lettersToGuess = this.currentWord.replace(/ /g, '').split('');
        const allGuessed = lettersToGuess.every(l => this.guessedLetters.includes(l));
        
        if (allGuessed) {
            this.showResult(true);
        }
    }

    checkLoss() {
        if (this.mistakes >= this.maxMistakes) {
            this.showResult(false);
        }
    }

    showResult(isWin) {
        const resultScreen = document.getElementById(this.ids.resultScreen);
        const title = document.getElementById(this.ids.resultTitle);
        const msg = document.getElementById(this.ids.resultMsg);
        
        resultScreen.classList.remove('hidden');
        
        if (isWin) {
            title.textContent = "¡VICTORIA!";
            title.style.color = "#ffcc00";
            msg.innerHTML = `¡Grande! Has adivinado: <br><b>${this.currentWord}</b>`;
            // Aquí podríamos lanzar confeti si integras esa librería
        } else {
            title.textContent = "¡DERROTA!";
            title.style.color = "#ff9999";
            msg.innerHTML = `El entrenador era: <br><b>${this.currentWord}</b>`;
        }
    }
}
