module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  env: {
    browser: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module'
  },
  plugins: [
    'prettier',
    'eslint-plugin-import',
    'eslint-plugin-jsdoc',
    '@angular-eslint/eslint-plugin',
    '@angular-eslint/eslint-plugin-template',
    'eslint-plugin-prefer-arrow',
    '@typescript-eslint'
  ],
  rules: {
    '@angular-eslint/component-class-suffix': [
      'off',
      {
        suffixes: ['Element', 'Component', 'View', 'Directive', 'Example']
      }
    ],
    '@angular-eslint/component-selector': [
      'error',
      {
        type: 'element',
        prefix: 'page',
        style: 'app'
      }
    ],
    '@angular-eslint/contextual-lifecycle': 'error',
    '@angular-eslint/directive-class-suffix': 'off',
    '@angular-eslint/directive-selector': [
      'off',
      {
        type: 'attribute',
        prefix: 'app',
        style: 'camelCase'
      }
    ],
    '@angular-eslint/no-conflicting-lifecycle': 'error',
    '@angular-eslint/no-host-metadata-property': 'off',
    '@angular-eslint/no-input-rename': 'off',
    '@angular-eslint/no-inputs-metadata-property': 'off',
    '@angular-eslint/no-output-native': 'off',
    '@angular-eslint/no-output-on-prefix': 'off',
    '@angular-eslint/no-output-rename': 'off',
    '@angular-eslint/no-outputs-metadata-property': 'error',
    '@angular-eslint/template/banana-in-box': 'error',
    '@angular-eslint/template/eqeqeq': 'off',
    '@angular-eslint/template/no-negated-async': 'off',
    '@angular-eslint/use-lifecycle-interface': 'error',
    '@angular-eslint/use-pipe-transform-interface': 'error',
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/dot-notation': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'off',
      {
        accessibility: 'explicit'
      }
    ],
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'off',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        }
      }
    ],
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': [
      'off',
      {
        ignoreParameters: true
      }
    ],
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-shadow': [
      'off',
      {
        hoist: 'all'
      }
    ],
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-for-of': 'off',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true
      }
    ],
    '@typescript-eslint/semi': ['off', null],
    '@typescript-eslint/triple-slash-reference': [
      'error',
      {
        path: 'always',
        types: 'prefer-import',
        lib: 'always'
      }
    ],
    '@typescript-eslint/type-annotation-spacing': 'off',
    '@typescript-eslint/unified-signatures': 'error',
    'arrow-parens': ['off', 'always'],
    'brace-style': ['off', 'off'],
    'comma-dangle': 'off',
    complexity: 'off',
    'constructor-super': 'error',
    'dot-notation': 'error',
    'eol-last': 'off',
    eqeqeq: ['error', 'smart'],
    'guard-for-in': 'off',
    'id-denylist': 'off',
    'id-match': 'off',
    'import/no-deprecated': 'warn',
    'import/order': 'off',
    indent: 'off',
    'jsdoc/check-alignment': 'off',
    'jsdoc/check-indentation': 'off',
    'jsdoc/newline-after-description': 'off',
    'jsdoc/no-types': 'off',
    'linebreak-style': 'off',
    'max-classes-per-file': 'off',
    'max-len': [
      'off',
      {
        code: 120
      }
    ],
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-bitwise': 'off',
    'no-caller': 'error',
    'no-cond-assign': 'off',
    'no-console': [
      'error',
      {
        allow: [
          'log',
          'warn',
          'dir',
          'timeLog',
          'assert',
          'clear',
          'count',
          'countReset',
          'group',
          'groupEnd',
          'table',
          'info',
          'dirxml',
          'error',
          'groupCollapsed',
          'Console',
          'profile',
          'profileEnd',
          'timeStamp',
          'context'
        ]
      }
    ],
    'no-debugger': 'error',
    'no-empty': 'off',
    'no-empty-function': 'off',
    'no-eval': 'error',
    'no-extra-semi': 'off',
    'no-fallthrough': 'error',
    'no-invalid-this': 'off',
    'no-irregular-whitespace': 'off',
    'no-multiple-empty-lines': 'off',
    'no-new-wrappers': 'error',
    'no-redeclare': 'error',
    'no-restricted-imports': ['error', 'rxjs/Rx'],
    'no-shadow': 'off',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'off',
    'no-undef-init': 'error',
    'no-underscore-dangle': 'off',
    'no-unsafe-finally': 'error',
    'no-unused-expressions': 'off',
    'no-unused-labels': 'error',
    'no-use-before-define': 'off',
    'no-var': 'error',
    'object-shorthand': 'error',
    'one-var': ['off', 'never'],
    'padded-blocks': [
      'off',
      {
        blocks: 'never'
      },
      {
        allowSingleLineBlocks: true
      }
    ],
    'prefer-arrow/prefer-arrow-functions': 'off',
    'prefer-const': 'off',
    'quote-props': 'off',
    quotes: 'error',
    radix: 'error',
    'react/jsx-curly-spacing': 'off',
    'react/jsx-equals-spacing': 'off',
    'react/jsx-tag-spacing': [
      'off',
      {
        afterOpening: 'allow',
        closingSlash: 'allow'
      }
    ],
    'react/jsx-wrap-multilines': 'off',
    semi: 'off',
    'space-before-function-paren': 'off',
    'space-in-parens': ['off', 'never'],
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/']
      }
    ],
    'use-isnan': 'error',
    'valid-typeof': 'off'
  }
}
