import bestPractices from "./rules/best-practices.js";
import { defineConfig } from "eslint/config";
import deprecated from "./rules/deprecated.js";
import experimental from "./rules/experimental.js";
import extension from "./rules/extension.js";
import { parser } from "typescript-eslint";
import possibleErrors from "./rules/possible-errors.js";
import securityVulnerability from "./rules/security-vulnerability.js";
import stylisticIssues from "./rules/stylistic-issues.js";
import svelte from "eslint-plugin-svelte";
import svelteKit from "./rules/sveltekit.js";
import system from "./rules/system.js";

export default defineConfig(
	...svelte.configs["flat/base"],
	{
		name: "oharagroup/svelte/files",
		files: ["**/*.svelte", "**/*.svelte.ts"],
		languageOptions: {
			parserOptions: {
				parser,
			},
		},
	},
	{
		name: "oharagroup/svelte",
		languageOptions: {
			parserOptions: {
				extraFileExtensions: [".svelte"],
			},
		},
		rules: {
			...possibleErrors,
			...securityVulnerability,
			...bestPractices,
			...stylisticIssues,
			...extension,
			...svelteKit,
			...experimental,
			...system,
			...deprecated,
		},
	},
);
