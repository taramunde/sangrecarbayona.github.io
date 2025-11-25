// js/quiz.js - EL QUIZ DEFINITIVO DEL REAL OVIEDO

let preguntas = [];
let indice = 0;
let aciertos = 0;
let respondida = false;

document.addEventListener('DOMContentLoaded', async () => {
    const res = await fetch('../data/quiz.json');
    preguntas = await res.json();
    mezclarArray(preguntas);
    mostrarPregunta();
});

function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function mostrarPregunta() {
    if (indice >= preguntas.length) {
        mostrarFinal();
        return;
    }

    const q = preguntas[indice];
    document.getElementById('num').textContent = indice + 1;
    document.getElementById('pregunta').textContent = q.pregunta;
    
    const opcionesDiv = document.getElementById('opciones');
    opcionesDiv.innerHTML = '';
    
    q.opciones.forEach((op, i) => {
        const btn = document.createElement('div');
        btn.className = 'opcion';
        btn.textContent = op;
        btn.onclick = () => seleccionarRespuesta(i, btn);
        opcionesDiv.appendChild(btn);
    });

    document.getElementById('siguiente').disabled = true;
    respondida = false;
    actualizarBarra();
}

function seleccionarRespuesta(seleccionada, elemento) {
    if (respondida) return;
    respondida = true;

    const q = preguntas[indice];
    const correcta = q.correcta;

    if (seleccionada === correcta) {
        elemento.classList.add('correcta');
        aciertos++;
        new Audio('https://www.soundjay.com/sports/sounds/cheer-2.mp3').play();
    } else {
        elemento.classList.add('incorrecta');
        opcionesDiv.children[correcta].classList.add('correcta');
        new Audio('https://www.soundjay.com/human/sounds/sigh-1.mp3').play();
    }

    document.getElementById('aciertos').textContent = aciertos;
    document.getElementById('fallos').textContent = indice + 1 - aciertos;
    document.getElementById('siguiente').disabled = false;
}

document.getElementById('siguiente').addEventListener('click', () => {
    indice++;
    mostrarPregunta();
});

function actualizarBarra() {
    const porcentaje = ((indice + 1) / preguntas.length) * 100;
    document.getElementById('barra').style.width = porcentaje + '%';
}

function mostrarFinal() {
    document.getElementById('quiz').classList.add('oculto');
    const final = document.getElementById('final');
    final.classList.remove('oculto');
    
    document.getElementById('final-aciertos').textContent = aciertos;
    
    const porcentaje = Math.round((aciertos / preguntas.length) * 100);
    const medalla = document.getElementById('medalla');
    
    if (porcentaje < 50) medalla.textContent = "MEDALLA DE BRONCE";
    else if (porcentaje < 75) { medalla.textContent = "MEDALLA DE PLATA"; medalla.className = "medalla plata"; }
    else if (porcentaje < 95) { medalla.textContent = "MEDALLA DE ORO"; medalla.className = "medalla oro"; }
    else { medalla.textContent = "¡LEYENDA CARBAYONA!"; medalla.className = "medalla leyenda"; }
}
