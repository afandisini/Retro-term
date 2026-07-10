const fs = require('fs/promises');
const path = require('path');
const { buildIconCatalog, readSourceIconNames } = require('./icon-map');

const root = path.resolve(__dirname, '..');
const readmePath = path.join(root, 'README.md');

function buildReadme() {
  const catalog = buildIconCatalog();
  const sourceCount = readSourceIconNames().length;
  const callableCount = catalog.length;
  const iconLines = catalog.map((icon) => `- \`rt rt-${icon.name}\``).join('\n');

  return `# Term Icons

Term Icons is the local icon pack for Retro-term. The generated CSS now follows the actual SVG files inside \`src/icons\`, so adding or updating an SVG is enough to make the icon available after rebuild.

## Outputs

- \`dist/retro-term-icons.css\` and \`dist/retro-term-icons.min.css\` for CSS mask usage
- \`dist/term-icons.css\` and \`dist/term-icons.min.css\` as mirrored output names
- \`dist/term-icons.svg\` for sprite compatibility
- \`dist/term-icons.json\` for manifest metadata

## Structure

\`\`\`text
assets/term-icons/
|-- src/icons/
|-- dist/
|-- scripts/
|-- LICENSE
|-- NOTICE.md
\`-- README.md
\`\`\`

## Build

From \`assets/term-icons\`:

\`\`\`bash
npm run icons:build
\`\`\`

Only regenerate distributable files:

\`\`\`bash
node scripts/build-sprite.js
node scripts/build-css-mask.js
node scripts/build-readme.js
\`\`\`

## Usage

\`\`\`html
<i class="rt rt-dashboard" aria-hidden="true"></i>
\`\`\`

Base class:

- \`rt\`

Size helpers:

- \`rt-sm\`
- \`rt-lg\`
- \`rt-xl\`

## Icon Class List

Source SVG count: **${sourceCount}**

Callable \`rt rt-*\` class count: **${callableCount}**

${iconLines}

## Notes

- Generated CSS also exposes legacy \`term-icon-*\` selectors for compatibility.
- Legacy aliases currently kept: \`rt-layout-grid\`, \`rt-activity-icon\`, and \`rt-data-table-icon\`.
- The generated outputs are local to the repository and do not depend on a CDN.
- Keep the MIT notice when redistributing derived icons.
`;
}

async function main() {
  await fs.writeFile(readmePath, `${buildReadme()}\n`, 'utf8');
  console.log('Updated README.md');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
