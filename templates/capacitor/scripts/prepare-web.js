const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const vendor = path.join(root, "www", "vendor");
const packageDist = path.join(root, "node_modules", "retro-term-css", "dist");

if (!fs.existsSync(packageDist)) {
  console.error("retro-term-css is not installed. Run npm install first.");
  process.exit(1);
}

fs.mkdirSync(vendor, { recursive: true });

for (const file of [
  "retro-term.min.css",
  "retro-term.min.js",
  "retro-term-icons.min.css",
]) {
  fs.copyFileSync(path.join(packageDist, file), path.join(vendor, file));
}

console.log("Prepared Retro-term assets in www/vendor/");

