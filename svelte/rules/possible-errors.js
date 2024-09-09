export default {
	"svelte/infinite-reactive-loop": "error",
	"svelte/no-dom-manipulating": "error",
	"svelte/no-dupe-else-if-blocks": "error",
	"svelte/no-dupe-on-directives": "error",
	"svelte/no-dupe-style-properties": "error",
	"svelte/no-dupe-use-directives": "error",
	"svelte/no-dynamic-slot-name": "error",
	"svelte/no-export-load-in-svelte-module-in-kit-pages": "error",
	"svelte/no-not-function-handler": "error",
	"svelte/no-object-in-text-mustaches": "error",
	"svelte/no-reactive-reassign": [
		"error",
		{
			props: true,
		},
	],
	"svelte/no-shorthand-style-property-overrides": "error",
	"svelte/no-store-async": "error",
	"svelte/no-unknown-style-directive-property": [
		"error",
		{
			ignorePrefixed: false,
		},
	],
	"svelte/require-store-callbacks-use-set-param": "error",
	"svelte/require-store-reactive-access": "error",
	"svelte/valid-compile": [
		"error",
		{
			ignoreWarnings: false,
		},
	],
	"svelte/valid-prop-names-in-kit-pages": "error",
};
