const fs = require('fs');
const path = require('path');

const artifactsDir = 'C:/Users/segev/.gemini/antigravity/brain/f9843854-3db9-40dd-81ac-41f7ebd8460b';
const assetsDir = path.join(__dirname, '../public/assets');

const mapping = [
    { src: 'media__1771200585843.png', dest: 'opm-diagram-main.png' }, // OPM
    { src: 'media__1771200650215.png', dest: 'opm-opl-text.png' },     // OPL
    { src: 'media__1771200745016.png', dest: 'opm-procedural-1.png' }, // Procedural 1
    { src: 'media__1771200816978.png', dest: 'opm-procedural-2.png' }, // Procedural 2
    { src: 'media__1771200865365.png', dest: 'opm-structural-1.png' }, // Structural 1
    { src: 'media__1771200899469.png', dest: 'opm-structural-2.png' }, // Structural 2
    { src: 'media__1771201000696.png', dest: 'opm-inzoom.png' },       // In-Zoom
    { src: 'media__1771201082057.png', dest: 'opm-unfold.png' }        // Unfold
];

if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
}

mapping.forEach(file => {
    const srcPath = path.join(artifactsDir, file.src);
    const destPath = path.join(assetsDir, file.dest);

    try {
        if (fs.existsSync(srcPath)) {
            fs.copyFileSync(srcPath, destPath);
            console.log(`Copied ${file.src} to ${file.dest}`);
        } else {
            console.error(`Source file not found: ${srcPath}`);
        }
    } catch (err) {
        console.error(`Error processing ${file.src}:`, err);
    }
});
