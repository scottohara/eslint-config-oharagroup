import defaultConfigs from "./defaults/index.js";
import { defineConfig } from "eslint/config";
import eslintConfigs from "./eslint/index.js";
import svelteConfigs from "./svelte/index.js";
import typescriptEslintConfigs from "./typescript-eslint/index.js";

const js = defineConfig(...defaultConfigs, ...eslintConfigs),
	ts = defineConfig(...js, ...typescriptEslintConfigs),
	svelte = defineConfig(...ts, ...svelteConfigs);

export default {
	// Config for JS-only projects
	js,
	// Config for JS+TS projects
	ts,
	// Config for Svelte+TS projects
	svelte,
};
