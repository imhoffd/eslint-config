module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict',
    'plugin:@typescript-eslint/strict-type-checked',
    'prettier',
    'plugin:tailwindcss/recommended',
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
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/unbound-method': 'off',

    // https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules
    'tailwindcss/no-arbitrary-value': 'off',
  },
}
