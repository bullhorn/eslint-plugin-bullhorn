# eslint-plugin-bullhorn

This package provides Bullhorn's .eslintrc as an extensible shared config.

## Usage

We export three ESLint configurations for your usage.

### eslint-plugin-bullhorn

Our default export contains all of our ESLint rules, including EcmaScript 6+
and React. It requires `eslint`.

1. `npm install --save-dev eslint-config-bullhorn eslint`
2. add `"plugins": ["bullhorn"]` to your .eslintrc

Extend the configs you wish to use.

JSON ESLint config example:

```json
{
  "extends": ["plugin:bullhorn/recommended"]
}
```

The available configs are:

- `app`
  - Rules useful for bullhorn applications.
- `browser`
  - Useful rules when shipping your app to the browser.
- `recommended`
  - Recommended rules for every application.
- `typescript`
  - Useful rules when writing TypeScript.

See [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.
