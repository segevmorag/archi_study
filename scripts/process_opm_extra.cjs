const fs = require('fs');
const path = require('path');

const artifactsDir = 'C:/Users/segev/.gemini/antigravity/brain/f9843854-3db9-40dd-81ac-41f7ebd8460b';
const assetsDir = path.join(__dirname, '../public/assets');

const mapping = [
    { src: 'media__1771201082057.png', dest: 'opm-unfold-1.png' },     // Rename previous Unfold to 1
    { src: 'media__1771201291207.png', dest: 'opm-unfold-2.png' }      // New Unfold image
];

if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
}

mapping.forEach(file => {
    const srcPath = path.join(artifactsDir, file.src);
    const destPath = path.join(assetsDir, file.dest);

    // If source exists in artifacts, move it. 
    // If not, maybe we already moved it? Check if we need to rename an existing asset.

    if (fs.existsSync(srcPath)) {
        try {
            fs.copyFileSync(srcPath, destPath);
            console.log(`Copied ${file.src} to ${file.dest}`);
        } catch (err) {
            console.error(`Error copying ${file.src}:`, err);
        }
    } else {
        // Special handling: if we already moved opm-unfold.png (the old name) via previous script
        // we might want to rename it to opm-unfold-1.png now.
        if (file.dest === 'opm-unfold-1.png') {
            const oldAssetPath = path.join(assetsDir, 'opm-unfold.png');
            if (fs.existsSync(oldAssetPath)) {
                try {
                    fs.renameSync(oldAssetPath, destPath);
                    console.log(`Renamed opm-unfold.png to ${file.dest}`);
                } catch (err) {
                    console.error(`Error renaming old asset:`, err);
                }
            } else {
                console.log(`Source for ${file.dest} not found and no old asset to rename.`);
            }
        } else {
            console.log(`Source file not found: ${srcPath}`);
        }
    }
});
