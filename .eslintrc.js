module.exports = {
	env: {
		browser: true,
		commonjs: true,
		node: true,
		es6: true,
	},
	extends: [
		'plugin:cypress/recommended',
		'eslint:recommended',
	],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	parser: '@babel/eslint-parser',
	rules: {
		indent: [
			'error',
			'tab',
			{
				'SwitchCase': 1,
			}
		],
		'no-cond-assign': 'error',
		'no-unused-vars': [
			'error',
			{
				vars: 'all',
				args: 'none',
				ignoreRestSiblings: true,
			},
		],
		'linebreak-style': 'off',
		quotes: [
			'error',
			'single',
		],
		'comma-dangle': 'off',
		semi: [
			'error',
			'always',
		],
		'no-case-declarations': 'off',
		'space-in-parens': [ 'error', 'always' ],
		'template-curly-spacing': [ 'error', 'always' ],
		'object-curly-spacing': [ 'error', 'always' ],
		'prefer-const': [ 'error', {
			'destructuring': 'any',
			'ignoreReadBeforeAssign': false,
		} ],
		'keyword-spacing': [
			'error',
			{
				'before': true,
				'after': true,
			},
		],
		'max-len': [
			'error',
			{
				'code': 80,
			},
		],
		'array-bracket-spacing': [ 'error', 'always' ],
		'space-before-function-paren': [ 'error', {
			'named': 'never',
			'anonymous': 'never',
			'asyncArrow': 'always',
		} ],
		'arrow-spacing': [ 'error', { 'before': true, 'after': true } ],
		'space-before-blocks': [ 'error', 'always' ],
		'computed-property-spacing': [ 'error', 'always' ],
		'key-spacing': [ 'error', {
			'beforeColon': false,
			'afterColon': true,
		} ],
		'space-infix-ops': 'error',
		'jsx-quotes': [
			'error',
			'prefer-single',
		],
		'react/jsx-curly-spacing': [ 'error', { 'when': 'always', 'children': true } ],
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'react/jsx-indent': 'off',
		'no-prototype-builtins': 'off',
	},
	plugins: [ 'react', 'prettier' ],
};