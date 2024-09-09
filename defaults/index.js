import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
	{
		name: "oharagroup/defaults/ignores",
		// Globally ignore common directories that contain *.js files that shouldn't be matched
		ignores: [".ruby-lsp", "coverage", "public", "vendor"],
	},
	{
		name: "oharagroup/defaults/globals",
		// Include node globals for Karma and Webpack config files,
		files: ["karma*.js", "webpack*.js"],
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
	},
);
