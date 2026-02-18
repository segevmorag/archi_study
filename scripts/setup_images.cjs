const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '../src/data/topics.js');
let content = fs.readFileSync(topicsPath, 'utf8');

// Normalize line endings
content = content.replace(/\r\n/g, '\n');

const lines = content.split('\n');
let newLines = [];
let currentTopicId = '';
let conceptIndex = 1;
let inKeyConcepts = false;
let imagesCreated = [];

const assetsDir = path.join(__dirname, '../public/assets');
if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
}

// SVG Template
const getSvgContent = (name) => `<svg width="800" height="450" xmlns="http://www.w3.org/2000/svg">
 <rect width="100%" height="100%" fill="#1e293b"/>
 <rect x="10" y="10" width="780" height="430" fill="none" stroke="#334155" stroke-width="2" stroke-dasharray="10"/>
 <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="#e2e8f0" font-weight="bold">
  ${name}
 </text>
</svg>`;

for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    newLines.push(line);

    // Detect topic ID
    const idMatch = line.match(/^\s*id:\s*'([^']+)',/);
    if (idMatch) {
        currentTopicId = idMatch[1];
        conceptIndex = 1;
        inKeyConcepts = false;
    }

    // Detect start/end of keyConcepts
    if (line.includes('keyConcepts: [')) inKeyConcepts = true;
    if (inKeyConcepts && line.trim() === '],') inKeyConcepts = false;

    // Check for detailedContent to insert image after
    if (inKeyConcepts && line.includes('detailedContent:')) {
        // Look ahead for existing image field
        let hasImage = false;
        // Check next few lines (up to 6)
        for (let j = 1; j <= 6; j++) {
            if (lines[i + j] && lines[i + j].includes('image:')) {
                hasImage = true;
                break;
            }
        }

        if (!hasImage) {
            const imageName = `${currentTopicId}-concept-${conceptIndex}.svg`;
            const imagePath = `assets/${imageName}`;

            // Get indentation
            const indent = line.match(/^\s*/)[0];
            newLines.push(`${indent}image: '${imagePath}',`);

            // Create the file
            fs.writeFileSync(path.join(assetsDir, imageName), getSvgContent(imageName));
            imagesCreated.push(imageName);

            conceptIndex++;
        }
    }
}

// Join and write back
fs.writeFileSync(topicsPath, newLines.join('\n'));

console.log(`Updated topics.js and created ${imagesCreated.length} placeholder images.`);
console.log('Images:', imagesCreated);
