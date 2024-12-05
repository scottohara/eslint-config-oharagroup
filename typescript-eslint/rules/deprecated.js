export default {
	"@typescript-eslint/no-empty-interface": "error",
	"@typescript-eslint/no-loss-of-precision": "error",
	"@typescript-eslint/no-type-alias": [
		"error",
		{
			allowAliases: "in-unions-and-intersections",
			allowCallbacks: "always",
			allowConditionalTypes: "always",
			allowConstructors: "always",
			allowLiterals: "in-unions-and-intersections",
			allowMappedTypes: "in-unions-and-intersections",
			allowTupleTypes: "in-unions-and-intersections",
			allowGenerics: "always",
		},
	],
	// Disabled until projects are ESM
	"@typescript-eslint/no-var-requires": "off",
	"@typescript-eslint/prefer-ts-expect-error": "error",
	"@typescript-eslint/sort-type-constituents": "error",
};
