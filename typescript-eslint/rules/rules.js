export default {
	"@typescript-eslint/adjacent-overload-signatures": "error",
	"@typescript-eslint/array-type": "error",
	"@typescript-eslint/await-thenable": "error",
	"@typescript-eslint/ban-ts-comment": [
		"error",
		{
			"ts-expect-error": true,
			"ts-check": "allow-with-description",
		},
	],
	"@typescript-eslint/ban-tslint-comment": "error",
	"@typescript-eslint/class-literal-property-style": "error",
	"@typescript-eslint/consistent-generic-constructors": "error",
	"@typescript-eslint/consistent-indexed-object-style": "error",
	"@typescript-eslint/consistent-type-assertions": [
		"error",
		{
			assertionStyle: "as",
			objectLiteralTypeAssertions: "never",
		},
	],
	"@typescript-eslint/consistent-type-definitions": "error",
	"@typescript-eslint/consistent-type-exports": [
		"error",
		{
			fixMixedExportsWithInlineTypeSpecifier: true,
		},
	],
	"@typescript-eslint/consistent-type-imports": [
		"error",
		{
			fixStyle: "inline-type-imports",
			disallowTypeAnnotations: false,
		},
	],
	"@typescript-eslint/explicit-function-return-type": [
		"error",
		{
			allowTypedFunctionExpressions: false,
			allowHigherOrderFunctions: false,
			allowDirectConstAssertionInArrowFunctions: false,
		},
	],
	"@typescript-eslint/explicit-member-accessibility": "error",
	"@typescript-eslint/explicit-module-boundary-types": [
		"error",
		{
			allowDirectConstAssertionInArrowFunctions: false,
			allowHigherOrderFunctions: false,
			allowTypedFunctionExpressions: false,
		},
	],
	"@typescript-eslint/member-ordering": "off",
	"@typescript-eslint/method-signature-style": "error",
	"@typescript-eslint/naming-convention": "off",
	"@typescript-eslint/no-array-delete": "error",
	"@typescript-eslint/no-base-to-string": "error",
	"@typescript-eslint/no-confusing-non-null-assertion": "error",
	"@typescript-eslint/no-confusing-void-expression": [
		"error",
		{
			ignoreArrowShorthand: true,
		},
	],
	"@typescript-eslint/no-deprecated": "error",
	"@typescript-eslint/no-duplicate-enum-values": "error",
	"@typescript-eslint/no-duplicate-type-constituents": "error",
	"@typescript-eslint/no-dynamic-delete": "error",
	"@typescript-eslint/no-empty-object-type": "error",
	"@typescript-eslint/no-explicit-any": "error",
	"@typescript-eslint/no-extra-non-null-assertion": "error",
	"@typescript-eslint/no-extraneous-class": [
		"error",
		{
			allowConstructorOnly: true,
			allowStaticOnly: true,
		},
	],
	"@typescript-eslint/no-floating-promises": [
		"error",
		{
			ignoreVoid: false,
		},
	],
	"@typescript-eslint/no-for-in-array": "error",
	"@typescript-eslint/no-import-type-side-effects": "error",
	"@typescript-eslint/no-inferrable-types": "error",
	"@typescript-eslint/no-invalid-void-type": "error",
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
			checksVoidReturn: false,
		},
	],
	"@typescript-eslint/no-mixed-enums": "error",
	"@typescript-eslint/no-namespace": [
		"error",
		{
			allowDefinitionFiles: false,
		},
	],
	"@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
	"@typescript-eslint/no-non-null-asserted-optional-chain": "error",
	"@typescript-eslint/no-non-null-assertion": "error",
	"@typescript-eslint/no-redundant-type-constituents": "error",
	// Disabled until all projects are ESM
	"@typescript-eslint/no-require-imports": "off",
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
	"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
	"@typescript-eslint/no-unnecessary-condition": [
		"error",
		{
			checkTypePredicates: true,
		},
	],
	"@typescript-eslint/no-unnecessary-parameter-property-assignment": "error",
	"@typescript-eslint/no-unnecessary-qualifier": "error",
	"@typescript-eslint/no-unnecessary-template-expression": "error",
	"@typescript-eslint/no-unnecessary-type-arguments": "error",
	"@typescript-eslint/no-unnecessary-type-assertion": "error",
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
	"@typescript-eslint/no-unsafe-type-assertion": "off",
	"@typescript-eslint/no-unsafe-unary-minus": "error",
	"@typescript-eslint/no-useless-empty-export": "error",
	"@typescript-eslint/no-wrapper-object-types": "error",
	// Not using - conflicts with no-non-null-asssertion
	"@typescript-eslint/non-nullable-type-assertion-style": "off",
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
	"@typescript-eslint/prefer-enum-initializers": "error",
	"@typescript-eslint/prefer-find": "error",
	"@typescript-eslint/prefer-for-of": "error",
	"@typescript-eslint/prefer-function-type": "error",
	"@typescript-eslint/prefer-includes": "error",
	"@typescript-eslint/prefer-literal-enum-member": "error",
	"@typescript-eslint/prefer-namespace-keyword": "error",
	"@typescript-eslint/prefer-nullish-coalescing": [
		"error",
		{
			ignoreMixedLogicalExpressions: true,
		},
	],
	"@typescript-eslint/prefer-optional-chain": "error",
	"@typescript-eslint/prefer-readonly": "error",
	// Not using - prefer no-param-reassign instead
	"@typescript-eslint/prefer-readonly-parameter-types": "off",
	"@typescript-eslint/prefer-reduce-type-parameter": "error",
	"@typescript-eslint/prefer-regexp-exec": "error",
	"@typescript-eslint/prefer-return-this-type": "error",
	"@typescript-eslint/prefer-string-starts-ends-with": "error",
	"@typescript-eslint/promise-function-async": "error",
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
		},
	],
	"@typescript-eslint/restrict-template-expressions": [
		"error",
		{
			allowAny: false,
			allowRegExp: false,
			allowNever: false,
			allowArray: false,
		},
	],
	"@typescript-eslint/strict-boolean-expressions": "error",
	"@typescript-eslint/switch-exhaustiveness-check": [
		"error",
		{
			requireDefaultForNonUnion: true,
		},
	],
	"@typescript-eslint/triple-slash-reference": [
		"error",
		{
			types: "never",
			lib: "never",
		},
	],
	// Not using
	"@typescript-eslint/typedef": "off",
	"@typescript-eslint/unbound-method": [
		"error",
		{
			ignoreStatic: true,
		},
	],
	"@typescript-eslint/unified-signatures": "error",
	"@typescript-eslint/use-unknown-in-catch-callback-variable": "error",
};
