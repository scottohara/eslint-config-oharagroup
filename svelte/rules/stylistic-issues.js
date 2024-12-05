export default {
	"svelte/derived-has-same-inputs-outputs": "error",
	"svelte/first-attribute-linebreak": "error",
	"svelte/html-closing-bracket-new-line": "error",
	"svelte/html-closing-bracket-spacing": [
		"error",
		{
			selfClosingTag: "never",
		},
	],
	"svelte/html-quotes": [
		"error",
		{
			prefer: "double",
			dynamic: {
				avoidInvalidUnquotedInHTML: true,
			},
		},
	],
	"svelte/html-self-closing": [
		"error",
		{
			normal: "never",
		},
	],
	"svelte/indent": [
		"error",
		{
			indent: "tab",
			alignAttributesVertically: true,
		},
	],
	"svelte/max-attributes-per-line": "off",
	"svelte/mustache-spacing": "error",
	"svelte/no-extra-reactive-curlies": "error",
	"svelte/no-restricted-html-elements": "off",
	"svelte/no-spaces-around-equal-signs-in-attribute": "error",
	"svelte/prefer-class-directive": "error",
	"svelte/prefer-style-directive": "error",
	"svelte/shorthand-attribute": "error",
	"svelte/shorthand-directive": "error",
	"svelte/sort-attributes": "error",
	"svelte/spaced-html-comment": ["error", "always"],
};
