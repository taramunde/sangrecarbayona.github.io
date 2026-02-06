const fs = require('fs');
const path = require('path');

// 1. CARGAMOS LOS DATOS
const jugadores = require('./datos_para_generar.js');

// 2. CONFIGURACIÓN
const baseURL = "https://taramunde.github.io/sangrecarbayona.github.io"; 
const carpetaSalida = './'; 
const rutaPlantilla = './fichajugador.html';

// 3. LEER PLANTILLA
if (!fs.existsSync(rutaPlantilla)) {
    console.error("❌ Error: No se encuentra el archivo fichajugador.html");
    process.exit(1);
}
let plantillaBase = fs.readFileSync(rutaPlantilla, 'utf8');

console.log("🚀 Iniciando generación de fichas...");

// 4. GENERAR FICHAS
for (let id in jugadores) {
    let jugador = jugadores[id];
    let nombre = jugador.name; 
    let foto = jugador.src; 
    let posicion = jugador.alt || "Jugador";
    let nombreCorto = nombre.split(' ')[0];
    let nombreArchivo = id + ".html";

    // CONSTRUCCIÓN DEL BLOQUE HTML (SVG movido al principio)
    let bloqueHtml = `
    <!-- SVG Definitions (debe ir antes de usarse) -->
    <svg width="0" height="0" style="position:absolute; z-index:-1;">
        <defs>
            <clipPath id="svgPath-${id}" clipPathUnits="objectBoundingBox">
                <path d="M 0.5 0.1 L 0.7 0.3 L 0.7 0.7 L 0.5 0.9 L 0.3 0.7 L 0.3 0.3 Z"/>
            </clipPath>
        </defs>
    </svg>

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
            <div class="mobile-shield-bg" style="clip-path: url(#svgPath-${id});"></div>
            <img src="${foto}" alt="${nombre}" class="mobile-player-image" style="clip-path: url(#svgPath-${id});">
            <div class="mobile-position-text">${posicion}</div>
        </div>
        <div class="ribbon-container"><div class="ribbon ribbon-bottom">${nombre}</div></div>
    </div>`;

    // --- REEMPLAZO POR PARTES ---
    const marcadorInicio = '<section class="player-section">';
    const marcadorFin = '</section>';
    
    let htmlFinal = plantillaBase;
    let partes = htmlFinal.split(marcadorInicio);
    
    if (partes.length > 1) {
        let resto = partes[1].split(marcadorFin);
        if (resto.length > 1) {
            htmlFinal = partes[0] + marcadorInicio + bloqueHtml + marcadorFin + resto[1];
        } else {
            console.warn(`⚠️  No se encontró cierre </section> en ${nombreArchivo}`);
        }
    } else {
        console.warn(`⚠️  No se encontró <section class="player-section"> en ${nombreArchivo}`);
    }

    // Actualizar SEO y Redirección
    htmlFinal = htmlFinal.replace(/<title>.*?<\/title>/, `<title>${nombre} - Real Oviedo</title>`);
    htmlFinal = htmlFinal.replace('</body>', 
        `<script>if(!window.location.search.includes('player=')){window.history.replaceState(null,'',window.location.href.split('?')[0]+'?player=${id}');}</script></body>`);

    fs.writeFileSync(path.join(carpetaSalida, nombreArchivo), htmlFinal);
    console.log("✅ Generado: " + nombreArchivo);
}

console.log("\n🎉 ¡Generación completada!");