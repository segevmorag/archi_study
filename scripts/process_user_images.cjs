const fs = require('fs');
const path = require('path');

const artifactsDir = path.join(__dirname, '../../..', 'brain/f9843854-3db9-40dd-81ac-41f7ebd8460b');
const assetsDir = path.join(__dirname, '../public/assets');

// Map artifacts to new filenames based on timestamp order
// Timestamps are in the filename: media__TIMESTAMP.png
const artifacts = fs.readdirSync(artifactsDir)
    .filter(f => f.startsWith('media__') && f.endsWith('.png'))
    .sort(); // String sort works for timestamps

// Filter only the recent ones (last 5)
const recentArtifacts = artifacts.slice(-5);

console.log('Found recent artifacts:', recentArtifacts);

const mapping = [
    { src: recentArtifacts[0], dest: 'opm-opl.png' },      // 1st: OPL
    { src: recentArtifacts[1], dest: 'opm-diagram.png' },  // 2nd: Full Diagram
    { src: recentArtifacts[2], dest: 'opm-structural.png' }, // 3rd: Structural
    { src: recentArtifacts[3], dest: 'opm-procedural.png' }, // 4th: Procedural
    { src: recentArtifacts[4], dest: 'opm-refinement.png' }  // 5th: Refinement? (Assumed)
];

mapping.forEach(m => {
    if (m.src) {
        fs.copyFileSync(path.join(artifactsDir, m.src), path.join(assetsDir, m.dest));
        console.log(`Copied ${m.src} to ${m.dest}`);
    }
});
