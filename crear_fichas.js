const fs = require('fs');
const path = require('path');

// 1. CARGAMOS LOS DATOS
const jugadores = require('./datos_para_generar.js');

// 2. CONFIGURACIÓN
const baseURL = "https://taramunde.github.io/sangrecarbayona.github.io"; 
const carpetaSalida = './'; 
const rutaPlantilla = './fichajugador.html';

// 3. LEER PLANTILLA
let plantillaBase = fs.readFileSync(rutaPlantilla, 'utf8');

console.log("🚀 Iniciando generación de fichas...");

// Lista para el Sitemap
let urlsParaSitemap = [baseURL + "/index.html"]; 

// 4. GENERAR FICHAS
for (let id in jugadores) {
    let jugador = jugadores[id];
    let nombre = jugador.name; 
    let foto = jugador.src; 
    let posicion = jugador.alt || "Jugador";
    let nombreArchivo = id + ".html";
    let urlFinal = baseURL + "/" + nombreArchivo;

    urlsParaSitemap.push(urlFinal);

    // SEO
    let seoTitle = nombre + " - Real Oviedo | Sangre Carbayona";
    let seoDescription = "Ficha técnica de " + nombre + ", " + posicion.toLowerCase() + " del Real Oviedo en Sangre Carbayona.";

    let jsonLd = {
        "@context": "https://schema.org",
        "@type": "Athlete",
        "name": nombre,
        "url": urlFinal,
        "image": foto,
        "affiliation": { "@type": "SportsTeam", "name": "Real Oviedo" }
    };

    let htmlFinal = plantillaBase;
    
    // Reemplazos de SEO
    htmlFinal = htmlFinal.replace(/<title>.*?<\/title>/, "<title>" + seoTitle + "</title>");
    htmlFinal = htmlFinal.replace(/<meta name="description" content=".*?">/, '<meta name="description" content="' + seoDescription + '">');

    let nuevosMetaTags = "\n<link rel='canonical' href='" + urlFinal + "' />\n" +
                         "<meta property='og:title' content='" + seoTitle + "' />\n" +
                         "<meta property='og:image' content='" + foto + "' />\n" +
                         "<meta property='og:url' content='" + urlFinal + "' />\n" +
                         "<script type='application/ld+json'>" + JSON.stringify(jsonLd) + "</script>\n";

    htmlFinal = htmlFinal.replace('</head>', nuevosMetaTags + '</head>');
    
    // Script de redirección
    htmlFinal = htmlFinal.replace('</body>', 
        "<script>if(!window.location.search.includes('player=')){window.history.replaceState(null,'',window.location.href.split('?')[0]+'?player=" + id + "');}</script></body>");

    fs.writeFileSync(path.join(carpetaSalida, nombreArchivo), htmlFinal);
}

// 5. GENERAR SITEMAP.XML
let sitemapLines = urlsParaSitemap.map(function(url) {
    return "  <url><loc>" + url + "</loc><lastmod>" + new Date().toISOString().split('T')[0] + "</lastmod><priority>0.8</priority></url>";
});

let sitemapContent = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + sitemapLines.join('\n') + '\n</urlset>';

fs.writeFileSync(path.join(carpetaSalida, 'sitemap.xml'), sitemapContent);

console.log("🎉 ¡Todo listo! Fichas y sitemap.xml generados correctamente.");