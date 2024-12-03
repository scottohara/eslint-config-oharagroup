export default {
	"svelte/derived-has-same-inputs-outputs": "error",
	"svelte/first-attribute-linebreak": [
		"error",
		{
			multiline: "below",
			singleline: "beside",
		},
	],
	"svelte/html-closing-bracket-new-line": [
		"error",
		{
			singleline: "never",
			multiline: "always",
			selfClosingTag: {
				singleline: "never",
				multiline: "always",
			},
		},
	],
	"svelte/html-closing-bracket-spacing": [
		"error",
		{
			startTag: "never",
			endTag: "never",
			selfClosingTag: "never",
		},
	],
	"svelte/html-quotes": [
		"error",
		{
			prefer: "double",
			dynamic: {
				quoted: false,
				avoidInvalidUnquotedInHTML: true,
			},
		},
	],
	"svelte/html-self-closing": [
		"error",
		{
			void: "always",
			normal: "never",
			foreign: "always",
			component: "always",
			svelte: "always",
		},
	],
	"svelte/indent": [
		"error",
		{
			indent: "tab",
			indentScript: true,
			ignoredNodes: [],
			switchCase: 1,
			alignAttributesVertically: true,
		},
	],
	"svelte/max-attributes-per-line": [
		// Not using
		"off",
		{
			multiline: 1,
			singleline: 1,
		},
	],
	"svelte/mustache-spacing": [
		"error",
		{
			textExpressions: "never",
			attributesAndProps: "never",
			directiveExpressions: "never",
			tags: {
				openingBrace: "never",
				closingBrace: "never",
			},
		},
	],
	"svelte/no-extra-reactive-curlies": "error",
	// Not using
	"svelte/no-restricted-html-elements": "off",
	"svelte/no-spaces-around-equal-signs-in-attribute": "error",
	"svelte/prefer-class-directive": "error",
	"svelte/prefer-style-directive": "error",
	"svelte/shorthand-attribute": [
		"error",
		{
			prefer: "always",
		},
	],
	"svelte/shorthand-directive": [
		"error",
		{
			prefer: "always",
		},
	],
	// Using default order
	"svelte/sort-attributes": "error",
	"svelte/spaced-html-comment": ["error", "always"],
};
