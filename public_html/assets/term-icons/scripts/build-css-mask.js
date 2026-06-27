const fs = require('fs/promises');
const path = require('path');
const icons = require('./icon-map');

const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');

function buildCss(minified) {
  const base = [
    '.rt{display:inline-block;width:1rem;height:1rem;background-color:currentColor;vertical-align:-0.125em;flex-shrink:0;mask-repeat:no-repeat;mask-position:center;mask-size:contain;-webkit-mask-repeat:no-repeat;-webkit-mask-position:center;-webkit-mask-size:contain;}',
    '.rt-sm{width:0.875rem;height:0.875rem;}',
    '.rt-lg{width:1.25rem;height:1.25rem;}',
    '.rt-xl{width:1.5rem;height:1.5rem;}'
  ];

  const rules = icons.map((icon) => {
    const selector = `.rt-${icon.cssName || icon.name}`;
    const value = `url("../src/icons/${icon.name}.svg")`;
    if (minified) {
      return `${selector}{mask-image:${value};-webkit-mask-image:${value};}`;
    }
    return [
      `${selector} {`,
      `  mask-image: ${value};`,
      `  -webkit-mask-image: ${value};`,
      `}`
    ].join('\n');
  });

  if (minified) {
    return base.join('') + rules.join('');
  }

  return [...base.map((line) => `${line}`), '', ...rules].join('\n');
}

async function main() {
  await fs.mkdir(distDir, { recursive: true });
  const css = `${buildCss(false)}\n`;
  const minCss = `${buildCss(true)}\n`;
  await fs.writeFile(path.join(distDir, 'retro-term-icons.css'), css, 'utf8');
  await fs.writeFile(path.join(distDir, 'retro-term-icons.min.css'), minCss, 'utf8');
  await fs.writeFile(path.join(distDir, 'term-icons.css'), css, 'utf8');
  await fs.writeFile(path.join(distDir, 'term-icons.min.css'), minCss, 'utf8');
  console.log(`Built CSS mask for ${icons.length} icons`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
