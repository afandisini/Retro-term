const fs = require('fs');
const path = require('path');

const root = process.cwd();
const distDir = path.join(root, 'dist');

const possibleSources = [
  path.join(root, 'assets', 'term-icons', 'dist', 'term-icons.css'),
  path.join(root, 'assets', 'term-icons', 'term-icons.css'),
  path.join(root, 'term-icons.css')
];

fs.mkdirSync(distDir, { recursive: true });

const source = possibleSources.find((file) => fs.existsSync(file));
const target = path.join(distDir, 'term-icons.css');

if (!source) {
  console.warn('term-icons.css not found. Creating empty fallback.');
  fs.writeFileSync(target, '/* Retro-term icons CSS placeholder */\n');
  process.exit(0);
}

fs.copyFileSync(source, target);
console.log(`Copied ${source} to dist/term-icons.css`);
