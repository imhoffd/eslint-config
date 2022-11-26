# @imhoff/eslint-config

My personal ESLint config.

This is meant to be used alongside Prettier (with
[`@imhoff/prettier-config`](https://github.com/imhoffd/prettier-config/)).

## Usage

1. Remove existing `.eslintrc.*` file, if present.
1. Install `eslint` and the config.

   ```
   npm install -D eslint @imhoff/eslint-config
   ```

1. Add the following to `package.json`:

   ```json
   "eslintConfig": {
     "extends": "@imhoff/eslint-config/recommended"
   },
   ```

:memo: You can also use the base rule set: `@imhoff/eslint-config`

### With Prettier and `@imhoff/prettier-config`

1. Set up Prettier and
   [`@imhoff/prettier-config`](https://github.com/imhoffd/prettier-config/).
1. When using with Prettier and `@imhoff/prettier-config`, ESLint should run
   first. Set up your scripts in `package.json` like this:

   ```json
     "scripts": {
       "lint": "npm run eslint && npm run prettier -- --check",
       "fmt": "npm run eslint -- --fix && npm run prettier -- --write",
       "prettier": "prettier \"**/*.ts\"",
       "eslint": "eslint . --ext .ts",
     }
   ```

   - `npm run lint`: for checking if ESLint and Prettier complain
   - `npm run fmt`: attempt to autofix lint issues and autoformat code

   :memo: Not every rule in this configuration is autofixable, so `npm run fmt`
   may continue failing until lint issues are addressed manually.

### With Captain Hook

1. Install [captainhook](https://github.com/imhoffd/captainhook):

   ```
   npm install -D captainhook
   ```

1. Add the following to `package.json`:

   ```json
   "hooks": {
     "pre-commit": "npm run lint"
   },
   ```
