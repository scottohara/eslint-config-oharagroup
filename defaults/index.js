import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";

export default defineConfig(
	// Globally ignore common directories that contain *.js files that shouldn't be matched
	globalIgnores(
		[".ruby-lsp/", "coverage/", "public/", "vendor/"],
		"oharagroup/defaults/ignores",
	),
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
