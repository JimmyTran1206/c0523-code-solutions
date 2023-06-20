# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?

const functionName=(parameter-list)=>{code blocks}

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?

it has an implicit return

- When using _concise body syntax_, how do you return an object literal?

use parentheses, example:

```js
const getObj = () => ({ name: 'Jimmy' });
```

- In the expression

  ```js
  foo(() => 42);
  ```

  - Identify the arrow function

  The arrow function is passed in as an argument for the fucntion foo(), ()=>42

  - How many arguments does the arrow function take?

  it takes no argument

  - What value does it return?

  it returns 42

  - How many arguments are passed to the function `foo`?

  1 argument

  - What type of argument is passed to the function `foo`?

  a callback function

- In the expression

  ```js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
  ```

  - Identify the arrow function

  (y) => {
  console.log(`4y = ${4 * y}`);
  }

  - How many arguments does the arrow function take?

  it takes one argument

  - What value does it return?

  it does not return any value (`undefined`)

  - How many arguments are passed to the function `bar`?

  1 argument

  - What type of argument is passed to the function `bar`?

  a callback function

  - When does the arrow function's code get executed?

  when the function bar() is called

- How does the value of `this` differ between standard functions and arrow functions?

in standard function, `this` refers to the entity that calls the function.

an arrow function, in essence, does not have `this`. In another word, without using bind, `this` in arrow function depends on the lexical scope of the entity calling the arrow function.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
