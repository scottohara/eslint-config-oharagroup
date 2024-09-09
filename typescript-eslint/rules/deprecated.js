export default {
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
};
