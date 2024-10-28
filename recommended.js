module.exports = {
  extends: ['./index', 'plugin:import/typescript', 'plugin:oxlint/recommended'],
  plugins: ['import', 'import-alias', 'canonical'],
  rules: {
    // https://eslint.org/docs/rules/
    'no-shadow': 'off',

    // ./index.js
    '@typescript-eslint/explicit-module-boundary-types': [
      'error',
      { allowArgumentsExplicitlyTypedAsAny: true },
    ],

    // https://github.com/gajus/eslint-plugin-canonical
    'canonical/filename-match-exported': 'error',

    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/consistent-indexed-object-style': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/consistent-type-exports': [
      'error',
      { fixMixedExportsWithInlineTypeSpecifier: true },
    ],
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',

    // https://github.com/benmosher/eslint-plugin-import
    'import/first': 'error',
    'import/prefer-default-export': ['error', { target: 'any' }],
    'import/newline-after-import': 'error',
    'import/no-anonymous-default-export': [
      'error',
      {
        allowCallExpression: true,
        allowObject: true,
      },
    ],
    'import/no-duplicates': 'error',
    'import/no-mutable-exports': 'error',

    // https://github.com/steelsojka/eslint-import-alias
    'import-alias/import-alias': [
      'error',
      {
        relativeDepth: 1,
        aliases: [
          {
            alias: '@',
            matcher: '^src',
          },
          {
            alias: '@fp',
            matcher: '^src/lib/fp',
          },
        ],
      },
    ],

    // https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules
    'tailwindcss/classnames-order': 'error',
    'tailwindcss/enforces-negative-arbitrary-values': 'error',
    'tailwindcss/enforces-shorthand': 'error',
    'tailwindcss/migration-from-tailwind-2': 'error',
    'tailwindcss/no-contradicting-classname': 'error',
    'tailwindcss/no-custom-classname': 'error',
  },
  overrides: [
    {
      files: [
        // tests, stories, etc.
        './**/*.{stories,spec,test,testcases,css}.{js,jsx,ts,tsx}',
        // config files
        '*.config.{js,ts}',
        // fp-ts and fp-ts-std re-export facade
        './src/lib/fp/**/*.ts',
      ],
      rules: {
        'canonical/filename-match-exported': 'off',
        'import/prefer-default-export': 'off',
      },
    },
    {
      files: [
        // test and spec files
        './**/*.{spec,test,testcases}.{js,jsx,ts,tsx}',
        // test fixtures
        './src/test/**/*',
      ],
      rules: {
        // disable the empty pattern rule because vitest and playwright
        // fixtures expect it to be used in test functions
        'no-empty-pattern': 'off',
      },
    },
    {
      files: 'index.{js,jsx,ts,tsx}',
      rules: {
        'import/prefer-default-export': 'off',
      },
    },
  ],
}
