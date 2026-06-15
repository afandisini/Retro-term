import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const source = path.resolve(__dirname, '..', '..', '..', 'core');
const destination = path.resolve(__dirname, '..', 'public', 'core');

async function copyCore() {
  await fs.rm(destination, { recursive: true, force: true });
  await fs.mkdir(path.dirname(destination), { recursive: true });
  await fs.cp(source, destination, { recursive: true });
}

copyCore().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
