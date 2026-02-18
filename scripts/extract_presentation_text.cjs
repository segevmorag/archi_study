const fs = require('fs');
const path = require('path');

const slidesDir = path.join(__dirname, '../temp_pptx/ppt/slides');
const outputFile = path.join(__dirname, '../presentation_text.txt');

if (!fs.existsSync(slidesDir)) {
    console.error('Slides directory not found!');
    process.exit(1);
}

const files = fs.readdirSync(slidesDir).filter(f => f.startsWith('slide') && f.endsWith('.xml'));

// Sort naturally (slide1, slide2, slide10...)
files.sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)[0]);
    const numB = parseInt(b.match(/\d+/)[0]);
    return numA - numB;
});

let fullText = '';

files.forEach(file => {
    const content = fs.readFileSync(path.join(slidesDir, file), 'utf8');
    // Extract text between <a:t>...</a:t>
    // Note: XML parsing is better, but regex is simpler for pure extraction here.
    // Also handle xml entities if needed, but for now simple extract is enough.
    const textMatches = content.match(/<a:t>([^<]*)<\/a:t>/g);

    if (textMatches) {
        const slideText = textMatches.map(t => t.replace(/<\/?a:t>/g, '')).join(' ');
        fullText += `--- ${file} ---\n${slideText}\n\n`;
    }
});

fs.writeFileSync(outputFile, fullText);
console.log(`Extracted text from ${files.length} slides to ${outputFile}`);
