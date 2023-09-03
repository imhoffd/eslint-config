module.exports = {
  extends: ['./recommended'],
  rules: {
    // ./recommended.js
    'import-alias/import-alias': [
      'error',
      {
        relativeDepth: 1,
        aliases: [
          {
            alias: '@src',
            matcher: '^src',
          },
          {
            alias: '@fp',
            matcher: '^src/lib/fp',
          },
          {
            alias: '@ui',
            matcher: '^src/components/ui',
          },
          {
            alias: '@public',
            matcher: '^public',
          },
        ],
      },
    ],
    'import/order': [
      'error',
      {
        'alphabetize': {
          order: 'asc',
          caseInsensitive: false,
        },
        'groups': [['builtin', 'external'], 'parent', ['sibling', 'index']],
        'pathGroups': [
          {
            pattern: '@{src,fp,ui,public}/**',
            group: 'parent',
            position: 'before',
          },
        ],
        'pathGroupsExcludedImportTypes': ['builtin'],
        'newlines-between': 'always',
      },
    ],
  },
  overrides: [
    {
      files: ['./src/pages/**/*', './src/app/**/*'],
      rules: {
        'canonical/filename-match-exported': 'off',
        'import/prefer-default-export': 'off',
      },
    },
  ],
}
