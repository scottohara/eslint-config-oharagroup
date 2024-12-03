export default {
	"accessor-pairs": [
		"error",
		{
			setWithoutGet: true,
			getWithoutSet: false,
			enforceForClassMembers: true,
		},
	],
	"arrow-body-style": [
		"error",
		"as-needed",
		{
			requireReturnForObjectLiteral: false,
		},
	],
	"block-scoped-var": "error",
	camelcase: [
		"error",
		{
			properties: "never",
			ignoreDestructuring: false,
			ignoreImports: false,
			ignoreGlobals: false,
			allow: [],
		},
	],
	"capitalized-comments": [
		"error",
		"always",
		{
			line: {
				ignorePattern: "",
				ignoreInlineComments: false,
				ignoreConsecutiveComments: true,
			},
			block: {
				ignorePattern: "",
				ignoreInlineComments: false,
				ignoreConsecutiveComments: true,
			},
		},
	],
	// Disabled in favour of @typescript-eslint/class-methods-use-this rule
	"class-methods-use-this": [
		"off",
		{
			exceptMethods: [],
			enforceForClassFields: true,
		},
	],
	// Not using
	complexity: [
		"off",
		{
			max: 20,
			variant: "classic",
		},
	],
	// Disabled in favour of @typescript-eslint/consistent-return rule
	"consistent-return": [
		"off",
		{
			treatUndefinedAsUnspecified: false,
		},
	],
	"consistent-this": ["error", "self"],
	curly: ["error", "all"],
	"default-case": [
		"error",
		{
			commentPattern: "",
		},
	],
	"default-case-last": "error",
	// Disabled in favour of @typescript-eslint/default-param-last rule
	"default-param-last": "off",
	// Disabled in favour of @typescript-eslint/dot-notation rule
	"dot-notation": [
		"off",
		{
			allowKeywords: true,
		},
	],
	eqeqeq: [
		"error",
		"always",
		{
			null: "always",
		},
	],
	"func-name-matching": [
		"error",
		"always",
		{
			considerPropertyDescriptor: false,
			includeCommonJSModuleExports: true,
		},
	],
	"func-names": [
		"error",
		"always",
		{
			generators: "always",
		},
	],
	"func-style": [
		"error",
		"declaration",
		{
			allowArrowFunctions: false,
			overrides: {
				namedExports: "declaration",
			},
		},
	],
	"grouped-accessor-pairs": ["error", "getBeforeSet"],
	"guard-for-in": "error",
	"id-denylist": "error",
	"id-length": [
		"error",
		{
			min: 1,
			max: 65,
			properties: "always",
			exceptions: [],
			exceptionPatterns: [],
		},
	],
	// Not using (camelCase identifiers only)
	"id-match": [
		"off",
		"^[a-z]+([A-Z][a-z]+)*$",
		{
			properties: false,
			classFields: false,
			onlyDeclarations: false,
			ignoreDestructuring: false,
		},
	],
	// Disabled in favour of @typescript-eslint/init-declarations rule
	"init-declarations": [
		"off",
		"never",
		{
			ignoreForLoopInit: false,
		},
	],
	"logical-assignment-operators": [
		"error",
		"always",
		{
			enforceForIfStatements: true,
		},
	],
	"max-classes-per-file": [
		"error",
		{
			ignoreExpressions: false,
			max: 1,
		},
	],
	// Not using
	"max-depth": [
		"off",
		{
			max: 4,
		},
	],
	// Not using
	"max-lines": [
		"off",
		{
			max: 300,
			skipBlankLines: true,
			skipComments: true,
		},
	],
	// Not using
	"max-lines-per-function": [
		"off",
		{
			max: 50,
			skipBlankLines: false,
			skipComments: false,
			IIFEs: false,
		},
	],
	"max-nested-callbacks": [
		"error",
		{
			max: 10,
		},
	],
	// Not using
	"max-params": [
		"off",
		{
			max: 3,
		},
	],
	// Not using
	"max-statements": [
		"off",
		{
			max: 10,
		},
		{
			ignoreTopLevelFunctions: false,
		},
	],
	"multiline-comment-style": ["error", "starred-block"],
	"new-cap": [
		"error",
		{
			newIsCap: true,
			capIsNew: true,
			newIsCapExceptions: [],
			newIsCapExceptionPattern: "",
			capIsNewExceptions: [],
			capIsNewExceptionPattern: "",
		},
	],
	"no-alert": "error",
	// Disabled in favour of @typescript-eslint/no-array-constructor rule
	"no-array-constructor": "off",
	"no-bitwise": [
		"error",
		{
			allow: [],
			int32Hint: false,
		},
	],
	"no-caller": "error",
	"no-case-declarations": "error",
	"no-console": [
		"error",
		{
			allow: ["error"],
		},
	],
	"no-continue": "error",
	"no-delete-var": "error",
	"no-div-regex": "error",
	"no-else-return": [
		"error",
		{
			allowElseIf: true,
		},
	],
	"no-empty": [
		"error",
		{
			allowEmptyCatch: false,
		},
	],
	// Disabled in favour of @typescript-eslint/no-empty-function rule
	"no-empty-function": [
		"off",
		{
			allow: [],
		},
	],
	"no-empty-static-block": "error",
	"no-eq-null": "error",
	"no-eval": [
		"error",
		{
			allowIndirect: false,
		},
	],
	"no-extend-native": "error",
	"no-extra-bind": "error",
	"no-extra-boolean-cast": [
		"error",
		{
			enforceForInnerExpressions: true,
		},
	],
	"no-extra-label": "error",
	"no-global-assign": [
		"error",
		{
			exceptions: [],
		},
	],
	"no-implicit-coercion": [
		"error",
		{
			boolean: true,
			number: true,
			string: true,
			disallowTemplateShorthand: true,
			allow: [],
		},
	],
	"no-implicit-globals": [
		"error",
		{
			lexicalBindings: true,
		},
	],
	// Disabled in favour of @typescript-eslint/no-implied-eval rule
	"no-implied-eval": "off",
	"no-inline-comments": [
		"error",
		{
			ignorePattern: "",
		},
	],
	// Disabled in favour of @typescript-eslint/no-invalid-this rule
	"no-invalid-this": [
		"off",
		{
			capIsConstructor: true,
		},
	],
	"no-iterator": "error",
	"no-label-var": "error",
	"no-labels": [
		"error",
		{
			allowLoop: false,
			allowSwitch: false,
		},
	],
	"no-lone-blocks": "error",
	"no-lonely-if": "error",
	// Disabled in favour of @typescript-eslint/no-loop-func rule
	"no-loop-func": "off",
	// Disabled in favour of @typescript-eslint/no-magic-numbers rule
	"no-magic-numbers": [
		"off",
		{
			ignore: [-1, 0, 1],
			ignoreArrayIndexes: true,
			ignoreDefaultValues: true,
			ignoreClassFieldInitialValues: false,
			enforceConst: true,
			detectObjects: false,
		},
	],
	"no-multi-assign": [
		"error",
		{
			ignoreNonDeclaration: false,
		},
	],
	"no-multi-str": "error",
	"no-negated-condition": "error",
	// Not using (sort helpers)
	"no-nested-ternary": "off",
	"no-new": "error",
	"no-new-func": "error",
	"no-new-wrappers": "error",
	"no-nonoctal-decimal-escape": "error",
	"no-object-constructor": "error",
	"no-octal": "error",
	"no-octal-escape": "error",
	"no-param-reassign": [
		"error",
		{
			props: false,
		},
	],
	// Not using
	"no-plusplus": [
		"off",
		{
			allowForLoopAfterthoughts: true,
		},
	],
	"no-proto": "error",
	// Disabled in favour of @typescript-eslint/no-redeclare rule
	"no-redeclare": [
		"off",
		{
			builtinGlobals: true,
		},
	],
	"no-regex-spaces": "error",
	"no-restricted-exports": [
		"off",
		{
			restrictedNamedExports: [],
			restrictedNamedExportsPattern: "",
			restrictedDefaultExports: {
				direct: false,
				named: true,
				defaultFrom: true,
				namedFrom: true,
				namespaceFrom: true,
			},
		},
	],
	// Not using
	"no-restricted-globals": "off",
	// Disabled in favour of @typescript-eslint/no-restricted-imports rule
	"no-restricted-imports": [
		"off",
		{
			paths: [],
			patterns: [],
		},
	],
	// Not using
	"no-restricted-properties": "off",
	"no-restricted-syntax": ["error", "WithStatement"],
	"no-return-assign": ["error", "except-parens"],
	"no-script-url": "error",
	"no-sequences": [
		"error",
		{
			allowInParentheses: false,
		},
	],
	// Disabled in favour of @typescript-eslint/no-shadow rule
	"no-shadow": [
		"off",
		{
			builtinGlobals: false,
			hoist: "all",
			allow: [],
			ignoreOnInitialization: true,
		},
	],
	"no-shadow-restricted-names": "error",
	// Not using
	"no-ternary": "off",
	// Disabled in favour of @typescript-eslint/no-throw-literal rule, which was later removed
	"no-throw-literal": "off",
	"no-undef-init": "error",
	// Not using
	"no-undefined": "off",
	"no-underscore-dangle": [
		"error",
		{
			allow: [],
			allowAfterThis: false,
			allowAfterSuper: false,
			allowAfterThisConstructor: false,
			enforceInMethodNames: true,
			enforceInClassFields: true,
			allowInArrayDestructuring: false,
			allowInObjectDestructuring: false,
			allowFunctionParams: true,
		},
	],
	"no-unneeded-ternary": "error",
	// Disabled in favour of @typescript-eslint/no-unused-expressions rule
	"no-unused-expressions": [
		"off",
		{
			allowShortCircuit: false,
			allowTernary: false,
			allowTaggedTemplates: false,
			enforceForJSX: true,
		},
	],
	"no-unused-labels": "error",
	"no-useless-call": "error",
	"no-useless-catch": "error",
	"no-useless-computed-key": [
		"error",
		{
			enforceForClassMembers: true,
		},
	],
	"no-useless-concat": "error",
	// Disabled in favour of @typescript-eslint/no-useless-constructor rule
	"no-useless-constructor": "off",
	"no-useless-escape": "error",
	"no-useless-rename": [
		"error",
		{
			ignoreDestructuring: false,
			ignoreImport: false,
			ignoreExport: false,
		},
	],
	"no-useless-return": "error",
	"no-var": "error",
	"no-void": [
		"error",
		{
			allowAsStatement: false,
		},
	],
	"no-warning-comments": [
		"error",
		{
			terms: ["todo"],
			location: "anywhere",
		},
	],
	"no-with": "error",
	"object-shorthand": [
		"error",
		"always",
		{
			avoidQuotes: false,
			ignoreConstructors: false,
			methodsIgnorePattern: "",
			avoidExplicitReturnArrows: true,
		},
	],
	"one-var": [
		"error",
		{
			var: "always",
			let: "always",
			const: "consecutive",
			separateRequires: true,
		},
	],
	"operator-assignment": ["error", "always"],
	"prefer-arrow-callback": [
		"error",
		{
			allowNamedFunctions: false,
			allowUnboundThis: false,
		},
	],
	"prefer-const": [
		"error",
		{
			destructuring: "any",
			ignoreReadBeforeAssign: false,
		},
	],
	// Disabled in favour of @typescript-eslint/prefer-destructuring rule
	"prefer-destructuring": [
		"off",
		{
			VariableDeclarator: {
				array: true,
				object: true,
			},
			AssignmentExpression: {
				array: true,
				object: true,
			},
		},
		{
			enforceForRenamedProperties: false,
		},
	],
	"prefer-exponentiation-operator": "error",
	"prefer-named-capture-group": "error",
	"prefer-numeric-literals": "error",
	"prefer-object-has-own": "error",
	"prefer-object-spread": "error",
	// Disabled in favour of @typescript-eslint/prefer-promise-reject-errors rule
	"prefer-promise-reject-errors": [
		"off",
		{
			allowEmptyReject: false,
		},
	],
	"prefer-regex-literals": [
		"error",
		{
			disallowRedundantWrapping: true,
		},
	],
	"prefer-rest-params": "error",
	"prefer-spread": "error",
	"prefer-template": "error",
	radix: ["error", "as-needed"],
	// Disabled in favour of @typescript-eslint/require-await rule
	"require-await": "off",
	"require-unicode-regexp": ["error", { requireFlag: "v" }],
	"require-yield": "error",
	"sort-imports": [
		"error",
		{
			ignoreCase: false,
			ignoreDeclarationSort: false,
			ignoreMemberSort: false,
			memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
			allowSeparatedGroups: false,
		},
	],
	"sort-keys": [
		"off",
		"asc",
		{
			caseSensitive: true,
			minKeys: 2,
			natural: true,
			allowLineSeparatedGroups: false,
			ignoreComputedKeys: false,
		},
	],
	"sort-vars": [
		"off",
		{
			// Not using
			ignoreCase: false,
		},
	],
	strict: ["error", "safe"],
	"symbol-description": "error",
	"vars-on-top": "error",
	yoda: [
		"error",
		"always",
		{
			exceptRange: false,
			onlyEquality: true,
		},
	],
};
