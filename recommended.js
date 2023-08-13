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
    '@typescript-eslint/no-explicit-any': 'error',

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
        ],
      },
    ],
  },
  overrides: [
    {
      files: [
        // tests, stories, etc.
        './**/*.{stories,spec,test,css}.{js,jsx,ts,tsx}',
        // config files
        '*.config.{js,ts}',
      ],
      rules: {
        'canonical/filename-match-exported': 'off',
        'import/prefer-default-export': 'off',
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
