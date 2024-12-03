export default {
	"@typescript-eslint/adjacent-overload-signatures": "error",
	"@typescript-eslint/array-type": [
		"error",
		{
			default: "array",
			readonly: "array",
		},
	],
	"@typescript-eslint/await-thenable": "error",
	"@typescript-eslint/ban-ts-comment": [
		"error",
		{
			"ts-expect-error": true,
			"ts-ignore": true,
			"ts-nocheck": true,
			"ts-check": "allow-with-description",
			minimumDescriptionLength: 3,
		},
	],
	"@typescript-eslint/ban-tslint-comment": "error",
	"@typescript-eslint/class-literal-property-style": ["error", "fields"],
	"@typescript-eslint/consistent-generic-constructors": [
		"error",
		"constructor",
	],
	"@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
	"@typescript-eslint/consistent-type-assertions": [
		"error",
		{
			assertionStyle: "as",
			objectLiteralTypeAssertions: "never",
		},
	],
	"@typescript-eslint/consistent-type-definitions": ["error", "interface"],
	"@typescript-eslint/consistent-type-exports": [
		"error",
		{
			fixMixedExportsWithInlineTypeSpecifier: true,
		},
	],
	"@typescript-eslint/consistent-type-imports": [
		"error",
		{
			prefer: "type-imports",
			fixStyle: "inline-type-imports",
			disallowTypeAnnotations: false,
		},
	],
	"@typescript-eslint/explicit-function-return-type": [
		"error",
		{
			allowExpressions: false,
			allowTypedFunctionExpressions: false,
			allowHigherOrderFunctions: false,
			allowDirectConstAssertionInArrowFunctions: false,
			allowConciseArrowFunctionExpressionsStartingWithVoid: false,
			allowFunctionsWithoutTypeParameters: false,
			allowedNames: [],
			allowIIFEs: false,
		},
	],
	"@typescript-eslint/explicit-member-accessibility": [
		"error",
		{
			accessibility: "explicit",
			ignoredMethodNames: [],
			overrides: {
				accessors: "explicit",
				constructors: "explicit",
				methods: "explicit",
				properties: "explicit",
				parameterProperties: "explicit",
			},
		},
	],
	"@typescript-eslint/explicit-module-boundary-types": [
		"error",
		{
			allowArgumentsExplicitlyTypedAsAny: false,
			allowDirectConstAssertionInArrowFunctions: false,
			allowedNames: [],
			allowHigherOrderFunctions: false,
			allowTypedFunctionExpressions: false,
		},
	],
	"@typescript-eslint/member-ordering": [
		"error",
		{
			default: {
				memberTypes: [
					// Index signature
					"signature",
					"call-signature",

					// Fields
					"public-static-field",
					"protected-static-field",
					"private-static-field",
					"#private-static-field",

					"public-decorated-field",
					"protected-decorated-field",
					"private-decorated-field",

					"public-instance-field",
					"protected-instance-field",
					"private-instance-field",
					"#private-instance-field",

					"public-abstract-field",
					"protected-abstract-field",

					// Static initialization
					"static-initialization",

					// Constructors
					"public-constructor",
					"protected-constructor",
					"private-constructor",

					// Accessors
					"public-static-accessor",
					"protected-static-accessor",
					"private-static-accessor",
					"#private-static-accessor",

					"public-decorated-accessor",
					"protected-decorated-accessor",
					"private-decorated-accessor",

					"public-instance-accessor",
					"protected-instance-accessor",
					"private-instance-accessor",
					"#private-instance-accessor",

					"public-abstract-accessor",
					"protected-abstract-accessor",

					// Getters / setters
					["public-static-get", "public-static-set"],
					["protected-static-get", "protected-static-set"],
					["private-static-get", "private-static-set"],
					["#private-static-get", "#private-static-set"],

					["public-decorated-get", "public-decorated-set"],
					["protected-decorated-get", "protected-decorated-set"],
					["private-decorated-get", "private-decorated-set"],

					["public-instance-get", "public-instance-set"],
					["protected-instance-get", "protected-instance-set"],
					["private-instance-get", "private-instance-set"],
					["#private-instance-get", "#private-instance-set"],

					["public-abstract-get", "public-abstract-set"],
					["protected-abstract-get", "protected-abstract-set"],

					// Methods
					"public-static-method",
					"protected-static-method",
					"private-static-method",
					"#private-static-method",

					"public-decorated-method",
					"protected-decorated-method",
					"private-decorated-method",

					"public-instance-method",
					"protected-instance-method",
					"private-instance-method",
					"#private-instance-method",

					"public-abstract-method",
					"protected-abstract-method",
				],
			},
		},
	],
	"@typescript-eslint/method-signature-style": ["error", "property"],
	// Not using
	"@typescript-eslint/naming-convention": [
		"off",
		{
			selector: "default",
			format: ["strictCamelCase"],
			leadingUnderscore: "forbid",
			trailingUnderscore: "forbid",
			prefix: [],
			suffix: [],
			modifiers: [],
		},
		{
			selector: "variable",
			format: ["strictCamelCase", "UPPER_CASE"],
		},
		{
			selector: "parameter",
			format: ["strictCamelCase"],
			leadingUnderscore: "allow",
		},
		{
			selector: "typeLike",
			format: ["PascalCase"],
		},
		{
			selector: "enumMember",
			format: ["PascalCase"],
		},
		{
			selector: "property",
			format: ["strictCamelCase", "UPPER_CASE"],
			modifiers: ["readonly"],
		},
	],
	"@typescript-eslint/no-array-delete": "error",
	"@typescript-eslint/no-base-to-string": [
		"error",
		{
			ignoredTypeNames: [],
		},
	],
	"@typescript-eslint/no-confusing-non-null-assertion": "error",
	"@typescript-eslint/no-confusing-void-expression": [
		"error",
		{
			ignoreArrowShorthand: true,
			ignoreVoidOperator: false,
			ignoreVoidReturningFunctions: false,
		},
	],
	"@typescript-eslint/no-deprecated": "error",
	"@typescript-eslint/no-duplicate-enum-values": "error",
	"@typescript-eslint/no-duplicate-type-constituents": [
		"error",
		{
			ignoreIntersections: false,
			ignoreUnions: false,
		},
	],
	"@typescript-eslint/no-dynamic-delete": "error",
	"@typescript-eslint/no-empty-interface": [
		"error",
		{
			allowSingleExtends: false,
		},
	],
	"@typescript-eslint/no-empty-object-type": [
		"error",
		{
			allowInterfaces: "never",
			allowObjectTypes: "never",
			allowWithName: "",
		},
	],
	"@typescript-eslint/no-explicit-any": [
		"error",
		{
			fixToUnknown: false,
			ignoreRestArgs: false,
		},
	],
	"@typescript-eslint/no-extra-non-null-assertion": "error",
	"@typescript-eslint/no-extraneous-class": [
		"error",
		{
			// Allows for angularJS ControllerTest
			allowConstructorOnly: true,
			allowEmpty: false,
			// Allows for angularJS directives, filters etc.
			allowStaticOnly: true,
			allowWithDecorator: false,
		},
	],
	"@typescript-eslint/no-floating-promises": [
		"error",
		{
			ignoreVoid: false,
			ignoreIIFE: false,
			allowForKnownSafePromises: [],
			allowForKnownSafeCalls: [],
			checkThenables: false,
		},
	],
	"@typescript-eslint/no-for-in-array": "error",
	"@typescript-eslint/no-import-type-side-effects": "error",
	"@typescript-eslint/no-inferrable-types": [
		"error",
		{
			ignoreProperties: false,
			ignoreParameters: false,
		},
	],
	"@typescript-eslint/no-invalid-void-type": [
		"error",
		{
			allowInGenericTypeArguments: true,
			allowAsThisParameter: false,
		},
	],
	"@typescript-eslint/no-meaningless-void-operator": [
		"error",
		{
			checkNever: true,
		},
	],
	"@typescript-eslint/no-misused-new": "error",
	"@typescript-eslint/no-misused-promises": [
		"error",
		{
			checksConditionals: true,
			checksVoidReturn: {
				arguments: false,
				attributes: false,
				inheritedMethods: false,
				properties: false,
				returns: false,
				variables: false,
			},
			checksSpreads: true,
		},
	],
	"@typescript-eslint/no-mixed-enums": "error",
	"@typescript-eslint/no-namespace": [
		"error",
		{
			allowDeclarations: false,
			allowDefinitionFiles: false,
		},
	],
	"@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
	"@typescript-eslint/no-non-null-asserted-optional-chain": "error",
	"@typescript-eslint/no-non-null-assertion": "error",
	"@typescript-eslint/no-redundant-type-constituents": "error",
	// Disabled until all projects are ESM
	"@typescript-eslint/no-require-imports": [
		"off",
		{
			allow: [],
			allowAsImport: false,
		},
	],
	// Not using
	"@typescript-eslint/no-unsafe-type-assertion": "off",
	"@typescript-eslint/no-restricted-types": [
		"error",
		{
			types: {
				Array: "Use [] instead",
			},
		},
	],
	"@typescript-eslint/no-this-alias": [
		"error",
		{
			allowDestructuring: false,
			allowedNames: ["self"],
		},
	],
	"@typescript-eslint/no-unnecessary-boolean-literal-compare": [
		"error",
		{
			allowComparingNullableBooleansToTrue: true,
			allowComparingNullableBooleansToFalse: true,
		},
	],
	"@typescript-eslint/no-unnecessary-condition": [
		"error",
		{
			allowConstantLoopConditions: false,
			checkTypePredicates: true,
			allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
		},
	],
	"@typescript-eslint/no-unnecessary-parameter-property-assignment": "error",
	"@typescript-eslint/no-unnecessary-qualifier": "error",
	"@typescript-eslint/no-unnecessary-template-expression": "error",
	"@typescript-eslint/no-unnecessary-type-arguments": "error",
	"@typescript-eslint/no-unnecessary-type-assertion": [
		"error",
		{
			typesToIgnore: [],
		},
	],
	"@typescript-eslint/no-unnecessary-type-constraint": "error",
	"@typescript-eslint/no-unnecessary-type-parameters": "error",
	"@typescript-eslint/no-unsafe-argument": "error",
	"@typescript-eslint/no-unsafe-assignment": "error",
	"@typescript-eslint/no-unsafe-call": "error",
	"@typescript-eslint/no-unsafe-declaration-merging": "error",
	"@typescript-eslint/no-unsafe-enum-comparison": "error",
	"@typescript-eslint/no-unsafe-function-type": "error",
	"@typescript-eslint/no-unsafe-member-access": "error",
	"@typescript-eslint/no-unsafe-return": "error",
	"@typescript-eslint/no-useless-empty-export": "error",
	// Disabled until projects are ESM
	"@typescript-eslint/no-var-requires": [
		"off",
		{
			allow: [],
		},
	],
	"@typescript-eslint/no-wrapper-object-types": "error",
	// Not using - conflicts with no-non-null-asssertion
	"@typescript-eslint/non-nullable-type-assertion-style": "off",
	"@typescript-eslint/only-throw-error": [
		"error",
		{
			allowThrowingAny: false,
			allowThrowingUnknown: false,
			allow: [],
		},
	],
	"@typescript-eslint/parameter-properties": [
		"error",
		{
			allow: [
				"readonly",
				"private",
				"protected",
				"public",
				"private readonly",
				"protected readonly",
				"public readonly",
			],
			prefer: "parameter-property",
		},
	],
	"@typescript-eslint/prefer-as-const": "error",
	"@typescript-eslint/prefer-destructuring": [
		"error",
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
			enforceForDeclarationWithTypeAnnotation: true,
		},
	],
	"@typescript-eslint/prefer-enum-initializers": "error",
	"@typescript-eslint/prefer-find": "error",
	"@typescript-eslint/prefer-for-of": "error",
	"@typescript-eslint/prefer-function-type": "error",
	"@typescript-eslint/prefer-includes": "error",
	"@typescript-eslint/prefer-literal-enum-member": [
		"error",
		{
			allowBitwiseExpressions: false,
		},
	],
	"@typescript-eslint/prefer-namespace-keyword": "error",
	"@typescript-eslint/prefer-nullish-coalescing": [
		"error",
		{
			ignoreTernaryTests: false,
			ignoreConditionalTests: true,
			ignoreMixedLogicalExpressions: true,
			ignorePrimitives: {
				bigint: false,
				boolean: false,
				number: false,
				string: false,
			},
			ignoreBooleanCoercion: false,
			allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
		},
	],
	"@typescript-eslint/prefer-optional-chain": "error",
	"@typescript-eslint/prefer-readonly": [
		"error",
		{
			onlyInlineLambdas: false,
		},
	],
	// Not using - prefer no-param-reassign instead
	"@typescript-eslint/prefer-readonly-parameter-types": [
		"off",
		{
			allow: [],
			checkParameterProperties: true,
			ignoreInferredTypes: false,
			treatMethodsAsReadonly: false,
		},
	],
	"@typescript-eslint/prefer-reduce-type-parameter": "error",
	"@typescript-eslint/prefer-regexp-exec": "error",
	"@typescript-eslint/prefer-return-this-type": "error",
	"@typescript-eslint/prefer-string-starts-ends-with": [
		"error",
		{
			allowSingleElementEquality: "never",
		},
	],
	"@typescript-eslint/prefer-ts-expect-error": "error",
	"@typescript-eslint/promise-function-async": [
		"error",
		{
			allowAny: true,
			allowedPromiseNames: [],
			checkArrowFunctions: true,
			checkFunctionDeclarations: true,
			checkFunctionExpressions: true,
			checkMethodDeclarations: true,
		},
	],
	"@typescript-eslint/related-getter-setter-pairs": "error",
	"@typescript-eslint/require-array-sort-compare": [
		"error",
		{
			ignoreStringArrays: false,
		},
	],
	"@typescript-eslint/restrict-plus-operands": [
		"error",
		{
			allowAny: false,
			allowBoolean: false,
			allowNullish: false,
			allowNumberAndString: false,
			allowRegExp: false,
			skipCompoundAssignments: false,
		},
	],
	"@typescript-eslint/restrict-template-expressions": [
		"error",
		{
			allowNumber: true,
			allowBoolean: true,
			allowAny: false,
			allowNullish: true,
			allowRegExp: false,
			allowNever: false,
			allowArray: false,
			allow: [{ name: ["Error", "URL", "URLSearchParams"], from: "lib" }],
		},
	],
	"@typescript-eslint/sort-type-constituents": [
		"error",
		{
			checkIntersections: true,
			checkUnions: true,
			caseSensitive: false,
			groupOrder: [
				"named",
				"keyword",
				"operator",
				"literal",
				"function",
				"import",
				"conditional",
				"object",
				"tuple",
				"intersection",
				"union",
				"nullish",
			],
		},
	],
	"@typescript-eslint/strict-boolean-expressions": [
		"error",
		{
			allowString: true,
			allowNumber: true,
			allowNullableObject: true,
			allowNullableBoolean: false,
			allowNullableString: false,
			allowNullableNumber: false,
			allowNullableEnum: false,
			allowAny: false,
			allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
		},
	],
	"@typescript-eslint/switch-exhaustiveness-check": [
		"error",
		{
			// Setting to false conflicts with default-case rule
			allowDefaultCaseForExhaustiveSwitch: true,
			requireDefaultForNonUnion: true,
			considerDefaultExhaustiveForUnions: false,
		},
	],
	"@typescript-eslint/triple-slash-reference": [
		"error",
		{
			path: "never",
			types: "never",
			lib: "never",
		},
	],
	// Not using
	"@typescript-eslint/typedef": [
		"off",
		{
			arrayDestructuring: true,
			arrowParameter: true,
			memberVariableDeclaration: true,
			objectDestructuring: true,
			parameter: true,
			propertyDeclaration: true,
			variableDeclaration: true,
			variableDeclarationIgnoreFunction: true,
		},
	],
	"@typescript-eslint/unbound-method": [
		"error",
		{
			// Allows for angularJS directtive/filter static factory methods
			ignoreStatic: true,
		},
	],
	"@typescript-eslint/unified-signatures": [
		"error",
		{
			ignoreDifferentlyNamedParameters: false,
		},
	],
	"@typescript-eslint/use-unknown-in-catch-callback-variable": "error",
};
