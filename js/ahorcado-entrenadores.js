/* js/ahorcado-entrenadores.js */

// LISTA DE ENTRENADORES [NOMBRE, PISTA]
var word = [
    ["FRED PENTLAND", "Primer entrenador del Real Oviedo."],
    ["SERGIO EGEA", "Consiguió el ascenso a 2ª en 2015."],
    ["VICENTE MIERA", "Se logró el último ascenso a 1ª."],
    ["PACHETA", "Burgalés y querido por la afición."],
    ["RIVAS", "Se hizo cargo tras el descenso a 3ª."],
    ["TONIJUAN", "Entrenador del primer ascenso a 1ª (1933)."],
    ["IRURETA", "Entrenador vasco de prestigio U.E.F.A."],
    ["LUIS ARAGONES", "El sabio de Hortaleza."],
    ["RADOMIR ANTIC", "De origen serbio, entrenó a los 3 grandes."],
    ["TABAREZ", "Maestro uruguayo."],
    ["CARRASCO", "No guardamos buen recuerdo de él."],
    ["MARIGIL", "Fue jugador y entrenador de la casa."]
];

var tastatur = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var select = 0;
var wordLeft = [];
var fail = 0;

// Carga inicial
window.addEventListener('load', function() {
    createKeyboard();
});

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
    var currentWord = word[select][0];
    
    for(var a = 0; a < currentWord.length; a++) {
        var x = currentWord[a];
        var b = document.createElement("span");
        b.className = "l" + (x == " " ? " ls" : "");
        b.innerHTML = "&nbsp;";
        b.id = "l" + a;
        d.appendChild(b);
        
        if(x != " " && wordLeft.indexOf(x) == -1) {
            wordLeft.push(x);
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
    
    res.classList.add("show");
    if(win) {
        title.innerText = "¡VICTORIA!";
        title.style.color = "#4CAF50";
        msg.innerHTML = "¡Enhorabuena!<br><br>" + word[select][0];
    } else {
        title.innerText = "¡GAME OVER!";
        title.style.color = "#F44336";
        msg.innerHTML = "La respuesta era:<br><br>" + word[select][0];
    }
}

function showHint() {
    document.getElementById("hintText").innerText = word[select][1];
    document.getElementById("hint").style.display = "block";
}

function closeHint() {
    document.getElementById("hint").style.display = "none";
}
