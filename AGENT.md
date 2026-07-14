# AGENT.md

This repository uses the full `rt-` namespace for all official framework classes.

Working rules:

- Do not add compatibility aliases for old classes that have already been replaced by the `rt-` namespace.
- All framework CSS variables must use the `--rt-*` prefix.
- Avoid underscores in class names; use dashes throughout the namespace.
- Framework data attributes must use the `data-rt-*` prefix.
- After changing framework Sass or JS, run the relevant CSS/asset build and verify the result.
- Documentation and examples must follow the same namespace as the source.

File priorities:

- `sass/**/*.scss`
- `retro-term.js`
- `README.md`
- `DOCUMENTATION.md`
- `CHANGELOG.md`
- `package.json`
