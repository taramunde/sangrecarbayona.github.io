// generar_fichas.js

const fs = require('fs');
const path = require('path');

// ==========================================
// 1. CONFIGURACIÓN (¡DEBES CAMBIAR LA BASE URL!)
// ==========================================
// **REEMPLAZA** ESTA URL con la base de tu sitio web (Ej: https://taramunde.github.io/sangrecarbayona.github.io)
const baseURL = "https://taramunde.github.io/sangrecarbayona.github.io/"; 

// Rutas de archivos (NO TOCAR si tu estructura es: js/ en subcarpeta, plantilla en raíz)
const rutaDatos = './js/player-data.js'; 
const rutaPlantilla = './fichajugador.html';
const carpetaSalida = './fichas_compartibles';


// ==========================================
// 2. LÓGICA DE GENERACIÓN
// ==========================================

// Leer el archivo de datos (js/player-data.js)
let playersData = {};
try {
    const playerDataContent = fs.readFileSync(rutaDatos, 'utf8');
    // Esto hace que la variable 'playersData' se cargue en este script
    eval(playerDataContent); 
} catch (error) {
    console.error(`❌ Error: No se pudo leer el archivo de datos en ${rutaDatos}.`);
    process.exit(1);
}

// Leer la plantilla HTML (fichajugador.html)
let templateHtml;
try {
    templateHtml = fs.readFileSync(rutaPlantilla, 'utf8');
} catch (error) {
    console.error(`❌ Error: No se pudo leer la plantilla en ${rutaPlantilla}.`);
    process.exit(1);
}

// Crear carpeta de salida si no existe
if (!fs.existsSync(carpetaSalida)) {
    fs.mkdirSync(carpetaSalida);
}

const numPlayers = Object.keys(playersData).length;
if (numPlayers === 0) {
    console.warn("⚠️ Advertencia: 'playersData' está vacío. No se generará ninguna ficha.");
    process.exit(0);
}

console.log(`🚀 Iniciando generación de fichas para ${numPlayers} jugadores...`);

// Bucle para crear cada archivo HTML
for (const playerId in playersData) {
    const player = playersData[playerId];
    const fileName = `${playerId}.html`; 
    
    // Construye la URL final que será compartida
    const shareUrl = `${baseURL}/${carpetaSalida}/${fileName}`;

    // --- Generación de Etiquetas META ---
    const title = `${player.name} - Sangre Carbayona`;
    const description = `Ficha técnica, estadísticas y trayectoria de ${player.name} en el Real Oviedo.`;
    const imageUrl = player.image; // URL de la imagen del jugador

    const metaTags = `
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:url" content="${shareUrl}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Sangre Carbayona" />

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="${imageUrl}">
    `;

    // --- Inserción y Corrección de Rutas ---
    
    let finalHtml = templateHtml
        // 1. Inserta las Meta Tags justo antes de cerrar el head
        .replace('</head>', `${metaTags}\n</head>`)
        
        // 2. CORRECCIÓN DE RUTAS: Cambia 'css/' por '../css/' y 'js/' por '../js/'
        // Esto es vital porque los archivos generados están en una subcarpeta (fichas_compartibles)
        .replace(/href="css\//g, 'href="../css/')
        .replace(/src="js\//g, 'src="../js/')
        .replace(/href="index.html"/g, 'href="../index.html"'); 
        
    // 3. Script inyectado: Asegura que el JS de la página sepa qué jugador cargar visualmente
    const scriptCarga = `
    <script>
        // Script inyectado: Pre-selecciona al jugador correcto para el JS de la página
        if (!window.location.search.includes('player=')) {
            const newUrl = window.location.href.split('?')[0] + '?player=${playerId}';
            window.history.replaceState(null, '', newUrl);
        }
    </script>
    `;
    
    finalHtml = finalHtml.replace('</body>', `${scriptCarga}\n</body>`);


    // Guardar el nuevo archivo HTML en la carpeta de salida
    fs.writeFileSync(path.join(carpetaSalida, fileName), finalHtml);
}

console.log(`✅ ¡Generación completada! Se han creado ${numPlayers} archivos en la carpeta "${carpetaSalida}".`);
