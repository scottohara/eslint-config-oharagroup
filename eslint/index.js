import deprecated from "./rules/deprecated.js";
import layoutAndFormatting from "./rules/layout-and-formatting.js";
import possibleProblems from "./rules/possible-problems.js";
import suggestions from "./rules/suggestions.js";
import tseslint from "typescript-eslint";

export default tseslint.config({
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
	},
	rules: {
		...possibleProblems,
		...suggestions,
		...layoutAndFormatting,
		...deprecated,
	},
});
