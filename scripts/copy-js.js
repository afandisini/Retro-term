const fs = require('fs');
const path = require('path');
const { minify } = require('terser');

const root = process.cwd();
const distDir = path.join(root, 'dist');
const source = path.join(root, 'retro-term.js');
const target = path.join(distDir, 'retro-term.js');
const targetMin = path.join(distDir, 'retro-term.min.js');

fs.mkdirSync(distDir, { recursive: true });

if (!fs.existsSync(source)) {
  console.warn('retro-term.js not found. Skipping JS copy.');
  process.exit(0);
}

fs.copyFileSync(source, target);
console.log('Copied retro-term.js to dist/retro-term.js');

// Minify JS
(async () => {
  try {
    const code = fs.readFileSync(source, 'utf8');
    const result = await minify(code, {
      mangle: { toplevel: true },
      compress: { dead_code: true, drop_console: false }
    });
    if (result.code) {
      fs.writeFileSync(targetMin, result.code, 'utf8');
      console.log('Created dist/retro-term.min.js');
    }
  } catch (err) {
    console.error('Error minifying JS:', err.message);
  }
})();
