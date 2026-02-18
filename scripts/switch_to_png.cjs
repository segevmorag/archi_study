const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '../src/data/topics.js');
let content = fs.readFileSync(topicsPath, 'utf8');

// Replace .svg with .png in topics.js
content = content.replace(/\.svg/g, '.png');
fs.writeFileSync(topicsPath, content);

const assetsDir = path.join(__dirname, '../public/assets');
if (fs.existsSync(assetsDir)) {
    const files = fs.readdirSync(assetsDir);

    // Base64 for a 800x450 gray placeholder PNG (approximate, actually using a 1x1 pixel scaled up or just a valid small PNG)
    // Minimal 1x1 pixel PNG
    const pngBuffer = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==', 'base64');

    files.forEach(file => {
        if (file.endsWith('.svg')) {
            const pngName = file.replace('.svg', '.png');
            // Delete SVG
            fs.unlinkSync(path.join(assetsDir, file));
            // Create PNG
            fs.writeFileSync(path.join(assetsDir, pngName), pngBuffer);
            console.log(`Replaced ${file} with ${pngName}`);
        }
    });
}

console.log('Switched all assets to PNG.');
