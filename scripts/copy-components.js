const fs = require('fs');
const path = require('path');

const root = process.cwd();
const distDir = path.join(root, 'dist');
const source = path.join(root, 'retro-term-components.js');
const target = path.join(distDir, 'retro-term-components.js');

fs.mkdirSync(distDir, { recursive: true });

if (!fs.existsSync(source)) {
  console.warn('retro-term-components.js not found. Skipping components copy.');
  process.exit(0);
}

fs.copyFileSync(source, target);
console.log('Copied retro-term-components.js to dist/retro-term-components.js');
