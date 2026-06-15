const fs = require('fs/promises');
const path = require('path');
const icons = require('./icon-map');

const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');

function buildCss(minified) {
  const base = [
    '.term-icon{display:inline-block;width:1em;height:1em;background-color:currentColor;vertical-align:-0.125em;flex-shrink:0;mask-repeat:no-repeat;mask-position:center;mask-size:contain;-webkit-mask-repeat:no-repeat;-webkit-mask-position:center;-webkit-mask-size:contain;}',
    '.term-icon-sm{width:0.875em;height:0.875em;}',
    '.term-icon-lg{width:1.25em;height:1.25em;}',
    '.term-icon-xl{width:1.5em;height:1.5em;}'
  ];

  const rules = icons.map((icon) => {
    const selector = `.term-icon-${icon.name}`;
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
  await fs.writeFile(path.join(distDir, 'term-icons.css'), `${buildCss(false)}\n`, 'utf8');
  await fs.writeFile(path.join(distDir, 'term-icons.min.css'), `${buildCss(true)}\n`, 'utf8');
  console.log(`Built CSS mask for ${icons.length} icons`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
