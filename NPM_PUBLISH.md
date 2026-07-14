# npm publish checklist

```bash
npm login
npm whoami
npm install
npm run build
npm pack --dry-run
npm publish
```

Version updates:

```bash
npm version patch
npm version minor
npm version major
```

Notes:

- The same npm version cannot be published twice.
- Git tag format and npm version format are different.
- Git tag: `v2.1.0`
- npm: `2.1.0`
- Do not run `npm publish` until `npm pack --dry-run` looks correct.
