import { defineConfig } from "eslint/config";
import deprecated from "./rules/deprecated.js";
import layoutAndFormatting from "./rules/layout-and-formatting.js";
import possibleProblems from "./rules/possible-problems.js";
import suggestions from "./rules/suggestions.js";

export default defineConfig({
	name: "oharagroup/eslint",
	languageOptions: {
		parserOptions: {
			ecmaFeatures: {
				impliedStrict: true,
			},
		},
	},
	linterOptions: {
		noInlineConfig: true,
		reportUnusedDisableDirectives: "error",
		reportUnusedInlineConfigs: "error",
	},
	rules: {
		...possibleProblems,
		...suggestions,
		...layoutAndFormatting,
		...deprecated,
	},
});
