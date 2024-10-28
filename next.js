module.exports = {
  extends: ['next/core-web-vitals', './recommended'],
  rules: {
    // https://github.com/jsx-eslint/eslint-plugin-react
    'react/react-in-jsx-scope': 'error',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/button-has-type': 'error',
    'react/jsx-no-leaked-render': ['error', { validStrategies: ['ternary'] }],
    'react/forward-ref-uses-ref': 'error',
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],

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
