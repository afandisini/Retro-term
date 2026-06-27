const fs = require('fs/promises');
const path = require('path');
const icons = require('./icon-map');

const root = path.resolve(__dirname, '..');
const sourceDir = path.join(root, 'src', 'icons');
const distDir = path.join(root, 'dist');

function extractSvgParts(svg) {
  const match = svg.match(/<svg\b([^>]*)>([\s\S]*?)<\/svg>/i);
  if (!match) {
    throw new Error('Invalid optimized SVG');
  }

  const attrs = match[1];
  const inner = match[2].trim();
  const viewBoxMatch = attrs.match(/\bviewBox="([^"]+)"/i);
  if (!viewBoxMatch) {
    throw new Error('Missing viewBox attribute');
  }

  return {
    viewBox: viewBoxMatch[1],
    inner: inner.replace(/\sfill="currentColor"/gi, '')
  };
}

async function main() {
  await fs.mkdir(distDir, { recursive: true });

  const symbols = [];
  const manifest = [];

  for (const icon of icons) {
    const file = path.join(sourceDir, `${icon.name}.svg`);
    const svg = await fs.readFile(file, 'utf8');
    const { viewBox, inner } = extractSvgParts(svg);

    symbols.push(
      `  <symbol id="${icon.name}" viewBox="${viewBox}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${inner}</symbol>`
    );
    manifest.push({
      name: icon.name,
      class: `term-icon-${icon.cssName || icon.name}`,
      symbol: icon.name,
      category: icon.category,
      source: `bootstrap-icons/${icon.source}`
    });
  }

  const sprite = ['<svg xmlns="http://www.w3.org/2000/svg" style="display:none">', ...symbols, '</svg>'].join('\n');
  await fs.writeFile(path.join(distDir, 'term-icons.svg'), sprite, 'utf8');
  await fs.writeFile(path.join(distDir, 'term-icons.json'), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');

  console.log(`Built sprite and manifest for ${icons.length} icons`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
