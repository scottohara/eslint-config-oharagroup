export default {
	"@typescript-eslint/class-methods-use-this": "off",
	"@typescript-eslint/consistent-return": "error",
	"@typescript-eslint/default-param-last": "error",
	"@typescript-eslint/dot-notation": [
		"error",
		{
			allowPrivateClassPropertyAccess: true,
			allowProtectedClassPropertyAccess: true,
		},
	],
	"@typescript-eslint/init-declarations": "off",
	"@typescript-eslint/max-params": "off",
	"@typescript-eslint/no-array-constructor": "error",
	"@typescript-eslint/no-dupe-class-members": "error",
	"@typescript-eslint/no-empty-function": "error",
	"@typescript-eslint/no-implied-eval": "error",
	"@typescript-eslint/no-invalid-this": "error",
	"@typescript-eslint/no-loop-func": "error",
	"@typescript-eslint/no-magic-numbers": [
		"error",
		{
			ignore: [-1, 0, 1],
			ignoreArrayIndexes: true,
			ignoreDefaultValues: true,
			enforceConst: true,
			ignoreNumericLiteralTypes: true,
			ignoreEnums: true,
		},
	],
	"@typescript-eslint/no-redeclare": "error",
	"@typescript-eslint/no-restricted-imports": "off",
	"@typescript-eslint/no-shadow": [
		"error",
		{
			builtinGlobals: true,
			hoist: "all",
			ignoreOnInitialization: true,
			ignoreTypeValueShadow: false,
			ignoreFunctionTypeParameterNameValueShadow: false,
		},
	],
	"@typescript-eslint/no-unused-expressions": [
		"error",
		{
			enforceForJSX: true,
		},
	],
	"@typescript-eslint/no-unused-private-class-members": "error",
	"@typescript-eslint/no-unused-vars": [
		"error",
		{
			reportUsedIgnorePattern: true,
		},
	],
	"@typescript-eslint/no-use-before-define": [
		"error",
		{
			ignoreTypeReferences: false,
		},
	],
	"@typescript-eslint/no-useless-constructor": "error",
	"@typescript-eslint/only-throw-error": [
		"error",
		{
			allowRethrowing: false,
			allowThrowingAny: false,
			allowThrowingUnknown: false,
		},
	],
	"@typescript-eslint/prefer-destructuring": [
		"error",
		{
			array: true,
			object: true,
		},
		{
			enforceForDeclarationWithTypeAnnotation: true,
		},
	],
	"@typescript-eslint/prefer-promise-reject-errors": "error",
	"@typescript-eslint/require-await": "error",
	"@typescript-eslint/return-await": "error",
};
