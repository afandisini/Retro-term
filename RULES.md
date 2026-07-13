# STRICT RULES THAT MUST BE FOLLOWED

This document defines the working rules for the Retro-term project. Anyone changing code, documentation, or assets must follow them.

## Core Rules

1. Do not change component class names without a strong reason and explicit approval.
2. Do not remove existing features unless explicitly requested.
3. Do not introduce markup, CSS, or JavaScript that conflicts with established patterns.
4. Do not add new dependencies if the solution can be built with native HTML, CSS, and JavaScript.
5. Do not make large changes before reading the related files first.

## Code Rules

1. Preserve the `rt-...` naming pattern.
2. Use structures consistent with the existing components.
3. Save files in UTF-8.
4. Use ASCII for class names, attributes, and identifiers.
5. Do not write duplicate code when equivalent functionality already exists.
6. Avoid adding new inline styles when the styling can be moved to CSS.
7. Add comments only when the code flow is genuinely hard to read.

## UI Change Rules

1. New UI must remain aligned with the Retro-term style.
2. Do not change the visual theme arbitrarily.
3. Do not add new colors, radii, or shadows without a clear design reason.
4. Ensure changes stay responsive on desktop and mobile.
5. Ensure components remain reusable.

## Documentation Rules

1. If a feature changes, update the README and design documents.
2. If a component gains new behavior, document the required attributes, classes, or events.
3. If there is a new rule, add it to this file.
4. Do not leave documentation empty or outdated.

## Validation Rules

1. After changing HTML, make sure the elements used by JavaScript still exist.
2. After changing CSS, recheck the classes used in the demos.
3. After changing JavaScript, make sure event listeners still work.
4. Do not submit changes that have not received at least minimal testing.
5. After changing Sass, run `npm run build:css`.

## Hard Prohibitions

1. Do not use destructive commands without very clear instructions.
2. Do not delete other people's working files.
3. Do not revert changes you did not make.
4. Do not alter the project structure carelessly.
5. Do not add temporary code that will not be cleaned up.

## Required Workflow

1. Read the relevant file context.
2. Understand the impact of the change.
3. Edit files with the minimum necessary changes.
4. Verify the result.
5. Report the changes clearly.

## Operational Principles

- Prioritize stability.
- Prioritize consistency.
- Prioritize readability.
- Prioritize compatibility with existing files.
- If unsure, do not guess. Gather context first.
