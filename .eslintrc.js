module.exports = {
	env: {
    browser: true,
    es2021: true
  },
  extends: ['airbnb','plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking', 'plugin:@typescript-eslint/recommended', 'plugin:import/typescript', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
		project: './tsconfig.json'
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  settings: {
    'import/resolver': {
      typescript: {}
    }
  },
  overrides: [{
    files: ['*.ts', '*.tsx'],
    parserOptions: {
      project: ['./tsconfig.json']
    }
  }],
	rules: {
		'no-console': 'error',
		'import/extensions': ['error', 'ignorePackages', {
			ts: 'never',
			tsx: 'never'
		}],
		'react/function-component-definition': [2, {
			'namedComponents': 'arrow-function'
		}],
		'jsx-a11y/label-has-associated-control': ['error', {
			'required': {
				'some': ['nesting', 'id']
			}
		}],
		'react/self-closing-comp': ['error', {
			'component': true,
			'html': false
		}],
		'jsx-a11y/label-has-for': [2, {
			'components': ['Label'],
			'required': {
				'every': ['id']
			},
			'allowChildren': false
		}],
		'jsx-a11y/no-noninteractive-element-interactions': ['off', {
			'handlers': ['onClick']
		}],
		'@typescript-eslint/no-use-before-define': ['error'],
		'react/jsx-filename-extension': ['warn', {
			extensions: ['.tsx']
		}],
		'react/jsx-props-no-spreading': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-max-props-per-line': [1, {
			'maximum': 2,
			'when': 'always'
		}],
		'jsx-a11y/click-events-have-key-events': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/prop-types': 'off',
		'import/order': ['error', {
			'newlines-between': 'always-and-inside-groups',
			alphabetize: {
				order: 'asc'
			},
			groups: ['builtin', 'external', 'internal', ['parent', 'index', 'sibling']]
		}],
		'class-methods-use-this': 'off',
		'no-use-before-define': 'off',
		'import/prefer-default-export': 'off',
		'no-tabs': ['error', {
			allowIndentationTabs: true
		}],
		'import/no-extraneous-dependencies': 'off',
		'import/newline-after-import': ['error', {
			'count': 2
		}],
		'default-param-last': 'off',
		'consistent-return': 'off',
		'indent': ['error', 'tab'],
		'no-multi-spaces': 'error',
		'no-trailing-spaces': 'error',
		'space-infix-ops': 'error',
		'object-curly-spacing': 'off',
		'@typescript-eslint/object-curly-spacing': ['error', 'always'],
		'arrow-spacing': 'error',
		'eol-last': ['error', 'always'],
		'comma-spacing': ['error', {
			'before': false,
			'after': true
		}],
		"padding-line-between-statements": ["error", {
			blankLine: 'always',
			prev: '*',
			next: 'block'
		}, {
			blankLine: 'always',
			prev: 'block',
			next: '*'
		}, {
			blankLine: 'always',
			prev: '*',
			next: 'block-like'
		}, {
			blankLine: 'always',
			prev: 'block-like',
			next: '*'
		}],
		'@typescript-eslint/member-ordering': ['error', {
			'default': ['static-field', 'instance-field', 'constructor', 'public-instance-method', 'protected-instance-method', 'private-instance-method']
		}],
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-floating-promises': 'error',
		'@typescript-eslint/no-parameter-properties': 'off',
		'@typescript-eslint/no-require-imports': 'error',
		'@typescript-eslint/no-unnecessary-qualifier': 'error',
		'@typescript-eslint/no-unused-expressions': 'error',
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/prefer-for-of': 'error',
		'@typescript-eslint/prefer-function-type': 'error',
		'@typescript-eslint/promise-function-async': 'error',
		'@typescript-eslint/quotes': [1, 'single', {
			'avoidEscape': true
		}],
		'@typescript-eslint/restrict-plus-operands': 'error',
		'semi': 'off',
		'@typescript-eslint/semi': ['error'],
		'@typescript-eslint/triple-slash-reference': ['error', {
			'path': 'always',
			'types': 'prefer-import',
			'lib': 'always'
		}],
		'@typescript-eslint/no-non-null-assertion': "off",
		'@typescript-eslint/type-annotation-spacing': 'off',
		'@typescript-eslint/unified-signatures': 'error',
		'@typescript-eslint/restrict-template-expressions': 'off',
		'@typescript-eslint/member-delimiter-style': ['error', {
			multiline: {
				delimiter: 'semi',
				requireLast: true
			},
			singleline: {
				delimiter: 'semi',
				requireLast: true
			}
		}]
	}
};