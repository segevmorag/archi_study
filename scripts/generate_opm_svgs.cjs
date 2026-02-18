const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '../public/assets');

// DELETE PNG placeholders for OPM if they exist
['opm-basics.png', 'opm-structural.png', 'opm-procedural.png', 'opm-refinement.png'].forEach(file => {
    const p = path.join(assetsDir, file);
    if (fs.existsSync(p)) fs.unlinkSync(p);
});

// Helper for SVG creation
const createSvg = (name, content) => {
    const template = `<svg width="800" height="400" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#1e293b">
<defs>
    <!-- Aggregation Marker -->
    <marker id="agg" markerWidth="10" markerHeight="10" refX="10" refY="5" orient="auto">
        <path d="M0,5 L10,0 L10,10 z" fill="#e2e8f0" />
    </marker>
    <!-- Generalization Marker (White Triangle) -->
    <marker id="gen" markerWidth="10" markerHeight="10" refX="10" refY="5" orient="auto">
        <path d="M0,5 L10,0 L10,10 z" fill="none" stroke="#e2e8f0" stroke-width="1.5" />
    </marker>
    <!-- Agent Link (Filled Circle) -->
    <marker id="agent" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
        <circle cx="5" cy="5" r="4" fill="#e2e8f0" />
    </marker>
    <!-- Instrument Link (Empty Circle) -->
    <marker id="inst" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
        <circle cx="5" cy="5" r="4" fill="#1e293b" stroke="#e2e8f0" stroke-width="1.5" />
    </marker>
    <!-- Arrowhead -->
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="10" refY="5" orient="auto">
        <path d="M0,0 L10,5 L0,10" fill="none" stroke="#e2e8f0" stroke-width="1.5" />
    </marker>
</defs>
<style>
    .obj { fill: #22c55e; stroke: #e2e8f0; stroke-width: 2; }
    .proc { fill: #3b82f6; stroke: #e2e8f0; stroke-width: 2; rx: 30; ry: 30; }
    .text { fill: #e2e8f0; font-family: 'Segoe UI', sans-serif; font-weight: bold; font-size: 16px; text-anchor: middle; }
    .link { stroke: #e2e8f0; stroke-width: 2; fill: none; }
    .label { fill: #94a3b8; font-family: 'Segoe UI', sans-serif; font-size: 14px; text-anchor: middle; }
</style>
${content}
</svg>`;
    fs.writeFileSync(path.join(assetsDir, name), template);
};

// 1. OPM Basics
createSvg('opm-basics.svg', `
    <!-- Object -->
    <rect x="150" y="150" width="120" height="60" class="obj" />
    <text x="210" y="185" class="text">Object</text>
    
    <!-- Link -->
    <line x1="270" y1="180" x2="450" y2="180" class="link" marker-end="url(#arrow)" />
    
    <!-- Process -->
    <ellipse cx="530" cy="180" rx="80" ry="50" class="proc" />
    <text x="530" y="185" class="text">Processing</text>
    
    <!-- Explainer Text -->
    <text x="400" y="320" class="label">Rectangles = Objects (Existence) | Ellipses = Processes (Transformation)</text>
`);

// 2. Structural Links
createSvg('opm-structural.svg', `
    <!-- Aggregation -->
    <text x="100" y="50" class="text" style="text-anchor:start">Aggregation (Whole-Part)</text>
    <rect x="100" y="70" width="100" height="50" class="obj" /> <text x="150" y="100" class="text">Car</text>
    <path d="M150,120 L150,160 L100,200" class="link" marker-start="url(#agg)" marker-end="url(#arrow)" />
    <path d="M150,120 L150,160 L200,200" class="link" />
    <rect x="50" y="200" width="80" height="40" class="obj" /> <text x="90" y="225" class="text">Wheel</text>
    <rect x="170" y="200" width="80" height="40" class="obj" /> <text x="210" y="225" class="text">Engine</text>

    <!-- Generalization -->
    <text x="450" y="50" class="text" style="text-anchor:start">Generalization (Inheritance)</text>
    <rect x="450" y="70" width="100" height="50" class="obj" /> <text x="500" y="100" class="text">Person</text>
    <path d="M500,120 L500,160 L450,200" class="link" marker-start="url(#gen)" />
    <path d="M500,120 L500,160 L550,200" class="link" />
    <rect x="400" y="200" width="80" height="40" class="obj" /> <text x="440" y="225" class="text">Student</text>
    <rect x="520" y="200" width="80" height="40" class="obj" /> <text x="560" y="225" class="text">Teacher</text>
`);

// 3. Procedural Links
createSvg('opm-procedural.svg', `
    <!-- Agent -->
    <text x="150" y="50" class="text">Agent (Human)</text>
    <rect x="90" y="70" width="120" height="50" class="obj" /> <text x="150" y="100" class="text">Driver</text>
    <line x1="150" y1="120" x2="150" y2="200" class="link" marker-end="url(#agent)" />
    <ellipse cx="150" cy="250" rx="70" ry="40" class="proc" /> <text x="150" y="255" class="text">Driving</text>

    <!-- Instrument -->
    <text x="450" y="50" class="text">Instrument (Tool)</text>
    <rect x="390" y="70" width="120" height="50" class="obj" /> <text x="450" y="100" class="text">Key</text>
    <line x1="450" y1="120" x2="450" y2="200" class="link" marker-end="url(#inst)" />
    <ellipse cx="450" cy="250" rx="70" ry="40" class="proc" /> <text x="450" y="255" class="text">Starting</text>

    <!-- Consumption/Result -->
    <text x="650" y="50" class="text">Result (Create)</text>
    <ellipse cx="650" cy="95" rx="60" ry="35" class="proc" /> <text x="650" y="100" class="text">Baking</text>
    <line x1="650" y1="130" x2="650" y2="180" class="link" marker-end="url(#arrow)" />
    <rect x="600" y="180" width="100" height="50" class="obj" /> <text x="650" y="210" class="text">Cake</text>
`);

// 4. Refinement (In-Zoom)
createSvg('opm-refinement.svg', `
    <text x="400" y="40" class="text">In-Zoom (Refinement)</text>
    
    <!-- Outer Process -->
    <ellipse cx="400" cy="200" rx="300" ry="180" class="proc" fill="none" stroke-dasharray="5,5" />
    <text x="400" y="65" class="text" font-size="20">Managing (Zoomed In)</text>

    <!-- Inner Elements -->
    <ellipse cx="300" cy="180" rx="60" ry="40" class="proc" /> <text x="300" y="185" class="text">Planning</text>
    <ellipse cx="500" cy="180" rx="60" ry="40" class="proc" /> <text x="500" y="185" class="text">Executing</text>
    
    <line x1="360" y1="180" x2="440" y2="180" class="link" marker-end="url(#arrow)" />
`);

console.log('Created OPM SVGs.');
