module.exports = {
	"parserOptions": {
		"ecmaVersion": 2018,
		"sourceType": "module",
		"ecmaFeatures": {
			"globalReturn": false,
			"impliedStrict": true,
			"jsx": false																	// Not using (React/JSX)
		}
	},
	"env": {
		"browser": true,
		"node": true,
		"commonjs": false,
		"shared-node-browser": true,
		"es6": true,
		"worker": false,
		"amd": false,
		"mocha": false,
		"jasmine": false,
		"jest": false,
		"phantomjs": false,
		"protractor": false,
		"qunit": false,
		"jquery": false,
		"prototypejs": false,
		"shelljs": false,
		"meteor": false,
		"mongo": false,
		"applescript": false,
		"nashorn": false,
		"serviceworker": false,													// workbox-build manages ServiceWorker code
		"atomtest": false,
		"embertest": false,
		"webextensions": false,
		"greasemonkey": false
	},
	"globals": {
	},
	"parser": "typescript-eslint-parser",
	"plugins": [
		"typescript"
	],
	"rules": {
		// Possible errors
		"for-direction": "error",
		"getter-return": ["error", {
			"allowImplicit": false
		}],
		"no-await-in-loop": "error",
		"no-compare-neg-zero": "error",
		"no-cond-assign": ["error", "always"],
		"no-console": ["error", {
			"allow": ["error"]
		}],
		"no-constant-condition": ["error", {
			"checkLoops": false
		}],
		"no-control-regex": "error",
		"no-debugger": "error",
		"no-dupe-args": "error",
		"no-dupe-keys": "error",
		"no-duplicate-case": "error",
		"no-empty": ["error", {
			"allowEmptyCatch": false
		}],
		"no-empty-character-class": "error",
		"no-ex-assign": "error",
		"no-extra-boolean-cast": "error",
		"no-extra-parens": ["off", "all", {							// Disabled for Typescript type guards (e.g. ((<Foo>this).bar) => {...})
			"conditionalAssign": true,
			"returnAssign": false,												// Prevent conflict with no-return-assign
			"nestedBinaryExpressions": false,
			"ignoreJSX": "none",
			"enforceForArrowConditionals": false
		}],
		"no-extra-semi": "error",
		"no-func-assign": "error",
		"no-inner-declarations": ["error", "both"],
		"no-invalid-regexp": ["error", {
			"allowConstructorFlags": []
		}],
		"no-irregular-whitespace": ["error", {
			"skipStrings": false,
			"skipComments": false,
			"skipRegExps": false,
			"skipTemplates": false
		}],
		"no-obj-calls": "error",
		"no-prototype-builtins": "error",
		"no-regex-spaces": "error",
		"no-sparse-arrays": "error",
		"no-template-curly-in-string": "error",
		"no-unexpected-multiline": "error",
		"no-unreachable": "error",
		"no-unsafe-finally": "error",
		"no-unsafe-negation": "error",
		"use-isnan": "error",
		"valid-jsdoc": "off",														// TODO: Many options to configure JSDoc style
		"valid-typeof": ["error", {
			"requireStringLiterals": true
		}],

		// Best practices
		"accessor-pairs": ["error", {
			"getWithoutSet": true
		}],
		"array-callback-return": ["error", {
			"allowImplicit": false
		}],
		"block-scoped-var": "error",
		"class-methods-use-this": ["off",	{							// Not using
			"exceptMethods": []
		}],
		"complexity": ["off", {													// Not using
			"max": 20
		}],
		"consistent-return": ["error", {
			"treatUndefinedAsUnspecified": false
		}],
		"curly": ["error", "all"],
		"default-case": ["error", {
			"commentPattern": ""
		}],
		"dot-location": ["error", "property"],
		"dot-notation": ["error", {
			"allowKeywords": true
		}],
		"eqeqeq": ["error", "always", {
			"null": "always"
		}],
		"guard-for-in": "error",
		"max-classes-per-file": ["error", 1],
		"no-alert": "error",
		"no-caller": "error",
		"no-case-declarations": "error",
		"no-div-regex": "error",
		"no-else-return": ["error", {
			"allowElseIf": true
		}],
		"no-empty-function": ["off", {								// Disabled for concise Typescript constructors
			"allow": []
		}],
		"no-empty-pattern": "error",
		"no-eq-null": "error",
		"no-eval": ["error", {
			"allowIndirect": false
		}],
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-label": "error",
		"no-fallthrough": ["error", {
			"commentPattern": ""
		}],
		"no-floating-decimal": "error",
		"no-global-assign": ["error", {
			"exceptions": []
		}],
		"no-implicit-coercion": ["error", {
			"boolean": true,
			"number": true,
			"string": true,
			"allow": []
		}],
		"no-implicit-globals": "error",
		"no-implied-eval": "error",
		"no-invalid-this": "error",
		"no-iterator": "error",
		"no-labels": ["error", {
			"allowLoop": false,
			"allowSwitch": false
		}],
		"no-lone-blocks": "error",
		"no-loop-func": "error",
		"no-magic-numbers": ["error", {
			"ignore": [-1, 0, 1],
			"ignoreArrayIndexes": true,
			"enforceConst": true,
			"detectObjects": false
		}],
		"no-multi-spaces": ["error", {
			"exceptions": {
				"BinaryExpression": true,
				"Property": false,
				"VariableDeclaration": false,
				"ImportDeclaration": false
			},
			"ignoreEOLComments": false
		}],
		"no-multi-str": "error",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-wrappers": "error",
		"no-octal": "error",
		"no-octal-escape": "error",
		"no-param-reassign": ["error", {
			"props": false
		}],
		"no-proto": "error",
		"no-redeclare": ["error", {
			"builtinGlobals": true
		}],
		"no-restricted-properties": "off",							// Not using
		"no-return-assign": ["error", "except-parens"],
		"no-return-await": "error",
		"no-script-url": "error",
		"no-self-assign": ["error", {
			"props": true
		}],
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-throw-literal": "error",
		"no-unmodified-loop-condition": "error",
		"no-unused-expressions": ["error", {
			"allowShortCircuit": false,
			"allowTernary": false,
			"allowTaggedTemplates": false
		}],
		"no-unused-labels": "error",
		"no-useless-call": "error",
		"no-useless-concat": "error",
		"no-useless-escape": "error",
		"no-useless-return": "error",
		"no-void": "error",
		"no-warning-comments": ["error", {
			"terms": ["todo"],
			"location": "anywhere"
		}],
		"no-with": "error",
		"prefer-promise-reject-errors": ["error", {
			"allowEmptyReject": false
		}],
		"radix": ["error", "as-needed"],
		"require-await": "error",
		"vars-on-top": "error",
		"wrap-iife": ["error", "inside", {
			"functionPrototypeMethods": true
		}],
		"yoda": ["error", "always", {
			"exceptRange": false,
			"onlyEquality": true
		}],

		// Strict mode
		"strict": ["error", "safe"],

		// Variables
		"init-declarations": "off",											// Not using
		"no-delete-var": "error",
		"no-label-var": "error",
		"no-restricted-globals": "off",									// Not using
		"no-shadow": ["error", {
			"builtinGlobals": false,
			"hoist": "all",
			"allow": []
		}],
		"no-shadow-restricted-names": "error",
		"no-undef": ["off", {														// Disabled for Typescript private class properties
			"typeof": true
		}],
		"no-undef-init": "error",
		"no-undefined": "error",
		"no-unused-vars": ["off", {											// Disabled for Typescript shorthand constructor params
			"vars": "all",
			"varsIgnorePattern": "",
			"args": "after-used",
			"ignoreRestSiblings": false,
			"argsIgnorePattern": "",
			"caughtErrors": "all",
			"caughtErrorsIgnorePattern": ""
		}],
		"no-use-before-define": ["error", {
			"classes": true,
			"functions": true,
			"variables": true
		}],

		// Node.js - all disabled
		"callback-return": "off",
		"global-require": "off",
		"handle-callback-err": "off",
		"no-buffer-constructor": "off",
		"no-mixed-requires": "off",
		"no-new-require": "off",
		"no-path-concat": "off",
		"no-process-env": "error",
		"no-process-exit": "off",
		"no-restricted-modules": ["off", {
			"paths": [],
			"patterns": []
		}],
		"no-sync": ["off", {
			"allowAtRootLevel":	false
		}],

		// Stylistic issues
		"array-bracket-newline": ["error", "consistent"],
		"array-bracket-spacing": ["error", "never", {
			"singleValue": false,
			"objectsInArrays": false,
			"arraysInArrays": false
		}],
		"array-element-newline": ["off", 	{							// Not using
			"multiline": true,
			"minItems": null
		}],
		"block-spacing": ["error", "never"],
		"brace-style": ["error", "1tbs", {
			"allowSingleLine": false
		}],
		"camelcase": ["error", {
			"properties": "never",
			"ignoreDestructuring": false
		}],
		"capitalized-comments": ["error", "always", {
			"line": {
				"ignorePattern": "",
				"ignoreInlineComments": false,
				"ignoreConsecutiveComments": true
			},
			"block": {
				"ignorePattern": "",
				"ignoreInlineComments": false,
				"ignoreConsecutiveComments": true
			}
		}],
		"comma-dangle": ["error", {
			"arrays": "never",
			"objects": "never",
			"imports": "never",
			"exports": "never",
			"functions": "never"
		}],
		"comma-spacing": ["error", {
			"before": false,
			"after": true
		}],
		"comma-style": ["error", "last", {
			"exceptions": {
				"ArrayExpression": false,
				"ObjectExpression": false,
				"VariableDeclaration": false
			}
		}],
		"computed-property-spacing": ["error", "never"],
		"consistent-this": ["error", "self"],
		"eol-last": ["off", "always"],										// Not using
		"func-call-spacing": ["error", "never"],
		"func-name-matching": ["error", "always", {
			"considerPropertyDescriptor": false,
			"includeCommonJSModuleExports": true
		}],
		"func-names": ["error", "always"],
		"func-style": ["error", "declaration", {
			"allowArrowFunctions": false
		}],
		"function-paren-newline": ["error", "never"],
		"id-blacklist": "error",
		"id-length": ["error", {
			"min": 1,
			"max": 50,
			"properties": "always",
			"exceptions": []
		}],
		"id-match": ["off", "^[a-z]+([A-Z][a-z]+)*$", {	// Not using (camelCase identifiers only)
			"properties": false
		}],
		"implicit-arrow-linebreak": ["error", "beside"],
		"indent": ["error", "tab", {
			"SwitchCase": 1,
			"VariableDeclarator": {
				"var": 2,
				"let": 2	,
				"const": 3
			},
			"outerIIFEBody": 1,
			"MemberExpression": 1,
			"FunctionDeclaration": {
				"parameters": "first",
				"body": 1
			},
			"FunctionExpression": {
				"parameters": "first",
				"body": 1
			},
			"CallExpression": {
				"arguments": 1
			},
			"ArrayExpression": 1,
			"ObjectExpression": 1,
			"ImportDeclaration": 1,
			"flatTernaryExpressions": false,
			"ignoredNodes": [],
			"ignoreComments": false
		}],
		"jsx-quotes": ["error", "prefer-double"],
		"key-spacing": ["error", {
			"singleLine": {
				"beforeColon": false,
				"afterColon": true,
				"mode": "strict"
			},
			"multiLine": {
				"beforeColon": false,
				"afterColon": true,
				"mode": "strict"
			}
		}],
		"keyword-spacing": ["error", {
			"after": true,
			"before": true,
			"overrides": {}
		}],
		"line-comment-position": ["error", {
			"position": "above",
			"ignorePattern": "",
			"applyDefaultIgnorePatterns": true
		}],
		"linebreak-style": ["error", "unix"],
		"lines-around-comment": ["error", {
			"beforeBlockComment": true,
			"afterBlockComment": false,
			"beforeLineComment": true,
			"afterLineComment": false,
			"allowBlockStart": true,
			"allowBlockEnd": true,
			"allowObjectStart": true,
			"allowObjectEnd": true,
			"allowArrayStart": true,
			"allowArrayEnd": true,
			"allowClassStart": true,
			"allowClassEnd": true,
			"ignorePattern": "",
			"applyDefaultIgnorePatterns": true
		}],
		"lines-between-class-members": ["error", "always", {
			"exceptAfterSingleLine": false
		}],
		"max-depth": ["off", {													// Not using
			"max": 4
		}],
		"max-len": ["off", {														// Not using
			"code": 80,
			"tabWidth": 2,
			"comments": 80,
			"ignorePattern": "",
			"ignoreComments": false,
			"ignoreTrailingComments": false,
			"ignoreUrls": false,
			"ignoreStrings": false,
			"ignoreTemplateLiterals": false,
			"ignoreRegExpLiterals": false
		}],
		"max-lines": ["off", {													// Not using
			"max": 300,
			"skipBlankLines": true,
			"skipComments": true
		}],
		"max-lines-per-function": ["off", {							// Not using
			"max": 50,
			"skipBlankLines": false,
			"skipComments": false,
			"IIFEs": false
		}],
		"max-nested-callbacks": ["error", {
			"max": 10
		}],
		"max-params": ["off", {													// Not using
			"max": 3
		}],
		"max-statements": ["off",												// Not using
			{
				"max": 10
			},
			{
				"ignoreTopLevelFunctions": false
			}
		],
		"max-statements-per-line": ["error", {
			"max": 1
		}],
		"multiline-comment-style": ["error", "starred-block"],
		"multiline-ternary": ["error", "never"],
		"new-cap": ["error", {
			"newIsCap": true,
			"capIsNew": true,
			"newIsCapExceptions": [],
			"newIsCapExceptionPattern": "",
			"capIsNewExceptions": [],
			"capIsNewExceptionPattern": ""
		}],
		"new-parens": "error",
		"newline-per-chained-call": ["error", {
			"ignoreChainWithDepth": 4
		}],
		"no-array-constructor": "error",
		"no-bitwise": ["error", {
			"allow": [],
			"int32Hint": false
		}],
		"no-continue": "error",
		"no-inline-comments": "error",
		"no-lonely-if": "error",
		"no-mixed-operators": ["error", {
			"allowSamePrecedence": true
		}],
		"no-mixed-spaces-and-tabs": "error",
		"no-multi-assign": "error",
		"no-multiple-empty-lines": ["error", {
			"max": 1,
			"maxBOF": 1,
			"maxEOF": 1
		}],
		"no-negated-condition": "error",
		"no-nested-ternary": "off",											// Not using (sort helpers)
		"no-new-object": "error",
		"no-plusplus": ["off", {												// Not using
			"allowForLoopAfterthoughts": true
		}],
		"no-restricted-syntax": ["error", "WithStatement"],
		"no-tabs": "off",																// Not using
		"no-ternary": "off",														// Not using
		"no-trailing-spaces": ["error", {
			"skipBlankLines": false,
			"ignoreComments": false
		}],
		"no-underscore-dangle": ["error", {
			"allow": [],
			"allowAfterThis": false,
			"allowAfterSuper": false,
			"enforceInMethodNames": false
		}],
		"no-unneeded-ternary": "error",
		"no-whitespace-before-property": "error",
		"nonblock-statement-body-position": ["error", "beside", {
			"overrides": {}
		}],
		"object-curly-newline": ["off", {								// Not using
			"ObjectExpression": {
				"multiline": true,
				"consistent": true
			},
			"ObjectPattern": {
				"multiline": true,
				"consistent": true
			},
			"ImportDeclaration": {
				"multiline": true,
				"minProperties": 2,
				"consistent": true
			},
			"ExportDeclaration": {
				"multiline": true,
				"consistent": true
			}
		}],
		"object-curly-spacing": ["error", "never", {
			"objectsInObjects": false
		}],
		"object-property-newline": ["error", {
			"allowAllPropertiesOnSameLine": true
		}],
		"one-var": ["error", {
			"var": "always",
			"let": "always",
			"const": "always",
			"separateRequires": true
		}],
		"one-var-declaration-per-line": ["error", "initializations"],
		"operator-assignment": ["error", "always"],
		"operator-linebreak": ["error", "after", {
			"overrides": {}
		}],
		"padded-blocks": ["error", {
			"blocks": "never",
			"classes": "never",
			"switches": "never"
		}],
		"padding-line-between-statements": ["error", {
			"blankLine": "any",
			"prev": "*",
			"next": "*"
		}],
		"prefer-object-spread": "error",
		"quote-props": ["error", "as-needed", {
			"keywords": false,
			"unnecessary": true,
			"numbers": false
		}],
		"quotes": ["error", "double", {
			"avoidEscape": false,
			"allowTemplateLiterals": false
		}],
		"require-jsdoc": ["off", {											// Not using
			"require": {
				"FunctionDeclaration": true,
				"MethodDefinition": false,
				"ClassDeclaration": false,
				"ArrowFunctionExpression": false,
				"FunctionExpression": false
			}
		}],
		"semi": ["error", "always", {
			"omitLastInOneLineBlock": false
		}],
		"semi-spacing": ["error", {
			"before": false,
			"after": true
		}],
		"semi-style": ["error", "last"],
		"sort-keys": ["off", "asc", {
			"caseSensitive": true,
			"natural": true
		}],
		"sort-vars": ["off", {													// Not using
			"ignoreCase": false
		}],
		"space-before-blocks": ["error", {
			"functions": "always",
			"keywords": "always",
			"classes": "always"
		}],
		"space-before-function-paren": ["error", {
			"anonymous": "never",
			"named": "never",
			"asyncArrow": "always"
		}],
		"space-in-parens": ["error", "never", {
			"exceptions": []
		}],
		"space-infix-ops": ["error", {
			"int32Hint": false
		}],
		"space-unary-ops": ["error", {
			"words": true,
			"nonwords": false,
			"overrides": {}
		}],
		"spaced-comment": ["error", "always", {
			"line": {
				"exceptions": [],
				"markers": []
			},
			"block": {
				"exceptions": [],
				"markers": [],
				"balanced": true
			}
		}],
		"switch-colon-spacing": ["error", {
			"after": true,
			"before": false
		}],
		"template-tag-spacing": ["error", "never"],
		"unicode-bom": ["error", "never"],
		"wrap-regex": "error",

		// ECMAScript 6
		"arrow-body-style": ["error", "as-needed", {
			"requireReturnForObjectLiteral": false
		}],
		"arrow-parens": ["error", "as-needed", {
			"requireForBlockBody": false
		}],
		"arrow-spacing": ["error", {
			"before": true,
			"after": true
		}],
		"constructor-super": "error",
		"generator-star-spacing": ["error", {
			"before": true,
			"after": false,
			"named": {
				"before": true,
				"after": false
			},
			"anonymous": {
				"before": true,
				"after": false
			},
			"method": {
				"before": true,
				"after": false
			}
		}],
		"no-class-assign": "error",
		"no-confusing-arrow": ["error", {
			"allowParens": true
		}],
		"no-const-assign": "error",
		"no-dupe-class-members": "error",
		"no-duplicate-imports": ["error", {
			"includeExports": true
		}],
		"no-new-symbol": "error",
		"no-restricted-imports": ["off", {
			"paths": [],
			"patterns": []
		}],
		"no-this-before-super": "error",
		"no-useless-computed-key": "error",
		"no-useless-constructor": "off",								// Disabled for Typscript concise constructors
		"no-useless-rename": ["error", {
			"ignoreDestructuring": false,
			"ignoreImport": false,
			"ignoreExport": false
		}],
		"no-var": "error",
		"object-shorthand": ["error", "always", {
			"avoidQuotes": false,
			"ignoreConstructors": false,
			"avoidExplicitReturnArrows": true
		}],
		"prefer-arrow-callback": ["error", {
			"allowNamedFunctions": false,
			"allowUnboundThis": false
		}],
		"prefer-const": ["error", {
			"destructuring": "any",
			"ignoreReadBeforeAssign": false
		}],
		"prefer-destructuring": ["error", {
			"VariableDeclarator": {
				"array": true,
				"object": true
			},
			"AssignmentExpression": {
				"array": true,
				"object": true
			}
		}, {
			"enforceForRenamedProperties": false
		}],
		"prefer-numeric-literals": "error",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		"require-yield": "error",
		"rest-spread-spacing": ["error", "never"],
		"sort-imports": ["error", {
			"ignoreCase": false,
			"ignoreMemberSort": false,
			"memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
		}],
		"symbol-description": "error",
		"template-curly-spacing": ["error", "never"],
		"yield-star-spacing": ["error", {
			"before": true,
			"after": false
		}],

		// Deprecated
		"indent-legacy": "off",													// Not using
		"lines-around-directive": ["error", {
			"before": "always",
			"after": "always"
		}],
		"newline-after-var": ["error", "always"],
		"newline-before-return": "error",
		"no-catch-shadow": "off",												// Not using (IE8 not supported)

		// Typescript
		"typescript/adjacent-overload-signatures": "error",
		"typescript/class-name-casing": "error",
		"typescript/explicit-function-return-type": "error",
		"typescript/explicit-member-accessibility": "error",
		"typescript/interface-name-prefix": ["error", "never"],
		"typescript/member-delimiter-style": ["error", {
			"delimiter": "semi",
			"requireLast": true,
			"ignoreSingleLine": true,
			"overrides": {
				"interface": {},
				"typeLiteral": {}
			}
		}],
		"typescript/member-naming": "off",
		"typescript/member-ordering": "error",
		"typescript/no-angle-bracket-type-assertion": "error",
		"typescript/no-array-constructor": "error",
		"typescript/no-empty-interface": "error",
		"typescript/no-explicit-any": "error",
		"typescript/no-inferrable-types": ["error", {
			"ignoreProperties": false,
			"ignoreParameters": false
		}],
		"typescript/no-namespace": ["error", {
			"allowDeclarations": false,
			"allowDefinitionFiles": false
		}],
		"typescript/no-non-null-assertion": "error",
		"typescript/no-parameter-properties": ["off", {
			"allows": [
				"readonly",
				"private",
				"protected",
				"public",
				"private readonly",
				"protected readonly",
				"public readonly"
			]
		}],
		"typescript/no-triple-slash-reference": "error",
		"typescript/no-type-alias": ["off", {						// Temporarily disabled (see https://github.com/nzakas/eslint-plugin-typescript/pull/137)
			"allowAliases": "in-unions-and-intersections",
			"allowCallbacks": true,
			"allowLiterals": "in-unions-and-intersections",
			"allowMappedTypes": "in-unions-and-intersections"
		}],
		"typescript/no-unused-vars": "error",
		"typescript/no-use-before-define": ["error", {
			"functions": true,
			"classes": true,
			"variables": true,
			"typedefs": true
		}],
		"typescript/no-var-requires": "off",						// Disabled until node supports ES modules
		"typescript/prefer-namespace-keyword": "error",
		"typescript/type-annotation-spacing": ["error", {
			"before": false,
			"after": true,
			"overrides": {
				"colon": {
					"before": false,
					"after": true
				},
				"arrow": {
					"before": true,
					"after": true
				}
			}
		}]
	}
};