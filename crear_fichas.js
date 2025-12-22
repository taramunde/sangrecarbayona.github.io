const fs = require('fs');
const path = require('path');

// 1. CARGAMOS LOS DATOS
const jugadores = require('./datos_para_generar.js');

// 2. CONFIGURACIÓN (Ajustada a tu URL real)
const baseURL = "https://taramunde.github.io/sangrecarbayona.github.io"; 
const carpetaSalida = './'; // Ahora se guarda en la raíz
const rutaPlantilla = './fichajugador.html';

// 3. LEER PLANTILLA
let plantilla = fs.readFileSync(rutaPlantilla, 'utf8');

// LIMPIEZA: Quitamos las etiquetas vacías
plantilla = plantilla.replace(/<meta property="og:title" content="">/g, '');
plantilla = plantilla.replace(/<meta property="og:description" content="">/g, '');
plantilla = plantilla.replace(/<meta property="og:image" content="">/g, '');
plantilla = plantilla.replace(/<meta property="og:url" content="">/g, '');

console.log(`✅ Procesando archivos en la raíz...`);

// 4. GENERAR FICHAS
for (let id in jugadores) {
    let jugador = jugadores[id];
    let nombre = jugador.name; 
    let foto = jugador.src; 
    let nombreArchivo = `${id}.html`;
    let urlFinal = `${baseURL}/${nombreArchivo}`;

    // Etiquetas META (Sin el /fichas_redes/)
    let metaTags = `
    <meta property="og:title" content="${nombre} - Sangre Carbayona" />
    <meta property="og:description" content="Ficha técnica de ${nombre}." />
    <meta property="og:image" content="${foto}" />
    <meta property="og:url" content="${urlFinal}" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image">`;

    // Inyectar etiquetas. 
    // NOTA: Como ahora están en la raíz, NO necesitamos añadir "../" a las rutas de CSS/JS
    let htmlFinal = plantilla
        .replace('</head>', `${metaTags}\n</head>`)
        .replace('</body>', `
        <script>
            if (!window.location.search.includes('player=')) {
                let nuevaUrl = window.location.href.split('?')[0] + '?player=${id}';
                window.history.replaceState(null, '', nuevaUrl);
            }
        </script>
        </body>`);

    fs.writeFileSync(path.join(carpetaSalida, nombreArchivo), htmlFinal);
}

console.log("🎉 ¡Hecho! Las fichas ahora están en la carpeta principal.");