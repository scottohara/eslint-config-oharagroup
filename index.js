module.exports = {
	"parserOptions": {
		"ecmaVersion": 2021,
		"sourceType": "module",
		"ecmaFeatures": {
			"globalReturn": false,
			"impliedStrict": true,
			"jsx": false																	// Not using (React/JSX)
		},
		"project": "./tsconfig.eslint.json",
		"tsconfigRootDir": ".",
	},
	"env": {
		"browser": true,
		"node": true,
		"commonjs": false,
		"shared-node-browser": true,
		"es6": true,
		"es2017": true,
		"es2020": true,
		"es2021": true,
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
		"no-dupe-else-if": "error",
		"no-dupe-keys": "error",
		"no-duplicate-case": "error",
		"no-empty": ["error", {
			"allowEmptyCatch": false
		}],
		"no-empty-character-class": "error",
		"no-ex-assign": "error",
		"no-extra-boolean-cast": ["error", {
			"enforceForLogicalOperands": true
		}],
		"no-extra-parens": ["off", "all", {							// Disabled in favour of @typescript-eslint/no-extra-parens rule
			"conditionalAssign": true,
			"returnAssign": false,												// Prevent conflict with no-return-assign
			"nestedBinaryExpressions": false,
			"ignoreJSX": "none",
			"enforceForArrowConditionals": false,
			"enforceForSequenceExpressions": false,
			"enforceForNewInMemberExpressions": true,
			"enforceForFunctionPrototypeMethods": true
		}],
		"no-extra-semi": "off",													// Disabled in favour of @typescript-eslint/no-extra-semi rule
		"no-func-assign": "error",
		"no-import-assign": "error",
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
		"no-loss-of-precision": "off",									// Disabled in favour of @typescript-eslint/no-loss-of-precision rule
		"no-misleading-character-class": "error",
		"no-obj-calls": "error",
		"no-promise-executor-return": "error",
		"no-prototype-builtins": "error",
		"no-regex-spaces": "error",
		"no-setter-return": "error",
		"no-sparse-arrays": "error",
		"no-template-curly-in-string": "error",
		"no-unexpected-multiline": "error",
		"no-unreachable": "error",
		"no-unreachable-loop": ["error", {
			"ignore": []
		}],
		"no-unsafe-finally": "error",
		"no-unsafe-negation": ["error", {
			"enforceForOrderingRelations": true
		}],
		"no-unsafe-optional-chaining": ["error", {
			"disallowArithmeticOperators": true
		}],
		"no-useless-backreference": "error",
		"require-atomic-updates": "error",
		"use-isnan": ["error", {
			"enforceForSwitchCase": true,
			"enforceForIndexOf": true
		}],
		"valid-typeof": ["error", {
			"requireStringLiterals": true
		}],

		// Best practices
		"accessor-pairs": ["error", {
			"setWithoutGet": true,
			"getWithoutSet": false,
			"enforceForClassMembers": true
		}],
		"array-callback-return": ["error", {
			"allowImplicit": false,
			"checkForEach": false													// Allow concise arrow function bodies in forEach
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
		"default-case-last": "error",
		"default-param-last": "off",										// Disabled in favour of @typescript-eslint/default-param-last rule
		"dot-location": ["error", "property"],
		"dot-notation": ["off", {												// Disabled in favour of @typescript-eslint/dot-notation rule
			"allowKeywords": true
		}],
		"eqeqeq": ["error", "always", {
			"null": "always"
		}],
		"grouped-accessor-pairs": ["error", "getBeforeSet"],
		"guard-for-in": "error",
		"max-classes-per-file": ["error", 1],
		"no-alert": "error",
		"no-caller": "error",
		"no-case-declarations": "error",
		"no-constructor-return": "off",									// Not using
		"no-div-regex": "error",
		"no-else-return": ["error", {
			"allowElseIf": true
		}],
		"no-empty-function": ["off", {									// Disabled in favour of @typescript-eslint/no-empty-function rule
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
			"disallowTemplateShorthand": true,
			"allow": []
		}],
		"no-implicit-globals": ["error", {
			"lexicalBindings": true
		}],
		"no-implied-eval": "off",												// Disabled in favour of @typescript-eslint/no-implied-eval rule
		"no-invalid-this": ["off", {										// Disabled in favour of @typescript-eslint/no-invalid-this rule
			"capIsConstructor": true
		}],
		"no-iterator": "error",
		"no-labels": ["error", {
			"allowLoop": false,
			"allowSwitch": false
		}],
		"no-lone-blocks": "error",
		"no-loop-func": "off",													// Disabled in favour of @typescript-eslint/no-loop-func rule
		"no-magic-numbers": ["off", {										// Disabled in favour of @typescript-eslint/no-magic-numbers rule
			"ignore": [-1, 0, 1],
			"ignoreArrayIndexes": true,
			"ignoreDefaultValues": true,
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
		"no-nonoctal-decimal-escape": "error",
		"no-octal": "error",
		"no-octal-escape": "error",
		"no-param-reassign": ["error", {
			"props": false
		}],
		"no-proto": "error",
		"no-redeclare": ["off", {												// Disabled in favour of @typescript-eslint/no-redeclare rule
			"builtinGlobals": true
		}],
		"no-restricted-properties": "off",							// Not using
		"no-return-assign": ["error", "except-parens"],
		"no-return-await": "off",												// Disabled in favour of @typescript-eslint/return-await rule
		"no-script-url": "error",
		"no-self-assign": ["error", {
			"props": true
		}],
		"no-self-compare": "error",
		"no-sequences": ["error", {
			"allowInParentheses": false
		}],
		"no-throw-literal": "off",											// Disabled in favour of @typescript-eslint/no-throw-literal rule
		"no-unmodified-loop-condition": "error",
		"no-unused-expressions": ["off", {							// Disabled in favour of @typescript-eslint/no-unused-expressions rule
			"allowShortCircuit": false,
			"allowTernary": false,
			"allowTaggedTemplates": false,
			"enforceForJSX": true
		}],
		"no-unused-labels": "error",
		"no-useless-call": "error",
		"no-useless-catch": "error",
		"no-useless-concat": "error",
		"no-useless-escape": "error",
		"no-useless-return": "error",
		"no-void": ["error", {
			"allowAsStatement": false
		}],
		"no-warning-comments": ["error", {
			"terms": ["todo"],
			"location": "anywhere"
		}],
		"no-with": "error",
		"prefer-named-capture-group": "error",
		"prefer-promise-reject-errors": ["error", {
			"allowEmptyReject": false
		}],
		"prefer-regex-literals": ["error", {
			"disallowRedundantWrapping": true
		}],
		"radix": ["error", "as-needed"],
		"require-await": "off",													// Disabled in favour of @typescript-eslint/require-await rule
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
		"init-declarations": ["off", "never", {					// Disabled in favour of @typescript-eslint/init-declarations rule
			"ignoreForLoopInit": false
		}],
		"no-delete-var": "error",
		"no-label-var": "error",
		"no-restricted-globals": "off",									// Not using
		"no-shadow": ["off", {													// Disabled in favour of @typescript-eslint/no-shadow rule
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
		"no-unused-vars": ["off", {											// Disabled in favour of @typescript-eslint/no-unused-vars rule
			"vars": "all",
			"varsIgnorePattern": "",
			"args": "after-used",
			"ignoreRestSiblings": false,
			"argsIgnorePattern": "",
			"caughtErrors": "all",
			"caughtErrorsIgnorePattern": "^_"
		}],
		"no-use-before-define": ["off", {								// Disabled if favour of @typescript-eslint/no-use-before-define rule
			"classes": true,
			"functions": true,
			"variables": true
		}],

		// Stylistic issues
		"array-bracket-newline": ["error", "consistent"],
		"array-bracket-spacing": ["error", "never", {
			"singleValue": false,
			"objectsInArrays": false,
			"arraysInArrays": false
		}],
		"array-element-newline": ["off", 	{							// Not using
			"ArrayExpression": {
				"multiline": true,
				"minItems": null
			},
			"ArrayPattern": {
				"multiline": true,
				"minItems": null
			}
		}],
		"block-spacing": ["error", "never"],
		"brace-style": ["off", "1tbs", {								// Disabled in favour of @typescript-eslint/brace-style rule
			"allowSingleLine": false
		}],
		"camelcase": ["error", {
			"properties": "never",
			"ignoreDestructuring": false,
			"ignoreImports": false,
			"ignoreGlobals": false,
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
		"comma-dangle": ["off", {												// Disabled in favour of @typescript-eslint/comma-dangle rule
			"arrays": "never",
			"objects": "never",
			"imports": "never",
			"exports": "never",
			"functions": "never"
		}],
		"comma-spacing": ["off", {											// Disabled in favour of @typescript-eslint/comma-spacing rule
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
		"computed-property-spacing": ["error", "never", {
			"enforceForClassMembers": true
		}],
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
		"function-call-argument-newline": ["error", "consistent"],
		"function-paren-newline": ["error", "never"],
		"id-denylist": "error",
		"id-length": ["error", {
			"min": 1,
			"max": 50,
			"properties": "always",
			"exceptions": [],
			"exceptionPatterns": []
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
			"offsetTernaryExpressions": true,
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
		"keyword-spacing": ["off", {										// Disabled in favour of @typescript-eslint/keyword-spacing rule
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
		"lines-between-class-members": ["off", "always", {	// Disabled in favour of @typescript-eslint/lines-between-class-members rule
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
		"no-array-constructor": "off",									// Disabled in favour of @typescript-eslint/no-array-constructor rule
		"no-bitwise": ["error", {
			"allow": [],
			"int32Hint": false
		}],
		"no-continue": "error",
		"no-inline-comments": ["error", {
			"ignorePattern": ""
		}],
		"no-lonely-if": "error",
		"no-mixed-operators": ["error", {
			"groups": [],
			"allowSamePrecedence": true
		}],
		"no-mixed-spaces-and-tabs": "error",
		"no-multi-assign": ["error", {
			"ignoreNonDeclaration": false
		}],
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
			"allowAfterThisConstructor": false,
			"enforceInMethodNames": false,
			"allowFunctionParams": true
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
		"object-curly-spacing": ["off", "always", {			// Disabled in favour of @typescript-eslint/object-curly-spacing rule
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
		"padding-line-between-statements": ["off", {		// Disabled in favour of @typescript-eslint/padding-line-between-statements rule
			"blankLine": "any",
			"prev": "*",
			"next": "*"
		}],
		"prefer-exponentiation-operator": "error",
		"prefer-object-spread": "error",
		"quote-props": ["error", "as-needed", {
			"keywords": false,
			"unnecessary": true,
			"numbers": false
		}],
		"quotes": ["off", "double", {										// Disabled in favour of @typescript-eslint/quotes rule
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
		"space-before-function-paren": ["off", {				// Disabled in favour of @typescript-eslint/space-before-function-paren rule
			"anonymous": "never",
			"named": "never",
			"asyncArrow": "always"
		}],
		"space-in-parens": ["error", "never", {
			"exceptions": []
		}],
		"space-infix-ops": ["off", {										// Disabled in favour of @typescript-eslint/space-infix-ops rule
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
		"no-dupe-class-members": "off",									// Disabled in favour of @typescript-eslint/no-dup-class-members rule
		"no-duplicate-imports": ["off", {								// Disabled in favour of @typescript-eslint/no-duplicate-imports rule
			"includeExports": true
		}],
		"no-new-symbol": "error",
		"no-restricted-exports": ["off", {
			"restrictedNamedExports": []
		}],
		"no-restricted-imports": ["off", {							// Disabled in favour of @typescript-eslint/no-restricted-imports rule
			"paths": [],
			"patterns": []
		}],
		"no-this-before-super": "error",
		"no-useless-computed-key": ["error", {
			"enforceForClassMembers": true
		}],
		"no-useless-constructor": "off",								// Disabled in favour of @typescript-eslint/no-useless-constructor rule
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
			"memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
			"allowSeparatedGroups": false
		}],
		"symbol-description": "error",
		"template-curly-spacing": ["error", "never"],
		"yield-star-spacing": ["error", {
			"before": true,
			"after": false
		}],

		// Deprecated
		"callback-return": "off",
		"global-require": "off",
		"handle-callback-err": "off",
		"indent-legacy": "off",
		"id-blacklist": "error",
		"lines-around-directive": ["error", {
			"before": "always",
			"after": "always"
		}],
		"newline-after-var": ["error", "always"],
		"newline-before-return": "error",
		"no-buffer-constructor": "off",
		"no-catch-shadow": "off",
		"no-mixed-requires": "off",
		"no-new-require": "off",
		"no-path-concat": "off",
		"no-process-env": "off",												// Not using (goes against 12-factor app principles)
		"no-process-exit": "off",
		"no-restricted-modules": ["off", {
			"paths": [],
			"patterns": []
		}],
		"no-sync": ["off", {
			"allowAtRootLevel":	false
		}],
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
		"@typescript-eslint/array-type": ["error", {
			"default": "array",
			"readonly": "array"
		}],
		"@typescript-eslint/await-thenable": "error",
		"@typescript-eslint/ban-ts-comment": ["error", {
			"ts-expect-error": true,
			"ts-ignore": true,
			"ts-nocheck": true,
			"ts-check": "allow-with-description",
			"minimumDescriptionLength": 3
		}],
		"@typescript-eslint/ban-tslint-comment": "error",
		"@typescript-eslint/ban-types": ["error", {
			"types": {
				"Array": "Use [] instead"
			},
			"extendDefaults": true
		}],
		"@typescript-eslint/class-literal-property-style": ["error", "fields"],
		"@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
		"@typescript-eslint/consistent-type-assertions": ["error", {
			"assertionStyle": "as",
			"objectLiteralTypeAssertions": "never"
		}],
		"@typescript-eslint/consistent-type-definitions": ["error", "interface"],
		"@typescript-eslint/consistent-type-imports": ["error", {
			"prefer": "type-imports",
			"disallowTypeAnnotations": false
		}],
		"@typescript-eslint/explicit-function-return-type": ["error", {
			"allowExpressions": false,
			"allowTypedFunctionExpressions": false,
			"allowHigherOrderFunctions": false,
			"allowDirectConstAssertionInArrowFunctions": false,
			"allowConciseArrowFunctionExpressionsStartingWithVoid": false
		}],
		"@typescript-eslint/explicit-member-accessibility": ["error", {
			"accessibility": "explicit",
			"ignoredMethodNames": [],
			"overrides": {
				"accessors": "explicit",
				"constructors": "explicit",
				"methods": "explicit",
				"properties": "explicit",
				"parameterProperties": "explicit"
			}
		}],
		"@typescript-eslint/explicit-module-boundary-types": ["error", {
			"allowArgumentsExplicitlyTypedAsAny": false,
			"allowDirectConstAssertionInArrowFunctions": false,
			"allowedNames": [],
			"allowHigherOrderFunctions": false,
			"allowTypedFunctionExpressions": false
		}],
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
			},
			"multilineDetection": "brackets"
		}],
		"@typescript-eslint/member-ordering": "error",
		"@typescript-eslint/method-signature-style": ["error", "property"],
		"@typescript-eslint/naming-convention": ["off",	// Not using
			{
				"selector": "default",
				"format": ["strictCamelCase"],
				"leadingUnderscore": "forbid",
				"trailingUnderscore": "forbid",
				"prefix": [],
				"suffix": [],
				"modifiers": []
			},
			{
				"selector": "variable",
				"format": ["strictCamelCase", "UPPER_CASE"]
			},
			{
				"selector": "parameter",
				"format": ["strictCamelCase"],
				"leadingUnderscore": "allow"
			},
			{
				"selector": "typeLike",
				"format": ["PascalCase"]
			},
			{
				"selector": "enumMember",
				"format": ["PascalCase"]
			},
			{
				"selector": "property",
				"format": ["strictCamelCase", "UPPER_CASE"],
				"modifiers": ["readonly"]
			}
		],
		"@typescript-eslint/no-base-to-string": ["error", {
			"ignoredTypeNames": []
		}],
		"@typescript-eslint/no-confusing-non-null-assertion": "error",
		"@typescript-eslint/no-confusing-void-expression": ["error", {
			"ignoreArrowShorthand": true,
			"ignoreVoidOperator": false
		}],
		"@typescript-eslint/no-dynamic-delete": "error",
		"@typescript-eslint/no-empty-interface": ["error", {
			"allowSingleExtends": false
		}],
		"@typescript-eslint/no-explicit-any": ["error", {
			"fixToUnknown": false,
			"ignoreRestArgs": false
		}],
		"@typescript-eslint/no-extra-non-null-assertion": "error",
		"@typescript-eslint/no-extraneous-class": ["error",	{
			"allowConstructorOnly": true,									// Allows for angularJS ControllerTest
			"allowEmpty": false,
			"allowStaticOnly": true,											// Allows for angularJS directives, filters etc.
			"allowWithDecorator": false
		}],
		"@typescript-eslint/no-floating-promises": ["error", {
			"ignoreVoid": false,
			"ignoreIIFE": false
		}],
		"@typescript-eslint/no-for-in-array": "error",
		"@typescript-eslint/no-implicit-any-catch": ["error", {
			"allowExplicitAny": false
		}],
		"@typescript-eslint/no-inferrable-types": ["error", {
			"ignoreProperties": false,
			"ignoreParameters": false
		}],
		"@typescript-eslint/no-invalid-void-type": ["error", {
			"allowInGenericTypeArguments": true,
			"allowAsThisParameter": false
		}],
		"@typescript-eslint/no-meaningless-void-operator": ["error", {
			"checkNever": true
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
		"@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
		"@typescript-eslint/no-non-null-asserted-optional-chain": "error",
		"@typescript-eslint/no-non-null-assertion": "error",
		"@typescript-eslint/no-parameter-properties": ["off", {	// Not using
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
		"@typescript-eslint/no-require-imports": "off",	// Disabled until node supports ES modules
		"@typescript-eslint/no-this-alias": ["error", {
			"allowDestructuring": false,
			"allowedNames": ["self"]
		}],
		"@typescript-eslint/no-type-alias": ["error", {
			"allowAliases": "in-unions-and-intersections",
			"allowCallbacks": "always",
			"allowConditionalTypes": "always",
			"allowConstructors": "always",
			"allowLiterals": "in-unions-and-intersections",
			"allowMappedTypes": "in-unions-and-intersections",
			"allowTupleTypes": "in-unions-and-intersections",
			"allowGenerics": "always"
		}],
		"@typescript-eslint/no-unnecessary-boolean-literal-compare": ["error", {
			"allowComparingNullableBooleansToTrue": true,
			"allowComparingNullableBooleansToFalse": true
		}],
		"@typescript-eslint/no-unnecessary-condition": ["error", {
			"allowConstantLoopConditions": false,
			"allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing": false
		}],
		"@typescript-eslint/no-unnecessary-qualifier": "error",
		"@typescript-eslint/no-unnecessary-type-arguments": "error",
		"@typescript-eslint/no-unnecessary-type-assertion": ["error", {
			"typesToIgnore": []
		}],
		"@typescript-eslint/no-unnecessary-type-constraint": "error",
		"@typescript-eslint/no-unsafe-argument": "error",
		"@typescript-eslint/no-unsafe-assignment": "error",
		"@typescript-eslint/no-unsafe-call": "error",
		"@typescript-eslint/no-unsafe-member-access": "error",
		"@typescript-eslint/no-unsafe-return": "error",
		"@typescript-eslint/no-var-requires": "off",		// Disabled until node supports ES modules
		"@typescript-eslint/non-nullable-type-assertion-style": "off",	// Not using - conflicts with no-non-null-asssertion
		"@typescript-eslint/prefer-as-const": "error",
		"@typescript-eslint/prefer-enum-initializers": "error",
		"@typescript-eslint/prefer-for-of": "error",
		"@typescript-eslint/prefer-function-type": "error",
		"@typescript-eslint/prefer-includes": "error",
		"@typescript-eslint/prefer-literal-enum-member": ["error", {
			"allowBitwiseExpressions": false
		}],
		"@typescript-eslint/prefer-namespace-keyword": "error",
		"@typescript-eslint/prefer-nullish-coalescing": ["error", {
			"ignoreConditionalTests": true,
			"ignoreMixedLogicalExpressions": true
		}],
		"@typescript-eslint/prefer-optional-chain": "error",
		"@typescript-eslint/prefer-readonly": ["error", {
			"onlyInlineLambdas": false
		}],
		"@typescript-eslint/prefer-readonly-parameter-types": ["off", {	// Not using - prefer no-param-reassign instead
			"checkParameterProperties": true,
			"ignoreInferredTypes": false,
			"treatMethodsAsReadonly": false
		}],
		"@typescript-eslint/prefer-reduce-type-parameter": "error",
		"@typescript-eslint/prefer-regexp-exec": "error",
		"@typescript-eslint/prefer-return-this-type": "error",
		"@typescript-eslint/prefer-string-starts-ends-with": "error",
		"@typescript-eslint/prefer-ts-expect-error": "error",
		"@typescript-eslint/promise-function-async": ["error", {
			"allowAny": true,
			"allowedPromiseNames": [],
			"checkArrowFunctions": true,
			"checkFunctionDeclarations": true,
			"checkFunctionExpressions": true,
			"checkMethodDeclarations": true
		}],
		"@typescript-eslint/require-array-sort-compare": ["error", {
			"ignoreStringArrays": false
		}],
		"@typescript-eslint/restrict-plus-operands": ["error", {
			"checkCompoundAssignments": true
		}],
		"@typescript-eslint/restrict-template-expressions": ["error", {
			"allowNumber": true,
			"allowBoolean": true,
			"allowAny": false,
			"allowNullish": true,
			"allowRegExp": false
		}],
		"@typescript-eslint/sort-type-union-intersection-members": ["error", {
			"checkIntersections": true,
			"checkUnions": true,
			"groupOrder": [
				"named",
				"keyword",
				"operator",
				"literal",
				"function",
				"import",
				"conditional",
				"object",
				"tuple",
				"intersection",
				"union",
				"nullish"
			]
		}],
		"@typescript-eslint/strict-boolean-expressions": ["error", {
			"allowString": true,
			"allowNumber": true,
			"allowNullableObject": true,
			"allowNullableBoolean": false,
			"allowNullableString": false,
			"allowNullableNumber": false,
			"allowAny": false,
			"allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing": false
		}],
		"@typescript-eslint/switch-exhaustiveness-check": "error",
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
				},
				"variable": {
					"before": false,
					"after": true
				},
				"parameter": {
					"before": false,
					"after": true
				},
				"property": {
					"before": false,
					"after": true
				},
				"returnType": {
					"before": false,
					"after": true
				}
			}
		}],
		"@typescript-eslint/typedef": ["off", {					// Not using
			"arrayDestructuring": true,
			"arrowParameter": true,
			"memberVariableDeclaration": true,
			"objectDestructuring": true,
			"parameter": true,
			"propertyDeclaration": true,
			"variableDeclaration": true,
			"variableDeclarationIgnoreFunction": true
		}],
		"@typescript-eslint/unbound-method": ["error", {
			"ignoreStatic": true													// Allows for angularJS directtive/filter static factory methods
		}],
		"@typescript-eslint/unified-signatures": "error",

		// Extension rules
		"@typescript-eslint/brace-style": ["error", "1tbs", {
			"allowSingleLine": false
		}],
		"@typescript-eslint/comma-dangle": ["error", {
			"arrays": "never",
			"objects": "never",
			"imports": "never",
			"exports": "never",
			"functions": "never",
			"enums": "never",
			"generics": "never",
			"tuples": "never"
		}],
		"@typescript-eslint/comma-spacing": ["error", {
			"before": false,
			"after": true
		}],
		"@typescript-eslint/default-param-last": "error",
		"@typescript-eslint/dot-notation": ["error", {
			"allowKeywords": true,
			"allowPrivateClassPropertyAccess": true,
			"allowProtectedClassPropertyAccess": true,
			"allowIndexSignaturePropertyAccess": false
		}],
		"@typescript-eslint/func-call-spacing": ["error", "never"],
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
			"offsetTernaryExpressions": true,
			"ignoredNodes": [],
			"ignoreComments": false
		}],
		"@typescript-eslint/init-declarations": ["off",	"never", {	// Not using
			"ignoreForLoopInit": false
		}],
		"@typescript-eslint/keyword-spacing": ["error", {
			"after": true,
			"before": true,
			"overrides": {}
		}],
		"@typescript-eslint/lines-between-class-members": ["error", "always", {
			"exceptAfterSingleLine": false,
			"exceptAfterOverload": false
		}],
		"@typescript-eslint/no-array-constructor": "error",
		"@typescript-eslint/no-dupe-class-members": "error",
		"@typescript-eslint/no-duplicate-imports": ["error", {
			"includeExports": true
		}],
		"@typescript-eslint/no-empty-function": ["error", {
			"allow": []
		}],
		"@typescript-eslint/no-extra-parens": ["error", "all", {
			"conditionalAssign": true,
			"returnAssign": false,												// Prevent conflict with no-return-assign
			"nestedBinaryExpressions": false,
			"ignoreJSX": "none",
			"enforceForArrowConditionals": false,
			"enforceForSequenceExpressions": false,
			"enforceForNewInMemberExpressions": true,
			"enforceForFunctionPrototypeMethods": true
		}],
		"@typescript-eslint/no-extra-semi": "error",
		"@typescript-eslint/no-implied-eval": "error",
		"@typescript-eslint/no-invalid-this": ["error", {
			"capIsConstructor": true
		}],
		"@typescript-eslint/no-loop-func": "error",
		"@typescript-eslint/no-loss-of-precision": "error",
		"@typescript-eslint/no-magic-numbers": ["error", {
			"ignore": [-1, 0, 1],
			"ignoreArrayIndexes": true,
			"ignoreDefaultValues": true,
			"enforceConst": true,
			"detectObjects": false,
			"ignoreNumericLiteralTypes": true,
			"ignoreReadonlyClassProperties": false,
			"ignoreEnums": true
		}],
		"@typescript-eslint/no-redeclare": ["error", {
			"builtinGlobals": true,
			"ignoreDeclarationMerge": true
		}],
		"@typescript-eslint/no-restricted-imports": ["off", {
			"paths": [],
			"patterns": [],
			"allowTypeImports": false
		}],
		"@typescript-eslint/no-shadow": ["error", {
			"builtinGlobals": false,
			"hoist": "all",
			"allow": [],
			"ignoreTypeValueShadow": false,
			"ignoreFunctionTypeParameterNameValueShadow": false
		}],
		"@typescript-eslint/no-throw-literal": "error",
		"@typescript-eslint/no-unused-expressions": ["error", {
			"allowShortCircuit": false,
			"allowTernary": false,
			"allowTaggedTemplates": false,
			"enforceForJSX": true
		}],
		"@typescript-eslint/no-unused-vars-experimental": ["error", {
			"ignoredNamesRegex": "^_",
			"ignoreArgsIfArgsAfterAreUsed": false
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
			"enums": true,
			"typedefs": true,
			"ignoreTypeReferences": false
		}],
		"@typescript-eslint/no-useless-constructor": "error",
		"@typescript-eslint/object-curly-spacing": ["error", "always", {
			"arraysInObjects": true,
			"objectsInObjects": true
		}],
		"@typescript-eslint/padding-line-between-statements": ["error", {
			"blankLine": "any",
			"prev": "*",
			"next": "*"
		}],
		"@typescript-eslint/quotes": ["error", "double", {
			"avoidEscape": false,
			"allowTemplateLiterals": false
		}],
		"@typescript-eslint/require-await": "error",
		"@typescript-eslint/return-await": ["error", "in-try-catch"],
		"@typescript-eslint/semi": ["error", "always", {
			"omitLastInOneLineBlock": false
		}],
		"@typescript-eslint/space-before-function-paren": ["error", {
			"anonymous": "never",
			"named": "never",
			"asyncArrow": "always"
		}],
		"@typescript-eslint/space-infix-ops": ["error", {
			"int32Hint": false
		}]
	},
	"overrides": [
		{
			"files": ["**/*.js"],
			"rules": {
				"@typescript-eslint/explicit-function-return-type": "off",
				"@typescript-eslint/explicit-member-accessibility": "off",
				"@typescript-eslint/explicit-module-boundary-types": "off",
				"@typescript-eslint/no-unsafe-assignment": "off",
				"@typescript-eslint/no-unsafe-call": "off",
				"@typescript-eslint/no-unsafe-member-access": "off",
				"@typescript-eslint/no-unsafe-return": "off",
				"@typescript-eslint/restrict-template-expressions": "off"
			}
		},
		{
			"files": ["**/*.ts"],
			"rules": {
				"no-undef": "off"
			}
		}
	],
	"noInlineConfig": true,
	"reportUnusedDisableDirectives": true,
	"settings": {
	}
};