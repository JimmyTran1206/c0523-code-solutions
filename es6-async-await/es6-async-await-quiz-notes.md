# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?

  - used for asynchronous JS, literally a Promise in disguise

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?

  -without `try`/`catch`, `async` `await` only implement one phase of Promise, either Promise.then() or Promise.catch()

- When do you use `async`?

  - when the performed operatioin may takes time to execute, such as fetch data from an api

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)

  - use await with asynchoronous function . If await is sued on synchoronous function, the synchonous function will wait for all other asynchronous function above it to execute.

- How do you handle errors with `await`?

- use try/catch

- What do `try`, `catch` and `throw` do? When do you use them?

- with throw, the program will stop excution. with try/catch, the program continue to run past the error point.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?

- it will run immediately and the rejection will result in a error and stop execution.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?

- aysnc/await looks more synchronous to me.

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
