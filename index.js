import globals from "globals";
import tseslint from "typescript-eslint";

import eslintRules from "./eslint/index.js";
import typescriptRules from "./typescript-eslint/index.js";

export default tseslint.config(
	{
		name: "oharagroup/ignores",
		// Globally ignore common directories that contain *.js files that shouldn't be matched
		ignores: [".ruby-lsp", "coverage", "public", "vendor"],
	},
	{
		name: "oharagroup/globals",
		// Include node globals for Karma and Webpack config files,
		files: ["karma*.js", "webpack*.js"],
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
	},
	{
		name: "oharagroup/base",
		// Match any *.js, *.mjs, *.cjs, *.ts, *.mts, *.cts files
		files: ["**/*.?(m|c){j,t}s"],
		plugins: {
			"@typescript-eslint": tseslint.plugin,
		},
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				ecmaFeatures: {
					impliedStrict: true,
				},
				projectService: {
					allowDefaultProject: ["*.?(m|c)js"],
					defaultProject: "tsconfig.json",
				},
				tsconfigRootDir: ".",
			},
		},
		linterOptions: {
			noInlineConfig: true,
			reportUnusedDisableDirectives: "error",
		},
		rules: {
			...eslintRules,
			...typescriptRules,
		},
	},
	{
		name: "oharagroup/disable-ts-rules-for-js-files",
		// Match any *.js, *.mjs, *.cjs files
		files: ["**/*.?(m|c)js"],
		rules: {
			"@typescript-eslint/explicit-function-return-type": "off",
			"@typescript-eslint/explicit-member-accessibility": "off",
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"@typescript-eslint/no-unsafe-assignment": "off",
			"@typescript-eslint/no-unsafe-call": "off",
			"@typescript-eslint/no-unsafe-member-access": "off",
			"@typescript-eslint/no-unsafe-return": "off",
			"@typescript-eslint/restrict-template-expressions": "off",
		},
	},
	{
		name: "oharagroup/disable-js-rules-for-ts-files",
		// Match any *.ts, *.mts, *.cts files
		files: ["**/*.?(m|c)ts"],
		rules: {
			"no-undef": "off",
		},
	},
	{
		name: "oharagroup/tests",
		// Match any *.test.js (except webpack.test.js), *.test.mjs, *.test.cjs, *.test.ts, *.test.mts, *.test.cts files
		// Match any *.js, *.mjs, *.cjs, *.ts, *.mts, *.cts files inside a /mocks/ directory
		files: ["**/!(webpack).test.?(m|c){j,t}s", "**/mocks/**/*.?(m|c){j,t}s"],
		rules: {
			// Typescript
			"@typescript-eslint/consistent-type-assertions": [
				"error",
				{
					assertionStyle: "as",
					objectLiteralTypeAssertions: "allow", // Required for mocking partial types
				},
			],
			"@typescript-eslint/dot-notation": "off", // Disable to allow accessing private members using square-bracket notation
			"@typescript-eslint/no-magic-numbers": "off", // Disable due to lots of numbers used in assertions
		},
	},
	{
		name: "oharagroup/cypress",
		// Match any *.js, *.mjs, *.cjs, *.ts, *.mts, *.cts files inside a cypress directory
		files: ["cypress/**/*.?(m|c){j,t}s"],
		rules: {
			"@typescript-eslint/no-magic-numbers": "off", // Disable due to lots of numbers used in assertions
			"@typescript-eslint/no-namespace": [
				"error",
				{
					allowDeclarations: false,
					allowDefinitionFiles: true, // Needed for extending Cypress.Chainable inteface for custom commands
				},
			],
		},
	},
);
