module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": [
    "airbnb",
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "plugins": [
    "react", "jsx-a11y", "import"
  ]
  ,
  "rules": {
    "react/no-unused-prop-types": "error",
    "no-restricted-syntax": "off",
    // for mobx state tree
    "no-param-reassign": ["error", { "props": false }],
    "no-nested-ternary": "off",
    "prefer-destructuring": "off",
    "no-return-assign": "off",
    "react/no-multi-comp": "off",
    "react/require-default-props": "off",
    "react/destructuring-assignment": "off",
    "no-mixed-operators": "off",
    "react/prefer-stateless-function": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-use-before-define": ["error", { "variables": false }],
    "padded-blocks": ["error", { "blocks": "never" }],
    "no-underscore-dangle": "off",
    "import/no-extraneous-dependencies": "off",
    "no-unused-expressions": "off",
    "react/prop-types": "off",
    "jsx-quotes": ["error", "prefer-single"],
    "max-len": "off",
    "no-plusplus": [2, { "allowForLoopAfterthoughts": true }],
    "comma-dangle": [
      "error",
      {
        "objects": "always-multiline"
      }
    ],
    "quotes": [
      "error",
      "single"
    ],
    "no-tabs": "warn",
    "indent": [
      "error",
      2
    ]

  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["./"]
      }
    }
  },
  "globals": {
    "__DEV__": false,
  }
}