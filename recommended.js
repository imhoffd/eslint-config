module.exports = {
  extends: ['./index', 'plugin:import/typescript'],
  plugins: ['import', 'import-alias', 'canonical'],
  rules: {
    // ./index.js
    '@typescript-eslint/explicit-module-boundary-types': [
      'error',
      { allowArgumentsExplicitlyTypedAsAny: true },
    ],

    // https://github.com/gajus/eslint-plugin-canonical
    'canonical/filename-match-exported': 'error',

    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
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

    // https://github.com/benmosher/eslint-plugin-import
    'import/first': 'error',
    'import/order': [
      'error',
      {
        'alphabetize': { order: 'asc', caseInsensitive: false },
        'groups': [['builtin', 'external'], 'parent', ['sibling', 'index']],
        'pathGroups': [
          {
            pattern: '@/**',
            group: 'parent',
            position: 'before',
          },
        ],
        'pathGroupsExcludedImportTypes': ['builtin'],
        'newlines-between': 'always',
      },
    ],
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
    'tailwindcss/no-arbitrary-values': 'error',
    'tailwindcss/no-contradicting-classname': 'error',
    'tailwindcss/no-custom-classname': 'error',
  },
  overrides: [
    {
      files: [
        // tests, stories, etc.
        './**/*.{stories,spec,test,css}.{js,jsx,ts,tsx}',
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
        './**/*.{spec,test}.{js,jsx,ts,tsx}',
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
