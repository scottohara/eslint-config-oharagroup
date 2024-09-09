import defaultConfigs from "./defaults/index.js";
import eslintConfigs from "./eslint/index.js";
import svelteConfigs from "./svelte/index.js";
import tseslint from "typescript-eslint";
import typescriptEslintConfigs from "./typescript-eslint/index.js";

const js = tseslint.config(...defaultConfigs, ...eslintConfigs),
	ts = tseslint.config(...js, ...typescriptEslintConfigs),
	svelte = tseslint.config(...ts, ...svelteConfigs);

export default {
	// Config for JS-only projects
	js,
	// Config for JS+TS projects
	ts,
	// Config for Svelte+TS projects
	svelte,
};
