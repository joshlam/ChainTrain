module.exports = {
  "env": {
    "es6": true,
    "react-native/react-native": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:@typescript-eslint/recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "project": "./tsconfig.json",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-native",
    "@typescript-eslint"
  ],
  "rules": {
    "react/display-name": 0,
    "react/prop-types": 0,
    "@typescript-eslint/indent": ["error", 2]
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
};
