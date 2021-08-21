module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    "import"
  ],
  "rules": {
    "indent": ["error", 2],
    "implicit-arrow-linebreak": 0,
    "semi": "error",
    "jsx-a11y/anchor-is-valid": 0,
    "linebreak-style": 0,
    "react/require-default-props": 0,
    "react/jsx-filename-extension": [2, { "extensions": [".tsx"] }],
    "react/jsx-props-no-spreading": 0,
    "import/extensions": [2, "never"],
    "react/jsx-closing-tag-location": 2,
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-props-no-multi-spaces": 2,
    "react/jsx-sort-props": 2,
    "react/jsx-closing-bracket-location": 2,
    "@typescript-eslint/no-explicit-any": ["error"],
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        "allowExpressions": false,
        "allowTypedFunctionExpressions": true,
        "allowHigherOrderFunctions": true,
        "allowDirectConstAssertionInArrowFunctions": true,
        "allowConciseArrowFunctionExpressionsStartingWithVoid": true
      }
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "interface",
        "format": ["PascalCase"],
        "custom": {
          "regex": "^I[A-Z]",
          "match": true
        }
      }
    ],
    "react/jsx-max-props-per-line": [1, { "maximum": 1, "when": "multiline" }]
  }
};
