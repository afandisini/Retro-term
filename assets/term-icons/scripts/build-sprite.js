const fs = require('fs/promises');
const path = require('path');
const { buildIconCatalog, readSourceIconNames } = require('./icon-map');

const root = path.resolve(__dirname, '..');
const sourceDir = path.join(root, 'src', 'icons');
const distDir = path.join(root, 'dist');
const icons = buildIconCatalog();
const sourceNames = readSourceIconNames();

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

  for (const sourceName of sourceNames) {
    const file = path.join(sourceDir, `${sourceName}.svg`);
    const svg = await fs.readFile(file, 'utf8');
    const { viewBox, inner } = extractSvgParts(svg);

    symbols.push(
      `  <symbol id="${sourceName}" viewBox="${viewBox}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${inner}</symbol>`
    );
  }

  for (const icon of icons) {
    manifest.push({
      name: icon.name,
      class: `rt rt-${icon.name}`,
      legacyClass: `term-icon term-icon-${icon.name}`,
      symbol: icon.source,
      category: icon.category,
      source: `src/icons/${icon.source}.svg`,
      legacy: icon.legacy,
      aliasOf: icon.aliasOf || null
    });
  }

  const sprite = ['<svg xmlns="http://www.w3.org/2000/svg" style="display:none">', ...symbols, '</svg>'].join('\n');
  await fs.writeFile(path.join(distDir, 'term-icons.svg'), sprite, 'utf8');
  await fs.writeFile(path.join(distDir, 'term-icons.json'), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');

  console.log(`Built sprite for ${sourceNames.length} source icons and manifest for ${icons.length} callable icon classes`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
