const fs = require('fs/promises');
const path = require('path');
const icons = require('./icon-map');

const root = path.resolve(__dirname, '..');
const sourceDir = path.resolve(root, '..', 'icons');
const targetDir = path.join(root, 'src', 'icons');

async function main() {
  await fs.mkdir(targetDir, { recursive: true });

  for (const icon of icons) {
    const sourceFile = path.join(sourceDir, `${icon.source}.svg`);
    const targetFile = path.join(targetDir, `${icon.name}.svg`);
    const svg = await fs.readFile(sourceFile, 'utf8');
    await fs.writeFile(targetFile, svg, 'utf8');
  }

  console.log(`Seeded ${icons.length} icons into ${targetDir}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
