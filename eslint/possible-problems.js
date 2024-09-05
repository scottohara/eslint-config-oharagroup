export default {
	"array-callback-return": [
		"error",
		{
			allowImplicit: false,
			checkForEach: false, // Allow concise arrow function bodies in forEach
			allowVoid: false,
		},
	],
	"constructor-super": "error",
	"for-direction": "error",
	"getter-return": [
		"error",
		{
			allowImplicit: false,
		},
	],
	"no-async-promise-executor": "error",
	"no-await-in-loop": "error",
	"no-class-assign": "error",
	"no-compare-neg-zero": "error",
	"no-cond-assign": ["error", "always"],
	"no-const-assign": "error",
	"no-constant-binary-expression": "error",
	"no-constant-condition": [
		"error",
		{
			checkLoops: "allExceptWhileTrue",
		},
	],
	"no-constructor-return": "off", // Not using
	"no-control-regex": "error",
	"no-debugger": "error",
	"no-dupe-args": "error",
	"no-dupe-class-members": "off", // Disabled in favour of @typescript-eslint/no-dup-class-members rule
	"no-dupe-else-if": "error",
	"no-dupe-keys": "error",
	"no-duplicate-case": "error",
	"no-duplicate-imports": [
		"off",
		{
			// Disabled in favour of @typescript-eslint/no-duplicate-imports rule
			includeExports: true,
		},
	],
	"no-empty-character-class": "error",
	"no-empty-pattern": [
		"error",
		{
			allowObjectPatternsAsParameters: false,
		},
	],
	"no-ex-assign": "error",
	"no-fallthrough": [
		"error",
		{
			commentPattern: "",
			allowEmptyCase: false,
			reportUnusedFallthroughComment: true,
		},
	],
	"no-func-assign": "error",
	"no-import-assign": "error",
	"no-inner-declarations": ["error", "both", { blockScopedFunctions: "allow" }],
	"no-invalid-regexp": [
		"error",
		{
			allowConstructorFlags: [],
		},
	],
	"no-irregular-whitespace": [
		"error",
		{
			skipStrings: false,
			skipComments: false,
			skipRegExps: false,
			skipTemplates: false,
			skipJSXText: false,
		},
	],
	"no-loss-of-precision": "error",
	"no-misleading-character-class": [
		"error",
		{
			allowEscape: false,
		},
	],
	"no-new-native-nonconstructor": "error",
	"no-obj-calls": "error",
	"no-promise-executor-return": [
		"error",
		{
			allowVoid: false,
		},
	],
	"no-prototype-builtins": "error",
	"no-self-assign": [
		"error",
		{
			props: true,
		},
	],
	"no-self-compare": "error",
	"no-setter-return": "error",
	"no-sparse-arrays": "error",
	"no-template-curly-in-string": "error",
	"no-this-before-super": "error",
	"no-undef": [
		"error",
		{
			typeof: true,
		},
	],
	"no-unexpected-multiline": "error",
	"no-unmodified-loop-condition": "error",
	"no-unreachable": "error",
	"no-unreachable-loop": [
		"error",
		{
			ignore: [],
		},
	],
	"no-unsafe-finally": "error",
	"no-unsafe-negation": [
		"error",
		{
			enforceForOrderingRelations: true,
		},
	],
	"no-unsafe-optional-chaining": [
		"error",
		{
			disallowArithmeticOperators: true,
		},
	],
	"no-unused-private-class-members": "error",
	"no-unused-vars": [
		"off",
		{
			// Disabled in favour of @typescript-eslint/no-unused-vars rule
			vars: "all",
			varsIgnorePattern: "",
			args: "after-used",
			argsIgnorePattern: "",
			caughtErrors: "all",
			caughtErrorsIgnorePattern: "^_",
			destructuredArrayIgnorePattern: "",
			ignoreRestSiblings: false,
			ignoreClassWithStaticInitBlock: false,
			reportUsedIgnorePattern: true,
		},
	],
	"no-use-before-define": [
		"off",
		{
			// Disabled if favour of @typescript-eslint/no-use-before-define rule
			classes: true,
			functions: true,
			variables: true,
			allowNamedExports: false,
		},
	],
	"no-useless-assignment": "error",
	"no-useless-backreference": "error",
	"require-atomic-updates": [
		"error",
		{
			allowProperties: false,
		},
	],
	"use-isnan": [
		"error",
		{
			enforceForSwitchCase: true,
			enforceForIndexOf: true,
		},
	],
	"valid-typeof": [
		"error",
		{
			requireStringLiterals: true,
		},
	],
};
