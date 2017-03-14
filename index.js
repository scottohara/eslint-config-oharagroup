module.exports = {
	"parserOptions": {
		"ecmaVersion": 2017,
		"sourceType": "module",
		"ecmaFeatures": {
			"globalReturn": false,
			"impliedStrict": true,
			"jsx": false,																	// Not using (React/JSX)
			"experimentalObjectRestSpread": false					// Not using (experimental)
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
		"serviceworker": false,													// sw-precache manages ServiceWorker code
		"atomtest": false,
		"embertest": false,
		"webextensions": false,
		"greasemonkey": false
	},
	"globals": {
	},
	"parser": "espree",
	"rules": {
		// Possible errors
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
		"no-extra-parens": ["error", "all", {
			"conditionalAssign": true,
			"returnAssign": false,												// Prevent conflict with no-return-assign
			"nestedBinaryExpressions": false,
			"ignoreJSX": "none"
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
		"array-callback-return": "error",
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
		"no-alert": "error",
		"no-caller": "error",
		"no-case-declarations": "error",
		"no-div-regex": "error",
		"no-else-return": "error",
		"no-empty-function": ["error", {
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
			}
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
			"allowTernary": false
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
		"no-catch-shadow": "off",												// Not using (IE8 not supported)
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
		"no-undefined": "error",
		"no-unused-vars": ["error", {
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
		"no-mixed-requires": "off",
		"no-new-require": "off",
		"no-path-concat": "off",
		"no-process-env": "error",
		"no-process-exit": "off",
		"no-restricted-modules": ["off", {
			"paths": [],
			"patterns": []
		}],
		"no-sync": "off",

		// Stylistic issues
		"array-bracket-spacing": ["error", "never", {
			"singleValue": false,
			"objectsInArrays": false,
			"arraysInArrays": false
		}],
		"block-spacing": ["error", "never"],
		"brace-style": ["error", "1tbs", {
			"allowSingleLine": false
		}],
		"camelcase": ["error", {
			"properties": "never"
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
			"includeCommonJSModuleExports": true
		}],
		"func-names": ["error", "always"],
		"func-style": ["error", "declaration", {
			"allowArrowFunctions": false
		}],
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
			"ObjectExpression": 1
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
			"ignorePattern": "",
			"applyDefaultIgnorePatterns": true
		}],
		"lines-around-directive": ["error", {
			"before": "always",
			"after": "always"
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
		"newline-after-var": ["error", "always"],
		"newline-before-return": "error",
		"newline-per-chained-call": ["off", {						// Not using (gulp pipelines)
			"ignoreChainWithDepth": 10
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
			"skipBlankLines": false
		}],
		"no-underscore-dangle": ["error", {
			"allow": [],
			"allowAfterThis": false,
			"allowAfterSuper": false
		}],
		"no-unneeded-ternary": "error",
		"no-whitespace-before-property": "error",
		"nonblock-statement-body-position": ["error", "beside", {
			"overrides": {}
		}],
		"object-curly-newline": ["off", {								// Not using
			"ObjectExpression": {
				"multiline": true
			},
			"ObjectPattern": {
				"multiline": true
			}
		}],
		"object-curly-spacing": ["error", "never", {
			"objectsInObjects": false
		}],
		"object-property-newline": ["error", {
			"allowMultiplePropertiesPerLine": true
		}],
		"one-var": ["error", {
			"var": "always",
			"let": "always",
			"const": "always"
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
				"ArrowFunctionExpression": false
			}
		}],
		"semi": ["error", "always", {
			"omitLastInOneLineBlock": false
		}],
		"semi-spacing": ["error", {
			"before": false,
			"after": true
		}],
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
			"after": false
		}],
		"no-class-assign": "error",
		"no-confusing-arrow": ["error", {
			"allowParens": false
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
		"no-useless-constructor": "error",
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
			"array": true,
			"object": true
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
		}]
	}
};