const fs = require('fs');
const path = require('path');

const root = process.cwd();
const distDir = path.join(root, 'dist');
const source = path.join(root, 'retro-term.js');
const target = path.join(distDir, 'retro-term.js');

fs.mkdirSync(distDir, { recursive: true });

if (!fs.existsSync(source)) {
  console.warn('retro-term.js not found. Skipping JS copy.');
  process.exit(0);
}

fs.copyFileSync(source, target);
console.log('Copied retro-term.js to dist/retro-term.js');
