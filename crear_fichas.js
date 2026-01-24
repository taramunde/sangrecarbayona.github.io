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

console.log(`🚀 Iniciando generación de fichas SEO...`);

// 4. GENERAR FICHAS
for (let id in jugadores) {
    let jugador = jugadores[id];
    let nombre = jugador.name; 
    let foto = jugador.src; 
    let posicion = jugador.alt || "Jugador"; // Usamos 'alt' como posición (ej: Portero, Defensa)
    let nombreArchivo = `${id}.html`;
    let urlFinal = `${baseURL}/${nombreArchivo}`;

    // --- A. PREPARAR DATOS SEO ---
    
    // Título de la pestaña del navegador (Lo más importante para Google)
    let seoTitle = `${nombre} - Real Oviedo | Sangre Carbayona`;
    
    // Descripción que sale debajo del enlace azul en Google
    let seoDescription = `Ficha técnica de ${nombre}, ${posicion.toLowerCase()} del Real Oviedo. Consulta sus estadísticas, trayectoria y biografía completa en Sangre Carbayona.`;

    // Datos Estructurados (JSON-LD) para que Google entienda que es un deportista
    let jsonLd = {
        "@context": "https://schema.org",
        "@type": "Athlete",
        "name": nombre,
        "url": urlFinal,
        "image": foto,
        "description": seoDescription,
        "affiliation": {
            "@type": "SportsTeam",
            "name": "Real Oviedo"
        },
        "jobTitle": posicion
    };

    // --- B. INYECTAR DATOS EN EL HTML ---

    let htmlFinal = plantillaBase;

    // 1. Reemplazar el Título Original
    // Busca <title>...</title> y lo cambia por el nuevo
    htmlFinal = htmlFinal.replace(/<title>.*?<\/title>/, `<title>${seoTitle}</title>`);

    // 2. Reemplazar la Descripción Original
    // Busca <meta name="description" ...> y lo cambia
    htmlFinal = htmlFinal.replace(
        /<meta name="description" content=".*?">/, 
        `<meta name="description" content="${seoDescription}">`
    );

    // 3. Limpiar etiquetas vacías viejas (por si acaso quedan en la plantilla)
    htmlFinal = htmlFinal.replace(/<meta property="og:title" content="">/g, '');
    htmlFinal = htmlFinal.replace(/<meta property="og:description" content="">/g, '');
    htmlFinal = htmlFinal.replace(/<meta property="og:image" content="">/g, '');
    htmlFinal = htmlFinal.replace(/<meta property="og:url" content="">/g, '');

    // 4. Crear las etiquetas nuevas de Redes Sociales (Open Graph) + JSON-LD
    let nuevosMetaTags = `
    <link rel="canonical" href="${urlFinal}" />
    
    <meta property="og:title" content="${seoTitle}" />
    <meta property="og:description" content="${seoDescription}" />
    <meta property="og:image" content="${foto}" />
    <meta property="og:url" content="${urlFinal}" />
    <meta property="og:type" content="profile" />
    <meta name="twitter:card" content="summary_large_image">

    <script type="application/ld+json">
    ${JSON.stringify(jsonLd, null, 2)}
    </script>
    `;

    // Inyectamos todo esto justo antes de cerrar el </head>
    htmlFinal = htmlFinal.replace('</head>', `${nuevosMetaTags}\n</head>`);

    // 5. Script de redirección (Mantiene tu lógica original para cargar los datos)
    htmlFinal = htmlFinal.replace('</body>', `
        <script>
            if (!window.location.search.includes('player=')) {
                let nuevaUrl = window.location.href.split('?')[0] + '?player=${id}';
                window.history.replaceState(null, '', nuevaUrl);
            }
        </script>
        </body>`);

    // --- C. GUARDAR ARCHIVO ---
    fs.writeFileSync(path.join(carpetaSalida, nombreArchivo), htmlFinal);
}

console.log("🎉 ¡Éxito! Se han generado todas las fichas con optimización SEO.");