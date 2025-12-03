import { parser, plugin } from "typescript-eslint";
import { defineConfig } from "eslint/config";
import deprecated from "./rules/deprecated.js";
import extension from "./rules/extension.js";
import rules from "./rules/rules.js";

export default defineConfig(
	{
		name: "oharagroup/typescript/files",
		// Match any *.ts, *.mts, *.cts files
		files: ["**/*.?(m|c)ts"],
	},
	{
		name: "oharagroup/typescript-eslint",
		plugins: {
			"@typescript-eslint": plugin,
		},
		languageOptions: {
			parser,
			parserOptions: {
				projectService: {
					allowDefaultProject: ["*.?(m|c)js"],
				},
			},
		},
		rules: {
			...rules,
			...extension,
			...deprecated,
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
			"@typescript-eslint/no-unsafe-argument": "off",
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
		/*
		 * Match any *.test.js (except webpack.test.js), *.test.mjs, *.test.cjs, *.test.ts, *.test.mts, *.test.cts files
		 * Match any *.js, *.mjs, *.cjs, *.ts, *.mts, *.cts files inside a /mocks/ directory
		 */
		files: ["**/!(webpack).test.?(m|c){j,t}s", "**/mocks/**/*.?(m|c){j,t}s"],
		rules: {
			// Required for mocking partial types
			"@typescript-eslint/consistent-type-assertions": [
				"error",
				{
					objectLiteralTypeAssertions: "allow",
				},
			],
			// Disable to allow accessing private members using square-bracket notation
			"@typescript-eslint/dot-notation": "off",
			// Disable due to lots of numbers used in assertions
			"@typescript-eslint/no-magic-numbers": "off",
		},
	},
	{
		name: "oharagroup/cypress",
		// Match any *.js, *.mjs, *.cjs, *.ts, *.mts, *.cts files inside a cypress directory
		files: ["cypress/**/*.?(m|c){j,t}s"],
		rules: {
			// Disable due to lots of numbers used in assertions
			"@typescript-eslint/no-magic-numbers": "off",
			"@typescript-eslint/no-namespace": [
				"error",
				{
					allowDeclarations: false,
					// Needed for extending Cypress.Chainable inteface for custom commands
					allowDefinitionFiles: true,
				},
			],
		},
	},
);
