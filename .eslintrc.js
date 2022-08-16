module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/typescript',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		'react-hooks',
		'@typescript-eslint',
		'prettier'
	],
	settings: {
		'import/resolver': {
			typescript: {},
		},
	},
	overrides: [
    {
      files: ['*.ts', '*.tsx'], 
      parserOptions: {
        project: ['./tsconfig.json'], 
      },
    }
  ],
	rules: {
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				ts: 'never',
				tsx: 'never',
			},
		],
		'react/function-component-definition': [
			2,
			{
				'namedComponents': 'arrow-function'
			}
		],
		'jsx-a11y/label-has-associated-control': [
			'error',
			{
				'required': {
					'some': ['nesting', 'id']
				}
			}
		],
		'react/self-closing-comp': [
			'error',
			{
				'component': true,
				'html': false
			}
		],
		'jsx-a11y/label-has-for': [ 2, {
			'components': [ 'Label' ],
			'required': {
				'every': [ 'id' ]
			},
			'allowChildren': false
		}],
		'jsx-a11y/no-noninteractive-element-interactions': [
			'off',
			{
				'handlers': [
					'onClick'
				]
			}
		],
		'import/order': [
			'error',
			{
				'newlines-between': 'always-and-inside-groups',
				alphabetize: {
					order: 'asc',
				},
				groups: ['builtin', 'external', 'internal', ['parent', 'index', 'sibling']],
			},
		],
		'padding-line-between-statements': [
			'error',
			{ 'blankLine': 'always', 'prev': '*', 'next': 'return' },
			{ 'blankLine': 'always', 'prev': '*', 'next': 'export' },
			{ 'blankLine': 'always', 'prev': 'export', 'next': '*' },
			{ 'blankLine': 'always', 'prev': 'function', 'next': '*' }
		],
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': ['error'],
		'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'import/prefer-default-export': 'off',
		'react/prop-types': 'off',
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'import/no-extraneous-dependencies': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/react-in-jsx-scope': 'off',
		'import/newline-after-import': ['error', { 'count': 2 }],
		'react/jsx-max-props-per-line': [1, { 'maximum': 2, 'when': 'always' }],
		'jsx-a11y/click-events-have-key-events': 'off',
		'default-param-last': 'off',
		'consistent-return': 'off',
		'indent': ['error', 'tab'],
		'semi': ['error', 'always'],
		'no-multi-spaces': 'error',
		'no-trailing-spaces': 'error',
		'space-infix-ops': 'error',
		'object-curly-spacing': ['error', 'always'],
		'arrow-spacing': 'error',
		'eol-last': ['error', 'always'],
		'comma-spacing': ['error', { 'before': false, 'after': true }],
	},
};
