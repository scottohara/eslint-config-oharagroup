# O'Hara Group JS style guide

[![Maintainability](https://qlty.sh/gh/scottohara/projects/eslint-config-oharagroup/maintainability.svg)](https://qlty.sh/gh/scottohara/projects/eslint-config-oharagroup)

## Usage

1. Add this module as a `devDependency` to your project (`npm install eslint-config-oharagroup --save-dev)
2. Create eslint.config.js (for ESM projects) or eslint.config.mjs (for CJS projects) as follows:

### For JS-only projects

```js
import oharagroup from "eslint-config-oharagroup";

export default [
	...oharagroup.js,

	// add any additional config here
];
```

### For JS + TS projects

```js
import { defineConfig } from "eslint/config";
import oharagroup from "eslint-config-oharagroup";

export default defineConfig(
	...oharagroup.ts,

	// add any additional config here
);
```

### For Svelte + TS projects

```js
import { defineConfig } from "eslint/config";
import oharagroup from "eslint-config-oharagroup";

export default defineConfig(
	...oharagroup.svelte,

	// add any additional config here
);
```

## Upgrading to new eslint versions

1. Apply any rule changes to the corresponding rule files
2. Run linting on this package (`npm run lint`)
3. Update the `eslint` version in `package.json`, and bump the package `version`
4. Ensure that this package is registered for linking (`cd [this dir] && npm link`)
5. Test by going to a project that uses the shared config and `npm link eslint-config-oharagroup`
6. Publish the new version (`npm run publish`)
7. Unlink the local version in the test project if necessary (`npm unlink`)

## Configs

The package defines three configs to choose from, depending on the type of project:

1. JS-only projects (`oharagroup.js`)
2. JS + TS projects (`oharagroup.ts`)
3. Svelte + TS projects (`oharagroup.svelte`)

| Config              | Files matched                                                              | Rules applied to all matching files                                                                                                       |
| ------------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `oharagroup.js`     | `*.js`<br>`*.mjs`<br>`*.cjs`                                               | `eslint`                                                                                                                                  |
| `oharagroup.ts`     | `*.js`<br>`*.mjs`<br>`*.cjs`<br>`*.ts`<br>`*.mts`<br>`*.cts`               | `eslint`<br>`typescript-eslint`                                                                                                           |
| `oharagroup.svelte` | `*.js`<br>`*.mjs`<br>`*.cjs`<br>`*.ts`<br>`*.mts`<br>`*.cts`<br>`*.svelte` | `eslint`<br>(includes `<script>` blocks in Svelte)<br>`typescript-eslint`<br>(includes `<script lang="ts">` blocks in Svelte)<br>`svelte` |

## Style Guide

### Disabled rules

All unused rules **MUST**:

1. be included in the config
2. be set to "off"
3. not have any config options

#### Rationale

ESlint rules are off by default unless explicitly enabled, so omitting a rule from the config is the same as setting it to "off".

However, including a rule and setting it to "off" signals an explicit intent to _not use the rule_. Any rule missing from the config is therefore, by definition, a potential new rule for review.

By contrast, if disabled rules were removed/omitted from the config, it would be unclear whether the omission was intentional or accidental. A placeholder comment _could_ mitigate this (e.g. `// Not using: array-bracket-newline`), but equally `array-bracket-newline: "off"` is clearer and just as concise.

If/when deprecated rules are eventually removed from eslint, the config will error on any rules that it no longer knows about, prompting their removal. Placeholder comments relating to removed rules could remain long after they are necessary.

```js
/* Bad - unused rules omitted from config */

"array-bracket-spacing": "error",
"arrow-spacing": "error",

/* Bad - placeholder comments */

// Not using: array-bracket-newline
"array-bracket-spacing": "error",
// Not using: array-element-newline
"arrow-spacing": "error",

/* Good - unused rules set to off */

"array-bracket-newline": "off",
"array-bracket-spacing": "error",
"array-element-newline": "off",
"arrow-spacing": "error",
```

All config options for a disabled rule should be removed, as they are both redundant, and would likely need to be reevaluated if the rule reactivated at a later time.

```js
/* Bad - config options for disabled rules */

"array-bracket-newline": ["off", "always"],
"array-element-newline": ["off", {
	"multiline": true,
	"minItems": 3
}]

/* Good - no config options for disabled rules */

"array-bracket-newline": "off",
"array-element-newline": "off",

```

### Default options

As of eslint v9.15.0, many rules include `defaultOptions`, that are merged with user-supplied config.

It is therefore redundant to specify an option value that is the same as the default.

Rules **MUST** omit any options that are already the default value.

#### Rationale

Rule options in the config are intended to signal preferences that deviate from from the default options.

By only including non-default options, it keeps the config smaller and easier to read.

```js
/* Bad - all options listed are defaults */
"array-callback-return": [
  "error",
  {
    allowImplicit: false,
    checkForEach: false,
    allowVoid: false,
  },
],

/* Good - default values are implied */
"array-callback-return": "error"
```

## Config inspector

Use the config inspector (`npx @eslint/config-inspector@latest`) to look for issues.

### New rules that are missing from the config

```plaintext
Plugins: All
Usage: Unused
State: All
```

Any rules that appear are, by definition, not in the config.

Such rules should be added (even if set to "off").

### Disabled rules that have config options

```plaintext
Plugins: All
Usage: Off
State: All
```

Look for any rules that have a dot next to the level icon, indicating they have options.

Such rules should have their config options removed.
