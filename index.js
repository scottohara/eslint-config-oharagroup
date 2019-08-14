module.exports = {
	"parserOptions": {
		"ecmaVersion": 2019,
		"sourceType": "module",
		"ecmaFeatures": {
			"globalReturn": false,
			"impliedStrict": true,
			"jsx": false																	// Not using (React/JSX)
		},
		"project": "./tsconfig.json",
		"tsconfigRootDir": ".",
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
	"parser": "@typescript-eslint/parser",
	"plugins": [
		"@typescript-eslint"
	],
	"rules": {
		// Possible errors
		"for-direction": "error",
		"getter-return": ["error", {
			"allowImplicit": false
		}],
		"no-async-promise-executor": "error",
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
		"no-extra-parens": ["off", "all", {							// Disabled in favour of @typescript-eslint/no-extra-parens rule
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
		"no-misleading-character-class": "error",
		"no-obj-calls": "error",
		"no-prototype-builtins": "error",
		"no-regex-spaces": "error",
		"no-sparse-arrays": "error",
		"no-template-curly-in-string": "error",
		"no-unexpected-multiline": "error",
		"no-unreachable": "error",
		"no-unsafe-finally": "error",
		"no-unsafe-negation": "error",
		"require-atomic-updates": "error",
		"use-isnan": "error",
		"valid-typeof": ["error", {
			"requireStringLiterals": true
		}],

		// Best practices
		"accessor-pairs": ["error", {
			"setWithoutGet": true,
			"getWithoutSet": false
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
		"no-empty-function": ["off", {									// Disabled in favour of @typescript-eslint/no-empty-function
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
		"no-magic-numbers": ["off", {										// Disabled in favour of @typescript-eslint/no-magic-numbers rule
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
		"no-useless-catch": "error",
		"no-useless-concat": "error",
		"no-useless-escape": "error",
		"no-useless-return": "error",
		"no-void": "error",
		"no-warning-comments": ["error", {
			"terms": ["todo"],
			"location": "anywhere"
		}],
		"no-with": "error",
		"prefer-named-capture-group": "error",
		"prefer-promise-reject-errors": ["error", {
			"allowEmptyReject": false
		}],
		"radix": ["error", "as-needed"],
		"require-await": "off",													// Disabled in favour of @typescript-eslint/require-await
		"require-unicode-regexp": "error",
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
		"no-undef": ["error", {
			"typeof": true
		}],
		"no-undef-init": "error",
		"no-undefined": "off",													// Not using
		"no-unused-vars": ["error", {
			"vars": "all",
			"varsIgnorePattern": "",
			"args": "after-used",
			"ignoreRestSiblings": false,
			"argsIgnorePattern": "",
			"caughtErrors": "all",
			"caughtErrorsIgnorePattern": "^_"
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
			"ignoreDestructuring": false,
			"allow": []
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
		"func-call-spacing": ["off", "never"],						// Disabled in favour of @typescript-eslint/func-call-spacing rule
		"func-name-matching": ["error", "always", {
			"considerPropertyDescriptor": false,
			"includeCommonJSModuleExports": true
		}],
		"func-names": ["error", "always", {
			"generators": "always"
		}],
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
			"properties": false,
			"onlyDeclarations": false,
			"ignoreDestructuring": false
		}],
		"implicit-arrow-linebreak": ["error", "beside"],
		"indent": ["off", "tab", {											// Disabled in favour of @typescript-eslint/indent rule
			"SwitchCase": 1,
			"VariableDeclarator": {
				"var": 2,
				"let": 2,
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
		"new-parens": ["error", "always"],
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
		"no-tabs": ["off", {														// Not using
			"allowIndentationTab": false
		}],
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
		"object-curly-spacing": ["error", "always", {
			"arraysInObjects": true,
			"objectsInObjects": true
		}],
		"object-property-newline": ["error", {
			"allowAllPropertiesOnSameLine": true
		}],
		"one-var": ["error", {
			"var": "always",
			"let": "always",
			"const": "consecutive",
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
		}, {
			"allowSingleLineBlocks": true
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
		"semi": ["off", "always", {											// Disabled in favour of @typescript-eslint/semi rule
			"omitLastInOneLineBlock": false
		}],
		"semi-spacing": ["error", {
			"before": false,
			"after": true
		}],
		"semi-style": ["error", "last"],
		"sort-keys": ["off", "asc", {
			"caseSensitive": true,
			"minKeys": 2,
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
		"no-useless-constructor": "off",								// Disabled in favour of @typescript-eslint/no-useless-constructor
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
			"ignoreDeclarationSort": false,
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
		"indent-legacy": "off",
		"lines-around-directive": ["error", {
			"before": "always",
			"after": "always"
		}],
		"newline-after-var": ["error", "always"],
		"newline-before-return": "error",
		"no-catch-shadow": "off",
		"require-jsdoc": ["off", {
			"require": {
				"FunctionDeclaration": true,
				"MethodDefinition": false,
				"ClassDeclaration": false,
				"ArrowFunctionExpression": false,
				"FunctionExpression": false
			}
		}],
		"valid-jsdoc": "off",

		// Typescript
		"@typescript-eslint/adjacent-overload-signatures": "error",
		"@typescript-eslint/array-type": ["error", "array"],
		"@typescript-eslint/await-thenable": "error",
		"@typescript-eslint/ban-ts-ignore": "error",
		"@typescript-eslint/ban-types": ["error", {
			"types": {
				"Array": "Use [] instead",
				"Object": "Use {} instead",
				"String": {
					"message": "Use string instead",
					"fixWith": "string"
				}
			}
		}],
		"@typescript-eslint/camelcase": ["error", {
			"properties": "never",
			"ignoreDestructuring": false,
			"allow": []
		}],
		"@typescript-eslint/class-name-casing": "error",
		"@typescript-eslint/consistent-type-definitions": ["error", "interface"],
		"@typescript-eslint/explicit-function-return-type": ["error", {
			"allowExpressions": false,
			"allowTypedFunctionExpressions": false
		}],
		"@typescript-eslint/explicit-member-accessibility": ["error", {
			"accessibility": "explicit",
			"overrides": {
				"accessors": "explicit",
				"constructors": "explicit",
				"methods": "explicit",
				"properties": "explicit",
				"parameterProperties": "explicit"
			}
		}],
		"@typescript-eslint/func-call-spacing": ["error", "never"],
		"@typescript-eslint/generic-type-naming": "off",	// not using
		"@typescript-eslint/indent": ["error", "tab", {
			"SwitchCase": 1,
			"VariableDeclarator": {
				"var": 2,
				"let": 2,
				"const": 3
			},
			"outerIIFEBody": 1,
			"MemberExpression": 1,
			"FunctionDeclaration": {
				"parameters": 5,														// Can't use 'first' with tabs
				"body": 1
			},
			"FunctionExpression": {
				"parameters": 5,														// Can't use 'first' with tabs
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
		"@typescript-eslint/interface-name-prefix": ["error", "never"],
		"@typescript-eslint/member-delimiter-style": ["error", {
			"multiline": {
				"delimiter": "semi",
				"requireLast": true,
			},
			"singleline": {
				"delimiter": "semi",
				"requireLast": true,
			},
			"overrides": {
				"interface": {},
				"typeLiteral": {}
			}
		}],
		"@typescript-eslint/member-naming": ["off",	{			// not using
			"public": "",
			"protected": "",
			"private": ""
		}],
		"@typescript-eslint/member-ordering": "error",
		"@typescript-eslint/no-angle-bracket-type-assertion": "error",
		"@typescript-eslint/no-array-constructor": "error",
		"@typescript-eslint/no-empty-function": ["error", {
			"allow": []
		}],
		"@typescript-eslint/no-empty-interface": ["error", {
			"allowSingleExtends": false
		}],
		"@typescript-eslint/no-explicit-any": ["error", {
			"fixToUnknown": false,
			"ignoreRestArgs": false
		}],
		"@typescript-eslint/no-extra-parens": ["error", "all", {
			"conditionalAssign": true,
			"returnAssign": false,													// Prevent conflict with no-return-assign
			"nestedBinaryExpressions": false,
			"ignoreJSX": "none",
			"enforceForArrowConditionals": false
		}],
		"@typescript-eslint/no-extraneous-class": ["error",	{
			"allowConstructorOnly": true,										// Allows for angularJS ControllerTest
			"allowEmpty": false,
			"allowStaticOnly": true													// Allows for angularJS directives, filters etc.
		}],
		"@typescript-eslint/no-floating-promises": "error",
		"@typescript-eslint/no-for-in-array": "error",
		"@typescript-eslint/no-inferrable-types": ["error", {
			"ignoreProperties": false,
			"ignoreParameters": false
		}],
		"@typescript-eslint/no-magic-numbers": ["error", {
			"ignore": [-1, 0, 1],
			"ignoreArrayIndexes": true,
			"enforceConst": true,
			"detectObjects": false,
			"ignoreNumericLiteralTypes": true,
			"ignoreEnums": false
		}],
		"@typescript-eslint/no-misused-new": "error",
		"@typescript-eslint/no-misused-promises": ["error", {
			"checksConditionals": true,
			"checksVoidReturn": true
		}],
		"@typescript-eslint/no-namespace": ["error", {
			"allowDeclarations": false,
			"allowDefinitionFiles": false
		}],
		"@typescript-eslint/no-non-null-assertion": "error",
		"@typescript-eslint/no-object-literal-type-assertion": ["error", {
			"allowAsParameter": false
		}],
		"@typescript-eslint/no-parameter-properties": ["off", {	// not using
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
		"@typescript-eslint/no-require-imports": "off",		// Disabled until node supports ES modules
		"@typescript-eslint/no-this-alias": ["error", {
			"allowDestructuring": false,
			"allowedNames": ["self"]
		}],
		"@typescript-eslint/no-triple-slash-reference": "error",
		"@typescript-eslint/no-type-alias": ["error", {
			"allowAliases": "in-unions-and-intersections",
			"allowCallbacks": "always",
			"allowLiterals": "in-unions-and-intersections",
			"allowMappedTypes": "in-unions-and-intersections"
		}],
		"@typescript-eslint/no-unnecessary-qualifier": "error",
		"@typescript-eslint/no-unnecessary-type-assertion": ["error", {
			"typesToIgnore": []
		}],
		"@typescript-eslint/no-unused-vars": ["error", {
			"vars": "all",
			"varsIgnorePattern": "",
			"args": "after-used",
			"ignoreRestSiblings": false,
			"argsIgnorePattern": "",
			"caughtErrors": "all",
			"caughtErrorsIgnorePattern": "^_"
		}],
		"@typescript-eslint/no-use-before-define": ["error", {
			"functions": true,
			"classes": true,
			"variables": true,
			"typedefs": true
		}],
		"@typescript-eslint/no-useless-constructor": "error",
		"@typescript-eslint/no-var-requires": "off",			// Disabled until node supports ES modules
		"@typescript-eslint/prefer-for-of": "error",
		"@typescript-eslint/prefer-function-type": "error",
		"@typescript-eslint/prefer-includes": "error",
		"@typescript-eslint/prefer-interface": "error",
		"@typescript-eslint/prefer-namespace-keyword": "error",
		"@typescript-eslint/prefer-readonly": ["error", {
			"onlyInlineLambdas": false
		}],
		"@typescript-eslint/prefer-regexp-exec": "error",
		"@typescript-eslint/prefer-string-starts-ends-with": "error",
		"@typescript-eslint/promise-function-async": ["off", {					// Waiting for https://github.com/typescript-eslint/typescript-eslint/pull/820
			"allowAny": true,
			"allowedPromiseNames": [],
			"checkArrowFunctions": true,
			"checkFunctionDeclarations": true,
			"checkFunctionExpressions": true,
			"checkMethodDeclarations": true
		}],
		"@typescript-eslint/require-array-sort-compare": "error",
		"@typescript-eslint/require-await": "off",											// Waiting for https://github.com/typescript-eslint/typescript-eslint/pull/826
		"@typescript-eslint/restrict-plus-operands": "error",
		"@typescript-eslint/semi": ["error", "always", {
			"omitLastInOneLineBlock": false
		}],
		"@typescript-eslint/strict-boolean-expressions": "error",
		"@typescript-eslint/triple-slash-reference": ["error", {
			"path": "never",
			"types": "never",
			"lib": "never"
		}],
		"@typescript-eslint/type-annotation-spacing": ["error", {
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
		}],
		"@typescript-eslint/unbound-method": ["off", {		// Waiting for https://github.com/typescript-eslint/typescript-eslint/issues/692
			"ignoreStatic": true														// Allows for angularJS directtive/filter static factory methods
		}],
		"@typescript-eslint/unified-signatures": "error"
	}
};