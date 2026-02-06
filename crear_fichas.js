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
    console.error("No se encuentra fichajugador.html");
    process.exit(1);
}
let plantillaBase = fs.readFileSync(rutaPlantilla, 'utf8');

console.log("Iniciando generacion de fichas...");

let urlsParaSitemap = [baseURL + "/index.html"]; 

// 4. GENERAR FICHAS
for (let id in jugadores) {
    let jugador = jugadores[id];
    let nombre = jugador.name; 
    let foto = jugador.src; 
    let posicion = jugador.alt || "Jugador";
    let nombreCorto = nombre.split(' ')[0];
    let nombreArchivo = id + ".html";
    let urlFinal = baseURL + "/" + nombreArchivo;

    urlsParaSitemap.push(urlFinal);

    let htmlFinal = plantillaBase;
    
    // BLOQUE HTML (Construido paso a paso para evitar errores de caracteres)
    let bloque = "";
    bloque += "";
    bloque += "<div class=\"player-card\">";
    bloque += "<div class=\"player-card-image-container\">";
    bloque += "<img src=\"" + foto + "\" alt=\"" + nombre + "\" class=\"player-image\" loading=\"lazy\">";
    bloque += "</div>";
    bloque += "<div class=\"player-info\">";
    bloque += "<span class=\"player-position\">" + posicion + "</span>";
    bloque += "<h2 class=\"player-name\">" + nombreCorto + "</h2>";
    bloque += "</div>";
    bloque += "<div class=\"black-ribbon-container\">";
    bloque += "<img src=\"https://i.postimg.cc/vmNGQqTS/lazo-negro.webp\" alt=\"Crespón negro\" class=\"black-ribbon-img\" loading=\"lazy\">";
    bloque += "</div>";
    bloque += "<div class=\"player-card-logo-container\">";
    bloque += "<img src=\"https://i.postimg.cc/0yNgbYTg/Real_Oviedo_Fondo.webp\" alt=\"Logo Oviedo\" class=\"player-card-logo\" loading=\"lazy\">";
    bloque += "</div>";
    bloque += "</div>";
    bloque += "<div class=\"player-full-name-container\">";
    bloque += "<span class=\"player-full-name\">" + nombre + "</span>";
    bloque += "</div>";
    bloque += "";
    bloque += "<div class=\"mobile-shield-wrapper\">";
    bloque += "<div class=\"ribbon-container\"><div class=\"ribbon ribbon-top\">" + nombreCorto + "</div></div>";
    bloque += "<div class=\"mobile-shield-card\">";
    bloque += "<div class=\"mobile-shield-bg\"></div>";
    bloque += "<img src=\"" + foto + "\" alt=\"" + nombre + "\" class=\"mobile-player-image\">";
    bloque += "<div class=\"mobile-position-text\">" + posicion + "</div>";
    bloque += "</div>";
    bloque += "<div class=\"ribbon-container\"><div class=\"ribbon ribbon-bottom\">" + nombre + "</div></div>";
    bloque += "</div>";
    bloque += "<svg width=\"0\" height=\"0\" class=\"clip-svg\"><defs><clipPath id=\"svgPath\" clipPathUnits=\"userSpaceOnUse\">";
    bloque += "<path d=\"M265.3 53.9a33.3 33.3 0 0 1-17.8-5.5 32 32 0 0 1-13.7-22.9c-.2-1.1-.4-2.3-.4-3.4 0-1.3-1-1.5-1.8-1.9a163 163 0 0 0-31-18.2A164.7 164.7 0 0 0 132.5 0c-23.7 0-46.3.7-68 2a163 163 0 0 0-31 18.2c-.8.4-1.8.6-1.8 1.9 0 1.1-.2 2.3-.4 3.4a32 32 0 0 1-13.7 22.9A33.3 33.3 0 0 1 0 53.9c0 68.4 2.3 124.6 15 166.9 11.5 38.5 40 68.3 80.4 84 10.4 4 23 5.2 37.1 5.2s26.7-1.2 37.1-5.2c40.4-15.7 68.9-45.5 80.4-84 12.7-42.3 15-98.5 15-166.9z\"/>";
    bloque += "</clipPath></defs></svg>";

    // Inyectar en la seccion (Usando una busqueda simple de texto)
    let inicio = htmlFinal.indexOf("<section class=\"player-section\">");
    let fin = htmlFinal.indexOf("</section>", inicio) + 10;
    
    if (inicio !== -1 && fin !== -1) {
        let parte1 = htmlFinal.substring(0, inicio);
        let parte2 = htmlFinal.substring(fin);
        htmlFinal = parte1 + "<section class=\"player-section\">" + bloque + "</section>" + parte2;
    }

    // Actualizar Titulo SEO
    let seoTitle = nombre + " - Real Oviedo | Sangre Carbayona";
    htmlFinal = htmlFinal.replace(/<title>.*?<\/title>/, "<title>" + seoTitle + "</title>");

    fs.writeFileSync(path.join(carpetaSalida, nombreArchivo), htmlFinal);
    console.log("Ficha creada: " + nombreArchivo);
}

// 5. GENERAR SITEMAP
let sitemapLines = urlsParaSitemap.map(function(u) {
    return "  <url><loc>" + u + "</loc><lastmod>" + new Date().toISOString().split('T')[0] + "</lastmod><priority>0.8</priority></url>";
});
let sitemapContent = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n" + sitemapLines.join("\n") + "\n</urlset>";
fs.writeFileSync(path.join(carpetaSalida, "sitemap.xml"), sitemapContent);

console.log("Proceso terminado correctamente.");