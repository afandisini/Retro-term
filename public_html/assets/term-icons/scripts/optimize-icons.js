const fs = require('fs/promises');
const path = require('path');
const icons = require('./icon-map');

const root = path.resolve(__dirname, '..');
const targetDir = path.join(root, 'src', 'icons');

function cleanSvg(svg) {
  const match = svg.match(/<svg\b([^>]*)>([\s\S]*?)<\/svg>/i);
  if (!match) {
    throw new Error('Invalid SVG document');
  }

  const attrs = match[1];
  const inner = match[2]
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<metadata[\s\S]*?<\/metadata>/gi, '')
    .trim();

  const viewBoxMatch = attrs.match(/\bviewBox="([^"]+)"/i);
  if (!viewBoxMatch) {
    throw new Error('Missing viewBox attribute');
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBoxMatch[1]}" fill="currentColor">${inner}</svg>`;
}

async function main() {
  for (const icon of icons) {
    const file = path.join(targetDir, `${icon.name}.svg`);
    const raw = await fs.readFile(file, 'utf8');
    const cleaned = cleanSvg(raw.replace(/^\uFEFF/, ''));
    await fs.writeFile(file, cleaned, 'utf8');
  }

  console.log(`Optimized ${icons.length} icons in ${targetDir}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
