export default {
	"@typescript-eslint/class-methods-use-this": [
		"off",
		{
			// Not using
			exceptMethods: [],
			enforceForClassFields: true,
			ignoreOverrideMethods: false,
			ignoreClassesThatImplementAnInterface: false,
		},
	],
	"@typescript-eslint/consistent-return": [
		"error",
		{
			// Disabled in favour of @typescript-eslint/consistent-return rule
			treatUndefinedAsUnspecified: false,
		},
	],
	"@typescript-eslint/default-param-last": "error",
	"@typescript-eslint/dot-notation": [
		"error",
		{
			allowKeywords: true,
			allowPrivateClassPropertyAccess: true,
			allowProtectedClassPropertyAccess: true,
			allowIndexSignaturePropertyAccess: false,
		},
	],
	"@typescript-eslint/init-declarations": [
		"off",
		"never",
		{
			// Not using
			ignoreForLoopInit: false,
		},
	],
	"@typescript-eslint/max-params": [
		"off",
		{
			// Not using
			max: 3,
			countVoidThis: false,
		},
	],
	"@typescript-eslint/no-array-constructor": "error",
	"@typescript-eslint/no-dupe-class-members": "error",
	"@typescript-eslint/no-empty-function": [
		"error",
		{
			allow: [],
		},
	],
	"@typescript-eslint/no-implied-eval": "error",
	"@typescript-eslint/no-invalid-this": [
		"error",
		{
			capIsConstructor: true,
		},
	],
	"@typescript-eslint/no-loop-func": "error",
	"@typescript-eslint/no-magic-numbers": [
		"error",
		{
			ignore: [-1, 0, 1],
			ignoreArrayIndexes: true,
			ignoreDefaultValues: true,
			ignoreClassFieldInitialValues: false,
			enforceConst: true,
			detectObjects: false,
			ignoreNumericLiteralTypes: true,
			ignoreReadonlyClassProperties: false,
			ignoreEnums: true,
			ignoreTypeIndexes: false,
		},
	],
	"@typescript-eslint/no-redeclare": [
		"error",
		{
			builtinGlobals: true,
			ignoreDeclarationMerge: true,
		},
	],
	"@typescript-eslint/no-restricted-imports": [
		"off",
		{
			paths: [],
			patterns: [],
			allowTypeImports: false,
		},
	],
	"@typescript-eslint/no-shadow": [
		"error",
		{
			builtinGlobals: false,
			hoist: "all",
			allow: [],
			ignoreOnInitialization: true,
			ignoreTypeValueShadow: false,
			ignoreFunctionTypeParameterNameValueShadow: false,
		},
	],
	"@typescript-eslint/no-unsafe-unary-minus": "error",
	"@typescript-eslint/no-unused-expressions": [
		"error",
		{
			allowShortCircuit: false,
			allowTernary: false,
			allowTaggedTemplates: false,
			enforceForJSX: true,
		},
	],
	"@typescript-eslint/no-unused-vars": [
		"error",
		{
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
	"@typescript-eslint/no-use-before-define": [
		"error",
		{
			functions: true,
			classes: true,
			variables: true,
			allowNamedExports: false,
			enums: true,
			typedefs: true,
			ignoreTypeReferences: false,
		},
	],
	"@typescript-eslint/no-useless-constructor": "error",
	"@typescript-eslint/prefer-promise-reject-errors": [
		"error",
		{
			allowEmptyReject: false,
			allowThrowingAny: false,
			allowThrowingUnknown: false,
		},
	],
	"@typescript-eslint/require-await": "error",
	"@typescript-eslint/return-await": ["error", "in-try-catch"],
};
