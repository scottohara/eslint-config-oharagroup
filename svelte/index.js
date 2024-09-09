import bestPractices from "./rules/best-practices.js";
import deprecated from "./rules/deprecated.js";
import experimental from "./rules/experimental.js";
import extension from "./rules/extension.js";
import possibleErrors from "./rules/possible-errors.js";
import securityVulnerability from "./rules/security-vulnerability.js";
import stylisticIssues from "./rules/stylistic-issues.js";
import svelte from "eslint-plugin-svelte";
import svelteKit from "./rules/sveltekit.js";
import system from "./rules/system.js";
import tseslint from "typescript-eslint";

export default tseslint.config(
	...svelte.configs["flat/base"],
	{
		name: "oharagroup/svelte/files",
		files: ["**/*.svelte"],
		languageOptions: {
			parserOptions: {
				parser: tseslint.parser,
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
