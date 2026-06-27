const fs = require('fs');
const path = require('path');

const root = process.cwd();
const distDir = path.join(root, 'dist');

const possibleSources = [
  path.join(root, 'assets', 'term-icons', 'dist', 'retro-term-icons.css'),
  path.join(root, 'assets', 'term-icons', 'dist', 'term-icons.css'),
  path.join(root, 'assets', 'term-icons', 'retro-term-icons.css'),
  path.join(root, 'assets', 'term-icons', 'term-icons.css'),
  path.join(root, 'term-icons.css')
];

fs.mkdirSync(distDir, { recursive: true });

const source = possibleSources.find((file) => fs.existsSync(file));
const target = path.join(distDir, 'retro-term-icons.css');
const minTarget = path.join(distDir, 'retro-term-icons.min.css');
const legacyTarget = path.join(distDir, 'term-icons.css');
const legacyMinTarget = path.join(distDir, 'term-icons.min.css');

if (!source) {
  console.warn('term-icons.css not found. Creating empty fallback.');
  fs.writeFileSync(target, '/* Retro-term icons CSS placeholder */\n');
  fs.writeFileSync(minTarget, '/* Retro-term icons CSS placeholder */\n');
  fs.writeFileSync(legacyTarget, '/* Retro-term icons CSS placeholder */\n');
  fs.writeFileSync(legacyMinTarget, '/* Retro-term icons CSS placeholder */\n');
  process.exit(0);
}

fs.copyFileSync(source, target);
const minSource = source.replace(/\.css$/, '.min.css');
if (fs.existsSync(minSource)) {
  fs.copyFileSync(minSource, minTarget);
  fs.copyFileSync(minSource, legacyMinTarget);
} else {
  fs.copyFileSync(source, minTarget);
  fs.copyFileSync(source, legacyMinTarget);
}
fs.copyFileSync(source, legacyTarget);
console.log(`Copied ${source} to dist/retro-term-icons.css`);
