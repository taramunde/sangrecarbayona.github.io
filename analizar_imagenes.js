const fs = require('fs');
const playersDatabase = require('./datos_para_generar.js');

const placeholderImage = "https://i.postimg.cc/28DbdgJS/Silueta.webp";
const playersWithPlaceholder = [];

for (const playerId in playersDatabase) {
    const player = playersDatabase[playerId];
    if (player.src === placeholderImage) {
        playersWithPlaceholder.push(player.name);
    }
}

if (playersWithPlaceholder.length > 0) {
    console.log("Players with placeholder image:");
    fs.writeFileSync('jugadores_sin_imagen.txt', playersWithPlaceholder.join('\n'));
    console.log(`\nA list of players with placeholder images has been saved to jugadores_sin_imagen.txt`);
} else {
    console.log("No players with placeholder image found.");
}