# stdin-js

A library that provide a python like `input` function. Its async so it should be used within an async context.

## Example usage

```js
import { input, finish } from 'stdin-js';

async function main() {
    const name = input("What's your name?");
    console.log(`Hello, ${name}`);
}

main();
```

## Why?

To teach JavaScript like any other programming language out there you will use stdin sooner or later.

Who would want to take input like this?

```js
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name?  ", function(answer) {
   console.log("Hello " + answer);
   rl.close();
});
```
