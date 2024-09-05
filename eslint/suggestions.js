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
	"class-methods-use-this": [
		"off",
		{
			// Disabled in favour of @typescript-eslint/class-methods-use-this rule
			exceptMethods: [],
			enforceForClassFields: true,
		},
	],
	complexity: [
		"off",
		{
			// Not using
			max: 20,
		},
	],
	"consistent-return": [
		"off",
		{
			// Disabled in favour of @typescript-eslint/consistent-return rule
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
	"default-param-last": "off", // Disabled in favour of @typescript-eslint/default-param-last rule
	"dot-notation": [
		"off",
		{
			// Disabled in favour of @typescript-eslint/dot-notation rule
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
	"id-match": [
		"off",
		"^[a-z]+([A-Z][a-z]+)*$",
		{
			// Not using (camelCase identifiers only)
			properties: false,
			classFields: false,
			onlyDeclarations: false,
			ignoreDestructuring: false,
		},
	],
	"init-declarations": [
		"off",
		"never",
		{
			// Disabled in favour of @typescript-eslint/init-declarations rule
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
	"max-depth": [
		"off",
		{
			// Not using
			max: 4,
		},
	],
	"max-lines": [
		"off",
		{
			// Not using
			max: 300,
			skipBlankLines: true,
			skipComments: true,
		},
	],
	"max-lines-per-function": [
		"off",
		{
			// Not using
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
	"max-params": [
		"off",
		{
			// Not using
			max: 3,
		},
	],
	"max-statements": [
		"off", // Not using
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
	"no-array-constructor": "off", // Disabled in favour of @typescript-eslint/no-array-constructor rule
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
	"no-empty-function": [
		"off",
		{
			// Disabled in favour of @typescript-eslint/no-empty-function rule
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
	"no-implied-eval": "off", // Disabled in favour of @typescript-eslint/no-implied-eval rule
	"no-inline-comments": [
		"error",
		{
			ignorePattern: "",
		},
	],
	"no-invalid-this": [
		"off",
		{
			// Disabled in favour of @typescript-eslint/no-invalid-this rule
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
	"no-loop-func": "off", // Disabled in favour of @typescript-eslint/no-loop-func rule
	"no-magic-numbers": [
		"off",
		{
			// Disabled in favour of @typescript-eslint/no-magic-numbers rule
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
	"no-nested-ternary": "off", // Not using (sort helpers)
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
	"no-plusplus": [
		"off",
		{
			// Not using
			allowForLoopAfterthoughts: true,
		},
	],
	"no-proto": "error",
	"no-redeclare": [
		"off",
		{
			// Disabled in favour of @typescript-eslint/no-redeclare rule
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
	"no-restricted-globals": "off", // Not using
	"no-restricted-imports": [
		"off",
		{
			// Disabled in favour of @typescript-eslint/no-restricted-imports rule
			paths: [],
			patterns: [],
		},
	],
	"no-restricted-properties": "off", // Not using
	"no-restricted-syntax": ["error", "WithStatement"],
	"no-return-assign": ["error", "except-parens"],
	"no-script-url": "error",
	"no-sequences": [
		"error",
		{
			allowInParentheses: false,
		},
	],
	"no-shadow": [
		"off",
		{
			// Disabled in favour of @typescript-eslint/no-shadow rule
			builtinGlobals: false,
			hoist: "all",
			allow: [],
			ignoreOnInitialization: true,
		},
	],
	"no-shadow-restricted-names": "error",
	"no-ternary": "off", // Not using
	"no-throw-literal": "off", // Disabled in favour of @typescript-eslint/no-throw-literal rule, which was later removed
	"no-undef-init": "error",
	"no-undefined": "off", // Not using
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
	"no-unused-expressions": [
		"off",
		{
			// Disabled in favour of @typescript-eslint/no-unused-expressions rule
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
	"no-useless-constructor": "off", // Disabled in favour of @typescript-eslint/no-useless-constructor rule
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
	"prefer-destructuring": [
		"off",
		{
			// Disabled in favour of @typescript-eslint/prefer-destructuring rule
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
	"prefer-promise-reject-errors": [
		"off",
		{
			// Disabled in favour of @typescript-eslint/prefer-promise-reject-errors rule
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
	"require-await": "off", // Disabled in favour of @typescript-eslint/require-await rule
	"require-unicode-regexp": "error",
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
