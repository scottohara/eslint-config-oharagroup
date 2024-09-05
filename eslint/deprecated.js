export default {
	"array-bracket-newline": ["off", "consistent"], // Disabled in favour of prettier
	"array-bracket-spacing": [
		"error",
		"never",
		{
			singleValue: false,
			objectsInArrays: false,
			arraysInArrays: false,
		},
	],
	"array-element-newline": [
		"off",
		{
			// Not using
			ArrayExpression: {
				multiline: true,
				minItems: null,
			},
			ArrayPattern: {
				multiline: true,
				minItems: null,
			},
		},
	],
	"arrow-parens": [
		"off",
		"as-needed",
		{
			// Disabled in favour of prettier
			requireForBlockBody: false,
		},
	],
	"arrow-spacing": [
		"error",
		{
			before: true,
			after: true,
		},
	],
	"block-spacing": ["off", "never"], // Disabled in favour of @typescript-eslint/block-spacing rule, which was later removed
	"brace-style": [
		"off",
		"1tbs",
		{
			// Disabled in favour of @typescript-eslint/brace-style rule, which was later removed
			allowSingleLine: false,
		},
	],
	"callback-return": "off",
	"comma-dangle": [
		"off",
		{
			// Disabled in favour of @typescript-eslint/comma-dangle rule, which was later removed
			arrays: "never",
			objects: "never",
			imports: "never",
			exports: "never",
			functions: "never",
		},
	],
	"comma-spacing": [
		"off",
		{
			// Disabled in favour of @typescript-eslint/comma-spacing rule, which was later removed
			before: false,
			after: true,
		},
	],
	"comma-style": [
		"error",
		"last",
		{
			exceptions: {
				ArrayExpression: false,
				ObjectExpression: false,
				VariableDeclaration: false,
			},
		},
	],
	"computed-property-spacing": [
		"error",
		"never",
		{
			enforceForClassMembers: true,
		},
	],
	"dot-location": ["error", "property"],
	"eol-last": ["off", "always"], // Not using
	"func-call-spacing": ["off", "never"], // Disabled in favour of @typescript-eslint/func-call-spacing rule, which was later removed
	"function-call-argument-newline": ["error", "consistent"],
	"function-paren-newline": ["off", "never"], // Disabled in favour of prettier
	"generator-star-spacing": [
		"off",
		{
			// Disabled in favour of prettier
			before: true,
			after: false,
			named: {
				before: true,
				after: false,
			},
			anonymous: {
				before: true,
				after: false,
			},
			method: {
				before: true,
				after: false,
			},
		},
	],
	"global-require": "off",
	"handle-callback-err": "off",
	"id-blacklist": "error",
	"implicit-arrow-linebreak": ["off", "beside"], // Disabled in favour of prettier
	indent: [
		"off",
		"tab",
		{
			// Disabled in favour of @typescript-eslint/indent rule, which was later removed
			SwitchCase: 1,
			VariableDeclarator: {
				var: 2,
				let: 2,
				const: 3,
			},
			outerIIFEBody: 1,
			MemberExpression: 1,
			FunctionDeclaration: {
				parameters: "first",
				body: 1,
			},
			FunctionExpression: {
				parameters: "first",
				body: 1,
			},
			StaticBlock: {
				body: 1,
			},
			CallExpression: {
				arguments: 1,
			},
			ArrayExpression: 1,
			ObjectExpression: 1,
			ImportDeclaration: 1,
			flatTernaryExpressions: false,
			offsetTernaryExpressions: true,
			ignoredNodes: [],
			ignoreComments: false,
		},
	],
	"indent-legacy": "off",
	"jsx-quotes": ["error", "prefer-double"],
	"key-spacing": [
		"off",
		{
			// Disabled in favour of @typescript-eslint/key-spacing rule, which was later removed
			singleLine: {
				beforeColon: false,
				afterColon: true,
				mode: "strict",
			},
			multiLine: {
				beforeColon: false,
				afterColon: true,
				mode: "strict",
			},
		},
	],
	"keyword-spacing": [
		"off",
		{
			// Disabled in favour of @typescript-eslint/keyword-spacing rule, which was later removed
			after: true,
			before: true,
			overrides: {},
		},
	],
	"linebreak-style": ["error", "unix"],
	"lines-around-comment": [
		"off",
		{
			// Disabled in favour of @typescript-eslint/lines-around-comment rule, which was later removed
			beforeBlockComment: true,
			afterBlockComment: false,
			beforeLineComment: true,
			afterLineComment: false,
			allowBlockStart: true,
			allowBlockEnd: true,
			allowObjectStart: true,
			allowObjectEnd: true,
			allowArrayStart: true,
			allowArrayEnd: true,
			allowClassStart: true,
			allowClassEnd: true,
			ignorePattern: "",
			applyDefaultIgnorePatterns: true,
			afterHashbangComment: true,
		},
	],
	"lines-around-directive": [
		"error",
		{
			before: "always",
			after: "always",
		},
	],
	"lines-between-class-members": [
		"off",
		"always",
		{
			// Disabled in favour of @typescript-eslint/lines-between-class-members rule, which was later removed
			exceptAfterSingleLine: false,
		},
	],
	"max-len": [
		"off",
		{
			// Not using
			code: 80,
			tabWidth: 2,
			comments: 80,
			ignorePattern: "",
			ignoreComments: false,
			ignoreTrailingComments: false,
			ignoreUrls: false,
			ignoreStrings: false,
			ignoreTemplateLiterals: false,
			ignoreRegExpLiterals: false,
		},
	],
	"max-statements-per-line": [
		"error",
		{
			max: 1,
		},
	],
	"multiline-ternary": ["off", "never"], // Disabled in favour of prettier
	"new-parens": ["error", "always"],
	"newline-after-var": ["error", "always"],
	"newline-before-return": "error",
	"newline-per-chained-call": [
		"error",
		{
			ignoreChainWithDepth: 4,
		},
	],
	"no-buffer-constructor": "off",
	"no-catch-shadow": "off",
	"no-confusing-arrow": [
		"off",
		{
			// Disabled in favour of prettier
			allowParens: true,
			onlyOneSimpleParam: false,
		},
	],
	"no-extra-parens": [
		"off",
		"all",
		{
			// Disabled in favour of @typescript-eslint/no-extra-parens rule, which was later removed
			conditionalAssign: true,
			returnAssign: false, // Prevent conflict with no-return-assign
			nestedBinaryExpressions: false,
			ternaryOperandBinaryExpressions: false,
			ignoreJSX: "none",
			enforceForArrowConditionals: false,
			enforceForSequenceExpressions: false,
			enforceForNewInMemberExpressions: true,
			enforceForFunctionPrototypeMethods: true,
			allowParensAfterCommentPattern: "",
		},
	],
	"no-extra-semi": "off", // Disabled in favour of @typescript-eslint/no-extra-semi rule, which was later removed
	"no-floating-decimal": "error",
	"no-mixed-operators": [
		"off",
		{
			// Disabled in favour of prettier
			groups: [],
			allowSamePrecedence: true,
		},
	],
	"no-mixed-requires": "off",
	"no-mixed-spaces-and-tabs": "off", // Disabled in favour of prettier
	"no-multi-spaces": [
		"error",
		{
			exceptions: {
				BinaryExpression: true,
				Property: false,
				VariableDeclaration: false,
				ImportDeclaration: false,
			},
			ignoreEOLComments: false,
		},
	],
	"no-multiple-empty-lines": [
		"error",
		{
			max: 1,
			maxBOF: 1,
			maxEOF: 1,
		},
	],
	"no-new-object": "error",
	"no-new-require": "off",
	"no-new-symbol": "error",
	"no-path-concat": "off",
	"no-process-env": "off", // Not using (goes against 12-factor app principles)
	"no-process-exit": "off",
	"no-restricted-modules": [
		"off",
		{
			paths: [],
			patterns: [],
		},
	],
	"no-return-await": "off", // Disabled in favour of @typescript-eslint/return-await rule
	"no-sync": [
		"off",
		{
			allowAtRootLevel: false,
		},
	],
	"no-tabs": [
		"off",
		{
			// Not using
			allowIndentationTab: false,
		},
	],
	"no-trailing-spaces": [
		"error",
		{
			skipBlankLines: false,
			ignoreComments: false,
		},
	],
	"no-whitespace-before-property": "error",
	"nonblock-statement-body-position": [
		"error",
		"beside",
		{
			overrides: {},
		},
	],
	"object-curly-newline": [
		"off",
		{
			// Not using
			ObjectExpression: {
				multiline: true,
				consistent: true,
			},
			ObjectPattern: {
				multiline: true,
				consistent: true,
			},
			ImportDeclaration: {
				multiline: true,
				minProperties: 2,
				consistent: true,
			},
			ExportDeclaration: {
				multiline: true,
				consistent: true,
			},
		},
	],
	"object-curly-spacing": [
		"off",
		"always",
		{
			// Disabled in favour of @typescript-eslint/object-curly-spacing rule, which was later removed
			arraysInObjects: true,
			objectsInObjects: true,
		},
	],
	"object-property-newline": [
		"error",
		{
			allowAllPropertiesOnSameLine: true,
		},
	],
	"one-var-declaration-per-line": ["error", "initializations"],
	"operator-linebreak": [
		"off",
		"after",
		{
			// Disabled in favour of prettier
			overrides: {},
		},
	],
	"padded-blocks": [
		"error",
		{
			blocks: "never",
			classes: "never",
			switches: "never",
		},
		{
			allowSingleLineBlocks: true,
		},
	],
	"padding-line-between-statements": [
		"off",
		{
			// Disabled in favour of @typescript-eslint/padding-line-between-statements rule, which was later removed
			blankLine: "any",
			prev: "*",
			next: "*",
		},
	],
	"quote-props": [
		"error",
		"as-needed",
		{
			keywords: false,
			unnecessary: true,
			numbers: false,
		},
	],
	quotes: [
		"off",
		"double",
		{
			// Disabled in favour of @typescript-eslint/quotes rule, which was later removed
			avoidEscape: false,
			allowTemplateLiterals: false,
		},
	],
	"rest-spread-spacing": ["error", "never"],
	semi: [
		"off",
		"always",
		{
			// Disabled in favour of @typescript-eslint/semi rule, which was later removed
			omitLastInOneLineBlock: false,
			omitLastInOneLineClassBody: false,
		},
	],
	"semi-spacing": [
		"error",
		{
			before: false,
			after: true,
		},
	],
	"semi-style": ["error", "last"],
	"space-before-blocks": [
		"off",
		{
			// Disabled in favour of @typescript-eslint/space-before-blocks rule, which was later removed
			functions: "always",
			keywords: "always",
			classes: "always",
		},
	],
	"space-before-function-paren": [
		"off",
		{
			// Disabled in favour of @typescript-eslint/space-before-function-paren rule, which was later removed
			anonymous: "never",
			named: "never",
			asyncArrow: "always",
		},
	],
	"space-in-parens": [
		"error",
		"never",
		{
			exceptions: [],
		},
	],
	"space-infix-ops": [
		"off",
		{
			// Disabled in favour of @typescript-eslint/space-infix-ops rule, which was later removed
			int32Hint: false,
		},
	],
	"space-unary-ops": [
		"error",
		{
			words: true,
			nonwords: false,
			overrides: {},
		},
	],
	"spaced-comment": [
		"error",
		"always",
		{
			line: {
				exceptions: [],
				markers: [],
			},
			block: {
				exceptions: [],
				markers: [],
				balanced: true,
			},
		},
	],
	"switch-colon-spacing": [
		"error",
		{
			after: true,
			before: false,
		},
	],
	"template-curly-spacing": ["error", "never"],
	"template-tag-spacing": ["error", "never"],
	"wrap-iife": [
		"error",
		"inside",
		{
			functionPrototypeMethods: true,
		},
	],
	"wrap-regex": "off", // Disabled in favour of prettier
	"yield-star-spacing": [
		"error",
		{
			before: true,
			after: false,
		},
	],
};
