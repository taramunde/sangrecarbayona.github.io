// js/ahorcado.js - AHORCADO ENTRENADORES REAL OVIEDO 2025

let entrenadorActual = null;
let palabra = "";
let palabraMostrada = [];
let errores = 0;
const MAX_ERRORES = 6;

let victorias = parseInt(localStorage.getItem('ahorcado-victorias') || '0');
let derrotas = parseInt(localStorage.getItem('ahorcado-derrotas') || '0');

document.addEventListener('DOMContentLoaded', () => {
    actualizarStats();
    cargarEntrenador();
    generarTeclado();
});

async function cargarEntrenador() {
    const res = await fetch('../data/entrenadores.json');
    const entrenadores = await res.json();
    entrenadorActual = entrenadores[Math.floor(Math.random() * entrenadores.length)];
    
    palabra = entrenadorActual.nombre.toUpperCase().replace(/ /g, ' ');
    palabraMostrada = palabra.split('').map(l => (l === ' ' ? ' ' : '_'));
    
    document.getElementById('foto-entrenador').src = entrenadorActual.foto;
    document.getElementById('pista-texto').textContent = `Entrenó al Oviedo en ${entrenadorActual.años}`;
    
    actualizarPalabra();
    errores = 0;
    dibujarMuñeco();
    habilitarTeclado();
}

function generarTeclado() {
    const teclado = document.getElementById('teclado');
    const letras = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    teclado.innerHTML = letras.split('').map(letra => 
        `<button onclick="probarLetra('${letra}')">${letra}</button>`
    ).join('');
}

function probarLetra(letra) {
    if (palabra.includes(letra)) {
        palabra.split('').forEach((l, i) => {
            if (l === letra) palabraMostrada[i] = letra;
        });
        new Audio('https://www.soundjay.com/buttons/sounds/button-09.mp3').play();
    } else {
        errores++;
        new Audio('https://www.soundjay.com/buttons/sounds/button-16.mp3').play();
    }
    
    actualizarPalabra();
    dibujarMuñeco();
    document.querySelector(`button[onclick="probarLetra('${letra}')"]`).disabled = true;
    
    if (!palabraMostrada.includes('_')) ganar();
    if (errores >= MAX_ERRORES) perder();
}

function actualizarPalabra() {
    document.getElementById('letras').textContent = palabraMostrada.join(' ');
}

function dibujarMuñeco() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Poste del Tartiere
    ctx.strokeStyle = '#ffcc00';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(50, 350);
    ctx.lineTo(250, 350);
    ctx.lineTo(150, 50);
    ctx.lineTo(50, 50);
    ctx.stroke();
    
    // Partes del muñeco
    if (errores > 0) { ctx.beginPath(); ctx.arc(150, 100, 40, 0, Math.PI*2); ctx.stroke(); } // cabeza
    if (errores > 1) { ctx.beginPath(); ctx.moveTo(150, 140); ctx.lineTo(150, 250); ctx.stroke(); } // cuerpo
    if (errores > 2) { ctx.beginPath(); ctx.moveTo(150, 170); ctx.lineTo(100, 220); ctx.stroke(); } // brazo izq
    if (errores > 3) { ctx.beginPath(); ctx.moveTo(150, 170); ctx.lineTo(200, 220); ctx.stroke(); } // brazo der
    if (errores > 4) { ctx.beginPath(); ctx.moveTo(150, 250); ctx.lineTo(110, 310); ctx.stroke(); } // pierna izq
    if (errores > 5) { ctx.beginPath(); ctx.moveTo(150, 250); ctx.lineTo(190, 310); ctx.stroke(); } // pierna der
}

function ganar() {
    victorias++;
    localStorage.setItem('ahorcado-victorias', victorias);
    actualizarStats();
    new Audio('https://www.soundjay.com/sports/sounds/cheer-1.mp3').play();
    alert(`¡ENHORABUENA! Has salvado a ${entrenadorActual.nombre.toUpperCase()} del Tartiere!`);
    cargarEntrenador();
}

function perder() {
    derrotas++;
    localStorage.setItem('ahorcado-derrotas', derrotas);
    actualizarStats();
    alert(`¡TE HAN COLGADO! Era ${palabra}`);
    cargarEntrenador();
}

function actualizarStats() {
    document.getElementById('wins').textContent = victorias;
    document.getElementById('losses').textContent = derrotas;
}

document.getElementById('nuevo-juego').addEventListener('click', cargarEntrenador);
