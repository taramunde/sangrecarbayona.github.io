const fs = require('fs');
const path = require('path');
const jugadores = require('./datos_para_generar.js');

const carpetaSalida = './'; 
const rutaPlantilla = './fichajugador.html';
let plantillaBase = fs.readFileSync(rutaPlantilla, 'utf8');

console.log("🚀 Iniciando generación de fichas...");

for (let id in jugadores) {
    let jugador = jugadores[id];
    let nombre = jugador.name; 
    let foto = jugador.src; 
    let posicion = jugador.alt || "Jugador";
    let nombreCorto = nombre.split(' ')[0];

    // Construcción del bloque Híbrido (PC + MÓVIL)
    let bloqueHtml = `
    <div class="player-card">
        <div class="player-card-image-container">
            <img src="${foto}" alt="${nombre}" class="player-image">
        </div>
        <div class="player-info">
            <span class="player-position">${posicion}</span>
            <h2 class="player-name">${nombreCorto}</h2>
        </div>
        <div class="black-ribbon-container">
            <img src="https://i.postimg.cc/vmNGQqTS/lazo-negro.webp" alt="Crespón" class="black-ribbon-img">
        </div>
        <div class="player-card-logo-container">
            <img src="https://i.postimg.cc/0yNgbYTg/Real_Oviedo_Fondo.webp" alt="Logo" class="player-card-logo">
        </div>
    </div>
    <div class="player-full-name-container">
        <span class="player-full-name">${nombre}</span>
    </div>

    <div class="mobile-shield-wrapper">
        <div class="ribbon-container"><div class="ribbon ribbon-top">${nombreCorto}</div></div>
        <div class="mobile-shield-card">
            <div class="mobile-shield-bg"></div>
            <img src="${foto}" alt="${nombre}" class="mobile-player-image">
            <div class="mobile-position-text">${posicion}</div>
        </div>
        <div class="ribbon-container"><div class="ribbon ribbon-bottom">${nombre}</div></div>
    </div>

    <svg width="0" height="0" style="position:absolute;">
        <defs>
            <clipPath id="svgPath" clipPathUnits="userSpaceOnUse">
                <path d="M265.3 53.9a33.3 33.3 0 0 1-17.8-5.5 32 32 0 0 1-13.7-22.9c-.2-1.1-.4-2.3-.4-3.4 0-1.3-1-1.5-1.8-1.9a163 163 0 0 0-31-18.2A164.7 164.7 0 0 0 132.5 0c-23.7 0-46.3.7-68 2a163 163 0 0 0-31 18.2c-.8.4-1.8.6-1.8 1.9 0 1.1-.2 2.3-.4 3.4a32 32 0 0 1-13.7 22.9A33.3 33.3 0 0 1 0 53.9c0 68.4 2.3 124.6 15 166.9 11.5 38.5 40 68.3 80.4 84 10.4 4 23 5.2 37.1 5.2s26.7-1.2 37.1-5.2c40.4-15.7 68.9-45.5 80.4-84 12.7-42.3 15-98.5 15-166.9z"/>
            </clipPath>
        </defs>
    </svg>`;

    // REEMPLAZO CORREGIDO (Nota la barra invertida en <\/section>)
    let htmlFinal = plantillaBase.replace(
        /<section class="player-section">[\s\S]*?<\/section>/, 
        `<section class="player-section">${bloqueHtml}</section>`
    );

    // Actualizar título de la página
    let seoTitle = nombre + " - Real Oviedo | Sangre Carbayona";
    htmlFinal = htmlFinal.replace(/<title>.*?<\/title>/, `<title>${seoTitle}</title>`);

    fs.writeFileSync(path.join(carpetaSalida, id + ".html"), htmlFinal);
    console.log("✅ Ficha generada: " + id + ".html");
}

console.log("✨ Proceso terminado.");