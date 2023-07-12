# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?

- a component is mounted when it is successfully inserted to the DOM

- What is a React Effect?

- Effects are functionality we want to perform outside the scope of changing state/ using props.

- When should you use an Effect and when should you not use an Effect?

- If the action can be done by using props or changing state, we should not use effect.

- When do Effects run?

- Depends on the dependencies. Wihthout dependencies, useEffect runs when the component render/re-render.

- What function is used to declare an Effect?

- a callback synchronous function.

- What are Effect dependencies and how do you declare them?

- Dependencies indicate when the useEffect is triggered. We declared them by using an array [productId, userId] after the callback function.

- Why would you want to clean up from an Effect?

- To saves applications from unwanted behaviors like memory leaks by cleaning up effects

- How do you clean up from an Effect?

- return a function in the Effect callback function

- When does the cleanup function run?

- when there are changes in the dependancies array (switch effect)

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
