const fs = require('fs/promises');
const path = require('path');
const { buildIconCatalog } = require('./icon-map');

const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const icons = buildIconCatalog();

function svgToDataUri(svg) {
  return `url("data:image/svg+xml,${svg
    .replace(/[\r\n\t]+/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim()
    .replace(/"/g, "'")
    .replace(/%/g, '%25')
    .replace(/#/g, '%23')
    .replace(/</g, '%3C')
    .replace(/>/g, '%3E')
    .replace(/\{/g, '%7B')
    .replace(/\}/g, '%7D')}")`;
}

async function buildCss(minified) {
  const base = [
    '.rt,.term-icon{display:inline-block;width:1rem;height:1rem;background-color:currentColor;vertical-align:-0.125em;flex-shrink:0;mask-repeat:no-repeat;mask-position:center;mask-size:contain;-webkit-mask-repeat:no-repeat;-webkit-mask-position:center;-webkit-mask-size:contain;}',
    '.rt-sm,.term-icon-sm{width:0.875rem;height:0.875rem;}',
    '.rt-lg,.term-icon-lg{width:1.25rem;height:1.25rem;}',
    '.rt-xl,.term-icon-xl{width:1.5rem;height:1.5rem;}'
  ];

  const rules = await Promise.all(icons.map(async (icon) => {
    const selector = `.rt.rt-${icon.name},.term-icon.term-icon-${icon.name}`;
    const svgPath = path.join(root, 'src', 'icons', `${icon.source}.svg`);
    const svg = await fs.readFile(svgPath, 'utf8');
    const value = svgToDataUri(svg);
    if (minified) {
      return `${selector}{mask-image:${value};-webkit-mask-image:${value};}`;
    }
    return [
      `${selector} {`,
      `  mask-image: ${value};`,
      `  -webkit-mask-image: ${value};`,
      `}`
    ].join('\n');
  }));

  if (minified) {
    return base.join('') + rules.join('');
  }

  return [...base.map((line) => `${line}`), '', ...rules].join('\n');
}

async function main() {
  await fs.mkdir(distDir, { recursive: true });
  const css = `${await buildCss(false)}\n`;
  const minCss = `${await buildCss(true)}\n`;
  await fs.writeFile(path.join(distDir, 'retro-term-icons.css'), css, 'utf8');
  await fs.writeFile(path.join(distDir, 'retro-term-icons.min.css'), minCss, 'utf8');
  await fs.writeFile(path.join(distDir, 'term-icons.css'), css, 'utf8');
  await fs.writeFile(path.join(distDir, 'term-icons.min.css'), minCss, 'utf8');
  console.log(`Built CSS mask for ${icons.length} callable icon classes`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
