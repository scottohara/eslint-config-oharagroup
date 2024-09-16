# O'Hara Group JS style guide

## Usage:

1. Add this module as a `devDependency` to your project (`npm install eslint-config-oharagroup --save-dev)
2. Create eslint.config.js (for ESM projects) or eslint.config.mjs (for CJS projects) as follows:

#### For JS-only projects

```js
import oharagroup from "eslint-config-oharagroup";

export default [
	...oharagroup.js,

	// add any additional config here
];
```

#### For JS + TS projects

```js
import oharagroup from "eslint-config-oharagroup";
import tseslint from "typescript-eslint";

export default tseslint.config(
	...oharagroup.ts,

	// add any additional config here
);
```

#### For Svelte + TS projects

```js
import oharagroup from "eslint-config-oharagroup";
import tseslint from "typescript-eslint";

export default tseslint.config(
	...oharagroup.svelte,

	// add any additional config here
);
```

## Upgrading to new eslint versions:

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
