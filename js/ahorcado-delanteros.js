/* js/ahorcado-delanteros.js */

// LISTA DE DELANTEROS [NOMBRE, PISTA]
var word = [
    ["DELY VALDES", "A llegado a ser seleccionador de su país."],
    ["DUBOVSKY", "Delantero tristemente fallecido en un accidente."],
    ["CARLOS", "Gran delantero jienense."],
    ["LANGARA", "Mejor delantero español de todos los tiempos."],
    ["HERRERITA", "Gran mito del Real Oviedo."],
    ["TOCHE", "Apodo futbolístico de José Verdú Nicolás."],
    ["MARIANIN", "El jabalí del Bierzo."],
    ["LINARES", "Goleador de Fuentes de Ebro."],
    ["GALLART", "Marcó el primer gol en 1ª División del Oviedo."],
    ["ARSENIO", "Delantero y también entrenador más conocido como El Bruxo de Arteixo."],
    ["LACATUS", "De nacionalidad Rumana."],
    ["DIEGO CERVERO", "Delantero ovetense goleador en las épocas malas."],
    ["LUIS ARAGONES", "Delantero y también fue entrenador de la Seleccion Española."],
    ["CASUCO", "Delantero que murió durante la guerra civil española."]
];

var tastatur = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var select = 0;
var wordLeft = [];
var fail = 0;
var availableWords = []; // Lista de índices disponibles

// Carga inicial
window.addEventListener('load', function() {
    createKeyboard();
    resetAvailableWords();
});

function resetAvailableWords() {
    availableWords = [];
    for (var i = 0; i < word.length; i++) {
        availableWords.push(i);
    }
    shuffleArray(availableWords);
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function startGame() {
    document.getElementById("home").style.display = "none";
    document.getElementById("result").classList.remove("show");
    document.getElementById("pGame").style.display = "block";
    newGame();
}

function newGame() {
    clearKeyboard();
    clearPlayer();
    createWord();
}

function clearKeyboard() {
    var keys = document.getElementsByClassName("b");
    for(var i = 0; i < keys.length; i++) {
        keys[i].setAttribute("data", "");
        keys[i].style.pointerEvents = "auto";
    }
}

function clearPlayer() {
    fail = 0;
    wordLeft = [];
    var parts = ["g0", "g1", "g2", "g3", "g4", "g5", "g5l", "g5r", "g6l", "g6r", "hintButton"];
    parts.forEach(id => {
        var el = document.getElementById(id);
        if(el) el.setAttribute("data", "false");
    });
    document.getElementById("hint").style.display = "none";
}

function createWord() {
    var d = document.getElementById("letter");
    d.innerHTML = "";
    select = Math.floor(Math.random() * word.length);
    var currentWord = word[select][0].toUpperCase(); // Obtenemos la palabra en mayúsculas

    // 1. Creamos el primer contenedor para la primera palabra
    var wordContainer = document.createElement("div");
    wordContainer.className = "word-wrapper"; // Clase nueva para agrupar
    d.appendChild(wordContainer);
    
    for(var a = 0; a < currentWord.length; a++) {
        var x = currentWord[a];
        
        if (x == " ") {
            // 2. SI HAY UN ESPACIO: Cerramos palabra actual y creamos contenedor nuevo
            // Esto fuerza que la siguiente palabra vaya en bloque
            wordContainer = document.createElement("div");
            wordContainer.className = "word-wrapper";
            d.appendChild(wordContainer);
        } else {
            // 3. SI ES LETRA: La metemos en el contenedor actual
            var b = document.createElement("span");
            b.className = "l";
            b.innerHTML = "&nbsp;";
            b.id = "l" + a; // Mantenemos el ID original para que funcione el juego
            wordContainer.appendChild(b);
            
            // Lógica de juego (guardar letras pendientes)
            if(wordLeft.indexOf(x) == -1) {
                wordLeft.push(x);
            }
        }
    }
}

function createKeyboard() {
    var tas = document.getElementById("tastatur");
    tas.innerHTML = "";
    for(var a = 0; a < tastatur.length; a++) {
        var b = document.createElement("span");
        b.className = "b";
        b.innerText = tastatur[a];
        b.setAttribute("data", "");
        b.onclick = function() { checkLetter(this); };
        tas.appendChild(b);
    }
}

function checkLetter(btn) {
    var letter = btn.innerText;
    btn.setAttribute("data", "checked");
    btn.style.pointerEvents = "none";

    if(isExist(letter)) {
        btn.setAttribute("data", "true"); 
        if(wordLeft.length == 0) {
            gameEnd(true);
        }
    } else {
        btn.setAttribute("data", "false");
        showNextFail();
    }
}

function isExist(e) {
    var index = wordLeft.indexOf(e);
    if(index != -1) {
        wordLeft.splice(index, 1);
        typeWord(e);
        isExist(e); 
        return true;
    }
    return false;
}

function typeWord(e) {
    var currentWord = word[select][0];
    for(var a = 0; a < currentWord.length; a++) {
        if(currentWord[a] == e) {
            document.getElementById("l" + a).innerText = e;
        }
    }
}

function showNextFail() {
    fail++;
    if(fail == 1) document.getElementById("g0").setAttribute("data", "true");
    if(fail == 2) document.getElementById("g1").setAttribute("data", "true");
    if(fail == 3) document.getElementById("g2").setAttribute("data", "true");
    if(fail == 4) { 
        document.getElementById("g3").setAttribute("data", "true");
        document.getElementById("hintButton").setAttribute("data", "true");
    }
    if(fail == 5) document.getElementById("g4").setAttribute("data", "true");
    if(fail == 6) document.getElementById("g5").setAttribute("data", "true");
    if(fail == 7) document.getElementById("g5l").setAttribute("data", "true");
    if(fail == 8) document.getElementById("g5r").setAttribute("data", "true");
    if(fail == 9) document.getElementById("g6l").setAttribute("data", "true");
    if(fail == 10) {
        document.getElementById("g6r").setAttribute("data", "true");
        gameEnd(false);
    }
}

function gameEnd(win) {
    var res = document.getElementById("result");
    var title = document.getElementById("rT");
    var msg = document.getElementById("rM");
    
    if(win) {
        title.innerText = "¡VICTORIA!";
        title.style.color = "#4CAF50";
        msg.innerText = "¡Enhorabuena! " + word[select][0];
        msg.style.color = "#FFFFFF";
    } else {
        title.innerText = "¡PERDISTE!";
        title.style.color = "#F44336";
        msg.innerText = "La respuesta era: " + word[select][0];
        msg.style.color = "#FFD700";
    }
    
    res.classList.add("show");
}

function showHint() {
    document.getElementById("hintText").innerText = word[select][1];
    document.getElementById("hint").style.display = "block";
}

function closeHint() {
    document.getElementById("hint").style.display = "none";
    document.getElementById("hintButton").setAttribute("data", "false");
}
