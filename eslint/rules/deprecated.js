export default {
	// Disabled in favour of prettier
	"array-bracket-newline": ["off", "consistent"],
	"array-bracket-spacing": [
		"error",
		"never",
		{
			singleValue: false,
			objectsInArrays: false,
			arraysInArrays: false,
		},
	],
	// Not using
	"array-element-newline": [
		"off",
		{
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
	// Disabled in favour of prettier
	"arrow-parens": [
		"off",
		"as-needed",
		{
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
	// Disabled in favour of @typescript-eslint/block-spacing rule, which was later removed
	"block-spacing": ["off", "never"],
	// Disabled in favour of @typescript-eslint/brace-style rule, which was later removed
	"brace-style": [
		"off",
		"1tbs",
		{
			allowSingleLine: false,
		},
	],
	"callback-return": "off",
	// Disabled in favour of @typescript-eslint/comma-dangle rule, which was later removed
	"comma-dangle": [
		"off",
		{
			arrays: "never",
			objects: "never",
			imports: "never",
			exports: "never",
			functions: "never",
		},
	],
	// Disabled in favour of @typescript-eslint/comma-spacing rule, which was later removed
	"comma-spacing": [
		"off",
		{
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
	// Not using
	"eol-last": ["off", "always"],
	// Disabled in favour of @typescript-eslint/func-call-spacing rule, which was later removed
	"func-call-spacing": ["off", "never"],
	"function-call-argument-newline": ["error", "consistent"],
	// Disabled in favour of prettier
	"function-paren-newline": ["off", "never"],
	// Disabled in favour of prettier
	"generator-star-spacing": [
		"off",
		{
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
	// Disabled in favour of prettier
	"implicit-arrow-linebreak": ["off", "beside"],
	// Disabled in favour of @typescript-eslint/indent rule, which was later removed
	indent: [
		"off",
		"tab",
		{
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
	// Disabled in favour of @typescript-eslint/key-spacing rule, which was later removed
	"key-spacing": [
		"off",
		{
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
	// Disabled in favour of @typescript-eslint/keyword-spacing rule, which was later removed
	"keyword-spacing": [
		"off",
		{
			after: true,
			before: true,
			overrides: {},
		},
	],
	"linebreak-style": ["error", "unix"],
	// Disabled in favour of @typescript-eslint/lines-around-comment rule, which was later removed
	"lines-around-comment": [
		"off",
		{
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
	// Disabled in favour of @typescript-eslint/lines-between-class-members rule, which was later removed
	"lines-between-class-members": [
		"off",
		"always",
		{
			exceptAfterSingleLine: false,
		},
	],
	// Not using
	"max-len": [
		"off",
		{
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
	// Disabled in favour of prettier
	"multiline-ternary": ["off", "never"],
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
	// Disabled in favour of prettier
	"no-confusing-arrow": [
		"off",
		{
			allowParens: true,
			onlyOneSimpleParam: false,
		},
	],
	// Disabled in favour of @typescript-eslint/no-extra-parens rule, which was later removed
	"no-extra-parens": [
		"off",
		"all",
		{
			conditionalAssign: true,
			// Prevent conflict with no-return-assign
			returnAssign: false,
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
	// Disabled in favour of @typescript-eslint/no-extra-semi rule, which was later removed
	"no-extra-semi": "off",
	"no-floating-decimal": "error",
	// Disabled in favour of prettier
	"no-mixed-operators": [
		"off",
		{
			groups: [],
			allowSamePrecedence: true,
		},
	],
	"no-mixed-requires": "off",
	// Disabled in favour of prettier
	"no-mixed-spaces-and-tabs": "off",
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
	// Not using (goes against 12-factor app principles)
	"no-process-env": "off",
	"no-process-exit": "off",
	"no-restricted-modules": [
		"off",
		{
			paths: [],
			patterns: [],
		},
	],
	// Disabled in favour of @typescript-eslint/return-await rule
	"no-return-await": "off",
	"no-sync": [
		"off",
		{
			allowAtRootLevel: false,
		},
	],
	// Not using
	"no-tabs": [
		"off",
		{
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
	// Disabled in favour of @typescript-eslint/object-curly-spacing rule, which was later removed
	"object-curly-spacing": [
		"off",
		"always",
		{
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
	// Disabled in favour of prettier
	"operator-linebreak": [
		"off",
		"after",
		{
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
	// Disabled in favour of @typescript-eslint/padding-line-between-statements rule, which was later removed
	"padding-line-between-statements": [
		"off",
		{
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
	// Disabled in favour of @typescript-eslint/quotes rule, which was later removed
	quotes: [
		"off",
		"double",
		{
			avoidEscape: false,
			allowTemplateLiterals: false,
		},
	],
	"rest-spread-spacing": ["error", "never"],
	// Disabled in favour of @typescript-eslint/semi rule, which was later removed
	semi: [
		"off",
		"always",
		{
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
	// Disabled in favour of @typescript-eslint/space-before-blocks rule, which was later removed
	"space-before-blocks": [
		"off",
		{
			functions: "always",
			keywords: "always",
			classes: "always",
		},
	],
	// Disabled in favour of @typescript-eslint/space-before-function-paren rule, which was later removed
	"space-before-function-paren": [
		"off",
		{
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
	// Disabled in favour of @typescript-eslint/space-infix-ops rule, which was later removed
	"space-infix-ops": [
		"off",
		{
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
	// Disabled in favour of prettier
	"wrap-regex": "off",
	"yield-star-spacing": [
		"error",
		{
			before: true,
			after: false,
		},
	],
};
