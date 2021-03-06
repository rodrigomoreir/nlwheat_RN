// module.exports = {
//   "env": {
//     "es6": true
//   },
//   "extends": [
//     "plugin:react/recommended",
//     "airbnb",
//     "plugin:@typescript-eslint/recommended"
//   ],
//   "globals": {
//     "Atomics": "readonly",
//     "SharedArrayBuffer": "readonly",
//     "__DEV__": "readonly"
//   },
//   "parser": "@typescript-eslint/parser",
//   "parserOptions": {
//     "ecmaFeatures": {
//       "jsx": true
//     },
//     "ecmaVersion": 2018,
//     "sourceType": "module"
//   },
//   "plugins": [
//     "react",
//     "@typescript-eslint",
//     "react-hooks"
//   ],
//   "rules": {
//     "react-hooks/rules-of-hooks": "error",
//     "react-hooks/exhaustive-deps": "warn",
//     "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
//     "import/extensions": [
//       "error",
//       "ignorePackages",
//       {
//         "ts": "never",
//         "tsx": "never"
//       }
//     ],
//     "import/prefer-default-export": "off",
//     semi: [2, 'never'],
//   },
//   "settings": {
//     "import/resolver": {
//       "typescript": {}
//     }
//   }
// };


module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'react-native/no-inline-styles': 'off',
    semi: [2, 'never'],
  },
}
