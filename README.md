# StringHelper-TypeScript
[![Publishing](https://github.com/enbock/String-Helper-TS/workflows/Publishing/badge.svg)](https://github.com/enbock/String-Helper-TS/actions)

A simple helper to work with strings in typescript.

## Testing
### Using this library in your project
This library is providing in [ECMAScript® 2020] language. When you use **jest**,
you get this error by using my library:
```text
  Details:
  
  <YOUR_PATH>/node_modules/@enbock/string-helper-ts/StringHelper.js:1
  export default class StringHelper {
  ^^^^^^
  
  SyntaxError: Unexpected token 'export'
      at compileFunction (vm.js:341:18)
```

See more: https://jestjs.io/docs/en/tutorial-react-native#transformignorepatterns-customization
#### Reason and solution
Jest running internally on **ES5**, that does not know the ES6-imports.
##### Force converting ES6+ Libraries
To solve this, you have to *exclude* all my libraries from the *exclusion-list*:
```
"transformIgnorePatterns": [
  "/node_modules/(?!(@enbock)/)"
]
```
##### Let babel "learn" ES6+
`babel.config.js`
```js
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript'
  ]
};
```
See more: https://github.com/facebook/jest#using-typescript
### Run tests
```shell script
yarn test
```

## Building
```shell script
yarn build
```


# Contributors
Umlaut-Conversion Code by: https://gist.github.com/yeah/1283961

[ECMAScript® 2020]:https://tc39.es/ecma262/
