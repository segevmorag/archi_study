const fs = require('fs');
const path = require('path');

const artifactsDir = 'C:/Users/segev/.gemini/antigravity/brain/f9843854-3db9-40dd-81ac-41f7ebd8460b';
const assetsDir = path.join(__dirname, '../public/assets');

const newImage = 'media__1771201326687.png';
const newImageDest = 'opm-inzoom-2.png';

// 1. Rename existing opm-inzoom.png to opm-inzoom-1.png
const oldAssetPath = path.join(assetsDir, 'opm-inzoom.png');
const renamedAssetPath = path.join(assetsDir, 'opm-inzoom-1.png');

if (fs.existsSync(oldAssetPath)) {
    try {
        fs.renameSync(oldAssetPath, renamedAssetPath);
        console.log(`Renamed opm-inzoom.png to opm-inzoom-1.png`);
    } catch (err) {
        console.error(`Error renaming old asset:`, err);
    }
} else if (fs.existsSync(renamedAssetPath)) {
    console.log(`opm-inzoom-1.png already exists.`);
} else {
    console.log(`Original opm-inzoom.png not found.`);
}

// 2. Copy new image
const srcPath = path.join(artifactsDir, newImage);
const destPath = path.join(assetsDir, newImageDest);

if (fs.existsSync(srcPath)) {
    try {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${newImage} to ${newImageDest}`);
    } catch (err) {
        console.error(`Error copying ${newImage}:`, err);
    }
} else {
    console.error(`Source file not found: ${srcPath}`);
}
