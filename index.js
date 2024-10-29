module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unicorn'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict',
    'plugin:@typescript-eslint/strict-type-checked',
    'prettier',
    'plugin:tailwindcss/recommended',
    'plugin:unicorn/recommended',
    'plugin:oxlint/recommended',
  ],
  settings: {
    tailwindcss: {
      callees: ['clsx', 'cva', 'cn'],
    },
  },
  rules: {
    // https://eslint.org/docs/rules/
    'curly': ['error', 'all'],
    'no-constant-condition': 'off',
    'no-fallthrough': 'off',

    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
    '@typescript-eslint/explicit-module-boundary-types': [
      'warn',
      { allowArgumentsExplicitlyTypedAsAny: true },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-unnecessary-condition': [
      'error',
      { allowConstantLoopConditions: true },
    ],
    // Disabled until they add an option to ignore it in `switch` statements
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/no-unnecessary-type-parameters': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-deprecated': 'warn',
    '@typescript-eslint/no-invalid-void-type': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-empty-object-type': [
      'error',
      { allowInterfaces: 'with-single-extends' },
    ],

    // https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules
    'tailwindcss/no-arbitrary-value': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/tree/main/docs/rules
    'unicorn/catch-error-name': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-document-cookie': 'off',
    'unicorn/no-negated-condition': 'off',
    'unicorn/no-nested-ternary': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-process-exit': 'off',
    'unicorn/no-typeof-undefined': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/prefer-code-point': 'off',
    'unicorn/prefer-event-target': 'off',
    'unicorn/prefer-export-from': 'off',
    'unicorn/prefer-top-level-await': 'off',
    'unicorn/prefer-spread': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/prefer-global-this': 'off',

    // https://github.com/azat-io/eslint-plugin-perfectionist
    'perfectionist/sort-imports': [
      'error',
      { internalPattern: ['~/**', '@{src,fp,public}/**'] },
    ],
    'perfectionist/sort-jsx-props': [
      'error',
      {
        groups: [
          'key',
          'multiline',
          'unknown',
          'shorthand',
          'className',
          'callback',
        ],
        customGroups: {
          callback: '^on[A-Z]',
          className: '^className$',
          key: '^key$',
        },
        matcher: 'regex',
      },
    ],
  },
}
