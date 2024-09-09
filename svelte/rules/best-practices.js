export default {
	"svelte/block-lang": [
		"error",
		{
			enforceScriptPresent: true,
			enforceStylePresent: false,
			script: "ts",
			style: null,
		},
	],
	"svelte/button-has-type": [
		"error",
		{
			button: true,
			submit: true,
			reset: true,
		},
	],
	"svelte/no-at-debug-tags": "error",
	"svelte/no-ignored-unsubscribe": "error",
	"svelte/no-immutable-reactive-statements": "error",
	"svelte/no-inline-styles": "error",
	"svelte/no-reactive-functions": "error",
	"svelte/no-reactive-literals": "error",
	"svelte/no-svelte-internal": "error",
	"svelte/no-unused-class-name": "error",
	"svelte/no-unused-svelte-ignore": "error",
	"svelte/no-useless-mustaches": [
		"error",
		{
			ignoreIncludesComment: false,
			ignoreStringEscape: false,
		},
	],
	"svelte/prefer-destructured-store-props": "error",
	"svelte/require-each-key": "error",
	"svelte/require-event-dispatcher-types": "error",
	"svelte/require-optimized-style-attribute": "error",
	"svelte/require-stores-init": "error",
	"svelte/valid-each-key": "error",
};
