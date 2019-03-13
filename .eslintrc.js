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
    "SharedArrayBuffer": "readonly",
    "__filenamespace": false
  },
  "overrides": [
    {
      "env": {
        "jest": true
      },
      "files": ["**/__tests__/**/*.ts", "**/__tests__/**/*.tsx"],
      "plugins": [
        "jest"
      ],
      "rules": {
        "jest/no-alias-methods": "warn",
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/no-jest-import": "error",
        "jest/no-jasmine-globals": "warn",
        "jest/no-test-prefixes": "error",
        "jest/valid-describe": "error",
        "jest/valid-expect": "error",
        "jest/valid-expect-in-promise": "error"
      }
    }
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "project": "./tsconfig.json",
    "sourceType": "module",
    "useJSXTextNode": false
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
