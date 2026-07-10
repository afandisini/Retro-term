const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const sourceDir = path.join(root, 'src', 'icons');

const excludedIcons = new Set([
  'bootstrap-icons'
]);

const excludedCallableNames = new Set([
  'activity',
  'grid',
  'table'
]);

const legacyAliases = [
  { name: 'layout-grid', source: 'grid', category: 'layout' },
  { name: 'i-activity', source: 'activity', category: 'status' },
  { name: 'i-table', source: 'table', category: 'ui' }
];

function sortNames(a, b) {
  return a.localeCompare(b, 'en', { numeric: true, sensitivity: 'base' });
}

function inferCategory(name) {
  if (/^(person|people|user|users|login|logout|lock|unlock|shield|key)/.test(name)) {
    return 'auth';
  }

  if (/^(arrow|caret|chevron|skip|back|forward|menu|list|layout|grid|window|fullscreen|terminal|command|view-)/.test(name)) {
    return 'navigation';
  }

  if (/^(add|plus|minus|subtract|edit|pencil|delete|trash|save|check|close|x|search|filter|sort|refresh)/.test(name)) {
    return 'crud';
  }

  if (/^(file|folder|upload|download|print|database|server|cloud|hdd|drive|usb|folder2)/.test(name)) {
    return 'file';
  }

  if (/^(success|error|warning|info|question|notification|bell|activity|bug|calendar|clock)/.test(name)) {
    return 'status';
  }

  if (/^(chart|graph|diagram|pie|bar-)/.test(name)) {
    return 'chart';
  }

  return 'general';
}

function readSourceIconNames() {
  return fs
    .readdirSync(sourceDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && path.extname(entry.name).toLowerCase() === '.svg')
    .map((entry) => path.basename(entry.name, '.svg'))
    .filter((name) => !excludedIcons.has(name))
    .sort(sortNames);
}

function buildIconCatalog() {
  const sourceNames = readSourceIconNames();
  const sourceNameSet = new Set(sourceNames);
  const icons = sourceNames
    .filter((name) => !excludedCallableNames.has(name))
    .map((name) => ({
      name,
      source: name,
      category: inferCategory(name),
      legacy: false
    }));

  for (const alias of legacyAliases) {
    if (!sourceNameSet.has(alias.source) || sourceNameSet.has(alias.name)) {
      continue;
    }

    icons.push({
      name: alias.name,
      source: alias.source,
      category: alias.category,
      legacy: true,
      aliasOf: alias.source
    });
  }

  return icons.sort((left, right) => sortNames(left.name, right.name));
}

module.exports = {
  buildIconCatalog,
  excludedCallableNames,
  legacyAliases,
  readSourceIconNames
};
