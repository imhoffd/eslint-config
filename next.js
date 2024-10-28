module.exports = {
  extends: ['next/core-web-vitals', './recommended'],
  plugins: ['react'],
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
