const fs = require('fs');
const https = require('https');
const path = require('path');

// Function to download a single image
const downloadImage = (url, filepath) => {
    https.get(url, (response) => {
        if (response.statusCode === 200) {
            response.pipe(fs.createWriteStream(filepath));
            console.log(`Downloaded: ${filepath}`);
        } else {
            console.log(`Failed to download: ${url}`);
        }
    });
};

// Download all images from ID 1 to 151
for (let id = 1; id <= 151; id++) {
    const paddedId = id.toString();
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${paddedId}.png`;
    const filepath = path.join(__dirname, `pokemon-${paddedId}.png`);
    downloadImage(url, filepath);
}
