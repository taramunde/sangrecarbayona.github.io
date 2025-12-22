// crear_fichas.js corregido
const fs = require('fs');
const path = require('path');

// 1. CARGAMOS LOS DATOS
const jugadores = require('./datos_para_generar.js');

// 2. CONFIGURACIÓN
const baseURL = "https://taramunde.github.io/sangrecarbayona.github.io"; 
const carpetaSalida = 'fichas_redes'; 
const rutaPlantilla = './fichajugador.html';

// 3. PREPARAR CARPETA
if (!fs.existsSync(carpetaSalida)){
    fs.mkdirSync(carpetaSalida);
}

// 4. LEER PLANTILLA
let plantilla = fs.readFileSync(rutaPlantilla, 'utf8');

// LIMPIEZA: Eliminamos las etiquetas meta vacías que ya existen en la plantilla para que no se dupliquen
plantilla = plantilla.replace(/<meta property="og:title" content="">/g, '');
plantilla = plantilla.replace(/<meta property="og:description" content="">/g, '');
plantilla = plantilla.replace(/<meta property="og:image" content="">/g, '');
plantilla = plantilla.replace(/<meta property="og:url" content="">/g, '');

console.log(`✅ Datos cargados. Procesando ${Object.keys(jugadores).length} jugadores...`);

// 5. GENERAR FICHAS
for (let id in jugadores) {
    let jugador = jugadores[id];
    
    let nombre = jugador.name; 
    let foto = jugador.src; 
    
    let nombreArchivo = `${id}.html`;
    let urlFinal = `${baseURL}/${carpetaSalida}/${nombreArchivo}`;

    // Crear las etiquetas META correctas
    let metaTags = `
    <meta property="og:title" content="${nombre} - Sangre Carbayona" />
    <meta property="og:description" content="Ficha técnica y estadísticas de ${nombre} - Real Oviedo." />
    <meta property="og:image" content="${foto}" />
    <meta property="og:url" content="${urlFinal}" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:image" content="${foto}">`;

    // Inyectar y arreglar rutas
    let htmlFinal = plantilla
        .replace('</head>', `${metaTags}\n</head>`)
        .replace(/href="css\//g, 'href="../css/')
        .replace(/src="js\//g, 'src="../js/')
        .replace(/href="index.html"/g, 'href="../index.html"')
        .replace(/href="plantilla.html"/g, 'href="../plantilla.html"')
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

console.log("🎉 ¡Éxito! Todas las fichas se han generado correctamente con sus fotos.");