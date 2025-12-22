// crear_fichas.js
const fs = require('fs');
const path = require('path');

// 1. CARGAMOS LOS DATOS NATIVAMENTE
// Al usar require, si hay un error de sintaxis, Node te dirá la línea exacta.
const jugadores = require('./datos_para_generar.js');

// 2. CONFIGURACIÓN
const baseURL = "https://taramunde.github.io/sangrecarbayona.github.io"; // Tu URL
const carpetaSalida = 'fichas_redes'; // Nombre de la carpeta nueva
const rutaPlantilla = './fichajugador.html';

// 3. PREPARAR CARPETA
if (!fs.existsSync(carpetaSalida)){
    fs.mkdirSync(carpetaSalida);
}

// 4. LEER PLANTILLA
const plantilla = fs.readFileSync(rutaPlantilla, 'utf8');

console.log(`✅ Datos cargados correctamente. Se procesarán ${Object.keys(jugadores).length} jugadores.`);

// 5. GENERAR FICHAS
for (let id in jugadores) {
    let jugador = jugadores[id];
    
    // Preparar datos (usamos los nombres de variables de tu players-database.js)
    // Asegúrate de que en tu archivo la imagen se llama 'src' o 'image'. Aquí asumo 'src'.
    let nombre = jugador.name || jugador.nombre; 
    let foto = jugador.src || jugador.image; 
    
    let nombreArchivo = `${id}.html`;
    let urlFinal = `${baseURL}/${carpetaSalida}/${nombreArchivo}`;

    // Crear las etiquetas META
    let metaTags = `
    <meta property="og:title" content="${nombre} - Sangre Carbayona" />
    <meta property="og:description" content="Ficha del jugador ${nombre} del Real Oviedo." />
    <meta property="og:image" content="${foto}" />
    <meta property="og:url" content="${urlFinal}" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:image" content="${foto}">
    `;

    // Inyectar en el HTML
    let htmlFinal = plantilla
        .replace('</head>', `${metaTags}\n</head>`)
        // Arreglar rutas (subir un nivel ../)
        .replace(/href="css\//g, 'href="../css/')
        .replace(/src="js\//g, 'src="../js/')
        .replace(/href="index.html"/g, 'href="../index.html"')
        .replace(/href="plantilla.html"/g, 'href="../plantilla.html"')
        // Script para que al abrir se cargue la info
        .replace('</body>', `
        <script>
            if (!window.location.search.includes('player=')) {
                let nuevaUrl = window.location.href.split('?')[0] + '?player=${id}';
                window.history.replaceState(null, '', nuevaUrl);
            }
        </script>
        </body>`);

    // Guardar archivo
    fs.writeFileSync(path.join(carpetaSalida, nombreArchivo), htmlFinal);
}

console.log(`🎉 ¡Éxito! Revisa la carpeta '${carpetaSalida}'.`);